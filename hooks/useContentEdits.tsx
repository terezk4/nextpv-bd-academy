'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const STORAGE_KEY = 'nextpv_bd_academy_content_edits_v1';

type ContentEdits = Record<string, string>;

type ContentEditsContextValue = {
  resolveText: (editKey: string, fallback: string) => string;
  editText: (editKey: string, currentText: string, label?: string) => void;
  clearAllEdits: () => void;
};

const ContentEditsContext = createContext<ContentEditsContextValue | null>(null);

export function ContentEditsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [edits, setEdits] = useState<ContentEdits>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ContentEdits;
      if (parsed && typeof parsed === 'object') setEdits(parsed);
    } catch {
      // ignore invalid local storage data
    }
  }, []);

  const saveEdits = useCallback((next: ContentEdits) => {
    setEdits(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const resolveText = useCallback((editKey: string, fallback: string) => {
    return edits[editKey] ?? fallback;
  }, [edits]);

  const editText = useCallback((editKey: string, currentText: string, label?: string) => {
    if (!user?.isAdmin || typeof window === 'undefined') return;
    const nextValue = window.prompt(label ?? 'Edit text', currentText);
    if (nextValue === null) return;
    saveEdits({
      ...edits,
      [editKey]: nextValue,
    });
  }, [user, edits, saveEdits]);

  const clearAllEdits = useCallback(() => {
    if (!user?.isAdmin || typeof window === 'undefined') return;
    const confirmed = window.confirm('Clear all saved text edits?');
    if (!confirmed) return;
    setEdits({});
    localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  const value = useMemo<ContentEditsContextValue>(() => ({
    resolveText,
    editText,
    clearAllEdits,
  }), [resolveText, editText, clearAllEdits]);

  return <ContentEditsContext.Provider value={value}>{children}</ContentEditsContext.Provider>;
}

export function useContentEdits() {
  const context = useContext(ContentEditsContext);
  if (!context) {
    throw new Error('useContentEdits must be used within ContentEditsProvider');
  }
  return context;
}

