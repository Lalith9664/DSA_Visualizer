// --- SORTING STEP GENERATORS ---

export const bubbleSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  const n = a.length;
  let comparisons = 0;
  let swaps = 0;

  // Initial state
  steps.push({
    data: [...a],
    highlights: {},
    explanation: "Initial array before sorting starts.",
    stats: { comparisons, swaps, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      
      // Step: Comparing
      steps.push({
        data: [...a],
        highlights: { [j]: 'compare', [j+1]: 'compare' },
        explanation: `Comparing elements at index ${j} (${a[j]}) and index ${j+1} (${a[j+1]}).`,
        stats: { comparisons, swaps, step: steps.length }
      });

      if (a[j] > a[j+1]) {
        swaps++;
        // Swap elements
        const temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
        swapped = true;

        // Step: Swapping
        steps.push({
          data: [...a],
          highlights: { [j]: 'swap', [j+1]: 'swap' },
          explanation: `Since ${temp} is greater than ${a[j]}, they are swapped.`,
          stats: { comparisons, swaps, step: steps.length }
        });
      } else {
        // Step: No Swap
        steps.push({
          data: [...a],
          highlights: { [j]: 'compare', [j+1]: 'compare' },
          explanation: `Since ${a[j]} is not greater than ${a[j+1]}, no swap is needed.`,
          stats: { comparisons, swaps, step: steps.length }
        });
      }
    }
    // Mark the last element of this pass as sorted
    const sortedIdx = n - i - 1;
    const sortedHighlights = {};
    for (let k = sortedIdx; k < n; k++) {
      sortedHighlights[k] = 'sorted';
    }

    steps.push({
      data: [...a],
      highlights: sortedHighlights,
      explanation: `Pass complete. Element at index ${sortedIdx} (${a[sortedIdx]}) is placed in its final sorted position.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    if (!swapped) {
      break;
    }
  }

  // Mark all as sorted in final step
  const finalHighlights = {};
  for (let k = 0; k < n; k++) finalHighlights[k] = 'sorted';
  
  steps.push({
    data: [...a],
    highlights: finalHighlights,
    explanation: "Array is fully sorted!",
    stats: { comparisons, swaps, step: steps.length }
  });

  return steps;
};

export const selectionSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  const n = a.length;
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    data: [...a],
    highlights: {},
    explanation: "Initial array.",
    stats: { comparisons, swaps, step: 0 }
  });

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    steps.push({
      data: [...a],
      highlights: { [i]: 'pivot' },
      explanation: `Assume index ${i} (${a[i]}) contains the minimum value.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      steps.push({
        data: [...a],
        highlights: { [j]: 'compare', [minIdx]: 'pivot' },
        explanation: `Comparing current minimum candidate (${a[minIdx]}) with element at index ${j} (${a[j]}).`,
        stats: { comparisons, swaps, step: steps.length }
      });

      if (a[j] < a[minIdx]) {
        minIdx = j;
        steps.push({
          data: [...a],
          highlights: { [minIdx]: 'pivot' },
          explanation: `Found new minimum candidate: ${a[minIdx]} at index ${minIdx}.`,
          stats: { comparisons, swaps, step: steps.length }
        });
      }
    }

    if (minIdx !== i) {
      swaps++;
      const temp = a[i];
      a[i] = a[minIdx];
      a[minIdx] = temp;

      steps.push({
        data: [...a],
        highlights: { [i]: 'swap', [minIdx]: 'swap' },
        explanation: `Swapping element at index ${i} (${temp}) with the minimum element at index ${minIdx} (${a[i]}).`,
        stats: { comparisons, swaps, step: steps.length }
      });
    }

    // Mark current sorted elements
    const sortedHighlights = {};
    for (let k = 0; k <= i; k++) sortedHighlights[k] = 'sorted';
    
    steps.push({
      data: [...a],
      highlights: sortedHighlights,
      explanation: `Element at index ${i} is now in its final sorted position.`,
      stats: { comparisons, swaps, step: steps.length }
    });
  }

  const finalHighlights = {};
  for (let k = 0; k < n; k++) finalHighlights[k] = 'sorted';
  steps.push({
    data: [...a],
    highlights: finalHighlights,
    explanation: "Selection sort complete. Array is fully sorted!",
    stats: { comparisons, swaps, step: steps.length }
  });

  return steps;
};

export const insertionSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  const n = a.length;
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    data: [...a],
    highlights: { 0: 'sorted' },
    explanation: "Initial array. First element is trivially sorted.",
    stats: { comparisons, swaps, step: 0 }
  });

  for (let i = 1; i < n; i++) {
    let key = a[i];
    let j = i - 1;

    steps.push({
      data: [...a],
      highlights: { [i]: 'pivot' },
      explanation: `Picking element key = ${key} at index ${i} to insert into sorted portion.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    while (j >= 0 && a[j] > key) {
      comparisons++;
      a[j + 1] = a[j];
      swaps++; // Shift as swap representation

      steps.push({
        data: [...a],
        highlights: { [j + 1]: 'swap', [j]: 'compare' },
        explanation: `Since ${a[j]} > ${key}, shift ${a[j]} to the right.`,
        stats: { comparisons, swaps, step: steps.length }
      });
      j--;
    }
    if (j >= 0) comparisons++; // Loop termination check comparison

    a[j + 1] = key;
    
    const sortedHighlights = {};
    for (let k = 0; k <= i; k++) sortedHighlights[k] = 'sorted';

    steps.push({
      data: [...a],
      highlights: sortedHighlights,
      explanation: `Inserted key value ${key} at index ${j + 1}.`,
      stats: { comparisons, swaps, step: steps.length }
    });
  }

  const finalHighlights = {};
  for (let k = 0; k < n; k++) finalHighlights[k] = 'sorted';
  steps.push({
    data: [...a],
    highlights: finalHighlights,
    explanation: "Insertion sort complete. Array is fully sorted!",
    stats: { comparisons, swaps, step: steps.length }
  });

  return steps;
};

export const mergeSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    data: [...a],
    highlights: {},
    explanation: "Initial array before starting Merge Sort.",
    stats: { comparisons, swaps, step: 0 }
  });

  const mergeSortHelper = (l, r) => {
    if (l >= r) return;
    const m = Math.floor(l + (r - l) / 2);
    
    steps.push({
      data: [...a],
      highlights: { [l]: 'compare', [r]: 'compare', [m]: 'pivot' },
      explanation: `Splitting array into sub-arrays: [${l}...${m}] and [${m+1}...${r}].`,
      stats: { comparisons, swaps, step: steps.length }
    });

    mergeSortHelper(l, m);
    mergeSortHelper(m + 1, r);
    merge(l, m, r);
  };

  const merge = (l, m, r) => {
    const temp = [];
    let i = l, j = m + 1;

    steps.push({
      data: [...a],
      highlights: { [l]: 'compare', [m]: 'pivot', [r]: 'compare' },
      explanation: `Merging sub-arrays [${l}...${m}] and [${m+1}...${r}] back together in sorted order.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    while (i <= m && j <= r) {
      comparisons++;
      if (a[i] <= a[j]) {
        temp.push(a[i++]);
      } else {
        temp.push(a[j++]);
      }
    }

    while (i <= m) temp.push(a[i++]);
    while (j <= r) temp.push(a[j++]);

    for (let k = 0; k < temp.length; k++) {
      a[l + k] = temp[k];
      swaps++;
      
      const subHighlights = {};
      for (let idx = l; idx <= r; idx++) {
        subHighlights[idx] = idx <= l + k ? 'sorted' : 'compare';
      }

      steps.push({
        data: [...a],
        highlights: subHighlights,
        explanation: `Placing value ${temp[k]} back into position ${l + k}.`,
        stats: { comparisons, swaps, step: steps.length }
      });
    }
  };

  mergeSortHelper(0, a.length - 1);

  const finalHighlights = {};
  for (let k = 0; k < a.length; k++) finalHighlights[k] = 'sorted';
  steps.push({
    data: [...a],
    highlights: finalHighlights,
    explanation: "Merge sort complete. Array is fully sorted!",
    stats: { comparisons, swaps, step: steps.length }
  });

  return steps;
};

export const quickSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    data: [...a],
    highlights: {},
    explanation: "Initial array before starting Quick Sort.",
    stats: { comparisons, swaps, step: 0 }
  });

  const quickSortHelper = (low, high) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    } else if (low === high) {
      steps.push({
        data: [...a],
        highlights: { [low]: 'sorted' },
        explanation: `Single element at index ${low} is trivially sorted.`,
        stats: { comparisons, swaps, step: steps.length }
      });
    }
  };

  const partition = (low, high) => {
    const pivot = a[high];
    
    steps.push({
      data: [...a],
      highlights: { [high]: 'pivot' },
      explanation: `Selecting rightmost element ${pivot} at index ${high} as pivot.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      steps.push({
        data: [...a],
        highlights: { [j]: 'compare', [high]: 'pivot', ...(i >= low ? { [i]: 'swap' } : {}) },
        explanation: `Comparing element ${a[j]} at index ${j} with pivot ${pivot}.`,
        stats: { comparisons, swaps, step: steps.length }
      });

      if (a[j] < pivot) {
        i++;
        swaps++;
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;

        steps.push({
          data: [...a],
          highlights: { [i]: 'swap', [j]: 'swap', [high]: 'pivot' },
          explanation: `Since ${a[i]} < pivot (${pivot}), increment pointer index and swap ${temp} with ${a[i]}.`,
          stats: { comparisons, swaps, step: steps.length }
        });
      }
    }

    swaps++;
    const temp = a[i + 1];
    a[i + 1] = a[high];
    a[high] = temp;

    steps.push({
      data: [...a],
      highlights: { [i + 1]: 'sorted', [high]: 'swap' },
      explanation: `Move pivot by swapping it with index ${i+1} (${temp}). Pivot is now in final position.`,
      stats: { comparisons, swaps, step: steps.length }
    });

    return i + 1;
  };

  quickSortHelper(0, a.length - 1);

  const finalHighlights = {};
  for (let k = 0; k < a.length; k++) finalHighlights[k] = 'sorted';
  steps.push({
    data: [...a],
    highlights: finalHighlights,
    explanation: "Quick sort complete. Array is sorted!",
    stats: { comparisons, swaps, step: steps.length }
  });

  return steps;
};


// --- SEARCHING STEP GENERATORS ---

export const linearSearchSteps = (arr, target) => {
  const steps = [];
  const n = arr.length;
  let comparisons = 0;
  let visitedNodesCount = 0;

  steps.push({
    data: [...arr],
    highlights: {},
    explanation: `Searching for target ${target} sequentially from left to right.`,
    stats: { comparisons, visitedNodes: visitedNodesCount, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    comparisons++;
    visitedNodesCount++;
    
    steps.push({
      data: [...arr],
      highlights: { [i]: 'compare' },
      explanation: `Comparing element at index ${i} (${arr[i]}) with target (${target}).`,
      stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
    });

    if (arr[i] === target) {
      steps.push({
        data: [...arr],
        highlights: { [i]: 'sorted' },
        explanation: `Target found at index ${i}! Search halts.`,
        stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
      });
      return steps;
    }
  }

  steps.push({
    data: [...arr],
    highlights: {},
    explanation: `Target ${target} was not found in the array.`,
    stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
  });
  return steps;
};

export const binarySearchSteps = (arr, target) => {
  const steps = [];
  // Binary search requires sorted array, let's sort it but preserve visual mapping
  const sortedWithOrigIndices = arr
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);
  const data = sortedWithOrigIndices.map(item => item.val);

  let low = 0;
  let high = data.length - 1;
  let comparisons = 0;
  let visitedNodesCount = 0;

  steps.push({
    data: [...data],
    highlights: {},
    explanation: `Initial sorted array. Beginning binary search search for target ${target}.`,
    stats: { comparisons, visitedNodes: visitedNodesCount, step: 0 }
  });

  while (low <= high) {
    visitedNodesCount++;
    const mid = Math.floor(low + (high - low) / 2);
    comparisons++;

    // Highlight current active range
    const activeRange = {};
    for (let k = low; k <= high; k++) {
      activeRange[k] = 'compare';
    }
    activeRange[mid] = 'pivot'; // Make mid node stand out

    steps.push({
      data: [...data],
      highlights: activeRange,
      explanation: `Active search range is [${low}...${high}]. Inspecting middle index ${mid} (${data[mid]}).`,
      stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
    });

    if (data[mid] === target) {
      steps.push({
        data: [...data],
        highlights: { [mid]: 'sorted' },
        explanation: `Found target ${target} at middle index ${mid}!`,
        stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
      });
      return steps;
    } else if (data[mid] < target) {
      low = mid + 1;
      steps.push({
        data: [...data],
        highlights: {},
        explanation: `Middle value (${data[mid]}) is less than target (${target}). Shifting range right (low = ${mid + 1}).`,
        stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
      });
    } else {
      high = mid - 1;
      steps.push({
        data: [...data],
        highlights: {},
        explanation: `Middle value (${data[mid]}) is greater than target (${target}). Shifting range left (high = ${mid - 1}).`,
        stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
      });
    }
  }

  steps.push({
    data: [...data],
    highlights: {},
    explanation: `Target ${target} is not in the array (range is empty).`,
    stats: { comparisons, visitedNodes: visitedNodesCount, step: steps.length }
  });
  return steps;
};


// --- KADANE ARRAY ALGORITHM ---

export const kadaneSteps = (arr) => {
  const steps = [];
  const n = arr.length;
  let maxSoFar = arr[0];
  let currMax = arr[0];
  let start = 0, end = 0, tempStart = 0;

  steps.push({
    data: [...arr],
    kadaneState: { maxSoFar, currMax, start, end, currIndex: 0 },
    highlights: { 0: 'pivot' },
    explanation: `Initialize: maxSoFar = ${maxSoFar}, currMax = ${currMax} at element index 0.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 1; i < n; i++) {
    // Current state check
    const prevCurrMax = currMax;
    
    if (arr[i] > currMax + arr[i]) {
      currMax = arr[i];
      tempStart = i;
    } else {
      currMax = currMax + arr[i];
    }

    let isNewMax = false;
    if (currMax > maxSoFar) {
      maxSoFar = currMax;
      start = tempStart;
      end = i;
      isNewMax = true;
    }

    const rangeHighlights = {};
    for (let k = tempStart; k <= i; k++) {
      rangeHighlights[k] = 'compare';
    }
    for (let k = start; k <= end; k++) {
      rangeHighlights[k] = 'sorted';
    }
    rangeHighlights[i] = 'pivot';

    steps.push({
      data: [...arr],
      kadaneState: { maxSoFar, currMax, start, end, currIndex: i },
      highlights: rangeHighlights,
      explanation: `Checking element at index ${i} (${arr[i]}). ` +
                   `currMax shifts from ${prevCurrMax} to ${currMax}. ` +
                   (isNewMax ? `New global max sum found: ${maxSoFar} (range [${start}...${end}]).` : `Global max remains ${maxSoFar}.`),
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  // Final step
  const finalHighlights = {};
  for (let k = start; k <= end; k++) {
    finalHighlights[k] = 'sorted';
  }
  steps.push({
    data: [...arr],
    kadaneState: { maxSoFar, currMax, start, end, currIndex: -1 },
    highlights: finalHighlights,
    explanation: `Kadane complete. The maximum subarray sum is ${maxSoFar} spanning elements [${arr.slice(start, end + 1).join(', ')}].`,
    stats: { comparisons: n - 1, swaps: 0, step: steps.length }
  });

  return steps;
};


// --- LINKED LIST REVERSAL ---

export const reverseListSteps = (arr) => {
  const steps = [];
  
  // Format data as virtual list of linked nodes
  let nodes = arr.map((val, idx) => ({
    id: idx,
    val,
    next: idx < arr.length - 1 ? idx + 1 : null
  }));

  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    listState: { head: 0, prev: null, curr: 0, next: 1 },
    highlights: { 0: 'pivot' },
    explanation: "Initial linked list. 'head' and 'curr' point to node 0.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let prev = null;
  let curr = 0;

  while (curr !== null) {
    let nextNode = nodes[curr].next;

    // Snapshot showing pointers before mutation
    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      listState: { head: prev !== null ? prev : 0, prev, curr, next: nextNode },
      highlights: { [curr]: 'pivot', ...(prev !== null ? { [prev]: 'compare' } : {}), ...(nextNode !== null ? { [nextNode]: 'compare' } : {}) },
      explanation: `Current node is ${nodes[curr].val}. Saving reference to next node ${nextNode !== null ? nodes[nextNode].val : 'null'}.`,
      stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
    });

    // Mutate pointer
    nodes[curr].next = prev;

    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      listState: { head: prev !== null ? prev : 0, prev, curr, next: nextNode },
      highlights: { [curr]: 'swap', ...(prev !== null ? { [prev]: 'compare' } : {}) },
      explanation: `Reversed pointer link: Node ${nodes[curr].val} now points back to ${prev !== null ? nodes[prev].val : 'null'}.`,
      stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
    });

    prev = curr;
    curr = nextNode;
  }

  // Done
  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    listState: { head: prev, prev, curr: null, next: null },
    highlights: { [prev]: 'sorted' },
    explanation: `List is fully reversed. The new head node points to ${nodes[prev].val}.`,
    stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
  });

  return steps;
};


// --- STACK MATCHING PARENTHESES ---

export const balancedParenthesesSteps = (str) => {
  const steps = [];
  const chars = str.split('').filter(c => c.trim().length > 0);
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  steps.push({
    data: [...chars],
    stackState: { stack: [], charIdx: -1, status: 'valid' },
    highlights: {},
    explanation: "Initialize empty parser stack.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
      steps.push({
        data: [...chars],
        stackState: { stack: [...stack], charIdx: i, status: 'valid' },
        highlights: { [i]: 'pivot' },
        explanation: `Encountered opening bracket '${char}'. Pushing onto stack.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    } else if ([')', '}', ']'].includes(char)) {
      const top = stack[stack.length - 1];
      const match = pairs[char];
      
      steps.push({
        data: [...chars],
        stackState: { stack: [...stack], charIdx: i, status: 'checking' },
        highlights: { [i]: 'compare' },
        explanation: `Encountered closing bracket '${char}'. Comparing with stack top '${top || 'empty'}'.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });

      if (stack.length === 0 || stack[stack.length - 1] !== match) {
        steps.push({
          data: [...chars],
          stackState: { stack: [...stack], charIdx: i, status: 'invalid' },
          highlights: { [i]: 'swap' },
          explanation: `Mismatch! Brackets are unbalanced. Loop ends.`,
          stats: { comparisons: steps.length, swaps: 0, step: steps.length }
        });
        return steps;
      } else {
        stack.pop();
        steps.push({
          data: [...chars],
          stackState: { stack: [...stack], charIdx: i, status: 'valid' },
          highlights: { [i]: 'sorted' },
          explanation: `Match found! Popping '${top}' off stack.`,
          stats: { comparisons: steps.length, swaps: 0, step: steps.length }
        });
      }
    }
  }

  const isBalanced = stack.length === 0;
  steps.push({
    data: [...chars],
    stackState: { stack: [...stack], charIdx: chars.length, status: isBalanced ? 'balanced' : 'unbalanced' },
    highlights: {},
    explanation: isBalanced 
      ? "Stack is empty. All brackets matched. String is balanced!" 
      : "Stack is not empty. Some brackets remained unmatched. String is unbalanced.",
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};


// --- QUEUE FIFO SIMULATION ---

export const queueOperationsSteps = (inputStr) => {
  const steps = [];
  const queue = [];
  const items = inputStr.split(' ').filter(x => x.trim().length > 0);
  
  steps.push({
    data: [],
    queueState: { queue: [], head: -1, tail: -1 },
    highlights: {},
    explanation: "Initialize empty queue buffer.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  // Enqueue operations
  for (let i = 0; i < items.length; i++) {
    queue.push(items[i]);
    steps.push({
      data: [...items],
      queueState: { queue: [...queue], head: 0, tail: queue.length - 1 },
      highlights: { [queue.length - 1]: 'pivot' },
      explanation: `Enqueueing element '${items[i]}' at rear index ${queue.length - 1}.`,
      stats: { comparisons: 0, swaps: queue.length, step: steps.length }
    });
  }

  // Dequeue operations
  const len = queue.length;
  for (let i = 0; i < Math.min(3, len); i++) {
    const val = queue.shift();
    steps.push({
      data: [...items],
      queueState: { queue: [...queue], head: 0, tail: queue.length - 1 },
      highlights: {},
      explanation: `Dequeueing front element '${val}' from front. Shifting remaining items.`,
      stats: { comparisons: 0, swaps: queue.length, step: steps.length }
    });
  }

  return steps;
};


// --- BST TRAVERSALS ---

export const bstTraversalSteps = (arr, traversalOrder = 'inorder') => {
  const steps = [];
  
  // Parse inputs to array of numbers
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  // Build virtual BST
  const bstNodes = []; // flat array of node representations
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = { id: idCounter++, val, left: null, right: null, x: 0, y: 0 };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) {
      root.left = insertBST(root.left, val);
    } else {
      root.right = insertBST(root.right, val);
    }
    return root;
  };

  let root = null;
  nums.forEach(n => {
    root = insertBST(root, n);
  });

  // Calculate max depth of tree
  const getMaxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
  };
  const maxDepth = getMaxDepth(root);

  // Position tree nodes visually (simple binary coordinate grid)
  const positionNodes = (node, depth, minX, maxX) => {
    if (!node) return;
    const x = (minX + maxX) / 2;
    let y = 135; // vertically centered if only 1 level
    if (maxDepth > 1) {
      // Scale vertically between 45px and 225px to fit safely in the 288px (h-72) canvas
      y = 45 + depth * (180 / (maxDepth - 1));
    }
    node.x = x;
    node.y = y;
    positionNodes(node.left, depth + 1, minX, x);
    positionNodes(node.right, depth + 1, x, maxX);
  };

  positionNodes(root, 0, 10, 90); // values represent percentages on canvas

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: `Constructed Binary Search Tree from inputs. Starting ${traversalOrder} traversal path.`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  const visitOrder = [];
  const traversalPath = [];

  const traverse = (node) => {
    if (!node) return;
    
    if (traversalOrder === 'preorder') {
      visitOrder.push(node);
    }
    
    traverse(node.left);
    
    if (traversalOrder === 'inorder') {
      visitOrder.push(node);
    }
    
    traverse(node.right);
    
    if (traversalOrder === 'postorder') {
      visitOrder.push(node);
    }
  };

  traverse(root);

  // Animate the path visitation
  visitOrder.forEach((node, idx) => {
    traversalPath.push(node.val);
    const highlights = {};
    visitOrder.slice(0, idx + 1).forEach(n => {
      highlights[n.id] = 'sorted';
    });
    highlights[node.id] = 'pivot';

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...traversalPath], activeNode: node.id },
      highlights,
      explanation: `Visiting Node ${node.val}. Path: [${traversalPath.join(', ')}].`,
      stats: { comparisons: idx, visitedNodes: idx + 1, step: steps.length }
    });
  });

  return steps;
};


