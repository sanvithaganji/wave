'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { generateCodeName } from '@/lib/codenames';
import { motion } from 'framer-motion';
import { UserProfile } from '@/lib/types';
import { calculateScore } from '@/lib/scoreUtils';

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
      const token = localStorage.getItem('waves_token');
      if (!token) { router.push('/auth'); return; }

      const codeName = profile?.codeName || generateCodeName();
      const userData: UserProfile = {
        uid: user.uid,
        codeName,
        email: form.email,
        phone: '',
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
        score: 0, // placeholder — calculated below
        reports: profile?.reports || [],
        dateJoined: profile?.dateJoined || new Date().toISOString(),
        isActive: true,
        isStudent: form.isStudent,
        profileCompleted: true,
      };

      userData.score = calculateScore(userData);

      const res = await fetch(`/api/users/${user.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error('Error saving profile:', data.error);
        return;
      }

      await refreshProfile();
      const isFirstTime = !profile?.interviewCompleted;
      router.push(isFirstTime ? '/interview' : '/swipe');
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
      <div style={{ height: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          style={{ width: 32, height: 32, border: '2px solid var(--subtle)', borderTopColor: 'transparent', borderRadius: '50%' }}
        />
      </div>
    );
  }

  const labelStyle = { fontSize: 10, textTransform: 'uppercase' as const, letterSpacing: 1.5, color: 'var(--muted)', marginBottom: 8, fontWeight: 500, display: 'block' };
  const inputStyle = {
    width: '100%', background: 'var(--dark)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '12px 16px', color: 'var(--white)',
    fontSize: 14, fontFamily: 'var(--sans)', outline: 'none', transition: 'border-color 0.2s'
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--black)', color: 'var(--white)',
      fontFamily: 'var(--sans)'
    }}>
      {/* Header */}
      <div style={{ position: 'sticky', top: 0, background: 'var(--black)', zIndex: 10, borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 430, margin: '0 auto', padding: '24px 24px 16px' }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--pure)', letterSpacing: -0.5, marginBottom: 4 }}>
            {profile?.profileCompleted ? 'Edit Profile' : 'Onboarding'}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--subtle)' }}>
            {steps[currentStep].subtitle}
          </p>

          {/* Progress bar */}
          <div style={{ display: 'flex', gap: 6, marginTop: 20 }}>
            {steps.map((_, i) => (
              <motion.div
                key={i}
                style={{ height: 4, flex: 1, borderRadius: 2 }}
                initial={false}
                animate={{ backgroundColor: i <= currentStep ? 'var(--pure)' : 'var(--dark)' }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <div style={{ maxWidth: 430, margin: '0 auto', padding: '24px', paddingBottom: 120 }}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Basics */}
          {currentStep === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 13, color: 'var(--subtle)', marginBottom: 4 }}>
                This info is kept private and never shown to other users.
              </p>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  value={form.realName}
                  onChange={(e) => setForm({ ...form, realName: e.target.value })}
                  placeholder="Your real name (hidden)"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com (hidden)"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Age</label>
                <input
                  type="number"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) || 18 })}
                  min={16} max={60}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Role</label>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={() => setForm({ ...form, isStudent: true })}
                    style={{
                      flex: 1, padding: '14px', borderRadius: 10, fontSize: 13, fontWeight: 600,
                      fontFamily: 'var(--sans)', cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                      background: form.isStudent ? 'var(--pure)' : 'var(--dark)',
                      color: form.isStudent ? 'var(--black)' : 'var(--subtle)'
                    }}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setForm({ ...form, isStudent: false })}
                    style={{
                      flex: 1, padding: '14px', borderRadius: 10, fontSize: 13, fontWeight: 600,
                      fontFamily: 'var(--sans)', cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                      background: !form.isStudent ? 'var(--pure)' : 'var(--dark)',
                      color: !form.isStudent ? 'var(--black)' : 'var(--subtle)'
                    }}
                  >
                    Professional
                  </button>
                </div>
              </div>
              <div>
                <label style={labelStyle}>College / Organization</label>
                <input
                  type="text"
                  value={form.college}
                  onChange={(e) => setForm({ ...form, college: e.target.value })}
                  placeholder="Your college or organization"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>
          )}

          {/* Step 1: Skills */}
          {currentStep === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label style={labelStyle}>Tech Skills (up to 5)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {form.techSkills.map((skill, i) => (
                    <input
                      key={i} type="text" value={skill}
                      onChange={(e) => updateTechSkill(i, e.target.value)}
                      placeholder={`Tech skill ${i + 1}`}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Non-Tech Skills (up to 3)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {form.nonTechSkills.map((skill, i) => (
                    <input
                      key={i} type="text" value={skill}
                      onChange={(e) => updateNonTechSkill(i, e.target.value)}
                      placeholder={`Non-tech skill ${i + 1}`}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Experience */}
          {currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>CGPA</label>
                  <input
                    type="number" step="0.1" value={form.cgpa}
                    onChange={(e) => setForm({ ...form, cgpa: parseFloat(e.target.value) || 0 })}
                    placeholder="8.5" min={0} max={10}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Papers</label>
                  <input
                    type="number" value={form.papers}
                    onChange={(e) => setForm({ ...form, papers: parseInt(e.target.value) || 0 })}
                    min={0}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Patents</label>
                  <input
                    type="number" value={form.patents}
                    onChange={(e) => setForm({ ...form, patents: parseInt(e.target.value) || 0 })}
                    min={0}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Competitions (comma separated)</label>
                <input
                  type="text" value={form.competitions}
                  onChange={(e) => setForm({ ...form, competitions: e.target.value })}
                  placeholder="Smart India Hackathon, Google DSC"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Certifications (comma separated)</label>
                <input
                  type="text" value={form.certifications}
                  onChange={(e) => setForm({ ...form, certifications: e.target.value })}
                  placeholder="AWS, Google Cloud, etc."
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Internships (comma separated)</label>
                <input
                  type="text" value={form.internships}
                  onChange={(e) => setForm({ ...form, internships: e.target.value })}
                  placeholder="Google, Microsoft, Startup XYZ"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Hackathons (comma separated)</label>
                <input
                  type="text" value={form.hackathons}
                  onChange={(e) => setForm({ ...form, hackathons: e.target.value })}
                  placeholder="HackMIT, ETHIndia, etc."
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>
          )}

          {/* Step 3: Portfolio (Hidden) */}
          {currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 13, color: 'var(--subtle)', marginBottom: 4 }}>
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
                  <label style={labelStyle}>{field.label}</label>
                  <input
                    type="url"
                    value={form[field.key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 4: About */}
          {currentStep === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={labelStyle}>About Me (20 words max)</label>
                <textarea
                  value={form.aboutMe}
                  onChange={(e) => {
                    const words = e.target.value.split(/\s+/).filter(Boolean);
                    if (words.length <= 20) {
                      setForm({ ...form, aboutMe: e.target.value });
                    }
                  }}
                  placeholder="Passionate developer who loves building things that matter..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <p style={{ fontSize: 11, color: 'var(--subtle)', marginTop: 8, textAlign: 'right' }}>
                  {form.aboutMe.split(/\s+/).filter(Boolean).length}/20 words
                </p>
              </div>
              <div style={{ background: 'var(--dark)', borderRadius: 12, padding: 20, border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--muted)', marginBottom: 8, fontWeight: 700 }}>
                  Your Anonymous Identity
                </h3>
                <p style={{ fontSize: 24, fontWeight: 700, color: 'var(--pure)', marginBottom: 4 }}>
                  {profile?.codeName || '✨ Auto-generating...'}
                </p>
                <p style={{ fontSize: 13, color: 'var(--subtle)', lineHeight: 1.5 }}>
                  This code name is your identity on the platform. No one sees your real name.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--black)',
        borderTop: '1px solid var(--border)', padding: '16px 24px', zIndex: 20
      }}>
        <div style={{ maxWidth: 430, margin: '0 auto', display: 'flex', gap: 12 }}>
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              style={{
                padding: '14px 24px', border: '1px solid var(--border)', borderRadius: 12, fontSize: 14,
                fontWeight: 600, fontFamily: 'var(--sans)', background: 'transparent', color: 'var(--white)',
                cursor: 'pointer', transition: 'border-color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--subtle)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              style={{
                flex: 1, padding: '14px', background: 'var(--pure)', color: 'var(--black)',
                border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700,
                fontFamily: 'var(--sans)', cursor: 'pointer'
              }}
            >
              Next Step
            </button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={saving}
              style={{
                flex: 1, padding: '14px', background: saving ? 'var(--mid)' : 'var(--pure)', color: 'var(--black)',
                border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700,
                fontFamily: 'var(--sans)', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1
              }}
            >
              {saving ? 'Saving...' : 'Finish & Enter App 👋'}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
