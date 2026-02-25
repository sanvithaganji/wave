'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

import BottomNav from '@/components/BottomNav';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const TYPES = [
    { key: 'software', label: 'Software', icon: '💻' },
    { key: 'hardware', label: 'Hardware', icon: '🔧' },
    { key: 'non-technical', label: 'Non-Tech', icon: '🎭' },
];

const DOMAINS = [
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { key: 'agriculture', label: 'Farming', icon: '🌾' },
    { key: 'travel', label: 'Travel', icon: '✈️' },
    { key: 'food', label: 'Food Tech', icon: '🍴' },
    { key: 'education', label: 'Education', icon: '📚' },
    { key: 'environment', label: 'Sustainability', icon: '🌱' },
    { key: 'finance', label: 'FinTech', icon: '💳' },
    { key: 'entertainment', label: 'Entertainment', icon: '🎮' },
];

const PACES = [
    { key: 'hackathon', label: '⚡ Hackathon Sprint', sub: 'Weekend builds' },
    { key: 'short-term', label: '🔥 Short-term', sub: '1–4 weeks' },
    { key: 'long-term', label: '🏗 Long-term', sub: '1–6 months' },
];

const COLLAB_STYLES = [
    { key: 'sync', label: 'Sync', sub: 'Daily check-ins' },
    { key: 'async', label: 'Async', sub: 'Independent work' },
    { key: 'mixed', label: 'Mixed', sub: 'Flexible' },
];

