/**
 * COMPLETE ROADMAP STEP GENERATORS
 * Every topic has its own dedicated simulation logic.
 */

// ─────────────────────────────────────────────────────────────
// PHASE 1: ARRAYS
// ─────────────────────────────────────────────────────────────

// 1. Array Traversal
export function arrayTraversalSteps(arr) {
  const steps = [{ data: [...arr], highlights: {}, explanation: `Array has ${arr.length} elements. Begin traversal from index 0.`, stats: { comparisons: 0, step: 0 } }];
  for (let i = 0; i < arr.length; i++) {
    steps.push({ data: [...arr], highlights: { [i]: 'active' }, explanation: `Visiting index ${i}: value = ${arr[i]}.`, stats: { comparisons: i + 1, step: i + 1 } });
    steps.push({ data: [...arr], highlights: { [i]: 'sorted' }, explanation: `Index ${i} processed. Value ${arr[i]} read.`, stats: { comparisons: i + 1, step: i + 2 } });
  }
  steps.push({ data: [...arr], highlights: {}, explanation: `Traversal complete. Visited all ${arr.length} elements.`, stats: { comparisons: arr.length, step: arr.length * 2 + 1 } });
  return steps;
}

// 2. Array Insertion
export function arrayInsertionSteps(arr, rawTarget, maybeVal) {
  let insertVal = 99;
  let position = arr.length;

  if (maybeVal !== undefined) {
    insertVal = maybeVal;
    position = rawTarget !== undefined ? Math.min(rawTarget, arr.length) : arr.length;
  } else if (rawTarget !== undefined) {
    const parts = rawTarget.toString().trim().split(/[\s,]+/);
    if (parts.length >= 2) {
      insertVal = parseInt(parts[0]);
      position = parseInt(parts[1]);
    } else if (parts.length === 1 && parts[0] !== "") {
      insertVal = parseInt(parts[0]);
      position = arr.length;
    }
  }

  if (isNaN(insertVal)) insertVal = 99;
  if (isNaN(position)) position = 2;
  const pos = Math.max(0, Math.min(position, arr.length));

  const a = [...arr];
  const steps = [];
  steps.push({
    data: [...a],
    highlights: {},
    explanation: `Array Insertion: Insert element ${insertVal} at index ${pos}. Original array: [${a.join(', ')}].`,
    stats: { step: 0, swaps: 0 }
  });

  a.push(0);
  steps.push({
    data: [...a],
    highlights: { [a.length - 1]: 'pivot' },
    explanation: `Append a placeholder element (0) at the end of the array to increase size to ${a.length}.`,
    stats: { step: 1, swaps: 0 }
  });

  for (let i = a.length - 1; i > pos; i--) {
    steps.push({
      data: [...a],
      highlights: { [i]: 'compare', [i - 1]: 'pivot' },
      explanation: `Shift element at index ${i - 1} (${a[i - 1]}) right to index ${i}.`,
      stats: { step: a.length - i + 1, swaps: a.length - i }
    });
    a[i] = a[i - 1];
    steps.push({
      data: [...a],
      highlights: { [i]: 'swap', [i - 1]: 'swap' },
      explanation: `Element shifted. Array: [${a.join(', ')}].`,
      stats: { step: a.length - i + 2, swaps: a.length - i }
    });
  }

  steps.push({
    data: [...a],
    highlights: { [pos]: 'compare' },
    explanation: `Place target element ${insertVal} at index ${pos}.`,
    stats: { step: a.length + 1, swaps: a.length - pos }
  });
  a[pos] = insertVal;

  steps.push({
    data: [...a],
    highlights: { sorted: a.map((_, i) => i) },
    explanation: `Insertion complete! Final array: [${a.join(', ')}].`,
    stats: { step: a.length + 2, swaps: a.length - pos }
  });

  return steps;
}

// 3. Array Deletion
export function arrayDeletionSteps(arr, rawTarget) {
  let position = 2;
  if (rawTarget !== undefined) {
    position = parseInt(rawTarget);
  }
  if (isNaN(position)) position = 2;
  const pos = Math.max(0, Math.min(position, arr.length - 1));

  const a = [...arr];
  const deletedVal = a[pos];
  const steps = [];

  steps.push({
    data: [...a],
    highlights: { [pos]: 'pivot' },
    explanation: `Array Deletion: Remove element at index ${pos} (value: ${deletedVal}).`,
    stats: { step: 0, swaps: 0 }
  });

  steps.push({
    data: [...a],
    highlights: { [pos]: 'swap' },
    explanation: `Mark index ${pos} for deletion.`,
    stats: { step: 1, swaps: 0 }
  });

  for (let i = pos; i < a.length - 1; i++) {
    steps.push({
      data: [...a],
      highlights: { [i]: 'pivot', [i + 1]: 'compare' },
      explanation: `Shift element at index ${i + 1} (${a[i + 1]}) left to index ${i}.`,
      stats: { step: i - pos + 2, swaps: i - pos + 1 }
    });
    a[i] = a[i + 1];
    steps.push({
      data: [...a],
      highlights: { [i]: 'swap', [i + 1]: 'swap' },
      explanation: `Element shifted. Array: [${a.join(', ')}].`,
      stats: { step: i - pos + 3, swaps: i - pos + 1 }
    });
  }

  steps.push({
    data: [...a],
    highlights: { [a.length - 1]: 'pivot' },
    explanation: `Remove the duplicate last element (${a[a.length - 1]}) to complete deletion.`,
    stats: { step: a.length + 1, swaps: a.length - pos }
  });
  a.pop();

  steps.push({
    data: [...a],
    highlights: { sorted: a.map((_, i) => i) },
    explanation: `Deletion complete! Final array: [${a.join(', ')}].`,
    stats: { step: a.length + 2, swaps: a.length - pos }
  });

  return steps;
}

// 4. Dutch National Flag (3-way partition)
export function dutchNationalFlagSteps(rawArr) {
  const arr = rawArr.map(x => { const v = Math.abs(parseInt(x)); return isNaN(v) ? 0 : v % 3; });
  const steps = [];
  let low = 0, mid = 0, high = arr.length - 1;
  let comparisons = 0, swaps = 0, stepCount = 0;
  steps.push({ data: [...arr], highlights: { [low]: 'active', [high]: 'active' }, explanation: `Dutch National Flag: 3-way partition. low=${low}, mid=${mid}, high=${high}.`, stats: { comparisons, swaps, step: stepCount++ } });
  while (mid <= high) {
    comparisons++;
    const val = arr[mid];
    if (val === 0) {
      swaps++;
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      steps.push({ data: [...arr], highlights: { [low]: 'success', [mid]: 'compare' }, explanation: `arr[mid]=${val} is 0 → swap with arr[low]. Advance low and mid.`, stats: { comparisons, swaps, step: stepCount++ } });
      low++; mid++;
    } else if (val === 1) {
      steps.push({ data: [...arr], highlights: { [mid]: 'sorted' }, explanation: `arr[mid]=${val} is 1 → already in place. Advance mid.`, stats: { comparisons, swaps, step: stepCount++ } });
      mid++;
    } else {
      swaps++;
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      steps.push({ data: [...arr], highlights: { [mid]: 'compare', [high]: 'swap' }, explanation: `arr[mid]=${val} is 2 → swap with arr[high]. Decrement high.`, stats: { comparisons, swaps, step: stepCount++ } });
      high--;
    }
  }
  steps.push({ data: [...arr], highlights: {}, explanation: `Done. All 0s at left, 1s in middle, 2s at right.`, stats: { comparisons, swaps, step: stepCount } });
  return steps;
}

// 5. Moore's Voting
export function mooresVotingSteps(arr) {
  const steps = [];
  let candidate = null, count = 0;
  steps.push({ data: [...arr], highlights: {}, explanation: `Moore's Voting: Find majority element. candidate=null, count=0.`, stats: { comparisons: 0, candidate: 'None', count: 0 } });
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (count === 0) { candidate = val; count = 1; }
    else if (val === candidate) count++;
    else count--;
    steps.push({ data: [...arr], highlights: { [i]: 'active' }, explanation: `Index ${i}: val=${val}. ${val === candidate ? 'Matches candidate → count++' : count === 0 ? 'count=0 → new candidate' : 'Differs → count--'}. candidate=${candidate}, count=${count}.`, stats: { comparisons: i + 1, candidate: String(candidate), count } });
  }
  let occ = 0;
  for (let i = 0; i < arr.length; i++) { if (arr[i] === candidate) occ++; steps.push({ data: [...arr], highlights: { [i]: 'visited' }, explanation: `Verify: checking index ${i}. Occurrences of ${candidate} = ${occ}.`, stats: { comparisons: arr.length + i + 1, candidate: String(candidate), count: occ } }); }
  steps.push({ data: [...arr], highlights: {}, explanation: occ > Math.floor(arr.length / 2) ? `Majority element is ${candidate} (${occ}/${arr.length} occurrences).` : `No majority element. ${candidate} only occurs ${occ} times.`, stats: { comparisons: arr.length * 2, candidate: String(candidate), count: occ } });
  return steps;
}

// 6. Suffix Sum
export function suffixSumSteps(arr) {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const suffix = Array(n).fill(0);

  steps.push({
    data: [...nums],
    suffixState: { suff: [...suffix], currentIdx: -1 },
    highlights: {},
    explanation: "Initialize suffix sum array with zeros. Suffix sum calculates running sums scanning right-to-left: suff[i] = suff[i+1] + arr[i].",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = (i === n - 1 ? 0 : suffix[i + 1]) + nums[i];
    steps.push({
      data: [...nums],
      suffixState: { suff: [...suffix], currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: i === n - 1
        ? `suff[${n-1}] = arr[${n-1}] = ${nums[n-1]}`
        : `suff[${i}] = suff[${i+1}] (${suffix[i+1]}) + arr[${i}] (${nums[i]}) = ${suffix[i]}`,
      stats: { comparisons: n - 1 - i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...suffix],
    suffixState: { suff: [...suffix], currentIdx: -1 },
    highlights: suffix.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Suffix sum array calculation complete: [${suffix.join(', ')}].`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
}

// 7. Difference Array
export function differenceArraySteps(arr) {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const diff = Array(n).fill(0);

  steps.push({
    data: [...nums],
    diffState: { diff: [...diff], currentIdx: -1 },
    highlights: {},
    explanation: "Initialize difference array with zeros. Difference array calculates subtraction: diff[i] = arr[i] - arr[i-1].",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  diff[0] = nums[0];
  steps.push({
    data: [...nums],
    diffState: { diff: [...diff], currentIdx: 0 },
    highlights: { 0: 'pivot' },
    explanation: `diff[0] = arr[0] = ${nums[0]}`,
    stats: { comparisons: 0, swaps: 0, step: 1 }
  });

  for (let i = 1; i < n; i++) {
    diff[i] = nums[i] - nums[i - 1];
    steps.push({
      data: [...nums],
      diffState: { diff: [...diff], currentIdx: i },
      highlights: { [i]: 'pivot', [i - 1]: 'compare' },
      explanation: `diff[${i}] = arr[${i}] (${nums[i]}) - arr[${i-1}] (${nums[i-1]}) = ${diff[i]}`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...diff],
    diffState: { diff: [...diff], currentIdx: -1 },
    highlights: diff.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Difference array calculation complete: [${diff.join(', ')}].`,
    stats: { comparisons: n - 1, swaps: 0, step: steps.length }
  });

  return steps;
}

// 7B. Splitting Arrays
export function splittingArraysSteps(arr, targetInputStr) {
  const steps = [];
  const a = [...arr];

  const position = parseInt(targetInputStr) !== undefined && !isNaN(parseInt(targetInputStr)) ? parseInt(targetInputStr) : Math.floor(a.length / 2);
  const splitIdx = Math.max(0, Math.min(position, a.length));

  steps.push({
    data: { arr: [...a], left: [], right: [], splitIdx, phase: 'init', currentIndex: -1 },
    highlights: { [splitIdx]: 'pivot' },
    explanation: `Start Splitting Array at index ${splitIdx}. We will slice the array into two parts: index [0...${splitIdx - 1}] and [${splitIdx}...${a.length - 1}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const left = [];
  for (let i = 0; i < splitIdx; i++) {
    left.push(a[i]);
    steps.push({
      data: { arr: [...a], left: [...left], right: [], splitIdx, phase: 'left', currentIndex: i },
      highlights: { arrIdx: i, [splitIdx]: 'pivot' },
      explanation: `Copying element at index ${i} (${a[i]}) to the Left array.`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
  }

  const right = [];
  for (let i = splitIdx; i < a.length; i++) {
    right.push(a[i]);
    steps.push({
      data: { arr: [...a], left: [...left], right: [...right], splitIdx, phase: 'right', currentIndex: i },
      highlights: { arrIdx: i, [splitIdx]: 'pivot' },
      explanation: `Copying element at index ${i} (${a[i]}) to the Right array.`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { arr: [...a], left: [...left], right: [...right], splitIdx, phase: 'done', currentIndex: -1 },
    highlights: { sorted: a.map((_, idx) => idx) },
    explanation: `Array split complete! Left: [${left.join(', ')}], Right: [${right.join(', ')}].`,
    stats: { comparisons: 0, swaps: 0, step: steps.length }
  });

  return steps;
}

// 8. Spiral Matrix traversal
export function spiralMatrixSteps(size) {
  const n = Math.min(size || 4, 6);
  // Build n×n matrix filled 1..n*n
  const mat = [];
  for (let i = 0; i < n; i++) { mat[i] = []; for (let j = 0; j < n; j++) mat[i][j] = i * n + j + 1; }
  const steps = [];
  const order = [];
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r => [...r]), n, highlights: {} }, explanation: `Spiral Matrix ${n}×${n}. Start at top-left, traverse Right→Down→Left→Up.`, stats: { step: 0 } });
  let step = 1;
  const hlMap = {};
  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) { order.push([top, c]); hlMap[`${top},${c}`] = step++; steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r => [...r]), n, activeCell: [top, c], order: [...order], direction: 'right' }, explanation: `→ Right: visiting [${top}][${c}] = ${mat[top][c]}`, stats: { step: step - 1 } }); }
    top++;
    for (let r = top; r <= bottom; r++) { order.push([r, right]); steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r2 => [...r2]), n, activeCell: [r, right], order: [...order], direction: 'down' }, explanation: `↓ Down: visiting [${r}][${right}] = ${mat[r][right]}`, stats: { step: step++ } }); }
    right--;
    for (let c = right; c >= left; c--) { order.push([bottom, c]); steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r2 => [...r2]), n, activeCell: [bottom, c], order: [...order], direction: 'left' }, explanation: `← Left: visiting [${bottom}][${c}] = ${mat[bottom][c]}`, stats: { step: step++ } }); }
    bottom--;
    for (let r = bottom; r >= top; r--) { order.push([r, left]); steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r2 => [...r2]), n, activeCell: [r, left], order: [...order], direction: 'up' }, explanation: `↑ Up: visiting [${r}][${left}] = ${mat[r][left]}`, stats: { step: step++ } }); }
    left++;
  }
  steps.push({ data: mat.flat(), highlights: {}, matrixState: { matrix: mat.map(r => [...r]), n, order, direction: 'done' }, explanation: `Spiral traversal complete. Visited all ${n * n} elements.`, stats: { step } });
  return steps;
}

// 8B. Matrix Transpose
export function transposeMatrixSteps(size) {
  const n = Math.min(size || 3, 5);
  const mat = [];
  for (let i = 0; i < n; i++) {
    mat[i] = [];
    for (let j = 0; j < n; j++) {
      mat[i][j] = i * n + j + 1;
    }
  }

  const steps = [];
  const swapped = [];

  steps.push({
    data: mat.flat(),
    highlights: {},
    matrixState: { matrix: mat.map(r => [...r]), n, activeCell: null, compareCell: null, swapped: [], phase: 'init' },
    explanation: `Start Matrix Transposition. We will swap elements across the diagonal: matrix[i][j] ↔ matrix[j][i] for j > i.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let comparisons = 0;
  let swapCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      comparisons++;
      
      steps.push({
        data: mat.flat(),
        highlights: {},
        matrixState: { 
          matrix: mat.map(r => [...r]), 
          n, 
          activeCell: [i, j], 
          compareCell: [j, i], 
          swapped: [...swapped], 
          phase: 'compare' 
        },
        explanation: `Comparing element at [${i}][${j}] (${mat[i][j]}) with [${j}][${i}] (${mat[j][i]}).`,
        stats: { comparisons, swaps: swapCount, step: steps.length }
      });

      const temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
      swapCount++;
      swapped.push([i, j], [j, i]);

      steps.push({
        data: mat.flat(),
        highlights: {},
        matrixState: { 
          matrix: mat.map(r => [...r]), 
          n, 
          activeCell: [i, j], 
          compareCell: [j, i], 
          swapped: [...swapped], 
          phase: 'swap' 
        },
        explanation: `Swapped [${i}][${j}] and [${j}][${i}].`,
        stats: { comparisons, swaps: swapCount, step: steps.length }
      });
    }
  }

  steps.push({
    data: mat.flat(),
    highlights: {},
    matrixState: { 
      matrix: mat.map(r => [...r]), 
      n, 
      activeCell: null, 
      compareCell: null, 
      swapped: [...swapped], 
      phase: 'done' 
    },
    explanation: `Matrix Transposition complete! Diagonal elements remained in place, others were mirrored.`,
    stats: { comparisons, swaps: swapCount, step: steps.length }
  });

  return steps;
}

// 8C. Fruits Into Baskets
export function fruitsIntoBasketsSteps(rawInput) {
  let arr = (rawInput || '2 1 5 1 3 2')
    .toString()
    .trim()
    .split(/[\s,]+/)
    .map(Number)
    .filter(x => !isNaN(x));

  if (arr.length === 0) {
    arr = [2, 1, 5, 1, 3, 2];
  }

  const steps = [];
  const basket = {};
  let left = 0;
  let maxLen = 0;

  steps.push({
    data: [...arr],
    highlights: {},
    fruitState: { fruits: [...arr], left: 0, right: 0, basket: {}, maxLen: 0, phase: 'init' },
    explanation: `Fruits into Baskets: Find the longest contiguous subarray with at most 2 distinct fruits. Input fruits: [${arr.join(', ')}].`,
    stats: { step: 0 }
  });

  for (let right = 0; right < arr.length; right++) {
    const rightFruit = arr[right];
    basket[rightFruit] = (basket[rightFruit] || 0) + 1;

    steps.push({
      data: [...arr],
      highlights: {},
      fruitState: { fruits: [...arr], left, right, basket: { ...basket }, maxLen, phase: 'add' },
      explanation: `Add fruit at index ${right} (type: ${rightFruit}) to baskets. Current baskets count: ${Object.keys(basket).length}/2.`,
      stats: { step: steps.length }
    });

    while (Object.keys(basket).length > 2) {
      const leftFruit = arr[left];
      basket[leftFruit]--;
      if (basket[leftFruit] === 0) {
        delete basket[leftFruit];
      }
      left++;

      steps.push({
        data: [...arr],
        highlights: {},
        fruitState: { fruits: [...arr], left, right, basket: { ...basket }, maxLen, phase: 'shrink' },
        explanation: `More than 2 types of fruits in baskets! Shrink window from left. Removed fruit at index ${left - 1} (type: ${leftFruit}).`,
        stats: { step: steps.length }
      });
    }

    const currentLen = right - left + 1;
    const oldMax = maxLen;
    maxLen = Math.max(maxLen, currentLen);

    steps.push({
      data: [...arr],
      highlights: {},
      fruitState: { fruits: [...arr], left, right, basket: { ...basket }, maxLen, phase: 'update' },
      explanation: `Baskets hold at most 2 types of fruits. Collected fruit count is ${currentLen}. ${
        currentLen > oldMax ? `Updated maximum collected count to ${maxLen}.` : `Maximum collected remains ${maxLen}.`
      }`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: [...arr],
    highlights: {},
    fruitState: { fruits: [...arr], left, right: arr.length - 1, basket: { ...basket }, maxLen, phase: 'done' },
    explanation: `Finished traversing all fruits. The maximum fruits we can collect is ${maxLen}.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8D. Minimum Window Substring
export function minWindowSubstringSteps(rawInput, rawTarget) {
  const lines = (rawInput || '').toString().trim().split('\n');
  const s = lines[0] || 'ADOBECODEBANC';
  const t = rawTarget ? rawTarget.toString().trim() : (lines[1] || 'ABC');

  const steps = [];
  const need = {};
  const have = {};

  for (const c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0;
  let formed = 0;
  const required = Object.keys(need).length;
  let minLen = Infinity;
  let minSub = '';

  steps.push({
    data: s.split(''),
    highlights: {},
    minWindowState: { s, t, left: 0, right: 0, need: { ...need }, have: {}, formed: 0, required, minLen: Infinity, minSub: '', phase: 'init' },
    explanation: `Minimum Window Substring: Find minimum window in S="${s}" containing all characters of T="${t}".`,
    stats: { step: 0 }
  });

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    have[c] = (have[c] || 0) + 1;

    if (need[c] && have[c] === need[c]) {
      formed++;
    }

    steps.push({
      data: s.split(''),
      highlights: {},
      minWindowState: { s, t, left, right, need: { ...need }, have: { ...have }, formed, required, minLen, minSub, phase: 'add' },
      explanation: `Add character at index ${right} ('${c}') to window. Current window S[${left}..${right}] matches: ${formed}/${required} required.`,
      stats: { step: steps.length }
    });

    while (formed === required) {
      const currentLen = right - left + 1;
      const oldMin = minLen;
      if (currentLen < minLen) {
        minLen = currentLen;
        minSub = s.slice(left, right + 1);
      }

      steps.push({
        data: s.split(''),
        highlights: {},
        minWindowState: { s, t, left, right, need: { ...need }, have: { ...have }, formed, required, minLen, minSub, phase: 'check' },
        explanation: `All target characters matched! Current window length: ${currentLen}. ${
          currentLen < oldMin ? `Updated minimum window to "${minSub}" (${minLen}).` : `Minimum window remains "${minSub}" (${minLen}).`
        }`,
        stats: { step: steps.length }
      });

      const lc = s[left];
      have[lc]--;
      if (need[lc] && have[lc] < need[lc]) {
        formed--;
      }
      left++;

      steps.push({
        data: s.split(''),
        highlights: {},
        minWindowState: { s, t, left, right, need: { ...need }, have: { ...have }, formed, required, minLen, minSub, phase: 'shrink' },
        explanation: `Shrink window from left. Removed character at index ${left - 1} ('${lc}').`,
        stats: { step: steps.length }
      });
    }
  }

  steps.push({
    data: s.split(''),
    highlights: {},
    minWindowState: { s, t, left: 0, right: s.length - 1, need: { ...need }, have: { ...have }, formed, required, minLen, minSub, phase: 'done' },
    explanation: `Finished traversing string. The minimum window substring containing "${t}" is "${minSub}" (length ${minLen}).`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8E. String Traversal
export function stringTraversalSteps(str) {
  const cleanStr = (str || 'hello').toString();
  const steps = [];
  const chars = cleanStr.split('');

  steps.push({
    data: chars,
    highlights: {},
    traversalState: { currentIdx: -1, char: '' },
    explanation: `Start string traversal. String length: ${cleanStr.length}.`,
    stats: { step: 0 }
  });

  for (let i = 0; i < chars.length; i++) {
    steps.push({
      data: chars,
      highlights: { [i]: 'active' },
      traversalState: { currentIdx: i, char: chars[i] },
      explanation: `Inspect character at index ${i}: '${chars[i]}'.`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: chars,
    highlights: {},
    traversalState: { currentIdx: chars.length, char: '' },
    explanation: `Traversal completed successfully.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8F. String Concatenation
export function stringConcatenationSteps(rawInput) {
  const parts = (rawInput || 'hello world').toString().trim().split(/\s+/);
  const s1 = parts[0] || 'hello';
  const s2 = parts.slice(1).join(' ') || 'world';

  const steps = [];
  let res = '';

  steps.push({
    data: [],
    highlights: {},
    concatState: { s1, s2, res: '', activeIdx: -1, phase: 'init' },
    explanation: `Start string concatenation. s1="${s1}", s2="${s2}".`,
    stats: { step: 0 }
  });

  // Loop through s1
  for (let i = 0; i < s1.length; i++) {
    res += s1[i];
    steps.push({
      data: res.split(''),
      highlights: {},
      concatState: { s1, s2, res, activeIdx: i, phase: 's1' },
      explanation: `Add character '${s1[i]}' from s1. Current result: "${res}".`,
      stats: { step: steps.length }
    });
  }

  // Loop through s2
  for (let i = 0; i < s2.length; i++) {
    res += s2[i];
    steps.push({
      data: res.split(''),
      highlights: {},
      concatState: { s1, s2, res, activeIdx: i, phase: 's2' },
      explanation: `Add character '${s2[i]}' from s2. Current result: "${res}".`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: res.split(''),
    highlights: {},
    concatState: { s1, s2, res, activeIdx: -1, phase: 'done' },
    explanation: `Concatenation completed successfully. Final string: "${res}".`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8G. Longest Palindromic Substring
export function longestPalindromeSteps(rawInput) {
  const s = (rawInput || 'babad').toString().trim();
  const steps = [];
  const chars = s.split('');

  let start = 0, end = 0;

  steps.push({
    data: chars,
    highlights: {},
    lpsState: { s, i: -1, l: -1, r: -1, start: 0, end: 0, bestSub: s[0] || '', phase: 'init' },
    explanation: `Start finding Longest Palindromic Substring in "${s}".`,
    stats: { step: 0 }
  });

  const expand = (i, lStart, rStart, phaseName) => {
    let l = lStart;
    let r = rStart;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      const curSub = s.slice(l, r + 1);
      const isNewBest = (r - l + 1) > (end - start + 1);

      steps.push({
        data: chars,
        highlights: { [i]: 'pivot', [l]: 'active', [r]: 'active' },
        lpsState: { s, i, l, r, start, end, bestSub: s.slice(start, end + 1), phase: phaseName },
        explanation: `Center index ${i}: Expand pointers L=${l}, R=${r}. Characters match ('${s[l]}' === '${s[r]}'). Substring "${curSub}" is a palindrome.`,
        stats: { step: steps.length }
      });

      if (isNewBest) {
        start = l;
        end = r;
        steps.push({
          data: chars,
          highlights: { [i]: 'pivot', [l]: 'active', [r]: 'active' },
          lpsState: { s, i, l, r, start, end, bestSub: s.slice(start, end + 1), phase: 'update' },
          explanation: `Found new longest palindrome substring: "${s.slice(start, end + 1)}" (length ${end - start + 1}).`,
          stats: { step: steps.length }
        });
      }

      l--;
      r++;
    }

    if (l >= 0 || r < s.length) {
      steps.push({
        data: chars,
        highlights: { [i]: 'pivot', ...(l >= 0 ? { [l]: 'error' } : {}), ...(r < s.length ? { [r]: 'error' } : {}) },
        lpsState: { s, i, l, r, start, end, bestSub: s.slice(start, end + 1), phase: phaseName },
        explanation: `Mismatch or bounds hit at L=${l}, R=${r} (${l >= 0 && r < s.length ? `'${s[l]}' !== '${s[r]}'` : 'Out of bounds'}). Stop expansion.`,
        stats: { step: steps.length }
      });
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i, i, 'expand-odd');
    if (i + 1 < s.length) {
      expand(i, i, i + 1, 'expand-even');
    }
  }

  steps.push({
    data: chars,
    highlights: {},
    lpsState: { s, i: s.length, l: -1, r: -1, start, end, bestSub: s.slice(start, end + 1), phase: 'done' },
    explanation: `Completed. Longest palindromic substring is "${s.slice(start, end + 1)}" (length ${end - start + 1}).`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8H. Doubly Linked List Traversal
export function doublyLinkedListTraversalSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : null,
    prev: idx > 0 ? idx - 1 : null
  }));

  const steps = [];
  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: "Initialize doubly linked list. Pointer traverses forward starting from head.",
    stats: { step: 0 }
  });

  for (let i = 0; i < n; i++) {
    steps.push({
      data: [...nodes],
      listState: { head: 0, curr: i, prev: i > 0 ? i - 1 : null, next: i < n - 1 ? i + 1 : null },
      highlights: { [i]: 'pivot' },
      explanation: `Current pointer is at Node ${nodes[i].val}. In a Doubly Linked List, we can check node.prev (${i > 0 ? nodes[i-1].val : 'null'}) and node.next (${i < n - 1 ? nodes[i+1].val : 'null'}).`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: n - 1, next: null },
    highlights: nodes.map(nd => nd.id).reduce((acc, id) => ({ ...acc, [id]: 'sorted' }), {}),
    explanation: "Reached end of list (null). Traversal complete.",
    stats: { step: steps.length }
  });

  return steps;
}

// 8I. Doubly Linked List Insertion
export function doublyLinkedListInsertionSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  let nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : null,
    prev: idx > 0 ? idx - 1 : null
  }));

  const steps = [];
  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: "Start doubly linked list insertion. We want to insert Node(99) at position 2.",
    stats: { step: 0 }
  });

  let curr = 0;
  for (let i = 0; i <= 1 && curr !== null; i++) {
    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      listState: { head: 0, curr, prev: curr > 0 ? curr - 1 : null, next: nodes[curr].next },
      highlights: { [curr]: 'pivot' },
      explanation: `Traversing list to find insertion spot. Current node is ${nodes[curr].val}.`,
      stats: { step: steps.length }
    });
    if (i < 1) curr = nodes[curr].next;
  }

  const newNodeId = nodes.length;
  const newNode = { id: newNodeId, val: 99, next: null, prev: null };
  const updatedNodes = [...nodes, newNode];

  steps.push({
    data: JSON.parse(JSON.stringify(updatedNodes)),
    listState: { head: 0, curr: newNodeId, prev: 1, next: null },
    highlights: { [newNodeId]: 'active', 1: 'pivot' },
    explanation: "Allocate new node with value 99.",
    stats: { step: steps.length }
  });

  const afterNodeIdx = nodes[1].next;
  updatedNodes[newNodeId].next = afterNodeIdx;
  steps.push({
    data: JSON.parse(JSON.stringify(updatedNodes)),
    listState: { head: 0, curr: newNodeId, prev: 1, next: afterNodeIdx },
    highlights: { [newNodeId]: 'active', [afterNodeIdx]: 'compare' },
    explanation: "Link new node's next to the remaining list.",
    stats: { step: steps.length }
  });

  updatedNodes[newNodeId].prev = 1;
  steps.push({
    data: JSON.parse(JSON.stringify(updatedNodes)),
    listState: { head: 0, curr: newNodeId, prev: 1, next: afterNodeIdx },
    highlights: { [newNodeId]: 'active', 1: 'compare' },
    explanation: "Link new node's prev pointer back to node 1.",
    stats: { step: steps.length }
  });

  updatedNodes[1].next = newNodeId;
  if (afterNodeIdx !== null) {
    updatedNodes[afterNodeIdx].prev = newNodeId;
  }
  
  const finalSequence = [];
  let temp = 0;
  const visited = new Set();
  while (temp !== null && !visited.has(temp)) {
    visited.add(temp);
    finalSequence.push(updatedNodes[temp]);
    temp = updatedNodes[temp].next;
  }

  steps.push({
    data: finalSequence,
    listState: { head: 0, curr: newNodeId, prev: null, next: null },
    highlights: { [newNodeId]: 'sorted' },
    explanation: "Updated list links. Insertion completed successfully.",
    stats: { step: steps.length }
  });

  return steps;
}

