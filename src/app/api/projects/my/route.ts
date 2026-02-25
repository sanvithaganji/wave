import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/projects/my — projects owned by or joined by the current user
export async function GET(req: NextRequest) {
  try {
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const owned = await Project.find({ ownerId: tokenUser.uid }).sort({ createdAt: -1 }).lean();
    const joined = await Project.find({
      approvedUsers: tokenUser.uid,
      ownerId: { $ne: tokenUser.uid },
    }).sort({ createdAt: -1 }).lean();

    const toProject = (p: any) => ({ ...p, id: p._id.toString() });

    return NextResponse.json({ owned: owned.map(toProject), joined: joined.map(toProject) });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
