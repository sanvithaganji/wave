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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTokenFromRequest",
    ()=>getTokenFromRequest,
    "getUserFromRequest",
    ()=>getUserFromRequest,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const JWT_SECRET = process.env.JWT_SECRET || 'waves-secret-key-change-in-production';
function signToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: '30d'
    });
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
}
function getTokenFromRequest(req) {
    const authHeader = req.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.slice(7);
    }
    return null;
}
function getUserFromRequest(req) {
    const token = getTokenFromRequest(req);
    if (!token) return null;
    return verifyToken(token);
}
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
"[project]/src/app/api/users/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scoreUtils.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(req, { params }) {
    try {
        const { id } = await params;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            uid: id
        }).select('-password').lean();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const tokenUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromRequest"])(req);
        if (!tokenUser || tokenUser.uid !== id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Forbidden'
            }, {
                status: 403
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const updates = await req.json();
        // Prevent overwriting sensitive fields
        delete updates.password;
        delete updates.uid;
        delete updates.email;
        // Recalculate score with new data
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            uid: id
        }).lean();
        if (!existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User not found'
            }, {
                status: 404
            });
        }
        const merged = {
            ...existing,
            ...updates
        };
        updates.score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scoreUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateScore"])(merged);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
            uid: id
        }, {
            $set: updates
        }, {
            new: true
        }).select('-password').lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8609843a._.js.map