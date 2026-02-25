// seed.mjs — Waves app demo data seeder (Firestore Local Emulator)
// Run AFTER starting emulators: node seed.mjs

import admin from 'firebase-admin';

// ── Point Admin SDK at the local Firestore emulator (no service account needed)
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

admin.initializeApp({
    projectId: 'waves-app-c8e12',
});

const db = admin.firestore();
const now = new Date().toISOString();

// ─── Demo Users ───────────────────────────────────────────────────────────────
const DEMO_USERS = [
    {
        uid: 'demo_user_01',
        codeName: 'NeonFalcon',
        email: '', phone: '', realName: 'Aarav Sharma',
        techSkills: ['React', 'Node.js', 'Python', 'GraphQL'],
        nonTechSkills: ['Product Design', 'Public Speaking'],
        projects: [], papers: 1, patents: 0,
        competitions: ['Smart India Hackathon 2024'],
        certifications: ['AWS Cloud Practitioner'],
        cgpa: 8.7,
        internships: ['Google SWE Intern 2024'],
        age: 21,
        hackathons: ['HackMIT 2023', 'AngelHack 2024'],
        collaborationCount: 3,
        github: 'https://github.com/aarav', linkedin: 'https://linkedin.com/in/aarav',
        codechef: '', leetcode: 'https://leetcode.com/aarav', hackerrank: '',
        college: 'IIT Bombay',
        aboutMe: 'Building products that matter. Love hackathons and late-night coding sessions.',
        rating: 4.5, score: 78, reports: [],
        dateJoined: '2025-09-01T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_02',
        codeName: 'CrystalPulse',
        email: '', phone: '', realName: 'Priya Nair',
        techSkills: ['Machine Learning', 'TensorFlow', 'Python', 'SQL'],
        nonTechSkills: ['Data Storytelling', 'Research Writing'],
        projects: [], papers: 3, patents: 1,
        competitions: ['Kaggle Grand Master', 'ICML 2024 Workshop'],
        certifications: ['TensorFlow Developer Certificate', 'Google ML Crash Course'],
        cgpa: 9.2,
        internships: ['DeepMind Research Intern'],
        age: 22,
        hackathons: ['MLH Fellowship', 'DataHack Summit 2024'],
        collaborationCount: 5,
        github: 'https://github.com/priyanair', linkedin: 'https://linkedin.com/in/priyanair',
        codechef: 'https://codechef.com/users/priya', leetcode: '', hackerrank: '',
        college: 'IISc Bangalore',
        aboutMe: 'ML researcher obsessed with making AI explainable and accessible to everyone.',
        rating: 4.9, score: 92, reports: [],
        dateJoined: '2025-08-15T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_03',
        codeName: 'VoidArchitect',
        email: '', phone: '', realName: 'Rohan Mehta',
        techSkills: ['Rust', 'Go', 'Kubernetes', 'eBPF'],
        nonTechSkills: ['Technical Writing', 'Mentoring'],
        projects: [], papers: 0, patents: 2,
        competitions: ['DEFCON CTF Top 10'],
        certifications: ['CKAD', 'CKS'],
        cgpa: 8.1,
        internships: ['Cloudflare SRE Intern'],
        age: 23,
        hackathons: ['HackCloud 2023'],
        collaborationCount: 7,
        github: 'https://github.com/rohanmehta', linkedin: 'https://linkedin.com/in/rohanmehta',
        codechef: '', leetcode: '', hackerrank: 'https://hackerrank.com/rohan',
        college: 'NIT Trichy',
        aboutMe: 'Systems programmer. I make computers go faster and networks stay secure.',
        rating: 4.3, score: 81, reports: [],
        dateJoined: '2025-10-05T00:00:00.000Z',
        isActive: true, isStudent: false, profileCompleted: true,
    },
    {
        uid: 'demo_user_04',
        codeName: 'SolarDrift',
        email: '', phone: '', realName: 'Ananya Iyer',
        techSkills: ['Flutter', 'Dart', 'Firebase', 'Swift'],
        nonTechSkills: ['UI/UX Design', 'Illustration'],
        projects: [], papers: 0, patents: 0,
        competitions: ['Google Solution Challenge 2024 – Top 100'],
        certifications: ['Flutter Certified Developer'],
        cgpa: 8.5,
        internships: ['PhonePe SDE Intern'],
        age: 20,
        hackathons: ['HackZurich 2024', 'Unfold 2023'],
        collaborationCount: 2,
        github: 'https://github.com/ananyaiyer', linkedin: 'https://linkedin.com/in/ananyaiyer',
        codechef: '', leetcode: 'https://leetcode.com/ananya', hackerrank: '',
        college: 'BITS Pilani',
        aboutMe: 'Mobile-first developer creating beautiful apps people actually enjoy using.',
        rating: 4.6, score: 74, reports: [],
        dateJoined: '2025-11-20T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_05',
        codeName: 'QuasarBlaze',
        email: '', phone: '', realName: 'Kiran Reddy',
        techSkills: ['Solidity', 'Web3.js', 'Hardhat', 'React'],
        nonTechSkills: ['Community Building', 'Token Economics'],
        projects: [], papers: 1, patents: 0,
        competitions: ['ETHGlobal 2023 - Prize Winner', 'Chainlink Hackathon'],
        certifications: ['Ethereum Developer Certification'],
        cgpa: 7.8,
        internships: ['Polygon Labs Protocol Intern'],
        age: 22,
        hackathons: ['ETHIndia 2024', 'HackFS 2024'],
        collaborationCount: 4,
        github: 'https://github.com/kiranreddy', linkedin: 'https://linkedin.com/in/kiranreddy',
        codechef: '', leetcode: '', hackerrank: '',
        college: 'VIT Vellore',
        aboutMe: 'Blockchain developer building decentralised infrastructure for the open internet.',
        rating: 4.2, score: 69, reports: [],
        dateJoined: '2025-09-20T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_06',
        codeName: 'ArcticSynth',
        email: '', phone: '', realName: 'Meera Pillai',
        techSkills: ['Computer Vision', 'PyTorch', 'C++', 'ROS'],
        nonTechSkills: ['Grant Writing', 'Team Leadership'],
        projects: [], papers: 5, patents: 1,
        competitions: ['ISEF 2023 Finalist', 'Robotics World Championship'],
        certifications: ['NVIDIA Deep Learning Institute'],
        cgpa: 9.5,
        internships: ['ISRO Robotics Intern', 'Boston Dynamics Research'],
        age: 23,
        hackathons: ['iRobot Hackathon'],
        collaborationCount: 8,
        github: 'https://github.com/meerapillai', linkedin: 'https://linkedin.com/in/meerapillai',
        codechef: '', leetcode: '', hackerrank: '',
        college: 'IIT Madras',
        aboutMe: 'Robotics researcher building autonomous systems that perceive and act in the real world.',
        rating: 4.8, score: 95, reports: [],
        dateJoined: '2025-07-30T00:00:00.000Z',
        isActive: true, isStudent: false, profileCompleted: true,
    },
    {
        uid: 'demo_user_07',
        codeName: 'TerraLink',
        email: '', phone: '', realName: 'Siddharth Gupta',
        techSkills: ['Django', 'PostgreSQL', 'Redis', 'Docker'],
        nonTechSkills: ['Business Development', 'Market Research'],
        projects: [], papers: 0, patents: 0,
        competitions: ['Shark Tank: BITS Edition Winner'],
        certifications: ['AWS Developer Associate'],
        cgpa: 7.5,
        internships: ['Swiggy Backend Intern'],
        age: 21,
        hackathons: ['Startup Weekend 2024'],
        collaborationCount: 6,
        github: 'https://github.com/sidgupta', linkedin: 'https://linkedin.com/in/sidgupta',
        codechef: 'https://codechef.com/users/sid', leetcode: 'https://leetcode.com/sid', hackerrank: '',
        college: 'DTU Delhi',
        aboutMe: 'Full-stack dev turned founder. Building SaaS tools for college students.',
        rating: 4.1, score: 66, reports: [],
        dateJoined: '2025-12-01T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_08',
        codeName: 'NovaCipher',
        email: '', phone: '', realName: 'Divya Rao',
        techSkills: ['Cybersecurity', 'Bash', 'Python', 'Wireshark'],
        nonTechSkills: ['Vulnerability Disclosure', 'Report Writing'],
        projects: [], papers: 2, patents: 0,
        competitions: ['DEFCON CTF', 'NullCon 2024 CTF Winner'],
        certifications: ['CEH', 'OSCP'],
        cgpa: 8.3,
        internships: ['CERT-In Research Intern'],
        age: 22,
        hackathons: ['HackReason 2024'],
        collaborationCount: 3,
        github: 'https://github.com/divyarao', linkedin: 'https://linkedin.com/in/divyarao',
        codechef: '', leetcode: '', hackerrank: 'https://hackerrank.com/divya',
        college: 'IIIT Hyderabad',
        aboutMe: "Ethical hacker. I break things so you don't have to find out the hard way.",
        rating: 4.4, score: 77, reports: [],
        dateJoined: '2025-10-10T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_09',
        codeName: 'PrismaVolt',
        email: '', phone: '', realName: 'Arjun Kumar',
        techSkills: ['Unity', 'C#', 'Unreal Engine', 'WebXR'],
        nonTechSkills: ['Storytelling', '3D Modelling'],
        projects: [], papers: 0, patents: 0,
        competitions: ['Global Game Jam 2024 – Best Theme'],
        certifications: ['Unity Certified Programmer'],
        cgpa: 7.9,
        internships: ['Niantic AR Intern'],
        age: 21,
        hackathons: ['Reality Hack 2024'],
        collaborationCount: 4,
        github: 'https://github.com/arjunkumar', linkedin: 'https://linkedin.com/in/arjunkumar',
        codechef: '', leetcode: '', hackerrank: '',
        college: 'Manipal Institute of Technology',
        aboutMe: 'Game dev and AR/VR enthusiast. Making immersive experiences that tell stories.',
        rating: 4.0, score: 63, reports: [],
        dateJoined: '2025-11-05T00:00:00.000Z',
        isActive: true, isStudent: true, profileCompleted: true,
    },
    {
        uid: 'demo_user_10',
        codeName: 'EchoMatrix',
        email: '', phone: '', realName: 'Sneha Chatterjee',
        techSkills: ['Data Engineering', 'Spark', 'Kafka', 'dbt'],
        nonTechSkills: ['Business Analytics', 'Communication'],
        projects: [], papers: 2, patents: 0,
        competitions: ['HackAnalytics 2024 Runner-up'],
        certifications: ['Databricks Certified', 'dbt Certified'],
        cgpa: 8.8,
        internships: ['Zepto Data Engineering Intern'],
        age: 22,
        hackathons: ['DataThon 2023'],
        collaborationCount: 2,
        github: 'https://github.com/snehachatterjee', linkedin: 'https://linkedin.com/in/snehachatterjee',
        codechef: '', leetcode: 'https://leetcode.com/sneha', hackerrank: '',
        college: 'Jadavpur University',
        aboutMe: 'Data engineer making sense of messy pipelines and even messier business requirements.',
        rating: 4.3, score: 75, reports: [],
        dateJoined: '2025-08-28T00:00:00.000Z',
        isActive: true, isStudent: false, profileCompleted: true,
    },
];