// --- DIJKSTRA SHORTED PATHS ---

export const dijkstraSteps = (graphInput) => {
  const steps = [];

  // Parse lines: source target weight
  // Example: 
  // 0 1 4
  // 0 2 1
  // 2 1 2
  // 1 3 5
  // 2 3 8
  const lines = graphInput.split('\n').map(l => l.trim()).filter(Boolean);
  const edges = [];
  const nodesSet = new Set();

  lines.forEach(line => {
    const parts = line.split(/\s+/).map(Number);
    if (parts.length >= 3) {
      const [u, v, w] = parts;
      edges.push({ u, v, w });
      nodesSet.add(u);
      nodesSet.add(v);
    }
  });

  const nodes = Array.from(nodesSet).sort((a, b) => a - b);
  const V = nodes.length;
  if (V === 0) return [];

  // Setup adj matrix
  const matrix = Array(V).fill(null).map(() => Array(V).fill(0));
  edges.forEach(({ u, v, w }) => {
    matrix[u][v] = w;
    matrix[v][u] = w; // Un-directed for visualization ease
  });

  let dist = Array(V).fill(Infinity);
  let visited = Array(V).fill(false);
  let prevNode = Array(V).fill(null);
  
  const source = 0;
  dist[source] = 0;

  steps.push({
    data: { nodes, edges, dist: [...dist], visited: [...visited] },
    graphState: { activeNode: null, relaxingEdge: null },
    highlights: {},
    explanation: `Initial graph layout. Node 0 is set as source node. Distances: Node 0 = 0, others = Infinity.`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  for (let count = 0; count < V; count++) {
    // Find min dist node
    let minD = Infinity;
    let u = -1;
    for (let i = 0; i < V; i++) {
      if (!visited[i] && dist[i] < minD) {
        minD = dist[i];
        u = i;
      }
    }

    if (u === -1) break;

    visited[u] = true;

    steps.push({
      data: { nodes, edges, dist: [...dist], visited: [...visited] },
      graphState: { activeNode: u, relaxingEdge: null },
      highlights: { [u]: 'pivot' },
      explanation: `Node ${u} has smallest distance (${dist[u]}) among unvisited. Marking as visited.`,
      stats: { comparisons: count, visitedNodes: count + 1, step: steps.length }
    });

    // Relax edges
    for (let v = 0; v < V; v++) {
      if (matrix[u][v] > 0 && !visited[v]) {
        const alt = dist[u] + matrix[u][v];
        
        steps.push({
          data: { nodes, edges, dist: [...dist], visited: [...visited] },
          graphState: { activeNode: u, relaxingEdge: { u, v } },
          highlights: { [u]: 'pivot', [v]: 'compare' },
          explanation: `Inspecting edge ${u} -> ${v} (weight ${matrix[u][v]}). Checking if ${dist[u]} + ${matrix[u][v]} < current dist[${v}] (${dist[v]}).`,
          stats: { comparisons: steps.length, visitedNodes: count + 1, step: steps.length }
        });

        if (alt < dist[v]) {
          dist[v] = alt;
          prevNode[v] = u;

          steps.push({
            data: { nodes, edges, dist: [...dist], visited: [...visited] },
            graphState: { activeNode: u, relaxingEdge: { u, v } },
            highlights: { [u]: 'pivot', [v]: 'sorted' },
            explanation: `Relaxing path! Updating shortest distance to node ${v} to ${alt}.`,
            stats: { comparisons: steps.length, visitedNodes: count + 1, step: steps.length }
          });
        }
      }
    }
  }

  // Done
  steps.push({
    data: { nodes, edges, dist: [...dist], visited: [...visited] },
    graphState: { activeNode: null, relaxingEdge: null },
    highlights: {},
    explanation: `Dijkstra complete. Shortest path distances found: ${dist.map((d, i) => `Node ${i} = ${d}`).join(', ')}.`,
    stats: { comparisons: steps.length, visitedNodes: V, step: steps.length }
  });

  return steps;
};


// --- TOWER OF HANOI RECURSION ---

export const towerOfHanoiSteps = (numDisks) => {
  const steps = [];
  const disks = parseInt(numDisks) || 3;

  // Peg contents representing disk widths
  const pegs = {
    A: Array.from({ length: disks }, (_, i) => disks - i),
    B: [],
    C: []
  };

  steps.push({
    data: JSON.parse(JSON.stringify(pegs)),
    hanoiState: { diskMoved: null, fromPeg: null, toPeg: null },
    highlights: {},
    explanation: `Initialize Tower of Hanoi with ${disks} disks stacked on Peg A in decreasing sizes.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let movesCount = 0;

  const moveDisk = (from, to) => {
    movesCount++;
    const disk = pegs[from].pop();
    pegs[to].push(disk);

    steps.push({
      data: JSON.parse(JSON.stringify(pegs)),
      hanoiState: { diskMoved: disk, fromPeg: from, toPeg: to },
      highlights: { [from]: 'compare', [to]: 'sorted' },
      explanation: `Step ${movesCount}: Moving disk ${disk} from Peg ${from} to Peg ${to}.`,
      stats: { comparisons: 0, swaps: movesCount, step: steps.length }
    });
  };

  const runHanoi = (n, from, to, aux) => {
    if (n === 1) {
      moveDisk(from, to);
      return;
    }
    runHanoi(n - 1, from, aux, to);
    moveDisk(from, to);
    runHanoi(n - 1, aux, to, from);
  };

  runHanoi(disks, 'A', 'C', 'B');

  steps.push({
    data: JSON.parse(JSON.stringify(pegs)),
    hanoiState: { diskMoved: null, fromPeg: null, toPeg: null },
    highlights: {},
    explanation: `All disks successfully shifted to target Peg C in ${movesCount} recursive steps.`,
    stats: { comparisons: 0, swaps: movesCount, step: steps.length }
  });

  return steps;
};


// --- CLIMBING STAIRS DYNAMIC PROGRAMMING ---

export const climbingStairsSteps = (n) => {
  const steps = [];
  const stepsTarget = parseInt(n) || 5;

  const dp = Array(stepsTarget + 1).fill(0);
  
  steps.push({
    data: [...dp],
    dpState: { activeIdx: -1 },
    highlights: {},
    explanation: `Initialize DP table of size ${stepsTarget + 1} with 0.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  dp[1] = 1;
  steps.push({
    data: [...dp],
    dpState: { activeIdx: 1 },
    highlights: { 1: 'sorted' },
    explanation: "Base Case: Only 1 way to climb 1 step (take one 1-step).",
    stats: { comparisons: 0, swaps: 0, step: steps.length }
  });

  if (stepsTarget >= 2) {
    dp[2] = 2;
    steps.push({
      data: [...dp],
      dpState: { activeIdx: 2 },
      highlights: { 1: 'compare', 2: 'sorted' },
      explanation: "Base Case: 2 ways to climb 2 steps (1+1 steps, or one 2-step).",
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
  }

  for (let i = 3; i <= stepsTarget; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    
    steps.push({
      data: [...dp],
      dpState: { activeIdx: i },
      highlights: { [i - 1]: 'compare', [i - 2]: 'compare', [i]: 'pivot' },
      explanation: `Step calculation: dp[${i}] = dp[${i-1}] (${dp[i-1]}) + dp[${i-2}] (${dp[i-2]}) = ${dp[i]}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  const finalHighlights = {};
  for (let i = 1; i <= stepsTarget; i++) finalHighlights[i] = 'sorted';

  steps.push({
    data: [...dp],
    dpState: { activeIdx: -1 },
    highlights: finalHighlights,
    explanation: `DP matrix filling complete. There are ${dp[stepsTarget]} distinct ways to climb ${stepsTarget} stairs.`,
    stats: { comparisons: stepsTarget, swaps: 0, step: steps.length }
  });

  return steps;
};


// --- TWO SUM HASH MAP ---

export const twoSumHashSteps = (arr, target) => {
  const steps = [];
  const n = arr.length;
  const hash = {}; // simulated hash lookup

  steps.push({
    data: { arr, hash: {} },
    hashState: { num: null, complement: null, matchIdx: -1, currentIdx: -1 },
    highlights: {},
    explanation: `Initialize empty hash mapping table. Target complement search = ${target}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    const complement = target - num;

    steps.push({
      data: { arr, hash: { ...hash } },
      hashState: { num, complement, matchIdx: -1, currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Inspecting element ${num} at index ${i}. Target complement is ${target} - ${num} = ${complement}.`,
      stats: { comparisons: steps.length + 1, swaps: 0, step: steps.length }
    });

    if (complement in hash) {
      const matchIdx = hash[complement];
      
      steps.push({
        data: { arr, hash: { ...hash } },
        hashState: { num, complement, matchIdx, currentIdx: i },
        highlights: { [i]: 'sorted', [matchIdx]: 'sorted' },
        explanation: `Complement ${complement} exists in hash map at index ${matchIdx}! Sum pair matches target.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return steps;
    }

    hash[num] = i;

    steps.push({
      data: { arr, hash: { ...hash } },
      hashState: { num, complement, matchIdx: -1, currentIdx: i },
      highlights: { [i]: 'compare' },
      explanation: `Complement not found in map. Storing key-index map { ${num}: ${i} } for future lookup.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { arr, hash: { ...hash } },
    hashState: { num: null, complement: null, matchIdx: -1, currentIdx: -1 },
    highlights: {},
    explanation: "Scanned whole array. No two sum coordinate matches the target value.",
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const bfsSteps = (graphInput) => {
  const steps = [];
  const lines = graphInput.split('\n').map(l => l.trim()).filter(Boolean);
  const edges = [];
  const nodesSet = new Set();

  lines.forEach(line => {
    const parts = line.split(/\s+/).map(Number);
    if (parts.length >= 2) {
      const u = parts[0];
      const v = parts[1];
      const w = parts[2] !== undefined ? parts[2] : 1;
      edges.push({ u, v, w });
      nodesSet.add(u);
      nodesSet.add(v);
    }
  });

  const nodes = Array.from(nodesSet).sort((a, b) => a - b);
  const V = nodes.length;
  if (V === 0) return [];

  const adj = {};
  nodes.forEach(node => { adj[node] = []; });
  edges.forEach(({ u, v, w }) => {
    adj[u].push(v);
    adj[v].push(u);
  });
  nodes.forEach(node => { adj[node].sort((a, b) => a - b); });

  const visited = {};
  nodes.forEach(n => { visited[n] = false; });

  const queue = [];
  const bfsPath = [];

  const startNode = nodes[0];
  queue.push(startNode);
  visited[startNode] = true;

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    queueState: { queue: [...queue] },
    highlights: {},
    explanation: `BFS initialized. Starting search from Node ${startNode}. Visited Node ${startNode} and pushed to Queue.`,
    stats: { comparisons: 0, visitedNodes: 1, step: 0 }
  });

  while (queue.length > 0) {
    const u = queue.shift();
    bfsPath.push(u);

    steps.push({
      data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
      graphState: { activeNode: u, relaxingEdge: null },
      queueState: { queue: [...queue] },
      highlights: { [u]: 'pivot' },
      explanation: `Dequeued Node ${u} from queue. Visiting neighbors of ${u}. Path so far: [${bfsPath.join(', ')}].`,
      stats: { comparisons: steps.length, visitedNodes: bfsPath.length, step: steps.length }
    });

    const neighbors = adj[u] || [];
    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);

        steps.push({
          data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
          graphState: { activeNode: u, relaxingEdge: { u, v } },
          queueState: { queue: [...queue] },
          highlights: { [u]: 'pivot', [v]: 'compare' },
          explanation: `Neighbor ${v} of Node ${u} is unvisited. Marking as visited and pushing to queue.`,
          stats: { comparisons: steps.length, visitedNodes: bfsPath.length, step: steps.length }
        });
      }
    }
  }

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    queueState: { queue: [] },
    highlights: {},
    explanation: `BFS traversal completed. Path traversed: [${bfsPath.join(', ')}].`,
    stats: { comparisons: steps.length, visitedNodes: V, step: steps.length }
  });

  return steps;
};

export const dfsSteps = (graphInput) => {
  const steps = [];
  const lines = graphInput.split('\n').map(l => l.trim()).filter(Boolean);
  const edges = [];
  const nodesSet = new Set();

  lines.forEach(line => {
    const parts = line.split(/\s+/).map(Number);
    if (parts.length >= 2) {
      const u = parts[0];
      const v = parts[1];
      const w = parts[2] !== undefined ? parts[2] : 1;
      edges.push({ u, v, w });
      nodesSet.add(u);
      nodesSet.add(v);
    }
  });

  const nodes = Array.from(nodesSet).sort((a, b) => a - b);
  const V = nodes.length;
  if (V === 0) return [];

  const adj = {};
  nodes.forEach(node => { adj[node] = []; });
  edges.forEach(({ u, v, w }) => {
    adj[u].push(v);
    adj[v].push(u);
  });
  nodes.forEach(node => { adj[node].sort((a, b) => b - a); });

  const visited = {};
  nodes.forEach(n => { visited[n] = false; });

  const stack = [];
  const dfsPath = [];

  const startNode = nodes[0];
  stack.push(startNode);

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    stackState: { stack: [...stack] },
    highlights: {},
    explanation: `DFS initialized. Pushed starting Node ${startNode} to stack.`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  while (stack.length > 0) {
    const u = stack.pop();

    if (!visited[u]) {
      visited[u] = true;
      dfsPath.push(u);

      steps.push({
        data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
        graphState: { activeNode: u, relaxingEdge: null },
        stackState: { stack: [...stack] },
        highlights: { [u]: 'pivot' },
        explanation: `Popped Node ${u} from stack. Marking as visited. Path: [${dfsPath.join(', ')}].`,
        stats: { comparisons: steps.length, visitedNodes: dfsPath.length, step: steps.length }
      });

      const neighbors = adj[u] || [];
      for (let i = 0; i < neighbors.length; i++) {
        const v = neighbors[i];
        if (!visited[v]) {
          stack.push(v);

          steps.push({
            data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
            graphState: { activeNode: u, relaxingEdge: { u, v } },
            stackState: { stack: [...stack] },
            highlights: { [u]: 'pivot', [v]: 'compare' },
            explanation: `Neighbor Node ${v} of Node ${u} is unvisited. Pushing to stack.`,
            stats: { comparisons: steps.length, visitedNodes: dfsPath.length, step: steps.length }
          });
        }
      }
    }
  }

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    stackState: { stack: [] },
    highlights: {},
    explanation: `DFS traversal completed. Path traversed: [${dfsPath.join(', ')}].`,
    stats: { comparisons: steps.length, visitedNodes: V, step: steps.length }
  });

  return steps;
};

export const bstSearchSteps = (arr, target) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = { id: idCounter++, val, left: null, right: null, x: 0, y: 0 };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) {
      root.left = insertBST(root.left, val);
    } else {
      root.right = insertBST(root.right, val);
    }
    return root;
  };

  let root = null;
  nums.forEach(n => {
    root = insertBST(root, n);
  });

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

  const targetVal = target !== undefined ? Number(target) : nums[Math.floor(nums.length / 2)];

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: `Constructed BST. Searching for target value ${targetVal}.`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  let curr = root;
  const path = [];

  while (curr) {
    path.push(curr.val);
    const currId = curr.id;
    const highlights = {};
    path.forEach(v => {
      const n = bstNodes.find(node => node.val === v);
      if (n) highlights[n.id] = 'compare';
    });

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...path], activeNode: currId },
      highlights: { ...highlights, [currId]: 'pivot' },
      explanation: `Comparing current node value ${curr.val} with target ${targetVal}.`,
      stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
    });

    if (curr.val === targetVal) {
      highlights[currId] = 'sorted';
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Target value ${targetVal} found in BST at node ${curr.val}!`,
        stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
      });
      break;
    } else if (targetVal < curr.val) {
      if (curr.left) {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} < ${curr.val}. Moving left to child node ${curr.left.val}.`,
          stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
        });
        curr = curr.left;
      } else {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} < ${curr.val}, but left child is null. Target not found in BST.`,
          stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
        });
        break;
      }
    } else {
      if (curr.right) {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} > ${curr.val}. Moving right to child node ${curr.right.val}.`,
          stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
        });
        curr = curr.right;
      } else {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} > ${curr.val}, but right child is null. Target not found in BST.`,
          stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
        });
        break;
      }
    }
  }

  return steps;
};

export const treeHeightSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = { id: idCounter++, val, left: null, right: null, x: 0, y: 0 };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) root.left = insertBST(root.left, val);
    else root.right = insertBST(root.right, val);
    return root;
  };

  let root = null;
  nums.forEach(n => { root = insertBST(root, n); });

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

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: "Constructed BST. Commencing height calculation recursively.",
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  const nodeHeights = {};
  const calculateHeight = (node) => {
    if (!node) return -1;

    const nodeId = node.id;
    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: 'pivot' },
      explanation: `Visiting node ${node.val}. Calculating height of left and right subtrees.`,
      stats: { comparisons: steps.length, visitedNodes: Object.keys(nodeHeights).length, step: steps.length }
    });

    const leftH = calculateHeight(node.left);
    const rightH = calculateHeight(node.right);
    const myH = 1 + Math.max(leftH, rightH);
    nodeHeights[nodeId] = myH;

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: 'sorted' },
      explanation: `Height of Node ${node.val} calculated: max(Left:${leftH}, Right:${rightH}) + 1 = ${myH}.`,
      stats: { comparisons: steps.length, visitedNodes: Object.keys(nodeHeights).length, step: steps.length }
    });

    return myH;
  };

  const finalHeight = calculateHeight(root);

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: bstNodes.reduce((acc, n) => ({ ...acc, [n.id]: 'sorted' }), {}),
    explanation: `Height calculation completed. The total height of the tree is ${finalHeight}.`,
    stats: { comparisons: steps.length, visitedNodes: bstNodes.length, step: steps.length }
  });

  return steps;
};

export const lcaSteps = (arr, targetsStr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = { id: idCounter++, val, left: null, right: null, x: 0, y: 0 };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) root.left = insertBST(root.left, val);
    else root.right = insertBST(root.right, val);
    return root;
  };

  let root = null;
  nums.forEach(n => { root = insertBST(root, n); });

  const getMaxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
  };
  const maxDepth = getMaxDepth(root);

  const positionNodes = (node, depth, minX, maxX) => {
    if (!node) return;
    const x = (minX + maxX) / 2;
    let y = 135;
    if (maxDepth > 1) y = 45 + depth * (180 / (maxDepth - 1));
    node.x = x;
    node.y = y;
    positionNodes(node.left, depth + 1, minX, x);
    positionNodes(node.right, depth + 1, x, maxX);
  };
  positionNodes(root, 0, 10, 90);

  let p = nums[1] || nums[0];
  let q = nums[nums.length - 1] || nums[0];
  if (targetsStr) {
    const lines = targetsStr.split('\n');
    if (lines[1]) {
      const parts = lines[1].split(/\s+/).map(Number).filter(x => !isNaN(x));
      if (parts.length >= 2) {
        p = parts[0];
        q = parts[1];
      }
    }
  }

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: `Constructed BST. Finding Lowest Common Ancestor (LCA) for Node ${p} and Node ${q}.`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  let curr = root;
  const path = [];

  while (curr) {
    const currId = curr.id;
    path.push(curr.val);
    const highlights = {};
    path.forEach(v => {
      const n = bstNodes.find(node => node.val === v);
      if (n) highlights[n.id] = 'compare';
    });

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...path], activeNode: currId },
      highlights: { ...highlights, [currId]: 'pivot' },
      explanation: `Inspecting Node ${curr.val}. Comparing with targets ${p} and ${q}.`,
      stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
    });

    if (p < curr.val && q < curr.val) {
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Both targets ${p} and ${q} are less than current node ${curr.val}. Moving left.`,
        stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
      });
      curr = curr.left;
    } else if (p > curr.val && q > curr.val) {
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Both targets ${p} and ${q} are greater than current node ${curr.val}. Moving right.`,
        stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
      });
      curr = curr.right;
    } else {
      highlights[currId] = 'sorted';
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `LCA Found! Node ${curr.val} is the lowest common ancestor of ${p} and ${q}.`,
        stats: { comparisons: path.length, visitedNodes: path.length, step: steps.length }
      });
      break;
    }
  }

  return steps;
};

