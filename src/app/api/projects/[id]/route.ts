import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/projects/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const project = await Project.findById(id).lean();
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    const projectObj = { ...project, id: (project as any)._id.toString() } as any;

    // Fetch approved profiles
    const approvedProfiles = await User.find(
      { uid: { $in: projectObj.approvedUsers || [] } },
      { password: 0, email: 0 }
    ).lean();

    // Fetch interested profiles (excluding already approved)
    const pendingUids = (projectObj.interestedUsers || []).filter(
      (uid: string) => !(projectObj.approvedUsers || []).includes(uid)
    );
    const interestedProfiles = await User.find(
      { uid: { $in: pendingUids } },
      { password: 0, email: 0 }
    ).lean();

    return NextResponse.json({ project: projectObj, approvedProfiles, interestedProfiles });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/projects/[id] — update project (owner only)
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    if (project.ownerId !== tokenUser.uid) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updates = await req.json();
    delete updates.ownerId;
    Object.assign(project, updates);
    await project.save();

    return NextResponse.json({ project });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
