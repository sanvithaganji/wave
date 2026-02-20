'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, getDocs, addDoc, doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { UserProfile } from '@/lib/types';
import SwipeCard from '@/components/SwipeCard';
import BottomNav from '@/components/BottomNav';
import { HiOutlineFilter, HiOutlineRefresh } from 'react-icons/hi';

export default function SwipePage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingProfiles, setLoadingProfiles] = useState(true);
  const [showMatch, setShowMatch] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    college: '',
    skill: '',
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const fetchProfiles = useCallback(async () => {
    if (!user) return;
    setLoadingProfiles(true);
    try {
      // Get already swiped profiles
      const swipesSnap = await getDocs(
        query(collection(db, 'swipes'), where('swiperId', '==', user.uid))
      );
      const swipedIds = new Set(swipesSnap.docs.map(d => d.data().swipedId));
      swipedIds.add(user.uid); // exclude self

      // Get all active profiles
      const profilesSnap = await getDocs(
        query(collection(db, 'users'), where('profileCompleted', '==', true), where('isActive', '==', true))
      );

      let allProfiles = profilesSnap.docs
        .map(d => d.data() as UserProfile)
        .filter(p => !swipedIds.has(p.uid));

      // Apply filters
      if (filters.college) {
        allProfiles = allProfiles.filter(p =>
          p.college.toLowerCase().includes(filters.college.toLowerCase())
        );
      }
      if (filters.skill) {
        allProfiles = allProfiles.filter(p =>
          [...p.techSkills, ...p.nonTechSkills].some(s =>
            s.toLowerCase().includes(filters.skill.toLowerCase())
          )
        );
      }

      // Shuffle for personalized feed
      allProfiles.sort(() => Math.random() - 0.5);
      setProfiles(allProfiles);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoadingProfiles(false);
    }
  }, [user, filters]);

  useEffect(() => {
    if (user && profile) {
      fetchProfiles();
    }
  }, [user, profile, fetchProfiles]);

  const handleSwipe = async (direction: 'left' | 'right') => {
    if (!user || !profile || currentIndex >= profiles.length) return;

    const swipedProfile = profiles[currentIndex];

    // Record the swipe
    try {
      await addDoc(collection(db, 'swipes'), {
        swiperId: user.uid,
        swipedId: swipedProfile.uid,
        direction,
        timestamp: new Date().toISOString(),
      });

      // If right swipe, check for mutual match
      if (direction === 'right') {
        const reverseSwipeSnap = await getDocs(
          query(
            collection(db, 'swipes'),
            where('swiperId', '==', swipedProfile.uid),
            where('swipedId', '==', user.uid),
            where('direction', '==', 'right')
          )
        );

        if (!reverseSwipeSnap.empty) {
          // MUTUAL MATCH!
          const chatId = [user.uid, swipedProfile.uid].sort().join('_');

          // Create chat
          await setDoc(doc(db, 'chats', chatId), {
            id: chatId,
            type: 'individual',
            participants: [user.uid, swipedProfile.uid],
            participantNames: {
              [user.uid]: profile.codeName,
              [swipedProfile.uid]: swipedProfile.codeName,
            },
            lastMessage: 'You matched! Start chatting.',
            lastMessageAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
          });

          // Create match record
          await addDoc(collection(db, 'matches'), {
            user1: user.uid,
            user2: swipedProfile.uid,
            user1CodeName: profile.codeName,
            user2CodeName: swipedProfile.codeName,
            chatId,
            createdAt: new Date().toISOString(),
          });

          // Update collaboration counts
          await updateDoc(doc(db, 'users', user.uid), {
            collaborationCount: increment(1),
          });
          await updateDoc(doc(db, 'users', swipedProfile.uid), {
            collaborationCount: increment(1),
          });

          // System message in chat
          await addDoc(collection(db, 'messages'), {
            chatId,
            senderId: 'system',
            senderCodeName: 'System',
            text: `${profile.codeName} and ${swipedProfile.codeName} matched! Start collaborating.`,
            timestamp: new Date().toISOString(),
            type: 'system',
          });

          setShowMatch(swipedProfile.codeName);
          setTimeout(() => setShowMatch(null), 3000);
        }
      }
    } catch (error) {
      console.error('Error recording swipe:', error);
    }

    // Move to next profile
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 300);
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
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Discover</h1>
            <p className="text-xs text-gray-400 mt-0.5">Swipe to connect</p>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowFilters(!showFilters)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                showFilters ? 'bg-black text-white' : 'border border-gray-200 hover:border-black'
              }`}
            >
              <HiOutlineFilter className="text-lg" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={fetchProfiles}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition-colors"
            >
              <HiOutlineRefresh className="text-lg" />
            </motion.button>
          </div>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="max-w-lg mx-auto px-6 pb-4 flex gap-2">
                <input
                  type="text"
                  value={filters.college}
                  onChange={(e) => setFilters({ ...filters, college: e.target.value })}
                  placeholder="Filter by college"
                  className="flex-1 px-3 py-2 bg-gray-50 rounded-lg text-xs focus:bg-white focus:ring-1 focus:ring-black transition-all"
                />
                <input
                  type="text"
                  value={filters.skill}
                  onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
                  placeholder="Filter by skill"
                  className="flex-1 px-3 py-2 bg-gray-50 rounded-lg text-xs focus:bg-white focus:ring-1 focus:ring-black transition-all"
                />
                <button
                  onClick={fetchProfiles}
                  className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Swipe Area */}
      <div className="max-w-lg mx-auto px-6 pt-4">
        <div className="relative" style={{ height: 'calc(100dvh - 200px)' }}>
          {loadingProfiles ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"
              />
            </div>
          ) : currentIndex >= profiles.length ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-6xl mb-4">🌊</p>
                <p className="text-lg font-bold">No more profiles</p>
                <p className="text-sm text-gray-400 mt-1">Check back later for new people</p>
                <button
                  onClick={fetchProfiles}
                  className="mt-6 px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold"
                >
                  Refresh
                </button>
              </motion.div>
            </div>
          ) : (
            <>
              {/* Background card */}
              {currentIndex + 1 < profiles.length && (
                <SwipeCard
                  key={profiles[currentIndex + 1].uid}
                  profile={profiles[currentIndex + 1]}
                  onSwipe={() => {}}
                  isTop={false}
                />
              )}
              {/* Top card */}
              <SwipeCard
                key={profiles[currentIndex].uid}
                profile={profiles[currentIndex]}
                onSwipe={handleSwipe}
                isTop={true}
              />
            </>
          )}
        </div>
      </div>

      {/* Match Overlay */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setShowMatch(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-8 mx-6 text-center"
            >
              <p className="text-5xl mb-4">🤝</p>
              <h2 className="text-2xl font-black tracking-tight mb-2">It&apos;s a Match!</h2>
              <p className="text-sm text-gray-500 mb-6">
                You and <span className="font-bold text-black">{showMatch}</span> both want to collaborate
              </p>
              <button
                onClick={() => { setShowMatch(null); router.push('/chat'); }}
                className="w-full py-3 bg-black text-white rounded-xl text-sm font-semibold"
              >
                Start Chatting
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
