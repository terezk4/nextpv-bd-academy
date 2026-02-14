'use client';

import { useState, useEffect, useCallback } from 'react';
import type { CourseProgress } from '@/lib/types';

const STORAGE_KEY = 'nextpv_bd_academy_progress';

const defaultProgress: CourseProgress = {
  completedSessions: [],
  quizScores: {},
  scenariosViewed: {},
  checklistItems: {},
  flashcardsViewed: {},
  lastVisited: 1,
};

function loadProgress(): CourseProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: CourseProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore storage errors
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<CourseProgress>(defaultProgress);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setMounted(true);
  }, []);

  const update = useCallback((updater: (prev: CourseProgress) => CourseProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  const setQuizScore = useCallback((sessionId: number, score: number) => {
    update(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [sessionId]: score },
    }));
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
    if (sessionId === 1) return true;
    const prevScore = progress.quizScores[sessionId - 1] ?? 0;
    const prevScenario = progress.scenariosViewed[sessionId - 1] ?? false;
    return prevScore >= 70 && prevScenario;
  }, [progress]);

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