const DEMO_PROJECTS = [
    {
        id: 'proj_01',
        ownerId: 'demo_user_01', ownerCodeName: 'NeonFalcon',
        name: 'CampusConnect',
        description: 'A real-time platform for college students to find project collaborators, share resources, and form study groups.',
        abstract: 'CampusConnect bridges the gap between students with complementary skills using a smart matching algorithm based on academic interests, skills, and project history.',
        tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
        category: 'software', domain: 'education',
        isHackathon: false, isCompetition: false,
        interestedUsers: ['demo_user_04', 'demo_user_07'],
        approvedUsers: ['demo_user_04'],
        teamSize: 4,
        createdAt: '2025-11-01T00:00:00.000Z', status: 'open',
    },
    {
        id: 'proj_02',
        ownerId: 'demo_user_02', ownerCodeName: 'CrystalPulse',
        name: 'MedScan AI',
        description: 'An AI-powered diagnostic tool that detects early signs of retinal diseases from fundus photographs using deep learning.',
        abstract: 'Using a custom CNN trained on 50K+ labelled retinal images, MedScan AI achieves 94% accuracy in detecting diabetic retinopathy at early stages.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
        category: 'software', domain: 'healthcare',
        isHackathon: false, isCompetition: true,
        interestedUsers: ['demo_user_06'], approvedUsers: [],
        teamSize: 3,
        createdAt: '2025-10-15T00:00:00.000Z', status: 'in-progress',
    },
    {
        id: 'proj_03',
        ownerId: 'demo_user_05', ownerCodeName: 'QuasarBlaze',
        name: 'AgriChain',
        description: 'Blockchain-based supply chain solution for farmers to receive fair prices and transparent payment for their produce.',
        abstract: 'AgriChain uses Ethereum smart contracts to eliminate intermediaries in the agricultural supply chain, enabling direct farmer-to-retailer transactions.',
        tags: ['Solidity', 'Hardhat', 'React', 'IPFS'],
        category: 'software', domain: 'agriculture',
        isHackathon: true, isCompetition: false,
        interestedUsers: ['demo_user_01', 'demo_user_10'],
        approvedUsers: ['demo_user_01'],
        teamSize: 5,
        createdAt: '2025-09-20T00:00:00.000Z', status: 'open',
    },
    {
        id: 'proj_04',
        ownerId: 'demo_user_06', ownerCodeName: 'ArcticSynth',
        name: 'AutoNav Bot',
        description: 'An autonomous delivery robot for last-mile logistics on college campuses using computer vision and ROS.',
        abstract: 'AutoNav Bot uses SLAM, object detection, and path planning algorithms to navigate crowded campus environments and deliver packages autonomously.',
        tags: ['ROS', 'Python', 'C++', 'SLAM', 'PyTorch'],
        category: 'hardware', domain: 'travel',
        isHackathon: false, isCompetition: true,
        interestedUsers: ['demo_user_03', 'demo_user_09'],
        approvedUsers: ['demo_user_03'],
        teamSize: 4,
        createdAt: '2025-08-10T00:00:00.000Z', status: 'in-progress',
    },
    {
        id: 'proj_05',
        ownerId: 'demo_user_09', ownerCodeName: 'PrismaVolt',
        name: 'EduVerse',
        description: 'An AR-powered educational app that brings school textbook concepts to life using 3D visualisations and interactive lessons.',
        abstract: 'EduVerse uses WebXR to overlay interactive 3D models on textbook pages, turning passive reading into an immersive learning experience for students aged 10–18.',
        tags: ['Unity', 'C#', 'ARCore', 'ARKit', 'WebXR'],
        category: 'software', domain: 'education',
        isHackathon: true, isCompetition: true,
        interestedUsers: ['demo_user_04', 'demo_user_07'], approvedUsers: [],
        teamSize: 3,
        createdAt: '2025-12-01T00:00:00.000Z', status: 'open',
    },
];

