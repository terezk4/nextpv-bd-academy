'use client';

import { useState } from 'react';
import type { FlashcardDeckData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from 'lucide-react';
import { EditableText } from '@/components/EditableText';
import { useContentEdits } from '@/hooks/useContentEdits';

type Props = {
  deck: FlashcardDeckData;
  onCardViewed?: (cardId: string) => void;
};

export function FlashcardDeck({ deck, onCardViewed }: Props) {
  const { resolveText } = useContentEdits();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewed, setViewed] = useState<Set<string>>(new Set());

  const card = deck.cards[currentIndex];
  const total = deck.cards.length;
  const progress = viewed.size;

  function flip() {
    setFlipped(prev => !prev);
    if (!viewed.has(card.id)) {
      setViewed(prev => new Set(prev).add(card.id));
      onCardViewed?.(card.id);
    }
  }

  function goNext() {
    setFlipped(false);
    setCurrentIndex(prev => Math.min(prev + 1, total - 1));
  }

  function goPrev() {
    setFlipped(false);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }

  function reset() {
    setCurrentIndex(0);
    setFlipped(false);
  }

  const deckTitle = resolveText(`flashcard.${deck.id}.title`, deck.title);
  const deckDescription = resolveText(`flashcard.${deck.id}.description`, deck.description);
  const front = resolveText(`flashcard.${deck.id}.card.${card.id}.front`, card.front);
  const back = resolveText(`flashcard.${deck.id}.card.${card.id}.back`, card.back);
  const example = card.example ? resolveText(`flashcard.${deck.id}.card.${card.id}.example`, card.example) : undefined;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layers className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          <EditableText editKey={`flashcard.${deck.id}.title`} text={deckTitle} label={`${deck.id} title`} />
        </h3>
        <span className="ml-auto text-sm text-gray-500">
          {progress}/{total}{' '}
          <EditableText editKey={`flashcard.${deck.id}.viewedLabel`} text="viewed" label={`${deck.id} viewed label`} />
        </span>
      </div>
      <p className="text-sm text-gray-600">
        <EditableText editKey={`flashcard.${deck.id}.description`} text={deckDescription} label={`${deck.id} description`} />
      </p>

      <div className="flex gap-1.5">
        {deck.cards.map((deckCard, i) => (
          <button
            key={deckCard.id}
            onClick={() => { setCurrentIndex(i); setFlipped(false); }}
            className={cn(
              'h-2 rounded-full transition-all',
              i === currentIndex ? 'w-6 bg-purple-600' : viewed.has(deckCard.id) ? 'w-2 bg-purple-300' : 'w-2 bg-gray-200'
            )}
          />
        ))}
      </div>

      <div className="relative h-52 cursor-pointer select-none" onClick={flip} style={{ perspective: '1000px' }}>
        <div
          className={cn('absolute inset-0 transition-transform duration-500', 'preserve-3d')}
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.5s',
          }}
        >
          <div
            className="absolute inset-0 rounded-xl border-2 border-purple-200 bg-white p-6 flex flex-col items-center justify-center text-center backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-xs font-medium text-purple-500 uppercase tracking-wide mb-3">
              {currentIndex + 1} / {total}
            </div>
            <h4 className="text-xl font-bold text-gray-900">
              <EditableText editKey={`flashcard.${deck.id}.card.${card.id}.front`} text={front} label={`${deck.id} ${card.id} front`} />
            </h4>
            <p className="text-sm text-gray-400 mt-4">
              <EditableText editKey={`flashcard.${deck.id}.clickToReveal`} text="Click to reveal" label={`${deck.id} click to reveal`} />
            </p>
          </div>

          <div
            className="absolute inset-0 rounded-xl border-2 border-purple-500 bg-purple-50 p-6 flex flex-col justify-center overflow-y-auto"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line mb-3">
              <EditableText editKey={`flashcard.${deck.id}.card.${card.id}.back`} text={back} label={`${deck.id} ${card.id} back`} />
            </p>
            {example && (
              <div className="bg-white rounded-lg p-3 border border-purple-200 mt-auto">
                <p className="text-xs font-semibold text-purple-600 mb-1">
                  <EditableText editKey={`flashcard.${deck.id}.exampleLabel`} text="Example:" label={`${deck.id} example label`} />
                </p>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  <EditableText editKey={`flashcard.${deck.id}.card.${card.id}.example`} text={example} label={`${deck.id} ${card.id} example`} />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={cn(
            'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all',
            currentIndex === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          <EditableText editKey={`flashcard.${deck.id}.prev`} text="Prev" label={`${deck.id} prev`} />
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer mx-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <EditableText editKey={`flashcard.${deck.id}.reset`} text="Reset" label={`${deck.id} reset`} />
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === total - 1}
          className={cn(
            'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all',
            currentIndex === total - 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-purple-600 hover:bg-purple-50 cursor-pointer'
          )}
        >
          <EditableText editKey={`flashcard.${deck.id}.next`} text="Next" label={`${deck.id} next`} />
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {progress === total && (
        <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-sm text-purple-800 text-center">
          <EditableText editKey={`flashcard.${deck.id}.done`} text="All cards reviewed!" label={`${deck.id} done text`} />
        </div>
      )}
    </div>
  );
}

