'use client';

import type { ContentSection } from '@/lib/types';
import { AlertTriangle, Info, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

function renderMarkdown(text: string) {
  // Simple markdown-like renderer for bold and newlines
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    // List items
    if (line.startsWith('- ')) {
      return (
        <li key={i} className="ml-4 list-disc">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j}>{part.slice(2, -2)}</strong>;
            }
            return part.startsWith('- ') ? part.slice(2) : part;
          })}
        </li>
      );
    }
    if (line.match(/^\d+\. /)) {
      const match = line.match(/^(\d+)\. (.*)/);
      if (match) {
        const rest = match[2].split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        return <li key={i} className="ml-4 list-decimal">{rest}</li>;
      }
    }

    // Emoji bullets (❌ ✅)
    if (line.startsWith('❌') || line.startsWith('✅') || line.startsWith('⚠️') || line.startsWith('⚡')) {
      return <p key={i} className="mt-1">{rendered}</p>;
    }

    if (line === '') return <div key={i} className="h-2" />;

    return <p key={i} className={i > 0 ? 'mt-1' : ''}>{rendered}</p>;
  });
}

export function ContentRenderer({ section }: { section: ContentSection }) {
  if (section.type === 'table' && section.tableData) {
    const { headers, rows } = section.tableData;
    return (
      <div className="my-6">
        {section.heading && (
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.heading}</h3>
        )}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-gray-50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-700 align-top">
                      <span className="italic text-gray-600">{cell}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (section.type === 'callout') {
    const icons = {
      warning: <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />,
      tip: <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />,
      info: <Info className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />,
    };
    const styles = {
      warning: 'bg-amber-50 border-amber-300',
      tip: 'bg-blue-50 border-blue-300',
      info: 'bg-indigo-50 border-indigo-300',
    };
    const type = section.calloutType ?? 'info';
    return (
      <div className={cn('my-4 p-4 rounded-xl border flex gap-3', styles[type])}>
        {icons[type]}
        <div className="text-sm text-gray-800 leading-relaxed">
          {section.heading && <strong className="block mb-1">{section.heading}</strong>}
          <ul className="space-y-1">{renderMarkdown(section.content)}</ul>
        </div>
      </div>
    );
  }

  // Default: text section
  return (
    <div className="my-6">
      {section.heading && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.heading}</h3>
      )}
      <div className="text-gray-700 leading-relaxed text-sm space-y-1">
        {renderMarkdown(section.content)}
      </div>
    </div>
  );
}
