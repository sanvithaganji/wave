'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signOut, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If the user visits /auth while already logged in, sign them out
    if (!authLoading && user) {
      signOut();
    }
  }, [user, authLoading, signOut]);

  const handleSubmit = async () => {
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    setError('');
    setLoading(true);
    try {
      const endpoint = mode === 'signup' ? '/api/auth/register' : '/api/auth/login';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.');
        return;
      }

      // Save token and reload profile
      localStorage.setItem('waves_token', data.token);
      // Trigger a page reload so AuthContext picks up the new token
      if (mode === 'signup') {
        router.push('/profile/edit');
      } else {
        router.push('/swipe');
      }
      // Use location.reload to force AuthContext to re-read from localStorage
      window.location.href = mode === 'signup' ? '/profile/edit' : '/swipe';
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div style={{
      height: '100vh', width: '100%', maxWidth: 430, margin: '0 auto',
      background: 'var(--black)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '0 32px',
      fontFamily: 'var(--sans)',
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 48, letterSpacing: -1, color: 'var(--pure)', lineHeight: 1, fontFamily: 'var(--sans)' }}>
          wave
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, letterSpacing: 2, textTransform: 'uppercase' }}>
          connect · collaborate · create
        </div>
      </div>

      {/* Toggle */}
      <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', marginBottom: 28, width: '100%' }}>
        <button
          onClick={() => { setMode('login'); setError(''); }}
          style={{
            flex: 1, padding: '11px 0', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer',
            background: mode === 'login' ? 'var(--pure)' : 'var(--dark)',
            color: mode === 'login' ? 'var(--black)' : 'var(--subtle)',
            fontFamily: 'var(--sans)', letterSpacing: 0.5, transition: 'all 0.2s',
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => { setMode('signup'); setError(''); }}
          style={{
            flex: 1, padding: '11px 0', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer',
            background: mode === 'signup' ? 'var(--pure)' : 'var(--dark)',
            color: mode === 'signup' ? 'var(--black)' : 'var(--subtle)',
            fontFamily: 'var(--sans)', letterSpacing: 0.5, transition: 'all 0.2s',
          }}
        >
          Create Account
        </button>
      </div>

      {/* Email */}
      <div style={{ width: '100%', marginBottom: 12 }}>
        <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Email</div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKey}
          placeholder="you@university.edu"
          style={{
            width: '100%', background: 'var(--dark)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '12px 16px', color: 'var(--white)',
            fontSize: 14, fontFamily: 'var(--sans)', outline: 'none',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      {/* Password */}
      <div style={{ width: '100%', marginBottom: 20 }}>
        <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--muted)', marginBottom: 8, fontWeight: 500 }}>Password</div>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={handleKey}
          placeholder="••••••••"
          style={{
            width: '100%', background: 'var(--dark)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '12px 16px', color: 'var(--white)',
            fontSize: 14, fontFamily: 'var(--sans)', outline: 'none',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--subtle)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      {/* Error */}
      {error && (
        <div style={{ width: '100%', marginBottom: 16, fontSize: 12, color: '#cc2222', background: '#fff0f0', border: '1px solid #ffcccc', borderRadius: 8, padding: '10px 14px' }}>
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: '100%', padding: '14px', background: loading ? 'var(--mid)' : 'var(--pure)',
          color: 'var(--black)', border: 'none', borderRadius: 12, fontSize: 14,
          fontWeight: 700, fontFamily: 'var(--sans)', cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: 0.5, transition: 'all 0.2s', marginBottom: 16,
        }}
      >
        {loading ? 'Please wait...' : mode === 'login' ? 'Sign In →' : 'Create Account →'}
      </button>

      <p style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
        Your identity stays anonymous throughout the app.<br />
        Email is only used for authentication.
      </p>
    </div>
  );
}
