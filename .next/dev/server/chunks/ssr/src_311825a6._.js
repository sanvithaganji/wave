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
"[project]/src/lib/scoreUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateScore",
    ()=>calculateScore,
    "scoreBreakdown",
    ()=>scoreBreakdown
]);
function calculateScore(profile) {
    const rating = (profile.rating ?? 0) * 10;
    const collabs = (profile.collaborationCount ?? 0) * 20;
    const tech = countNonEmpty(profile.techSkills) * 5;
    const nonTech = countNonEmpty(profile.nonTechSkills) * 5;
    // Competitive profiles: each linked platform earns 10 pts
    const competitive = [
        profile.github,
        profile.codechef,
        profile.leetcode,
        profile.hackerrank
    ].filter((v)=>v && v.trim().length > 0).length * 10;
    const hackathons = countNonEmpty(profile.hackathons) * 10;
    const patents = (profile.patents ?? 0) * 20;
    const projects = countNonEmpty(profile.projects) * 15;
    const papers = (profile.papers ?? 0) * 20;
    const certificates = countNonEmpty(profile.certifications) * 10;
    const cgpa = (profile.cgpa ?? 0) * 10;
    return Math.round(rating + collabs + tech + nonTech + competitive + hackathons + patents + projects + papers + certificates + cgpa);
}
/** Returns how many non-empty strings are in an array */ function countNonEmpty(arr) {
    return (arr ?? []).filter((v)=>v && v.trim().length > 0).length;
}
function scoreBreakdown(profile) {
    return {
        'Rating (×10)': Math.round((profile.rating ?? 0) * 10),
        'Collabs (×20)': Math.round((profile.collaborationCount ?? 0) * 20),
        'Tech Skills (×5)': countNonEmpty(profile.techSkills) * 5,
        'Non-Tech (×5)': countNonEmpty(profile.nonTechSkills) * 5,
        'Profiles (×10)': [
            profile.github,
            profile.codechef,
            profile.leetcode,
            profile.hackerrank
        ].filter((v)=>v && v.trim().length > 0).length * 10,
        'Hackathons (×10)': countNonEmpty(profile.hackathons) * 10,
        'Patents (×20)': (profile.patents ?? 0) * 20,
        'Projects (×15)': countNonEmpty(profile.projects) * 15,
        'Papers (×20)': (profile.papers ?? 0) * 20,
        'Certs (×10)': countNonEmpty(profile.certifications) * 10,
        'CGPA (×10)': Math.round((profile.cgpa ?? 0) * 10)
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/codenames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scoreUtils.ts [app-ssr] (ecmascript)");
'use client';
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
            const token = localStorage.getItem('waves_token');
            if (!token) {
                router.push('/auth');
                return;
            }
            const codeName = profile?.codeName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCodeName"])();
            const userData = {
                uid: user.uid,
                codeName,
                email: form.email,
                phone: '',
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
                score: 0,
                reports: profile?.reports || [],
                dateJoined: profile?.dateJoined || new Date().toISOString(),
                isActive: true,
                isStudent: form.isStudent,
                profileCompleted: true
            };
            userData.score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateScore"])(userData);
            const res = await fetch(`/api/users/${user.uid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });
            if (!res.ok) {
                const data = await res.json();
                console.error('Error saving profile:', data.error);
                return;
            }
            await refreshProfile();
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
            style: {
                height: '100vh',
                background: 'var(--black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    repeat: Infinity,
                    duration: 1,
                    ease: 'linear'
                },
                style: {
                    width: 32,
                    height: 32,
                    border: '2px solid var(--subtle)',
                    borderTopColor: 'transparent',
                    borderRadius: '50%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profile/edit/page.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this);
    }
    const labelStyle = {
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: 'var(--muted)',
        marginBottom: 8,
        fontWeight: 500,
        display: 'block'
    };
    const inputStyle = {
        width: '100%',
        background: 'var(--dark)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: '12px 16px',
        color: 'var(--white)',
        fontSize: 14,
        fontFamily: 'var(--sans)',
        outline: 'none',
        transition: 'border-color 0.2s'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--black)',
            color: 'var(--white)',
            fontFamily: 'var(--sans)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'sticky',
                    top: 0,
                    background: 'var(--black)',
                    zIndex: 10,
                    borderBottom: '1px solid var(--border)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 430,
                        margin: '0 auto',
                        padding: '24px 24px 16px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 28,
                                fontWeight: 700,
                                color: 'var(--pure)',
                                letterSpacing: -0.5,
                                marginBottom: 4
                            },
                            children: profile?.profileCompleted ? 'Edit Profile' : 'Onboarding'
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 13,
                                color: 'var(--subtle)'
                            },
                            children: steps[currentStep].subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 6,
                                marginTop: 20
                            },
                            children: steps.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        height: 4,
                                        flex: 1,
                                        borderRadius: 2
                                    },
                                    initial: false,
                                    animate: {
                                        backgroundColor: i <= currentStep ? 'var(--pure)' : 'var(--dark)'
                                    },
                                    transition: {
                                        duration: 0.3
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
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
                style: {
                    maxWidth: 430,
                    margin: '0 auto',
                    padding: '24px',
                    paddingBottom: 120
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
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: 'var(--subtle)',
                                        marginBottom: 4
                                    },
                                    children: "This info is kept private and never shown to other users."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 225,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 237,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 238,
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
                                            style: labelStyle,
                                            children: "Age"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 249,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm({
                                                            ...form,
                                                            isStudent: true
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: '14px',
                                                        borderRadius: 10,
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        fontFamily: 'var(--sans)',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        border: 'none',
                                                        background: form.isStudent ? 'var(--pure)' : 'var(--dark)',
                                                        color: form.isStudent ? 'var(--black)' : 'var(--subtle)'
                                                    },
                                                    children: "Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm({
                                                            ...form,
                                                            isStudent: false
                                                        }),
                                                    style: {
                                                        flex: 1,
                                                        padding: '14px',
                                                        borderRadius: 10,
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        fontFamily: 'var(--sans)',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        border: 'none',
                                                        background: !form.isStudent ? 'var(--pure)' : 'var(--dark)',
                                                        color: !form.isStudent ? 'var(--black)' : 'var(--subtle)'
                                                    },
                                                    children: "Professional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "College / Organization"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 288,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Tech Skills (up to 5)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            },
                                            children: form.techSkills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: skill,
                                                    onChange: (e)=>updateTechSkill(i, e.target.value),
                                                    placeholder: `Tech skill ${i + 1}`,
                                                    style: inputStyle,
                                                    onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                    onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                                }, i, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Non-Tech Skills (up to 3)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            },
                                            children: form.nonTechSkills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: skill,
                                                    onChange: (e)=>updateNonTechSkill(i, e.target.value),
                                                    placeholder: `Non-tech skill ${i + 1}`,
                                                    style: inputStyle,
                                                    onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                    onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                                }, i, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "CGPA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 343,
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
                                                    style: inputStyle,
                                                    onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                    onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Papers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 354,
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
                                                    style: inputStyle,
                                                    onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                    onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: labelStyle,
                                                    children: "Patents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 365,
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
                                                    style: inputStyle,
                                                    onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                    onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Competitions (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 377,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Certifications (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 388,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Internships (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 399,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Hackathons (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 410,
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
                                            style: inputStyle,
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: 'var(--subtle)',
                                        marginBottom: 4
                                    },
                                    children: "These links are hidden and only used to calculate your score."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 426,
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
                                                style: labelStyle,
                                                children: field.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                                lineNumber: 437,
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
                                                style: inputStyle,
                                                onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                                onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/profile/edit/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, field.key, true, {
                                        fileName: "[project]/src/app/profile/edit/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this),
                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "About Me (20 words max)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 456,
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
                                            rows: 4,
                                            style: {
                                                ...inputStyle,
                                                resize: 'none'
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = 'var(--subtle)',
                                            onBlur: (e)=>e.target.style.borderColor = 'var(--border)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 11,
                                                color: 'var(--subtle)',
                                                marginTop: 8,
                                                textAlign: 'right'
                                            },
                                            children: [
                                                form.aboutMe.split(/\s+/).filter(Boolean).length,
                                                "/20 words"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--dark)',
                                        borderRadius: 12,
                                        padding: 20,
                                        border: '1px solid var(--border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: 10,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1.5,
                                                color: 'var(--muted)',
                                                marginBottom: 8,
                                                fontWeight: 700
                                            },
                                            children: "Your Anonymous Identity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 24,
                                                fontWeight: 700,
                                                color: 'var(--pure)',
                                                marginBottom: 4
                                            },
                                            children: profile?.codeName || '✨ Auto-generating...'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 13,
                                                color: 'var(--subtle)',
                                                lineHeight: 1.5
                                            },
                                            children: "This code name is your identity on the platform. No one sees your real name."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/edit/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/edit/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this)
                    ]
                }, currentStep, true, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'var(--black)',
                    borderTop: '1px solid var(--border)',
                    padding: '16px 24px',
                    zIndex: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 430,
                        margin: '0 auto',
                        display: 'flex',
                        gap: 12
                    },
                    children: [
                        currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentStep(currentStep - 1),
                            style: {
                                padding: '14px 24px',
                                border: '1px solid var(--border)',
                                borderRadius: 12,
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: 'var(--sans)',
                                background: 'transparent',
                                color: 'var(--white)',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'var(--subtle)',
                            onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'var(--border)',
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this),
                        currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentStep(currentStep + 1),
                            style: {
                                flex: 1,
                                padding: '14px',
                                background: 'var(--pure)',
                                color: 'var(--black)',
                                border: 'none',
                                borderRadius: 12,
                                fontSize: 14,
                                fontWeight: 700,
                                fontFamily: 'var(--sans)',
                                cursor: 'pointer'
                            },
                            children: "Next Step"
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileTap: {
                                scale: 0.98
                            },
                            onClick: handleSave,
                            disabled: saving,
                            style: {
                                flex: 1,
                                padding: '14px',
                                background: saving ? 'var(--mid)' : 'var(--pure)',
                                color: 'var(--black)',
                                border: 'none',
                                borderRadius: 12,
                                fontSize: 14,
                                fontWeight: 700,
                                fontFamily: 'var(--sans)',
                                cursor: saving ? 'not-allowed' : 'pointer',
                                opacity: saving ? 0.7 : 1
                            },
                            children: saving ? 'Saving...' : 'Finish & Enter App 👋'
                        }, void 0, false, {
                            fileName: "[project]/src/app/profile/edit/page.tsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/profile/edit/page.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/edit/page.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/edit/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_311825a6._.js.map