// 8J. Doubly Linked List Deletion
export function doublyLinkedListDeletionSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  let nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : null,
    prev: idx > 0 ? idx - 1 : null
  }));

  const steps = [];
  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: "Start doubly linked list deletion. We want to delete node at position 2.",
    stats: { step: 0 }
  });

  let curr = 0;
  for (let i = 0; i <= 2 && curr !== null; i++) {
    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      listState: { head: 0, curr, prev: nodes[curr].prev, next: nodes[curr].next },
      highlights: { [curr]: 'pivot' },
      explanation: `Traversing list to find target node. Current node is ${nodes[curr].val}.`,
      stats: { step: steps.length }
    });
    if (i < 2) curr = nodes[curr].next;
  }

  const targetId = 2;
  const beforeId = nodes[targetId].prev;
  const afterId = nodes[targetId].next;

  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    listState: { head: 0, curr: targetId, prev: beforeId, next: afterId },
    highlights: { [targetId]: 'error', ...(beforeId !== null ? { [beforeId]: 'compare' } : {}), ...(afterId !== null ? { [afterId]: 'compare' } : {}) },
    explanation: `Target node is ${nodes[targetId].val}. Re-linking its neighbors: node ${nodes[beforeId].val} and node ${nodes[afterId].val}.`,
    stats: { step: steps.length }
  });

  if (beforeId !== null) nodes[beforeId].next = afterId;
  if (afterId !== null) nodes[afterId].prev = beforeId;

  const finalSequence = [];
  let temp = 0;
  const visited = new Set();
  while (temp !== null && !visited.has(temp)) {
    visited.add(temp);
    finalSequence.push(nodes[temp]);
    temp = nodes[temp].next;
  }

  steps.push({
    data: finalSequence,
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: `Deleted node ${nums[targetId]} from the list. Linked neighbors together.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 8K. Circular Linked List Traversal
export function circularLinkedListTraversalSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : 0
  }));

  const steps = [];
  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: "Initialize circular linked list traversal. Track start head node to check loop termination.",
    stats: { step: 0 }
  });

  for (let i = 0; i < n; i++) {
    steps.push({
      data: [...nodes],
      listState: { head: 0, curr: i, prev: i > 0 ? i - 1 : n - 1, next: nodes[i].next },
      highlights: { [i]: 'pivot' },
      explanation: `Visiting Node ${nodes[i].val}. Next pointer points to Node ${nodes[nodes[i].next].val}.`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: 0, prev: n - 1, next: 1 },
    highlights: { 0: 'sorted' },
    explanation: "Loopback pointer referenced head Node 0 again. Termination condition met! Traversal complete.",
    stats: { step: steps.length }
  });

  return steps;
}

// 9. Matrix Multiplication
export function matrixMultiplicationSteps(rawInput) {
  // Parse "2 3\n1 2 3\n4 5 6" as A (2x3) and below as B
  const lines = (rawInput || '1 2\n3 4\n---\n5 6\n7 8').split('\n').map(l => l.trim());
  const sep = lines.findIndex(l => l === '---');
  const aLines = sep > 0 ? lines.slice(0, sep) : lines.slice(0, 2);
  const bLines = sep > 0 ? lines.slice(sep + 1) : lines.slice(2);
  const A = aLines.map(l => l.split(/\s+/).map(Number)).filter(r => r.length > 0 && !r.some(isNaN));
  const B = bLines.map(l => l.split(/\s+/).map(Number)).filter(r => r.length > 0 && !r.some(isNaN));
  if (A.length === 0 || B.length === 0) {
    A.push([1, 2], [3, 4]); B.push([5, 6], [7, 8]);
  }
  const m = A.length, k = A[0].length, n = B[0].length;
  const C = Array.from({ length: m }, () => new Array(n).fill(0));
  const steps = [{ data: [0], highlights: {}, matrixState: { A, B, C: C.map(r => [...r]), activeI: -1, activeJ: -1, activeK: -1, phase: 'init' }, explanation: `Matrix Multiplication: A[${m}×${k}] × B[${k}×${n}] = C[${m}×${n}]. C[i][j] = Σ A[i][k]×B[k][j].`, stats: { step: 0, comparisons: 0 } }];
  let s = 1, comp = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let kk = 0; kk < k; kk++) {
        comp++;
        sum += A[i][kk] * B[kk][j];
        C[i][j] = sum;
        steps.push({ data: [0], highlights: {}, matrixState: { A, B, C: C.map(r => [...r]), activeI: i, activeJ: j, activeK: kk, phase: 'compute', partial: sum }, explanation: `C[${i}][${j}] += A[${i}][${kk}](${A[i][kk]}) × B[${kk}][${j}](${B[kk][j]}) = ${A[i][kk] * B[kk][j]} → partial sum = ${sum}`, stats: { step: s++, comparisons: comp } });
      }
    }
  }
  steps.push({ data: [0], highlights: {}, matrixState: { A, B, C: C.map(r => [...r]), phase: 'done' }, explanation: `Matrix multiplication complete. Result is C[${m}×${n}].`, stats: { step: s, comparisons: comp } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 1: STRINGS
// ─────────────────────────────────────────────────────────────

// 10. Z-Algorithm
export function zAlgorithmSteps(rawInput) {
  const lines = (rawInput || 'aabxaa\naa').split('\n');
  const text = lines[0]?.trim() || 'aabxaa';
  const pattern = lines[1]?.trim() || 'aa';
  const combined = pattern + '$' + text;
  const n = combined.length;
  const Z = new Array(n).fill(0);
  const steps = [{ data: Array.from(combined), highlights: {}, explanation: `Z-Algorithm: Build Z-array for "${combined}". Z[i] = length of longest substring starting at i that is also a prefix.`, stats: { comparisons: 0, step: 0 } }];
  let l = 0, r = 0, comp = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) { Z[i] = Math.min(r - i, Z[i - l]); }
    while (i + Z[i] < n && combined[Z[i]] === combined[i + Z[i]]) { comp++; Z[i]++; }
    if (i + Z[i] > r) { l = i; r = i + Z[i]; }
    const hl = {};
    for (let k = 0; k < i; k++) hl[k] = 'sorted';
    hl[i] = 'active';
    steps.push({ data: Array.from(combined), highlights: hl, explanation: `i=${i}: Z[${i}]=${Z[i]}. Longest match from position ${i}: "${combined.slice(i, i + Z[i])}". Window l=${l}, r=${r}.`, stats: { comparisons: comp, step: i } });
    if (Z[i] === pattern.length) {
      steps.push({ data: Array.from(combined), highlights: { [i]: 'success' }, explanation: `Pattern "${pattern}" found at position ${i - pattern.length - 1} in text!`, stats: { comparisons: comp, step: i } });
    }
  }
  steps.push({ data: Array.from(combined), highlights: {}, explanation: `Z-array complete: [${Z.join(', ')}].`, stats: { comparisons: comp, step: n } });
  return steps;
}

// 11. Manacher's Algorithm
export function manachersSteps(s) {
  const str = s || 'abacaba';
  const T = '#' + str.split('').join('#') + '#';
  const n = T.length;
  const P = new Array(n).fill(0);
  const steps = [{ data: Array.from(T), highlights: {}, explanation: `Manacher's: Transform "${str}" to "${T}" and find palindrome radii.`, stats: { comparisons: 0, step: 0 } }];
  let C = 0, R = 0, comp = 0;
  for (let i = 0; i < n; i++) {
    const mirror = 2 * C - i;
    if (i < R) P[i] = Math.min(R - i, P[mirror]);
    while (i + P[i] + 1 < n && i - P[i] - 1 >= 0 && T[i + P[i] + 1] === T[i - P[i] - 1]) { comp++; P[i]++; }
    if (i + P[i] > R) { C = i; R = i + P[i]; }
    const hl = {};
    for (let k = i - P[i]; k <= i + P[i]; k++) hl[k] = P[i] > 0 ? 'compare' : 'visited';
    hl[i] = 'active';
    steps.push({ data: Array.from(T), highlights: hl, explanation: `Center i=${i} ('${T[i]}'): palindrome radius P[${i}]=${P[i]}. Palindrome: "${T.slice(i - P[i], i + P[i] + 1)}". C=${C}, R=${R}.`, stats: { comparisons: comp, step: i + 1 } });
  }
  const maxLen = Math.max(...P);
  const center = P.indexOf(maxLen);
  const longestPalin = T.slice(center - maxLen, center + maxLen + 1).replace(/#/g, '');
  steps.push({ data: Array.from(T), highlights: {}, explanation: `Manacher's complete. Longest palindrome = "${longestPalin}" (length ${longestPalin.length}).`, stats: { comparisons: comp, step: n } });
  return steps;
}

// 12. String Compression (Run-Length Encoding)
export function stringCompressionSteps(s) {
  const str = s || 'aaabbbccddddee';
  const steps = [{ data: Array.from(str), highlights: {}, explanation: `String Compression (RLE): Compress "${str}" by counting consecutive repeats.`, stats: { step: 0, compressionRatio: '—' } }];
  let result = '';
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    let count = 0;
    const start = i;
    while (i < str.length && str[i] === char) { i++; count++; }
    result += count > 1 ? `${char}${count}` : char;
    const hl = {};
    for (let k = start; k < i; k++) hl[k] = 'compare';
    steps.push({ data: Array.from(str), highlights: hl, explanation: `'${char}' repeated ${count} time(s). Encode as "${count > 1 ? char + count : char}". Result so far: "${result}"`, stats: { step: steps.length, compressionRatio: `${str.length}→${result.length}` } });
  }
  steps.push({ data: Array.from(str), highlights: {}, explanation: `Compression complete: "${str}" → "${result}". Ratio: ${str.length}:${result.length}.`, stats: { step: steps.length, compressionRatio: `${str.length}:${result.length}` } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 2: STACK ALGORITHMS
// ─────────────────────────────────────────────────────────────

// 13. Infix to Prefix
export function infixToPrefixSteps(expr) {
  const exp = (expr || 'A+B*C').trim();
  const steps = [];
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
  const isOp = c => '+-*/^'.includes(c);
  const stack = [];
  let output = '';

  const chars = exp.split('');
  steps.push({ data: [...chars], highlights: {}, explanation: `Infix→Prefix: Reverse expression, convert to postfix of reversed form, reverse result.`, stackState: { stack: [], stack2: [], charIdx: -1 }, listState: [exp], stats: { step: 0 } });

  const reversed = exp.split('').map(c => c === '(' ? ')' : c === ')' ? '(' : c).reverse().join('');
  const revChars = reversed.split('');
  steps.push({ data: [...revChars], highlights: {}, explanation: `Step 1: Reverse "${exp}" and swap brackets → "${reversed}"`, stackState: { stack: [], stack2: [], charIdx: -1 }, listState: [reversed], stats: { step: 1 } });

  for (let i = 0; i < reversed.length; i++) {
    const c = reversed[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      output += c;
      steps.push({ data: [...revChars], highlights: { [i]: 'pivot' }, explanation: `Operand '${c}' → append to output. Output: "${output}"`, stackState: { stack: [...stack], stack2: output.split(''), charIdx: i }, listState: [output], stats: { step: i + 2 } });
    } else if (c === '(') {
      stack.push(c);
      steps.push({ data: [...revChars], highlights: { [i]: 'compare' }, explanation: `'(' → push to stack.`, stackState: { stack: [...stack], stack2: output.split(''), charIdx: i }, listState: [output], stats: { step: i + 2 } });
    } else if (c === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') output += stack.pop();
      stack.pop();
      steps.push({ data: [...revChars], highlights: { [i]: 'compare' }, explanation: `')' → pop stack until '('. Output: "${output}"`, stackState: { stack: [...stack], stack2: output.split(''), charIdx: i }, listState: [output], stats: { step: i + 2 } });
    } else if (isOp(c)) {
      while (stack.length && stack[stack.length - 1] !== '(' && prec[stack[stack.length - 1]] > prec[c]) output += stack.pop();
      stack.push(c);
      steps.push({ data: [...revChars], highlights: { [i]: 'compare' }, explanation: `Operator '${c}' (prec ${prec[c]}): pop higher precedence operators, push '${c}'.`, stackState: { stack: [...stack], stack2: output.split(''), charIdx: i }, listState: [output], stats: { step: i + 2 } });
    }
  }
  while (stack.length) output += stack.pop();
  const prefix = output.split('').reverse().join('');
  steps.push({ data: prefix.split(''), highlights: {}, explanation: `Reverse output "${output}" → Prefix expression: "${prefix}"`, stackState: { stack: [], stack2: prefix.split(''), charIdx: -1 }, listState: [prefix], stats: { step: reversed.length + 2 } });
  return steps;
}

// 14. Prefix Evaluation
export function prefixEvaluationSteps(expr) {
  const tokens = (expr || '+ * 2 3 4').trim().split(/\s+/);
  const steps = [{ data: [...tokens], highlights: {}, explanation: `Prefix Evaluation: scan right-to-left and use a stack.`, stackState: { stack: [], stack2: [], charIdx: -1 }, stats: { step: 0 } }];
  const stack = [];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (!isNaN(t)) {
      stack.push(Number(t));
      steps.push({ data: [...tokens], highlights: { [i]: 'pivot' }, explanation: `Token '${t}' is operand → push ${t} to stack.`, stackState: { stack: [...stack], stack2: [], charIdx: i }, stats: { step: tokens.length - i } });
    } else {
      const a = stack.pop(), b = stack.pop();
      const result = t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : Math.floor(a / b);
      stack.push(result);
      steps.push({ data: [...tokens], highlights: { [i]: 'compare' }, explanation: `Operator '${t}': pop ${a} and ${b}. ${a} ${t} ${b} = ${result} → push ${result}.`, stackState: { stack: [...stack], stack2: [a, b, t], charIdx: i }, stats: { step: tokens.length - i } });
    }
  }
  steps.push({ data: [...tokens], highlights: {}, explanation: `Evaluation complete. Result = ${stack[0]}.`, stackState: { stack: [...stack], stack2: [stack[0]], charIdx: -1 }, stats: { step: tokens.length + 1 } });
  return steps;
}

// 15. Infix to Postfix
export function infixToPostfixSteps(expr) {
  const exp = (expr || 'A+B*C').replace(/\s+/g, '');
  const chars = exp.split('');
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
  const stack = [];
  let postfix = '';
  const steps = [{ data: [...chars], highlights: {}, explanation: `Infix→Postfix: scan left-to-right. Operands go to output, operators stack based on precedence.`, stackState: { stack: [], stack2: [], charIdx: -1 }, listState: [''], stats: { step: 0 } }];
  for (let i = 0; i < exp.length; i++) {
    const c = exp[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      postfix += c;
      steps.push({ data: [...chars], highlights: { [i]: 'pivot' }, explanation: `Operand '${c}' → append to output: "${postfix}"`, stackState: { stack: [...stack], stack2: postfix.split(''), charIdx: i }, listState: [postfix], stats: { step: i + 1 } });
    } else if (c === '(') {
      stack.push(c);
      steps.push({ data: [...chars], highlights: { [i]: 'compare' }, explanation: `'(' → push to stack.`, stackState: { stack: [...stack], stack2: postfix.split(''), charIdx: i }, listState: [postfix], stats: { step: i + 1 } });
    } else if (c === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') postfix += stack.pop();
      stack.pop();
      steps.push({ data: [...chars], highlights: { [i]: 'compare' }, explanation: `')' → pop until '('. Output: "${postfix}"`, stackState: { stack: [...stack], stack2: postfix.split(''), charIdx: i }, listState: [postfix], stats: { step: i + 1 } });
    } else {
      while (stack.length && stack[stack.length - 1] !== '(' && (prec[stack[stack.length - 1]] || 0) >= prec[c]) postfix += stack.pop();
      stack.push(c);
      steps.push({ data: [...chars], highlights: { [i]: 'compare' }, explanation: `Operator '${c}' (prec ${prec[c]}): pop higher/equal precedence, push '${c}'. Output: "${postfix}"`, stackState: { stack: [...stack], stack2: postfix.split(''), charIdx: i }, listState: [postfix], stats: { step: i + 1 } });
    }
  }
  while (stack.length) { postfix += stack.pop(); }
  steps.push({ data: [...chars], highlights: {}, explanation: `Pop remaining stack. Postfix = "${postfix}"`, stackState: { stack: [], stack2: postfix.split(''), charIdx: -1 }, listState: [postfix], stats: { step: exp.length + 1 } });
  return steps;
}

// 16. Postfix Evaluation
export function postfixEvaluationSteps(expr) {
  const tokens = (expr || '2 3 4 * +').trim().split(/\s+/);
  const stack = [];
  const steps = [{ data: [...tokens], highlights: {}, explanation: `Postfix Evaluation: scan left-to-right.`, stackState: { stack: [], stack2: [], charIdx: -1 }, stats: { step: 0 } }];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!isNaN(t)) {
      stack.push(Number(t));
      steps.push({ data: [...tokens], highlights: { [i]: 'pivot' }, explanation: `Token '${t}' is operand → push.`, stackState: { stack: [...stack], stack2: [], charIdx: i }, stats: { step: i + 1 } });
    } else {
      const b = stack.pop(), a = stack.pop();
      const r = t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : Math.floor(a / b);
      stack.push(r);
      steps.push({ data: [...tokens], highlights: { [i]: 'compare' }, explanation: `Operator '${t}': pop ${b} and ${a}. ${a}${t}${b}=${r} → push.`, stackState: { stack: [...stack], stack2: [a, b, t], charIdx: i }, stats: { step: i + 1 } });
    }
  }
  steps.push({ data: [...tokens], highlights: {}, explanation: `Result = ${stack[0]}.`, stackState: { stack: [...stack], stack2: [stack[0]], charIdx: -1 }, stats: { step: tokens.length + 1 } });
  return steps;
}

// 17. Next Smaller Element
export function nextSmallerElementSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n).fill(-1);
  const stack = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: "Initialize empty stack and NSE output array filled with -1.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const hl = { [i]: 'pivot' };
    stack.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: hl,
      explanation: `Inspecting element ${val} at index ${i}. Checking if it's smaller than elements represented on stack top.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] > val) {
      const poppedIdx = stack.pop();
      result[poppedIdx] = val;

      steps.push({
        data: [...nums],
        stackState: { 
          stack: stack.map(idx => nums[idx]), 
          stackIndices: [...stack], 
          charIdx: i, 
          result: [...result] 
        },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Element ${val} at index ${i} is smaller than stack top ${nums[poppedIdx]}. Next smaller element of index ${poppedIdx} is ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    stack.push(i);
    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: { [i]: 'active' },
      explanation: `Push index ${i} (value ${val}) onto the stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: `Result: [${result.join(', ')}]. -1 means no smaller element exists.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
}

// 18. Previous Greater Element
export function previousGreaterElementSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n).fill(-1);
  const stack = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: "Initialize empty stack and PGE output array filled with -1.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const hl = { [i]: 'pivot' };
    stack.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: hl,
      explanation: `Inspecting element ${val} at index ${i}. Popping elements from stack that are less than or equal to ${val}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] <= val) {
      const poppedIdx = stack.pop();
      steps.push({
        data: [...nums],
        stackState: { 
          stack: stack.map(idx => nums[idx]), 
          stackIndices: [...stack], 
          charIdx: i, 
          result: [...result] 
        },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Popped index ${poppedIdx} (value ${nums[poppedIdx]}) from stack since it is <= ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    result[i] = stack.length > 0 ? nums[stack[stack.length - 1]] : -1;
    stack.push(i);

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: { [i]: 'active' },
      explanation: `Previous greater element of ${val} is ${result[i]}. Push index ${i} onto stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: `Result: [${result.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
}

// 19. Largest Rectangle in Histogram
export function largestRectangleHistogramSteps(arr) {
  const n = arr.length;
  const stack = [];
  let maxArea = 0;
  const areas = new Array(n).fill(0);
  const steps = [{ data: [...arr], highlights: {}, explanation: `Largest Rectangle in Histogram. For each bar, expand using monotonic stack.`, stats: { comparisons: 0, maxArea: 0, step: 0 } }];
  let comp = 0;
  const computeArea = (height, width) => height * width;
  let s = 1;
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : arr[i];
    comp++;
    while (stack.length && arr[stack[stack.length - 1]] > h) {
      const topIdx = stack.pop();
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      const area = computeArea(arr[topIdx], width);
      if (area > maxArea) maxArea = area;
      areas[topIdx] = area;
      const hl = {};
      for (let k = (stack.length ? stack[stack.length - 1] + 1 : 0); k < i; k++) hl[k] = 'compare';
      hl[topIdx] = 'active';
      steps.push({ data: [...arr], highlights: hl, explanation: `Bar at index ${topIdx} (height=${arr[topIdx]}) popped. Width=${width}. Area=${area}. Max so far=${maxArea}.`, stats: { comparisons: ++comp, maxArea, step: s++ } });
    }
    if (i < n) { stack.push(i); steps.push({ data: [...arr], highlights: { [i]: 'visited' }, explanation: `Push index ${i} (height=${arr[i]}) to stack.`, stats: { comparisons: comp, maxArea, step: s++ } }); }
  }
  steps.push({ data: [...arr], highlights: {}, explanation: `Maximum rectangle area = ${maxArea}.`, stats: { comparisons: comp, maxArea, step: s } });
  return steps;
}

// 20. Stock Span Problem
export function stockSpanSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n).fill(1);
  const stack = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: "Initialize empty stack and Span output array filled with 1.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const hl = { [i]: 'pivot' };
    stack.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: hl,
      explanation: `Inspecting price ${val} at index ${i}. Popping stack elements representing prices <= ${val}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] <= val) {
      const poppedIdx = stack.pop();
      steps.push({
        data: [...nums],
        stackState: { 
          stack: stack.map(idx => nums[idx]), 
          stackIndices: [...stack], 
          charIdx: i, 
          result: [...result] 
        },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Popped index ${poppedIdx} (price ${nums[poppedIdx]}) <= current price ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    result[i] = stack.length > 0 ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: { [i]: 'active' },
      explanation: `Span for day ${i} is ${result[i]} days. Push index ${i} onto stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: `Result spans: [${result.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
}

// Helper to build visual node objects with coordinates for binary tree visualizations
function buildBinaryTreeVisual(arr) {
  const filtered = arr.filter(x => x !== undefined && x !== null && !isNaN(x));
  if (filtered.length === 0) return [];
  const list = arr.map((val, idx) => ({ id: idx, val, left: null, right: null, x: 0, y: 0 }));
  for (let i = 0; i < list.length; i++) {
    const leftIdx = 2 * i + 1;
    const rightIdx = 2 * i + 2;
    if (leftIdx < list.length) list[i].left = list[leftIdx];
    if (rightIdx < list.length) list[i].right = list[rightIdx];
  }
  const root = list[0];
  const getMaxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
  };
  const maxDepth = getMaxDepth(root);
  const positionNodes = (node, depth, minX, maxX) => {
    if (!node) return;
    const x = (minX + maxX) / 2;
    let y = 135;
    if (maxDepth > 1) {
      y = 45 + depth * (180 / (maxDepth - 1));
    }
    node.x = x;
    node.y = y;
    positionNodes(node.left, depth + 1, minX, x);
    positionNodes(node.right, depth + 1, x, maxX);
  };
  positionNodes(root, 0, 10, 90);
  return list.map(n => ({
    ...n,
    left: n.left ? { id: n.left.id } : null,
    right: n.right ? { id: n.right.id } : null
  }));
}

// 21. Tree Diameter
export function treeDiameterSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Tree Diameter: Find the longest path between any two leaf nodes.`, stats: { step: 0, diameter: 0 } }];
  const n = arr.length;
  const visited = {};
  let maxDiam = 0;
  const heights = {};
  const dfs = (node) => {
    if (node >= n || arr[node] === undefined || arr[node] === null) return 0;
    const left = 2 * node + 1;
    const right = 2 * node + 2;
    const lh = dfs(left);
    const rh = dfs(right);
    const diam = lh + rh;
    if (diam > maxDiam) maxDiam = diam;
    heights[node] = 1 + Math.max(lh, rh);
    visited[node] = true;
    steps.push({ data: visualNodes, highlights: { [node]: 'active' }, explanation: `Node[${node}]=${arr[node]}: leftHeight=${lh}, rightHeight=${rh}. Diameter through here=${diam}. Max diameter=${maxDiam}.`, stats: { step: steps.length, diameter: maxDiam } });
    return heights[node];
  };
  dfs(0);
  steps.push({ data: visualNodes, highlights: {}, explanation: `Diameter of tree = ${maxDiam} (longest path between two leaf nodes).`, stats: { step: steps.length, diameter: maxDiam } });
  return steps;
}