const CHAT_ID_1 = 'demo_user_01_demo_user_02';
const CHAT_ID_2 = 'demo_user_03_demo_user_04';

const DEMO_SWIPES = [
    { swiperId: 'demo_user_01', swipedId: 'demo_user_02', direction: 'right', timestamp: now },
    { swiperId: 'demo_user_02', swipedId: 'demo_user_01', direction: 'right', timestamp: now },
    { swiperId: 'demo_user_03', swipedId: 'demo_user_04', direction: 'right', timestamp: now },
    { swiperId: 'demo_user_04', swipedId: 'demo_user_03', direction: 'right', timestamp: now },
    { swiperId: 'demo_user_05', swipedId: 'demo_user_06', direction: 'right', timestamp: now },
    { swiperId: 'demo_user_07', swipedId: 'demo_user_08', direction: 'left', timestamp: now },
    { swiperId: 'demo_user_09', swipedId: 'demo_user_10', direction: 'right', timestamp: now },
];

const DEMO_MATCHES = [
    {
        id: 'match_01',
        user1: 'demo_user_01', user2: 'demo_user_02',
        user1CodeName: 'NeonFalcon', user2CodeName: 'CrystalPulse',
        chatId: CHAT_ID_1, createdAt: now,
    },
    {
        id: 'match_02',
        user1: 'demo_user_03', user2: 'demo_user_04',
        user1CodeName: 'VoidArchitect', user2CodeName: 'SolarDrift',
        chatId: CHAT_ID_2, createdAt: now,
    },
];

