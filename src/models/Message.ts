import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMessage extends Document {
  chatId: string;
  senderId: string;
  senderCodeName: string;
  text: string;
  timestamp: string;
  type: 'text' | 'system';
}

const MessageSchema = new Schema<IMessage>({
  chatId: { type: String, required: true, index: true },
  senderId: { type: String, required: true },
  senderCodeName: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: String, default: () => new Date().toISOString() },
  type: { type: String, enum: ['text', 'system'], default: 'text' },
}, { timestamps: true });

const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);
export default Message;
