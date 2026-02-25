'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

import { Project } from '@/lib/types';
import BottomNav from '@/components/BottomNav';
import { HiOutlineArrowLeft, HiOutlineExclamationCircle, HiOutlineUserGroup } from 'react-icons/hi';

export default function MyProjectsPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [ownedProjects, setOwnedProjects] = useState<Project[]>([]);
  const [joinedProjects, setJoinedProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchMyProjects = async () => {
      if (!user) return;
      const token = localStorage.getItem('waves_token');
      try {
        const res = await fetch('/api/projects/my', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed');
        const { owned, joined } = await res.json();
        setOwnedProjects(owned || []);
        setJoinedProjects(joined || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoadingProjects(false);
      }
    };
    fetchMyProjects();
  }, [user]);

  if (loading) {
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
          <h1 className="text-lg font-bold tracking-tight">My Projects</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 130px)' }}>
        {loadingProjects ? (
          <div className="flex justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <>
            {/* Owned Projects */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                My Projects
              </h2>
              {ownedProjects.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">No projects created yet</p>
              ) : (
                <div className="space-y-3">
                  {ownedProjects.map((project) => {
                    const pendingRequests = project.interestedUsers.filter(
                      uid => !project.approvedUsers.includes(uid)
                    ).length;
                    return (
                      <motion.button
                        key={project.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => router.push(`/projects/${project.id}`)}
                        className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-black transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-sm font-bold">{project.name}</h3>
                            <p className="text-xs text-gray-400 mt-0.5 capitalize">
                              {project.category} · {project.domain}
                            </p>
                          </div>
                          {pendingRequests > 0 && (
                            <span className="flex items-center gap-1 bg-black text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                              <HiOutlineExclamationCircle className="text-xs" />
                              {pendingRequests} new
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-2">
                          <HiOutlineUserGroup />
                          <span>{project.approvedUsers.length}/{project.teamSize} members</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Joined Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Joined Projects
              </h2>
              {joinedProjects.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">Haven&apos;t joined any projects yet</p>
              ) : (
                <div className="space-y-3">
                  {joinedProjects.map((project) => (
                    <motion.button
                      key={project.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => router.push(`/projects/${project.id}`)}
                      className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-black transition-all"
                    >
                      <h3 className="text-sm font-bold">{project.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        by {project.ownerCodeName} · {project.category}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-2">
                        <HiOutlineUserGroup />
                        <span>{project.approvedUsers.length}/{project.teamSize} members</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