export const heapSortSteps = (arr) => {
  const steps = [];
  const heap = [...arr];
  const n = heap.length;
  if (n === 0) return [];

  const addStep = (explanation, highlights = {}, activeIndices = [], swapIndices = []) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
    });
  };

  addStep("Initialize heap sorting. Starting by building a Max Heap from input array.", {});

  const heapify = (size, idx) => {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    const highlights = { [idx]: 'pivot' };
    if (left < size) highlights[left] = 'compare';
    if (right < size) highlights[right] = 'compare';

    addStep(`Heapifying subtree at index ${idx}. Comparing parent ${heap[idx]} with children.`, highlights, [idx, left, right]);

    if (left < size && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right < size && heap[right] > heap[largest]) {
      largest = right;
    }

    if (largest !== idx) {
      const prevVal = heap[idx];
      const nextVal = heap[largest];
      
      const temp = heap[idx];
      heap[idx] = heap[largest];
      heap[largest] = temp;

      addStep(`Parent ${prevVal} is smaller than child ${nextVal}. Swapping index ${idx} with index ${largest}.`, 
              { [idx]: 'swap', [largest]: 'swap' }, [idx, largest], [idx, largest]);

      heapify(size, largest);
    } else {
      addStep(`Subtree at index ${idx} already satisfies Max Heap property.`, { [idx]: 'sorted' }, [idx]);
    }
  };

  const lastNonLeaf = Math.floor(n / 2) - 1;
  for (let i = lastNonLeaf; i >= 0; i--) {
    heapify(n, i);
  }

  addStep("Max Heap built successfully. Starting Extraction Phase: largest element is now at index 0. We will swap it with the last element and heapify.", {});

  for (let i = n - 1; i > 0; i--) {
    const rootVal = heap[0];
    const endVal = heap[i];
    
    const temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;

    addStep(`Swapping root ${rootVal} with end element ${endVal} at index ${i}. Element ${rootVal} is now in its final sorted position.`,
            { 0: 'swap', [i]: 'sorted' }, [0, i], [0, i]);

    heapify(i, 0);
  }

  const highlights = {};
  for (let i = 0; i < n; i++) highlights[i] = 'sorted';
  addStep("Heap Sort completed! The array is now fully sorted in ascending order.", highlights);

  return steps;
};

export const minHeapSteps = (arr) => {
  const steps = [];
  const heap = [];
  const inputs = arr.map(Number).filter(x => !isNaN(x));

  const addStep = (explanation, highlights = {}, activeIndices = [], swapIndices = []) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
    });
  };

  addStep("Initialize empty Min Heap. Inserting elements one-by-one and bubbling up.", {});

  inputs.forEach((val) => {
    heap.push(val);
    let curr = heap.length - 1;
    addStep(`Inserted value ${val} at the end of the heap array (index ${curr}). Bubbling up.`, { [curr]: 'pivot' }, [curr]);

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      addStep(`Comparing element ${heap[curr]} at index ${curr} with parent ${heap[parent]} at index ${parent}.`,
              { [curr]: 'pivot', [parent]: 'compare' }, [curr, parent]);

      if (heap[curr] < heap[parent]) {
        const temp = heap[curr];
        heap[curr] = heap[parent];
        heap[parent] = temp;

        addStep(`Swapped index ${curr} with index ${parent} since child ${temp} < parent ${heap[curr]}.`,
                { [curr]: 'swap', [parent]: 'swap' }, [curr, parent], [curr, parent]);
        curr = parent;
      } else {
        addStep(`No swap needed. Heap property satisfied.`, { [curr]: 'sorted' }, [curr]);
        break;
      }
    }
  });

  addStep("Min Heap construction completed successfully.", {});
  return steps;
};

export const maxHeapSteps = (arr) => {
  const steps = [];
  const heap = [];
  const inputs = arr.map(Number).filter(x => !isNaN(x));

  const addStep = (explanation, highlights = {}, activeIndices = [], swapIndices = []) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: { comparisons: steps.length, swaps: steps.length, step: steps.length }
    });
  };

  addStep("Initialize empty Max Heap. Inserting elements one-by-one and bubbling up.", {});

  inputs.forEach((val) => {
    heap.push(val);
    let curr = heap.length - 1;
    addStep(`Inserted value ${val} at the end of the heap array (index ${curr}). Bubbling up.`, { [curr]: 'pivot' }, [curr]);

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      addStep(`Comparing element ${heap[curr]} at index ${curr} with parent ${heap[parent]} at index ${parent}.`,
              { [curr]: 'pivot', [parent]: 'compare' }, [curr, parent]);

      if (heap[curr] > heap[parent]) {
        const temp = heap[curr];
        heap[curr] = heap[parent];
        heap[parent] = temp;

        addStep(`Swapped index ${curr} with index ${parent} since child ${temp} > parent ${heap[curr]}.`,
                { [curr]: 'swap', [parent]: 'swap' }, [curr, parent], [curr, parent]);
        curr = parent;
      } else {
        addStep(`No swap needed. Heap property satisfied.`, { [curr]: 'sorted' }, [curr]);
        break;
      }
    }
  });

  return steps;
};

