'use client';

import { cn } from '@/lib/utils';
import { CheckSquare, Square, ListChecks } from 'lucide-react';

type ChecklistItem = {
  key: string;
  label: string;
  description?: string;
};

type Props = {
  title: string;
  description?: string;
  items: ChecklistItem[];
  checkedItems: Record<string, boolean>;
  onToggle: (key: string) => void;
};

export function ChecklistBlock({ title, description, items, checkedItems, onToggle }: Props) {
  const checkedCount = items.filter(i => checkedItems[i.key]).length;
  const allChecked = checkedCount === items.length;

  return (
    <div className="border border-teal-200 rounded-xl p-5 bg-teal-50">
      <div className="flex items-center gap-2 mb-1">
        <ListChecks className="w-5 h-5 text-teal-600" />
        <h3 className="text-base font-semibold text-teal-900">{title}</h3>
        <span className="ml-auto text-sm text-teal-600 font-medium">
          {checkedCount}/{items.length}
        </span>
      </div>
      {description && <p className="text-sm text-teal-700 mb-4">{description}</p>}

      {/* Progress bar */}
      <div className="h-1.5 bg-teal-200 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-teal-500 rounded-full transition-all"
          style={{ width: `${(checkedCount / items.length) * 100}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map(item => {
          const isChecked = !!checkedItems[item.key];
          return (
            <button
              key={item.key}
              onClick={() => onToggle(item.key)}
              className={cn(
                'w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 cursor-pointer',
                isChecked
                  ? 'border-teal-400 bg-white'
                  : 'border-teal-200 bg-white hover:border-teal-300 hover:bg-teal-50/50'
              )}
            >
              <span className="flex-shrink-0 mt-0.5">
                {isChecked
                  ? <CheckSquare className="w-5 h-5 text-teal-600" />
                  : <Square className="w-5 h-5 text-teal-300" />
                }
              </span>
              <div>
                <p className={cn('text-sm font-medium', isChecked ? 'line-through text-gray-400' : 'text-gray-800')}>
                  {item.label}
                </p>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {allChecked && (
        <div className="mt-4 p-3 bg-teal-100 rounded-lg text-sm text-teal-800 text-center font-medium">
          ✓ All practice items complete!
        </div>
      )}
    </div>
  );
}
