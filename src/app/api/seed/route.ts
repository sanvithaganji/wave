import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Project from '@/models/Project';
import { calculateScore } from '@/lib/scoreUtils';

const FIRST_NAMES = ['Arjun', 'Priya', 'Rahul', 'Sneha', 'Karan', 'Aditi', 'Rohan', 'Neha', 'Vikram', 'Ananya', 'Siddharth', 'Meera', 'Kabir', 'Isha', 'Dev', 'Tara', 'Samir', 'Kavya', 'Aryan', 'Ria', 'Aarav', 'Nisha', 'Aman', 'Mitali', 'Aditya', 'Zara', 'Nikhil', 'Pooja', 'Harsh', 'Divya'];
const LAST_NAMES = ['Mehta', 'Sharma', 'Kumar', 'Patel', 'Singh', 'Gupta', 'Verma', 'Reddy', 'Rao', 'Nair', 'Das', 'Bose', 'Chopra', 'Joshi', 'Kapoor'];
const COLLEGES = ['IIT Bombay', 'BITS Pilani', 'IIT Kharagpur', 'Manipal Institute of Technology', 'IIT Delhi', 'NIT Trichy', 'IIIT Hyderabad', 'VIT Vellore', 'SRM Chennai', 'Delhi Technological University', 'IIT Madras', 'IISC Bangalore', 'NIT Warangal', 'IIT Hyderabad', 'BITS Goa'];
const ADJECTIVES = ['Swift', 'Neon', 'Marble', 'Cloud', 'Storm', 'Void', 'Dusk', 'Crimson', 'Azure', 'Silent', 'Iron', 'Plasma', 'Quantum', 'Solar', 'Lunar', 'Echo', 'Frost', 'Phantom', 'Ember', 'Sage'];
const ANIMALS = ['Lynx', 'Moth', 'Fox', 'Tiger', 'Bear', 'Crane', 'Raven', 'Wolf', 'Owl', 'Hawk', 'Shark', 'Viper', 'Mantis', 'Panther', 'Falcon', 'Jackal', 'Drake', 'Lynx', 'Ibis', 'Kite'];
const TECH_POOL = ['Python', 'React', 'Node.js', 'Docker', 'Kubernetes', 'Go', 'Rust', 'C++', 'Java', 'Figma', 'Solidity', 'PyTorch', 'TensorFlow', 'SQL', 'MongoDB', 'AWS', 'GCP', 'Azure', 'GraphQL', 'Swift', 'Kotlin', 'Flutter', 'Next.js', 'TypeScript', 'Redis', 'Kafka', 'CUDA', 'ROS', 'FPGA', 'Arduino'];
const NONTECH_POOL = ['Leadership', 'UI/UX Design', 'Product Management', 'Public Speaking', 'Technical Writing', 'Agile', 'Market Research', 'Mentoring', 'System Design', 'Storytelling', 'Grant Writing', 'Video Editing', 'Community Building', 'Fundraising', 'Data Storytelling'];
const DOMAIN_POOL = ['healthcare', 'farming', 'travel', 'food', 'education', 'sustainability', 'fintech', 'safety', 'web3', 'ai-ml', 'iot', 'entertainment'];
const HACKATHON_NAMES = ['Smart India Hackathon 2024', 'ETHGlobal 2024', 'HackMIT 2023', 'MLH Fellowship', 'TCS CodeVita', 'Google Solution Challenge', 'AngelHack 2024', 'Chainlink Hackathon', 'HackFS 2024', 'DataHack Summit 2024', 'iRobot Hackathon', 'Reality Hack 2024'];
const CERT_NAMES = ['AWS Certified Developer', 'Google Cloud Engineer', 'Meta Frontend Developer', 'DeepLearning.AI Specialisation', 'Databricks Certified', 'Flutter Certified Developer', 'Ethereum Developer Cert', 'NVIDIA Deep Learning', 'TensorFlow Developer Cert', 'CKAD', 'CEH', 'Unity Certified'];
const PROJECT_PREFIX = ['Smart', 'Decentralized', 'AI-powered', 'Hyper', 'Open', 'Secure', 'NextGen', 'Eco', 'Quantum', 'Campus', 'Chain', 'Auto', 'Live', 'Zero', 'Meta'];
const PROJECT_NOUN = ['Health', 'Farm', 'Chain', 'Wallet', 'Learn', 'Track', 'Vision', 'Voice', 'Net', 'Sync', 'Bot', 'Hub', 'Scan', 'Flow', 'Map'];
const ABOUT_TEMPLATES = [
  'Building products that matter. Love hackathons and late-night coding sessions.',
  'ML researcher obsessed with making AI explainable and accessible to everyone.',
  'Systems programmer. I make computers go faster and networks stay secure.',
  'Mobile-first developer creating beautiful apps people actually enjoy using.',
  'Blockchain developer building decentralised infrastructure for the open internet.',
  'Robotics researcher building autonomous systems that perceive and act in the real world.',
  'Full-stack dev turned founder. Building SaaS tools for college students.',
  "Ethical hacker. I break things so you don't have to find out the hard way.",
  'Game dev and AR/VR enthusiast. Making immersive experiences that tell stories.',
  'Data engineer making sense of messy pipelines and business requirements.',
  'Passionate about IoT and embedded systems — if it has a microchip, I want to hack it.',
  'Open source contributor and DevOps engineer. Automating everything one script at a time.',
  'Frontend engineer who cares deeply about accessibility and beautiful interfaces.',
  'Researcher at the intersection of AI and healthcare. Impact-driven builder.',
  'FinTech enthusiast building tools that make financial access more equitable.',
];
const PACES = ['hackathon', 'short-term', 'long-term'];
const COLLAB_STYLES = ['sync', 'async', 'mixed'];

