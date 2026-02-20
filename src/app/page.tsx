'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth');
      } else if (!profile?.profileCompleted) {
        router.push('/profile/edit');
      } else {
        router.push('/swipe');
      }
    }
  }, [user, profile, loading, router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-black tracking-tighter mb-3">waves</h1>
        <p className="text-sm text-gray-400 font-medium">connect · collaborate · create</p>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mx-auto mt-8"
        />
      </motion.div>
    </div>
  );
}
