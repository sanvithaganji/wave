import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/projects — list all open projects
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const domain = searchParams.get('domain');

    const filter: any = { status: 'open' };
    if (category) filter.category = category;
    if (domain) filter.domain = domain;

    const projects = await Project.find(filter).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ projects });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/projects — create a project
export async function POST(req: NextRequest) {
  try {
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    body.ownerId = tokenUser.uid;

    const project = await Project.create(body);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
