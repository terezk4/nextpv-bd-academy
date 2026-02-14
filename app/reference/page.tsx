'use client';

import { useState } from 'react';
import { frameworks, flashcardDecks } from '@/content/reference';
import { FlashcardDeck } from '@/components/FlashcardDeck';
import { cn } from '@/lib/utils';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

function FrameworkCard({ framework }: { framework: typeof frameworks[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {framework.acronym && (
            <span className="text-lg font-black text-blue-600 w-16 flex-shrink-0">{framework.acronym}</span>
          )}
          <div>
            <h3 className="font-bold text-gray-900">{framework.title}</h3>
            <p className="text-sm text-gray-500">{framework.tagline}</p>
          </div>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <div className="space-y-4">
            {framework.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-blue-200 rounded-full" />
                <div>
                  <p className="font-semibold text-sm text-gray-900 mb-1">{step.label}</p>
                  <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                  {step.example && (
                    <div className="bg-blue-50 rounded-lg p-2.5 mt-1">
                      <p className="text-xs text-blue-700 italic leading-relaxed">{step.example}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs font-semibold text-amber-700 mb-1">WHEN TO USE</p>
            <p className="text-xs text-amber-800">{framework.whenToUse}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const WHAT_TO_SAY = [
  {
    context: 'First Call Opening',
    say: '"Before I tell you what we do, help me understand your situation."',
    ask: '"What is the single biggest risk in your current PV setup?"',
    why: 'Shifts from vendor mode to advisor mode.',
    when: 'First call.',
  },
  {
    context: 'Challenger Insert',
    say: '"One thing I\'ve seen consistently with companies at your stage..."',
    ask: '"Has that concern come up in your planning?"',
    why: 'Establishes credibility and opens their thinking.',
    when: 'After Situation, before Problem.',
  },
  {
    context: 'Implication',
    say: '"Help me understand the downstream effect."',
    ask: '"What happens if this isn\'t resolved before Q3?"',
    why: 'Builds urgency from their perspective.',
    when: 'After they name a problem.',
  },
  {
    context: 'Need-Payoff',
    say: '"What would an ideal outcome look like?"',
    ask: '"If that were solved, what would you be able to focus on?"',
    why: 'Positions solution as their idea.',
    when: 'After implications are clear.',
  },
  {
    context: 'Bid Defense Commitment',
    say: '"Let me refine this based on what I might be missing."',
    ask: '"When can we walk through the proposal together?"',
    why: 'Secures bid defense commitment before sending.',
    when: 'Stage 5–6 transition.',
  },
  {
    context: 'Objection — Price',
    say: '"Cost is always worth examining carefully — I appreciate you raising it directly."',
    ask: '"What are you comparing this investment to specifically?"',
    why: 'Reframes what the alternative actually costs.',
    when: 'Price objection.',
  },
  {
    context: 'Objection — CRO',
    say: '"We work alongside CROs routinely — this is not either/or."',
    ask: '"When is your CRO contract renewal?"',
    why: 'Reframes as complementary. Opens natural decision window.',
    when: 'CRO loyalty objection.',
  },
  {
    context: 'Conference Close',
    say: '"This is exactly what we specialize in."',
    ask: '"Can we grab 15 minutes before the end of the conference?"',
    why: 'Specific + time-bound = real commitment.',
    when: 'High-priority conference close.',
  },
];

const PIPELINE_STAGES = [
  { stage: 1, name: 'Lead', exit: 'Lead source documented. Tier assigned. First outreach sent.' },
  { stage: 2, name: 'Qualified (SQL)', exit: 'Pre-call score ≥5. Discovery call confirmed on calendar.' },
  { stage: 3, name: 'Discovery', exit: 'Post-call score ≥6. At least ONE explicit need verbatim in HubSpot. Bid defense agreed.' },
  { stage: 4, name: 'RFP Expected', exit: 'Win themes documented. Proposal draft started. Deal value estimated.' },
  { stage: 5, name: 'Proposal in Prep', exit: 'Proposal finalized + internally reviewed. Pricing approved. Bid defense ready.' },
  { stage: 6, name: 'Submitted', exit: 'Bid defense meeting CONFIRMED on calendar. (Never skip this.)' },
  { stage: 7, name: 'Awarded', exit: 'Verbal or written award received. Contract being drafted.' },
  { stage: 8, name: 'Closed Won', exit: 'Contract signed. Handoff to delivery with all discovery docs.' },
];

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState<'frameworks' | 'flashcards' | 'whattosay' | 'pipeline'>('frameworks');

  const tabs = [
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'whattosay', label: 'What to Say' },
    { id: 'pipeline', label: 'Pipeline Stages' },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">← Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-900 font-medium">Quick Reference</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Quick Reference</h1>
          <p className="text-gray-500 text-sm mt-1">5 core frameworks, flashcard decks, "What to Say" tables, and pipeline checklists.</p>
        </div>
        <BookOpen className="w-8 h-8 text-blue-400 flex-shrink-0" />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer',
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Frameworks Tab */}
      {activeTab === 'frameworks' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Click any framework to expand the full guide with examples.</p>
          {frameworks.map(fw => (
            <FrameworkCard key={fw.id} framework={fw} />
          ))}
        </div>
      )}

      {/* Flashcards Tab */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6">
          {flashcardDecks.map(deck => (
            <div key={deck.id} className="bg-white rounded-2xl border border-slate-200 p-6">
              <FlashcardDeck deck={deck} />
            </div>
          ))}
        </div>
      )}

      {/* What to Say Tab */}
      {activeTab === 'whattosay' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">What to Say / Ask / Why / When</h2>
            <p className="text-sm text-gray-500 mt-1">Consolidated language toolkit for every stage of the BD conversation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Context</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">What to Say</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">What to Ask</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Why</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {WHAT_TO_SAY.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs font-semibold text-blue-600 align-top whitespace-nowrap">{row.context}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 italic align-top">{row.say}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 italic align-top">{row.ask}</td>
                    <td className="px-4 py-3 text-xs text-gray-700 align-top">{row.why}</td>
                    <td className="px-4 py-3 text-xs text-gray-500 align-top whitespace-nowrap">{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pipeline Stages Tab */}
      {activeTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>The Non-Negotiable Rule:</strong> Before sending a proposal, confirm a bid defense meeting. If they will not commit, do not send. This is how proposals get ghosted.
          </div>
          {PIPELINE_STAGES.map(stage => (
            <div key={stage.stage} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4">
              <div className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                stage.stage === 6 ? 'bg-amber-100 text-amber-700 border-2 border-amber-400' : 'bg-blue-100 text-blue-700'
              )}>
                {stage.stage}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{stage.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5"><strong className="text-gray-700">Exit criteria: </strong>{stage.exit}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
