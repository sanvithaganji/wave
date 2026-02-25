'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const MOCK_PROFILES = [
  { id: 'p1', codename: "Swift Lynx", emoji: "༄", college: "VNR VJIET", type: "Student", about: "Building systems that break gracefully. Obsessed with distributed infra and coffee.", techSkills: ["Rust", "Kubernetes", "GraphQL", "Redis", "WebAssembly"], nonTechSkills: ["Technical Writing", "System Design", "Mentoring"], scores: { leetcode: 1842, codechef: 1654, github: 47, collaborations: 12 }, totalScore: 94 },
  { id: 'p2', codename: "Neon Moth", emoji: "𐦍", college: "BITS Pilani Hyderabad", type: "Student", about: "ML researcher by day, hackathon goblin by night. I find patterns in chaos.", techSkills: ["PyTorch", "Python", "CUDA", "FastAPI", "React"], nonTechSkills: ["Research", "Public Speaking", "Design Thinking"], scores: { leetcode: 2100, codechef: 1887, github: 62, collaborations: 8 }, totalScore: 88 },
  { id: 'p3', codename: "Marble Fox", emoji: "𓃦", college: "IIIT Hyderabad", type: "Student", about: "Security enthusiast. CTF player. I read RFCs for fun and that says a lot.", techSkills: ["C++", "Assembly", "Networking", "Cryptography", "Linux"], nonTechSkills: ["Problem Solving", "CTF Strategy", "Teaching"], scores: { leetcode: 1975, codechef: 1720, github: 38, collaborations: 15 }, totalScore: 91 },
  { id: 'p4', codename: "Void Crane", emoji: "𓅠", college: "IIT Hyderabad", type: "Student", about: "Full-stack dev who's slowly becoming a devops person against my will.", techSkills: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"], nonTechSkills: ["Project Management", "Client Communication", "UX Research"], scores: { leetcode: 1567, codechef: 1430, github: 29, collaborations: 20 }, totalScore: 78 },
  { id: 'p5', codename: "Dusk Raven", emoji: "𓄿", college: "NIT Warangal", type: "Student", about: "Robotics and embedded systems. If it runs on metal, I want to program it.", techSkills: ["ROS", "C", "FPGA", "MATLAB", "Python"], nonTechSkills: ["Hardware Debugging", "Team Leadership", "Documentation"], scores: { leetcode: 1430, codechef: 1380, github: 55, collaborations: 9 }, totalScore: 82 },
];

function SwipeCard({ profile, onSwipe, isTop, stackIndex }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0); const startY = useRef(0);
  const isDragging = useRef(false); const currentX = useRef(0);
  const [dec, setDec] = useState({ left: 0, right: 0 });

  const onDown = useCallback((e: any) => {
    if (!isTop) return;
    isDragging.current = true;
    startX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    startY.current = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    if (cardRef.current) { cardRef.current.classList.add('dragging'); cardRef.current.style.transition = 'none'; }
  }, [isTop]);

  const onMove = useCallback((e: any) => {
    if (!isDragging.current || !isTop) return;
    const cx = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const cy = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const dx = cx - startX.current; const dy = cy - startY.current;
    currentX.current = dx;
    if (cardRef.current) cardRef.current.style.transform = `translateX(${dx}px) translateY(${dy * 0.3}px) rotate(${dx * 0.07}deg)`;
    const t = 60;
    if (dx > t) setDec({ left: 0, right: Math.min((dx - t) / 60, 1) });
    else if (dx < -t) setDec({ left: Math.min((-dx - t) / 60, 1), right: 0 });
    else setDec({ left: 0, right: 0 });
  }, [isTop]);

  const onUp = useCallback(() => {
    if (!isDragging.current || !isTop) return;
    isDragging.current = false;
    if (cardRef.current) { cardRef.current.classList.remove('dragging'); cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'; }
    const dx = currentX.current;
    if (dx > 80) { if (cardRef.current) cardRef.current.style.transform = 'translateX(120%) rotate(20deg)'; setTimeout(() => onSwipe('right', profile.id), 350); }
    else if (dx < -80) { if (cardRef.current) cardRef.current.style.transform = 'translateX(-120%) rotate(-20deg)'; setTimeout(() => onSwipe('left', profile.id), 350); }
    else { if (cardRef.current) cardRef.current.style.transform = ''; setDec({ left: 0, right: 0 }); }
    currentX.current = 0;
  }, [isTop, profile.id, onSwipe]);

  const buttonSwipe = (dir: 'left' | 'right') => {
    if (!isTop || !cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
    cardRef.current.style.transform = `translateX(${dir === 'right' ? 150 : -150}%) rotate(${dir === 'right' ? 20 : -20}deg)`;
    setTimeout(() => onSwipe(dir, profile.id), 350);
  };
  profile._swipe = buttonSwipe;

  return (
    <div
      ref={cardRef} className="swipe-card"
      style={{ zIndex: 10 - stackIndex, transform: isTop ? '' : `scale(${1 - stackIndex * 0.04}) translateY(${stackIndex * 10}px)`, opacity: stackIndex > 2 ? 0 : 1, pointerEvents: isTop ? 'auto' : 'none' }}
      onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp}
      onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}
    >
      <div className="swipe-decision-left" style={{ opacity: dec.left }}>✗ PASS</div>
      <div className="swipe-decision-right" style={{ opacity: dec.right }}>✓ CONNECT</div>
      <div className="card-bg">
        <div className="avatar-circle">{profile.emoji}</div>
        <div className="codename-tag">{profile.codename}</div>
        <div className="score-tag">⬡ {profile.totalScore}</div>
      </div>
      <div className="card-body">
        <div className="card-college">{profile.college} · {profile.type}</div>
        <div className="card-about">&quot;{profile.about}&quot;</div>
        <div className="score-row">
          <div className="score-item"><span className="score-num">{profile.scores.leetcode}</span><span className="score-lbl">LeetCode</span></div>
          <div className="score-item"><span className="score-num">{profile.scores.codechef}</span><span className="score-lbl">CodeChef</span></div>
          <div className="score-item"><span className="score-num">{profile.scores.github}</span><span className="score-lbl">GitHub★</span></div>
          <div className="score-item"><span className="score-num">{profile.scores.collaborations}</span><span className="score-lbl">Collabs</span></div>
        </div>
        <div className="skills-section">
          <div className="skills-label">Tech Skills</div>
          <div className="skills-row">{profile.techSkills.map((s: string) => <span key={s} className="skill-chip">{s}</span>)}</div>
        </div>
        <div className="skills-section">
          <div className="skills-label">Non-Tech</div>
          <div className="skills-row">{profile.nonTechSkills.map((s: string) => <span key={s} className="skill-chip non-tech">{s}</span>)}</div>
        </div>
      </div>
    </div>
  );
}

