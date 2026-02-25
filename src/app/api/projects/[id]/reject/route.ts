import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { getUserFromRequest } from '@/lib/auth';

// POST /api/projects/[id]/reject — reject an interested user
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const { userId } = await req.json();
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    if (project.ownerId !== tokenUser.uid) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    project.interestedUsers = project.interestedUsers.filter((u) => u !== userId);
    await project.save();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