export default function ProjectCreatePage() {
    const { user, profile } = useAuth();
    const router = useRouter();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [domain, setDomain] = useState('');
    const [skillInput, setSkillInput] = useState('');
    const [desiredSkills, setDesiredSkills] = useState<string[]>([]);
    const [pace, setPace] = useState('');
    const [collabStyle, setCollabStyle] = useState('');
    const [commitmentHours, setCommitmentHours] = useState(5);
    const [teamSize, setTeamSize] = useState(3);
    const [isHackathon, setIsHackathon] = useState(false);
    const [loading, setLoading] = useState(false);
    const [enhancing, setEnhancing] = useState(false);
    const [toast, setToast] = useState<string | null>(null);

    const addSkill = () => {
        const s = skillInput.trim();
        if (s && !desiredSkills.includes(s)) setDesiredSkills((p) => [...p, s]);
        setSkillInput('');
    };

    const enhanceDescription = async () => {
        if (!description || !name) return;
        setEnhancing(true);
        try {
            const res = await fetch('/api/nim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'enhance-description',
                    payload: { name, roughDescription: description, tags: desiredSkills, domain, category },
                }),
            });
            const { enhanced } = await res.json();
            if (enhanced) setDescription(enhanced);
        } catch { /* graceful */ }
        finally { setEnhancing(false); }
    };

    const handleSubmit = async () => {
        if (!name || !description || !category || !domain || !user || !profile) return;
        setLoading(true);
        try {
            const projectData = {
                name, description, abstract: '', category, domain,
                desiredSkills, workingStylePace: pace,
                collabStyle, commitmentHours, teamSize,
                isHackathon, isCompetition: false, status: 'open',
                ownerId: user.uid, ownerCodeName: profile.codeName,
                approvedUsers: [user.uid], interestedUsers: [], pendingUsers: [],
                tags: desiredSkills, createdAt: new Date().toISOString(),
            };

            const token = localStorage.getItem('waves_token');
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(projectData),
            });
            if (!res.ok) throw new Error('Failed to create project');
            const { project: created } = await res.json();

            // Extract requirements + upsert to Pinecone
            try {
                const extractRes = await fetch('/api/nim', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'extract-project',
                        payload: { name, description, tags: desiredSkills, domain, category, workingStylePace: pace, commitmentHours },
                    }),
                });
                const { extracted } = await extractRes.json();
                if (extracted && !extracted.error) {
                    await fetch(`/api/projects/${created.id || created._id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                        body: JSON.stringify({ _requirements: extracted }),
                    });
                }
                await fetch('/api/pinecone', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'upsert-project',
                        payload: { id: created.id || created._id, project: projectData },
                    }),
                });
            } catch { /* graceful */ }

            setToast('Project created! ✓');
            setTimeout(() => router.push(`/projects/${created.id || created._id}`), 1200);
        } catch (err) {
            console.error(err);
            setToast('Error creating project');
        } finally { setLoading(false); }
    };

    const labelStyle: React.CSSProperties = { fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--muted)', marginBottom: 8, fontWeight: 500, display: 'block' };
    const inputStyle: React.CSSProperties = {
        width: '100%', background: 'var(--dark)', border: '1px solid var(--border)',
        borderRadius: 10, padding: '12px 16px', color: 'var(--white)',
        fontSize: 14, fontFamily: 'var(--sans)', outline: 'none', transition: 'border-color 0.2s',
    };
    const cardActive: React.CSSProperties = { background: 'var(--pure)', color: 'var(--black)', border: '1px solid var(--pure)' };
    const cardInactive: React.CSSProperties = { background: 'var(--dark)', color: 'var(--white)', border: '1px solid var(--border)' };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--sans)', paddingBottom: 80 }}>
            {/* Header */}
            <div style={{ position: 'sticky', top: 0, background: 'var(--black)', zIndex: 10, borderBottom: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 430, margin: '0 auto', padding: '20px 24px 16px', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <button
                        onClick={() => router.back()}
                        style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--white)', flexShrink: 0 }}
                    >
                        <HiOutlineArrowLeft />
                    </button>
                    <div>
                        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--pure)', letterSpacing: -0.5, margin: 0 }}>New Project</h1>
                        <p style={{ fontSize: 12, color: 'var(--subtle)', margin: 0, marginTop: 2 }}>Post your idea & find collaborators</p>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: 430, margin: '0 auto', padding: '24px', paddingBottom: 120, display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Name */}
                <div>
                    <label style={labelStyle}>Project Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Smart Campus Guide"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                </div>

                {/* Description */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <label style={{ ...labelStyle, marginBottom: 0 }}>Description</label>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={enhanceDescription}
                            disabled={enhancing || !description}
                            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', background: 'var(--dark)', border: '1px solid var(--border)', color: 'var(--subtle)', fontSize: 11, fontWeight: 700, borderRadius: 20, fontFamily: 'var(--sans)', cursor: 'pointer', opacity: (enhancing || !description) ? 0.4 : 1 }}
                        >
                            {enhancing ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                        style={{ width: 10, height: 10, border: '1.5px solid var(--subtle)', borderTopColor: 'transparent', borderRadius: '50%' }}
                                    />
                                    Enhancing...
                                </>
                            ) : <>✦ Enhance with AI</>}
                        </motion.button>
                    </div>
                    <textarea
                        placeholder="What are you building? What problem does it solve?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                </div>

                {/* Type */}
                <div>
                    <label style={labelStyle}>Type</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                        {TYPES.map((t) => (
                            <motion.button
                                key={t.key}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCategory(t.key)}
                                style={{ padding: 16, borderRadius: 12, textAlign: 'center', cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.2s', ...(category === t.key ? cardActive : cardInactive) }}
                            >
                                <span style={{ fontSize: 22, display: 'block', marginBottom: 4 }}>{t.icon}</span>
                                <span style={{ fontSize: 12, fontWeight: 600 }}>{t.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Domain */}
                <div>
                    <label style={labelStyle}>Domain</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
                        {DOMAINS.map((d) => (
                            <motion.button
                                key={d.key}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setDomain(d.key)}
                                style={{ padding: '10px 4px', borderRadius: 10, textAlign: 'center', cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.2s', ...(domain === d.key ? cardActive : cardInactive) }}
                            >
                                <span style={{ fontSize: 18, display: 'block', marginBottom: 2 }}>{d.icon}</span>
                                <span style={{ fontSize: 10, fontWeight: 600 }}>{d.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Desired Skills */}
                <div>
                    <label style={labelStyle}>Skills Needed</label>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        <input
                            type="text"
                            placeholder="e.g. React, Arduino, ML…"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                            style={{ ...inputStyle, flex: 1, width: 'auto' }}
                            onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={addSkill}
                            style={{ padding: '12px 18px', background: 'var(--pure)', color: 'var(--black)', border: 'none', borderRadius: 10, fontSize: 18, fontWeight: 700, fontFamily: 'var(--sans)', cursor: 'pointer', flexShrink: 0 }}
                        >+</motion.button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {desiredSkills.map((s) => (
                            <span
                                key={s}
                                onClick={() => setDesiredSkills((p) => p.filter((x) => x !== s))}
                                style={{ padding: '6px 14px', background: 'var(--dark)', border: '1px solid var(--border)', color: 'var(--subtle)', fontSize: 12, fontWeight: 500, borderRadius: 20, cursor: 'pointer', fontFamily: 'var(--sans)' }}
                            >
                                {s} ✕
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pace */}
                <div>
                    <label style={labelStyle}>Working Pace</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {PACES.map((p) => (
                            <motion.button
                                key={p.key}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setPace(p.key)}
                                style={{ padding: '14px 16px', borderRadius: 12, textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--sans)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s', ...(pace === p.key ? cardActive : cardInactive) }}
                            >
                                <span style={{ fontSize: 14, fontWeight: 600 }}>{p.label}</span>
                                <span style={{ fontSize: 12, opacity: 0.6 }}>{p.sub}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Collab style */}
                <div>
                    <label style={labelStyle}>Collaboration Style</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                        {COLLAB_STYLES.map((c) => (
                            <motion.button
                                key={c.key}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCollabStyle(c.key)}
                                style={{ padding: '12px 8px', borderRadius: 12, textAlign: 'center', cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.2s', ...(collabStyle === c.key ? cardActive : cardInactive) }}
                            >
                                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.label}</div>
                                <div style={{ fontSize: 10, marginTop: 2, opacity: 0.6 }}>{c.sub}</div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Commitment + Team size */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                        <label style={labelStyle}>Hours / Week</label>
                        <input
                            type="number" min={1} max={60} value={commitmentHours}
                            onChange={(e) => setCommitmentHours(+e.target.value)}
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Team Size</label>
                        <input
                            type="number" min={2} max={20} value={teamSize}
                            onChange={(e) => setTeamSize(+e.target.value)}
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                    </div>
                </div>

                {/* Hackathon toggle */}
                <button
                    onClick={() => setIsHackathon((p) => !p)}
                    style={{ width: '100%', padding: '14px', borderRadius: 12, fontSize: 14, fontWeight: 600, fontFamily: 'var(--sans)', cursor: 'pointer', transition: 'all 0.2s', border: 'none', ...(isHackathon ? cardActive : cardInactive) }}
                >
                    {isHackathon ? '⚡ Hackathon Project' : 'Mark as Hackathon Project?'}
                </button>

                {/* Submit */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    disabled={!name || !description || !category || !domain || loading}
                    onClick={handleSubmit}
                    style={{
                        width: '100%', padding: '15px', background: loading ? 'var(--mid)' : 'var(--pure)', color: 'var(--black)',
                        border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: 'var(--sans)',
                        cursor: (!name || !description || !category || !domain || loading) ? 'not-allowed' : 'pointer',
                        opacity: (!name || !description || !category || !domain) ? 0.4 : 1,
                    }}
                >
                    {loading ? 'Creating...' : 'Post Project →'}
                </motion.button>
            </div>

            {/* Toast */}
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'fixed', bottom: 96, left: '50%', transform: 'translateX(-50%)', padding: '12px 24px', background: 'var(--pure)', color: 'var(--black)', fontSize: 14, fontWeight: 700, borderRadius: 50, zIndex: 50, whiteSpace: 'nowrap', fontFamily: 'var(--sans)' }}
                >
                    {toast}
                </motion.div>
            )}
            <BottomNav />
        </div>
    );
}