const DEMO_CHATS = [
    {
        id: CHAT_ID_1, type: 'individual',
        participants: ['demo_user_01', 'demo_user_02'],
        participantNames: { demo_user_01: 'NeonFalcon', demo_user_02: 'CrystalPulse' },
        lastMessage: 'NeonFalcon and CrystalPulse matched! Start collaborating.',
        lastMessageAt: now, createdAt: now,
    },
    {
        id: CHAT_ID_2, type: 'individual',
        participants: ['demo_user_03', 'demo_user_04'],
        participantNames: { demo_user_03: 'VoidArchitect', demo_user_04: 'SolarDrift' },
        lastMessage: 'VoidArchitect and SolarDrift matched! Start collaborating.',
        lastMessageAt: now, createdAt: now,
    },
];

const DEMO_MESSAGES = [
    {
        chatId: CHAT_ID_1, senderId: 'system', senderCodeName: 'System',
        text: 'NeonFalcon and CrystalPulse matched! Start collaborating.',
        timestamp: now, type: 'system',
    },
    {
        chatId: CHAT_ID_1, senderId: 'demo_user_01', senderCodeName: 'NeonFalcon',
        text: 'Hey! Saw your ML research on explainable AI — exactly what I need for my CampusConnect project 🚀',
        timestamp: now, type: 'text',
    },
    {
        chatId: CHAT_ID_2, senderId: 'system', senderCodeName: 'System',
        text: 'VoidArchitect and SolarDrift matched! Start collaborating.',
        timestamp: now, type: 'system',
    },
    {
        chatId: CHAT_ID_2, senderId: 'demo_user_04', senderCodeName: 'SolarDrift',
        text: 'Love your Kubernetes skills! Can I pick your brain about container orchestration for my app?',
        timestamp: now, type: 'text',
    },
];

