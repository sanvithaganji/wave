import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReport {
  reporterId: string;
  reason: string;
  timestamp: string;
}

export interface IUser extends Document {
  uid: string;
  codeName: string;
  email: string;
  phone: string;
  realName: string;
  password: string;
  techSkills: string[];
  nonTechSkills: string[];
  projects: string[];
  papers: number;
  patents: number;
  competitions: string[];
  certifications: string[];
  cgpa: number;
  internships: string[];
  age: number;
  hackathons: string[];
  collaborationCount: number;
  github: string;
  linkedin: string;
  codechef: string;
  leetcode: string;
  hackerrank: string;
  college: string;
  aboutMe: string;
  rating: number;
  score: number;
  reports: IReport[];
  dateJoined: string;
  isActive: boolean;
  isStudent: boolean;
  profileCompleted: boolean;
  interviewCompleted: boolean;
  workingStyle: {
    pace?: string;
    collaboration?: string;
    leadership?: string;
    risk?: string;
  };
  domains: string[];
  availabilityHours: number;
  keywords: string[];
}

const ReportSchema = new Schema<IReport>({
  reporterId: { type: String, required: true },
  reason: { type: String, required: true },
  timestamp: { type: String, required: true },
}, { _id: false });

const UserSchema = new Schema<IUser>({
  uid: { type: String, required: true, unique: true, index: true },
  codeName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  realName: { type: String, default: '' },
  password: { type: String, default: '' },
  techSkills: { type: [String], default: [] },
  nonTechSkills: { type: [String], default: [] },
  projects: { type: [String], default: [] },
  papers: { type: Number, default: 0 },
  patents: { type: Number, default: 0 },
  competitions: { type: [String], default: [] },
  certifications: { type: [String], default: [] },
  cgpa: { type: Number, default: 0 },
  internships: { type: [String], default: [] },
  age: { type: Number, default: 18 },
  hackathons: { type: [String], default: [] },
  collaborationCount: { type: Number, default: 0 },
  github: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  codechef: { type: String, default: '' },
  leetcode: { type: String, default: '' },
  hackerrank: { type: String, default: '' },
  college: { type: String, default: '' },
  aboutMe: { type: String, default: '' },
  rating: { type: Number, default: 5.0 },
  score: { type: Number, default: 0 },
  reports: { type: [ReportSchema], default: [] },
  dateJoined: { type: String, default: () => new Date().toISOString() },
  isActive: { type: Boolean, default: true },
  isStudent: { type: Boolean, default: true },
  profileCompleted: { type: Boolean, default: false },
  interviewCompleted: { type: Boolean, default: false },
  workingStyle: {
    pace: { type: String, default: '' },
    collaboration: { type: String, default: '' },
    leadership: { type: String, default: '' },
    risk: { type: String, default: '' },
  },
  domains: { type: [String], default: [] },
  availabilityHours: { type: Number, default: 0 },
  keywords: { type: [String], default: [] },
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
