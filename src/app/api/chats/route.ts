import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Chat from '@/models/Chat';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/chats — get all chats for current user
export async function GET(req: NextRequest) {
  try {
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const chats = await Chat.find({ participants: tokenUser.uid })
      .sort({ lastMessageAt: -1 })
      .lean();

    return NextResponse.json({ chats });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
