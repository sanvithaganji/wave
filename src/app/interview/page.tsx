'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

// ── Question schema ──────────────────────────────────────────────────────────
type QuestionType = 'open' | 'mcq' | 'multi';

interface Question {
    id: string;
    text: string;
    type: QuestionType;
    options?: string[];
}

const QUESTIONS: Record<string, Question[]> = {
    projects: [
        {
            id: 'p1', type: 'open',
            text: "What's the most interesting thing you've built or worked on recently?",
        },
        {
            id: 'p2', type: 'mcq',
            text: "What stage do you usually jump into projects?",
            options: ['From scratch — idea to execution', 'Mid-build — joining an existing team', 'Late stage — polish & ship'],
        },
    ],
    skills: [
        {
            id: 's1', type: 'mcq',
            text: "Which area best describes you?",
            options: ['Frontend / Design', 'Backend / Systems', 'AI / ML / Data', 'Hardware / IoT', 'Full-stack', 'Non-technical'],
        },
        {
            id: 's2', type: 'open',
            text: "What tools or languages are you most confident with?",
        },
    ],
    interests: [
        {
            id: 'i1', type: 'multi',
            text: "Which domains excite you most? Pick all that apply, then tap Done.",
            options: ['Healthcare', 'Fintech', 'Sustainability', 'Education', 'Gaming', 'Social Impact', 'AgriTech', 'Safety'],
        },
        {
            id: 'i2', type: 'open',
            text: "What problem on campus genuinely annoys you — something you'd love to solve?",
        },
    ],
    'working-style': [
        {
            id: 'w1', type: 'mcq',
            text: "How do you prefer to work on projects?",
            options: ['Weekend hackathon sprint ⚡', 'Month-long focused build 🔨', 'Long-term research (6+ months) 📚'],
        },
        {
            id: 'w2', type: 'mcq',
            text: "Your typical role in a team?",
            options: ['Lead the vision', 'Execute the plan', 'Flex between both'],
        },
    ],
};

const SECTIONS = ['projects', 'skills', 'interests', 'working-style'] as const;
type Section = typeof SECTIONS[number];

const SECTION_LABELS: Record<Section, string> = {
    projects: 'Projects', skills: 'Skills', interests: 'Interests', 'working-style': 'Work Style',
};

const TRANSITION_MESSAGES: Record<number, string> = {
    1: "Got it! Now let's talk about your skills.",
    2: "Nice. What domains and problems excite you?",
    3: "Last section — how do you like to work?",
};

// ── Message type ─────────────────────────────────────────────────────────────
interface Msg {
    id: number;
    text: string;
    sent: boolean; // true = user, false = AI
}

async function reactToAnswer(question: string, answer: string, section: string): Promise<string> {
    try {
        const res = await fetch('/api/nim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'react-to-answer',
                payload: { question, answer, section },
            }),
        });
        if (!res.ok) return '';
        const data = await res.json();
        return data.reaction?.trim() ?? '';
    } catch { return ''; }
}

