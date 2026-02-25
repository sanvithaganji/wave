import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth';

// POST /api/users/[id]/report
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const { reason } = await req.json();
    const user = await User.findOne({ uid: id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if already reported
    if (user.reports.some((r) => r.reporterId === tokenUser.uid)) {
      return NextResponse.json({ error: 'You have already reported this user' }, { status: 400 });
    }

    user.reports.push({ reporterId: tokenUser.uid, reason, timestamp: new Date().toISOString() });
    user.rating = Math.max(0, user.rating - 0.5);

    if (user.reports.length >= 3) {
      user.isActive = false;
    }

    await user.save();

    return NextResponse.json({
      success: true,
      deactivated: !user.isActive,
      message: !user.isActive ? 'User deactivated due to multiple reports.' : 'Report submitted.',
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
