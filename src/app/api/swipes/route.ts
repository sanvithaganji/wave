import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Swipe from '@/models/Swipe';
import Match from '@/models/Match';
import Chat from '@/models/Chat';
import Message from '@/models/Message';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth';

// POST /api/swipes — record a swipe and check for match
export async function POST(req: NextRequest) {
  try {
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const { swipedId, direction } = await req.json();

    // Upsert swipe (idempotent)
    await Swipe.findOneAndUpdate(
      { swiperId: tokenUser.uid, swipedId },
      { direction, timestamp: new Date().toISOString() },
      { upsert: true, new: true }
    );

    let matched = false;
    if (direction === 'right') {
      // Check if the other person also swiped right
      const reverse = await Swipe.findOne({ swiperId: swipedId, swipedId: tokenUser.uid, direction: 'right' });
      if (reverse) {
        // Create match if not already exists
        const existing = await Match.findOne({
          $or: [
            { user1: tokenUser.uid, user2: swipedId },
            { user1: swipedId, user2: tokenUser.uid },
          ],
        });
        if (!existing) {
          const [u1, u2] = await Promise.all([
            User.findOne({ uid: tokenUser.uid }).lean(),
            User.findOne({ uid: swipedId }).lean(),
          ]);
          const chatId = `match_${[tokenUser.uid, swipedId].sort().join('_')}`;
          await Match.create({
            user1: tokenUser.uid, user2: swipedId,
            user1CodeName: (u1 as any)?.codeName || 'Unknown',
            user2CodeName: (u2 as any)?.codeName || 'Unknown',
            chatId, createdAt: new Date().toISOString(),
          });
          await Chat.create({
            chatId, type: 'individual',
            participants: [tokenUser.uid, swipedId],
            participantNames: {
              [tokenUser.uid]: (u1 as any)?.codeName || 'You',
              [swipedId]: (u2 as any)?.codeName || 'Them',
            },
            lastMessage: 'You matched! Start collaborating.',
            lastMessageAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
          });
          await Message.create({
            chatId, senderId: 'system', senderCodeName: 'System',
            text: `${(u1 as any)?.codeName} and ${(u2 as any)?.codeName} matched! Start collaborating.`,
            timestamp: new Date().toISOString(), type: 'system',
          });
          matched = true;
        }
      }
    }

    return NextResponse.json({ success: true, matched });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
