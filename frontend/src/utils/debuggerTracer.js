// Control flow analyzer and debugger tracer for Python execution pointer

const parsePythonStructure = (codeContent) => {
  const lines = codeContent.split('\n');
  const statements = [];
  
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const text = rawLine.trim();
    if (!text || text.startsWith('#') || text.startsWith('"""') || text.startsWith("'''")) {
      statements.push(null);
      continue;
    }
    
    const leadingSpaces = rawLine.match(/^\s*/)[0].length;
    
    let type = 'simple';
    if (text.startsWith('def ')) type = 'def';
    else if (text.startsWith('for ')) type = 'for';
    else if (text.startsWith('while ')) type = 'while';
    else if (text.startsWith('if ')) type = 'if';
    else if (text.startsWith('elif ')) type = 'elif';
    else if (text.startsWith('else:')) type = 'else';
    else if (text.startsWith('return ') || text === 'return') type = 'return';
    else if (text.startsWith('break ') || text === 'break') type = 'break';
    else if (text.startsWith('continue ') || text === 'continue') type = 'continue';
    
    statements.push({
      lineNum: i + 1,
      indent: leadingSpaces,
      text: text,
      type: type
    });
  }
  
  // Build parent, sibling relationships
  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    if (!stmt) continue;
    
    let nextSibling = null;
    for (let j = i + 1; j < statements.length; j++) {
      const other = statements[j];
      if (!other) continue;
      if (other.indent < stmt.indent) {
        break;
      }
      if (other.indent === stmt.indent) {
        nextSibling = other;
        break;
      }
    }
    stmt.nextSibling = nextSibling;
    
    let parent = null;
    for (let j = i - 1; j >= 0; j--) {
      const other = statements[j];
      if (!other) continue;
      if (other.indent < stmt.indent) {
        parent = other;
        break;
      }
    }
    stmt.parent = parent;
  }
  
  return statements;
};

const getNextTransitions = (stmt, statements) => {
  const transitions = [];
  if (!stmt) return transitions;
  
  const indent = stmt.indent;
  const lineNum = stmt.lineNum;
  
  if (stmt.type === 'return') {
    statements.forEach(other => {
      if (other && other.type === 'def') {
        transitions.push(other.lineNum);
      }
    });
    return transitions;
  }
  
  if (stmt.type === 'break') {
    let current = stmt.parent;
    while (current && current.type !== 'for' && current.type !== 'while') {
      current = current.parent;
    }
    if (current && current.nextSibling) {
      transitions.push(current.nextSibling.lineNum);
    } else if (current && current.parent) {
      const loopParent = current.parent;
      if (loopParent.type === 'for' || loopParent.type === 'while') {
        transitions.push(loopParent.lineNum);
      } else if (loopParent.nextSibling) {
        transitions.push(loopParent.nextSibling.lineNum);
      }
    }
    return transitions;
  }
  
  if (stmt.type === 'continue') {
    let current = stmt.parent;
    while (current && current.type !== 'for' && current.type !== 'while') {
      current = current.parent;
    }
    if (current) {
      transitions.push(current.lineNum);
    }
    return transitions;
  }
  
  if (stmt.type === 'for' || stmt.type === 'while') {
    let firstBodyStmt = null;
    for (let i = stmt.lineNum; i < statements.length; i++) {
      const other = statements[i];
      if (other && other.indent > indent) {
        firstBodyStmt = other;
        break;
      }
    }
    if (firstBodyStmt) {
      transitions.push(firstBodyStmt.lineNum);
    }
    
    if (stmt.nextSibling) {
      transitions.push(stmt.nextSibling.lineNum);
    } else if (stmt.parent) {
      if (stmt.parent.type === 'for' || stmt.parent.type === 'while') {
        transitions.push(stmt.parent.lineNum);
      } else if (stmt.parent.nextSibling) {
        transitions.push(stmt.parent.nextSibling.lineNum);
      }
    }
    return transitions;
  }
  
  if (stmt.type === 'if' || stmt.type === 'elif' || stmt.type === 'else') {
    let firstBodyStmt = null;
    for (let i = stmt.lineNum; i < statements.length; i++) {
      const other = statements[i];
      if (other && other.indent > indent) {
        firstBodyStmt = other;
        break;
      }
    }
    if (firstBodyStmt) {
      transitions.push(firstBodyStmt.lineNum);
    }
    
    if (stmt.nextSibling) {
      transitions.push(stmt.nextSibling.lineNum);
    } else if (stmt.parent) {
      if (stmt.parent.type === 'for' || stmt.parent.type === 'while') {
        transitions.push(stmt.parent.lineNum);
      } else if (stmt.parent.nextSibling) {
        transitions.push(stmt.parent.nextSibling.lineNum);
      }
    }
    return transitions;
  }
  
  if (stmt.nextSibling) {
    transitions.push(stmt.nextSibling.lineNum);
  } else if (stmt.parent) {
    if (stmt.parent.type === 'for' || stmt.parent.type === 'while') {
      transitions.push(stmt.parent.lineNum);
    } else {
      let curr = stmt.parent;
      while (curr) {
        if (curr.nextSibling) {
          transitions.push(curr.nextSibling.lineNum);
          break;
        }
        if (curr.parent && (curr.parent.type === 'for' || curr.parent.type === 'while')) {
          transitions.push(curr.parent.lineNum);
          break;
        }
        curr = curr.parent;
      }
    }
  }
  
  statements.forEach(other => {
    if (other && other.type === 'def') {
      transitions.push(other.lineNum);
    }
  });
  
  return transitions;
};

