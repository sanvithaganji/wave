'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project, CATEGORIES, DOMAINS, ProjectCategory, ProjectDomain } from '@/lib/types';
import BottomNav from '@/components/BottomNav';
import ProjectCard from '@/components/ProjectCard';
import { HiOutlinePlus, HiOutlineArrowLeft, HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi';

type View = 'categories' | 'projects' | 'create';

export default function ProjectsPage() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [view, setView] = useState<View>('categories');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<ProjectDomain | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [interestedProjects, setInterestedProjects] = useState<Set<string>>(new Set());

  // Create project form
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    abstract: '',
    tags: '',
    category: 'software' as ProjectCategory,
    domain: 'healthcare' as ProjectDomain,
    isHackathon: false,
    isCompetition: false,
    teamSize: 4,
  });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const fetchProjects = async (category?: ProjectCategory, domain?: ProjectDomain) => {
    setLoadingProjects(true);
    try {
      let q;
      if (category && domain) {
        q = query(
          collection(db, 'projects'),
          where('category', '==', category),
          where('domain', '==', domain),
          where('status', '==', 'open')
        );
      } else if (category) {
        q = query(
          collection(db, 'projects'),
          where('category', '==', category),
          where('status', '==', 'open')
        );
      } else {
        q = query(collection(db, 'projects'), where('status', '==', 'open'));
      }
      const snap = await getDocs(q);
      const projectList = snap.docs.map(d => ({ id: d.id, ...d.data() } as Project));
      setProjects(projectList);

      // Find which projects user already expressed interest in
      if (user) {
        const interested = new Set<string>();
        projectList.forEach(p => {
          if (p.interestedUsers.includes(user.uid)) {
            interested.add(p.id);
          }
        });
        setInterestedProjects(interested);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleCategorySelect = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  const handleDomainSelect = (domain: ProjectDomain) => {
    setSelectedDomain(domain);
    fetchProjects(selectedCategory!, domain);
    setView('projects');
  };

  const handleShowAll = () => {
    if (selectedCategory) {
      fetchProjects(selectedCategory);
      setView('projects');
    }
  };

  const handleInterested = async (projectId: string) => {
    if (!user) return;
    try {
      await updateDoc(doc(db, 'projects', projectId), {
        interestedUsers: arrayUnion(user.uid),
      });
      setInterestedProjects(prev => new Set(prev).add(projectId));
    } catch (error) {
      console.error('Error marking interest:', error);
    }
  };

  const handleCreateProject = async () => {
    if (!user || !profile) return;
    setCreating(true);
    try {
      const projectData = {
        ownerId: user.uid,
        ownerCodeName: profile.codeName,
        name: newProject.name,
        description: newProject.description,
        abstract: newProject.abstract,
        tags: newProject.tags.split(',').map(t => t.trim()).filter(Boolean),
        category: newProject.category,
        domain: newProject.domain,
        isHackathon: newProject.isHackathon,
        isCompetition: newProject.isCompetition,
        interestedUsers: [],
        approvedUsers: [user.uid],
        teamSize: newProject.teamSize,
        createdAt: new Date().toISOString(),
        status: 'open',
      };
      await addDoc(collection(db, 'projects'), projectData);
      setView('categories');
      setNewProject({
        name: '', description: '', abstract: '', tags: '',
        category: 'software', domain: 'healthcare',
        isHackathon: false, isCompetition: false, teamSize: 4,
      });
    } catch (error) {
      console.error('Error creating project:', error);
    } finally {
      setCreating(false);
    }
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
      <AnimatePresence mode="wait">
        {/* Categories View */}
        {view === 'categories' && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page-transition"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
              <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold tracking-tight">Projects</h1>
                  <p className="text-xs text-gray-400 mt-0.5">Find or create collaborations</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('create')}
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"
                >
                  <HiOutlinePlus className="text-lg" />
                </motion.button>
              </div>
            </div>

            <div className="max-w-lg mx-auto px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 130px)' }}>
              {/* Category Section */}
              <div className="mb-8">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Type</h2>
                <div className="grid grid-cols-1 gap-3">
                  {CATEGORIES.map((cat, i) => (
                    <motion.button
                      key={cat.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategorySelect(cat.value)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all ${
                        selectedCategory === cat.value
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{cat.icon}</span>
                        <div>
                          <p className="font-semibold">{cat.label}</p>
                          <p className={`text-xs mt-0.5 ${selectedCategory === cat.value ? 'text-gray-300' : 'text-gray-400'}`}>
                            {cat.value === 'software' && 'Web, Mobile, AI/ML, Blockchain'}
                            {cat.value === 'hardware' && 'IoT, Robotics, Embedded Systems'}
                            {cat.value === 'non-technical' && 'Events, Marketing, Research'}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Domain Section - only show after category selection */}
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Domain</h2>
                    <button
                      onClick={handleShowAll}
                      className="text-xs font-medium text-black underline"
                    >
                      Show all
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {DOMAINS.map((domain, i) => (
                      <motion.button
                        key={domain.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDomainSelect(domain.value)}
                        className="p-4 rounded-xl border border-gray-200 text-left hover:border-black transition-all"
                      >
                        <span className="text-xl mb-2 block">{domain.icon}</span>
                        <p className="text-sm font-semibold">{domain.label}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Projects List View */}
        {view === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
              <div className="max-w-lg mx-auto px-6 py-4">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => { setView('categories'); setSelectedDomain(null); }}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <HiOutlineArrowLeft className="text-lg" />
                  </button>
                  <div>
                    <h1 className="text-lg font-bold tracking-tight capitalize">
                      {selectedCategory} {selectedDomain ? `· ${selectedDomain}` : ''}
                    </h1>
                    <p className="text-xs text-gray-400">{filteredProjects.length} projects</p>
                  </div>
                </div>
                {/* Search */}
                <div className="relative">
                  <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-black transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-lg mx-auto px-6 py-4 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 160px)' }}>
              {loadingProjects ? (
                <div className="flex justify-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                  />
                </div>
              ) : filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-sm">No projects found</p>
                  <p className="text-gray-300 text-xs mt-1">Be the first to create one!</p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onInterested={() => handleInterested(project.id)}
                    isInterested={interestedProjects.has(project.id)}
                  />
                ))
              )}
            </div>
          </motion.div>
        )}

        {/* Create Project View */}
        {view === 'create' && (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
              <div className="max-w-lg mx-auto px-6 py-4 flex items-center gap-3">
                <button
                  onClick={() => setView('categories')}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <HiOutlineArrowLeft className="text-lg" />
                </button>
                <h1 className="text-lg font-bold tracking-tight">New Project</h1>
              </div>
            </div>

            <div className="max-w-lg mx-auto px-6 py-6 space-y-5 overflow-y-auto pb-32" style={{ maxHeight: 'calc(100dvh - 80px)' }}>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Project Name
                </label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="My Awesome Project"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Description
                </label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="What is this project about?"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Problem Statement / Abstract
                </label>
                <textarea
                  value={newProject.abstract}
                  onChange={(e) => setNewProject({ ...newProject, abstract: e.target.value })}
                  placeholder="The problem you're solving..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    Category
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value as ProjectCategory })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors bg-white"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    Domain
                  </label>
                  <select
                    value={newProject.domain}
                    onChange={(e) => setNewProject({ ...newProject, domain: e.target.value as ProjectDomain })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors bg-white"
                  >
                    {DOMAINS.map(d => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newProject.tags}
                  onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                  placeholder="React, Machine Learning, IoT"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Team Size
                </label>
                <input
                  type="number"
                  value={newProject.teamSize}
                  onChange={(e) => setNewProject({ ...newProject, teamSize: parseInt(e.target.value) || 2 })}
                  min={2}
                  max={20}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setNewProject({ ...newProject, isHackathon: !newProject.isHackathon })}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    newProject.isHackathon ? 'bg-black text-white' : 'border border-gray-200 text-gray-500'
                  }`}
                >
                  Hackathon
                </button>
                <button
                  onClick={() => setNewProject({ ...newProject, isCompetition: !newProject.isCompetition })}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    newProject.isCompetition ? 'bg-black text-white' : 'border border-gray-200 text-gray-500'
                  }`}
                >
                  Competition
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleCreateProject}
                disabled={creating || !newProject.name || !newProject.description}
                className="w-full py-3.5 bg-black text-white rounded-xl text-sm font-semibold disabled:opacity-40 transition-opacity"
              >
                {creating ? 'Creating...' : 'Create Project'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
