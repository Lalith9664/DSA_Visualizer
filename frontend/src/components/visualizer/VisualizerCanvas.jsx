import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisualizer } from '../../context/VisualizerContext';
import { Play } from 'lucide-react';

const VisualizerCanvas = ({ algorithm }) => {
  const { currentStep, steps } = useVisualizer();

  if (!algorithm || steps.length === 0) {
    return (
      <div className="skeuo-screen h-80 flex flex-col items-center justify-center text-center p-6 text-slate-500">
        <div className="skeuo-screen-overlay" />
        <Play className="w-12 h-12 text-slate-700 mb-2 animate-pulse" />
        <p className="font-mono text-sm">CONSOLE READY. AWAITING INITIALIZATION.</p>
        <p className="text-xs mt-1">Press "Start" or "Random" to load states.</p>
      </div>
    );
  }

  const currentSnap = steps[currentStep] || {};
  const { data, highlights = {}, listState, stackState, queueState, treeState, graphState, hanoiState, dpState, hashState } = currentSnap;

  // Helpers to fetch highlighting colors
  const getHighlightClass = (key) => {
    const status = highlights[key];
    switch (status) {
      case 'compare':
        return 'bg-[#6366F1] border-white/20 text-white shadow-md scale-105';
      case 'swap':
        return 'bg-[#EF4444] border-white/20 text-white shadow-md scale-105';
      case 'pivot':
        return 'bg-[#8B5CF6] border-white/20 text-white shadow-md scale-105';
      case 'sorted':
        return 'bg-[#22C55E] border-white/20 text-white shadow-sm';
      default:
        return 'bg-white dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/40 text-text-primary dark:text-[#F4F7FE] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_inset_-2px_-2px_4px_rgba(0,0,0,0.04)]';
    }
  };

  // --- 1. RENDER SORTING & BASIC ARRAY ---
  const renderArrayCanvas = () => {
    const arr = Array.isArray(data) ? data : [];
    const maxValue = Math.max(...arr, 1);
    return (
      <div className="w-full h-72 flex items-end justify-center gap-2 px-4 pb-4">
        {arr.map((val, idx) => {
          const heightPercent = (val / maxValue) * 75 + 10; // clamp height between 10% and 85%
          return (
            <motion.div
              key={idx}
              layout
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="flex-1 flex flex-col items-center justify-end h-full gap-2"
            >
              {/* Value Indicator Bubble */}
              <span className="font-mono text-xs text-slate-400 select-none">
                {val}
              </span>
              {/* Bar */}
              <div
                style={{ height: `${heightPercent}%` }}
                className={`
                  w-full rounded-t-md border transition-all duration-300 relative group
                  ${getHighlightClass(idx)}
                `}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md" />
              </div>
              {/* Index reading */}
              <span className="font-mono text-[10px] text-slate-500 bg-slate-900/40 px-1 border border-slate-800/50 rounded select-none">
                i:{idx}
              </span>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // --- 2. RENDER SEARCHING ---
  const renderSearchCanvas = () => {
    return (
      <div className="w-full h-72 flex flex-wrap items-center justify-center gap-3 px-6">
        {data.map((val, idx) => {
          const isMid = highlights[idx] === 'pivot';
          return (
            <motion.div
              key={idx}
              layout
              className={`
                w-12 h-12 rounded-lg border flex flex-col items-center justify-center font-mono text-sm font-bold transition-all duration-300 relative
                ${getHighlightClass(idx)}
              `}
            >
              <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-white/10 rounded" />
              <span>{val}</span>
              <span className="text-[9px] text-slate-500 font-normal mt-0.5">#{idx}</span>
              {isMid && (
                <span className="absolute -top-6 text-[10px] text-purple-400 font-bold uppercase tracking-wider animate-bounce">
                  MID
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    );
  };

  // --- 3. RENDER LINKED LIST ---
  const renderLinkedListCanvas = () => {
    return (
      <div className="w-full h-72 overflow-x-auto flex items-center gap-2 px-6">
        {data.map((node) => {
          const isHead = listState?.head === node.id;
          const isCurr = listState?.curr === node.id;
          const isPrev = listState?.prev === node.id;
          const isNext = listState?.next === node.id;

          let roleLabel = '';
          if (isHead) roleLabel = 'HEAD';
          else if (isCurr) roleLabel = 'CURR';

          return (
            <div key={node.id} className="flex items-center gap-1.5 flex-shrink-0">
              <div className="flex flex-col items-center gap-1 relative">
                {roleLabel && (
                  <span className="absolute -top-6 text-[10px] font-bold text-accent tracking-wider uppercase animate-pulse">
                    {roleLabel}
                  </span>
                )}
                {/* Linked List Circle node */}
                <div
                  className={`
                    w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm font-bold transition-all duration-300
                    ${getHighlightClass(node.id)}
                  `}
                >
                  {node.val}
                </div>
                {/* Pointer indicators */}
                <div className="flex gap-1 text-[9px] font-mono text-slate-500">
                  {isPrev && <span className="text-purple-400 font-bold">p</span>}
                  {isCurr && <span className="text-purple-400 font-bold">c</span>}
                  {isNext && <span className="text-amber-500 font-bold">n</span>}
                </div>
              </div>

              {/* Connector arrow pointing to next node */}
              <div className="flex flex-col items-center">
                <span className="text-xl font-mono text-slate-600">
                  {node.next !== null ? '→' : '∅'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // --- 4. RENDER STACK ---
  const renderStackCanvas = () => {
    const stackItems = stackState?.stack || [];
    return (
      <div className="w-full h-72 flex items-end justify-center gap-8 px-6 pb-6">
        {/* String parsing array */}
        <div className="flex flex-wrap gap-2 max-w-sm self-center">
          {data.map((char, idx) => (
            <span
              key={idx}
              className={`
                px-2.5 py-1.5 rounded font-mono text-xs border font-bold
                ${stackState?.charIdx === idx ? 'bg-accent/20 border-accent text-accent shadow-md' : 'bg-slate-900 border-slate-800 text-slate-500'}
              `}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Stack tube container */}
        <div className="w-24 h-56 bg-slate-950 border-x-2 border-b-2 border-slate-700/80 rounded-b-lg flex flex-col justify-end p-2 gap-2 shadow-inner">
          <AnimatePresence>
            {stackItems.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                className={`
                  w-full h-9 rounded border flex items-center justify-center font-mono text-xs font-bold text-white
                  ${idx === stackItems.length - 1 ? 'bg-purple-500 border-purple-400 shadow-[0_0_6px_#8b5cf6]' : 'bg-slate-800 border-slate-700'}
                `}
              >
                {val}
              </motion.div>
            ))}
          </AnimatePresence>
          {stackItems.length === 0 && (
            <span className="text-[10px] font-mono text-slate-700 text-center mb-2">EMPTY</span>
          )}
        </div>
      </div>
    );
  };

  // --- 5. RENDER QUEUE ---
  const renderQueueCanvas = () => {
    const queueItems = queueState?.queue || [];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 px-6">
        {/* Horizontal tube */}
        <div className="w-full max-w-xl h-16 bg-slate-950 border-y-2 border-slate-700/85 rounded-lg flex items-center p-2 gap-2 overflow-x-auto shadow-inner">
          <AnimatePresence>
            {queueItems.map((val, idx) => {
              const isFront = idx === 0;
              const isRear = idx === queueItems.length - 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  className={`
                    w-12 h-10 rounded border flex flex-col items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0 relative
                    ${isFront ? 'bg-green-600 border-green-500' : isRear ? 'bg-purple-600 border-purple-500' : 'bg-slate-800 border-slate-700'}
                  `}
                >
                  <span>{val}</span>
                  {isFront && <span className="absolute -bottom-5 text-[8px] text-green-400 font-bold uppercase">FRONT</span>}
                  {isRear && <span className="absolute -top-5 text-[8px] text-purple-400 font-bold uppercase">REAR</span>}
                </motion.div>
              );
            })}
          </AnimatePresence>
          {queueItems.length === 0 && (
            <span className="text-[10px] font-mono text-slate-700 w-full text-center">EMPTY BUFFER</span>
          )}
        </div>
      </div>
    );
  };

  // --- 6. RENDER TREES (BST) ---
  const renderTreeCanvas = () => {
    const nodes = data || [];
    const isLargeTree = nodes.length > 10;
    const nodeSizeClass = isLargeTree ? 'w-7.5 h-7.5 text-[10px]' : 'w-9 h-9 text-xs';

    return (
      <div className="w-full h-72 relative">
        <svg className="w-full h-full absolute inset-0 z-0 pointer-events-none">
          {/* Draw connecting edge lines */}
          {nodes.map((node) => {
            const lines = [];
            if (node.left) {
              const leftChild = nodes.find(n => n.id === node.left.id);
              if (leftChild) {
                lines.push(
                  <line
                    key={`${node.id}-left`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${leftChild.x}%`}
                    y2={leftChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={highlights[node.id] === 'sorted' && highlights[leftChild.id] === 'sorted' ? 'none' : '4'}
                  />
                );
              }
            }
            if (node.right) {
              const rightChild = nodes.find(n => n.id === node.right.id);
              if (rightChild) {
                lines.push(
                  <line
                    key={`${node.id}-right`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${rightChild.x}%`}
                    y2={rightChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={highlights[node.id] === 'sorted' && highlights[rightChild.id] === 'sorted' ? 'none' : '4'}
                  />
                );
              }
            }
            return lines;
          })}
        </svg>

        {/* Tree Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
            className={`
              absolute ${nodeSizeClass} rounded-full border-2 flex flex-col items-center justify-center font-mono font-bold transition-all duration-300 z-10
              ${getHighlightClass(node.id)}
            `}
          >
            <span className="leading-none">{node.val}</span>
            {node.result !== undefined && node.result !== null && (
              <span className="text-[7.5px] text-yellow-400 font-semibold leading-none mt-0.5">={node.result}</span>
            )}
          </div>
        ))}

        {/* Visit Path scoreboard bottom list */}
        {treeState?.path && (
          <div className="absolute bottom-2 left-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-slate-500 overflow-x-auto whitespace-nowrap bg-black/40 p-1.5 rounded border border-slate-800">
            <span className="font-bold text-accent uppercase mr-1">Path:</span>
            {treeState.path.map((val, idx) => (
              <span key={idx} className="bg-slate-800 text-slate-300 px-1 rounded">
                {val}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  // --- 7. RENDER GRAPHS ---
  const renderGraphCanvas = () => {
    const { nodes = [], edges = [], dist = [], visited = [] } = data || {};
    
    // Dynamic circular layout for graph nodes
    const nodeCoords = {};
    const n = nodes.length;
    const centerX = 50; // percentage
    const centerY = 135; // pixels (vertical center of container)
    const radiusX = 35; // percentage radius
    const radiusY = 85; // pixel radius

    nodes.forEach((node, idx) => {
      if (n === 4) {
        // Keep original layout for exactly 4 nodes to match default description
        const fixedCoords = {
          0: { x: 20, y: 130 },
          1: { x: 50, y: 60 },
          2: { x: 50, y: 200 },
          3: { x: 80, y: 130 }
        };
        nodeCoords[node] = fixedCoords[node] !== undefined ? fixedCoords[node] : fixedCoords[idx];
      } else {
        const angle = (2 * Math.PI * idx) / n - Math.PI / 2;
        nodeCoords[node] = {
          x: centerX + radiusX * Math.cos(angle),
          y: centerY + radiusY * Math.sin(angle)
        };
      }
    });

    return (
      <div className="w-full h-72 relative">
        <svg className="w-full h-full absolute inset-0 z-0">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="20" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
            </marker>
          </defs>
          
          {/* Draw connecting weight edges */}
          {edges.map((edge, idx) => {
            const uCoord = nodeCoords[edge.u];
            const vCoord = nodeCoords[edge.v];
            if (!uCoord || !vCoord) return null;

            const isRelaxing = graphState?.relaxingEdge && 
              ((graphState.relaxingEdge.u === edge.u && graphState.relaxingEdge.v === edge.v) ||
               (graphState.relaxingEdge.u === edge.v && graphState.relaxingEdge.v === edge.u));

            return (
              <g key={idx}>
                <line
                  x1={`${uCoord.x}%`}
                  y1={uCoord.y}
                  x2={`${vCoord.x}%`}
                  y2={vCoord.y}
                  stroke={isRelaxing ? '#06b6d4' : '#475569'}
                  strokeWidth={isRelaxing ? '3' : '1.5'}
                  className={isRelaxing ? 'animate-pulse' : ''}
                />
                {/* Weight Text Label */}
                <text
                  x={`${(uCoord.x + vCoord.x) / 2}%`}
                  y={(uCoord.y + vCoord.y) / 2 - 6}
                  fill={isRelaxing ? '#06b6d4' : '#94a3b8'}
                  className="font-mono text-[9px] font-bold text-center"
                >
                  w:{edge.w}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const coord = nodeCoords[node];
          if (!coord) return null;

          const isActive = graphState?.activeNode === node;
          const isVisited = visited[node];
          const nodeDist = dist[node] === Infinity ? '∞' : dist[node];

          let nodeClass = 'bg-slate-800 border-slate-700 text-slate-400';
          if (isActive) nodeClass = 'bg-purple-600 border-purple-400 shadow-[0_0_10px_#8b5cf6] text-white';
          else if (isVisited) nodeClass = 'bg-emerald-600 border-emerald-500 shadow-[0_0_10px_#10b981] text-white';

          return (
            <div
              key={node}
              style={{ left: `${coord.x}%`, top: `${coord.y}px`, transform: 'translate(-50%, -50%)' }}
              className={`
                absolute w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center font-mono font-bold z-10 transition-all duration-300
                ${nodeClass}
              `}
            >
              <span className="text-xs">{node}</span>
              <span className="text-[8px] font-normal leading-none text-slate-300 mt-0.5">d:{nodeDist}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // --- 8. RENDER RECURSION (TOWER OF HANOI) ---
  const renderHanoiCanvas = () => {
    const pegs = data || { A: [], B: [], C: [] };
    const rodNames = ['A', 'B', 'C'];
    
    return (
      <div className="w-full h-72 flex justify-around items-end px-6 pb-8">
        {rodNames.map((rod) => {
          const rodDisks = pegs[rod] || [];
          return (
            <div key={rod} className="relative w-32 flex flex-col items-center justify-end h-full">
              {/* Vertical rod axis */}
              <div className="absolute bottom-0 w-2.5 h-44 bg-slate-700/80 rounded-t shadow-inner" />
              
              {/* Stacked disks */}
              <div className="w-full flex flex-col-reverse items-center gap-1 z-10 select-none pb-0.5">
                {rodDisks.map((dSize) => {
                  const widthPercent = (dSize / 5) * 80 + 20; // scale disc size width
                  const isMoved = hanoiState?.diskMoved === dSize && (hanoiState?.fromPeg === rod || hanoiState?.toPeg === rod);
                  
                  return (
                    <motion.div
                      key={dSize}
                      layoutId={`disk-${dSize}`}
                      style={{ width: `${widthPercent}%` }}
                      className={`
                        h-5 rounded border border-black/25 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md
                        ${isMoved 
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400 shadow-[0_0_8px_#f59e0b]' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-500'}
                      `}
                    >
                      {dSize}
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Peg Base Plate label */}
              <div className="w-full h-4 bg-slate-800 border border-slate-700 rounded shadow-md text-center text-[9px] font-bold text-slate-400 font-mono pt-0.5 z-20">
                PEG {rod}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // --- 8.5 RENDER N-QUEENS CHESSBOARD ---
  const renderChessboardCanvas = () => {
    const { board = [], size = 4, currentLoc, phase } = currentSnap.queensState || {};
    
    return (
      <div className="w-full h-72 flex items-center justify-center gap-6 px-6">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
            width: `${Math.min(size * 45, 240)}px`,
            height: `${Math.min(size * 45, 240)}px`
          }}
          className="border border-slate-700 bg-slate-950 shadow-lg rounded-lg overflow-hidden"
        >
          {Array.from({ length: size }).map((_, r) => (
            Array.from({ length: size }).map((_, c) => {
              const hasQueen = board[r] === c;
              const isDark = (r + c) % 2 === 1;
              const isCurrent = currentLoc && currentLoc.row === r && currentLoc.col === c;
              
              let cellClass = isDark ? 'bg-slate-900' : 'bg-slate-800';
              if (isCurrent) {
                const status = highlights[`${r}-${c}`];
                if (status === 'swap') {
                  cellClass = 'bg-red-500/30 border-red-500';
                } else if (status === 'pivot') {
                  cellClass = 'bg-green-500/30 border-green-500';
                } else {
                  cellClass = 'bg-blue-500/30 border-blue-500';
                }
              }

              return (
                <div 
                  key={`${r}-${c}`}
                  className={`
                    aspect-square flex items-center justify-center border border-slate-700/35 relative transition-all duration-300
                    ${cellClass}
                  `}
                >
                  {hasQueen && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-base md:text-xl font-bold select-none ${phase === 'solution' ? 'text-green-400 drop-shadow-[0_0_8px_#4ade80]' : 'text-yellow-500 drop-shadow-[0_0_8px_#eab308]'}`}
                    >
                      👑
                    </motion.span>
                  )}
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent animate-pulse" />
                  )}
                </div>
              );
            })
          ))}
        </div>
      </div>
    );
  };

  const renderGridCanvas = () => {
    if (algorithm.id === 'rat-in-a-maze') {
      const { currentRow, currentCol, phase } = currentSnap.gridState || {};
      const actualMaze = currentSnap.data?.maze || [];
      const actualPath = currentSnap.data?.path || [];
      const size = 4;

      return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-4 px-6">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: `${size * 52}px`,
              height: `${size * 52}px`
            }}
            className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-md rounded-2xl overflow-hidden p-2 gap-1.5"
          >
            {Array.from({ length: size }).map((_, r) => (
              Array.from({ length: size }).map((_, c) => {
                const isWall = actualMaze[r] && actualMaze[r][c] === 1;
                const isPath = actualPath[r] && actualPath[r][c] === 1;
                const isCurrent = currentRow === r && currentCol === c;
                const cellStatus = highlights[`${r}-${c}`];
                
                let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80";
                if (isWall) {
                  cellClass = "bg-slate-800 dark:bg-slate-950 border-slate-900/60 dark:border-slate-950";
                } else if (isPath) {
                  cellClass = "bg-green-500/20 border-green-500/40 text-green-600 dark:text-green-400";
                }

                if (isCurrent) {
                  if (cellStatus === 'swap') {
                    cellClass = "bg-red-500/20 border-red-500 text-red-500";
                  } else {
                    cellClass = "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400";
                  }
                }

                return (
                  <div 
                    key={`${r}-${c}`}
                    className={`
                      aspect-square flex flex-col items-center justify-center border rounded-xl relative transition-all duration-300 font-mono text-[9px] font-bold text-slate-500
                      ${cellClass}
                    `}
                  >
                    {isWall ? (
                      <span className="text-[14px]">🧱</span>
                    ) : r === 0 && c === 0 ? (
                      <span className="text-[16px] z-10">🐭</span>
                    ) : r === size - 1 && c === size - 1 ? (
                      <span className="text-[16px] z-10">🧀</span>
                    ) : isPath ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    ) : null}
                    
                    {isCurrent && (
                      <span className="absolute inset-0 border-2 border-accent rounded-xl animate-pulse" />
                    )}
                    <span className="absolute bottom-0.5 right-1 text-[6px] opacity-40 font-normal">
                      {r},{c}
                    </span>
                  </div>
                );
              })
            ))}
          </div>
        </div>
      );
    }

    if (algorithm.id === 'sudoku-solver') {
      const { currentRow, currentCol, val, isValid, phase } = currentSnap.gridState || {};
      const actualBoard = currentSnap.data?.board || [];
      const size = 4;

      return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-4 px-6">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: `${size * 52}px`,
              height: `${size * 52}px`
            }}
            className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-md rounded-2xl overflow-hidden p-2 gap-1.5"
          >
            {Array.from({ length: size }).map((_, r) => (
              Array.from({ length: size }).map((_, c) => {
                const cellVal = actualBoard[r] && actualBoard[r][c];
                const isCurrent = currentRow === r && currentCol === c;
                const cellStatus = highlights[`${r}-${c}`];
                
                let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
                if (isCurrent) {
                  if (cellStatus === 'swap') {
                    cellClass = "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
                  } else {
                    cellClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
                  }
                }

                return (
                  <div 
                    key={`${r}-${c}`}
                    className={`
                      aspect-square flex items-center justify-center border rounded-xl relative transition-all duration-300 font-mono text-base font-bold
                      ${cellClass}
                    `}
                  >
                    {cellVal !== 0 ? cellVal : ""}
                    {isCurrent && (
                      <span className="absolute inset-0 border-2 border-accent rounded-xl animate-pulse" />
                    )}
                    <span className="absolute bottom-0.5 right-1 text-[6px] opacity-40 font-normal text-slate-500">
                      {r},{c}
                    </span>
                  </div>
                );
              })
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderKmpCanvas = () => {
    const { text = "", pattern = "", lps = [] } = data || {};
    const { textIdx = -1, patternIdx = -1 } = currentSnap.kmpState || {};
    const highlightText = highlights.text || {};
    const highlightPattern = highlights.pattern || {};

    return (
      <div className="w-full h-72 flex flex-col justify-center gap-6 p-4">
        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Text String Scanner (i)
          </span>
          <div className="flex flex-wrap gap-1">
            {text.split('').map((char, idx) => {
              const isCurrent = idx === textIdx;
              const hType = highlightText[idx];
              let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (hType === 'pivot') {
                cellClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
              } else if (hType === 'swap') {
                cellClass = "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
              } else if (hType === 'sorted') {
                cellClass = "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold";
              }

              return (
                <div
                  key={idx}
                  className={`
                    w-8 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative transition-all duration-200
                    ${cellClass}
                  `}
                >
                  <span className="text-sm">{char}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">
                    {idx}
                  </span>
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Pattern Matcher (j)
          </span>
          <div className="flex flex-wrap gap-1">
            {pattern.split('').map((char, idx) => {
              const isCurrent = idx === patternIdx;
              const hType = highlightPattern[idx];
              let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (hType === 'pivot') {
                cellClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
              } else if (hType === 'swap') {
                cellClass = "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
              }

              return (
                <div
                  key={idx}
                  className={`
                    w-8 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative transition-all duration-200
                    ${cellClass}
                  `}
                >
                  <span className="text-sm">{char}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">
                    LPS:{lps[idx]}
                  </span>
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderStringsListCanvas = () => {
    const { words = [], prefix = "" } = data || {};
    const { currentWordIdx = -1, charIdx = -1, phase } = currentSnap.lcpState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-3 max-h-60 overflow-y-auto w-full">
          {words.map((word, wIdx) => {
            return (
              <div key={wIdx} className="flex items-center gap-1">
                <span className="w-16 text-[9px] font-mono text-slate-500 text-right truncate">
                  Word #{wIdx}
                </span>
                <div className="flex gap-1">
                  {word.split('').map((char, cIdx) => {
                    const isActiveWord = wIdx === currentWordIdx;
                    const isActiveChar = cIdx === charIdx;
                    const isInPrefix = cIdx < prefix.length;
                    
                    let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
                    if (isInPrefix) {
                      cellClass = "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold";
                    } else if (isActiveWord && isActiveChar) {
                      if (phase === 'mismatch') {
                        cellClass = "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
                      } else {
                        cellClass = "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-extrabold";
                      }
                    }

                    return (
                      <div
                        key={cIdx}
                        className={`
                          w-7 h-8 flex items-center justify-center border rounded-lg font-mono text-xs relative transition-all duration-200
                          ${cellClass}
                        `}
                      >
                        {char}
                        {isActiveWord && isActiveChar && (
                          <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-56 flex flex-col items-center justify-center skeuo-inset-panel p-4 bg-slate-950/20 rounded-2xl">
          <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider mb-2">
            Common Prefix
          </span>
          <div className="text-xl font-mono font-extrabold tracking-wide text-purple-600 dark:text-purple-400 min-h-8">
            {prefix ? `"${prefix}"` : '""'}
          </div>
        </div>
      </div>
    );
  };

  const renderGreedyIntervalCanvas = () => {
    const { activities = [], selected = [] } = data || {};
    const { currentIdx = -1, lastFinish = 0, phase } = currentSnap.greedyState || {};

    return (
      <div className="w-full h-72 flex flex-col justify-center p-4 gap-3">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
          Interval Timelines (Greedy Activity Selection)
        </span>
        <div className="flex flex-col gap-2 max-h-56 overflow-y-auto w-full">
          {activities.map((act, idx) => {
            const isSelected = selected.includes(idx);
            const isActive = idx === currentIdx;
            const isConflict = isActive && act.start < lastFinish;
            
            let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isSelected) {
              cellClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-bold";
            } else if (isActive) {
              if (isConflict) {
                cellClass = "bg-red-500/20 border-red-500 text-red-500 font-bold";
              } else {
                cellClass = "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-bold";
              }
            } else if (phase === 'success') {
              cellClass = "bg-slate-100 dark:bg-slate-950 opacity-40 text-slate-400";
            }

            const leftPercent = (act.start / 10) * 80 + 10;
            const widthPercent = ((act.finish - act.start) / 10) * 80;

            return (
              <div key={idx} className="flex items-center gap-4 relative w-full h-8 px-2 border rounded-xl bg-slate-50/50 dark:bg-slate-900/30">
                <span className="w-16 text-[9px] font-mono text-slate-500">
                  Act {act.originalText}
                </span>
                <div className="flex-1 h-4 bg-slate-200 dark:bg-slate-800 rounded-md relative overflow-hidden">
                  <div
                    style={{ left: `${leftPercent}%`, width: `${widthPercent}%` }}
                    className={`absolute h-full border rounded transition-all duration-300 ${cellClass} flex items-center justify-center text-[8px] font-mono`}
                  >
                    {act.originalText}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderGreedyRatioCanvas = () => {
    const { items = [], capacity = 50, weightTaken = 0, valueTaken = 0, fractions = [] } = data || {};
    const { currentIdx = -1 } = currentSnap.greedyState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-2 max-h-60 overflow-y-auto w-full">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Sorted Items List (Value / Weight)
          </span>
          {items.map((item, idx) => {
            const frac = fractions[idx] || 0;
            const isActive = idx === currentIdx;
            const ratio = item.wt > 0 ? (item.val / item.wt).toFixed(1) : 0;

            let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80";
            if (frac === 1) {
              cellClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-bold";
            } else if (frac > 0) {
              cellClass = "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-bold";
            } else if (isActive) {
              cellClass = "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-bold";
            }

            return (
              <div key={idx} className={`flex items-center justify-between p-2 border rounded-xl transition-all duration-200 ${cellClass}`}>
                <span className="text-xs font-mono">{item.originalText}</span>
                <span className="text-[9px] font-mono text-slate-500">Ratio: {ratio}</span>
                <span className="text-xs font-mono font-bold">Packed: {Math.round(frac * 100)}%</span>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-56 flex flex-col items-center justify-center p-4 bg-slate-950/20 rounded-2xl skeuo-inset-panel">
          <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider mb-2">
            Knapsack Weight
          </span>
          <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden relative mb-2">
            <div
              style={{ width: `${(weightTaken / capacity) * 100}%` }}
              className="h-full bg-green-500 animate-pulse transition-all duration-300"
            />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-slate-600 dark:text-slate-300">
              {weightTaken} / {capacity}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Total Packed Value</span>
          <span className="text-lg font-mono font-extrabold text-green-500">
            ${valueTaken.toFixed(1)}
          </span>
        </div>
      </div>
    );
  };

  const renderBitValueCanvas = () => {
    const { n, nMinusOne, andResult } = data || {};
    const { isPower } = currentSnap.bitState || {};

    const toBinary8 = (val) => {
      if (val === null || val === undefined) return "--------";
      return val.toString(2).padStart(8, '0');
    };

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Bitwise Clear: n & (n - 1)
        </span>
        <div className="flex flex-col gap-3 font-mono text-sm border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl shadow-md w-72">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">n ({n}):</span>
            <span className="font-bold text-accent">{toBinary8(n)}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-slate-500">n - 1 ({nMinusOne}):</span>
            <span className="font-bold text-purple-400">{toBinary8(nMinusOne)}</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-500">AND result:</span>
            <span className={`font-bold ${andResult === 0 ? 'text-green-500' : 'text-red-500'}`}>
              {toBinary8(andResult)}
            </span>
          </div>
        </div>

        {isPower !== null && (
          <div className={`px-4 py-2 border rounded-xl font-bold font-mono text-xs ${isPower ? 'bg-green-500/20 border-green-500 text-green-500' : 'bg-red-500/20 border-red-500 text-red-500'}`}>
            {isPower ? "Power of 2 detected! ✅" : "Not a power of 2! ❌"}
          </div>
        )}
      </div>
    );
  };

  const renderMathGcdCanvas = () => {
    const { a, b } = data || {};
    const { r, phase } = currentSnap.mathState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Euclidean Remainder Step
        </span>
        <div className="flex items-center gap-3 font-mono text-xl font-extrabold bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 p-6 rounded-2xl shadow-md">
          <span className="text-accent">{a}</span>
          <span className="text-slate-400">%</span>
          <span className="text-purple-400">{b}</span>
          <span className="text-slate-400">=</span>
          <span className={r === 0 ? 'text-green-500' : 'text-yellow-500'}>
            {r !== null ? r : '?'}
          </span>
        </div>
        {phase === 'success' && (
          <div className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/20">
            GCD solved: {a}
          </div>
        )}
      </div>
    );
  };

  const renderMathSieveCanvas = () => {
    const { primes = [] } = data || {};
    const { p = null, multiple = null, phase } = currentSnap.mathState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Sieve Numbers Grid
        </span>
        <div className="grid grid-cols-6 md:grid-cols-8 gap-1.5 max-h-52 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl">
          {primes.slice(2).map((isP, idx) => {
            const num = idx + 2;
            const isCurrentPrime = num === p;
            const isCurrentMultiple = num === multiple;
            
            let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (!isP) {
              cellClass = "bg-slate-100 dark:bg-slate-950 text-slate-400 opacity-40 line-through";
            }
            if (isCurrentPrime) {
              cellClass = "bg-green-500/20 border-green-500 text-green-500 font-extrabold scale-110";
            } else if (isCurrentMultiple) {
              cellClass = "bg-red-500/20 border-red-500 text-red-500 font-extrabold scale-110";
            }

            return (
              <div
                key={num}
                className={`w-9 h-9 flex items-center justify-center border rounded-lg font-mono text-xs transition-all duration-200 ${cellClass}`}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDsuCanvas = () => {
    const { parent = [], edges = [] } = data || {};
    const { currentEdgeIdx = -1, u = null, v = null, hasCycle } = currentSnap.dsuState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1 text-left">
            Disjoint Set Parent Indices
          </span>
          <div className="flex flex-wrap gap-1.5">
            {parent.map((pVal, idx) => {
              const isActive = idx === u || idx === v;
              let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (isActive) {
                cellClass = "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold";
              }

              return (
                <div key={idx} className={`w-10 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative ${cellClass}`}>
                  <span className="text-xs">{pVal}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">#{idx}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-56 flex flex-col gap-2 p-3 bg-slate-950/20 rounded-2xl max-h-60 overflow-y-auto skeuo-inset-panel text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Undirected Edges
          </span>
          {edges.map((edge, idx) => {
            const isActive = idx === currentEdgeIdx;
            let edgeClass = "text-slate-500";
            if (isActive) {
              edgeClass = hasCycle ? "text-red-500 font-bold" : "text-green-500 font-bold";
            }

            return (
              <div key={idx} className={`text-xs font-mono p-1 border-b border-slate-800/50 last:border-0 ${edgeClass}`}>
                {idx === currentEdgeIdx && "👉 "}
                Edge {edge[0]} - {edge[1]} {isActive && hasCycle && "(Cycle!)"}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSegmentTreeCanvas = () => {
    const { tree = [], arr = [] } = data || {};
    const { currentNode = -1, start = -1, end = -1, phase } = currentSnap.treeState || {};

    return (
      <div className="w-full h-72 flex flex-col gap-4 p-4 items-center justify-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Segment Tree Nodes Building (Segment Split Range)
        </span>
        <div className="flex gap-2 justify-center items-center flex-wrap max-h-52 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl w-full">
          {tree.map((val, idx) => {
            if (val === null) return null;
            const isActive = idx === currentNode;
            let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isActive) {
              cellClass = phase === 'splitting' ? "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold" : "bg-green-500/20 border-green-500 text-green-500 font-bold";
            }

            return (
              <div key={idx} className={`px-3 py-1.5 border rounded-lg font-mono text-xs flex flex-col items-center justify-center min-w-12 ${cellClass}`}>
                <span className="text-[8px] opacity-40 font-normal">Node {idx}</span>
                <span className="font-extrabold">Sum: {val}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTrieCanvas = () => {
    const { nodes = [] } = data || {};
    const { word, char, activeNodeId } = currentSnap.trieState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center p-4 gap-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Trie Node Tree Snapshot
        </span>
        <div className="flex flex-wrap gap-2 justify-center max-h-52 overflow-y-auto w-full p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl">
          {Object.values(nodes).map((node) => {
            const isActive = node.id === activeNodeId;
            let cellClass = "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isActive) {
              cellClass = node.isEnd ? "bg-green-500/20 border-green-500 text-green-500 font-bold scale-105" : "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold scale-105";
            } else if (node.isEnd) {
              cellClass = "bg-purple-500/10 border-purple-500/40 text-purple-600 dark:text-purple-400";
            }

            return (
              <div key={node.id} className={`w-14 h-14 flex flex-col items-center justify-center border rounded-xl font-mono text-xs relative ${cellClass}`}>
                <span className="text-[7px] opacity-40 font-normal absolute top-0.5">#{node.id}</span>
                <span className="font-extrabold text-sm">{node.char === 'root' ? 'ROOT' : node.char}</span>
                {node.isEnd && <span className="absolute bottom-0.5 right-0.5 text-[8px]">🎯</span>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 9. RENDER DYNAMIC PROGRAMMING ---
  const renderDpCanvas = () => {
    if (dpState?.matrix) {
      const { matrix, weights, values, capacity } = dpState;
      
      return (
        <div className="w-full h-72 flex flex-col items-center justify-center p-3">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider mb-2 uppercase">
            Knapsack DP Table (Item wt/val row, Capacity col)
          </span>
          <div className="w-full overflow-auto max-h-56 max-w-lg border border-slate-800 bg-slate-950 rounded-lg shadow-inner">
            <table className="w-full border-collapse font-mono text-[10px] text-center text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-500">
                  <th className="p-1.5 border-r border-slate-800 font-bold">Item</th>
                  {Array.from({ length: capacity + 1 }).map((_, c) => (
                    <th key={c} className="p-1.5 border-r border-slate-800">C:{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, rIdx) => {
                  const isHeader = rIdx === 0;
                  const itemLabel = isHeader ? "Init" : `i:${rIdx} (${weights[rIdx-1]}/${values[rIdx-1]})`;

                  return (
                    <tr key={rIdx} className="border-b border-slate-800/60 hover:bg-slate-900/20">
                      <td className="p-1.5 font-bold border-r border-slate-800 bg-slate-900/30 text-slate-400 text-[9px] text-left pl-2">{itemLabel}</td>
                      {row.map((val, cIdx) => {
                        const cellKey = `${rIdx}-${cIdx}`;
                        const status = highlights[cellKey];
                        
                        let cellClass = '';
                        if (status === 'pivot') {
                          cellClass = 'bg-purple-500/20 text-purple-400 border border-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.15)]';
                        } else if (status === 'compare') {
                          cellClass = 'bg-blue-500/20 text-blue-400';
                        } else if (status === 'sorted') {
                          cellClass = 'bg-green-500/20 text-green-400';
                        }

                        return (
                          <td 
                            key={cIdx} 
                            className={`p-1.5 border-r border-slate-800/40 font-semibold transition-all duration-300 ${cellClass}`}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    const activeIdx = dpState?.activeIdx;
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 px-6">
        <span className="text-xs font-mono text-slate-500 tracking-wider">
          {algorithm.id === 'coin-change-dp' ? 'COIN CHANGE DP TABLE' : 'STAIRS STATE ARRAY'}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 max-h-56 overflow-y-auto">
          {data.map((val, idx) => {
            const isActive = activeIdx === idx;
            let isReadInput = false;
            
            if (algorithm.id === 'coin-change-dp' && dpState?.coins) {
              isReadInput = dpState.coins.some(coin => idx === activeIdx - coin);
            } else {
              isReadInput = idx === activeIdx - 1 || idx === activeIdx - 2;
            }

            let cellClass = 'bg-slate-800 border-slate-700 text-slate-400';
            if (isActive) cellClass = 'bg-purple-600 border-purple-400 shadow-[0_0_8px_#8b5cf6] text-white font-bold';
            else if (isReadInput) cellClass = 'bg-blue-600 border-blue-500 shadow-[0_0_8px_#3b82f6] text-white';
            else if (val !== Infinity && val > 0) cellClass = 'bg-slate-900 border-slate-800 text-slate-300';
            else if (val === 0) cellClass = 'bg-slate-900 border-slate-800 text-slate-500';

            return (
              <div
                key={idx}
                className={`
                  w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center font-mono text-sm transition-all duration-300
                  ${cellClass}
                `}
              >
                <span className="text-[9px] text-slate-500 leading-none">dp[{idx}]</span>
                <span className="font-bold mt-1">{val === Infinity ? '∞' : val}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 10. RENDER HASH MAPS ---
  const renderHashCanvas = () => {
    const { arr = [], hash = {} } = data || {};
    const { currentIdx, complement } = hashState || {};
    
    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center">
        {/* Left Side: Input Array Scan */}
        <div className="flex-1 flex flex-wrap gap-2 justify-center">
          {arr.map((val, idx) => {
            const isCurrent = idx === currentIdx;
            const isMatch = highlights[idx] === 'sorted';
            
            return (
              <div
                key={idx}
                className={`
                  px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-all duration-300
                  ${isCurrent ? 'bg-purple-600 border-purple-400 text-white shadow-md' : isMatch ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}
                `}
              >
                <div>val: {val}</div>
                <div className="text-[8px] text-slate-500 font-normal mt-0.5">idx: {idx}</div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Visual hash buckets index card */}
        <div className="w-full md:w-64 flex flex-col gap-1.5 max-h-60 overflow-y-auto skeuo-inset-panel p-3 bg-slate-950">
          <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider mb-1 text-center">
            Hash Slot Buckets
          </div>
          {Object.entries(hash).map(([key, val]) => (
            <div
              key={key}
              className="flex justify-between items-center text-xs font-mono border-b border-slate-800/80 pb-1 text-slate-300"
            >
              <span className="text-slate-500">Key: <b className="text-slate-300">{key}</b></span>
              <span className="text-slate-500">Idx Val: <b className="text-accent">{val}</b></span>
            </div>
          ))}
          {Object.keys(hash).length === 0 && (
            <span className="text-[9px] text-slate-700 font-mono text-center my-2">TABLE EMPTY</span>
          )}
        </div>
      </div>
    );
  };

  // --- 11. RENDER HEAPS (BINARY TREE + ARRAY) ---
  const renderHeapCanvas = () => {
    const heapArr = Array.isArray(data) ? data : [];
    const n = heapArr.length;

    const maxDepth = n > 0 ? Math.floor(Math.log2(n)) : 0;
    
    const nodes = heapArr.map((val, idx) => {
      const depth = Math.floor(Math.log2(idx + 1));
      const col = idx - (Math.pow(2, depth) - 1);
      const levelNodes = Math.pow(2, depth);
      
      const x = 10 + (col + 0.5) * (80 / levelNodes);
      let y = 135;
      if (maxDepth > 0) {
        y = 35 + depth * (160 / maxDepth);
      }

      return { id: idx, val, x, y };
    });

    const activeIndices = currentSnap?.heapState?.activeIndices || [];
    const swapIndices = currentSnap?.heapState?.swapIndices || [];

    const getHeapNodeClass = (idx) => {
      if (highlights[idx]) {
        return getHighlightClass(idx);
      }
      if (swapIndices.includes(idx)) {
        return 'bg-red-500 border-red-400 shadow-[0_0_12px_#ef4444] text-white';
      }
      if (activeIndices.includes(idx)) {
        return 'bg-purple-600 border-purple-400 shadow-[0_0_12px_#8b5cf6] text-white';
      }
      return 'bg-slate-800 border-slate-700 text-slate-300';
    };

    return (
      <div className="w-full h-80 flex flex-col justify-between p-2">
        <div className="relative w-full h-52">
          <svg className="w-full h-full absolute inset-0 z-0 pointer-events-none">
            {nodes.map((node) => {
              const lines = [];
              const leftIdx = 2 * node.id + 1;
              const rightIdx = 2 * node.id + 2;

              if (leftIdx < n) {
                const leftChild = nodes[leftIdx];
                lines.push(
                  <line
                    key={`${node.id}-left`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${leftChild.x}%`}
                    y2={leftChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={(highlights[node.id] === 'sorted' && highlights[leftIdx] === 'sorted') ? 'none' : '4'}
                  />
                );
              }
              if (rightIdx < n) {
                const rightChild = nodes[rightIdx];
                lines.push(
                  <line
                    key={`${node.id}-right`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${rightChild.x}%`}
                    y2={rightChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={(highlights[node.id] === 'sorted' && highlights[rightIdx] === 'sorted') ? 'none' : '4'}
                  />
                );
              }
              return lines;
            })}
          </svg>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              layout
              style={{ left: `${node.x}%`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
              className={`
                absolute w-9 h-9 rounded-full border-2 flex flex-col items-center justify-center font-mono font-bold text-xs z-10 transition-all duration-300
                ${getHeapNodeClass(node.id)}
              `}
            >
              <span>{node.val}</span>
              <span className="text-[7px] text-slate-500 font-normal leading-none">i:{node.id}</span>
            </motion.div>
          ))}
          {n === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs">
              HEAP IS EMPTY
            </div>
          )}
        </div>

        <div className="w-full bg-[#020617] border border-panel-border/30 rounded-xl p-3 flex flex-col gap-2 relative z-10">
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider text-left pl-1">
            Flat Array Representation:
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {heapArr.map((val, idx) => {
              const isHighlight = highlights[idx];
              const isSwap = swapIndices.includes(idx);
              const isActive = activeIndices.includes(idx);

              let arrayCellClass = 'bg-slate-900 border-slate-800 text-slate-400';
              if (isHighlight) {
                arrayCellClass = getHighlightClass(idx);
              } else if (isSwap) {
                arrayCellClass = 'bg-red-500/20 border-red-500 text-red-400 shadow-md';
              } else if (isActive) {
                arrayCellClass = 'bg-purple-500/20 border-purple-500 text-purple-400';
              }

              return (
                <div
                  key={idx}
                  className={`
                    px-2.5 py-1 rounded border text-[11px] font-mono transition-all duration-300 flex flex-col items-center
                    ${arrayCellClass}
                  `}
                >
                  <span className="font-bold">{val}</span>
                  <span className="text-[7px] text-slate-500 font-normal mt-0.5">#{idx}</span>
                </div>
              );
            })}
            {n === 0 && (
              <span className="text-[10px] text-slate-700 font-mono">EMPTY</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- WORD SEARCH GRID CANVAS ---
  const renderWordSearchCanvas = () => {
    const { grid = [], word = '', path = [] } = data || {};
    const { current, backtrack: bt, invalid, start: startCell, result } = highlights;
    const pathSet = new Set(path.map(([r, c]) => `${r},${c}`));

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex gap-6 items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider text-center mb-1">Grid</span>
            {grid.map((row, r) => (
              <div key={r} className="flex gap-1">
                {row.map((ch, c) => {
                  const key = `${r},${c}`;
                  const inPath = pathSet.has(key);
                  const isCurrent = current && current[0] === r && current[1] === c;
                  const isBacktrack = bt && bt[0] === r && bt[1] === c;
                  const isStart = startCell && startCell[0] === r && startCell[1] === c;
                  let cls = 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-text-primary';
                  if (isBacktrack) cls = 'bg-red-500/20 border-red-500 text-red-400 font-bold';
                  else if (isCurrent) cls = 'bg-green-500/20 border-green-500 text-green-400 font-extrabold scale-110';
                  else if (inPath) cls = 'bg-blue-500/20 border-blue-500 text-blue-400 font-bold';
                  else if (isStart) cls = 'bg-yellow-500/20 border-yellow-500 text-yellow-400 font-bold';
                  return (
                    <div key={c} className={`w-9 h-9 flex items-center justify-center border rounded-lg font-mono text-sm transition-all duration-200 ${cls}`}>
                      {ch}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 min-w-28">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Target Word</span>
            <div className="flex gap-1 flex-wrap">
              {word.split('').map((ch, i) => {
                const matched = i < path.length;
                return (
                  <div key={i} className={`w-8 h-8 flex items-center justify-center border rounded-lg font-mono text-sm font-bold transition-all ${
                    matched ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-slate-800/30 border-slate-600 text-slate-400'
                  }`}>{ch}</div>
                );
              })}
            </div>
            <div className="text-xs font-mono mt-2 text-slate-400">Path: {path.length}/{word.length}</div>
            {result !== undefined && (
              <div className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
                result ? 'text-green-400 bg-green-500/10 border-green-500/30' : 'text-red-400 bg-red-500/10 border-red-500/30'
              }`}>{result ? '✅ FOUND' : '❌ NOT FOUND'}</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- LEVEL ORDER CANVAS ---
  const renderLevelOrderCanvas = () => {
    const { levels = [], currentLevel = -1 } = data || {};
    const colors = ['text-blue-400 bg-blue-500/10 border-blue-500/30','text-purple-400 bg-purple-500/10 border-purple-500/30','text-green-400 bg-green-500/10 border-green-500/30','text-yellow-400 bg-yellow-500/10 border-yellow-500/30','text-pink-400 bg-pink-500/10 border-pink-500/30'];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Level-by-Level BFS Traversal</span>
        <div className="flex flex-col gap-2 w-full max-h-56 overflow-y-auto">
          {levels.map((level, lvl) => {
            const isActive = lvl === currentLevel;
            const colorClass = colors[lvl % colors.length];
            return (
              <div key={lvl} className={`flex items-center gap-3 p-2 rounded-xl border transition-all duration-300 ${
                isActive ? colorClass + ' scale-[1.02] shadow-md' : 'border-slate-700/30 bg-slate-950/20'
              }`}>
                <span className={`text-[10px] font-mono font-bold uppercase min-w-12 ${
                  isActive ? '' : 'text-slate-500'
                }`}>L{lvl}</span>
                <div className="flex gap-1.5 flex-wrap">
                  {level.map((val, i) => (
                    <div key={i} className={`px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                      isActive ? colorClass : 'bg-slate-800/40 border-slate-700/40 text-slate-400'
                    }`}>{val}</div>
                  ))}
                </div>
              </div>
            );
          })}
          {levels.length === 0 && <div className="text-slate-500 text-sm text-center">Building tree levels...</div>}
        </div>
      </div>
    );
  };

  // --- BELLMAN-FORD CANVAS ---
  const renderBellmanFordCanvas = () => {
    const { dist = [], edges = [], iteration = 0 } = data || {};
    const { relaxed = [] } = highlights;
    const INF = 9999;
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Bellman-Ford Distance Table — Iteration {iteration}</span>
        <div className="flex gap-2 justify-center flex-wrap">
          {dist.map((d, v) => {
            const isRelaxed = Array.isArray(relaxed) && relaxed.includes(v);
            return (
              <div key={v} className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border font-mono text-xs transition-all duration-300 ${
                isRelaxed ? 'bg-green-500/20 border-green-500 text-green-400 scale-110 shadow-md' :
                v === 0 ? 'bg-blue-500/20 border-blue-500 text-blue-400' :
                'bg-slate-900/40 border-slate-700/40 text-slate-300'
              }`}>
                <span className="text-[8px] text-slate-500 font-normal">v{v}</span>
                <span className="font-extrabold text-sm">{d === INF ? '∞' : d}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 max-h-28 overflow-y-auto w-full">
          {edges.map((e, i) => {
            const isRelaxedEdge = Array.isArray(relaxed) && e && relaxed.includes(e[1]);
            return (
              <div key={i} className={`text-xs font-mono px-2 py-1 rounded border transition-all ${
                isRelaxedEdge ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'border-slate-800/30 text-slate-500'
              }`}>
                {e[0]}→{e[1]} (w={e[2]})
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- FLOYD-WARSHALL CANVAS ---
  const renderFloydWarshallCanvas = () => {
    const { dist = [], k = -1, i: ri = -1, j: rj = -1, V = 0 } = data || {};
    const { updated, via } = highlights;
    const INF = 9999;
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-3 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Floyd-Warshall Distance Matrix {k >= 0 ? `— k=${k}` : ''}
        </span>
        <div className="overflow-auto max-h-52 w-full">
          <table className="text-xs font-mono mx-auto border-collapse">
            <thead>
              <tr>
                <th className="w-8 h-6 border border-slate-700/40 bg-slate-900/60 text-slate-500 text-[9px]">i\j</th>
                {dist[0]?.map((_, j) => (
                  <th key={j} className="w-10 h-6 border border-slate-700/40 bg-slate-900/60 text-slate-400 text-[9px]">v{j}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dist.map((row, i) => (
                <tr key={i}>
                  <td className="w-8 h-8 border border-slate-700/40 bg-slate-900/60 text-slate-400 text-[9px] text-center font-bold">v{i}</td>
                  {row.map((val, j) => {
                    const isUpdated = updated && updated[0] === i && updated[1] === j;
                    const isVia = i === ri || j === rj || i === k || j === k;
                    return (
                      <td key={j} className={`w-10 h-8 border text-center font-bold transition-all duration-200 ${
                        isUpdated ? 'bg-green-500/30 border-green-500 text-green-300' :
                        i === j ? 'bg-slate-900/80 border-slate-700/30 text-slate-500' :
                        isVia && k >= 0 ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' :
                        'bg-slate-900/20 border-slate-800/30 text-slate-300'
                      }`}>
                        {val >= INF ? '∞' : val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // --- PASCAL TRIANGLE CANVAS ---
  const renderPascalTriangleCanvas = () => {
    const { triangle = [], rowNum = -1 } = data || {};
    const colors = ['border-blue-500/40 text-blue-300','border-purple-500/40 text-purple-300','border-green-500/40 text-green-300','border-yellow-500/40 text-yellow-300','border-pink-500/40 text-pink-300','border-cyan-500/40 text-cyan-300'];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-2 p-4 overflow-auto">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Pascal's Triangle</span>
        <div className="flex flex-col items-center gap-1 max-h-56 overflow-y-auto w-full">
          {triangle.map((row, r) => {
            const isActive = r === rowNum;
            const colorCls = colors[r % colors.length];
            return (
              <div key={r} className={`flex gap-1 transition-all duration-300 ${isActive ? 'scale-105' : ''}`}>
                {row.map((val, j) => (
                  <div key={j} className={`min-w-8 h-8 px-1 flex items-center justify-center border rounded-lg font-mono text-xs font-bold transition-all duration-200 ${
                    isActive ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-md' :
                    j === 0 || j === row.length - 1 ? 'bg-slate-900/60 border-slate-700/40 text-slate-400' :
                    `bg-slate-900/30 ${colorCls}`
                  }`}>{val}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- STRINGS CANVAS (palindrome, reverse string) ---
  const renderStringCharCanvas = () => {
    const { str, chars } = data || {};
    const display = chars ? chars.join('') : (str || '');
    const charArr = display.split('');
    const { active = [], swapped = [], sorted = [] } = highlights;
    const { left, right, match, result } = highlights;

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Character Array</span>
        <div className="flex gap-1.5 flex-wrap justify-center">
          {charArr.map((ch, i) => {
            const isActive = active.includes ? active.includes(i) : (i === left || i === right);
            const isSwapped = swapped.includes ? swapped.includes(i) : false;
            const isSorted = sorted.includes ? sorted.includes(i) : false;
            return (
              <div key={i} className={`w-10 h-10 flex items-center justify-center border rounded-lg font-mono text-base font-bold transition-all duration-300 ${
                isSwapped ? 'bg-red-500/20 border-red-500 text-red-400 scale-110' :
                isActive ? 'bg-blue-500/20 border-blue-500 text-blue-300 scale-110 shadow-md' :
                isSorted ? 'bg-green-500/20 border-green-500 text-green-400' :
                'bg-slate-900/40 border-slate-700/40 text-slate-300'
              }`}>{ch === ' ' ? '·' : ch}</div>
            );
          })}
        </div>
        {result !== undefined && (
          <div className={`text-sm font-mono font-bold px-4 py-2 rounded-xl border ${
            result ? 'text-green-400 bg-green-500/10 border-green-500/30' : 'text-red-400 bg-red-500/10 border-red-500/30'
          }`}>
            {result ? '✅ Palindrome' : '❌ Not a Palindrome'}
          </div>
        )}
        {match !== undefined && !result && (
          <div className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
            match ? 'text-green-400 bg-green-500/10 border-green-500/30' : 'text-red-400 bg-red-500/10 border-red-500/30'
          }`}>
            {match ? '✓ Characters match' : '✗ Mismatch found'}
          </div>
        )}
      </div>
    );
  };

  const getCanvas = () => {
    if (algorithm.id === 'frequency-count') return renderHashCanvas();
    // --- New specific algorithm overrides ---
    if (algorithm.id === 'level-order-traversal') return renderLevelOrderCanvas();
    if (algorithm.id === 'bellman-ford') return renderBellmanFordCanvas();
    if (algorithm.id === 'floyd-warshall') return renderFloydWarshallCanvas();
    if (algorithm.id === 'pascal-triangle') return renderPascalTriangleCanvas();
    if (algorithm.id === 'count-set-bits') return renderBitValueCanvas();
    if (algorithm.id === 'palindrome-check') return renderStringCharCanvas();
    if (algorithm.id === 'reverse-string') return renderStringCharCanvas();
    if (algorithm.id === 'generate-parentheses') return renderDpCanvas();
    if (algorithm.id === 'lcs-dp') return renderDpCanvas();

    switch (algorithm.inputType) {
      case 'array':
        return algorithm.id === 'segment-tree' ? renderSegmentTreeCanvas() : renderArrayCanvas();
      case 'grid':
        return renderGridCanvas();
      case 'word-search-grid':
        return renderWordSearchCanvas();
      case 'string-pattern':
        return renderKmpCanvas();
      case 'strings-list':
        return renderStringsListCanvas();
      case 'greedy-interval':
        return renderGreedyIntervalCanvas();
      case 'greedy-ratio':
        return renderGreedyRatioCanvas();
      case 'bit-value':
        return renderBitValueCanvas();
      case 'math-gcd':
        return renderMathGcdCanvas();
      case 'math-sieve':
        return renderMathSieveCanvas();
      case 'search':
        return renderSearchCanvas();
      case 'linked-list':
        return renderLinkedListCanvas();
      case 'stack':
        return renderStackCanvas();
      case 'queue':
        return renderQueueCanvas();
      case 'tree':
        return renderTreeCanvas();
      case 'graph':
        return algorithm.id === 'union-find-cycle' ? renderDsuCanvas() : renderGraphCanvas();
      case 'heap':
        return renderHeapCanvas();
      case 'recursion':
        return currentSnap.queensState ? renderChessboardCanvas() : renderHanoiCanvas();
      case 'dp':
        return renderDpCanvas();
      case 'hash':
        return renderHashCanvas();
      case 'strings':
        return algorithm.id === 'trie-search' ? renderTrieCanvas() : renderHashCanvas();
      default:
        return renderArrayCanvas();
    }
  };

  return (
    <div className="skeuo-screen w-full select-none">
      <div className="skeuo-screen-overlay" />
      
      {/* Render selected canvas content */}
      <div className="relative z-10">
        {getCanvas()}
      </div>
    </div>
  );
};

export default VisualizerCanvas;
