'use client';

import { useState } from 'react';
import type { Scenario } from '@/lib/types';
import { cn } from '@/lib/utils';
import { MessageSquare, CheckCircle } from 'lucide-react';

type Props = {
  scenario: Scenario;
  onComplete: () => void;
};

export function ScenarioBlock({ scenario, onComplete }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
  }

  function handleSubmit() {
    if (selected === null) return;
    setRevealed(true);
    onComplete();
  }

  const idealIdx = scenario.options.findIndex(o => o.isIdeal);

  return (
    <div className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-indigo-900">End-of-Session Scenario</h3>
        <span className="ml-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
          Practice
        </span>
      </div>

      <div className="bg-white rounded-lg p-4 mb-5 border border-indigo-100">
        <p className="text-sm font-medium text-gray-500 mb-1">{scenario.title}</p>
        <p className="text-gray-800 leading-relaxed">{scenario.situation}</p>
      </div>

      <p className="text-sm font-semibold text-indigo-800 mb-3">How do you respond?</p>

      <div className="space-y-3 mb-4">
        {scenario.options.map((option, idx) => {
          const isSelected = selected === idx;
          const isIdeal = idx === idealIdx;
          let style = 'border-indigo-200 bg-white text-gray-700 hover:border-indigo-400 hover:bg-indigo-50';

          if (revealed) {
            if (isIdeal) {
              style = 'border-green-500 bg-green-50 text-green-900';
            } else if (isSelected && !isIdeal) {
              style = 'border-red-400 bg-red-50 text-red-900';
            } else {
              style = 'border-gray-200 bg-gray-50 text-gray-400';
            }
          } else if (isSelected) {
            style = 'border-indigo-500 bg-indigo-100 text-indigo-900';
          }

          return (
            <div key={idx}>
              <button
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm leading-relaxed',
                  style,
                  !revealed && 'cursor-pointer'
                )}
              >
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5 font-bold text-xs opacity-60">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span>{option.text}</span>
                </div>
              </button>

              {revealed && isSelected && (
                <div className={cn(
                  'mt-2 p-3 rounded-lg text-sm',
                  isIdeal ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                )}>
                  {option.feedback}
                </div>
              )}
              {revealed && !isSelected && isIdeal && (
                <div className="mt-2 p-3 rounded-lg text-sm bg-green-50 text-green-800 border border-green-200">
                  <strong>Ideal response:</strong> {option.feedback}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!revealed && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className={cn(
            'w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all',
            selected !== null
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          )}
        >
          Submit Response
        </button>
      )}

      {revealed && (
        <div className="flex items-center gap-2 mt-4 p-3 bg-white rounded-lg border border-green-300">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-800">Scenario complete — session is now eligible to mark complete.</span>
        </div>
      )}
    </div>
  );
}
