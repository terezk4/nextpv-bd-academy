'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

type Props = {
  questions: QuizQuestion[];
  sessionId: number;
  onComplete: (score: number) => void;
};

export function QuizBlock({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  function selectAnswer(questionId: string, optionIndex: number) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setRevealed(prev => ({ ...prev, [questionId]: true }));
  }

  function handleSubmit() {
    const correct = questions.filter(q => answers[q.id] === q.correctIndex).length;
    const pct = Math.round((correct / questions.length) * 100);
    setScore(pct);
    setSubmitted(true);
    onComplete(pct);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Knowledge Check</h3>
        <span className="ml-auto text-sm text-gray-500">{questions.length} questions</span>
      </div>

      {questions.map((q, qi) => {
        const selected = answers[q.id];
        const isRevealed = revealed[q.id];
        const isCorrect = selected === q.correctIndex;

        return (
          <div key={q.id} className="border border-gray-200 rounded-lg p-5">
            <p className="font-medium text-gray-900 mb-4">
              <span className="text-gray-400 mr-2">{qi + 1}.</span>
              {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, oi) => {
                const isSelected = selected === oi;
                const isCorrectOption = oi === q.correctIndex;
                let style = 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50';

                if (isRevealed) {
                  if (isCorrectOption) {
                    style = 'border-green-500 bg-green-50 text-green-900';
                  } else if (isSelected && !isCorrectOption) {
                    style = 'border-red-400 bg-red-50 text-red-900';
                  } else {
                    style = 'border-gray-200 bg-white text-gray-400';
                  }
                } else if (isSelected) {
                  style = 'border-blue-400 bg-blue-50 text-blue-900';
                }

                return (
                  <button
                    key={oi}
                    onClick={() => selectAnswer(q.id, oi)}
                    disabled={submitted || isRevealed}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm',
                      style,
                      !submitted && !isRevealed && 'cursor-pointer'
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 mt-0.5">
                        {isRevealed && isCorrectOption && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {isRevealed && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-red-500" />}
                        {!isRevealed && <span className="inline-block w-5 h-5 rounded-full border-2 border-current flex-shrink-0" />}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            {isRevealed && (
              <div className={cn(
                'mt-3 p-3 rounded-lg text-sm',
                isCorrect ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'
              )}>
                <strong>{isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={cn(
            'w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all',
            allAnswered
              ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          )}
        >
          {allAnswered ? 'Submit Answers' : `Answer all ${questions.length} questions to continue`}
        </button>
      )}

      {submitted && score !== null && (
        <div className={cn(
          'p-5 rounded-xl text-center border-2',
          score >= 70 ? 'border-green-400 bg-green-50' : 'border-amber-400 bg-amber-50'
        )}>
          <div className="text-4xl font-bold mb-1" style={{ color: score >= 70 ? '#16a34a' : '#d97706' }}>
            {score}%
          </div>
          <p className="font-semibold text-gray-900">
            {score >= 70 ? '✓ Passed! Next session is now unlocked.' : '⚠ Score 70% or above to unlock the next session.'}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {questions.filter(q => answers[q.id] === q.correctIndex).length} of {questions.length} correct
          </p>
        </div>
      )}
    </div>
  );
}
