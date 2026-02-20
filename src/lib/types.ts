export interface UserProfile {
  uid: string;
  codeName: string;
  email: string; // hidden
  phone: string; // hidden
  realName: string; // hidden
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
  // Hidden portfolio
  github: string;
  linkedin: string;
  codechef: string;
  leetcode: string;
  hackerrank: string;
  // Visible
  college: string;
  aboutMe: string; // 20 words max
  rating: number;
  score: number;
  reports: Report[];
  dateJoined: string;
  isActive: boolean;
  isStudent: boolean;
  profileCompleted: boolean;
}

export interface Report {
  reporterId: string;
  reason: string;
  timestamp: string;
}

export interface Project {
  id: string;
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
}

export interface SwipeAction {
  swiperId: string;
  swipedId: string;
  direction: 'left' | 'right';
  timestamp: string;
}

export interface Match {
  id: string;
  user1: string;
  user2: string;
  user1CodeName: string;
  user2CodeName: string;
  chatId: string;
  createdAt: string;
}

export interface Chat {
  id: string;
  type: 'individual' | 'group';
  participants: string[];
  participantNames: Record<string, string>;
  projectId?: string;
  projectName?: string;
  lastMessage: string;
  lastMessageAt: string;
  createdAt: string;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderCodeName: string;
  text: string;
  timestamp: string;
  type: 'text' | 'system';
}

export type ProjectCategory = 'software' | 'hardware' | 'non-technical';

export type ProjectDomain =
  | 'healthcare'
  | 'agriculture'
  | 'travel'
  | 'food'
  | 'education'
  | 'finance'
  | 'environment'
  | 'entertainment';

export const DOMAINS: { label: string; value: ProjectDomain; icon: string }[] = [
  { label: 'Healthcare', value: 'healthcare', icon: '🏥' },
  { label: 'Agriculture', value: 'agriculture', icon: '🌾' },
  { label: 'Travel', value: 'travel', icon: '✈️' },
  { label: 'Food', value: 'food', icon: '🍽️' },
  { label: 'Education', value: 'education', icon: '📚' },
  { label: 'Finance', value: 'finance', icon: '💰' },
  { label: 'Environment', value: 'environment', icon: '🌍' },
  { label: 'Entertainment', value: 'entertainment', icon: '🎮' },
];

export const CATEGORIES: { label: string; value: ProjectCategory; icon: string }[] = [
  { label: 'Software', value: 'software', icon: '💻' },
  { label: 'Hardware', value: 'hardware', icon: '🔧' },
  { label: 'Non-Technical', value: 'non-technical', icon: '📋' },
];
