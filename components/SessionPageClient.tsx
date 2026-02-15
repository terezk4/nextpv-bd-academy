'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sessions } from '@/content/sessions';
import { quizzes } from '@/content/quizzes';
import { scenarios } from '@/content/scenarios';
import { flashcardDecks } from '@/content/reference';
import { useProgress } from '@/hooks/useProgress';
import { ContentRenderer } from '@/components/ContentRenderer';
import { QuizBlock } from '@/components/QuizBlock';
import { ScenarioBlock } from '@/components/ScenarioBlock';
import { FlashcardDeck } from '@/components/FlashcardDeck';
import { ChecklistBlock } from '@/components/ChecklistBlock';
import { DecisionTree } from '@/components/DecisionTree';
import { EditableText } from '@/components/EditableText';
import type { DecisionNode } from '@/lib/types';
import { ArrowLeft, ArrowRight, Lock, Clock, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const buyerPhaseTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'What does the prospect say or signal?',
    options: [
      { label: '"Things are fine, we\'ve talked about reviewing PV setup but nothing is urgent"', nextId: null, result: 'Phase 1: Awareness', action: 'Do NOT pitch. Insert a Challenger insight to sharpen the problem. Example: "70–75% of EMA submissions receive PV system questions — does that match your risk understanding?" End with a question. Never send a capabilities deck.' },
      { label: '"We\'re comparing a few options and looking to decide in the next month"', nextId: null, result: 'Phase 2: Consideration', action: 'They need differentiation and proof. Run full SPIN discovery to understand their evaluation criteria. Provide specific evidence: case examples, inspection track record. Build a champion and map the buying committee before proposing.' },
      { label: '"We\'d like to move forward — can you get us something for the CMO/CFO?"', nextId: null, result: 'Phase 3: Decision', action: 'They are in vendor selection. Give them a proposal that speaks their language, social proof, and a smooth path to yes. Do NOT re-open discovery. Tighten and close.' },
      { label: '"When can we start? Who will be our main contact?"', nextId: null, result: 'Phase 4: Implementation', action: 'Decision is made. Focus on clean handoff to delivery team with all discovery documentation. Define 90-day success metrics together.' },
    ],
  },
};

const stallTypeTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'What is happening with the deal?',
    options: [
      { label: 'Discovery call booked but pushed twice. Prospect is vague. "Let\'s reconnect in Q3."', nextId: null, result: 'Stall 1: No Urgency', action: 'Prevention: Use stronger Implication questions. Ask what happens to their launch timeline, inspection risk, budget if the problem continues. If you cannot create urgency from real implications, the deal may not be real.' },
      { label: 'Discovery done, problems acknowledged, but prospect keeps referencing the CRO as reason not to act', nextId: null, result: 'Stall 2: Committed to CRO', action: 'Prevention: Reframe as complementary. "We work alongside CROs routinely — not either/or." Then quantify: "When is your CRO contract renewal?" The renewal window is a natural re-entry point.' },
      { label: 'Your contact (Head of PV) loves the concept but cannot get CMO/CFO to commit', nextId: null, result: 'Stall 3: Champion Can\'t Get Alignment', action: 'Prevention: Build the internal case for them. "What materials would help you present this to the CMO?" Offer executive briefing. Ask directly to meet the economic buyer.' },
      { label: 'Proposal sent, bid defense confirmed, then meeting gets cancelled and prospect stops responding', nextId: null, result: 'Stall 4: Going Dark After Proposal', action: 'Prevention (next time): Before sending, get a specific decision timeline. Schedule follow-up before hitting send. During the wait: send value-adds — regulatory insight, case examples — not nudges.' },
    ],
  },
};

