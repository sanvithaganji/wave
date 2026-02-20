'use client';

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { useState } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import Avatar from './Avatar';
import { UserProfile } from '@/lib/types';

interface SwipeCardProps {
  profile: UserProfile;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
}

export default function SwipeCard({ profile, onSwipe, isTop }: SwipeCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0.5, 1, 1, 1, 0.5]);
  const acceptOpacity = useTransform(x, [0, 100, 200], [0, 0.5, 1]);
  const rejectOpacity = useTransform(x, [-200, -100, 0], [1, 0.5, 0]);
  const scale = useTransform(x, [-300, 0, 300], [0.95, 1, 0.95]);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      setExitDirection('right');
      onSwipe('right');
    } else if (info.offset.x < -threshold) {
      setExitDirection('left');
      onSwipe('left');
    }
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    setExitDirection(direction);
    onSwipe(direction);
  };

  if (!isTop) {
    return (
      <motion.div
        className="absolute inset-0 bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
        style={{ scale: 0.95, y: 10 }}
      />
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing no-select"
      style={{ x, rotate, opacity, scale }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      animate={
        exitDirection
          ? { x: exitDirection === 'right' ? 500 : -500, opacity: 0, rotate: exitDirection === 'right' ? 30 : -30 }
          : {}
      }
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Accept/Reject Overlays */}
      <motion.div
        className="absolute top-8 left-8 z-10 border-4 border-black rounded-xl px-4 py-2 -rotate-12"
        style={{ opacity: acceptOpacity }}
      >
        <span className="text-2xl font-black text-black tracking-wider">YES</span>
      </motion.div>
      <motion.div
        className="absolute top-8 right-8 z-10 border-4 border-gray-400 rounded-xl px-4 py-2 rotate-12"
        style={{ opacity: rejectOpacity }}
      >
        <span className="text-2xl font-black text-gray-400 tracking-wider">NOPE</span>
      </motion.div>

      {/* Card Content */}
      <div className="h-full bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 pb-4">
          <Avatar codeName={profile.codeName} size="lg" />
          <div>
            <h2 className="text-xl font-bold tracking-tight">{profile.codeName}</h2>
            <p className="text-xs text-gray-500 font-medium">
              {profile.isStudent ? 'Student' : 'Professional'} · {profile.college}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                Rating: {profile.rating.toFixed(1)}
              </span>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                Score: {profile.score}
              </span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="px-6 pb-3">
          <p className="text-sm text-gray-600 italic">&ldquo;{profile.aboutMe}&rdquo;</p>
        </div>

        {/* Tech Skills */}
        <div className="px-6 pb-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tech Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {profile.techSkills.slice(0, 5).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Non-Tech Skills */}
        <div className="px-6 pb-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Non-Tech Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {profile.nonTechSkills.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-black text-black text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 pb-4 flex-1">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold">{profile.collaborationCount}</p>
              <p className="text-[10px] text-gray-500 font-medium">Collabs</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold">{profile.hackathons.length}</p>
              <p className="text-[10px] text-gray-500 font-medium">Hackathons</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold">{profile.cgpa}</p>
              <p className="text-[10px] text-gray-500 font-medium">CGPA</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-8 p-6 pt-2">
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleButtonSwipe('left')}
            className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors hover:border-gray-500"
          >
            <HiX className="text-2xl text-gray-400" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleButtonSwipe('right')}
            className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-colors hover:bg-black hover:text-white group"
          >
            <HiCheck className="text-2xl text-black group-hover:text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
