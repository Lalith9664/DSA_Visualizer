// Cleaned and normalized Algorithms Data
// Strictly Python code only. JavaScript and Pseudocode have been removed.

export const CATEGORIES = [
  {
    "id": "arrays",
    "name": "Arrays",
    "description": "Contiguous memory blocks storing elements. Ideal for index-based retrieval.",
    "icon": "ArrayIcon",
    "algorithmsCount": 27,
    "algorithms": [
      "rotate-array",
      "merge-arrays",
      "frequency-count",
      "kadane",
      "reverse-array",
      "counting-sort",
      "trapping-rain-water",
      "array-insertion",
      "array-deletion",
      "splitting-arrays",
      "spiral-matrix",
      "transpose-matrix",
      "moores-voting-algorithm",
      "matrix-multiplication",
      "string-compression",
      "duplicate-detection",
      "count-distinct-elements",
      "subarray-sum-equals-k",
      "fixed-size-window",
      "variable-size-window",
      "maximum-sum-subarray",
      "longest-substring-no-repeat",
      "container-with-most-water",
      "merge-sorted-arrays-pointer",
      "prefix-sum-array",
      "range-sum-query-prefix",
      "subarray-sum-prefix"
    ]
  },
  {
    "id": "strings",
    "name": "Strings",
    "description": "Sequences of characters for pattern matching and text parsing.",
    "icon": "StringIcon",
    "algorithmsCount": 18,
    "algorithms": [
      "group-anagrams",
      "kmp-search",
      "palindrome-check",
      "reverse-string",
      "string-traversal",
      "string-concatenation",
      "longest-palindromic-substring",
      "string-comparison",
      "anagram",
      "string-matching",
      "pattern-matching",
      "z-algorithm",
      "manachers-algorithm",
      "string-substring",
      "palindrome-linked-list",
      "rope-ds",
      "z-algorithm-adv",
      "manachers-algorithm-adv"
    ]
  },
  {
    "id": "linked-list",
    "name": "Linked List",
    "description": "Linear data structure where elements are connected by pointers.",
    "icon": "ListIcon",
    "algorithmsCount": 18,
    "algorithms": [
      "linked-list-traversal",
      "cycle-detection",
      "middle-node",
      "reverse-list",
      "merge-sorted-lists",
      "doubly-linked-list-traversal",
      "doubly-linked-list-insertion",
      "doubly-linked-list-deletion",
      "circular-linked-list-traversal",
      "list-search",
      "list-insertion",
      "list-deletion",
      "remove-cycle",
      "intersection-point",
      "rotate-linked-list",
      "sort-linked-list",
      "partition-linked-list",
      "skip-list"
    ]
  },
  {
    "id": "stack",
    "name": "Stack",
    "description": "Last-In-First-Out (LIFO) stack collection of nodes.",
    "icon": "StackIcon",
    "algorithmsCount": 20,
    "algorithms": [
      "stack-operations",
      "balanced-parentheses",
      "min-stack",
      "infix-to-postfix",
      "infix-to-prefix",
      "prefix-evaluation",
      "postfix-evaluation",
      "previous-greater-element",
      "next-smaller-element",
      "previous-smaller-element",
      "largest-rectangle-in-histogram",
      "stock-span-problem",
      "undo-redo",
      "browser-history",
      "previous-greater-element-mono",
      "next-smaller-element-mono",
      "previous-smaller-element-mono",
      "largest-rectangle-mono",
      "daily-temperatures",
      "remove-k-digits"
    ]
  },
  {
    "id": "queue",
    "name": "Queue",
    "description": "First-In-First-Out (FIFO) collection of elements.",
    "icon": "QueueIcon",
    "algorithmsCount": 13,
    "algorithms": [
      "queue-operations",
      "circular-queue",
      "josephus-problem",
      "queue-front",
      "queue-rear",
      "deque-type",
      "task-scheduling",
      "cpu-scheduling",
      "printer-queue",
      "lru-cache-queue",
      "sliding-window-max-mono",
      "lru-cache-advanced",
      "lfu-cache-advanced"
    ]
  },
  {
    "id": "hashing",
    "name": "Hashing",
    "description": "Maps keys to values using index tables for quick retrieval.",
    "icon": "HashIcon",
    "algorithmsCount": 7,
    "algorithms": [
      "hash-map",
      "two-sum",
      "hash-set",
      "longest-consecutive-sequence",
      "pair-sum",
      "cache-implementation",
      "bloom-filter"
    ]
  },
  {
    "id": "trees",
    "name": "Trees",
    "description": "Hierarchical parent-child nodes and binary search trees.",
    "icon": "TreeIcon",
    "algorithmsCount": 34,
    "algorithms": [
      "bst-traversal",
      "bst-search",
      "tree-height",
      "lca",
      "level-order-traversal",
      "bst-insert",
      "bst-delete",
      "avl-insert",
      "avl-delete",
      "bt-insert",
      "bt-delete",
      "rbt-insert",
      "preorder-traversal",
      "postorder-traversal",
      "diameter-of-tree",
      "balanced-tree",
      "symmetric-tree",
      "left-view",
      "right-view",
      "top-view",
      "bottom-view",
      "boundary-traversal",
      "zigzag-traversal",
      "vertical-traversal",
      "serialize-tree",
      "deserialize-tree",
      "bst-floor",
      "bst-ceil",
      "validate-bst",
      "recover-bst",
      "kth-smallest",
      "kth-largest",
      "avl-rotations",
      "recursion-tree-traversal"
    ]
  },
  {
    "id": "heaps",
    "name": "Heaps",
    "description": "Priority-based binary heaps and heap operations.",
    "icon": "HeapIcon",
    "algorithmsCount": 2,
    "algorithms": [
      "min-heap",
      "max-heap"
    ]
  },
  {
    "id": "graphs",
    "name": "Graphs",
    "description": "Vertices linked by edges. Handles network routing and DFS/BFS traversals.",
    "icon": "GraphIcon",
    "algorithmsCount": 27,
    "algorithms": [
      "bfs",
      "dfs",
      "topological-sort",
      "dijkstra",
      "bellman-ford",
      "matrix-traversal",
      "adjacency-matrix-repr",
      "adjacency-list-repr",
      "connected-components",
      "bipartite-graph",
      "strongly-connected-components",
      "bridges-in-graph",
      "articulation-points",
      "euler-path",
      "hamiltonian-path",
      "prims-algorithm",
      "tarjan-algorithm",
      "kosaraju-algorithm",
      "dsu-number-of-islands",
      "computational-geometry-concept",
      "convex-hull",
      "line-sweep-algorithm",
      "a-star-search",
      "beam-search",
      "ford-fulkerson",
      "edmonds-karp",
      "dinics-algorithm"
    ]
  },
  {
    "id": "recursion",
    "name": "Recursion",
    "description": "Solving problems by self-referential functional execution steps.",
    "icon": "RecursionIcon",
    "algorithmsCount": 3,
    "algorithms": [
      "fibonacci-recursion",
      "recursion-factorial",
      "tower-of-hanoi"
    ]
  },
  {
    "id": "backtracking",
    "name": "Backtracking",
    "description": "Explores paths recursively and backtracks on dead ends.",
    "icon": "BacktrackIcon",
    "algorithmsCount": 10,
    "algorithms": [
      "n-queens",
      "rat-in-a-maze",
      "sudoku-solver",
      "word-search",
      "generate-parentheses",
      "letter-combinations",
      "palindrome-partitioning",
      "permutations",
      "crossword-solver",
      "branch-and-bound-concept"
    ]
  },
  {
    "id": "dynamic-programming",
    "name": "Dynamic Programming",
    "description": "Solves overlapping subproblems using memoization or tabulation.",
    "icon": "DpIcon",
    "algorithmsCount": 18,
    "algorithms": [
      "climbing-stairs",
      "coin-change-dp",
      "knapsack-dp",
      "lcs-dp",
      "longest-common-substring",
      "dp-burst-balloons",
      "dp-matrix-chain-multiplication",
      "dp-wildcard-matching",
      "dp-egg-dropping",
      "dp-palindrome-partitioning",
      "string-subsequence",
      "dp-memoization-concept",
      "dp-tabulation-concept",
      "dp-space-optimization",
      "dp-fibonacci",
      "dp-unbounded-knapsack",
      "dp-rod-cutting",
      "dp-partition-equal-subset-sum"
    ]
  },
  {
    "id": "greedy",
    "name": "Greedy Algorithms",
    "description": "Builds up a solution piece by piece, choosing the locally optimal choice.",
    "icon": "GreedyIcon",
    "algorithmsCount": 7,
    "algorithms": [
      "activity-selection",
      "fractional-knapsack",
      "job-scheduling",
      "minimum-platforms",
      "gas-station",
      "jump-game",
      "candy-distribution"
    ]
  },
  {
    "id": "searching",
    "name": "Searching",
    "description": "Finding indices of target keys in static or sorted collections.",
    "icon": "SearchIcon",
    "algorithmsCount": 14,
    "algorithms": [
      "linear-search",
      "binary-search",
      "ternary-search",
      "array-traversal",
      "array-searching",
      "string-searching",
      "recursion-binary-search",
      "interpolation-search",
      "exponential-search",
      "binary-search-on-answer",
      "search-in-rotated-sorted-array",
      "peak-element",
      "first-and-last-occurrence",
      "meet-in-the-middle"
    ]
  },
  {
    "id": "sorting",
    "name": "Sorting",
    "description": "Ordering collections using comparison and pivot sorting steps.",
    "icon": "SortIcon",
    "algorithmsCount": 15,
    "algorithms": [
      "bubble-sort",
      "selection-sort",
      "insertion-sort",
      "merge-sort",
      "quick-sort",
      "heap-sort",
      "radix-sort",
      "dutch-national-flag-algorithm",
      "lexicographical-order",
      "recursion-merge-sort",
      "recursion-quick-sort",
      "bucket-sort",
      "tim-sort",
      "divide-and-conquer-concept",
      "randomized-algorithms"
    ]
  },
  {
    "id": "bit-manipulation",
    "name": "Bit Manipulation",
    "description": "Exploits low-level binary bitwise operators (AND, OR, XOR, shifts).",
    "icon": "BitIcon",
    "algorithmsCount": 13,
    "algorithms": [
      "single-number",
      "power-of-two",
      "count-set-bits",
      "xor-operations",
      "bitmask-xor",
      "bitmask-and",
      "bitmask-or",
      "bitmask-not",
      "bit-left-shift",
      "bit-right-shift",
      "bit-gray-code",
      "bitmasking-concept",
      "generate-subsets-using-bitmask"
    ]
  },
  {
    "id": "mathematical",
    "name": "Mathematical Algorithms",
    "description": "Computes number-theoretic, prime sieve, and GCD values.",
    "icon": "MathIcon",
    "algorithmsCount": 9,
    "algorithms": [
      "gcd-euclidean",
      "sieve-erato",
      "fast-exponentiation",
      "pascal-triangle",
      "recursion-power-function",
      "math-lcm",
      "math-modular-arithmetic",
      "math-modular-inverse",
      "math-ncr-computation"
    ]
  },
  {
    "id": "sliding-window",
    "name": "Sliding Window",
    "description": "Maintains a running window metric over linear sequence intervals.",
    "icon": "WindowIcon",
    "algorithmsCount": 4,
    "algorithms": [
      "sliding-window",
      "sliding-window-max",
      "fruits-into-baskets",
      "minimum-window-substring"
    ]
  },
  {
    "id": "two-pointer",
    "name": "Two Pointer Technique",
    "description": "Maintains two pointer indices to scan sorted boundaries in linear time.",
    "icon": "PointerIcon",
    "algorithmsCount": 6,
    "algorithms": [
      "two-pointer",
      "remove-duplicates",
      "two-sum-two-pointer",
      "three-sum",
      "four-sum",
      "trapping-rain-water-pointer"
    ]
  },
  {
    "id": "prefix-sum",
    "name": "Prefix Sum",
    "description": "Precomputes cumulative indices sum arrays to enable O(1) range queries.",
    "icon": "PrefixIcon",
    "algorithmsCount": 6,
    "algorithms": [
      "prefix-sum",
      "equilibrium-index",
      "suffix-sum",
      "difference-array",
      "suffix-sum-array",
      "difference-array-prefix"
    ]
  },
  {
    "id": "monotonic",
    "name": "Monotonic Stack & Queue",
    "description": "Maintains sorted sequences inside a stack or queue container.",
    "icon": "MonoIcon",
    "algorithmsCount": 2,
    "algorithms": [
      "next-greater-element",
      "sliding-window-max"
    ]
  },
  {
    "id": "union-find",
    "name": "Union Find (DSU)",
    "description": "Tracks disjoint set equivalence relations and connected components.",
    "icon": "UnionIcon",
    "algorithmsCount": 13,
    "algorithms": [
      "union-find-cycle",
      "cycle-detection-graph",
      "kruskals-algorithm",
      "union-find-make-set",
      "union-find-find",
      "union-find-union",
      "union-find-path-compression",
      "union-find-union-by-rank",
      "dsu-make-set",
      "dsu-find",
      "dsu-union",
      "dsu-path-compression",
      "dsu-union-by-rank"
    ]
  },
  {
    "id": "advanced-ds",
    "name": "Advanced Data Structures",
    "description": "Advanced structures like Segment Trees and Trie autocomplete indexes.",
    "icon": "AdvDsIcon",
    "algorithmsCount": 14,
    "algorithms": [
      "segment-tree",
      "trie-search",
      "trie-insert",
      "trie-delete",
      "trie-prefix-search",
      "trie-auto-complete",
      "trie-spell-checker",
      "trie-dictionary",
      "trie-xor-problems",
      "build-segment-tree",
      "range-sum-query",
      "range-minimum-query",
      "range-maximum-query",
      "lazy-propagation"
    ]
  },
  {
    "id": "advanced-algo",
    "name": "Advanced Algorithms",
    "description": "Complex search, optimization, and rolling hash operations.",
    "icon": "AdvAlgoIcon",
    "algorithmsCount": 4,
    "algorithms": [
      "rabin-karp",
      "floyd-warshall",
      "rolling-hash",
      "johnson-algorithm"
    ]
  }
];

