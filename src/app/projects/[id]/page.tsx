'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Project, UserProfile } from '@/lib/types';
import Avatar from '@/components/Avatar';
import {
  HiOutlineArrowLeft,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineUserGroup,
  HiOutlineChat,
  HiOutlineClipboardList,
  HiOutlineTag,
  HiOutlineGlobe,
} from 'react-icons/hi';

export default function ProjectDetailPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [interestedUsers, setInterestedUsers] = useState<UserProfile[]>([]);
  const [approvedUsers, setApprovedUsers] = useState<UserProfile[]>([]);
  const [loadingProject, setLoadingProject] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      const token = localStorage.getItem('waves_token');
      try {
        const res = await fetch(`/api/projects/${projectId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setProject(data.project);
        setInterestedUsers(data.interestedProfiles || []);
        setApprovedUsers(data.approvedProfiles || []);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoadingProject(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleApprove = async (userId: string) => {
    if (!project) return;
    const token = localStorage.getItem('waves_token');
    try {
      await fetch(`/api/projects/${project.id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ userId }),
      });
      const approvedUser = interestedUsers.find(u => u.uid === userId);
      setInterestedUsers(prev => prev.filter(u => u.uid !== userId));
      if (approvedUser) setApprovedUsers(prev => [...prev, approvedUser]);
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (userId: string) => {
    if (!project) return;
    const token = localStorage.getItem('waves_token');
    try {
      await fetch(`/api/projects/${project.id}/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ userId }),
      });
      setInterestedUsers(prev => prev.filter(u => u.uid !== userId));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  if (loadingProject) {
    return (
      <div className="pd-loading">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="pd-spinner"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pd-loading">
        <p style={{ color: 'var(--subtle)', fontSize: 14 }}>Project not found</p>
      </div>
    );
  }

  const isOwner = user?.uid === project.ownerId;
  const memberProgress = project.approvedUsers.length / project.teamSize;

  return (
    <div className="pd-wrap slide-up">
      {/* Back button row */}
      <div className="pd-back-row">
        <button className="pd-back-btn" onClick={() => router.back()}>
          <HiOutlineArrowLeft />
          <span>Back</span>
        </button>
        {project.approvedUsers.length > 1 && (
          <button
            className="pd-chat-btn"
            onClick={() => router.push(`/chat/project_${project.id}`)}
          >
            <HiOutlineChat />
            <span>Team Chat</span>
          </button>
        )}
      </div>

      {/* Hero section */}
      <div className="pd-hero">
        <h1 className="pd-name">{project.name}</h1>
        <p className="pd-owner">by {project.ownerCodeName}</p>
      </div>

      {/* Description */}
      <p className="pd-desc">{project.description}</p>

      {/* Problem statement */}
      {project.abstract && (
        <div className="pd-abstract">
          <div className="pd-abstract-label">
            <HiOutlineClipboardList />
            <span>Problem Statement</span>
          </div>
          <p className="pd-abstract-text">{project.abstract}</p>
        </div>
      )}

      {/* Tags & Meta */}
      <div className="pd-meta-section">
        <div className="pd-badges">
          <span className="pd-badge primary">
            <HiOutlineTag style={{ fontSize: 12 }} />
            {project.category}
          </span>
          <span className="pd-badge secondary">
            <HiOutlineGlobe style={{ fontSize: 12 }} />
            {project.domain}
          </span>
        </div>
        <div className="pd-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="pd-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Members progress */}
      <div className="pd-members-bar">
        <div className="pd-members-info">
          <HiOutlineUserGroup />
          <span>{project.approvedUsers.length} / {project.teamSize} members</span>
        </div>
        <div className="pd-progress-track">
          <div
            className="pd-progress-fill"
            style={{ width: `${Math.min(memberProgress * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Team */}
      <div className="pd-section">
        <h2 className="pd-section-title">Team</h2>
        <div className="pd-team-list">
          {approvedUsers.map((u) => (
            <div key={u.uid} className="pd-team-card">
              <Avatar codeName={u.codeName} size="sm" />
              <div className="pd-team-info">
                <p className="pd-team-name">{u.codeName}</p>
                <p className="pd-team-skills">{u.techSkills.slice(0, 3).join(' · ')}</p>
              </div>
              {u.uid === project.ownerId && (
                <span className="pd-owner-badge">Owner</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Requests (owner only) */}
      {isOwner && interestedUsers.length > 0 && (
        <div className="pd-section">
          <h2 className="pd-section-title">
            Requests
            <span className="pd-request-count">{interestedUsers.length}</span>
          </h2>
          <div className="pd-request-list">
            {interestedUsers.map((u) => (
              <motion.div
                key={u.uid}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="pd-request-card"
              >
                <Avatar codeName={u.codeName} size="md" />
                <div className="pd-request-info">
                  <p className="pd-request-name">{u.codeName}</p>
                  <p className="pd-request-skills">
                    {u.techSkills.slice(0, 3).join(' · ')}
                  </p>
                  <div className="pd-request-stats">
                    <span className="pd-stat">★ {u.rating.toFixed(1)}</span>
                    <span className="pd-stat">{u.collaborationCount} collabs</span>
                  </div>
                </div>
                <div className="pd-request-actions">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleReject(u.uid)}
                    className="pd-action-btn reject"
                  >
                    <HiOutlineX />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleApprove(u.uid)}
                    className="pd-action-btn approve"
                  >
                    <HiOutlineCheck />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
