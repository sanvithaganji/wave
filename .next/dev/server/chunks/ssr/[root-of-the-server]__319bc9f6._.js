module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/codenames.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCodeName",
    ()=>generateCodeName,
    "getAvatarPattern",
    ()=>getAvatarPattern,
    "getInitials",
    ()=>getInitials
]);
const adjectives = [
    'Anonymous',
    'Mysterious',
    'Silent',
    'Shadow',
    'Cosmic',
    'Stellar',
    'Quantum',
    'Nebula',
    'Cipher',
    'Phantom',
    'Arctic',
    'Lunar',
    'Solar',
    'Thunder',
    'Crystal',
    'Velvet',
    'Midnight',
    'Digital',
    'Binary',
    'Pixel',
    'Stealth',
    'Turbo',
    'Nimble',
    'Swift',
    'Clever',
    'Bold',
    'Brave',
    'Calm',
    'Daring',
    'Eager',
    'Fierce',
    'Gentle',
    'Hidden',
    'Iron',
    'Jade',
    'Keen',
    'Lively',
    'Noble',
    'Onyx',
    'Prime'
];
const animals = [
    'Dolphin',
    'Falcon',
    'Panther',
    'Wolf',
    'Eagle',
    'Tiger',
    'Hawk',
    'Lynx',
    'Raven',
    'Fox',
    'Otter',
    'Puma',
    'Cobra',
    'Owl',
    'Bear',
    'Shark',
    'Crane',
    'Viper',
    'Stag',
    'Lion',
    'Jaguar',
    'Heron',
    'Bison',
    'Gecko',
    'Koala',
    'Lemur',
    'Manta',
    'Newt',
    'Ocelot',
    'Panda',
    'Quail',
    'Robin',
    'Seal',
    'Toucan',
    'Urchin',
    'Vulture',
    'Wombat',
    'Xerus',
    'Yak',
    'Zebra',
    'Liger',
    'Pegasus',
    'Phoenix',
    'Griffin',
    'Dragon',
    'Sphinx',
    'Hydra',
    'Kraken',
    'Chimera',
    'Unicorn'
];
function generateCodeName() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return `${adj} ${animal}`;
}
function getInitials(codeName) {
    return codeName.split(' ').map((w)=>w[0]).join('').toUpperCase();
}
function getAvatarPattern(codeName) {
    const patterns = [
        {
            bg: '#000000',
            text: '#FFFFFF'
        },
        {
            bg: '#1a1a1a',
            text: '#FFFFFF'
        },
        {
            bg: '#333333',
            text: '#FFFFFF'
        },
        {
            bg: '#4d4d4d',
            text: '#FFFFFF'
        },
        {
            bg: '#666666',
            text: '#FFFFFF'
        },
        {
            bg: '#FFFFFF',
            text: '#000000'
        },
        {
            bg: '#f0f0f0',
            text: '#000000'
        },
        {
            bg: '#e0e0e0',
            text: '#000000'
        }
    ];
    let hash = 0;
    for(let i = 0; i < codeName.length; i++){
        hash = codeName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return patterns[Math.abs(hash) % patterns.length];
}
}),
"[project]/src/app/profile/onboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/codenames.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
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
const SECTION_TITLES = [
    'Past Projects',
    'Core Skills',
    'Your Interests',
    'Working Style'
];
function OnboardChatPage() {
    const { user, profile, loading, refreshProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentSectionIndex, setCurrentSectionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExtracting, setIsExtracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const section = SECTIONS[currentSectionIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) router.push('/auth');
    }, [
        user,
        loading,
        router
    ]);
    // Initial greeting for the first section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length === 0 && !isTyping && !isExtracting) {
            fetchNextQuestion([]);
        }
    }, [
        currentSectionIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [
        messages,
        isTyping
    ]);
    const fetchNextQuestion = async (history)=>{
        setIsTyping(true);
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
                        section
                    }
                })
            });
            const data = await res.json();
            if (data.reply) {
                setMessages((prev)=>[
                        ...prev,
                        {
                            role: 'assistant',
                            content: data.reply
                        }
                    ]);
            }
        } catch (error) {
            console.error('Failed to fetch next question:', error);
        } finally{
            setIsTyping(false);
        }
    };
    const handleSend = async ()=>{
        if (!input.trim() || isTyping) return;
        const userMsg = {
            role: 'user',
            content: input.trim()
        };
        const newHistory = [
            ...messages,
            userMsg
        ];
        setMessages(newHistory);
        setInput('');
        await fetchNextQuestion(newHistory);
    };
    const handleNextSection = ()=>{
        if (currentSectionIndex < SECTIONS.length - 1) {
            setCurrentSectionIndex((prev)=>prev + 1);
        } else {
            finishOnboarding();
        }
    };
    const finishOnboarding = async ()=>{
        if (!user) return;
        setIsExtracting(true);
        try {
            // Create a full transcript of the conversation
            const conversationText = messages.map((m)=>`${m.role === 'user' ? 'Student' : 'Assistant'}: ${m.content}`).join('\n');
            // 1. Extract Profile using NIM
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
            const data = await res.json();
            const st = data.extracted;
            if (!st || st.error) throw new Error('Failed to extract profile');
            // 2. Save to Firestore
            const codeName = profile?.codeName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCodeName"])();
            const userData = {
                uid: user.uid,
                codeName,
                email: profile?.email || '',
                phone: user.phoneNumber || '',
                realName: profile?.realName || '',
                aboutMe: st.bio || profile?.aboutMe || '',
                headline: st.headline || profile?.headline || '',
                techSkills: (st.hard_skills || []).map((s)=>s.name),
                nonTechSkills: (st.soft_skills || []).map((s)=>s.name),
                interests: (st.interests || []).map((s)=>s.name),
                availabilityHoursPerWeek: st.availability_hours_per_week || 10,
                workingStyle: st.working_style || {
                    pace: 'short-term',
                    collaboration: 'mixed',
                    risk: 'medium',
                    leadership: 'either'
                },
                // Preserve existing or default empty
                projects: profile?.projects || [],
                papers: profile?.papers || 0,
                patents: profile?.patents || 0,
                competitions: profile?.competitions || [],
                certifications: profile?.certifications || [],
                cgpa: profile?.cgpa || 0,
                internships: profile?.internships || [],
                age: profile?.age || 18,
                hackathons: profile?.hackathons || [],
                collaborationCount: profile?.collaborationCount || 0,
                github: profile?.github || '',
                linkedin: profile?.linkedin || '',
                codechef: profile?.codechef || '',
                leetcode: profile?.leetcode || '',
                hackerrank: profile?.hackerrank || '',
                college: profile?.college || '',
                rating: profile?.rating || 5.0,
                score: Object.keys(st).length,
                reports: profile?.reports || [],
                dateJoined: profile?.dateJoined || new Date().toISOString(),
                isActive: true,
                isStudent: true,
                profileCompleted: true
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), userData, {
                merge: true
            });
            // 3. Upsert to Pinecone
            await fetch('/api/pinecone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'upsert-candidate',
                    payload: {
                        uid: user.uid,
                        profile: userData
                    }
                })
            });
            await refreshProfile();
            router.push('/swipe');
        } catch (error) {
            console.error('Error extracting profile:', error);
            alert('Something went wrong interpreting your profile. Please try again.');
        } finally{
            setIsExtracting(false);
        }
    };
    if (loading || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    repeat: Infinity,
                    duration: 1,
                    ease: 'linear'
                },
                className: "w-8 h-8 border-2 border-black border-t-transparent rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/profile/onboard/page.tsx",
                lineNumber: 179,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profile/onboard/page.tsx",
            lineNumber: 178,
            columnNumber: 13
        }, this);
    }
    if (isExtracting) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: [
                            1,
                            1.1,
                            1
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut'
                    },
                    className: "w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-2xl",
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                        lineNumber: 196,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold tracking-tight mb-2",
                            children: "Analyzing your profile..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 199,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 max-w-xs mx-auto",
                            children: "Our AI is reading through your conversation and building your structured Nexus profile."
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                    lineNumber: 198,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/profile/onboard/page.tsx",
            lineNumber: 190,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100 px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineArrowLeft"], {
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/onboard/page.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-sm font-bold tracking-tight",
                                        children: "Nexus AI Onboarding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 font-bold uppercase tracking-widest",
                                        children: [
                                            "Part ",
                                            currentSectionIndex + 1,
                                            " of ",
                                            SECTIONS.length,
                                            ": ",
                                            SECTION_TITLES[currentSectionIndex]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/profile/onboard/page.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNextSection,
                        disabled: isTyping || messages.length < 2,
                        className: "text-xs font-bold text-black border border-gray-200 px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black",
                        children: currentSectionIndex < SECTIONS.length - 1 ? 'Next Topic →' : 'Finish Setup'
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/onboard/page.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-6 space-y-4 pb-32",
                children: [
                    messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-black text-white rounded-tr-sm' : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'}`,
                                children: msg.content
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/onboard/page.tsx",
                                lineNumber: 244,
                                columnNumber: 25
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 238,
                            columnNumber: 21
                        }, this)),
                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                    style: {
                                        animationDelay: '0ms'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                    style: {
                                        animationDelay: '150ms'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                    style: {
                                        animationDelay: '300ms'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 257,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                        lineNumber: 256,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/onboard/page.tsx",
                        lineNumber: 264,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/onboard/page.tsx",
                lineNumber: 236,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-lg mx-auto relative flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            },
                            placeholder: isTyping ? 'Assistant is typing...' : 'Type your answer...',
                            disabled: isTyping,
                            rows: 1,
                            className: "w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black min-h-[48px] max-h-32 resize-none transition-all disabled:opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 270,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            disabled: !input.trim() || isTyping,
                            className: "absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center disabled:opacity-30 disabled:bg-gray-200 disabled:text-gray-400 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlinePaperAirplane"], {
                                className: "rotate-90 ml-0.5 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/onboard/page.tsx",
                                lineNumber: 289,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/onboard/page.tsx",
                            lineNumber: 284,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profile/onboard/page.tsx",
                    lineNumber: 269,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/onboard/page.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/onboard/page.tsx",
        lineNumber: 209,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__319bc9f6._.js.map