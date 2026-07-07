import React from 'react';
import { Info, Gauge } from 'lucide-react';

const ComplexityPanel = ({ algorithm }) => {
  if (!algorithm) return null;

  const { timeComplexity = {}, spaceComplexity = 'O(1)' } = algorithm;

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-extrabold text-text-secondary opacity-75 uppercase tracking-wider pb-1">
        <Gauge className="w-4 h-4 text-warning" />
        <span>Complexity Analysis</span>
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-2 gap-3 text-center">
        {/* Best Case */}
        <div className="clay-inset p-3 bg-bg/40 flex flex-col justify-center items-center">
          <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Best Case</div>
          <div className="font-mono text-xs text-green-500 font-extrabold">
            {timeComplexity.best || 'O(n)'}
          </div>
        </div>

        {/* Average Case */}
        <div className="clay-inset p-3 bg-bg/40 flex flex-col justify-center items-center">
          <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Average Case</div>
          <div className="font-mono text-xs text-purple-500 font-extrabold">
            {timeComplexity.average || 'O(n log n)'}
          </div>
        </div>

        {/* Worst Case */}
        <div className="clay-inset p-3 bg-bg/40 flex flex-col justify-center items-center">
          <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Worst Case</div>
          <div className="font-mono text-xs text-red-500 font-extrabold">
            {timeComplexity.worst || 'O(n²)'}
          </div>
        </div>

        {/* Space Complexity */}
        <div className="clay-inset p-3 bg-bg/40 flex flex-col justify-center items-center">
          <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Space</div>
          <div className="font-mono text-xs text-purple-500 font-extrabold">
            {spaceComplexity}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 bg-slate-100 dark:bg-black/20 border border-white/20 dark:border-transparent p-3 rounded-2xl mt-1">
        <Info className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
        <span className="text-[10px] text-text-secondary leading-relaxed text-left font-medium opacity-80">
          Time complexity notes execution boundaries. Space complexity counts external allocations.
        </span>
      </div>
    </div>
  );
};

export default ComplexityPanel;