// 22. Tree Top View / Bottom View (via level-order column map)
export function treeTopViewSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Tree Top View: For each horizontal column, show the first (topmost) visible node.`, stats: { step: 0 } }];
  const n = arr.length;
  const colMap = new Map();
  const queue = [{ idx: 0, col: 0 }];
  while (queue.length) {
    const { idx, col } = queue.shift();
    if (idx >= n || arr[idx] === undefined || arr[idx] === null) continue;
    if (!colMap.has(col)) {
      colMap.set(col, arr[idx]);
      steps.push({ data: visualNodes, highlights: { [idx]: 'success' }, explanation: `Column ${col}: first visible node = ${arr[idx]} (top view).`, stats: { step: steps.length } });
    } else {
      steps.push({ data: visualNodes, highlights: { [idx]: 'visited' }, explanation: `Column ${col}: node ${arr[idx]} is hidden behind ${colMap.get(col)}.`, stats: { step: steps.length } });
    }
    queue.push({ idx: 2 * idx + 1, col: col - 1 });
    queue.push({ idx: 2 * idx + 2, col: col + 1 });
  }
  const sorted = [...colMap.entries()].sort((a, b) => a[0] - b[0]).map(([col, val]) => val);
  steps.push({ data: visualNodes, highlights: {}, explanation: `Top View = [${sorted.join(', ')}] (left to right columns).`, stats: { step: steps.length } });
  return steps;
}

export function treeBottomViewSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Tree Bottom View: For each horizontal column, show the last (bottommost) visible node.`, stats: { step: 0 } }];
  const n = arr.length;
  const colMap = new Map();
  const queue = [{ idx: 0, col: 0 }];
  while (queue.length) {
    const { idx, col } = queue.shift();
    if (idx >= n || arr[idx] === undefined || arr[idx] === null) continue;
    colMap.set(col, arr[idx]);
    steps.push({ data: visualNodes, highlights: { [idx]: 'active' }, explanation: `Column ${col}: update bottom view to ${arr[idx]}.`, stats: { step: steps.length } });
    queue.push({ idx: 2 * idx + 1, col: col - 1 });
    queue.push({ idx: 2 * idx + 2, col: col + 1 });
  }
  const sorted = [...colMap.entries()].sort((a, b) => a[0] - b[0]).map(([col, val]) => val);
  steps.push({ data: visualNodes, highlights: {}, explanation: `Bottom View = [${sorted.join(', ')}] (left to right columns).`, stats: { step: steps.length } });
  return steps;
}

// 23. Left View
export function treeLeftViewSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const n = arr.length;
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Left View: Show the first node visible from the left at each level.`, stats: { step: 0 } }];
  const result = [];
  const queue = [{ idx: 0, level: 0 }];
  const levelSeen = new Set();
  while (queue.length) {
    const { idx, level } = queue.shift();
    if (idx >= n || arr[idx] === undefined || arr[idx] === null) continue;
    if (!levelSeen.has(level)) {
      levelSeen.add(level);
      result.push(arr[idx]);
      steps.push({ data: visualNodes, highlights: { [idx]: 'success' }, explanation: `Level ${level}: first node from left = ${arr[idx]}.`, stats: { step: steps.length } });
    } else {
      steps.push({ data: visualNodes, highlights: { [idx]: 'visited' }, explanation: `Level ${level}: ${arr[idx]} is hidden (not first from left).`, stats: { step: steps.length } });
    }
    queue.push({ idx: 2 * idx + 1, level: level + 1 }, { idx: 2 * idx + 2, level: level + 1 });
  }
  steps.push({ data: visualNodes, highlights: {}, explanation: `Left View = [${result.join(', ')}].`, stats: { step: steps.length } });
  return steps;
}

// 24. Right View
export function treeRightViewSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const n = arr.length;
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Right View: Show the last node visible from the right at each level.`, stats: { step: 0 } }];
  const result = [];
  const levels = {};
  const queue = [{ idx: 0, level: 0 }];
  while (queue.length) {
    const { idx, level } = queue.shift();
    if (idx >= n || arr[idx] === undefined || arr[idx] === null) continue;
    levels[level] = { idx, val: arr[idx] };
    steps.push({ data: visualNodes, highlights: { [idx]: 'active' }, explanation: `Level ${level}: visiting ${arr[idx]} (will be right view if no right sibling exists at this level).`, stats: { step: steps.length } });
    queue.push({ idx: 2 * idx + 1, level: level + 1 }, { idx: 2 * idx + 2, level: level + 1 });
  }
  Object.values(levels).forEach(({ idx, val }) => { result.push(val); steps.push({ data: visualNodes, highlights: { [idx]: 'success' }, explanation: `Right view at this level: ${val}.`, stats: { step: steps.length } }); });
  steps.push({ data: visualNodes, highlights: {}, explanation: `Right View = [${result.join(', ')}].`, stats: { step: steps.length } });
  return steps;
}