async function extractProfile(conversationText: string) {
    try {
        const res = await fetch('/api/nim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'extract-profile', payload: { conversationText } }),
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.extracted ?? null;
    } catch { return null; }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InterviewPage() {
    const { user, refreshProfile } = useAuth();
    const router = useRouter();

    const [messages, setMessages] = useState<Msg[]>([]);
    const [sectionIdx, setSectionIdx] = useState(0);
    const [questionIdx, setQuestionIdx] = useState(0);
    const [input, setInput] = useState('');
    const [multiSelected, setMultiSelected] = useState<string[]>([]);
    const [done, setDone] = useState(false);
    const [saving, setSaving] = useState(false);
    const [thinking, setThinking] = useState(false);

    const nextId = useRef(1);
    const answersRef = useRef<{ section: string; question: string; answer: string }[]>([]);
    const messagesEnd = useRef<HTMLDivElement>(null);

    const section = SECTIONS[sectionIdx];
    const questions = QUESTIONS[section];
    const currentQ = questions?.[questionIdx] ?? null;

    const scrollDown = () => setTimeout(() => messagesEnd.current?.scrollIntoView({ behavior: 'smooth' }), 80);

    const addMsg = (text: string, sent: boolean) => {
        setMessages(prev => [...prev, { id: nextId.current++, text, sent }]);
        scrollDown();
    };

    // Ask the question at [sectionIdx][questionIdx]
    const askQuestion = (si: number, qi: number) => {
        const sec = SECTIONS[si];
        const q = QUESTIONS[sec]?.[qi];
        if (q) {
            setTimeout(() => {
                addMsg(q.text, false);
            }, 300);
        }
    };

    // Initial question — guard against React 18 StrictMode double-fire
    const initAsked = useRef(false);
    useEffect(() => {
        if (initAsked.current) return;
        initAsked.current = true;
        setTimeout(() => addMsg(QUESTIONS['projects'][0].text, false), 400);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Record answer, show NIM reaction, then advance to next question
    const handleAnswer = async (answer: string) => {
        if (!answer.trim() || done) return;
        addMsg(answer, true);

        // Store answer
        const qText = currentQ?.text ?? '';
        answersRef.current.push({ section, question: qText, answer });

        const nextQIdx = questionIdx + 1;
        const nextSectionIdx = sectionIdx + 1;

        // Show thinking dots while NIM generates a contextual reaction
        setThinking(true);
        const reaction = await reactToAnswer(qText, answer, section);
        setThinking(false);

        // Show the reaction (specific to what the user said)
        if (reaction) {
            addMsg(reaction, false);
            await new Promise(r => setTimeout(r, 600));
        }

        if (nextQIdx < questions.length) {
            // Next question in same section
            setQuestionIdx(nextQIdx);
            setThinking(true);
            await new Promise(r => setTimeout(r, 350));
            setThinking(false);
            addMsg(QUESTIONS[section][nextQIdx].text, false);
        } else if (nextSectionIdx < SECTIONS.length) {
            // Move to next section with a bridge
            const bridge = TRANSITION_MESSAGES[nextSectionIdx] ?? "Let's keep going.";
            setThinking(true);
            await new Promise(r => setTimeout(r, 350));
            setThinking(false);
            addMsg(bridge, false);
            setSectionIdx(nextSectionIdx);
            setQuestionIdx(0);
            const nextSec = SECTIONS[nextSectionIdx];
            await new Promise(r => setTimeout(r, 500));
            addMsg(QUESTIONS[nextSec][0].text, false);
        } else {
            // All done
            setThinking(true);
            await new Promise(r => setTimeout(r, 350));
            setThinking(false);
            setDone(true);
            addMsg("That's everything! Building your profile from what you've shared\u2026", false);
            finishInterview();
        }
    };


    const finishInterview = async () => {
        setSaving(true);
        try {
            const conversationText = answersRef.current
                .map(a => `Nexus: ${a.question}\nStudent: ${a.answer}`)
                .join('\n');
            const extracted = await extractProfile(conversationText);

            if (extracted && user && !extracted.error) {
                const updates: Record<string, any> = { interviewCompleted: true };
                if (extracted.hard_skills?.length) updates.techSkills = extracted.hard_skills.filter((s: any) => s.confidence > 0.3).map((s: any) => s.name);
                if (extracted.soft_skills?.length) updates.nonTechSkills = extracted.soft_skills.filter((s: any) => s.confidence > 0.3).map((s: any) => s.name);
                if (extracted.bio) updates.aboutMe = extracted.bio;
                if (extracted.working_style) updates.workingStyle = extracted.working_style;
                if (extracted.domains?.length) updates.domains = extracted.domains.map((d: any) => d.name);
                if (extracted.suggested_keywords?.length) updates.keywords = extracted.suggested_keywords;
                try {
                    const token = localStorage.getItem('waves_token');
                    await fetch(`/api/users/${user.uid}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                        body: JSON.stringify(updates),
                    });
                    await refreshProfile();
                } catch { }
            }
            setTimeout(() => {
                addMsg("Your profile is ready! Taking you to Discover…", false);
                setTimeout(() => router.push('/swipe'), 1800);
            }, 800);
        } catch { setTimeout(() => router.push('/swipe'), 1000); }
        finally { setSaving(false); }
    };

    // Handle text submit
    const sendText = () => {
        const text = input.trim();
        if (!text) return;
        setInput('');
        handleAnswer(text);
    };

    // Handle multi-select Done
    const sendMulti = () => {
        if (multiSelected.length === 0) return;
        const answer = multiSelected.join(', ');
        setMultiSelected([]);
        handleAnswer(answer);
    };

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') sendText(); };

    // Jump to a section when pill is clicked
    const jumpToSection = (si: number) => {
        if (done) return;
        const sec = SECTIONS[si];
        setSectionIdx(si);
        setQuestionIdx(0);
        const bridge = si === 0 ? null : TRANSITION_MESSAGES[si];
        if (bridge) addMsg(bridge, false);
        addMsg(QUESTIONS[sec][0].text, false);
    };

    // Progress 0-100
    const totalQ = SECTIONS.reduce((s, sec) => s + QUESTIONS[sec].length, 0);
    const answeredQ = answersRef.current.length;
    const progress = Math.min((answeredQ / totalQ) * 100, 100);

    // Show MCQ options only when the LAST message is from AI and current question is mcq/multi
    const lastMsg = messages[messages.length - 1];
    const showOptions = !done && !thinking && lastMsg && !lastMsg.sent && currentQ && (currentQ.type === 'mcq' || currentQ.type === 'multi');
    const showTextInput = !done && !thinking && currentQ?.type === 'open';

    return (
        <div style={{
            height: '100%', width: '100%', maxWidth: 430, margin: '0 auto',
            display: 'flex', flexDirection: 'column', background: 'var(--black)',
            fontFamily: 'var(--sans)', position: 'relative', overflow: 'hidden',
        }}>
            {/* Header */}
            <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div>
                        <div style={{ fontSize: 18, color: 'var(--pure)' }}>Scout</div>
                        <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                            AI Interview · {SECTION_LABELS[section]}
                        </div>
                    </div>
                    <button onClick={() => router.push('/swipe')} style={{ fontSize: 11, color: 'var(--muted)', background: 'none', border: '1px solid var(--border)', borderRadius: 20, padding: '4px 12px', cursor: 'pointer', fontFamily: 'var(--sans)' }}>
                        Skip →
                    </button>
                </div>

                {/* Progress bar */}
                <div style={{ height: 2, background: 'var(--mid)', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                    <div style={{ height: '100%', background: 'var(--pure)', borderRadius: 2, width: `${progress}%`, transition: 'width 0.5s ease' }} />
                </div>

                {/* Section pills — clickable */}
                <div style={{ display: 'flex', gap: 6 }}>
                    {SECTIONS.map((s, i) => (
                        <button key={s} onClick={() => !done && jumpToSection(i)} style={{
                            flex: 1, fontSize: 9, textTransform: 'uppercase', letterSpacing: 0.4,
                            padding: '4px 0', borderRadius: 20, cursor: done ? 'default' : 'pointer',
                            fontFamily: 'var(--sans)', transition: 'all 0.2s',
                            background: i < sectionIdx ? 'var(--pure)' : i === sectionIdx ? 'var(--dark)' : 'transparent',
                            color: i < sectionIdx ? 'var(--black)' : i === sectionIdx ? 'var(--white)' : 'var(--muted)',
                            border: '1px solid',
                            borderColor: i <= sectionIdx ? 'var(--pure)' : 'var(--border)',
                        }}>
                            {SECTION_LABELS[s]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {messages.map(m => (
                    <div key={m.id} className={`msg ${m.sent ? 'sent' : 'recv'}`}>
                        {m.text}
                    </div>
                ))}

                {/* Thinking dots */}
                {thinking && (
                    <div className="msg recv" style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '12px 16px' }}>
                        {[0, 1, 2].map(i => (
                            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--muted)', animation: 'bounce 1.2s infinite', animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                )}

                {/* MCQ options */}
                {showOptions && currentQ.type === 'mcq' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
                        {currentQ.options!.map(opt => (
                            <button key={opt} onClick={() => handleAnswer(opt)} style={{
                                textAlign: 'left', padding: '11px 16px', background: 'var(--dark)',
                                border: '1px solid var(--border)', borderRadius: 12, cursor: 'pointer',
                                fontSize: 13, color: 'var(--white)', fontFamily: 'var(--sans)',
                                transition: 'all 0.15s',
                            }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--pure)'; (e.currentTarget as HTMLButtonElement).style.background = 'var(--mid)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLButtonElement).style.background = 'var(--dark)'; }}>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {/* Multi-select options */}
                {showOptions && currentQ.type === 'multi' && (
                    <div style={{ marginTop: 4 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 10 }}>
                            {currentQ.options!.map(opt => {
                                const sel = multiSelected.includes(opt);
                                return (
                                    <button key={opt} onClick={() => setMultiSelected(prev => sel ? prev.filter(x => x !== opt) : [...prev, opt])} style={{
                                        padding: '7px 14px', borderRadius: 20, cursor: 'pointer',
                                        fontSize: 12, fontFamily: 'var(--sans)', transition: 'all 0.15s',
                                        background: sel ? 'var(--pure)' : 'var(--dark)',
                                        color: sel ? 'var(--black)' : 'var(--white)',
                                        border: `1.5px solid ${sel ? 'var(--pure)' : 'var(--border)'}`,
                                    }}>
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>
                        {multiSelected.length > 0 && (
                            <button onClick={sendMulti} style={{
                                padding: '10px 24px', background: 'var(--pure)', color: 'var(--black)',
                                border: 'none', borderRadius: 20, fontSize: 13, fontWeight: 700,
                                cursor: 'pointer', fontFamily: 'var(--sans)',
                            }}>
                                Done ({multiSelected.length} selected) →
                            </button>
                        )}
                    </div>
                )}

                <div ref={messagesEnd} />
            </div>

            {/* Text input (only for open questions) */}
            {showTextInput && (
                <div className="chat-input-row">
                    <input
                        className="chat-input"
                        placeholder="Type your answer…"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        autoFocus
                    />
                    <button className="send-btn" onClick={sendText} disabled={!input.trim()}>➤</button>
                </div>
            )}

            {/* Done state */}
            {done && (
                <div style={{ padding: '12px 20px 20px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontSize: 12, color: 'var(--subtle)' }}>
                        {saving ? 'Saving your profile…' : 'Profile built! Taking you to Discover…'}
                    </div>
                </div>
            )}

            <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    );
}
