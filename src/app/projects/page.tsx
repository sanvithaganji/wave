'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const MOCK_PROJECTS = [
  { id: 'm1', name: "MediAssist AI", type: "software", domain: "healthcare", badge: "Hackathon", desc: "AI-powered symptom checker for rural clinics using offline-first architecture and multilingual NLP models.", tags: ["AI/ML", "Healthcare", "React Native", "Python"], owner: "Swift Lynx", members: 2, maxMembers: 4 },
  { id: 'm2', name: "FarmLink Protocol", type: "hardware", domain: "farming", badge: "Research", desc: "Mesh IoT network for real-time crop monitoring. Sensors communicate via LoRa and surface data to farmers via WhatsApp.", tags: ["IoT", "LoRa", "Hardware", "Agri-tech"], owner: "Neon Moth", members: 3, maxMembers: 5 },
  { id: 'm3', name: "TrailSync", type: "software", domain: "travel", badge: "Startup", desc: "Collaborative trip planning with AI itinerary optimization. Think Notion meets Google Maps meets a travel agent.", tags: ["React", "Maps API", "Travel", "SaaS"], owner: "Marble Fox", members: 1, maxMembers: 3 },
  { id: 'm4', name: "SporeNet", type: "software", domain: "food", badge: "Competition", desc: "Decentralized food expiry tracker connecting restaurants with NGOs to minimize food waste in urban zones.", tags: ["Web3", "Food Tech", "Node.js", "MongoDB"], owner: "Void Crane", members: 2, maxMembers: 4 },
  { id: 'm5', name: "SecureCampus Shield", type: "hardware", domain: "safety", badge: "Hackathon", desc: "Smart surveillance overlay using edge-ML to detect anomalous behavior without storing personal footage.", tags: ["CV", "Edge ML", "Privacy", "Hardware"], owner: "Dusk Raven", members: 1, maxMembers: 3 },
  { id: 'm6', name: "GreenByte", type: "non-technical", domain: "sustainability", badge: "Event", desc: "Annual sustainability hackathon organizing committee. Need designers, social media leads, and logistics leads.", tags: ["Event", "Sustainability", "Non-Tech", "Organising"], owner: "Swift Lynx", members: 4, maxMembers: 8 },
];

const DOMAINS = [
  { key: "healthcare", label: "Healthcare", icon: "✙" },
  { key: "farming", label: "Farming", icon: "☘︎" },
  { key: "travel", label: "Travel", icon: "✈︎" },
  { key: "food", label: "Food Tech", icon: "♨" },
  { key: "education", label: "Education", icon: "✎" },
  { key: "sustainability", label: "Sustainability", icon: "𖣘" },
  { key: "fintech", label: "FinTech", icon: "$" },
  { key: "safety", label: "Safety", icon: "⛨" },
  { key: "web3", label: "Web3", icon: "⬡" },
  { key: "ai-ml", label: "AI / ML", icon: "✦" },
  { key: "iot", label: "IoT", icon: "⚙" },
  { key: "entertainment", label: "Entertainment", icon: "🎮" },
];

