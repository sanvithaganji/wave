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
"[project]/src/models/Swipe.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const SwipeSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    swiperId: {
        type: String,
        required: true,
        index: true
    },
    swipedId: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        enum: [
            'left',
            'right'
        ],
        required: true
    },
    timestamp: {
        type: String,
        default: ()=>new Date().toISOString()
    }
}, {
    timestamps: true
});
SwipeSchema.index({
    swiperId: 1,
    swipedId: 1
}, {
    unique: true
});
const Swipe = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Swipe || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Swipe', SwipeSchema);
const __TURBOPACK__default__export__ = Swipe;
}),
"[project]/src/models/Match.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MatchSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    },
    user1CodeName: {
        type: String,
        required: true
    },
    user2CodeName: {
        type: String,
        required: true
    },
    chatId: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: ()=>new Date().toISOString()
    }
}, {
    timestamps: true
});
const Match = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Match || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Match', MatchSchema);
const __TURBOPACK__default__export__ = Match;
}),
"[project]/src/models/Chat.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const ChatSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    chatId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    type: {
        type: String,
        enum: [
            'individual',
            'group'
        ],
        default: 'individual'
    },
    participants: {
        type: [
            String
        ],
        default: [],
        index: true
    },
    participantNames: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"].Types.Mixed,
        default: {}
    },
    projectId: {
        type: String,
        default: ''
    },
    projectName: {
        type: String,
        default: ''
    },
    lastMessage: {
        type: String,
        default: ''
    },
    lastMessageAt: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    createdAt: {
        type: String,
        default: ()=>new Date().toISOString()
    }
}, {
    timestamps: true
});
const Chat = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Chat || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Chat', ChatSchema);
const __TURBOPACK__default__export__ = Chat;
}),
"[project]/src/models/Message.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MessageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    chatId: {
        type: String,
        required: true,
        index: true
    },
    senderId: {
        type: String,
        required: true
    },
    senderCodeName: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    type: {
        type: String,
        enum: [
            'text',
            'system'
        ],
        default: 'text'
    }
}, {
    timestamps: true
});
const Message = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Message || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Message', MessageSchema);
const __TURBOPACK__default__export__ = Message;
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
"[project]/src/app/api/swipes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Swipe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Swipe.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Match$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Match.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Chat$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Chat.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Message.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
async function POST(req) {
    try {
        const tokenUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromRequest"])(req);
        if (!tokenUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Not authenticated'
            }, {
                status: 401
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { swipedId, direction } = await req.json();
        // Upsert swipe (idempotent)
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Swipe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
            swiperId: tokenUser.uid,
            swipedId
        }, {
            direction,
            timestamp: new Date().toISOString()
        }, {
            upsert: true,
            new: true
        });
        let matched = false;
        if (direction === 'right') {
            // Check if the other person also swiped right
            const reverse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Swipe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                swiperId: swipedId,
                swipedId: tokenUser.uid,
                direction: 'right'
            });
            if (reverse) {
                // Create match if not already exists
                const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Match$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    $or: [
                        {
                            user1: tokenUser.uid,
                            user2: swipedId
                        },
                        {
                            user1: swipedId,
                            user2: tokenUser.uid
                        }
                    ]
                });
                if (!existing) {
                    const [u1, u2] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                            uid: tokenUser.uid
                        }).lean(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                            uid: swipedId
                        }).lean()
                    ]);
                    const chatId = `match_${[
                        tokenUser.uid,
                        swipedId
                    ].sort().join('_')}`;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Match$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        user1: tokenUser.uid,
                        user2: swipedId,
                        user1CodeName: u1?.codeName || 'Unknown',
                        user2CodeName: u2?.codeName || 'Unknown',
                        chatId,
                        createdAt: new Date().toISOString()
                    });
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Chat$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        chatId,
                        type: 'individual',
                        participants: [
                            tokenUser.uid,
                            swipedId
                        ],
                        participantNames: {
                            [tokenUser.uid]: u1?.codeName || 'You',
                            [swipedId]: u2?.codeName || 'Them'
                        },
                        lastMessage: 'You matched! Start collaborating.',
                        lastMessageAt: new Date().toISOString(),
                        createdAt: new Date().toISOString()
                    });
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Message$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        chatId,
                        senderId: 'system',
                        senderCodeName: 'System',
                        text: `${u1?.codeName} and ${u2?.codeName} matched! Start collaborating.`,
                        timestamp: new Date().toISOString(),
                        type: 'system'
                    });
                    matched = true;
                }
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            matched
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

//# sourceMappingURL=%5Broot-of-the-server%5D__dbee1625._.js.map