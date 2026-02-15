'use client';

import { useAuth } from '@/hooks/useAuth';
import { useContentEdits } from '@/hooks/useContentEdits';
import { cn } from '@/lib/utils';

type Props = {
  editKey: string;
  text: string;
  label?: string;
  className?: string;
};

export function EditableText({ editKey, text, label, className }: Props) {
  const { user } = useAuth();
  const { resolveText, editText } = useContentEdits();
  const value = resolveText(editKey, text);

  if (!user?.isAdmin) return <>{value}</>;

  const interactiveHint = 'Admin: click to edit text. Inside links/buttons use Alt+Click.';

  return (
    <span
      role="button"
      tabIndex={0}
      title={interactiveHint}
      className={cn(
        'cursor-pointer rounded-sm px-0.5 transition-colors hover:bg-amber-100/80 hover:outline hover:outline-1 hover:outline-amber-300',
        className
      )}
      onClick={(e) => {
        const interactiveParent = e.currentTarget.closest('a,button');
        if (interactiveParent && !e.altKey) {
          // Preserve button/link behavior; allow admin edit with Alt+Click.
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        editText(editKey, value, label);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const interactiveParent = e.currentTarget.closest('a,button');
          if (interactiveParent && !e.altKey) return;
          e.preventDefault();
          e.stopPropagation();
          editText(editKey, value, label);
        }
      }}
    >
      {value}
    </span>
  );
}
