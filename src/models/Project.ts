import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  ownerId: string;
  ownerCodeName: string;
  name: string;
  description: string;
  abstract: string;
  tags: string[];
  category: 'software' | 'hardware' | 'non-technical';
  domain: string;
  isHackathon: boolean;
  isCompetition: boolean;
  interestedUsers: string[];
  approvedUsers: string[];
  teamSize: number;
  createdAt: string;
  status: 'open' | 'in-progress' | 'completed';
  desiredSkills: string[];
  workingStylePace: string;
  collabStyle: string;
  commitmentHours: number;
  _requirements: any;
}

const ProjectSchema = new Schema<IProject>({
  ownerId: { type: String, required: true, index: true },
  ownerCodeName: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: '' },
  abstract: { type: String, default: '' },
  tags: { type: [String], default: [] },
  category: { type: String, enum: ['software', 'hardware', 'non-technical'], default: 'software' },
  domain: { type: String, default: '' },
  isHackathon: { type: Boolean, default: false },
  isCompetition: { type: Boolean, default: false },
  interestedUsers: { type: [String], default: [] },
  approvedUsers: { type: [String], default: [] },
  teamSize: { type: Number, default: 4 },
  createdAt: { type: String, default: () => new Date().toISOString() },
  status: { type: String, enum: ['open', 'in-progress', 'completed'], default: 'open' },
  desiredSkills: { type: [String], default: [] },
  workingStylePace: { type: String, default: '' },
  collabStyle: { type: String, default: '' },
  commitmentHours: { type: Number, default: 5 },
  _requirements: { type: Schema.Types.Mixed, default: null },
}, { timestamps: true });

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
export default Project;
