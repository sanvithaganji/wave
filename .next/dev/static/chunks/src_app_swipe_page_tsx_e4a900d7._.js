(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/swipe/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SwipePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const MOCK_PROFILES = [
    {
        id: 'p1',
        codename: "Swift Lynx",
        emoji: "༄",
        college: "VNR VJIET",
        type: "Student",
        about: "Building systems that break gracefully. Obsessed with distributed infra and coffee.",
        techSkills: [
            "Rust",
            "Kubernetes",
            "GraphQL",
            "Redis",
            "WebAssembly"
        ],
        nonTechSkills: [
            "Technical Writing",
            "System Design",
            "Mentoring"
        ],
        scores: {
            leetcode: 1842,
            codechef: 1654,
            github: 47,
            collaborations: 12
        },
        totalScore: 94
    },
    {
        id: 'p2',
        codename: "Neon Moth",
        emoji: "𐦍",
        college: "BITS Pilani Hyderabad",
        type: "Student",
        about: "ML researcher by day, hackathon goblin by night. I find patterns in chaos.",
        techSkills: [
            "PyTorch",
            "Python",
            "CUDA",
            "FastAPI",
            "React"
        ],
        nonTechSkills: [
            "Research",
            "Public Speaking",
            "Design Thinking"
        ],
        scores: {
            leetcode: 2100,
            codechef: 1887,
            github: 62,
            collaborations: 8
        },
        totalScore: 88
    },
    {
        id: 'p3',
        codename: "Marble Fox",
        emoji: "𓃦",
        college: "IIIT Hyderabad",
        type: "Student",
        about: "Security enthusiast. CTF player. I read RFCs for fun and that says a lot.",
        techSkills: [
            "C++",
            "Assembly",
            "Networking",
            "Cryptography",
            "Linux"
        ],
        nonTechSkills: [
            "Problem Solving",
            "CTF Strategy",
            "Teaching"
        ],
        scores: {
            leetcode: 1975,
            codechef: 1720,
            github: 38,
            collaborations: 15
        },
        totalScore: 91
    },
    {
        id: 'p4',
        codename: "Void Crane",
        emoji: "𓅠",
        college: "IIT Hyderabad",
        type: "Student",
        about: "Full-stack dev who's slowly becoming a devops person against my will.",
        techSkills: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "AWS"
        ],
        nonTechSkills: [
            "Project Management",
            "Client Communication",
            "UX Research"
        ],
        scores: {
            leetcode: 1567,
            codechef: 1430,
            github: 29,
            collaborations: 20
        },
        totalScore: 78
    },
    {
        id: 'p5',
        codename: "Dusk Raven",
        emoji: "𓄿",
        college: "NIT Warangal",
        type: "Student",
        about: "Robotics and embedded systems. If it runs on metal, I want to program it.",
        techSkills: [
            "ROS",
            "C",
            "FPGA",
            "MATLAB",
            "Python"
        ],
        nonTechSkills: [
            "Hardware Debugging",
            "Team Leadership",
            "Documentation"
        ],
        scores: {
            leetcode: 1430,
            codechef: 1380,
            github: 55,
            collaborations: 9
        },
        totalScore: 82
    }
];
function SwipeCard({ profile, onSwipe, isTop, stackIndex }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const currentX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [dec, setDec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        right: 0
    });
    const onDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SwipeCard.useCallback[onDown]": (e)=>{
            if (!isTop) return;
            isDragging.current = true;
            startX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            startY.current = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            if (cardRef.current) {
                cardRef.current.classList.add('dragging');
                cardRef.current.style.transition = 'none';
            }
        }
    }["SwipeCard.useCallback[onDown]"], [
        isTop
    ]);
    const onMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SwipeCard.useCallback[onMove]": (e)=>{
            if (!isDragging.current || !isTop) return;
            const cx = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const cy = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
            const dx = cx - startX.current;
            const dy = cy - startY.current;
            currentX.current = dx;
            if (cardRef.current) cardRef.current.style.transform = `translateX(${dx}px) translateY(${dy * 0.3}px) rotate(${dx * 0.07}deg)`;
            const t = 60;
            if (dx > t) setDec({
                left: 0,
                right: Math.min((dx - t) / 60, 1)
            });
            else if (dx < -t) setDec({
                left: Math.min((-dx - t) / 60, 1),
                right: 0
            });
            else setDec({
                left: 0,
                right: 0
            });
        }
    }["SwipeCard.useCallback[onMove]"], [
        isTop
    ]);
    const onUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SwipeCard.useCallback[onUp]": ()=>{
            if (!isDragging.current || !isTop) return;
            isDragging.current = false;
            if (cardRef.current) {
                cardRef.current.classList.remove('dragging');
                cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
            }
            const dx = currentX.current;
            if (dx > 80) {
                if (cardRef.current) cardRef.current.style.transform = 'translateX(120%) rotate(20deg)';
                setTimeout({
                    "SwipeCard.useCallback[onUp]": ()=>onSwipe('right', profile.id)
                }["SwipeCard.useCallback[onUp]"], 350);
            } else if (dx < -80) {
                if (cardRef.current) cardRef.current.style.transform = 'translateX(-120%) rotate(-20deg)';
                setTimeout({
                    "SwipeCard.useCallback[onUp]": ()=>onSwipe('left', profile.id)
                }["SwipeCard.useCallback[onUp]"], 350);
            } else {
                if (cardRef.current) cardRef.current.style.transform = '';
                setDec({
                    left: 0,
                    right: 0
                });
            }
            currentX.current = 0;
        }
    }["SwipeCard.useCallback[onUp]"], [
        isTop,
        profile.id,
        onSwipe
    ]);
    const buttonSwipe = (dir)=>{
        if (!isTop || !cardRef.current) return;
        cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
        cardRef.current.style.transform = `translateX(${dir === 'right' ? 150 : -150}%) rotate(${dir === 'right' ? 20 : -20}deg)`;
        setTimeout(()=>onSwipe(dir, profile.id), 350);
    };
    profile._swipe = buttonSwipe;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "swipe-card",
        style: {
            zIndex: 10 - stackIndex,
            transform: isTop ? '' : `scale(${1 - stackIndex * 0.04}) translateY(${stackIndex * 10}px)`,
            opacity: stackIndex > 2 ? 0 : 1,
            pointerEvents: isTop ? 'auto' : 'none'
        },
        onMouseDown: onDown,
        onMouseMove: onMove,
        onMouseUp: onUp,
        onTouchStart: onDown,
        onTouchMove: onMove,
        onTouchEnd: onUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swipe-decision-left",
                style: {
                    opacity: dec.left
                },
                children: "✗ PASS"
            }, void 0, false, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swipe-decision-right",
                style: {
                    opacity: dec.right
                },
                children: "✓ CONNECT"
            }, void 0, false, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-bg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "avatar-circle",
                        children: profile.emoji
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "codename-tag",
                        children: profile.codename
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "score-tag",
                        children: [
                            "⬡ ",
                            profile.totalScore
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-college",
                        children: [
                            profile.college,
                            " · ",
                            profile.type
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-about",
                        children: [
                            '"',
                            profile.about,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "score-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "score-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-num",
                                        children: profile.scores.leetcode
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-lbl",
                                        children: "LeetCode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 99
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "score-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-num",
                                        children: profile.scores.codechef
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-lbl",
                                        children: "CodeChef"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 99
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "score-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-num",
                                        children: profile.scores.github
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-lbl",
                                        children: "GitHub★"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "score-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-num",
                                        children: profile.scores.collaborations
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "score-lbl",
                                        children: "Collabs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 105
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skills-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skills-label",
                                children: "Tech Skills"
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skills-row",
                                children: profile.techSkills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "skill-chip",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 78
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skills-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skills-label",
                                children: "Non-Tech"
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skills-row",
                                children: profile.nonTechSkills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "skill-chip non-tech",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/app/swipe/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 81
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/swipe/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(SwipeCard, "wWGV/7XT+O7q0X/vUjhGBQNM1T8=");
_c = SwipeCard;
function SwipePage() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fullList, setFullList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMatch, setShowMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwipePage.useEffect": ()=>{
            const token = localStorage.getItem('waves_token');
            if (!token) {
                setProfiles(MOCK_PROFILES);
                setFullList(MOCK_PROFILES);
                return;
            }
            const loadUsers = {
                "SwipePage.useEffect.loadUsers": async ()=>{
                    try {
                        const res = await fetch('/api/users', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        if (!res.ok) {
                            setProfiles(MOCK_PROFILES);
                            setFullList(MOCK_PROFILES);
                            return;
                        }
                        const { users } = await res.json();
                        const mapped = users.map({
                            "SwipePage.useEffect.loadUsers.mapped": (u)=>({
                                    id: u.uid,
                                    codename: u.codeName || 'Anonymous',
                                    emoji: u.codeName?.[0]?.toUpperCase() || '༄',
                                    college: u.college || 'Unknown',
                                    type: u.isStudent ? 'Student' : 'Professional',
                                    about: u.aboutMe || 'No bio yet.',
                                    techSkills: u.techSkills || [],
                                    nonTechSkills: u.nonTechSkills || [],
                                    scores: {
                                        leetcode: u.leetcode ? 100 : 0,
                                        codechef: u.codechef ? 100 : 0,
                                        github: u.github ? 10 : 0,
                                        collaborations: u.collaborationCount || 0
                                    },
                                    totalScore: u.score || 0
                                })
                        }["SwipePage.useEffect.loadUsers.mapped"]);
                        if (mapped.length > 0) {
                            setProfiles(mapped);
                            setFullList(mapped);
                        } else {
                            setProfiles(MOCK_PROFILES);
                            setFullList(MOCK_PROFILES);
                        }
                    } catch (err) {
                        console.warn('Swipe load error:', err);
                        setProfiles(MOCK_PROFILES);
                        setFullList(MOCK_PROFILES);
                    }
                }
            }["SwipePage.useEffect.loadUsers"];
            loadUsers();
        }
    }["SwipePage.useEffect"], [
        user
    ]);
    const handleSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SwipePage.useCallback[handleSwipe]": async (dir, id)=>{
            setProfiles({
                "SwipePage.useCallback[handleSwipe]": (prev)=>prev.filter({
                        "SwipePage.useCallback[handleSwipe]": (p)=>p.id !== id
                    }["SwipePage.useCallback[handleSwipe]"])
            }["SwipePage.useCallback[handleSwipe]"]);
            if (user) {
                const token = localStorage.getItem('waves_token');
                if (token) {
                    try {
                        const res = await fetch('/api/swipes', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                swipedId: id,
                                direction: dir
                            })
                        });
                        const data = await res.json();
                        if (data.matched) {
                            const matched = fullList.find({
                                "SwipePage.useCallback[handleSwipe].matched": (p)=>p.id === id
                            }["SwipePage.useCallback[handleSwipe].matched"]);
                            setTimeout({
                                "SwipePage.useCallback[handleSwipe]": ()=>setShowMatch(matched)
                            }["SwipePage.useCallback[handleSwipe]"], 400);
                        } else if (dir === 'right' && Math.random() > 0.6) {
                            // Demo visual match for seed users
                            const matched = fullList.find({
                                "SwipePage.useCallback[handleSwipe].matched": (p)=>p.id === id
                            }["SwipePage.useCallback[handleSwipe].matched"]);
                            setTimeout({
                                "SwipePage.useCallback[handleSwipe]": ()=>setShowMatch(matched)
                            }["SwipePage.useCallback[handleSwipe]"], 400);
                        }
                    } catch  {}
                }
            }
        }
    }["SwipePage.useCallback[handleSwipe]"], [
        user,
        fullList
    ]);
    const buttonSwipe = (dir)=>{
        if (profiles.length === 0) return;
        const top = profiles[0];
        if (top._swipe) top._swipe(dir);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "swipe-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swipe-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swipe-title"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swipe-count"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-stack",
                children: profiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty-swipe",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "big-icon",
                            children: "🌙"
                        }, void 0, false, {
                            fileName: "[project]/src/app/swipe/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "You've seen everyone",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/swipe/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 41
                                }, this),
                                "for now. Check back later."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/swipe/page.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "interested-btn",
                            style: {
                                marginTop: 8
                            },
                            onClick: ()=>setProfiles([
                                    ...fullList
                                ]),
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "[project]/src/app/swipe/page.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/swipe/page.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this) : profiles.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwipeCard, {
                        profile: p,
                        onSwipe: handleSwipe,
                        isTop: i === 0,
                        stackIndex: i
                    }, p.id, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            profiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swipe-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "action-btn reject",
                        onClick: ()=>buttonSwipe('left'),
                        children: "✗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "action-btn skip",
                        onClick: ()=>buttonSwipe('left'),
                        children: "↩"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "action-btn accept",
                        onClick: ()=>buttonSwipe('right'),
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            showMatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "match-popup",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "match-label",
                        children: "Connected"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "match-sub",
                        children: [
                            "You and ",
                            showMatch.codename,
                            " can now collaborate"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "match-avatars",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "match-av",
                                children: "˙ᵕ˙"
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "match-x",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "match-av",
                                children: showMatch.emoji
                            }, void 0, false, {
                                fileName: "[project]/src/app/swipe/page.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "match-btn",
                        onClick: ()=>{
                            setShowMatch(null);
                            router.push('/chat');
                        },
                        children: "Open Chat"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "match-skip",
                        onClick: ()=>setShowMatch(null),
                        children: "Maybe later"
                    }, void 0, false, {
                        fileName: "[project]/src/app/swipe/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/swipe/page.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/swipe/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s1(SwipePage, "G95BhogtSSS86jat9kOPMARneeM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = SwipePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "SwipeCard");
__turbopack_context__.k.register(_c1, "SwipePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_swipe_page_tsx_e4a900d7._.js.map