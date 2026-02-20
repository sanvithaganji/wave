'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Avatar from '@/components/Avatar';
import BottomNav from '@/components/BottomNav';
import { HiOutlinePencil, HiOutlineLogout, HiOutlineShieldCheck, HiOutlineCalendar } from 'react-icons/hi';

export default function ProfilePage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProjectCount = async () => {
      if (!user) return;
      try {
        const q = query(collection(db, 'projects'), where('ownerId', '==', user.uid));
        const snap = await getDocs(q);
        setProjectCount(snap.size);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjectCount();
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/auth');
  };

  if (loading || !profile) {
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
      <div className="px-6 pt-12 pb-6 text-center">
        <div className="flex justify-center mb-4">
          <Avatar codeName={profile.codeName} size="xl" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{profile.codeName}</h1>
        <p className="text-xs text-gray-500 font-medium mt-1">
          {profile.isStudent ? 'Student' : 'Professional'} · {profile.college}
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">
            Rating: {profile.rating.toFixed(1)}
          </span>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">
            Score: {profile.score}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-gray-400">
          <HiOutlineCalendar />
          <span>Joined {new Date(profile.dateJoined).toLocaleDateString()}</span>
        </div>
      </div>

      {/* About */}
      <div className="px-6 mb-6">
        <p className="text-sm text-gray-600 text-center italic">
          &ldquo;{profile.aboutMe}&rdquo;
        </p>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Collabs', value: profile.collaborationCount },
            { label: 'Hackathons', value: profile.hackathons.length },
            { label: 'Projects', value: projectCount },
            { label: 'CGPA', value: profile.cgpa },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-3 text-center"
            >
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-[10px] text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="px-6 mb-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tech Skills</h3>
        <div className="flex flex-wrap gap-1.5">
          {profile.techSkills.map((skill, i) => (
            <span key={i} className="px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Non-Tech Skills</h3>
        <div className="flex flex-wrap gap-1.5">
          {profile.nonTechSkills.map((skill, i) => (
            <span key={i} className="px-3 py-1.5 border border-black text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Detailed Info */}
      <div className="px-6 mb-6 space-y-3">
        {profile.competitions.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Competitions</h3>
            <p className="text-sm text-gray-600">{profile.competitions.join(', ')}</p>
          </div>
        )}
        {profile.certifications.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Certifications</h3>
            <p className="text-sm text-gray-600">{profile.certifications.join(', ')}</p>
          </div>
        )}
        {profile.internships.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Internships</h3>
            <p className="text-sm text-gray-600">{profile.internships.join(', ')}</p>
          </div>
        )}
        {(profile.papers > 0 || profile.patents > 0) && (
          <div className="flex gap-4">
            {profile.papers > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Papers</h3>
                <p className="text-sm text-gray-600">{profile.papers}</p>
              </div>
            )}
            {profile.patents > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Patents</h3>
                <p className="text-sm text-gray-600">{profile.patents}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hidden Portfolio Indicator */}
      <div className="px-6 mb-6">
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <HiOutlineShieldCheck className="text-xl text-gray-400" />
          <div>
            <p className="text-xs font-bold">Hidden Portfolio</p>
            <p className="text-[10px] text-gray-400">
              {[profile.github, profile.linkedin, profile.codechef, profile.leetcode, profile.hackerrank].filter(Boolean).length} links connected
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 space-y-3">
        <button
          onClick={() => router.push('/projects/my')}
          className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl text-sm font-semibold"
        >
          <HiOutlineShieldCheck /> My Projects
        </button>
        <button
          onClick={() => router.push('/profile/edit')}
          className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-semibold hover:border-black transition-colors"
        >
          <HiOutlinePencil /> Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 text-sm font-medium hover:text-black transition-colors"
        >
          <HiOutlineLogout /> Sign Out
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
