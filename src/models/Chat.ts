import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IChat extends Document {
  chatId: string;
  type: 'individual' | 'group';
  participants: string[];
  participantNames: Record<string, string>;
  projectId?: string;
  projectName?: string;
  lastMessage: string;
  lastMessageAt: string;
  createdAt: string;
}

const ChatSchema = new Schema<IChat>({
  chatId: { type: String, required: true, unique: true, index: true },
  type: { type: String, enum: ['individual', 'group'], default: 'individual' },
  participants: { type: [String], default: [], index: true },
  participantNames: { type: Schema.Types.Mixed, default: {} },
  projectId: { type: String, default: '' },
  projectName: { type: String, default: '' },
  lastMessage: { type: String, default: '' },
  lastMessageAt: { type: String, default: () => new Date().toISOString() },
  createdAt: { type: String, default: () => new Date().toISOString() },
}, { timestamps: true });

const Chat: Model<IChat> = mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);
export default Chat;
