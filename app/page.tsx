'use client';

import { useProgress } from '@/hooks/useProgress';
import { SessionCard } from '@/components/SessionCard';
import { sessions } from '@/content/sessions';
import { BookOpen, Trophy, Target, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PASS_RULES = [
  { id: 1, session: 3, rule: 'Discovery Execution', description: 'Lead a 20-min SPIN discovery call with Challenger insert and document one explicit need verbatim.' },
  { id: 2, session: 4, rule: 'Qualification & Stage Management', description: 'Correctly assign deals to pipeline stages and explain prevention tactics for 2 of the 4 common stalls.' },
  { id: 3, session: 5, rule: 'Value Messaging & Objection Handling', description: 'Deliver a discovery-grounded FAB and handle 2 objections with LARA without losing position.' },
  { id: 4, session: 6, rule: 'Outreach & Execution Discipline', description: 'Draft a personalized cold email with trigger event + teaching moment + specific CTA. Log a complete post-meeting record.' },
];

export default function HomePage() {
  const { progress, mounted, isSessionUnlocked, isSessionComplete, overallProgress } = useProgress();

  const totalMinutes = sessions.reduce((a, b) => a + b.duration, 0);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">BD Onboarding Academy</h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              Sales-methodology-first training for NextPV Business Development. Master SPIN discovery, qualification, value messaging, and outreach.
            </p>
            <div className="flex items-center gap-6 mt-4 text-sm text-blue-100">
              <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 6 Sessions</span>
              <span className="flex items-center gap-1.5"><Target className="w-4 h-4" /> ~{totalMinutes} min total</span>
              <span className="flex items-center gap-1.5"><Trophy className="w-4 h-4" /> 4 Pass Rules</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {mounted && (
          <div className="mt-6">
            <div className="flex justify-between text-xs text-blue-200 mb-1.5">
              <span>Overall Progress</span>
              <span>{overallProgress}% complete ({progress.completedSessions.length}/6 sessions)</span>
            </div>
            <div className="h-2.5 bg-blue-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Design Principle Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-center">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="text-2xl font-bold text-blue-600 mb-1">80%</div>
          <div className="text-gray-600">Universal sales principles</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="text-2xl font-bold text-blue-600 mb-1">20%</div>
          <div className="text-gray-600">NextPV-specific examples</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <div className="text-2xl font-bold text-blue-600 mb-1">≥70%</div>
          <div className="text-gray-600">Quiz score to unlock next session</div>
        </div>
      </div>

      {/* Session Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Training Sessions</h2>
          <Link href="/reference" className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700">
            <ExternalLink className="w-3.5 h-3.5" /> Quick Reference
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map(session => (
            <SessionCard
              key={session.id}
              id={session.id}
              title={session.title}
              duration={session.duration}
              isUnlocked={mounted ? isSessionUnlocked(session.id) : session.id === 1}
              isComplete={mounted ? isSessionComplete(session.id) : false}
              quizScore={mounted ? progress.quizScores[session.id] : undefined}
              lastVisited={mounted ? progress.lastVisited === session.id : false}
            />
          ))}
        </div>
      </div>

      {/* Pass Rules */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Assessment: 4 Pass Rules</h2>
        <p className="text-sm text-gray-500 mb-5">
          You are ready for independent execution when you can demonstrate all four of these.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PASS_RULES.map(rule => {
            const sessionScore = mounted ? progress.quizScores[rule.session] : undefined;
            const isPassed = sessionScore !== undefined && sessionScore >= 70;
            return (
              <div key={rule.id} className={`p-4 rounded-xl border ${isPassed ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${isPassed ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {isPassed ? '✓' : rule.id}
                  </span>
                  <span className="font-semibold text-sm text-gray-900">Pass Rule {rule.id}: {rule.rule}</span>
                </div>
                <p className="text-xs text-gray-600 ml-8">{rule.description}</p>
                <p className="text-xs text-gray-400 ml-8 mt-1">Assessed in: Session {rule.session}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Frameworks Quick Reference */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">5 Core Frameworks</h2>
          <Link href="/reference" className="text-sm text-blue-600 hover:text-blue-700">
            View full reference →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {['SPIN Discovery', 'Challenger Insert', 'FAB Messaging', 'LARA Objections', 'BANT+ Qualification', 'Stall Prevention'].map(f => (
            <span key={f} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
