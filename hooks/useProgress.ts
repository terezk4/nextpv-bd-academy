'use client';

import { useState, useEffect, useCallback } from 'react';
import type { CourseProgress } from '@/lib/types';
import { useAuth } from '@/hooks/useAuth';

const STORAGE_KEY_PREFIX = 'nextpv_bd_academy_progress';

const defaultProgress: CourseProgress = {
  completedSessions: [],
  quizScores: {},
  scenariosViewed: {},
  checklistItems: {},
  flashcardsViewed: {},
  lastVisited: 1,
};

function loadProgress(storageKey: string): CourseProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(storageKey: string, progress: CourseProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // ignore storage errors
  }
}

export function useProgress() {
  const { user, mounted: authMounted } = useAuth();
  const [progress, setProgress] = useState<CourseProgress>(defaultProgress);
  const [mounted, setMounted] = useState(false);
  const storageKey = user ? `${STORAGE_KEY_PREFIX}_${user.email}` : null;

  useEffect(() => {
    if (!authMounted) return;
    if (!storageKey) {
      setProgress(defaultProgress);
      setMounted(true);
      return;
    }
    setProgress(loadProgress(storageKey));
    setMounted(true);
  }, [authMounted, storageKey]);

  const update = useCallback((updater: (prev: CourseProgress) => CourseProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      if (storageKey) saveProgress(storageKey, next);
      return next;
    });
  }, [storageKey]);

  const setQuizScore = useCallback((sessionId: number, score: number) => {
    update(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [sessionId]: score },
    }));
  }, [update]);

  const clearQuizScore = useCallback((sessionId: number) => {
    update(prev => {
      const nextScores = { ...prev.quizScores };
      delete nextScores[sessionId];
      return {
        ...prev,
        quizScores: nextScores,
      };
    });
  }, [update]);

  const markScenarioViewed = useCallback((sessionId: number) => {
    update(prev => ({
      ...prev,
      scenariosViewed: { ...prev.scenariosViewed, [sessionId]: true },
    }));
  }, [update]);

  const toggleChecklistItem = useCallback((itemKey: string) => {
    update(prev => ({
      ...prev,
      checklistItems: {
        ...prev.checklistItems,
        [itemKey]: !prev.checklistItems[itemKey],
      },
    }));
  }, [update]);

  const markFlashcardViewed = useCallback((cardId: string) => {
    update(prev => ({
      ...prev,
      flashcardsViewed: { ...prev.flashcardsViewed, [cardId]: true },
    }));
  }, [update]);

  const markSessionComplete = useCallback((sessionId: number) => {
    update(prev => ({
      ...prev,
      completedSessions: prev.completedSessions.includes(sessionId)
        ? prev.completedSessions
        : [...prev.completedSessions, sessionId],
    }));
  }, [update]);

  const setLastVisited = useCallback((sessionId: number) => {
    update(prev => ({ ...prev, lastVisited: sessionId }));
  }, [update]);

  const isSessionUnlocked = useCallback((sessionId: number): boolean => {
    if (user?.isAdmin) return true;
    if (sessionId === 1) return true;
    const prevScore = progress.quizScores[sessionId - 1] ?? 0;
    const prevScenario = progress.scenariosViewed[sessionId - 1] ?? false;
    return prevScore >= 70 && prevScenario;
  }, [progress, user]);

  const isSessionComplete = useCallback((sessionId: number): boolean => {
    return progress.completedSessions.includes(sessionId);
  }, [progress]);

  const overallProgress = (() => {
    const total = 6;
    const completed = progress.completedSessions.length;
    return Math.round((completed / total) * 100);
  })();

  return {
    progress,
    mounted,
    setQuizScore,
    clearQuizScore,
    markScenarioViewed,
    toggleChecklistItem,
    markFlashcardViewed,
    markSessionComplete,
    setLastVisited,
    isSessionUnlocked,
    isSessionComplete,
    overallProgress,
  };
}