export default function ProjectsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [projects, setProjects] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [view, setView] = useState<'categories' | 'feed'>('categories');
  const [interested, setInterested] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('waves_token');

    const loadProjects = async () => {
      try {
        const res = await fetch('/api/projects', {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!res.ok) return;
        const { projects: raw } = await res.json();
        const live = raw.map((p: any) => ({
          id: p._id || p.id, name: p.name, type: p.category, domain: p.domain,
          badge: p.isHackathon ? 'Hackathon' : p.isCompetition ? 'Competition' : 'Open Source',
          desc: p.description, tags: p.tags || [], owner: p.ownerCodeName,
          members: (p.approvedUsers || []).length, maxMembers: p.teamSize || 4,
          ownerId: p.ownerId, interestedUsers: p.interestedUsers || [],
        })).filter((p: any) => p.members < p.maxMembers);

        if (live.length > 0) {
          setProjects(live);
          if (user) {
            const init: Record<string, boolean> = {};
            live.forEach((p: any) => {
              if (p.interestedUsers?.includes(user.uid) || p.ownerId === user.uid) init[p.id] = true;
            });
            setInterested(init);
          }
        }
      } catch (err) { console.warn('Projects load error:', err); }
    };

    loadProjects();
  }, [user]);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2100);
  };

  const toggleType = (t: string) => setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const toggleDomain = (d: string) => setSelectedDomains(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);

  const filtered = projects.filter(p => {
    const typeOk = selectedTypes.length === 0 || selectedTypes.includes(p.type);
    const domainOk = selectedDomains.length === 0 || selectedDomains.includes(p.domain);
    return typeOk && domainOk;
  });

  const sendInterest = async (projectId: string) => {
    setInterested(prev => ({ ...prev, [projectId]: true }));
    showToast("Interest sent! Owner will be notified 📬");
    if (user) {
      const token = localStorage.getItem('waves_token');
      try {
        await fetch(`/api/projects/${projectId}/interest`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });
      } catch { /* graceful */ }
    }
  };

  if (view === 'feed') {
    return (
      <>
        <div className="projects-wrap slide-up">
          <div className="feed-header">
            <button className="back-btn" onClick={() => setView('categories')}>← Back</button>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="filter-chip">{filtered.length} projects</span>
              <button
                className="interested-btn"
                style={{ padding: '6px 14px', fontSize: 13, borderRadius: 10, fontFamily: 'var(--sans)' }}
                onClick={() => router.push('/projects/create')}
              >+ New</button>
            </div>
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Tap &quot;Interested&quot; to request to join</p>
          {filtered.map(p => (
            <button key={p.id} className="project-card" onClick={() => router.push(`/projects/${p.id}`)}>
              <div className="pc-top">
                <div className="pc-name">{p.name}</div>
                <div className={`pc-badge ${p.badge === 'Hackathon' ? 'hackathon' : ''}`}>{p.badge}</div>
              </div>
              <div className="pc-desc">{p.desc}</div>
              <div className="pc-tags">{p.tags.map((t: string) => <span key={t} className="pc-tag">{t}</span>)}</div>
              <div className="pc-footer">
                <div className="pc-meta">by {p.owner} · {p.members}/{p.maxMembers} members</div>
                <span
                  className={`interested-btn ${interested[p.id] ? 'sent' : ''}`}
                  onClick={e => { e.stopPropagation(); if (!interested[p.id]) sendInterest(p.id); }}
                >
                  {interested[p.id] ? '✓ Sent' : 'Interested'}
                </span>
              </div>
            </button>
          ))}
        </div>
        {toast && <div className="toast">{toast}</div>}
      </>
    );
  }

  return (
    <>
      <div className="projects-wrap slide-up">
        <h2 className="section-title">Explore <span>Projects</span></h2>
        <p className="section-sub">Filter by type and domain to find your next collab</p>

        <div className="type-grid">
          {[
            { key: 'software', label: 'Software' },
            { key: 'hardware', label: 'Hardware' },
            { key: 'non-technical', label: 'Non-Tech' },
          ].map(t => (
            <div key={t.key} className={`type-card ${selectedTypes.includes(t.key) ? 'active' : ''}`} onClick={() => toggleType(t.key)}>
              <div className="icon" />
              <div className="label">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="domain-label">Domains</div>
        <div className="domain-grid">
          {DOMAINS.map(d => (
            <div key={d.key} className={`domain-card ${selectedDomains.includes(d.key) ? 'active' : ''}`} onClick={() => toggleDomain(d.key)}>
              <span className="di">{d.icon}</span>
              <span className="dn">{d.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            className="interested-btn"
            style={{ flex: 1, padding: '14px', fontSize: '14px', borderRadius: '12px', fontFamily: 'var(--sans)' }}
            onClick={() => setView('feed')}
          >
            Browse Projects →
          </button>
          <button
            className="interested-btn"
            style={{ padding: '14px 20px', fontSize: '14px', borderRadius: '12px', fontFamily: 'var(--sans)' }}
            onClick={() => router.push('/projects/create')}
          >
            + New
          </button>
        </div>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