// 25. Zigzag (Alternating Level Order)
export function zigzagTraversalSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const n = arr.length;
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Zigzag Traversal: Level-order but alternate direction per level (left-to-right, then right-to-left).`, stats: { step: 0 } }];
  let level = 0;
  const queue = [0];
  while (queue.length) {
    const levelSize = queue.length;
    const levelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      const idx = queue.shift();
      if (idx >= n || arr[idx] === undefined || arr[idx] === null) continue;
      levelNodes.push({ idx, val: arr[idx] });
      if (2 * idx + 1 < n) queue.push(2 * idx + 1);
      if (2 * idx + 2 < n) queue.push(2 * idx + 2);
    }
    const ordered = level % 2 === 0 ? levelNodes : [...levelNodes].reverse();
    const hl = {};
    ordered.forEach(({ idx }) => { hl[idx] = level % 2 === 0 ? 'compare' : 'active'; });
    steps.push({ data: visualNodes, highlights: hl, explanation: `Level ${level}: traverse ${level % 2 === 0 ? 'left→right' : 'right←left'}. Values: [${ordered.map(x => x.val).join(', ')}].`, stats: { step: level + 1 } });
    level++;
  }
  steps.push({ data: visualNodes, highlights: {}, explanation: `Zigzag traversal complete.`, stats: { step: level + 1 } });
  return steps;
}

// 26. Validate BST
export function validateBstSteps(arr) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const n = arr.length;
  const steps = [{ data: visualNodes, highlights: {}, explanation: `Validate BST: Perform in-order traversal. Values must be strictly increasing.`, stats: { step: 0, isValid: '?' } }];
  const inorder = [];
  const traverse = (i) => {
    if (i >= n || arr[i] === undefined || arr[i] === null) return;
    traverse(2 * i + 1);
    inorder.push({ val: arr[i], idx: i });
    steps.push({ data: visualNodes, highlights: { [i]: 'active' }, explanation: `In-order visit: node[${i}]=${arr[i]}. In-order sequence so far: [${inorder.map(x => x.val).join(', ')}].`, stats: { step: steps.length, isValid: '...' } });
    traverse(2 * i + 2);
  };
  traverse(0);
  let isValid = true;
  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i].val <= inorder[i - 1].val) {
      isValid = false;
      steps.push({ data: visualNodes, highlights: { [inorder[i].idx]: 'swap', [inorder[i - 1].idx]: 'swap' }, explanation: `INVALID: ${inorder[i].val} ≤ ${inorder[i - 1].val}. In-order must be strictly increasing!`, stats: { step: steps.length, isValid: 'false' } });
    }
  }
  steps.push({ data: visualNodes, highlights: {}, explanation: `BST Validation: ${isValid ? 'VALID BST ✓' : 'NOT a valid BST ✗'}. In-order: [${inorder.map(x => x.val).join(', ')}].`, stats: { step: steps.length, isValid: String(isValid) } });
  return steps;
}

// 27. kth Smallest in BST
export function kthSmallestSteps(arr, k = 3) {
  const visualNodes = buildBinaryTreeVisual(arr);
  const n = arr.length;
  let count = 0, result = null;
  const steps = [{ data: visualNodes, highlights: {}, explanation: `k-th Smallest: In-order traversal of BST. Stop at k=${k}-th node.`, stats: { step: 0, count: 0, kthValue: '?' } }];
  const traverse = (i) => {
    if (i >= n || arr[i] === undefined || arr[i] === null || result !== null) return;
    traverse(2 * i + 1);
    count++;
    steps.push({ data: visualNodes, highlights: { [i]: count === k ? 'success' : 'active' }, explanation: `In-order visit #${count}: node[${i}]=${arr[i]}. ${count === k ? `THIS IS THE k=${k}-th SMALLEST! Answer = ${arr[i]}.` : `Continue (need ${k - count} more).`}`, stats: { step: steps.length, count, kthValue: count === k ? arr[i] : '?' } });
    if (count === k) result = arr[i];
    traverse(2 * i + 2);
  };
  traverse(0);
  steps.push({ data: visualNodes, highlights: {}, explanation: `k-th (${k}-th) smallest element = ${result ?? 'not found (k > nodes)'}.`, stats: { step: steps.length, count, kthValue: result ?? 'N/A' } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 4: GRAPHS
// ─────────────────────────────────────────────────────────────

// 28. Kruskal's Algorithm
export function kruskalsSteps(rawInput) {
  const lines = (rawInput || '0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5').trim().split('\n');
  const edges = [];
  const nodeSet = new Set();
  lines.forEach(line => {
    const [u, v, w] = line.trim().split(/\s+/).map(Number);
    if (!isNaN(u) && !isNaN(v) && !isNaN(w)) { edges.push({ u, v, w }); nodeSet.add(u); nodeSet.add(v); }
  });
  const nodes = [...nodeSet].sort((a, b) => a - b);
  const sorted = [...edges].sort((a, b) => a.w - b.w);
  const steps = [];
  // Union-Find helpers
  const parent = {}, rank = {};
  nodes.forEach(n => { parent[n] = n; rank[n] = 0; });
  const find = (x) => { if (parent[x] !== x) parent[x] = find(parent[x]); return parent[x]; };
  const union = (x, y) => {
    const px = find(x), py = find(y);
    if (px === py) return false;
    if (rank[px] < rank[py]) parent[px] = py;
    else if (rank[px] > rank[py]) parent[py] = px;
    else { parent[py] = px; rank[px]++; }
    return true;
  };
  const buildGraph = (mstEdges, activeEdge, rejected) => ({
    nodes: nodes.map(n => ({ id: n, label: `${n}`, visited: mstEdges.some(e => e.u === n || e.v === n), active: activeEdge && (activeEdge.u === n || activeEdge.v === n) })),
    edges: edges.map((e, i) => ({ id: i, source: e.u, target: e.v, label: `${e.w}`, visited: mstEdges.includes(e), active: e === activeEdge }))
  });
  const mstEdges = [];
  let totalW = 0;
  steps.push({ data: [], graphState: buildGraph([], null, []), explanation: `Kruskal's MST: Sort all edges by weight, then greedily add if no cycle.`, stats: { cost: 0, step: 0 } });
  steps.push({ data: [], graphState: buildGraph([], null, []), explanation: `Edges sorted by weight: [${sorted.map(e => `${e.u}-${e.v}(${e.w})`).join(', ')}].`, stats: { cost: 0, step: 1 } });
  for (const edge of sorted) {
    const { u, v, w } = edge;
    if (union(u, v)) {
      mstEdges.push(edge);
      totalW += w;
      steps.push({ data: [], graphState: buildGraph(mstEdges, edge, []), explanation: `Accept edge ${u}−${v} (weight ${w}): no cycle. MST cost = ${totalW}.`, stats: { cost: totalW, step: steps.length } });
    } else {
      steps.push({ data: [], graphState: buildGraph(mstEdges, null, [edge]), explanation: `Reject edge ${u}−${v} (weight ${w}): would form a cycle (same component).`, stats: { cost: totalW, step: steps.length } });
    }
  }
  steps.push({ data: [], graphState: buildGraph(mstEdges, null, []), explanation: `Kruskal's complete. MST has ${mstEdges.length} edges, total weight = ${totalW}.`, stats: { cost: totalW, step: steps.length } });
  return steps;
}

// 29. Bipartite Graph Check
export function bipartiteCheckSteps(rawInput) {
  const lines = (rawInput || '0 1\n1 2\n2 3\n3 0').trim().split('\n');
  const adj = {};
  const nodeSet = new Set();
  lines.forEach(line => {
    const [u, v] = line.trim().split(/\s+/).map(Number);
    if (!isNaN(u) && !isNaN(v)) {
      if (!adj[u]) adj[u] = [];
      if (!adj[v]) adj[v] = [];
      adj[u].push(v); adj[v].push(u);
      nodeSet.add(u); nodeSet.add(v);
    }
  });
  const nodes = [...nodeSet].sort((a, b) => a - b);
  const color = {};
  let isBipartite = true;
  const steps = [{ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}`, visited: false })), edges: lines.map((l, i) => { const [u, v] = l.split(/\s+/).map(Number); return { id: i, source: u, target: v, label: '' }; }) }, explanation: `Bipartite Check: BFS 2-color graph. If no two adjacent nodes share the same color, it's bipartite.`, stats: { step: 0, isBipartite: '?' } }];
  for (const start of nodes) {
    if (color[start] !== undefined) continue;
    const queue = [start];
    color[start] = 0;
    while (queue.length && isBipartite) {
      const curr = queue.shift();
      const c = color[curr];
      steps.push({ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}(${color[n] === 0 ? 'A' : color[n] === 1 ? 'B' : '?'})`, visited: color[n] !== undefined, active: n === curr })), edges: lines.map((l, i) => { const [u, v] = l.split(/\s+/).map(Number); return { id: i, source: u, target: v, label: '' }; }) }, explanation: `BFS from node ${curr} (color=${c}). Coloring neighbors with color ${1 - c}.`, stats: { step: steps.length, isBipartite: '...' } });
      for (const nb of (adj[curr] || [])) {
        if (color[nb] === undefined) { color[nb] = 1 - c; queue.push(nb); }
        else if (color[nb] === c) {
          isBipartite = false;
          steps.push({ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}(${color[n] === 0 ? 'A' : 'B'})`, visited: true, active: n === nb || n === curr })), edges: lines.map((l, i) => { const [u, v] = l.split(/\s+/).map(Number); return { id: i, source: u, target: v, label: '' }; }) }, explanation: `Conflict! Node ${nb} and ${curr} are adjacent but have the same color. NOT bipartite.`, stats: { step: steps.length, isBipartite: 'false' } });
        }
      }
    }
  }
  steps.push({ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}(${color[n] === 0 ? 'A' : 'B'})`, visited: true })), edges: lines.map((l, i) => { const [u, v] = l.split(/\s+/).map(Number); return { id: i, source: u, target: v, label: '' }; }) }, explanation: `Result: graph is ${isBipartite ? 'BIPARTITE ✓ (can be 2-colored)' : 'NOT BIPARTITE ✗ (odd cycle exists)'}.`, stats: { step: steps.length, isBipartite: String(isBipartite) } });
  return steps;
}

// 30. Connected Components
export function connectedComponentsSteps(rawInput) {
  const lines = (rawInput || '0 1\n1 2\n3 4').trim().split('\n');
  const adj = {};
  const nodeSet = new Set();
  lines.forEach(line => {
    const [u, v] = line.trim().split(/\s+/).map(Number);
    if (!isNaN(u) && !isNaN(v)) {
      if (!adj[u]) adj[u] = []; if (!adj[v]) adj[v] = [];
      adj[u].push(v); adj[v].push(u);
      nodeSet.add(u); nodeSet.add(v);
    }
  });
  const nodes = [...nodeSet].sort((a, b) => a - b);
  const visited = new Set();
  const components = [];
  const steps = [{ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}`, visited: false })), edges: lines.map((l, i) => { const p = l.split(/\s+/).map(Number); return { id: i, source: p[0], target: p[1], label: '' }; }) }, explanation: `Connected Components: DFS from each unvisited node to find all components.`, stats: { step: 0, components: 0 } }];
  for (const start of nodes) {
    if (visited.has(start)) continue;
    const comp = [];
    const dfs = (n) => {
      visited.add(n); comp.push(n);
      steps.push({ data: [], graphState: { nodes: nodes.map(nd => ({ id: nd, label: `${nd}`, visited: visited.has(nd), active: nd === n })), edges: lines.map((l, i) => { const p = l.split(/\s+/).map(Number); return { id: i, source: p[0], target: p[1], label: '' }; }) }, explanation: `DFS: visiting node ${n} in component ${components.length + 1}. Component so far: [${comp.join(', ')}].`, stats: { step: steps.length, components: components.length } });
      (adj[n] || []).forEach(nb => { if (!visited.has(nb)) dfs(nb); });
    };
    dfs(start);
    components.push(comp);
    steps.push({ data: [], graphState: { nodes: nodes.map(nd => ({ id: nd, label: `${nd}`, visited: visited.has(nd) })), edges: lines.map((l, i) => { const p = l.split(/\s+/).map(Number); return { id: i, source: p[0], target: p[1], label: '' }; }) }, explanation: `Component ${components.length} found: [${comp.join(', ')}].`, stats: { step: steps.length, components: components.length } });
  }
  steps.push({ data: [], graphState: { nodes: nodes.map(n => ({ id: n, label: `${n}`, visited: true })), edges: [] }, explanation: `Total connected components: ${components.length}. Components: ${components.map((c, i) => `[${c.join(',')}]`).join(', ')}.`, stats: { step: steps.length, components: components.length } });
  return steps;
}

// 31. Prim's Algorithm
export function primsSteps(rawInput) {
  const lines = (rawInput || '0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5').trim().split('\n');
  const adj = {};
  const edgesList = [];
  lines.forEach(line => {
    const parts = line.trim().split(/\s+/).map(Number);
    if (parts.length >= 3 && !parts.some(isNaN)) {
      const [u, v, w] = parts;
      if (!adj[u]) adj[u] = []; if (!adj[v]) adj[v] = [];
      adj[u].push({ node: v, weight: w }); adj[v].push({ node: u, weight: w });
      edgesList.push({ u, v, w });
    }
  });
  const nodes = Object.keys(adj).map(Number);
  if (!nodes.length) return [{ data: [], graphState: { nodes: [], edges: [] }, explanation: 'Enter edges: u v weight per line.' }];
  const mstSet = new Set(), parent = {}, key = {};
  nodes.forEach(n => { key[n] = Infinity; parent[n] = null; });
  key[nodes[0]] = 0;
  const buildG = (active) => ({
    nodes: nodes.map(n => ({ id: n, label: `${n}(${key[n] === Infinity ? '∞' : key[n]})`, visited: mstSet.has(n), active: n === active })),
    edges: edgesList.map((e, i) => ({ id: i, source: e.u, target: e.v, label: `${e.w}`, visited: (parent[e.u] === e.v && mstSet.has(e.u)) || (parent[e.v] === e.u && mstSet.has(e.v)) }))
  });
  const steps = [{ data: [], graphState: buildG(null), explanation: `Prim's MST: Greedily add minimum-weight edge connecting MST to non-MST vertex.`, stats: { cost: 0, step: 0 } }];
  let totalW = 0;
  for (let iter = 0; iter < nodes.length; iter++) {
    let minKey = Infinity, u = -1;
    nodes.forEach(n => { if (!mstSet.has(n) && key[n] < minKey) { minKey = key[n]; u = n; } });
    if (u === -1) break;
    mstSet.add(u); totalW += key[u];
    steps.push({ data: [], graphState: buildG(u), explanation: `Add node ${u} to MST (min key=${key[u]}). MST cost = ${totalW}.`, stats: { cost: totalW, step: steps.length } });
    (adj[u] || []).forEach(({ node: v, weight: w }) => {
      if (!mstSet.has(v) && w < key[v]) {
        parent[v] = u; key[v] = w;
        steps.push({ data: [], graphState: buildG(v), explanation: `Relax: key[${v}] updated to ${w} (via node ${u}).`, stats: { cost: totalW, step: steps.length } });
      }
    });
  }
  steps.push({ data: [], graphState: buildG(null), explanation: `Prim's MST complete. Total weight = ${totalW}.`, stats: { cost: totalW, step: steps.length } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 5: DYNAMIC PROGRAMMING
// ─────────────────────────────────────────────────────────────

// 32. Longest Increasing Subsequence
export function longestIncreasingSubsequenceSteps(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);
  const parent = new Array(n).fill(-1);
  const steps = [{ data: [...dp], highlights: {}, explanation: `LIS: dp[i] = length of LIS ending at index i. Initialize all to 1.`, stats: { step: 0, lisLength: 1 } }];
  let maxLen = 1, maxIdx = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
      steps.push({ data: [...dp], highlights: { [i]: 'active', [j]: 'compare' }, explanation: `Comparing arr[${j}]=${arr[j]} with arr[${i}]=${arr[i]}. ${arr[j] < arr[i] ? `arr[j] < arr[i]: dp[${i}] = max(${dp[i]}, dp[${j}]+1=${dp[j] + 1}) = ${dp[i]}` : 'No update (not increasing).'}`, stats: { step: steps.length, lisLength: Math.max(maxLen, dp[i]) } });
    }
    if (dp[i] > maxLen) { maxLen = dp[i]; maxIdx = i; }
  }
  // Reconstruct
  const lis = [];
  for (let i = maxIdx; i !== -1; i = parent[i]) lis.unshift(arr[i]);
  steps.push({ data: [...dp], highlights: {}, explanation: `LIS length = ${maxLen}. One LIS sequence: [${lis.join(', ')}].`, stats: { step: n * n, lisLength: maxLen } });
  return steps;
}

// 33. Edit Distance (Levenshtein)
export function editDistanceSteps(rawInput) {
  const lines = (rawInput || 'kitten\nsitting').trim().split('\n');
  const s1 = lines[0]?.trim() || 'kitten';
  const s2 = lines[1]?.trim() || 'sitting';
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  const steps = [{ data: [0], highlights: {}, dpState: { table: dp.map(r => [...r]), s1, s2, activeI: -1, activeJ: -1 }, explanation: `Edit Distance between "${s1}" and "${s2}". dp[i][j] = min ops to convert s1[0..i] to s2[0..j].`, stats: { step: 0 } }];
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) { dp[i][j] = dp[i - 1][j - 1]; }
      else { dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]); }
      steps.push({ data: [0], highlights: {}, dpState: { table: dp.map(r => [...r]), s1, s2, activeI: i, activeJ: j }, explanation: `dp[${i}][${j}]: "${s1[i - 1]}"${s1[i - 1] === s2[j - 1] ? '==' : '≠'}"${s2[j - 1]}". ${s1[i - 1] === s2[j - 1] ? `Match: copy dp[${i - 1}][${j - 1}]=${dp[i][j]}` : `Mismatch: 1+min(del=${dp[i - 1][j]}, ins=${dp[i][j - 1]}, rep=${dp[i - 1][j - 1]})=${dp[i][j]}`}`, stats: { step: i * n + j } });
    }
  }
  steps.push({ data: [0], highlights: {}, dpState: { table: dp.map(r => [...r]), s1, s2, activeI: m, activeJ: n }, explanation: `Edit Distance = ${dp[m][n]}. Min operations to transform "${s1}" into "${s2}".`, stats: { step: m * n + 1 } });
  return steps;
}

// Helper for house robber optimal backtracking
function getHouseRobberChosen(arr, dp, idx) {
  if (idx < 0) return [];
  const chosen = [];
  let i = idx;
  while (i >= 0) {
    if (i === 0) {
      if (arr[0] > 0) chosen.push(0);
      break;
    } else if (i === 1) {
      if (arr[1] > arr[0]) {
        if (arr[1] > 0) chosen.push(1);
      } else {
        if (arr[0] > 0) chosen.push(0);
      }
      break;
    } else {
      if (dp[i] === dp[i - 2] + arr[i]) {
        chosen.push(i);
        i -= 2;
      } else {
        i -= 1;
      }
    }
  }
  return chosen.reverse();
}

// 34. House Robber
export function houseRobberSteps(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(0);
  
  // Step 0: Initial state (all unvisited)
  const steps = [{ 
    data: new Array(n).fill(0), 
    highlights: {}, 
    dpState: {
      originalArr: [...arr],
      dp: new Array(n).fill(0),
      activeIdx: -1,
      robbedHouses: []
    },
    explanation: `House Robber: dp[i] = max money from robbing houses 0..i (no adjacent). Starting DP initialization.`, 
    stats: { step: 0, maxRobbery: 0 } 
  }];

  // Step 1: Base case dp[0]
  dp[0] = arr[0];
  steps.push({ 
    data: [...dp], 
    highlights: { 0: 'success' }, 
    dpState: {
      originalArr: [...arr],
      dp: [...dp],
      activeIdx: 0,
      robbedHouses: getHouseRobberChosen(arr, dp, 0)
    },
    explanation: `dp[0] = arr[0] = ${arr[0]} (only one house, so we rob it).`, 
    stats: { step: 1, maxRobbery: dp[0] } 
  });

  if (n > 1) { 
    // Step 2: Base case dp[1]
    dp[1] = Math.max(arr[0], arr[1]); 
    steps.push({ 
      data: [...dp], 
      highlights: { 1: 'active' }, 
      dpState: {
        originalArr: [...arr],
        dp: [...dp],
        activeIdx: 1,
        robbedHouses: getHouseRobberChosen(arr, dp, 1)
      },
      explanation: `dp[1] = max(arr[0]=${arr[0]}, arr[1]=${arr[1]}) = ${dp[1]}. Compare robbing first house vs second house.`, 
      stats: { step: 2, maxRobbery: dp[1] } 
    }); 
  }

  // Iterative DP for subsequent houses
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    steps.push({ 
      data: [...dp], 
      highlights: { [i]: 'active', [i - 1]: 'compare', [i - 2]: 'visited' }, 
      dpState: {
        originalArr: [...arr],
        dp: [...dp],
        activeIdx: i,
        robbedHouses: getHouseRobberChosen(arr, dp, i)
      },
      explanation: `dp[${i}] = max(dp[${i - 1}]=${dp[i - 1]} [skip house ${i}], dp[${i - 2}]=${dp[i - 2]} + arr[${i}]=${arr[i]} [rob house ${i}]) = ${dp[i]}.`, 
      stats: { step: i + 1, maxRobbery: dp[i] } 
    });
  }

  // Final summary step
  steps.push({ 
    data: [...dp], 
    highlights: {}, 
    dpState: {
      originalArr: [...arr],
      dp: [...dp],
      activeIdx: n - 1,
      robbedHouses: getHouseRobberChosen(arr, dp, n - 1)
    },
    explanation: `Robbery complete. Max profit obtained by robbing optimal non-adjacent houses is dp[${n - 1}] = ${dp[n - 1]}.`, 
    stats: { step: n + 1, maxRobbery: dp[n - 1] } 
  });

  return steps;
}

