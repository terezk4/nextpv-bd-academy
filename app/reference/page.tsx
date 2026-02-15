'use client';

import { useState } from 'react';
import { frameworks, flashcardDecks } from '@/content/reference';
import { FlashcardDeck } from '@/components/FlashcardDeck';
import { EditableText } from '@/components/EditableText';
import { useContentEdits } from '@/hooks/useContentEdits';
import { cn } from '@/lib/utils';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

function FrameworkCard({ framework }: { framework: typeof frameworks[0] }) {
  const { resolveText } = useContentEdits();
  const [open, setOpen] = useState(false);

  const title = resolveText(`reference.framework.${framework.id}.title`, framework.title);
  const acronym = framework.acronym ? resolveText(`reference.framework.${framework.id}.acronym`, framework.acronym) : undefined;
  const tagline = resolveText(`reference.framework.${framework.id}.tagline`, framework.tagline);
  const whenToUse = resolveText(`reference.framework.${framework.id}.whenToUse`, framework.whenToUse);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {acronym && (
            <span className="text-lg font-black text-blue-600 w-16 flex-shrink-0">
              <EditableText editKey={`reference.framework.${framework.id}.acronym`} text={acronym} label={`${framework.id} acronym`} />
            </span>
          )}
          <div>
            <h3 className="font-bold text-gray-900">
              <EditableText editKey={`reference.framework.${framework.id}.title`} text={title} label={`${framework.id} title`} />
            </h3>
            <p className="text-sm text-gray-500">
              <EditableText editKey={`reference.framework.${framework.id}.tagline`} text={tagline} label={`${framework.id} tagline`} />
            </p>
          </div>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <div className="space-y-4">
            {framework.steps.map((step, i) => {
              const stepLabel = resolveText(`reference.framework.${framework.id}.step.${i}.label`, step.label);
              const stepDescription = resolveText(`reference.framework.${framework.id}.step.${i}.description`, step.description);
              const stepExample = step.example ? resolveText(`reference.framework.${framework.id}.step.${i}.example`, step.example) : undefined;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-blue-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 mb-1">
                      <EditableText editKey={`reference.framework.${framework.id}.step.${i}.label`} text={stepLabel} label={`${framework.id} step ${i + 1} label`} />
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <EditableText editKey={`reference.framework.${framework.id}.step.${i}.description`} text={stepDescription} label={`${framework.id} step ${i + 1} description`} />
                    </p>
                    {stepExample && (
                      <div className="bg-blue-50 rounded-lg p-2.5 mt-1">
                        <p className="text-xs text-blue-700 italic leading-relaxed">
                          <EditableText editKey={`reference.framework.${framework.id}.step.${i}.example`} text={stepExample} label={`${framework.id} step ${i + 1} example`} />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs font-semibold text-amber-700 mb-1">
              <EditableText editKey={`reference.framework.${framework.id}.whenToUseLabel`} text="WHEN TO USE" label={`${framework.id} when to use label`} />
            </p>
            <p className="text-xs text-amber-800">
              <EditableText editKey={`reference.framework.${framework.id}.whenToUse`} text={whenToUse} label={`${framework.id} when to use`} />
            </p>
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
    when: 'Stage 5-6 transition.',
  },
  {
    context: 'Objection - Price',
    say: '"Cost is always worth examining carefully - I appreciate you raising it directly."',
    ask: '"What are you comparing this investment to specifically?"',
    why: 'Reframes what the alternative actually costs.',
    when: 'Price objection.',
  },
  {
    context: 'Objection - CRO',
    say: '"We work alongside CROs routinely - this is not either/or."',
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
  { stage: 2, name: 'Qualified (SQL)', exit: 'Pre-call score >=5. Discovery call confirmed on calendar.' },
  { stage: 3, name: 'Discovery', exit: 'Post-call score >=6. At least ONE explicit need verbatim in HubSpot. Bid defense agreed.' },
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
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">
              <EditableText editKey="reference.breadcrumb.home" text="Home" label="Reference breadcrumb home" />
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm text-gray-900 font-medium">
              <EditableText editKey="reference.breadcrumb.current" text="Quick Reference" label="Reference breadcrumb current" />
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            <EditableText editKey="reference.header.title" text="Quick Reference" label="Reference header title" />
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            <EditableText
              editKey="reference.header.subtitle"
              text='5 core frameworks, flashcard decks, "What to Say" tables, and pipeline checklists.'
              label="Reference header subtitle"
            />
          </p>
        </div>
        <BookOpen className="w-8 h-8 text-blue-400 flex-shrink-0" />
      </div>

      <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer',
              activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            )}
          >
            <EditableText editKey={`reference.tab.${tab.id}`} text={tab.label} label={`Reference tab ${tab.id}`} />
          </button>
        ))}
      </div>

      {activeTab === 'frameworks' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            <EditableText editKey="reference.frameworks.helpText" text="Click any framework to expand the full guide with examples." label="Reference frameworks helper text" />
          </p>
          {frameworks.map(framework => (
            <FrameworkCard key={framework.id} framework={framework} />
          ))}
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="space-y-6">
          {flashcardDecks.map(deck => (
            <div key={deck.id} className="bg-white rounded-2xl border border-slate-200 p-6">
              <FlashcardDeck deck={deck} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'whattosay' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">
              <EditableText editKey="reference.whatToSay.title" text="What to Say / Ask / Why / When" label="What to Say title" />
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              <EditableText editKey="reference.whatToSay.subtitle" text="Consolidated language toolkit for every stage of the BD conversation." label="What to Say subtitle" />
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Context', 'What to Say', 'What to Ask', 'Why', 'When'].map((header, i) => (
                    <th key={header} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      <EditableText editKey={`reference.whatToSay.header.${i}`} text={header} label={`What to Say header ${i + 1}`} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {WHAT_TO_SAY.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs font-semibold text-blue-600 align-top whitespace-nowrap">
                      <EditableText editKey={`reference.whatToSay.row.${i}.context`} text={row.context} label={`What to Say row ${i + 1} context`} />
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600 italic align-top">
                      <EditableText editKey={`reference.whatToSay.row.${i}.say`} text={row.say} label={`What to Say row ${i + 1} say`} />
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600 italic align-top">
                      <EditableText editKey={`reference.whatToSay.row.${i}.ask`} text={row.ask} label={`What to Say row ${i + 1} ask`} />
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-700 align-top">
                      <EditableText editKey={`reference.whatToSay.row.${i}.why`} text={row.why} label={`What to Say row ${i + 1} why`} />
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 align-top whitespace-nowrap">
                      <EditableText editKey={`reference.whatToSay.row.${i}.when`} text={row.when} label={`What to Say row ${i + 1} when`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>
              <EditableText editKey="reference.pipeline.ruleTitle" text="The Non-Negotiable Rule:" label="Pipeline rule title" />
            </strong>{' '}
            <EditableText
              editKey="reference.pipeline.ruleBody"
              text="Before sending a proposal, confirm a bid defense meeting. If they will not commit, do not send. This is how proposals get ghosted."
              label="Pipeline rule body"
            />
          </div>
          {PIPELINE_STAGES.map((stage, i) => (
            <div key={stage.stage} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4">
              <div className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                stage.stage === 6 ? 'bg-amber-100 text-amber-700 border-2 border-amber-400' : 'bg-blue-100 text-blue-700'
              )}>
                {stage.stage}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  <EditableText editKey={`reference.pipeline.stage.${i}.name`} text={stage.name} label={`Pipeline stage ${stage.stage} name`} />
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  <strong className="text-gray-700">
                    <EditableText editKey="reference.pipeline.exitLabel" text="Exit criteria:" label="Pipeline exit label" />
                  </strong>{' '}
                  <EditableText editKey={`reference.pipeline.stage.${i}.exit`} text={stage.exit} label={`Pipeline stage ${stage.stage} exit`} />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