function rc<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function rs<T>(arr: T[], max: number): T[] { return [...arr].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * max) + 1); }

function buildUsers(count: number) {
  const used = new Set<string>();
  return Array.from({ length: count }, (_, i) => {
    const fn = rc(FIRST_NAMES), ln = rc(LAST_NAMES);
    let codeName = `${rc(ADJECTIVES)} ${rc(ANIMALS)}`;
    while (used.has(codeName)) codeName = `${rc(ADJECTIVES)} ${rc(ANIMALS)}`;
    used.add(codeName);

    const profile: any = {
      uid: `seed_${Date.now()}_${i}_${Math.random().toString(36).slice(2, 6)}`,
      codeName,
      email: `${fn.toLowerCase()}${i}@waves.demo`,
      phone: '',
      realName: `${fn} ${ln}`,
      password: '',
      college: rc(COLLEGES),
      techSkills: rs(TECH_POOL, 6),
      nonTechSkills: rs(NONTECH_POOL, 4),
      aboutMe: rc(ABOUT_TEMPLATES),
      hackathons: rs(HACKATHON_NAMES, 4),
      papers: Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0,
      patents: Math.random() > 0.85 ? 1 : 0,
      cgpa: parseFloat((7.0 + Math.random() * 2.9).toFixed(1)),
      competitions: rs(['Smart India Hackathon', 'ICPC', 'Kaggle Master', 'DEFCON CTF', 'Google DSC'], 2),
      certifications: rs(CERT_NAMES, 3),
      internships: Math.random() > 0.5 ? [rc(['Google SWE Intern', 'Microsoft SDE Intern', 'Startup Intern', 'Research Intern', 'ISRO Intern'])] : [],
      github: Math.random() > 0.3 ? `https://github.com/${fn.toLowerCase()}${ln.toLowerCase()}` : '',
      linkedin: Math.random() > 0.4 ? `https://linkedin.com/in/${fn.toLowerCase()}${ln.toLowerCase()}` : '',
      codechef: Math.random() > 0.6 ? `https://codechef.com/users/${fn.toLowerCase()}` : '',
      leetcode: Math.random() > 0.5 ? `https://leetcode.com/${fn.toLowerCase()}` : '',
      hackerrank: Math.random() > 0.7 ? `https://hackerrank.com/${fn.toLowerCase()}` : '',
      projects: [],
      collaborationCount: Math.floor(Math.random() * 12),
      rating: parseFloat((3.8 + Math.random() * 1.2).toFixed(1)),
      score: 0,
      reports: [],
      dateJoined: new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true,
      isStudent: Math.random() > 0.2,
      profileCompleted: true,
      interviewCompleted: true,
      workingStyle: { pace: rc(PACES), collaboration: rc(COLLAB_STYLES), leadership: rc(['lead', 'follow', 'either']), risk: rc(['low', 'medium', 'high']) },
      age: 19 + Math.floor(Math.random() * 6),
      domains: rs(DOMAIN_POOL, 3),
      availabilityHours: 5 + Math.floor(Math.random() * 25),
      keywords: [rc(TECH_POOL).toLowerCase(), rc(DOMAIN_POOL)],
    };
    profile.score = calculateScore(profile);
    return profile;
  });
}

function buildProjects(count: number, users: any[]) {
  return Array.from({ length: count }, (_, i) => {
    const owner = rc(users);
    const domain = rc(DOMAIN_POOL);
    const tech1 = rc(TECH_POOL), tech2 = rc(TECH_POOL);
    const name = `${rc(PROJECT_PREFIX)}${rc(PROJECT_NOUN)}`;
    return {
      ownerId: owner.uid,
      ownerCodeName: owner.codeName,
      name,
      description: `A revolutionary project in the ${domain} space combining ${tech1} with ${tech2}. We're looking for passionate collaborators to help us build and launch.`,
      abstract: `Innovative platform addressing key challenges in ${domain}. Leveraging ${tech1} to create scalable, impactful solutions.`,
      tags: rs([...rs(TECH_POOL, 4), domain, 'Open Source'], 5),
      category: (Math.random() > 0.75 ? (Math.random() > 0.5 ? 'hardware' : 'non-technical') : 'software') as any,
      domain,
      isHackathon: Math.random() > 0.5,
      isCompetition: Math.random() > 0.7,
      interestedUsers: [],
      approvedUsers: [owner.uid],
      teamSize: 2 + Math.floor(Math.random() * 5),
      createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'open' as any,
      desiredSkills: rs(TECH_POOL, 4),
      workingStylePace: rc(PACES),
      collabStyle: rc(COLLAB_STYLES),
      commitmentHours: 5 + Math.floor(Math.random() * 20),
    };
  });
}

// POST /api/seed — seed the database with 40 users and 50 projects
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const logs: string[] = [];

    // Clear existing seed data
    const deletedUsers = await User.deleteMany({ uid: /^seed_/ });
    logs.push(`🗑 Cleared ${deletedUsers.deletedCount} existing seed users`);

    const users = buildUsers(40);
    await User.insertMany(users);
    logs.push(`✅ Inserted ${users.length} user profiles`);

    // Clear then recreate projects owned by seed users
    const seedUids = users.map(u => u.uid);
    const deletedProjects = await Project.deleteMany({ ownerId: { $in: seedUids } });
    logs.push(`🗑 Cleared ${deletedProjects.deletedCount} existing seed projects`);

    const projects = buildProjects(50, users);
    await Project.insertMany(projects);
    logs.push(`✅ Inserted ${projects.length} projects`);

    logs.push('🎉 Done! App is fully loaded with demo data.');
    return NextResponse.json({ success: true, logs });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
