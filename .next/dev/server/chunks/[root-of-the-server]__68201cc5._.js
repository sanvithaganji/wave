module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectDB",
    ()=>connectDB,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/waves';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const cached = global.mongooseCache ?? {
    conn: null,
    promise: null
};
if (!global.mongooseCache) {
    global.mongooseCache = cached;
}
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, {
            bufferCommands: false
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/src/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const ReportSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    reporterId: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
}, {
    _id: false
});
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    uid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    codeName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    realName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    techSkills: {
        type: [
            String
        ],
        default: []
    },
    nonTechSkills: {
        type: [
            String
        ],
        default: []
    },
    projects: {
        type: [
            String
        ],
        default: []
    },
    papers: {
        type: Number,
        default: 0
    },
    patents: {
        type: Number,
        default: 0
    },
    competitions: {
        type: [
            String
        ],
        default: []
    },
    certifications: {
        type: [
            String
        ],
        default: []
    },
    cgpa: {
        type: Number,
        default: 0
    },
    internships: {
        type: [
            String
        ],
        default: []
    },
    age: {
        type: Number,
        default: 18
    },
    hackathons: {
        type: [
            String
        ],
        default: []
    },
    collaborationCount: {
        type: Number,
        default: 0
    },
    github: {
        type: String,
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
    codechef: {
        type: String,
        default: ''
    },
    leetcode: {
        type: String,
        default: ''
    },
    hackerrank: {
        type: String,
        default: ''
    },
    college: {
        type: String,
        default: ''
    },
    aboutMe: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 5.0
    },
    score: {
        type: Number,
        default: 0
    },
    reports: {
        type: [
            ReportSchema
        ],
        default: []
    },
    dateJoined: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isStudent: {
        type: Boolean,
        default: true
    },
    profileCompleted: {
        type: Boolean,
        default: false
    },
    interviewCompleted: {
        type: Boolean,
        default: false
    },
    workingStyle: {
        pace: {
            type: String,
            default: ''
        },
        collaboration: {
            type: String,
            default: ''
        },
        leadership: {
            type: String,
            default: ''
        },
        risk: {
            type: String,
            default: ''
        }
    },
    domains: {
        type: [
            String
        ],
        default: []
    },
    availabilityHours: {
        type: Number,
        default: 0
    },
    keywords: {
        type: [
            String
        ],
        default: []
    }
}, {
    timestamps: true
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('User', UserSchema);
const __TURBOPACK__default__export__ = User;
}),
"[project]/src/models/Project.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const ProjectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    ownerId: {
        type: String,
        required: true,
        index: true
    },
    ownerCodeName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    abstract: {
        type: String,
        default: ''
    },
    tags: {
        type: [
            String
        ],
        default: []
    },
    category: {
        type: String,
        enum: [
            'software',
            'hardware',
            'non-technical'
        ],
        default: 'software'
    },
    domain: {
        type: String,
        default: ''
    },
    isHackathon: {
        type: Boolean,
        default: false
    },
    isCompetition: {
        type: Boolean,
        default: false
    },
    interestedUsers: {
        type: [
            String
        ],
        default: []
    },
    approvedUsers: {
        type: [
            String
        ],
        default: []
    },
    teamSize: {
        type: Number,
        default: 4
    },
    createdAt: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    status: {
        type: String,
        enum: [
            'open',
            'in-progress',
            'completed'
        ],
        default: 'open'
    },
    desiredSkills: {
        type: [
            String
        ],
        default: []
    },
    workingStylePace: {
        type: String,
        default: ''
    },
    collabStyle: {
        type: String,
        default: ''
    },
    commitmentHours: {
        type: Number,
        default: 5
    },
    _requirements: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        default: null
    }
}, {
    timestamps: true
});
const Project = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Project', ProjectSchema);
const __TURBOPACK__default__export__ = Project;
}),
"[project]/src/lib/scoreUtils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateScore",
    ()=>calculateScore,
    "scoreBreakdown",
    ()=>scoreBreakdown
]);
function calculateScore(profile) {
    const rating = (profile.rating ?? 0) * 10;
    const collabs = (profile.collaborationCount ?? 0) * 20;
    const tech = countNonEmpty(profile.techSkills) * 5;
    const nonTech = countNonEmpty(profile.nonTechSkills) * 5;
    // Competitive profiles: each linked platform earns 10 pts
    const competitive = [
        profile.github,
        profile.codechef,
        profile.leetcode,
        profile.hackerrank
    ].filter((v)=>v && v.trim().length > 0).length * 10;
    const hackathons = countNonEmpty(profile.hackathons) * 10;
    const patents = (profile.patents ?? 0) * 20;
    const projects = countNonEmpty(profile.projects) * 15;
    const papers = (profile.papers ?? 0) * 20;
    const certificates = countNonEmpty(profile.certifications) * 10;
    const cgpa = (profile.cgpa ?? 0) * 10;
    return Math.round(rating + collabs + tech + nonTech + competitive + hackathons + patents + projects + papers + certificates + cgpa);
}
/** Returns how many non-empty strings are in an array */ function countNonEmpty(arr) {
    return (arr ?? []).filter((v)=>v && v.trim().length > 0).length;
}
function scoreBreakdown(profile) {
    return {
        'Rating (×10)': Math.round((profile.rating ?? 0) * 10),
        'Collabs (×20)': Math.round((profile.collaborationCount ?? 0) * 20),
        'Tech Skills (×5)': countNonEmpty(profile.techSkills) * 5,
        'Non-Tech (×5)': countNonEmpty(profile.nonTechSkills) * 5,
        'Profiles (×10)': [
            profile.github,
            profile.codechef,
            profile.leetcode,
            profile.hackerrank
        ].filter((v)=>v && v.trim().length > 0).length * 10,
        'Hackathons (×10)': countNonEmpty(profile.hackathons) * 10,
        'Patents (×20)': (profile.patents ?? 0) * 20,
        'Projects (×15)': countNonEmpty(profile.projects) * 15,
        'Papers (×20)': (profile.papers ?? 0) * 20,
        'Certs (×10)': countNonEmpty(profile.certifications) * 10,
        'CGPA (×10)': Math.round((profile.cgpa ?? 0) * 10)
    };
}
}),
"[project]/src/app/api/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Project.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scoreUtils.ts [app-route] (ecmascript)");
;
;
;
;
;
const FIRST_NAMES = [
    'Arjun',
    'Priya',
    'Rahul',
    'Sneha',
    'Karan',
    'Aditi',
    'Rohan',
    'Neha',
    'Vikram',
    'Ananya',
    'Siddharth',
    'Meera',
    'Kabir',
    'Isha',
    'Dev',
    'Tara',
    'Samir',
    'Kavya',
    'Aryan',
    'Ria',
    'Aarav',
    'Nisha',
    'Aman',
    'Mitali',
    'Aditya',
    'Zara',
    'Nikhil',
    'Pooja',
    'Harsh',
    'Divya'
];
const LAST_NAMES = [
    'Mehta',
    'Sharma',
    'Kumar',
    'Patel',
    'Singh',
    'Gupta',
    'Verma',
    'Reddy',
    'Rao',
    'Nair',
    'Das',
    'Bose',
    'Chopra',
    'Joshi',
    'Kapoor'
];
const COLLEGES = [
    'IIT Bombay',
    'BITS Pilani',
    'IIT Kharagpur',
    'Manipal Institute of Technology',
    'IIT Delhi',
    'NIT Trichy',
    'IIIT Hyderabad',
    'VIT Vellore',
    'SRM Chennai',
    'Delhi Technological University',
    'IIT Madras',
    'IISC Bangalore',
    'NIT Warangal',
    'IIT Hyderabad',
    'BITS Goa'
];
const ADJECTIVES = [
    'Swift',
    'Neon',
    'Marble',
    'Cloud',
    'Storm',
    'Void',
    'Dusk',
    'Crimson',
    'Azure',
    'Silent',
    'Iron',
    'Plasma',
    'Quantum',
    'Solar',
    'Lunar',
    'Echo',
    'Frost',
    'Phantom',
    'Ember',
    'Sage'
];
const ANIMALS = [
    'Lynx',
    'Moth',
    'Fox',
    'Tiger',
    'Bear',
    'Crane',
    'Raven',
    'Wolf',
    'Owl',
    'Hawk',
    'Shark',
    'Viper',
    'Mantis',
    'Panther',
    'Falcon',
    'Jackal',
    'Drake',
    'Lynx',
    'Ibis',
    'Kite'
];
const TECH_POOL = [
    'Python',
    'React',
    'Node.js',
    'Docker',
    'Kubernetes',
    'Go',
    'Rust',
    'C++',
    'Java',
    'Figma',
    'Solidity',
    'PyTorch',
    'TensorFlow',
    'SQL',
    'MongoDB',
    'AWS',
    'GCP',
    'Azure',
    'GraphQL',
    'Swift',
    'Kotlin',
    'Flutter',
    'Next.js',
    'TypeScript',
    'Redis',
    'Kafka',
    'CUDA',
    'ROS',
    'FPGA',
    'Arduino'
];
const NONTECH_POOL = [
    'Leadership',
    'UI/UX Design',
    'Product Management',
    'Public Speaking',
    'Technical Writing',
    'Agile',
    'Market Research',
    'Mentoring',
    'System Design',
    'Storytelling',
    'Grant Writing',
    'Video Editing',
    'Community Building',
    'Fundraising',
    'Data Storytelling'
];
const DOMAIN_POOL = [
    'healthcare',
    'farming',
    'travel',
    'food',
    'education',
    'sustainability',
    'fintech',
    'safety',
    'web3',
    'ai-ml',
    'iot',
    'entertainment'
];
const HACKATHON_NAMES = [
    'Smart India Hackathon 2024',
    'ETHGlobal 2024',
    'HackMIT 2023',
    'MLH Fellowship',
    'TCS CodeVita',
    'Google Solution Challenge',
    'AngelHack 2024',
    'Chainlink Hackathon',
    'HackFS 2024',
    'DataHack Summit 2024',
    'iRobot Hackathon',
    'Reality Hack 2024'
];
const CERT_NAMES = [
    'AWS Certified Developer',
    'Google Cloud Engineer',
    'Meta Frontend Developer',
    'DeepLearning.AI Specialisation',
    'Databricks Certified',
    'Flutter Certified Developer',
    'Ethereum Developer Cert',
    'NVIDIA Deep Learning',
    'TensorFlow Developer Cert',
    'CKAD',
    'CEH',
    'Unity Certified'
];
const PROJECT_PREFIX = [
    'Smart',
    'Decentralized',
    'AI-powered',
    'Hyper',
    'Open',
    'Secure',
    'NextGen',
    'Eco',
    'Quantum',
    'Campus',
    'Chain',
    'Auto',
    'Live',
    'Zero',
    'Meta'
];
const PROJECT_NOUN = [
    'Health',
    'Farm',
    'Chain',
    'Wallet',
    'Learn',
    'Track',
    'Vision',
    'Voice',
    'Net',
    'Sync',
    'Bot',
    'Hub',
    'Scan',
    'Flow',
    'Map'
];
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
    'FinTech enthusiast building tools that make financial access more equitable.'
];
const PACES = [
    'hackathon',
    'short-term',
    'long-term'
];
const COLLAB_STYLES = [
    'sync',
    'async',
    'mixed'
];
function rc(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function rs(arr, max) {
    return [
        ...arr
    ].sort(()=>0.5 - Math.random()).slice(0, Math.floor(Math.random() * max) + 1);
}
function buildUsers(count) {
    const used = new Set();
    return Array.from({
        length: count
    }, (_, i)=>{
        const fn = rc(FIRST_NAMES), ln = rc(LAST_NAMES);
        let codeName = `${rc(ADJECTIVES)} ${rc(ANIMALS)}`;
        while(used.has(codeName))codeName = `${rc(ADJECTIVES)} ${rc(ANIMALS)}`;
        used.add(codeName);
        const profile = {
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
            competitions: rs([
                'Smart India Hackathon',
                'ICPC',
                'Kaggle Master',
                'DEFCON CTF',
                'Google DSC'
            ], 2),
            certifications: rs(CERT_NAMES, 3),
            internships: Math.random() > 0.5 ? [
                rc([
                    'Google SWE Intern',
                    'Microsoft SDE Intern',
                    'Startup Intern',
                    'Research Intern',
                    'ISRO Intern'
                ])
            ] : [],
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
            workingStyle: {
                pace: rc(PACES),
                collaboration: rc(COLLAB_STYLES),
                leadership: rc([
                    'lead',
                    'follow',
                    'either'
                ]),
                risk: rc([
                    'low',
                    'medium',
                    'high'
                ])
            },
            age: 19 + Math.floor(Math.random() * 6),
            domains: rs(DOMAIN_POOL, 3),
            availabilityHours: 5 + Math.floor(Math.random() * 25),
            keywords: [
                rc(TECH_POOL).toLowerCase(),
                rc(DOMAIN_POOL)
            ]
        };
        profile.score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateScore"])(profile);
        return profile;
    });
}
function buildProjects(count, users) {
    return Array.from({
        length: count
    }, (_, i)=>{
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
            tags: rs([
                ...rs(TECH_POOL, 4),
                domain,
                'Open Source'
            ], 5),
            category: Math.random() > 0.75 ? Math.random() > 0.5 ? 'hardware' : 'non-technical' : 'software',
            domain,
            isHackathon: Math.random() > 0.5,
            isCompetition: Math.random() > 0.7,
            interestedUsers: [],
            approvedUsers: [
                owner.uid
            ],
            teamSize: 2 + Math.floor(Math.random() * 5),
            createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
            status: 'open',
            desiredSkills: rs(TECH_POOL, 4),
            workingStylePace: rc(PACES),
            collabStyle: rc(COLLAB_STYLES),
            commitmentHours: 5 + Math.floor(Math.random() * 20)
        };
    });
}
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const logs = [];
        // Clear existing seed data
        const deletedUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].deleteMany({
            uid: /^seed_/
        });
        logs.push(`🗑 Cleared ${deletedUsers.deletedCount} existing seed users`);
        const users = buildUsers(40);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].insertMany(users);
        logs.push(`✅ Inserted ${users.length} user profiles`);
        // Clear then recreate projects owned by seed users
        const seedUids = users.map((u)=>u.uid);
        const deletedProjects = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].deleteMany({
            ownerId: {
                $in: seedUids
            }
        });
        logs.push(`🗑 Cleared ${deletedProjects.deletedCount} existing seed projects`);
        const projects = buildProjects(50, users);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].insertMany(projects);
        logs.push(`✅ Inserted ${projects.length} projects`);
        logs.push('🎉 Done! App is fully loaded with demo data.');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            logs
        });
    } catch (error) {
        console.error('Seed error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68201cc5._.js.map