const sessionChecklists: Record<number, { key: string; label: string; description?: string }[]> = {
  1: [
    { key: 's1-ex1', label: 'Rewrite a feature-dump opening as a question-led opener', description: 'Take a generic "NextPV offers..." opening and convert it to a discovery-first question.' },
    { key: 's1-ex2', label: 'Draft your own teaching moment for CRO-bundled PV', description: 'Write a 2-sentence insight + question in your own words.' },
    { key: 's1-ex3', label: 'Practice the "Ask first, Teach second, Tell third" sequence out loud', description: 'Run a 5-minute solo practice — no notes allowed.' },
  ],
  2: [
    { key: 's2-ex1', label: 'Diagnose the buyer phase for 3 prospect statements', description: 'Use the Decision Tree above to correctly identify Phase 1–4.' },
    { key: 's2-ex2', label: 'Map stakeholders for a hypothetical deal', description: 'Identify Decision Maker, Validator, Influencer, and Blocker roles.' },
    { key: 's2-ex3', label: 'Write a multi-threading ask for a current or sample deal', description: '"Who besides you will be involved in evaluating this?"' },
  ],
  3: [
    { key: 's3-ex1', label: 'Write one SPIN question for each step (S, C, P, I, N)', description: 'For a Head of PV at a mid-stage biotech bundling PV with their CRO.' },
    { key: 's3-ex2', label: 'Practice the Chairman Script out loud', description: 'Set the agenda for a 30-min discovery call — time yourself.' },
    { key: 's3-ex3', label: 'Record one full SPIN role-play', description: 'Use your phone. Review for: Did you get to Need-Payoff? Did you capture an explicit need?' },
  ],
  4: [
    { key: 's4-ex1', label: 'Stage-assign 5 fictional deals using the pipeline criteria', description: 'Write the stage number AND which exit criteria are met or missing.' },
    { key: 's4-ex2', label: 'Identify stall type for 3 sample scenarios', description: 'Use the Decision Tree above. Write the prevention tactic for each.' },
    { key: 's4-ex3', label: 'Practice the bid defense commitment line out loud', description: '"Before I send this, when can we walk through it together?" — role-play with a colleague.' },
  ],
  5: [
    { key: 's5-ex1', label: 'Write a FAB from 3 discovery note sentences', description: 'Takes 10 min. Deliver it in under 90 seconds after writing.' },
    { key: 's5-ex2', label: 'LARA drill: respond to 3 objections without notes', description: 'Objections: "Too expensive," "Happy with CRO," "Need internal approval."' },
    { key: 's5-ex3', label: 'Prepare your top 5 objection responses in writing', description: 'Keep these ready before every bid defense meeting.' },
  ],
  6: [
    { key: 's6-ex1', label: 'Write a cold email (4–5 sentences) using a real trigger event', description: 'Find a prospect who recently raised funding or completed a Phase milestone.' },
    { key: 's6-ex2', label: 'Draft a 6-touch sequence plan for one ICP prospect', description: 'Map touch type, timing, and content theme for each of the 6 touches.' },
    { key: 's6-ex3', label: 'Log a sample post-meeting record in HubSpot format', description: 'Include: contact, pain point, phase, priority level, next step, timeline.' },
  ],
};

const sessionFlashcardDecks: Record<number, string[]> = {
  1: [], 2: [], 3: ['spin-deck'], 4: ['bant-deck'], 5: ['fab-deck', 'lara-deck'], 6: [],
};

type Props = { sessionId: number };

