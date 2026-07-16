import React, { useState, useEffect } from 'react';
import { useVisualizer } from '../../context/VisualizerContext';
import { CheckCircle2, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

// Derive a human-readable final output from the last step's data
function deriveOutput(algoId, snap) {
  const data = snap?.data;
  const expl = snap?.explanation || '';

  if (!data && !expl) return null;

  // Single Number (XOR)
  if (algoId?.includes('single-number') && snap?.bitState) {
    return {
      label: 'Unique Number Found',
      value: `${snap.bitState.xorSum}`,
      type: 'success'
    };
  }

  // Search Algorithms
  if (snap?.searchState || algoId?.includes('search') || algoId?.includes('find') || algoId?.includes('linear') || algoId?.includes('binary') || algoId?.includes('ternary')) {
    const found = expl.toLowerCase().includes('found') && !expl.toLowerCase().includes('not found');
    const notFound = expl.toLowerCase().includes('not found') || expl.toLowerCase().includes('exhausted') || expl.toLowerCase().includes('not present');
    if (found) {
      const match = expl.match(/index\s+(\d+)/i) || expl.match(/at\s+(\w+)\s+index\s+(\d+)/i) || expl.match(/at\s+(\d+)/i);
      return { label: 'Search Result', value: match ? `Found at index ${match[match.length - 1]}` : 'Target Found ✓', type: 'success' };
    }
    if (notFound) return { label: 'Search Result', value: 'Target Not Found in Array', type: 'failure' };
  }

  // Fruits into Baskets
  if (algoId?.includes('fruits')) {
    const match = expl.match(/max\s*=\s*(\d+)/i) || expl.match(/maximum\s*fruits\s*[:=\s]+(\d+)/i) || expl.match(/collected\s*[:=\s]+(\d+)/i) || expl.match(/is\s*(\d+)/i);
    return {
      label: 'Max Fruits Collected',
      value: match ? `${match[1]}` : 'Complete',
      type: 'success'
    };
  }

  // Coin Change DP
  if (algoId?.includes('coin-change') && Array.isArray(data)) {
    const last = data[data.length - 1];
    return {
      label: 'Min Coins Needed',
      value: last >= 1e8 || last === Infinity ? '-1 (not possible)' : `${last}`,
      type: 'number'
    };
  }

  // Climbing Stairs DP
  if (algoId?.includes('climbing') && Array.isArray(data)) {
    const last = data[data.length - 1];
    return {
      label: 'Total Distinct Ways',
      value: `${last}`,
      type: 'number'
    };
  }

  // Transpose Matrix
  if (algoId?.includes('transpose') && Array.isArray(data)) {
    const n = Math.sqrt(data.length);
    const rows = [];
    for (let i = 0; i < data.length; i += n) {
      rows.push(`[${data.slice(i, i + n).join(', ')}]`);
    }
    return {
      label: 'Transposed Matrix',
      value: rows.join(' \n '),
      type: 'array'
    };
  }

  // Spiral Matrix
  if (algoId?.includes('spiral') && snap?.matrixState?.order) {
    const { order, matrix } = snap.matrixState;
    const vals = order.map(([r, c]) => matrix[r]?.[c]).filter(v => v !== undefined);
    return {
      label: 'Spiral Traversal Order',
      value: `[${vals.join(', ')}]`,
      type: 'array'
    };
  }

  // Sliding Window
  if (algoId?.includes('sliding-window') && snap?.windowState) {
    return {
      label: 'Max Window Sum',
      value: `${snap.windowState.maxSum}`,
      type: 'number'
    };
  }

  // Fruits into Baskets
  if (algoId?.includes('fruits') && snap?.windowState) {
    return {
      label: 'Max Fruits Collected',
      value: `${snap.windowState.maxSum}`,
      type: 'number'
    };
  }

  // Kadane
  if (snap?.kadaneState && algoId?.includes('kadane')) {
    return { label: 'Maximum Subarray Sum', value: `${snap.kadaneState.maxSoFar}`, type: 'number' };
  }

  // Sorting — flat numeric array
  if (Array.isArray(data) && data.length > 0 && data.every(x => typeof x === 'number')) {
    return { label: 'Sorted Array', value: `[${data.join(', ')}]`, type: 'array' };
  }

  // BFS / DFS Traversal Path
  if ((algoId?.includes('bfs') || algoId?.includes('dfs')) && Array.isArray(snap?.treeState?.path || snap?.data?.path)) {
    const path = snap.treeState?.path || snap.data?.path || [];
    return {
      label: `${algoId.toUpperCase()} Traversal Path`,
      value: `[${path.join(' → ')}]`,
      type: 'success'
    };
  }

  // Trapping Rain Water
  if (snap?.data?.water !== undefined) {
    return { label: 'Total Trapped Water', value: `${snap.data.water} units`, type: 'number' };
  }

  // Dijkstra / Floyd-Warshall / Bellman-Ford — dist array
  if ((algoId?.includes('dijkstra') || algoId?.includes('bellman') || algoId?.includes('floyd') || algoId?.includes('path')) && snap?.data?.dist) {
    const dist = snap.data.dist;
    let valStr = '';
    if (Array.isArray(dist)) {
      valStr = dist.map((d, i) => `N${i}:${d === Infinity || d === 9999 ? '∞' : d}`).join('  ');
    } else if (typeof dist === 'object') {
      valStr = Object.entries(dist).map(([k, d]) => `N${k}:${d === Infinity || d === 9999 ? '∞' : d}`).join('  ');
    } else {
      valStr = String(dist);
    }
    return {
      label: 'Shortest Distances from Node 0',
      value: valStr,
      type: 'array',
    };
  }

  // Fibonacci
  if (algoId?.includes('fibonacci') && snap?.treeState) {
    const match = expl.match(/Fibonacci\((\d+)\)\s*=\s*(\d+)/i);
    if (match) return { label: `Fibonacci(${match[1]})`, value: match[2], type: 'number' };
  }

  // Tower of Hanoi
  if (algoId?.includes('hanoi')) {
    return { label: 'Result', value: 'All disks moved to peg C ✓', type: 'success' };
  }

  // N-Queens
  if (algoId?.includes('queens')) {
    const match = expl.match(/solution/i);
    return { label: 'Result', value: match ? 'Valid queen placement found ✓' : 'Placement complete', type: 'success' };
  }

  // BST traversal path
  if (snap?.treeState?.path && snap.treeState.path.length > 0) {
    return { label: 'Traversal Order', value: `[${snap.treeState.path.join(' → ')}]`, type: 'array' };
  }

  // BST search
  if (algoId?.includes('bst-search') || algoId?.includes('bst-find')) {
    const found = expl.toLowerCase().includes('found');
    return { label: 'BST Search', value: found ? 'Node found ✓' : 'Node not found', type: found ? 'success' : 'failure' };
  }

  // Linked list reverse
  if (algoId?.includes('reverse') && snap?.listState && Array.isArray(snap.data)) {
    return { label: 'Reversed List', value: snap.data.map(n => n.val).join(' → '), type: 'array' };
  }

  // Linked list traversal
  if (algoId?.includes('traversal') && snap?.listState && Array.isArray(snap.data)) {
    return { label: 'Traversal Order', value: snap.data.map(n => n.val).join(' → '), type: 'array' };
  }

  // Middle node
  if (algoId?.includes('middle')) {
    const match = expl.match(/middle node is Node (\d+)/i) || expl.match(/Node (\d+)/i);
    if (match) return { label: 'Middle Node Value', value: match[1], type: 'number' };
  }

  // Cycle detection
  if (algoId?.includes('cycle')) {
    const hasCycle = expl.toLowerCase().includes('cycle detected');
    return { label: 'Cycle Detection', value: hasCycle ? 'Cycle Detected ⚠' : 'No Cycle — List is acyclic ✓', type: hasCycle ? 'warning' : 'success' };
  }

  // Stack
  if (snap?.stackState && Array.isArray(snap.stackState.stack)) {
    return { label: 'Final Stack State', value: snap.stackState.stack.length > 0 ? `[${snap.stackState.stack.join(', ')}]` : '[ empty ]', type: 'array' };
  }

  // Queue
  if (snap?.queueState && Array.isArray(snap.queueState.queue)) {
    return { label: 'Final Queue State', value: snap.queueState.queue.length > 0 ? `[${snap.queueState.queue.join(', ')}]` : '[ empty ]', type: 'array' };
  }

  // Balanced parentheses
  if (algoId?.includes('parentheses') || algoId?.includes('balanced')) {
    const balanced = expl.toLowerCase().includes('valid') || expl.toLowerCase().includes('balanced');
    return { label: 'Balance Check', value: balanced ? 'Valid — All brackets matched ✓' : 'Invalid — Unmatched bracket ✗', type: balanced ? 'success' : 'failure' };
  }

  // Counting sort output phase
  if (snap?.data?.output && Array.isArray(snap.data.output) && snap.data.phase === 'done') {
    return { label: 'Sorted Output', value: `[${snap.data.output.join(', ')}]`, type: 'array' };
  }
  if (snap?.data?.arr && Array.isArray(snap.data.arr) && snap.data.phase === 'done') {
    return { label: 'Sorted Array', value: `[${snap.data.arr.join(', ')}]`, type: 'array' };
  }

  // Radix / bucket sort final (exp === -1)
  if (snap?.data?.arr && Array.isArray(snap.data.arr) && snap.data.exp === -1) {
    return { label: 'Sorted Array', value: `[${snap.data.arr.join(', ')}]`, type: 'array' };
  }

  // DP matrix (knapsack)
  if (algoId?.includes('knapsack') && snap?.dpState?.matrix) {
    const matrix = snap.dpState.matrix;
    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;
    const resultVal = matrix[rows - 1]?.[cols - 1];
    return { label: 'Max Profit', value: `${resultVal}`, type: 'number' };
  }

  // Topological sort
  if (snap?.stackState?.stack && algoId?.includes('topological')) {
    return { label: 'Topological Order', value: `[${snap.stackState.stack.join(' → ')}]`, type: 'array' };
  }

  // Level Order Traversal
  if (algoId?.includes('level-order') && snap?.data?.levels) {
    return {
      label: 'Level Order Levels',
      value: snap.data.levels.map((lvl, i) => `L${i}: [${lvl.join(', ')}]`).join('  |  '),
      type: 'array'
    };
  }

  // Rat in a Maze
  if (algoId?.includes('rat-in-a-maze') && snap?.gridState) {
    const isSuccess = snap.gridState.phase === 'success';
    return {
      label: 'Rat in a Maze Result',
      value: isSuccess ? 'Path Solved Successfully! Rat reached (3, 3) ✓' : 'Blocked — No solution found for this maze layout ✗',
      type: isSuccess ? 'success' : 'failure'
    };
  }

  // Sudoku Solver
  if (algoId?.includes('sudoku') && snap?.gridState) {
    const isSuccess = snap.gridState.phase === 'success';
    return {
      label: 'Sudoku Solver Result',
      value: isSuccess ? 'Board Solved Successfully ✓' : 'Unsolvable board configuration ✗',
      type: isSuccess ? 'success' : 'failure'
    };
  }

  // Power of Two check
  if (algoId?.includes('power-of-two') && snap?.bitState) {
    const isPower = snap.bitState.isPower;
    return {
      label: 'Power of Two Check',
      value: isPower ? `${snap.data?.n} is a Power of 2 ✓` : `${snap.data?.n} is NOT a Power of 2 ✗`,
      type: isPower ? 'success' : 'failure'
    };
  }

  // Count Set Bits
  if (algoId?.includes('count-set-bits') && snap?.data?.count !== undefined) {
    return {
      label: 'Set Bits Count',
      value: `${snap.data.count} set bits`,
      type: 'number'
    };
  }

  // XOR Operations
  if (algoId?.includes('xor-operations') && snap?.data?.result !== undefined) {
    return {
      label: 'XOR Result',
      value: `${snap.data.result} (Binary: ${snap.data.result.toString(2).padStart(8, '0')})`,
      type: 'success'
    };
  }

  // Bitwise binary operations (AND, OR, XOR)
  if (snap?.bitState && (algoId?.includes('bitmask-and') || algoId?.includes('bitmask-or') || algoId?.includes('bitmask-xor'))) {
    const { operation } = snap.bitState;
    const res = snap.data?.result;
    return {
      label: `Bitwise ${operation} Result`,
      value: `${res} (Binary: ${res !== undefined ? res.toString(2).padStart(8, '0') : ''})`,
      type: 'success'
    };
  }

  // Bitwise NOT
  if (algoId?.includes('bitmask-not') && snap?.bitState) {
    const res = snap.data?.result;
    return {
      label: 'Bitwise NOT Result',
      value: `${res} (Binary: ${res !== undefined ? (res & 0xff).toString(2).padStart(8, '0') : ''})`,
      type: 'success'
    };
  }

  // Bitwise shift
  if (snap?.bitState && (algoId?.includes('bit-left-shift') || algoId?.includes('bit-right-shift'))) {
    const res = snap.data?.result;
    return {
      label: `Bit Shift Result`,
      value: `${res} (Binary: ${res !== undefined ? res.toString(2).padStart(8, '0') : ''})`,
      type: 'success'
    };
  }

  // Bit Gray Code
  if (algoId?.includes('gray-code') && snap?.bitState) {
    const res = snap.data?.result;
    return {
      label: 'Gray Code Value',
      value: `${res} (Binary: ${res !== undefined ? res.toString(2).padStart(8, '0') : ''})`,
      type: 'success'
    };
  }

  // Bitmasking Concept
  if (algoId?.includes('bitmasking-concept') && snap?.bitState) {
    const res = snap.data?.val;
    return {
      label: 'Last Operation Result',
      value: `${res} (Binary: ${res !== undefined ? res.toString(2).padStart(8, '0') : ''})`,
      type: 'success'
    };
  }

  // Generate Subsets Using Bitmask
  if (algoId?.includes('generate-subsets-using-bitmask') && snap?.bitState) {
    const count = snap.data?.subsets?.length || 0;
    return {
      label: 'Subsets Generated',
      value: `${count} subsets generated`,
      type: 'success'
    };
  }

  // Fallback: extract from explanation
  const resultMatch = expl.match(/(?:result|sorted|answer|sum|output|complete)[:=\s]+([^\.\!\n]+)/i);
  if (resultMatch) return { label: 'Output', value: resultMatch[1].trim().slice(0, 120), type: 'info' };

  return null;
}

const typeStyles = {
  array:   { bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20', border: 'border-emerald-300 dark:border-emerald-700', text: 'text-emerald-700 dark:text-emerald-300', icon: '📊', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' },
  number:  { bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',   border: 'border-blue-300 dark:border-blue-700',   text: 'text-blue-700 dark:text-blue-300',   icon: '🔢', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' },
  success: { bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20', border: 'border-green-400 dark:border-green-600', text: 'text-green-700 dark:text-green-300', icon: '✅', badge: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' },
  failure: { bg: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20',         border: 'border-red-300 dark:border-red-700',     text: 'text-red-700 dark:text-red-300',     icon: '❌', badge: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' },
  warning: { bg: 'from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20', border: 'border-amber-300 dark:border-amber-600', text: 'text-amber-700 dark:text-amber-300', icon: '⚠️', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' },
  info:    { bg: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20', border: 'border-purple-300 dark:border-purple-600', text: 'text-purple-700 dark:text-purple-300', icon: 'ℹ️', badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' },
};

const FinalOutputPanel = ({ algorithm }) => {
  const { currentStep, steps } = useVisualizer();
  const [collapsed, setCollapsed] = useState(false);

  const isLastStep = steps.length > 0 && currentStep === steps.length - 1;

  // Re-expand when algorithm or steps change
  useEffect(() => {
    setCollapsed(false);
  }, [algorithm?.id, steps.length]);

  if (!isLastStep || steps.length === 0) return null;

  const lastSnap = steps[steps.length - 1];
  const output = deriveOutput(algorithm?.id, lastSnap);
  if (!output) return null;

  const style = typeStyles[output.type] || typeStyles.info;

  return (
    <div className={`clay-card bg-gradient-to-br ${style.bg} border ${style.border} p-5 flex flex-col gap-3 transition-all duration-500`}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-secondary">
            Final Output
          </span>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${style.badge}`}>
            {output.type === 'array' ? 'ARRAY' : output.type === 'number' ? 'VALUE' : output.type.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-secondary transition-all cursor-pointer"
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* Label line */}
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${style.text}`} />
            <span className={`text-xs font-bold ${style.text}`}>{output.label}</span>
          </div>

          {/* Main output value */}
          <div className={`led-bg rounded-xl px-4 py-3 border ${style.border} shadow-inner`}>
            <div className="flex items-start gap-2">
              <span className="text-base flex-shrink-0">{style.icon}</span>
              <span className={`font-mono text-sm font-extrabold ${style.text} break-all leading-relaxed`}>
                {output.value}
              </span>
            </div>
          </div>

          {/* Last step explanation */}
          <p className="text-[10px] text-text-secondary leading-relaxed font-medium opacity-75 pl-1">
            {lastSnap.explanation}
          </p>
        </>
      )}
    </div>
  );
};

export default FinalOutputPanel;
