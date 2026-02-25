import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import Chat from '@/models/Chat';
import { getUserFromRequest } from '@/lib/auth';

// GET /api/chats/[id]/messages
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();
    const messages = await Message.find({ chatId: id }).sort({ timestamp: 1 }).lean();
    return NextResponse.json({ messages });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/chats/[id]/messages — send a message
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const tokenUser = getUserFromRequest(req);
    if (!tokenUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    await connectDB();
    const { text, senderCodeName } = await req.json();
    const timestamp = new Date().toISOString();

    const message = await Message.create({
      chatId: id,
      senderId: tokenUser.uid,
      senderCodeName: senderCodeName || 'Unknown',
      text,
      timestamp,
      type: 'text',
    });

    // Update chat last message
    await Chat.findOneAndUpdate(
      { chatId: id },
      { lastMessage: text, lastMessageAt: timestamp }
    );

    return NextResponse.json({ message }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
