'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { HiOutlineUserGroup, HiOutlineLightningBolt, HiOutlineAcademicCap } from 'react-icons/hi';

interface ProjectCardProps {
  project: Project;
  onInterested: () => void;
  isInterested: boolean;
}

export default function ProjectCard({ project, onInterested, isInterested }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-200 rounded-2xl p-5 mb-3"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            by {project.ownerCodeName}
          </p>
        </div>
        <div className="flex gap-1.5">
          {project.isHackathon && (
            <span className="flex items-center gap-1 bg-black text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
              <HiOutlineLightningBolt className="text-xs" /> Hackathon
            </span>
          )}
          {project.isCompetition && (
            <span className="flex items-center gap-1 bg-gray-800 text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
              <HiOutlineAcademicCap className="text-xs" /> Competition
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{project.description}</p>

      {/* Abstract */}
      {project.abstract && (
        <div className="bg-gray-50 rounded-xl p-3 mb-3">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Problem Statement</p>
          <p className="text-xs text-gray-600 line-clamp-3">{project.abstract}</p>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="px-2.5 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-wider rounded-full">
          {project.category}
        </span>
        <span className="px-2.5 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-wider rounded-full">
          {project.domain}
        </span>
        {project.tags.map((tag, i) => (
          <span key={i} className="px-2.5 py-1 border border-gray-200 text-[10px] font-medium rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <HiOutlineUserGroup />
          <span>{project.approvedUsers.length}/{project.teamSize} members</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onInterested}
          disabled={isInterested}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            isInterested
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800 active:bg-gray-900'
          }`}
        >
          {isInterested ? 'Requested' : "I'm Interested"}
        </motion.button>
      </div>
    </motion.div>
  );
}
