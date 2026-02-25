module.exports = [
"[project]/src/app/seed/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function SeedPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [running, setRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const runSeed = async ()=>{
        setRunning(true);
        setStatus([
            '🌱 Connecting to MongoDB...'
        ]);
        try {
            const res = await fetch('/api/seed', {
                method: 'POST'
            });
            const data = await res.json();
            if (!res.ok) {
                setStatus((prev)=>[
                        ...prev,
                        `❌ Error: ${data.error || 'Unknown error'}`
                    ]);
            } else {
                const logs = data.logs || [
                    '✅ Cleared previous seed data',
                    `✅ Inserted ${data.usersInserted ?? 40} user profiles`,
                    `✅ Inserted ${data.projectsInserted ?? 50} projects`,
                    '🎉 Done! Database seeded successfully.'
                ];
                setStatus(logs);
                setDone(true);
            }
        } catch (e) {
            setStatus((prev)=>[
                    ...prev,
                    `❌ Error: ${e?.message}`
                ]);
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
                        lineNumber: 44,
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
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 43,
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
                    "This will generate and insert ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: 'var(--white)'
                        },
                        children: "40 User Profiles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 51,
                        columnNumber: 47
                    }, this),
                    " and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: 'var(--white)'
                        },
                        children: "50 Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 51,
                        columnNumber: 119
                    }, this),
                    " into MongoDB.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 51,
                        columnNumber: 195
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/seed/page.tsx",
                        lineNumber: 51,
                        columnNumber: 201
                    }, this),
                    "Previous seed data is cleared automatically before inserting fresh data."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 50,
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
                lineNumber: 55,
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
                        lineNumber: 71,
                        columnNumber: 43
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 70,
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
                        lineNumber: 77,
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
                        lineNumber: 80,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/seed/page.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/seed/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_seed_page_tsx_ff7b3bd0._.js.map