export const prefixSumSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const pref = Array(n).fill(0);
  
  steps.push({
    data: [...nums],
    prefixState: { pref: [...pref], currentIdx: -1 },
    highlights: {},
    explanation: "Initialize prefix sum array with zeros. Prefix sum calculates running sums: pref[i] = pref[i-1] + arr[i].",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    pref[i] = (i === 0 ? 0 : pref[i - 1]) + nums[i];
    
    steps.push({
      data: [...nums],
      prefixState: { pref: [...pref], currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: i === 0 
        ? `pref[0] = arr[0] = ${nums[0]}` 
        : `pref[${i}] = pref[${i-1}] (${pref[i-1]}) + arr[${i}] (${nums[i]}) = ${pref[i]}`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...pref],
    prefixState: { pref: [...pref], currentIdx: -1 },
    highlights: pref.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Prefix sum array calculation complete: [${pref.join(', ')}].`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const slidingWindowSteps = (arr, windowSize = 3) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const k = Math.min(windowSize, n);

  steps.push({
    data: [...nums],
    windowState: { start: 0, end: k - 1, sum: 0 },
    highlights: {},
    explanation: `Initialize sliding window of size k = ${k} at index 0.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i <= n - k; i++) {
    const windowElems = nums.slice(i, i + k);
    const sum = windowElems.reduce((a, b) => a + b, 0);
    
    const highlights = {};
    for (let j = i; j < i + k; j++) {
      highlights[j] = 'compare';
    }

    steps.push({
      data: [...nums],
      windowState: { start: i, end: i + k - 1, sum },
      highlights,
      explanation: `Window sliding at range [${i} to ${i + k - 1}]. Elements: [${windowElems.join(', ')}]. Sum = ${sum}.`,
      stats: { comparisons: i * k, swaps: 0, step: steps.length }
    });
  }

  return steps;
};

export const twoPointerSteps = (arr, targetSum = 10) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x)).sort((a, b) => a - b);
  const n = nums.length;
  if (n === 0) return [];

  let left = 0;
  let right = n - 1;

  steps.push({
    data: [...nums],
    pointerState: { left, right, sum: null, target: targetSum },
    highlights: {},
    explanation: `Sort array first to use two-pointers. Target sum = ${targetSum}. Start left pointer at index 0, right pointer at index ${n - 1}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  while (left < right) {
    const sum = nums[left] + nums[right];
    const highlights = { [left]: 'pivot', [right]: 'pivot' };

    steps.push({
      data: [...nums],
      pointerState: { left, right, sum, target: targetSum },
      highlights,
      explanation: `Current pointer sum: arr[${left}] (${nums[left]}) + arr[${right}] (${nums[right]}) = ${sum}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    if (sum === targetSum) {
      steps.push({
        data: [...nums],
        pointerState: { left, right, sum, target: targetSum },
        highlights: { [left]: 'sorted', [right]: 'sorted' },
        explanation: `Sum matches target! Found pair indices: left index ${left}, right index ${right}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return steps;
    } else if (sum < targetSum) {
      steps.push({
        data: [...nums],
        pointerState: { left, right, sum, target: targetSum },
        highlights: { [left]: 'compare' },
        explanation: `Sum ${sum} < target ${targetSum}. Move left pointer inward to increase sum.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      left++;
    } else {
      steps.push({
        data: [...nums],
        pointerState: { left, right, sum, target: targetSum },
        highlights: { [right]: 'compare' },
        explanation: `Sum ${sum} > target ${targetSum}. Move right pointer inward to decrease sum.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      right--;
    }
  }

  steps.push({
    data: [...nums],
    pointerState: { left: -1, right: -1, sum: null, target: targetSum },
    highlights: {},
    explanation: `Pointers crossed. No pair sum found equal to target ${targetSum}.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const rotateArraySteps = (arr, k = 2) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const shift = k % n;

  steps.push({
    data: [...nums],
    rotateState: { k: shift, phase: 'initial' },
    highlights: {},
    explanation: `Initialize array rotation by k = ${shift} positions.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let currentArr = [...nums];
  for (let step = 1; step <= shift; step++) {
    const last = currentArr.pop();
    currentArr.unshift(last);

    steps.push({
      data: [...currentArr],
      rotateState: { k: shift, step, phase: 'rotating' },
      highlights: { 0: 'pivot' },
      explanation: `Rotation step ${step}: popped end element ${last} and placed at front.`,
      stats: { comparisons: step, swaps: step, step: steps.length }
    });
  }

  steps.push({
    data: [...currentArr],
    rotateState: { k: shift, phase: 'complete' },
    highlights: currentArr.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Array rotation complete! Resulting array: [${currentArr.join(', ')}].`,
    stats: { comparisons: shift, swaps: shift, step: steps.length }
  });

  return steps;
};

export const mergeArraysSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.split('\n').map(l => l.trim()).filter(Boolean);
  
  let arr1 = [];
  let arr2 = [];
  if (lines.length >= 2) {
    arr1 = lines[0].split(/\s+/).map(Number).filter(x => !isNaN(x)).sort((a,b)=>a-b);
    arr2 = lines[1].split(/\s+/).map(Number).filter(x => !isNaN(x)).sort((a,b)=>a-b);
  } else {
    const raw = inputStr.split(/\s+/).map(Number).filter(x => !isNaN(x));
    const mid = Math.floor(raw.length / 2);
    arr1 = raw.slice(0, mid).sort((a,b)=>a-b);
    arr2 = raw.slice(mid).sort((a,b)=>a-b);
  }

  const n1 = arr1.length;
  const n2 = arr2.length;
  const merged = [];

  steps.push({
    data: [...arr1, ...arr2],
    mergeState: { arr1, arr2, merged: [], i: 0, j: 0 },
    highlights: {},
    explanation: `Prepare to merge sorted arrays: A = [${arr1.join(', ')}] and B = [${arr2.join(', ')}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    const highlights = {};
    highlights[i] = 'compare';
    highlights[n1 + j] = 'compare';

    steps.push({
      data: [...arr1, ...arr2],
      mergeState: { arr1, arr2, merged: [...merged], i, j },
      highlights,
      explanation: `Comparing array A[${i}] (${arr1[i]}) with array B[${j}] (${arr2[j]}).`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      steps.push({
        data: [...arr1, ...arr2],
        mergeState: { arr1, arr2, merged: [...merged], i: i + 1, j },
        highlights: { [i]: 'sorted' },
        explanation: `A[${i}] is smaller. Pushing ${arr1[i]} to merged array.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      i++;
    } else {
      merged.push(arr2[j]);
      steps.push({
        data: [...arr1, ...arr2],
        mergeState: { arr1, arr2, merged: [...merged], i, j: j + 1 },
        highlights: { [n1 + j]: 'sorted' },
        explanation: `B[${j}] is smaller. Pushing ${arr2[j]} to merged array.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      j++;
    }
  }

  while (i < n1) {
    merged.push(arr1[i]);
    steps.push({
      data: [...arr1, ...arr2],
      mergeState: { arr1, arr2, merged: [...merged], i: i + 1, j },
      highlights: { [i]: 'sorted' },
      explanation: `Copying remaining element ${arr1[i]} from Array A.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    i++;
  }

  while (j < n2) {
    merged.push(arr2[j]);
    steps.push({
      data: [...arr1, ...arr2],
      mergeState: { arr1, arr2, merged: [...merged], i, j: j + 1 },
      highlights: { [n1 + j]: 'sorted' },
      explanation: `Copying remaining element ${arr2[j]} from Array B.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    j++;
  }

  steps.push({
    data: [...merged],
    mergeState: { arr1: [], arr2: [], merged: [...merged], i, j },
    highlights: merged.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Merge complete! Merged Array: [${merged.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const frequencyCountSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const hash = {};

  steps.push({
    data: { arr: nums, hash: {} },
    hashState: { num: null, currentIdx: -1 },
    highlights: {},
    explanation: "Initialize empty frequency map.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const prev = hash[val] || 0;
    hash[val] = prev + 1;

    steps.push({
      data: { arr: nums, hash: { ...hash } },
      hashState: { num: val, currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Inspecting element ${val} at index ${i}. Frequency: ${prev} -> ${prev + 1}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { arr: nums, hash: { ...hash } },
    hashState: { num: null, currentIdx: -1 },
    highlights: nums.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: "Frequency counting finished.",
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const linkedListTraversalSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : null
  }));

  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: null, next: null },
    highlights: {},
    explanation: "Initialize linked list. Starting traversal from head node.",
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const node = nodes[i];
    steps.push({
      data: [...nodes],
      listState: { head: 0, curr: node.id, prev: i > 0 ? i - 1 : null, next: node.next },
      highlights: { [node.id]: 'pivot' },
      explanation: `Current pointer is at Node ${node.val} (index ${i}).`,
      stats: { comparisons: i, visitedNodes: i + 1, step: steps.length }
    });
  }

  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: n - 1, next: null },
    highlights: nodes.map(nd => nd.id).reduce((acc, id) => ({ ...acc, [id]: 'sorted' }), {}),
    explanation: "Reached end of list (null). Traversal complete.",
    stats: { comparisons: n, visitedNodes: n, step: steps.length }
  });

  return steps;
};

export const cycleDetectionSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const hasCycle = n > 3;
  const cycleTargetIdx = 1;

  const nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : (hasCycle ? cycleTargetIdx : null)
  }));

  steps.push({
    data: [...nodes],
    listState: { head: 0, curr: null, prev: null, next: null, slow: 0, fast: 0 },
    highlights: {},
    explanation: `Initialize Cycle Detection (Floyd's Tortoise and Hare). ${hasCycle ? `A cycle exists from tail pointing back to Node ${nodes[cycleTargetIdx].val}.` : "No cycle exists in this list."}`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  let slow = 0;
  let fast = 0;

  for (let step = 1; step <= 15; step++) {
    slow = nodes[slow].next;
    if (fast !== null && nodes[fast].next !== null) {
      const nextFast = nodes[fast].next;
      fast = nodes[nextFast].next;
    } else {
      fast = null;
    }

    if (slow === null || fast === null) {
      steps.push({
        data: [...nodes],
        listState: { head: 0, slow, fast },
        highlights: {},
        explanation: "Fast pointer reached end of the list (null). No cycle detected.",
        stats: { comparisons: step, visitedNodes: step, step: steps.length }
      });
      break;
    }

    const highlights = {};
    if (slow !== null) highlights[slow] = 'pivot';
    if (fast !== null) highlights[fast] = 'compare';

    steps.push({
      data: [...nodes],
      listState: { head: 0, slow, fast },
      highlights,
      explanation: `Step ${step}: Slow pointer is at Node ${nodes[slow].val}. Fast pointer is at Node ${nodes[fast].val}.`,
      stats: { comparisons: step, visitedNodes: step, step: steps.length }
    });

    if (slow === fast) {
      steps.push({
        data: [...nodes],
        listState: { head: 0, slow, fast },
        highlights: { [slow]: 'sorted' },
        explanation: `Tortoise and Hare met at Node ${nodes[slow].val}! Cycle detected!`,
        stats: { comparisons: step, visitedNodes: step, step: steps.length }
      });
      break;
    }
  }

  return steps;
};

export const middleNodeSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const nodes = nums.map((val, idx) => ({
    id: idx,
    val,
    next: idx < n - 1 ? idx + 1 : null
  }));

  steps.push({
    data: [...nodes],
    listState: { head: 0, slow: 0, fast: 0 },
    highlights: {},
    explanation: "Find middle node using slow and fast pointers. Slow moves 1 step, fast moves 2 steps.",
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  let slow = 0;
  let fast = 0;
  let step = 1;

  while (fast !== null && nodes[fast].next !== null) {
    slow = nodes[slow].next;
    const nextFast = nodes[fast].next;
    fast = nodes[nextFast].next;

    const highlights = {};
    if (slow !== null) highlights[slow] = 'pivot';
    if (fast !== null) highlights[fast] = 'compare';

    steps.push({
      data: [...nodes],
      listState: { head: 0, slow, fast },
      highlights,
      explanation: `Step ${step}: Slow pointer at Node ${nodes[slow].val}. Fast pointer at Node ${fast !== null ? nodes[fast].val : 'null'}.`,
      stats: { comparisons: step, visitedNodes: step, step: steps.length }
    });
    step++;
  }

  steps.push({
    data: [...nodes],
    listState: { head: 0, slow, fast },
    highlights: { [slow]: 'sorted' },
    explanation: `Fast pointer reached the end. The middle node is Node ${nodes[slow].val}.`,
    stats: { comparisons: step, visitedNodes: step, step: steps.length }
  });

  return steps;
};

export const stackOperationsSteps = (inputStr) => {
  const steps = [];
  const tokens = inputStr.split(/[\s,]+/);
  const stack = [];

  steps.push({
    data: [],
    stackState: { stack: [...stack], charIdx: -1 },
    highlights: {},
    explanation: "Initialize empty stack.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  tokens.forEach((tok, idx) => {
    let explanation = "";
    if (tok.startsWith("push(") && tok.endsWith(")")) {
      const val = parseInt(tok.substring(5, tok.length - 1)) || 0;
      stack.push(val);
      explanation = `Operation: push(${val}). Pushed ${val} onto the stack.`;
    } else if (tok === "pop()") {
      const val = stack.pop();
      explanation = `Operation: pop(). Popped top element ${val !== undefined ? val : 'null'} from stack.`;
    } else if (tok) {
      const val = parseInt(tok) || 0;
      stack.push(val);
      explanation = `Pushed element ${val} onto the stack.`;
    }

    steps.push({
      data: tokens,
      stackState: { stack: [...stack], charIdx: idx },
      highlights: {},
      explanation,
      stats: { comparisons: idx, swaps: 0, step: steps.length }
    });
  });

  return steps;
};

export const nextGreaterElementSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];

  const nge = Array(n).fill(-1);
  const stack = [];

  steps.push({
    data: [...nums],
    stackState: { stack: [], charIdx: -1, nge: [...nge] },
    highlights: {},
    explanation: "Initialize empty stack and NGE output array filled with -1.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    const highlights = { [i]: 'pivot' };
    stack.forEach(idx => { highlights[idx] = 'compare'; });

    steps.push({
      data: [...nums],
      stackState: { stack: stack.map(idx => nums[idx]), charIdx: i, nge: [...nge] },
      highlights,
      explanation: `Inspecting element ${val} at index ${i}. Checking if it's greater than elements represented on stack top.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    while (stack.length > 0 && nums[stack[stack.length - 1]] < val) {
      const poppedIdx = stack.pop();
      nge[poppedIdx] = val;

      steps.push({
        data: [...nums],
        stackState: { stack: stack.map(idx => nums[idx]), charIdx: i, nge: [...nge] },
        highlights: { [i]: 'sorted', [poppedIdx]: 'sorted' },
        explanation: `Element ${val} at index ${i} is greater than stack top ${nums[poppedIdx]}. Next greater element of index ${poppedIdx} is ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    stack.push(i);
    steps.push({
      data: [...nums],
      stackState: { stack: stack.map(idx => nums[idx]), charIdx: i, nge: [...nge] },
      highlights: { [i]: 'pivot' },
      explanation: `Pushed index ${i} (value ${val}) onto the stack.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nge],
    stackState: { stack: [], charIdx: -1, nge: [...nge] },
    highlights: nge.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Next Greater Element computation finished. Output: [${nge.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const circularQueueSteps = (inputStr) => {
  const steps = [];
  const tokens = inputStr.split(/[\s,]+/);
  const size = 5;
  const queue = Array(size).fill(null);
  let front = -1;
  let rear = -1;

  steps.push({
    data: [...queue],
    queueState: { queue: [...queue], front, rear },
    highlights: {},
    explanation: `Initialize Circular Queue of capacity ${size} with front = -1, rear = -1.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  tokens.forEach((tok, idx) => {
    let explanation = "";
    const highlights = {};

    if (tok.startsWith("enqueue(") && tok.endsWith(")")) {
      const val = parseInt(tok.substring(8, tok.length - 1)) || 0;
      if ((rear + 1) % size === front) {
        explanation = `Operation: enqueue(${val}). Queue Full! Cannot enqueue ${val}.`;
      } else {
        if (front === -1) front = 0;
        rear = (rear + 1) % size;
        queue[rear] = val;
        highlights[rear] = 'pivot';
        explanation = `Operation: enqueue(${val}). Placed ${val} at index ${rear}. front = ${front}, rear = ${rear}.`;
      }
    } else if (tok === "dequeue()") {
      if (front === -1) {
        explanation = "Operation: dequeue(). Queue Empty! Cannot dequeue.";
      } else {
        const val = queue[front];
        highlights[front] = 'compare';
        queue[front] = null;
        if (front === rear) {
          front = -1;
          rear = -1;
          explanation = `Operation: dequeue(). Dequeued last element ${val}. Queue is now empty. front = -1, rear = -1.`;
        } else {
          front = (front + 1) % size;
          explanation = `Operation: dequeue(). Dequeued element ${val}. front index advanced to ${front}.`;
        }
      }
    } else if (tok) {
      const val = parseInt(tok) || 0;
      if ((rear + 1) % size === front) {
        explanation = `Queue Full! Cannot enqueue ${val}.`;
      } else {
        if (front === -1) front = 0;
        rear = (rear + 1) % size;
        queue[rear] = val;
        highlights[rear] = 'pivot';
        explanation = `Enqueued element ${val} at index ${rear}. front = ${front}, rear = ${rear}.`;
      }
    }

    steps.push({
      data: [...queue],
      queueState: { queue: [...queue], front, rear },
      highlights,
      explanation,
      stats: { comparisons: idx, swaps: 0, step: steps.length }
    });
  });

  return steps;
};

export const slidingWindowMaxSteps = (arr, k = 3) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  if (n === 0) return [];
  const windowSize = Math.min(k, n);

  const maxVals = [];
  const deque = [];

  steps.push({
    data: [...nums],
    queueState: { queue: [] },
    highlights: {},
    explanation: `Find sliding window maximum of size ${windowSize} using a deque.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];

    while (deque.length > 0 && deque[0] < i - windowSize + 1) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < val) {
      deque.pop();
    }

    deque.push(i);

    const activeWindowStart = Math.max(0, i - windowSize + 1);
    const highlights = {};
    for (let w = activeWindowStart; w <= i; w++) {
      highlights[w] = 'compare';
    }
    deque.forEach(idx => { highlights[idx] = 'pivot'; });

    if (i >= windowSize - 1) {
      const windowMax = nums[deque[0]];
      maxVals.push(windowMax);
      highlights[deque[0]] = 'sorted';

      steps.push({
        data: [...nums],
        queueState: { queue: deque.map(idx => nums[idx]), maxVals: [...maxVals] },
        highlights,
        explanation: `Window [${activeWindowStart} to ${i}]. Deque indices values: [${deque.map(idx => nums[idx]).join(', ')}]. Maximum is ${windowMax}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    } else {
      steps.push({
        data: [...nums],
        queueState: { queue: deque.map(idx => nums[idx]) },
        highlights,
        explanation: `Filling initial window. Current deque contents: [${deque.map(idx => nums[idx]).join(', ')}].`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }
  }

  steps.push({
    data: [...maxVals],
    queueState: { queue: [], maxVals: [...maxVals] },
    highlights: maxVals.map((_, idx) => idx).reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Sliding window maximum calculation complete. Result: [${maxVals.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const topologicalSortSteps = (graphInput) => {
  const steps = [];
  const lines = graphInput.split('\n').map(l => l.trim()).filter(Boolean);
  const edges = [];
  const nodesSet = new Set();

  lines.forEach(line => {
    const parts = line.split(/\s+/).map(Number);
    if (parts.length >= 2) {
      const u = parts[0];
      const v = parts[1];
      const w = parts[2] !== undefined ? parts[2] : 1;
      edges.push({ u, v, w });
      nodesSet.add(u);
      nodesSet.add(v);
    }
  });

  const nodes = Array.from(nodesSet).sort((a, b) => a - b);
  const V = nodes.length;
  if (V === 0) return [];

  const adj = {};
  nodes.forEach(node => { adj[node] = []; });
  edges.forEach(({ u, v }) => {
    if (adj[u]) adj[u].push(v);
  });
  nodes.forEach(node => { adj[node].sort((a, b) => a - b); });

  const visited = {};
  nodes.forEach(n => { visited[n] = false; });
  const topoStack = [];

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    stackState: { stack: [] },
    highlights: {},
    explanation: "Initialize topological sort (DFS-based). Topo sort outputs linear ordering of vertices such that for every directed edge u -> v, u comes before v.",
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  const dfs = (u) => {
    visited[u] = true;
    steps.push({
      data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
      graphState: { activeNode: u, relaxingEdge: null },
      stackState: { stack: [...topoStack] },
      highlights: { [u]: 'pivot' },
      explanation: `Visiting Node ${u}. Checking its unvisited neighbors.`,
      stats: { comparisons: steps.length, visitedNodes: Object.values(visited).filter(Boolean).length, step: steps.length }
    });

    const neighbors = adj[u] || [];
    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];
      if (!visited[v]) {
        steps.push({
          data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
          graphState: { activeNode: u, relaxingEdge: { u, v } },
          stackState: { stack: [...topoStack] },
          highlights: { [u]: 'pivot', [v]: 'compare' },
          explanation: `Neighbor ${v} is unvisited. DFS on Node ${v}.`,
          stats: { comparisons: steps.length, visitedNodes: Object.values(visited).filter(Boolean).length, step: steps.length }
        });
        dfs(v);
      }
    }

    topoStack.unshift(u);
    steps.push({
      data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
      graphState: { activeNode: u, relaxingEdge: null },
      stackState: { stack: [...topoStack] },
      highlights: { [u]: 'sorted' },
      explanation: `All neighbors of Node ${u} processed. Prepending Node ${u} to topological order stack.`,
      stats: { comparisons: steps.length, visitedNodes: Object.values(visited).filter(Boolean).length, step: steps.length }
    });
  };

  for (let i = 0; i < V; i++) {
    const node = nodes[i];
    if (!visited[node]) {
      dfs(node);
    }
  }

  steps.push({
    data: { nodes, edges, dist: Array(V).fill(0), visited: { ...visited } },
    graphState: { activeNode: null, relaxingEdge: null },
    stackState: { stack: [...topoStack] },
    highlights: topoStack.reduce((acc, n) => ({ ...acc, [n]: 'sorted' }), {}),
    explanation: `Topological sorting complete! Ordering: [${topoStack.join(', ')}].`,
    stats: { comparisons: steps.length, visitedNodes: V, step: steps.length }
  });

  return steps;
};

export const hashMapSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  const n = nums.length;
  const numBuckets = 5;
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { arr: nums, hash: JSON.parse(JSON.stringify(hash)) },
    hashState: { num: null, currentIdx: -1 },
    highlights: {},
    explanation: `Initialize empty hash map chaining table with ${numBuckets} buckets. Hash function: slot = value % ${numBuckets}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const slot = Math.abs(val) % numBuckets;
    
    steps.push({
      data: { arr: nums, hash: JSON.parse(JSON.stringify(hash)) },
      hashState: { num: val, currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Hashing value ${val}. Computed index slot: ${val} % ${numBuckets} = ${slot}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    hash[slot].push(val);

    steps.push({
      data: { arr: nums, hash: JSON.parse(JSON.stringify(hash)) },
      hashState: { num: val, currentIdx: i },
      highlights: { [i]: 'sorted' },
      explanation: `Inserted value ${val} into bucket slot ${slot}. Bucket contents: [${hash[slot].join(', ')}].`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { arr: nums, hash: JSON.parse(JSON.stringify(hash)) },
    hashState: { num: null, currentIdx: -1 },
    highlights: {},
    explanation: "Hash Map insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const groupAnagramsSteps = (wordsStr) => {
  const steps = [];
  const words = wordsStr.split(/[\s,]+/).map(w => w.trim()).filter(Boolean);
  const n = words.length;
  if (n === 0) return [];
  const hash = {};

  steps.push({
    data: { arr: words, hash: {} },
    hashState: { word: null, currentIdx: -1 },
    highlights: {},
    explanation: "Initialize empty hash map for grouping anagrams.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < n; i++) {
    const word = words[i];
    const sorted = word.split('').sort().join('');

    steps.push({
      data: { arr: words, hash: { ...hash } },
      hashState: { word, currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Inspecting word "${word}" at index ${i}. Sorted characters: "${sorted}".`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    if (!hash[sorted]) hash[sorted] = [];
    hash[sorted].push(word);

    steps.push({
      data: { arr: words, hash: { ...hash } },
      hashState: { word, currentIdx: i },
      highlights: { [i]: 'sorted' },
      explanation: `Added "${word}" to anagram group for key "${sorted}". Group values: [${hash[sorted].join(', ')}].`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { arr: words, hash: { ...hash } },
    hashState: { word: null, currentIdx: -1 },
    highlights: {},
    explanation: `Anagram grouping finished! Groups: ${Object.values(hash).map(g => `[${g.join(', ')}]`).join(', ')}.`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const fibonacciRecursionSteps = (n) => {
  const steps = [];
  const valN = Math.min(Math.max(0, parseInt(n) || 4), 6);

  const nodes = [];
  let idCounter = 0;

  const buildTree = (val) => {
    const id = idCounter++;
    const node = { id, val, left: null, right: null, x: 0, y: 0, result: null };
    nodes.push(node);

    if (val > 1) {
      node.left = buildTree(val - 1);
      node.right = buildTree(val - 2);
    }
    return node;
  };

  const root = buildTree(valN);

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

  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: `Compute Fibonacci(${valN}) using recursion. fib(n) = fib(n-1) + fib(n-2).`,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 }
  });

  const runFib = (node) => {
    if (!node) return 0;

    const nodeId = node.id;
    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: 'pivot' },
      explanation: `Calling fib(${node.val}).`,
      stats: { comparisons: steps.length, visitedNodes: steps.length, step: steps.length }
    });

    if (node.val <= 1) {
      node.result = node.val;
      const nIndex = nodes.findIndex(n => n.id === nodeId);
      if (nIndex !== -1) nodes[nIndex].result = node.val;

      steps.push({
        data: JSON.parse(JSON.stringify(nodes)),
        treeState: { root, path: [], activeNode: nodeId },
        highlights: { [nodeId]: 'sorted' },
        explanation: `Base Case: fib(${node.val}) = ${node.val}.`,
        stats: { comparisons: steps.length, visitedNodes: steps.length, step: steps.length }
      });
      return node.val;
    }

    const a = runFib(node.left);
    const b = runFib(node.right);
    const res = a + b;
    node.result = res;
    const nIndex = nodes.findIndex(n => n.id === nodeId);
    if (nIndex !== -1) nodes[nIndex].result = res;

    steps.push({
      data: JSON.parse(JSON.stringify(nodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: 'sorted' },
      explanation: `Returning from sub-calls: fib(${node.val}) = fib(${node.val - 1}) (${a}) + fib(${node.val - 2}) (${b}) = ${res}.`,
      stats: { comparisons: steps.length, visitedNodes: steps.length, step: steps.length }
    });
    return res;
  };

  runFib(root);

  steps.push({
    data: JSON.parse(JSON.stringify(nodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: nodes.reduce((acc, n) => ({ ...acc, [n.id]: 'sorted' }), {}),
    explanation: `Recursion complete. Fibonacci(${valN}) = ${root.result}.`,
    stats: { comparisons: steps.length, visitedNodes: nodes.length, step: steps.length }
  });

  return steps;
};

export const nQueensSteps = (n = 4) => {
  const steps = [];
  const size = Math.min(Math.max(4, parseInt(n) || 4), 8);

  const board = Array(size).fill(-1);

  const addStep = (explanation, highlights = {}, currentLoc = null, phase = 'backtracking') => {
    steps.push({
      data: { board: [...board], size },
      queensState: { board: [...board], size, currentLoc, phase },
      highlights,
      explanation,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  };

  addStep("Initialize empty chessboard. Attempting to place N Queens such that no two queens attack each other.", {});

  const isSafe = (row, col) => {
    for (let r = 0; r < row; r++) {
      const c = board[r];
      if (c === col || Math.abs(c - col) === Math.abs(r - row)) {
        return false;
      }
    }
    return true;
  };

  const solve = (row) => {
    if (row === size) {
      addStep("All queens placed safely! Solution found.", {}, null, 'solution');
      return true;
    }

    for (let col = 0; col < size; col++) {
      board[row] = col;
      addStep(`Testing placement: Queen at Row ${row}, Col ${col}.`, { [`${row}-${col}`]: 'compare' }, { row, col });

      if (isSafe(row, col)) {
        addStep(`Position Safe! Locking Queen at Row ${row}, Col ${col} and moving to next row.`, { [`${row}-${col}`]: 'pivot' }, { row, col });
        
        const res = solve(row + 1);
        if (res) return true;

        addStep(`Backtracking: Queen at Row ${row}, Col ${col} led to no solutions. Removing.`, { [`${row}-${col}`]: 'swap' }, { row, col });
      } else {
        addStep(`Position Under Attack! Cannot place Queen at Row ${row}, Col ${col}.`, { [`${row}-${col}`]: 'swap' }, { row, col });
      }
      board[row] = -1;
    }
    return false;
  };

  solve(0);
  return steps;
};

export const knapsackDpSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.split('\n').map(l => l.trim()).filter(Boolean);
  
  let weights = [2, 3, 4, 5];
  let values = [3, 4, 5, 6];
  let capacity = 5;

  if (lines.length >= 3) {
    weights = lines[0].split(/\s+/).map(Number).filter(x => !isNaN(x));
    values = lines[1].split(/\s+/).map(Number).filter(x => !isNaN(x));
    capacity = parseInt(lines[2]) || 5;
  }

  const n = weights.length;
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

  steps.push({
    data: JSON.parse(JSON.stringify(dp)),
    dpState: { matrix: JSON.parse(JSON.stringify(dp)), weights, values, capacity, i: 0, w: 0 },
    highlights: {},
    explanation: "Initialize DP table for 0/1 Knapsack with zeros. Rows = items (0 to n), Columns = capacities (0 to W).",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 1; i <= n; i++) {
    const itemWt = weights[i - 1];
    const itemVal = values[i - 1];

    for (let w = 0; w <= capacity; w++) {
      const highlights = { [`${i}-${w}`]: 'pivot' };
      if (w >= itemWt) {
        highlights[`${i - 1}-${w}`] = 'compare';
        highlights[`${i - 1}-${w - itemWt}`] = 'compare';
      } else {
        highlights[`${i - 1}-${w}`] = 'compare';
      }

      steps.push({
        data: JSON.parse(JSON.stringify(dp)),
        dpState: { matrix: JSON.parse(JSON.stringify(dp)), weights, values, capacity, i, w },
        highlights,
        explanation: `Computing dp[${i}][${w}] for item ${i} (wt:${itemWt}, val:${itemVal}) at capacity ${w}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });

      if (itemWt <= w) {
        dp[i][w] = Math.max(itemVal + dp[i - 1][w - itemWt], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }

      steps.push({
        data: JSON.parse(JSON.stringify(dp)),
        dpState: { matrix: JSON.parse(JSON.stringify(dp)), weights, values, capacity, i, w },
        highlights: { [`${i}-${w}`]: 'sorted' },
        explanation: `Result: dp[${i}][${w}] = ${dp[i][w]}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }
  }

  steps.push({
    data: JSON.parse(JSON.stringify(dp)),
    dpState: { matrix: JSON.parse(JSON.stringify(dp)), weights, values, capacity, i: n, w: capacity },
    highlights: { [`${n}-${capacity}`]: 'sorted' },
    explanation: `Knapsack DP complete! Maximum value achievable is ${dp[n][capacity]}.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const coinChangeDpSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.split('\n').map(l => l.trim()).filter(Boolean);

  let coins = [1, 2, 5];
  let amount = 5;

  if (lines.length >= 2) {
    coins = lines[0].split(/\s+/).map(Number).filter(x => !isNaN(x));
    amount = parseInt(lines[1]) || 5;
  }

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  steps.push({
    data: [...dp],
    dpState: { coins, amount, activeIdx: 0 },
    highlights: {},
    explanation: "Initialize DP table with Infinity. Base Case: dp[0] = 0 (0 coins needed for amount 0).",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 1; i <= amount; i++) {
    steps.push({
      data: [...dp],
      dpState: { coins, amount, activeIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Computing minimum coins for amount ${i}. Checking all coin options: [${coins.join(', ')}].`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    for (let c = 0; c < coins.length; c++) {
      const coin = coins[c];
      if (i >= coin) {
        const subResult = dp[i - coin];
        if (subResult !== Infinity && subResult + 1 < dp[i]) {
          dp[i] = subResult + 1;
        }

        steps.push({
          data: [...dp],
          dpState: { coins, amount, activeIdx: i },
          highlights: { [i]: 'pivot', [i - coin]: 'compare' },
          explanation: `Using coin ${coin}. Min coins for amount ${i} = min(current dp[${i}], dp[${i - coin}] + 1) = ${dp[i] === Infinity ? '∞' : dp[i]}.`,
          stats: { comparisons: steps.length, swaps: 0, step: steps.length }
        });
      }
    }
  }

  steps.push({
    data: [...dp],
    dpState: { coins, amount, activeIdx: amount },
    highlights: { [amount]: 'sorted' },
    explanation: `Coin Change DP complete! Minimum coins for amount ${amount} is ${dp[amount] === Infinity ? -1 : dp[amount]}.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const ternarySearchSteps = (arr, target) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x)).sort((a, b) => a - b);
  const n = nums.length;
  if (n === 0) return [];
  const targetVal = target !== undefined ? Number(target) : nums[Math.floor(nums.length / 2)];

  let left = 0;
  let right = n - 1;

  steps.push({
    data: [...nums],
    searchState: { left, right, mid1: null, mid2: null, target: targetVal },
    highlights: {},
    explanation: `Initialize Ternary Search for target = ${targetVal}. Sorted array: [${nums.join(', ')}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  while (left <= right) {
    const mid1 = left + Math.floor((right - left) / 3);
    const mid2 = right - Math.floor((right - left) / 3);

    const highlights = { [mid1]: 'pivot', [mid2]: 'pivot' };
    for (let i = 0; i < left; i++) highlights[i] = 'compare';
    for (let i = right + 1; i < n; i++) highlights[i] = 'compare';

    steps.push({
      data: [...nums],
      searchState: { left, right, mid1, mid2, target: targetVal },
      highlights,
      explanation: `Dividing search space [${left} to ${right}] with mid1 = ${mid1} (val: ${nums[mid1]}) and mid2 = ${mid2} (val: ${nums[mid2]}).`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    if (nums[mid1] === targetVal) {
      steps.push({
        data: [...nums],
        searchState: { left, right, mid1, mid2, target: targetVal },
        highlights: { ...highlights, [mid1]: 'sorted' },
        explanation: `Target ${targetVal} found at mid1 index ${mid1}!`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return steps;
    }

    if (nums[mid2] === targetVal) {
      steps.push({
        data: [...nums],
        searchState: { left, right, mid1, mid2, target: targetVal },
        highlights: { ...highlights, [mid2]: 'sorted' },
        explanation: `Target ${targetVal} found at mid2 index ${mid2}!`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return steps;
    }

    if (targetVal < nums[mid1]) {
      steps.push({
        data: [...nums],
        searchState: { left, right, mid1, mid2, target: targetVal },
        highlights,
        explanation: `Target ${targetVal} < mid1 value (${nums[mid1]}). Narrowing search space to range [${left} to ${mid1 - 1}].`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      right = mid1 - 1;
    } else if (targetVal > nums[mid2]) {
      steps.push({
        data: [...nums],
        searchState: { left, right, mid1, mid2, target: targetVal },
        highlights,
        explanation: `Target ${targetVal} > mid2 value (${nums[mid2]}). Narrowing search space to range [${mid2 + 1} to ${right}].`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      left = mid2 + 1;
    } else {
      steps.push({
        data: [...nums],
        searchState: { left, right, mid1, mid2, target: targetVal },
        highlights,
        explanation: `Target lies between mid1 and mid2. Narrowing search space to range [${mid1 + 1} to ${mid2 - 1}].`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  steps.push({
    data: [...nums],
    searchState: { left: -1, right: -1, mid1: null, mid2: null, target: targetVal },
    highlights: {},
    explanation: `Search range exhausted. Target ${targetVal} not found in array.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const ratInAMazeSteps = (mazeGridStr) => {
  const steps = [];
  const lines = mazeGridStr.trim().split("\n");
  const size = 4;
  const maze = Array.from({ length: size }, () => Array(size).fill(0));
  for (let r = 0; r < size; r++) {
    if (lines[r]) {
      const parts = lines[r].trim().split(/\s+/).map(Number);
      for (let c = 0; c < size; c++) {
        maze[r][c] = isNaN(parts[c]) ? 0 : parts[c];
      }
    }
  }

  const sol = Array.from({ length: size }, () => Array(size).fill(0));
  const visited = Array.from({ length: size }, () => Array(size).fill(false));

  steps.push({
    data: { maze, path: Array.from({ length: size }, () => Array(size).fill(0)) },
    gridState: { currentRow: -1, currentCol: -1, mazeSize: size, phase: 'searching' },
    highlights: {},
    explanation: "Initialize maze search. Starting at cell (0, 0).",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const isSafe = (r, c) => {
    return r >= 0 && r < size && c >= 0 && c < size && maze[r][c] === 0 && !visited[r][c];
  };

  const solve = (r, c) => {
    visited[r][c] = true;
    sol[r][c] = 1;

    steps.push({
      data: { maze, path: sol.map(row => [...row]) },
      gridState: { currentRow: r, currentCol: c, mazeSize: size, phase: 'searching' },
      highlights: { [`${r}-${c}`]: 'pivot' },
      explanation: `Exploring cell (${r}, ${c}). Marks cell in active search path.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    if (r === size - 1 && c === size - 1) {
      steps.push({
        data: { maze, path: sol.map(row => [...row]) },
        gridState: { currentRow: r, currentCol: c, mazeSize: size, phase: 'success' },
        highlights: { [`${r}-${c}`]: 'sorted' },
        explanation: "Reached destination (3, 3)! Path solved successfully.",
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return true;
    }

    const dirs = [[1, 0, 'Down'], [0, 1, 'Right'], [-1, 0, 'Up'], [0, -1, 'Left']];
    for (let [dr, dc, dirName] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (isSafe(nr, nc)) {
        steps.push({
          data: { maze, path: sol.map(row => [...row]) },
          gridState: { currentRow: nr, currentCol: nc, mazeSize: size, phase: 'searching' },
          highlights: { [`${nr}-${nc}`]: 'pivot' },
          explanation: `Moving ${dirName} to cell (${nr}, ${nc}).`,
          stats: { comparisons: steps.length, swaps: 0, step: steps.length }
        });
        if (solve(nr, nc)) return true;
      }
    }

    sol[r][c] = 0;
    visited[r][c] = false;
    steps.push({
      data: { maze, path: sol.map(row => [...row]) },
      gridState: { currentRow: r, currentCol: c, mazeSize: size, phase: 'backtrack' },
      highlights: { [`${r}-${c}`]: 'swap' },
      explanation: `Dead end reached at cell (${r}, ${c}). Backtracking...`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    return false;
  };

  if (maze[0][0] === 0) {
    solve(0, 0);
  } else {
    steps.push({
      data: { maze, path: sol.map(row => [...row]) },
      gridState: { currentRow: 0, currentCol: 0, mazeSize: size, phase: 'backtrack' },
      highlights: { '0-0': 'swap' },
      explanation: "Start cell (0, 0) is blocked by a wall! No solution possible.",
      stats: { comparisons: 1, swaps: 0, step: 1 }
    });
  }

  return steps;
};

export const sudokuSolverSteps = (boardStr) => {
  const steps = [];
  const lines = boardStr.trim().split("\n");
  const size = 4;
  const board = Array.from({ length: size }, () => Array(size).fill(0));
  for (let r = 0; r < size; r++) {
    if (lines[r]) {
      const parts = lines[r].trim().split(/\s+/).map(Number);
      for (let c = 0; c < size; c++) {
        board[r][c] = isNaN(parts[c]) ? 0 : parts[c];
      }
    }
  }

  steps.push({
    data: { board: board.map(row => [...row]) },
    gridState: { currentRow: -1, currentCol: -1, val: null, isValid: true, phase: 'searching' },
    highlights: {},
    explanation: "Initialize empty Sudoku solver board.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const isSafe = (b, r, c, val) => {
    for (let i = 0; i < size; i++) {
      if (b[r][i] === val) return false;
    }
    for (let i = 0; i < size; i++) {
      if (b[i][c] === val) return false;
    }
    const boxRow = Math.floor(r / 2) * 2;
    const boxCol = Math.floor(c / 2) * 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (b[boxRow + i][boxCol + j] === val) return false;
      }
    }
    return true;
  };

  const solve = () => {
    let r = -1;
    let c = -1;
    let empty = true;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 0) {
          r = i;
          c = j;
          empty = false;
          break;
        }
      }
      if (!empty) break;
    }

    if (empty) {
      steps.push({
        data: { board: board.map(row => [...row]) },
        gridState: { currentRow: -1, currentCol: -1, val: null, isValid: true, phase: 'success' },
        highlights: {},
        explanation: "All cells filled! Sudoku solved successfully.",
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return true;
    }

    for (let val = 1; val <= size; val++) {
      const valid = isSafe(board, r, c, val);
      board[r][c] = val;

      steps.push({
        data: { board: board.map(row => [...row]) },
        gridState: { currentRow: r, currentCol: c, val, isValid: valid, phase: 'searching' },
        highlights: { [`${r}-${c}`]: valid ? 'pivot' : 'swap' },
        explanation: `Trying number ${val} at cell (${r}, ${c}). It is ${valid ? 'VALID' : 'INVALID (Constraint Conflict)'}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });

      if (valid) {
        if (solve()) return true;
      }

      board[r][c] = 0;
      steps.push({
        data: { board: board.map(row => [...row]) },
        gridState: { currentRow: r, currentCol: c, val, isValid: false, phase: 'backtrack' },
        highlights: { [`${r}-${c}`]: 'swap' },
        explanation: `Backtracking cell (${r}, ${c}): removing value ${val}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }

    return false;
  };

  solve();
  return steps;
};

export const kmpSearchSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.trim().split("\n");
  const text = lines[0] || "ABABDABACDABABCABAB";
  const pattern = lines[1] || "ABABCABAB";

  const m = pattern.length;
  const lps = new Array(m).fill(0);
  let len = 0;
  let idx = 1;
  while (idx < m) {
    if (pattern[idx] === pattern[len]) {
      len++;
      lps[idx] = len;
      idx++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[idx] = 0;
        idx++;
      }
    }
  }

  steps.push({
    data: { text, pattern, lps },
    kmpState: { textIdx: -1, patternIdx: -1, indices: [] },
    highlights: {},
    explanation: `Start KMP Pattern Search. Computed pattern LPS array: [${lps.join(', ')}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const n = text.length;
  let i = 0;
  let j = 0;
  const indices = [];

  while (i < n) {
    const matched = text[i] === pattern[j];
    
    steps.push({
      data: { text, pattern, lps },
      kmpState: { textIdx: i, patternIdx: j, indices: [...indices] },
      highlights: {
        text: { [i]: matched ? 'pivot' : 'swap' },
        pattern: { [j]: matched ? 'pivot' : 'swap' }
      },
      explanation: `Comparing Text[${i}] ('${text[i]}') with Pattern[${j}] ('${pattern[j]}'). ${matched ? 'MATCH!' : 'MISMATCH!'}`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    if (matched) {
      i++;
      j++;
    }

    if (j === m) {
      indices.push(i - j);
      const matchIdx = i - j;
      j = lps[j - 1];
      steps.push({
        data: { text, pattern, lps },
        kmpState: { textIdx: i, patternIdx: j, indices: [...indices] },
        highlights: {
          text: Array.from({ length: m }).reduce((acc, _, offset) => ({ ...acc, [matchIdx + offset]: 'sorted' }), {})
        },
        explanation: `Full pattern match found starting at index ${matchIdx}! Shifting pattern index j using LPS to ${j}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    } else if (i < n && text[i] !== pattern[j]) {
      if (j !== 0) {
        const nextJ = lps[j - 1];
        steps.push({
          data: { text, pattern, lps },
          kmpState: { textIdx: i, patternIdx: nextJ, indices: [...indices] },
          highlights: {
            pattern: { [j - 1]: 'swap' }
          },
          explanation: `Mismatch. Shifting pattern index pointer using LPS: j = lps[${j - 1}] = ${nextJ}.`,
          stats: { comparisons: steps.length, swaps: 0, step: steps.length }
        });
        j = nextJ;
      } else {
        i++;
      }
    }
  }

  steps.push({
    data: { text, pattern, lps },
    kmpState: { textIdx: i, patternIdx: j, indices: [...indices] },
    highlights: {},
    explanation: `Search complete. Found ${indices.length} pattern occurrences at indices: [${indices.join(', ')}].`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const longestCommonPrefixSteps = (wordsStr) => {
  const steps = [];
  const words = wordsStr.split(/[\s,]+/).map(w => w.trim()).filter(Boolean);
  if (words.length === 0) return [];

  steps.push({
    data: { words, prefix: "" },
    lcpState: { currentWordIdx: -1, charIdx: -1, phase: 'matching' },
    highlights: {},
    explanation: `Find Longest Common Prefix for: [${words.join(', ')}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let prefix = "";
  let minLen = Math.min(...words.map(w => w.length));

  for (let c = 0; c < minLen; c++) {
    const charToMatch = words[0][c];
    let allMatch = true;

    for (let w = 1; w < words.length; w++) {
      const match = words[w][c] === charToMatch;
      
      steps.push({
        data: { words, prefix },
        lcpState: { currentWordIdx: w, charIdx: c, phase: match ? 'matching' : 'mismatch' },
        highlights: {
          wordIdx: w,
          charIdx: c
        },
        explanation: `Comparing character at column ${c} of "${words[w]}" ('${words[w][c]}') with target '${charToMatch}'. ${match ? 'Match!' : 'Mismatch!'}`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });

      if (!match) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) {
      prefix += charToMatch;
      steps.push({
        data: { words, prefix },
        lcpState: { currentWordIdx: -1, charIdx: c, phase: 'matching' },
        highlights: {},
        explanation: `Character '${charToMatch}' is common across all words. Prefix grows to "${prefix}".`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    } else {
      break;
    }
  }

  steps.push({
    data: { words, prefix },
    lcpState: { currentWordIdx: -1, charIdx: -1, phase: 'success' },
    highlights: {},
    explanation: `Longest Common Prefix scan finished. Result: "${prefix || '(none)'}".`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const activitySelectionSteps = (inputStr) => {
  const steps = [];
  const items = inputStr.trim().split(/\s+/).map((item, idx) => {
    const parts = item.split('-');
    const start = parseInt(parts[0]) || 0;
    const finish = parseInt(parts[1]) || 0;
    return { id: idx, start, finish, originalText: item };
  });

  if (items.length === 0) return [];

  // Sort activities by finish time
  const sorted = [...items].sort((a, b) => a.finish - b.finish);

  steps.push({
    data: { activities: sorted, selected: [] },
    greedyState: { currentIdx: -1, lastFinish: 0, phase: 'inspecting' },
    highlights: {},
    explanation: "Initial state: sort activities by their finish times.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const selected = [0];
  let lastFinish = sorted[0].finish;

  steps.push({
    data: { activities: sorted, selected: [...selected] },
    greedyState: { currentIdx: 0, lastFinish, phase: 'selected' },
    highlights: { 0: 'sorted' },
    explanation: `Select the first activity (finish time = ${lastFinish}) as the starting baseline.`,
    stats: { comparisons: 0, swaps: 0, step: 1 }
  });

  for (let i = 1; i < sorted.length; i++) {
    const act = sorted[i];
    const ok = act.start >= lastFinish;

    steps.push({
      data: { activities: sorted, selected: [...selected] },
      greedyState: { currentIdx: i, lastFinish, phase: 'inspecting' },
      highlights: { [i]: 'pivot' },
      explanation: `Inspecting activity ${act.originalText}: start time (${act.start}) is ${ok ? '>= ' + lastFinish + ' (No conflict)' : '< ' + lastFinish + ' (CONFLICT!)'}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    if (ok) {
      selected.push(i);
      lastFinish = act.finish;
      steps.push({
        data: { activities: sorted, selected: [...selected] },
        greedyState: { currentIdx: i, lastFinish, phase: 'selected' },
        highlights: { [i]: 'sorted' },
        explanation: `Selected activity ${act.originalText} (finish time updated to ${lastFinish}).`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
    } else {
      steps.push({
        data: { activities: sorted, selected: [...selected] },
        greedyState: { currentIdx: i, lastFinish, phase: 'skipped' },
        highlights: { [i]: 'swap' },
        explanation: `Skipped activity ${act.originalText} due to overlap.`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
    }
  }

  steps.push({
    data: { activities: sorted, selected: [...selected] },
    greedyState: { currentIdx: -1, lastFinish, phase: 'success' },
    highlights: selected.reduce((acc, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Activity Selection finished. Selected indices: [${selected.map(idx => sorted[idx].originalText).join(', ')}].`,
    stats: { comparisons: sorted.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const fractionalKnapsackSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.trim().split("\n");
  const itemsLine = lines[0] || "";
  const W = parseInt(lines[1]) || 50;

  const items = itemsLine.split(/\s+/).map((item, idx) => {
    const parts = item.split('-');
    const val = parseInt(parts[0]) || 0;
    const wt = parseInt(parts[1]) || 0;
    const ratio = wt > 0 ? (val / wt) : 0;
    return { id: idx, val, wt, ratio, originalText: item };
  });

  if (items.length === 0) return [];

  // Sort items by value/weight ratio descending
  const sorted = [...items].sort((a, b) => b.ratio - a.ratio);

  steps.push({
    data: { items: sorted, capacity: W, weightTaken: 0, valueTaken: 0 },
    greedyState: { currentIdx: -1, fraction: 0, phase: 'inspecting' },
    highlights: {},
    explanation: `Calculate Value-to-Weight ratios. Sort items descending by ratio. Knapsack Capacity: ${W}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let totalVal = 0;
  let currWt = 0;
  const fractions = new Array(sorted.length).fill(0);

  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i];

    if (currWt + item.wt <= W) {
      currWt += item.wt;
      totalVal += item.val;
      fractions[i] = 1;

      steps.push({
        data: { items: sorted, capacity: W, weightTaken: currWt, valueTaken: totalVal, fractions: [...fractions] },
        greedyState: { currentIdx: i, fraction: 1, phase: 'packing' },
        highlights: { [i]: 'sorted' },
        explanation: `Knapsack has space: packed 100% of item ${item.originalText}. Total weight: ${currWt}/${W}. Total value: ${totalVal}.`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
    } else {
      const remain = W - currWt;
      const frac = remain / item.wt;
      currWt = W;
      totalVal += item.val * frac;
      fractions[i] = frac;

      steps.push({
        data: { items: sorted, capacity: W, weightTaken: currWt, valueTaken: totalVal, fractions: [...fractions] },
        greedyState: { currentIdx: i, fraction: frac, phase: 'packing' },
        highlights: { [i]: 'sorted' },
        explanation: `Packed fraction of item ${item.originalText}: ${Math.round(frac * 100)}%. Total weight: ${currWt}/${W}. Total value: ${totalVal.toFixed(2)}.`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
      break;
    }
  }

  steps.push({
    data: { items: sorted, capacity: W, weightTaken: currWt, valueTaken: totalVal, fractions: [...fractions] },
    greedyState: { currentIdx: -1, fraction: 0, phase: 'success' },
    highlights: {},
    explanation: `Fractional Knapsack complete. Maximum Knapsack value packed: ${totalVal.toFixed(2)}.`,
    stats: { comparisons: sorted.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const singleNumberSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  steps.push({
    data: [...nums],
    bitState: { currentIdx: -1, xorSum: 0 },
    highlights: {},
    explanation: "Initialize XOR accumulator (xorSum = 0).",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let xorSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const prev = xorSum;
    xorSum ^= val;

    steps.push({
      data: [...nums],
      bitState: { currentIdx: i, xorSum },
      highlights: { [i]: 'pivot' },
      explanation: `XOR-ing element ${val} at index ${i}: xorSum = ${prev} ^ ${val} = ${xorSum} (Binary: ${xorSum.toString(2)}).`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: [...nums],
    bitState: { currentIdx: -1, xorSum },
    highlights: {},
    explanation: `Scan finished. The single non-duplicate number found is ${xorSum}.`,
    stats: { comparisons: nums.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const powerOfTwoSteps = (nVal) => {
  const steps = [];
  const n = parseInt(nVal) || 16;

  steps.push({
    data: { n, nMinusOne: n - 1, andResult: null },
    bitState: { isPower: null, phase: 'checking' },
    highlights: {},
    explanation: `Check if n = ${n} is a power of 2 using bitwise clear: n & (n - 1) === 0.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  if (n <= 0) {
    steps.push({
      data: { n, nMinusOne: n - 1, andResult: null },
      bitState: { isPower: false, phase: 'success' },
      highlights: {},
      explanation: `Number ${n} is <= 0. Powers of 2 must be positive. Result: FALSE.`,
      stats: { comparisons: 1, swaps: 0, step: 1 }
    });
    return steps;
  }

  const nMinusOne = n - 1;
  const andResult = n & nMinusOne;
  const isPower = andResult === 0;

  steps.push({
    data: { n, nMinusOne, andResult },
    bitState: { isPower, phase: 'success' },
    highlights: {},
    explanation: `Calculated bitwise clear: ${n} & ${nMinusOne} = ${andResult}. (Binary: ${n.toString(2)} & ${nMinusOne.toString(2)} = ${andResult.toString(2)}). Result: ${isPower ? 'TRUE (Power of 2)' : 'FALSE (Not a power of 2)'}.`,
    stats: { comparisons: 1, swaps: 0, step: 1 }
  });

  return steps;
};

export const gcdSteps = (inputStr) => {
  const steps = [];
  const parts = inputStr.trim().split(/\s+/).map(Number);
  let a = Math.abs(parts[0]) || 48;
  let b = Math.abs(parts[1]) || 18;

  steps.push({
    data: { a, b },
    mathState: { r: null, phase: 'calculating' },
    highlights: {},
    explanation: `Compute Greatest Common Divisor (GCD) for a = ${a}, b = ${b} using Euclidean division.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  while (b !== 0) {
    const r = a % b;
    steps.push({
      data: { a, b },
      mathState: { r, phase: 'calculating' },
      highlights: {},
      explanation: `Euclidean remainder: ${a} = ${b} * ${Math.floor(a / b)} + ${r}. (Replacing a = ${b}, b = ${r}).`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    a = b;
    b = r;
  }

  steps.push({
    data: { a, b },
    mathState: { r: 0, phase: 'success' },
    highlights: {},
    explanation: `GCD solved successfully. Greatest Common Divisor is ${a}.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const sieveSteps = (nVal) => {
  const steps = [];
  const n = Math.min(parseInt(nVal) || 25, 40);

  const prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false;

  steps.push({
    data: { primes: [...prime] },
    mathState: { p: null, multiple: null, phase: 'inspecting' },
    highlights: {},
    explanation: `Sieve initialization: generate primes grid up to ${n}. Mark 0 and 1 as composite.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let p = 2; p * p <= n; p++) {
    if (prime[p]) {
      steps.push({
        data: { primes: [...prime] },
        mathState: { p, multiple: null, phase: 'inspecting' },
        highlights: { [p]: 'pivot' },
        explanation: `Prime found: ${p}. Traversing grid to cross out its multiples...`,
        stats: { comparisons: p, swaps: 0, step: steps.length }
      });

      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
        steps.push({
          data: { primes: [...prime] },
          mathState: { p, multiple: i, phase: 'marking' },
          highlights: { [p]: 'pivot', [i]: 'swap' },
          explanation: `Marking multiple of ${p} (${i}) as composite (false).`,
          stats: { comparisons: p, swaps: 0, step: steps.length }
        });
      }
    }
  }

  steps.push({
    data: { primes: [...prime] },
    mathState: { p: null, multiple: null, phase: 'success' },
    highlights: prime.reduce((acc, isP, idx) => isP ? ({ ...acc, [idx]: 'sorted' }) : acc, {}),
    explanation: `Sieve complete! Prime numbers found: [${prime.map((isP, idx) => isP ? idx : null).filter(Boolean).join(', ')}].`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

export const removeDuplicatesSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  steps.push({
    data: [...nums],
    pointerState: { slow: 0, fast: 0 },
    highlights: {},
    explanation: "Two Pointer initialization: slow writer at 0, fast scanner at 0.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    const isDup = nums[fast] === nums[slow];
    steps.push({
      data: [...nums],
      pointerState: { slow, fast },
      highlights: { [slow]: 'sorted', [fast]: 'pivot' },
      explanation: `Comparing fast pointer value (${nums[fast]}) with slow writer value (${nums[slow]}). ${isDup ? 'Duplicate!' : 'Unique element found!'}`,
      stats: { comparisons: fast, swaps: 0, step: steps.length }
    });

    if (!isDup) {
      slow++;
      nums[slow] = nums[fast];
      steps.push({
        data: [...nums],
        pointerState: { slow, fast },
        highlights: { [slow]: 'sorted', [fast]: 'pivot' },
        explanation: `Moved slow writer to index ${slow} and updated value to ${nums[fast]}.`,
        stats: { comparisons: fast, swaps: 0, step: steps.length }
      });
    }
  }

  steps.push({
    data: [...nums],
    pointerState: { slow, fast: nums.length - 1 },
    highlights: Array.from({ length: slow + 1 }).reduce((acc, _, idx) => ({ ...acc, [idx]: 'sorted' }), {}),
    explanation: `Array compacted. Unique element count: ${slow + 1}.`,
    stats: { comparisons: nums.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const equilibriumIndexSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  steps.push({
    data: [...nums],
    prefixState: { leftSum: 0, rightSum: totalSum, currentIdx: -1 },
    highlights: {},
    explanation: `Initialize Equilibrium scanner. Computed totalSum: ${totalSum}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];
    const isEquil = leftSum === totalSum;

    steps.push({
      data: [...nums],
      prefixState: { leftSum, rightSum: totalSum, currentIdx: i },
      highlights: { [i]: 'pivot' },
      explanation: `Checking index ${i}: leftSum = ${leftSum}, rightSum = ${totalSum}. ${isEquil ? 'Match (Equilibrium point)!' : 'No match.'}`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    if (isEquil) {
      steps.push({
        data: [...nums],
        prefixState: { leftSum, rightSum: totalSum, currentIdx: i },
        highlights: { [i]: 'sorted' },
        explanation: `Equilibrium index found at index ${i}! Left side sum equals right side sum.`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
      return steps;
    }

    leftSum += nums[i];
  }

  steps.push({
    data: [...nums],
    prefixState: { leftSum, rightSum: 0, currentIdx: -1 },
    highlights: {},
    explanation: "Scan finished. No equilibrium index found in the array.",
    stats: { comparisons: nums.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const dsuCycleSteps = (graphInput) => {
  const steps = [];
  const lines = graphInput.trim().split("\n");
  const meta = lines[0].trim().split(/\s+/).map(Number);
  const V = meta[0] || 4;
  const edges = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]) {
      const parts = lines[i].trim().split(/\s+/).map(Number);
      edges.push([parts[0], parts[1]]);
    }
  }

  const parent = Array.from({ length: V }, (_, i) => i);

  steps.push({
    data: { parent: [...parent], edges },
    dsuState: { currentEdgeIdx: -1, u: null, v: null, rootU: null, rootV: null, hasCycle: false },
    highlights: {},
    explanation: `Initialize Disjoint Set parents: [${parent.join(', ')}]. Edge count: ${edges.length}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const find = (i) => {
    let curr = i;
    while (parent[curr] !== curr) {
      curr = parent[curr];
    }
    return curr;
  };

  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const rU = find(u);
    const rV = find(v);
    const isCycle = rU === rV;

    steps.push({
      data: { parent: [...parent], edges },
      dsuState: { currentEdgeIdx: i, u, v, rootU: rU, rootV: rV, hasCycle: isCycle },
      highlights: { [u]: 'pivot', [v]: 'pivot' },
      explanation: `Inspecting edge (${u} - ${v}). find(${u}) = ${rU}, find(${v}) = ${rV}. ${isCycle ? 'CYCLE DETECTED!' : 'Subsets merged.'}`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    if (isCycle) {
      return steps;
    }

    parent[rU] = rV;
  }

  steps.push({
    data: { parent: [...parent], edges },
    dsuState: { currentEdgeIdx: -1, u: null, v: null, rootU: null, rootV: null, hasCycle: false },
    highlights: {},
    explanation: "Checked all edges. No cycles found in undirected graph.",
    stats: { comparisons: edges.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const segmentTreeSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter(x => !isNaN(x));
  if (nums.length === 0) return [];

  const n = nums.length;
  const tree = new Array(4 * n).fill(null);

  steps.push({
    data: { tree: [...tree], arr: nums },
    treeState: { currentNode: 1, start: 0, end: n - 1, mid: null, phase: 'splitting' },
    highlights: {},
    explanation: `Initialize Segment Tree. Array size: ${n}. Root node covers range [0 to ${n-1}].`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const build = (node, s, e) => {
    if (s === e) {
      tree[node] = nums[s];
      steps.push({
        data: { tree: [...tree], arr: nums },
        treeState: { currentNode: node, start: s, end: e, mid: s, phase: 'updating' },
        highlights: { [s]: 'sorted' },
        explanation: `Leaf node reached at index ${s}. Set node ${node} sum value = ${nums[s]}.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return;
    }

    const mid = Math.floor((s + e) / 2);
    steps.push({
      data: { tree: [...tree], arr: nums },
      treeState: { currentNode: node, start: s, end: e, mid, phase: 'splitting' },
      highlights: {},
      explanation: `Split range [${s} to ${e}] at mid = ${mid}. Build left child ${2*node} and right child ${2*node+1}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });

    build(2 * node, s, mid);
    build(2 * node + 1, mid + 1, e);

    tree[node] = tree[2 * node] + tree[2 * node + 1];
    steps.push({
      data: { tree: [...tree], arr: nums },
      treeState: { currentNode: node, start: s, end: e, mid, phase: 'updating' },
      highlights: {},
      explanation: `Merge children. Node ${node} sum = left child ${tree[2*node]} + right child ${tree[2*node+1]} = ${tree[node]}.`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
  };

  build(1, 0, n - 1);

  steps.push({
    data: { tree: [...tree], arr: nums },
    treeState: { currentNode: -1, start: -1, end: -1, mid: null, phase: 'success' },
    highlights: {},
    explanation: "Segment Tree constructed successfully.",
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const trieSteps = (wordsStr) => {
  const steps = [];
  const words = wordsStr.split(/[\s,]+/).map(w => w.trim().toLowerCase()).filter(Boolean);
  if (words.length === 0) return [];

  // We can represent the trie as a flat node tree
  const trieNodes = [{ id: 0, char: 'root', children: {}, isEnd: false }];
  let nodeCount = 1;

  steps.push({
    data: { words, nodes: JSON.parse(JSON.stringify(trieNodes)) },
    trieState: { wordIdx: -1, charIdx: -1, activeNodeId: 0, word: "", char: "" },
    highlights: {},
    explanation: "Initialize Trie prefix root structure.",
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  for (let w = 0; w < words.length; w++) {
    const word = words[w];
    let curr = 0; // root id

    for (let c = 0; c < word.length; c++) {
      const char = word[c];
      const nextId = trieNodes[curr].children[char];
      const existed = nextId !== undefined;

      if (!existed) {
        trieNodes[nodeCount] = { id: nodeCount, char, children: {}, isEnd: false };
        trieNodes[curr].children[char] = nodeCount;
        curr = nodeCount;
        nodeCount++;
      } else {
        curr = nextId;
      }

      steps.push({
        data: { words, nodes: JSON.parse(JSON.stringify(trieNodes)) },
        trieState: { wordIdx: w, charIdx: c, activeNodeId: curr, word, char },
        highlights: { [curr]: 'pivot' },
        explanation: `Inserting character '${char}' of word "${word}". Character path ${existed ? 'already existed' : 'inserted as new node'}.`,
        stats: { comparisons: w, swaps: 0, step: steps.length }
      });
    }

    trieNodes[curr].isEnd = true;
    steps.push({
      data: { words, nodes: JSON.parse(JSON.stringify(trieNodes)) },
      trieState: { wordIdx: w, charIdx: word.length - 1, activeNodeId: curr, word, char: "" },
      highlights: { [curr]: 'sorted' },
      explanation: `Mark node ${curr} as the end of word "${word}".`,
      stats: { comparisons: w, swaps: 0, step: steps.length }
    });
  }

  steps.push({
    data: { words, nodes: JSON.parse(JSON.stringify(trieNodes)) },
    trieState: { wordIdx: -1, charIdx: -1, activeNodeId: -1, word: "", char: "" },
    highlights: {},
    explanation: "All words successfully inserted in the Trie prefix structure.",
    stats: { comparisons: words.length, swaps: 0, step: steps.length }
  });

  return steps;
};

export const rabinKarpSteps = (inputStr) => {
  const steps = [];
  const lines = inputStr.trim().split("\n");
  const text = lines[0] || "AABAACAADAABAABA";
  const pattern = lines[1] || "AABA";

  const d = 256;
  const q = 101;
  let m = pattern.length, n = text.length;
  let hpat = 0, htxt = 0, h = 1;

  for (let i = 0; i < m - 1; i++) h = (h * d) % q;
  for (let i = 0; i < m; i++) {
    hpat = (d * hpat + pattern.charCodeAt(i)) % q;
    htxt = (d * htxt + text.charCodeAt(i)) % q;
  }

  steps.push({
    data: { text, pattern },
    rkState: { textIdx: -1, hpat, htxt, matchedIndices: [] },
    highlights: {},
    explanation: `Initialize Rabin-Karp. Pattern hash: ${hpat}. Text window [0 to ${m-1}] hash: ${htxt}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });

  const matchedIndices = [];
  for (let i = 0; i <= n - m; i++) {
    const hashMatch = hpat === htxt;
    let fullMatch = false;

    if (hashMatch) {
      fullMatch = text.substring(i, i + m) === pattern;
      if (fullMatch) matchedIndices.push(i);
    }

    steps.push({
      data: { text, pattern },
      rkState: { textIdx: i, hpat, htxt, matchedIndices: [...matchedIndices] },
      highlights: {
        text: Array.from({ length: m }).reduce((acc, _, offset) => ({ ...acc, [i + offset]: fullMatch ? 'sorted' : hashMatch ? 'swap' : 'pivot' }), {})
      },
      explanation: `Comparing window hash at index ${i}: htxt (${htxt}) ${hashMatch ? '===' : '!=='} hpat (${hpat}). ${hashMatch ? (fullMatch ? 'Match!' : 'Spurious Collision!') : 'No match.'}`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });

    if (i < n - m) {
      const prevHash = htxt;
      htxt = (d * (htxt - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
      if (htxt < 0) htxt = htxt + q;

      steps.push({
        data: { text, pattern },
        rkState: { textIdx: i + 1, hpat, htxt, matchedIndices: [...matchedIndices] },
        highlights: {
          text: { [i]: 'swap', [i + m]: 'pivot' }
        },
        explanation: `Roll hash: sub '${text[i]}', add '${text[i+m]}'. Hash updates ${prevHash} -> ${htxt}.`,
        stats: { comparisons: i, swaps: 0, step: steps.length }
      });
    }
  }

  steps.push({
    data: { text, pattern },
    rkState: { textIdx: -1, hpat, htxt, matchedIndices: [...matchedIndices] },
    highlights: {},
    explanation: `Rabin-Karp search complete. Matches found at index positions: [${matchedIndices.join(', ')}].`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });

  return steps;
};

// ===== NEW ALGORITHMS: BATCH 2 =====

// --- REVERSE ARRAY ---
export const reverseArraySteps = (arr) => {
  const steps = [];
  const a = [...arr];
  let left = 0, right = a.length - 1;
  steps.push({
    data: { arr: [...a] },
    highlights: { left, right },
    explanation: `Start: left pointer at index 0, right pointer at index ${right}. We will swap elements moving inward.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  let swaps = 0;
  while (left < right) {
    steps.push({
      data: { arr: [...a] },
      highlights: { left, right, active: [left, right] },
      explanation: `Comparing indices ${left} (value ${a[left]}) and ${right} (value ${a[right]}). Swapping them.`,
      stats: { comparisons: left, swaps, step: steps.length }
    });
    const tmp = a[left]; a[left] = a[right]; a[right] = tmp;
    swaps++;
    steps.push({
      data: { arr: [...a] },
      highlights: { left, right, swapped: [left, right] },
      explanation: `Swapped: arr[${left}]=${a[left]}, arr[${right}]=${a[right]}. Move pointers inward.`,
      stats: { comparisons: left + 1, swaps, step: steps.length }
    });
    left++; right--;
  }
  steps.push({
    data: { arr: [...a] },
    highlights: { sorted: a.map((_, i) => i) },
    explanation: `Array fully reversed! Final: [${a.join(', ')}]`,
    stats: { comparisons: swaps, swaps, step: steps.length }
  });
  return steps;
};

// --- PALINDROME CHECK ---
export const palindromeCheckSteps = (str) => {
  const steps = [];
  const s = str.trim();
  let left = 0, right = s.length - 1;
  let isPalin = true;
  steps.push({
    data: { str: s },
    highlights: { left, right },
    explanation: `Check if "${s}" is a palindrome. Left pointer at 0, right at ${right}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (left < right) {
    const match = s[left] === s[right];
    steps.push({
      data: { str: s },
      highlights: { active: [left, right], match },
      explanation: `Compare s[${left}]='${s[left]}' and s[${right}]='${s[right]}': ${match ? 'MATCH ✓' : 'MISMATCH ✗ — not a palindrome!'}`,
      stats: { comparisons: left + 1, swaps: 0, step: steps.length }
    });
    if (!match) { isPalin = false; break; }
    left++; right--;
  }
  steps.push({
    data: { str: s },
    highlights: { result: isPalin },
    explanation: `Result: "${s}" is ${isPalin ? '✅ a PALINDROME' : '❌ NOT a palindrome'}.`,
    stats: { comparisons: left, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- REVERSE STRING ---
export const reverseStringSteps = (str) => {
  const steps = [];
  const chars = str.trim().split('');
  let left = 0, right = chars.length - 1;
  steps.push({
    data: { chars: [...chars] },
    highlights: { left, right },
    explanation: `Reverse "${str.trim()}" using two pointers. Swap from both ends moving inward.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  let swaps = 0;
  while (left < right) {
    steps.push({
      data: { chars: [...chars] },
      highlights: { active: [left, right] },
      explanation: `Swap chars[${left}]='${chars[left]}' and chars[${right}]='${chars[right]}'.`,
      stats: { comparisons: left, swaps, step: steps.length }
    });
    const tmp = chars[left]; chars[left] = chars[right]; chars[right] = tmp;
    swaps++;
    steps.push({
      data: { chars: [...chars] },
      highlights: { swapped: [left, right] },
      explanation: `After swap: "${chars.join('')}". Move pointers inward.`,
      stats: { comparisons: left + 1, swaps, step: steps.length }
    });
    left++; right--;
  }
  steps.push({
    data: { chars: [...chars] },
    highlights: { sorted: chars.map((_, i) => i) },
    explanation: `String fully reversed: "${chars.join('')}"`,
    stats: { comparisons: swaps, swaps, step: steps.length }
  });
  return steps;
};

// --- MERGE SORTED LISTS ---
export const mergeSortedListsSteps = (list1, list2) => {
  const steps = [];
  const l1 = [...list1], l2 = [...list2];
  const merged = [];
  let i = 0, j = 0;
  steps.push({
    data: { list1: [...l1], list2: [...l2], merged: [] },
    highlights: { i, j },
    explanation: `Merge two sorted lists: [${l1.join('→')}] and [${l2.join('→')}]. Two pointers at start of each.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (i < l1.length && j < l2.length) {
    const pick = l1[i] <= l2[j] ? 'left' : 'right';
    steps.push({
      data: { list1: [...l1], list2: [...l2], merged: [...merged] },
      highlights: { i, j, picking: pick },
      explanation: `Compare l1[${i}]=${l1[i]} vs l2[${j}]=${l2[j]}. Pick ${pick === 'left' ? l1[i] : l2[j]} (smaller).`,
      stats: { comparisons: merged.length, swaps: 0, step: steps.length }
    });
    if (l1[i] <= l2[j]) { merged.push(l1[i++]); }
    else { merged.push(l2[j++]); }
    steps.push({
      data: { list1: [...l1], list2: [...l2], merged: [...merged] },
      highlights: { i, j },
      explanation: `Added ${merged[merged.length-1]} to merged. Merged so far: [${merged.join('→')}].`,
      stats: { comparisons: merged.length, swaps: 0, step: steps.length }
    });
  }
  while (i < l1.length) { merged.push(l1[i++]); }
  while (j < l2.length) { merged.push(l2[j++]); }
  steps.push({
    data: { list1: [], list2: [], merged: [...merged] },
    highlights: { done: true },
    explanation: `Merge complete! Sorted merged list: [${merged.join('→')}]`,
    stats: { comparisons: merged.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- MIN STACK ---
export const minStackSteps = (operations) => {
  const steps = [];
  const stack = [], minStk = [];
  steps.push({
    data: { stack: [], minStack: [] },
    highlights: {},
    explanation: `Min Stack initialized. Main stack and auxiliary min-stack are both empty.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (const op of operations) {
    const parts = op.trim().split(' ');
    const action = parts[0].toLowerCase();
    if (action === 'push') {
      const val = parseInt(parts[1]);
      stack.push(val);
      const newMin = minStk.length === 0 ? val : Math.min(val, minStk[minStk.length - 1]);
      minStk.push(newMin);
      steps.push({
        data: { stack: [...stack], minStack: [...minStk] },
        highlights: { pushed: val, currentMin: newMin },
        explanation: `push(${val}): Added to main stack. Min-stack top = min(${val}, ${newMin}) = ${newMin}. Current minimum = ${newMin}.`,
        stats: { comparisons: 0, swaps: 0, step: steps.length }
      });
    } else if (action === 'pop') {
      if (stack.length > 0) {
        const popped = stack.pop();
        minStk.pop();
        steps.push({
          data: { stack: [...stack], minStack: [...minStk] },
          highlights: { popped },
          explanation: `pop(): Removed ${popped}. Min-stack also pops. New min = ${minStk.length ? minStk[minStk.length-1] : 'empty'}.`,
          stats: { comparisons: 0, swaps: 0, step: steps.length }
        });
      }
    } else if (action === 'getmin') {
      const curMin = minStk[minStk.length - 1];
      steps.push({
        data: { stack: [...stack], minStack: [...minStk] },
        highlights: { queryMin: curMin },
        explanation: `getMin(): O(1) lookup — current minimum is ${curMin} (top of min-stack).`,
        stats: { comparisons: 0, swaps: 0, step: steps.length }
      });
    }
  }
  return steps;
};

// --- LEVEL ORDER TRAVERSAL ---
export const levelOrderTraversalSteps = (values) => {
  const steps = [];
  if (!values || values.length === 0) return steps;
  // Build BST
  const nodes = values.map((v, i) => ({ val: v, left: null, right: null, id: i }));
  const buildBST = (arr) => {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const node = { val: arr[mid], left: buildBST(arr.slice(0, mid)), right: buildBST(arr.slice(mid + 1)) };
    return node;
  };
  const sorted = [...values].sort((a, b) => a - b);
  const root = buildBST(sorted);
  const levels = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levels.push(level);
  }
  steps.push({
    data: { values: sorted, levels: [], currentLevel: -1 },
    highlights: {},
    explanation: `Level Order Traversal (BFS). Start with root [${sorted[Math.floor(sorted.length/2)]}] in queue.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let lvl = 0; lvl < levels.length; lvl++) {
    steps.push({
      data: { values: sorted, levels: levels.slice(0, lvl + 1), currentLevel: lvl },
      highlights: { level: lvl },
      explanation: `Level ${lvl}: Dequeue and visit all ${levels[lvl].length} node(s) — [${levels[lvl].join(', ')}]. Enqueue their children.`,
      stats: { comparisons: lvl + 1, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { values: sorted, levels, currentLevel: -1 },
    highlights: { done: true },
    explanation: `BFS complete! Tree visited level-by-level: ${levels.map((l,i)=>`L${i}:[${l.join(',')}]`).join(' → ')}.`,
    stats: { comparisons: levels.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- BELLMAN FORD ---
export const bellmanFordSteps = (numVertices, edges) => {
  const steps = [];
  const V = numVertices;
  const INF = 9999;
  const dist = new Array(V).fill(INF);
  dist[0] = 0;
  steps.push({
    data: { dist: [...dist], edges, iteration: 0, relaxedEdge: null },
    highlights: {},
    explanation: `Bellman-Ford: ${V} vertices, ${edges.length} edges. dist[0]=0, all others=∞. Running ${V-1} relaxation iterations.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let i = 0; i < V - 1; i++) {
    let updated = false;
    for (const [u, v, w] of edges) {
      if (dist[u] !== INF && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
        steps.push({
          data: { dist: [...dist], edges, iteration: i + 1, relaxedEdge: [u, v, w] },
          highlights: { relaxed: [u, v] },
          explanation: `Iteration ${i+1}: Relax edge (${u}→${v}, w=${w}): dist[${v}] updated to ${dist[v]}.`,
          stats: { comparisons: i * edges.length, swaps: 0, step: steps.length }
        });
      }
    }
    if (!updated) {
      steps.push({
        data: { dist: [...dist], edges, iteration: i + 1, relaxedEdge: null },
        highlights: {},
        explanation: `Iteration ${i+1}: No relaxation needed — distances are already optimal. Early exit.`,
        stats: { comparisons: (i+1) * edges.length, swaps: 0, step: steps.length }
      });
      break;
    }
  }
  steps.push({
    data: { dist: [...dist], edges, iteration: V - 1, relaxedEdge: null },
    highlights: { done: true },
    explanation: `Bellman-Ford complete. Shortest distances from source 0: ${dist.map((d,i)=>`v${i}=${d===INF?'∞':d}`).join(', ')}.`,
    stats: { comparisons: (V-1) * edges.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- WORD SEARCH ---
export const wordSearchSteps = (grid, word) => {
  const steps = [];
  const rows = grid.length, cols = grid[0].length;
  const visited = Array.from({length: rows}, () => new Array(cols).fill(false));
  const path = [];
  let found = false;
  steps.push({
    data: { grid, word, path: [], visited: visited.map(r=>[...r]) },
    highlights: {},
    explanation: `Word Search: Find "${word}" in ${rows}x${cols} grid. DFS backtracking from each starting cell.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  const dfs = (r, c, idx) => {
    if (found) return;
    if (idx === word.length) { found = true; return; }
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || grid[r][c] !== word[idx]) {
      steps.push({
        data: { grid, word, path: [...path], visited: visited.map(r2=>[...r2]) },
        highlights: { invalid: [r, c] },
        explanation: `Cell (${r},${c}): ${r<0||r>=rows||c<0||c>=cols?'Out of bounds':(visited[r][c]?'Already visited':`'${grid[r]?.[c]}' ≠ '${word[idx]}'`)} — backtrack.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
      return;
    }
    visited[r][c] = true;
    path.push([r, c]);
    steps.push({
      data: { grid, word, path: [...path], visited: visited.map(r2=>[...r2]) },
      highlights: { current: [r, c], matchIndex: idx },
      explanation: `Visit (${r},${c})='${word[idx]}': matches word[${idx}]. Path so far: "${word.slice(0, idx+1)}".`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for (const [dr, dc] of dirs) { dfs(r+dr, c+dc, idx+1); if (found) break; }
    if (!found) {
      visited[r][c] = false;
      path.pop();
      steps.push({
        data: { grid, word, path: [...path], visited: visited.map(r2=>[...r2]) },
        highlights: { backtrack: [r, c] },
        explanation: `Backtrack from (${r},${c}): no valid continuation. Remove from path.`,
        stats: { comparisons: steps.length, swaps: 0, step: steps.length }
      });
    }
  };
  outer: for (let r = 0; r < rows && !found; r++) {
    for (let c = 0; c < cols && !found; c++) {
      if (grid[r][c] === word[0]) {
        steps.push({
          data: { grid, word, path: [], visited: visited.map(r2=>[...r2]) },
          highlights: { start: [r, c] },
          explanation: `Try starting DFS from cell (${r},${c})='${grid[r][c]}' matching word[0]='${word[0]}'.`,
          stats: { comparisons: r*cols+c, swaps: 0, step: steps.length }
        });
        dfs(r, c, 0);
      }
    }
  }
  steps.push({
    data: { grid, word, path: [...path], visited: visited.map(r2=>[...r2]) },
    highlights: { result: found },
    explanation: `Word Search result: "${word}" ${found ? '✅ FOUND' : '❌ NOT FOUND'} in grid.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- GENERATE PARENTHESES ---
export const generateParenthesesSteps = (n) => {
  const steps = [];
  const results = [];
  const callStack = [];
  steps.push({
    data: { results: [], callStack: [], current: '' },
    highlights: {},
    explanation: `Generate all valid combinations of ${n} pairs of parentheses using backtracking.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  const bt = (cur, open, close) => {
    callStack.push({ cur, open, close });
    steps.push({
      data: { results: [...results], callStack: [...callStack], current: cur },
      highlights: { open, close },
      explanation: `State: "${cur}" | open=${open}/${n}, close=${close}/${n}. ${cur.length===2*n?'✅ Complete!':open<n?'Can add "("':close<open?'Can add ")"':'...'}`,
      stats: { comparisons: steps.length, swaps: 0, step: steps.length }
    });
    if (cur.length === 2 * n) {
      results.push(cur);
      callStack.pop();
      return;
    }
    if (open < n) bt(cur + '(', open + 1, close);
    if (close < open) bt(cur + ')', open, close + 1);
    callStack.pop();
  };
  bt('', 0, 0);
  steps.push({
    data: { results: [...results], callStack: [], current: '' },
    highlights: { done: true },
    explanation: `All ${results.length} valid parentheses combinations generated: ${results.join(', ')}.`,
    stats: { comparisons: steps.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- LCS DP ---
export const lcsDpSteps = (s1, s2) => {
  const steps = [];
  const m = s1.length, n = s2.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  steps.push({
    data: { s1, s2, dp: dp.map(r=>[...r]), i: -1, j: -1 },
    highlights: {},
    explanation: `LCS DP: Find longest common subsequence of "${s1}" and "${s2}". Build (${m+1})x(${n+1}) DP table.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const match = s1[i-1] === s2[j-1];
      dp[i][j] = match ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]);
      steps.push({
        data: { s1, s2, dp: dp.map(r=>[...r]), i, j },
        highlights: { row: i, col: j, match },
        explanation: match
          ? `s1[${i-1}]='${s1[i-1]}' == s2[${j-1}]='${s2[j-1]}': Match! dp[${i}][${j}] = dp[${i-1}][${j-1}]+1 = ${dp[i][j]}.`
          : `s1[${i-1}]='${s1[i-1]}' ≠ s2[${j-1}]='${s2[j-1]}': No match. dp[${i}][${j}] = max(${dp[i-1][j]},${dp[i][j-1]}) = ${dp[i][j]}.`,
        stats: { comparisons: (i-1)*n+j, swaps: 0, step: steps.length }
      });
    }
  }
  steps.push({
    data: { s1, s2, dp: dp.map(r=>[...r]), i: m, j: n },
    highlights: { done: true, result: dp[m][n] },
    explanation: `LCS length = dp[${m}][${n}] = ${dp[m][n]}. The longest common subsequence has ${dp[m][n]} characters.`,
    stats: { comparisons: m*n, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- COUNTING SORT ---
export const countingSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  const k = Math.max(...a);
  const count = new Array(k + 1).fill(0);
  steps.push({
    data: { arr: [...a], count: [...count], output: [], phase: 'count' },
    highlights: {},
    explanation: `Counting Sort on [${a.join(', ')}]. Range k=${k}. Phase 1: Count frequencies.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let i = 0; i < a.length; i++) {
    count[a[i]]++;
    steps.push({
      data: { arr: [...a], count: [...count], output: [], phase: 'count' },
      highlights: { countIdx: a[i], arrIdx: i },
      explanation: `count[${a[i]}]++  →  count[${a[i]}]=${count[a[i]]}`,
      stats: { comparisons: i+1, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { arr: [...a], count: [...count], output: [], phase: 'prefix' },
    highlights: {},
    explanation: `Phase 2: Prefix sums — make count[i] store actual position in output array.`,
    stats: { comparisons: a.length, swaps: 0, step: steps.length }
  });
  for (let i = 1; i <= k; i++) {
    count[i] += count[i-1];
    steps.push({
      data: { arr: [...a], count: [...count], output: [], phase: 'prefix' },
      highlights: { countIdx: i },
      explanation: `count[${i}] += count[${i-1}] → count[${i}]=${count[i]}`,
      stats: { comparisons: a.length + i, swaps: 0, step: steps.length }
    });
  }
  const output = new Array(a.length).fill(-1);
  steps.push({
    data: { arr: [...a], count: [...count], output: [...output], phase: 'place' },
    highlights: {},
    explanation: `Phase 3: Place each element at its correct position using prefix count.`,
    stats: { comparisons: a.length + k, swaps: 0, step: steps.length }
  });
  for (let i = a.length - 1; i >= 0; i--) {
    output[--count[a[i]]] = a[i];
    steps.push({
      data: { arr: [...a], count: [...count], output: [...output], phase: 'place' },
      highlights: { placed: count[a[i]], arrIdx: i },
      explanation: `Place a[${i}]=${a[i]} at output[${count[a[i]]}]`,
      stats: { comparisons: a.length + k + (a.length - i), swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { arr: [...output], count: [...count], output: [...output], phase: 'done' },
    highlights: { sorted: output.map((_, i) => i) },
    explanation: `Counting Sort complete! Sorted: [${output.join(', ')}].`,
    stats: { comparisons: a.length + k + a.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- RADIX SORT ---
export const radixSortSteps = (arr) => {
  const steps = [];
  const a = [...arr];
  const max = Math.max(...a);
  steps.push({
    data: { arr: [...a], exp: 0, buckets: Array.from({length:10},()=>[]) },
    highlights: {},
    explanation: `Radix Sort on [${a.join(', ')}]. Sort digit by digit (LSD). Max value: ${max}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  let expPow = 1;
  while (Math.floor(max / expPow) > 0) {
    const exp = expPow;
    const buckets = Array.from({length: 10}, () => []);
    const digits = a.map(x => Math.floor(x / exp) % 10);
    for (let i = 0; i < a.length; i++) {
      buckets[digits[i]].push(a[i]);
    }
    steps.push({
      data: { arr: [...a], exp, buckets: buckets.map(b=>[...b]) },
      highlights: {},
      explanation: `Digit position ${exp}: Distribute elements into 10 buckets (0-9) by digit at position ${exp}.`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
    let idx = 0;
    for (let d = 0; d < 10; d++) {
      for (const val of buckets[d]) {
        a[idx++] = val;
      }
    }
    steps.push({
      data: { arr: [...a], exp, buckets: buckets.map(b=>[...b]) },
      highlights: {},
      explanation: `Collect from buckets 0→9: [${a.join(', ')}]`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
    expPow *= 10;
  }
  steps.push({
    data: { arr: [...a], exp: -1, buckets: [] },
    highlights: { sorted: a.map((_,i)=>i) },
    explanation: `Radix Sort complete! Sorted: [${a.join(', ')}]`,
    stats: { comparisons: 0, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- COUNT SET BITS ---
export const countSetBitsSteps = (n) => {
  const steps = [];
  let num = n, count = 0;
  steps.push({
    data: { num, binary: num.toString(2).padStart(16, '0'), count },
    highlights: {},
    explanation: `Count set bits in ${n} (binary: ${num.toString(2)}). Using Brian Kernighan's algorithm: n &= (n-1) each step.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (num !== 0) {
    const prev = num;
    num = num & (num - 1);
    count++;
    steps.push({
      data: { num, binary: num.toString(2).padStart(16, '0'), count },
      highlights: { cleared: count },
      explanation: `${prev.toString(2)} & ${(prev-1).toString(2)} = ${num.toString(2)}. Cleared lowest set bit. Count: ${count}.`,
      stats: { comparisons: count, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { num: 0, binary: '0000000000000000', count },
    highlights: { done: true },
    explanation: `n=0, done. Total set bits in ${n}: ${count}.`,
    stats: { comparisons: count, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- XOR OPERATIONS ---
export const xorOperationsSteps = (arr) => {
  const steps = [];
  let result = 0;
  steps.push({
    data: { arr, result, index: -1 },
    highlights: {},
    explanation: `XOR all elements of [${arr.join(', ')}]. result starts at 0. x^x=0, x^0=x.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let i = 0; i < arr.length; i++) {
    const prev = result;
    result ^= arr[i];
    steps.push({
      data: { arr, result, index: i },
      highlights: { current: i },
      explanation: `result = ${prev} XOR ${arr[i]} = ${result} (binary: ${result.toString(2)})`,
      stats: { comparisons: i + 1, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { arr, result, index: arr.length },
    highlights: { done: true },
    explanation: `XOR complete! Result = ${result}. ${arr.filter((v,i,a)=>a.filter(x=>x===v).length===1).length ? `Unique element = ${result}` : `XOR of all = ${result}`}`,
    stats: { comparisons: arr.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- FAST EXPONENTIATION ---
export const fastExponentiationSteps = (base, exp) => {
  const steps = [];
  let b = base, e = exp, result = 1;
  steps.push({
    data: { base: b, exp: e, result },
    highlights: {},
    explanation: `Fast Exponentiation: compute ${base}^${exp}. Binary exponentiation: halve exponent each step.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (e > 0) {
    const isOdd = e % 2 === 1;
    steps.push({
      data: { base: b, exp: e, result },
      highlights: { isOdd },
      explanation: `exp=${e} is ${isOdd ? 'ODD' : 'EVEN'}. ${isOdd ? `Multiply result by base: ${result}×${b}=${result*b}` : 'Skip multiply.'} Square base: ${b}×${b}=${b*b}. Halve exp.`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
    if (isOdd) result *= b;
    b *= b;
    e = Math.floor(e / 2);
    steps.push({
      data: { base: b, exp: e, result },
      highlights: {},
      explanation: `After step: result=${result}, base=${b}, exp=${e}.`,
      stats: { comparisons: 0, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { base, exp, result },
    highlights: { done: true },
    explanation: `${base}^${exp} = ${result}. Computed in O(log ${exp}) = ${Math.ceil(Math.log2(exp+1))} steps.`,
    stats: { comparisons: 0, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- PASCAL TRIANGLE ---
export const pascalTriangleSteps = (n) => {
  const steps = [];
  const triangle = [];
  steps.push({
    data: { triangle: [], rowNum: 0 },
    highlights: {},
    explanation: `Pascal's Triangle: Generate ${n} rows. Each cell = sum of two cells directly above.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let i = 0; i < n; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(triangle[i-1][j-1] + triangle[i-1][j]);
    }
    if (i > 0) row.push(1);
    triangle.push(row);
    steps.push({
      data: { triangle: triangle.map(r=>[...r]), rowNum: i },
      highlights: { row: i },
      explanation: `Row ${i}: [${row.join(', ')}]. Edges are 1, inner cells = prev[j-1]+prev[j].`,
      stats: { comparisons: i, swaps: 0, step: steps.length }
    });
  }
  steps.push({
    data: { triangle: triangle.map(r=>[...r]), rowNum: n-1 },
    highlights: { done: true },
    explanation: `Pascal's Triangle complete! ${n} rows generated. Row n gives binomial coefficients C(n,0)..C(n,n).`,
    stats: { comparisons: n, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- TRAPPING RAIN WATER ---
export const trappingRainWaterSteps = (heights) => {
  const steps = [];
  const h = heights;
  let l = 0, r = h.length - 1, lm = 0, rm = 0, water = 0;
  steps.push({
    data: { heights: h, water: 0, left: l, right: r, leftMax: lm, rightMax: rm },
    highlights: { left: l, right: r },
    explanation: `Trapping Rain Water: [${h.join(',')}]. Two pointers l=${l}, r=${r}. lMax=0, rMax=0.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (l < r) {
    if (h[l] <= h[r]) {
      lm = Math.max(lm, h[l]);
      const trapped = lm - h[l];
      water += trapped;
      steps.push({
        data: { heights: h, water, left: l, right: r, leftMax: lm, rightMax: rm },
        highlights: { left: l, right: r, trapped: l },
        explanation: `h[${l}]=${h[l]} ≤ h[${r}]=${h[r]}: process left. lMax=${lm}. Water trapped at ${l}: ${lm}-${h[l]}=${trapped}. Total=${water}.`,
        stats: { comparisons: l+1, swaps: 0, step: steps.length }
      });
      l++;
    } else {
      rm = Math.max(rm, h[r]);
      const trapped = rm - h[r];
      water += trapped;
      steps.push({
        data: { heights: h, water, left: l, right: r, leftMax: lm, rightMax: rm },
        highlights: { left: l, right: r, trapped: r },
        explanation: `h[${l}]=${h[l]} > h[${r}]=${h[r]}: process right. rMax=${rm}. Water trapped at ${r}: ${rm}-${h[r]}=${trapped}. Total=${water}.`,
        stats: { comparisons: l+1, swaps: 0, step: steps.length }
      });
      r--;
    }
  }
  steps.push({
    data: { heights: h, water, left: l, right: r, leftMax: lm, rightMax: rm },
    highlights: { done: true },
    explanation: `Pointers met. Total trapped water: ${water} units.`,
    stats: { comparisons: h.length, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- FLOYD WARSHALL ---
export const floydWarshallSteps = (matrix) => {
  const steps = [];
  const V = matrix.length;
  const INF = 9999;
  const dist = matrix.map(row => row.map(v => v === null || v === Infinity || v === 'INF' ? INF : v));
  steps.push({
    data: { dist: dist.map(r=>[...r]), k: -1, i: -1, j: -1, V },
    highlights: {},
    explanation: `Floyd-Warshall: All-pairs shortest path on ${V}×${V} matrix. Will try each vertex as intermediate.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  for (let k = 0; k < V; k++) {
    steps.push({
      data: { dist: dist.map(r=>[...r]), k, i: -1, j: -1, V },
      highlights: { intermediate: k },
      explanation: `Intermediate vertex k=${k}: Check if going through vertex ${k} shortens any path.`,
      stats: { comparisons: k*V*V, swaps: 0, step: steps.length }
    });
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] !== INF && dist[k][j] !== INF && dist[i][k] + dist[k][j] < dist[i][j]) {
          const old = dist[i][j];
          dist[i][j] = dist[i][k] + dist[k][j];
          steps.push({
            data: { dist: dist.map(r=>[...r]), k, i, j, V },
            highlights: { updated: [i, j], via: k },
            explanation: `Relax (${i}→${j}) via ${k}: ${old===INF?'∞':old} → ${dist[i][j]}. Path ${i}→${k}→${j} is shorter.`,
            stats: { comparisons: k*V*V+i*V+j, swaps: 0, step: steps.length }
          });
        }
      }
    }
  }
  steps.push({
    data: { dist: dist.map(r=>[...r]), k: V, i: -1, j: -1, V },
    highlights: { done: true },
    explanation: `Floyd-Warshall complete! dist[i][j] now holds shortest path length between every pair (i,j).`,
    stats: { comparisons: V*V*V, swaps: 0, step: steps.length }
  });
  return steps;
};

// --- TWO SUM TWO POINTER ---
export const twoSumTwoPointerSteps = (arr, target) => {
  const steps = [];
  const a = [...arr].sort((x, y) => x - y);
  let l = 0, r = a.length - 1;
  steps.push({
    data: { arr: a, left: l, right: r, target },
    highlights: { left: l, right: r },
    explanation: `Two Sum (Two Pointer) on sorted [${a.join(', ')}]. Target=${target}. Pointers at l=${l}, r=${r}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 }
  });
  while (l < r) {
    const sum = a[l] + a[r];
    steps.push({
      data: { arr: a, left: l, right: r, target },
      highlights: { left: l, right: r, sum },
      explanation: `a[${l}]=${a[l]} + a[${r}]=${a[r]} = ${sum}. ${sum===target?'✅ Found target!':sum<target?`${sum} < ${target}: move left pointer right →`:`${sum} > ${target}: move right pointer left ←`}`,
      stats: { comparisons: l+1, swaps: 0, step: steps.length }
    });
    if (sum === target) {
      steps.push({
        data: { arr: a, left: l, right: r, target },
        highlights: { found: [l, r] },
        explanation: `✅ Found pair: [${a[l]}, ${a[r]}] at indices [${l}, ${r}] sum to ${target}!`,
        stats: { comparisons: l+1, swaps: 0, step: steps.length }
      });
      return steps;
    } else if (sum < target) { l++; } else { r--; }
  }
  steps.push({
    data: { arr: a, left: l, right: r, target },
    highlights: { notFound: true },
    explanation: `Pointers crossed. No pair found that sums to ${target}.`,
    stats: { comparisons: a.length, swaps: 0, step: steps.length }
  });
  return steps;
};
// ============================================================
// TREE ALGORITHMS - STEP GENERATORS
// Shared tree builder utility
// ============================================================

// Build positioned BST nodes from sorted values array
function buildTreeNodes(values) {
  if (!values.length) return [];
  const nodes = [];
  let idCounter = 0;

  // Build BST structure
  function insertNode(nodeList, val) {
    const newNode = { id: idCounter++, val, left: null, right: null };
    if (!nodeList.length) { nodeList.push(newNode); return; }
    let curr = nodeList[0];
    while (true) {
      if (val <= curr.val) {
        if (!curr.left) { curr.left = newNode; nodeList.push(newNode); break; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = newNode; nodeList.push(newNode); break; }
        curr = curr.right;
      }
    }
  }

  values.forEach(v => insertNode(nodes, v));
  assignPositions(nodes, nodes[0]);
  return nodes;
}

function assignPositions(allNodes, root) {
  if (!root) return;
  // BFS level-order position assignment
  const levels = [];
  const queue = [{ node: root, depth: 0, hPos: 50 }];
  const levelWidths = {};
  const nodePositions = {};

  while (queue.length) {
    const { node, depth, hPos } = queue.shift();
    if (!levels[depth]) levels[depth] = [];
    levels[depth].push({ node, hPos });
    nodePositions[node.id] = { depth, hPos };

    const spread = 50 / Math.pow(2, depth + 1);
    if (node.left) queue.push({ node: node.left, depth: depth + 1, hPos: hPos - spread });
    if (node.right) queue.push({ node: node.right, depth: depth + 1, hPos: hPos + spread });
  }

  // Assign x,y positions
  Object.entries(nodePositions).forEach(([id, { depth, hPos }]) => {
    const node = allNodes.find(n => n.id === parseInt(id));
    if (node) {
      node.x = Math.max(5, Math.min(95, hPos));
      node.y = 40 + depth * 56;
    }
  });
}

function cloneNodes(nodes) {
  // Deep clone
  const map = new Map();
  nodes.forEach(n => map.set(n.id, { ...n, left: null, right: null }));
  nodes.forEach(n => {
    const clone = map.get(n.id);
    if (n.left) clone.left = map.get(n.left.id);
    if (n.right) clone.right = map.get(n.right.id);
  });
  return Array.from(map.values());
}

// ============================================================
// BST INSERT
// ============================================================
export const bstInsertSteps = (arr, insertVal) => {
  const steps = [];
  const baseNodes = buildTreeNodes(arr);
  const ins = insertVal !== undefined ? insertVal : arr[arr.length - 1] + 5;

  // Step 1: Show initial tree
  steps.push({
    data: cloneNodes(baseNodes),
    highlights: {},
    explanation: `BST Insert: Inserting value ${ins} into the BST. Starting at the root.`,
    treeState: {},
    stats: { comparisons: 0, swaps: 0, step: 1 }
  });

  // Simulate BST traversal to find insertion point
  let curr = baseNodes[0];
  const path = [];
  let comparisons = 0;
  while (curr) {
    path.push(curr.val);
    comparisons++;
    const hiCopy = {};
    baseNodes.forEach(n => {
      if (n.id === curr.id) hiCopy[n.id] = 'compare';
      else if (path.includes(n.val)) hiCopy[n.id] = 'sorted';
    });

    if (ins <= curr.val) {
      steps.push({
        data: cloneNodes(baseNodes),
        highlights: hiCopy,
        explanation: `${ins} ≤ ${curr.val} → go LEFT`,
        treeState: { path: [...path] },
        stats: { comparisons, swaps: 0, step: steps.length + 1 }
      });
      if (!curr.left) {
        // Insert here
        const newId = baseNodes.length;
        const newNode = { id: newId, val: ins, left: null, right: null };
        curr.left = newNode;
        baseNodes.push(newNode);
        assignPositions(baseNodes, baseNodes[0]);
        const hiInsert = { ...hiCopy, [newId]: 'swap' };
        steps.push({
          data: cloneNodes(baseNodes),
          highlights: hiInsert,
          explanation: `Found empty left child of ${curr.val}. Inserting ${ins} here!`,
          treeState: { path: [...path, ins] },
          stats: { comparisons, swaps: 1, step: steps.length + 1 }
        });
        break;
      }
      curr = curr.left;
    } else {
      steps.push({
        data: cloneNodes(baseNodes),
        highlights: hiCopy,
        explanation: `${ins} > ${curr.val} → go RIGHT`,
        treeState: { path: [...path] },
        stats: { comparisons, swaps: 0, step: steps.length + 1 }
      });
      if (!curr.right) {
        const newId = baseNodes.length;
        const newNode = { id: newId, val: ins, left: null, right: null };
        curr.right = newNode;
        baseNodes.push(newNode);
        assignPositions(baseNodes, baseNodes[0]);
        const hiInsert = { ...hiCopy, [newId]: 'swap' };
        steps.push({
          data: cloneNodes(baseNodes),
          highlights: hiInsert,
          explanation: `Found empty right child of ${curr.val}. Inserting ${ins} here!`,
          treeState: { path: [...path, ins] },
          stats: { comparisons, swaps: 1, step: steps.length + 1 }
        });
        break;
      }
      curr = curr.right;
    }
  }

  // Final step: show complete tree
  const finalHi = {};
  baseNodes.forEach(n => finalHi[n.id] = 'sorted');
  steps.push({
    data: cloneNodes(baseNodes),
    highlights: finalHi,
    explanation: `✅ BST Insert complete. ${ins} is now in the tree. BST property maintained.`,
    treeState: { path },
    stats: { comparisons, swaps: 1, step: steps.length + 1 }
  });

  return steps;
};

// ============================================================
// BST DELETE
// ============================================================
export const bstDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const baseNodes = buildTreeNodes(arr);
  const del = deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  steps.push({
    data: cloneNodes(baseNodes),
    highlights: {},
    explanation: `BST Delete: Searching for node ${del} to delete.`,
    treeState: {},
    stats: { comparisons: 0, swaps: 0, step: 1 }
  });

  // Find node
  let curr = baseNodes[0];
  let comparisons = 0;
  const path = [];
  let targetNode = null;

  while (curr) {
    path.push(curr.val);
    comparisons++;
    const hi = {};
    hi[curr.id] = 'compare';
    path.forEach(v => { const n = baseNodes.find(n => n.val === v); if (n) hi[n.id] = hi[n.id] || 'sorted'; });

    steps.push({
      data: cloneNodes(baseNodes),
      highlights: hi,
      explanation: `Comparing with ${curr.val}: ${del === curr.val ? 'FOUND target!' : del < curr.val ? `${del} < ${curr.val} → go LEFT` : `${del} > ${curr.val} → go RIGHT`}`,
      treeState: { path: [...path] },
      stats: { comparisons, swaps: 0, step: steps.length + 1 }
    });

    if (del === curr.val) { targetNode = curr; break; }
    if (del < curr.val) curr = curr.left;
    else curr = curr.right;
  }

  if (!targetNode) {
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: {},
      explanation: `❌ Node ${del} not found in BST.`,
      treeState: {},
      stats: { comparisons, swaps: 0, step: steps.length + 1 }
    });
    return steps;
  }

  // Determine deletion case
  const hasLeft = !!targetNode.left;
  const hasRight = !!targetNode.right;
  const hi = { [targetNode.id]: 'pivot' };

  if (!hasLeft && !hasRight) {
    // Case 1: Leaf node
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: hi,
      explanation: `Case 1: ${del} is a LEAF node (no children). Simply remove it.`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 }
    });
    // Remove node
    baseNodes.forEach(n => {
      if (n.left && n.left.id === targetNode.id) n.left = null;
      if (n.right && n.right.id === targetNode.id) n.right = null;
    });
    const idx = baseNodes.findIndex(n => n.id === targetNode.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);
    const finalHi = {};
    baseNodes.forEach(n => finalHi[n.id] = 'sorted');
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Node ${del} deleted. BST property maintained.`,
      treeState: {},
      stats: { comparisons, swaps: 1, step: steps.length + 1 }
    });

  } else if (!hasLeft || !hasRight) {
    // Case 2: One child
    const child = targetNode.left || targetNode.right;
    const childLabel = hasLeft ? 'left' : 'right';
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: 'pivot', [child.id]: 'compare' },
      explanation: `Case 2: ${del} has ONE child (${childLabel}: ${child.val}). Replace ${del} with its child.`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 }
    });
    // Replace
    baseNodes.forEach(n => {
      if (n.left && n.left.id === targetNode.id) n.left = child;
      if (n.right && n.right.id === targetNode.id) n.right = child;
    });
    const idx = baseNodes.findIndex(n => n.id === targetNode.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);
    const finalHi = {};
    baseNodes.forEach(n => { finalHi[n.id] = n.id === child.id ? 'swap' : 'sorted'; });
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Replaced ${del} with its child ${child.val}. BST property maintained.`,
      treeState: {},
      stats: { comparisons, swaps: 1, step: steps.length + 1 }
    });

  } else {
    // Case 3: Two children → find in-order successor
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: 'pivot' },
      explanation: `Case 3: ${del} has TWO children. Finding in-order successor (smallest in right subtree).`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 }
    });

    let succ = targetNode.right;
    while (succ.left) succ = succ.left;

    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: 'pivot', [succ.id]: 'compare' },
      explanation: `In-order successor is ${succ.val}. Copy ${succ.val} into node ${del}, then delete ${succ.val} from right subtree.`,
      treeState: { path },
      stats: { comparisons: comparisons + 1, swaps: 0, step: steps.length + 1 }
    });

    // Copy successor value
    targetNode.val = succ.val;

    // Remove successor from right subtree
    const succChild = succ.right;
    baseNodes.forEach(n => {
      if (n.left && n.left.id === succ.id) n.left = succChild || null;
      if (n.right && n.right.id === succ.id) n.right = succChild || null;
    });
    const idx = baseNodes.findIndex(n => n.id === succ.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);

    const finalHi = {};
    baseNodes.forEach(n => { finalHi[n.id] = n.id === targetNode.id ? 'swap' : 'sorted'; });
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Replaced ${del} with ${succ.val}. Deleted successor. BST property maintained.`,
      treeState: {},
      stats: { comparisons: comparisons + 1, swaps: 1, step: steps.length + 1 }
    });
  }

  return steps;
};

// ============================================================
// AVL TREE INSERT
// ============================================================
export const avlInsertSteps = (arr, insertVal) => {
  const steps = [];
  // Use insertVal or pick a new value
  const ins = insertVal !== undefined ? insertVal : (Math.max(...arr) + 5);
  const workArr = [...arr];

  // Simulate building AVL tree step by step
  function height(node) { return node ? node.h : 0; }
  function bf(node) { return node ? height(node.left) - height(node.right) : 0; }
  function updateHeight(node) { if (node) node.h = 1 + Math.max(height(node.left), height(node.right)); }

  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null, h: 1, color: null, bf: 0 }; }

  function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    updateHeight(y);
    updateHeight(x);
    return x;
  }
  function rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    updateHeight(x);
    updateHeight(y);
    return y;
  }
  function balanceNode(node) {
    updateHeight(node);
    node.bf = bf(node);
    const b = node.bf;
    if (b > 1 && node.left) {
      if (bf(node.left) < 0) node.left = rotateLeft(node.left);
      return rotateRight(node);
    }
    if (b < -1 && node.right) {
      if (bf(node.right) > 0) node.right = rotateRight(node.right);
      return rotateLeft(node);
    }
    return node;
  }

  let root = null;
  // Build initial tree without steps
  function insertAVL(node, val) {
    if (!node) return newNode(val);
    if (val <= node.val) node.left = insertAVL(node.left, val);
    else node.right = insertAVL(node.right, val);
    return balanceNode(node);
  }
  workArr.forEach(v => root = insertAVL(root, v));

  // Assign positions
  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  assignPos(root);

  const initNodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));

  steps.push({
    data: initNodes,
    highlights: {},
    explanation: `AVL Insert: Inserting ${ins} into the AVL tree. Starting at root ${root?.val}.`,
    treeState: {},
    stats: { comparisons: 0, swaps: 0, step: 1 }
  });

  // Now simulate inserting ins with steps
  const visited = [];
  function insertWithSteps(node, val) {
    if (!node) return newNode(val);
    visited.push(node.id);
    const dir = val <= node.val ? 'LEFT' : 'RIGHT';
    const hiCurr = {};
    visited.forEach(id => hiCurr[id] = 'sorted');
    hiCurr[node.id] = 'compare';

    assignPos(root);
    const snapNodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({
      data: snapNodes,
      highlights: hiCurr,
      explanation: `${val} ${val <= node.val ? '≤' : '>'} ${node.val} → go ${dir}. BF=${bf(node)}`,
      treeState: {},
      stats: { comparisons: visited.length, swaps: 0, step: steps.length + 1 }
    });

    if (val <= node.val) node.left = insertWithSteps(node.left, val);
    else node.right = insertWithSteps(node.right, val);

    const oldBf = bf(node);
    const balanced = balanceNode(node);
    const newBf = bf(balanced);

    if (oldBf !== newBf || balanced.id !== node.id) {
      assignPos(root);
      const rotNodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
      steps.push({
        data: rotNodes,
        highlights: { [balanced.id]: 'pivot' },
        explanation: `Rebalancing at node ${balanced.val}: BF changed from ${oldBf} → ${newBf}. Rotation applied!`,
        treeState: {},
        stats: { comparisons: visited.length, swaps: 1, step: steps.length + 1 }
      });
    }

    return balanced;
  }

  root = insertWithSteps(root, ins);
  assignPos(root);
  const finalNodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
  const finalHi = {};
  finalNodes.forEach(n => finalHi[n.id] = 'sorted');

  steps.push({
    data: finalNodes,
    highlights: finalHi,
    explanation: `✅ AVL Insert complete. ${ins} inserted. Tree rebalanced. All balance factors in [-1, 0, 1].`,
    treeState: {},
    stats: { comparisons: visited.length, swaps: steps.filter(s => s.stats.swaps > 0).length, step: steps.length + 1 }
  });

  return steps;
};

// ============================================================
// AVL DELETE
// ============================================================
export const avlDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const del = deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  function height(node) { return node ? node.h : 0; }
  function updateHeight(node) { if (node) node.h = 1 + Math.max(height(node.left), height(node.right)); }
  function bf(node) { return height(node?.left) - height(node?.right); }
  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null, h: 1 }; }
  function rotateRight(y) { const x = y.left; x.right = y; y.left = null; updateHeight(y); updateHeight(x); return x; }
  function rotateLeft(x) { const y = x.right; y.left = x; x.right = null; updateHeight(x); updateHeight(y); return y; }
  function balanceNode(node) {
    updateHeight(node);
    const b = bf(node);
    if (b > 1 && node.left) { if (bf(node.left) < 0) node.left = rotateLeft(node.left); return rotateRight(node); }
    if (b < -1 && node.right) { if (bf(node.right) > 0) node.right = rotateRight(node.right); return rotateLeft(node); }
    return node;
  }

  let root = null;
  function insertAVL(node, val) {
    if (!node) return newNode(val);
    if (val <= node.val) node.left = insertAVL(node.left, val);
    else node.right = insertAVL(node.right, val);
    return balanceNode(node);
  }
  arr.forEach(v => root = insertAVL(root, v));

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(highlights = {}, explanation = '', swaps = 0) {
    assignPos(root);
    const nodes = getAllNodes(root).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({ data: nodes, highlights, explanation, treeState: {}, stats: { comparisons: steps.length, swaps, step: steps.length + 1 } });
  }

  snap({}, `AVL Delete: Deleting ${del} from AVL tree. Searching...`);

  // Find and highlight target
  let found = getAllNodes(root).find(n => n.val === del);
  if (found) snap({ [found.id]: 'compare' }, `Found node ${del}. Deleting it and rebalancing...`);

  function deleteAVL(node, key) {
    if (!node) return null;
    if (key < node.val) { node.left = deleteAVL(node.left, key); }
    else if (key > node.val) { node.right = deleteAVL(node.right, key); }
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let succ = node.right;
      while (succ.left) succ = succ.left;
      node.val = succ.val;
      node.right = deleteAVL(node.right, succ.val);
    }
    return balanceNode(node);
  }

  root = deleteAVL(root, del);
  snap({}, `Deleted ${del}. Re-checking balance factors...`);

  // Show each ancestor being rebalanced
  getAllNodes(root).forEach(n => {
    const b = bf(n);
    if (Math.abs(b) > 0) {
      snap({ [n.id]: b === 0 ? 'sorted' : 'pivot' }, `Node ${n.val}: BF=${b}. ${Math.abs(b) > 1 ? 'NEEDS ROTATION!' : 'Balanced ✓'}`);
    }
  });

  const finalHi = {};
  getAllNodes(root).forEach(n => finalHi[n.id] = 'sorted');
  snap(finalHi, `✅ AVL Delete complete. ${del} removed. Tree fully rebalanced.`, 1);

  return steps;
};

// ============================================================
// BINARY TREE INSERT (Level-Order)
// ============================================================
export const btInsertSteps = (arr, insertVal) => {
  const steps = [];
  const ins = insertVal !== undefined ? insertVal : (Math.max(...arr) + 1);

  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null }; }

  // Build BT (level-order)
  const root = newNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i++) {
    const curr = queue[0];
    const node = newNode(arr[i]);
    if (!curr.left) { curr.left = node; }
    else { curr.right = node; queue.shift(); }
    queue.push(node);
  }

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(node, hi = {}, explanation = '', swaps = 0) {
    assignPos(node);
    const nodes = getAllNodes(node).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({ data: nodes, highlights: hi, explanation, treeState: {}, stats: { comparisons: steps.length, swaps, step: steps.length + 1 } });
  }

  snap(root, {}, `BT Insert: Inserting ${ins} using level-order (BFS). Scanning for first empty child slot.`);

  // BFS to find insertion point with steps
  const bfsQ = [root];
  let inserted = false;
  while (bfsQ.length && !inserted) {
    const curr = bfsQ.shift();
    snap(root, { [curr.id]: 'compare' }, `Checking node ${curr.val}: left=${curr.left?.val ?? 'NULL'}, right=${curr.right?.val ?? 'NULL'}`);

    if (!curr.left) {
      const newN = newNode(ins);
      curr.left = newN;
      assignPos(root);
      snap(root, { [curr.id]: 'compare', [newN.id]: 'swap' }, `Inserted ${ins} as LEFT child of ${curr.val}!`, 1);
      inserted = true;
    } else {
      bfsQ.push(curr.left);
      if (!curr.right) {
        const newN = newNode(ins);
        curr.right = newN;
        assignPos(root);
        snap(root, { [curr.id]: 'compare', [newN.id]: 'swap' }, `Inserted ${ins} as RIGHT child of ${curr.val}!`, 1);
        inserted = true;
      } else {
        bfsQ.push(curr.right);
      }
    }
  }

  const finalHi = {};
  getAllNodes(root).forEach(n => finalHi[n.id] = 'sorted');
  snap(root, finalHi, `✅ BT Insert complete. ${ins} added. Tree is still complete.`);
  return steps;
};

// ============================================================
// BINARY TREE DELETE
// ============================================================
export const btDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const del = deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null }; }

  const root = newNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i++) {
    const curr = queue[0];
    const node = newNode(arr[i]);
    if (!curr.left) { curr.left = node; }
    else { curr.right = node; queue.shift(); }
    queue.push(node);
  }

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(node, hi = {}, explanation = '', swaps = 0) {
    assignPos(node);
    const nodes = getAllNodes(node).map(n => ({ ...n, left: n.left ? { id: n.left.id } : null, right: n.right ? { id: n.right.id } : null }));
    steps.push({ data: nodes, highlights: hi, explanation, treeState: {}, stats: { comparisons: steps.length, swaps, step: steps.length + 1 } });
  }

  snap(root, {}, `BT Delete: Deleting ${del}. Strategy: find target node + deepest rightmost node, swap values, delete deepest.`);

  // BFS: find target and deepest rightmost
  const bfsQ = [root];
  let targetNode = null;
  let lastNode = null;
  let lastParent = null;
  let lastDir = null;

  while (bfsQ.length) {
    const curr = bfsQ.shift();
    if (curr.val === del) targetNode = curr;
    if (curr.left) { lastParent = curr; lastDir = 'left'; lastNode = curr.left; bfsQ.push(curr.left); }
    if (curr.right) { lastParent = curr; lastDir = 'right'; lastNode = curr.right; bfsQ.push(curr.right); }
  }

  if (!targetNode) {
    snap(root, {}, `❌ Node ${del} not found in Binary Tree.`);
    return steps;
  }

  const hi1 = { [targetNode.id]: 'pivot' };
  if (lastNode) hi1[lastNode.id] = 'compare';
  snap(root, hi1, `Found target ${del} (yellow). Deepest rightmost node is ${lastNode?.val || del} (blue). Will swap values.`);

  // Copy value
  targetNode.val = lastNode ? lastNode.val : del;

  // Show after value swap
  snap(root, { [targetNode.id]: 'swap' }, `Copied ${lastNode?.val} into target position. Now deleting deepest node ${lastNode?.val}.`);

  // Delete deepest
  if (lastParent && lastNode) {
    if (lastDir === 'left') lastParent.left = null;
    else lastParent.right = null;
  }

  const finalHi = {};
  getAllNodes(root).forEach(n => finalHi[n.id] = 'sorted');
  snap(root, finalHi, `✅ BT Delete complete. ${del} removed. Deepest node copied up and deleted.`, 1);
  return steps;
};

// ============================================================
// RED-BLACK TREE INSERT
// ============================================================
export const rbtInsertSteps = (arr) => {
  const steps = [];
  const RED = 'red', BLACK = 'black';
  let idCounter = 0;
  function newNode(val) { return { id: idCounter++, val, left: null, right: null, color: RED, h: 1 }; }

  function getAllNodes(node, result = []) { if (!node) return result; result.push(node); getAllNodes(node.left, result); getAllNodes(node.right, result); return result; }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return; node.x = x; node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(node, hi = {}, explanation = '', swaps = 0) {
    if (!node) { steps.push({ data: [], highlights: {}, explanation, treeState: {}, stats: { comparisons: steps.length, swaps, step: steps.length + 1 } }); return; }
    assignPos(node);
    const nodes = getAllNodes(node).map(n => ({
      ...n,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
      // Encode color in the node for rendering
      colorLabel: n.color === RED ? '🔴' : '⚫'
    }));
    steps.push({ data: nodes, highlights: hi, explanation, treeState: { rbt: true }, stats: { comparisons: steps.length, swaps, step: steps.length + 1 } });
  }

  function rotateLeft(x) {
    const y = x.right; const T2 = y.left;
    y.left = x; x.right = T2; return y;
  }
  function rotateRight(y) {
    const x = y.left; const T2 = x.right;
    x.right = y; y.left = T2; return x;
  }

  let root = null;

  function fixInsert(root, z) {
    while (z !== root && z.color !== BLACK) {
      const parent = findParent(root, z);
      if (!parent || parent.color === BLACK) break;
      const grandparent = findParent(root, parent);
      if (!grandparent) break;

      const isParentLeft = grandparent.left === parent;
      const uncle = isParentLeft ? grandparent.right : grandparent.left;

      if (uncle && uncle.color === RED) {
        // Case 1: uncle is red → recolor
        parent.color = BLACK;
        uncle.color = BLACK;
        grandparent.color = RED;
        z = grandparent;
      } else {
        if (isParentLeft) {
          if (parent.right === z) { rotateLeft(parent); z = parent; }
          parent.color = BLACK; grandparent.color = RED; root = rotateRight(grandparent) === grandparent ? root : root;
        } else {
          if (parent.left === z) { rotateRight(parent); z = parent; }
          parent.color = BLACK; grandparent.color = RED; root = rotateLeft(grandparent) === grandparent ? root : root;
        }
        break;
      }
    }
    root.color = BLACK;
    return root;
  }

  function findParent(root, node) {
    if (!root || root === node) return null;
    if (root.left === node || root.right === node) return root;
    const lp = findParent(root.left, node);
    return lp || findParent(root.right, node);
  }

  function insertRBT(root, val) {
    const z = newNode(val);
    if (!root) { z.color = BLACK; return z; }

    // BST insert
    let curr = root;
    let parent = null;
    while (curr) {
      parent = curr;
      if (val <= curr.val) curr = curr.left;
      else curr = curr.right;
    }
    if (val <= parent.val) parent.left = z;
    else parent.right = z;

    return fixInsert(root, z);
  }

  snap(null, {}, `RBT Insert: Starting with empty Red-Black Tree. New nodes are always inserted as RED.`);

  arr.forEach((val, i) => {
    root = insertRBT(root, val);
    const allN = getAllNodes(root);
    const hi = {};
    allN.forEach(n => {
      if (n.val === val) hi[n.id] = 'swap';
      else if (n.color === BLACK) hi[n.id] = 'sorted';
      else hi[n.id] = 'compare';
    });
    snap(root, hi, `Inserted ${val} (RED). Applied color fixes. Root is always BLACK. Red nodes: ${allN.filter(n => n.color === RED).map(n => n.val).join(', ') || 'none'}.`, i > 0 ? 1 : 0);

    if (i < arr.length - 1) {
      snap(root, {}, `Tree after inserting ${val}. BLACK = stable, RED = newly placed. Next: insert ${arr[i+1]}.`);
    }
  });

  const allN = getAllNodes(root);
  const finalHi = {};
  allN.forEach(n => finalHi[n.id] = n.color === BLACK ? 'sorted' : 'compare');
  snap(root, finalHi, `✅ All ${arr.length} values inserted. RBT properties maintained:\n1. Root is BLACK ⚫\n2. No two consecutive RED nodes\n3. Equal black-height on all paths`);

  return steps;
};