const findExecutionPath = (startLine, endLine, statements) => {
  if (startLine === endLine) return [];
  
  const queue = [[startLine]];
  const visited = new Set([startLine]);
  
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    
    if (current === endLine) {
      return path.slice(1, -1);
    }
    
    const stmt = statements[current - 1];
    if (!stmt) continue;
    
    const nexts = getNextTransitions(stmt, statements);
    for (const next of nexts) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }
  
  return [];
};

export const guessActiveLine = (algoId, snap, codeLines) => {
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
    if (explanation.includes('initialize') || explanation.includes('base case') || explanation.includes('dp[0] = 0')) return 2;
    if (explanation.includes('computing minimum') || explanation.includes('for amount')) return 4;
    if (explanation.includes('checking') || (explanation.includes('coin') && explanation.includes('option'))) return 6;
    if (explanation.includes('using coin') || explanation.includes('min coins')) return 7;
    if (explanation.includes('result') || explanation.includes('complete') || explanation.includes('minimum coins for')) return 8;
    return 6;
  }

  // 2B. Exact mappings for Counting Sort:
  if (algoId === 'counting-sort') {
    const phase = snap.data?.phase || '';
    if (explanation.includes('counting sort on') || explanation.includes('phase 1')) return 2;
    if (phase === 'count' || (explanation.includes('count[') && explanation.includes('++'))) return 4;
    if (phase === 'prefix' || explanation.includes('phase 2') || explanation.includes('prefix sum') || explanation.includes('cumulative')) return 5;
    if (phase === 'place' || explanation.includes('phase 3') || explanation.includes('placing') || explanation.includes('correct position')) return 6;
    if (explanation.includes('output[') || explanation.includes('placed at')) return 9;
    if (phase === 'done' || explanation.includes('complete') || explanation.includes('final')) return 10;
    return 4;
  }

  // 2C. Exact mappings for Trapping Rain Water:
  if (algoId === 'trapping-rain-water') {
    if (explanation.includes('trapping rain water:') || explanation.includes('two pointers') || explanation.includes('start:')) return 2;
    if (explanation.includes('lmax updated') || explanation.includes('lmax')) return 4;
    if (explanation.includes('process left') || explanation.includes('left pointer') || explanation.includes('h[l]')) return 5;
    if (explanation.includes('rmax updated') || explanation.includes('rmax')) return 6;
    if (explanation.includes('process right') || explanation.includes('right pointer') || explanation.includes('h[r]')) return 7;
    if (explanation.includes('pointers met') || explanation.includes('complete') || explanation.includes('total trapped')) return 8;
    return 5;
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
    if (direction === 'done' || explanation.includes('complete')) return 30;
    if (explanation.includes('right') || explanation.includes('→')) return 10;
    if (explanation.includes('down') || explanation.includes('↓')) return 15;
    if (explanation.includes('left') || explanation.includes('←')) return 21;
    if (explanation.includes('up') || explanation.includes('↑')) return 27;
    return 4;
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

  if (algoId === 'branch-and-bound-concept') {
    const explanation = snap.explanation || '';
    if (explanation.includes('prune')) return 3;
    if (explanation.includes('Optimal')) return 4;
    return 3;
  }

  // ── SORTING ALGORITHMS ──
  if (algoId === 'selection-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initial') || explanation.includes('Selection Sort')) return 1;
    if (explanation.includes('Finding minimum') || explanation.includes('Scanning')) return 3;
    if (explanation.includes('minimum') && explanation.includes('found')) return 4;
    if (explanation.includes('Swapping') || explanation.includes('swapped') || explanation.includes('swap')) return 8;
    if (explanation.includes('already in place') || explanation.includes('no swap needed')) return 9;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 10;
    return 3;
  }

  if (algoId === 'insertion-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initial') || explanation.includes('Insertion Sort')) return 1;
    if (explanation.includes('Picking') || explanation.includes('key') && explanation.includes('index')) return 2;
    if (explanation.includes('Shifting') || explanation.includes('shift') || explanation.includes('moving') || explanation.includes('move element')) return 4;
    if (explanation.includes('Inserting') || explanation.includes('placed') || explanation.includes('insert key')) return 5;
    if (explanation.includes('already') || explanation.includes('no shift')) return 6;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 7;
    return 3;
  }

  if (algoId === 'merge-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initial') || explanation.includes('Merge Sort')) return 1;
    if (explanation.includes('Splitting') || explanation.includes('split') || explanation.includes('divide') || explanation.includes('left half') || explanation.includes('right half')) return 5;
    if (explanation.includes('Merging') || explanation.includes('merge') || explanation.includes('combining')) return 9;
    if (explanation.includes('Comparing') || explanation.includes('compare')) return 11;
    if (explanation.includes('Left element') || explanation.includes('placing left')) return 12;
    if (explanation.includes('Right element') || explanation.includes('placing right')) return 13;
    if (explanation.includes('Copying remaining left') || explanation.includes('remaining left')) return 15;
    if (explanation.includes('Copying remaining right') || explanation.includes('remaining right')) return 17;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 18;
    return 5;
  }

  if (algoId === 'quick-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initial') || explanation.includes('Quick Sort')) return 1;
    if (explanation.includes('pivot') && (explanation.includes('Choosing') || explanation.includes('picked') || explanation.includes('selected'))) return 2;
    if (explanation.includes('Partitioning') || explanation.includes('partition')) return 3;
    if (explanation.includes('element') && (explanation.includes('less than') || explanation.includes('smaller') || explanation.includes('left of pivot'))) return 8;
    if (explanation.includes('Swap') || explanation.includes('swapping') || explanation.includes('swapped')) return 11;
    if (explanation.includes('Pivot placed') || explanation.includes('placed in position') || explanation.includes('pivot at index')) return 12;
    if (explanation.includes('Recursing') || explanation.includes('Recurse') || explanation.includes('left sub') || explanation.includes('right sub')) return 14;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 15;
    return 8;
  }

  if (algoId === 'heap-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Heap Sort')) return 1;
    if (explanation.includes('Heapify') || explanation.includes('heapify')) return 3;
    if (explanation.includes('largest') || explanation.includes('parent') && explanation.includes('children')) return 5;
    if (explanation.includes('Swap root') || explanation.includes('Extracting max')) return 8;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 10;
    return 3;
  }

  if (algoId === 'counting-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Counting Sort') || explanation.includes('Phase 1')) return 2;
    if (explanation.includes('count[') && (explanation.includes('++') || explanation.includes('++'))) return 4;
    if (explanation.includes('Phase 2') || explanation.includes('Prefix sum') || explanation.includes('Cumulative')) return 5;
    if (explanation.includes('Phase 3') || explanation.includes('Placing') || explanation.includes('correct position')) return 6;
    if (explanation.includes('output[') || explanation.includes('Placed at')) return 9;
    if (explanation.includes('sorted') || explanation.includes('complete') || explanation.includes('Final')) return 10;
    return 4;
  }

  if (algoId === 'bucket-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Bucket Sort') || explanation.includes('Initialize')) return 2;
    if (explanation.includes('Distributing') || explanation.includes('bucket[') || explanation.includes('Assign')) return 4;
    if (explanation.includes('Sorting bucket') || explanation.includes('sort each')) return 7;
    if (explanation.includes('Collecting') || explanation.includes('concatenat') || explanation.includes('Appending from bucket')) return 11;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 12;
    return 4;
  }

  if (algoId === 'radix-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Radix Sort') || explanation.includes('Initialize')) return 1;
    if (explanation.includes('digit') || explanation.includes('Counting') || explanation.includes('place value')) return 3;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 6;
    return 3;
  }

  if (algoId === 'shell-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Shell Sort') || explanation.includes('Initialize')) return 1;
    if (explanation.includes('gap') && explanation.includes('reduced')) return 2;
    if (explanation.includes('Comparing') || explanation.includes('compare') || explanation.includes('Inspecting')) return 5;
    if (explanation.includes('Shift') || explanation.includes('shifting')) return 6;
    if (explanation.includes('Inserted') || explanation.includes('placed') || explanation.includes('in position')) return 7;
    if (explanation.includes('sorted') || explanation.includes('complete')) return 9;
    return 5;
  }

  // ── SEARCH ALGORITHMS ──
  if (algoId === 'linear-search') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Linear Search') || explanation.includes('Initialize')) return 1;
    if (explanation.includes('Checking') || explanation.includes('Compare') || explanation.includes('visiting index')) return 3;
    if (explanation.includes('Found') || explanation.includes('match')) return 4;
    if (explanation.includes('Not found') || explanation.includes('not found') || explanation.includes('exhausted')) return 5;
    return 3;
  }

  if (algoId === 'ternary-search') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Ternary Search') || explanation.includes('Initialize')) return 1;
    if (explanation.includes('mid1') || explanation.includes('mid2') || explanation.includes('Dividing')) return 3;
    if (explanation.includes('Found at mid1') || explanation.includes('target is mid1')) return 5;
    if (explanation.includes('Found at mid2') || explanation.includes('target is mid2')) return 6;
    if (explanation.includes('target < arr[mid1]') || explanation.includes('search left third')) return 7;
    if (explanation.includes('target > arr[mid2]') || explanation.includes('search right third')) return 9;
    if (explanation.includes('search middle third')) return 11;
    if (explanation.includes('Found') || explanation.includes('match')) return 7;
    if (explanation.includes('Not found') || explanation.includes('not found')) return 12;
    return 3;
  }

  // ── GRAPH ALGORITHMS ──
  if (algoId === 'floyd-warshall') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Floyd-Warshall') || explanation.includes('Initialize') || explanation.includes('All-pairs')) return 2;
    if (explanation.includes('Intermediate') || explanation.includes('k=')) return 3;
    if (explanation.includes('Check if going') || explanation.includes('trying intermediate')) return 4;
    if (explanation.includes('Relax') || explanation.includes('Updated') || explanation.includes('shorter')) return 6;
    if (explanation.includes('complete') || explanation.includes('done')) return 8;
    return 4;
  }

  if (algoId === 'topological-sort') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Topological Sort') || explanation.includes('Initialize') || explanation.includes('in-degree')) return 2;
    if (explanation.includes('queue') && (explanation.includes('enqueue') || explanation.includes('added') || explanation.includes('Push'))) return 4;
    if (explanation.includes('Dequeue') || explanation.includes('Process node') || explanation.includes('Popped')) return 5;
    if (explanation.includes('Decrement') || explanation.includes('neighbor') || explanation.includes('in-degree')) return 7;
    if (explanation.includes('complete') || explanation.includes('sorted order') || explanation.includes('Result')) return 9;
    return 5;
  }

  if (algoId === 'bellman-ford') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize') || explanation.includes('Bellman-Ford')) return 1;
    if (explanation.includes('Relaxing') || explanation.includes('Relax edge')) return 4;
    if (explanation.includes('Updated') || explanation.includes('shorter path')) return 5;
    if (explanation.includes('Negative cycle') || explanation.includes('negative cycle')) return 7;
    if (explanation.includes('complete') || explanation.includes('done')) return 8;
    return 4;
  }

  // ── DP ALGORITHMS ──
  if (algoId === 'kadane') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize') || explanation.includes('Kadane')) return 1;
    if (explanation.includes('Visiting') || explanation.includes('Processing index') || explanation.includes('element')) return 3;
    if (explanation.includes('current_sum') || explanation.includes('Visualizing') || explanation.includes('Add to')) return 4;
    if (explanation.includes('Reset') || explanation.includes('Starting fresh') || explanation.includes('start new subarray')) return 5;
    if (explanation.includes('Updated max') || explanation.includes('new max') || explanation.includes('max_sum')) return 6;
    if (explanation.includes('complete') || explanation.includes('Maximum subarray')) return 7;
    return 3;
  }

  if (algoId === 'lcs-dp') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize') || explanation.includes('LCS')) return 2;
    if (explanation.includes('Match') || explanation.includes('characters match')) return 5;
    if (explanation.includes('No match') || explanation.includes('mismatch')) return 7;
    if (explanation.includes('Result') || explanation.includes('complete')) return 9;
    return 5;
  }

  // ── SLIDING WINDOW ──
  if (algoId === 'sliding-window') {
    const explanation = snap.explanation || '';
    if (explanation.includes('Initialize') || explanation.includes('sliding window') && explanation.includes('size')) return 2;
    if (explanation.includes('Window sliding') || explanation.includes('slide') || explanation.includes('Slide window')) return 4;
    if (explanation.includes('window_sum') || explanation.includes('Add') || explanation.includes('remove element')) return 5;
    if (explanation.includes('max_sum') || explanation.includes('Update max') || explanation.includes('new maximum')) return 6;
    if (explanation.includes('complete') || explanation.includes('Max sum')) return 7;
    return 4;
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

    if (!line || line.startsWith('#') || line.startsWith('"""') || line.startsWith("'''")) continue;

    let score = 0;

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
        if (line.includes(',') && (line.includes('arr[') || line.includes('nums[') || line.includes('left') || line.includes('right'))) {
          score += 15;
        }
      }
    }

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

    if (isInitial) {
      if (line.startsWith('def ') || idx < 3) {
        score += 30;
      }
    }

    if (isComplete) {
      if (line.includes('return ') || line.includes('break')) {
        score += 40;
      }
    }

    const isActionStep = isAssignWord || isPushWord || isPopWord;
    if (isActionStep) {
      if (line.startsWith('if ') || line.startsWith('elif ') || line.startsWith('while ') || line.startsWith('for ')) {
        score -= 30;
      }
    }

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

    if (!isInitial) {
      if (line.includes('left, right = 0') || line.includes('left = 0') || line.includes('right = len(') || line.includes('prev = None') || line.includes('swapped = False') || line.includes('swapped = True')) {
        score -= 45;
      }
    }

    const snapKeys = Object.keys(snap);
    snapKeys.forEach(key => {
      if (['data', 'highlights', 'explanation', 'stats', 'step'].includes(key) || key.endsWith('State')) return;
      const wordRegex = new RegExp('\\b' + key + '\\b', 'i');
      if (wordRegex.test(line)) {
        score += 10;
      }
    });

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

    const hasRefA = /\b(A|arr1|first)\b/i.test(explanation);
    const hasRefB = /\b(B|arr2|second)\b/i.test(explanation);
    if (hasRefA && line.includes('arr1')) {
      score += 25;
    }
    if (hasRefB && line.includes('arr2')) {
      score += 25;
    }

    if (line.includes('freq') && (explanation.includes('frequency') || explanation.includes('freq'))) {
      score += 20;
    }
    if (line.includes('val') && (explanation.includes('element') || explanation.includes('value') || explanation.includes('val'))) {
      score += 20;
    }

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

  if (snap.activeLine !== undefined) {
    return snap.activeLine;
  }

  return null;
};

