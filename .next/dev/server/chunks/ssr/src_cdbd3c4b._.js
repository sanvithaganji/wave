module.exports = [
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
"[project]/src/app/profile/edit/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/codenames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function EditProfilePage() {
    const { user, profile, loading, refreshProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        realName: '',
        email: '',
        techSkills: [
            '',
            '',
            '',
            '',
            ''
        ],
        nonTechSkills: [
            '',
            '',
            ''
        ],
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
        isStudent: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) {
            router.push('/auth');
        }
        if (profile) {
            setForm({
                realName: profile.realName || '',
                email: profile.email || '',
                techSkills: [
                    ...profile.techSkills || [],
                    '',
                    '',
                    '',
                    '',
                    ''
                ].slice(0, 5),
                nonTechSkills: [
                    ...profile.nonTechSkills || [],
                    '',
                    '',
                    ''
                ].slice(0, 3),
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
                isStudent: profile.isStudent ?? true
            });
        }
    }, [
        user,
        profile,
        loading,
        router
    ]);
    const steps = [
        {
            title: 'Basics',
            subtitle: 'Hidden from others'
        },
        {
            title: 'Skills',
            subtitle: 'What you bring'
        },
        {
            title: 'Experience',
            subtitle: 'Your track record'
        },
        {
            title: 'Portfolio',
            subtitle: 'Hidden links'
        },
        {
            title: 'About',
            subtitle: 'Your public face'
        }
    ];
    const handleSave = async ()=>{
        if (!user) return;
        setSaving(true);
        try {
            const codeName = profile?.codeName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCodeName"])();
            const userData = {
                uid: user.uid,
                codeName,
                email: form.email,
                phone: user.phoneNumber || '',
                realName: form.realName,
                techSkills: form.techSkills.filter(Boolean),
                nonTechSkills: form.nonTechSkills.filter(Boolean),
                projects: profile?.projects || [],
                papers: form.papers,
                patents: form.patents,
                competitions: form.competitions.split(',').map((s)=>s.trim()).filter(Boolean),
                certifications: form.certifications.split(',').map((s)=>s.trim()).filter(Boolean),
                cgpa: form.cgpa,
                internships: form.internships.split(',').map((s)=>s.trim()).filter(Boolean),
                age: form.age,
                hackathons: form.hackathons.split(',').map((s)=>s.trim()).filter(Boolean),
                collaborationCount: profile?.collaborationCount || 0,
                github: form.github,
                linkedin: form.linkedin,
                codechef: form.codechef,
                leetcode: form.leetcode,
                hackerrank: form.hackerrank,
                college: form.college,
                aboutMe: form.aboutMe,
                rating: profile?.rating || 5.0,
                score: profile?.score || 0,
                reports: profile?.reports || [],
                dateJoined: profile?.dateJoined || new Date().toISOString(),
                isActive: true,
                isStudent: form.isStudent,
                profileCompleted: true
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', user.uid), userData);
            await refreshProfile();
            // First-time users go through the AI interview; existing users skip to swipe
            const isFirstTime = !profile?.interviewCompleted;
            router.push(isFirstTime ? '/interview' : '/swipe');
        } catch (error) {
            console.error('Error saving profile:', error);
        } finally{
            setSaving(false);
        }
    };
    const updateTechSkill = (index, value)=>{
        const newSkills = [
            ...form.techSkills
        ];
        newSkills[index] = value;
        setForm({
            ...form,
            techSkills: newSkills
        });
    };
    const updateNonTechSkill = (index, value)=>{
        const newSkills = [
            ...form.nonTechSkills
        ];
        newSkills[index] = value;
        setForm({
            ...form,
            nonTechSkills: newSkills
        });
    };
    if (loading) {
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
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profile/edit/page.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-lg mx-auto px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-tight",
                                children: profile?.profileCompleted ? 'Edit Profile' : 'Create Profile'
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: steps[currentStep].subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-lg mx-auto px-6 pb-3 flex gap-1.5",
                        children: steps.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `h-1 flex-1 rounded-full ${i <= currentStep ? 'bg-black' : 'bg-gray-200'}`,
                                initial: false,
                                animate: {
                                    backgroundColor: i <= currentStep ? '#000' : '#e5e7eb'
                                },
                                transition: {
                                    duration: 0.3
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/edit/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg mx-auto px-6 py-6 pb-32 overflow-y-auto",
                style: {
                    maxHeight: 'calc(100dvh - 120px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -20
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: [
                        currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mb-4",
                                    children: "This info is kept private and never shown to other users."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.realName,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    realName: e.target.value
                                                }),
                                            placeholder: "Your real name (hidden)",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: form.email,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    email: e.target.value
                                                }),
                                            placeholder: "your@email.com (hidden)",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Age"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: form.age,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    age: parseInt(e.target.value) || 18
                                                }),
                                            min: 16,
                                            max: 60,
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm({
                                                            ...form,
                                                            isStudent: true
                                                        }),
                                                    className: `flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${form.isStudent ? 'bg-black text-white' : 'border border-gray-200 text-gray-500'}`,
                                                    children: "Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm({
                                                            ...form,
                                                            isStudent: false
                                                        }),
                                                    className: `flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${!form.isStudent ? 'bg-black text-white' : 'border border-gray-200 text-gray-500'}`,
                                                    children: "Professional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "College / Organization"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.college,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    college: e.target.value
                                                }),
                                            placeholder: "Your college or organization",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block",
                                            children: "Tech Skills (up to 5)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: form.techSkills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: skill,
                                                    onChange: (e)=>updateTechSkill(i, e.target.value),
                                                    placeholder: `Tech skill ${i + 1}`,
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                                }, i, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block",
                                            children: "Non-Tech Skills (up to 3)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: form.nonTechSkills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: skill,
                                                    onChange: (e)=>updateNonTechSkill(i, e.target.value),
                                                    placeholder: `Non-tech skill ${i + 1}`,
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                                }, i, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                                    children: "CGPA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value: form.cgpa,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            cgpa: parseFloat(e.target.value) || 0
                                                        }),
                                                    placeholder: "8.5",
                                                    min: 0,
                                                    max: 10,
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                                    children: "Papers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: form.papers,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            papers: parseInt(e.target.value) || 0
                                                        }),
                                                    min: 0,
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                                    children: "Patents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: form.patents,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            patents: parseInt(e.target.value) || 0
                                                        }),
                                                    min: 0,
                                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Competitions (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.competitions,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    competitions: e.target.value
                                                }),
                                            placeholder: "Smart India Hackathon, Google DSC",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Certifications (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.certifications,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    certifications: e.target.value
                                                }),
                                            placeholder: "AWS, Google Cloud, etc.",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Internships (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.internships,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    internships: e.target.value
                                                }),
                                            placeholder: "Google, Microsoft, Startup XYZ",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "Hackathons (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.hackathons,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    hackathons: e.target.value
                                                }),
                                            placeholder: "HackMIT, ETHIndia, etc.",
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mb-2",
                                    children: "These links are hidden and only used to calculate your score."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                [
                                    {
                                        label: 'GitHub',
                                        key: 'github',
                                        placeholder: 'github.com/username'
                                    },
                                    {
                                        label: 'LinkedIn',
                                        key: 'linkedin',
                                        placeholder: 'linkedin.com/in/username'
                                    },
                                    {
                                        label: 'CodeChef',
                                        key: 'codechef',
                                        placeholder: 'codechef.com/users/username'
                                    },
                                    {
                                        label: 'LeetCode',
                                        key: 'leetcode',
                                        placeholder: 'leetcode.com/username'
                                    },
                                    {
                                        label: 'HackerRank',
                                        key: 'hackerrank',
                                        placeholder: 'hackerrank.com/username'
                                    }
                                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                                children: field.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                value: form[field.key],
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        [field.key]: e.target.value
                                                    }),
                                                placeholder: field.placeholder,
                                                className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, field.key, true, {
                                        fileName: "[project]/src/app/profile/edit/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block",
                                            children: "About Me (20 words max)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form.aboutMe,
                                            onChange: (e)=>{
                                                const words = e.target.value.split(/\s+/).filter(Boolean);
                                                if (words.length <= 20) {
                                                    setForm({
                                                        ...form,
                                                        aboutMe: e.target.value
                                                    });
                                                }
                                            },
                                            placeholder: "Passionate developer who loves building things that matter...",
                                            rows: 3,
                                            className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-black transition-colors resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400 mt-1",
                                            children: [
                                                form.aboutMe.split(/\s+/).filter(Boolean).length,
                                                "/20 words"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-2",
                                            children: "Your Anonymous Identity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold",
                                            children: profile?.codeName || '✨ Will be auto-generated'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "This code name is your identity on the platform. No one sees your real name."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this)
                    ]
                }, currentStep, true, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-lg mx-auto flex gap-3",
                    children: [
                        currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentStep(currentStep - 1),
                            className: "px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold transition-colors hover:border-black",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, this),
                        currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentStep(currentStep + 1),
                            className: "flex-1 py-3 bg-black text-white rounded-xl text-sm font-semibold",
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileTap: {
                                scale: 0.98
                            },
                            onClick: handleSave,
                            disabled: saving,
                            className: "flex-1 py-3 bg-black text-white rounded-xl text-sm font-semibold disabled:opacity-50",
                            children: saving ? 'Saving...' : 'Save Profile'
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/edit/page.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_cdbd3c4b._.js.map