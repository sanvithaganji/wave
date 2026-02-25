module.exports = [
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
    // Competitive profiles: each linked platform earns 10 pts (max 40)
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
        'Rating': Math.round((profile.rating ?? 0) * 10),
        'Collabs': Math.round((profile.collaborationCount ?? 0) * 20),
        'Tech Skills': countNonEmpty(profile.techSkills) * 5,
        'Non-Tech': countNonEmpty(profile.nonTechSkills) * 5,
        'Profiles': [
            profile.github,
            profile.codechef,
            profile.leetcode,
            profile.hackerrank
        ].filter((v)=>v && v.trim().length > 0).length * 10,
        'Hackathons': countNonEmpty(profile.hackathons) * 10,
        'Patents': (profile.patents ?? 0) * 20,
        'Projects': countNonEmpty(profile.projects) * 15,
        'Papers': (profile.papers ?? 0) * 20,
        'Certs': countNonEmpty(profile.certifications) * 10,
        'CGPA': Math.round((profile.cgpa ?? 0) * 10)
    };
}
}),
"[project]/src/app/seed/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scoreUtils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// ── Generator ─────────────────────────────────────────────────────────────────
const FIRST_NAMES = [
    'Arjun',
    'Priya',
    'Rahul',
    'Sneha',
    'Karan',
    'Aditi',
    'Rohan',
    'Neha',
    'Vikram',
    'Ananya',
    'Siddharth',
    'Meera',
    'Kabir',
    'Isha',
    'Dev',
    'Tara',
    'Samir',
    'Kavya',
    'Aryan',
    'Ria',
    'Aarav',
    'Nisha',
    'Aman',
    'Mitali'
];
const LAST_NAMES = [
    'Mehta',
    'Sharma',
    'Kumar',
    'Patel',
    'Singh',
    'Gupta',
    'Verma',
    'Reddy',
    'Rao',
    'Nair',
    'Das',
    'Bose',
    'Chopra',
    'Joshi',
    'Kapoor'
];
const COLLEGES = [
    'IIT Bombay',
    'BITS Pilani',
    'IIT Kharagpur',
    'Manipal Institute of Technology',
    'IIT Delhi',
    'NIT Trichy',
    'IIIT Hyderabad',
    'VIT Vellore',
    'SRM Chennai',
    'Delhi Technological University'
];
const ADJECTIVES = [
    'Swift',
    'Neon',
    'Marble',
    'Cloud',
    'Storm',
    'Void',
    'Dusk',
    'Crimson',
    'Azure',
    'Silent',
    'Iron',
    'Plasma',
    'Quantum',
    'Solar',
    'Lunar',
    'Echo'
];
const ANIMALS = [
    'Lynx',
    'Moth',
    'Fox',
    'Tiger',
    'Bear',
    'Crane',
    'Raven',
    'Wolf',
    'Owl',
    'Hawk',
    'Shark',
    'Viper',
    'Mantis',
    'Panther',
    'Falcon',
    'Jackal'
];
const TECH_POOL = [
    'Python',
    'React',
    'Node.js',
    'Docker',
    'Kubernetes',
    'Go',
    'Rust',
    'C++',
    'Java',
    'Figma',
    'Solidity',
    'PyTorch',
    'TensorFlow',
    'SQL',
    'MongoDB',
    'AWS',
    'GCP',
    'Azure',
    'GraphQL',
    'Swift',
    'Kotlin',
    'Flutter'
];
const NONTECH_POOL = [
    'Leadership',
    'UI/UX Design',
    'Product Management',
    'Public Speaking',
    'Technical Writing',
    'Agile',
    'Market Research',
    'Mentoring',
    'System Design',
    'Storytelling'
];
const DOMAIN_POOL = [
    'Healthcare',
    'Farming',
    'Travel',
    'Food Tech',
    'Education',
    'Sustainability',
    'FinTech',
    'Safety',
    'Web3',
    'AI/ML',
    'IoT',
    'Cybersecurity'
];
const PACES = [
    'hackathon',
    'short-term',
    'long-term'
];
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomSubset(arr, max) {
    const shuffled = [
        ...arr
    ].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * max) + 1);
}
function generateUsers(count) {
    const users = [];
    for(let i = 0; i < count; i++){
        const fn = randomChoice(FIRST_NAMES);
        const ln = randomChoice(LAST_NAMES);
        const codeName = `${randomChoice(ADJECTIVES)} ${randomChoice(ANIMALS)}`;
        const base = {
            uid: `seed_user_gen_${i}`,
            codeName,
            email: `${fn.toLowerCase()}.${ln.toLowerCase()}@example.com`,
            phone: '',
            realName: `${fn} ${ln}`,
            college: randomChoice(COLLEGES),
            techSkills: randomSubset(TECH_POOL, 6),
            nonTechSkills: randomSubset(NONTECH_POOL, 3),
            aboutMe: `Passionate student builder. I love working on ${randomChoice(DOMAIN_POOL)} and experimenting with ${randomChoice(TECH_POOL)}. Always looking for the next big hackathon!`,
            hackathons: randomSubset([
                'Smart India Hackathon',
                'ETHGlobal',
                'HackMIT',
                'MLH Hacks',
                'TCS CodeVita'
            ], 3),
            papers: Math.random() > 0.8 ? 1 : 0,
            patents: 0,
            cgpa: parseFloat((7 + Math.random() * 2.9).toFixed(1)),
            competitions: [],
            certifications: randomSubset([
                'AWS Certified',
                'Google Cloud Engineer',
                'Meta Frontend Developer',
                'DeepLearning.AI'
            ], 2),
            internships: Math.random() > 0.5 ? [
                'Startup Intern'
            ] : [],
            github: `${fn.toLowerCase()}${ln.toLowerCase()}`,
            linkedin: `${fn.toLowerCase()}${ln.toLowerCase()}`,
            codechef: Math.random() > 0.5 ? `${fn.toLowerCase()}_cc` : '',
            leetcode: Math.random() > 0.5 ? `${fn.toLowerCase()}_lc` : '',
            hackerrank: '',
            projects: [],
            collaborationCount: Math.floor(Math.random() * 10),
            rating: parseFloat((4 + Math.random() * 1).toFixed(1)),
            reports: [],
            dateJoined: new Date().toISOString(),
            isActive: true,
            isStudent: true,
            profileCompleted: true,
            interviewCompleted: true,
            workingStyle: {
                pace: randomChoice(PACES),
                collaboration: 'mixed',
                leadership: 'either',
                risk: 'medium'
            },
            domains: randomSubset(DOMAIN_POOL, 2),
            availabilityHours: 10 + Math.floor(Math.random() * 20),
            keywords: [
                randomChoice(TECH_POOL).toLowerCase(),
                randomChoice(DOMAIN_POOL).toLowerCase()
            ]
        };
        users.push({
            ...base,
            score: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateScore"])(base)
        });
    }
    return users;
}
const PROJECT_PREFIX = [
    'Smart',
    'Decentralized',
    'AI-powered',
    'Hyper',
    'Open',
    'Secure',
    'NextGen',
    'Eco',
    'Quantum',
    'Campus'
];
const PROJECT_NOUN = [
    'Health',
    'Farm',
    'Chain',
    'Wallet',
    'Learn',
    'Track',
    'Vision',
    'Voice',
    'Net',
    'Sync',
    'Bot',
    'Hub'
];
function generateProjects(count, users) {
    const projects = [];
    for(let i = 0; i < count; i++){
        const owner = randomChoice(users);
        const domain = randomChoice(DOMAIN_POOL);
        projects.push({
            ownerId: owner.uid,
            ownerCodeName: owner.codeName,
            name: `${randomChoice(PROJECT_PREFIX)}${randomChoice(PROJECT_NOUN)}`,
            description: `A revolutionary project in the ${domain} space. We aim to disrupt the industry by combining ${randomChoice(TECH_POOL)} with ${randomChoice(TECH_POOL)}. Looking for passionate folks to join before our next launch.`,
            abstract: `Innovative platform for ${domain}.`,
            tags: randomSubset([
                ...TECH_POOL,
                domain
            ], 4),
            category: Math.random() > 0.8 ? 'hardware' : 'software',
            domain: domain.toLowerCase().replace('/', '-').replace(' ', '-'),
            isHackathon: Math.random() > 0.5,
            isCompetition: Math.random() > 0.8,
            interestedUsers: [],
            approvedUsers: [],
            teamSize: 2 + Math.floor(Math.random() * 4),
            createdAt: new Date().toISOString(),
            status: 'open',
            workingStylePace: randomChoice(PACES),
            commitmentHours: 5 + Math.floor(Math.random() * 20),
            desiredSkills: randomSubset(TECH_POOL, 3)
        });
    }
    return projects;
}
function SeedPage() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const log = (msg)=>setStatus((prev)=>[
                ...prev,
                msg
            ]);
    const runSeed = async ()=>{
        setRunning(true);
        setStatus([]);
        try {
            log('🧬 Generating 30 User Profiles...');
            const genUsers = generateUsers(30);
            log('🌱 Seeding Users into Firestore...');
            for (const u of genUsers){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', u.uid), u);
            }
            log(`✅ Inserted 30 users successfully.`);
            log('🧬 Generating 50 Projects...');
            const genProjects = generateProjects(50, genUsers);
            log('🚀 Seeding Projects into Firestore...');
            for (const p of genProjects){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects'), {
                    ...p,
                    id: undefined
                });
            }
            log(`✅ Inserted 50 projects successfully.`);
            log('🎉 Done! Database seeded with MASSIVE payload.');
            setDone(true);
        } catch (e) {
            log(`❌ Error: ${e?.message}`);
        } finally{
            setRunning(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--black)',
            fontFamily: 'var(--sans)',
            maxWidth: 430,
            margin: '0 auto',
            padding: '40px 24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 28,
                            color: 'var(--pure)',
                            marginBottom: 4
                        },
                        children: "Massive Seed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: 1
                        },
                        children: "Admin · Large Data Generator"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--dark)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 24,
                    fontSize: 13,
                    color: 'var(--subtle)',
                    lineHeight: 1.6
                },
                children: [
                    "This will proceduraly generate and insert ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: 'var(--white)'
                        },
                        children: "30 User Profiles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 164,
                        columnNumber: 59
                    }, this),
                    " and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: 'var(--white)'
                        },
                        children: "50 Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 164,
                        columnNumber: 131
                    }, this),
                    " into Firestore.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 164,
                        columnNumber: 209
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 164,
                        columnNumber: 215
                    }, this),
                    "Use this to fully populate the app and test scrolling, filtering, and real-time syncing at scale."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: runSeed,
                disabled: running || done,
                style: {
                    width: '100%',
                    padding: '14px',
                    marginBottom: 24,
                    background: done ? 'var(--mid)' : running ? 'var(--dark)' : 'var(--pure)',
                    color: done ? 'var(--subtle)' : 'var(--black)',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: 'var(--sans)',
                    cursor: running || done ? 'not-allowed' : 'pointer'
                },
                children: done ? 'Seeded ✓' : running ? 'Seeding...' : '🌱 Run Massive Seed'
            }, void 0, false, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this),
            status.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--dark)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: 16,
                    fontSize: 12,
                    color: 'var(--subtle)',
                    lineHeight: 2,
                    fontFamily: 'monospace'
                },
                children: status.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: s
                    }, i, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 186,
                        columnNumber: 43
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 185,
                columnNumber: 17
            }, this),
            done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    marginTop: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/swipe'),
                        style: {
                            flex: 1,
                            padding: '12px',
                            background: 'var(--pure)',
                            color: 'var(--black)',
                            border: 'none',
                            borderRadius: 12,
                            fontSize: 13,
                            fontWeight: 700,
                            fontFamily: 'var(--sans)',
                            cursor: 'pointer'
                        },
                        children: "→ Discover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 192,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/projects'),
                        style: {
                            flex: 1,
                            padding: '12px',
                            background: 'var(--dark)',
                            color: 'var(--white)',
                            border: '1px solid var(--border)',
                            borderRadius: 12,
                            fontSize: 13,
                            fontFamily: 'var(--sans)',
                            cursor: 'pointer'
                        },
                        children: "→ Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 195,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 191,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/seed/page.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_3f2fb00e._.js.map