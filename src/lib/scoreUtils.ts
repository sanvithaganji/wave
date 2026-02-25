import { UserProfile } from './types';

/**
 * Score formula:
 * (rating × 10) + (no. of collabs × 20) + (no. of tech skills × 5) + (no. of non-tech skills × 5)
 * + competitive profiles score (each linked platform = 10 pts)
 * + (no. of hackathons × 10) + (no. of patents × 20) + (no. of projects × 15)
 * + (no. of papers × 20) + (no. of certificates × 10) + (cgpa × 10)
 */
export function calculateScore(profile: Partial<UserProfile>): number {
    const rating = (profile.rating ?? 0) * 10;
    const collabs = (profile.collaborationCount ?? 0) * 20;
    const tech = countNonEmpty(profile.techSkills) * 5;
    const nonTech = countNonEmpty(profile.nonTechSkills) * 5;

    // Competitive profiles: each linked platform earns 10 pts
    const competitive = [profile.github, profile.codechef, profile.leetcode, profile.hackerrank]
        .filter(v => v && v.trim().length > 0).length * 10;

    const hackathons = countNonEmpty(profile.hackathons) * 10;
    const patents = (profile.patents ?? 0) * 20;
    const projects = countNonEmpty(profile.projects) * 15;
    const papers = (profile.papers ?? 0) * 20;
    const certificates = countNonEmpty(profile.certifications) * 10;
    const cgpa = (profile.cgpa ?? 0) * 10;

    return Math.round(
        rating + collabs + tech + nonTech + competitive +
        hackathons + patents + projects + papers + certificates + cgpa
    );
}

/** Returns how many non-empty strings are in an array */
function countNonEmpty(arr?: string[]): number {
    return (arr ?? []).filter(v => v && v.trim().length > 0).length;
}

/** Returns a breakdown of score components for display */
export function scoreBreakdown(profile: Partial<UserProfile>): Record<string, number> {
    return {
        'Rating (×10)': Math.round((profile.rating ?? 0) * 10),
        'Collabs (×20)': Math.round((profile.collaborationCount ?? 0) * 20),
        'Tech Skills (×5)': countNonEmpty(profile.techSkills) * 5,
        'Non-Tech (×5)': countNonEmpty(profile.nonTechSkills) * 5,
        'Profiles (×10)': [profile.github, profile.codechef, profile.leetcode, profile.hackerrank]
            .filter(v => v && v.trim().length > 0).length * 10,
        'Hackathons (×10)': countNonEmpty(profile.hackathons) * 10,
        'Patents (×20)': (profile.patents ?? 0) * 20,
        'Projects (×15)': countNonEmpty(profile.projects) * 15,
        'Papers (×20)': (profile.papers ?? 0) * 20,
        'Certs (×10)': countNonEmpty(profile.certifications) * 10,
        'CGPA (×10)': Math.round((profile.cgpa ?? 0) * 10),
    };
}
