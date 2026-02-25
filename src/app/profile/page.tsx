'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const MOCK = {
  codename: "Swift Lynx", emoji: "༄", college: "VNR VJIET", type: "Student",
  about: "Building systems that break gracefully. Obsessed with distributed infra and coffee.",
  techSkills: ["Rust", "Kubernetes", "GraphQL", "Redis", "WebAssembly"],
  nonTechSkills: ["Technical Writing", "System Design", "Mentoring"],
  scores: { leetcode: 1842, codechef: 1654, github: 5, collaborations: 12 },
  totalScore: 94,
  activity: ['3 Hackathons', '2 Patents Filed', '5 Projects', '1 Paper', '4 Certs', 'CGPA 8.9'],
  links: [
    { icon: '</>', name: 'LeetCode', val: '1842 rating' },
    { icon: '</>', name: 'CodeChef', val: '1654 rating' },
    { icon: '</>', name: 'GitHub', val: '5 repos' },
    { icon: 'in', name: 'LinkedIn', val: 'Connected' },
    { icon: 'HR', name: 'HackerRank', val: '4★ Problem Solving' },
  ],
  joinDate: 'January 2025',
};

export default function ProfilePage() {
  const { user, profile, signOut } = useAuth();
  const router = useRouter();
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 100); }, []);

  // Use real profile if available, otherwise mock
  const codename = profile?.codeName || MOCK.codename;
  const emoji = codename[0]?.toUpperCase() || MOCK.emoji;
  const college = profile?.college || MOCK.college;
  const typeStr = profile ? (profile.isStudent ? 'Student' : 'Professional') : MOCK.type;
  const about = profile?.aboutMe || MOCK.about;
  const techSkills = (profile?.techSkills?.length ?? 0) > 0 ? profile!.techSkills : MOCK.techSkills;
  const nonTech = (profile?.nonTechSkills?.length ?? 0) > 0 ? profile!.nonTechSkills : MOCK.nonTechSkills;
  const score = profile?.score ?? MOCK.totalScore;
  const collabs = profile?.collaborationCount ?? MOCK.scores.collaborations;
  const github = profile?.github || `${MOCK.scores.github} repos`;
  const joinDate = profile?.dateJoined ? new Date(profile.dateJoined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : MOCK.joinDate;

  const links = profile ? [
    profile.leetcode && { icon: '</>', name: 'LeetCode', val: 'Connected' },
    profile.codechef && { icon: '</>', name: 'CodeChef', val: 'Connected' },
    profile.github && { icon: '</>', name: 'GitHub', val: 'Connected' },
    profile.linkedin && { icon: 'in', name: 'LinkedIn', val: 'Connected' },
    profile.hackerrank && { icon: 'HR', name: 'HackerRank', val: 'Connected' },
  ].filter(Boolean) as any[] : MOCK.links;

  const activityTags = profile ? (() => {
    const a: string[] = [];
    if (profile.hackathons?.length) a.push(`${profile.hackathons.length} Hackathons`);
    if (profile.patents > 0) a.push(`${profile.patents} Patents`);
    if (profile.projects?.length) a.push(`${profile.projects.length} Projects`);
    if (profile.papers > 0) a.push(`${profile.papers} Papers`);
    if (profile.certifications?.length) a.push(`${profile.certifications.length} Certs`);
    if (profile.cgpa > 0) a.push(`CGPA ${profile.cgpa}`);
    return a.length > 0 ? a : ['New member'];
  })() : MOCK.activity;

  return (
    <div className="profile-wrap">
      <div className="profile-hero">
        <div className="profile-avatar">{emoji}</div>
        <div className="profile-codename">{codename}</div>
        <div className="profile-type">{college} · {typeStr}</div>
        <div className="profile-score-row">
          <div className="ps-item"><span className="ps-num">{collabs}</span><span className="ps-lbl">Collabs</span></div>
          <div className="ps-divider" />
          <div className="ps-item"><span className="ps-num">{typeof github === 'number' ? github : MOCK.scores.github}</span><span className="ps-lbl">Rating★</span></div>
          <div className="ps-divider" />
          <div className="ps-item"><span className="ps-num">{score}</span><span className="ps-lbl">Score</span></div>
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title"><b>About</b></div>
        <p style={{ fontSize: 13, color: 'var(--subtle)', lineHeight: 1.7, fontWeight: 300, fontStyle: 'italic' }}>&quot;{about}&quot;</p>
      </div>

      <div className="profile-section">
        <div className="profile-section-title"><b>Tech Skills</b></div>
        <div className="tags-wrap">{techSkills.map((s: string, i: number) => <span key={i} className="profile-tag">{s}</span>)}</div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title"><b>Non-Tech Skills</b></div>
        <div className="tags-wrap">{nonTech.map((s: string, i: number) => <span key={i} className="profile-tag hollow">{s}</span>)}</div>
      </div>

      {links.length > 0 && (
        <div className="profile-section">
          <div className="profile-section-title"><b>Competitive Profiles</b></div>
          <div className="portfolio-links">
            {links.map((l: any) => (
              <div className="portfolio-link" key={l.name}>
                <span className="pl-icon">{l.icon}</span>
                <span className="pl-name">{l.name}</span>
                <span className="pl-val">{l.val}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="profile-section">
        <div className="profile-section-title"><b>Activity</b></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {activityTags.map((a: string, i: number) => <span key={i} className="profile-tag">{a}</span>)}
        </div>
      </div>

      <div className="profile-section">
        <div className="profile-section-title"><b>Member Since</b></div>
        <p style={{ fontSize: 13, color: 'var(--subtle)' }}>{joinDate} · <span style={{ color: 'var(--light)' }}>Anonymous by default</span></p>
      </div>

      <button className="edit-profile-btn" onClick={() => router.push('/profile/edit')}>Edit Profile</button>
      {user && (
        <button onClick={() => { signOut(); router.push('/auth'); }}
          style={{ width: '100%', marginTop: 10, padding: '12px', background: 'none', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--sans)' }}>
          Sign Out
        </button>
      )}
    </div>
  );
}