export const ALGORITHMS = {
  "moores-voting-algorithm": {
    "id": "moores-voting-algorithm",
    "name": "Moore's Voting Algorithm",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Finds the majority element (element that appears more than n/2 times) in linear time and O(1) space.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Fault-tolerant computing systems",
      "Distributed consensus systems",
      "Popularity metrics tracking"
    ],
    "advantages": [
      "Linear time complexity O(n)",
      "Extremely optimal memory usage (uses O(1) space)"
    ],
    "disadvantages": [
      "Requires secondary verification pass if majority element might not exist"
    ],
    "realWorldUses": [
      "Voting nodes in network systems",
      "Data streams mode detection"
    ],
    "defaultInput": "2 3 2 4 5 2 3",
    "inputType": "array",
    "code": {
      "python": "def majority_element(arr):\n    candidate = None\n    count = 0\n    for val in arr:\n        if count == 0:\n            candidate = val\n            count = 1\n        elif val == candidate:\n            count += 1\n        else:\n            count -= 1\n    return candidate"
    }
  },
  "minimum-window-substring": {
    "id": "minimum-window-substring",
    "name": "Minimum Window Substring",
    "category": "sliding-window",
    "difficulty": "Hard",
    "description": "Finds the minimum contiguous substring of S containing all characters of pattern T in linear time.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(k)",
    "applications": [
      "DNA pattern mapping",
      "Text search matching",
      "Data log filtering key sequences"
    ],
    "advantages": [
      "Extremely optimal O(n) running time",
      "Maintains dynamic window contraction boundaries"
    ],
    "disadvantages": [
      "Requires extra space for character frequency hashes"
    ],
    "realWorldUses": [
      "Sub-string lookup optimizations",
      "DNA substring aligners"
    ],
    "defaultInput": "ADOBECODEBANC\nABC",
    "inputType": "string-pattern",
    "code": {
      "python": "def min_window(s, t):\n    if not s or not t:\n        return \"\"\n    need, have = {}, {}\n    for c in t: need[c] = need.get(c, 0) + 1\n    \n    left, formed, required = 0, 0, len(need)\n    min_len, min_window = float('inf'), \"\"\n    \n    for right in range(len(s)):\n        c = s[right]\n        have[c] = have.get(c, 0) + 1\n        if c in need and have[c] == need[c]:\n            formed += 1\n            \n        while formed == required:\n            if (right - left + 1) < min_len:\n                min_len = right - left + 1\n                min_window = s[left : right + 1]\n            \n            lc = s[left]\n            have[lc] -= 1\n            if lc in need and have[lc] < need[lc]:\n                formed -= 1\n            left += 1\n            \n    return min_window"
    }
  },
  "fruits-into-baskets": {
    "id": "fruits-into-baskets",
    "name": "Fruits Into Baskets",
    "category": "sliding-window",
    "difficulty": "Medium",
    "description": "Find the longest contiguous subarray that contains at most 2 distinct integers (representing at most 2 types of fruits in 2 baskets).",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Data streaming window partitions",
      "Stock trend analysis",
      "Longest subarray problems with distinct values"
    ],
    "advantages": [
      "Linear time complexity O(n)",
      "Single pass with two pointers (sliding window)"
    ],
    "disadvantages": [
      "Requires extra space for frequency count maps"
    ],
    "realWorldUses": [
      "Network packets telemetry windowing",
      "Analytics events aggregation"
    ],
    "defaultInput": "2 1 5 1 3 2",
    "inputType": "array",
    "code": {
      "python": "def total_fruit(fruits):\n    basket = {}\n    left = 0\n    max_len = 0\n    for right in range(len(fruits)):\n        basket[fruits[right]] = basket.get(fruits[right], 0) + 1\n        while len(basket) > 2:\n            basket[fruits[left]] -= 1\n            if basket[fruits[left]] == 0:\n                del basket[fruits[left]]\n            left += 1\n        max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  "transpose-matrix": {
    "id": "transpose-matrix",
    "name": "Transpose Matrix",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Reflects a matrix over its main diagonal, swapping row and column indices.",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Linear algebra libraries",
      "Image processing algorithms (reflection/rotation)",
      "Graph algorithms adjacency matrices conversions"
    ],
    "advantages": [
      "Can be performed in-place for square matrices",
      "Simplifies row-wise data operations"
    ],
    "disadvantages": [
      "Requires extra space for non-square matrices in general transposition"
    ],
    "realWorldUses": [
      "Rendering transformations",
      "Image 90-degree rotations"
    ],
    "defaultInput": "3",
    "inputType": "spiral-matrix",
    "code": {
      "python": "def transpose(matrix):\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    return matrix"
    }
  },
  "spiral-matrix": {
    "id": "spiral-matrix",
    "name": "Spiral Matrix",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Traverses a 2D matrix in spiral order (Right, Down, Left, Up) starting from top-left.",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Image processing grids",
      "Data serialization",
      "Printing patterns"
    ],
    "advantages": [
      "Traverses every cell exactly once",
      "In-place traversal index operations"
    ],
    "disadvantages": [
      "Requires edge cases checks for non-square matrices"
    ],
    "realWorldUses": [
      "Matrix rotations",
      "Pixel manipulation algorithms"
    ],
    "defaultInput": "4",
    "inputType": "spiral-matrix",
    "code": {
      "python": "def spiral_order(matrix):\n    if not matrix:\n        return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    \n    while top <= bottom and left <= right:\n        # Traverse Right\n        for i in range(left, right + 1):\n            res.append(matrix[top][i])\n        top += 1\n        \n        # Traverse Down\n        for i in range(top, bottom + 1):\n            res.append(matrix[i][right])\n        right -= 1\n        \n        if top <= bottom:\n            # Traverse Left\n            for i in range(right, left - 1, -1):\n                res.append(matrix[bottom][i])\n            bottom -= 1\n            \n        if left <= right:\n            # Traverse Up\n            for i in range(bottom, top - 1, -1):\n                res.append(matrix[i][left])\n            left += 1\n            \n    return res"
    }
  },
  "difference-array": {
    "id": "difference-array",
    "name": "Difference Array",
    "category": "prefix-sum",
    "difficulty": "Easy",
    "description": "Computes the changes between consecutive elements in an array. Often used for range update query optimizations.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range update algorithms",
      "Difference query caches",
      "Video rendering coordinate changes"
    ],
    "advantages": [
      "Allows range updates in O(1) time",
      "Linear preprocessing time"
    ],
    "disadvantages": [
      "Requires reconstruction to retrieve values"
    ],
    "realWorldUses": [
      "Subsegment delta updates",
      "Audio delta modulation"
    ],
    "defaultInput": "10 5 2 8 12",
    "inputType": "array",
    "code": {
      "python": "def difference_array(arr):\n    n = len(arr)\n    diff = [0] * n\n    diff[0] = arr[0]\n    for i in range(1, n):\n        diff[i] = arr[i] - arr[i-1]\n    return diff"
    }
  },
  "suffix-sum": {
    "id": "suffix-sum",
    "name": "Suffix Sum",
    "category": "prefix-sum",
    "difficulty": "Easy",
    "description": "Computes the running sum of elements in an array from right to left.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Range update optimizations",
      "Preprocessing for advanced array range algorithms"
    ],
    "advantages": [
      "Linear time complexity",
      "Simplifies right-to-left subsegment calculation"
    ],
    "disadvantages": [
      "Requires extra memory to allocate the suffix array"
    ],
    "realWorldUses": [
      "Suffix query caches",
      "Image filtering filters"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "code": {
      "python": "def suffix_sum(arr):\n    n = len(arr)\n    suffix = [0] * n\n    suffix[n-1] = arr[n-1]\n    for i in range(n-2, -1, -1):\n        suffix[i] = suffix[i+1] + arr[i]\n    return suffix"
    }
  },
  "splitting-arrays": {
    "id": "splitting-arrays",
    "name": "Splitting Arrays",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Slices a single array into two smaller arrays at a given split index.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Divide and conquer algorithms",
      "Merge sort partitions",
      "Data splitting for ML training/testing"
    ],
    "advantages": [
      "Clean subsetting",
      "No mutations to original array"
    ],
    "disadvantages": [
      "Requires extra memory to allocate the split subsets"
    ],
    "realWorldUses": [
      "Subsegment extraction",
      "Slicing buffers"
    ],
    "defaultInput": "5 3 8 1 9",
    "inputType": "array",
    "code": {
      "python": "def split_array(arr, index):\n    left = arr[:index]\n    right = arr[index:]\n    return left, right"
    }
  },
  "array-insertion": {
    "id": "array-insertion",
    "name": "Array Insertion",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Insert an element at a given position by shifting elements right.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Dynamic arrays",
      "Implementing basic data structures",
      "Online list updating"
    ],
    "advantages": [
      "Simple to understand",
      "In-place shifting",
      "Preserves relative order"
    ],
    "disadvantages": [
      "Requires shifting elements which is slow for large arrays",
      "Requires pre-allocated space or resizing"
    ],
    "realWorldUses": [
      "ArrayList insertions",
      "Shifting array buffers"
    ],
    "defaultInput": "5 3 8 1 9",
    "inputType": "array",
    "code": {
      "python": "def insert_element(arr, element, position):\n    arr.append(0)\n    for i in range(len(arr) - 1, position, -1):\n        arr[i] = arr[i - 1]\n    arr[position] = element\n    return arr"
    }
  },
  "array-deletion": {
    "id": "array-deletion",
    "name": "Array Deletion",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Remove an element by shifting subsequent elements left.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Dynamic arrays",
      "Implementing queue/stack buffers",
      "List filtering"
    ],
    "advantages": [
      "Simple to implement",
      "In-place removal"
    ],
    "disadvantages": [
      "Requires shifting elements which is slow for large arrays"
    ],
    "realWorldUses": [
      "ArrayList removals",
      "Buffer cleanup"
    ],
    "defaultInput": "5 3 8 1 9 4",
    "inputType": "array",
    "code": {
      "python": "def delete_element(arr, position):\n    for i in range(position, len(arr) - 1):\n        arr[i] = arr[i + 1]\n    arr.pop()\n    return arr"
    }
  },
  "bubble-sort": {
    "id": "bubble-sort",
    "name": "Bubble Sort",
    "category": "sorting",
    "difficulty": "Easy",
    "description": "Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Teaching introductory sorting concepts",
      "Sorting small or nearly sorted arrays",
      "Detecting simple swap requirements"
    ],
    "advantages": [
      "Simple to understand and implement",
      "In-place sorting (requires no extra memory)",
      "Stable sorting algorithm (preserves relative order)"
    ],
    "disadvantages": [
      "Extremely slow on large datasets",
      "Highly inefficient compared to Quick Sort or Merge Sort",
      "Performs redundant comparisons"
    ],
    "realWorldUses": [
      "Computer graphics graphics pipelines for depth sorting",
      "Legacy embedded microcontrollers with minimal memory footprint"
    ],
    "defaultInput": "5 3 8 1 9",
    "inputType": "array",
    "code": {
      "python": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr"
    }
  },
  "selection-sort": {
    "id": "selection-sort",
    "name": "Selection Sort",
    "category": "sorting",
    "difficulty": "Easy",
    "description": "Selection Sort divides the input array into two parts: the sublist of items already sorted, and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted sublist and moves it to the beginning of the unsorted sublist.",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Sorting datasets where auxiliary memory write cost is expensive",
      "Simple applications with low data inputs"
    ],
    "advantages": [
      "Performs minimal swap operations compared to other algorithms",
      "In-place algorithm",
      "Predictable constant performance"
    ],
    "disadvantages": [
      "Poor complexity on already sorted lists",
      "Unstable by default",
      "Slow on larger sizes"
    ],
    "realWorldUses": [
      "EEPROM or flash memory sorting where writes are minimized"
    ],
    "defaultInput": "12 9 3 7 15",
    "inputType": "array",
    "code": {
      "python": "def selection_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr"
    }
  },
  "insertion-sort": {
    "id": "insertion-sort",
    "name": "Insertion Sort",
    "category": "sorting",
    "difficulty": "Easy",
    "description": "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Sorting small datasets",
      "Sorting streams of data arriving live",
      "Hybrid sorting algorithms like Timsort"
    ],
    "advantages": [
      "Highly efficient for small arrays",
      "Adaptive (O(n) for sorted/mostly-sorted)",
      "Stable and in-place"
    ],
    "disadvantages": [
      "Slow on average and worst cases",
      "Requires shifting elements which can be slow"
    ],
    "realWorldUses": [
      "Base step for hybrid algorithms in Python (Timsort) and Java (Dual-Pivot Quicksort)"
    ],
    "defaultInput": "8 4 9 1 3",
    "inputType": "array",
    "code": {
      "python": "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr"
    }
  },
  "merge-sort": {
    "id": "merge-sort",
    "name": "Merge Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Merge Sort is an O(n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. It uses a divide-and-conquer strategy.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "External sorting of files on secondary storage",
      "Stable sorting requirements",
      "E-commerce lists"
    ],
    "advantages": [
      "Guaranteed O(n log n) runtime",
      "Stable sort",
      "Highly parallelizable"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space",
      "Slower than quicksort for in-memory systems"
    ],
    "realWorldUses": [
      "Linux kernel file merges",
      "Git merge actions",
      "Default stable sorting in Python"
    ],
    "defaultInput": "9 2 7 1 6 5",
    "inputType": "array",
    "code": {
      "python": "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    res = []\n    l = r = 0\n    while l < len(left) and r < len(right):\n        if left[l] < right[r]:\n            res.append(left[l])\n            l += 1\n        else:\n            res.append(right[r])\n            r += 1\n    res.extend(left[l:])\n    res.extend(right[r:])\n    return res"
    }
  },
  "quick-sort": {
    "id": "quick-sort",
    "name": "Quick Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Quick Sort is a highly efficient, comparison-based divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Systems programming libraries",
      "General-purpose sorting frameworks",
      "Numerical computations"
    ],
    "advantages": [
      "Cache friendly and highly optimized in practice",
      "No auxiliary memory storage required (in-place)",
      "Extremely fast average case"
    ],
    "disadvantages": [
      "Worst case time complexity is O(n²)",
      "Unstable sorting algorithm"
    ],
    "realWorldUses": [
      "Standard C library qsort() implementation",
      "JavaScript V8 engine array sorting for primitive values"
    ],
    "defaultInput": "6 2 9 4 1 8",
    "inputType": "array",
    "code": {
      "python": "def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1"
    }
  },
  "linear-search": {
    "id": "linear-search",
    "name": "Linear Search",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Unsorted datasets",
      "Searching lists with small sizes",
      "Key-lookup in associative arrays"
    ],
    "advantages": [
      "No sorted array restriction",
      "Very simple implementation"
    ],
    "disadvantages": [
      "Slow on large lists due to O(n) scan"
    ],
    "realWorldUses": [
      "Finding items in simple logs",
      "Iterative arrays in embedded systems"
    ],
    "defaultInput": "5 3 8 1 9\nTarget = 8",
    "inputType": "search",
    "code": {
      "python": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1"
    }
  },
  "binary-search": {
    "id": "binary-search",
    "name": "Binary Search",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Binary Search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "kadane": {
    "id": "kadane",
    "name": "Kadane's Algorithm",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Kadane's Algorithm is an iterative dynamic programming algorithm used to find the maximum sum contiguous subarray in a one-dimensional numeric array.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding maximum profit time slices",
      "Image processing scanning filters"
    ],
    "advantages": [
      "O(n) linear performance instead of naive O(n²) or O(n³) checks"
    ],
    "disadvantages": [
      "Does not easily scale to multidimensional arrays without complexity"
    ],
    "realWorldUses": [
      "Financial stock market analysis for highest price growth periods"
    ],
    "defaultInput": "-2 1 -3 4 -1 2 1 -5 4",
    "inputType": "array",
    "code": {
      "python": "def kadane(arr):\n    max_so_far = curr_max = arr[0]\n    for i in range(1, len(arr)):\n        curr_max = max(arr[i], curr_max + arr[i])\n        max_so_far = max(max_so_far, curr_max)\n    return max_so_far"
    }
  },
  "doubly-linked-list-traversal": {
    "id": "doubly-linked-list-traversal",
    "name": "Doubly Linked List Traversal",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Traverses a doubly linked list sequentially from head to tail using forward pointers.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Text editor cursor movement",
      "Browser forward/back navigation caches"
    ],
    "advantages": [
      "Can traverse backward and forward"
    ],
    "disadvantages": [
      "Extra pointer memory overhead per node"
    ],
    "realWorldUses": [
      "Music playlist forward/back queuing",
      "Recent search history listings"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def traverse_dll(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "doubly-linked-list-insertion": {
    "id": "doubly-linked-list-insertion",
    "name": "Doubly Linked List Insertion",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Inserts a new node at a specified position in a doubly linked list, re-linking adjacent prev and next pointers.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Dynamic data management lists"
    ],
    "advantages": [
      "Insertion after a known node is O(1)"
    ],
    "disadvantages": [
      "Requires updating twice as many pointers"
    ],
    "realWorldUses": [
      "Transactional logs builders"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def insert_after(prev_node, new_val):\n    new_node = DLLNode(new_val)\n    new_node.next = prev_node.next\n    new_node.prev = prev_node\n    if prev_node.next:\n        prev_node.next.prev = new_node\n    prev_node.next = new_node"
    }
  },
  "doubly-linked-list-deletion": {
    "id": "doubly-linked-list-deletion",
    "name": "Doubly Linked List Deletion",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Deletes a target node from a doubly linked list, updating the next pointer of the predecessor and the prev pointer of the successor.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "LRU cache evictions",
      "Memory management buffers"
    ],
    "advantages": [
      "O(1) deletion if node pointer is known"
    ],
    "disadvantages": [
      "Tricky boundary cases (head/tail updates)"
    ],
    "realWorldUses": [
      "Operating system page replacement algorithms"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def delete_node(del_node):\n    if del_node.prev:\n        del_node.prev.next = del_node.next\n    if del_node.next:\n        del_node.next.prev = del_node.prev"
    }
  },
  "circular-linked-list-traversal": {
    "id": "circular-linked-list-traversal",
    "name": "Circular Linked List Traversal",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Traverses a circular linked list, stopping when the cursor loops back and references the starting head node again.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Multiplayer game turn schedulers",
      "CPU round-robin time-sharing systems"
    ],
    "advantages": [
      "Can traverse whole list starting from any node"
    ],
    "disadvantages": [
      "Infinite loop risk if head condition is missed"
    ],
    "realWorldUses": [
      "Operating system process task execution queues"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def traverse_circular(head):\n    if not head: return\n    curr = head\n    while True:\n        print(curr.val)\n        curr = curr.next\n        if curr == head:\n            break"
    }
  },
  "reverse-list": {
    "id": "reverse-list",
    "name": "Reverse Linked List",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Reverses a singly linked list so that the tail node becomes the new head, and all intermediate node pointers reference their preceding nodes.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Parsing engines",
      "Undo actions in stacks",
      "Linked data inversion"
    ],
    "advantages": [
      "In-place reversion requires zero auxiliary node replication space"
    ],
    "disadvantages": [
      "Requires pointers update handling, easy to break links"
    ],
    "realWorldUses": [
      "Underlying data modifications in transaction logs"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev"
    }
  },
  "balanced-parentheses": {
    "id": "balanced-parentheses",
    "name": "Balanced Parentheses",
    "category": "stack",
    "difficulty": "Easy",
    "description": "Given a string containing parentheses, brackets, and braces, determine if the input string is valid by matching opening brackets with their closing peers using a Stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Compiler brackets validating",
      "JSON/HTML markup integrity parser tools"
    ],
    "advantages": [
      "Ensures precise nested boundaries validation"
    ],
    "disadvantages": [
      "Space complexity scales linearly with input characters size"
    ],
    "realWorldUses": [
      "Code IDE markup syntax-checker features",
      "Terminal CLI command line argument verification scripts"
    ],
    "defaultInput": "{ [ ( ) ] }",
    "inputType": "stack",
    "code": {
      "python": "def is_balanced(s):\n    stack = []\n    mapping = {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}\n    for char in s:\n        if char in mapping.values():\n            stack.append(char)\n        elif char in mapping:\n            if not stack or stack.pop() != mapping[char]:\n                return False\n    return len(stack) == 0"
    }
  },
  "queue-operations": {
    "id": "queue-operations",
    "name": "Queue FIFO Simulator",
    "category": "queue",
    "difficulty": "Easy",
    "description": "Simulates First-In-First-Out (FIFO) queue buffers representing enqueues (insert at back) and dequeues (remove from front). Shows head and tail references dynamically.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Task lists",
      "Message queues",
      "Network packets buffers"
    ],
    "advantages": [
      "Guarantees historical entry execution order"
    ],
    "disadvantages": [
      "Needs constant index pointer maintenance"
    ],
    "realWorldUses": [
      "CPU job schedulers",
      "Printer queue handlers"
    ],
    "defaultInput": "10 20 30 40",
    "inputType": "queue",
    "code": {
      "python": "from collections import deque\nclass Queue:\n    def __init__(self):\n        self.items = deque()\n    def enqueue(self, val):\n        self.items.append(val)\n    def dequeue(self):\n        if not self.items: return \"Underflow\"\n        return self.items.popleft()"
    }
  },
  "bst-traversal": {
    "id": "bst-traversal",
    "name": "Binary Search Tree Traversals",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Binary Search Tree Traversals explore depth-first traversals: Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root) over node trees.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "code": {
      "python": "def inorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        inorder(root.left, visited)\n        visited.append(root.val)\n        inorder(root.right, visited)\n    return visited"
    }
  },
  "dijkstra": {
    "id": "dijkstra",
    "name": "Dijkstra's Shortest Path",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Dijkstra's Algorithm finds the shortest paths from a single source node to all other nodes in a weighted graph with non-negative edge weights.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "tower-of-hanoi": {
    "id": "tower-of-hanoi",
    "name": "Tower of Hanoi Recursion",
    "category": "recursion",
    "difficulty": "Medium",
    "description": "A mathematical puzzle where we have three rods and N disks. The goal is to move the entire stack of disks from the source rod to the target rod, obeying simple rule parameters.",
    "timeComplexity": {
      "best": "O(2ⁿ)",
      "average": "O(2ⁿ)",
      "worst": "O(2ⁿ)"
    },
    "spaceComplexity": "O(n) recursion call stack",
    "applications": [
      "Recursion design pattern instruction",
      "Mathematical binary patterns research"
    ],
    "advantages": [
      "Demonstrates exact divide and conquer breakdown"
    ],
    "disadvantages": [
      "Exponential steps growth (2ⁿ - 1 moves) restricts run size"
    ],
    "realWorldUses": [
      "Disk defragmentation movement optimizations",
      "Backup rotating schemes"
    ],
    "defaultInput": "3",
    "inputType": "recursion",
    "code": {
      "python": "def tower_of_hanoi(n, from_rod, to_rod, aux_rod):\n    if n == 1:\n        print(f\"Move disk 1 from {from_rod} to {to_rod}\")\n        return\n    tower_of_hanoi(n - 1, from_rod, aux_rod, to_rod)\n    print(f\"Move disk {n} from {from_rod} to {to_rod}\")\n    tower_of_hanoi(n - 1, aux_rod, to_rod, from_rod)"
    }
  },
  "climbing-stairs": {
    "id": "climbing-stairs",
    "name": "Climbing Stairs DP",
    "category": "dynamic-programming",
    "difficulty": "Easy",
    "description": "You are climbing a staircase. It takes N steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? Visualizes DP table caching.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n) or O(1) state variables",
    "applications": [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases"
    ],
    "advantages": [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory"
    ],
    "disadvantages": [
      "Takes additional memory unless state pointers optimized to O(1)"
    ],
    "realWorldUses": [
      "Grid paths traversal routes counts"
    ],
    "defaultInput": "5",
    "inputType": "dp",
    "code": {
      "python": "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]"
    }
  },
  "two-sum": {
    "id": "two-sum",
    "name": "Two Sum Hash Mapping",
    "category": "hashing",
    "difficulty": "Easy",
    "description": "Given an array of integers and a target value, find indices of the two numbers that sum up to that target. Uses a Hash Map to look up complement values in O(1) time.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Key lookup problems",
      "Checking sum pairs in arrays"
    ],
    "advantages": [
      "Runs in O(n) linear lookup compared to brute-force O(n²) nested check"
    ],
    "disadvantages": [
      "Takes extra O(n) memory to store key-index mappings"
    ],
    "realWorldUses": [
      "Database lookups",
      "Asset pair matching"
    ],
    "defaultInput": "2 7 11 15\nTarget = 9",
    "inputType": "hash",
    "code": {
      "python": "def two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []"
    }
  },
  "heap-sort": {
    "id": "heap-sort",
    "name": "Heap Sort",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. It behaves like selection sort where we first find the maximum element and place the maximum element at the end.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(1)",
    "inputType": "heap",
    "defaultInput": "12 11 13 5 6 7",
    "applications": [
      "Systems concerned with worst-case scenarios",
      "Embedded systems with security concerns"
    ],
    "advantages": [
      "In-place sort with O(1) auxiliary storage",
      "Guaranteed O(n log n) performance in all cases"
    ],
    "disadvantages": [
      "Poor cache locality and high constant factors",
      "Unstable sorting method"
    ],
    "realWorldUses": [
      "Linux kernel memory manager sorting lists",
      "Priority queue implementations"
    ],
    "code": {
      "python": "def heap_sort(arr):\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n    for i in range(n - 1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]\n        heapify(arr, i, 0)"
    }
  },
  "min-heap": {
    "id": "min-heap",
    "name": "Min Heap Operations",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "A Min-Heap is a complete binary tree where the key at the root node must be the minimum among all keys present in the Binary Heap, recursively true for all subtrees.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "max-heap": {
    "id": "max-heap",
    "name": "Max Heap Operations",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "A Max-Heap is a complete binary tree where the key at the root node must be the maximum among all keys present in the Binary Heap, recursively true for all subtrees.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Heap sort sorting algorithm",
      "Priority queues where higher values indicate higher priority"
    ],
    "advantages": [
      "O(1) lookup for maximum value element",
      "O(log n) standard insert and extract operations"
    ],
    "disadvantages": [
      "Finding arbitrary items takes O(n) scan",
      "Not stable index layout"
    ],
    "realWorldUses": [
      "Job priority queuing systems",
      "Bandwidth management systems"
    ],
    "code": {
      "python": "class MaxHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val):\n        self.heap.append(val)\n        self.sift_up(len(self.heap) - 1)"
    }
  },
  "prefix-sum": {
    "id": "prefix-sum",
    "name": "Prefix Sum",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Prefix Sum involves precomputing the cumulative sum of elements in an array, allowing range sum queries to be answered in O(1) time.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations"
    ],
    "advantages": [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation"
    ],
    "disadvantages": [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically"
    ],
    "realWorldUses": [
      "Database column sum indexes",
      "Graphics renderer brightness mapping"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "code": {
      "python": "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix"
    }
  },
  "sliding-window": {
    "id": "sliding-window",
    "name": "Sliding Window",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Sliding Window is a technique that uses a subarray of a fixed or variable size to efficiently track window metrics over a sequence.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control"
    ],
    "advantages": [
      "Avoids redundant recalculations",
      "Linear performance tracking"
    ],
    "disadvantages": [
      "Only applicable on linear sequences",
      "Tricky index handling"
    ],
    "realWorldUses": [
      "Streaming rate limiters",
      "Network buffer packages scanning"
    ],
    "defaultInput": "2 1 5 1 3 2",
    "inputType": "array",
    "code": {
      "python": "def max_subarray_sum(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum"
    }
  },
  "two-pointer": {
    "id": "two-pointer",
    "name": "Two Pointer Technique",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Two Pointer Technique uses two integer indexes to traverse a sorted array from opposite ends to find pairs or subsets that satisfy specific criteria.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Pair sum targeting in sorted arrays",
      "Reversing arrays in-place",
      "Partitioning steps in Quick Sort"
    ],
    "advantages": [
      "Operates with zero auxiliary space",
      "Avoids quadratic nested loops"
    ],
    "disadvantages": [
      "Requires the list or array to be pre-sorted",
      "Applicable only to linear containers"
    ],
    "realWorldUses": [
      "Data de-duplication utilities",
      "Image mirroring software engines"
    ],
    "defaultInput": "1 2 3 4 6 8 9",
    "inputType": "array",
    "code": {
      "python": "def has_pair_with_sum(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        curr_sum = arr[left] + arr[right]\n        if curr_sum == target:\n            return True\n        elif curr_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return False"
    }
  },
  "rotate-array": {
    "id": "rotate-array",
    "name": "Rotate Array",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Rotates an array to the right or left by k steps. Frequently solved using array reversal helper calls.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Cyclic buffer indexing",
      "Load balancing round-robin task distributions",
      "Data encryption shuffles"
    ],
    "advantages": [
      "In-place rotation option is extremely memory-efficient",
      "Low computational latency"
    ],
    "disadvantages": [
      "Requires modulo index computation logic",
      "Element shifts cause array index re-alignments"
    ],
    "realWorldUses": [
      "Audio cyclic stream buffer caches",
      "Ring-buffer scheduling networks"
    ],
    "defaultInput": "1 2 3 4 5 6 7",
    "inputType": "array",
    "code": {
      "python": "def rotate(arr, k):\n    n = len(arr)\n    k %= n\n    def reverse(start, end):\n        while start < end:\n            arr[start], arr[end] = arr[end], arr[start]\n            start += 1\n            end -= 1\n    reverse(0, n - 1)\n    reverse(0, k - 1)\n    reverse(k, n - 1)\n    return arr"
    }
  },
  "merge-arrays": {
    "id": "merge-arrays",
    "name": "Merge Sorted Arrays",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Merges two pre-sorted arrays into a single sorted array using two pointer comparison loops.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(n + m)",
    "applications": [
      "Merge step inside Merge Sort",
      "Joining pre-sorted databases",
      "Batch dataset reconciliations"
    ],
    "advantages": [
      "Preserves pre-sorted order",
      "Linear execution latency"
    ],
    "disadvantages": [
      "Requires extra space allocation for the output array"
    ],
    "realWorldUses": [
      "Database index merge join engines",
      "Sorted log streaming mergers"
    ],
    "defaultInput": "1 3 5\n2 4 6",
    "inputType": "array",
    "code": {
      "python": "def merge(arr1, arr2):\n    res, i, j = [], 0, 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            res.append(arr1[i])\n            i += 1\n        else:\n            res.append(arr2[j])\n            j += 1\n    res.extend(arr1[i:])\n    res.extend(arr2[j:])\n    return res"
    }
  },
  "frequency-count": {
    "id": "frequency-count",
    "name": "Frequency Count",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Tracks the occurrence frequency of elements in an array using an auxiliary hash or array register.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(u)",
    "applications": [
      "Histogram representation",
      "Duplicate validation checks",
      "Categorization maps creation"
    ],
    "advantages": [
      "Extremely simple to implement",
      "Single linear pass scan"
    ],
    "disadvantages": [
      "Consumes additional space for distinct element mappings"
    ],
    "realWorldUses": [
      "Query analytics dashboard counters",
      "Token occurrence logs engines"
    ],
    "defaultInput": "2 3 2 4 5 2 3",
    "inputType": "array",
    "code": {
      "python": "def count_frequency(arr):\n    freq = {}\n    for val in arr:\n        freq[val] = freq.get(val, 0) + 1\n    return freq"
    }
  },
  "linked-list-traversal": {
    "id": "linked-list-traversal",
    "name": "Linked List Traversal",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Sequential traversal of nodes in a linked list from root head to the tail node pointer.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching"
    ],
    "advantages": [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting"
    ],
    "disadvantages": [
      "Lacks direct random indexing support"
    ],
    "realWorldUses": [
      "Low-level driver structures",
      "Blockchain transaction validation linking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "cycle-detection": {
    "id": "cycle-detection",
    "name": "Cycle Detection (Floyd's)",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Detects loops in a linked list using two pointers moving at different speeds (slow and fast tortoise and hare).",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Detecting memory pointer circular leaks",
      "Network circular path validation checks",
      "Checking circular list layouts"
    ],
    "advantages": [
      "Requires no extra hashing tables",
      "Constant O(1) space footprint"
    ],
    "disadvantages": [
      "Requires structural list structure modification on removal",
      "Double pointers coordination overhead"
    ],
    "realWorldUses": [
      "Router loop path checking protocols",
      "OS process thread circular dependencies checking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False"
    }
  },
  "middle-node": {
    "id": "middle-node",
    "name": "Find Middle Node",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Finds the middle element of a linked list using the slow/fast tortoise and hare pointer technique.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Splitting linked lists in Merge Sort",
      "Checking middle attributes of nodes",
      "Dividing dynamic decks"
    ],
    "advantages": [
      "Calculates target in a single pass",
      "O(1) extra space"
    ],
    "disadvantages": [
      "Relies on sequential node scanning (no random indexes)"
    ],
    "realWorldUses": [
      "Data dividing stream schedulers",
      "Linked-list based sorting algorithms"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "code": {
      "python": "def get_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow"
    }
  },
  "stack-operations": {
    "id": "stack-operations",
    "name": "Stack Operations",
    "category": "stack",
    "difficulty": "Easy",
    "description": "Basic LIFO operations (Push, Pop, Peek) demonstrating element storage on top of a stack frame.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Expression evaluations",
      "Backtracking algorithms",
      "Browser back-button history navigation tracks"
    ],
    "advantages": [
      "Simplest LIFO logic",
      "Constant-time O(1) operations"
    ],
    "disadvantages": [
      "Strict sequential stack frames access constraint"
    ],
    "realWorldUses": [
      "Compiler recursion stacks",
      "Undo/redo logs managers"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "stack",
    "code": {
      "python": "class Stack:\n    def __init__(self): self.items = []\n    def push(self, x): self.items.append(x)\n    def pop(self): return self.items.pop()\n    def peek(self): return self.items[-1]"
    }
  },
  "next-greater-element": {
    "id": "next-greater-element",
    "name": "Next Greater Element",
    "category": "stack",
    "difficulty": "Medium",
    "description": "Finds the first greater element to the right of each element in an array using a monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Dynamic range value scans",
      "Subarray metrics checks",
      "Temperature forecasting spikes"
    ],
    "advantages": [
      "Linear processing time O(n) instead of quadratic O(n^2) nested scans"
    ],
    "disadvantages": [
      "Requires extra space for monotonic stack tracker storage"
    ],
    "realWorldUses": [
      "Industrial sensor telemetry alarm triggers",
      "Time-series database change point detections"
    ],
    "defaultInput": "4 5 2 25",
    "inputType": "stack",
    "code": {
      "python": "def next_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] < arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res"
    }
  },
  "circular-queue": {
    "id": "circular-queue",
    "name": "Circular Queue",
    "category": "queue",
    "difficulty": "Medium",
    "description": "A queue that utilizes circular buffer arrays to avoid memory fragmentation on insertion/deletion.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Ring buffers memory allocators",
      "CPU process round-robin scheduler lists",
      "Streaming audio buffers"
    ],
    "advantages": [
      "Zero index element shuffling shifts requirements",
      "Fixed queue boundary size control"
    ],
    "disadvantages": [
      "Bounded storage capacity constraints"
    ],
    "realWorldUses": [
      "Router packet switching caches",
      "Microcontroller serial data stream decoders"
    ],
    "defaultInput": "10 20 30 40",
    "inputType": "queue",
    "code": {
      "python": "class CircularQueue:\n    def __init__(self, k):\n        self.size = k\n        self.queue = [None] * k\n        self.front = self.rear = -1\n    def enqueue(self, val):\n        if (self.rear + 1) % self.size == self.front: return False\n        if self.front == -1: self.front = 0\n        self.rear = (self.rear + 1) % self.size\n        self.queue[self.rear] = val\n        return True"
    }
  },
  "sliding-window-max": {
    "id": "sliding-window-max",
    "name": "Sliding Window Maximum",
    "category": "queue",
    "difficulty": "Hard",
    "description": "Finds the maximum value inside a sliding window of size k at every step using a monotonic deque.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(k)",
    "applications": [
      "Streaming data analysis",
      "Image filter blurring kernel windows",
      "Financial price trend peaks monitoring"
    ],
    "advantages": [
      "Guarantees linear-time processing O(n) regardless of window size k"
    ],
    "disadvantages": [
      "Requires bidirectional queue structure (deque)"
    ],
    "realWorldUses": [
      "High-frequency quantitative trading trackers",
      "Real-time network traffic window analyzers"
    ],
    "defaultInput": "1 3 -1 -3 5 3 6 7",
    "inputType": "queue",
    "code": {
      "python": "from collections import deque\ndef max_sliding_window(arr, k):\n    q, res = deque(), []\n    for i, x in enumerate(arr):\n        if q and q[0] == i - k: q.popleft()\n        while q and arr[q[-1]] < x: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(arr[q[0]])\n    return res"
    }
  },
  "topological-sort": {
    "id": "topological-sort",
    "name": "Topological Sort",
    "category": "graphs",
    "difficulty": "Medium",
    "description": "Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, vertex u comes before v.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Package build dependencies sequencing",
      "Project tasks planning schedules",
      "Course prerequisite sequencing"
    ],
    "advantages": [
      "Detects cyclic dependency paths immediately",
      "Linear execution latency"
    ],
    "disadvantages": [
      "Only applicable on Directed Acyclic Graphs (fails if graph contains cycles)"
    ],
    "realWorldUses": [
      "NPM/Maven package managers dependency resolution engines",
      "Make/CMake compiler tasks generators"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 3\n3 4",
    "inputType": "graph",
    "code": {
      "python": "def topological_sort(num_nodes, adj):\n    visited, stack = set(), []\n    def dfs(curr):\n        visited.add(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                dfs(neighbor)\n        stack.append(curr)\n    for i in range(num_nodes):\n        if i not in visited:\n            dfs(i)\n    return stack[::-1]"
    }
  },
  "hash-map": {
    "id": "hash-map",
    "name": "Hash Map",
    "category": "hashing",
    "difficulty": "Easy",
    "description": "A Hash Map is a data structure that implements an associative array abstract data type, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Caching mechanisms",
      "Database indexing",
      "Symbol tables in compilers"
    ],
    "advantages": [
      "Extremely fast search, insertion, and deletion",
      "Flexible key-value mappings",
      "Direct index calculations"
    ],
    "disadvantages": [
      "Collision handling overhead",
      "Poor performance with bad hash functions",
      "High memory usage to maintain low load factor"
    ],
    "realWorldUses": [
      "In-memory databases like Redis",
      "Web server session managers"
    ],
    "defaultInput": "2 7 11 15",
    "inputType": "hash",
    "code": {
      "python": "class HashMap:\n    def __init__(self):\n        self.table = {}\n    def put(self, key, value):\n        self.table[key] = value\n    def get(self, key):\n        return self.table.get(key)"
    }
  },
  "group-anagrams": {
    "id": "group-anagrams",
    "name": "Group Anagrams",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Groups a list of strings into sub-lists containing anagrams by sorting each string or frequency hashing.",
    "timeComplexity": {
      "best": "O(n * k log k)",
      "average": "O(n * k log k)",
      "worst": "O(n * k log k)"
    },
    "spaceComplexity": "O(n * k)",
    "applications": [
      "Text classification",
      "Word puzzle generators",
      "Lexical anagram detection scanners"
    ],
    "advantages": [
      "Groups string datasets in a single iteration pass",
      "Ensures consistent category indexing"
    ],
    "disadvantages": [
      "String sorting consumes execution latency on huge string lengths"
    ],
    "realWorldUses": [
      "Scrabble solver dictionary indexers",
      "Linguistic analysis word pattern organizers"
    ],
    "defaultInput": "eat tea tan ate nat bat",
    "inputType": "strings",
    "code": {
      "python": "def group_anagrams(strs):\n    map_dict = {}\n    for s in strs:\n        key = \"\".join(sorted(s))\n        map_dict.setdefault(key, []).append(s)\n    return list(map_dict.values())"
    }
  },
  "fibonacci-recursion": {
    "id": "fibonacci-recursion",
    "name": "Fibonacci (Recursion)",
    "category": "recursion",
    "difficulty": "Easy",
    "description": "Computes the nth Fibonacci number using a binary recursion tree without memoization.",
    "timeComplexity": {
      "best": "O(2^n)",
      "average": "O(2^n)",
      "worst": "O(2^n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Demonstrating recursive tree layouts",
      "Measuring call stack limits",
      "Introduction to dynamic programming necessity"
    ],
    "advantages": [
      "Simplest recursive code presentation",
      "Direct mathematical relation matching"
    ],
    "disadvantages": [
      "Severe exponential execution scaling (recalculates identical subproblems redundantly)"
    ],
    "realWorldUses": [
      "Academic recursion training cases",
      "Instructional code debugging tracing examples"
    ],
    "defaultInput": "5",
    "inputType": "recursion",
    "code": {
      "python": "def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)"
    }
  },
  "n-queens": {
    "id": "n-queens",
    "name": "N-Queens",
    "category": "backtracking",
    "difficulty": "Hard",
    "description": "Places N queens on an N x N chessboard such that no two queens threaten each other, using backtracking search.",
    "timeComplexity": {
      "best": "O(N!)",
      "average": "O(N!)",
      "worst": "O(N!)"
    },
    "spaceComplexity": "O(N^2)",
    "applications": [
      "Resource allocations under constraints",
      "Testing backtracking tree optimizations",
      "Industrial layout configurations search"
    ],
    "advantages": [
      "Finds all possible configuration answers",
      "Prunes branch choices early to save compute"
    ],
    "disadvantages": [
      "High factorial execution scale (fails for large chessboards)"
    ],
    "realWorldUses": [
      "Automated spatial routing layout planning",
      "Constrained scheduling conflict solvers"
    ],
    "defaultInput": "4",
    "inputType": "recursion",
    "code": {
      "python": "def solve_n_queens(n):\n    res = []\n    board = [['.'] * n for _ in range(n)]\n    def is_safe(r, c):\n        for i in range(r):\n            if board[i][c] == 'Q': return False\n            if c - (r - i) >= 0 and board[i][c - (r - i)] == 'Q': return False\n            if c + (r - i) < n and board[i][c + (r - i)] == 'Q': return False\n        return True"
    }
  },
  "knapsack-dp": {
    "id": "knapsack-dp",
    "name": "0/1 Knapsack (DP)",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Solves the 0/1 Knapsack optimization problem by computing subproblem matrices storing maximum value for weight capacity constraints.",
    "timeComplexity": {
      "best": "O(N * W)",
      "average": "O(N * W)",
      "worst": "O(N * W)"
    },
    "spaceComplexity": "O(N * W)",
    "applications": [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections"
    ],
    "advantages": [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops"
    ],
    "disadvantages": [
      "Dynamic memory space scales with knapsack capacity W"
    ],
    "realWorldUses": [
      "Server load distributors",
      "Cargo shipping container loading coordinators"
    ],
    "defaultInput": "2 3 4 5\n3 4 5 6\n5",
    "inputType": "dp",
    "code": {
      "python": "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]"
    }
  },
  "coin-change-dp": {
    "id": "coin-change-dp",
    "name": "Coin Change (DP)",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Finds the minimum number of coins needed to make a target amount using Dynamic Programming tabulation.",
    "timeComplexity": {
      "best": "O(N * A)",
      "average": "O(N * A)",
      "worst": "O(N * A)"
    },
    "spaceComplexity": "O(A)",
    "applications": [
      "Cash registers change dispensers",
      "Vending machine transactions processing",
      "Token denomination optimization"
    ],
    "advantages": [
      "Handles arbitrary coin denomination systems",
      "Avoids subproblem recalculations"
    ],
    "disadvantages": [
      "Dynamic memory space grows with target amount"
    ],
    "realWorldUses": [
      "POS vending machines transaction processors",
      "E-commerce point rewards calculator modules"
    ],
    "defaultInput": "1 2 5\n11",
    "inputType": "dp",
    "code": {
      "python": "def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1"
    }
  },
  "ternary-search": {
    "id": "ternary-search",
    "name": "Ternary Search",
    "category": "searching",
    "difficulty": "Medium",
    "description": "A divide-and-conquer search algorithm that divides a sorted array into three equal parts to find target indices in logarithmic time.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log3 n)",
      "worst": "O(log3 n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Locating target elements in sorted spaces",
      "Finding extrema of unimodal mathematical functions",
      "Game AI heuristic space checks"
    ],
    "advantages": [
      "Can find mathematical peaks and valleys (extrema) extremely fast"
    ],
    "disadvantages": [
      "Performs more comparison operations per step than Binary Search"
    ],
    "realWorldUses": [
      "Image color peak channel solvers",
      "Unimodal function optimization systems"
    ],
    "defaultInput": "1 3 5 7 9 11 13 15",
    "inputType": "search",
    "code": {
      "python": "def ternary_search(arr, target):\n    l, r = 0, len(arr) - 1\n    while r >= l:\n        mid1 = l + (r - l) // 3\n        mid2 = r - (r - l) // 3\n        if arr[mid1] == target: return mid1\n        if arr[mid2] == target: return mid2\n        if target < arr[mid1]: r = mid1 - 1\n        elif target > arr[mid2]: l = mid2 + 1\n        else:\n            l = mid1 + 1\n            r = mid2 - 1\n    return -1"
    }
  },
  "bfs": {
    "id": "bfs",
    "name": "BFS Traversal",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Breadth-First Search graph traversal exploring neighbors level-by-level using a FIFO queue.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Finding shortest paths in unweighted graphs",
      "Social network friends recommendations levels checks",
      "GPS maps directions searches"
    ],
    "advantages": [
      "Guarantees locating the absolute closest/shortest node paths first"
    ],
    "disadvantages": [
      "Requires significant memory space to store visited queue vertices"
    ],
    "realWorldUses": [
      "Web search crawlers indexing linkages",
      "Facebook Graph search level queries solvers"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "code": {
      "python": "from collections import deque\ndef bfs(start, adj):\n    visited, q = {start}, deque([start])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n    return res"
    }
  },
  "dfs": {
    "id": "dfs",
    "name": "DFS Traversal",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Depth-First Search traversal visiting nodes recursively depth-by-depth using a call stack.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "bst-search": {
    "id": "bst-search",
    "name": "BST Search",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Searches for a node inside a Binary Search Tree by recursively splitting traversal space based on element values.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Fast dynamic item lookup indexes",
      "Real-time key query routers",
      "Range lookup solvers"
    ],
    "advantages": [
      "Extremely efficient query lookup speeds on balanced binary search trees"
    ],
    "disadvantages": [
      "Query time degrades to linear O(n) scan on highly skewed layouts"
    ],
    "realWorldUses": [
      "Database B-Tree indexes layouts",
      "File storage systems tree directories"
    ],
    "defaultInput": "8 3 10 1 6 14",
    "inputType": "tree",
    "code": {
      "python": "def search_bst(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search_bst(root.left, target)\n    return search_bst(root.right, target)"
    }
  },
  "tree-height": {
    "id": "tree-height",
    "name": "Binary Tree Height",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Calculates the maximum height of a binary tree by recursively evaluating the height of left/right subtrees.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Tree balancing factor checks",
      "Measuring layout depths",
      "Tree structure validations"
    ],
    "advantages": [
      "Visits every node exactly once to count height",
      "Low recursive memory size"
    ],
    "disadvantages": [
      "Consumes linear stack frames proportional to tree height"
    ],
    "realWorldUses": [
      "AVL self-balancing tree checks",
      "File path depth indexing generators"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "tree",
    "code": {
      "python": "def get_height(root):\n    if not root: return 0\n    return 1 + max(get_height(root.left), get_height(root.right))"
    }
  },
  "lca": {
    "id": "lca",
    "name": "Lowest Common Ancestor",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Finds the lowest common ancestor node for two target nodes p and q inside a binary tree structure.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Linguistic hierarchy relation check",
      "Organisational manager links queries",
      "Inheritance trees analysis"
    ],
    "advantages": [
      "Solves the lookup in a single traversal pass",
      "O(h) auxiliary recursion stack space"
    ],
    "disadvantages": [
      "Lacks caching support for multiple consecutive node ancestor queries"
    ],
    "realWorldUses": [
      "Git branch checkout merge-base lookup engines",
      "Linguistic parsing syntax dependency check"
    ],
    "defaultInput": "3 5 1 6 2 0 8",
    "inputType": "tree",
    "code": {
      "python": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left if left else right"
    }
  },
  "rat-in-a-maze": {
    "id": "rat-in-a-maze",
    "name": "Rat in a Maze",
    "category": "backtracking",
    "difficulty": "Medium",
    "description": "Rat in a Maze is a classic backtracking problem where a rat starts at (0,0) and seeks a path through blocks to reach (N-1, N-1).",
    "timeComplexity": {
      "best": "O(2^(n^2))",
      "average": "O(2^(n^2))",
      "worst": "O(2^(n^2))"
    },
    "spaceComplexity": "O(n^2)",
    "applications": [
      "Pathfinding in grids",
      "Robot routing under obstacles",
      "AI maze solving"
    ],
    "advantages": [
      "Guarantees finding a path if it exists",
      "Can print all possible paths"
    ],
    "disadvantages": [
      "High exponential time complexity",
      "Requires recursion stack space"
    ],
    "realWorldUses": [
      "Micro-mouse path navigation",
      "Autonomous floor sweepers obstacle avoidance routing"
    ],
    "defaultInput": "0 1 0 0\n0 0 0 1\n1 0 0 0\n0 1 0 0",
    "inputType": "grid",
    "code": {
      "python": "def solve_maze(maze):\n    n = len(maze)\n    sol = [[0]*n for _ in range(n)]\n    def solve(x, y):\n        if x == n-1 and y == n-1:\n            sol[x][y] = 1\n            return True\n        if 0 <= x < n and 0 <= y < n and maze[x][y] == 0:\n            sol[x][y] = 1\n            if solve(x+1, y) or solve(x, y+1):\n                return True\n            sol[x][y] = 0  # backtrack\n        return False\n    solve(0, 0)\n    return sol",
      "python2dir": "def solve_maze(maze):\n    n = len(maze)\n    sol = [[0]*n for _ in range(n)]\n    def solve(x, y):\n        if x == n-1 and y == n-1:\n            sol[x][y] = 1\n            return True\n        if 0 <= x < n and 0 <= y < n and maze[x][y] == 0:\n            sol[x][y] = 1\n            if solve(x+1, y) or solve(x, y+1):\n                return True\n            sol[x][y] = 0  # backtrack\n        return False\n    solve(0, 0)\n    return sol",
      "python4dir": "def solve_maze(maze):\n    n = len(maze)\n    sol = [[0]*n for _ in range(n)]\n    dirs = [(1,0),(0,1),(-1,0),(0,-1)]\n    def solve(x, y):\n        if x == n-1 and y == n-1:\n            sol[x][y] = 1\n            return True\n        if 0 <= x < n and 0 <= y < n and maze[x][y] == 0:\n            sol[x][y] = 1\n            for dx, dy in dirs:\n                if solve(x+dx, y+dy):\n                    return True\n            sol[x][y] = 0  # backtrack\n        return False\n    solve(0, 0)\n    return sol"
    }

  },
  "sudoku-solver": {
    "id": "sudoku-solver",
    "name": "Sudoku Solver",
    "category": "backtracking",
    "difficulty": "Hard",
    "description": "Sudoku Solver solves a Sudoku board by recursively attempting to place digits and backtracking when a constraint violation is found.",
    "timeComplexity": {
      "best": "O(9^(n^2))",
      "average": "O(9^(n^2))",
      "worst": "O(9^(n^2))"
    },
    "spaceComplexity": "O(n^2)",
    "applications": [
      "Puzzle solvers",
      "Map coloring",
      "Resource allocation under constraints"
    ],
    "advantages": [
      "Guarantees finding a valid solution if one exists",
      "General constraint search"
    ],
    "disadvantages": [
      "Exponential worst-case scaling",
      "High search latency on dense boards"
    ],
    "realWorldUses": [
      "Constraint logic programming engines",
      "Frequency band cell tower selectors"
    ],
    "defaultInput": "1 0 3 0\n0 0 0 2\n3 0 1 0\n0 2 0 4",
    "inputType": "grid",
    "code": {
      "python": "def solve_sudoku(board):\n    n = len(board)\n    def solve():\n        for r in range(n):\n            for c in range(n):\n                if board[r][c] == 0:\n                    for val in range(1, n + 1):\n                        if is_safe(board, r, c, val):\n                            board[r][c] = val\n                            if solve(): return True\n                            board[r][c] = 0\n                    return False\n        return True\n    solve()\n    return board"
    }
  },
  "kmp-search": {
    "id": "kmp-search",
    "name": "KMP Pattern Search",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Knuth-Morris-Pratt pattern search checks occurrences of a pattern in a text using a precomputed Longest Prefix Suffix (LPS) array to shift comparisons.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features"
    ],
    "advantages": [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text"
    ],
    "disadvantages": [
      "Requires preprocessing space and time to build LPS array"
    ],
    "realWorldUses": [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "code": {
      "python": "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices"
    }
  },
  "longest-common-prefix": {
    "id": "longest-common-prefix",
    "name": "Longest Common Prefix",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Longest Common Prefix finds the longest prefix string shared among a list of strings by iterating column-by-column across characters.",
    "timeComplexity": {
      "best": "O(n * m)",
      "average": "O(n * m)",
      "worst": "O(n * m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "String compression tries",
      "Dictionary autocomplete indices",
      "IP routing lookup prefixes"
    ],
    "advantages": [
      "Linear scanning efficiency",
      "Terminates early on mismatch"
    ],
    "disadvantages": [
      "Degrades if there are long matching paths before mismatch"
    ],
    "realWorldUses": [
      "Routers IP routing table matches",
      "Linguistic common root categorization systems"
    ],
    "defaultInput": "flower flow flight",
    "inputType": "strings-list",
    "code": {
      "python": "def longest_common_prefix(strs):\n    if not strs: return \"\"\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix: return \"\"\n    return prefix"
    }
  },
  "longest-palindromic-substring": {
    "id": "longest-palindromic-substring",
    "name": "Longest Palindromic Substring",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Finds the longest contiguous substring that reads the same forward and backward in quadratic time using center expansion.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n^2)",
      "worst": "O(n^2)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Text search indexing",
      "DNA sequence alignments",
      "Data serialization validation"
    ],
    "advantages": [
      "Optimal O(1) auxiliary space footprint",
      "Straightforward center expansion heuristic"
    ],
    "disadvantages": [
      "Quadratic execution time on large homogeneous datasets"
    ],
    "realWorldUses": [
      "String query preprocessors",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "babad",
    "inputType": "strings-list",
    "code": {
      "python": "def longest_palindrome(s):\n    if not s: return \"\"\n    start, end = 0, 0\n    \n    def expand(l, r):\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            l, r = l - 1, r + 1\n        return r - l - 1\n\n    for i in range(len(s)):\n        len1 = expand(i, i)\n        len2 = expand(i, i + 1)\n        max_len = max(len1, len2)\n        if max_len > (end - start + 1):\n            start = i - (max_len - 1) // 2\n            end = i + max_len // 2\n            \n    return s[start : end + 1]"
    }
  },
  "string-concatenation": {
    "id": "string-concatenation",
    "name": "String Concatenation",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Appends one string to the end of another to form a single combined string.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(n + m)",
    "applications": [
      "Text concatenation builders",
      "URL dynamic slug compilers",
      "User output logging display formatters"
    ],
    "advantages": [
      "Extremely simple logic",
      "Fundamental string building block"
    ],
    "disadvantages": [
      "Immutable string buffer overheads in massive loops"
    ],
    "realWorldUses": [
      "Formatted address compilers",
      "String composition helpers"
    ],
    "defaultInput": "hello world",
    "inputType": "strings-list",
    "code": {
      "python": "def concatenate(s1, s2):\n    res = \"\"\n    for char in s1:\n        res += char\n    for char in s2:\n        res += char\n    return res"
    }
  },
  "string-traversal": {
    "id": "string-traversal",
    "name": "String Traversal",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Iterates through each character of a string from start to finish to inspect or process values.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Character search",
      "Vowel/consonant count",
      "Input format validation scans"
    ],
    "advantages": [
      "Extremely simple logic",
      "O(1) memory space footprint"
    ],
    "disadvantages": [
      "Requires full linear iteration pass"
    ],
    "realWorldUses": [
      "Character processing utility helpers",
      "String sanitization parsers"
    ],
    "defaultInput": "hello world",
    "inputType": "strings-list",
    "code": {
      "python": "def traverse_string(s):\n    n = len(s)\n    for i in range(n):\n        char = s[i]\n        # Process char"
    }
  },
  "activity-selection": {
    "id": "activity-selection",
    "name": "Activity Selection",
    "category": "greedy",
    "difficulty": "Easy",
    "description": "Selects the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Interval scheduling",
      "Meeting room bookings",
      "Project scheduling"
    ],
    "advantages": [
      "Simple to implement",
      "Optimal solution guaranteed by sorting finish times"
    ],
    "disadvantages": [
      "Requires sorting of finish times beforehand"
    ],
    "realWorldUses": [
      "Operating System process scheduler",
      "Conference room reserve modules"
    ],
    "defaultInput": "1-3 2-4 3-6 5-7 8-9",
    "inputType": "greedy-interval",
    "code": {
      "python": "def activity_selection(activities):\n    activities.sort(key=lambda x: x['finish'])\n    selected = [activities[0]]\n    last_finish = activities[0]['finish']\n    for act in activities[1:]:\n        if act['start'] >= last_finish:\n            selected.append(act)\n            last_finish = act['finish']\n    return selected"
    }
  },
  "fractional-knapsack": {
    "id": "fractional-knapsack",
    "name": "Fractional Knapsack",
    "category": "greedy",
    "difficulty": "Medium",
    "description": "Maximizes the value of items put in a knapsack of capacity W by taking fractions of items based on their value-to-weight ratio.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Resource allocation",
      "Material cutting planning",
      "Budget asset selection"
    ],
    "advantages": [
      "Finds mathematically global optimal solution in linear-log time"
    ],
    "disadvantages": [
      "Items must be divisible into fractional splits"
    ],
    "realWorldUses": [
      "Freight container cargo shipping calculators",
      "Investment portfolio optimization"
    ],
    "defaultInput": "60-10 100-20 120-30\n50",
    "inputType": "greedy-ratio",
    "code": {
      "python": "def knapsack(items, W):\n    items.sort(key=lambda x: x['val']/x['wt'], reverse=True)\n    total_val = 0.0\n    curr_wt = 0\n    for item in items:\n        if curr_wt + item['wt'] <= W:\n            curr_wt += item['wt']\n            total_val += item['val']\n        else:\n            remain = W - curr_wt\n            total_val += item['val'] * (remain / item['wt'])\n            break\n    return total_val"
    }
  },
  "single-number": {
    "id": "single-number",
    "name": "Single Number (XOR)",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Given a non-empty array of integers where every element appears twice except for one, finds that unique element using XOR properties (x ^ x = 0, x ^ 0 = x).",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Data checksums",
      "De-duplication in streams",
      "Error detection logic"
    ],
    "advantages": [
      "Operates in O(1) auxiliary memory space without hashing tables"
    ],
    "disadvantages": [
      "Requires elements to appear exactly in pair groups except one"
    ],
    "realWorldUses": [
      "Hardware parity scanners",
      "Data compression error correctors"
    ],
    "defaultInput": "4 1 2 1 2",
    "inputType": "array",
    "code": {
      "python": "def find_single_number(arr):\n    res = 0\n    for val in arr:\n        res ^= val\n    return res"
    }
  },
  "power-of-two": {
    "id": "power-of-two",
    "name": "Power of Two",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Checks if a given number is a power of two using the bitwise check `n & (n - 1) === 0` which clears the lowest set bit.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Memory allocator boundaries verification",
      "Binary subdivision partitions check"
    ],
    "advantages": [
      "Extremely fast execution (single clock cycle CPU instruction)"
    ],
    "disadvantages": [
      "Requires careful overflow guarding for boundary numbers"
    ],
    "realWorldUses": [
      "Operating System virtual memory page frame allocators",
      "Binary tree indices index calculations"
    ],
    "defaultInput": "16",
    "inputType": "bit-value",
    "code": {
      "python": "def is_power_of_two(n):\n    return n > 0 and (n & (n - 1)) == 0"
    }
  },
  "gcd-euclidean": {
    "id": "gcd-euclidean",
    "name": "GCD (Euclidean Algorithm)",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Computes the Greatest Common Divisor (GCD) of two numbers by recursively replacing the larger number by its remainder when divided by the smaller one.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log min(a, b))",
      "worst": "O(log min(a, b))"
    },
    "spaceComplexity": "O(log min(a, b))",
    "applications": [
      "Reducing fractions",
      "RSA key generation",
      "Diophantine equation solvers"
    ],
    "advantages": [
      "Exponentially faster than subtraction subtraction loops"
    ],
    "disadvantages": [
      "Requires division/modulo instructions which can be slow on microcontrollers"
    ],
    "realWorldUses": [
      "Cryptography key generators",
      "Graphic asset ratio calculation modules"
    ],
    "defaultInput": "48 18",
    "inputType": "math-gcd",
    "code": {
      "python": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a"
    }
  },
  "sieve-erato": {
    "id": "sieve-erato",
    "name": "Sieve of Eratosthenes",
    "category": "mathematical",
    "difficulty": "Medium",
    "description": "Finds all prime numbers up to n by iteratively marking the multiples of each prime as composite starting from 2.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n log log n)",
      "worst": "O(n log log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Prime factorization",
      "Generating hash codes",
      "Number theory computations"
    ],
    "advantages": [
      "Extremely fast for generating prime lists under 10^7"
    ],
    "disadvantages": [
      "Auxiliary memory array sizes scale linearly with bounds n"
    ],
    "realWorldUses": [
      "Symmetric key cipher modules",
      "Mathematical prime distribution analysts"
    ],
    "defaultInput": "25",
    "inputType": "math-sieve",
    "code": {
      "python": "def sieve(n):\n    prime = [True] * (n + 1)\n    prime[0] = prime[1] = False\n    p = 2\n    while p * p <= n:\n        if prime[p]:\n            for i in range(p * p, n + 1, p):\n                prime[i] = False\n        p += 1\n    return prime"
    }
  },
  "remove-duplicates": {
    "id": "remove-duplicates",
    "name": "Remove Duplicates (Two Pointer)",
    "category": "two-pointer",
    "difficulty": "Easy",
    "description": "Removes duplicate elements from a sorted array in-place using two pointers (slow and fast pointers) to save memory.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Array compaction",
      "Data cleaning pipelines",
      "De-duplicating logs files"
    ],
    "advantages": [
      "In-place edits with zero auxiliary memory consumption"
    ],
    "disadvantages": [
      "Requires the input array to be pre-sorted"
    ],
    "realWorldUses": [
      "Database unique constraint filter indexers",
      "Memory buffer compaction routines"
    ],
    "defaultInput": "1 1 2 2 3 4 4",
    "inputType": "array",
    "code": {
      "python": "def remove_duplicates(arr):\n    if not arr: return 0\n    idx = 0\n    for i in range(1, len(arr)):\n        if arr[i] != arr[idx]:\n            idx += 1\n            arr[idx] = arr[i]\n    return idx + 1"
    }
  },
  "equilibrium-index": {
    "id": "equilibrium-index",
    "name": "Equilibrium Index (Prefix Sum)",
    "category": "prefix-sum",
    "difficulty": "Easy",
    "description": "Finds the index in an array such that the sum of elements at lower indices is equal to the sum of elements at higher indices.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Data center load balance checking",
      "Pivoting indexes searches"
    ],
    "advantages": [
      "Solves partition pivots in a single scan with constant memory space O(1)"
    ],
    "disadvantages": [
      "Requires numerical data ranges"
    ],
    "realWorldUses": [
      "Industrial network load distribution checkers",
      "Load balancing gateway routing tests"
    ],
    "defaultInput": "-7 1 5 2 -4 3 0",
    "inputType": "array",
    "code": {
      "python": "def find_equilibrium(arr):\n    total_sum = sum(arr)\n    left_sum = 0\n    for i, x in enumerate(arr):\n        total_sum -= x\n        if left_sum == total_sum:\n            return i\n        left_sum += x\n    return -1"
    }
  },
  "union-find-cycle": {
    "id": "union-find-cycle",
    "name": "DSU Cycle Detection",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Detects cycles in an undirected graph using the Disjoint Set Union (DSU) Find/Union operations.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "segment-tree": {
    "id": "segment-tree",
    "name": "Segment Tree Range Query",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "A Segment Tree is a tree data structure used for storing information about intervals or segments. It allows querying which of the stored segments contains a given point, or answering range queries efficiently.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "trie-search": {
    "id": "trie-search",
    "name": "Trie Auto-Complete",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Inserts keys into a prefix tree (Trie) to support rapid prefix validation and word searches.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "rabin-karp": {
    "id": "rabin-karp",
    "name": "Rabin-Karp Search",
    "category": "advanced-algo",
    "difficulty": "Medium",
    "description": "Finds string matches of a pattern in a text using a rolling hash function to prune comparisons.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n * m)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Plagiarism checkers",
      "Multiple pattern match scans",
      "DNA sequencing matches"
    ],
    "advantages": [
      "Extremely simple to scale to multi-pattern search checks"
    ],
    "disadvantages": [
      "Spurious hash collisions degrade runtime to quadratic worst-case O(n * m)"
    ],
    "realWorldUses": [
      "Document similarity checking tools",
      "Pattern signature matches in intrusion detection software"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "code": {
      "python": "def search(txt, pat, q=101):\n    d = 256\n    m, n = len(pat), len(txt)\n    hpat = htxt = 0\n    h = pow(d, m-1, q)\n    for i in range(m):\n        hpat = (d * hpat + ord(pat[i])) % q\n        htxt = (d * htxt + ord(txt[i])) % q\n    indices = []\n    for i in range(n - m + 1):\n        if hpat == htxt:\n            if txt[i:i+m] == pat: indices.append(i)\n        if i < n - m:\n            htxt = (d * (htxt - ord(txt[i]) * h) + ord(txt[i+m])) % q\n            if htxt < 0: htxt += q\n    return indices"
    }
  },
  "reverse-array": {
    "id": "reverse-array",
    "name": "Reverse Array",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Reverses an array in-place using two pointers approaching from each end until they meet in the middle. A fundamental operation used in many algorithms.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "String reversal",
      "Palindrome checks",
      "Rotate array implementation"
    ],
    "advantages": [
      "In-place with O(1) extra space",
      "Simple and fast"
    ],
    "disadvantages": [
      "Modifies the original array"
    ],
    "realWorldUses": [
      "Undo stack reverse operations",
      "Image mirroring algorithms"
    ],
    "defaultInput": "1 2 3 4 5 6 7",
    "inputType": "array",
    "code": {
      "python": "def reverse_array(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr"
    }
  },
  "palindrome-check": {
    "id": "palindrome-check",
    "name": "Palindrome Check",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Checks if a string reads the same forwards and backwards using two pointers. A palindrome is a string that is equal to its reverse.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "DNA sequence analysis",
      "Data validation",
      "Word puzzles"
    ],
    "advantages": [
      "O(1) space solution with two pointers"
    ],
    "disadvantages": [
      "Case-sensitive unless normalized"
    ],
    "realWorldUses": [
      "String validation in forms",
      "Genome bioinformatics research"
    ],
    "defaultInput": "racecar",
    "inputType": "strings-list",
    "code": {
      "python": "def is_palindrome(s):\n    return s == s[::-1]"
    }
  },
  "reverse-string": {
    "id": "reverse-string",
    "name": "Reverse String",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Reverses a string in-place by swapping characters from both ends using two pointers until they meet in the middle.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "String manipulation utilities",
      "Anagram detection preprocessing"
    ],
    "advantages": [
      "Simple in-place swap approach"
    ],
    "disadvantages": [
      "Immutable strings require O(n) space in some languages"
    ],
    "realWorldUses": [
      "Text processing utilities",
      "URL slug reversal tools"
    ],
    "defaultInput": "hello world",
    "inputType": "strings-list",
    "code": {
      "python": "def reverse_string(s):\n    return s[::-1]"
    }
  },
  "merge-sorted-lists": {
    "id": "merge-sorted-lists",
    "name": "Merge Two Sorted Lists",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Merges two sorted linked lists into one sorted linked list by comparing nodes and linking them in order.",
    "timeComplexity": {
      "best": "O(n+m)",
      "average": "O(n+m)",
      "worst": "O(n+m)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Merge sort merge step",
      "External sorting",
      "Database merge joins"
    ],
    "advantages": [
      "Linear time O(n+m) with constant extra space"
    ],
    "disadvantages": [
      "Modifies the original linked list node pointers"
    ],
    "realWorldUses": [
      "Database engine merge-join operations",
      "External merge-sort file algorithms"
    ],
    "defaultInput": "1 3 5 7",
    "inputType": "linked-list",
    "code": {
      "python": "def merge_sorted(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            curr.next = l1; l1 = l1.next\n        else:\n            curr.next = l2; l2 = l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next"
    }
  },
  "min-stack": {
    "id": "min-stack",
    "name": "Min Stack",
    "category": "stack",
    "difficulty": "Medium",
    "description": "A stack that supports retrieving the minimum element in O(1) time by maintaining an auxiliary min-tracking stack alongside the main stack.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Real-time minimum tracking",
      "Range minimum queries in streams"
    ],
    "advantages": [
      "All operations in O(1) constant time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary space for the min-stack"
    ],
    "realWorldUses": [
      "Stock market minimum price trackers",
      "Database running aggregate monitors"
    ],
    "defaultInput": "push 5 push 3 push 7 push 1 getMin pop getMin",
    "inputType": "stack",
    "code": {
      "python": "class MinStack:\n    def __init__(self): self.stack, self.min_stk = [], []\n    def push(self, val):\n        self.stack.append(val)\n        m = min(val, self.min_stk[-1]) if self.min_stk else val\n        self.min_stk.append(m)\n    def pop(self): self.stack.pop(); self.min_stk.pop()\n    def get_min(self): return self.min_stk[-1]"
    }
  },
  "level-order-traversal": {
    "id": "level-order-traversal",
    "name": "Level Order Traversal (BFS)",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Traverses a binary tree level by level using a queue. Also called BFS tree traversal — visits all nodes at depth d before depth d+1.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Shortest path in unweighted graphs",
      "Binary tree serialization",
      "Zigzag traversal"
    ],
    "advantages": [
      "Finds shortest path in unweighted trees",
      "Visits nodes in breadth-first order"
    ],
    "disadvantages": [
      "Requires O(n) queue space for storing nodes at each level"
    ],
    "realWorldUses": [
      "File system directory level explorer",
      "Organizational chart level display"
    ],
    "defaultInput": "4 2 7 1 3 6 9",
    "inputType": "tree",
    "code": {
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res"
    }
  },
  "bellman-ford": {
    "id": "bellman-ford",
    "name": "Bellman-Ford Algorithm",
    "category": "graphs",
    "difficulty": "Medium",
    "description": "Finds shortest paths from a source vertex to all others, including graphs with negative weight edges. Detects negative weight cycles by running V-1 edge relaxations.",
    "timeComplexity": {
      "best": "O(VE)",
      "average": "O(VE)",
      "worst": "O(VE)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Negative weight graph routing",
      "Currency arbitrage detection",
      "Network distance computation"
    ],
    "advantages": [
      "Handles negative weights unlike Dijkstra's algorithm"
    ],
    "disadvantages": [
      "Slower than Dijkstra's O(VE) vs O((V+E) log V)"
    ],
    "realWorldUses": [
      "Financial arbitrage detection systems",
      "BGP routing protocol update cycles"
    ],
    "defaultInput": "0 1 -1\n0 2 4\n1 2 3\n1 3 2\n1 4 2\n3 2 5\n3 1 1\n4 3 -3",
    "inputType": "graph",
    "code": {
      "python": "def bellman_ford(V, edges, src):\n    dist = [float('inf')] * V\n    dist[src] = 0\n    for _ in range(V - 1):\n        for u, v, w in edges:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n    return dist"
    }
  },
  "word-search": {
    "id": "word-search",
    "name": "Word Search (Backtracking)",
    "category": "backtracking",
    "difficulty": "Medium",
    "description": "Searches for a word in a 2D character grid using DFS backtracking. Explores all 4 directions from each starting cell, marking cells as visited to avoid reuse.",
    "timeComplexity": {
      "best": "O(m*n*4^L)",
      "average": "O(m*n*4^L)",
      "worst": "O(m*n*4^L)"
    },
    "spaceComplexity": "O(L)",
    "applications": [
      "Puzzle game solving",
      "NLP word grid extraction"
    ],
    "advantages": [
      "Explores all valid paths systematically with backtracking"
    ],
    "disadvantages": [
      "Exponential worst-case time on large grids"
    ],
    "realWorldUses": [
      "Word puzzle game solving engines",
      "Boggle word-finding algorithms"
    ],
    "defaultInput": "ABCE\nSFCS\nADEE\nSEET",
    "inputType": "word-search-grid",
    "code": {
      "python": "def exist(board, word):\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, i):\n        if i == len(word): return True\n        if not (0<=r<rows and 0<=c<cols) or board[r][c] != word[i]: return False\n        tmp, board[r][c] = board[r][c], '#'\n        found = any(dfs(r+dr, c+dc, i+1) for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)])\n        board[r][c] = tmp\n        return found\n    return any(dfs(r,c,0) for r in range(rows) for c in range(cols))"
    }
  },
  "generate-parentheses": {
    "id": "generate-parentheses",
    "name": "Generate Parentheses",
    "category": "backtracking",
    "difficulty": "Medium",
    "description": "Generates all combinations of n pairs of well-formed parentheses using recursive backtracking, ensuring open count never exceeds n and close count never exceeds open count.",
    "timeComplexity": {
      "best": "O(4^n/sqrt(n))",
      "average": "O(4^n/sqrt(n))",
      "worst": "O(4^n/sqrt(n))"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Code formatting validation",
      "Expression parsing",
      "Mathematical formula generation"
    ],
    "advantages": [
      "Generates only valid strings without post-filtering"
    ],
    "disadvantages": [
      "Output size is Catalan number which grows exponentially"
    ],
    "realWorldUses": [
      "IDE bracket auto-completion engines",
      "Mathematical expression validators"
    ],
    "defaultInput": "3",
    "inputType": "recursion",
    "code": {
      "python": "def generate_parenthesis(n):\n    res = []\n    def bt(cur, op, cl):\n        if len(cur) == 2*n: res.append(cur); return\n        if op < n: bt(cur+'(', op+1, cl)\n        if cl < op: bt(cur+')', op, cl+1)\n    bt('', 0, 0)\n    return res"
    }
  },
  "lcs-dp": {
    "id": "lcs-dp",
    "name": "Longest Common Subsequence",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Finds the length of the longest subsequence common to two strings using a 2D DP table. A subsequence maintains relative order but needn't be contiguous.",
    "timeComplexity": {
      "best": "O(mn)",
      "average": "O(mn)",
      "worst": "O(mn)"
    },
    "spaceComplexity": "O(mn)",
    "applications": [
      "Diff tools (git diff)",
      "Bioinformatics sequence alignment",
      "Plagiarism detection"
    ],
    "advantages": [
      "Solves one of the most important DP problems optimally"
    ],
    "disadvantages": [
      "O(mn) space may be large for very long strings"
    ],
    "realWorldUses": [
      "Git diff algorithm",
      "DNA sequence alignment software"
    ],
    "defaultInput": "ABCBDAB",
    "inputType": "dp",
    "code": {
      "python": "def lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
    }
  },
  "longest-common-substring": {
    "id": "longest-common-substring",
    "name": "Longest Common Substring",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Finds the length of the longest common contiguous substring between two strings using a 2D DP table.",
    "timeComplexity": {
      "best": "O(mn)",
      "average": "O(mn)",
      "worst": "O(mn)"
    },
    "spaceComplexity": "O(mn)",
    "applications": [
      "Plagiarism detection",
      "Bioinformatics DNA sequence matching"
    ],
    "advantages": [
      "Optimal contiguous matching"
    ],
    "disadvantages": [
      "O(mn) space complexity"
    ],
    "realWorldUses": [
      "Text comparison utilities"
    ],
    "defaultInput": "ABCBDAB",
    "inputType": "dp",
    "code": {
      "python": "def longestCommonSubstring(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    maxLen = 0\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n                maxLen = max(maxLen, dp[i][j])\n            else:\n                dp[i][j] = 0\n    return maxLen"
    }
  },
  "dp-burst-balloons": {
    "id": "dp-burst-balloons",
    "name": "Burst Balloons",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "description": "Maximize the coins obtained by bursting balloons. Bursting balloon i gives nums[i-1] * nums[i] * nums[i+1] coins.",
    "timeComplexity": {
      "best": "O(n³)",
      "average": "O(n³)",
      "worst": "O(n³)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Game theory optimization",
      "Interval dynamic programming"
    ],
    "advantages": [
      "Finds global maximum coins"
    ],
    "disadvantages": [
      "O(n³) time complexity is slow for large n"
    ],
    "realWorldUses": [
      "Operations research scheduling"
    ],
    "defaultInput": "5 3 8 9 1",
    "inputType": "dp",
    "code": {
      "python": "def maxCoins(nums):\n    arr = [1] + nums + [1]\n    n = len(nums)\n    dp = [[0] * (n + 2) for _ in range(n + 2)]\n    for length in range(1, n + 1):\n        for i in range(1, n - length + 2):\n            j = i + length - 1\n            for k in range(i, j + 1):\n                dp[i][j] = max(dp[i][j], dp[i][k-1] + arr[i-1] * arr[k] * arr[j+1] + dp[k+1][j])\n    return dp[1][n]"
    }
  },
  "dp-matrix-chain-multiplication": {
    "id": "dp-matrix-chain-multiplication",
    "name": "Matrix Chain Multiplication",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "description": "Finds the most efficient way to multiply a chain of matrices by calculating min scalar multiplication costs.",
    "timeComplexity": {
      "best": "O(n³)",
      "average": "O(n³)",
      "worst": "O(n³)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Query optimization in databases",
      "Compiler optimization workflows"
    ],
    "advantages": [
      "Optimal parenthization layout search"
    ],
    "disadvantages": [
      "Requires dimensional array input format"
    ],
    "realWorldUses": [
      "Relational query optimizer planners"
    ],
    "defaultInput": "10 20 30 40 30",
    "inputType": "dp",
    "code": {
      "python": "def mcm(p):\n    n = len(p) - 1\n    dp = [[0] * (n + 1) for _ in range(n + 1)]\n    for length in range(2, n + 1):\n        for i in range(1, n - length + 2):\n            j = i + length - 1\n            dp[i][j] = float('inf')\n            for k in range(i, j):\n                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j])\n    return dp[1][n]"
    }
  },
  "dp-wildcard-matching": {
    "id": "dp-wildcard-matching",
    "name": "Wildcard Matching",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "description": "Determines if a string matches a wildcard pattern containing '?' (any single character) or '*' (any sequence).",
    "timeComplexity": {
      "best": "O(m·n)",
      "average": "O(m·n)",
      "worst": "O(m·n)"
    },
    "spaceComplexity": "O(m·n)",
    "applications": [
      "Filename shell matching",
      "Regex engines"
    ],
    "advantages": [
      "High flexibility match pattern validation"
    ],
    "disadvantages": [
      "Linear space requirement per string length"
    ],
    "realWorldUses": [
      "Glob utility search tools (e.g. Glob/bash)"
    ],
    "defaultInput": "baaabab\nba*a?",
    "inputType": "dp",
    "code": {
      "python": "def wildcard_match(s, p):\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n    for j in range(1, n + 1):\n        if p[j-1] == '*':\n            dp[0][j] = dp[0][j-1]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j-1] == '*':\n                dp[i][j] = dp[i-1][j] or dp[i][j-1]\n            elif p[j-1] == '?' or s[i-1] == p[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n    return dp[m][n]"
    }
  },
  "dp-egg-dropping": {
    "id": "dp-egg-dropping",
    "name": "Egg Dropping",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "description": "Finds the minimum number of attempts needed to find the critical threshold floor using a given number of eggs.",
    "timeComplexity": {
      "best": "O(e·f²)",
      "average": "O(e·f²)",
      "worst": "O(e·f²)"
    },
    "spaceComplexity": "O(e·f)",
    "applications": [
      "Material stress testing",
      "Threshold analysis optimization"
    ],
    "advantages": [
      "Optimal trial searching strategies"
    ],
    "disadvantages": [
      "O(ef²) compute complexity scales poorly"
    ],
    "realWorldUses": [
      "Stress validation simulation profiles"
    ],
    "defaultInput": "2\n6",
    "inputType": "dp",
    "code": {
      "python": "def egg_drop(eggs, floors):\n    dp = [[0] * (floors + 1) for _ in range(eggs + 1)]\n    for j in range(1, floors + 1):\n        dp[1][j] = j\n    for i in range(1, eggs + 1):\n        dp[i][1] = 1\n    for i in range(2, eggs + 1):\n        for j in range(2, floors + 1):\n            min_trials = float('inf')\n            for k in range(1, j + 1):\n                min_trials = min(min_trials, 1 + max(dp[i-1][k-1], dp[i][j-k]))\n            dp[i][j] = min_trials\n    return dp[eggs][floors]"
    }
  },
  "dp-palindrome-partitioning": {
    "id": "dp-palindrome-partitioning",
    "name": "Palindrome Partitioning",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "description": "Finds the minimum cuts needed to partition a string such that every segment is a palindrome.",
    "timeComplexity": {
      "best": "O(n³)",
      "average": "O(n³)",
      "worst": "O(n³)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "String segmentation parsing",
      "Bioinformatics coding structures"
    ],
    "advantages": [
      "Classic interval partition optimization solver"
    ],
    "disadvantages": [
      "O(n³) computation limit"
    ],
    "realWorldUses": [
      "Text alignment analysis pipelines"
    ],
    "defaultInput": "aab",
    "inputType": "dp",
    "code": {
      "python": "def min_cuts(s):\n    n = len(s)\n    dp = [[0] * (n + 1) for _ in range(n + 1)]\n    is_pal = [[True] * (n + 1) for _ in range(n + 1)]\n    for length in range(2, n + 1):\n        for i in range(1, n - length + 2):\n            j = i + length - 1\n            is_pal[i][j] = (s[i-1] == s[j-1]) and is_pal[i+1][j-1]\n    for length in range(1, n + 1):\n        for i in range(1, n - length + 2):\n            j = i + length - 1\n            if is_pal[i][j]:\n                dp[i][j] = 0\n            else:\n                dp[i][j] = float('inf')\n                for k in range(i, j):\n                    dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + 1)\n    return dp[1][n]"
    }
  },
  "counting-sort": {
    "id": "counting-sort",
    "name": "Counting Sort",
    "category": "sorting",
    "difficulty": "Easy",
    "description": "A non-comparison integer sorting algorithm that counts element frequencies in a range, then uses prefix sums to place each element at its correct sorted position.",
    "timeComplexity": {
      "best": "O(n+k)",
      "average": "O(n+k)",
      "worst": "O(n+k)"
    },
    "spaceComplexity": "O(k)",
    "applications": [
      "Integer array sorting",
      "Radix sort sub-routine",
      "Histogram generation"
    ],
    "advantages": [
      "Faster than comparison sorts when k (range) is small"
    ],
    "disadvantages": [
      "Only works for integer data within a bounded range"
    ],
    "realWorldUses": [
      "Histogram bins in image processing pipelines",
      "Character frequency counters"
    ],
    "defaultInput": "4 2 2 8 3 3 1",
    "inputType": "array",
    "code": {
      "python": "def counting_sort(arr):\n    k = max(arr)\n    count = [0] * (k + 1)\n    for x in arr: count[x] += 1\n    for i in range(1, k+1): count[i] += count[i-1]\n    out = [0] * len(arr)\n    for x in reversed(arr):\n        count[x] -= 1\n        out[count[x]] = x\n    return out"
    }
  },
  "radix-sort": {
    "id": "radix-sort",
    "name": "Radix Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Sorts integers digit by digit from the least significant to the most significant digit using a stable sub-sort (counting sort) at each digit position.",
    "timeComplexity": {
      "best": "O(nk)",
      "average": "O(nk)",
      "worst": "O(nk)"
    },
    "spaceComplexity": "O(n+k)",
    "applications": [
      "Large integer sorting",
      "String lexicographic sorting",
      "IP address sorting"
    ],
    "advantages": [
      "Beats comparison sorts when k (digits) is fixed"
    ],
    "disadvantages": [
      "Requires additional O(n) space; only works on integer-like keys"
    ],
    "realWorldUses": [
      "Network packet sorting by priority",
      "Database index sorting on integer columns"
    ],
    "defaultInput": "170 45 75 90 802 24 2 66",
    "inputType": "array",
    "code": {
      "python": "def radix_sort(arr):\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        n=len(arr); out=[0]*n; count=[0]*10\n        for x in arr: count[(x//exp)%10]+=1\n        for i in range(1,10): count[i]+=count[i-1]\n        for i in range(n-1,-1,-1):\n            d=(arr[i]//exp)%10; count[d]-=1; out[count[d]]=arr[i]\n        arr[:]=out\n        exp*=10\n    return arr"
    }
  },
  "count-set-bits": {
    "id": "count-set-bits",
    "name": "Count Set Bits",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Counts the number of bits set to 1 using Brian Kernighan's algorithm: repeatedly clear the lowest set bit with n &= (n-1) until n becomes 0.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Population count / Hamming weight",
      "Bit parity checks",
      "Subset generation"
    ],
    "advantages": [
      "Only iterates over set bits, not all bits"
    ],
    "disadvantages": [
      "Hardware POPCNT instruction is faster for most uses"
    ],
    "realWorldUses": [
      "Error detection parity checks",
      "Bloom filter hash position counts"
    ],
    "defaultInput": "13",
    "inputType": "bit-value",
    "code": {
      "python": "def count_set_bits(n):\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count"
    }
  },
  "xor-operations": {
    "id": "xor-operations",
    "name": "XOR Operations",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Demonstrates XOR bitwise operations step by step on an array: x^x=0, x^0=x. Accumulates XOR of all elements to find the unique non-paired number.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Single number detection",
      "Swap without temp variable",
      "Checksum generation"
    ],
    "advantages": [
      "Extremely fast single-instruction CPU operation"
    ],
    "disadvantages": [
      "Limited to specific use cases based on XOR properties"
    ],
    "realWorldUses": [
      "Network data checksums",
      "Cryptographic XOR cipher operations"
    ],
    "defaultInput": "5 3 8 5 3",
    "inputType": "array",
    "code": {
      "python": "from functools import reduce\ndef xor_all(arr):\n    return reduce(lambda a, x: a ^ x, arr, 0)"
    }
  },
  "fast-exponentiation": {
    "id": "fast-exponentiation",
    "name": "Fast Exponentiation",
    "category": "mathematical",
    "difficulty": "Medium",
    "description": "Computes base^exp in O(log n) time using binary exponentiation: if exp is odd multiply result by base, then square base and halve exp.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Modular exponentiation in cryptography",
      "Matrix exponentiation",
      "Fibonacci in O(log n)"
    ],
    "advantages": [
      "O(log n) vs naive O(n) multiplication loops"
    ],
    "disadvantages": [
      "More complex implementation than naive power loop"
    ],
    "realWorldUses": [
      "RSA cryptography key operations",
      "Diffie-Hellman key exchange protocols"
    ],
    "defaultInput": "2 10",
    "inputType": "math-gcd",
    "code": {
      "python": "def fast_pow(base, exp):\n    result = 1\n    while exp > 0:\n        if exp % 2 == 1: result *= base\n        base *= base\n        exp //= 2\n    return result"
    }
  },
  "pascal-triangle": {
    "id": "pascal-triangle",
    "name": "Pascal's Triangle",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Generates rows of Pascal's Triangle where each element is the sum of the two elements directly above it. Gives binomial coefficients C(n,0)..C(n,n).",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Binomial coefficients",
      "Combinatorics calculations",
      "Probability computations"
    ],
    "advantages": [
      "Simple iterative generation of all binomial coefficients"
    ],
    "disadvantages": [
      "O(n²) space required to store the full triangle"
    ],
    "realWorldUses": [
      "Probability distributions in statistics",
      "Polynomial coefficient expansion"
    ],
    "defaultInput": "6",
    "inputType": "math-sieve",
    "code": {
      "python": "def pascal(n):\n    tri = [[1]]\n    for i in range(1, n):\n        row = [1]\n        for j in range(1, i): row.append(tri[i-1][j-1] + tri[i-1][j])\n        row.append(1)\n        tri.append(row)\n    return tri"
    }
  },
  "trapping-rain-water": {
    "id": "trapping-rain-water",
    "name": "Trapping Rain Water",
    "category": "two-pointer",
    "difficulty": "Hard",
    "description": "Calculates how much rain water can be trapped between elevation bars using two pointers. Track leftMax and rightMax, move the shorter-side pointer and accumulate water.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Terrain water simulation",
      "Volume calculation in histograms"
    ],
    "advantages": [
      "O(n) with O(1) space using two pointer technique"
    ],
    "disadvantages": [
      "Logic can be unintuitive compared to brute force"
    ],
    "realWorldUses": [
      "Terrain analysis in GIS systems",
      "Container volume optimization algorithms"
    ],
    "defaultInput": "0 1 0 2 1 0 1 3 2 1 2 1",
    "inputType": "array",
    "code": {
      "python": "def trap(h):\n    l,r,lm,rm,w=0,len(h)-1,0,0,0\n    while l<r:\n        if h[l]<=h[r]:\n            lm=max(lm,h[l]); w+=lm-h[l]; l+=1\n        else:\n            rm=max(rm,h[r]); w+=rm-h[r]; r-=1\n    return w"
    }
  },
  "floyd-warshall": {
    "id": "floyd-warshall",
    "name": "Floyd-Warshall Algorithm",
    "category": "advanced-algo",
    "difficulty": "Hard",
    "description": "Finds shortest paths between all pairs of vertices in a weighted graph using DP. Updates distances by considering each vertex as an intermediate node.",
    "timeComplexity": {
      "best": "O(V³)",
      "average": "O(V³)",
      "worst": "O(V³)"
    },
    "spaceComplexity": "O(V²)",
    "applications": [
      "All-pairs shortest paths",
      "Network routing tables",
      "Transitive closure"
    ],
    "advantages": [
      "Simple to implement; handles negative weights (no negative cycles)"
    ],
    "disadvantages": [
      "O(V³) time is expensive for large graphs"
    ],
    "realWorldUses": [
      "Network routing table computation",
      "Road map distance precomputation"
    ],
    "defaultInput": "0 3 INF 7\n8 0 2 INF\n5 INF 0 1\n2 INF INF 0",
    "inputType": "graph",
    "code": {
      "python": "def floyd_warshall(dist):\n    V=len(dist)\n    for k in range(V):\n        for i in range(V):\n            for j in range(V):\n                if dist[i][k]+dist[k][j] < dist[i][j]:\n                    dist[i][j]=dist[i][k]+dist[k][j]\n    return dist"
    }
  },
  "two-sum-two-pointer": {
    "id": "two-sum-two-pointer",
    "name": "Two Sum (Two Pointer)",
    "category": "two-pointer",
    "difficulty": "Easy",
    "description": "Finds two numbers in a sorted array that sum to a target value using two pointers from both ends. Move left pointer right if sum too small, right pointer left if too large.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Pair sum queries on sorted arrays",
      "3Sum sub-problem"
    ],
    "advantages": [
      "O(n) time with O(1) space on sorted arrays"
    ],
    "disadvantages": [
      "Requires sorted input"
    ],
    "realWorldUses": [
      "Financial transaction pair matching",
      "Scientific data pair analysis"
    ],
    "defaultInput": "1 2 3 4 6 8 9",
    "inputType": "array",
    "code": {
      "python": "def two_sum(arr, target):\n    l,r=0,len(arr)-1\n    while l<r:\n        s=arr[l]+arr[r]\n        if s==target: return [l,r]\n        elif s<target: l+=1\n        else: r-=1\n    return [-1,-1]"
    }
  },
  "bst-insert": {
    "id": "bst-insert",
    "name": "BST Insert",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Inserts a value into a Binary Search Tree by traversing left (smaller) or right (larger) from the root until an empty spot is found. Maintains BST ordering property.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Ordered dictionary storage",
      "Database indexing",
      "Priority scheduling"
    ],
    "advantages": [
      "Dynamic structure",
      "O(log n) average insert"
    ],
    "disadvantages": [
      "Can degrade to O(n) on sorted input without balancing"
    ],
    "realWorldUses": [
      "Database B-tree storage engines",
      "File system directory trees"
    ],
    "defaultInput": "50 30 70 20 40 60 80",
    "inputType": "tree",
    "code": {
      "python": "def insert(root, val):\n    if not root: return TreeNode(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    return root"
    }
  },
  "bst-delete": {
    "id": "bst-delete",
    "name": "BST Delete",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Deletes a node from a BST handling 3 cases: leaf node (simply remove), one child (replace with child), two children (replace with in-order successor then delete successor).",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Priority queue removal",
      "Symbol table deletion",
      "Database record purge"
    ],
    "advantages": [
      "Maintains BST property after deletion"
    ],
    "disadvantages": [
      "Two-child deletion requires finding in-order successor"
    ],
    "realWorldUses": [
      "Database row deletion in index trees",
      "Cache eviction in BST-ordered caches"
    ],
    "defaultInput": "50 30 70 20 40 60 80",
    "inputType": "tree",
    "code": {
      "python": "def delete(root, key):\n    if not root: return None\n    if key < root.val: root.left = delete(root.left, key)\n    elif key > root.val: root.right = delete(root.right, key)\n    else:\n        if not root.left: return root.right\n        if not root.right: return root.left\n        succ = root.right\n        while succ.left: succ = succ.left\n        root.val = succ.val\n        root.right = delete(root.right, succ.val)\n    return root"
    }
  },
  "avl-insert": {
    "id": "avl-insert",
    "name": "AVL Tree Insert",
    "category": "trees",
    "difficulty": "Hard",
    "description": "Inserts into an AVL tree and rebalances using rotations. Computes balance factors (leftHeight - rightHeight). If balance > 1 or < -1, performs LL, RR, LR, or RL rotations to restore height-balanced property.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Databases requiring guaranteed O(log n)",
      "Memory allocators",
      "Sets and Maps"
    ],
    "advantages": [
      "Guaranteed O(log n) for all operations"
    ],
    "disadvantages": [
      "More complex rotations than simple BST",
      "Higher constant factor overhead"
    ],
    "realWorldUses": [
      "Linux kernel's internal memory mapping",
      "Java TreeMap uses Red-Black (similar)"
    ],
    "defaultInput": "30 20 40 10 25 35 50",
    "inputType": "tree",
    "code": {
      "python": "def insert(root, val):\n    if not root: return Node(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    root.h = 1 + max(height(root.left), height(root.right))\n    root.bf = height(root.left) - height(root.right)\n    return balance(root)"
    }
  },
  "avl-delete": {
    "id": "avl-delete",
    "name": "AVL Tree Delete",
    "category": "trees",
    "difficulty": "Hard",
    "description": "Deletes from an AVL tree using BST deletion, then walks back up updating heights and rebalancing with rotations at each ancestor to maintain the height-balanced property.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Real-time systems requiring consistent performance"
    ],
    "advantages": [
      "Always balanced after deletion"
    ],
    "disadvantages": [
      "Multiple rotations may be needed up to O(log n) rotations"
    ],
    "realWorldUses": [
      "In-memory ordered indexes",
      "Compiler symbol tables"
    ],
    "defaultInput": "30 20 40 10 25 35 50",
    "inputType": "tree",
    "code": {
      "python": "def delete_avl(root, key):\n    root = bst_delete(root, key)\n    if not root: return None\n    root.h = 1 + max(height(root.left), height(root.right))\n    root.bf = height(root.left) - height(root.right)\n    return balance(root)"
    }
  },
  "bt-insert": {
    "id": "bt-insert",
    "name": "Binary Tree Insert",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Inserts a new node into a Binary Tree using level-order (BFS) insertion. Finds the first node with a missing left or right child and places the new node there.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Expression trees",
      "Heap-like complete trees",
      "Parse trees"
    ],
    "advantages": [
      "Simple; always keeps tree complete"
    ],
    "disadvantages": [
      "No ordering guarantee unlike BST"
    ],
    "realWorldUses": [
      "Expression tree builders in compilers",
      "Tournament bracket generation"
    ],
    "defaultInput": "1 2 3 4 5 6",
    "inputType": "tree",
    "code": {
      "python": "from collections import deque\ndef bt_insert(root, val):\n    node = TreeNode(val)\n    if not root: return node\n    q = deque([root])\n    while q:\n        curr = q.popleft()\n        if not curr.left: curr.left = node; return root\n        q.append(curr.left)\n        if not curr.right: curr.right = node; return root\n        q.append(curr.right)\n    return root"
    }
  },
  "bt-delete": {
    "id": "bt-delete",
    "name": "Binary Tree Delete",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Deletes a node from a Binary Tree by finding the deepest rightmost node, copying its value to the target node, then deleting the deepest rightmost node to maintain the complete tree structure.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Complete binary tree maintenance"
    ],
    "advantages": [
      "Preserves complete binary tree structure"
    ],
    "disadvantages": [
      "O(n) time — must scan entire tree"
    ],
    "realWorldUses": [
      "Heap array deletions (copy deepest, then remove)",
      "Tournament bracket removal"
    ],
    "defaultInput": "1 2 3 4 5 6 7",
    "inputType": "tree",
    "code": {
      "python": "def bt_delete(root, key):\n    if not root: return None\n    from collections import deque\n    q = deque([root])\n    key_node, last = None, None\n    while q:\n        last = q.popleft()\n        if last.val == key: key_node = last\n        if last.left: q.append(last.left)\n        if last.right: q.append(last.right)\n    if key_node: key_node.val = last.val\n    return root"
    }
  },
  "rbt-insert": {
    "id": "rbt-insert",
    "name": "Red-Black Tree Insert",
    "category": "trees",
    "difficulty": "Hard",
    "description": "Inserts into a Red-Black Tree. New nodes are colored Red, then color violations are fixed: if uncle is Red → recolor; if uncle is Black → rotate. Maintains 5 RBT properties including equal black-height on all paths.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "C++ STL map/set",
      "Java TreeMap/TreeSet",
      "Linux kernel completely fair scheduler"
    ],
    "advantages": [
      "Looser balance than AVL → fewer rotations on insertion"
    ],
    "disadvantages": [
      "Complex implementation; slightly slower search than AVL"
    ],
    "realWorldUses": [
      "C++ STL std::map and std::set",
      "Java java.util.TreeMap"
    ],
    "defaultInput": "10 20 30 15 25 5 1",
    "inputType": "tree",
    "code": {
      "python": "# Red-Black Tree insert fix\ndef fix_insert(self, node):\n    while node.parent and node.parent.color == 'RED':\n        uncle = self.get_uncle(node)\n        if uncle and uncle.color == 'RED':\n            node.parent.color = 'BLACK'\n            uncle.color = 'BLACK'\n            node.parent.parent.color = 'RED'\n            node = node.parent.parent\n        else:\n            self.rotate(node)\n    self.root.color = 'BLACK'"
    }
  },
  "array-traversal": {
    "id": "array-traversal",
    "name": "Array Traversal",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Visit every element in the array from index 0 to n-1.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Unsorted datasets",
      "Searching lists with small sizes",
      "Key-lookup in associative arrays"
    ],
    "advantages": [
      "No sorted array restriction",
      "Very simple implementation"
    ],
    "disadvantages": [
      "Slow on large lists due to O(n) scan"
    ],
    "realWorldUses": [
      "Finding items in simple logs",
      "Iterative arrays in embedded systems"
    ],
    "defaultInput": "5 3 8 1 9 4 7",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "linear-search",
    "code": {
      "python": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1"
    }
  },
  "array-searching": {
    "id": "array-searching",
    "name": "Array Searching",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Array Searching concept. Visually simulated using the underlying Linear Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Unsorted datasets",
      "Searching lists with small sizes",
      "Key-lookup in associative arrays"
    ],
    "advantages": [
      "No sorted array restriction",
      "Very simple implementation"
    ],
    "disadvantages": [
      "Slow on large lists due to O(n) scan"
    ],
    "realWorldUses": [
      "Finding items in simple logs",
      "Iterative arrays in embedded systems"
    ],
    "defaultInput": "5 3 8 1 9\nTarget = 8",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "linear-search",
    "code": {
      "python": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1"
    }
  },
  "dutch-national-flag-algorithm": {
    "id": "dutch-national-flag-algorithm",
    "name": "Dutch National Flag Algorithm",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dutch National Flag Algorithm concept. Visually simulated using the underlying Quick Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Systems programming libraries",
      "General-purpose sorting frameworks",
      "Numerical computations"
    ],
    "advantages": [
      "Cache friendly and highly optimized in practice",
      "No auxiliary memory storage required (in-place)",
      "Extremely fast average case"
    ],
    "disadvantages": [
      "Worst case time complexity is O(n²)",
      "Unstable sorting algorithm"
    ],
    "realWorldUses": [
      "Standard C library qsort() implementation",
      "JavaScript V8 engine array sorting for primitive values"
    ],
    "defaultInput": "6 2 9 4 1 8",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "quick-sort",
    "code": {
      "python": "def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1"
    }
  },
  "matrix-traversal": {
    "id": "matrix-traversal",
    "name": "Matrix Traversal",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Matrix Traversal concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "4",
    "inputType": "spiral-matrix",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "matrix-multiplication": {
    "id": "matrix-multiplication",
    "name": "Matrix Multiplication",
    "category": "arrays",
    "difficulty": "Hard",
    "inputType": "matrix-mult",
    "defaultInput": "1 2\n3 4\n---\n5 6\n7 8",
    "description": "Multiply matrices A and B: C[i][j] = Σ A[i][k] × B[k][j].",
    "timeComplexity": {
      "best": "O(n³)",
      "average": "O(n³)",
      "worst": "O(n³)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Linear algebra",
      "Graphics"
    ],
    "advantages": [
      "Foundation of ML"
    ],
    "disadvantages": [
      "O(n³) time"
    ],
    "realWorldUses": [
      "3D rendering",
      "Neural networks"
    ],
    "code": {
      "python": "def matrix_multiply(A, B):\n    n, m, p = len(A), len(A[0]), len(B[0])\n    C = [[0] * p for _ in range(n)]\n    for i in range(n):\n        for j in range(p):\n            for k in range(m):\n                C[i][j] += A[i][k] * B[k][j]\n    return C"
    }
  },
  "string-searching": {
    "id": "string-searching",
    "name": "String Searching",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the String Searching concept. Visually simulated using the underlying Linear Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Unsorted datasets",
      "Searching lists with small sizes",
      "Key-lookup in associative arrays"
    ],
    "advantages": [
      "No sorted array restriction",
      "Very simple implementation"
    ],
    "disadvantages": [
      "Slow on large lists due to O(n) scan"
    ],
    "realWorldUses": [
      "Finding items in simple logs",
      "Iterative arrays in embedded systems"
    ],
    "defaultInput": "5 3 8 1 9\nTarget = 8",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "linear-search",
    "code": {
      "python": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1"
    }
  },
  "string-comparison": {
    "id": "string-comparison",
    "name": "String Comparison",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the String Comparison concept. Visually simulated using the underlying Palindrome Check solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "DNA sequence analysis",
      "Data validation",
      "Word puzzles"
    ],
    "advantages": [
      "O(1) space solution with two pointers"
    ],
    "disadvantages": [
      "Case-sensitive unless normalized"
    ],
    "realWorldUses": [
      "String validation in forms",
      "Genome bioinformatics research"
    ],
    "defaultInput": "racecar",
    "inputType": "strings-list",
    "isRoadmapAlias": true,
    "counterpartId": "palindrome-check",
    "code": {
      "python": "def is_palindrome(s):\n    return s == s[::-1]"
    }
  },
  "anagram": {
    "id": "anagram",
    "name": "Anagram",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Anagram concept. Visually simulated using the underlying Group Anagrams solver.",
    "timeComplexity": {
      "best": "O(n * k log k)",
      "average": "O(n * k log k)",
      "worst": "O(n * k log k)"
    },
    "spaceComplexity": "O(n * k)",
    "applications": [
      "Text classification",
      "Word puzzle generators",
      "Lexical anagram detection scanners"
    ],
    "advantages": [
      "Groups string datasets in a single iteration pass",
      "Ensures consistent category indexing"
    ],
    "disadvantages": [
      "String sorting consumes execution latency on huge string lengths"
    ],
    "realWorldUses": [
      "Scrabble solver dictionary indexers",
      "Linguistic analysis word pattern organizers"
    ],
    "defaultInput": "eat tea tan ate nat bat",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "group-anagrams",
    "code": {
      "python": "def group_anagrams(strs):\n    map_dict = {}\n    for s in strs:\n        key = \"\".join(sorted(s))\n        map_dict.setdefault(key, []).append(s)\n    return list(map_dict.values())"
    }
  },
  "string-matching": {
    "id": "string-matching",
    "name": "String Matching",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the String Matching concept. Visually simulated using the underlying KMP Pattern Search solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features"
    ],
    "advantages": [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text"
    ],
    "disadvantages": [
      "Requires preprocessing space and time to build LPS array"
    ],
    "realWorldUses": [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "isRoadmapAlias": true,
    "counterpartId": "kmp-search",
    "code": {
      "python": "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices"
    }
  },
  "pattern-matching": {
    "id": "pattern-matching",
    "name": "Pattern Matching",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Pattern Matching concept. Visually simulated using the underlying KMP Pattern Search solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features"
    ],
    "advantages": [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text"
    ],
    "disadvantages": [
      "Requires preprocessing space and time to build LPS array"
    ],
    "realWorldUses": [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "isRoadmapAlias": true,
    "counterpartId": "kmp-search",
    "code": {
      "python": "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices"
    }
  },
  "z-algorithm": {
    "id": "z-algorithm",
    "name": "Z-Algorithm",
    "category": "strings",
    "difficulty": "Medium",
    "inputType": "z-algorithm",
    "defaultInput": "aabxaa\naa",
    "description": "Compute Z-array: Z[i] = length of longest substring from i matching a prefix of s.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Pattern matching"
    ],
    "advantages": [
      "Linear time"
    ],
    "disadvantages": [
      "Harder than KMP"
    ],
    "realWorldUses": [
      "Search engines",
      "DNA matching"
    ],
    "code": {
      "python": "def z_algorithm(s):\n    n = len(s)\n    z = [0] * n\n    l, r = 0, 0\n    for i in range(1, n):\n        if i <= r:\n            z[i] = min(r - i + 1, z[i - l])\n        while i + z[i] < n and s[z[i]] == s[i + z[i]]:\n            z[i] += 1\n        if i + z[i] - 1 > r:\n            l = i\n            r = i + z[i] - 1\n    return z"
    }
  },
  "manachers-algorithm": {
    "id": "manachers-algorithm",
    "name": "Manacher's Algorithm",
    "category": "strings",
    "difficulty": "Hard",
    "inputType": "manacher",
    "defaultInput": "abacaba",
    "description": "Find all palindromic substrings in O(n) time.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Palindrome finding"
    ],
    "advantages": [
      "Linear time"
    ],
    "disadvantages": [
      "Complex"
    ],
    "realWorldUses": [
      "Bioinformatics"
    ],
    "code": {
      "python": "def manacher(s):\n    t = '#' + '#'.join(s) + '#'\n    n = len(t)\n    p = [0] * n\n    c, r = 0, 0\n    for i in range(n):\n        i_mirror = 2 * c - i\n        if r > i:\n            p[i] = min(r - i, p[i_mirror])\n        while i - 1 - p[i] >= 0 and i + 1 + p[i] < n and t[i - 1 - p[i]] == t[i + 1 + p[i]]:\n            p[i] += 1\n        if i + p[i] > r:\n            c = i\n            r = i + p[i]\n    max_len, center_idx = max((val, idx) for idx, val in enumerate(p))\n    start = (center_idx - max_len) // 2\n    return s[start : start + max_len]"
    }
  },
  "rolling-hash": {
    "id": "rolling-hash",
    "name": "Rolling Hash",
    "category": "advanced-algo",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Rolling Hash concept. Visually simulated using the underlying Rabin-Karp Search solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n * m)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Plagiarism checkers",
      "Multiple pattern match scans",
      "DNA sequencing matches"
    ],
    "advantages": [
      "Extremely simple to scale to multi-pattern search checks"
    ],
    "disadvantages": [
      "Spurious hash collisions degrade runtime to quadratic worst-case O(n * m)"
    ],
    "realWorldUses": [
      "Document similarity checking tools",
      "Pattern signature matches in intrusion detection software"
    ],
    "defaultInput": "aabxaa\naa",
    "inputType": "z-algorithm",
    "isRoadmapAlias": true,
    "counterpartId": "rabin-karp",
    "code": {
      "python": "def search(txt, pat, q=101):\n    d = 256\n    m, n = len(pat), len(txt)\n    hpat = htxt = 0\n    h = pow(d, m-1, q)\n    for i in range(m):\n        hpat = (d * hpat + ord(pat[i])) % q\n        htxt = (d * htxt + ord(txt[i])) % q\n    indices = []\n    for i in range(n - m + 1):\n        if hpat == htxt:\n            if txt[i:i+m] == pat: indices.append(i)\n        if i < n - m:\n            htxt = (d * (htxt - ord(txt[i]) * h) + ord(txt[i+m])) % q\n            if htxt < 0: htxt += q\n    return indices"
    }
  },
  "string-subsequence": {
    "id": "string-subsequence",
    "name": "String Subsequence",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the String Subsequence concept. Visually simulated using the underlying Longest Common Subsequence solver.",
    "timeComplexity": {
      "best": "O(mn)",
      "average": "O(mn)",
      "worst": "O(mn)"
    },
    "spaceComplexity": "O(mn)",
    "applications": [
      "Diff tools (git diff)",
      "Bioinformatics sequence alignment",
      "Plagiarism detection"
    ],
    "advantages": [
      "Solves one of the most important DP problems optimally"
    ],
    "disadvantages": [
      "O(mn) space may be large for very long strings"
    ],
    "realWorldUses": [
      "Git diff algorithm",
      "DNA sequence alignment software"
    ],
    "defaultInput": "ABCBDAB",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "lcs-dp",
    "code": {
      "python": "def lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
    }
  },
  "string-substring": {
    "id": "string-substring",
    "name": "String Substring",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the String Substring concept. Visually simulated using the underlying KMP Pattern Search solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features"
    ],
    "advantages": [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text"
    ],
    "disadvantages": [
      "Requires preprocessing space and time to build LPS array"
    ],
    "realWorldUses": [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "isRoadmapAlias": true,
    "counterpartId": "kmp-search",
    "code": {
      "python": "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices"
    }
  },
  "string-compression": {
    "id": "string-compression",
    "name": "String Compression",
    "category": "strings",
    "difficulty": "Easy",
    "inputType": "string-compress",
    "defaultInput": "aaabbbccddddee",
    "description": "Run-length encoding: consecutive same characters grouped with count.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Data compression"
    ],
    "advantages": [
      "Simple encoding"
    ],
    "disadvantages": [
      "May expand small strings"
    ],
    "realWorldUses": [
      "Image compression",
      "File archiving"
    ],
    "code": {
      "python": "def compress(s):\n    res = []\n    i = 0\n    while i < len(s):\n        char = s[i]\n        count = 0\n        while i < len(s) and s[i] == char:\n            count += 1\n            i += 1\n        res.append(char + (str(count) if count > 1 else \"\"))\n    return \"\".join(res)"
    }
  },
  "lexicographical-order": {
    "id": "lexicographical-order",
    "name": "Lexicographical Order",
    "category": "sorting",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Lexicographical Order concept. Visually simulated using the underlying Bubble Sort solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Teaching introductory sorting concepts",
      "Sorting small or nearly sorted arrays",
      "Detecting simple swap requirements"
    ],
    "advantages": [
      "Simple to understand and implement",
      "In-place sorting (requires no extra memory)",
      "Stable sorting algorithm (preserves relative order)"
    ],
    "disadvantages": [
      "Extremely slow on large datasets",
      "Highly inefficient compared to Quick Sort or Merge Sort",
      "Performs redundant comparisons"
    ],
    "realWorldUses": [
      "Computer graphics graphics pipelines for depth sorting",
      "Legacy embedded microcontrollers with minimal memory footprint"
    ],
    "defaultInput": "5 3 8 1 9",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "bubble-sort",
    "code": {
      "python": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr"
    }
  },
  "list-search": {
    "id": "list-search",
    "name": "List Search",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the List Search concept. Visually simulated using the underlying Linked List Traversal solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching"
    ],
    "advantages": [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting"
    ],
    "disadvantages": [
      "Lacks direct random indexing support"
    ],
    "realWorldUses": [
      "Low-level driver structures",
      "Blockchain transaction validation linking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "linked-list-traversal",
    "code": {
      "python": "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "list-insertion": {
    "id": "list-insertion",
    "name": "List Insertion",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the List Insertion concept. Visually simulated using the underlying Linked List Traversal solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching"
    ],
    "advantages": [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting"
    ],
    "disadvantages": [
      "Lacks direct random indexing support"
    ],
    "realWorldUses": [
      "Low-level driver structures",
      "Blockchain transaction validation linking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "linked-list-traversal",
    "code": {
      "python": "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "list-deletion": {
    "id": "list-deletion",
    "name": "List Deletion",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the List Deletion concept. Visually simulated using the underlying Linked List Traversal solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching"
    ],
    "advantages": [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting"
    ],
    "disadvantages": [
      "Lacks direct random indexing support"
    ],
    "realWorldUses": [
      "Low-level driver structures",
      "Blockchain transaction validation linking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "linked-list-traversal",
    "code": {
      "python": "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "remove-cycle": {
    "id": "remove-cycle",
    "name": "Remove Cycle",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Remove Cycle concept. Visually simulated using the underlying Cycle Detection (Floyd's) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Detecting memory pointer circular leaks",
      "Network circular path validation checks",
      "Checking circular list layouts"
    ],
    "advantages": [
      "Requires no extra hashing tables",
      "Constant O(1) space footprint"
    ],
    "disadvantages": [
      "Requires structural list structure modification on removal",
      "Double pointers coordination overhead"
    ],
    "realWorldUses": [
      "Router loop path checking protocols",
      "OS process thread circular dependencies checking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "cycle-detection",
    "code": {
      "python": "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False"
    }
  },
  "palindrome-linked-list": {
    "id": "palindrome-linked-list",
    "name": "Palindrome Linked List",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Palindrome Linked List concept. Visually simulated using the underlying Palindrome Check solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "DNA sequence analysis",
      "Data validation",
      "Word puzzles"
    ],
    "advantages": [
      "O(1) space solution with two pointers"
    ],
    "disadvantages": [
      "Case-sensitive unless normalized"
    ],
    "realWorldUses": [
      "String validation in forms",
      "Genome bioinformatics research"
    ],
    "defaultInput": "racecar",
    "inputType": "strings-list",
    "isRoadmapAlias": true,
    "counterpartId": "palindrome-check",
    "code": {
      "python": "def is_palindrome(s):\n    return s == s[::-1]"
    }
  },
  "intersection-point": {
    "id": "intersection-point",
    "name": "Intersection Point",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Intersection Point concept. Visually simulated using the underlying Find Middle Node solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Splitting linked lists in Merge Sort",
      "Checking middle attributes of nodes",
      "Dividing dynamic decks"
    ],
    "advantages": [
      "Calculates target in a single pass",
      "O(1) extra space"
    ],
    "disadvantages": [
      "Relies on sequential node scanning (no random indexes)"
    ],
    "realWorldUses": [
      "Data dividing stream schedulers",
      "Linked-list based sorting algorithms"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "middle-node",
    "code": {
      "python": "def get_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow"
    }
  },
  "rotate-linked-list": {
    "id": "rotate-linked-list",
    "name": "Rotate Linked List",
    "category": "linked-list",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Rotate Linked List concept. Visually simulated using the underlying Reverse Linked List solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Parsing engines",
      "Undo actions in stacks",
      "Linked data inversion"
    ],
    "advantages": [
      "In-place reversion requires zero auxiliary node replication space"
    ],
    "disadvantages": [
      "Requires pointers update handling, easy to break links"
    ],
    "realWorldUses": [
      "Underlying data modifications in transaction logs"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "reverse-list",
    "code": {
      "python": "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev"
    }
  },
  "sort-linked-list": {
    "id": "sort-linked-list",
    "name": "Sort Linked List",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Sort Linked List concept. Visually simulated using the underlying Merge Two Sorted Lists solver.",
    "timeComplexity": {
      "best": "O(n+m)",
      "average": "O(n+m)",
      "worst": "O(n+m)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Merge sort merge step",
      "External sorting",
      "Database merge joins"
    ],
    "advantages": [
      "Linear time O(n+m) with constant extra space"
    ],
    "disadvantages": [
      "Modifies the original linked list node pointers"
    ],
    "realWorldUses": [
      "Database engine merge-join operations",
      "External merge-sort file algorithms"
    ],
    "defaultInput": "1 3 5 7",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "merge-sorted-lists",
    "code": {
      "python": "def merge_sorted(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            curr.next = l1; l1 = l1.next\n        else:\n            curr.next = l2; l2 = l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next"
    }
  },
  "partition-linked-list": {
    "id": "partition-linked-list",
    "name": "Partition Linked List",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Partition Linked List concept. Visually simulated using the underlying Find Middle Node solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Splitting linked lists in Merge Sort",
      "Checking middle attributes of nodes",
      "Dividing dynamic decks"
    ],
    "advantages": [
      "Calculates target in a single pass",
      "O(1) extra space"
    ],
    "disadvantages": [
      "Relies on sequential node scanning (no random indexes)"
    ],
    "realWorldUses": [
      "Data dividing stream schedulers",
      "Linked-list based sorting algorithms"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "middle-node",
    "code": {
      "python": "def get_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow"
    }
  },
  "josephus-problem": {
    "id": "josephus-problem",
    "name": "Josephus Problem",
    "category": "queue",
    "difficulty": "Medium",
    "inputType": "queue",
    "defaultInput": "5 2",
    "description": "Simulate the Josephus elimination game in a circle until only one survivor remains.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Circular data elimination",
      "Game simulations"
    ],
    "advantages": [
      "Predictable elimination index"
    ],
    "disadvantages": [
      "Simulating steps sequentially takes time"
    ],
    "realWorldUses": [
      "Round-robin ballot allocations"
    ],
    "code": {
      "python": "def josephus(n: int, k: int) -> int:\n    survivor = 0\n    for i in range(2, n + 1):\n        survivor = (survivor + k) % i\n    return survivor + 1"
    }
  },
  "infix-to-postfix": {
    "id": "infix-to-postfix",
    "name": "Infix to Postfix",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "A+B*C",
    "description": "Convert infix to postfix using operator stack and precedence rules.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Compiler design"
    ],
    "advantages": [
      "No parentheses needed"
    ],
    "disadvantages": [
      "Requires stack"
    ],
    "realWorldUses": [
      "Calculator apps",
      "Compilers"
    ],
    "code": {
      "python": "def infix_to_postfix(expr):\n    prec = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}\n    stack = []\n    postfix = []\n    for char in expr:\n        if char.isalnum():\n            postfix.append(char)\n        elif char == '(':\n            stack.append(char)\n        elif char == ')':\n            while stack and stack[-1] != '(':\n                postfix.append(stack.pop())\n            stack.pop()\n        else:\n            while stack and stack[-1] != '(' and prec.get(char, 0) <= prec.get(stack[-1], 0):\n                postfix.append(stack.pop())\n            stack.append(char)\n    while stack:\n        postfix.append(stack.pop())\n    return \"\".join(postfix)"
    }
  },
  "infix-to-prefix": {
    "id": "infix-to-prefix",
    "name": "Infix to Prefix",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "A+B*C",
    "description": "Convert infix to prefix by reversing, postfix-converting, then reversing result.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "LISP",
      "Expression trees"
    ],
    "advantages": [
      "Unambiguous without parentheses"
    ],
    "disadvantages": [
      "Two reversal steps"
    ],
    "realWorldUses": [
      "LISP interpreters"
    ],
    "code": {
      "python": "def infix_to_prefix(expr):\n    prec = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}\n    def to_postfix(reversed_expr):\n        stack = []\n        postfix = []\n        for char in reversed_expr:\n            if char.isalnum():\n                postfix.append(char)\n            elif char == '(':\n                stack.append(char)\n            elif char == ')':\n                while stack and stack[-1] != '(':\n                    postfix.append(stack.pop())\n                stack.pop()\n            else:\n                while stack and stack[-1] != '(' and prec.get(char, 0) < prec.get(stack[-1], 0):\n                    postfix.append(stack.pop())\n                stack.append(char)\n        while stack:\n            postfix.append(stack.pop())\n        return \"\".join(postfix)\n    reversed_expr = []\n    for char in reversed(expr):\n        if char == '(': reversed_expr.append(')')\n        elif char == ')': reversed_expr.append('(')\n        else: reversed_expr.append(char)\n    postfix = to_postfix(\"\".join(reversed_expr))\n    return postfix[::-1]"
    }
  },
  "prefix-evaluation": {
    "id": "prefix-evaluation",
    "name": "Prefix Evaluation",
    "category": "stack",
    "difficulty": "Easy",
    "inputType": "stack",
    "defaultInput": "+ * 2 3 4",
    "description": "Evaluate prefix: scan right-to-left and use an operand stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Functional expressions"
    ],
    "advantages": [
      "Natural for recursion"
    ],
    "disadvantages": [
      "Counter-intuitive"
    ],
    "realWorldUses": [
      "LISP/Scheme"
    ],
    "code": {
      "python": "def evaluate_prefix(expr):\n    stack = []\n    for char in reversed(expr.split()):\n        if char.isdigit():\n            stack.append(int(char))\n        else:\n            op1 = stack.pop()\n            op2 = stack.pop()\n            if char == '+': stack.append(op1 + op2)\n            elif char == '-': stack.append(op1 - op2)\n            elif char == '*': stack.append(op1 * op2)\n            elif char == '/': stack.append(op1 // op2)\n    return stack[0]"
    }
  },
  "postfix-evaluation": {
    "id": "postfix-evaluation",
    "name": "Postfix Evaluation",
    "category": "stack",
    "difficulty": "Easy",
    "inputType": "stack",
    "defaultInput": "2 3 4 * +",
    "description": "Evaluate postfix: scan left-to-right, push operands, pop and compute on operators.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Stack-based calculators"
    ],
    "advantages": [
      "No precedence rules needed"
    ],
    "disadvantages": [
      "Unreadable for humans"
    ],
    "realWorldUses": [
      "HP calculators",
      "Forth"
    ],
    "code": {
      "python": "def evaluate_postfix(expr):\n    stack = []\n    for char in expr.split():\n        if char.isdigit():\n            stack.append(int(char))\n        else:\n            op2 = stack.pop()\n            op1 = stack.pop()\n            if char == '+': stack.append(op1 + op2)\n            elif char == '-': stack.append(op1 - op2)\n            elif char == '*': stack.append(op1 * op2)\n            elif char == '/': stack.append(op1 // op2)\n    return stack[0]"
    }
  },
  "previous-greater-element": {
    "id": "previous-greater-element",
    "name": "Previous Greater Element",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "10 4 6 8 3 2",
    "description": "For each element, find nearest greater element to its left using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Span calculations"
    ],
    "advantages": [
      "Linear time"
    ],
    "disadvantages": [
      "O(n) space"
    ],
    "realWorldUses": [
      "Stock span"
    ],
    "code": {
      "python": "def previous_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        res[i] = arr[stack[-1]] if stack else -1\n        stack.append(i)\n    return res"
    }
  },
  "next-smaller-element": {
    "id": "next-smaller-element",
    "name": "Next Smaller Element",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "4 8 5 2 25",
    "description": "For each element, find nearest smaller element to its right using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Temperature span",
      "Histograms"
    ],
    "advantages": [
      "O(n) using stack"
    ],
    "disadvantages": [
      "O(n) auxiliary space"
    ],
    "realWorldUses": [
      "Financial analysis"
    ],
    "code": {
      "python": "def next_smaller_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] > arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res"
    }
  },
  "previous-smaller-element": {
    "id": "previous-smaller-element",
    "name": "Previous Smaller Element",
    "category": "stack",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Previous Smaller Element concept. Visually simulated using the underlying Next Greater Element solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Dynamic range value scans",
      "Subarray metrics checks",
      "Temperature forecasting spikes"
    ],
    "advantages": [
      "Linear processing time O(n) instead of quadratic O(n^2) nested scans"
    ],
    "disadvantages": [
      "Requires extra space for monotonic stack tracker storage"
    ],
    "realWorldUses": [
      "Industrial sensor telemetry alarm triggers",
      "Time-series database change point detections"
    ],
    "defaultInput": "4 5 2 25",
    "inputType": "stack",
    "isRoadmapAlias": true,
    "counterpartId": "next-greater-element",
    "code": {
      "python": "def next_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] < arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res"
    }
  },
  "largest-rectangle-in-histogram": {
    "id": "largest-rectangle-in-histogram",
    "name": "Largest Rectangle In Histogram",
    "category": "stack",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Largest Rectangle In Histogram concept. Visually simulated using the underlying Stack Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Expression evaluations",
      "Backtracking algorithms",
      "Browser back-button history navigation tracks"
    ],
    "advantages": [
      "Simplest LIFO logic",
      "Constant-time O(1) operations"
    ],
    "disadvantages": [
      "Strict sequential stack frames access constraint"
    ],
    "realWorldUses": [
      "Compiler recursion stacks",
      "Undo/redo logs managers"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "stack",
    "isRoadmapAlias": true,
    "counterpartId": "stack-operations",
    "code": {
      "python": "class Stack:\n    def __init__(self): self.items = []\n    def push(self, x): self.items.append(x)\n    def pop(self): return self.items.pop()\n    def peek(self): return self.items[-1]"
    }
  },
  "stock-span-problem": {
    "id": "stock-span-problem",
    "name": "Stock Span Problem",
    "category": "stack",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Stock Span Problem concept. Visually simulated using the underlying Next Greater Element solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Dynamic range value scans",
      "Subarray metrics checks",
      "Temperature forecasting spikes"
    ],
    "advantages": [
      "Linear processing time O(n) instead of quadratic O(n^2) nested scans"
    ],
    "disadvantages": [
      "Requires extra space for monotonic stack tracker storage"
    ],
    "realWorldUses": [
      "Industrial sensor telemetry alarm triggers",
      "Time-series database change point detections"
    ],
    "defaultInput": "4 5 2 25",
    "inputType": "stack",
    "isRoadmapAlias": true,
    "counterpartId": "next-greater-element",
    "code": {
      "python": "def next_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] < arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res"
    }
  },
  "undo-redo": {
    "id": "undo-redo",
    "name": "Undo Redo",
    "category": "stack",
    "difficulty": "Easy",
    "inputType": "stack",
    "defaultInput": "write H write e write l write l write o undo undo redo",
    "description": "Maintain editor text states using an Undo stack and a Redo stack.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Text editors",
      "Command managers"
    ],
    "advantages": [
      "O(1) command execution"
    ],
    "disadvantages": [
      "Consumes memory for full change histories"
    ],
    "realWorldUses": [
      "VS Code, Microsoft Word history managers"
    ],
    "code": {
      "python": "class UndoRedo:\n    def __init__(self):\n        self.undo_stk, self.redo_stk = [], []\n    def write(self, val):\n        self.undo_stk.append(val)\n        self.redo_stk.clear()\n    def undo(self):\n        if self.undo_stk:\n            self.redo_stk.append(self.undo_stk.pop())\n    def redo(self):\n        if self.redo_stk:\n            self.undo_stk.append(self.redo_stk.pop())\n    def get_text(self):\n        return \"\".join(self.undo_stk)"
    }
  },
  "browser-history": {
    "id": "browser-history",
    "name": "Browser History",
    "category": "stack",
    "difficulty": "Easy",
    "inputType": "stack",
    "defaultInput": "visit google.com visit github.com back back forward",
    "description": "Simulate browser tab back/forward history tracking using Back and Forward stacks.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Web browsers",
      "Wizard page workflows"
    ],
    "advantages": [
      "Fast state transitions"
    ],
    "disadvantages": [
      "High memory footprint for complex document structures"
    ],
    "realWorldUses": [
      "Chrome/Safari navigation routing stacks"
    ],
    "code": {
      "python": "class BrowserHistory:\n    def __init__(self):\n        self.back_stk, self.forward_stk = [], []\n        self.curr = \"about:blank\"\n    def visit(self, url):\n        if self.curr != \"about:blank\":\n            self.back_stk.append(self.curr)\n        self.forward_stk.clear()\n        self.curr = url\n    def back(self):\n        if self.back_stk:\n            self.forward_stk.append(self.curr)\n            self.curr = self.back_stk.pop()\n    def forward(self):\n        if self.forward_stk:\n            self.back_stk.append(self.curr)\n            self.curr = self.forward_stk.pop()"
    }
  },
  "queue-front": {
    "id": "queue-front",
    "name": "Queue Front",
    "category": "queue",
    "difficulty": "Easy",
    "inputType": "queue",
    "defaultInput": "10 20 30",
    "description": "Access front (head) of a FIFO queue without removing the node.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Buffering",
      "Job inspection"
    ],
    "advantages": [
      "No modification operation cost"
    ],
    "disadvantages": [
      "Only exposes head node"
    ],
    "realWorldUses": [
      "Message broker peek tools"
    ],
    "code": {
      "python": "def get_front(queue):\n    return queue[0] if queue else None"
    }
  },
  "queue-rear": {
    "id": "queue-rear",
    "name": "Queue Rear",
    "category": "queue",
    "difficulty": "Easy",
    "inputType": "queue",
    "defaultInput": "10 20 30",
    "description": "Access back (tail) of a FIFO queue.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Buffer telemetry"
    ],
    "advantages": [
      "Fast verification of last inserted element"
    ],
    "disadvantages": [
      "Exposes tail node only"
    ],
    "realWorldUses": [
      "Print spooler log monitoring"
    ],
    "code": {
      "python": "def get_rear(queue):\n    return queue[-1] if queue else None"
    }
  },
  "priority-queue-type": {
    "id": "priority-queue-type",
    "name": "Priority Queue Type",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Priority Queue Type concept. Visually simulated using the underlying Min Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "min-heap",
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "deque-type": {
    "id": "deque-type",
    "name": "Deque Type",
    "category": "queue",
    "difficulty": "Easy",
    "inputType": "queue",
    "defaultInput": "push_back 5 push_back 10 push_front 2 pop_back pop_front",
    "description": "Double Ended Queue supporting insertion and deletion operations from both Front and Back.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Undo redirection lists",
      "Sliding window optimization"
    ],
    "advantages": [
      "Instant operations at both ends"
    ],
    "disadvantages": [
      "High index lookup penalty compared to standard arrays"
    ],
    "realWorldUses": [
      "Python's collections.deque, C++ std::deque"
    ],
    "code": {
      "python": "from collections import deque\n# Initialize deque\ndq = deque()\ndq.appendleft(2)    # push front\ndq.append(5)        # push back\ndq.popleft()        # pop front\ndq.pop()            # pop back"
    }
  },
  "task-scheduling": {
    "id": "task-scheduling",
    "name": "Task Scheduling",
    "category": "queue",
    "difficulty": "Medium",
    "inputType": "queue",
    "defaultInput": "P1:8 P2:4 P3:6\n3",
    "description": "Simulate Round Robin task scheduling using a quantum clock slice.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "OS Job schedulers",
      "API rate limit queues"
    ],
    "advantages": [
      "Guarantees fairness among tasks"
    ],
    "disadvantages": [
      "High context-switching overhead under small quantums"
    ],
    "realWorldUses": [
      "Linux Kernel CPU schedulers, thread execution pools"
    ],
    "code": {
      "python": "def round_robin(processes, quantum):\n    queue = list(processes)\n    completed, time = [], 0\n    while queue:\n        p = queue.pop(0)\n        run = min(p['remaining'], quantum)\n        time += run\n        p['remaining'] -= run\n        if p['remaining'] == 0:\n            p['finish_time'] = time\n            completed.append(p)\n        else:\n            queue.append(p)\n    return completed"
    }
  },
  "cpu-scheduling": {
    "id": "cpu-scheduling",
    "name": "Cpu Scheduling",
    "category": "queue",
    "difficulty": "Medium",
    "inputType": "queue",
    "defaultInput": "P1:8 P2:4 P3:6\n3",
    "description": "Simulate Round Robin task scheduling using a quantum clock slice.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "OS Job schedulers",
      "API rate limit queues"
    ],
    "advantages": [
      "Guarantees fairness among tasks"
    ],
    "disadvantages": [
      "High context-switching overhead under small quantums"
    ],
    "realWorldUses": [
      "Linux Kernel CPU schedulers, thread execution pools"
    ],
    "code": {
      "python": "def round_robin(processes, quantum):\n    queue = list(processes)\n    completed, time = [], 0\n    while queue:\n        p = queue.pop(0)\n        run = min(p['remaining'], quantum)\n        time += run\n        p['remaining'] -= run\n        if p['remaining'] == 0:\n            p['finish_time'] = time\n            completed.append(p)\n        else:\n            queue.append(p)\n    return completed"
    }
  },
  "printer-queue": {
    "id": "printer-queue",
    "name": "Printer Queue",
    "category": "queue",
    "difficulty": "Easy",
    "inputType": "queue",
    "defaultInput": "Report.pdf Photo.png Script.js",
    "description": "Simulate print jobs entering a printer queue and executing sequentially.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Print buffers",
      "Sequential message queues"
    ],
    "advantages": [
      "Strict order execution"
    ],
    "disadvantages": [
      "Prone to Head-of-Line blocking (slow job blocks queue)"
    ],
    "realWorldUses": [
      "CUPS spooling system, office network printer systems"
    ],
    "code": {
      "python": "class PrinterQueue:\n    def __init__(self):\n        self.jobs = []\n    def add_job(self, job: str):\n        self.jobs.append(job)\n    def print_next(self) -> str:\n        return self.jobs.pop(0) if self.jobs else None"
    }
  },
  "lru-cache-queue": {
    "id": "lru-cache-queue",
    "name": "Lru Cache Queue",
    "category": "queue",
    "difficulty": "Hard",
    "inputType": "lru-cache",
    "defaultInput": "capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2",
    "description": "O(1) get/put cache using doubly-linked list + hashmap with LRU eviction policy.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(capacity)",
    "applications": [
      "Cache management",
      "Query caching"
    ],
    "advantages": [
      "O(1) all operations"
    ],
    "disadvantages": [
      "Extra pointer overhead"
    ],
    "realWorldUses": [
      "CPU caches",
      "Redis LRU",
      "Browser cache"
    ],
    "code": {
      "python": "from collections import deque\nclass LRUCacheQueue:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.queue = deque()\n        self.cache = set()\n    def refer(self, val):\n        if val not in self.cache:\n            if len(self.queue) == self.capacity:\n                removed = self.queue.popleft()\n                self.cache.remove(removed)\n            self.queue.append(val)\n            self.cache.add(val)\n        else:\n            self.queue.remove(val)\n            self.queue.append(val)"
    }
  },
  "hash-set": {
    "id": "hash-set",
    "name": "Hash Set",
    "category": "hashing",
    "difficulty": "Easy",
    "inputType": "hash",
    "defaultInput": "add apple add banana add apple remove apple contains banana",
    "description": "A Hash Set stores unique elements without duplicates, utilizing separate chaining to resolve index collisions.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Uniqueness validation",
      "Set intersection / union operations"
    ],
    "advantages": [
      "Duplicate-free storage",
      "Fast query lookups"
    ],
    "disadvantages": [
      "No key-value associations",
      "Key iteration order is arbitrary"
    ],
    "realWorldUses": [
      "Unique visitor logs, database constraints, dictionary checks"
    ],
    "code": {
      "python": "class HashSet:\n    def __init__(self):\n        self.buckets = set()\n    def add(self, key):\n        self.buckets.add(key)\n    def remove(self, key):\n        self.buckets.discard(key)\n    def has(self, key):\n        return key in self.buckets"
    }
  },
  "duplicate-detection": {
    "id": "duplicate-detection",
    "name": "Duplicate Detection",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Duplicate Detection concept. Visually simulated using the underlying Frequency Count solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(u)",
    "applications": [
      "Histogram representation",
      "Duplicate validation checks",
      "Categorization maps creation"
    ],
    "advantages": [
      "Extremely simple to implement",
      "Single linear pass scan"
    ],
    "disadvantages": [
      "Consumes additional space for distinct element mappings"
    ],
    "realWorldUses": [
      "Query analytics dashboard counters",
      "Token occurrence logs engines"
    ],
    "defaultInput": "2 3 2 4 5 2 3",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "frequency-count",
    "code": {
      "python": "def count_frequency(arr):\n    freq = {}\n    for val in arr:\n        freq[val] = freq.get(val, 0) + 1\n    return freq"
    }
  },
  "longest-consecutive-sequence": {
    "id": "longest-consecutive-sequence",
    "name": "Longest Consecutive Sequence",
    "category": "hashing",
    "difficulty": "Easy",
    "inputType": "hash",
    "defaultInput": "100 4 200 1 3 2",
    "description": "Find the length of the longest consecutive sequence in an unsorted array in linear time using a Hash Set.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Sequence tracking",
      "Consecutive range grouping"
    ],
    "advantages": [
      "Linear run time avoids O(n log n) sorting"
    ],
    "disadvantages": [
      "High constant factor memory overhead"
    ],
    "realWorldUses": [
      "Data log sequence scanners, range compressors"
    ],
    "code": {
      "python": "def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in nums:\n        if (num - 1) not in num_set:\n            curr_num = num\n            curr_streak = 1\n            while (curr_num + 1) in num_set:\n                curr_num += 1\n                curr_streak += 1\n            longest = max(longest, curr_streak)\n    return longest"
    }
  },
  "pair-sum": {
    "id": "pair-sum",
    "name": "Pair Sum",
    "category": "hashing",
    "difficulty": "Easy",
    "inputType": "hash",
    "defaultInput": "2 7 11 15\n9",
    "description": "Find matching pairs in an array that sum up to a target number using a Hash Map.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Target sum finding",
      "Double entry balancing"
    ],
    "advantages": [
      "Optimal O(n) scan time"
    ],
    "disadvantages": [
      "Extra memory storage needed for Hash Map index registers"
    ],
    "realWorldUses": [
      "Targeted transaction scanners, financial audits"
    ],
    "code": {
      "python": "def pair_sum(arr, target):\n    seen = {}\n    for i, val in enumerate(arr):\n        complement = target - val\n        if complement in seen:\n            return [seen[complement], i]\n        seen[val] = i\n    return None"
    }
  },
  "count-distinct-elements": {
    "id": "count-distinct-elements",
    "name": "Count Distinct Elements",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Count Distinct Elements concept. Visually simulated using the underlying Frequency Count solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(u)",
    "applications": [
      "Histogram representation",
      "Duplicate validation checks",
      "Categorization maps creation"
    ],
    "advantages": [
      "Extremely simple to implement",
      "Single linear pass scan"
    ],
    "disadvantages": [
      "Consumes additional space for distinct element mappings"
    ],
    "realWorldUses": [
      "Query analytics dashboard counters",
      "Token occurrence logs engines"
    ],
    "defaultInput": "2 3 2 4 5 2 3",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "frequency-count",
    "code": {
      "python": "def count_frequency(arr):\n    freq = {}\n    for val in arr:\n        freq[val] = freq.get(val, 0) + 1\n    return freq"
    }
  },
  "subarray-sum-equals-k": {
    "id": "subarray-sum-equals-k",
    "name": "Subarray Sum Equals K",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Subarray Sum Equals K concept. Visually simulated using the underlying Prefix Sum solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations"
    ],
    "advantages": [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation"
    ],
    "disadvantages": [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically"
    ],
    "realWorldUses": [
      "Database column sum indexes",
      "Graphics renderer brightness mapping"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "prefix-sum",
    "code": {
      "python": "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix"
    }
  },
  "cache-implementation": {
    "id": "lru-cache",
    "name": "LRU Cache",
    "category": "hashing",
    "difficulty": "Hard",
    "inputType": "lru-cache",
    "defaultInput": "capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2",
    "description": "O(1) get/put cache using doubly-linked list + hashmap with LRU eviction policy.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(capacity)",
    "applications": [
      "Cache management",
      "Query caching"
    ],
    "advantages": [
      "O(1) all operations"
    ],
    "disadvantages": [
      "Extra pointer overhead"
    ],
    "realWorldUses": [
      "CPU caches",
      "Redis LRU",
      "Browser cache"
    ],
    "code": {
      "python": "class LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = []\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.order.remove(key)\n        self.order.append(key)\n        return self.cache[key]\n    def put(self, key, value):\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            oldest = self.order.pop(0)\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)"
    }
  },
  "preorder-traversal": {
    "id": "preorder-traversal",
    "name": "Preorder Traversal",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Preorder Traversal concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def preorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        visited.append(root.val)\n        preorder(root.left, visited)\n        preorder(root.right, visited)\n    return visited"
    }
  },
  "postorder-traversal": {
    "id": "postorder-traversal",
    "name": "Postorder Traversal",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Postorder Traversal concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def postorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        postorder(root.left, visited)\n        postorder(root.right, visited)\n        visited.append(root.val)\n    return visited"
    }
  },
  "diameter-of-tree": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-diameter",
    "name": "Tree Diameter",
    "description": "Find the longest path between any two leaf nodes in the binary tree.",
    "code": {
      "python": "def tree_diameter(root):\n    ans = 0\n    def depth(node):\n        nonlocal ans\n        if not node: return 0\n        left = depth(node.left)\n        right = depth(node.right)\n        ans = max(ans, left + right)\n        return max(left, right) + 1\n    depth(root)\n    return ans"
    }
  },
  "balanced-tree": {
    "id": "balanced-tree",
    "name": "Balanced Tree",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Balanced Tree concept. Visually simulated using the underlying Binary Tree Height solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Tree balancing factor checks",
      "Measuring layout depths",
      "Tree structure validations"
    ],
    "advantages": [
      "Visits every node exactly once to count height",
      "Low recursive memory size"
    ],
    "disadvantages": [
      "Consumes linear stack frames proportional to tree height"
    ],
    "realWorldUses": [
      "AVL self-balancing tree checks",
      "File path depth indexing generators"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "tree-height",
    "code": {
      "python": "def get_height(root):\n    if not root: return 0\n    return 1 + max(get_height(root.left), get_height(root.right))"
    }
  },
  "symmetric-tree": {
    "id": "symmetric-tree",
    "name": "Symmetric Tree",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Symmetric Tree concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def is_symmetric(root):\n    def mirror(left, right):\n        if not left and not right: return True\n        if not left or not right: return False\n        return (left.val == right.val and\n                mirror(left.left, right.right) and\n                mirror(left.right, right.left))\n    return mirror(root, root) if root else True"
    }
  },
  "left-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-left-view",
    "name": "Tree Left View",
    "description": "Show first node visible from the left at each tree level.",
    "code": {
      "python": "def left_view(root):\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res):\n            res.append(node.val)\n        dfs(node.left, depth + 1)\n        dfs(node.right, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  "right-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-right-view",
    "name": "Tree Right View",
    "description": "Show last node visible from the right at each tree level.",
    "code": {
      "python": "def right_view(root):\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res):\n            res.append(node.val)\n        dfs(node.right, depth + 1)\n        dfs(node.left, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  "top-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-top-view",
    "name": "Tree Top View",
    "description": "Show first visible node per horizontal column (top perspective).",
    "code": {
      "python": "def top_view(root):\n    if not root: return []\n    hd_map = {}\n    queue = [(root, 0)]\n    while queue:\n        node, hd = queue.pop(0)\n        if hd not in hd_map:\n            hd_map[hd] = node.val\n        if node.left: queue.append((node.left, hd - 1))\n        if node.right: queue.append((node.right, hd + 1))\n    return [hd_map[hd] for hd in sorted(hd_map.keys())]"
    }
  },
  "bottom-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-bottom-view",
    "name": "Tree Bottom View",
    "description": "Show last visible node per horizontal column (bottom perspective).",
    "code": {
      "python": "def bottom_view(root):\n    if not root: return []\n    hd_map = {}\n    queue = [(root, 0)]\n    while queue:\n        node, hd = queue.pop(0)\n        hd_map[hd] = node.val\n        if node.left: queue.append((node.left, hd - 1))\n        if node.right: queue.append((node.right, hd + 1))\n    return [hd_map[hd] for hd in sorted(hd_map.keys())]"
    }
  },
  "boundary-traversal": {
    "id": "boundary-traversal",
    "name": "Boundary Traversal",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Boundary Traversal concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def inorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        inorder(root.left, visited)\n        visited.append(root.val)\n        inorder(root.right, visited)\n    return visited"
    }
  },
  "zigzag-traversal": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "zigzag-traversal",
    "name": "Zigzag Level Order Traversal",
    "description": "Level-order traversal alternating left-to-right and right-to-left per level.",
    "code": {
      "python": "def zigzag_traversal(root):\n    if not root: return []\n    res = []\n    queue = [root]\n    left_to_right = True\n    while queue:\n        level_size = len(queue)\n        level_nodes = []\n        for _ in range(level_size):\n            node = queue.pop(0)\n            level_nodes.append(node.val)\n            if node.left: queue.append(node.left)\n            if node.right: queue.append(node.right)\n        if not left_to_right:\n            level_nodes.reverse()\n        res.append(level_nodes)\n        left_to_right = not left_to_right\n    return res"
    }
  },
  "vertical-traversal": {
    "id": "vertical-traversal",
    "name": "Vertical Traversal",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Vertical Traversal concept. Visually simulated using the underlying Level Order Traversal (BFS) solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Shortest path in unweighted graphs",
      "Binary tree serialization",
      "Zigzag traversal"
    ],
    "advantages": [
      "Finds shortest path in unweighted trees",
      "Visits nodes in breadth-first order"
    ],
    "disadvantages": [
      "Requires O(n) queue space for storing nodes at each level"
    ],
    "realWorldUses": [
      "File system directory level explorer",
      "Organizational chart level display"
    ],
    "defaultInput": "4 2 7 1 3 6 9",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "level-order-traversal",
    "code": {
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res"
    }
  },
  "serialize-tree": {
    "id": "serialize-tree",
    "name": "Serialize Tree",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Serialize Tree concept. Visually simulated using the underlying Level Order Traversal (BFS) solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Shortest path in unweighted graphs",
      "Binary tree serialization",
      "Zigzag traversal"
    ],
    "advantages": [
      "Finds shortest path in unweighted trees",
      "Visits nodes in breadth-first order"
    ],
    "disadvantages": [
      "Requires O(n) queue space for storing nodes at each level"
    ],
    "realWorldUses": [
      "File system directory level explorer",
      "Organizational chart level display"
    ],
    "defaultInput": "4 2 7 1 3 6 9",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "level-order-traversal",
    "code": {
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res"
    }
  },
  "deserialize-tree": {
    "id": "deserialize-tree",
    "name": "Deserialize Tree",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Deserialize Tree concept. Visually simulated using the underlying Level Order Traversal (BFS) solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Shortest path in unweighted graphs",
      "Binary tree serialization",
      "Zigzag traversal"
    ],
    "advantages": [
      "Finds shortest path in unweighted trees",
      "Visits nodes in breadth-first order"
    ],
    "disadvantages": [
      "Requires O(n) queue space for storing nodes at each level"
    ],
    "realWorldUses": [
      "File system directory level explorer",
      "Organizational chart level display"
    ],
    "defaultInput": "4 2 7 1 3 6 9",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "level-order-traversal",
    "code": {
      "python": "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res"
    }
  },
  "bst-floor": {
    "id": "bst-floor",
    "name": "Bst Floor",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Bst Floor concept. Visually simulated using the underlying BST Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Fast dynamic item lookup indexes",
      "Real-time key query routers",
      "Range lookup solvers"
    ],
    "advantages": [
      "Extremely efficient query lookup speeds on balanced binary search trees"
    ],
    "disadvantages": [
      "Query time degrades to linear O(n) scan on highly skewed layouts"
    ],
    "realWorldUses": [
      "Database B-Tree indexes layouts",
      "File storage systems tree directories"
    ],
    "defaultInput": "8 3 10 1 6 14",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-search",
    "code": {
      "python": "def search_bst(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search_bst(root.left, target)\n    return search_bst(root.right, target)"
    }
  },
  "bst-ceil": {
    "id": "bst-ceil",
    "name": "Bst Ceil",
    "category": "trees",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Bst Ceil concept. Visually simulated using the underlying BST Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h)",
    "applications": [
      "Fast dynamic item lookup indexes",
      "Real-time key query routers",
      "Range lookup solvers"
    ],
    "advantages": [
      "Extremely efficient query lookup speeds on balanced binary search trees"
    ],
    "disadvantages": [
      "Query time degrades to linear O(n) scan on highly skewed layouts"
    ],
    "realWorldUses": [
      "Database B-Tree indexes layouts",
      "File storage systems tree directories"
    ],
    "defaultInput": "8 3 10 1 6 14",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-search",
    "code": {
      "python": "def search_bst(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search_bst(root.left, target)\n    return search_bst(root.right, target)"
    }
  },
  "validate-bst": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "validate-bst",
    "name": "Validate BST",
    "description": "Verify BST property by checking in-order traversal is strictly increasing.",
    "code": {
      "python": "def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):\n    if not root: return True\n    if not (min_val < root.val < max_val): return False\n    return is_valid_bst(root.left, min_val, root.val) and is_valid_bst(root.right, root.val, max_val)"
    }
  },
  "recover-bst": {
    "id": "recover-bst",
    "name": "Recover Bst",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Recover Bst concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def inorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        inorder(root.left, visited)\n        visited.append(root.val)\n        inorder(root.right, visited)\n    return visited"
    }
  },
  "kth-smallest": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "5 3 7 2 4 6 8",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "kth-smallest",
    "name": "Kth Smallest in BST",
    "description": "Find kth smallest element in BST using in-order traversal with a counter.",
    "code": {
      "python": "def kth_smallest(root, k):\n    res = []\n    def inorder(node):\n        if not node or len(res) >= k: return\n        inorder(node.left)\n        res.append(node.val)\n        inorder(node.right)\n    inorder(root)\n    return res[k - 1]"
    }
  },
  "kth-largest": {
    "id": "kth-largest",
    "name": "Kth Largest",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Kth Largest concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def inorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        inorder(root.left, visited)\n        visited.append(root.val)\n        inorder(root.right, visited)\n    return visited"
    }
  },
  "avl-rotations": {
    "id": "avl-rotations",
    "name": "Avl Rotations",
    "category": "trees",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Avl Rotations concept. Visually simulated using the underlying AVL Tree Insert solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Databases requiring guaranteed O(log n)",
      "Memory allocators",
      "Sets and Maps"
    ],
    "advantages": [
      "Guaranteed O(log n) for all operations"
    ],
    "disadvantages": [
      "More complex rotations than simple BST",
      "Higher constant factor overhead"
    ],
    "realWorldUses": [
      "Linux kernel's internal memory mapping",
      "Java TreeMap uses Red-Black (similar)"
    ],
    "defaultInput": "30 20 40 10 25 35 50",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "avl-insert",
    "code": {
      "python": "def insert(root, val):\n    if not root: return Node(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    root.h = 1 + max(height(root.left), height(root.right))\n    root.bf = height(root.left) - height(root.right)\n    return balance(root)"
    }
  },
  "priority-queue-heap": {
    "id": "priority-queue-heap",
    "name": "Priority Queue Heap",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Priority Queue Heap concept. Visually simulated using the underlying Min Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "min-heap",
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "kth-largest-element": {
    "id": "kth-largest-element",
    "name": "Kth Largest Element",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Kth Largest Element concept. Visually simulated using the underlying Min Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "min-heap",
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "kth-smallest-element": {
    "id": "kth-smallest-element",
    "name": "Kth Smallest Element",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Kth Smallest Element concept. Visually simulated using the underlying Max Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Heap sort sorting algorithm",
      "Priority queues where higher values indicate higher priority"
    ],
    "advantages": [
      "O(1) lookup for maximum value element",
      "O(log n) standard insert and extract operations"
    ],
    "disadvantages": [
      "Finding arbitrary items takes O(n) scan",
      "Not stable index layout"
    ],
    "realWorldUses": [
      "Job priority queuing systems",
      "Bandwidth management systems"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "max-heap",
    "code": {
      "python": "class MaxHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val):\n        self.heap.append(val)\n        self.sift_up(len(self.heap) - 1)"
    }
  },
  "merge-k-sorted-lists": {
    "id": "merge-k-sorted-lists",
    "name": "Merge K Sorted Lists",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Merge K Sorted Lists concept. Visually simulated using the underlying Min Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "min-heap",
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "median-finder": {
    "id": "median-finder",
    "name": "Median Finder",
    "category": "heaps",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Median Finder concept. Visually simulated using the underlying Min Heap Operations solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "inputType": "heap",
    "defaultInput": "15 10 20 5 30 25",
    "applications": [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization"
    ],
    "advantages": [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations"
    ],
    "disadvantages": [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage"
    ],
    "realWorldUses": [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines"
    ],
    "isRoadmapAlias": true,
    "counterpartId": "min-heap",
    "code": {
      "python": "import heapq\nclass MinHeap:\n    def __init__(self): self.heap = []\n    def insert(self, val): heapq.heappush(self.heap, val)"
    }
  },
  "trie-insert": {
    "id": "trie-insert",
    "name": "Trie Insert",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Insert concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-delete": {
    "id": "trie-delete",
    "name": "Trie Delete",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Delete concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-prefix-search": {
    "id": "trie-prefix-search",
    "name": "Trie Prefix Search",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Prefix Search concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-auto-complete": {
    "id": "trie-auto-complete",
    "name": "Trie Auto Complete",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Auto Complete concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-spell-checker": {
    "id": "trie-spell-checker",
    "name": "Trie Spell Checker",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Spell Checker concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-dictionary": {
    "id": "trie-dictionary",
    "name": "Trie Dictionary",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Dictionary concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "trie-xor-problems": {
    "id": "trie-xor-problems",
    "name": "Trie Xor Problems",
    "category": "advanced-ds",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Trie Xor Problems concept. Visually simulated using the underlying Trie Auto-Complete solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(a * k)",
    "applications": [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches"
    ],
    "advantages": [
      "Extremely fast key lookup times matching key character length k"
    ],
    "disadvantages": [
      "Consumes high memory overhead to store character child pointers"
    ],
    "realWorldUses": [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers"
    ],
    "defaultInput": "cat car dog cap",
    "inputType": "strings",
    "isRoadmapAlias": true,
    "counterpartId": "trie-search",
    "code": {
      "python": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True"
    }
  },
  "build-segment-tree": {
    "id": "build-segment-tree",
    "name": "Build Segment Tree",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Build Segment Tree concept. Visually simulated using the underlying Segment Tree Range Query solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "segment-tree",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "range-sum-query": {
    "id": "range-sum-query",
    "name": "Range Sum Query",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Range Sum Query concept. Visually simulated using the underlying Segment Tree Range Query solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "segment-tree",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "range-minimum-query": {
    "id": "range-minimum-query",
    "name": "Range Minimum Query",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Range Minimum Query concept. Visually simulated using the underlying Segment Tree Range Query solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "segment-tree",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "range-maximum-query": {
    "id": "range-maximum-query",
    "name": "Range Maximum Query",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Range Maximum Query concept. Visually simulated using the underlying Segment Tree Range Query solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "segment-tree",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "lazy-propagation": {
    "id": "lazy-propagation",
    "name": "Lazy Propagation",
    "category": "advanced-ds",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Lazy Propagation concept. Visually simulated using the underlying Segment Tree Range Query solver.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking"
    ],
    "advantages": [
      "Handles dynamic array updates and queries in O(log n) time"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space to build the tree node array"
    ],
    "realWorldUses": [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates"
    ],
    "defaultInput": "1 3 5 7 9 11",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "segment-tree",
    "code": {
      "python": "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]"
    }
  },
  "adjacency-matrix-repr": {
    "id": "adjacency-matrix-repr",
    "name": "Adjacency Matrix Repr",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Adjacency Matrix Repr concept. Visually simulated using the underlying BFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Finding shortest paths in unweighted graphs",
      "Social network friends recommendations levels checks",
      "GPS maps directions searches"
    ],
    "advantages": [
      "Guarantees locating the absolute closest/shortest node paths first"
    ],
    "disadvantages": [
      "Requires significant memory space to store visited queue vertices"
    ],
    "realWorldUses": [
      "Web search crawlers indexing linkages",
      "Facebook Graph search level queries solvers"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "bfs",
    "code": {
      "python": "from collections import deque\ndef bfs(start, adj):\n    visited, q = {start}, deque([start])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n    return res"
    }
  },
  "adjacency-list-repr": {
    "id": "adjacency-list-repr",
    "name": "Adjacency List Repr",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Adjacency List Repr concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "connected-components": {
    "id": "connected-components",
    "name": "Connected Components",
    "category": "graphs",
    "difficulty": "Medium",
    "inputType": "graph",
    "defaultInput": "0 1\n1 2\n3 4",
    "description": "Count and identify all connected components using DFS.",
    "timeComplexity": {
      "best": "O(V+E)",
      "average": "O(V+E)",
      "worst": "O(V+E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Network analysis",
      "Image segmentation"
    ],
    "advantages": [
      "Linear time DFS"
    ],
    "disadvantages": [
      "Requires full scan"
    ],
    "realWorldUses": [
      "Social network clusters",
      "Connected regions"
    ],
    "code": {
      "python": "def connected_components(n, edges):\n    adj = {i: [] for i in range(n)}\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n    visited = set()\n    count = 0\n    def dfs(node):\n        for neighbor in adj[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                dfs(neighbor)\n    for i in range(n):\n        if i not in visited:\n            visited.add(i)\n            dfs(i)\n            count += 1\n    return count"
    }
  },
  "cycle-detection-graph": {
    "id": "cycle-detection-graph",
    "name": "Cycle Detection Graph",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Cycle Detection Graph concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "bipartite-graph": {
    "id": "bipartite-graph",
    "name": "Bipartite Check",
    "category": "graphs",
    "difficulty": "Medium",
    "inputType": "graph",
    "defaultInput": "0 1\n1 2\n2 3\n3 0",
    "description": "2-color graph with BFS. If no two adjacent nodes share same color, it's bipartite.",
    "timeComplexity": {
      "best": "O(V+E)",
      "average": "O(V+E)",
      "worst": "O(V+E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Matching",
      "Scheduling"
    ],
    "advantages": [
      "Simple BFS coloring"
    ],
    "disadvantages": [
      "Undirected graphs only"
    ],
    "realWorldUses": [
      "Job matching",
      "Social analysis"
    ],
    "code": {
      "python": "def is_bipartite(n, adj):\n    color = {}\n    for i in range(n):\n        if i not in color:\n            color[i] = 0\n            queue = [i]\n            while queue:\n                curr = queue.pop(0)\n                for neighbor in adj[curr]:\n                    if neighbor not in color:\n                        color[neighbor] = 1 - color[curr]\n                        queue.append(neighbor)\n                    elif color[neighbor] == color[curr]:\n                        return False\n    return True"
    }
  },
  "strongly-connected-components": {
    "id": "strongly-connected-components",
    "name": "Strongly Connected Components",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Strongly Connected Components concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "bridges-in-graph": {
    "id": "bridges-in-graph",
    "name": "Bridges In Graph",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Bridges In Graph concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "articulation-points": {
    "id": "articulation-points",
    "name": "Articulation Points",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Articulation Points concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "euler-path": {
    "id": "euler-path",
    "name": "Euler Path",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Euler Path concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "hamiltonian-path": {
    "id": "hamiltonian-path",
    "name": "Hamiltonian Path",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Hamiltonian Path concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "johnson-algorithm": {
    "id": "johnson-algorithm",
    "name": "Johnson Algorithm",
    "category": "advanced-algo",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Johnson Algorithm concept. Visually simulated using the underlying Floyd-Warshall Algorithm solver.",
    "timeComplexity": {
      "best": "O(V³)",
      "average": "O(V³)",
      "worst": "O(V³)"
    },
    "spaceComplexity": "O(V²)",
    "applications": [
      "All-pairs shortest paths",
      "Network routing tables",
      "Transitive closure"
    ],
    "advantages": [
      "Simple to implement; handles negative weights (no negative cycles)"
    ],
    "disadvantages": [
      "O(V³) time is expensive for large graphs"
    ],
    "realWorldUses": [
      "Network routing table computation",
      "Road map distance precomputation"
    ],
    "defaultInput": "0 3 INF 7\n8 0 2 INF\n5 INF 0 1\n2 INF INF 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "floyd-warshall",
    "code": {
      "python": "def floyd_warshall(dist):\n    V=len(dist)\n    for k in range(V):\n        for i in range(V):\n            for j in range(V):\n                if dist[i][k]+dist[k][j] < dist[i][j]:\n                    dist[i][j]=dist[i][k]+dist[k][j]\n    return dist"
    }
  },
  "prims-algorithm": {
    "id": "prims-algorithm",
    "name": "Prim's Algorithm",
    "category": "graphs",
    "difficulty": "Hard",
    "inputType": "graph",
    "defaultInput": "0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5",
    "description": "MST by greedily extending from a start node with minimum-weight edges.",
    "timeComplexity": {
      "best": "O(E log V)",
      "average": "O(E log V)",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Network span",
      "Road maps"
    ],
    "advantages": [
      "Good for dense graphs"
    ],
    "disadvantages": [
      "Needs priority queue"
    ],
    "realWorldUses": [
      "Telecom networks",
      "Water pipes"
    ],
    "code": {
      "python": "import heapq\ndef prims(n, adj):\n    mst = []\n    visited = set([0])\n    edges = [(cost, 0, to) for to, cost in adj[0]]\n    heapq.heapify(edges)\n    while edges and len(visited) < n:\n        cost, u, v = heapq.heappop(edges)\n        if v not in visited:\n            visited.add(v)\n            mst.append((u, v, cost))\n            for neighbor, weight in adj[v]:\n                if neighbor not in visited:\n                    heapq.heappush(edges, (weight, v, neighbor))\n    return mst"
    }
  },
  "kruskals-algorithm": {
    "id": "kruskals-algorithm",
    "name": "Kruskal's Algorithm",
    "category": "graphs",
    "difficulty": "Hard",
    "inputType": "graph",
    "defaultInput": "0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5",
    "description": "Minimum Spanning Tree: sort edges by weight, use Union-Find to avoid cycles.",
    "timeComplexity": {
      "best": "O(E log E)",
      "average": "O(E log E)",
      "worst": "O(E log E)"
    },
    "spaceComplexity": "O(V+E)",
    "applications": [
      "Network design",
      "Cluster analysis"
    ],
    "advantages": [
      "Simple edge-based MST"
    ],
    "disadvantages": [
      "Edge sorting required"
    ],
    "realWorldUses": [
      "Cable/road design",
      "Image segmentation"
    ],
    "code": {
      "python": "def kruskals(n, edges):\n    parent = list(range(n))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    def union(i, j):\n        root_i = find(i)\n        root_j = find(j)\n        if root_i != root_j:\n            parent[root_i] = root_j\n            return True\n        return False\n    edges.sort(key=lambda x: x[2])\n    mst = []\n    for u, v, cost in edges:\n        if union(u, v):\n            mst.append((u, v, cost))\n    return mst"
    }
  },
  "union-find-make-set": {
    "id": "union-find-make-set",
    "name": "Union Find Make Set",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Union Find Make Set concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "union-find-find": {
    "id": "union-find-find",
    "name": "Union Find Find",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Union Find Find concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "union-find-union": {
    "id": "union-find-union",
    "name": "Union Find Union",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Union Find Union concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "union-find-path-compression": {
    "id": "union-find-path-compression",
    "name": "Union Find Path Compression",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Union Find Path Compression concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "union-find-union-by-rank": {
    "id": "union-find-union-by-rank",
    "name": "Union Find Union By Rank",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Union Find Union By Rank concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "tarjan-algorithm": {
    "id": "tarjan-algorithm",
    "name": "Tarjan Algorithm",
    "category": "graphs",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Tarjan Algorithm concept. Visually simulated using the underlying Topological Sort solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Package build dependencies sequencing",
      "Project tasks planning schedules",
      "Course prerequisite sequencing"
    ],
    "advantages": [
      "Detects cyclic dependency paths immediately",
      "Linear execution latency"
    ],
    "disadvantages": [
      "Only applicable on Directed Acyclic Graphs (fails if graph contains cycles)"
    ],
    "realWorldUses": [
      "NPM/Maven package managers dependency resolution engines",
      "Make/CMake compiler tasks generators"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 3\n3 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "topological-sort",
    "code": {
      "python": "def topological_sort(num_nodes, adj):\n    visited, stack = set(), []\n    def dfs(curr):\n        visited.add(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                dfs(neighbor)\n        stack.append(curr)\n    for i in range(num_nodes):\n        if i not in visited:\n            dfs(i)\n    return stack[::-1]"
    }
  },
  "kosaraju-algorithm": {
    "id": "kosaraju-algorithm",
    "name": "Kosaraju Algorithm",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Kosaraju Algorithm concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "recursion-factorial": {
    "id": "recursion-factorial",
    "name": "Recursion Factorial",
    "category": "recursion",
    "difficulty": "Easy",
    "inputType": "recursion",
    "defaultInput": "4",
    "description": "Computes the factorial of a number using direct linear recursion recursion steps.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Combinatorics calculations",
      "Functional stack training"
    ],
    "advantages": [
      "Simple linear recursive recurrence relation"
    ],
    "disadvantages": [
      "Prone to stack overflow for large values of n"
    ],
    "realWorldUses": [
      "Permutations and combinations calculators"
    ],
    "code": {
      "python": "def factorial(n: int) -> int:\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)"
    }
  },
  "recursion-power-function": {
    "id": "recursion-power-function",
    "name": "Recursion Power Function",
    "category": "mathematical",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Recursion Power Function concept. Visually simulated using the underlying Fast Exponentiation solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Modular exponentiation in cryptography",
      "Matrix exponentiation",
      "Fibonacci in O(log n)"
    ],
    "advantages": [
      "O(log n) vs naive O(n) multiplication loops"
    ],
    "disadvantages": [
      "More complex implementation than naive power loop"
    ],
    "realWorldUses": [
      "RSA cryptography key operations",
      "Diffie-Hellman key exchange protocols"
    ],
    "defaultInput": "2 10",
    "inputType": "math-gcd",
    "isRoadmapAlias": true,
    "counterpartId": "fast-exponentiation",
    "code": {
      "python": "def fast_pow(base, exp):\n    result = 1\n    while exp > 0:\n        if exp % 2 == 1: result *= base\n        base *= base\n        exp //= 2\n    return result"
    }
  },
  "recursion-binary-search": {
    "id": "recursion-binary-search",
    "name": "Recursion Binary Search",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Recursion Binary Search concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "recursion-tree-traversal": {
    "id": "recursion-tree-traversal",
    "name": "Recursion Tree Traversal",
    "category": "trees",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Recursion Tree Traversal concept. Visually simulated using the underlying Binary Search Tree Traversals solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(h) where h is tree height",
    "applications": [
      "Parsing expression trees",
      "Listing directory systems"
    ],
    "advantages": [
      "Recursively structured, guarantees parsing all node trees"
    ],
    "disadvantages": [
      "Can blow up call stack for skewed trees (unbalanced)"
    ],
    "realWorldUses": [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines"
    ],
    "defaultInput": "10 5 15 3 7 12 18",
    "inputType": "tree",
    "isRoadmapAlias": true,
    "counterpartId": "bst-traversal",
    "code": {
      "python": "def inorder(root, visited=None):\n    if visited is None: visited = []\n    if root:\n        inorder(root.left, visited)\n        visited.append(root.val)\n        inorder(root.right, visited)\n    return visited"
    }
  },
  "recursion-merge-sort": {
    "id": "recursion-merge-sort",
    "name": "Recursion Merge Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Recursion Merge Sort concept. Visually simulated using the underlying Merge Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "External sorting of files on secondary storage",
      "Stable sorting requirements",
      "E-commerce lists"
    ],
    "advantages": [
      "Guaranteed O(n log n) runtime",
      "Stable sort",
      "Highly parallelizable"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space",
      "Slower than quicksort for in-memory systems"
    ],
    "realWorldUses": [
      "Linux kernel file merges",
      "Git merge actions",
      "Default stable sorting in Python"
    ],
    "defaultInput": "9 2 7 1 6 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "merge-sort",
    "code": {
      "python": "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    res = []\n    l = r = 0\n    while l < len(left) and r < len(right):\n        if left[l] < right[r]:\n            res.append(left[l])\n            l += 1\n        else:\n            res.append(right[r])\n            r += 1\n    res.extend(left[l:])\n    res.extend(right[r:])\n    return res"
    }
  },
  "recursion-quick-sort": {
    "id": "recursion-quick-sort",
    "name": "Recursion Quick Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Recursion Quick Sort concept. Visually simulated using the underlying Quick Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Systems programming libraries",
      "General-purpose sorting frameworks",
      "Numerical computations"
    ],
    "advantages": [
      "Cache friendly and highly optimized in practice",
      "No auxiliary memory storage required (in-place)",
      "Extremely fast average case"
    ],
    "disadvantages": [
      "Worst case time complexity is O(n²)",
      "Unstable sorting algorithm"
    ],
    "realWorldUses": [
      "Standard C library qsort() implementation",
      "JavaScript V8 engine array sorting for primitive values"
    ],
    "defaultInput": "6 2 9 4 1 8",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "quick-sort",
    "code": {
      "python": "def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1"
    }
  },
  "dp-memoization-concept": {
    "id": "dp-memoization-concept",
    "name": "Dp Memoization Concept",
    "category": "dynamic-programming",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Dp Memoization Concept concept. Visually simulated using the underlying Climbing Stairs DP solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n) or O(1) state variables",
    "applications": [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases"
    ],
    "advantages": [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory"
    ],
    "disadvantages": [
      "Takes additional memory unless state pointers optimized to O(1)"
    ],
    "realWorldUses": [
      "Grid paths traversal routes counts"
    ],
    "defaultInput": "5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "climbing-stairs",
    "code": {
      "python": "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]"
    }
  },
  "dp-tabulation-concept": {
    "id": "dp-tabulation-concept",
    "name": "Dp Tabulation Concept",
    "category": "dynamic-programming",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Dp Tabulation Concept concept. Visually simulated using the underlying Climbing Stairs DP solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n) or O(1) state variables",
    "applications": [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases"
    ],
    "advantages": [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory"
    ],
    "disadvantages": [
      "Takes additional memory unless state pointers optimized to O(1)"
    ],
    "realWorldUses": [
      "Grid paths traversal routes counts"
    ],
    "defaultInput": "5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "climbing-stairs",
    "code": {
      "python": "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]"
    }
  },
  "dp-space-optimization": {
    "id": "dp-space-optimization",
    "name": "Dp Space Optimization",
    "category": "dynamic-programming",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Dp Space Optimization concept. Visually simulated using the underlying Climbing Stairs DP solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n) or O(1) state variables",
    "applications": [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases"
    ],
    "advantages": [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory"
    ],
    "disadvantages": [
      "Takes additional memory unless state pointers optimized to O(1)"
    ],
    "realWorldUses": [
      "Grid paths traversal routes counts"
    ],
    "defaultInput": "5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "climbing-stairs",
    "code": {
      "python": "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]"
    }
  },
  "dp-fibonacci": {
    "id": "dp-fibonacci",
    "name": "Dp Fibonacci",
    "category": "dynamic-programming",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Dp Fibonacci concept. Visually simulated using the underlying Climbing Stairs DP solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n) or O(1) state variables",
    "applications": [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases"
    ],
    "advantages": [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory"
    ],
    "disadvantages": [
      "Takes additional memory unless state pointers optimized to O(1)"
    ],
    "realWorldUses": [
      "Grid paths traversal routes counts"
    ],
    "defaultInput": "5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "climbing-stairs",
    "code": {
      "python": "def climb_stairs(n):\n    if n <= 2: return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]"
    }
  },
  "dp-unbounded-knapsack": {
    "id": "dp-unbounded-knapsack",
    "name": "Dp Unbounded Knapsack",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dp Unbounded Knapsack concept. Visually simulated using the underlying 0/1 Knapsack (DP) solver.",
    "timeComplexity": {
      "best": "O(N * W)",
      "average": "O(N * W)",
      "worst": "O(N * W)"
    },
    "spaceComplexity": "O(N * W)",
    "applications": [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections"
    ],
    "advantages": [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops"
    ],
    "disadvantages": [
      "Dynamic memory space scales with knapsack capacity W"
    ],
    "realWorldUses": [
      "Server load distributors",
      "Cargo shipping container loading coordinators"
    ],
    "defaultInput": "2 3 4 5\n3 4 5 6\n5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "knapsack-dp",
    "code": {
      "python": "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]"
    }
  },
  "dp-rod-cutting": {
    "id": "dp-rod-cutting",
    "name": "Dp Rod Cutting",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dp Rod Cutting concept. Visually simulated using the underlying 0/1 Knapsack (DP) solver.",
    "timeComplexity": {
      "best": "O(N * W)",
      "average": "O(N * W)",
      "worst": "O(N * W)"
    },
    "spaceComplexity": "O(N * W)",
    "applications": [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections"
    ],
    "advantages": [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops"
    ],
    "disadvantages": [
      "Dynamic memory space scales with knapsack capacity W"
    ],
    "realWorldUses": [
      "Server load distributors",
      "Cargo shipping container loading coordinators"
    ],
    "defaultInput": "2 3 4 5\n3 4 5 6\n5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "knapsack-dp",
    "code": {
      "python": "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]"
    }
  },
  "dp-partition-equal-subset-sum": {
    "id": "dp-partition-equal-subset-sum",
    "name": "Dp Partition Equal Subset Sum",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dp Partition Equal Subset Sum concept. Visually simulated using the underlying 0/1 Knapsack (DP) solver.",
    "timeComplexity": {
      "best": "O(N * W)",
      "average": "O(N * W)",
      "worst": "O(N * W)"
    },
    "spaceComplexity": "O(N * W)",
    "applications": [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections"
    ],
    "advantages": [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops"
    ],
    "disadvantages": [
      "Dynamic memory space scales with knapsack capacity W"
    ],
    "realWorldUses": [
      "Server load distributors",
      "Cargo shipping container loading coordinators"
    ],
    "defaultInput": "2 3 4 5\n3 4 5 6\n5",
    "inputType": "dp",
    "isRoadmapAlias": true,
    "counterpartId": "knapsack-dp",
    "code": {
      "python": "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]"
    }
  },
  "job-scheduling": {
    "id": "job-scheduling",
    "name": "Job Scheduling",
    "category": "greedy",
    "difficulty": "Medium",
    "inputType": "greedy-interval",
    "defaultInput": "J1 2 100\nJ2 1 19\nJ3 2 27\nJ4 1 25\nJ5 3 15",
    "description": "Maximize profit by assigning jobs to latest available slots before deadlines.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Task scheduling"
    ],
    "advantages": [
      "Greedy is optimal"
    ],
    "disadvantages": [
      "Deadline knowledge required"
    ],
    "realWorldUses": [
      "CPU scheduling",
      "Project management"
    ],
    "code": {
      "python": "def job_scheduling(jobs):\n    jobs.sort(key=lambda x: x[2], reverse=True)\n    max_deadline = max(x[1] for x in jobs)\n    slots = [-1] * (max_deadline + 1)\n    count, total_profit = 0, 0\n    for job in jobs:\n        for j in range(job[1], 0, -1):\n            if slots[j] == -1:\n                slots[j] = job[0]\n                count += 1\n                total_profit += job[2]\n                break\n    return count, total_profit"
    }
  },
  "minimum-platforms": {
    "id": "minimum-platforms",
    "name": "Minimum Platforms",
    "category": "greedy",
    "difficulty": "Medium",
    "inputType": "greedy-interval",
    "defaultInput": "arrivals: 900 940 950 1100 1500 1800\ndepartures: 910 1200 1120 1130 1900 2000",
    "description": "Minimum train platforms so no train waits: sort arrivals/departures and sweep.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Station management"
    ],
    "advantages": [
      "Sorting + sweep is optimal"
    ],
    "disadvantages": [
      "Full schedule required"
    ],
    "realWorldUses": [
      "Railway management",
      "Airport gates"
    ],
    "code": {
      "python": "def find_platform(arr, dep):\n    arr.sort()\n    dep.sort()\n    plat_needed = 1\n    result = 1\n    i, j = 1, 0\n    while i < len(arr) and j < len(dep):\n        if arr[i] <= dep[j]:\n            plat_needed += 1\n            i += 1\n        else:\n            plat_needed -= 1\n            j += 1\n        result = max(result, plat_needed)\n    return result"
    }
  },
  "gas-station": {
    "id": "gas-station",
    "name": "Gas Station",
    "category": "greedy",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Gas Station concept. Visually simulated using the underlying Activity Selection solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Interval scheduling",
      "Meeting room bookings",
      "Project scheduling"
    ],
    "advantages": [
      "Simple to implement",
      "Optimal solution guaranteed by sorting finish times"
    ],
    "disadvantages": [
      "Requires sorting of finish times beforehand"
    ],
    "realWorldUses": [
      "Operating System process scheduler",
      "Conference room reserve modules"
    ],
    "defaultInput": "1-3 2-4 3-6 5-7 8-9",
    "inputType": "greedy-interval",
    "isRoadmapAlias": true,
    "counterpartId": "activity-selection",
    "code": {
      "python": "def activity_selection(activities):\n    activities.sort(key=lambda x: x['finish'])\n    selected = [activities[0]]\n    last_finish = activities[0]['finish']\n    for act in activities[1:]:\n        if act['start'] >= last_finish:\n            selected.append(act)\n            last_finish = act['finish']\n    return selected"
    }
  },
  "jump-game": {
    "id": "jump-game",
    "name": "Jump Game",
    "category": "greedy",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "2 3 1 1 4",
    "description": "Can we reach the last index? arr[i] = max jump. Track global max reachable index.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Reachability problems"
    ],
    "advantages": [
      "O(n) greedy"
    ],
    "disadvantages": [
      "No optimal path info"
    ],
    "realWorldUses": [
      "Game AI",
      "Network reachability"
    ],
    "code": {
      "python": "def can_jump(nums):\n    max_reach = 0\n    for i, jump in enumerate(nums):\n        if i > max_reach: return False\n        max_reach = max(max_reach, i + jump)\n    return True"
    }
  },
  "candy-distribution": {
    "id": "candy-distribution",
    "name": "Candy Distribution",
    "category": "greedy",
    "difficulty": "Hard",
    "inputType": "array",
    "defaultInput": "1 0 2",
    "description": "Minimum candies so each child has ≥1 and more than neighbors with lower ratings (two-pass greedy).",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Fair distribution"
    ],
    "advantages": [
      "Two-pass is optimal"
    ],
    "disadvantages": [
      "Two passes required"
    ],
    "realWorldUses": [
      "Reward systems",
      "Grade distribution"
    ],
    "code": {
      "python": "def candy(ratings):\n    n = len(ratings)\n    candies = [1] * n\n    for i in range(1, n):\n        if ratings[i] > ratings[i-1]:\n            candies[i] = candies[i-1] + 1\n    for i in range(n - 2, -1, -1):\n        if ratings[i] > ratings[i+1]:\n            candies[i] = max(candies[i], candies[i+1] + 1)\n    return sum(candies)"
    }
  },
  "interpolation-search": {
    "id": "interpolation-search",
    "name": "Interpolation Search",
    "category": "searching",
    "difficulty": "Medium",
    "inputType": "search",
    "defaultInput": "10 20 30 40 50 60 70",
    "description": "Estimate probe position by value distribution: pos = lo + (target-arr[lo])*(hi-lo)/(arr[hi]-arr[lo]).",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Uniformly distributed sorted data"
    ],
    "advantages": [
      "O(log log n) for uniform data"
    ],
    "disadvantages": [
      "O(n) worst case"
    ],
    "realWorldUses": [
      "Phone book",
      "Dictionary lookup"
    ],
    "code": {
      "python": "def interpolation_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high and target >= arr[low] and target <= arr[high]:\n        if low == high:\n            if arr[low] == target: return low\n            return -1\n        pos = low + int(((float(high - low) / (arr[high] - arr[low])) * (target - arr[low])))\n        if arr[pos] == target: return pos\n        if arr[pos] < target: low = pos + 1\n        else: high = pos - 1\n    return -1"
    }
  },
  "exponential-search": {
    "id": "exponential-search",
    "name": "Exponential Search",
    "category": "searching",
    "difficulty": "Medium",
    "inputType": "search",
    "defaultInput": "1 3 5 7 9 11 13 15 17",
    "description": "Double bound to find range, then binary search within [bound/2, min(bound,n-1)].",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Unbounded sorted arrays"
    ],
    "advantages": [
      "Faster than binary for small indices"
    ],
    "disadvantages": [
      "Extra doubling phase"
    ],
    "realWorldUses": [
      "DB engines",
      "Infinite sorted sequences"
    ],
    "code": {
      "python": "def exponential_search(arr, target):\n    n = len(arr)\n    if n == 0: return -1\n    if arr[0] == target: return 0\n    i = 1\n    while i < n and arr[i] <= target:\n        i = i * 2\n    low, high = i // 2, min(i, n - 1)\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1"
    }
  },
  "binary-search-on-answer": {
    "id": "binary-search-on-answer",
    "name": "Binary Search On Answer",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Binary Search On Answer concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "search-in-rotated-sorted-array": {
    "id": "search-in-rotated-sorted-array",
    "name": "Search In Rotated Sorted Array",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Search In Rotated Sorted Array concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "peak-element": {
    "id": "peak-element",
    "name": "Peak Element",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Peak Element concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "first-and-last-occurrence": {
    "id": "first-and-last-occurrence",
    "name": "First And Last Occurrence",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the First And Last Occurrence concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "bucket-sort": {
    "id": "bucket-sort",
    "name": "Bucket Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "29 25 3 49 9 37 21 43",
    "description": "Distribute into buckets, sort each, concatenate. O(n) for uniform distribution.",
    "timeComplexity": {
      "best": "O(n+k)",
      "average": "O(n+k)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n+k)",
    "applications": [
      "Float sorting",
      "Histogram-based"
    ],
    "advantages": [
      "O(n) for uniform data"
    ],
    "disadvantages": [
      "Range required"
    ],
    "realWorldUses": [
      "External sorting",
      "Histogram equalization"
    ],
    "code": {
      "python": "def bucket_sort(arr):\n    if len(arr) == 0: return arr\n    bucket_count = len(arr)\n    max_val, min_val = max(arr), min(arr)\n    bucket_range = (max_val - min_val) / bucket_count\n    buckets = [[] for _ in range(bucket_count)]\n    for num in arr:\n        diff = num - min_val\n        idx = int(diff / bucket_range) if bucket_range else 0\n        if idx >= bucket_count: idx = bucket_count - 1\n        buckets[idx].append(num)\n    for b in buckets: b.sort()\n    res = []\n    for b in buckets: res.extend(b)\n    return res"
    }
  },
  "tim-sort": {
    "id": "tim-sort",
    "name": "Tim Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Tim Sort concept. Visually simulated using the underlying Merge Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "External sorting of files on secondary storage",
      "Stable sorting requirements",
      "E-commerce lists"
    ],
    "advantages": [
      "Guaranteed O(n log n) runtime",
      "Stable sort",
      "Highly parallelizable"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space",
      "Slower than quicksort for in-memory systems"
    ],
    "realWorldUses": [
      "Linux kernel file merges",
      "Git merge actions",
      "Default stable sorting in Python"
    ],
    "defaultInput": "9 2 7 1 6 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "merge-sort",
    "code": {
      "python": "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    res = []\n    l = r = 0\n    while l < len(left) and r < len(right):\n        if left[l] < right[r]:\n            res.append(left[l])\n            l += 1\n        else:\n            res.append(right[r])\n            r += 1\n    res.extend(left[l:])\n    res.extend(right[r:])\n    return res"
    }
  },
  "bitmask-xor": {
    "id": "bitmask-xor",
    "name": "Bitmask Xor",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Bitmask Xor concept. Visually simulated using the underlying XOR Operations solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Single number detection",
      "Swap without temp variable",
      "Checksum generation"
    ],
    "advantages": [
      "Extremely fast single-instruction CPU operation"
    ],
    "disadvantages": [
      "Limited to specific use cases based on XOR properties"
    ],
    "realWorldUses": [
      "Network data checksums",
      "Cryptographic XOR cipher operations"
    ],
    "defaultInput": "29 15",
    "inputType": "math-gcd",
    "isRoadmapAlias": false,
    "code": {
      "python": "def bitmask_xor(n, mask):\n    return n ^ mask"
    }
  },
  "bitmask-and": {
    "id": "bitmask-and",
    "name": "Bitmask And",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Visualizes the bitwise AND operation (n & mask) to selectively check or clear bits.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Checking parity (n & 1)",
      "Bitmask filtering",
      "Clearing specific bits"
    ],
    "advantages": [
      "Constant-time CPU operation"
    ],
    "disadvantages": [
      "None"
    ],
    "realWorldUses": [
      "IP address masking (CIDR subnet masks)",
      "Flags verification in system settings"
    ],
    "defaultInput": "29 15",
    "inputType": "math-gcd",
    "isRoadmapAlias": false,
    "code": {
      "python": "def bitmask_and(n, mask):\n    return n & mask"
    }
  },
  "bitmask-or": {
    "id": "bitmask-or",
    "name": "Bitmask Or",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Visualizes the bitwise OR operation (n | mask) to selectively set specific bits.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Setting multiple flag registers",
      "Building composite bitmaps"
    ],
    "advantages": [
      "Single-instruction CPU operation"
    ],
    "disadvantages": [
      "None"
    ],
    "realWorldUses": [
      "Setting Unix file permissions flags",
      "Graphics color channel merging"
    ],
    "defaultInput": "29 15",
    "inputType": "math-gcd",
    "isRoadmapAlias": false,
    "code": {
      "python": "def bitmask_or(n, mask):\n    return n | mask"
    }
  },
  "bitmask-not": {
    "id": "bitmask-not",
    "name": "Bitmask Not",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Visualizes the bitwise NOT operation (~n) which inverts all bits in a number.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Creating complement masks",
      "Inverting color values"
    ],
    "advantages": [
      "Extremely fast bit negation"
    ],
    "disadvantages": [
      "Result is signed in 2's complement systems"
    ],
    "realWorldUses": [
      "1's complement check calculations",
      "Bit invert operations in hardware controllers"
    ],
    "defaultInput": "29",
    "inputType": "bit-value",
    "isRoadmapAlias": false,
    "code": {
      "python": "def bitmask_not(n):\n    return ~n"
    }
  },
  "bit-left-shift": {
    "id": "bit-left-shift",
    "name": "Bit Left Shift",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Visualizes shifting all bits to the left (n << shift), equivalent to multiplication by 2^shift.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Fast multiplication by powers of two",
      "Encoding byte values into integers"
    ],
    "advantages": [
      "Orders of magnitude faster than standard multiplication loops"
    ],
    "disadvantages": [
      "Subject to bit overflow boundaries"
    ],
    "realWorldUses": [
      "RGB color encoding (R << 16 | G << 8 | B)",
      "Network packet header serialization"
    ],
    "defaultInput": "5 2",
    "inputType": "math-gcd",
    "isRoadmapAlias": false,
    "code": {
      "python": "def left_shift(n, shift):\n    return n << shift"
    }
  },
  "bit-right-shift": {
    "id": "bit-right-shift",
    "name": "Bit Right Shift",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Visualizes shifting all bits to the right (n >> shift), equivalent to division by 2^shift.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Fast division by powers of two",
      "Extracting byte values from composite integers"
    ],
    "advantages": [
      "Extremely cheap CPU operation compared to division hardware"
    ],
    "disadvantages": [
      "Discards fractional remainders"
    ],
    "realWorldUses": [
      "RGB color decoding (extract R, G, B channels)",
      "Fixed-point fractional arithmetic scaling"
    ],
    "defaultInput": "20 2",
    "inputType": "math-gcd",
    "isRoadmapAlias": false,
    "code": {
      "python": "def right_shift(n, shift):\n    return n >> shift"
    }
  },
  "bit-gray-code": {
    "id": "bit-gray-code",
    "name": "Bit Gray Code",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Converts binary to Gray Code representation where adjacent values differ by only one bit position.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Rotary encoders alignment error prevention",
      "Digital communication transmission correction"
    ],
    "advantages": [
      "Prevents spurious state updates during multi-bit transitions"
    ],
    "disadvantages": [
      "Requires conversion overhead back to binary numbers"
    ],
    "realWorldUses": [
      "Mechanical rotary encoder angle detectors",
      "Asynchronous FIFO buffer gray code pointers"
    ],
    "defaultInput": "10",
    "inputType": "bit-value",
    "isRoadmapAlias": false,
    "code": {
      "python": "def gray_code(n):\n    return n ^ (n >> 1)"
    }
  },
  "bitmasking-concept": {
    "id": "bitmasking-concept",
    "name": "Bitmasking Concept",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Demonstrates the core operations used in bit manipulation: Getting, Setting, and Clearing specific bits.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Hardware flag toggles",
      "State flags optimization"
    ],
    "advantages": [
      "Super fine-grained control over individual bits"
    ],
    "disadvantages": [
      "Can be error-prone if wrong mask values are used"
    ],
    "realWorldUses": [
      "GPIO pin registers read/write inside microcontrollers",
      "Memory page table dirty/present flags checks"
    ],
    "defaultInput": "29",
    "inputType": "bit-value",
    "isRoadmapAlias": false,
    "code": {
      "python": "# Get, Set, and Clear operations\ndef get_bit(n, i):\n    return (n & (1 << i)) != 0\n\ndef set_bit(n, i):\n    return n | (1 << i)\n\ndef clear_bit(n, i):\n    return n & ~(1 << i)"
    }
  },
  "generate-subsets-using-bitmask": {
    "id": "generate-subsets-using-bitmask",
    "name": "Generate Subsets Using Bitmask",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "description": "Generates all possible subsets of an array using binary masks from 0 to 2^n - 1.",
    "timeComplexity": {
      "best": "O(2^n)",
      "average": "O(2^n)",
      "worst": "O(2^n)"
    },
    "spaceComplexity": "O(n * 2^n)",
    "applications": [
      "Subset sum problems",
      "Power set generation"
    ],
    "advantages": [
      "Non-recursive, clean loop implementation"
    ],
    "disadvantages": [
      "Limited to small arrays due to exponential growth"
    ],
    "realWorldUses": [
      "Knapsack configurations search spaces mapping",
      "Product combo recommendations calculators"
    ],
    "defaultInput": "A B C",
    "inputType": "array",
    "isRoadmapAlias": false,
    "code": {
      "python": "def generate_subsets(arr):\n    n = len(arr)\n    subsets = []\n    for i in range(1 << n):\n        subset = []\n        for j in range(n):\n            if i & (1 << j):\n                subset.append(arr[j])\n        subsets.append(subset)\n    return subsets"
    }
  },
  "math-lcm": {
    "id": "math-lcm",
    "name": "Math Lcm",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Math Lcm concept. Visually simulated using the underlying GCD (Euclidean Algorithm) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log min(a, b))",
      "worst": "O(log min(a, b))"
    },
    "spaceComplexity": "O(log min(a, b))",
    "applications": [
      "Reducing fractions",
      "RSA key generation",
      "Diophantine equation solvers"
    ],
    "advantages": [
      "Exponentially faster than subtraction subtraction loops"
    ],
    "disadvantages": [
      "Requires division/modulo instructions which can be slow on microcontrollers"
    ],
    "realWorldUses": [
      "Cryptography key generators",
      "Graphic asset ratio calculation modules"
    ],
    "defaultInput": "48 18",
    "inputType": "math-gcd",
    "isRoadmapAlias": true,
    "counterpartId": "gcd-euclidean",
    "code": {
      "python": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a"
    }
  },
  "math-modular-arithmetic": {
    "id": "math-modular-arithmetic",
    "name": "Math Modular Arithmetic",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Math Modular Arithmetic concept. Visually simulated using the underlying GCD (Euclidean Algorithm) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log min(a, b))",
      "worst": "O(log min(a, b))"
    },
    "spaceComplexity": "O(log min(a, b))",
    "applications": [
      "Reducing fractions",
      "RSA key generation",
      "Diophantine equation solvers"
    ],
    "advantages": [
      "Exponentially faster than subtraction subtraction loops"
    ],
    "disadvantages": [
      "Requires division/modulo instructions which can be slow on microcontrollers"
    ],
    "realWorldUses": [
      "Cryptography key generators",
      "Graphic asset ratio calculation modules"
    ],
    "defaultInput": "48 18",
    "inputType": "math-gcd",
    "isRoadmapAlias": true,
    "counterpartId": "gcd-euclidean",
    "code": {
      "python": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a"
    }
  },
  "math-modular-inverse": {
    "id": "math-modular-inverse",
    "name": "Math Modular Inverse",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Math Modular Inverse concept. Visually simulated using the underlying GCD (Euclidean Algorithm) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log min(a, b))",
      "worst": "O(log min(a, b))"
    },
    "spaceComplexity": "O(log min(a, b))",
    "applications": [
      "Reducing fractions",
      "RSA key generation",
      "Diophantine equation solvers"
    ],
    "advantages": [
      "Exponentially faster than subtraction subtraction loops"
    ],
    "disadvantages": [
      "Requires division/modulo instructions which can be slow on microcontrollers"
    ],
    "realWorldUses": [
      "Cryptography key generators",
      "Graphic asset ratio calculation modules"
    ],
    "defaultInput": "48 18",
    "inputType": "math-gcd",
    "isRoadmapAlias": true,
    "counterpartId": "gcd-euclidean",
    "code": {
      "python": "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a"
    }
  },
  "math-ncr-computation": {
    "id": "math-ncr-computation",
    "name": "Math Ncr Computation",
    "category": "mathematical",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Math Ncr Computation concept. Visually simulated using the underlying Pascal's Triangle solver.",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Binomial coefficients",
      "Combinatorics calculations",
      "Probability computations"
    ],
    "advantages": [
      "Simple iterative generation of all binomial coefficients"
    ],
    "disadvantages": [
      "O(n²) space required to store the full triangle"
    ],
    "realWorldUses": [
      "Probability distributions in statistics",
      "Polynomial coefficient expansion"
    ],
    "defaultInput": "6",
    "inputType": "math-sieve",
    "isRoadmapAlias": true,
    "counterpartId": "pascal-triangle",
    "code": {
      "python": "def pascal(n):\n    tri = [[1]]\n    for i in range(1, n):\n        row = [1]\n        for j in range(1, i): row.append(tri[i-1][j-1] + tri[i-1][j])\n        row.append(1)\n        tri.append(row)\n    return tri"
    }
  },
  "fixed-size-window": {
    "id": "fixed-size-window",
    "name": "Fixed Size Window",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Fixed Size Window concept. Visually simulated using the underlying Sliding Window solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control"
    ],
    "advantages": [
      "Avoids redundant recalculations",
      "Linear performance tracking"
    ],
    "disadvantages": [
      "Only applicable on linear sequences",
      "Tricky index handling"
    ],
    "realWorldUses": [
      "Streaming rate limiters",
      "Network buffer packages scanning"
    ],
    "defaultInput": "2 1 5 1 3 2",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "sliding-window",
    "code": {
      "python": "def fixed_window(arr, k):\n    if len(arr) < k: return 0\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        if window_sum > max_sum:\n            max_sum = window_sum\n    return max_sum"
    }
  },
  "variable-size-window": {
    "id": "variable-size-window",
    "name": "Variable Size Window",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Variable Size Window concept. Visually simulated using the underlying Sliding Window solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control"
    ],
    "advantages": [
      "Avoids redundant recalculations",
      "Linear performance tracking"
    ],
    "disadvantages": [
      "Only applicable on linear sequences",
      "Tricky index handling"
    ],
    "realWorldUses": [
      "Streaming rate limiters",
      "Network buffer packages scanning"
    ],
    "defaultInput": "2 1 5 1 3 2",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "sliding-window",
    "code": {
      "python": "def variable_window(arr, target):\n    left = 0\n    curr_sum = 0\n    max_len = 0\n    for right in range(len(arr)):\n        curr_sum += arr[right]\n        while curr_sum > target and left <= right:\n            curr_sum -= arr[left]\n            left += 1\n        if curr_sum == target:\n            max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  "maximum-sum-subarray": {
    "id": "maximum-sum-subarray",
    "name": "Maximum Sum Subarray",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Maximum Sum Subarray concept. Visually simulated using the underlying Kadane's Algorithm solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding maximum profit time slices",
      "Image processing scanning filters"
    ],
    "advantages": [
      "O(n) linear performance instead of naive O(n²) or O(n³) checks"
    ],
    "disadvantages": [
      "Does not easily scale to multidimensional arrays without complexity"
    ],
    "realWorldUses": [
      "Financial stock market analysis for highest price growth periods"
    ],
    "defaultInput": "-2 1 -3 4 -1 2 1 -5 4",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "kadane",
    "code": {
      "python": "def kadane(arr):\n    max_so_far = curr_max = arr[0]\n    for i in range(1, len(arr)):\n        curr_max = max(arr[i], curr_max + arr[i])\n        max_so_far = max(max_so_far, curr_max)\n    return max_so_far"
    }
  },
  "longest-substring-no-repeat": {
    "id": "longest-substring-no-repeat",
    "name": "Longest Substring No Repeat",
    "category": "arrays",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Longest Substring No Repeat concept. Visually simulated using the underlying Sliding Window solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control"
    ],
    "advantages": [
      "Avoids redundant recalculations",
      "Linear performance tracking"
    ],
    "disadvantages": [
      "Only applicable on linear sequences",
      "Tricky index handling"
    ],
    "realWorldUses": [
      "Streaming rate limiters",
      "Network buffer packages scanning"
    ],
    "defaultInput": "2 1 5 1 3 2",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "sliding-window",
    "code": {
      "python": "def length_of_longest_substring(s):\n    seen = {}\n    left = 0\n    max_len = 0\n    for right, c in enumerate(s):\n        if c in seen and seen[c] >= left:\n            left = seen[c] + 1\n        seen[c] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  "three-sum": {
    "id": "three-sum",
    "name": "Three Sum",
    "category": "two-pointer",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Three Sum concept. Visually simulated using the underlying Two Sum (Two Pointer) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Pair sum queries on sorted arrays",
      "3Sum sub-problem"
    ],
    "advantages": [
      "O(n) time with O(1) space on sorted arrays"
    ],
    "disadvantages": [
      "Requires sorted input"
    ],
    "realWorldUses": [
      "Financial transaction pair matching",
      "Scientific data pair analysis"
    ],
    "defaultInput": "1 2 3 4 6 8 9",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "two-sum-two-pointer",
    "code": {
      "python": "def three_sum(nums):\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i-1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l+1]: l += 1\n                while l < r and nums[r] == nums[r-1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res"
    }
  },
  "four-sum": {
    "id": "four-sum",
    "name": "Four Sum",
    "category": "two-pointer",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Four Sum concept. Visually simulated using the underlying Two Sum (Two Pointer) solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Pair sum queries on sorted arrays",
      "3Sum sub-problem"
    ],
    "advantages": [
      "O(n) time with O(1) space on sorted arrays"
    ],
    "disadvantages": [
      "Requires sorted input"
    ],
    "realWorldUses": [
      "Financial transaction pair matching",
      "Scientific data pair analysis"
    ],
    "defaultInput": "1 2 3 4 6 8 9",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "two-sum-two-pointer",
    "code": {
      "python": "def four_sum(nums, target):\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 3):\n        for j in range(i + 1, n - 2):\n            l, r = j + 1, n - 1\n            while l < r:\n                s = nums[i] + nums[j] + nums[l] + nums[r]\n                if s == target:\n                    res.append([nums[i], nums[j], nums[l], nums[r]])\n                    l += 1; r -= 1\n                elif s < target: l += 1\n                else: r -= 1\n    return res"
    }
  },
  "container-with-most-water": {
    "id": "container-with-most-water",
    "name": "Container With Most Water",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Container With Most Water concept. Visually simulated using the underlying Two Pointer Technique solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Pair sum targeting in sorted arrays",
      "Reversing arrays in-place",
      "Partitioning steps in Quick Sort"
    ],
    "advantages": [
      "Operates with zero auxiliary space",
      "Avoids quadratic nested loops"
    ],
    "disadvantages": [
      "Requires the list or array to be pre-sorted",
      "Applicable only to linear containers"
    ],
    "realWorldUses": [
      "Data de-duplication utilities",
      "Image mirroring software engines"
    ],
    "defaultInput": "1 2 3 4 6 8 9",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "two-pointer",
    "code": {
      "python": "def max_water(height):\n    left, right = 0, len(height) - 1\n    max_area = 0\n    while left < right:\n        width = right - left\n        h = min(height[left], height[right])\n        max_area = max(max_area, width * h)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_area"
    }
  },
  "trapping-rain-water-pointer": {
    "id": "trapping-rain-water-pointer",
    "name": "Trapping Rain Water Pointer",
    "category": "two-pointer",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Trapping Rain Water Pointer concept. Visually simulated using the underlying Trapping Rain Water solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Terrain water simulation",
      "Volume calculation in histograms"
    ],
    "advantages": [
      "O(n) with O(1) space using two pointer technique"
    ],
    "disadvantages": [
      "Logic can be unintuitive compared to brute force"
    ],
    "realWorldUses": [
      "Terrain analysis in GIS systems",
      "Container volume optimization algorithms"
    ],
    "defaultInput": "0 1 0 2 1 0 1 3 2 1 2 1",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "trapping-rain-water",
    "code": {
      "python": "def trap(h):\n    l,r,lm,rm,w=0,len(h)-1,0,0,0\n    while l<r:\n        if h[l]<=h[r]:\n            lm=max(lm,h[l]); w+=lm-h[l]; l+=1\n        else:\n            rm=max(rm,h[r]); w+=rm-h[r]; r-=1\n    return w"
    }
  },
  "merge-sorted-arrays-pointer": {
    "id": "merge-sorted-arrays-pointer",
    "name": "Merge Sorted Arrays Pointer",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Merge Sorted Arrays Pointer concept. Visually simulated using the underlying Merge Sorted Arrays solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(n + m)",
    "applications": [
      "Merge step inside Merge Sort",
      "Joining pre-sorted databases",
      "Batch dataset reconciliations"
    ],
    "advantages": [
      "Preserves pre-sorted order",
      "Linear execution latency"
    ],
    "disadvantages": [
      "Requires extra space allocation for the output array"
    ],
    "realWorldUses": [
      "Database index merge join engines",
      "Sorted log streaming mergers"
    ],
    "defaultInput": "1 3 5\n2 4 6",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "merge-arrays",
    "code": {
      "python": "def merge(arr1, arr2):\n    res, i, j = [], 0, 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            res.append(arr1[i])\n            i += 1\n        else:\n            res.append(arr2[j])\n            j += 1\n    res.extend(arr1[i:])\n    res.extend(arr2[j:])\n    return res"
    }
  },
  "prefix-sum-array": {
    "id": "prefix-sum-array",
    "name": "Prefix Sum Array",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Prefix Sum Array concept. Visually simulated using the underlying Prefix Sum solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations"
    ],
    "advantages": [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation"
    ],
    "disadvantages": [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically"
    ],
    "realWorldUses": [
      "Database column sum indexes",
      "Graphics renderer brightness mapping"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "prefix-sum",
    "code": {
      "python": "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix"
    }
  },
  "suffix-sum-array": {
    "id": "suffix-sum-array",
    "name": "Suffix Sum Array",
    "category": "prefix-sum",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Suffix Sum Array concept. Visually simulated using the underlying Suffix Sum solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Range update optimizations",
      "Preprocessing for advanced array range algorithms"
    ],
    "advantages": [
      "Linear time complexity",
      "Simplifies right-to-left subsegment calculation"
    ],
    "disadvantages": [
      "Requires extra memory to allocate the suffix array"
    ],
    "realWorldUses": [
      "Suffix query caches",
      "Image filtering filters"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "suffix-sum",
    "code": {
      "python": "def suffix_sum(arr):\n    n = len(arr)\n    suffix = [0] * n\n    suffix[n-1] = arr[n-1]\n    for i in range(n-2, -1, -1):\n        suffix[i] = suffix[i+1] + arr[i]\n    return suffix"
    }
  },
  "difference-array-prefix": {
    "id": "difference-array-prefix",
    "name": "Difference Array Prefix",
    "category": "prefix-sum",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Difference Array Prefix concept. Visually simulated using the underlying Difference Array solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Range update algorithms",
      "Difference query caches",
      "Video rendering coordinate changes"
    ],
    "advantages": [
      "Allows range updates in O(1) time",
      "Linear preprocessing time"
    ],
    "disadvantages": [
      "Requires reconstruction to retrieve values"
    ],
    "realWorldUses": [
      "Subsegment delta updates",
      "Audio delta modulation"
    ],
    "defaultInput": "10 5 2 8 12",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "difference-array",
    "code": {
      "python": "def difference_array(arr):\n    n = len(arr)\n    diff = [0] * n\n    diff[0] = arr[0]\n    for i in range(1, n):\n        diff[i] = arr[i] - arr[i-1]\n    return diff"
    }
  },
  "range-sum-query-prefix": {
    "id": "range-sum-query-prefix",
    "name": "Range Sum Query Prefix",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Range Sum Query Prefix concept. Visually simulated using the underlying Prefix Sum solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations"
    ],
    "advantages": [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation"
    ],
    "disadvantages": [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically"
    ],
    "realWorldUses": [
      "Database column sum indexes",
      "Graphics renderer brightness mapping"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "prefix-sum",
    "code": {
      "python": "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix"
    }
  },
  "subarray-sum-prefix": {
    "id": "subarray-sum-prefix",
    "name": "Subarray Sum Prefix",
    "category": "arrays",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Subarray Sum Prefix concept. Visually simulated using the underlying Prefix Sum solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations"
    ],
    "advantages": [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation"
    ],
    "disadvantages": [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically"
    ],
    "realWorldUses": [
      "Database column sum indexes",
      "Graphics renderer brightness mapping"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "prefix-sum",
    "code": {
      "python": "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix"
    }
  },
  "previous-greater-element-mono": {
    "id": "previous-greater-element-mono",
    "name": "Previous Greater Element Mono",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "10 4 6 8 3 2",
    "description": "For each element, find nearest greater element to its left using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Span calculations"
    ],
    "advantages": [
      "Linear time"
    ],
    "disadvantages": [
      "O(n) space"
    ],
    "realWorldUses": [
      "Stock span"
    ],
    "code": {
      "python": "def previous_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        res[i] = arr[stack[-1]] if stack else -1\n        stack.append(i)\n    return res"
    }
  },
  "next-smaller-element-mono": {
    "id": "next-smaller-element-mono",
    "name": "Next Smaller Element Mono",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "4 8 5 2 25",
    "description": "For each element, find nearest smaller element to its right using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Temperature span",
      "Histograms"
    ],
    "advantages": [
      "O(n) using stack"
    ],
    "disadvantages": [
      "O(n) auxiliary space"
    ],
    "realWorldUses": [
      "Financial analysis"
    ],
    "code": {
      "python": "def next_smaller_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] > arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res"
    }
  },
  "previous-smaller-element-mono": {
    "id": "previous-smaller-element-mono",
    "name": "Previous Smaller Element Mono",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "4 8 5 2 25",
    "description": "Find nearest smaller element to its left using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Boundary searches"
    ],
    "advantages": [
      "O(n) time complexity"
    ],
    "disadvantages": [
      "Extra space"
    ],
    "realWorldUses": [
      "Monotonic data segment filters"
    ],
    "code": {
      "python": "def previous_smaller_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] >= arr[i]:\n            stack.pop()\n        res[i] = arr[stack[-1]] if stack else -1\n        stack.append(i)\n    return res"
    }
  },
  "largest-rectangle-mono": {
    "id": "largest-rectangle-mono",
    "name": "Largest Rectangle Mono",
    "category": "stack",
    "difficulty": "Hard",
    "inputType": "array",
    "defaultInput": "2 1 5 6 2 3",
    "description": "Find largest rectangle area in histogram using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Maximal rectangle"
    ],
    "advantages": [
      "O(n) optimal"
    ],
    "disadvantages": [
      "Tricky boundaries"
    ],
    "realWorldUses": [
      "Image processing"
    ],
    "code": {
      "python": "def largest_rectangle_area(heights):\n    stack, max_area = [], 0\n    for i, h in enumerate(heights + [0]):\n        while stack and heights[stack[-1]] > h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1 if stack else i\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    return max_area"
    }
  },
  "daily-temperatures": {
    "id": "daily-temperatures",
    "name": "Daily Temperatures",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "73 74 75 71 69 72 76 73",
    "description": "For each day, calculate how many days you must wait until a warmer temperature using a monotonic decreasing stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Sensor alarm aggregates"
    ],
    "advantages": [
      "O(n) linear scan using stack"
    ],
    "disadvantages": [
      "Extra memory space"
    ],
    "realWorldUses": [
      "Weather telemetry aggregate monitors"
    ],
    "code": {
      "python": "def daily_temperatures(temperatures):\n    n = len(temperatures)\n    res, stack = [0] * n, []\n    for i in range(n):\n        while stack and temperatures[stack[-1]] < temperatures[i]:\n            popped = stack.pop()\n            res[popped] = i - popped\n        stack.append(i)\n    return res"
    }
  },
  "sliding-window-max-mono": {
    "id": "sliding-window-max-mono",
    "name": "Sliding Window Max Mono",
    "category": "queue",
    "difficulty": "Hard",
    "inputType": "queue",
    "defaultInput": "1 3 -1 -3 5 3 6 7",
    "description": "Calculate the maximum value in every sliding window of size K using a monotonic deque.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(k)",
    "applications": [
      "Streaming statistics",
      "Sliding threshold triggers"
    ],
    "advantages": [
      "Optimal O(n) runtime"
    ],
    "disadvantages": [
      "Complex edge index management"
    ],
    "realWorldUses": [
      "Window telemetry filters, rate limiting aggregations"
    ],
    "code": {
      "python": "from collections import deque\ndef max_sliding_window(nums, k):\n    dq, res = deque(), []\n    for i, val in enumerate(nums):\n        if dq and dq[0] < i - k + 1:\n            dq.popleft()\n        while dq and nums[dq[-1]] <= val:\n            dq.pop()\n        dq.append(i)\n        if i >= k - 1:\n            res.append(nums[dq[0]])\n    return res"
    }
  },
  "remove-k-digits": {
    "id": "remove-k-digits",
    "name": "Remove K Digits",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "1432219\n3",
    "description": "Find the smallest possible number by removing K digits using a monotonic increasing stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Number compression",
      "Greedy optimizations"
    ],
    "advantages": [
      "Linear time scan"
    ],
    "disadvantages": [
      "Handles leading zero terminations"
    ],
    "realWorldUses": [
      "Numerical precision reduction models"
    ],
    "code": {
      "python": "def remove_k_digits(num: str, k: int) -> str:\n    stack = []\n    for d in num:\n        while stack and stack[-1] > d and k > 0:\n            stack.pop()\n            k -= 1\n        stack.append(d)\n    while k > 0:\n        stack.pop()\n        k -= 1\n    res = \"\".join(stack).lstrip(\"0\")\n    return res if res else \"0\""
    }
  },
  "dsu-make-set": {
    "id": "dsu-make-set",
    "name": "Dsu Make Set",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dsu Make Set concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "dsu-find": {
    "id": "dsu-find",
    "name": "Dsu Find",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dsu Find concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "dsu-union": {
    "id": "dsu-union",
    "name": "Dsu Union",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dsu Union concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "dsu-path-compression": {
    "id": "dsu-path-compression",
    "name": "Dsu Path Compression",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dsu Path Compression concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "dsu-union-by-rank": {
    "id": "dsu-union-by-rank",
    "name": "Dsu Union By Rank",
    "category": "union-find",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Dsu Union By Rank concept. Visually simulated using the underlying DSU Cycle Detection solver.",
    "timeComplexity": {
      "best": "O(V)",
      "average": "O(E alpha(V))",
      "worst": "O(E log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts"
    ],
    "advantages": [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)"
    ],
    "disadvantages": [
      "Applicable strictly to undirected graphs"
    ],
    "realWorldUses": [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines"
    ],
    "defaultInput": "4 4\n0 1\n1 2\n2 3\n3 0",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "union-find-cycle",
    "code": {
      "python": "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False"
    }
  },
  "dsu-number-of-islands": {
    "id": "dsu-number-of-islands",
    "name": "Dsu Number Of Islands",
    "category": "graphs",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Dsu Number Of Islands concept. Visually simulated using the underlying DFS Traversal solver.",
    "timeComplexity": {
      "best": "O(V + E)",
      "average": "O(V + E)",
      "worst": "O(V + E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving"
    ],
    "advantages": [
      "Consumes much less memory overhead compared to BFS on deep tree networks"
    ],
    "disadvantages": [
      "Does not guarantee finding the shortest route pathways first"
    ],
    "realWorldUses": [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors"
    ],
    "defaultInput": "5 4\n0 1\n0 2\n1 3\n2 4",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dfs",
    "code": {
      "python": "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res"
    }
  },
  "skip-list": {
    "id": "skip-list",
    "name": "Skip List",
    "category": "linked-list",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Skip List concept. Visually simulated using the underlying Linked List Traversal solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching"
    ],
    "advantages": [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting"
    ],
    "disadvantages": [
      "Lacks direct random indexing support"
    ],
    "realWorldUses": [
      "Low-level driver structures",
      "Blockchain transaction validation linking"
    ],
    "defaultInput": "1 2 3 4 5",
    "inputType": "linked-list",
    "isRoadmapAlias": true,
    "counterpartId": "linked-list-traversal",
    "code": {
      "python": "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next"
    }
  },
  "rope-ds": {
    "id": "rope-ds",
    "name": "Rope Ds",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Rope Ds concept. Visually simulated using the underlying Reverse String solver.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "String manipulation utilities",
      "Anagram detection preprocessing"
    ],
    "advantages": [
      "Simple in-place swap approach"
    ],
    "disadvantages": [
      "Immutable strings require O(n) space in some languages"
    ],
    "realWorldUses": [
      "Text processing utilities",
      "URL slug reversal tools"
    ],
    "defaultInput": "hello world",
    "inputType": "strings-list",
    "isRoadmapAlias": true,
    "counterpartId": "reverse-string",
    "code": {
      "python": "def reverse_string(s):\n    return s[::-1]"
    }
  },
  "bloom-filter": {
    "id": "bloom-filter",
    "name": "Bloom Filter",
    "category": "hashing",
    "difficulty": "Medium",
    "inputType": "hash",
    "defaultInput": "add apple add banana check apple check cherry",
    "description": "A space-efficient probabilistic data structure that queries membership without false negatives (but allows false positives).",
    "timeComplexity": {
      "best": "O(k)",
      "average": "O(k)",
      "worst": "O(k)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Database query pre-checks",
      "Spam word blockers"
    ],
    "advantages": [
      "Extremely low memory footprint",
      "No storage of the actual elements"
    ],
    "disadvantages": [
      "Supports membership test but not item deletion",
      "Returns false positives occasionally"
    ],
    "realWorldUses": [
      "Google Bigtable query filters, Medium article read filters, spambot blockers"
    ],
    "code": {
      "python": "class BloomFilter:\n    def __init__(self, size=100):\n        self.bits = [0] * size\n    def add(self, key):\n        self.bits[self.h1(key)] = 1\n        self.bits[self.h2(key)] = 1\n    def check(self, key):\n        return self.bits[self.h1(key)] == 1 and self.bits[self.h2(key)] == 1\n    def h1(self, key):\n        return sum(ord(c) for c in key) % len(self.bits)\n    def h2(self, key):\n        return sum(ord(c) for c in key) * 7 % len(self.bits)"
    }
  },
  "lru-cache-advanced": {
    "id": "lru-cache-advanced",
    "name": "LRU Cache",
    "category": "hashing",
    "difficulty": "Hard",
    "inputType": "lru-cache",
    "defaultInput": "capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2",
    "description": "O(1) get/put cache using doubly-linked list + hashmap with LRU eviction policy.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(capacity)",
    "applications": [
      "Cache management",
      "Query caching"
    ],
    "advantages": [
      "O(1) all operations"
    ],
    "disadvantages": [
      "Extra pointer overhead"
    ],
    "realWorldUses": [
      "CPU caches",
      "Redis LRU",
      "Browser cache"
    ],
    "code": {
      "python": "class LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = []\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.order.remove(key)\n        self.order.append(key)\n        return self.cache[key]\n    def put(self, key, value):\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            oldest = self.order.pop(0)\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)"
    }
  },
  "lfu-cache-advanced": {
    "id": "lfu-cache-advanced",
    "name": "Lfu Cache Advanced",
    "category": "queue",
    "difficulty": "Hard",
    "inputType": "queue",
    "defaultInput": "capacity=2 put 1 1 put 2 2 get 1 put 3 3 get 2 get 3",
    "description": "Least Frequently Used cache manager using hits and frequencies to evict keys.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(capacity)",
    "applications": [
      "System caching layer",
      "Database buffers"
    ],
    "advantages": [
      "Higher cache hit ratio for repetitive accesses"
    ],
    "disadvantages": [
      "Requires extra frequency and order maps"
    ],
    "realWorldUses": [
      "Web client caching layers, memory buffers"
    ],
    "code": {
      "python": "class LFUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.vals = {}\n        self.counts = {}\n    def get(self, key: int) -> int:\n        if key not in self.vals: return -1\n        self.counts[key] += 1\n        return self.vals[key]\n    def put(self, key: int, value: int):\n        self.vals[key] = value\n        self.counts[key] = self.counts.get(key, 0) + 1"
    }
  },
  "divide-and-conquer-concept": {
    "id": "divide-and-conquer-concept",
    "name": "Divide And Conquer Concept",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Divide And Conquer Concept concept. Visually simulated using the underlying Merge Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n log n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "External sorting of files on secondary storage",
      "Stable sorting requirements",
      "E-commerce lists"
    ],
    "advantages": [
      "Guaranteed O(n log n) runtime",
      "Stable sort",
      "Highly parallelizable"
    ],
    "disadvantages": [
      "Requires O(n) auxiliary memory space",
      "Slower than quicksort for in-memory systems"
    ],
    "realWorldUses": [
      "Linux kernel file merges",
      "Git merge actions",
      "Default stable sorting in Python"
    ],
    "defaultInput": "9 2 7 1 6 5",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "merge-sort",
    "code": {
      "python": "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    res = []\n    l = r = 0\n    while l < len(left) and r < len(right):\n        if left[l] < right[r]:\n            res.append(left[l])\n            l += 1\n        else:\n            res.append(right[r])\n            r += 1\n    res.extend(left[l:])\n    res.extend(right[r:])\n    return res"
    }
  },
  "meet-in-the-middle": {
    "id": "meet-in-the-middle",
    "name": "Meet In The Middle",
    "category": "searching",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Meet In The Middle concept. Visually simulated using the underlying Binary Search solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries"
    ],
    "advantages": [
      "Extremely fast even on massive datasets (logarithmic behavior)"
    ],
    "disadvantages": [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures"
    ],
    "realWorldUses": [
      "Database queries",
      "Memory indices lookup tables"
    ],
    "defaultInput": "1 3 5 7 9 12 15\nTarget = 9",
    "inputType": "search",
    "isRoadmapAlias": true,
    "counterpartId": "binary-search",
    "code": {
      "python": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
    }
  },
  "randomized-algorithms": {
    "id": "randomized-algorithms",
    "name": "Randomized Algorithms",
    "category": "sorting",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Randomized Algorithms concept. Visually simulated using the underlying Quick Sort solver.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log n)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(log n)",
    "applications": [
      "Systems programming libraries",
      "General-purpose sorting frameworks",
      "Numerical computations"
    ],
    "advantages": [
      "Cache friendly and highly optimized in practice",
      "No auxiliary memory storage required (in-place)",
      "Extremely fast average case"
    ],
    "disadvantages": [
      "Worst case time complexity is O(n²)",
      "Unstable sorting algorithm"
    ],
    "realWorldUses": [
      "Standard C library qsort() implementation",
      "JavaScript V8 engine array sorting for primitive values"
    ],
    "defaultInput": "6 2 9 4 1 8",
    "inputType": "array",
    "isRoadmapAlias": true,
    "counterpartId": "quick-sort",
    "code": {
      "python": "def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] < pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1"
    }
  },
  "computational-geometry-concept": {
    "id": "computational-geometry-concept",
    "name": "Computational Geometry Concept",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Computational Geometry Concept concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "convex-hull": {
    "id": "convex-hull",
    "name": "Convex Hull",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Convex Hull concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "line-sweep-algorithm": {
    "id": "line-sweep-algorithm",
    "name": "Line Sweep Algorithm",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Line Sweep Algorithm concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "z-algorithm-adv": {
    "id": "z-algorithm-adv",
    "name": "Z Algorithm Adv",
    "category": "strings",
    "difficulty": "Medium",
    "description": "Concept Visualizer representing the Z Algorithm Adv concept. Visually simulated using the underlying KMP Pattern Search solver.",
    "timeComplexity": {
      "best": "O(n + m)",
      "average": "O(n + m)",
      "worst": "O(n + m)"
    },
    "spaceComplexity": "O(m)",
    "applications": [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features"
    ],
    "advantages": [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text"
    ],
    "disadvantages": [
      "Requires preprocessing space and time to build LPS array"
    ],
    "realWorldUses": [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners"
    ],
    "defaultInput": "AABAACAADAABAABA\nAABA",
    "inputType": "string-pattern",
    "isRoadmapAlias": true,
    "counterpartId": "kmp-search",
    "code": {
      "python": "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices"
    }
  },
  "manachers-algorithm-adv": {
    "id": "manachers-algorithm-adv",
    "name": "Manachers Algorithm Adv",
    "category": "strings",
    "difficulty": "Easy",
    "description": "Concept Visualizer representing the Manachers Algorithm Adv concept. Visually simulated using the underlying Palindrome Check solver.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "DNA sequence analysis",
      "Data validation",
      "Word puzzles"
    ],
    "advantages": [
      "O(1) space solution with two pointers"
    ],
    "disadvantages": [
      "Case-sensitive unless normalized"
    ],
    "realWorldUses": [
      "String validation in forms",
      "Genome bioinformatics research"
    ],
    "defaultInput": "racecar",
    "inputType": "strings-list",
    "isRoadmapAlias": true,
    "counterpartId": "palindrome-check",
    "code": {
      "python": "def manachers(s):\n    t = '#' + '#'.join(s) + '#'\n    n = len(t)\n    p = [0] * n\n    c = r = 0\n    for i in range(n):\n        mirror = 2 * c - i\n        if i < r:\n            p[i] = min(r - i, p[mirror])\n        while i + p[i] + 1 < n and i - p[i] - 1 >= 0 and t[i + p[i] + 1] == t[i - p[i] - 1]:\n            p[i] += 1\n        if i + p[i] > r:\n            c, r = i, i + p[i]\n    best = max(range(n), key=lambda i: p[i])\n    start = (best - p[best]) // 2\n    return s[start:start + p[best]]"
    }
  },
  "a-star-search": {
    "id": "a-star-search",
    "name": "A Star Search",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the A Star Search concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "beam-search": {
    "id": "beam-search",
    "name": "Beam Search",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Beam Search concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "ford-fulkerson": {
    "id": "ford-fulkerson",
    "name": "Ford Fulkerson",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Ford Fulkerson concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "edmonds-karp": {
    "id": "edmonds-karp",
    "name": "Edmonds Karp",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Edmonds Karp concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "dinics-algorithm": {
    "id": "dinics-algorithm",
    "name": "Dinics Algorithm",
    "category": "graphs",
    "difficulty": "Hard",
    "description": "Concept Visualizer representing the Dinics Algorithm concept. Visually simulated using the underlying Dijkstra's Shortest Path solver.",
    "timeComplexity": {
      "best": "O(V²)",
      "average": "O((V + E) log V)",
      "worst": "O((V + E) log V)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates"
    ],
    "advantages": [
      "Guarantees absolute shortest path matching optimal solution"
    ],
    "disadvantages": [
      "Does not work for graphs with negative weights (creates infinite loops)"
    ],
    "realWorldUses": [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers"
    ],
    "defaultInput": "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    "inputType": "graph",
    "isRoadmapAlias": true,
    "counterpartId": "dijkstra",
    "code": {
      "python": "import heapq\ndef dijkstra(graph, start, num_vertices):\n    distances = {vertex: float('infinity') for vertex in range(num_vertices)}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
    }
  },
  "largest-rectangle-histogram": {
    "id": "largest-rectangle-histogram",
    "name": "Largest Rectangle in Histogram",
    "category": "stack",
    "difficulty": "Hard",
    "inputType": "array",
    "defaultInput": "2 1 5 6 2 3",
    "description": "Find largest rectangle area in histogram using monotonic stack.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Maximal rectangle"
    ],
    "advantages": [
      "O(n) optimal"
    ],
    "disadvantages": [
      "Tricky boundaries"
    ],
    "realWorldUses": [
      "Image processing"
    ],
    "code": {
      "python": "def largest_rectangle_area(heights):\n    stack, max_area = [], 0\n    for i, h in enumerate(heights + [0]):\n        while stack and heights[stack[-1]] > h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1 if stack else i\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    return max_area"
    }
  },
  "stock-span": {
    "id": "stock-span",
    "name": "Stock Span Problem",
    "category": "stack",
    "difficulty": "Medium",
    "inputType": "stack",
    "defaultInput": "100 80 60 70 60 75 85",
    "description": "Compute consecutive days before today where stock price was ≤ today's.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Financial data"
    ],
    "advantages": [
      "O(n) using stack"
    ],
    "disadvantages": [
      "Stack overhead"
    ],
    "realWorldUses": [
      "Stock market analysis"
    ],
    "code": {
      "python": "def stock_span(arr):\n    stack, span = [], [1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        span[i] = i - stack[-1] if stack else i + 1\n        stack.append(i)\n    return span"
    }
  },
  "tree-top-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-top-view",
    "name": "Tree Top View",
    "description": "Show first visible node per horizontal column (top perspective).",
    "code": {
      "python": "def top_view(root):\n    if not root: return []\n    hd_map = {}\n    queue = [(root, 0)]\n    while queue:\n        node, hd = queue.pop(0)\n        if hd not in hd_map:\n            hd_map[hd] = node.val\n        if node.left: queue.append((node.left, hd - 1))\n        if node.right: queue.append((node.right, hd + 1))\n    return [hd_map[hd] for hd in sorted(hd_map.keys())]"
    }
  },
  "tree-bottom-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-bottom-view",
    "name": "Tree Bottom View",
    "description": "Show last visible node per horizontal column (bottom perspective).",
    "code": {
      "python": "def bottom_view(root):\n    if not root: return []\n    hd_map = {}\n    queue = [(root, 0)]\n    while queue:\n        node, hd = queue.pop(0)\n        hd_map[hd] = node.val\n        if node.left: queue.append((node.left, hd - 1))\n        if node.right: queue.append((node.right, hd + 1))\n    return [hd_map[hd] for hd in sorted(hd_map.keys())]"
    }
  },
  "tree-left-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-left-view",
    "name": "Tree Left View",
    "description": "Show first node visible from the left at each tree level.",
    "code": {
      "python": "def left_view(root):\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res):\n            res.append(node.val)\n        dfs(node.left, depth + 1)\n        dfs(node.right, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  "tree-right-view": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-right-view",
    "name": "Tree Right View",
    "description": "Show last node visible from the right at each tree level.",
    "code": {
      "python": "def right_view(root):\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res):\n            res.append(node.val)\n        dfs(node.right, depth + 1)\n        dfs(node.left, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  "tree-diameter": {
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "tree",
    "defaultInput": "1 2 3 4 5 6 7",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Tree visualization"
    ],
    "advantages": [
      "Intuitive tree view"
    ],
    "disadvantages": [
      "BFS required"
    ],
    "realWorldUses": [
      "Tree rendering"
    ],
    "id": "tree-diameter",
    "name": "Tree Diameter",
    "description": "Find the longest path between any two leaf nodes in the binary tree.",
    "code": {
      "python": "def tree_diameter(root):\n    ans = 0\n    def depth(node):\n        nonlocal ans\n        if not node: return 0\n        left = depth(node.left)\n        right = depth(node.right)\n        ans = max(ans, left + right)\n        return max(left, right) + 1\n    depth(root)\n    return ans"
    }
  },
  "bipartite-check": {
    "id": "bipartite-graph",
    "name": "Bipartite Check",
    "category": "graphs",
    "difficulty": "Medium",
    "inputType": "graph",
    "defaultInput": "0 1\n1 2\n2 3\n3 0",
    "description": "2-color graph with BFS. If no two adjacent nodes share same color, it's bipartite.",
    "timeComplexity": {
      "best": "O(V+E)",
      "average": "O(V+E)",
      "worst": "O(V+E)"
    },
    "spaceComplexity": "O(V)",
    "applications": [
      "Matching",
      "Scheduling"
    ],
    "advantages": [
      "Simple BFS coloring"
    ],
    "disadvantages": [
      "Undirected graphs only"
    ],
    "realWorldUses": [
      "Job matching",
      "Social analysis"
    ],
    "code": {
      "python": "def is_bipartite(n, adj):\n    color = {}\n    for i in range(n):\n        if i not in color:\n            color[i] = 0\n            queue = [i]\n            while queue:\n                curr = queue.pop(0)\n                for neighbor in adj[curr]:\n                    if neighbor not in color:\n                        color[neighbor] = 1 - color[curr]\n                        queue.append(neighbor)\n                    elif color[neighbor] == color[curr]:\n                        return False\n    return True"
    }
  },
  "shell-sort": {
    "id": "shell-sort",
    "name": "Shell Sort",
    "category": "sorting",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "64 34 25 12 22 11 90",
    "description": "Generalization of insertion sort using diminishing gap sequences for faster pre-sorting.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n log²n)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Embedded systems"
    ],
    "advantages": [
      "Better than insertion for large n"
    ],
    "disadvantages": [
      "Gap sequence matters"
    ],
    "realWorldUses": [
      "Linux kernel uClib",
      "Embedded sorting"
    ],
    "code": {
      "python": "def shell_sort(arr):\n    n = len(arr)\n    gap = n // 2\n    while gap > 0:\n        for i in range(gap, n):\n            temp = arr[i]\n            j = i\n            while j >= gap and arr[j - gap] > temp:\n                arr[j] = arr[j - gap]\n                j -= gap\n            arr[j] = temp\n        gap //= 2\n    return arr"
    }
  },
  "longest-increasing-subsequence": {
    "id": "longest-increasing-subsequence",
    "name": "Longest Increasing Subsequence",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "inputType": "dp",
    "defaultInput": "10 9 2 5 3 7 101 18",
    "description": "Find longest subsequence where each element is strictly greater than previous.",
    "timeComplexity": {
      "best": "O(n log n)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Activity scheduling",
      "Stock analysis"
    ],
    "advantages": [
      "Classic DP problem"
    ],
    "disadvantages": [
      "O(n²) naive"
    ],
    "realWorldUses": [
      "Activity scheduling",
      "DNA alignment"
    ],
    "code": {
      "python": "def lis(arr):\n    if not arr: return 0\n    dp = [1] * len(arr)\n    for i in range(1, len(arr)):\n        for j in range(i):\n            if arr[i] > arr[j]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)"
    }
  },
  "edit-distance": {
    "id": "edit-distance",
    "name": "Edit Distance (Levenshtein)",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "inputType": "dp",
    "defaultInput": "kitten\nsitting",
    "description": "Minimum insert/delete/replace operations to transform s1 into s2.",
    "timeComplexity": {
      "best": "O(m·n)",
      "average": "O(m·n)",
      "worst": "O(m·n)"
    },
    "spaceComplexity": "O(m·n)",
    "applications": [
      "Spell checking",
      "DNA alignment"
    ],
    "advantages": [
      "Optimal via DP"
    ],
    "disadvantages": [
      "O(m·n) space"
    ],
    "realWorldUses": [
      "Spell checkers",
      "Git diff",
      "DNA alignment"
    ],
    "code": {
      "python": "def edit_distance(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[m][n]"
    }
  },
  "longest-palindromic-subsequence": {
    "id": "longest-palindromic-subsequence",
    "name": "Longest Palindromic Subsequence",
    "category": "dynamic-programming",
    "difficulty": "Hard",
    "inputType": "dp",
    "defaultInput": "bbbab",
    "description": "Find longest palindromic subsequence by computing LCS of s with its reverse.",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "DNA analysis"
    ],
    "advantages": [
      "Reduces to LCS"
    ],
    "disadvantages": [
      "O(n²) time/space"
    ],
    "realWorldUses": [
      "Bioinformatics"
    ],
    "code": {
      "python": "def lps(s):\n    n = len(s)\n    dp = [[0] * n for _ in range(n)]\n    for i in range(n): dp[i][i] = 1\n    for cl in range(2, n + 1):\n        for i in range(n - cl + 1):\n            j = i + cl - 1\n            if s[i] == s[j] and cl == 2:\n                dp[i][j] = 2\n            elif s[i] == s[j]:\n                dp[i][j] = dp[i+1][j-1] + 2\n            else:\n                dp[i][j] = max(dp[i+1][j], dp[i][j-1])\n    return dp[0][n-1]"
    }
  },
  "house-robber": {
    "id": "house-robber",
    "name": "House Robber",
    "category": "dynamic-programming",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "2 7 9 3 1",
    "description": "Max non-adjacent sum: dp[i] = max(dp[i-1], dp[i-2] + arr[i]).",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Resource selection"
    ],
    "advantages": [
      "Simple O(n) DP"
    ],
    "disadvantages": [
      "Linear scan only"
    ],
    "realWorldUses": [
      "Resource allocation",
      "Scheduling"
    ],
    "code": {
      "python": "def rob(nums):\n    if not nums: return 0\n    if len(nums) == 1: return nums[0]\n    dp = [0] * len(nums)\n    dp[0] = nums[0]\n    dp[1] = max(nums[0], nums[1])\n    for i in range(2, len(nums)):\n        dp[i] = max(dp[i-1], dp[i-2] + nums[i])\n    return dp[-1]"
    }
  },
  "lcm": {
    "id": "lcm",
    "name": "LCM",
    "category": "mathematical",
    "difficulty": "Easy",
    "inputType": "math-gcd",
    "defaultInput": "12 18",
    "description": "LCM(a,b) = (a×b)/GCD(a,b). Uses Euclidean algorithm for GCD.",
    "timeComplexity": {
      "best": "O(log min(a,b))",
      "average": "O(log min(a,b))",
      "worst": "O(log min(a,b))"
    },
    "spaceComplexity": "O(1)",
    "applications": [
      "Fraction arithmetic",
      "Scheduling"
    ],
    "advantages": [
      "Leverages GCD"
    ],
    "disadvantages": [
      "Overflow risk for large numbers"
    ],
    "realWorldUses": [
      "Clock synchronization",
      "LCD refresh rates"
    ],
    "code": {
      "python": "def lcm(a, b):\n    def gcd(x, y):\n        while y: x, y = y, x % y\n        return x\n    return abs(a * b) // gcd(a, b) if a and b else 0"
    }
  },
  "ncr-computation": {
    "id": "ncr-computation",
    "name": "nCr Computation",
    "category": "mathematical",
    "difficulty": "Easy",
    "inputType": "math-ncr",
    "defaultInput": "5 2",
    "description": "C(n,r) via Pascal's triangle DP: C(n,r) = C(n-1,r-1) + C(n-1,r).",
    "timeComplexity": {
      "best": "O(n²)",
      "average": "O(n²)",
      "worst": "O(n²)"
    },
    "spaceComplexity": "O(n²)",
    "applications": [
      "Combinatorics",
      "Probability"
    ],
    "advantages": [
      "No overflow with DP"
    ],
    "disadvantages": [
      "O(n²) space"
    ],
    "realWorldUses": [
      "Statistics",
      "Cryptography"
    ],
    "code": {
      "python": "def nCr(n, r):\n    if r < 0 or r > n: return 0\n    if r == 0 or r == n: return 1\n    if r > n // 2: r = n - r\n    c = 1\n    for i in range(1, r + 1):\n        c = c * (n - i + 1) // i\n    return c"
    }
  },
  "gray-code": {
    "id": "gray-code",
    "name": "Gray Code",
    "category": "bit-manipulation",
    "difficulty": "Easy",
    "inputType": "bit-value",
    "defaultInput": "3",
    "description": "n-bit Gray code: G(i) = i XOR (i>>1). Adjacent codes differ by exactly 1 bit.",
    "timeComplexity": {
      "best": "O(2ⁿ)",
      "average": "O(2ⁿ)",
      "worst": "O(2ⁿ)"
    },
    "spaceComplexity": "O(2ⁿ)",
    "applications": [
      "Error correction",
      "Digital electronics"
    ],
    "advantages": [
      "Simple XOR formula"
    ],
    "disadvantages": [
      "Exponential number of codes"
    ],
    "realWorldUses": [
      "ADC encoders",
      "Rotary encoders"
    ],
    "code": {
      "python": "def gray_code(n):\n    res = []\n    for i in range(1 << n):\n        res.append(i ^ (i >> 1))\n    return res"
    }
  },
  "lru-cache": {
    "id": "lru-cache",
    "name": "LRU Cache",
    "category": "hashing",
    "difficulty": "Hard",
    "inputType": "lru-cache",
    "defaultInput": "capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2",
    "description": "O(1) get/put cache using doubly-linked list + hashmap with LRU eviction policy.",
    "timeComplexity": {
      "best": "O(1)",
      "average": "O(1)",
      "worst": "O(1)"
    },
    "spaceComplexity": "O(capacity)",
    "applications": [
      "Cache management",
      "Query caching"
    ],
    "advantages": [
      "O(1) all operations"
    ],
    "disadvantages": [
      "Extra pointer overhead"
    ],
    "realWorldUses": [
      "CPU caches",
      "Redis LRU",
      "Browser cache"
    ],
    "code": {
      "python": "class LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = []\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.order.remove(key)\n        self.order.append(key)\n        return self.cache[key]\n    def put(self, key, value):\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            oldest = self.order.pop(0)\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)"
    }
  },
  "fenwick-tree": {
    "id": "fenwick-tree",
    "name": "Fenwick Tree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "1 3 5 7 9 11",
    "description": "Binary Indexed Tree for efficient prefix sum queries and point updates.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class FenwickTree:\n    def __init__(self, size):\n        self.tree = [0] * (size + 1)\n    def update(self, i, delta):\n        while i < len(self.tree):\n            self.tree[i] += delta\n            i += i & (-i)\n    def query(self, i):\n        s = 0\n        while i > 0:\n            s += self.tree[i]\n            i -= i & (-i)\n        return s"
    }
  },
  "b-tree": {
    "id": "b-tree",
    "name": "B Tree",
    "category": "trees",
    "difficulty": "Hard",
    "inputType": "array",
    "defaultInput": "10 20 30 40 50 60 70",
    "description": "Self-balancing search tree maintaining sorted data with logarithmic amortized operations.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class BTreeNode:\n    def __init__(self, leaf=True):\n        self.leaf = leaf\n        self.keys = []\n        self.children = []\nclass BTree:\n    def __init__(self, t):\n        self.root = BTreeNode(True)\n        self.t = t"
    }
  },
  "b-plus-tree": {
    "id": "b-plus-tree",
    "name": "B+ Tree",
    "category": "trees",
    "difficulty": "Hard",
    "inputType": "array",
    "defaultInput": "10 20 30 40 50 60 70",
    "description": "B-Tree variant where all keys are at leaves, linked for sequential access.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(log n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class BPlusTreeNode:\n    def __init__(self, leaf=True):\n        self.leaf = leaf\n        self.keys = []\n        self.children = []\n        self.next = None"
    }
  },
  "splay-tree": {
    "id": "splay-tree",
    "name": "Splay Tree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "50 30 70 20 40",
    "description": "Self-adjusting BST where recently accessed elements are splayed to the root.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class SplayTreeNode:\n    def __init__(self, key):\n        self.key = key\n        self.left = None\n        self.right = None"
    }
  },
  "treap": {
    "id": "treap",
    "name": "Treap",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "50 30 70 20 40",
    "description": "Cartesian tree combining BST value ordering and Heap random priority ordering.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "import random\nclass TreapNode:\n    def __init__(self, val):\n        self.val = val\n        self.priority = random.randint(1, 100)\n        self.left = None\n        self.right = None"
    }
  },
  "kd-tree": {
    "id": "kd-tree",
    "name": "K-Dimensional Tree",
    "category": "trees",
    "difficulty": "Hard",
    "inputType": "kd-tree",
    "defaultInput": "3,6 17,15 13,15 6,12",
    "description": "Space-partitioning tree for organizing points in k-dimensional space.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class KDNode:\n    def __init__(self, point, axis):\n        self.point = point\n        self.axis = axis\n        self.left = None\n        self.right = None"
    }
  },
  "quad-tree": {
    "id": "quad-tree",
    "name": "Quad Tree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "quad-tree",
    "defaultInput": "3,6 17,15 13,15 6,12",
    "description": "Space-partitioning tree where each node has exactly four children.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class QuadTreeNode:\n    def __init__(self, x, y, w, h):\n        self.boundary = (x, y, w, h)\n        self.points = []\n        self.divided = False"
    }
  },
  "octree": {
    "id": "octree",
    "name": "Octree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "octree",
    "defaultInput": "10,20,30",
    "description": "Space-partitioning tree where each node has exactly eight children.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class OctreeNode:\n    def __init__(self, boundary):\n        self.boundary = boundary\n        self.points = []\n        self.divided = False"
    }
  },
  "interval-tree": {
    "id": "interval-tree",
    "name": "Interval Tree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "interval-tree",
    "defaultInput": "15,20 10,30 17,19 5,20",
    "description": "BST holding intervals ordered by low endpoint, maintaining max high endpoints.",
    "timeComplexity": {
      "best": "O(log n)",
      "average": "O(log n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class IntervalNode:\n    def __init__(self, interval):\n        self.low = interval[0]\n        self.high = interval[1]\n        self.max = interval[1]\n        self.left = None\n        self.right = None"
    }
  },
  "suffix-tree": {
    "id": "suffix-tree",
    "name": "Suffix Tree",
    "category": "trees",
    "difficulty": "Hard",
    "inputType": "suffix-tree",
    "defaultInput": "banana",
    "description": "Compressed trie containing all suffixes of a given string.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class SuffixTreeNode:\n    def __init__(self):\n        self.children = {}\n        self.start = -1\n        self.end = None"
    }
  },
  "cartesian-tree": {
    "id": "cartesian-tree",
    "name": "Cartesian Tree",
    "category": "trees",
    "difficulty": "Medium",
    "inputType": "array",
    "defaultInput": "10 20 5 30 15",
    "description": "Binary tree derived from a sequence maintaining inorder and heap properties.",
    "timeComplexity": {
      "best": "O(n)",
      "average": "O(n)",
      "worst": "O(n)"
    },
    "spaceComplexity": "O(n)",
    "code": {
      "python": "class CartesianNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None"
    }
  },
  "letter-combinations": {
    "id": "letter-combinations",
    "name": "Letter Combinations",
    "category": "backtracking",
    "difficulty": "Medium",
    "inputType": "recursion",
    "defaultInput": "23",
    "description": "Generate all possible letter combinations that a digit string from 2-9 could represent using a phone keypad mapping.",
    "timeComplexity": {
      "best": "O(4^n)",
      "average": "O(4^n)",
      "worst": "O(4^n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "T9 predictive text parsing",
      "Keypad combinations matching"
    ],
    "advantages": [
      "Explores all mapped paths systematically"
    ],
    "disadvantages": [
      "Exponential growth with longer digit inputs"
    ],
    "realWorldUses": [
      "Predictive keypad typing, contact search helpers"
    ],
    "code": {
      "python": "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    phone = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits):\n            res.append(path)\n            return\n        for char in phone[digits[idx]]:\n            backtrack(idx + 1, path + char)\n    backtrack(0, '')\n    return res"
    }
  },
  "palindrome-partitioning": {
    "id": "palindrome-partitioning",
    "name": "Palindrome Partitioning",
    "category": "backtracking",
    "difficulty": "Medium",
    "inputType": "recursion",
    "defaultInput": "aab",
    "description": "Partitions a string such that every substring of the partition is a palindrome, using recursive DFS backtracking.",
    "timeComplexity": {
      "best": "O(n * 2^n)",
      "average": "O(n * 2^n)",
      "worst": "O(n * 2^n)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Sub-palindrome searching",
      "Lexical parsing segments"
    ],
    "advantages": [
      "Explores all valid configurations systematically"
    ],
    "disadvantages": [
      "Exponential search space bounds"
    ],
    "realWorldUses": [
      "Gene sequence splicing analysis, textual pattern matchers"
    ],
    "code": {
      "python": "def partition(s: str) -> list[list[str]]:\n    res = []\n    def isPal(sub):\n        return sub == sub[::-1]\n    def backtrack(start, path):\n        if start == len(s):\n            res.append(list(path))\n            return\n        for i in range(start, len(s)):\n            if isPal(s[start:i+1]):\n                path.append(s[start:i+1])\n                backtrack(i + 1, path)\n                path.pop()\n    backtrack(0, [])\n    return res"
    }
  },
  "permutations": {
    "id": "permutations",
    "name": "Permutations",
    "category": "backtracking",
    "difficulty": "Medium",
    "inputType": "recursion",
    "defaultInput": "1 2 3",
    "description": "Generates all possible permutations of a set of distinct elements using element swapping/backtracking recursively.",
    "timeComplexity": {
      "best": "O(n * n!)",
      "average": "O(n * n!)",
      "worst": "O(n * n!)"
    },
    "spaceComplexity": "O(n)",
    "applications": [
      "Combinatorics testing",
      "Route scheduling configurations"
    ],
    "advantages": [
      "Ensures every combination is traversed uniquely"
    ],
    "disadvantages": [
      "Growth is factorial, rendering it slow for sets over 10 items"
    ],
    "realWorldUses": [
      "Password crackers, permutation index search tools"
    ],
    "code": {
      "python": "def permute(nums: list[int]) -> list[list[int]]:\n    res = []\n    def backtrack(curr, rem):\n        if not rem:\n            res.append(list(curr))\n            return\n        for i in range(len(rem)):\n            curr.append(rem[i])\n            backtrack(curr, rem[:i] + rem[i+1:])\n            curr.pop()\n    backtrack([], nums)\n    return res"
    }
  },
  "crossword-solver": {
    "id": "crossword-solver",
    "name": "Crossword Solver",
    "category": "backtracking",
    "difficulty": "Hard",
    "inputType": "grid",
    "defaultInput": "CAT DOG",
    "description": "Fills empty word slots in a crossword puzzle grid intersecting valid words from a provided dictionary bank.",
    "timeComplexity": {
      "best": "O(V^W)",
      "average": "O(V^W)",
      "worst": "O(V^W)"
    },
    "spaceComplexity": "O(R * C)",
    "applications": [
      "Crossword grid populating",
      "Semantic constraint satisfying"
    ],
    "advantages": [
      "Finds consistent character overlaps reliably"
    ],
    "disadvantages": [
      "Large dictionary sizes lead to high branch factors"
    ],
    "realWorldUses": [
      "Puzzle game generator backends, NLP word map fits"
    ],
    "code": {
      "python": "def solveCrossword(board, words):\n    # Backtracking puzzle solver logic\n    def can_place(word, r, c, d): pass\n    def place(word, r, c, d): pass\n    def backtrack(w_idx):\n        if w_idx == len(words): return True\n        # Loop candidates...\n    backtrack(0)"
    }
  },
  "branch-and-bound-concept": {
    "id": "branch-and-bound-concept",
    "name": "Branch and Bound Concept",
    "category": "backtracking",
    "difficulty": "Hard",
    "inputType": "recursion",
    "defaultInput": "4",
    "description": "Solves optimization problems like TSP or Knapsack by dividing search space and pruning nodes whose lower bounds exceed the best solution cost.",
    "timeComplexity": {
      "best": "O(2^n)",
      "average": "O(2^n)",
      "worst": "O(2^n)"
    },
    "spaceComplexity": "O(2^n)",
    "applications": [
      "Traveling Salesperson Problem",
      "Integer Linear Programming solver"
    ],
    "advantages": [
      "Prunes subtrees early to avoid full search space exploration"
    ],
    "disadvantages": [
      "Computing tight lower bounds at each node can be expensive"
    ],
    "realWorldUses": [
      "Route optimizer servers, asset portfolio schedulers"
    ],
    "code": {
      "python": "def tsp_branch_and_bound(matrix):\n    min_cost = float('inf')\n    def solve(path, cost, bound, visited):\n        nonlocal min_cost\n        if cost + bound >= min_cost: return  # Pruning\n        if len(path) == len(matrix):\n            min_cost = min(min_cost, cost)\n            return\n        # Recurse...\n    solve([0], 0, compute_initial_bound(), {0})"
    }
  }
};