export const traceExecutionPointer = (algoId, pythonCode, steps) => {
  if (!pythonCode || steps.length === 0) return steps;
  
  const codeLines = pythonCode.split('\n');
  const statements = parsePythonStructure(pythonCode);
  const tracedSteps = [];
  
  const mappedSteps = steps.map(step => {
    let line = step.activeLine;
    if (line === undefined) {
      line = guessActiveLine(algoId, step, codeLines);
    }
    return { ...step, activeLine: line };
  });
  
  for (let i = 0; i < mappedSteps.length; i++) {
    const currentStep = mappedSteps[i];
    tracedSteps.push(currentStep);
    
    if (i < mappedSteps.length - 1) {
      const nextStep = mappedSteps[i + 1];
      const startLine = currentStep.activeLine;
      const endLine = nextStep.activeLine;
      
      if (startLine && endLine && startLine !== endLine) {
        const intermediateLines = findExecutionPath(startLine, endLine, statements);
        
        for (const line of intermediateLines) {
          const stmt = statements[line - 1];
          if (!stmt) continue;
          
          let expl = `Executing: ${stmt.text}`;
          if (stmt.type === 'for' || stmt.type === 'while') {
            expl = `Evaluating loop condition: ${stmt.text}`;
          } else if (stmt.type === 'if' || stmt.type === 'elif') {
            expl = `Evaluating conditional check: ${stmt.text}`;
          } else if (stmt.type === 'else') {
            expl = `Entering else branch.`;
          } else if (stmt.type === 'return') {
            expl = `Returning result: ${stmt.text}`;
          } else if (stmt.type === 'def') {
            expl = `Calling function: ${stmt.text}`;
          } else if (stmt.type === 'break') {
            expl = `Loop break encountered. Exiting loop.`;
          } else if (stmt.type === 'continue') {
            expl = `Loop continue encountered. Skipping to next iteration.`;
          }
          
          tracedSteps.push({
            ...currentStep,
            activeLine: line,
            explanation: expl,
            isDebugTrace: true
          });
        }
      }
    }
  }
  
  return tracedSteps;
};
