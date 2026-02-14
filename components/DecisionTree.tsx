'use client';

import { useState } from 'react';
import type { DecisionNode } from '@/lib/types';
import { cn } from '@/lib/utils';
import { GitBranch, RotateCcw } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  nodes: Record<string, DecisionNode>;
  startNodeId: string;
};

export function DecisionTree({ title, description, nodes, startNodeId }: Props) {
  const [currentId, setCurrentId] = useState<string>(startNodeId);
  const [path, setPath] = useState<{ nodeId: string; label: string }[]>([]);
  const [result, setResult] = useState<{ result: string; action?: string } | null>(null);

  const current = nodes[currentId];

  function choose(nextId: string | null, label: string, leafResult?: string, leafAction?: string) {
    setPath(prev => [...prev, { nodeId: currentId, label }]);
    if (nextId === null && leafResult) {
      setResult({ result: leafResult, action: leafAction });
    } else if (nextId) {
      setCurrentId(nextId);
    }
  }

  function reset() {
    setCurrentId(startNodeId);
    setPath([]);
    setResult(null);
  }

  return (
    <div className="border border-orange-200 rounded-xl p-5 bg-orange-50">
      <div className="flex items-center gap-2 mb-1">
        <GitBranch className="w-5 h-5 text-orange-600" />
        <h3 className="text-base font-semibold text-orange-900">{title}</h3>
      </div>
      <p className="text-sm text-orange-700 mb-4">{description}</p>

      {/* Breadcrumb path */}
      {path.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1 text-xs">
          {path.map((p, i) => (
            <span key={i} className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
              {p.label}
            </span>
          ))}
        </div>
      )}

      {!result ? (
        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <p className="font-medium text-gray-900 mb-4">{current.question}</p>
          <div className="space-y-2">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => choose(opt.nextId, opt.label, opt.result, opt.action)}
                className="w-full text-left px-4 py-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-900 text-sm hover:border-orange-400 hover:bg-orange-100 transition-all cursor-pointer font-medium"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-5 border-2 border-orange-400">
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-2">Diagnosis</p>
          <p className="font-bold text-gray-900 text-lg mb-3">{result.result}</p>
          {result.action && (
            <>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Recommended Action</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.action}</p>
            </>
          )}
        </div>
      )}

      <button
        onClick={reset}
        className="mt-4 flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-800 cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" /> Start over
      </button>
    </div>
  );
}
