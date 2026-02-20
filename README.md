# 🌊 Waves — Campus Collaboration Platform

> **Connect skills, ideas, and people. Anonymous professional collaboration platform.**

A Tinder-like professional collaboration app for campus students. Black & white minimalist UI. Fully anonymous with auto-generated code names.

---

## Features

- **Anonymous Profiles** — Auto-generated code names (like "Phantom Eagle", "Cosmic Dolphin"). No name, gender, or photo visible.
- **Swipe to Connect** — Tinder-style swiping with smooth animations. Mutual match creates a chat.
- **Projects Tab** — Browse by category (Software/Hardware/Non-Technical) and domain (Healthcare, Agriculture, etc.). Create projects, get interested users, approve/reject.
- **Real-time Chat** — Individual and group messaging. Group chats auto-created for project teams. Call/video buttons.
- **Reverse Rating** — Rating decreases on reports. 3 reports = account deactivated until resolved.
- **Hidden Portfolio** — GitHub, LinkedIn, CodeChef, LeetCode, HackerRank links are collected but never shown to others.
- **PWA** — Installable on mobile devices.

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Firebase** (Auth, Firestore, Storage)
- **Tailwind CSS** (Black & white minimalist design)
- **Framer Motion** (Swipe animations, transitions)
- **Vercel** (Deployment)

---

## Setup Guide

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Name it (e.g., `waves-app`)
4. Disable Google Analytics (optional)
5. Click **Create**

### 2. Enable Phone Authentication

1. In Firebase Console → **Authentication** → **Sign-in method**
2. Enable **Phone** provider
3. Add test phone numbers for development (optional):
   - Phone: `+1 650-555-1234`, Code: `123456`

### 3. Create Firestore Database

1. Firebase Console → **Firestore Database** → **Create database**
2. Choose **Start in test mode** (we'll apply rules later)
3. Select a region close to you

### 4. Get Firebase Config

1. Firebase Console → **Project settings** (gear icon)
2. Under **General** → **Your apps** → Click **Web** (`</>`)
3. Register app name: `waves`
4. Copy the config object

### 5. Set Environment Variables

Edit `.env.local` in the project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 6. Apply Firestore Security Rules

1. Firebase Console → **Firestore** → **Rules**
2. Copy contents of `firestore.rules` and paste
3. Click **Publish**

### 7. Create Firestore Indexes

Firebase Console → **Firestore** → **Indexes** → Create these composite indexes:

| Collection | Fields | Order |
|---|---|---|
| `swipes` | `swiperId` (Asc), `swipedId` (Asc), `direction` (Asc) | — |
| `messages` | `chatId` (Asc), `timestamp` (Asc) | — |
| `projects` | `category` (Asc), `domain` (Asc), `status` (Asc) | — |
| `projects` | `category` (Asc), `status` (Asc) | — |

> **Tip**: Firestore will auto-suggest creating indexes when queries fail. Just click the links in the console error messages.

### 8. Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 9. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables on Vercel
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID
vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
vercel env add NEXT_PUBLIC_FIREBASE_APP_ID

# Deploy to production
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deployments.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing → redirects based on auth
│   ├── auth/page.tsx         # Phone OTP login
│   ├── swipe/page.tsx        # Tinder-style swiping
│   ├── projects/
│   │   ├── page.tsx          # Category/domain selection + project list
│   │   ├── [id]/page.tsx     # Project detail + approve/reject users
│   │   └── my/page.tsx       # My created/joined projects
│   ├── chat/
│   │   ├── page.tsx          # Chat list (personal + group)
│   │   └── [id]/page.tsx     # Chat room with real-time messages
│   └── profile/
│       ├── page.tsx          # View profile
│       └── edit/page.tsx     # Create/edit profile (5-step wizard)
├── components/
│   ├── BottomNav.tsx         # Tab navigation
│   ├── SwipeCard.tsx         # Draggable swipe card with animations
│   ├── ProjectCard.tsx       # Project listing card
│   └── Avatar.tsx            # Generated avatar from code name
├── context/
│   └── AuthContext.tsx       # Auth state management
└── lib/
    ├── firebase.ts           # Firebase initialization
    ├── types.ts              # TypeScript types + constants
    ├── codenames.ts          # Random code name generator
    └── utils.ts              # Reporting system + score calculator
```

---

## Reverse Rating System

- Every user starts at **5.0 rating**
- Each report **decreases rating by 0.5**
- After **3 reports**, account is **deactivated**
- Account stays deactivated until an admin resolves the reports
- Date of joining is always visible for trust context
