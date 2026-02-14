'use client';

import Link from 'next/link';
import { Lock, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  id: number;
  title: string;
  duration: number;
  isUnlocked: boolean;
  isComplete: boolean;
  quizScore?: number;
  lastVisited?: boolean;
};

export function SessionCard({ id, title, duration, isUnlocked, isComplete, quizScore, lastVisited }: Props) {
  const statusColors = {
    complete: 'border-green-300 bg-green-50',
    active: 'border-blue-300 bg-white shadow-md',
    locked: 'border-gray-200 bg-gray-50 opacity-60',
  };

  const status = isComplete ? 'complete' : isUnlocked ? 'active' : 'locked';

  const card = (
    <div className={cn(
      'rounded-xl border-2 p-5 transition-all group relative',
      statusColors[status],
      isUnlocked && !isComplete && 'hover:border-blue-400 hover:shadow-lg cursor-pointer',
      isComplete && 'cursor-pointer hover:border-green-400'
    )}>
      {lastVisited && isUnlocked && !isComplete && (
        <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
          Continue
        </span>
      )}

      <div className="flex items-start justify-between mb-3">
        <span className={cn(
          'text-xs font-semibold px-2 py-0.5 rounded-full',
          isComplete ? 'bg-green-100 text-green-700' : isUnlocked ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
        )}>
          Session {id}
        </span>
        <span>
          {isComplete
            ? <CheckCircle className="w-5 h-5 text-green-500" />
            : isUnlocked
              ? <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              : <Lock className="w-4 h-4 text-gray-400" />
          }
        </span>
      </div>

      <h3 className={cn(
        'font-semibold text-sm leading-snug mb-3',
        isUnlocked ? 'text-gray-900' : 'text-gray-500'
      )}>
        {title}
      </h3>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {duration} min
        </span>
        {quizScore !== undefined && (
          <span className={cn(
            'font-medium',
            quizScore >= 70 ? 'text-green-600' : 'text-amber-600'
          )}>
            Quiz: {quizScore}%
          </span>
        )}
        {!isUnlocked && (
          <span className="text-gray-400">Complete Session {id - 1} first</span>
        )}
      </div>
    </div>
  );

  if (!isUnlocked) return card;

  return <Link href={`/session/${id}`}>{card}</Link>;
}
