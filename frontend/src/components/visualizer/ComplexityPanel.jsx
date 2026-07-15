import React, { useState, useEffect } from 'react';
import { Info, Gauge, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const parseComplexity = (str) => {
  const clean = (str || '').toLowerCase().replace(/\s+/g, '');
  if (clean.includes('o(1)')) {
    return {
      label: 'O(1)',
      fn: () => 1,
      maxVal: 2,
      yTicks: [0, 0.5, 1.0, 1.5, 2.0]
    };
  }
  if (clean.includes('o(nlogn)') || (clean.includes('o(n') && clean.includes('logn)'))) {
    return {
      label: 'O(N log N)',
      fn: (n) => n * Math.log2(n),
      maxVal: 10000,
      yTicks: [0, 2000, 4000, 6000, 8000, 10000]
    };
  }
  if (clean.includes('logn') || clean.includes('log(n)')) {
    return {
      label: 'O(log N)',
      fn: (n) => Math.log2(n),
      maxVal: 12,
      yTicks: [0, 2, 4, 6, 8, 10, 12]
    };
  }
  if (clean.includes('n²') || clean.includes('n^2') || clean.includes('n2')) {
    return {
      label: 'O(N²)',
      fn: (n) => n * n,
      maxVal: 1000000,
      yTicks: [0, 200000, 400000, 600000, 800000, 1000000]
    };
  }
  if (clean.includes('2^n') || clean.includes('2ⁿ') || clean.includes('2n')) {
    return {
      label: 'O(2^N)',
      fn: (n) => Math.min(1000000, Math.pow(2, n / 50)),
      maxVal: 1000000,
      yTicks: [0, 200000, 400000, 600000, 800000, 1000000]
    };
  }
  if (clean.includes('n!')) {
    return {
      label: 'O(N!)',
      fn: (n) => Math.min(1000000, Math.pow(n / 160, n / 160) * 5000),
      maxVal: 1000000,
      yTicks: [0, 200000, 400000, 600000, 800000, 1000000]
    };
  }
  // Default is linear O(N)
  return {
    label: str || 'O(N)',
    fn: (n) => n,
    maxVal: 1000,
    yTicks: [0, 200, 400, 600, 800, 1000]
  };
};

const getCaseColors = (caseLabel) => {
  const label = (caseLabel || '').toLowerCase();
  if (label.includes('best')) {
    return {
      strokeGradient: ['#10B981', '#34D399'], // emerald-500 to emerald-400
      areaColor: '#10B981',
      dotColor: 'fill-emerald-500 dark:fill-emerald-400'
    };
  }
  if (label.includes('average')) {
    return {
      strokeGradient: ['#8B5CF6', '#EC4899'], // purple-500 to pink-500
      areaColor: '#8B5CF6',
      dotColor: 'fill-purple-500 dark:fill-pink-500'
    };
  }
  if (label.includes('worst')) {
    return {
      strokeGradient: ['#EF4444', '#F59E0B'], // red-500 to amber-500
      areaColor: '#EF4444',
      dotColor: 'fill-red-500 dark:fill-amber-500'
    };
  }
  // Space or default
  return {
    strokeGradient: ['#3B82F6', '#06B6D4'], // blue-500 to cyan-500
    areaColor: '#3B82F6',
    dotColor: 'fill-blue-500 dark:fill-cyan-400'
  };
};

const formatYTick = (val) => {
  if (val >= 1000000) return `${val / 1000000}M`;
  if (val >= 1000) return `${val / 1000}k`;
  return val.toString();
};

const ComplexityGraph = ({ complexityStr, caseLabel }) => {
  const config = parseComplexity(complexityStr);
  const colors = getCaseColors(caseLabel);

  const width = 450;
  const height = 300;
  const paddingLeft = 60;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 45;

  const plotWidth = width - paddingLeft - paddingRight; // 370
  const plotHeight = height - paddingTop - paddingBottom; // 225

  // Generate points
  const points = [];
  const xStart = 100;
  const xEnd = 1000;
  const xStep = 20;

  for (let x = xStart; x <= xEnd; x += xStep) {
    const yVal = config.fn(x);
    const y = Math.min(config.maxVal, Math.max(0, yVal));
    
    const cx = paddingLeft + ((x - xStart) / (xEnd - xStart)) * plotWidth;
    const cy = (paddingTop + plotHeight) - (y / config.maxVal) * plotHeight;
    points.push({ cx, cy, x, y });
  }

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].cx} ${paddingTop + plotHeight} L ${points[0].cx} ${paddingTop + plotHeight} Z`;

  const xTicks = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const yTicks = config.yTicks;

  // Unique gradient IDs to prevent conflicts
  const lineGradId = `line-grad-${(caseLabel || 'default').toLowerCase().replace(/\s+/g, '-')}`;
  const areaGradId = `area-grad-${(caseLabel || 'default').toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto select-none overflow-visible"
      style={{ maxWidth: '400px' }}
    >
      <defs>
        <linearGradient id={lineGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={colors.strokeGradient[0]} />
          <stop offset="100%" stopColor={colors.strokeGradient[1]} />
        </linearGradient>
        <linearGradient id={areaGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors.areaColor} stopOpacity={0.2} />
          <stop offset="100%" stopColor={colors.areaColor} stopOpacity={0.0} />
        </linearGradient>
      </defs>

      {/* Background grid lines */}
      {/* X grid lines */}
      {xTicks.map((xt) => {
        const cx = paddingLeft + ((xt - xStart) / (xEnd - xStart)) * plotWidth;
        return (
          <line
            key={`grid-x-${xt}`}
            x1={cx}
            y1={paddingTop}
            x2={cx}
            y2={paddingTop + plotHeight}
            className="stroke-slate-200/60 dark:stroke-slate-700/40"
            strokeWidth={1}
            strokeDasharray="2,2"
          />
        );
      })}

      {/* Y grid lines */}
      {yTicks.map((yt) => {
        const cy = (paddingTop + plotHeight) - (yt / config.maxVal) * plotHeight;
        return (
          <line
            key={`grid-y-${yt}`}
            x1={paddingLeft}
            y1={cy}
            x2={paddingLeft + plotWidth}
            y2={cy}
            className="stroke-slate-200/60 dark:stroke-slate-700/40"
            strokeWidth={1}
            strokeDasharray="2,2"
          />
        );
      })}

      {/* Axes lines */}
      {/* X Axis */}
      <line
        x1={paddingLeft}
        y1={paddingTop + plotHeight}
        x2={paddingLeft + plotWidth}
        y2={paddingTop + plotHeight}
        className="stroke-slate-300 dark:stroke-slate-700"
        strokeWidth={1.5}
      />
      {/* Y Axis */}
      <line
        x1={paddingLeft}
        y1={paddingTop}
        x2={paddingLeft}
        y2={paddingTop + plotHeight}
        className="stroke-slate-300 dark:stroke-slate-700"
        strokeWidth={1.5}
      />

      {/* X Ticks & Labels */}
      {xTicks.map((xt) => {
        const cx = paddingLeft + ((xt - xStart) / (xEnd - xStart)) * plotWidth;
        return (
          <g key={`tick-x-${xt}`}>
            <line
              x1={cx}
              y1={paddingTop + plotHeight}
              x2={cx}
              y2={paddingTop + plotHeight + 4}
              className="stroke-slate-300 dark:stroke-slate-700"
              strokeWidth={1.5}
            />
            <text
              x={cx}
              y={paddingTop + plotHeight + 16}
              textAnchor="middle"
              className="text-[9px] font-medium fill-slate-400 dark:fill-slate-500 font-sans"
            >
              {xt}
            </text>
          </g>
        );
      })}

      {/* Y Ticks & Labels */}
      {yTicks.map((yt) => {
        const cy = (paddingTop + plotHeight) - (yt / config.maxVal) * plotHeight;
        return (
          <g key={`tick-y-${yt}`}>
            <line
              x1={paddingLeft}
              y1={cy}
              x2={paddingLeft - 4}
              y2={cy}
              className="stroke-slate-300 dark:stroke-slate-700"
              strokeWidth={1.5}
            />
            <text
              x={paddingLeft - 8}
              y={cy + 3}
              textAnchor="end"
              className="text-[9px] font-medium fill-slate-400 dark:fill-slate-500 font-sans"
            >
              {formatYTick(yt)}
            </text>
          </g>
        );
      })}

      {/* X-axis title */}
      <text
        x={paddingLeft + plotWidth / 2}
        y={height - 5}
        textAnchor="middle"
        className="text-[10px] font-semibold fill-slate-500 dark:fill-slate-400 font-sans tracking-wide"
      >
        Input Size
      </text>

      {/* Faded Area Fill */}
      <path
        d={areaPath}
        fill={`url(#${areaGradId})`}
      />

      {/* Plotted Line Path */}
      <path
        d={linePath}
        fill="none"
        stroke={`url(#${lineGradId})`}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Plotted Dots (Smaller, cleaner, themed colored circle) */}
      {points.map((p, idx) => (
        <circle
          key={`dot-${idx}`}
          cx={p.cx}
          cy={p.cy}
          r={2}
          className={`${colors.dotColor} stroke-white dark:stroke-[#161b26] stroke-[0.5]`}
        />
      ))}
    </svg>
  );
};

