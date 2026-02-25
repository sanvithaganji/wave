import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import User from '@/models/User';
import Chat from '@/models/Chat';
import Message from '@/models/Message';
import { getUserFromRequest } from '@/lib/auth';

// POST /api/projects/[id]/approve — approve an interested user
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

    // Approve user
    if (!project.approvedUsers.includes(userId)) {
      project.approvedUsers.push(userId);
    }
    project.interestedUsers = project.interestedUsers.filter((u) => u !== userId);
    await project.save();

    // Increment collaboration count
    await User.findOneAndUpdate({ uid: userId }, { $inc: { collaborationCount: 1 } });

    // Upsert group chat
    const approvedUser = await User.findOne({ uid: userId }).lean();
    const chatId = `project_${id}`;

    const existingChat = await Chat.findOne({ chatId });
    if (existingChat) {
      if (!existingChat.participants.includes(userId)) {
        existingChat.participants.push(userId);
        (existingChat.participantNames as any)[userId] = (approvedUser as any)?.codeName || 'Unknown';
        existingChat.lastMessage = `${(approvedUser as any)?.codeName || 'Someone'} joined the project!`;
        existingChat.lastMessageAt = new Date().toISOString();
        await existingChat.save();
      }
    } else {
      // Get owner info
      const owner = await User.findOne({ uid: tokenUser.uid }).lean();
      const participantNames: Record<string, string> = {
        [tokenUser.uid]: (owner as any)?.codeName || 'Owner',
        [userId]: (approvedUser as any)?.codeName || 'Member',
      };
      await Chat.create({
        chatId,
        type: 'group',
        participants: [tokenUser.uid, userId],
        participantNames,
        projectId: id,
        projectName: project.name,
        lastMessage: `Group created for ${project.name}`,
        lastMessageAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      });
    }

    // System message
    await Message.create({
      chatId,
      senderId: 'system',
      senderCodeName: 'System',
      text: `${(approvedUser as any)?.codeName || 'A new member'} has been approved to join ${project.name}!`,
      timestamp: new Date().toISOString(),
      type: 'system',
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
