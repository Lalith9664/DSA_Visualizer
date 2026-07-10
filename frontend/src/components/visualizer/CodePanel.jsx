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

  // 2B. Exact mappings for Counting Sort:
  if (algoId === 'counting-sort') {
    const phase = snap.data?.phase || '';
    if (explanation.includes('counting sort on') && explanation.includes('phase 1')) {
      return 2;
    }
    if (phase === 'count') {
      return 4;
    }
    if (phase === 'prefix') {
      if (explanation.includes('phase 2') || explanation.includes('prefix sums')) {
        return 5;
      }
      return 5;
    }
    if (phase === 'place') {
      if (explanation.includes('phase 3') || explanation.includes('correct position')) {
        return 6;
      }
      return 9;
    }
    if (phase === 'done') {
      return 10;
    }
  }

  // 2C. Exact mappings for Trapping Rain Water:
  if (algoId === 'trapping-rain-water') {
    if (explanation.includes('trapping rain water:') || explanation.includes('start:')) {
      return 2;
    }
    if (explanation.includes('process left')) {
      return 5;
    }
    if (explanation.includes('process right')) {
      return 7;
    }
    if (explanation.includes('pointers met') || explanation.includes('complete')) {
      return 8;
    }
  }

  // 2D. Exact mappings for Splitting Arrays:
  if (algoId === 'splitting-arrays') {
    const phase = snap.data?.phase || '';
    if (phase === 'init') return 2;
    if (phase === 'left') return 3;
    if (phase === 'right') return 4;
    if (phase === 'done') return 5;
  }

  // 2E. Exact mappings for Prefix Sum:
  if (algoId === 'prefix-sum' || algoId === 'prefix-sum-array') {
    if (explanation.includes('initialize') || explanation.includes('start:')) {
      return 2;
    }
    if (explanation.includes('pref[0] =')) {
      return 3;
    }
    if (explanation.includes('pref[')) {
      return 5;
    }
    if (explanation.includes('complete')) {
      return 6;
    }
  }

  // 2F. Exact mappings for Suffix Sum:
  if (algoId === 'suffix-sum' || algoId === 'suffix-sum-array') {
    const dataLen = snap.data?.length || 0;
    if (explanation.includes('initialize') || explanation.includes('start:')) {
      return 3;
    }
    if (explanation.includes(`suff[${dataLen - 1}] =`)) {
      return 4;
    }
    if (explanation.includes('suff[')) {
      return 6;
    }
    if (explanation.includes('complete')) {
      return 7;
    }
  }

  // 2G. Exact mappings for Difference Array:
  if (algoId === 'difference-array' || algoId === 'difference-array-prefix') {
    if (explanation.includes('initialize') || explanation.includes('start:')) {
      return 3;
    }
    if (explanation.includes('diff[0] =')) {
      return 4;
    }
    if (explanation.includes('diff[')) {
      return 6;
    }
    if (explanation.includes('complete')) {
      return 7;
    }
  }

  // 2H. Exact mappings for Array Insertion:
  if (algoId === 'array-insertion' || algoId === 'insertion') {
    if (explanation.includes('Array Insertion:') || explanation.includes('start:')) {
      return 1;
    }
    if (explanation.includes('placeholder')) {
      return 2;
    }
    if (explanation.includes('Shift')) {
      return 4;
    }
    if (explanation.includes('Place')) {
      return 5;
    }
    if (explanation.includes('complete')) {
      return 6;
    }
  }

  // 2I. Exact mappings for Array Deletion:
  if (algoId === 'array-deletion' || algoId === 'deletion') {
    if (explanation.includes('Array Deletion:') || explanation.includes('start:')) {
      return 1;
    }
    if (explanation.includes('Mark')) {
      return 2;
    }
    if (explanation.includes('Shift')) {
      return 4;
    }
    if (explanation.includes('Remove the duplicate') || explanation.includes('pop')) {
      return 5;
    }
    if (explanation.includes('complete')) {
      return 6;
    }
  }

  // 2J. Exact mappings for Spiral Matrix:
  if (algoId === 'spiral-matrix') {
    const matrixState = snap.matrixState || {};
    const direction = matrixState.direction || '';
    const visitedCount = matrixState.order?.length || 0;

    if (visitedCount === 0) return 4;
    if (direction === 'right') return 10;
    if (direction === 'down') return 15;
    if (direction === 'left') return 21;
    if (direction === 'up') return 27;
    if (direction === 'done') return 30;
  }

  // 2K. Exact mappings for Transpose Matrix:
  if (algoId === 'transpose-matrix') {
    const matrixState = snap.matrixState || {};
    const phase = matrixState.phase || '';

    if (phase === 'init') return 3;
    if (phase === 'compare') return 4;
    if (phase === 'swap') return 6;
    if (phase === 'done') return 7;
  }

  // 2L. Exact mappings for Fruits Into Baskets:
  if (algoId === 'fruits-into-baskets') {
    const fruitState = snap.fruitState || {};
    const phase = fruitState.phase || '';

    if (phase === 'init') return 3;
    if (phase === 'add') return 8;
    if (phase === 'shrink') return 12;
    if (phase === 'update') return 18;
    if (phase === 'done') return 20;
  }

  // 2N. Exact mappings for Minimum Window Substring:
  if (algoId === 'minimum-window-substring' || algoId === 'minimum-window-substring-window') {
    const minWindowState = snap.minWindowState || {};
    const phase = minWindowState.phase || '';

    if (phase === 'init') return 5;
    if (phase === 'add') return 9;
    if (phase === 'check') return 16;
    if (phase === 'shrink') return 20;
    if (phase === 'done') return 25;
  }

  // 2O. Exact mappings for Group Anagrams:
  if (algoId === 'group-anagrams') {
    const hashState = snap.hashState || {};
    const currentIdx = hashState.currentIdx ?? -1;
    const highlights = snap.highlights || {};

    if (currentIdx === -1) {
      if (snap.explanation?.includes('finished')) return 6;
      return 2;
    }
    if (highlights[currentIdx] === 'pivot') return 4;
    if (highlights[currentIdx] === 'sorted') return 5;
  }

  // 2P. Exact mappings for String Traversal:
  if (algoId === 'string-traversal') {
    const traversalState = snap.traversalState || {};
    const currentIdx = traversalState.currentIdx ?? -1;

    if (currentIdx === -1) return 2;
    if (snap.explanation?.includes('completed')) return 5;
    return 4;
  }

  // 2Q. Exact mappings for String Concatenation:
  if (algoId === 'string-concatenation') {
    const concatState = snap.concatState || {};
    const phase = concatState.phase || '';

    if (phase === 'init') return 2;
    if (phase === 's1') return 4;
    if (phase === 's2') return 6;
    if (phase === 'done') return 7;
  }

  // 2R. Exact mappings for Longest Palindromic Substring:
  if (algoId === 'longest-palindromic-substring') {
    const lpsState = snap.lpsState || {};
    const phase = lpsState.phase || '';

    if (phase === 'init') return 3;
    if (phase === 'expand-odd' || phase === 'expand-even') return 6;
    if (phase === 'update') return 14;
    if (phase === 'done') return 18;
  }

  // 2S. Exact mappings for Linked List algorithms:
  if (algoId === 'linked-list-traversal') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Reached end')) return 6;
    return 3;
  }

  if (algoId === 'cycle-detection') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('reached end') || explanation.includes('No cycle')) return 8;
    if (explanation.includes('Slow pointer')) return 3;
    if (explanation.includes('met at Node')) return 6;
  }

  if (algoId === 'middle-node') {
    const explanation = snap.explanation || '';
    if (explanation.includes('middle node') || explanation.includes('using')) return 2;
    if (explanation.includes('Middle node found') || explanation.includes('complete')) return 6;
    if (explanation.includes('Slow pointer')) return 3;
  }

  if (algoId === 'reverse-list') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initial')) return 2;
    if (explanation.includes('Saving reference')) return 5;
    if (explanation.includes('Reversed pointer link')) return 6;
    if (explanation.includes('reversed')) return 9;
  }

  if (algoId === 'merge-sorted-lists') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Merge two sorted')) return 2;
    if (explanation.includes('Compare')) return 5;
    if (explanation.includes('Added')) return 9;
    if (explanation.includes('complete')) return 11;
  }

  // 2T. Exact mappings for Doubly/Circular Linked List algorithms:
  if (algoId === 'doubly-linked-list-traversal') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Reached end')) return 5;
    return 3;
  }

  if (algoId === 'doubly-linked-list-insertion') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Start') || explanation.includes('Allocate new')) return 2;
    if (explanation.includes('next to')) return 3;
    if (explanation.includes('prev pointer back')) return 4;
    if (explanation.includes('Updated list')) return 7;
  }

  if (algoId === 'doubly-linked-list-deletion') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Start') || explanation.includes('Target node')) return 2;
    if (explanation.includes('Deleted node')) return 5;
  }

  if (algoId === 'circular-linked-list-traversal') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 3;
    if (explanation.includes('Visiting')) return 5;
    if (explanation.includes('referenced head')) return 8;
  }

  // 2U. Exact mappings for Monotonic Stack algorithms:
  if (algoId === 'next-greater-element') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('greater than stack top')) return 5;
    if (explanation.includes('Pushed index')) return 6;
    if (explanation.includes('finished')) return 7;
    return 4;
  }

  if (algoId === 'next-smaller-element') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('smaller than stack top')) return 5;
    if (explanation.includes('Push index')) return 6;
    if (explanation.includes('Result')) return 7;
    return 4;
  }

  if (algoId === 'previous-greater-element') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Popped index')) return 5;
    if (explanation.includes('Previous greater')) return 6;
    if (explanation.includes('Push index')) return 7;
    if (explanation.includes('Result')) return 8;
    return 4;
  }

  if (algoId === 'stock-span') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Popped index')) return 5;
    if (explanation.includes('Span for day')) return 6;
    if (explanation.includes('Push index')) return 7;
    if (explanation.includes('Result')) return 8;
    return 4;
  }

  if (algoId === 'daily-temperatures') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 3;
    if (explanation.includes('warmer than day')) return 7;
    if (explanation.includes('Push day')) return 8;
    if (explanation.includes('Result')) return 9;
    return 5;
  }

  if (algoId === 'remove-k-digits') {
    const explanation = snap.explanation || '';
    if (explanation.includes('monotonically increasing')) return 2;
    if (explanation.includes('popped')) return 5;
    if (explanation.includes('Push')) return 7;
    if (explanation.includes('Pop from end')) return 9;
    if (explanation.includes('leading zeros')) return 11;
    return 4;
  }

  if (algoId === 'previous-smaller-element' || algoId === 'previous-smaller-element-mono') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Popped index')) return 5;
    if (explanation.includes('Previous smaller')) return 6;
    if (explanation.includes('Push index')) return 7;
    if (explanation.includes('Result')) return 8;
    return 4;
  }

  if (algoId === 'previous-greater-element-mono') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('Popped index')) return 5;
    if (explanation.includes('Previous greater')) return 6;
    if (explanation.includes('Push index')) return 7;
    if (explanation.includes('Result')) return 8;
    return 4;
  }

  if (algoId === 'next-smaller-element-mono') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 2;
    if (explanation.includes('smaller than stack top')) return 5;
    if (explanation.includes('Push index')) return 6;
    if (explanation.includes('Result')) return 7;
    return 4;
  }

  if (algoId === 'largest-rectangle-mono') {
    const explanation = snap.explanation || '';
    if (explanation.includes('popped')) return 6;
    if (explanation.includes('Push index')) return 12;
    if (explanation.includes('area')) return 13;
    return 5;
  }

  if (algoId === 'josephus-problem') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Circle')) return 2;
    if (explanation.includes('Eliminate')) return 4;
    if (explanation.includes('survivor')) return 5;
    return 3;
  }

  if (algoId === 'cpu-scheduling' || algoId === 'task-scheduling') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Quantum')) return 2;
    if (explanation.includes('Dispatch')) return 5;
    if (explanation.includes('completed')) return 10;
    if (explanation.includes('expired')) return 8;
    if (explanation.includes('Context')) return 13;
    if (explanation.includes('scheduled')) return 14;
    return 6;
  }

  if (algoId === 'printer-queue') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Online')) return 3;
    if (explanation.includes('Load')) return 7;
    return 5;
  }

  if (algoId === 'sliding-window-max-mono') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Sliding Window Max')) return 3;
    if (explanation.includes('deque front')) return 6;
    if (explanation.includes('deque back')) return 8;
    if (explanation.includes('Add index')) return 9;
    if (explanation.includes('Maximum element')) return 11;
    return 7;
  }

  if (algoId === 'longest-consecutive-sequence') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Set')) return 2;
    if (explanation.includes('start of a potential')) return 5;
    if (explanation.includes('streak length') || explanation.includes('found in set')) return 10;
    if (explanation.includes('completed')) return 11;
    if (explanation.includes('complete') || explanation.includes('Result')) return 12;
    return 4;
  }

  if (algoId === 'bloom-filter') {
    const explanation = snap.explanation || '';
    if (explanation.includes('sets bits')) return 5;
    if (explanation.includes('queried')) return 7;
    return 4;
  }

  if (algoId === 'fibonacci-recursion') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Returning')) return 3;
    return 2;
  }

  if (algoId === 'recursion-factorial') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Base Case')) return 3;
    if (explanation.includes('Returning')) return 4;
    return 2;
  }

  if (algoId === 'letter-combinations') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 4;
    if (explanation.includes('Reached leaf')) return 7;
    if (explanation.includes('maps to')) return 9;
    if (explanation.includes('Appending')) return 10;
    if (explanation.includes('complete')) return 12;
    return 6;
  }

  if (algoId === 'palindrome-partitioning') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 7;
    if (explanation.includes('Reached end')) return 8;
    if (explanation.includes('Inspect substring')) return 10;
    if (explanation.includes('is a palindrome')) return 11;
    if (explanation.includes('is not a palindrome')) return 14;
    return 9;
  }

  if (algoId === 'permutations') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize')) return 5;
    if (explanation.includes('candidate complete')) return 6;
    if (explanation.includes('Pick element')) return 9;
    return 8;
  }

  if (algoId === 'crossword-solver') {
    return 4;
  }

  if (algoId === 'branch-and-bound-concept') {
    const explanation = snap.explanation || '';
    if (explanation.includes('prune')) return 3;
    if (explanation.includes('Optimal')) return 4;
    return 3;
  }

  // 3. Fallback: Scoring-based heuristic mapping for all other algorithms
  const isInitial = explanation.includes('initial') || 
                    explanation.includes('start') || 
                    explanation.includes('before starting') || 
                    explanation.includes('begin') ||
                    explanation.includes('setup') ||
                    explanation.includes('initialize');
                    
  const isComplete = explanation.includes('complete') || 
                     explanation.includes('finish') || 
                     explanation.includes('done') || 
                     explanation.includes('fully sorted') || 
                     explanation.includes('halts') || 
                     explanation.includes('result:') ||
                     explanation.includes('returned') ||
                     explanation.includes('returns');

  let bestLineIdx = -1;
  let maxScore = -999;

  for (let idx = 0; idx < codeLines.length; idx++) {
    const rawLine = codeLines[idx];
    const line = rawLine.trim();

    // Skip empty lines and comments
    if (!line || line.startsWith('#') || line.startsWith('"""') || line.startsWith("'''")) continue;

    let score = 0;

    // Relational/conditional checking (e.g. comparing, check, if)
    const isCompareWord = explanation.includes('compare') || 
                          explanation.includes('comparing') || 
                          explanation.includes('check') || 
                          explanation.includes('condition') || 
                          explanation.includes('inspect') || 
                          explanation.includes('verify') || 
                          explanation.includes('validate') || 
                          explanation.includes('is ') || 
                          explanation.includes('equal') || 
                          explanation.includes('greater') || 
                          explanation.includes('less') || 
                          explanation.includes('smaller') || 
                          explanation.includes('larger');

    if (isCompareWord) {
      if (line.includes('if ') || line.includes('elif ') || line.includes('while ') || line.includes('==') || line.includes('!=') || line.includes('<') || line.includes('>') || line.includes('<=') || line.includes('>=') || line.includes(' in ') || line.includes('not ')) {
        score += 20;
      }
    }

    // Assignment/swap checking
    const isAssignWord = (explanation.includes('swap') || 
                          explanation.includes('swapped') || 
                          explanation.includes('place') || 
                          explanation.includes('insert') || 
                          explanation.includes('assign') || 
                          explanation.includes('set') || 
                          explanation.includes('update') || 
                          explanation.includes('store') || 
                          explanation.includes('save') || 
                          explanation.includes('relaxing') || 
                          explanation.includes('change') ||
                          explanation.includes('frequency') ||
                          explanation.includes('increment') ||
                          explanation.includes('->') ||
                          explanation.includes('+')) && 
                          !explanation.includes('no swap') && 
                          !explanation.includes('not swap') &&
                          !explanation.includes('no change');

    if (isAssignWord) {
      if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('<=') && !line.includes('>=')) {
        score += 20;
        // Destructuring swap gets extra points
        if (line.includes(',') && (line.includes('arr[') || line.includes('nums[') || line.includes('left') || line.includes('right'))) {
          score += 15;
        }
      }
    }

    // Loop/iteration
    const isLoopWord = explanation.includes('loop') || 
                       explanation.includes('for') || 
                       explanation.includes('iterate') || 
                       explanation.includes('each') || 
                       explanation.includes('traverse') || 
                       explanation.includes('scan') || 
                       explanation.includes('while');

    if (isLoopWord) {
      if (line.includes('for ') || line.includes('while ')) {
        score += 25;
      }
    }

    // Push/insert operations
    const isPushWord = explanation.includes('push') || 
                       explanation.includes('append') || 
                       explanation.includes('add') || 
                       explanation.includes('enqueue') || 
                       explanation.includes('insert') ||
                       explanation.includes('copy') ||
                       explanation.includes('copying') ||
                       explanation.includes('remaining');

    if (isPushWord) {
      if (line.includes('append') || line.includes('push') || line.includes('insert') || line.includes('+=') || line.includes('add') || line.includes('extend')) {
        score += 30;
      }
    }

    // Pop/remove operations
    const isPopWord = explanation.includes('pop') || 
                      explanation.includes('remove') || 
                      explanation.includes('delete') || 
                      explanation.includes('dequeue') || 
                      explanation.includes('evict');

    if (isPopWord) {
      if (line.includes('pop') || line.includes('remove') || line.includes('delete') || line.includes('heappop')) {
        score += 20;
      }
    }

    // Recursive call
    const isRecursiveWord = explanation.includes('recursive') || 
                            explanation.includes('recursion') || 
                            explanation.includes('call') || 
                            explanation.includes('split') || 
                            explanation.includes('divide');

    if (isRecursiveWord) {
      const funcDefIdx = codeLines.findIndex(l => l.trim().startsWith('def '));
      if (funcDefIdx !== -1) {
        const funcDef = codeLines[funcDefIdx];
        const match = funcDef.match(/def\s+(\w+)/);
        if (match && match[1]) {
          const funcName = match[1];
          if (line.includes(funcName) && !line.startsWith('def ')) {
            score += 30;
          }
        }
      }
    }

    // Initial / Setup lines priority
    if (isInitial) {
      if (line.startsWith('def ') || idx < 3) {
        score += 30;
      }
    }

    // Complete / Return lines priority
    if (isComplete) {
      if (line.includes('return ') || line.includes('break')) {
        score += 40;
      }
    }

    // Penalty for conditional/loop headers when we are performing a strong action
    const isActionStep = isAssignWord || isPushWord || isPopWord;
    if (isActionStep) {
      if (line.startsWith('if ') || line.startsWith('elif ') || line.startsWith('while ') || line.startsWith('for ')) {
        score -= 30;
      }
    }

    // Pointer move priority rules
    const isPointerMove = explanation.includes('pointer') || 
                          explanation.includes('move') || 
                          explanation.includes('inward') || 
                          explanation.includes('shift') || 
                          explanation.includes('shifting') || 
                          explanation.includes('increment') || 
                          explanation.includes('decrement');

    if (isPointerMove) {
      if (line.includes('+=') || line.includes('-=') || line.includes('++') || line.includes('--')) {
        score += 30;
      }
      if (line.includes(',') && (line.includes('arr[') || line.includes('nums['))) {
        score -= 30;
      }
    }

    // Penalize constant initialization lines during loop iterations
    if (!isInitial) {
      if (line.includes('left, right = 0') || line.includes('left = 0') || line.includes('right = len(') || line.includes('prev = None') || line.includes('swapped = False') || line.includes('swapped = True')) {
        score -= 45;
      }
    }

    // State keys matching: match variables from the current snapshot state
    const snapKeys = Object.keys(snap);
    snapKeys.forEach(key => {
      if (['data', 'highlights', 'explanation', 'stats', 'step'].includes(key) || key.endsWith('State')) return;
      const wordRegex = new RegExp('\\b' + key + '\\b', 'i');
      if (wordRegex.test(line)) {
        score += 10;
      }
    });

    // Dynamically match any state keys ending in 'State' (e.g. mergeState, listState, dpState)
    snapKeys.forEach(ns => {
      if (ns.endsWith('State') && snap[ns] && typeof snap[ns] === 'object') {
        Object.keys(snap[ns]).forEach(key => {
          const wordRegex = new RegExp('\\b' + key + '\\b', 'i');
          if (wordRegex.test(line)) {
            score += 10;
          }
        });
      }
    });

    // Explicit A/B array mapping heuristics
    const hasRefA = /\b(A|arr1|first)\b/i.test(explanation);
    const hasRefB = /\b(B|arr2|second)\b/i.test(explanation);
    if (hasRefA && line.includes('arr1')) {
      score += 25;
    }
    if (hasRefB && line.includes('arr2')) {
      score += 25;
    }

    // Custom frequency-counting and key-value mapping heuristics
    if (line.includes('freq') && (explanation.includes('frequency') || explanation.includes('freq'))) {
      score += 20;
    }
    if (line.includes('val') && (explanation.includes('element') || explanation.includes('value') || explanation.includes('val'))) {
      score += 20;
    }

    // Match exact words from the explanation in the code line
    const words = explanation.split(/[^a-zA-Z0-9_]/);
    words.forEach(word => {
      if (word.length > 1 && !['and', 'the', 'for', 'with', 'this', 'that', 'from', 'into', 'then', 'index', 'value', 'node', 'element', 'array', 'list', 'each', 'step'].includes(word)) {
        const wordRegex = new RegExp('\\b' + word + '\\b', 'i');
        if (wordRegex.test(line)) {
          score += 5;
        }
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestLineIdx = idx;
    }
  }

  if (bestLineIdx !== -1 && maxScore > 0) {
    return bestLineIdx + 1;
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
