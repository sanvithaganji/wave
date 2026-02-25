(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/profile/edit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const SECTIONS = [
    'projects',
    'skills',
    'interests',
    'working-style'
];
const SECTION_LABELS = {
    projects: 'Your Projects',
    skills: 'Skills & Tools',
    interests: 'Interests & Domains',
    'working-style': 'Working Style'
};
const QUESTIONS_PER_SECTION = 2;
function OnboardingPage() {
    _s();
    const { user, refreshProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sectionIndex, setSectionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sectionQCount, setSectionQCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [extracting, setExtracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentSection = SECTIONS[sectionIndex];
    // Kick off the first question
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            if (!user) return;
            askNextQuestion([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["OnboardingPage.useEffect"], [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["OnboardingPage.useEffect"], [
        messages
    ]);
    const askNextQuestion = async (history)=>{
        setLoading(true);
        try {
            const res = await fetch('/api/nim', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'onboard-message',
                    payload: {
                        conversationHistory: history,
                        section: currentSection
                    }
                })
            });
            const { reply } = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: reply
                    }
                ]);
        } catch  {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: "Tell me more about yourself!"
                    }
                ]);
        } finally{
            setLoading(false);
            setTimeout(()=>inputRef.current?.focus(), 100);
        }
    };
    const handleSend = async ()=>{
        if (!input.trim() || loading) return;
        const userMsg = {
            role: 'user',
            content: input.trim()
        };
        const newMessages = [
            ...messages,
            userMsg
        ];
        setMessages(newMessages);
        setInput('');
        const newCount = sectionQCount + 1;
        setSectionQCount(newCount);
        if (newCount >= QUESTIONS_PER_SECTION) {
            // Run background extraction for this section
            runExtraction(newMessages.map((m)=>`${m.role === 'user' ? 'Student' : 'Assistant'}: ${m.content}`).join('\n'));
            if (sectionIndex + 1 < SECTIONS.length) {
                // Next section transition
                const nextSection = SECTIONS[sectionIndex + 1];
                setSectionIndex((i)=>i + 1);
                setSectionQCount(0);
                setMessages((prev)=>[
                        ...prev,
                        {
                            role: 'assistant',
                            content: `Great! Now let's talk about ${SECTION_LABELS[nextSection]}.`
                        }
                    ]);
                setTimeout(()=>askNextQuestion(newMessages), 600);
            } else {
                // All sections done
                await finalize(newMessages);
            }
        } else {
            await askNextQuestion(newMessages);
        }
    };
    const runExtraction = async (text)=>{
        try {
            const res = await fetch('/api/nim', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'extract-profile',
                    payload: {
                        conversationText: text
                    }
                })
            });
            const { extracted } = await res.json();
            if (extracted && !extracted.error) {
                setProfile((prev)=>mergeExtracted(prev, extracted));
            }
        } catch  {}
    };
    const finalize = async (history)=>{
        setExtracting(true);
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'assistant',
                    content: "That's all I need! Building your profile now — this takes just a moment ✦"
                }
            ]);
        // Final full extraction
        const fullText = history.map((m)=>`${m.role === 'user' ? 'Student' : 'Assistant'}: ${m.content}`).join('\n');
        let finalProfile = profile;
        try {
            const res = await fetch('/api/nim', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'extract-profile',
                    payload: {
                        conversationText: fullText
                    }
                })
            });
            const { extracted } = await res.json();
            if (extracted && !extracted.error) {
                finalProfile = mergeExtracted(profile, extracted);
                setProfile(finalProfile);
            }
        } catch  {}
        // Save to Firestore
        if (user) {
            const hardSkills = (finalProfile.hard_skills ?? []).map((s)=>s.name);
            const softSkills = (finalProfile.soft_skills ?? []).map((s)=>s.name);
            const interests = (finalProfile.interests ?? []).map((s)=>s.name);
            const ws = finalProfile.working_style ?? {};
            const profileData = {
                uid: user.uid,
                headline: finalProfile.headline ?? '',
                aboutMe: finalProfile.bio ?? '',
                techSkills: hardSkills,
                nonTechSkills: softSkills,
                interests,
                workingStyle: ws,
                availabilityHoursPerWeek: finalProfile.availability_hours_per_week ?? 10,
                suggestedKeywords: finalProfile.suggested_keywords ?? [],
                profileCompleted: true,
                score: computeScore(hardSkills, softSkills),
                collaborationCount: 0,
                hackathons: [],
                papers: 0,
                patents: 0,
                certifications: [],
                internships: [],
                cgpa: 0,
                college: '',
                isStudent: true,
                isActive: true,
                dateJoined: new Date().toISOString(),
                codeName: generateCodeName(),
                github: '',
                linkedin: '',
                leetcode: '',
                codechef: '',
                hackerrank: ''
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), profileData, {
                merge: true
            });
            // Upsert to Pinecone (best effort)
            try {
                await fetch('/api/pinecone', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'upsert-candidate',
                        payload: {
                            uid: user.uid,
                            profile: profileData
                        }
                    })
                });
            } catch  {}
        }
        setExtracting(false);
        await refreshProfile?.(); // update context BEFORE showing done
        setDone(true);
    };
    // Auto-redirect to /swipe when done
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OnboardingPage.useEffect": ()=>{
            if (done) {
                const t = setTimeout({
                    "OnboardingPage.useEffect.t": ()=>router.push('/swipe')
                }["OnboardingPage.useEffect.t"], 1500);
                return ({
                    "OnboardingPage.useEffect": ()=>clearTimeout(t)
                })["OnboardingPage.useEffect"];
            }
        }
    }["OnboardingPage.useEffect"], [
        done,
        router
    ]);
    const handleSkip = async ()=>{
        if (!user || loading) return;
        setExtracting(true);
        const minProfile = {
            uid: user.uid,
            headline: '',
            aboutMe: '',
            techSkills: [],
            nonTechSkills: [],
            interests: [],
            workingStyle: {},
            availabilityHoursPerWeek: 10,
            suggestedKeywords: [],
            profileCompleted: true,
            score: 30,
            collaborationCount: 0,
            hackathons: [],
            papers: 0,
            patents: 0,
            certifications: [],
            internships: [],
            cgpa: 0,
            college: '',
            isStudent: true,
            isActive: true,
            dateJoined: new Date().toISOString(),
            codeName: generateCodeName(),
            github: '',
            linkedin: '',
            leetcode: '',
            codechef: '',
            hackerrank: ''
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), minProfile, {
                merge: true
            });
            await refreshProfile?.();
        } catch  {}
        setExtracting(false);
        router.push('/swipe');
    };
    if (done) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-page",
            style: {
                flexDirection: 'column',
                gap: 16
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: 'var(--font-dm-serif)',
                        fontSize: 28
                    },
                    children: "You're in! ✦"
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'var(--subtle)',
                        fontSize: 14
                    },
                    children: "Heading to Discover..."
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner",
                    style: {
                        marginTop: 8
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profile/edit/page.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this);
    }
    const progress = (sectionIndex * QUESTIONS_PER_SECTION + Math.min(sectionQCount, QUESTIONS_PER_SECTION)) / (SECTIONS.length * QUESTIONS_PER_SECTION) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        style: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "c-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "c-logo",
                        children: [
                            "Campus",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Link"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 236,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nim-badge",
                                children: "✦ AI Interview"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSkip,
                                disabled: extracting,
                                style: {
                                    fontSize: 12,
                                    color: 'var(--subtle)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px 8px'
                                },
                                children: "Skip →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 3,
                    background: 'var(--mid)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        background: 'var(--white)',
                        width: `${progress}%`,
                        transition: 'width 0.6s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 0,
                    borderBottom: '1px solid var(--border)',
                    flexShrink: 0
                },
                children: SECTIONS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: '10px 4px',
                            textAlign: 'center',
                            fontSize: 10,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            color: i === sectionIndex ? 'var(--white)' : i < sectionIndex ? 'var(--subtle)' : 'var(--muted)',
                            borderBottom: i === sectionIndex ? '2px solid var(--white)' : '2px solid transparent',
                            fontWeight: i === sectionIndex ? 600 : 400
                        },
                        children: [
                            i < sectionIndex ? '✓ ' : '',
                            SECTION_LABELS[s]
                        ]
                    }, s, true, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                },
                children: [
                    messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `msg ${m.role === 'user' ? 'sent' : 'recv'}`,
                            style: {
                                maxWidth: '85%'
                            },
                            children: m.content
                        }, i, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "msg recv",
                        style: {
                            maxWidth: '85%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                opacity: 0.5
                            },
                            children: "✦ thinking..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    extracting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "msg system",
                        children: "Extracting your profile with AI..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-row",
                style: {
                    paddingBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        className: "chat-input",
                        placeholder: "Type your answer...",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                        disabled: loading || extracting
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-btn",
                        onClick: handleSend,
                        disabled: loading || extracting,
                        children: "➤"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/edit/page.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s(OnboardingPage, "sPahnZ/fyseTs2Bn0N7MoARWs2s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OnboardingPage;
// ── Helpers ────────────────────────────────────────────────────────────────────
function mergeExtracted(prev, next) {
    const merged = {
        ...prev
    };
    for (const key of Object.keys(next)){
        if (Array.isArray(next[key]) && Array.isArray(merged[key])) {
            // Merge arrays without duplicates
            const existing = merged[key].map((x)=>x.name ?? x);
            const incoming = next[key].filter((x)=>!existing.includes(x.name ?? x));
            merged[key] = [
                ...merged[key],
                ...incoming
            ];
        } else {
            merged[key] = next[key];
        }
    }
    return merged;
}
function computeScore(techSkills, softSkills) {
    return Math.min(100, 30 + techSkills.length * 5 + softSkills.length * 3);
}
function generateCodeName() {
    const adj = [
        'Swift',
        'Bright',
        'Sharp',
        'Deep',
        'Keen',
        'Bold',
        'Wise',
        'Calm'
    ];
    const noun = [
        'Falcon',
        'Comet',
        'Nexus',
        'Cipher',
        'Vector',
        'Apex',
        'Zephyr',
        'Pulse'
    ];
    return `${adj[Math.floor(Math.random() * adj.length)]} ${noun[Math.floor(Math.random() * noun.length)]}`;
}
var _c;
__turbopack_context__.k.register(_c, "OnboardingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_44379f90._.js.map