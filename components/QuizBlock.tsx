'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { EditableText } from '@/components/EditableText';
import { useContentEdits } from '@/hooks/useContentEdits';

type Props = {
  questions: QuizQuestion[];
  sessionId: number;
  onComplete: (score: number) => void;
  onRetry?: () => void;
};

export function QuizBlock({ questions, sessionId, onComplete, onRetry }: Props) {
  const { resolveText } = useContentEdits();
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

  function handleRetry() {
    setAnswers({});
    setRevealed({});
    setSubmitted(false);
    setScore(null);
    onRetry?.();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          <EditableText editKey={`quiz.session.${sessionId}.title`} text="Knowledge Check" label={`Session ${sessionId} knowledge check title`} />
        </h3>
        <span className="ml-auto text-sm text-gray-500">
          {questions.length}{' '}
          <EditableText editKey={`quiz.session.${sessionId}.questionsLabel`} text="questions" label={`Session ${sessionId} questions label`} />
        </span>
      </div>

      {questions.map((q, qi) => {
        const selected = answers[q.id];
        const isRevealed = revealed[q.id];
        const isCorrect = selected === q.correctIndex;
        const questionText = resolveText(`quiz.${q.id}.question`, q.question);

        return (
          <div key={q.id} className="border border-gray-200 rounded-lg p-5">
            <p className="font-medium text-gray-900 mb-4">
              <span className="text-gray-400 mr-2">{qi + 1}.</span>
              <EditableText editKey={`quiz.${q.id}.question`} text={questionText} label={`Quiz ${q.id} question`} />
            </p>
            <div className="space-y-2">
              {q.options.map((option, oi) => {
                const optionText = resolveText(`quiz.${q.id}.option.${oi}`, option);
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
                      <span>
                        <EditableText editKey={`quiz.${q.id}.option.${oi}`} text={optionText} label={`Quiz ${q.id} option ${oi + 1}`} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            {isRevealed && (
              <div className={cn('mt-3 p-3 rounded-lg text-sm', isCorrect ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800')}>
                <strong>{isCorrect ? 'Correct!' : 'Not quite.'}</strong>{' '}
                <EditableText
                  editKey={`quiz.${q.id}.explanation`}
                  text={resolveText(`quiz.${q.id}.explanation`, q.explanation)}
                  label={`Quiz ${q.id} explanation`}
                />
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
          {allAnswered
            ? <EditableText editKey={`quiz.session.${sessionId}.submit`} text="Submit Answers" label={`Session ${sessionId} submit button`} />
            : (
              <>
                <EditableText
                  editKey={`quiz.session.${sessionId}.answerAllPrefix`}
                  text="Answer all"
                  label={`Session ${sessionId} answer all prefix`}
                />{' '}
                {questions.length}{' '}
                <EditableText
                  editKey={`quiz.session.${sessionId}.answerAllSuffix`}
                  text="questions to continue"
                  label={`Session ${sessionId} answer all suffix`}
                />
              </>
            )}
        </button>
      )}

      {submitted && score !== null && (
        <div className={cn('p-5 rounded-xl text-center border-2', score >= 70 ? 'border-green-400 bg-green-50' : 'border-amber-400 bg-amber-50')}>
          <div className="text-4xl font-bold mb-1" style={{ color: score >= 70 ? '#16a34a' : '#d97706' }}>
            {score}%
          </div>
          <p className="font-semibold text-gray-900">
            {score >= 70
              ? <EditableText editKey={`quiz.session.${sessionId}.passed`} text="Passed! Next session is now unlocked." label={`Session ${sessionId} passed text`} />
              : <EditableText editKey={`quiz.session.${sessionId}.failed`} text="Score 70% or above to unlock the next session." label={`Session ${sessionId} failed text`} />
            }
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {questions.filter(q => answers[q.id] === q.correctIndex).length} of {questions.length}{' '}
            <EditableText editKey={`quiz.session.${sessionId}.correctLabel`} text="correct" label={`Session ${sessionId} correct label`} />
          </p>
          {score < 70 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <EditableText editKey={`quiz.session.${sessionId}.retry`} text="Retry Quiz" label={`Session ${sessionId} retry quiz button`} />
              </button>
              <p className="text-xs text-gray-600 mt-2">
                <EditableText
                  editKey={`quiz.session.${sessionId}.retryHint`}
                  text="Review the explanations above, then try again until you reach 70%."
                  label={`Session ${sessionId} retry hint`}
                />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
