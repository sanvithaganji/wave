import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/users — list active users for swipe (excludes self & already swiped)
export async function GET(req: NextRequest) {
  try {
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const users = await User.find({
      uid: { $ne: tokenUser.uid },
      isActive: true,
      profileCompleted: true,
    })
      .select('-password -email -phone -realName')
      .lean();

    return NextResponse.json({ users });
  } catch (error: any) {
    console.error('Users GET error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch users' }, { status: 500 });
  }
}