const ComplexityPanel = ({ algorithm }) => {
  if (!algorithm) return null;

  const { timeComplexity = {}, spaceComplexity = 'O(1)' } = algorithm;
  
  // Track selected complexity case to display graph modal
  const [selectedCase, setSelectedCase] = useState(null);

  // Reset selected case when algorithm changes to close any active modal
  useEffect(() => {
    setSelectedCase(null);
  }, [algorithm]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!selectedCase) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCase]);

  let activeComplexityStr = '';
  let activeCaseLabel = '';

  if (selectedCase === 'best') {
    activeComplexityStr = timeComplexity.best || 'O(n)';
    activeCaseLabel = 'Best Case';
  } else if (selectedCase === 'average') {
    activeComplexityStr = timeComplexity.average || 'O(n log n)';
    activeCaseLabel = 'Average Case';
  } else if (selectedCase === 'worst') {
    activeComplexityStr = timeComplexity.worst || 'O(n²)';
    activeCaseLabel = 'Worst Case';
  } else if (selectedCase === 'space') {
    activeComplexityStr = spaceComplexity || 'O(1)';
    activeCaseLabel = 'Space';
  }

  return (
    <>
      {/* Complexity Cards */}
      <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-extrabold text-text-secondary opacity-75 uppercase tracking-wider pb-1">
          <Gauge className="w-4 h-4 text-warning" />
          <span>Complexity Analysis</span>
        </div>

        {/* Grid structure */}
        <div className="grid grid-cols-2 gap-3 text-center">
          {/* Best Case */}
          <button
            onClick={() => setSelectedCase(selectedCase === 'best' ? null : 'best')}
            className={`clay-inset p-3 flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none select-none ${
              selectedCase === 'best'
                ? 'ring-2 ring-green-500 bg-green-500/5 dark:bg-green-500/10'
                : 'bg-bg/40 hover:bg-bg/60'
            }`}
          >
            <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Best Case</div>
            <div className="font-mono text-xs text-green-500 font-extrabold">
              {timeComplexity.best || 'O(n)'}
            </div>
          </button>

          {/* Average Case */}
          <button
            onClick={() => setSelectedCase(selectedCase === 'average' ? null : 'average')}
            className={`clay-inset p-3 flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none select-none ${
              selectedCase === 'average'
                ? 'ring-2 ring-purple-500 bg-purple-500/5 dark:bg-purple-500/10'
                : 'bg-bg/40 hover:bg-bg/60'
            }`}
          >
            <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Average Case</div>
            <div className="font-mono text-xs text-purple-500 font-extrabold">
              {timeComplexity.average || 'O(n log n)'}
            </div>
          </button>

          {/* Worst Case */}
          <button
            onClick={() => setSelectedCase(selectedCase === 'worst' ? null : 'worst')}
            className={`clay-inset p-3 flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none select-none ${
              selectedCase === 'worst'
                ? 'ring-2 ring-red-500 bg-red-500/5 dark:bg-red-500/10'
                : 'bg-bg/40 hover:bg-bg/60'
            }`}
          >
            <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Worst Case</div>
            <div className="font-mono text-xs text-red-500 font-extrabold">
              {timeComplexity.worst || 'O(n²)'}
            </div>
          </button>

          {/* Space Complexity */}
          <button
            onClick={() => setSelectedCase(selectedCase === 'space' ? null : 'space')}
            className={`clay-inset p-3 flex flex-col justify-center items-center cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none select-none ${
              selectedCase === 'space'
                ? 'ring-2 ring-purple-500 bg-purple-500/5 dark:bg-purple-500/10'
                : 'bg-bg/40 hover:bg-bg/60'
            }`}
          >
            <div className="text-[10px] uppercase font-bold text-text-secondary opacity-70 mb-0.5">Space</div>
            <div className="font-mono text-xs text-purple-500 font-extrabold">
              {spaceComplexity}
            </div>
          </button>
        </div>

        <div className="flex items-start gap-2 bg-slate-100 dark:bg-black/20 border border-white/20 dark:border-transparent p-3 rounded-2xl mt-1">
          <Info className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
          <span className="text-[10px] text-text-secondary leading-relaxed text-left font-medium opacity-80">
            Time complexity notes execution boundaries. Space complexity counts external allocations. Click a case to view its complexity graph.
          </span>
        </div>
      </div>

      {/* Pop-up Overlay / Modal Complexity Graph Card */}
      <AnimatePresence>
        {selectedCase && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-3 overflow-hidden">
            {/* Dark glass backdrop restricted to parent bounds */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs rounded-[28px]"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 clay-card bg-white dark:bg-[#161b26] p-5 w-[92%] max-w-[380px] flex flex-col gap-3 shadow-2xl border border-white/20 dark:border-white/5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                <span className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                  {activeCaseLabel} Plot ({activeComplexityStr})
                </span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-text-secondary hover:text-text-primary p-1 rounded-full transition-colors cursor-pointer hover:bg-slate-100 dark:hover:bg-black/20"
                  title="Close graph"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <div className="clay-inset p-4 bg-slate-100/50 dark:bg-black/20 rounded-2xl border border-white/10 flex justify-center items-center w-full">
                <ComplexityGraph complexityStr={activeComplexityStr} caseLabel={activeCaseLabel} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComplexityPanel;
