import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMatch extends Document {
  user1: string;
  user2: string;
  user1CodeName: string;
  user2CodeName: string;
  chatId: string;
  createdAt: string;
}

const MatchSchema = new Schema<IMatch>({
  user1: { type: String, required: true },
  user2: { type: String, required: true },
  user1CodeName: { type: String, required: true },
  user2CodeName: { type: String, required: true },
  chatId: { type: String, required: true },
  createdAt: { type: String, default: () => new Date().toISOString() },
}, { timestamps: true });

const Match: Model<IMatch> = mongoose.models.Match || mongoose.model<IMatch>('Match', MatchSchema);
export default Match;
