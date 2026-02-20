'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { generateCodeName } from '@/lib/codenames';
import { motion } from 'framer-motion';
import { UserProfile } from '@/lib/types';

export default function EditProfilePage() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState({
    realName: '',
    email: '',
    techSkills: ['', '', '', '', ''],
    nonTechSkills: ['', '', ''],
    papers: 0,
    patents: 0,
    competitions: '',
    certifications: '',
    cgpa: 0,
    internships: '',
    age: 18,
    hackathons: '',
    github: '',
    linkedin: '',
    codechef: '',
    leetcode: '',
    hackerrank: '',
    college: '',
    aboutMe: '',
    isStudent: true,
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
    if (profile) {
      setForm({
        realName: profile.realName || '',
        email: profile.email || '',
        techSkills: [...(profile.techSkills || []), '', '', '', '', ''].slice(0, 5),
        nonTechSkills: [...(profile.nonTechSkills || []), '', '', ''].slice(0, 3),
        papers: profile.papers || 0,
        patents: profile.patents || 0,
        competitions: (profile.competitions || []).join(', '),
        certifications: (profile.certifications || []).join(', '),
        cgpa: profile.cgpa || 0,
        internships: (profile.internships || []).join(', '),
        age: profile.age || 18,
        hackathons: (profile.hackathons || []).join(', '),
        github: profile.github || '',
        linkedin: profile.linkedin || '',
        codechef: profile.codechef || '',
        leetcode: profile.leetcode || '',
        hackerrank: profile.hackerrank || '',
        college: profile.college || '',
        aboutMe: profile.aboutMe || '',
        isStudent: profile.isStudent ?? true,
      });
    }
  }, [user, profile, loading, router]);

  const steps = [
    { title: 'Basics', subtitle: 'Hidden from others' },
    { title: 'Skills', subtitle: 'What you bring' },
    { title: 'Experience', subtitle: 'Your track record' },
    { title: 'Portfolio', subtitle: 'Hidden links' },
    { title: 'About', subtitle: 'Your public face' },
  ];

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);

    try {
      const codeName = profile?.codeName || generateCodeName();
      const userData: UserProfile = {
        uid: user.uid,
        codeName,
        email: form.email,
        phone: user.phoneNumber || '',
        realName: form.realName,
        techSkills: form.techSkills.filter(Boolean),
        nonTechSkills: form.nonTechSkills.filter(Boolean),
        projects: profile?.projects || [],
        papers: form.papers,
        patents: form.patents,
        competitions: form.competitions.split(',').map(s => s.trim()).filter(Boolean),
        certifications: form.certifications.split(',').map(s => s.trim()).filter(Boolean),
        cgpa: form.cgpa,
        internships: form.internships.split(',').map(s => s.trim()).filter(Boolean),
        age: form.age,
        hackathons: form.hackathons.split(',').map(s => s.trim()).filter(Boolean),
        collaborationCount: profile?.collaborationCount || 0,
        github: form.github,
        linkedin: form.linkedin,
        codechef: form.codechef,
        leetcode: form.leetcode,
        hackerrank: form.hackerrank,
        college: form.college,
        aboutMe: form.aboutMe,
        rating: profile?.rating || 5.0,
        score: profile?.score || 0,
        reports: profile?.reports || [],
        dateJoined: profile?.dateJoined || new Date().toISOString(),
        isActive: true,
        isStudent: form.isStudent,
        profileCompleted: true,
      };

      await setDoc(doc(db, 'users', user.uid), userData);
      await refreshProfile();
      router.push('/swipe');
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateTechSkill = (index: number, value: string) => {
    const newSkills = [...form.techSkills];
    newSkills[index] = value;
    setForm({ ...form, techSkills: newSkills });
  };

  const updateNonTechSkill = (index: number, value: string) => {
    const newSkills = [...form.nonTechSkills];
    newSkills[index] = value;
    setForm({ ...form, nonTechSkills: newSkills });
  };

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100">
        <div className="max-w-lg mx-auto px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">
            {profile?.profileCompleted ? 'Edit Profile' : 'Create Profile'}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {steps[currentStep].subtitle}
          </p>
        </div>
        {/* Progress bar */}
        <div className="max-w-lg mx-auto px-6 pb-3 flex gap-1.5">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= currentStep ? 'bg-black' : 'bg-gray-200'
              }`}
              initial={false}
              animate={{
                backgroundColor: i <= currentStep ? '#000' : '#e5e7eb',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="max-w-lg mx-auto px-6 py-6 pb-32 overflow-y-auto" style={{ maxHeight: 'calc(100dvh - 120px)' }}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Basics */}
          {currentStep === 0 && (
            <div className="space-y-5">
              <p className="text-xs text-gray-400 mb-4">
                This info is kept private and never shown to other users.
              </p>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.realName}
                  onChange={(e) => setForm({ ...form, realName: e.target.value })}
                  placeholder="Your real name (hidden)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com (hidden)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Age
                </label>
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) || 18 })}
                  min={16}
                  max={60}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Role
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setForm({ ...form, isStudent: true })}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                      form.isStudent
                        ? 'bg-black text-white'
                        : 'border border-gray-200 text-gray-500'
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setForm({ ...form, isStudent: false })}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                      !form.isStudent
                        ? 'bg-black text-white'
                        : 'border border-gray-200 text-gray-500'
                    }`}
                  >
                    Professional
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  College / Organization
                </label>
                <input
                  type="text"
                  value={form.college}
                  onChange={(e) => setForm({ ...form, college: e.target.value })}
                  placeholder="Your college or organization"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 1: Skills */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
                  Tech Skills (up to 5)
                </label>
                <div className="space-y-2">
                  {form.techSkills.map((skill, i) => (
                    <input
                      key={i}
                      type="text"
                      value={skill}
                      onChange={(e) => updateTechSkill(i, e.target.value)}
                      placeholder={`Tech skill ${i + 1}`}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
                  Non-Tech Skills (up to 3)
                </label>
                <div className="space-y-2">
                  {form.nonTechSkills.map((skill, i) => (
                    <input
                      key={i}
                      type="text"
                      value={skill}
                      onChange={(e) => updateNonTechSkill(i, e.target.value)}
                      placeholder={`Non-tech skill ${i + 1}`}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Experience */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    CGPA
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={form.cgpa}
                    onChange={(e) => setForm({ ...form, cgpa: parseFloat(e.target.value) || 0 })}
                    placeholder="8.5"
                    min={0}
                    max={10}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    Papers
                  </label>
                  <input
                    type="number"
                    value={form.papers}
                    onChange={(e) => setForm({ ...form, papers: parseInt(e.target.value) || 0 })}
                    min={0}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    Patents
                  </label>
                  <input
                    type="number"
                    value={form.patents}
                    onChange={(e) => setForm({ ...form, patents: parseInt(e.target.value) || 0 })}
                    min={0}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Competitions (comma separated)
                </label>
                <input
                  type="text"
                  value={form.competitions}
                  onChange={(e) => setForm({ ...form, competitions: e.target.value })}
                  placeholder="Smart India Hackathon, Google DSC"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Certifications (comma separated)
                </label>
                <input
                  type="text"
                  value={form.certifications}
                  onChange={(e) => setForm({ ...form, certifications: e.target.value })}
                  placeholder="AWS, Google Cloud, etc."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Internships (comma separated)
                </label>
                <input
                  type="text"
                  value={form.internships}
                  onChange={(e) => setForm({ ...form, internships: e.target.value })}
                  placeholder="Google, Microsoft, Startup XYZ"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Hackathons (comma separated)
                </label>
                <input
                  type="text"
                  value={form.hackathons}
                  onChange={(e) => setForm({ ...form, hackathons: e.target.value })}
                  placeholder="HackMIT, ETHIndia, etc."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 3: Portfolio (Hidden) */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <p className="text-xs text-gray-400 mb-2">
                These links are hidden and only used to calculate your score.
              </p>
              {[
                { label: 'GitHub', key: 'github', placeholder: 'github.com/username' },
                { label: 'LinkedIn', key: 'linkedin', placeholder: 'linkedin.com/in/username' },
                { label: 'CodeChef', key: 'codechef', placeholder: 'codechef.com/users/username' },
                { label: 'LeetCode', key: 'leetcode', placeholder: 'leetcode.com/username' },
                { label: 'HackerRank', key: 'hackerrank', placeholder: 'hackerrank.com/username' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                    {field.label}
                  </label>
                  <input
                    type="url"
                    value={form[field.key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 4: About */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  About Me (20 words max)
                </label>
                <textarea
                  value={form.aboutMe}
                  onChange={(e) => {
                    const words = e.target.value.split(/\s+/).filter(Boolean);
                    if (words.length <= 20) {
                      setForm({ ...form, aboutMe: e.target.value });
                    }
                  }}
                  placeholder="Passionate developer who loves building things that matter..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors resize-none"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  {form.aboutMe.split(/\s+/).filter(Boolean).length}/20 words
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Your Anonymous Identity
                </h3>
                <p className="text-lg font-bold">
                  {profile?.codeName || '✨ Will be auto-generated'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  This code name is your identity on the platform. No one sees your real name.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-bottom">
        <div className="max-w-lg mx-auto flex gap-3">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold transition-colors hover:border-black"
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex-1 py-3 bg-black text-white rounded-xl text-sm font-semibold"
            >
              Next
            </button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={saving}
              className="flex-1 py-3 bg-black text-white rounded-xl text-sm font-semibold disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Profile'}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
