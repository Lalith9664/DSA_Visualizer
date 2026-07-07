import React from 'react';
import { useVisualizer } from '../../context/VisualizerContext';
import { Terminal } from 'lucide-react';

const ExplanationPanel = () => {
  const { currentStep, steps } = useVisualizer();

  const currentSnap = steps[currentStep] || {};
  const explanation = currentSnap.explanation || 'Select and generate an input to start visualizing step explanations.';

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs font-extrabold text-text-secondary opacity-75 uppercase tracking-wider pb-1">
        <Terminal className="w-4 h-4 text-accent" />
        <span>Step Explanation</span>
      </div>

      {/* Terminal View */}
      <div className="relative led-bg rounded-2xl p-5 shadow-inner min-h-[90px] flex items-center border border-white/20 dark:border-transparent">
        {/* Glow indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_4px_#8b5cf6] animate-pulse" />
          <span className="text-[8px] font-bold text-accent font-mono tracking-widest">LIVE</span>
        </div>
        <div className="text-text-primary dark:text-[#F3F4F6] font-medium leading-relaxed w-full text-left text-xs pr-10">
          <span className="text-primary select-none mr-2 font-black">&gt;&gt;</span>
          {explanation}
        </div>
      </div>
    </div>
  );
};

export default ExplanationPanel;
