import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISwipe extends Document {
  swiperId: string;
  swipedId: string;
  direction: 'left' | 'right';
  timestamp: string;
}

const SwipeSchema = new Schema<ISwipe>({
  swiperId: { type: String, required: true, index: true },
  swipedId: { type: String, required: true },
  direction: { type: String, enum: ['left', 'right'], required: true },
  timestamp: { type: String, default: () => new Date().toISOString() },
}, { timestamps: true });

SwipeSchema.index({ swiperId: 1, swipedId: 1 }, { unique: true });

const Swipe: Model<ISwipe> = mongoose.models.Swipe || mongoose.model<ISwipe>('Swipe', SwipeSchema);
export default Swipe;
