(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/codenames.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/codenames.ts [app-client] (ecmascript)");
'use client';
;
;
const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl'
};
function Avatar({ codeName, size = 'md' }) {
    const { bg, text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatarPattern"])(codeName);
    const initials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$codenames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(codeName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${sizeMap[size]} rounded-full flex items-center justify-center font-bold select-none border border-gray-200`,
        style: {
            backgroundColor: bg,
            color: text
        },
        children: initials
    }, void 0, false, {
        fileName: "[project]/src/components/Avatar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Avatar;
var _c;
__turbopack_context__.k.register(_c, "Avatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/[id]/matches/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectMatchesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ProjectMatchesPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const projectId = params.id;
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [candidates, setCandidates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [invitingMsg, setInvitingMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectMatchesPage.useEffect": ()=>{
            if (!loading && !user) router.push('/auth');
        }
    }["ProjectMatchesPage.useEffect"], [
        user,
        loading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectMatchesPage.useEffect": ()=>{
            const fetchMatches = {
                "ProjectMatchesPage.useEffect.fetchMatches": async ()=>{
                    if (!projectId) return;
                    try {
                        const prodDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'projects', projectId));
                        if (!prodDoc.exists()) throw new Error('Project not found');
                        const pData = {
                            id: prodDoc.id,
                            ...prodDoc.data()
                        };
                        setProject(pData);
                        if (pData.ownerId !== user?.uid) {
                            router.push(`/projects/${projectId}`);
                            return;
                        }
                        // 1. Vector Search Candidates
                        // Fallback to project description if NIM hasn't processed requirements yet
                        const projectText = pData._requirements?.enhanced_description || `${pData.name}. ${pData.description}. Needs: ${pData.tags?.join(', ')}`;
                        const searchRes = await fetch('/api/pinecone', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'search-candidates',
                                payload: {
                                    projectText,
                                    topK: 15
                                }
                            })
                        });
                        const searchData = await searchRes.json();
                        if (!searchData.matches || searchData.matches.length === 0) {
                            setIsSearching(false);
                            return;
                        }
                        // 2. Rerank using NIM
                        const rerankRes = await fetch('/api/nim', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'rerank-candidates',
                                payload: {
                                    candidates: searchData.matches,
                                    projectContext: projectText,
                                    topK: 10
                                }
                            })
                        });
                        const rerankData = await rerankRes.json();
                        const rankedMatches = (rerankData.ranked || []).map({
                            "ProjectMatchesPage.useEffect.fetchMatches.rankedMatches": (r)=>{
                                const original = searchData.matches.find({
                                    "ProjectMatchesPage.useEffect.fetchMatches.rankedMatches.original": (m)=>m.uid === r.uid
                                }["ProjectMatchesPage.useEffect.fetchMatches.rankedMatches.original"]);
                                return {
                                    ...r,
                                    metadata: original?.metadata || {},
                                    score: original?.score || 0
                                };
                            }
                        }["ProjectMatchesPage.useEffect.fetchMatches.rankedMatches"]);
                        // Fallback if NIM failed to rerank but Pinecone worked
                        if (rankedMatches.length === 0) {
                            setCandidates(searchData.matches.map({
                                "ProjectMatchesPage.useEffect.fetchMatches": (m, i)=>({
                                        uid: m.uid,
                                        rank: i + 1,
                                        justification: 'Matched based on shared keywords and semantic profile similarity.',
                                        concerns: null,
                                        metadata: m.metadata,
                                        score: m.score
                                    })
                            }["ProjectMatchesPage.useEffect.fetchMatches"]));
                        } else {
                            setCandidates(rankedMatches);
                        }
                    } catch (err) {
                        console.error('Error fetching matches:', err);
                    } finally{
                        setIsSearching(false);
                    }
                }
            }["ProjectMatchesPage.useEffect.fetchMatches"];
            if (user) fetchMatches();
        }
    }["ProjectMatchesPage.useEffect"], [
        projectId,
        user,
        router
    ]);
    const handleInvite = async (uid)=>{
        if (!project) return;
        setInvitingMsg(uid);
        try {
            // Add the user to the interested list silently, or we could automatically approve them.
            // For now, let's treat "Invite" as automatically adding them to interestedUsers
            // so they show up on the main project dashboard.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'projects', project.id), {
                interestedUsers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(uid)
            });
        // Optionally create a chat thread directly, but let's keep it simple.
        } catch (error) {
            console.error('Error inviting user:', error);
        } finally{
            setTimeout(()=>setInvitingMsg(null), 1000);
        }
    };
    if (loading || isSearching) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: [
                            1,
                            1.2,
                            1
                        ],
                        rotate: [
                            0,
                            180,
                            360
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut'
                    },
                    className: "w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineSparkles"], {
                        className: "text-white text-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold tracking-tight mb-2",
                            children: "Finding the right fit..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 max-w-xs mx-auto",
                            children: "Nexus AI is scanning the campus network, analyzing working styles, and matching skill vectors."
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, this);
    }
    if (!project) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-white/90 backdrop-blur-lg z-10 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto px-4 py-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineArrowLeft"], {
                                className: "text-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                lineNumber: 161,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-bold tracking-tight",
                                    children: "AI Matches"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        "for ",
                                        project.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl mx-auto px-4 py-6 space-y-4",
                children: candidates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 bg-white rounded-2xl border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-gray-600 mb-2",
                            children: "No strong matches found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 173,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 max-w-xs mx-auto",
                            children: "Your project might be highly specialized, or there aren't enough students on the platform yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                            lineNumber: 174,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                    lineNumber: 172,
                    columnNumber: 21
                }, this) : candidates.map((candidate, i)=>{
                    const isInvited = project.interestedUsers.includes(candidate.uid) || project.approvedUsers.includes(candidate.uid);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: i * 0.1
                        },
                        className: "bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest",
                                children: [
                                    "Match #",
                                    candidate.rank
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                lineNumber: 191,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        codeName: candidate.metadata?.codeName || 'Unknown',
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 pr-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold truncate",
                                                children: candidate.metadata?.codeName || 'Anonymous Student'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mb-1 truncate",
                                                children: candidate.metadata?.headline || candidate.metadata?.college
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1 mt-2",
                                                children: candidate.metadata?.hard_skills?.slice(0, 3).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-sm",
                                                        children: skill
                                                    }, skill, false, {
                                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-violet-50/50 rounded-xl p-4 border border-violet-100 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineSparkles"], {
                                                className: "text-violet-600 text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-widest text-violet-700",
                                                children: "Why them?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-800 leading-relaxed",
                                        children: candidate.justification
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 37
                                    }, this),
                                    candidate.concerns && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-2 border-t border-violet-100 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Note:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 45
                                            }, this),
                                            " ",
                                            candidate.concerns
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                lineNumber: 215,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleInvite(candidate.uid),
                                        disabled: isInvited || invitingMsg === candidate.uid,
                                        className: `flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${isInvited ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`,
                                        children: isInvited ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineCheck"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 49
                                                }, this),
                                                " Requested"
                                            ]
                                        }, void 0, true) : invitingMsg === candidate.uid ? 'Inviting...' : 'Invite to Project'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:border-black transition-colors",
                                        children: "View Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                                lineNumber: 230,
                                columnNumber: 33
                            }, this)
                        ]
                    }, candidate.uid, true, {
                        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                        lineNumber: 183,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[id]/matches/page.tsx",
        lineNumber: 154,
        columnNumber: 9
    }, this);
}
_s(ProjectMatchesPage, "10gdO0l5KlelbrlMU3pmYTJTIGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProjectMatchesPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectMatchesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c242f265._.js.map