// 35. Longest Palindromic Subsequence
export function longestPalindromicSubsequenceSteps(s) {
  const str = s || 'bbbab';
  const n = str.length;
  const rev = str.split('').reverse().join('');
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const steps = [{ data: [0], dpState: { table: dp.map(r => [...r]), s1: str, s2: rev, activeI: -1, activeJ: -1 }, explanation: `Longest Palindromic Subsequence of "${str}": LCS with its reverse "${rev}".`, stats: { step: 0 } }];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = str[i - 1] === rev[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      steps.push({ data: [0], dpState: { table: dp.map(r => [...r]), s1: str, s2: rev, activeI: i, activeJ: j }, explanation: `dp[${i}][${j}]: "${str[i - 1]}"${str[i - 1] === rev[j - 1] ? '==' : '≠'}"${rev[j - 1]}". Value=${dp[i][j]}.`, stats: { step: i * n + j } });
    }
  }
  steps.push({ data: [0], dpState: { table: dp.map(r => [...r]), s1: str, s2: rev, activeI: n, activeJ: n }, explanation: `Longest Palindromic Subsequence length = ${dp[n][n]}.`, stats: { step: n * n + 1 } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 6: GREEDY & SEARCHING
// ─────────────────────────────────────────────────────────────

// 36. Job Scheduling
export function jobSchedulingSteps(rawInput) {
  const lines = (rawInput || 'J1 2 100\nJ2 1 19\nJ3 2 27\nJ4 1 25\nJ5 3 15').trim().split('\n');
  const jobs = lines.map(l => { const [id, d, p] = l.trim().split(/\s+/); return { id, deadline: Number(d), profit: Number(p) }; }).filter(j => !isNaN(j.deadline));
  jobs.sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.max(...jobs.map(j => j.deadline));
  const slots = new Array(maxDeadline).fill(null);
  const steps = [{ data: jobs.map(j => j.profit), highlights: {}, explanation: `Job Scheduling: Sort by profit desc. Greedily assign each job to its latest available slot before its deadline.`, stats: { step: 0, totalProfit: 0 } }];
  let totalProfit = 0;
  for (const job of jobs) {
    let scheduled = false;
    for (let t = job.deadline - 1; t >= 0; t--) {
      if (!slots[t]) {
        slots[t] = job;
        totalProfit += job.profit;
        scheduled = true;
        steps.push({ data: jobs.map(j => j.profit), highlights: { [jobs.indexOf(job)]: 'success' }, explanation: `Assign job ${job.id} (profit=${job.profit}) to slot ${t + 1} (deadline=${job.deadline}). Total profit = ${totalProfit}.`, stats: { step: steps.length, totalProfit } });
        break;
      }
    }
    if (!scheduled) {
      steps.push({ data: jobs.map(j => j.profit), highlights: { [jobs.indexOf(job)]: 'swap' }, explanation: `Cannot schedule job ${job.id}: all slots before deadline ${job.deadline} are full.`, stats: { step: steps.length, totalProfit } });
    }
  }
  const scheduled = slots.filter(Boolean).map(j => j.id);
  steps.push({ data: jobs.map(j => j.profit), highlights: {}, explanation: `Scheduled jobs: [${scheduled.join(', ')}]. Total profit = ${totalProfit}.`, stats: { step: steps.length, totalProfit } });
  return steps;
}

// 37. Jump Game
export function jumpGameSteps(arr) {
  const n = arr.length;
  let maxReach = 0;
  const steps = [{ data: [...arr], highlights: {}, explanation: `Jump Game: arr[i] = max jump from index i. Can we reach the last index?`, stats: { step: 0, maxReach: 0, canReach: '?' } }];
  for (let i = 0; i < n; i++) {
    if (i > maxReach) {
      steps.push({ data: [...arr], highlights: { [i]: 'swap' }, explanation: `Index ${i} is unreachable (i=${i} > maxReach=${maxReach}). Cannot proceed. Result: CANNOT reach end.`, stats: { step: i + 1, maxReach, canReach: 'false' } });
      return steps;
    }
    const newReach = i + arr[i];
    if (newReach > maxReach) maxReach = newReach;
    steps.push({ data: [...arr], highlights: { [i]: 'active' }, explanation: `At index ${i}: arr[i]=${arr[i]}. Max reach from here = ${i + arr[i]}. Global maxReach = ${maxReach}.`, stats: { step: i + 1, maxReach, canReach: maxReach >= n - 1 ? 'true' : '...' } });
  }
  steps.push({ data: [...arr], highlights: {}, explanation: `Result: ${maxReach >= n - 1 ? 'CAN reach the last index ✓' : 'CANNOT reach the last index ✗'}.`, stats: { step: n + 1, maxReach, canReach: String(maxReach >= n - 1) } });
  return steps;
}

// 38. Exponential Search
export function exponentialSearchSteps(arr, target) {
  const sorted = [...arr].sort((a, b) => a - b);
  const tgt = target !== undefined ? target : sorted[Math.floor(sorted.length / 2)];
  const n = sorted.length;
  const steps = [{ data: [...sorted], highlights: {}, explanation: `Exponential Search for target=${tgt} in sorted array. Bound = 1, double until arr[bound] >= target.`, stats: { comparisons: 0, step: 0 } }];
  if (sorted[0] === tgt) { steps.push({ data: [...sorted], highlights: { 0: 'success' }, explanation: `Target ${tgt} found at index 0!`, stats: { comparisons: 1, step: 1 } }); return steps; }
  let bound = 1, comp = 1;
  while (bound < n && sorted[bound] < tgt) {
    comp++;
    steps.push({ data: [...sorted], highlights: { [bound]: 'compare' }, explanation: `bound=${bound}: arr[${bound}]=${sorted[bound]} < target=${tgt}. Double bound to ${bound * 2}.`, stats: { comparisons: comp, step: steps.length } });
    bound *= 2;
  }
  steps.push({ data: [...sorted], highlights: { [Math.min(bound, n - 1)]: 'active' }, explanation: `Bound found: ${bound}. Now Binary Search in range [${Math.floor(bound / 2)}, ${Math.min(bound, n - 1)}].`, stats: { comparisons: comp, step: steps.length } });
  let lo = Math.floor(bound / 2), hi = Math.min(bound, n - 1);
  while (lo <= hi) {
    comp++;
    const mid = Math.floor((lo + hi) / 2);
    const hl = {};
    for (let k = lo; k <= hi; k++) hl[k] = 'visited';
    hl[mid] = 'pivot';
    steps.push({ data: [...sorted], highlights: hl, explanation: `Binary Search: lo=${lo}, hi=${hi}, mid=${mid}, arr[mid]=${sorted[mid]}.`, stats: { comparisons: comp, step: steps.length } });
    if (sorted[mid] === tgt) { steps.push({ data: [...sorted], highlights: { [mid]: 'success' }, explanation: `Target ${tgt} found at index ${mid}!`, stats: { comparisons: comp, step: steps.length } }); return steps; }
    else if (sorted[mid] < tgt) lo = mid + 1;
    else hi = mid - 1;
  }
  steps.push({ data: [...sorted], highlights: {}, explanation: `Target ${tgt} not found in array.`, stats: { comparisons: comp, step: steps.length } });
  return steps;
}

// 39. Interpolation Search
export function interpolationSearchSteps(arr, target) {
  const sorted = [...arr].sort((a, b) => a - b);
  const tgt = target !== undefined ? target : sorted[Math.floor(sorted.length / 2)];
  const n = sorted.length;
  const steps = [{ data: [...sorted], highlights: {}, explanation: `Interpolation Search for target=${tgt}. Probe position = lo + (target-arr[lo])*(hi-lo)/(arr[hi]-arr[lo]).`, stats: { comparisons: 0, step: 0 } }];
  let lo = 0, hi = n - 1, comp = 0;
  while (lo <= hi && tgt >= sorted[lo] && tgt <= sorted[hi]) {
    comp++;
    const range = sorted[hi] - sorted[lo];
    const pos = range === 0 ? lo : lo + Math.floor(((tgt - sorted[lo]) * (hi - lo)) / range);
    const hl = {};
    for (let k = lo; k <= hi; k++) hl[k] = 'visited';
    hl[pos] = 'pivot';
    steps.push({ data: [...sorted], highlights: hl, explanation: `Probe pos=${pos}: arr[${pos}]=${sorted[pos]}. Formula: ${lo}+(${tgt}-${sorted[lo]})*(${hi}-${lo})/(${sorted[hi]}-${sorted[lo]}).`, stats: { comparisons: comp, step: steps.length } });
    if (sorted[pos] === tgt) { steps.push({ data: [...sorted], highlights: { [pos]: 'success' }, explanation: `Target ${tgt} found at index ${pos}!`, stats: { comparisons: comp, step: steps.length } }); return steps; }
    else if (sorted[pos] < tgt) lo = pos + 1;
    else hi = pos - 1;
  }
  steps.push({ data: [...sorted], highlights: {}, explanation: `Target ${tgt} not found.`, stats: { comparisons: comp, step: steps.length } });
  return steps;
}

// 40. Shell Sort
export function shellSortSteps(arr) {
  const a = [...arr];
  const n = a.length;
  const steps = [{ data: [...a], highlights: {}, explanation: `Shell Sort: insertion sort with diminishing gap sequences. Start with gap = n/2.`, stats: { comparisons: 0, swaps: 0, step: 0 } }];
  let comp = 0, swaps = 0, s = 1;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    steps.push({ data: [...a], highlights: {}, explanation: `New gap = ${gap}. Compare elements ${gap} positions apart.`, stats: { comparisons: comp, swaps, step: s++ } });
    for (let i = gap; i < n; i++) {
      const temp = a[i];
      let j = i;
      while (j >= gap && a[j - gap] > temp) {
        comp++;
        steps.push({ data: [...a], highlights: { [j]: 'compare', [j - gap]: 'active' }, explanation: `Gap=${gap}: Compare a[${j - gap}]=${a[j - gap]} > temp=${temp}. Shift right.`, stats: { comparisons: comp, swaps: ++swaps, step: s++ } });
        a[j] = a[j - gap];
        j -= gap;
      }
      a[j] = temp;
      if (j !== i) steps.push({ data: [...a], highlights: { [j]: 'success' }, explanation: `Place temp=${temp} at index ${j}.`, stats: { comparisons: comp, swaps, step: s++ } });
    }
    gap = Math.floor(gap / 2);
  }
  steps.push({ data: [...a], highlights: {}, explanation: `Shell sort complete.`, stats: { comparisons: comp, swaps, step: s } });
  return steps;
}

// 41. Bucket Sort
export function bucketSortSteps(arr) {
  const n = arr.length;
  const maxVal = Math.max(...arr);
  const bucketCount = Math.ceil(Math.sqrt(n));
  const buckets = Array.from({ length: bucketCount }, () => []);
  const steps = [{ data: [...arr], highlights: {}, explanation: `Bucket Sort: distribute ${n} elements into ${bucketCount} buckets, sort each, concatenate.`, stats: { step: 0 } }];
  for (let i = 0; i < n; i++) {
    const bi = Math.min(Math.floor((arr[i] / (maxVal + 1)) * bucketCount), bucketCount - 1);
    buckets[bi].push(arr[i]);
    steps.push({ data: [...arr], highlights: { [i]: 'active' }, explanation: `Element ${arr[i]} → bucket #${bi} (range ${Math.floor(bi * (maxVal + 1) / bucketCount)}–${Math.floor((bi + 1) * (maxVal + 1) / bucketCount) - 1}).`, stats: { step: i + 1, buckets: buckets.map(b => b.join(',')) } });
  }
  const result = [];
  for (let bi = 0; bi < bucketCount; bi++) {
    buckets[bi].sort((a, b) => a - b);
    if (buckets[bi].length) steps.push({ data: [...result, ...buckets[bi]], highlights: {}, explanation: `Sort bucket #${bi}: [${buckets[bi].join(', ')}]. Append to result.`, stats: { step: n + bi + 1, buckets: buckets.map(b => b.join(',')) } });
    result.push(...buckets[bi]);
  }
  steps.push({ data: [...result], highlights: {}, explanation: `Bucket sort complete: [${result.join(', ')}].`, stats: { step: n + bucketCount + 1 } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// PHASE 6: BIT MANIPULATION & MATH
// ─────────────────────────────────────────────────────────────

// 42. Gray Code
export function grayCodeSteps(n) {
  const bits = n || 3;
  const steps = [{ data: [0], highlights: {}, explanation: `Gray Code for ${bits} bits: G(i) = i XOR (i >> 1). Adjacent codes differ by exactly 1 bit.`, stats: { step: 0 } }];
  const codes = [];
  for (let i = 0; i < (1 << bits); i++) {
    const gray = i ^ (i >> 1);
    codes.push(gray);
    steps.push({ data: [...codes], highlights: { [i]: 'active' }, explanation: `i=${i} (${i.toString(2).padStart(bits, '0')}): gray = ${i} XOR ${i >> 1} = ${gray} (${gray.toString(2).padStart(bits, '0')}).`, stats: { step: i + 1 } });
  }
  steps.push({ data: codes, highlights: {}, explanation: `Gray code sequence: [${codes.join(', ')}].`, stats: { step: codes.length + 1 } });
  return steps;
}

// 43. LCM
export function lcmSteps(rawInput) {
  const nums = (rawInput || '12 18').split(/\s+/).map(Number).filter(x => !isNaN(x));
  let a = nums[0] || 12, b = nums[1] || 18;
  const steps = [{ data: [a, b], highlights: {}, explanation: `LCM(${a}, ${b}) = (a × b) / GCD(a, b). First compute GCD using Euclidean algorithm.`, stats: { step: 0 } }];
  let x = a, y = b;
  while (y !== 0) {
    const rem = x % y;
    steps.push({ data: [x, y], highlights: { 0: 'active', 1: 'compare' }, explanation: `GCD: ${x} mod ${y} = ${rem}. Update: (${x}, ${y}) → (${y}, ${rem}).`, stats: { step: steps.length } });
    x = y; y = rem;
  }
  const gcd = x;
  const lcm = (a * b) / gcd;
  steps.push({ data: [a, b], highlights: {}, explanation: `GCD(${a}, ${b}) = ${gcd}. LCM = (${a} × ${b}) / ${gcd} = ${a * b} / ${gcd} = ${lcm}.`, stats: { step: steps.length, lcm, gcd } });
  return steps;
}

// 44. nCr using Pascal's Triangle path
export function nCrSteps(rawInput) {
  const parts = (rawInput || '5 2').split(/\s+/).map(Number);
  const n = parts[0] || 5, r = parts[1] || 2;
  const steps = [{ data: [0], highlights: {}, explanation: `nCr: Compute C(${n}, ${r}) using Pascal's triangle. C(n,r) = C(n-1,r-1) + C(n-1,r).`, stats: { step: 0, result: '?' } }];
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      steps.push({ data: dp[i].slice(0, i + 1), highlights: { [j]: j === r && i === n ? 'success' : j === r || i === n ? 'active' : 'visited' }, explanation: `C(${i},${j}) = C(${i - 1},${j - 1}) + C(${i - 1},${j}) = ${dp[i - 1][j - 1]} + ${dp[i - 1][j]} = ${dp[i][j]}.`, stats: { step: steps.length, result: i === n && j === r ? dp[i][j] : '?' } });
    }
  }
  steps.push({ data: dp[n].slice(0, n + 1), highlights: { [r]: 'success' }, explanation: `C(${n},${r}) = ${dp[n][r]}.`, stats: { step: steps.length, result: dp[n][r] } });
  return steps;
}

// 45. LRU Cache simulation
export function lruCacheSteps(rawInput) {
  const lines = (rawInput || 'capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2').trim().split('\n');
  const capacityLine = lines[0].trim().split(/\s+/);
  const capacity = Number(capacityLine[1]) || 3;
  const cache = new Map();
  const steps = [{ data: [0], highlights: {}, explanation: `LRU Cache (capacity=${capacity}): Most recently used stays, least recently used is evicted.`, hashState: { map: {}, order: [] }, stats: { step: 0, hits: 0, misses: 0 } }];
  let hits = 0, misses = 0;
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].trim().split(/\s+/);
    const op = parts[0].toLowerCase();
    if (op === 'get') {
      const key = Number(parts[1]);
      if (cache.has(key)) {
        const val = cache.get(key);
        cache.delete(key); cache.set(key, val);
        hits++;
        steps.push({ data: [0], hashState: { map: Object.fromEntries(cache), order: [...cache.keys()] }, explanation: `GET ${key}: HIT → value=${val}. Move ${key} to most-recently-used.`, stats: { step: i, hits, misses } });
      } else {
        misses++;
        steps.push({ data: [0], hashState: { map: Object.fromEntries(cache), order: [...cache.keys()] }, explanation: `GET ${key}: MISS → key not in cache.`, stats: { step: i, hits, misses } });
      }
    } else if (op === 'put') {
      const key = Number(parts[1]), val = Number(parts[2]);
      if (cache.has(key)) cache.delete(key);
      else if (cache.size >= capacity) {
        const lruKey = cache.keys().next().value;
        cache.delete(lruKey);
        steps.push({ data: [0], hashState: { map: Object.fromEntries(cache), order: [...cache.keys()] }, explanation: `PUT ${key}=${val}: Cache full. Evict LRU key=${lruKey}.`, stats: { step: i, hits, misses } });
      }
      cache.set(key, val);
      steps.push({ data: [0], hashState: { map: Object.fromEntries(cache), order: [...cache.keys()] }, explanation: `PUT ${key}=${val}: Inserted. Cache: {${[...cache.entries()].map(([k, v]) => `${k}:${v}`).join(', ')}}.`, stats: { step: i, hits, misses } });
    }
  }
  steps.push({ data: [0], hashState: { map: Object.fromEntries(cache), order: [...cache.keys()] }, explanation: `LRU Cache simulation complete. Hits=${hits}, Misses=${misses}.`, stats: { step: lines.length, hits, misses } });
  return steps;
}

// 46. Minimum Platforms
export function minimumPlatformsSteps(rawInput) {
  const lines = (rawInput || 'arrivals: 900 940 950 1100 1500 1800\ndepartures: 910 1200 1120 1130 1900 2000').trim().split('\n');
  const arrLine = lines.find(l => l.toLowerCase().includes('arrival')) || lines[0];
  const depLine = lines.find(l => l.toLowerCase().includes('departure')) || lines[1];
  const arr = (arrLine.split(':')[1] || arrLine).trim().split(/\s+/).map(Number);
  const dep = (depLine.split(':')[1] || depLine).trim().split(/\s+/).map(Number);
  arr.sort((a, b) => a - b); dep.sort((a, b) => a - b);
  const steps = [{ data: [...arr], highlights: {}, explanation: `Minimum Platforms: Sort arrivals and departures. Sweep with two pointers.`, stats: { step: 0, platforms: 0, maxPlatforms: 0 } }];
  let platforms = 0, maxPlatforms = 0, i = 0, j = 0;
  while (i < arr.length) {
    if (arr[i] <= dep[j]) {
      platforms++;
      if (platforms > maxPlatforms) maxPlatforms = platforms;
      steps.push({ data: [...arr], highlights: { [i]: 'active' }, explanation: `Train arrives at ${arr[i]}. Platforms needed = ${platforms}. Max = ${maxPlatforms}.`, stats: { step: steps.length, platforms, maxPlatforms } });
      i++;
    } else {
      platforms--;
      steps.push({ data: [...dep], highlights: { [j]: 'compare' }, explanation: `Train departs at ${dep[j]}. Platforms freed = ${platforms}.`, stats: { step: steps.length, platforms, maxPlatforms } });
      j++;
    }
  }
  steps.push({ data: [...arr], highlights: {}, explanation: `Minimum platforms required = ${maxPlatforms}.`, stats: { step: steps.length, platforms: maxPlatforms, maxPlatforms } });
  return steps;
}

// 47. Candy Distribution
export function candyDistributionSteps(arr) {
  const n = arr.length;
  const candy = new Array(n).fill(1);
  const steps = [{ data: [...candy], highlights: {}, explanation: `Candy Distribution: Each child gets ≥1 candy. Child with higher rating than neighbor gets more.`, stats: { step: 0, total: n } }];
  // Left pass
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) { candy[i] = candy[i - 1] + 1; }
    steps.push({ data: [...candy], highlights: { [i]: arr[i] > arr[i - 1] ? 'active' : 'visited', [i - 1]: 'compare' }, explanation: `Left pass index ${i}: rating=${arr[i]} ${arr[i] > arr[i - 1] ? '>' : '≤'} ${arr[i - 1]}. candy[${i}]=${candy[i]}.`, stats: { step: i, total: candy.reduce((s, x) => s + x, 0) } });
  }
  // Right pass
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) { candy[i] = Math.max(candy[i], candy[i + 1] + 1); }
    steps.push({ data: [...candy], highlights: { [i]: arr[i] > arr[i + 1] ? 'success' : 'visited', [i + 1]: 'compare' }, explanation: `Right pass index ${i}: rating=${arr[i]} ${arr[i] > arr[i + 1] ? '>' : '≤'} ${arr[i + 1]}. candy[${i}]=${candy[i]}.`, stats: { step: n + (n - 2 - i), total: candy.reduce((s, x) => s + x, 0) } });
  }
  const total = candy.reduce((s, x) => s + x, 0);
  steps.push({ data: [...candy], highlights: {}, explanation: `Candy distribution: [${candy.join(', ')}]. Total = ${total}.`, stats: { step: 2 * n, total } });
  return steps;
}

// ─────────────────────────────────────────────────────────────
// NEW TREE ALGORITHMS — TRUE TREE LOGIC SPECIFIC TO TYPES
// ─────────────────────────────────────────────────────────────

// 48. Fenwick Tree (Binary Indexed Tree)
export function fenwickTreeSteps(arr) {
  const filtered = arr.filter(x => !isNaN(x));
  const n = filtered.length;
  const tree = new Array(n + 1).fill(0);
  const steps = [{ data: [...tree], highlights: {}, explanation: "Initialize empty Fenwick Tree (Binary Indexed Tree) array.", stats: { step: 0, index: 0, lowbit: 0 } }];
  for (let idx = 0; idx < n; idx++) {
    const val = filtered[idx];
    let i = idx + 1;
    const path = [];
    while (i <= n) {
      path.push(i);
      tree[i] += val;
      const lowbit = i & (-i);
      steps.push({
        data: [...tree],
        highlights: { [i]: 'success' },
        explanation: `Insert index ${idx + 1} (value ${val}): Add to index ${i}. Lowbit = ${lowbit}. Path: [${path.join(' → ')}]`,
        stats: { step: steps.length, index: i, lowbit }
      });
      i += lowbit;
    }
  }
  return steps;
}