export const COUNTERPARTS = {
  "array-traversal": "linear-search",
  "array-searching": "linear-search",
  "dutch-national-flag-algorithm": "quick-sort",
  "matrix-traversal": "dfs",
  "matrix-multiplication": "merge-arrays",
  "string-searching": "linear-search",
  "string-comparison": "palindrome-check",
  "anagram": "group-anagrams",
  "string-matching": "kmp-search",
  "pattern-matching": "kmp-search",
  "z-algorithm": "kmp-search",
  "manachers-algorithm": "palindrome-check",
  "rolling-hash": "rabin-karp",
  "string-subsequence": "lcs-dp",
  "string-substring": "kmp-search",
  "string-compression": "frequency-count",
  "lexicographical-order": "bubble-sort",
  "list-search": "linked-list-traversal",
  "list-insertion": "linked-list-traversal",
  "list-deletion": "linked-list-traversal",
  "remove-cycle": "cycle-detection",
  "palindrome-linked-list": "palindrome-check",
  "intersection-point": "middle-node",
  "rotate-linked-list": "reverse-list",
  "sort-linked-list": "merge-sorted-lists",
  "partition-linked-list": "middle-node",
  "josephus-problem": "circular-queue",
  "infix-to-postfix": "stack-operations",
  "infix-to-prefix": "stack-operations",
  "prefix-evaluation": "stack-operations",
  "postfix-evaluation": "stack-operations",
  "previous-greater-element": "next-greater-element",
  "next-smaller-element": "next-greater-element",
  "previous-smaller-element": "next-greater-element",
  "largest-rectangle-in-histogram": "stack-operations",
  "stock-span-problem": "next-greater-element",
  "undo-redo": "stack-operations",
  "browser-history": "stack-operations",
  "queue-front": "queue-operations",
  "queue-rear": "queue-operations",
  "priority-queue-type": "min-heap",
  "deque-type": "queue-operations",
  "task-scheduling": "circular-queue",
  "cpu-scheduling": "circular-queue",
  "printer-queue": "queue-operations",
  "lru-cache-queue": "circular-queue",
  "hash-set": "hash-map",
  "duplicate-detection": "frequency-count",
  "longest-consecutive-sequence": "two-sum",
  "pair-sum": "two-sum",
  "count-distinct-elements": "frequency-count",
  "subarray-sum-equals-k": "prefix-sum",
  "cache-implementation": "hash-map",
  "preorder-traversal": "bst-traversal",
  "postorder-traversal": "bst-traversal",
  "diameter-of-tree": "tree-height",
  "balanced-tree": "tree-height",
  "symmetric-tree": "bst-traversal",
  "left-view": "level-order-traversal",
  "right-view": "level-order-traversal",
  "top-view": "level-order-traversal",
  "bottom-view": "level-order-traversal",
  "boundary-traversal": "bst-traversal",
  "zigzag-traversal": "level-order-traversal",
  "vertical-traversal": "level-order-traversal",
  "serialize-tree": "level-order-traversal",
  "deserialize-tree": "level-order-traversal",
  "bst-floor": "bst-search",
  "bst-ceil": "bst-search",
  "validate-bst": "bst-traversal",
  "recover-bst": "bst-traversal",
  "kth-smallest": "bst-traversal",
  "kth-largest": "bst-traversal",
  "avl-rotations": "avl-insert",
  "priority-queue-heap": "min-heap",
  "kth-largest-element": "min-heap",
  "kth-smallest-element": "max-heap",
  "merge-k-sorted-lists": "min-heap",
  "median-finder": "min-heap",
  "trie-insert": "trie-search",
  "trie-delete": "trie-search",
  "trie-prefix-search": "trie-search",
  "trie-auto-complete": "trie-search",
  "trie-spell-checker": "trie-search",
  "trie-dictionary": "trie-search",
  "trie-xor-problems": "trie-search",
  "build-segment-tree": "segment-tree",
  "range-sum-query": "segment-tree",
  "range-minimum-query": "segment-tree",
  "range-maximum-query": "segment-tree",
  "lazy-propagation": "segment-tree",
  "fenwick-tree-prefix-sum": "fenwick-tree",
  "fenwick-tree-range-query": "fenwick-tree",
  "fenwick-tree-update": "fenwick-tree",
  "adjacency-matrix-repr": "bfs",
  "adjacency-list-repr": "dfs",
  "connected-components": "dfs",
  "cycle-detection-graph": "union-find-cycle",
  "bipartite-graph": "bfs",
  "strongly-connected-components": "dfs",
  "bridges-in-graph": "dfs",
  "articulation-points": "dfs",
  "euler-path": "dfs",
  "hamiltonian-path": "dfs",
  "johnson-algorithm": "floyd-warshall",
  "prims-algorithm": "dijkstra",
  "kruskals-algorithm": "union-find-cycle",
  "union-find-make-set": "union-find-cycle",
  "union-find-find": "union-find-cycle",
  "union-find-union": "union-find-cycle",
  "union-find-path-compression": "union-find-cycle",
  "union-find-union-by-rank": "union-find-cycle",
  "tarjan-algorithm": "topological-sort",
  "kosaraju-algorithm": "dfs",
  "recursion-factorial": "fibonacci-recursion",
  "recursion-power-function": "fast-exponentiation",
  "recursion-binary-search": "binary-search",
  "recursion-tree-traversal": "bst-traversal",
  "recursion-merge-sort": "merge-sort",
  "recursion-quick-sort": "quick-sort",
  "dp-memoization-concept": "climbing-stairs",
  "dp-tabulation-concept": "climbing-stairs",
  "dp-space-optimization": "climbing-stairs",
  "dp-fibonacci": "climbing-stairs",
  "dp-house-robber": "house-robber",
  "dp-unbounded-knapsack": "knapsack-dp",
  "dp-rod-cutting": "knapsack-dp",
  "dp-longest-increasing-subsequence": "longest-increasing-subsequence",
  "dp-longest-palindromic-subsequence": "longest-palindromic-subsequence",
  "dp-edit-distance": "edit-distance",
  "dp-partition-equal-subset-sum": "knapsack-dp",
  "job-scheduling": "activity-selection",
  "minimum-platforms": "activity-selection",
  "gas-station": "activity-selection",
  "jump-game": "activity-selection",
  "candy-distribution": "activity-selection",
  "interpolation-search": "binary-search",
  "exponential-search": "binary-search",
  "binary-search-on-answer": "binary-search",
  "search-in-rotated-sorted-array": "binary-search",
  "peak-element": "binary-search",
  "first-and-last-occurrence": "binary-search",
  "bucket-sort": "radix-sort",
  "tim-sort": "merge-sort",
  "bitmask-xor": "xor-operations",
  "bitmask-and": "xor-operations",
  "bitmask-or": "xor-operations",
  "bitmask-not": "xor-operations",
  "bit-left-shift": "xor-operations",
  "bit-right-shift": "xor-operations",
  "bit-gray-code": "count-set-bits",
  "bitmasking-concept": "count-set-bits",
  "generate-subsets-using-bitmask": "count-set-bits",
  "math-lcm": "gcd-euclidean",
  "math-modular-arithmetic": "gcd-euclidean",
  "math-modular-inverse": "gcd-euclidean",
  "math-ncr-computation": "pascal-triangle",
  "fixed-size-window": "sliding-window",
  "variable-size-window": "sliding-window",
  "maximum-sum-subarray": "kadane",
  "longest-substring-no-repeat": "sliding-window",
  "three-sum": "two-sum-two-pointer",
  "four-sum": "two-sum-two-pointer",
  "container-with-most-water": "two-pointer",
  "trapping-rain-water-pointer": "trapping-rain-water",
  "merge-sorted-arrays-pointer": "merge-arrays",
  "prefix-sum-array": "prefix-sum",
  "suffix-sum-array": "suffix-sum",
  "difference-array-prefix": "difference-array",
  "range-sum-query-prefix": "prefix-sum",
  "subarray-sum-prefix": "prefix-sum",
  "previous-greater-element-mono": "next-greater-element",
  "next-smaller-element-mono": "next-greater-element",
  "previous-smaller-element-mono": "next-greater-element",
  "largest-rectangle-mono": "next-greater-element",
  "daily-temperatures": "next-greater-element",
  "sliding-window-max-mono": "sliding-window-max",
  "remove-k-digits": "next-greater-element",
  "dsu-make-set": "union-find-cycle",
  "dsu-find": "union-find-cycle",
  "dsu-union": "union-find-cycle",
  "dsu-path-compression": "union-find-cycle",
  "dsu-union-by-rank": "union-find-cycle",
  "dsu-number-of-islands": "dfs",
  "b-tree": "b-tree",
  "b-plus-tree": "b-plus-tree",
  "splay-tree": "splay-tree",
  "treap": "treap",
  "skip-list": "linked-list-traversal",
  "rope-ds": "reverse-string",
  "kd-tree": "kd-tree",
  "quad-tree": "quad-tree",
  "octree": "octree",
  "interval-tree": "interval-tree",
  "suffix-tree": "suffix-tree",
  "suffix-array": "suffix-tree",
  "cartesian-tree": "cartesian-tree",
  "bloom-filter": "hash-map",
  "lru-cache-advanced": "circular-queue",
  "lfu-cache-advanced": "circular-queue",
  "divide-and-conquer-concept": "merge-sort",
  "meet-in-the-middle": "binary-search",
  "randomized-algorithms": "quick-sort",
  "computational-geometry-concept": "dijkstra",
  "convex-hull": "dijkstra",
  "line-sweep-algorithm": "dijkstra",
  "z-algorithm-adv": "kmp-search",
  "manachers-algorithm-adv": "palindrome-check",
  "a-star-search": "dijkstra",
  "beam-search": "dijkstra",
  "ford-fulkerson": "dijkstra",
  "edmonds-karp": "dijkstra",
  "dinics-algorithm": "dijkstra"
};
