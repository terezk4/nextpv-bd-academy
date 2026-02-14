'use client';

import { useState } from 'react';
import type { FlashcardDeckData } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from 'lucide-react';

type Props = {
  deck: FlashcardDeckData;
  onCardViewed?: (cardId: string) => void;
};

export function FlashcardDeck({ deck, onCardViewed }: Props) {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layers className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">{deck.title}</h3>
        <span className="ml-auto text-sm text-gray-500">
          {progress}/{total} viewed
        </span>
      </div>
      <p className="text-sm text-gray-600">{deck.description}</p>

      {/* Progress dots */}
      <div className="flex gap-1.5">
        {deck.cards.map((c, i) => (
          <button
            key={c.id}
            onClick={() => { setCurrentIndex(i); setFlipped(false); }}
            className={cn(
              'h-2 rounded-full transition-all',
              i === currentIndex ? 'w-6 bg-purple-600' : viewed.has(c.id) ? 'w-2 bg-purple-300' : 'w-2 bg-gray-200'
            )}
          />
        ))}
      </div>

      {/* Card */}
      <div
        className="relative h-52 cursor-pointer select-none"
        onClick={flip}
        style={{ perspective: '1000px' }}
      >
        <div
          className={cn(
            'absolute inset-0 transition-transform duration-500',
            'preserve-3d'
          )}
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.5s',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-xl border-2 border-purple-200 bg-white p-6 flex flex-col items-center justify-center text-center backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-xs font-medium text-purple-500 uppercase tracking-wide mb-3">
              {currentIndex + 1} / {total}
            </div>
            <h4 className="text-xl font-bold text-gray-900">{card.front}</h4>
            <p className="text-sm text-gray-400 mt-4">Click to reveal</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-xl border-2 border-purple-500 bg-purple-50 p-6 flex flex-col justify-center overflow-y-auto"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line mb-3">{card.back}</p>
            {card.example && (
              <div className="bg-white rounded-lg p-3 border border-purple-200 mt-auto">
                <p className="text-xs font-semibold text-purple-600 mb-1">Example:</p>
                <p className="text-xs text-gray-600 italic leading-relaxed">{card.example}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
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
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer mx-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
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
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {progress === total && (
        <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-sm text-purple-800 text-center">
          ✓ All cards reviewed!
        </div>
      )}
    </div>
  );
}
