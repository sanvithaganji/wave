import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth';
import { calculateScore } from '@/lib/scoreUtils';

// GET /api/users/[id] — get a user profile by uid
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const user = await User.findOne({ uid: id }).select('-password').lean();
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/users/[id] — update own profile
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser || tokenUser.uid !== id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await connectDB();
    const updates = await req.json();

    // Prevent overwriting sensitive fields
    delete updates.password;
    delete updates.uid;
    delete updates.email;

    // Recalculate score with new data
    const existing = await User.findOne({ uid: id }).lean();
    if (!existing) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const merged = { ...existing, ...updates };
    updates.score = calculateScore(merged as any);

    const user = await User.findOneAndUpdate(
      { uid: id },
      { $set: updates },
      { new: true }
    ).select('-password').lean();

    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