// ─── Seed ─────────────────────────────────────────────────────────────────────
async function seed() {
    console.log('\n🌊  Waves — Firestore Emulator Seeder\n');

    for (const u of DEMO_USERS) {
        await db.collection('users').doc(u.uid).set(u);
    }
    console.log(`✅  Seeded ${DEMO_USERS.length} users`);

    for (const p of DEMO_PROJECTS) {
        await db.collection('projects').doc(p.id).set(p);
    }
    console.log(`✅  Seeded ${DEMO_PROJECTS.length} projects`);

    for (const s of DEMO_SWIPES) {
        await db.collection('swipes').add(s);
    }
    console.log(`✅  Seeded ${DEMO_SWIPES.length} swipes`);

    for (const m of DEMO_MATCHES) {
        await db.collection('matches').doc(m.id).set(m);
    }
    console.log(`✅  Seeded ${DEMO_MATCHES.length} matches`);

    for (const c of DEMO_CHATS) {
        await db.collection('chats').doc(c.id).set(c);
    }
    console.log(`✅  Seeded ${DEMO_CHATS.length} chats`);

    for (const msg of DEMO_MESSAGES) {
        await db.collection('messages').add(msg);
    }
    console.log(`✅  Seeded ${DEMO_MESSAGES.length} messages`);

    console.log('\n🎉  Emulator database seeded! App is ready at http://localhost:3000\n');
    process.exit(0);
}

seed().catch(err => {
    console.error('\n❌  Seeding failed:', err.message);
    console.error('   Make sure the Firebase emulator is running first: npx firebase emulators:start\n');
    process.exit(1);
});