export default function SwipePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [profiles, setProfiles] = useState<any[]>([]);
  const [fullList, setFullList] = useState<any[]>([]);
  const [showMatch, setShowMatch] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('waves_token');
    if (!token) {
      setProfiles(MOCK_PROFILES);
      setFullList(MOCK_PROFILES);
      return;
    }

    const loadUsers = async () => {
      try {
        const res = await fetch('/api/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          setProfiles(MOCK_PROFILES);
          setFullList(MOCK_PROFILES);
          return;
        }
        const { users } = await res.json();
        const mapped = users.map((u: any) => ({
          id: u.uid, codename: u.codeName || 'Anonymous',
          emoji: u.codeName?.[0]?.toUpperCase() || '༄', college: u.college || 'Unknown',
          type: u.isStudent ? 'Student' : 'Professional', about: u.aboutMe || 'No bio yet.',
          techSkills: u.techSkills || [], nonTechSkills: u.nonTechSkills || [],
          scores: {
            leetcode: u.leetcode ? 100 : 0, codechef: u.codechef ? 100 : 0,
            github: u.github ? 10 : 0, collaborations: u.collaborationCount || 0,
          },
          totalScore: u.score || 0,
        }));
        if (mapped.length > 0) {
          setProfiles(mapped);
          setFullList(mapped);
        } else {
          setProfiles(MOCK_PROFILES);
          setFullList(MOCK_PROFILES);
        }
      } catch (err) {
        console.warn('Swipe load error:', err);
        setProfiles(MOCK_PROFILES);
        setFullList(MOCK_PROFILES);
      }
    };

    loadUsers();
  }, [user]);

  const handleSwipe = useCallback(async (dir: string, id: string) => {
    setProfiles(prev => prev.filter((p: any) => p.id !== id));
    if (user) {
      const token = localStorage.getItem('waves_token');
      if (token) {
        try {
          const res = await fetch('/api/swipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ swipedId: id, direction: dir }),
          });
          const data = await res.json();
          if (data.matched) {
            const matched = fullList.find((p: any) => p.id === id);
            setTimeout(() => setShowMatch(matched), 400);
          } else if (dir === 'right' && Math.random() > 0.6) {
            // Demo visual match for seed users
            const matched = fullList.find((p: any) => p.id === id);
            setTimeout(() => setShowMatch(matched), 400);
          }
        } catch { /* graceful */ }
      }
    }
  }, [user, fullList]);

  const buttonSwipe = (dir: 'left' | 'right') => {
    if (profiles.length === 0) return;
    const top = profiles[0] as any;
    if (top._swipe) top._swipe(dir);
  };

  return (
    <div className="swipe-wrap">
      <div className="swipe-top">
        <div className="swipe-title"></div>
        <div className="swipe-count"></div>
      </div>
      <div className="card-stack">
        {profiles.length === 0 ? (
          <div className="empty-swipe">
            <div className="big-icon">🌙</div>
            <p>You&apos;ve seen everyone<br />for now. Check back later.</p>
            <button className="interested-btn" style={{ marginTop: 8 }} onClick={() => setProfiles([...fullList])}>Reset</button>
          </div>
        ) : (
          profiles.slice(0, 3).map((p, i) => (
            <SwipeCard key={p.id} profile={p} onSwipe={handleSwipe} isTop={i === 0} stackIndex={i} />
          ))
        )}
      </div>
      {profiles.length > 0 && (
        <div className="swipe-actions">
          <button className="action-btn reject" onClick={() => buttonSwipe('left')}>✗</button>
          <button className="action-btn skip" onClick={() => buttonSwipe('left')}>↩</button>
          <button className="action-btn accept" onClick={() => buttonSwipe('right')}>✓</button>
        </div>
      )}
      {showMatch && (
        <div className="match-popup">
          <div className="match-label">Connected</div>
          <div className="match-sub">You and {showMatch.codename} can now collaborate</div>
          <div className="match-avatars">
            <div className="match-av">˙ᵕ˙</div>
            <div className="match-x">×</div>
            <div className="match-av">{showMatch.emoji}</div>
          </div>
          <button className="match-btn" onClick={() => { setShowMatch(null); router.push('/chat'); }}>Open Chat</button>
          <button className="match-skip" onClick={() => setShowMatch(null)}>Maybe later</button>
        </div>
      )}
    </div>
  );
}
