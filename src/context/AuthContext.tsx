'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { UserProfile } from '@/lib/types';

interface AuthUser {
  uid: string;
  email: string;
}

interface AuthContextType {
  user: AuthUser | null;
  profile: UserProfile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  refreshProfile: async () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (token: string) => {
    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        // Token invalid or expired
        localStorage.removeItem('waves_token');
        setUser(null);
        setProfile(null);
        return;
      }
      const { user: userData } = await res.json();
      setUser({ uid: userData.uid, email: userData.email });
      setProfile(userData as UserProfile);
    } catch (error) {
      console.error('[AuthContext] fetchProfile error:', error);
      setUser(null);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    const token = localStorage.getItem('waves_token');
    if (token) await fetchProfile(token);
  }, [fetchProfile]);

  const signOut = useCallback(() => {
    localStorage.removeItem('waves_token');
    setUser(null);
    setProfile(null);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('waves_token');
    if (token) {
      fetchProfile(token);
    } else {
      setLoading(false);
    }
  }, [fetchProfile]);

  return (
    <AuthContext.Provider value={{ user, profile, loading, refreshProfile, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

