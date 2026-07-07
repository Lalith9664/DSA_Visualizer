import React from 'react';
import { useVisualizer } from '../../context/VisualizerContext';
import { Percent, Cpu, Activity, Timer, Layers } from 'lucide-react';

const StatsPanel = () => {
  const { currentStep, steps, speed } = useVisualizer();

  const totalSteps = steps.length;
  const currentSnap = steps[currentStep] || {};
  const { comparisons = 0, swaps = 0, visitedNodes = 0 } = currentSnap.stats || {};
  const percentCompleted = totalSteps > 0 ? Math.round((currentStep / (totalSteps - 1)) * 100) : 0;

  // Simulate execution time based on steps and speed
  const simulatedTime = (currentStep * (0.01 / speed)).toFixed(3);
  // Dummy memory reading
  const simulatedMemory = (1.8 + (comparisons * 0.05) - (swaps * 0.02)).toFixed(2);

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs font-bold text-text-secondary opacity-75 uppercase tracking-wider flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-primary" />
          <span>Real-time Telemetry</span>
        </span>
      </div>

      {/* Grid of digital displays */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Comparisons */}
        <div className="led-bg rounded-2xl p-3 text-center shadow-inner border border-white/20 dark:border-transparent flex flex-col justify-center items-center">
          <div className="text-[9px] uppercase font-extrabold text-text-secondary opacity-60 mb-1">Comparisons</div>
          <div className="font-mono text-base text-primary font-extrabold">
            {comparisons}
          </div>
        </div>

        {/* Swaps / Mutates */}
        <div className="led-bg rounded-2xl p-3 text-center shadow-inner border border-white/20 dark:border-transparent flex flex-col justify-center items-center">
          <div className="text-[9px] uppercase font-extrabold text-text-secondary opacity-60 mb-1">Swaps / Shifts</div>
          <div className="font-mono text-base text-secondary font-extrabold">
            {swaps}
          </div>
        </div>

        {/* Visited Nodes */}
        <div className="led-bg rounded-2xl p-3 text-center shadow-inner border border-white/20 dark:border-transparent flex flex-col justify-center items-center">
          <div className="text-[9px] uppercase font-extrabold text-text-secondary opacity-60 mb-1">Visited Nodes</div>
          <div className="font-mono text-base text-accent font-extrabold">
            {visitedNodes}
          </div>
        </div>

        {/* Simulated Time */}
        <div className="led-bg rounded-2xl p-3 text-center shadow-inner border border-white/20 dark:border-transparent flex flex-col justify-center items-center">
          <div className="text-[9px] uppercase font-extrabold text-text-secondary opacity-60 mb-1">Execution Time</div>
          <div className="font-mono text-base text-warning font-extrabold flex items-center justify-center gap-0.5">
            <Timer className="w-3.5 h-3.5 inline text-warning opacity-80 mr-0.5" />
            <span>{simulatedTime}s</span>
          </div>
        </div>
      </div>

      {/* Lower Row: Steps & Progress bar */}
      <div className="pt-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Step Numbers */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between">
          <div className="flex items-center gap-1.5 text-xs text-text-secondary font-bold opacity-75">
            <Layers className="w-4 h-4 text-primary" />
            <span>Step Counter:</span>
          </div>
          <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-black/40 border border-white/20 dark:border-transparent px-3 py-1 rounded-full shadow-inner text-primary">
            {currentStep + 1} / {totalSteps || 1}
          </span>
        </div>

        {/* Percentage bar */}
        <div className="flex items-center gap-3 w-full md:flex-1 max-w-md">
          <div className="flex-1 h-3.5 bg-bg border border-white/20 rounded-full p-0.5 overflow-hidden shadow-inner flex items-center">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${percentCompleted}%` }}
            />
          </div>
          <div className="font-mono text-xs text-primary font-bold min-w-10 text-right flex items-center gap-0.5">
            <Percent className="w-3 h-3 text-primary/60" />
            <span>{percentCompleted}</span>
          </div>
        </div>

        {/* Dummy Memory Stats */}
        <div className="flex items-center gap-2 text-xs text-text-secondary font-mono bg-bg px-3 py-1 rounded-full border border-panel-border">
          <Cpu className="w-3.5 h-3.5 text-danger opacity-85" />
          <span>RAM: {simulatedMemory} KB</span>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
