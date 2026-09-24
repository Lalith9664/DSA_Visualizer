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
  if ((snap?.searchState || algoId?.includes('search') || algoId?.includes('find') || algoId?.includes('linear') || algoId?.includes('binary') || algoId?.includes('ternary')) && !algoId?.includes('a-star') && !algoId?.includes('word-search')) {
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

  // Remove Duplicates (Two Pointer)
  if (algoId?.includes('remove-duplicates') || algoId?.includes('remove-duplicate')) {
    const slow = snap?.pointerState?.slow;
    const uniqueCount =
      slow !== undefined && slow >= 0
        ? slow + 1
        : snap?.pointerState?.uniqueCount || (Array.isArray(data) ? data.length : 0);
    if (Array.isArray(data)) {
      const uniqueElements = data.slice(0, uniqueCount);
      return {
        label: `Unique Elements (${uniqueCount} Unique Items)`,
        value: `[${uniqueElements.join(', ')}]`,
        type: 'success',
      };
    }
  }

  // Two Pointer / Two Sum Two Pointer
  if (algoId?.includes('two-pointer') || algoId?.includes('two-sum-two-pointer')) {
    const { left, right, sum, target } = snap?.pointerState || {};
    const found =
      expl.toLowerCase().includes('matches') ||
      expl.toLowerCase().includes('found pair') ||
      expl.toLowerCase().includes('found');
    if (found && left >= 0 && right >= 0 && Array.isArray(data)) {
      return {
        label: 'Target Pair Found',
        value: `Indices: [${left}, ${right}] → ${data[left]} + ${data[right]} = ${sum ?? target}`,
        type: 'success',
      };
    } else if (expl.toLowerCase().includes('crossed') || expl.toLowerCase().includes('no pair')) {
      return {
        label: 'Two Pointer Result',
        value: `No pair found with sum = ${target}`,
        type: 'failure',
      };
    }
  }

  // Rotate Array
  if (algoId?.includes('rotate-array') || algoId?.includes('rotate')) {
    const arrData = Array.isArray(data) ? data : snap?.data?.arr || [];
    return {
      label: 'Rotated Array',
      value: `[${arrData.join(', ')}]`,
      type: 'array',
    };
  }

  // Reverse Array
  if (algoId?.includes('reverse-array')) {
    const arrData = Array.isArray(data) ? data : snap?.data?.arr || [];
    return {
      label: 'Reversed Array',
      value: `[${arrData.join(', ')}]`,
      type: 'array',
    };
  }

  // Dutch National Flag (3-way partition)
  if (algoId?.includes('dutch-national-flag') || algoId?.includes('dutch')) {
    const arrData = Array.isArray(data) ? data : snap?.data?.arr || [];
    return {
      label: 'Partitioned Array (0s, 1s, 2s)',
      value: `[${arrData.join(', ')}]`,
      type: 'success',
    };
  }

  // Moore's Voting Algorithm (Majority Element)
  if (algoId?.includes('moores-voting') || algoId?.includes('moore')) {
    const candidate = snap?.stats?.candidate;
    const count = snap?.stats?.count;
    const match = expl.match(/majority element is\s*(\w+)/i);
    const noMatch = expl.toLowerCase().includes('no majority');
    if (noMatch) {
      return {
        label: "Moore's Voting Result",
        value: 'No majority element (> n/2) exists in array ✗',
        type: 'warning',
      };
    }
    const majVal = match ? match[1] : candidate && candidate !== 'None' ? candidate : null;
    return {
      label: 'Majority Element (> n/2)',
      value: majVal ? `Majority Element: ${majVal} (Occurrences: ${count || 'Verified'})` : 'Majority element identified ✓',
      type: 'success',
    };
  }

  // Candy Distribution
  if (algoId?.includes('candy')) {
    const arrData = Array.isArray(data) ? data : [];
    const total =
      snap?.stats?.total ||
      (arrData.length > 0 ? arrData.reduce((a, b) => a + Number(b), 0) : null);
    return {
      label: 'Minimum Candies Needed',
      value: `${total ?? 'Computed'} Candies ${arrData.length > 0 ? `(Distribution: [${arrData.join(', ')}])` : ''}`,
      type: 'success',
    };
  }

  // Equilibrium Index
  if (algoId?.includes('equilibrium')) {
    const match = expl.match(/index\s+(\d+)/i);
    const notFound = expl.toLowerCase().includes('no equilibrium');
    if (notFound) {
      return {
        label: 'Equilibrium Index Result',
        value: 'No Equilibrium Index Found in Array ✗',
        type: 'failure',
      };
    }
    const idx = match ? match[1] : snap?.prefixState?.currentIdx >= 0 ? snap.prefixState.currentIdx : null;
    return {
      label: 'Equilibrium Index Found',
      value: idx !== null ? `Equilibrium at index ${idx} (Left sum = Right sum)` : 'Equilibrium index found ✓',
      type: 'success',
    };
  }

  // Two Sum
  if (algoId === 'two-sum' || algoId?.includes('two-sum') || algoId?.includes('pair-sum')) {
    const match =
      expl.match(/indices[:\s]+\[?(\d+)[,\s]+(\d+)\]?/i) ||
      expl.match(/index\s+(\d+)\s+and\s+(\d+)/i);
    const notFound = expl.toLowerCase().includes('no pair') || expl.toLowerCase().includes('not found');
    if (match) {
      return {
        label: 'Two Sum Target Pair',
        value: `Pair found at indices: [${match[1]}, ${match[2]}] ✓`,
        type: 'success',
      };
    }
    if (notFound) {
      return {
        label: 'Two Sum Result',
        value: 'No pair sums to target value ✗',
        type: 'failure',
      };
    }
  }

  // Container With Most Water
  if (algoId?.includes('container-with-most-water') || algoId?.includes('most-water')) {
    const match =
      expl.match(/max(?:imum)?\s*(?:water|area)[:=\s]+(\d+)/i) ||
      expl.match(/area[:=\s]+(\d+)/i);
    return {
      label: 'Max Water Trapped',
      value: match ? `${match[1]} units of water` : 'Max water area computed ✓',
      type: 'success',
    };
  }

  // Three Sum / Four Sum
  if (algoId?.includes('three-sum') || algoId?.includes('four-sum')) {
    const match = expl.match(/\[([-\d\s,]+)\]/);
    return {
      label: `${algoId?.includes('three-sum') ? 'Three Sum' : 'Four Sum'} Result`,
      value: match ? `Tuple found: [${match[1].trim()}] ✓` : 'Search complete',
      type: 'success',
    };
  }

  // Peak Element
  if (algoId?.includes('peak')) {
    const match = expl.match(/index\s+(\d+)/i);
    return {
      label: 'Peak Element Found',
      value: match
        ? `Peak element at index ${match[1]} (Value: ${Array.isArray(data) ? data[match[1]] : ''}) ✓`
        : 'Peak element identified ✓',
      type: 'success',
    };
  }

  // First & Last Occurrence
  if (algoId?.includes('first-and-last') || algoId?.includes('occurrence')) {
    const match = expl.match(/\[(\d+)[,\s]+(\d+)\]/);
    return {
      label: 'First & Last Occurrence',
      value: match ? `Range: [First: ${match[1]}, Last: ${match[2]}] ✓` : 'Occurrences identified ✓',
      type: 'success',
    };
  }

  // Sieve of Eratosthenes
  if (algoId?.includes('sieve')) {
    let primes = [];
    if (Array.isArray(data)) {
      primes = data
        .map((isP, i) => (isP ? i : null))
        .filter((x) => x !== null && x >= 2);
    }
    return {
      label: 'Prime Numbers Generated',
      value:
        primes.length > 0
          ? `Primes (${primes.length}): [${primes.slice(0, 20).join(', ')}${primes.length > 20 ? '...' : ''}]`
          : 'Sieve complete',
      type: 'success',
    };
  }

  // GCD & LCM
  if (algoId?.includes('gcd') || algoId?.includes('lcm')) {
    const match = expl.match(/=\s*(\d+)/i) || expl.match(/is\s*(\d+)/i);
    return {
      label: algoId?.includes('lcm') ? 'Least Common Multiple (LCM)' : 'Greatest Common Divisor (GCD)',
      value: match ? `${match[1]}` : (snap?.mathState?.result ?? 'Computed ✓'),
      type: 'success',
    };
  }

  // Minimum Platforms
  if (algoId?.includes('minimum-platforms') || algoId?.includes('platforms')) {
    const match =
      expl.match(/(\d+)\s*platform/i) ||
      expl.match(/max(?:imum)?[:=\s]+(\d+)/i);
    return {
      label: 'Minimum Platforms Required',
      value: match ? `${match[1]} Platforms` : 'Platform calculation complete ✓',
      type: 'success',
    };
  }

  // Gas Station
  if (algoId?.includes('gas-station')) {
    const match = expl.match(/index\s+(\d+)/i) || expl.match(/station\s+(\d+)/i);
    const notPossible =
      expl.toLowerCase().includes('not possible') || expl.toLowerCase().includes('-1');
    return {
      label: 'Gas Station Circuit Start',
      value: notPossible
        ? 'Circuit impossible (-1) ✗'
        : match
          ? `Start at station index ${match[1]} ✓`
          : 'Starting station found ✓',
      type: notPossible ? 'failure' : 'success',
    };
  }

  // Jump Game
  if (algoId?.includes('jump-game')) {
    const canJump =
      expl.toLowerCase().includes('can reach') ||
      expl.toLowerCase().includes('reached') ||
      expl.toLowerCase().includes('true');
    return {
      label: 'Jump Game Result',
      value: canJump ? 'Can Reach Last Index: TRUE ✓' : 'Cannot Reach Last Index: FALSE ✗',
      type: canJump ? 'success' : 'failure',
    };
  }

  // Only genuine sorting algorithms get the "Sorted Array" label
  const isSortingAlgo =
    algoId?.includes('bubble') ||
    algoId?.includes('selection-sort') ||
    algoId?.includes('insertion-sort') ||
    algoId?.includes('merge-sort') ||
    algoId?.includes('quick-sort') ||
    algoId?.includes('heap-sort') ||
    algoId?.includes('radix') ||
    algoId?.includes('counting-sort') ||
    algoId?.includes('bucket-sort') ||
    algoId?.includes('tim-sort');

  if (isSortingAlgo && Array.isArray(data) && data.length > 0 && data.every((x) => typeof x === 'number')) {
    return { label: 'Sorted Array', value: `[${data.join(', ')}]`, type: 'array' };
  }

  // Non-sorting generic array output
  if (Array.isArray(data) && data.length > 0 && data.every((x) => typeof x === 'number')) {
    return { label: 'Final Array State', value: `[${data.join(', ')}]`, type: 'array' };
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

  // A* Search
  if (algoId?.includes('a-star') && snap?.graphState?.path) {
    const { path, goalNode, startNode, optimalCost, gScores } = snap.graphState;
    const cost = optimalCost !== undefined ? optimalCost : gScores?.[goalNode];
    return {
      label: `A* Shortest Path (${startNode} → ${goalNode})`,
      value: `[ ${path.join(' → ')} ] (Total Path Cost: ${cost !== undefined && cost !== Infinity ? cost : 'Calculated'}) 🎉`,
      type: 'success',
    };
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
    const board = snap?.queensState?.board || snap?.data?.board || [];
    const isSolution = snap?.queensState?.phase === 'solution' || expl.match(/solution/i);
    if (isSolution && board.length > 0 && !board.includes(-1)) {
      const placements = board.map((col, row) => `(Row ${row}, Col ${col})`).join(', ');
      return {
        label: 'N-Queens Placements',
        value: `Queens at: [${placements}] ✓`,
        type: 'success'
      };
    }
    return {
      label: 'N-Queens Result',
      value: isSolution ? 'Valid queen placement found ✓' : 'Exploring chessboard with backtracking...',
      type: isSolution ? 'success' : 'array'
    };
  }

  // Word Search (Backtracking)
  if (algoId?.includes('word-search') || algoId === 'word-search') {
    const word = snap?.data?.word || '';
    const path = snap?.data?.path || [];
    const isFound = snap?.highlights?.result === true || (word && path.length === word.length);
    if (isFound) {
      const pathStr = path.map(([r, c]) => `(${r},${c})`).join(' → ');
      return {
        label: 'Word Search Result',
        value: `Found "${word}" at path: ${pathStr} ✓`,
        type: 'success'
      };
    }
    if (snap?.highlights?.result === false) {
      return {
        label: 'Word Search Result',
        value: `Word "${word}" NOT found in grid ✗`,
        type: 'failure'
      };
    }
    return {
      label: 'Word Search Progress',
      value: `Matching "${word}": ${path.length}/${word.length} characters found`,
      type: 'array'
    };
  }

  // Generate Parentheses
  if (algoId?.includes('generate-parentheses') || algoId === 'generate-parentheses') {
    const results = snap?.data?.results || [];
    if (results.length > 0) {
      return {
        label: `Generated Parentheses (${results.length} valid combinations)`,
        value: results.map((p) => `"${p}"`).join(', '),
        type: 'success'
      };
    }
    return {
      label: 'Generated Parentheses',
      value: 'Generating combinations with recursion & backtracking...',
      type: 'array'
    };
  }

  // Letter Combinations
  if (algoId?.includes('letter-combinations') || algoId === 'letter-combinations') {
    const combs = snap?.data?.combinations || [];
    const digits = snap?.data?.digits || '';
    if (combs.length > 0) {
      return {
        label: `Letter Combinations for "${digits}" (${combs.length} results)`,
        value: combs.map((c) => `"${c}"`).join(', '),
        type: 'success'
      };
    }
    return {
      label: 'Letter Combinations',
      value: 'Exploring keypad mappings...',
      type: 'array'
    };
  }

  // Palindrome Partitioning
  if (algoId?.includes('palindrome-partitioning') || algoId === 'palindrome-partitioning') {
    const completed = snap?.data?.completed || [];
    const str = snap?.data?.str || '';
    if (completed.length > 0) {
      return {
        label: `Palindrome Partitions (${completed.length} total)`,
        value: completed.map((p) => `[${p.join(', ')}]`).join('  |  '),
        type: 'success'
      };
    }
    return {
      label: 'Palindrome Partitioning',
      value: `Exploring palindromic partitions for "${str}"...`,
      type: 'array'
    };
  }

  // Permutations
  if (algoId?.includes('permutations') || algoId === 'permutations') {
    const completed = snap?.data?.completed || [];
    if (completed.length > 0) {
      return {
        label: `All Permutations (${completed.length} unique sets)`,
        value: completed.map((p) => `[${p.join(', ')}]`).join('  |  '),
        type: 'success'
      };
    }
    return {
      label: 'Permutations Progress',
      value: 'Generating permutations recursively...',
      type: 'array'
    };
  }

  // Crossword Solver
  if (algoId?.includes('crossword-solver') || algoId === 'crossword-solver') {
    const board = snap?.data?.board || [];
    const words = snap?.data?.words || [];
    if (words.length === 0 && board.length > 0) {
      return {
        label: 'Crossword Solved',
        value: 'All words placed successfully in grid ✓',
        type: 'success'
      };
    }
    return {
      label: 'Crossword Solver',
      value: snap?.data?.activeWord ? `Placing word: ${snap.data.activeWord}` : 'Solving crossword grid...',
      type: 'array'
    };
  }

  // Knight's Tour (BFS & Backtracking modes)
  if (algoId?.includes('knights-tour') || algoId?.includes('knight')) {
    const mode = snap?.knightState?.mode || 'bfs';
    const isDone = snap?.knightState?.phase === 'done';
    const isFail = snap?.knightState?.phase === 'fail';
    const size = snap?.knightState?.size || 5;
    const totalCells = snap?.knightState?.totalCells || size * size;
    const sr = snap?.knightState?.startRow ?? 0;
    const sc = snap?.knightState?.startCol ?? 0;

    if (mode === 'backtracking') {
      const moveCount = snap?.knightState?.moveCount ?? 0;
      if (isDone) {
        return {
          label: "Knight's Tour (Backtracking)",
          value: `Complete! Knight visited all ${totalCells} squares on ${size}×${size} board from (${sr},${sc}) ✓`,
          type: 'success'
        };
      }
      if (isFail) {
        return {
          label: "Knight's Tour (Backtracking)",
          value: snap?.explanation || `No complete tour found from (${sr},${sc}) ✗`,
          type: 'failure'
        };
      }
      return {
        label: "Knight's Tour Progress",
        value: `Move ${moveCount + 1} of ${totalCells} (${Math.round(((moveCount + 1) / totalCells) * 100)}%)`,
        type: 'array'
      };
    }

    // BFS Mode
    const minSteps = snap?.knightState?.minSteps;
    const path = snap?.knightState?.shortestPath || [];
    const dr = snap?.knightState?.destRow ?? 4;
    const dc = snap?.knightState?.destCol ?? 4;
    const pathStr = path.length > 0 ? path.map(([r, c]) => `(${r},${c})`).join(' → ') : '';
    if (isDone || (minSteps !== null && minSteps !== undefined)) {
      return {
        label: "Minimum Knight Steps (BFS)",
        value: `${minSteps} moves  [ ${pathStr} ] 🎉`,
        type: 'success'
      };
    }
    return {
      label: "Knight's Path Search (BFS)",
      value: `BFS exploring shortest path from (${sr},${sc}) to (${dr},${dc})...`,
      type: 'array'
    };
  }

  // Sliding Puzzle
  if (algoId?.includes('sliding-puzzle') || algoId?.includes('puzzle')) {
    const phase = snap?.puzzleState?.phase;
    const moveNum = snap?.puzzleState?.moveNum ?? 0;
    const totalMoves = snap?.puzzleState?.totalMoves ?? 0;
    if (phase === 'done') {
      return { label: 'Sliding Puzzle Result', value: `Solved in ${totalMoves} moves! 🎉`, type: 'success' };
    }
    if (phase === 'unsolvable') {
      return { label: 'Sliding Puzzle Result', value: 'This configuration is unsolvable ✗', type: 'failure' };
    }
    if (phase === 'init' && totalMoves > 0) {
      return { label: 'BFS Solution Found', value: `Shortest path: ${totalMoves} moves`, type: 'array' };
    }
    return { label: 'Sliding Puzzle', value: `Move ${moveNum} / ${totalMoves}`, type: 'array' };
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
    return { label: isSortingAlgo ? 'Sorted Array' : 'Final Array State', value: `[${snap.data.arr.join(', ')}]`, type: 'array' };
  }

  // Radix / bucket sort final (exp === -1)
  if (snap?.data?.arr && Array.isArray(snap.data.arr) && snap.data.exp === -1) {
    return { label: isSortingAlgo ? 'Sorted Array' : 'Final Array State', value: `[${snap.data.arr.join(', ')}]`, type: 'array' };
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
  if (algoId?.includes('rat-in-a-maze') || algoId === 'rat-in-a-maze') {
    const isSuccess = snap?.gridState?.phase === 'success';
    const isUnsolvable = snap?.gridState?.phase === 'unsolvable';
    const actualPath = snap?.data?.path || [];
    const pathCells = [];
    actualPath.forEach((row, r) => {
      row.forEach((val, c) => {
        if (val === 1) pathCells.push(`(${r},${c})`);
      });
    });
    if (isSuccess && pathCells.length > 0) {
      return {
        label: 'Solved Maze Path',
        value: `Path: ${pathCells.join(' → ')} (${pathCells.length} steps) ✓`,
        type: 'success'
      };
    }
    return {
      label: 'Rat in a Maze Result',
      value: isUnsolvable ? 'Blocked — No solution found for this maze layout ✗' : 'Exploring paths with DFS backtracking...',
      type: isUnsolvable ? 'failure' : 'array'
    };
  }

  // Sudoku Solver
  if (algoId?.includes('sudoku') || algoId === 'sudoku-solver') {
    const isSuccess = snap?.gridState?.phase === 'success';
    const board = snap?.data?.board || [];
    if (isSuccess && board.length > 0) {
      return {
        label: 'Sudoku Solver Result',
        value: 'Board Solved Successfully without constraint violations ✓',
        type: 'success'
      };
    }
    return {
      label: 'Sudoku Solver Progress',
      value: 'Placing candidate digits and backtracking on conflicts...',
      type: 'array'
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
