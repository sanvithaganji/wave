module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/pinecone/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pinecone-database/pinecone/dist/index.js [app-route] (ecmascript)");
;
;
const NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;
const NIM_BASE = 'https://integrate.api.nvidia.com/v1';
const EMBED_MODEL = 'nvidia/nv-embedqa-e5-v5';
async function embed(text) {
    const res = await fetch(`${NIM_BASE}/embeddings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${NIM_API_KEY}`
        },
        body: JSON.stringify({
            model: EMBED_MODEL,
            input: [
                text
            ],
            input_type: 'passage'
        })
    });
    if (!res.ok) throw new Error(`Embed error: ${await res.text()}`);
    const data = await res.json();
    return data.data[0].embedding;
}
function getIndex() {
    const pc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pinecone$2d$database$2f$pinecone$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pinecone"]({
        apiKey: process.env.PINECONE_API_KEY
    });
    return pc.index(process.env.PINECONE_INDEX ?? 'nexus');
}
async function POST(req) {
    try {
        const { action, payload } = await req.json();
        switch(action){
            case 'upsert-candidate':
                {
                    const { uid, profile } = payload;
                    const text = buildCandidateText(profile);
                    const vector = await embed(text);
                    const idx = getIndex().namespace('candidates');
                    await idx.upsert({
                        records: [
                            {
                                id: uid,
                                values: vector,
                                metadata: {
                                    codeName: String(profile.codeName ?? ''),
                                    college: String(profile.college ?? ''),
                                    hard_skills: profile.techSkills ?? [],
                                    soft_skills: profile.nonTechSkills ?? [],
                                    interests: profile.interests ?? [],
                                    working_style_pace: String(profile.workingStyle?.pace ?? ''),
                                    availability_hours: Number(profile.availabilityHoursPerWeek ?? 0),
                                    headline: String(profile.headline ?? ''),
                                    updated_at: new Date().toISOString()
                                }
                            }
                        ]
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: true
                    });
                }
            case 'upsert-project':
                {
                    const { id, project } = payload;
                    const text = buildProjectText(project);
                    const vector = await embed(text);
                    const idx = getIndex().namespace('projects');
                    await idx.upsert({
                        records: [
                            {
                                id,
                                values: vector,
                                metadata: {
                                    name: String(project.name ?? ''),
                                    ownerId: String(project.ownerId ?? ''),
                                    ownerCodeName: String(project.ownerCodeName ?? ''),
                                    desired_skills: project.desiredSkills ?? [],
                                    domain: String(project.domain ?? ''),
                                    working_style_pace: String(project.workingStylePace ?? ''),
                                    commitment_hours: Number(project.commitmentHours ?? 0),
                                    status: String(project.status ?? 'open'),
                                    updated_at: new Date().toISOString()
                                }
                            }
                        ]
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: true
                    });
                }
            case 'search-candidates':
                {
                    const { projectText, filters, topK = 20 } = payload;
                    const vector = await embed(projectText);
                    const idx = getIndex().namespace('candidates');
                    const metadataFilter = {};
                    if (filters?.pace) metadataFilter['working_style_pace'] = {
                        $eq: filters.pace
                    };
                    const results = await idx.query({
                        vector,
                        topK,
                        includeMetadata: true,
                        ...Object.keys(metadataFilter).length > 0 ? {
                            filter: metadataFilter
                        } : {}
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        matches: results.matches.map((m)=>({
                                uid: m.id,
                                score: m.score,
                                metadata: m.metadata
                            }))
                    });
                }
            case 'search-projects':
                {
                    const { candidateText, topK = 10 } = payload;
                    const vector = await embed(candidateText);
                    const idx = getIndex().namespace('projects');
                    const results = await idx.query({
                        vector,
                        topK,
                        includeMetadata: true
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        matches: results.matches.map((m)=>({
                                id: m.id,
                                score: m.score,
                                name: m.metadata?.name,
                                metadata: m.metadata
                            }))
                    });
                }
            case 'embed':
                {
                    const { text } = payload;
                    const vector = await embed(text);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        vector
                    });
                }
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Unknown action'
                }, {
                    status: 400
                });
        }
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('[Pinecone API]', msg);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
function buildCandidateText(p) {
    const ws = p.workingStyle;
    return [
        String(p.headline ?? ''),
        String(p.aboutMe ?? ''),
        (p.techSkills ?? []).length ? `Tech skills: ${p.techSkills.join(', ')}` : '',
        (p.nonTechSkills ?? []).length ? `Soft skills: ${p.nonTechSkills.join(', ')}` : '',
        (p.interests ?? []).length ? `Interests: ${p.interests.join(', ')}` : '',
        ws ? `Working style: ${ws.pace ?? ''}, ${ws.collaboration ?? ''}` : '',
        p.college ? `College: ${p.college}` : ''
    ].filter(Boolean).join('. ');
}
function buildProjectText(p) {
    return [
        `Project: ${p.name}`,
        String(p.description ?? ''),
        (p.desiredSkills ?? []).length ? `Requires: ${p.desiredSkills.join(', ')}` : '',
        p.domain ? `Domain: ${p.domain}` : '',
        p.workingStylePace ? `Pace: ${p.workingStylePace}` : '',
        p.commitmentHours ? `Commitment: ${p.commitmentHours}h/week` : ''
    ].filter(Boolean).join('. ');
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__288fe1f3._.js.map