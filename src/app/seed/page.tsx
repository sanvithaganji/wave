'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SeedPage() {
    const router = useRouter();
    const [status, setStatus] = useState<string[]>([]);
    const [running, setRunning] = useState(false);
    const [done, setDone] = useState(false);

    const runSeed = async () => {
        setRunning(true);
        setStatus(['🌱 Connecting to MongoDB...']);

        try {
            const res = await fetch('/api/seed', { method: 'POST' });
            const data = await res.json();

            if (!res.ok) {
                setStatus(prev => [...prev, `❌ Error: ${data.error || 'Unknown error'}`]);
            } else {
                const logs: string[] = data.logs || [
                    '✅ Cleared previous seed data',
                    `✅ Inserted ${data.usersInserted ?? 40} user profiles`,
                    `✅ Inserted ${data.projectsInserted ?? 50} projects`,
                    '🎉 Done! Database seeded successfully.',
                ];
                setStatus(logs);
                setDone(true);
            }
        } catch (e: any) {
            setStatus(prev => [...prev, `❌ Error: ${e?.message}`]);
        } finally {
            setRunning(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh', background: 'var(--black)', fontFamily: 'var(--sans)',
            maxWidth: 430, margin: '0 auto', padding: '40px 24px',
        }}>
            <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 28, color: 'var(--pure)', marginBottom: 4 }}>Massive Seed</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Admin · Large Data Generator
                </div>
            </div>

            <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, marginBottom: 24, fontSize: 13, color: 'var(--subtle)', lineHeight: 1.6 }}>
                This will generate and insert <strong style={{ color: 'var(--white)' }}>40 User Profiles</strong> and <strong style={{ color: 'var(--white)' }}>50 Projects</strong> into MongoDB.<br /><br />
                Previous seed data is cleared automatically before inserting fresh data.
            </div>

            <button
                onClick={runSeed}
                disabled={running || done}
                style={{
                    width: '100%', padding: '14px', marginBottom: 24,
                    background: done ? 'var(--mid)' : running ? 'var(--dark)' : 'var(--pure)',
                    color: done ? 'var(--subtle)' : 'var(--black)',
                    border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700,
                    fontFamily: 'var(--sans)', cursor: running || done ? 'not-allowed' : 'pointer',
                }}
            >
                {done ? 'Seeded ✓' : running ? 'Seeding...' : '🌱 Run Massive Seed'}
            </button>

            {status.length > 0 && (
                <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: 12, padding: 16, fontSize: 12, color: 'var(--subtle)', lineHeight: 2, fontFamily: 'monospace' }}>
                    {status.map((s, i) => <div key={i}>{s}</div>)}
                </div>
            )}

            {done && (
                <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                    <button onClick={() => router.push('/swipe')} style={{ flex: 1, padding: '12px', background: 'var(--pure)', color: 'var(--black)', border: 'none', borderRadius: 12, fontSize: 13, fontWeight: 700, fontFamily: 'var(--sans)', cursor: 'pointer' }}>
                        → Discover
                    </button>
                    <button onClick={() => router.push('/projects')} style={{ flex: 1, padding: '12px', background: 'var(--dark)', color: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, fontSize: 13, fontFamily: 'var(--sans)', cursor: 'pointer' }}>
                        → Projects
                    </button>
                </div>
            )}
        </div>
    );
}
