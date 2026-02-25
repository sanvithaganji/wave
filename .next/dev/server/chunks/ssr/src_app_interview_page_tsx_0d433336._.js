module.exports = [
"[project]/src/app/interview/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const QUESTIONS = {
    projects: [
        {
            id: 'p1',
            type: 'open',
            text: "What's the most interesting thing you've built or worked on recently?"
        },
        {
            id: 'p2',
            type: 'mcq',
            text: "What stage do you usually jump into projects?",
            options: [
                'From scratch — idea to execution',
                'Mid-build — joining an existing team',
                'Late stage — polish & ship'
            ]
        }
    ],
    skills: [
        {
            id: 's1',
            type: 'mcq',
            text: "Which area best describes you?",
            options: [
                'Frontend / Design',
                'Backend / Systems',
                'AI / ML / Data',
                'Hardware / IoT',
                'Full-stack',
                'Non-technical'
            ]
        },
        {
            id: 's2',
            type: 'open',
            text: "What tools or languages are you most confident with?"
        }
    ],
    interests: [
        {
            id: 'i1',
            type: 'multi',
            text: "Which domains excite you most? Pick all that apply, then tap Done.",
            options: [
                'Healthcare',
                'Fintech',
                'Sustainability',
                'Education',
                'Gaming',
                'Social Impact',
                'AgriTech',
                'Safety'
            ]
        },
        {
            id: 'i2',
            type: 'open',
            text: "What problem on campus genuinely annoys you — something you'd love to solve?"
        }
    ],
    'working-style': [
        {
            id: 'w1',
            type: 'mcq',
            text: "How do you prefer to work on projects?",
            options: [
                'Weekend hackathon sprint ⚡',
                'Month-long focused build 🔨',
                'Long-term research (6+ months) 📚'
            ]
        },
        {
            id: 'w2',
            type: 'mcq',
            text: "Your typical role in a team?",
            options: [
                'Lead the vision',
                'Execute the plan',
                'Flex between both'
            ]
        }
    ]
};
const SECTIONS = [
    'projects',
    'skills',
    'interests',
    'working-style'
];
const SECTION_LABELS = {
    projects: 'Projects',
    skills: 'Skills',
    interests: 'Interests',
    'working-style': 'Work Style'
};
const TRANSITION_MESSAGES = {
    1: "Got it! Now let's talk about your skills.",
    2: "Nice. What domains and problems excite you?",
    3: "Last section — how do you like to work?"
};
async function reactToAnswer(question, answer, section) {
    try {
        const res = await fetch('/api/nim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'react-to-answer',
                payload: {
                    question,
                    answer,
                    section
                }
            })
        });
        if (!res.ok) return '';
        const data = await res.json();
        return data.reaction?.trim() ?? '';
    } catch  {
        return '';
    }
}
async function extractProfile(conversationText) {
    try {
        const res = await fetch('/api/nim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'extract-profile',
                payload: {
                    conversationText
                }
            })
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.extracted ?? null;
    } catch  {
        return null;
    }
}
function InterviewPage() {
    const { user, refreshProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sectionIdx, setSectionIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [questionIdx, setQuestionIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [multiSelected, setMultiSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thinking, setThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const answersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const messagesEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const section = SECTIONS[sectionIdx];
    const questions = QUESTIONS[section];
    const currentQ = questions?.[questionIdx] ?? null;
    const scrollDown = ()=>setTimeout(()=>messagesEnd.current?.scrollIntoView({
                behavior: 'smooth'
            }), 80);
    const addMsg = (text, sent)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: nextId.current++,
                    text,
                    sent
                }
            ]);
        scrollDown();
    };
    // Ask the question at [sectionIdx][questionIdx]
    const askQuestion = (si, qi)=>{
        const sec = SECTIONS[si];
        const q = QUESTIONS[sec]?.[qi];
        if (q) {
            setTimeout(()=>{
                addMsg(q.text, false);
            }, 300);
        }
    };
    // Initial question — guard against React 18 StrictMode double-fire
    const initAsked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initAsked.current) return;
        initAsked.current = true;
        setTimeout(()=>addMsg(QUESTIONS['projects'][0].text, false), 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Record answer, show NIM reaction, then advance to next question
    const handleAnswer = async (answer)=>{
        if (!answer.trim() || done) return;
        addMsg(answer, true);
        // Store answer
        const qText = currentQ?.text ?? '';
        answersRef.current.push({
            section,
            question: qText,
            answer
        });
        const nextQIdx = questionIdx + 1;
        const nextSectionIdx = sectionIdx + 1;
        // Show thinking dots while NIM generates a contextual reaction
        setThinking(true);
        const reaction = await reactToAnswer(qText, answer, section);
        setThinking(false);
        // Show the reaction (specific to what the user said)
        if (reaction) {
            addMsg(reaction, false);
            await new Promise((r)=>setTimeout(r, 600));
        }
        if (nextQIdx < questions.length) {
            // Next question in same section
            setQuestionIdx(nextQIdx);
            setThinking(true);
            await new Promise((r)=>setTimeout(r, 350));
            setThinking(false);
            addMsg(QUESTIONS[section][nextQIdx].text, false);
        } else if (nextSectionIdx < SECTIONS.length) {
            // Move to next section with a bridge
            const bridge = TRANSITION_MESSAGES[nextSectionIdx] ?? "Let's keep going.";
            setThinking(true);
            await new Promise((r)=>setTimeout(r, 350));
            setThinking(false);
            addMsg(bridge, false);
            setSectionIdx(nextSectionIdx);
            setQuestionIdx(0);
            const nextSec = SECTIONS[nextSectionIdx];
            await new Promise((r)=>setTimeout(r, 500));
            addMsg(QUESTIONS[nextSec][0].text, false);
        } else {
            // All done
            setThinking(true);
            await new Promise((r)=>setTimeout(r, 350));
            setThinking(false);
            setDone(true);
            addMsg("That's everything! Building your profile from what you've shared\u2026", false);
            finishInterview();
        }
    };
    const finishInterview = async ()=>{
        setSaving(true);
        try {
            const conversationText = answersRef.current.map((a)=>`Nexus: ${a.question}\nStudent: ${a.answer}`).join('\n');
            const extracted = await extractProfile(conversationText);
            if (extracted && user && !extracted.error) {
                const updates = {
                    interviewCompleted: true
                };
                if (extracted.hard_skills?.length) updates.techSkills = extracted.hard_skills.filter((s)=>s.confidence > 0.3).map((s)=>s.name);
                if (extracted.soft_skills?.length) updates.nonTechSkills = extracted.soft_skills.filter((s)=>s.confidence > 0.3).map((s)=>s.name);
                if (extracted.bio) updates.aboutMe = extracted.bio;
                if (extracted.working_style) updates.workingStyle = extracted.working_style;
                if (extracted.domains?.length) updates.domains = extracted.domains.map((d)=>d.name);
                if (extracted.suggested_keywords?.length) updates.keywords = extracted.suggested_keywords;
                try {
                    const token = localStorage.getItem('waves_token');
                    await fetch(`/api/users/${user.uid}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(updates)
                    });
                    await refreshProfile();
                } catch  {}
            }
            setTimeout(()=>{
                addMsg("Your profile is ready! Taking you to Discover…", false);
                setTimeout(()=>router.push('/swipe'), 1800);
            }, 800);
        } catch  {
            setTimeout(()=>router.push('/swipe'), 1000);
        } finally{
            setSaving(false);
        }
    };
    // Handle text submit
    const sendText = ()=>{
        const text = input.trim();
        if (!text) return;
        setInput('');
        handleAnswer(text);
    };
    // Handle multi-select Done
    const sendMulti = ()=>{
        if (multiSelected.length === 0) return;
        const answer = multiSelected.join(', ');
        setMultiSelected([]);
        handleAnswer(answer);
    };
    const handleKey = (e)=>{
        if (e.key === 'Enter') sendText();
    };
    // Jump to a section when pill is clicked
    const jumpToSection = (si)=>{
        if (done) return;
        const sec = SECTIONS[si];
        setSectionIdx(si);
        setQuestionIdx(0);
        const bridge = si === 0 ? null : TRANSITION_MESSAGES[si];
        if (bridge) addMsg(bridge, false);
        addMsg(QUESTIONS[sec][0].text, false);
    };
    // Progress 0-100
    const totalQ = SECTIONS.reduce((s, sec)=>s + QUESTIONS[sec].length, 0);
    const answeredQ = answersRef.current.length;
    const progress = Math.min(answeredQ / totalQ * 100, 100);
    // Show MCQ options only when the LAST message is from AI and current question is mcq/multi
    const lastMsg = messages[messages.length - 1];
    const showOptions = !done && !thinking && lastMsg && !lastMsg.sent && currentQ && (currentQ.type === 'mcq' || currentQ.type === 'multi');
    const showTextInput = !done && !thinking && currentQ?.type === 'open';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: '100%',
            width: '100%',
            maxWidth: 430,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--black)',
            fontFamily: 'var(--sans)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '14px 20px 10px',
                    borderBottom: '1px solid var(--border)',
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 18,
                                            color: 'var(--pure)'
                                        },
                                        children: "Scout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/interview/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: 'var(--muted)',
                                            textTransform: 'uppercase',
                                            letterSpacing: 1
                                        },
                                        children: [
                                            "AI Interview · ",
                                            SECTION_LABELS[section]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/interview/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/swipe'),
                                style: {
                                    fontSize: 11,
                                    color: 'var(--muted)',
                                    background: 'none',
                                    border: '1px solid var(--border)',
                                    borderRadius: 20,
                                    padding: '4px 12px',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--sans)'
                                },
                                children: "Skip →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 306,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 2,
                            background: 'var(--mid)',
                            borderRadius: 2,
                            overflow: 'hidden',
                            marginBottom: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                background: 'var(--pure)',
                                borderRadius: 2,
                                width: `${progress}%`,
                                transition: 'width 0.5s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/interview/page.tsx",
                            lineNumber: 313,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 6
                        },
                        children: SECTIONS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>!done && jumpToSection(i),
                                style: {
                                    flex: 1,
                                    fontSize: 9,
                                    textTransform: 'uppercase',
                                    letterSpacing: 0.4,
                                    padding: '4px 0',
                                    borderRadius: 20,
                                    cursor: done ? 'default' : 'pointer',
                                    fontFamily: 'var(--sans)',
                                    transition: 'all 0.2s',
                                    background: i < sectionIdx ? 'var(--pure)' : i === sectionIdx ? 'var(--dark)' : 'transparent',
                                    color: i < sectionIdx ? 'var(--black)' : i === sectionIdx ? 'var(--white)' : 'var(--muted)',
                                    border: '1px solid',
                                    borderColor: i <= sectionIdx ? 'var(--pure)' : 'var(--border)'
                                },
                                children: SECTION_LABELS[s]
                            }, s, false, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 319,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 317,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/interview/page.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '16px 16px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                },
                children: [
                    messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `msg ${m.sent ? 'sent' : 'recv'}`,
                            children: m.text
                        }, m.id, false, {
                            fileName: "[project]/src/app/interview/page.tsx",
                            lineNumber: 337,
                            columnNumber: 21
                        }, this)),
                    thinking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "msg recv",
                        style: {
                            display: 'flex',
                            gap: 4,
                            alignItems: 'center',
                            padding: '12px 16px'
                        },
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: 'var(--muted)',
                                    animation: 'bounce 1.2s infinite',
                                    animationDelay: `${i * 0.2}s`
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 346,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 344,
                        columnNumber: 21
                    }, this),
                    showOptions && currentQ.type === 'mcq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 7,
                            marginTop: 4
                        },
                        children: currentQ.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAnswer(opt),
                                style: {
                                    textAlign: 'left',
                                    padding: '11px 16px',
                                    background: 'var(--dark)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 12,
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    color: 'var(--white)',
                                    fontFamily: 'var(--sans)',
                                    transition: 'all 0.15s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = 'var(--pure)';
                                    e.currentTarget.style.background = 'var(--mid)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = 'var(--border)';
                                    e.currentTarget.style.background = 'var(--dark)';
                                },
                                children: opt
                            }, opt, false, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 355,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 353,
                        columnNumber: 21
                    }, this),
                    showOptions && currentQ.type === 'multi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 7,
                                    marginBottom: 10
                                },
                                children: currentQ.options.map((opt)=>{
                                    const sel = multiSelected.includes(opt);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMultiSelected((prev)=>sel ? prev.filter((x)=>x !== opt) : [
                                                    ...prev,
                                                    opt
                                                ]),
                                        style: {
                                            padding: '7px 14px',
                                            borderRadius: 20,
                                            cursor: 'pointer',
                                            fontSize: 12,
                                            fontFamily: 'var(--sans)',
                                            transition: 'all 0.15s',
                                            background: sel ? 'var(--pure)' : 'var(--dark)',
                                            color: sel ? 'var(--black)' : 'var(--white)',
                                            border: `1.5px solid ${sel ? 'var(--pure)' : 'var(--border)'}`
                                        },
                                        children: opt
                                    }, opt, false, {
                                        fileName: "[project]/src/app/interview/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 372,
                                columnNumber: 25
                            }, this),
                            multiSelected.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendMulti,
                                style: {
                                    padding: '10px 24px',
                                    background: 'var(--pure)',
                                    color: 'var(--black)',
                                    border: 'none',
                                    borderRadius: 20,
                                    fontSize: 13,
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontFamily: 'var(--sans)'
                                },
                                children: [
                                    "Done (",
                                    multiSelected.length,
                                    " selected) →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/interview/page.tsx",
                                lineNumber: 389,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 371,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEnd
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 400,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/interview/page.tsx",
                lineNumber: 335,
                columnNumber: 13
            }, this),
            showTextInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "chat-input",
                        placeholder: "Type your answer…",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKey,
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 406,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-btn",
                        onClick: sendText,
                        disabled: !input.trim(),
                        children: "➤"
                    }, void 0, false, {
                        fileName: "[project]/src/app/interview/page.tsx",
                        lineNumber: 414,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/interview/page.tsx",
                lineNumber: 405,
                columnNumber: 17
            }, this),
            done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '12px 20px 20px',
                    borderTop: '1px solid var(--border)',
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 12,
                        color: 'var(--subtle)'
                    },
                    children: saving ? 'Saving your profile…' : 'Profile built! Taking you to Discover…'
                }, void 0, false, {
                    fileName: "[project]/src/app/interview/page.tsx",
                    lineNumber: 421,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/interview/page.tsx",
                lineNumber: 420,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/interview/page.tsx",
                lineNumber: 427,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/interview/page.tsx",
        lineNumber: 292,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_interview_page_tsx_0d433336._.js.map