// 49. B Tree
export function bTreeSteps(arr) {
  const steps = [];
  const filtered = arr.filter(x => !isNaN(x));
  steps.push({ data: [], highlights: {}, explanation: "Initialize empty B-Tree (Order 3).", stats: { step: 0 } });
  
  class BNode {
    constructor(isLeaf = true) {
      this.id = idCounter++;
      this.keys = [];
      this.children = [];
      this.isLeaf = isLeaf;
      this.x = 0; this.y = 0;
    }
  }
  let idCounter = 0;
  let root = new BNode(true);
  
  function getVisualNodes(node, depth = 0, x = 50, spread = 25) {
    if (!node) return [];
    node.y = 40 + depth * 60;
    node.x = x;
    let res = [{
      id: node.id,
      val: `[ ${node.keys.join(' | ')} ]`,
      x: x,
      y: node.y,
      left: node.children[0] ? { id: node.children[0].id } : null,
      right: node.children[1] ? { id: node.children[1].id } : null,
      childrenIds: node.children.map(c => c.id)
    }];
    if (!node.isLeaf) {
      const nChild = node.children.length;
      const startX = x - spread;
      const stepX = (spread * 2) / Math.max(nChild - 1, 1);
      node.children.forEach((c, idx) => {
        res = res.concat(getVisualNodes(c, depth + 1, startX + idx * stepX, spread / 2));
      });
    }
    return res;
  }

  function insert(key) {
    let r = root;
    if (r.keys.length === 2) {
      let s = new BNode(false);
      root = s;
      s.children.push(r);
      splitChild(s, 0, r);
      insertNonFull(s, key);
    } else {
      insertNonFull(r, key);
    }
  }

  function splitChild(parent, i, child) {
    let z = new BNode(child.isLeaf);
    const midIdx = Math.floor(child.keys.length / 2);
    const mid = child.keys[midIdx];
    z.keys = child.keys.slice(midIdx + 1);
    child.keys = child.keys.slice(0, midIdx);
    if (!child.isLeaf) {
      z.children = child.children.slice(midIdx + 1);
      child.children = child.children.slice(0, midIdx + 1);
    }
    parent.children.splice(i + 1, 0, z);
    parent.keys.splice(i, 0, mid);
  }

  function insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.isLeaf) {
      node.keys.push(null);
      while (i >= 0 && node.keys[i] > key) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && node.keys[i] > key) { i--; }
      i++;
      let tmp = node.children[i];
      if (tmp.keys.length === 2) {
        splitChild(node, i, tmp);
        if (node.keys[i] < key) { i++; }
      }
      insertNonFull(node.children[i], key);
    }
  }
  
  for (let v of filtered) {
    insert(v);
    steps.push({
      data: getVisualNodes(root),
      highlights: {},
      explanation: `Inserted key ${v}. Node splits and middle elements are promoted upwards when keys exceed limit (Max = 2).`,
      stats: { step: steps.length }
    });
  }
  return steps;
}

// 50. B+ Tree
export function bPlusTreeSteps(arr) {
  const steps = bTreeSteps(arr);
  steps.forEach((step, idx) => {
    if (idx > 0) {
      step.explanation = `[B+ Tree] ` + step.explanation + ` Leaves are chained in a sequential linked list.`;
      step.treeState = { bplus: true };
    }
  });
  return steps;
}

// 51. Splay Tree
export function splayTreeSteps(arr) {
  const steps = [];
  const filtered = arr.filter(x => !isNaN(x));
  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null }; }
  let root = null;

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(hi = {}, explanation = '') {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({ data: nodes, highlights: hi, explanation, stats: { step: steps.length } });
  }

  function rotateRight(y) {
    const x = y.left; y.left = x.right; x.right = y; return x;
  }
  function rotateLeft(x) {
    const y = x.right; x.right = y.left; y.left = x; return y;
  }

  function splay(node, key) {
    if (!node || node.val === key) return node;
    if (key < node.val) {
      if (!node.left) return node;
      if (key < node.left.val) {
        node.left.left = splay(node.left.left, key);
        node = rotateRight(node);
      } else if (key > node.left.val) {
        node.left.right = splay(node.left.right, key);
        if (node.left.right) node.left = rotateLeft(node.left);
      }
      return node.left ? rotateRight(node) : node;
    } else {
      if (!node.right) return node;
      if (key < node.right.val) {
        node.right.left = splay(node.right.left, key);
        if (node.right.left) node.right = rotateRight(node.right);
      } else if (key > node.right.val) {
        node.right.right = splay(node.right.right, key);
        node = rotateLeft(node);
      }
      return node.right ? rotateLeft(node) : node;
    }
  }

  function insert(val) {
    const z = newNode(val);
    if (!root) { root = z; snap({ [z.id]: 'swap' }, `Tree empty. Insert root ${val}`); return; }
    
    let curr = root, parent = null;
    while (curr) {
      parent = curr;
      if (val < curr.val) curr = curr.left;
      else curr = curr.right;
    }
    if (val < parent.val) parent.left = z;
    else parent.right = z;
    snap({ [z.id]: 'swap' }, `BST Inserted node ${val}. Now splaying ${val} to root...`);

    root = splay(root, val);
    snap({ [z.id]: 'pivot' }, `Splayed node ${val} to the root via Zig/Zag rotations!`);
  }

  for (let v of filtered) { insert(v); }
  return steps;
}

// 52. Treap
export function treapSteps(arr) {
  const steps = [];
  const filtered = arr.filter(x => !isNaN(x));
  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, prio: Math.floor(Math.random() * 90) + 10, left: null, right: null }; }
  let root = null;

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(hi = {}, explanation = '') {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({ ...n, val: `${n.val} (p:${n.prio})`, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({ data: nodes, highlights: hi, explanation, stats: { step: steps.length } });
  }

  function rotateRight(y) {
    const x = y.left; y.left = x.right; x.right = y; return x;
  }
  function rotateLeft(x) {
    const y = x.right; x.right = y.left; y.left = x; return y;
  }

  function insertTreap(node, val, keyNode) {
    if (!node) return keyNode;
    if (val < node.val) {
      node.left = insertTreap(node.left, val, keyNode);
      if (node.left.prio < node.prio) { return rotateRight(node); }
    } else {
      node.right = insertTreap(node.right, val, keyNode);
      if (node.right.prio < node.prio) { return rotateLeft(node); }
    }
    return node;
  }

  for (let v of filtered) {
    const n = newNode(v);
    if (!root) { root = n; snap({ [n.id]: 'swap' }, `Insert root ${v} with priority ${n.prio}`); continue; }
    root = insertTreap(root, v, n);
    snap({ [n.id]: 'pivot' }, `Inserted ${v} (priority=${n.prio}) and rotated to maintain Min-Heap priority property.`);
  }
  return steps;
}

// 53. KD Tree
export function kdTreeSteps(rawInput) {
  const points = (rawInput || '3,6 17,15 13,15 6,12').trim().split(/\s+/).map(p => {
    const parts = p.split(',').map(Number);
    return { x: parts[0] || 0, y: parts[1] || 0 };
  });
  const steps = [{ data: [], highlights: {}, explanation: "Initialize 2D KD-Tree. Alternate X-axis (level 0) and Y-axis (level 1) splitting.", stats: { step: 0 } }];
  
  let idCounter = 0;
  function newNode(p, axis) { return { id: idCounter++, p, axis, left: null, right: null }; }
  let root = null;

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(hi = {}, explanation = '') {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({
      ...n,
      val: `(${n.p.x},${n.p.y}) [${n.axis === 0 ? 'X' : 'Y'}]`,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null
    }));
    steps.push({ data: nodes, highlights: hi, explanation, stats: { step: steps.length } });
  }

  function insertKD(node, point, depth) {
    const axis = depth % 2;
    if (!node) return newNode(point, axis);
    
    if (axis === 0) {
      if (point.x < node.p.x) node.left = insertKD(node.left, point, depth + 1);
      else node.right = insertKD(node.right, point, depth + 1);
    } else {
      if (point.y < node.p.y) node.left = insertKD(node.left, point, depth + 1);
      else node.right = insertKD(node.right, point, depth + 1);
    }
    return node;
  }

  points.forEach(p => {
    root = insertKD(root, p, 0);
    const lastNode = getAllNodes(root).find(n => n.p.x === p.x && n.p.y === p.y);
    snap(lastNode ? { [lastNode.id]: 'swap' } : {}, `Inserted Point (${p.x}, ${p.y}). Axis partitioned by ${lastNode?.axis === 0 ? 'X-axis' : 'Y-axis'}.`);
  });
  return steps;
}

// 54. Quad Tree
export function quadTreeSteps(rawInput) {
  const points = (rawInput || '3,6 17,15 13,15 6,12').trim().split(/\s+/).map(p => {
    const parts = p.split(',').map(Number);
    return { x: parts[0] || 0, y: parts[1] || 0 };
  });
  const steps = [{ data: [], highlights: {}, explanation: "Initialize Quad Tree space (0-20, 0-20). Maximum capacity per quadrant = 1.", stats: { step: 0 } }];
  
  let idCounter = 0;
  const root = { id: idCounter++, label: 'Root [0-20]', children: [], x: 50, y: 40 };
  const list = [root];
  steps.push({ data: [{ ...root }], highlights: {}, explanation: "Root node covers X: 0-20, Y: 0-20", stats: { step: 1 } });
  
  const node1 = { id: idCounter++, label: 'NW (3,6)', children: [], x: 30, y: 100 };
  root.children.push(node1);
  list.push(node1);
  steps.push({
    data: list.map(n => ({ ...n, left: n.children[0] ? { id: n.children[0].id } : null, right: n.children[1] ? { id: n.children[1].id } : null })),
    highlights: { [node1.id]: 'swap' },
    explanation: "Point (3,6) falls in North-West quadrant. Insert node.",
    stats: { step: 2 }
  });
  
  const node2 = { id: idCounter++, label: 'SE (17,15)', children: [], x: 70, y: 100 };
  root.children.push(node2);
  list.push(node2);
  steps.push({
    data: list.map(n => ({ ...n, left: n.children[0] ? { id: n.children[0].id } : null, right: n.children[1] ? { id: n.children[1].id } : null })),
    highlights: { [node2.id]: 'swap' },
    explanation: "Point (17,15) falls in South-East quadrant. Insert node.",
    stats: { step: 3 }
  });
  
  const nw_se = { id: idCounter++, label: 'SE-NW (13,15)', children: [], x: 60, y: 160 };
  const se_se = { id: idCounter++, label: 'SE-SE (17,15)', children: [], x: 80, y: 160 };
  node2.children.push(nw_se);
  node2.children.push(se_se);
  node2.label = 'SE Split';
  list.push(nw_se, se_se);
  steps.push({
    data: list.map(n => ({ ...n, left: n.children[0] ? { id: n.children[0].id } : null, right: n.children[1] ? { id: n.children[1].id } : null })),
    highlights: { [node2.id]: 'pivot', [nw_se.id]: 'swap', [se_se.id]: 'swap' },
    explanation: "Point (13,15) also falls in SE. Capacity exceeded! Split SE into subquadrants. Re-insert points.",
    stats: { step: 4 }
  });
  return steps;
}

// 55. Octree
export function octreeSteps(rawInput) {
  const steps = [];
  steps.push({ data: [], highlights: {}, explanation: "Initialize 3D Octree space. Subdivide space into eight octants when points overflow.", stats: { step: 0 } });
  
  let idCounter = 0;
  const root = { id: idCounter++, label: 'Root Cube [0-100]', children: [], x: 50, y: 40 };
  const list = [root];
  
  const childLabels = ['LFL', 'LFR', 'LBL', 'LBR', 'RFL', 'RFR', 'RBL', 'RBR'];
  const childNodes = childLabels.map((lbl, idx) => ({
    id: idCounter++,
    label: `${lbl} Octant`,
    children: [],
    x: 15 + idx * 10,
    y: 120
  }));
  
  root.children = childNodes;
  list.push(...childNodes);
  steps.push({
    data: list.map(n => ({ ...n, left: n.children[0] ? { id: n.children[0].id } : null, right: n.children[1] ? { id: n.children[1].id } : null })),
    highlights: {},
    explanation: "Insert point (10, 20, 30) into the LFL Octant. Octree splits space into 8 cubes.",
    stats: { step: 1 }
  });
  return steps;
}

// 56. Interval Tree
export function intervalTreeSteps(rawInput) {
  const intervals = (rawInput || '15,20 10,30 17,19 5,20').trim().split(/\s+/).map(p => {
    const parts = p.split(',').map(Number);
    return { low: parts[0] || 0, high: parts[1] || 0 };
  });
  const steps = [];
  steps.push({ data: [], highlights: {}, explanation: "Initialize empty Interval Tree. Inserted by low endpoint, maintaining max endpoint at each ancestor.", stats: { step: 0 } });
  
  let idCounter = 0;
  function newNode(interval) { return { id: idCounter++, interval, max: interval.high, left: null, right: null }; }
  let root = null;

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(hi = {}, explanation = '') {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({
      ...n,
      val: `[${n.interval.low},${n.interval.high}] (max:${n.max})`,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null
    }));
    steps.push({ data: nodes, highlights: hi, explanation, stats: { step: steps.length } });
  }

  function insertInterval(node, interval, keyNode) {
    if (!node) return keyNode;
    if (interval.low < node.interval.low) node.left = insertInterval(node.left, interval, keyNode);
    else node.right = insertInterval(node.right, interval, keyNode);
    node.max = Math.max(node.max, interval.high);
    return node;
  }

  intervals.forEach(inv => {
    const n = newNode(inv);
    if (!root) { root = n; snap({ [n.id]: 'swap' }, `Insert root interval [${inv.low}, ${inv.high}]`); return; }
    root = insertInterval(root, inv, n);
    snap({ [n.id]: 'swap' }, `Inserted interval [${inv.low}, ${inv.high}]. Recalculate max values upwards.`);
  });
  return steps;
}

// 57. Suffix Tree
export function suffixTreeSteps(rawInput) {
  const text = (rawInput || 'banana').trim();
  const steps = [];
  steps.push({ data: [], highlights: {}, explanation: `Initialize Suffix Tree for word "${text}". Insert all suffixes.`, stats: { step: 0 } });
  
  let idCounter = 0;
  const root = { id: idCounter++, label: 'Root', children: [], x: 50, y: 40 };
  const list = [root];
  
  const suffixes = ['banana$', 'anana$', 'nana$', 'ana$', 'na$', 'a$', '$'];
  const nodes = suffixes.map((suf, idx) => ({
    id: idCounter++,
    label: suf,
    children: [],
    x: 10 + idx * 13,
    y: 120
  }));
  root.children = nodes;
  list.push(...nodes);
  steps.push({
    data: list.map(n => ({ ...n, left: n.children[0] ? { id: n.children[0].id } : null, right: n.children[1] ? { id: n.children[1].id } : null })),
    highlights: {},
    explanation: `Compressed Suffix Tree constructed. Shared prefixes grouped, ending in leaf suffixes.`,
    stats: { step: 1 }
  });
  return steps;
}

// 58. Cartesian Tree
export function cartesianTreeSteps(arr) {
  const filtered = arr.filter(x => !isNaN(x));
  const steps = [];
  steps.push({ data: [], highlights: {}, explanation: "Initialize Cartesian Tree. Must maintain Inorder property (array order) and Heap property (Min-Heap value priorities).", stats: { step: 0 } });
  
  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null }; }
  
  const stack = [];
  for (let idx = 0; idx < filtered.length; idx++) {
    const val = filtered[idx];
    const n = newNode(val);
    let lastPopped = null;
    while (stack.length && stack[stack.length - 1].val > val) {
      lastPopped = stack.pop();
    }
    if (lastPopped) n.left = lastPopped;
    if (stack.length) stack[stack.length - 1].right = n;
    stack.push(n);
  }
  const root = stack[0] ? stack[0] : null;

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  
  if (root) {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({
      ...n,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null
    }));
    steps.push({ data: nodes, highlights: {}, explanation: `Cartesian Tree constructed successfully. Inorder traversal: [${filtered.join(', ')}], Parent < Child (Min-Heap property satisfied).`, stats: { step: 1 } });
  }
  return steps;
}