export function SessionPageClient({ sessionId }: Props) {
  const router = useRouter();
  const session = sessions.find(s => s.id === sessionId);
  const sessionQuizzes = quizzes.filter(q => q.sessionId === sessionId);
  const sessionScenario = scenarios.find(s => s.sessionId === sessionId);
  const checklists = sessionChecklists[sessionId] ?? [];
  const deckIds = sessionFlashcardDecks[sessionId] ?? [];
  const decks = flashcardDecks.filter(d => deckIds.includes(d.id));

  const {
    progress, mounted, isSessionUnlocked, isSessionComplete,
    setQuizScore, clearQuizScore, markScenarioViewed, toggleChecklistItem,
    markFlashcardViewed, markSessionComplete, setLastVisited,
  } = useProgress();

  const [quizDone, setQuizDone] = useState(false);
  const [scenarioDone, setScenarioDone] = useState(false);
  const [canComplete, setCanComplete] = useState(false);

  useEffect(() => {
    if (mounted) {
      setLastVisited(sessionId);
      const score = progress.quizScores[sessionId];
      const scenarioViewed = progress.scenariosViewed[sessionId];
      if (score !== undefined) setQuizDone(true);
      if (scenarioViewed) setScenarioDone(true);
      if (score !== undefined && score >= 70 && scenarioViewed) setCanComplete(true);
    }
  }, [mounted, sessionId, progress, setLastVisited]);

  const navigateTo = (path: string) => {
    router.push(path);
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        const current = (window.location.pathname.replace(/\/+$/, '') || '/');
        const target = (path.replace(/\/+$/, '') || '/');
        if (current !== target) {
          window.location.assign(path);
        }
      }, 300);
    }
  };
  const goHome = () => navigateTo('/');

  if (!session) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Session not found.</p>
        <button
          type="button"
          onClick={goHome}
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to home
        </button>
      </div>
    );
  }

  if (mounted && !isSessionUnlocked(sessionId)) {
    return (
      <div className="text-center py-20">
        <Lock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-700 mb-2">Session Locked</h2>
        <p className="text-gray-500 mb-6">Complete Session {sessionId - 1} and score ≥70% on the quiz to unlock this session.</p>
        <button
          type="button"
          onClick={goHome}
          className="text-blue-600 hover:underline"
        >
          Back to home
        </button>
      </div>
    );
  }

  const quizScore = progress.quizScores[sessionId];
  const sessionComplete = mounted && isSessionComplete(sessionId);
  const passedQuiz = quizScore !== undefined && quizScore >= 70;
  const goPrevious = () => navigateTo(`/session/${sessionId - 1}`);
  const goNext = () => navigateTo(`/session/${sessionId + 1}`);

  function handleQuizComplete(score: number) {
    setQuizScore(sessionId, score);
    setQuizDone(true);
    if (score >= 70 && (progress.scenariosViewed[sessionId] || scenarioDone)) setCanComplete(true);
  }

  function handleScenarioComplete() {
    markScenarioViewed(sessionId);
    setScenarioDone(true);
    const score = progress.quizScores[sessionId];
    if (score !== undefined && score >= 70) setCanComplete(true);
  }

  function handleQuizRetry() {
    clearQuizScore(sessionId);
    setQuizDone(false);
    setCanComplete(false);
  }

  function handleMarkComplete() {
    markSessionComplete(sessionId);
    if (sessionId < 6) {
      goNext();
      return;
    }
    goHome();
  }

  return (
    <div className="space-y-6">
      {/* Back nav */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goHome}
          className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm text-gray-500 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> All Sessions
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-900 font-medium">Session {sessionId}</span>
      </div>

      {/* Session Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">Session {sessionId} of 6</span>
              {sessionComplete && (
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Complete
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              <EditableText editKey={`session.${sessionId}.title`} text={session.title} label={`Session ${sessionId} title`} />
            </h1>
            <p className="text-sm text-gray-600 mb-3">
              <EditableText editKey={`session.${sessionId}.objective`} text={session.objective} label={`Session ${sessionId} objective`} />
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {session.duration} min</span>
              <span>
                <EditableText editKey={`session.${sessionId}.prerequisite`} text={`Prerequisite: ${session.prerequisite}`} label={`Session ${sessionId} prerequisite`} />
              </span>
            </div>
          </div>
          {mounted && quizScore !== undefined && (
            <div className={cn('text-center px-4 py-3 rounded-xl border-2 flex-shrink-0', passedQuiz ? 'border-green-400 bg-green-50' : 'border-amber-400 bg-amber-50')}>
              <div className={cn('text-2xl font-bold', passedQuiz ? 'text-green-600' : 'text-amber-600')}>{quizScore}%</div>
              <div className="text-xs text-gray-500">Quiz Score</div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
        {session.sections.map(section => <ContentRenderer key={section.id} section={section} />)}
      </div>

      {/* Decision Trees */}
      {sessionId === 2 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <DecisionTree title="Buyer Phase Diagnostic" description="Use this to identify which phase your prospect is in and what to do next." nodes={buyerPhaseTree} startNodeId="start" />
        </div>
      )}
      {sessionId === 4 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <DecisionTree title="Stall Type Diagnostic" description="Identify which stall pattern is occurring and apply the prevention tactic." nodes={stallTypeTree} startNodeId="start" />
        </div>
      )}

      {/* Flashcards */}
      {decks.length > 0 && decks.map(deck => (
        <div key={deck.id} className="bg-white rounded-2xl border border-slate-200 p-6">
          <FlashcardDeck deck={deck} onCardViewed={markFlashcardViewed} />
        </div>
      ))}

      {/* Common Mistakes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-gray-900">
            <EditableText editKey={`session.${sessionId}.mistakes.title`} text="Common Mistakes" label={`Session ${sessionId} mistakes title`} />
          </h2>
        </div>
        <div className="space-y-3">
          {session.mistakes.map((mistake, i) => (
            <div key={i} className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <span className="text-amber-500 font-bold text-sm flex-shrink-0">#{i + 1}</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                <EditableText
                  editKey={`session.${sessionId}.mistake.${i}`}
                  text={mistake}
                  label={`Session ${sessionId} mistake ${i + 1}`}
                />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      {checklists.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <ChecklistBlock
            title={`Session ${sessionId} Practice Exercises`}
            description="Complete these exercises before moving on. Check each box when done."
            items={checklists}
            checkedItems={progress.checklistItems}
            onToggle={toggleChecklistItem}
          />
        </div>
      )}

      {/* Quiz */}
      {sessionQuizzes.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <QuizBlock
            questions={sessionQuizzes}
            sessionId={sessionId}
            onComplete={handleQuizComplete}
            onRetry={handleQuizRetry}
          />
        </div>
      )}

      {/* Scenario */}
      {sessionScenario && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <ScenarioBlock scenario={sessionScenario} onComplete={handleScenarioComplete} />
        </div>
      )}

      {/* Reference Documents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">
            <EditableText editKey={`session.${sessionId}.resources.title`} text="Reference Documents" label={`Session ${sessionId} resources title`} />
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {session.resources.map((res, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-800">
                <EditableText editKey={`session.${sessionId}.resource.${i}.title`} text={res.title} label={`Session ${sessionId} resource ${i + 1} title`} />
              </p>
              <p className="text-xs text-blue-600 mt-0.5">
                <EditableText editKey={`session.${sessionId}.resource.${i}.description`} text={res.description} label={`Session ${sessionId} resource ${i + 1} description`} />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Completion */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex gap-4 mb-6 text-sm flex-wrap">
          <div className={cn('flex items-center gap-2', quizDone && passedQuiz ? 'text-green-600' : quizDone ? 'text-amber-600' : 'text-gray-400')}>
            <span className={cn('w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold', quizDone && passedQuiz ? 'bg-green-600 text-white' : quizDone ? 'bg-amber-400 text-white' : 'bg-gray-200 text-gray-500')}>
              {quizDone ? (passedQuiz ? '✓' : '!') : '1'}
            </span>
            Quiz {quizDone ? (passedQuiz ? `Passed (${quizScore}%)` : `Score ${quizScore}% — need 70%`) : 'Not started'}
          </div>
          <div className={cn('flex items-center gap-2', scenarioDone ? 'text-green-600' : 'text-gray-400')}>
            <span className={cn('w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold', scenarioDone ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500')}>
              {scenarioDone ? '✓' : '2'}
            </span>
            Scenario {scenarioDone ? 'Complete' : 'Not started'}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {sessionId > 1 && (
            <button
              type="button"
              onClick={goPrevious}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
          )}
          {!sessionComplete ? (
            <button
              onClick={handleMarkComplete}
              disabled={!canComplete}
              className={cn('flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all', canComplete ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer' : 'bg-gray-100 text-gray-400 cursor-not-allowed')}
            >
              {canComplete ? (sessionId < 6 ? `✓ Mark Complete + Unlock Session ${sessionId + 1}` : '✓ Mark Complete — Course Done!') : 'Complete quiz (≥70%) + scenario to finish'}
            </button>
          ) : sessionId < 6 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              Next Session <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={goHome}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              Back to Overview
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
