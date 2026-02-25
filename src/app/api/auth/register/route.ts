import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { signToken } from '@/lib/auth';
import { generateCodeName } from '@/lib/codenames';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const uid = `user_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const codeName = generateCodeName();

    const user = await User.create({
      uid,
      email,
      password: hashedPassword,
      codeName,
      dateJoined: new Date().toISOString(),
      rating: 5.0,
      isActive: true,
      isStudent: true,
      profileCompleted: false,
      interviewCompleted: false,
    });

    const token = signToken({ uid: user.uid, email: user.email });

    return NextResponse.json({
      token,
      user: { uid: user.uid, email: user.email, codeName: user.codeName },
    });
  } catch (error: any) {
    console.error('Register error:', error);
    return NextResponse.json({ error: error.message || 'Registration failed' }, { status: 500 });
  }
}