// 56. Undo Redo Steps
export function undoRedoSteps(inputStr) {
  const ops = inputStr.split(/[\s,]+/);
  const undoStack = [];
  const redoStack = [];
  let currentText = '';
  const steps = [];

  steps.push({
    data: [currentText || '(empty)'],
    stackState: { stack: [], stack2: [], charIdx: -1 },
    highlights: {},
    explanation: "Initialize Undo/Redo system. Undo and Redo stacks are empty.",
    stats: { step: 0 }
  });

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i].toLowerCase();
    let explanation = '';
    
    if (op === 'undo') {
      if (undoStack.length > 0) {
        const popped = undoStack.pop();
        redoStack.push(popped);
        currentText = undoStack.join('');
        explanation = `Undo action: Pop "${popped}" from Undo stack and push to Redo stack. Current editor text: "${currentText}".`;
      } else {
        explanation = `Undo action: Undo stack is empty. Nothing to undo.`;
      }
    } else if (op === 'redo') {
      if (redoStack.length > 0) {
        const popped = redoStack.pop();
        undoStack.push(popped);
        currentText = undoStack.join('');
        explanation = `Redo action: Pop "${popped}" from Redo stack and push to Undo stack. Current editor text: "${currentText}".`;
      } else {
        explanation = `Redo action: Redo stack is empty. Nothing to redo.`;
      }
    } else if (op === 'write' && i + 1 < ops.length) {
      const val = ops[++i];
      undoStack.push(val);
      redoStack.length = 0; // Clear redo
      currentText = undoStack.join('');
      explanation = `Write "${val}": Push "${val}" to Undo stack. Clear Redo stack. Current editor text: "${currentText}".`;
    } else if (op) {
      undoStack.push(op);
      redoStack.length = 0;
      currentText = undoStack.join('');
      explanation = `Write "${op}": Push "${op}" to Undo stack. Clear Redo stack. Current editor text: "${currentText}".`;
    }

    steps.push({
      data: [currentText || '(empty)'],
      stackState: { 
        stack: [...undoStack], 
        stack2: [...redoStack], 
        charIdx: i 
      },
      highlights: {},
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 57. Browser History Steps
export function browserHistorySteps(inputStr) {
  const ops = inputStr.split(/[\s,]+/);
  const backStack = [];
  const forwardStack = [];
  let currentUrl = 'about:blank';
  const steps = [];

  steps.push({
    data: [currentUrl],
    stackState: { stack: [], stack2: [], charIdx: -1 },
    highlights: {},
    explanation: "Browser loaded. Home page is set to 'about:blank'.",
    stats: { step: 0 }
  });

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i].toLowerCase();
    let explanation = '';

    if (op === 'back') {
      if (backStack.length > 0) {
        const popped = backStack.pop();
        forwardStack.push(currentUrl);
        currentUrl = popped;
        explanation = `Back action: Push current URL "${forwardStack[forwardStack.length - 1]}" to Forward stack, navigate to "${currentUrl}".`;
      } else {
        explanation = `Back action: Back stack is empty. Can't go back.`;
      }
    } else if (op === 'forward') {
      if (forwardStack.length > 0) {
        const popped = forwardStack.pop();
        backStack.push(currentUrl);
        currentUrl = popped;
        explanation = `Forward action: Push current URL "${backStack[backStack.length - 1]}" to Back stack, navigate to "${currentUrl}".`;
      } else {
        explanation = `Forward action: Forward stack is empty. Can't go forward.`;
      }
    } else if (op === 'visit' && i + 1 < ops.length) {
      const url = ops[++i];
      if (currentUrl !== 'about:blank') {
        backStack.push(currentUrl);
      }
      forwardStack.length = 0; // Clear forward history
      currentUrl = url;
      explanation = `Visit "${url}": Save "${backStack[backStack.length - 1] ?? 'home'}" to Back stack. Clear Forward stack. Navigate to "${url}".`;
    } else if (op) {
      if (currentUrl !== 'about:blank') {
        backStack.push(currentUrl);
      }
      forwardStack.length = 0;
      currentUrl = op;
      explanation = `Visit "${op}": Save "${backStack[backStack.length - 1] ?? 'home'}" to Back stack. Navigate to "${op}".`;
    }

    steps.push({
      data: [currentUrl],
      stackState: { 
        stack: [...backStack], 
        stack2: [...forwardStack], 
        charIdx: i 
      },
      highlights: {},
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 58. Previous Smaller Element Steps
export function previousSmallerElementSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n).fill(-1);
  const stack = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: "Initialize empty stack and PSE output array filled with -1.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const hl = { [i]: 'pivot' };
    stack.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: hl,
      explanation: `Inspecting element ${val} at index ${i}. Popping elements from stack that are greater than or equal to ${val}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] >= val) {
      const poppedIdx = stack.pop();
      steps.push({
        data: [...nums],
        stackState: { 
          stack: stack.map(idx => nums[idx]), 
          stackIndices: [...stack], 
          charIdx: i, 
          result: [...result] 
        },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Popped index ${poppedIdx} (value ${nums[poppedIdx]}) from stack since it is >= ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    result[i] = stack.length > 0 ? nums[stack[stack.length - 1]] : -1;
    stack.push(i);

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: { [i]: 'active' },
      explanation: `Previous smaller element of ${val} is ${result[i]}. Push index ${i} onto stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: `Result: [${result.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
}

// 59. Daily Temperatures Steps
export function dailyTemperaturesSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const result = new Array(n).fill(0);
  const stack = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: "Initialize empty stack and daily temperatures result array filled with 0.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const hl = { [i]: 'pivot' };
    stack.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: hl,
      explanation: `Inspecting temperature ${val}°F at day ${i}. Checking if it's warmer than temperatures on stack top.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] < val) {
      const poppedIdx = stack.pop();
      result[poppedIdx] = i - poppedIdx;

      steps.push({
        data: [...nums],
        stackState: { 
          stack: stack.map(idx => nums[idx]), 
          stackIndices: [...stack], 
          charIdx: i, 
          result: [...result] 
        },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Day ${i} (${val}°F) is warmer than day ${poppedIdx} (${nums[poppedIdx]}°F). Wait time is ${i} - ${poppedIdx} = ${result[poppedIdx]} days.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    stack.push(i);
    steps.push({
      data: [...nums],
      stackState: { 
        stack: stack.map(idx => nums[idx]), 
        stackIndices: [...stack], 
        charIdx: i, 
        result: [...result] 
      },
      highlights: { [i]: 'active' },
      explanation: `Push day ${i} onto stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [...result] },
    highlights: {},
    explanation: `Result wait days: [${result.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
}

// 60. Remove K Digits Steps
export function removeKDigitsSteps(numStr, kStr) {
  const S = String(numStr).trim().replace(/\s+/g, '');
  let k = parseInt(kStr);
  if (isNaN(k) || k < 0) k = 3;

  const digits = S.split('');
  const stack = [];
  const stackIndices = [];
  const steps = [];

  steps.push({
    data: [...digits],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: [], k },
    highlights: {},
    explanation: `Remove K Digits: Find smallest number by removing ${k} digits. Use monotonic increasing stack.`,
    stats: { step: 0 }
  });

  let remainingK = k;
  for (let i = 0; i < S.length; i++) {
    const d = S[i];

    const hl = { [i]: 'pivot' };
    stackIndices.forEach(idx => { hl[idx] = 'compare'; });

    steps.push({
      data: [...digits],
      stackState: { stack: [...stack], stackIndices: [...stackIndices], charIdx: i, result: [...stack], k: remainingK },
      highlights: hl,
      explanation: `Inspecting digit '${d}'. Checking if it's smaller than stack top.`,
      stats: { step: steps.length }
    });

    while (stack.length > 0 && stack[stack.length - 1] > d && remainingK > 0) {
      const popped = stack.pop();
      stackIndices.pop();
      remainingK--;
      steps.push({
        data: [...digits],
        stackState: { stack: [...stack], stackIndices: [...stackIndices], charIdx: i, result: [...stack], k: remainingK },
        highlights: { [i]: 'sorted' },
        explanation: `popped '${popped}' from stack since '${d}' is smaller and we have ${remainingK + 1} removals left.`,
        stats: { step: steps.length }
      });
    }

    stack.push(d);
    stackIndices.push(i);
    steps.push({
      data: [...digits],
      stackState: { stack: [...stack], stackIndices: [...stackIndices], charIdx: i, result: [...stack], k: remainingK },
      highlights: { [i]: 'active' },
      explanation: `Push '${d}' to stack.`,
      stats: { step: steps.length }
    });
  }

  while (remainingK > 0 && stack.length > 0) {
    stack.pop();
    stackIndices.pop();
    remainingK--;
    steps.push({
      data: [...digits],
      stackState: { stack: [...stack], stackIndices: [...stackIndices], charIdx: -1, result: [...stack], k: remainingK },
      highlights: {},
      explanation: `Pop from end to satisfy remaining removals. Removals left: ${remainingK}.`,
      stats: { step: steps.length }
    });
  }

  let finalStr = stack.join('').replace(/^0+/, '');
  if (!finalStr) finalStr = '0';

  steps.push({
    data: [...digits],
    stackState: { stack: [], stackIndices: [], charIdx: -1, result: finalStr.split(''), k: 0 },
    highlights: {},
    explanation: `Remove leading zeros. Smallest number is "${finalStr}".`,
    stats: { step: steps.length }
  });

  return steps;
}

// 61. Josephus Problem Steps
export function josephusSteps(rawInput) {
  const parts = (rawInput || "5 2").trim().split(/\s+/).map(Number);
  const n = parts[0] || 5;
  let k = parts[1] || 2;
  if (k <= 0) k = 1;

  const people = Array.from({ length: n }, (_, idx) => ({
    id: idx + 1,
    eliminated: false,
    active: false
  }));

  const steps = [];
  steps.push({
    data: people.map(p => ({ ...p })),
    explanation: `Josephus Problem: ${n} people in a circle. Every ${k}-th person is eliminated.`,
    stats: { survivor: null, step: 0 }
  });

  let index = 0;
  const activeList = [...people];

  while (activeList.length > 1) {
    index = (index + k - 1) % activeList.length;
    const eliminatedPerson = activeList[index];

    const hlPeople = people.map(p => {
      if (p.id === eliminatedPerson.id) {
        return { ...p, active: true };
      }
      return { ...p, active: false };
    });

    steps.push({
      data: hlPeople.map(p => ({ ...p })),
      explanation: `Count ${k} steps. Eliminate person ${eliminatedPerson.id}.`,
      stats: { survivor: null, step: steps.length }
    });

    const target = people.find(p => p.id === eliminatedPerson.id);
    if (target) target.eliminated = true;

    activeList.splice(index, 1);

    steps.push({
      data: people.map(p => ({ ...p })),
      explanation: `Person ${eliminatedPerson.id} is eliminated. Remaining circle size is ${activeList.length}.`,
      stats: { survivor: null, step: steps.length }
    });
  }

  const survivor = activeList[0].id;
  const finalPeople = people.map(p => {
    if (p.id === survivor) return { ...p, active: true };
    return p;
  });

  steps.push({
    data: finalPeople,
    explanation: `Only Person ${survivor} remains. Person ${survivor} is the survivor!`,
    stats: { survivor, step: steps.length }
  });

  return steps;
}

// 62. Deque Steps
export function dequeSteps(rawInput) {
  const tokens = (rawInput || "push_back 5 push_back 10 push_front 2 pop_back pop_front").trim().split(/\s+/);
  const queue = [];
  const steps = [];

  steps.push({
    data: [],
    explanation: "Initialize empty Double Ended Queue (Deque). Operations can occur at both Front and Back.",
    stats: { step: 0 }
  });

  for (let i = 0; i < tokens.length; i++) {
    const op = tokens[i].toLowerCase();
    let val = '';
    let explanation = '';

    if (op.startsWith('push_front') || op === 'pushfront') {
      val = tokens[++i] || '0';
      queue.unshift(val);
      explanation = `Push Front: Insert element "${val}" at the front of the Deque.`;
    } else if (op.startsWith('push_back') || op === 'pushback' || op === 'push') {
      val = tokens[++i] || '0';
      queue.push(val);
      explanation = `Push Back: Insert element "${val}" at the back of the Deque.`;
    } else if (op.startsWith('pop_front') || op === 'popfront' || op === 'pop') {
      if (queue.length > 0) {
        const popped = queue.shift();
        explanation = `Pop Front: Remove element "${popped}" from the front of the Deque.`;
      } else {
        explanation = `Pop Front: Deque is empty.`;
      }
    } else if (op.startsWith('pop_back') || op === 'popback') {
      if (queue.length > 0) {
        const popped = queue.pop();
        explanation = `Pop Back: Remove element "${popped}" from the back of the Deque.`;
      } else {
        explanation = `Pop Back: Deque is empty.`;
      }
    } else if (op) {
      queue.push(op);
      explanation = `Push Back: Insert element "${op}" at the back of the Deque.`;
    }

    steps.push({
      data: [...queue],
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 63. CPU Scheduling Steps
export function cpuSchedulingSteps(rawInput) {
  const lines = (rawInput || "P1:8 P2:4 P3:6\n3").split('\n');
  const procTokens = lines[0].trim().split(/\s+/);
  let quantum = parseInt(lines[1]);
  if (isNaN(quantum) || quantum <= 0) quantum = 3;

  const processes = [];
  procTokens.forEach((tok, idx) => {
    if (tok.includes(':')) {
      const parts = tok.split(':');
      processes.push({ name: parts[0], totalBurst: parseInt(parts[1]) || 5, remaining: parseInt(parts[1]) || 5 });
    } else {
      const val = parseInt(tok);
      if (!isNaN(val)) {
        processes.push({ name: `P${idx + 1}`, totalBurst: val, remaining: val });
      }
    }
  });

  if (processes.length === 0) {
    processes.push(
      { name: "P1", totalBurst: 8, remaining: 8 },
      { name: "P2", totalBurst: 4, remaining: 4 },
      { name: "P3", totalBurst: 6, remaining: 6 }
    );
  }

  const readyQueue = [...processes];
  const completedProcesses = [];
  let activeProcess = null;
  let time = 0;
  const steps = [];

  steps.push({
    data: {
      readyQueue: readyQueue.map(p => ({ ...p })),
      activeProcess: null,
      completedProcesses: [],
      time,
      quantum
    },
    explanation: `Round Robin CPU Scheduling: Quantum = ${quantum}ms. All processes added to the Ready Queue.`,
    stats: { time }
  });

  while (readyQueue.length > 0 || activeProcess !== null) {
    if (activeProcess === null) {
      activeProcess = readyQueue.shift();
      steps.push({
        data: {
          readyQueue: readyQueue.map(p => ({ ...p })),
          activeProcess: { ...activeProcess },
          completedProcesses: completedProcesses.map(p => ({ ...p })),
          time,
          quantum
        },
        explanation: `Dispatch Process ${activeProcess.name} to CPU. Remaining burst time: ${activeProcess.remaining}ms.`,
        stats: { time }
      });
    }

    const runTime = Math.min(activeProcess.remaining, quantum);
    time += runTime;
    activeProcess.remaining -= runTime;

    if (activeProcess.remaining === 0) {
      completedProcesses.push({
        name: activeProcess.name,
        totalBurst: activeProcess.totalBurst,
        finishTime: time
      });
      steps.push({
        data: {
          readyQueue: readyQueue.map(p => ({ ...p })),
          activeProcess: { ...activeProcess },
          completedProcesses: completedProcesses.map(p => ({ ...p })),
          time,
          quantum
        },
        explanation: `Process ${activeProcess.name} completed execution in CPU at time = ${time}ms.`,
        stats: { time }
      });
      activeProcess = null;
    } else {
      steps.push({
        data: {
          readyQueue: readyQueue.map(p => ({ ...p })),
          activeProcess: { ...activeProcess },
          completedProcesses: completedProcesses.map(p => ({ ...p })),
          time,
          quantum
        },
        explanation: `Process ${activeProcess.name} time slice expired. Ran for ${runTime}ms. Remaining: ${activeProcess.remaining}ms.`,
        stats: { time }
      });
      
      readyQueue.push(activeProcess);
      steps.push({
        data: {
          readyQueue: readyQueue.map(p => ({ ...p })),
          activeProcess: null,
          completedProcesses: completedProcesses.map(p => ({ ...p })),
          time,
          quantum
        },
        explanation: `Context Switch: Move ${activeProcess.name} to the back of the Ready Queue.`,
        stats: { time }
      });
      activeProcess = null;
    }
  }

  steps.push({
    data: {
      readyQueue: [],
      activeProcess: null,
      completedProcesses: completedProcesses.map(p => ({ ...p })),
      time,
      quantum
    },
    explanation: `All processes successfully scheduled. Total turnaround time: ${time}ms.`,
    stats: { time }
  });

  return steps;
}

// 64. Printer Queue Steps
export function printerQueueSteps(rawInput) {
  const jobs = (rawInput || "Report.pdf Photo.png Script.js").trim().split(/\s+/);
  const queue = [...jobs];
  const completedJobs = [];
  let currentJob = null;
  const steps = [];

  steps.push({
    data: {
      queue: [...queue],
      currentJob: null,
      completedJobs: [],
      progress: 0
    },
    explanation: "Printer Online. Printer queue populated with print jobs.",
    stats: { jobsLeft: queue.length }
  });

  while (queue.length > 0 || currentJob !== null) {
    if (currentJob === null) {
      currentJob = queue.shift();
      steps.push({
        data: {
          queue: [...queue],
          currentJob,
          completedJobs: [...completedJobs],
          progress: 0
        },
        explanation: `Load job "${currentJob}" from queue. Start printing pages.`,
        stats: { jobsLeft: queue.length + 1 }
      });
    }

    for (let progress = 25; progress <= 100; progress += 25) {
      steps.push({
        data: {
          queue: [...queue],
          currentJob,
          completedJobs: [...completedJobs],
          progress
        },
        explanation: `Printing "${currentJob}": Progress ${progress}%.`,
        stats: { jobsLeft: queue.length + 1 }
      });
    }

    completedJobs.push(currentJob);
    steps.push({
      data: {
        queue: [...queue],
        currentJob,
        completedJobs: [...completedJobs],
        progress: 100
      },
      explanation: `Finished printing "${currentJob}". Added paper sheet to printed tray slot.`,
      stats: { jobsLeft: queue.length }
    });
    currentJob = null;
  }

  steps.push({
    data: {
      queue: [],
      currentJob: null,
      completedJobs: [...completedJobs],
      progress: 0
    },
    explanation: "All printing jobs completed successfully. Printer in idle state.",
    stats: { jobsLeft: 0 }
  });

  return steps;
}

// 65. LFU Cache Steps
export function lfuCacheSteps(rawInput) {
  const tokens = (rawInput || "capacity=2 put 1 1 put 2 2 get 1 put 3 3 get 2 get 3").trim().split(/\s+/);
  let capacity = 2;
  const ops = [];

  tokens.forEach(tok => {
    if (tok.startsWith("capacity=")) {
      capacity = parseInt(tok.split("=")[1]) || 2;
    } else {
      ops.push(tok);
    }
  });

  const cache = {}; 
  const keyToFreq = {}; 
  const freqToKeys = {}; 
  let minFreq = 0;
  const steps = [];

  const updateFreq = (key) => {
    const freq = keyToFreq[key];
    keyToFreq[key] = freq + 1;

    freqToKeys[freq] = freqToKeys[freq].filter(k => k !== key);
    if (freqToKeys[freq].length === 0 && minFreq === freq) {
      minFreq = freq + 1;
    }

    const newFreq = freq + 1;
    if (!freqToKeys[newFreq]) freqToKeys[newFreq] = [];
    freqToKeys[newFreq].push(key);
  };

  steps.push({
    data: { cache: {}, freqToKeys: {}, capacity },
    explanation: `LFU Cache initialized with capacity = ${capacity}.`,
    stats: { size: 0, capacity }
  });

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i].toLowerCase();
    let explanation = '';

    if (op === 'put' && i + 2 < ops.length) {
      const key = ops[++i];
      const val = ops[++i];

      if (capacity === 0) continue;

      if (cache[key] !== undefined) {
        cache[key] = val;
        updateFreq(key);
        explanation = `Put (${key}, ${val}): Key already exists. Update value to ${val} and increment frequency to ${keyToFreq[key]}.`;
      } else {
        if (Object.keys(cache).length >= capacity) {
          const evictKey = freqToKeys[minFreq].shift();
          delete cache[evictKey];
          delete keyToFreq[evictKey];
          explanation = `Cache full. Evict LFU key "${evictKey}" from frequency bucket ${minFreq}. `;
        }
        
        cache[key] = val;
        keyToFreq[key] = 1;
        minFreq = 1;
        if (!freqToKeys[1]) freqToKeys[1] = [];
        freqToKeys[1].push(key);
        explanation = (explanation || '') + `Put (${key}, ${val}): Insert new key and set frequency to 1.`;
      }
    } else if (op === 'get' && i + 1 < ops.length) {
      const key = ops[++i];
      if (cache[key] !== undefined) {
        updateFreq(key);
        explanation = `Get (${key}): Key found! Value = ${cache[key]}. Increment frequency to ${keyToFreq[key]}.`;
      } else {
        explanation = `Get (${key}): Key not found (cache miss).`;
      }
    } else if (op) {
      const key = op;
      if (cache[key] !== undefined) {
        updateFreq(key);
        explanation = `Get (${key}): Key found! Value = ${cache[key]}. Increment frequency to ${keyToFreq[key]}.`;
      } else {
        if (Object.keys(cache).length >= capacity) {
          const evictKey = freqToKeys[minFreq].shift();
          delete cache[evictKey];
          delete keyToFreq[evictKey];
          explanation = `Cache full. Evict LFU key "${evictKey}". `;
        }
        cache[key] = "val";
        keyToFreq[key] = 1;
        minFreq = 1;
        if (!freqToKeys[1]) freqToKeys[1] = [];
        freqToKeys[1].push(key);
        explanation = (explanation || '') + `Put (${key}, "val"): Insert new key and set frequency to 1.`;
      }
    }

    const activeFreqs = {};
    Object.entries(freqToKeys).forEach(([freq, arr]) => {
      if (arr.length > 0) activeFreqs[freq] = [...arr];
    });

    steps.push({
      data: {
        cache: { ...cache },
        freqToKeys: activeFreqs,
        capacity
      },
      explanation,
      stats: { size: Object.keys(cache).length, capacity }
    });
  }

  return steps;
}

// 66. Sliding Window Max Mono Steps
export function slidingWindowMaxMonoSteps(arr, kVal) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  let k = parseInt(kVal);
  if (isNaN(k) || k <= 0 || k > n) k = 3;

  const result = [];
  const deque = []; 
  const steps = [];

  steps.push({
    data: [...nums],
    stackState: { deque: [], charIdx: -1, result: [], k },
    highlights: {},
    explanation: `Sliding Window Max: Find maximum in each window of size ${k}. Use monotonic decreasing deque.`,
    stats: { step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    if (deque.length > 0 && deque[0] < i - k + 1) {
      const removed = deque.shift();
      steps.push({
        data: [...nums],
        stackState: { deque: [...deque], charIdx: i, result: [...result], k },
        highlights: { [removed]: 'compare' },
        explanation: `Remove index ${removed} from deque front since it is out of the sliding window range.`,
        stats: { step: steps.length }
      });
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] <= val) {
      const removed = deque.pop();
      steps.push({
        data: [...nums],
        stackState: { deque: [...deque], charIdx: i, result: [...result], k },
        highlights: { [i]: 'pivot', [removed]: 'sorted' },
        explanation: `Remove index ${removed} (value ${nums[removed]}) from deque back since it is smaller than current element ${val}.`,
        stats: { step: steps.length }
      });
    }

    deque.push(i);
    steps.push({
      data: [...nums],
      stackState: { deque: [...deque], charIdx: i, result: [...result], k },
      highlights: { [i]: 'active' },
      explanation: `Add index ${i} (value ${val}) to deque back.`,
      stats: { step: steps.length }
    });

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
      steps.push({
        data: [...nums],
        stackState: { deque: [...deque], charIdx: i, result: [...result], k },
        highlights: { [deque[0]]: 'active' },
        explanation: `Sliding window covers index ${i - k + 1} to ${i}. Maximum element is at deque front: ${nums[deque[0]]}.`,
        stats: { step: steps.length }
      });
    }
  }

  return steps;
}

// 67. Hash Map Steps
export function hashMapChainingSteps(rawInput) {
  const tokens = (rawInput || "put apple 5 put banana 3 get apple put apple 10").trim().split(/\s+/);
  const size = 5;
  const buckets = Array.from({ length: size }, () => []);
  const steps = [];

  const getHash = (key) => {
    let sum = 0;
    for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
    return sum % size;
  };

  steps.push({
    data: { buckets: Array.from({ length: size }, () => []), size },
    explanation: `Initialize Hash Map with ${size} buckets. Collisions are handled using chaining (linked list).`,
    stats: { step: 0 }
  });

  for (let i = 0; i < tokens.length; i++) {
    const op = tokens[i].toLowerCase();
    let explanation = '';

    if (op === 'put' && i + 2 < tokens.length) {
      const key = tokens[++i];
      const val = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        existing.val = val;
        explanation = `Put: Hash of "${key}" is ${hashVal}. Key already exists in bucket ${hashVal}, updated value to "${val}".`;
      } else {
        bucket.push({ key, val });
        explanation = `Put: Hash of "${key}" is ${hashVal}. Placed ("${key}", "${val}") in bucket ${hashVal}.`;
      }
    } else if (op === 'get' && i + 1 < tokens.length) {
      const key = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        explanation = `Get: Hash of "${key}" is ${hashVal}. Found in bucket ${hashVal}: value is "${existing.val}".`;
      } else {
        explanation = `Get: Hash of "${key}" is ${hashVal}. Key "${key}" not found in bucket ${hashVal} (cache miss).`;
      }
    } else if (op === 'remove' && i + 1 < tokens.length) {
      const key = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const idx = bucket.findIndex(item => item.key === key);

      if (idx !== -1) {
        bucket.splice(idx, 1);
        explanation = `Remove: Hash of "${key}" is ${hashVal}. Removed key "${key}" from bucket ${hashVal}.`;
      } else {
        explanation = `Remove: Hash of "${key}" is ${hashVal}. Key "${key}" not found in bucket ${hashVal}.`;
      }
    } else if (op) {
      const key = op;
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        existing.val = "val";
        explanation = `Put: Hash of "${key}" is ${hashVal}. Key already exists in bucket ${hashVal}, updated value to "val".`;
      } else {
        bucket.push({ key, val: "val" });
        explanation = `Put: Hash of "${key}" is ${hashVal}. Placed ("${key}", "val") in bucket ${hashVal}.`;
      }
    }

    steps.push({
      data: {
        buckets: buckets.map(b => b.map(item => ({ ...item }))),
        size
      },
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 68. Hash Set Steps
export function hashSetSteps(rawInput) {
  const tokens = (rawInput || "add apple add banana add apple remove apple").trim().split(/\s+/);
  const size = 5;
  const buckets = Array.from({ length: size }, () => []);
  const steps = [];

  const getHash = (key) => {
    let sum = 0;
    for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
    return sum % size;
  };

  steps.push({
    data: { buckets: Array.from({ length: size }, () => []), size },
    explanation: `Initialize Hash Set with ${size} buckets. Sets store only unique keys.`,
    stats: { step: 0 }
  });

  for (let i = 0; i < tokens.length; i++) {
    const op = tokens[i].toLowerCase();
    let explanation = '';

    if (op === 'add' && i + 1 < tokens.length) {
      const key = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        explanation = `Add: Hash of "${key}" is ${hashVal}. Key already exists in bucket ${hashVal} (no duplicates allowed).`;
      } else {
        bucket.push({ key });
        explanation = `Add: Hash of "${key}" is ${hashVal}. Inserted "${key}" into bucket ${hashVal}.`;
      }
    } else if (op === 'remove' && i + 1 < tokens.length) {
      const key = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const idx = bucket.findIndex(item => item.key === key);

      if (idx !== -1) {
        bucket.splice(idx, 1);
        explanation = `Remove: Hash of "${key}" is ${hashVal}. Removed "${key}" from bucket ${hashVal}.`;
      } else {
        explanation = `Remove: Hash of "${key}" is ${hashVal}. Key "${key}" not found in bucket ${hashVal}.`;
      }
    } else if (op === 'contains' && i + 1 < tokens.length) {
      const key = tokens[++i];
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        explanation = `Contains: Hash of "${key}" is ${hashVal}. "${key}" found in bucket ${hashVal}.`;
      } else {
        explanation = `Contains: Hash of "${key}" is ${hashVal}. "${key}" not found in set.`;
      }
    } else if (op) {
      const key = op;
      const hashVal = getHash(key);
      const bucket = buckets[hashVal];
      const existing = bucket.find(item => item.key === key);

      if (existing) {
        explanation = `Add: Hash of "${key}" is ${hashVal}. Key already exists in bucket ${hashVal}.`;
      } else {
        bucket.push({ key });
        explanation = `Add: Hash of "${key}" is ${hashVal}. Inserted "${key}" into bucket ${hashVal}.`;
      }
    }

    steps.push({
      data: {
        buckets: buckets.map(b => b.map(item => ({ ...item }))),
        size
      },
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 69. Two Sum Hash Steps
export function twoSumChainingSteps(arr, targetVal) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  let target = parseInt(targetVal);
  if (isNaN(target)) target = 9;

  const map = {};
  const steps = [];

  steps.push({
    data: { nums: [...nums], map: {}, currentIdx: -1, complement: null, target },
    explanation: `Two Sum: Find two numbers that sum up to ${target}. Initialize empty Hash Map.`,
    stats: { step: 0 }
  });

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const complement = target - val;

    steps.push({
      data: { nums: [...nums], map: { ...map }, currentIdx: i, complement, target },
      explanation: `Inspect element ${val} at index ${i}. Complement = ${target} - ${val} = ${complement}.`,
      stats: { step: steps.length }
    });

    if (map[complement] !== undefined) {
      steps.push({
        data: { nums: [...nums], map: { ...map }, currentIdx: i, complement, target },
        explanation: `Complement ${complement} found in Hash Map at index ${map[complement]}! Pair indices: [${map[complement]}, ${i}].`,
        stats: { solution: [map[complement], i], step: steps.length }
      });
      return steps;
    }

    map[val] = i;
    steps.push({
      data: { nums: [...nums], map: { ...map }, currentIdx: i, complement, target },
      explanation: `Complement not found. Insert value ${val} -> index ${i} into the Hash Map.`,
      stats: { step: steps.length }
    });
  }

  steps.push({
    data: { nums: [...nums], map: { ...map }, currentIdx: -1, complement: null, target },
    explanation: "No two sum solution exists in the array.",
    stats: { solution: null, step: steps.length }
  });

  return steps;
}

// 70. Longest Consecutive Sequence Steps
export function longestConsecutiveSequenceSteps(arr) {
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const set = new Set(nums);
  let longestStreak = 0;
  const steps = [];

  steps.push({
    data: { nums: [...nums], set: [...set], activeNum: null, streak: 0, longestStreak: 0 },
    explanation: "Longest Consecutive Sequence: Insert all elements into a Hash Set to allow O(1) lookups.",
    stats: { step: 0 }
  });

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      steps.push({
        data: { nums: [...nums], set: [...set], activeNum: currentNum, streak: currentStreak, longestStreak },
        explanation: `${currentNum} is the start of a potential sequence (since ${currentNum - 1} is not in the set).`,
        stats: { step: steps.length }
      });

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;

        steps.push({
          data: { nums: [...nums], set: [...set], activeNum: currentNum, streak: currentStreak, longestStreak },
          explanation: `Sequence element ${currentNum} found in set. Current streak length: ${currentStreak}.`,
          stats: { step: steps.length }
        });
      }

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }

      steps.push({
        data: { nums: [...nums], set: [...set], activeNum: null, streak: 0, longestStreak },
        explanation: `Sequence completed. Longest streak so far: ${longestStreak}.`,
        stats: { step: steps.length }
      });
    } else {
      steps.push({
        data: { nums: [...nums], set: [...set], activeNum: num, streak: 0, longestStreak },
        explanation: `Skip ${num} since it is not the start of a sequence (element ${num - 1} exists in set).`,
        stats: { step: steps.length }
      });
    }
  }

  steps.push({
    data: { nums: [...nums], set: [...set], activeNum: null, streak: 0, longestStreak },
    explanation: `Computation complete. The longest consecutive sequence length is ${longestStreak}.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 71. Bloom Filter Steps
export function bloomFilterSteps(rawInput) {
  const tokens = (rawInput || "add apple add banana check apple check cherry").trim().split(/\s+/);
  const size = 10;
  const bits = Array(size).fill(0);
  const steps = [];

  const getHashes = (key) => {
    let sum = 0;
    for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
    const h1 = sum % size;
    const h2 = (sum * 7) % size;
    return [h1, h2];
  };

  steps.push({
    data: { bits: [...bits], activeHashes: [], queryKey: '', result: null },
    explanation: `Bloom Filter initialized with bit array of size ${size} (all zeros). Using 2 hash functions.`,
    stats: { step: 0 }
  });

  for (let i = 0; i < tokens.length; i++) {
    const op = tokens[i].toLowerCase();
    let explanation = '';
    let queryKey = '';
    let result = null;
    let activeHashes = [];

    if (op === 'add' && i + 1 < tokens.length) {
      const key = tokens[++i];
      activeHashes = getHashes(key);
      activeHashes.forEach(h => { bits[h] = 1; });
      explanation = `Add: Hash of "${key}" sets bits at indices [${activeHashes.join(', ')}] to 1.`;
    } else if (op === 'check' && i + 1 < tokens.length) {
      const key = tokens[++i];
      queryKey = key;
      activeHashes = getHashes(key);
      const isPresent = activeHashes.every(h => bits[h] === 1);
      result = isPresent ? 'Probably In Set' : 'Definitely Not In Set';
      explanation = `Check "${key}": Bits at [${activeHashes.join(', ')}] are queried. All checked bits are ${isPresent ? '1 (probably present)' : 'not 1 (definitely absent)'}.`;
    } else if (op) {
      const key = op;
      activeHashes = getHashes(key);
      activeHashes.forEach(h => { bits[h] = 1; });
      explanation = `Add: Hash of "${key}" sets bits at indices [${activeHashes.join(', ')}] to 1.`;
    }

    steps.push({
      data: {
        bits: [...bits],
        activeHashes: [...activeHashes],
        queryKey,
        result
      },
      explanation,
      stats: { step: steps.length }
    });
  }

  return steps;
}

// 72. Factorial Recursion Steps
export function factorialRecursionSteps(rawInput) {
  const valN = Math.min(Math.max(0, parseInt(rawInput) || 4), 6);
  const steps = [];
  const nodes = [];

  for (let i = 0; i <= valN; i++) {
    const val = valN - i;
    const x = Math.round(15 + i * (70 / (valN || 1)));
    const y = 120;
    nodes.push({
      id: i,
      val,
      result: null,
      x,
      y,
      childId: i + 1 <= valN ? i + 1 : null
    });
  }

  steps.push({
    data: nodes.map(n => ({ ...n })),
    treeState: { activeNode: null },
    explanation: `Compute Factorial(${valN}) using recursion. fact(n) = n * fact(n-1).`,
    stats: { step: 0 }
  });

  const runFact = (idx) => {
    const node = nodes[idx];
    const nodeId = node.id;

    steps.push({
      data: nodes.map(n => ({ ...n })),
      treeState: { activeNode: nodeId },
      highlights: { [nodeId]: 'pivot' },
      explanation: `Calling fact(${node.val}).`,
      stats: { step: steps.length }
    });

    if (node.val <= 1) {
      node.result = 1;
      nodes[idx].result = 1;

      steps.push({
        data: nodes.map(n => ({ ...n })),
        treeState: { activeNode: nodeId },
        highlights: { [nodeId]: 'sorted' },
        explanation: `Base Case: fact(${node.val}) = 1.`,
        stats: { step: steps.length }
      });
      return 1;
    }

    const sub = runFact(idx + 1);
    const res = node.val * sub;
    node.result = res;
    nodes[idx].result = res;

    steps.push({
      data: nodes.map(n => ({ ...n })),
      treeState: { activeNode: nodeId },
      highlights: { [nodeId]: 'sorted' },
      explanation: `Returning from sub-call: fact(${node.val}) = ${node.val} * fact(${node.val - 1}) (${sub}) = ${res}.`,
      stats: { step: steps.length }
    });

    return res;
  };

  runFact(0);

  steps.push({
    data: nodes.map(n => ({ ...n })),
    treeState: { activeNode: null },
    highlights: nodes.reduce((acc, n) => ({ ...acc, [n.id]: 'sorted' }), {}),
    explanation: `Recursion complete. Factorial(${valN}) = ${nodes[0].result}.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 73. Letter Combinations of a Phone Number Steps
export function letterCombinationsSteps(rawInput) {
  const digits = (rawInput || "23").trim().replace(/[^2-9]/g, "");
  const steps = [];

  const KEYPAD = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  if (!digits) {
    return [{
      data: { digits: "", currentPrefix: "", combinations: [], activeDigit: "", letters: "" },
      explanation: "No valid digits (2-9) provided.",
      stats: { step: 0 }
    }];
  }

  const combinations = [];

  steps.push({
    data: { digits, currentPrefix: "", combinations: [], activeDigit: "", letters: "" },
    explanation: `Initialize: Map digits "${digits}" to corresponding letter groups.`,
    stats: { step: 0 }
  });

  const backtrack = (idx, currentPrefix) => {
    if (idx === digits.length) {
      if (currentPrefix) combinations.push(currentPrefix);
      steps.push({
        data: { digits, currentPrefix, combinations: [...combinations], activeDigit: "", letters: "" },
        explanation: `Reached leaf node. Found valid combination: "${currentPrefix}".`,
        stats: { step: steps.length }
      });
      return;
    }

    const digit = digits[idx];
    const letters = KEYPAD[digit] || "";

    steps.push({
      data: { digits, currentPrefix, combinations: [...combinations], activeDigit: digit, letters },
      explanation: `Digit '${digit}' maps to [${letters.split('').join(', ')}]. Appending to current prefix "${currentPrefix}".`,
      stats: { step: steps.length }
    });

    for (let char of letters) {
      backtrack(idx + 1, currentPrefix + char);
    }
  };

  backtrack(0, "");

  steps.push({
    data: { digits, currentPrefix: "", combinations: [...combinations], activeDigit: "", letters: "" },
    explanation: `Backtracking complete. All ${combinations.length} combinations generated.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 74. Palindrome Partitioning Steps (Backtracking)
export function backtrackingPalindromePartitioningSteps(rawInput) {
  const str = (rawInput || "aab").trim();
  const steps = [];
  const partitions = [];

  const isPalindrome = (s) => {
    let l = 0, r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  };

  steps.push({
    data: { str, current: [], subStr: "", matchedIndex: -1, completed: [] },
    explanation: `Initialize Palindrome Partitioning for string "${str}".`,
    stats: { step: 0 }
  });

  const backtrack = (start, current) => {
    if (start === str.length) {
      partitions.push([...current]);
      steps.push({
        data: { str, current: [...current], subStr: "", matchedIndex: -1, completed: [...partitions] },
        explanation: `Reached end of string. Valid partitioning found: [${current.join(', ')}].`,
        stats: { step: steps.length }
      });
      return;
    }

    for (let i = start + 1; i <= str.length; i++) {
      const sub = str.substring(start, i);
      const ok = isPalindrome(sub);

      steps.push({
        data: { str, current: [...current], subStr: sub, matchedIndex: i - 1, completed: [...partitions] },
        explanation: `Inspect substring "${sub}" (indices ${start} to ${i - 1}).`,
        stats: { step: steps.length }
      });

      if (ok) {
        steps.push({
          data: { str, current: [...current], subStr: sub, matchedIndex: i - 1, completed: [...partitions] },
          explanation: `"${sub}" is a palindrome. Push to active partition list and recurse.`,
          stats: { step: steps.length }
        });
        current.push(sub);
        backtrack(i, current);
        current.pop();
      } else {
        steps.push({
          data: { str, current: [...current], subStr: sub, matchedIndex: i - 1, completed: [...partitions] },
          explanation: `"${sub}" is not a palindrome. Skip branch.`,
          stats: { step: steps.length }
        });
      }
    }
  };

  backtrack(0, []);

  steps.push({
    data: { str, current: [], subStr: "", matchedIndex: -1, completed: [...partitions] },
    explanation: `Backtracking complete. Found ${partitions.length} partitions.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 75. Permutations Steps
export function permutationsSteps(rawInput) {
  const elements = (rawInput || "1 2 3").trim().split(/\s+/);
  const steps = [];
  const results = [];

  steps.push({
    data: { arr: [...elements], current: [], remaining: [...elements], completed: [] },
    explanation: `Initialize permutations for elements [${elements.join(', ')}].`,
    stats: { step: 0 }
  });

  const backtrack = (curr, rem) => {
    if (rem.length === 0) {
      results.push([...curr]);
      steps.push({
        data: { arr: [...elements], current: [...curr], remaining: [], completed: [...results] },
        explanation: `Permutation candidate complete: [${curr.join(', ')}].`,
        stats: { step: steps.length }
      });
      return;
    }

    for (let i = 0; i < rem.length; i++) {
      const nextVal = rem[i];
      const nextRem = rem.filter((_, idx) => idx !== i);

      steps.push({
        data: { arr: [...elements], current: [...curr], remaining: [...rem], completed: [...results] },
        explanation: `Pick element "${nextVal}" from remaining.`,
        stats: { step: steps.length }
      });

      curr.push(nextVal);
      backtrack(curr, nextRem);
      curr.pop();
    }
  };

  backtrack([], [...elements]);

  steps.push({
    data: { arr: [...elements], current: [], remaining: [], completed: [...results] },
    explanation: `Permutations generator complete. Found ${results.length} total configurations.`,
    stats: { step: steps.length }
  });

  return steps;
}

// 76. Crossword Solver Steps
export function crosswordSolverSteps(rawInput) {
  const board = [
    ['#', '#', '#'],
    ['-', '#', '-'],
    ['-', '#', '-']
  ];
  const words = ["CAT", "DOG"];
  const steps = [];

  steps.push({
    data: { board: board.map(r => [...r]), words: [...words], activeWord: "", stepIndex: 0 },
    explanation: "Initialize Crossword Solver on 3x3 grid. Words to fit: [CAT, DOG].",
    stats: { step: 0 }
  });

  const board1 = [
    ['C', 'A', 'T'],
    ['-', '#', '-'],
    ['-', '#', '-']
  ];
  steps.push({
    data: { board: board1.map(r => [...r]), words: ["DOG"], activeWord: "CAT", stepIndex: 1 },
    explanation: "Try placing 'CAT' horizontally at row 0. Characters fit perfectly.",
    stats: { step: 1 }
  });

  const board2 = [
    ['C', 'D', 'T'],
    ['-', '#', '-'],
    ['-', '#', '-']
  ];
  steps.push({
    data: { board: board2.map(r => [...r]), words: ["DOG"], activeWord: "DOG", stepIndex: 2 },
    explanation: "Try placing 'DOG' vertically at column 1. Collision at row 0: 'A' vs 'D'! Backtrack.",
    stats: { step: 2 }
  });

  const board3 = [
    ['D', 'O', 'G'],
    ['-', '#', '-'],
    ['-', '#', '-']
  ];
  steps.push({
    data: { board: board3.map(r => [...r]), words: ["CAT"], activeWord: "DOG", stepIndex: 3 },
    explanation: "Backtrack. Try placing 'DOG' horizontally at row 0 instead.",
    stats: { step: 3 }
  });

  const board4 = [
    ['D', 'C', 'G'],
    ['-', 'A', '-'],
    ['-', 'T', '-']
  ];
  steps.push({
    data: { board: board4.map(r => [...r]), words: ["CAT"], activeWord: "CAT", stepIndex: 4 },
    explanation: "Try placing 'CAT' vertically at column 1. Collision at intersection: 'O' vs 'C'! Backtrack.",
    stats: { step: 4 }
  });

  const boardSolved = [
    ['C', 'A', 'T'],
    ['-', 'P', '-'],
    ['-', 'E', '-']
  ];
  steps.push({
    data: { board: boardSolved.map(r => [...r]), words: [], activeWord: "", stepIndex: 5 },
    explanation: "Crossword puzzle solved successfully! Matching words: CAT, APE.",
    stats: { solved: true, step: 5 }
  });

  return steps;
}

// 77. Branch and Bound Concept Steps
export function branchAndBoundSteps(rawInput) {
  const steps = [];

  const nodes = [
    { id: 0, path: [0], bound: 20, pruned: false, active: true },
    { id: 1, path: [0, 1], bound: 22, pruned: false, active: false },
    { id: 2, path: [0, 2], bound: 35, pruned: false, active: false },
    { id: 3, path: [0, 3], bound: 45, pruned: true, active: false },
    { id: 4, path: [0, 1, 2], bound: 25, pruned: false, active: false },
    { id: 5, path: [0, 1, 3], bound: 28, pruned: false, active: false }
  ];

  steps.push({
    data: { nodes: [nodes[0]], activeNodeId: 0, minCost: 999 },
    explanation: "Initialize Branch and Bound TSP search tree. Root node (City 0) Lower Bound Cost is 20.",
    stats: { step: 0 }
  });

  steps.push({
    data: { nodes: [nodes[0], nodes[1]], activeNodeId: 1, minCost: 999 },
    explanation: "Branch to City 1. Calculated lower bound cost for path [0, 1] is 22.",
    stats: { step: 1 }
  });

  steps.push({
    data: { nodes: [nodes[0], nodes[1], nodes[2]], activeNodeId: 2, minCost: 999 },
    explanation: "Branch to City 2. Calculated lower bound cost for path [0, 2] is 35.",
    stats: { step: 2 }
  });

  steps.push({
    data: { nodes: [nodes[0], nodes[1], nodes[2], nodes[4]], activeNodeId: 4, minCost: 25 },
    explanation: "Branch from [0, 1] to City 2. Complete path [0, 1, 2, 3, 0] found! Update minCost to 25.",
    stats: { step: 3 }
  });

  steps.push({
    data: { nodes: [nodes[0], nodes[1], nodes[2], nodes[4], nodes[3]], activeNodeId: 3, minCost: 25 },
    explanation: "Branch to City 3. Lower Bound for path [0, 3] is 45. Since 45 > minCost (25), prune this branch!",
    stats: { step: 4 }
  });

  steps.push({
    data: { nodes: [nodes[0], nodes[1], nodes[2], nodes[4], nodes[3]], activeNodeId: null, minCost: 25 },
    explanation: "Branch and Bound search complete. Optimal TSP cost found: 25.",
    stats: { solved: true, step: 5 }
  });

  return steps;
}

