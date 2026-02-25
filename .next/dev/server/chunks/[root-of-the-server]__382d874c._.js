module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

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
"[project]/src/app/api/nim/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;
const NIM_BASE_URL = 'https://integrate.api.nvidia.com/v1';
const NIM_MODEL = 'meta/llama-3.1-8b-instruct';
async function callNIM(systemPrompt, userPrompt, maxTokens = 200) {
    if (!NIM_API_KEY) throw new Error('NVIDIA_NIM_API_KEY not set');
    const response = await fetch(`${NIM_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${NIM_API_KEY}`
        },
        body: JSON.stringify({
            model: NIM_MODEL,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: userPrompt
                }
            ],
            temperature: 0.7,
            max_tokens: maxTokens
        })
    });
    if (!response.ok) throw new Error(`NIM API error: ${await response.text()}`);
    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() ?? '';
}
async function POST(req) {
    try {
        const body = await req.json();
        const { action, payload } = body;
        switch(action){
            // ── Original actions ────────────────────────────────────────────────────
            case 'compatibility':
                {
                    const { myProfile, theirProfile } = payload;
                    const system = `You are a collaboration matching assistant for a student platform called CampusLink. 
Analyze two student profiles and write a single, crisp 1-2 sentence insight about why they might work well together. 
Be specific, mention actual skills. Keep it under 35 words. No fluff.`;
                    const user = `Profile A — ${myProfile.codeName} (${myProfile.college}):
Skills: ${[
                        ...myProfile.techSkills,
                        ...myProfile.nonTechSkills
                    ].join(', ')}
Profile B — ${theirProfile.codeName} (${theirProfile.college}):
Skills: ${[
                        ...theirProfile.techSkills,
                        ...theirProfile.nonTechSkills
                    ].join(', ')}
Why might they collaborate well?`;
                    const insight = await callNIM(system, user);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        insight
                    });
                }
            case 'chat-suggest':
                {
                    const { messages, chatName, isGroup } = payload;
                    const system = `You are a smart reply assistant for a student collaboration app. 
Suggest exactly 3 short, natural reply options (under 12 words each).
Return ONLY a JSON array of 3 strings. Example: ["Sounds good!", "Let me check", "Can we do tomorrow?"]`;
                    const recent = messages.slice(-5).map((m)=>`${m.sent ? 'Me' : m.senderCodeName || chatName}: ${m.text}`).join('\n');
                    const user = `${isGroup ? 'Group chat' : 'Direct message'} context:\n${recent}\n\nSuggest 3 reply options:`;
                    const raw = await callNIM(system, user);
                    let suggestions = [];
                    try {
                        const match = raw.match(/\[[\s\S]*\]/);
                        if (match) suggestions = JSON.parse(match[0]);
                    } catch  {
                        suggestions = raw.split('\n').filter(Boolean).slice(0, 3).map((s)=>s.replace(/^["'\d.\-\s*]+/, '').replace(/["']$/, '').trim());
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        suggestions: suggestions.slice(0, 3)
                    });
                }
            case 'enhance-description':
                {
                    const { name, roughDescription, tags, domain, category } = payload;
                    const system = `You are a technical writing assistant for a student project platform.
Polish a project description to be concise, compelling and specific. 
Return only the improved description — 2 sentences max, under 50 words. No emojis.`;
                    const user = `Project: ${name}\nCategory: ${category}, Domain: ${domain}\nTags: ${tags.join(', ')}\nDraft: ${roughDescription}\n\nWrite improved version:`;
                    const enhanced = await callNIM(system, user);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        enhanced
                    });
                }
            case 'generate-aboutme':
                {
                    const { techSkills, nonTechSkills, college, hackathons, papers, internships } = payload;
                    const system = `You write punchy one-sentence "about me" bios for student tech profiles.
Under 20 words. First person. Specific and interesting. No clichés. No "passionate" or "aspiring".`;
                    const user = `Student at ${college}\nTech: ${techSkills.slice(0, 3).join(', ')}\nNon-tech: ${nonTechSkills.slice(0, 2).join(', ')}\nHackathons: ${hackathons?.length ?? 0}, Papers: ${papers ?? 0}, Internships: ${internships?.length ?? 0}\n\nWrite a 1-sentence about-me:`;
                    const aboutMe = await callNIM(system, user);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        aboutMe
                    });
                }
            // ── New Nexus actions ───────────────────────────────────────────────────
            case 'onboard-message':
                {
                    // Generates the next conversational interview question
                    const { conversationHistory, section } = payload;
                    const system = `You are a friendly onboarding assistant for "Nexus", a campus collaboration platform.
You interview students to understand their skills and interests through conversation — NOT through forms.
Section "${section}" covers: ${SECTION_HINTS[section] ?? section}.
Style: casual, curious, one question at a time. Max 2 sentences. Don't list multiple questions.
Keep it warm and specific to what they just said. No emojis.`;
                    const user = conversationHistory.length === 0 ? SECTION_OPENERS[section] ?? 'Tell me about yourself.' : conversationHistory.map((m)=>`${m.role === 'user' ? 'Student' : 'Assistant'}: ${m.content}`).join('\n') + '\nAssistant:';
                    const reply = await callNIM(system, user, 120);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        reply
                    });
                }
            case 'extract-profile':
                {
                    // Converts full conversation into structured profile JSON
                    const { conversationText } = payload;
                    const system = `You are a profile extraction engine. Read the conversation and extract structured data.
Return ONLY valid JSON matching this schema — no commentary:
{
  "hard_skills": [{"name": string, "confidence": 0-1}],
  "soft_skills": [{"name": string, "confidence": 0-1}],
  "interests": [{"name": string, "confidence": 0-1}],
  "domains": [{"name": string}],
  "working_style": {
    "pace": "hackathon"|"short-term"|"long-term",
    "collaboration": "sync"|"async"|"mixed",
    "leadership": "lead"|"follow"|"either",
    "risk": "low"|"medium"|"high"
  },
  "availability_hours_per_week": number,
  "headline": string,
  "bio": string,
  "suggested_keywords": [string]
}`;
                    const raw = await callNIM(system, `Conversation:\n${conversationText}\n\nExtract JSON:`, 600);
                    let extracted = {};
                    try {
                        const match = raw.match(/\{[\s\S]*\}/);
                        if (match) extracted = JSON.parse(match[0]);
                    } catch  {
                        extracted = {
                            error: 'parse_failed',
                            raw
                        };
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        extracted
                    });
                }
            case 'extract-project':
                {
                    // Converts project description into structured requirements
                    const { name, description, tags, domain, category, workingStylePace, commitmentHours } = payload;
                    const system = `You are a project requirement extraction engine for a student collaboration platform.
Given project info, produce a structured requirements JSON. Return ONLY valid JSON:
{
  "desired_hard_skills": [string],
  "desired_soft_skills": [string],
  "domains": [string],
  "complexity": "beginner"|"intermediate"|"advanced",
  "team_dynamics": string,
  "ideal_candidate_summary": string,
  "enhanced_description": string
}`;
                    const user = `Project: ${name}\nDescription: ${description}\nTags: ${(tags || []).join(', ')}\nDomain: ${domain}\nCategory: ${category}\nPace: ${workingStylePace}\nCommitment: ${commitmentHours}h/week\n\nExtract JSON:`;
                    const raw = await callNIM(system, user, 400);
                    let extracted = {};
                    try {
                        const match = raw.match(/\{[\s\S]*\}/);
                        if (match) extracted = JSON.parse(match[0]);
                    } catch  {
                        extracted = {
                            error: 'parse_failed',
                            raw
                        };
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        extracted
                    });
                }
            case 'react-to-answer':
                {
                    const { question, answer, section } = payload;
                    const system = `You are Nexus Scout, a warm and curious AI interviewer for a student collaboration platform.
The student just answered a question. React to their answer in exactly 1 sentence (under 28 words).
Be genuine and SPECIFIC — directly reference what they actually said (the tool, project, domain, or choice they mentioned).
Never use generic openers like "That's great!", "Wow!", "Interesting!", or "Cool!".
Make it feel personal and insightful — like you actually read their answer. No emojis. No follow-up question.`;
                    const user = `Section: ${section}
Question asked: ${question}
Student answered: "${answer}"
Write a 1-sentence specific reaction:`;
                    const reaction = await callNIM(system, user, 60);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        reaction
                    });
                }
            case 'rerank-candidates':
                {
                    // Takes top candidates + project context → returns ranked list with justifications
                    const { candidates, projectContext, topK = 10 } = payload;
                    const system = `You are a candidate ranking assistant for a student collaboration platform.
Given a project and top candidates, rank them and explain why each fits.
Return ONLY a JSON array of objects:
[{"uid": string, "rank": number, "justification": string (under 20 words), "concerns": string|null}]
Order by best fit first. Be direct and specific.`;
                    const candidateSummaries = candidates.slice(0, 20).map((c, i)=>`${i + 1}. ${c.metadata.codeName} — Skills: ${(c.metadata.hard_skills || []).join(', ')} — Pace: ${c.metadata.working_style_pace} — Score: ${c.score?.toFixed(2)}`).join('\n');
                    const user = `Project: ${projectContext}\n\nCandidates:\n${candidateSummaries}\n\nRank top ${topK}:`;
                    const raw = await callNIM(system, user, 800);
                    let ranked = [];
                    try {
                        const match = raw.match(/\[[\s\S]*\]/);
                        if (match) ranked = JSON.parse(match[0]);
                    } catch  {
                        ranked = [];
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ranked
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
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[NIM API]', message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
const SECTION_HINTS = {
    projects: 'past projects, what they built, what problem it solved',
    skills: 'technical skills, tools, languages, what they enjoy building',
    interests: 'domains they find exciting — healthcare, fintech, sustainability etc.',
    'working-style': 'pace preference (hackathon vs long-term), sync/async, leadership style'
};
const SECTION_OPENERS = {
    projects: "Let's start with the fun stuff — what's the most interesting thing you've built or worked on?",
    skills: "What's a tool or language you've gotten really comfortable with recently?",
    interests: "What kind of problem on campus genuinely annoys you — something you'd love to solve?",
    'working-style': "When you picture your ideal project — is it a weekend hackathon sprint, or something you chip away at over months?"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__382d874c._.js.map