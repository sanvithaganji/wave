import { NextRequest, NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';

const NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY!;
const NIM_BASE = 'https://integrate.api.nvidia.com/v1';
const EMBED_MODEL = 'nvidia/nv-embedqa-e5-v5';

async function embed(text: string): Promise<number[]> {
    const res = await fetch(`${NIM_BASE}/embeddings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${NIM_API_KEY}` },
        body: JSON.stringify({ model: EMBED_MODEL, input: [text], input_type: 'passage' }),
    });
    if (!res.ok) throw new Error(`Embed error: ${await res.text()}`);
    const data = await res.json();
    return data.data[0].embedding as number[];
}

function getIndex() {
    const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
    return pc.index(process.env.PINECONE_INDEX ?? 'nexus');
}

export async function POST(req: NextRequest) {
    try {
        const { action, payload } = await req.json();

        switch (action) {

            case 'upsert-candidate': {
                const { uid, profile } = payload as { uid: string; profile: Record<string, unknown> };
                const text = buildCandidateText(profile);
                const vector = await embed(text);
                const idx = getIndex().namespace('candidates');
                await idx.upsert({
                    records: [{
                        id: uid,
                        values: vector,
                        metadata: {
                            codeName: String(profile.codeName ?? ''),
                            college: String(profile.college ?? ''),
                            hard_skills: (profile.techSkills as string[] ?? []),
                            soft_skills: (profile.nonTechSkills as string[] ?? []),
                            interests: (profile.interests as string[] ?? []),
                            working_style_pace: String((profile.workingStyle as Record<string, string> | undefined)?.pace ?? ''),
                            availability_hours: Number(profile.availabilityHoursPerWeek ?? 0),
                            headline: String(profile.headline ?? ''),
                            updated_at: new Date().toISOString(),
                        },
                    }]
                });
                return NextResponse.json({ ok: true });
            }

            case 'upsert-project': {
                const { id, project } = payload as { id: string; project: Record<string, unknown> };
                const text = buildProjectText(project);
                const vector = await embed(text);
                const idx = getIndex().namespace('projects');
                await idx.upsert({
                    records: [{
                        id,
                        values: vector,
                        metadata: {
                            name: String(project.name ?? ''),
                            ownerId: String(project.ownerId ?? ''),
                            ownerCodeName: String(project.ownerCodeName ?? ''),
                            desired_skills: (project.desiredSkills as string[] ?? []),
                            domain: String(project.domain ?? ''),
                            working_style_pace: String(project.workingStylePace ?? ''),
                            commitment_hours: Number(project.commitmentHours ?? 0),
                            status: String(project.status ?? 'open'),
                            updated_at: new Date().toISOString(),
                        },
                    }]
                });
                return NextResponse.json({ ok: true });
            }

            case 'search-candidates': {
                const { projectText, filters, topK = 20 } = payload as {
                    projectText: string; filters?: Record<string, string>; topK?: number
                };
                const vector = await embed(projectText);
                const idx = getIndex().namespace('candidates');
                const metadataFilter: Record<string, unknown> = {};
                if (filters?.pace) metadataFilter['working_style_pace'] = { $eq: filters.pace };
                const results = await idx.query({
                    vector,
                    topK,
                    includeMetadata: true,
                    ...(Object.keys(metadataFilter).length > 0 ? { filter: metadataFilter } : {}),
                });
                return NextResponse.json({
                    matches: results.matches.map((m) => ({
                        uid: m.id, score: m.score, metadata: m.metadata,
                    })),
                });
            }

            case 'search-projects': {
                const { candidateText, topK = 10 } = payload as { candidateText: string; topK?: number };
                const vector = await embed(candidateText);
                const idx = getIndex().namespace('projects');
                const results = await idx.query({ vector, topK, includeMetadata: true });
                return NextResponse.json({
                    matches: results.matches.map((m) => ({
                        id: m.id, score: m.score,
                        name: m.metadata?.name,
                        metadata: m.metadata,
                    })),
                });
            }

            case 'embed': {
                const { text } = payload as { text: string };
                const vector = await embed(text);
                return NextResponse.json({ vector });
            }

            default:
                return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
        }
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('[Pinecone API]', msg);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}

function buildCandidateText(p: Record<string, unknown>): string {
    const ws = p.workingStyle as Record<string, string> | undefined;
    return [
        String(p.headline ?? ''),
        String(p.aboutMe ?? ''),
        (p.techSkills as string[] ?? []).length ? `Tech skills: ${(p.techSkills as string[]).join(', ')}` : '',
        (p.nonTechSkills as string[] ?? []).length ? `Soft skills: ${(p.nonTechSkills as string[]).join(', ')}` : '',
        (p.interests as string[] ?? []).length ? `Interests: ${(p.interests as string[]).join(', ')}` : '',
        ws ? `Working style: ${ws.pace ?? ''}, ${ws.collaboration ?? ''}` : '',
        p.college ? `College: ${p.college}` : '',
    ].filter(Boolean).join('. ');
}

function buildProjectText(p: Record<string, unknown>): string {
    return [
        `Project: ${p.name}`,
        String(p.description ?? ''),
        (p.desiredSkills as string[] ?? []).length ? `Requires: ${(p.desiredSkills as string[]).join(', ')}` : '',
        p.domain ? `Domain: ${p.domain}` : '',
        p.workingStylePace ? `Pace: ${p.workingStylePace}` : '',
        p.commitmentHours ? `Commitment: ${p.commitmentHours}h/week` : '',
    ].filter(Boolean).join('. ');
}
