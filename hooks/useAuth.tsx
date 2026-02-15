'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const ADMIN_EMAIL = 'tereza.korecka@nextpvservices.com';
const STORAGE_KEY = 'nextpv_bd_academy_auth_user';

export type AuthUser = {
  email: string;
  isAdmin: boolean;
};

type AuthContextValue = {
  user: AuthUser | null;
  mounted: boolean;
  signIn: (emailInput: string) => boolean;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function normalizeEmail(emailInput: string): string {
  return emailInput
    .trim()
    .toLowerCase()
    .replace('(at)', '@')
    .replace('[at]', '@')
    .replace(/\s+at\s+/g, '@')
    .replace(/\s+/g, '');
}

function toAuthUser(emailInput: string): AuthUser | null {
  const email = normalizeEmail(emailInput);
  if (!email.includes('@') || !email.includes('.')) return null;
  return {
    email,
    isAdmin: email === ADMIN_EMAIL,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthUser;
        if (parsed?.email) setUser({ email: parsed.email, isAdmin: parsed.email === ADMIN_EMAIL });
      }
    } catch {
      // ignore invalid local storage
    } finally {
      setMounted(true);
    }
  }, []);

  const signIn = useCallback((emailInput: string): boolean => {
    const nextUser = toAuthUser(emailInput);
    if (!nextUser) return false;
    setUser(nextUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    }
    return true;
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    mounted,
    signIn,
    signOut,
  }), [user, mounted, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

