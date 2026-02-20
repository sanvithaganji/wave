'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  addDoc,
  collection,
  increment,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project, UserProfile } from '@/lib/types';
import BottomNav from '@/components/BottomNav';
import Avatar from '@/components/Avatar';
import { HiOutlineArrowLeft, HiOutlineCheck, HiOutlineX, HiOutlineUserGroup, HiOutlineChat } from 'react-icons/hi';

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
      try {
        const projectDoc = await getDoc(doc(db, 'projects', projectId));
        if (projectDoc.exists()) {
          const projectData = { id: projectDoc.id, ...projectDoc.data() } as Project;
          setProject(projectData);

          // Fetch interested users
          const interestedProfiles: UserProfile[] = [];
          for (const uid of projectData.interestedUsers) {
            if (!projectData.approvedUsers.includes(uid)) {
              const userDoc = await getDoc(doc(db, 'users', uid));
              if (userDoc.exists()) {
                interestedProfiles.push(userDoc.data() as UserProfile);
              }
            }
          }
          setInterestedUsers(interestedProfiles);

          // Fetch approved users
          const approvedProfiles: UserProfile[] = [];
          for (const uid of projectData.approvedUsers) {
            const userDoc = await getDoc(doc(db, 'users', uid));
            if (userDoc.exists()) {
              approvedProfiles.push(userDoc.data() as UserProfile);
            }
          }
          setApprovedUsers(approvedProfiles);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoadingProject(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleApprove = async (userId: string) => {
    if (!project || !profile || !user) return;
    try {
      await updateDoc(doc(db, 'projects', project.id), {
        approvedUsers: arrayUnion(userId),
      });

      // Create or update group chat
      const chatId = `project_${project.id}`;
      const chatDoc = await getDoc(doc(db, 'chats', chatId));

      const approvedUser = interestedUsers.find(u => u.uid === userId);
      const newParticipantNames: Record<string, string> = {};
      if (approvedUser) {
        newParticipantNames[userId] = approvedUser.codeName;
      }

      if (chatDoc.exists()) {
        await updateDoc(doc(db, 'chats', chatId), {
          participants: arrayUnion(userId),
          [`participantNames.${userId}`]: approvedUser?.codeName || 'Unknown',
          lastMessage: `${approvedUser?.codeName || 'Someone'} joined the project!`,
          lastMessageAt: new Date().toISOString(),
        });
      } else {
        const allParticipants = [...project.approvedUsers, userId];
        const participantNames: Record<string, string> = {};
        for (const u of approvedUsers) {
          participantNames[u.uid] = u.codeName;
        }
        if (approvedUser) {
          participantNames[userId] = approvedUser.codeName;
        }
        participantNames[user.uid] = profile.codeName;

        await setDoc(doc(db, 'chats', chatId), {
          id: chatId,
          type: 'group',
          participants: allParticipants,
          participantNames,
          projectId: project.id,
          projectName: project.name,
          lastMessage: `Group created for ${project.name}`,
          lastMessageAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
      }

      // System message
      await addDoc(collection(db, 'messages'), {
        chatId,
        senderId: 'system',
        senderCodeName: 'System',
        text: `${approvedUser?.codeName || 'A new member'} has been approved to join ${project.name}!`,
        timestamp: new Date().toISOString(),
        type: 'system',
      });

      // Update collaboration count for the approved user
      await updateDoc(doc(db, 'users', userId), {
        collaborationCount: increment(1),
      });

      // Update local state
      setInterestedUsers(prev => prev.filter(u => u.uid !== userId));
      if (approvedUser) setApprovedUsers(prev => [...prev, approvedUser]);
    } catch (error) {
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (userId: string) => {
    if (!project) return;
    try {
      await updateDoc(doc(db, 'projects', project.id), {
        interestedUsers: arrayRemove(userId),
      });
      setInterestedUsers(prev => prev.filter(u => u.uid !== userId));
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  if (loadingProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-400">Project not found</p>
      </div>
    );
  }

  const isOwner = user?.uid === project.ownerId;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <HiOutlineArrowLeft className="text-lg" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold tracking-tight">{project.name}</h1>
            <p className="text-xs text-gray-400">by {project.ownerCodeName}</p>
          </div>
          {project.approvedUsers.length > 1 && (
            <button
              onClick={() => router.push(`/chat/project_${project.id}`)}
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center"
            >
              <HiOutlineChat className="text-sm" />
            </button>
          )}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 130px)' }}>
        {/* Project Info */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-3">{project.description}</p>
          {project.abstract && (
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Problem Statement</p>
              <p className="text-xs text-gray-600">{project.abstract}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="px-2.5 py-1 bg-black text-white text-[10px] font-bold uppercase rounded-full">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase rounded-full">
              {project.domain}
            </span>
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 border border-gray-200 text-[10px] font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <HiOutlineUserGroup />
            <span>{project.approvedUsers.length}/{project.teamSize} members</span>
          </div>
        </div>

        {/* Approved Team */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Team</h2>
          <div className="space-y-2">
            {approvedUsers.map((u) => (
              <div key={u.uid} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Avatar codeName={u.codeName} size="sm" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{u.codeName}</p>
                  <p className="text-[10px] text-gray-400">{u.techSkills.slice(0, 3).join(' · ')}</p>
                </div>
                {u.uid === project.ownerId && (
                  <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full">Owner</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interested Users (only visible to owner) */}
        {isOwner && interestedUsers.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Requests ({interestedUsers.length})
            </h2>
            <div className="space-y-3">
              {interestedUsers.map((u) => (
                <motion.div
                  key={u.uid}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl"
                >
                  <Avatar codeName={u.codeName} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{u.codeName}</p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {u.techSkills.slice(0, 3).join(' · ')}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">
                        {u.rating.toFixed(1)} rating
                      </span>
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">
                        {u.collaborationCount} collabs
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleReject(u.uid)}
                      className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
                    >
                      <HiOutlineX className="text-gray-400" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleApprove(u.uid)}
                      className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center"
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

      <BottomNav />
    </div>
  );
}
