import {
  doc,
  updateDoc,
  arrayUnion,
  increment,
  getDoc,
} from 'firebase/firestore';
import { db } from './firebase';
import { Report } from './types';

/**
 * Report a user. Rating decreases by 0.5 per report.
 * After 3 reports, the account is deactivated until resolved.
 */
export async function reportUser(
  reportedUid: string,
  reporterUid: string,
  reason: string
): Promise<{ success: boolean; deactivated: boolean; message: string }> {
  try {
    const userRef = doc(db, 'users', reportedUid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return { success: false, deactivated: false, message: 'User not found' };
    }

    const userData = userDoc.data();
    const currentReports: Report[] = userData.reports || [];

    // Check if already reported by this user
    if (currentReports.some((r) => r.reporterId === reporterUid)) {
      return { success: false, deactivated: false, message: 'You have already reported this user' };
    }

    const newReport: Report = {
      reporterId: reporterUid,
      reason,
      timestamp: new Date().toISOString(),
    };

    const newReportCount = currentReports.length + 1;
    const shouldDeactivate = newReportCount >= 3;

    await updateDoc(userRef, {
      reports: arrayUnion(newReport),
      rating: increment(-0.5),
      ...(shouldDeactivate ? { isActive: false } : {}),
    });

    return {
      success: true,
      deactivated: shouldDeactivate,
      message: shouldDeactivate
        ? 'User has been deactivated due to multiple reports.'
        : 'Report submitted successfully.',
    };
  } catch (error) {
    console.error('Error reporting user:', error);
    return { success: false, deactivated: false, message: 'Failed to submit report' };
  }
}

/**
 * Calculate user score based on profile completeness and activity.
 */
export function calculateScore(profile: {
  techSkills: string[];
  nonTechSkills: string[];
  papers: number;
  patents: number;
  competitions: string[];
  certifications: string[];
  hackathons: string[];
  internships: string[];
  collaborationCount: number;
  github: string;
  linkedin: string;
  codechef: string;
  leetcode: string;
  hackerrank: string;
}): number {
  let score = 0;

  // Skills (max 40)
  score += Math.min(profile.techSkills.filter(Boolean).length * 5, 25);
  score += Math.min(profile.nonTechSkills.filter(Boolean).length * 5, 15);

  // Academic & Research (max 20)
  score += Math.min(profile.papers * 5, 10);
  score += Math.min(profile.patents * 5, 10);

  // Experience (max 20)
  score += Math.min(profile.competitions.length * 3, 6);
  score += Math.min(profile.certifications.length * 2, 4);
  score += Math.min(profile.hackathons.length * 3, 6);
  score += Math.min(profile.internships.length * 4, 4);

  // Portfolio links (max 10)
  const links = [profile.github, profile.linkedin, profile.codechef, profile.leetcode, profile.hackerrank];
  score += links.filter(Boolean).length * 2;

  // Collaboration bonus (max 10)
  score += Math.min(profile.collaborationCount * 2, 10);

  return Math.min(score, 100);
}
