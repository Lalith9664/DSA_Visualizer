import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { useVisualizer } from '../../context/VisualizerContext';

const guessActiveLine = (algoId, snap, codeLines) => {
  const explanation = (snap.explanation || '').toLowerCase();
  
  // 1. Hardcoded exact mappings for Knapsack-DP:
  if (algoId === 'knapsack-dp') {
    if (!snap.dpState) return null;
    const { i, w, weights } = snap.dpState;
    if (explanation.includes('initialize')) return 2;
    if (explanation.includes('complete')) return 9;
    if (explanation.includes('result')) {
      if (weights && i > 0) {
        const itemWt = weights[i - 1];
        return itemWt <= w ? 6 : 8;
      }
      return 6;
    }
    if (explanation.includes('computing')) return 5;
  }
  
  // 2. Exact mappings for Coin Change DP:
  if (algoId === 'coin-change-dp') {
    if (explanation.includes('initialize') || explanation.includes('base case')) {
      return codeLines.findIndex(line => line.includes('dp =') || line.includes('float(')) + 1 || 2;
    }
    if (explanation.includes('complete') || explanation.includes('result:')) {
      return codeLines.findIndex(line => line.includes('return')) + 1 || codeLines.length;
    }
    if (explanation.includes('solving') || explanation.includes('computing')) {
      return codeLines.findIndex(line => line.includes('min(') || line.includes('dp[i] =')) + 1 || 5;
    }
  }

  // 3. Fallback heuristic matcher for Sorting algorithms:
  if (algoId.includes('sort') || algoId.includes('sorting')) {
    if (explanation.includes('initial') || explanation.includes('start')) {
      return 1;
    }
    if (explanation.includes('fully sorted') || explanation.includes('complete') || explanation.includes('sorted array') || explanation.includes('finish')) {
      return codeLines.findIndex(line => line.includes('return')) + 1 || codeLines.length;
    }
    if (explanation.includes('compare') || explanation.includes('comparing') || explanation.includes('check')) {
      const idx = codeLines.findIndex(line => line.includes('if ') && (line.includes('>') || line.includes('<') || line.includes('==') || line.includes('arr[')));
      if (idx !== -1) return idx + 1;
    }
    if (explanation.includes('swap') || explanation.includes('swapped') || explanation.includes('place') || explanation.includes('insert') || explanation.includes('assign')) {
      const idx = codeLines.findIndex(line => line.includes('=') && !line.includes('==') && !line.includes('len('));
      if (idx !== -1) return idx + 1;
    }
  }

  // 4. Fallback heuristic matcher for Binary Search / Searching algorithms:
  if (algoId.includes('search')) {
    if (explanation.includes('initial') || explanation.includes('range')) {
      return codeLines.findIndex(line => line.includes('low') || line.includes('left')) + 1 || 2;
    }
    if (explanation.includes('mid') || explanation.includes('middle') || explanation.includes('calculate')) {
      return codeLines.findIndex(line => line.includes('mid =')) + 1 || 3;
    }
    if (explanation.includes('found') || explanation.includes('equal') || explanation.includes('return mid')) {
      return codeLines.findIndex(line => line.includes('return') && (line.includes('mid') || line.includes('idx'))) + 1 || 5;
    }
    if (explanation.includes('greater') || explanation.includes('smaller') || explanation.includes('check')) {
      const idx = codeLines.findIndex(line => line.includes('if ') || line.includes('elif '));
      if (idx !== -1) return idx + 1;
    }
  }

  // 5. Default fallback: Search line by line for keywords in the explanation
  if (explanation.includes('return') || explanation.includes('complete') || explanation.includes('finish') || explanation.includes('done')) {
    const idx = codeLines.findIndex(line => line.includes('return'));
    if (idx !== -1) return idx + 1;
  }
  
  if (explanation.includes('compare') || explanation.includes('check') || explanation.includes('condition') || explanation.includes('if ')) {
    const idx = codeLines.findIndex(line => line.includes('if ') || line.includes('elif ') || line.includes('while '));
    if (idx !== -1) return idx + 1;
  }

  if (explanation.includes('loop') || explanation.includes('for') || explanation.includes('iterate')) {
    const idx = codeLines.findIndex(line => line.includes('for ') || line.includes('while '));
    if (idx !== -1) return idx + 1;
  }

  if (explanation.includes('initialize') || explanation.includes('set') || explanation.includes('assign') || explanation.includes('start')) {
    const idx = codeLines.findIndex(line => line.includes('=') && !line.includes('=='));
    if (idx !== -1) return idx + 1;
  }

  // Fallback to activeLine if set by step generator
  if (snap.activeLine !== undefined) {
    return snap.activeLine;
  }

  return null;
};

const CodePanel = ({ algorithm }) => {
  const [copied, setCopied] = useState(false);
  const { currentStep, steps } = useVisualizer();

  if (!algorithm) return null;

  const currentSnap = steps[currentStep] || {};
  const codeContent = algorithm.code?.python || '# Code snippet not available';
  const codeLines = codeContent.split('\n');

  let activeLine = currentSnap.activeLine;
  if (activeLine === undefined) {
    activeLine = guessActiveLine(algorithm.id, currentSnap, codeLines);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-2 text-xs font-extrabold text-text-secondary opacity-75 uppercase tracking-wider">
          <Terminal className="w-4 h-4 text-primary" />
          <span>Python Implementation</span>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-full hover:bg-primary/10 text-text-secondary hover:text-primary transition-all cursor-pointer"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code viewport terminal style */}
      <div className="relative led-bg rounded-2xl p-4 font-mono text-xs overflow-x-auto shadow-inner text-left max-h-[360px] overflow-y-auto border border-white/20 dark:border-transparent">
        <div className="absolute top-0 left-0 right-0 h-4 bg-slate-900/10 dark:bg-slate-900/50 flex items-center px-4 justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[9px] text-text-secondary dark:text-slate-600 font-bold uppercase tracking-widest">python</span>
        </div>
        <div className="mt-4 flex flex-col font-mono leading-relaxed text-slate-700 dark:text-slate-300">
          {codeLines.map((line, idx) => {
            const lineNum = idx + 1;
            const isActive = lineNum === activeLine;
            return (
              <div
                key={idx}
                className={`flex items-center -mx-4 px-4 py-0.5 transition-all duration-150 ${
                  isActive 
                    ? 'bg-primary/10 border-l-[3px] border-primary pl-[13px] dark:bg-primary/25' 
                    : ''
                }`}
              >
                <span className="w-8 text-right text-text-secondary dark:text-slate-600 pr-3.5 select-none font-bold opacity-60 flex items-center justify-end gap-1">
                  {isActive && (
                    <span className="text-primary text-[10px] animate-pulse">👉</span>
                  )}
                  <span>{lineNum}</span>
                </span>
                <span className={`whitespace-pre ${isActive ? 'text-primary dark:text-purple-400 font-extrabold' : ''}`}>
                  {line}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodePanel;
