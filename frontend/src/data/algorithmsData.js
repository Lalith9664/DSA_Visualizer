export const CATEGORIES = [
  {
    id: "arrays",
    name: "Arrays",
    description:
      "Contiguous memory blocks storing elements. Ideal for index-based retrieval.",
    icon: "ArrayIcon",
    algorithmsCount: 13,
    algorithms: [
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
    ],
  },
  {
    id: "strings",
    name: "Strings",
    description:
      "Sequences of characters for pattern matching and text parsing.",
    icon: "StringIcon",
    algorithmsCount: 7,
    algorithms: [
      "group-anagrams",
      "kmp-search",
      "palindrome-check",
      "reverse-string",
      "string-traversal",
      "string-concatenation",
      "longest-palindromic-substring",
    ],
  },
  {
    id: "linked-list",
    name: "Linked List",
    description:
      "Linear data structure where elements are connected by pointers.",
    icon: "ListIcon",
    algorithmsCount: 9,
    algorithms: [
      "linked-list-traversal",
      "cycle-detection",
      "middle-node",
      "reverse-list",
      "merge-sorted-lists",
      "doubly-linked-list-traversal",
      "doubly-linked-list-insertion",
      "doubly-linked-list-deletion",
      "circular-linked-list-traversal",
    ],
  },
  {
    id: "stack",
    name: "Stack",
    description: "Last-In-First-Out (LIFO) stack collection of nodes.",
    icon: "StackIcon",
    algorithmsCount: 3,
    algorithms: ["stack-operations", "balanced-parentheses", "min-stack"],
  },
  {
    id: "queue",
    name: "Queue",
    description: "First-In-First-Out (FIFO) collection of elements.",
    icon: "QueueIcon",
    algorithmsCount: 2,
    algorithms: ["queue-operations", "circular-queue"],
  },
  {
    id: "hashing",
    name: "Hashing",
    description: "Maps keys to values using index tables for quick retrieval.",
    icon: "HashIcon",
    algorithmsCount: 2,
    algorithms: ["hash-map", "two-sum"],
  },
  {
    id: "trees",
    name: "Trees & Heaps",
    description:
      "Hierarchical parent-child nodes and priority-based binary heaps.",
    icon: "TreeIcon",
    algorithmsCount: 14,
    algorithms: [
      "bst-traversal",
      "bst-search",
      "tree-height",
      "lca",
      "min-heap",
      "max-heap",
      "level-order-traversal",
      "bst-insert",
      "bst-delete",
      "avl-insert",
      "avl-delete",
      "bt-insert",
      "bt-delete",
      "rbt-insert",
    ],
  },
  {
    id: "graphs",
    name: "Graphs",
    description:
      "Vertices linked by edges. Handles network routing and DFS/BFS traversals.",
    icon: "GraphIcon",
    algorithmsCount: 5,
    algorithms: ["bfs", "dfs", "topological-sort", "dijkstra", "bellman-ford"],
  },
  {
    id: "recursion",
    name: "Recursion",
    description:
      "Solving problems by self-referential functional execution steps.",
    icon: "RecursionIcon",
    algorithmsCount: 3,
    algorithms: [
      "fibonacci-recursion",
      "recursion-factorial",
      "tower-of-hanoi",
    ],
  },
  {
    id: "backtracking",
    name: "Backtracking",
    description: "Explores paths recursively and backtracks on dead ends.",
    icon: "BacktrackIcon",
    algorithmsCount: 10,
    algorithms: [
      "n-queens",
      "rat-in-a-maze",
      "sudoku-solver",
      "word-search",
      "generate-parentheses",
      "letter-combinations",
      "palindrome-partitioning",
      "permutations",
      "crossword-solver",
      "branch-and-bound-concept",
    ],
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    description:
      "Solves overlapping subproblems using memoization or tabulation.",
    icon: "DpIcon",
    algorithmsCount: 10,
    algorithms: [
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
    ],
  },
  {
    id: "greedy",
    name: "Greedy Algorithms",
    description:
      "Builds up a solution piece by piece, choosing the locally optimal choice.",
    icon: "GreedyIcon",
    algorithmsCount: 2,
    algorithms: ["activity-selection", "fractional-knapsack"],
  },
  {
    id: "searching",
    name: "Searching",
    description:
      "Finding indices of target keys in static or sorted collections.",
    icon: "SearchIcon",
    algorithmsCount: 3,
    algorithms: ["linear-search", "binary-search", "ternary-search"],
  },
  {
    id: "sorting",
    name: "Sorting",
    description:
      "Ordering collections using comparison and pivot sorting steps.",
    icon: "SortIcon",
    algorithmsCount: 7,
    algorithms: [
      "bubble-sort",
      "selection-sort",
      "insertion-sort",
      "merge-sort",
      "quick-sort",
      "heap-sort",
      "radix-sort",
    ],
  },
  {
    id: "bit-manipulation",
    name: "Bit Manipulation",
    description:
      "Exploits low-level binary bitwise operators (AND, OR, XOR, shifts).",
    icon: "BitIcon",
    algorithmsCount: 4,
    algorithms: [
      "single-number",
      "power-of-two",
      "count-set-bits",
      "xor-operations",
    ],
  },
  {
    id: "mathematical",
    name: "Mathematical Algorithms",
    description: "Computes number-theoretic, prime sieve, and GCD values.",
    icon: "MathIcon",
    algorithmsCount: 4,
    algorithms: [
      "gcd-euclidean",
      "sieve-erato",
      "fast-exponentiation",
      "pascal-triangle",
    ],
  },
  {
    id: "sliding-window",
    name: "Sliding Window",
    description:
      "Maintains a running window metric over linear sequence intervals.",
    icon: "WindowIcon",
    algorithmsCount: 4,
    algorithms: [
      "sliding-window",
      "sliding-window-max",
      "fruits-into-baskets",
      "minimum-window-substring",
    ],
  },
  {
    id: "two-pointer",
    name: "Two Pointer Technique",
    description:
      "Maintains two pointer indices to scan sorted boundaries in linear time.",
    icon: "PointerIcon",
    algorithmsCount: 3,
    algorithms: ["two-pointer", "remove-duplicates", "two-sum-two-pointer"],
  },
  {
    id: "prefix-sum",
    name: "Prefix Sum",
    description:
      "Precomputes cumulative indices sum arrays to enable O(1) range queries.",
    icon: "PrefixIcon",
    algorithmsCount: 4,
    algorithms: [
      "prefix-sum",
      "equilibrium-index",
      "suffix-sum",
      "difference-array",
    ],
  },
  {
    id: "monotonic",
    name: "Monotonic Stack & Queue",
    description:
      "Maintains sorted sequences inside a stack or queue container.",
    icon: "MonoIcon",
    algorithmsCount: 2,
    algorithms: ["next-greater-element", "sliding-window-max"],
  },
  {
    id: "union-find",
    name: "Union Find (DSU)",
    description:
      "Tracks disjoint set equivalence relations and connected components.",
    icon: "UnionIcon",
    algorithmsCount: 1,
    algorithms: ["union-find-cycle"],
  },
  {
    id: "advanced-ds",
    name: "Advanced Data Structures",
    description:
      "Advanced structures like Segment Trees and Trie autocomplete indexes.",
    icon: "AdvDsIcon",
    algorithmsCount: 2,
    algorithms: ["segment-tree", "trie-search"],
  },
  {
    id: "advanced-algo",
    name: "Advanced Algorithms",
    description: "Complex search, optimization, and rolling hash operations.",
    icon: "AdvAlgoIcon",
    algorithmsCount: 2,
    algorithms: ["rabin-karp", "floyd-warshall"],
  },
];

export const ALGORITHMS = {
  "moores-voting-algorithm": {
    id: "moores-voting-algorithm",
    name: "Moore's Voting Algorithm",
    category: "arrays",
    difficulty: "Medium",
    description:
      "Finds the majority element (element that appears more than n/2 times) in linear time and O(1) space.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Fault-tolerant computing systems",
      "Distributed consensus systems",
      "Popularity metrics tracking",
    ],
    advantages: [
      "Linear time complexity O(n)",
      "Extremely optimal memory usage (uses O(1) space)",
    ],
    disadvantages: [
      "Requires secondary verification pass if majority element might not exist",
    ],
    realWorldUses: [
      "Voting nodes in network systems",
      "Data streams mode detection",
    ],
    defaultInput: "2 3 2 4 5 2 3",
    inputType: "array",
    pseudocode: `majority_element(arr):
  candidate = None, count = 0
  for val in arr:
    if count == 0:
      candidate = val, count = 1
    elif val == candidate:
      count++
    else:
      count--
  return candidate`,
    code: {
      javascript: `function majorityElement(arr) {
  let candidate = null;
  let count = 0;
  for (let val of arr) {
    if (count === 0) {
      candidate = val;
      count = 1;
    } else if (val === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}`,
      python: `def majority_element(arr):
    candidate = None
    count = 0
    for val in arr:
        if count == 0:
            candidate = val
            count = 1
        elif val == candidate:
            count += 1
        else:
            count -= 1
    return candidate`,
      java: `public class MooresVoting {
    public static int majorityElement(int[] arr) {
        Integer candidate = null;
        int count = 0;
        for (int val : arr) {
            if (count == 0) {
                candidate = val;
                count = 1;
            } else if (val == candidate) {
                count++;
            } else {
                count--;
            }
        }
        return candidate != null ? candidate : -1;
    }
}`,
      cpp: `#include <vector>
using namespace std;
int majorityElement(const vector<int>& arr) {
    int candidate = -1;
    int count = 0;
    for (int val : arr) {
        if (count == 0) {
            candidate = val;
            count = 1;
        } else if (val == candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}`,
    },
  },
  "minimum-window-substring": {
    id: "minimum-window-substring",
    name: "Minimum Window Substring",
    category: "sliding-window",
    difficulty: "Hard",
    description:
      "Finds the minimum contiguous substring of S containing all characters of pattern T in linear time.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(k)",
    applications: [
      "DNA pattern mapping",
      "Text search matching",
      "Data log filtering key sequences",
    ],
    advantages: [
      "Extremely optimal O(n) running time",
      "Maintains dynamic window contraction boundaries",
    ],
    disadvantages: ["Requires extra space for character frequency hashes"],
    realWorldUses: [
      "Sub-string lookup optimizations",
      "DNA substring aligners",
    ],
    defaultInput: "ADOBECODEBANC\nABC",
    inputType: "string-pattern",
    pseudocode: `min_window(s, t):
  need = count map of t
  have = empty map
  left = 0, formed = 0, required = size(need)
  min_len = Infinity, min_sub = ""
  for right = 0 to length(s) - 1:
    c = s[right]
    have[c]++
    if c in need and have[c] == need[c]:
      formed++
    while formed == required:
      if right - left + 1 < min_len:
        min_len = right - left + 1
        min_sub = s[left .. right]
      lc = s[left]
      have[lc]--
      if lc in need and have[lc] < need[lc]:
        formed--
      left++
  return min_sub`,
    code: {
      javascript: `function minWindow(s, t) {
  if (!s || !t) return "";
  const need = {}, have = {};
  for (let c of t) need[c] = (need[c] || 0) + 1;
  
  let left = 0, formed = 0;
  const required = Object.keys(need).length;
  let minLen = Infinity, minSub = "";
  
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    have[c] = (have[c] || 0) + 1;
    if (need[c] && have[c] === need[c]) formed++;
    
    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minSub = s.slice(left, right + 1);
      }
      const lc = s[left];
      have[lc]--;
      if (need[lc] && have[lc] < need[lc]) formed--;
      left++;
    }
  }
  return minSub;
}`,
      python: `def min_window(s, t):
    if not s or not t:
        return ""
    need, have = {}, {}
    for c in t: need[c] = need.get(c, 0) + 1
    
    left, formed, required = 0, 0, len(need)
    min_len, min_window = float('inf'), ""
    
    for right in range(len(s)):
        c = s[right]
        have[c] = have.get(c, 0) + 1
        if c in need and have[c] == need[c]:
            formed += 1
            
        while formed == required:
            if (right - left + 1) < min_len:
                min_len = right - left + 1
                min_window = s[left : right + 1]
            
            lc = s[left]
            have[lc] -= 1
            if lc in need and have[lc] < need[lc]:
                formed -= 1
            left += 1
            
    return min_window`,
      java: `import java.util.Map;
import java.util.HashMap;
public class MinWindow {
    public static String minWindow(String s, String t) {
        if (s == null || t == null || s.length() < t.length()) return "";
        Map<Character, Integer> need = new HashMap<>();
        for (char c : t.toCharArray()) need.put(c, need.getOrDefault(c, 0) + 1);
        
        Map<Character, Integer> have = new HashMap<>();
        int left = 0, formed = 0, required = need.size();
        int minLen = Integer.MAX_VALUE;
        String minSub = "";
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            have.put(c, have.getOrDefault(c, 0) + 1);
            if (need.containsKey(c) && have.get(c).equals(need.get(c))) formed++;
            
            while (formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minSub = s.substring(left, right + 1);
                }
                char lc = s.charAt(left);
                have.put(lc, have.get(lc) - 1);
                if (need.containsKey(lc) && have.get(lc) < need.get(lc)) formed--;
                left++;
            }
        }
        return minSub;
    }
}`,
      cpp: `#include <string>
#include <unordered_map>
#include <climits>
using namespace std;
string minWindow(string s, string t) {
    if (s.empty() || t.empty()) return "";
    unordered_map<char, int> need, have;
    for (char c : t) need[c]++;
    
    int left = 0, formed = 0, required = need.size();
    int minLen = INT_MAX, minStart = 0;
    
    for (int right = 0; right < s.length(); ++right) {
        char c = s[right];
        have[c]++;
        if (need.count(c) && have[c] == need[c]) formed++;
        
        while (formed == required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            char lc = s[left];
            have[lc]--;
            if (need.count(lc) && have[lc] < need[lc]) formed--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(minStart, minLen);
}`,
    },
  },
  "fruits-into-baskets": {
    id: "fruits-into-baskets",
    name: "Fruits Into Baskets",
    category: "sliding-window",
    difficulty: "Medium",
    description:
      "Find the longest contiguous subarray that contains at most 2 distinct integers (representing at most 2 types of fruits in 2 baskets).",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Data streaming window partitions",
      "Stock trend analysis",
      "Longest subarray problems with distinct values",
    ],
    advantages: [
      "Linear time complexity O(n)",
      "Single pass with two pointers (sliding window)",
    ],
    disadvantages: ["Requires extra space for frequency count maps"],
    realWorldUses: [
      "Network packets telemetry windowing",
      "Analytics events aggregation",
    ],
    defaultInput: "2 1 5 1 3 2",
    inputType: "array",
    pseudocode: `total_fruit(fruits):
  basket = empty hash map
  left = 0, max_len = 0
  for right = 0 to length(fruits) - 1:
    basket[fruits[right]]++
    while size(basket) > 2:
      basket[fruits[left]]--
      if basket[fruits[left]] == 0:
        delete basket[fruits[left]]
      left++
    max_len = max(max_len, right - left + 1)
  return max_len`,
    code: {
      javascript: `function totalFruit(fruits) {
  const basket = new Map();
  let left = 0, maxLen = 0;
  for (let right = 0; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);
    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      python: `def total_fruit(fruits):
    basket = {}
    left = 0
    max_len = 0
    for right in range(len(fruits)):
        basket[fruits[right]] = basket.get(fruits[right], 0) + 1
        while len(basket) > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,
      java: `import java.util.Map;
import java.util.HashMap;
public class FruitsIntoBaskets {
    public static int totalFruit(int[] fruits) {
        Map<Integer, Integer> basket = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < fruits.length; right++) {
            basket.put(fruits[right], basket.getOrDefault(fruits[right], 0) + 1);
            while (basket.size() > 2) {
                basket.put(fruits[left], basket.get(fruits[left]) - 1);
                if (basket.get(fruits[left]) == 0) {
                    basket.remove(fruits[left]);
                }
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`,
      cpp: `#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;
int totalFruit(const vector<int>& fruits) {
    unordered_map<int, int> basket;
    int left = 0, maxLen = 0;
    for (int right = 0; right < fruits.size(); ++right) {
        basket[fruits[right]]++;
        while (basket.size() > 2) {
            basket[fruits[left]]--;
            if (basket[fruits[left]] == 0) {
                basket.erase(fruits[left]);
            }
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    },
  },
  "transpose-matrix": {
    id: "transpose-matrix",
    name: "Transpose Matrix",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Reflects a matrix over its main diagonal, swapping row and column indices.",
    timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    applications: [
      "Linear algebra libraries",
      "Image processing algorithms (reflection/rotation)",
      "Graph algorithms adjacency matrices conversions",
    ],
    advantages: [
      "Can be performed in-place for square matrices",
      "Simplifies row-wise data operations",
    ],
    disadvantages: [
      "Requires extra space for non-square matrices in general transposition",
    ],
    realWorldUses: ["Rendering transformations", "Image 90-degree rotations"],
    defaultInput: "3",
    inputType: "spiral-matrix",
    pseudocode: `transpose(matrix):
  n = length(matrix)
  for i = 0 to n - 1:
    for j = i + 1 to n - 1:
      swap matrix[i][j] with matrix[j][i]
  return matrix`,
    code: {
      javascript: `function transpose(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}`,
      python: `def transpose(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    return matrix`,
      java: `public class MatrixTranspose {
    public static void transpose(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}`,
      cpp: `void transpose(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
}`,
    },
  },
  "spiral-matrix": {
    id: "spiral-matrix",
    name: "Spiral Matrix",
    category: "arrays",
    difficulty: "Medium",
    description:
      "Traverses a 2D matrix in spiral order (Right, Down, Left, Up) starting from top-left.",
    timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    applications: [
      "Image processing grids",
      "Data serialization",
      "Printing patterns",
    ],
    advantages: [
      "Traverses every cell exactly once",
      "In-place traversal index operations",
    ],
    disadvantages: ["Requires edge cases checks for non-square matrices"],
    realWorldUses: ["Matrix rotations", "Pixel manipulation algorithms"],
    defaultInput: "4",
    inputType: "spiral-matrix",
    pseudocode: `spiral_order(matrix):
  top = 0, bottom = rows - 1
  left = 0, right = cols - 1
  while top <= bottom and left <= right:
    traverse left to right at top; top++
    traverse top to bottom at right; right--
    if top <= bottom:
      traverse right to left at bottom; bottom--
    if left <= right:
      traverse bottom to top at left; left++`,
    code: {
      javascript: `function spiralOrder(matrix) {
  if (matrix.length === 0) return [];
  const res = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
}`,
      python: `def spiral_order(matrix):
    if not matrix:
        return []
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Traverse Right
        for i in range(left, right + 1):
            res.append(matrix[top][i])
        top += 1
        
        # Traverse Down
        for i in range(top, bottom + 1):
            res.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse Left
            for i in range(right, left - 1, -1):
                res.append(matrix[bottom][i])
            bottom -= 1
            
        if left <= right:
            # Traverse Up
            for i in range(bottom, top - 1, -1):
                res.append(matrix[i][left])
            left += 1
            
    return res`,
      java: `import java.util.List;
import java.util.ArrayList;
public class SpiralMatrix {
    public static List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        if (matrix.length == 0) return res;
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++) res.add(matrix[top][i]);
            top++;
            for (int i = top; i <= bottom; i++) res.add(matrix[i][right]);
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) res.add(matrix[bottom][i]);
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) res.add(matrix[i][left]);
                left++;
            }
        }
        return res;
    }
}`,
      cpp: `vector<int> spiralOrder(const vector<vector<int>>& matrix) {
    if (matrix.empty()) return {};
    vector<int> res;
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; ++i) res.push_back(matrix[top][i]);
        top++;
        for (int i = top; i <= bottom; ++i) res.push_back(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; --i) res.push_back(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; --i) res.push_back(matrix[i][left]);
            left++;
        }
    }
    return res;
}`,
    },
  },
  "difference-array": {
    id: "difference-array",
    name: "Difference Array",
    category: "prefix-sum",
    difficulty: "Easy",
    description:
      "Computes the changes between consecutive elements in an array. Often used for range update query optimizations.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
    applications: [
      "Range update algorithms",
      "Difference query caches",
      "Video rendering coordinate changes",
    ],
    advantages: [
      "Allows range updates in O(1) time",
      "Linear preprocessing time",
    ],
    disadvantages: ["Requires reconstruction to retrieve values"],
    realWorldUses: ["Subsegment delta updates", "Audio delta modulation"],
    defaultInput: "10 5 2 8 12",
    inputType: "array",
    pseudocode: `difference_array(arr):
  n = length(arr)
  diff = array of size n filled with 0
  diff[0] = arr[0]
  for i = 1 to n - 1:
    diff[i] = arr[i] - arr[i-1]
  return diff`,
    code: {
      javascript: `function differenceArray(arr) {
  const n = arr.length;
  const diff = new Array(n).fill(0);
  diff[0] = arr[0];
  for (let i = 1; i < n; i++) {
    diff[i] = arr[i] - arr[i - 1];
  }
  return diff;
}`,
      python: `def difference_array(arr):
    n = len(arr)
    diff = [0] * n
    diff[0] = arr[0]
    for i in range(1, n):
        diff[i] = arr[i] - arr[i-1]
    return diff`,
      java: `public class DifferenceArray {
    public static int[] differenceArray(int[] arr) {
        int n = arr.length;
        int[] diff = new int[n];
        diff[0] = arr[0];
        for (let i = 1; i < n; i++) {
            diff[i] = arr[i] - arr[i - 1];
        }
        return diff;
    }
}`,
      cpp: `vector<int> differenceArray(const vector<int>& arr) {
    int n = arr.size();
    vector<int> diff(n, 0);
    diff[0] = arr[0];
    for (let i = 1; i < n; i++) {
        diff[i] = arr[i] - arr[i - 1];
    }
    return diff;
}`,
    },
  },
  "suffix-sum": {
    id: "suffix-sum",
    name: "Suffix Sum",
    category: "prefix-sum",
    difficulty: "Easy",
    description:
      "Computes the running sum of elements in an array from right to left.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
    applications: [
      "Subarray sum queries",
      "Range update optimizations",
      "Preprocessing for advanced array range algorithms",
    ],
    advantages: [
      "Linear time complexity",
      "Simplifies right-to-left subsegment calculation",
    ],
    disadvantages: ["Requires extra memory to allocate the suffix array"],
    realWorldUses: ["Suffix query caches", "Image filtering filters"],
    defaultInput: "1 2 3 4 5",
    inputType: "array",
    pseudocode: `suffix_sum(arr):
  n = length(arr)
  suffix = array of size n filled with 0
  suffix[n-1] = arr[n-1]
  for i = n-2 down to 0:
    suffix[i] = suffix[i+1] + arr[i]
  return suffix`,
    code: {
      javascript: `function suffixSum(arr) {
  const n = arr.length;
  const suffix = new Array(n).fill(0);
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }
  return suffix;
}`,
      python: `def suffix_sum(arr):
    n = len(arr)
    suffix = [0] * n
    suffix[n-1] = arr[n-1]
    for i in range(n-2, -1, -1):
        suffix[i] = suffix[i+1] + arr[i]
    return suffix`,
      java: `public class SuffixSum {
    public static int[] suffixSum(int[] arr) {
        int n = arr.length;
        int[] suffix = new int[n];
        suffix[n - 1] = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] + arr[i];
        }
        return suffix;
    }
}`,
      cpp: `vector<int> suffixSum(const vector<int>& arr) {
    int n = arr.size();
    vector<int> suffix(n, 0);
    suffix[n - 1] = arr[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + arr[i];
    }
    return suffix;
}`,
    },
  },
  "splitting-arrays": {
    id: "splitting-arrays",
    name: "Splitting Arrays",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Slices a single array into two smaller arrays at a given split index.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
    applications: [
      "Divide and conquer algorithms",
      "Merge sort partitions",
      "Data splitting for ML training/testing",
    ],
    advantages: ["Clean subsetting", "No mutations to original array"],
    disadvantages: ["Requires extra memory to allocate the split subsets"],
    realWorldUses: ["Subsegment extraction", "Slicing buffers"],
    defaultInput: "5 3 8 1 9",
    inputType: "array",
    pseudocode: `split_array(arr, index):
  left = copy of arr from 0 to index - 1
  right = copy of arr from index to length(arr) - 1
  return left, right`,
    code: {
      javascript: `function splitArray(arr, index) {
  const left = arr.slice(0, index);
  const right = arr.slice(index);
  return [left, right];
}`,
      python: `def split_array(arr, index):
    left = arr[:index]
    right = arr[index:]
    return left, right`,
      java: `import java.util.Arrays;
public class ArraySplit {
    public static int[][] splitArray(int[] arr, int index) {
        int[] left = Arrays.copyOfRange(arr, 0, index);
        int[] right = Arrays.copyOfRange(arr, index, arr.length);
        return new int[][] { left, right };
    }
}`,
      cpp: `pair<vector<int>, vector<int>> splitArray(const vector<int>& arr, int index) {
    vector<int> left(arr.begin(), arr.begin() + index);
    vector<int> right(arr.begin() + index, arr.end());
    return {left, right};
}`,
    },
  },
  "array-insertion": {
    id: "array-insertion",
    name: "Array Insertion",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Insert an element at a given index by shifting subsequent elements to the right to make space.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Dynamic arrays",
      "Implementing basic data structures",
      "Online list updating",
    ],
    advantages: [
      "Simple to understand",
      "In-place shifting",
      "Preserves relative order",
    ],
    disadvantages: [
      "Requires shifting elements which is slow for large arrays",
      "Requires pre-allocated space or resizing",
    ],
    realWorldUses: ["ArrayList insertions", "Shifting array buffers"],
    defaultInput: "5 3 8 1 9",
    inputType: "array",
    pseudocode: `insert_element(arr, element, position):
  append 0 to arr
  for i = length(arr)-1 down to position+1:
    arr[i] = arr[i-1]
  arr[position] = element
  return arr`,
    code: {
      javascript: `function insertElement(arr, element, position) {
  arr.push(0);
  for (let i = arr.length - 1; i > position; i--) {
    arr[i] = arr[i - 1];
  }
  arr[position] = element;
  return arr;
}`,
      python: `def insert_element(arr, element, position):
    arr.append(0)
    for i in range(len(arr) - 1, position, -1):
        arr[i] = arr[i - 1]
    arr[position] = element
    return arr`,
      java: `public class ArrayInsertion {
    public static int[] insertElement(int[] arr, int element, int position) {
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < position; i++) {
            newArr[i] = arr[i];
        }
        newArr[position] = element;
        for (int i = position; i < arr.length; i++) {
            newArr[i + 1] = arr[i];
        }
        return newArr;
    }
}`,
      cpp: `vector<int> insertElement(vector<int>& arr, int element, int position) {
    arr.push_back(0);
    for (int i = arr.size() - 1; i > position; i--) {
        arr[i] = arr[i - 1];
    }
    arr[position] = element;
    return arr;
}`,
    },
  },
  "array-deletion": {
    id: "array-deletion",
    name: "Array Deletion",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Remove an element at a given index by shifting subsequent elements to the left.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Dynamic arrays",
      "Implementing queue/stack buffers",
      "List filtering",
    ],
    advantages: ["Simple to implement", "In-place removal"],
    disadvantages: [
      "Requires shifting elements which is slow for large arrays",
    ],
    realWorldUses: ["ArrayList removals", "Buffer cleanup"],
    defaultInput: "5 3 8 1 9",
    inputType: "array",
    pseudocode: `delete_element(arr, position):
  for i = position to length(arr)-2:
    arr[i] = arr[i+1]
  remove last element
  return arr`,
    code: {
      javascript: `function deleteElement(arr, position) {
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return arr;
}`,
      python: `def delete_element(arr, position):
    for i in range(position, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()
    return arr`,
      java: `public class ArrayDeletion {
    public static int[] deleteElement(int[] arr, int position) {
        int[] newArr = new int[arr.length - 1];
        for (int i = 0; i < position; i++) {
            newArr[i] = arr[i];
        }
        for (int i = position + 1; i < arr.length; i++) {
            newArr[i - 1] = arr[i];
        }
        return newArr;
    }
}`,
      cpp: `vector<int> deleteElement(vector<int>& arr, int position) {
    for (int i = position; i < arr.size() - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop_back();
    return arr;
}`,
    },
  },
  // --- SORTING ---
  "bubble-sort": {
    id: "bubble-sort",
    name: "Bubble Sort",
    category: "sorting",
    difficulty: "Easy",
    description:
      "Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    applications: [
      "Teaching introductory sorting concepts",
      "Sorting small or nearly sorted arrays",
      "Detecting simple swap requirements",
    ],
    advantages: [
      "Simple to understand and implement",
      "In-place sorting (requires no extra memory)",
      "Stable sorting algorithm (preserves relative order)",
    ],
    disadvantages: [
      "Extremely slow on large datasets",
      "Highly inefficient compared to Quick Sort or Merge Sort",
      "Performs redundant comparisons",
    ],
    realWorldUses: [
      "Computer graphics graphics pipelines for depth sorting",
      "Legacy embedded microcontrollers with minimal memory footprint",
    ],
    defaultInput: "5 3 8 1 9",
    inputType: "array",
    pseudocode: `bubbleSort(arr):
  n = length(arr)
  for i = 0 to n-1:
    swapped = false
    for j = 0 to n-i-2:
      if arr[j] > arr[j+1]:
        swap(arr[j], arr[j+1])
        swapped = true
    if not swapped:
      break`,
    code: {
      javascript: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}`,
      python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`,
      java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
}`,
      cpp: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`,
    },
  },

  "selection-sort": {
    id: "selection-sort",
    name: "Selection Sort",
    category: "sorting",
    difficulty: "Easy",
    description:
      "Selection Sort divides the input array into two parts: the sublist of items already sorted, and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted sublist and moves it to the beginning of the unsorted sublist.",
    timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    applications: [
      "Sorting datasets where auxiliary memory write cost is expensive",
      "Simple applications with low data inputs",
    ],
    advantages: [
      "Performs minimal swap operations compared to other algorithms",
      "In-place algorithm",
      "Predictable constant performance",
    ],
    disadvantages: [
      "Poor complexity on already sorted lists",
      "Unstable by default",
      "Slow on larger sizes",
    ],
    realWorldUses: [
      "EEPROM or flash memory sorting where writes are minimized",
    ],
    defaultInput: "12 9 3 7 15",
    inputType: "array",
    pseudocode: `selectionSort(arr):
  n = length(arr)
  for i = 0 to n-1:
    minIndex = i
    for j = i+1 to n-1:
      if arr[j] < arr[minIndex]:
        minIndex = j
    if minIndex != i:
      swap(arr[i], arr[minIndex])`,
    code: {
      javascript: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}`,
      python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
      java: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}`,
      cpp: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        swap(arr[i], arr[minIdx]);
    }
}`,
    },
  },

  "insertion-sort": {
    id: "insertion-sort",
    name: "Insertion Sort",
    category: "sorting",
    difficulty: "Easy",
    description:
      "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    applications: [
      "Sorting small datasets",
      "Sorting streams of data arriving live",
      "Hybrid sorting algorithms like Timsort",
    ],
    advantages: [
      "Highly efficient for small arrays",
      "Adaptive (O(n) for sorted/mostly-sorted)",
      "Stable and in-place",
    ],
    disadvantages: [
      "Slow on average and worst cases",
      "Requires shifting elements which can be slow",
    ],
    realWorldUses: [
      "Base step for hybrid algorithms in Python (Timsort) and Java (Dual-Pivot Quicksort)",
    ],
    defaultInput: "8 4 9 1 3",
    inputType: "array",
    pseudocode: `insertionSort(arr):
  for i = 1 to length(arr)-1:
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j+1] = arr[j]
      j = j - 1
    arr[j+1] = key`,
    code: {
      javascript: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
      python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`,
      java: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
}`,
      cpp: `void insertionSort(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
    },
  },

  "merge-sort": {
    id: "merge-sort",
    name: "Merge Sort",
    category: "sorting",
    difficulty: "Medium",
    description:
      "Merge Sort is an O(n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. It uses a divide-and-conquer strategy.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "External sorting of files on secondary storage",
      "Stable sorting requirements",
      "E-commerce lists",
    ],
    advantages: [
      "Guaranteed O(n log n) runtime",
      "Stable sort",
      "Highly parallelizable",
    ],
    disadvantages: [
      "Requires O(n) auxiliary memory space",
      "Slower than quicksort for in-memory systems",
    ],
    realWorldUses: [
      "Linux kernel file merges",
      "Git merge actions",
      "Default stable sorting in Python",
    ],
    defaultInput: "9 2 7 1 6 5",
    inputType: "array",
    pseudocode: `mergeSort(arr, l, r):
  if l < r:
    m = l + (r-l)/2
    mergeSort(arr, l, m)
    mergeSort(arr, m+1, r)
    merge(arr, l, m, r)`,
    code: {
      javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let res = [], l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) res.push(left[l++]);
    else res.push(right[r++]);
  }
  return res.concat(left.slice(l)).concat(right.slice(r));
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    res = []
    l = r = 0
    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            res.append(left[l])
            l += 1
        else:
            res.append(right[r])
            r += 1
    res.extend(left[l:])
    res.extend(right[r:])
    return res`,
      java: `public class MergeSort {
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    // merge helper implementation omitted for space...
}`,
      cpp: `void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
    },
  },

  "quick-sort": {
    id: "quick-sort",
    name: "Quick Sort",
    category: "sorting",
    difficulty: "Medium",
    description:
      "Quick Sort is a highly efficient, comparison-based divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(log n)",
    applications: [
      "Systems programming libraries",
      "General-purpose sorting frameworks",
      "Numerical computations",
    ],
    advantages: [
      "Cache friendly and highly optimized in practice",
      "No auxiliary memory storage required (in-place)",
      "Extremely fast average case",
    ],
    disadvantages: [
      "Worst case time complexity is O(n²)",
      "Unstable sorting algorithm",
    ],
    realWorldUses: [
      "Standard C library qsort() implementation",
      "JavaScript V8 engine array sorting for primitive values",
    ],
    defaultInput: "6 2 9 4 1 8",
    inputType: "array",
    pseudocode: `quickSort(arr, low, high):
  if low < high:
    pIndex = partition(arr, low, high)
    quickSort(arr, low, pIndex - 1)
    quickSort(arr, pIndex + 1, high)`,
    code: {
      javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pIdx = partition(arr, low, high);
    quickSort(arr, low, pIdx - 1);
    quickSort(arr, pIdx + 1, high);
  }
  return arr;
}
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}`,
      python: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
      java: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    // partition helper implementation...
}`,
      cpp: `void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    },
  },

  // --- SEARCHING ---
  "linear-search": {
    id: "linear-search",
    name: "Linear Search",
    category: "searching",
    difficulty: "Easy",
    description:
      "Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Unsorted datasets",
      "Searching lists with small sizes",
      "Key-lookup in associative arrays",
    ],
    advantages: ["No sorted array restriction", "Very simple implementation"],
    disadvantages: ["Slow on large lists due to O(n) scan"],
    realWorldUses: [
      "Finding items in simple logs",
      "Iterative arrays in embedded systems",
    ],
    defaultInput: "5 3 8 1 9\nTarget = 8",
    inputType: "search",
    pseudocode: `linearSearch(arr, target):
  for i = 0 to length(arr)-1:
    if arr[i] == target:
      return i
  return -1`,
    code: {
      javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
      java: `public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }
}`,
      cpp: `int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
    },
  },

  "binary-search": {
    id: "binary-search",
    name: "Binary Search",
    category: "searching",
    difficulty: "Easy",
    description:
      "Binary Search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated.",
    timeComplexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Searching sorted databases",
      "Finding lookup values in sorted lists",
      "High speed dictionary queries",
    ],
    advantages: [
      "Extremely fast even on massive datasets (logarithmic behavior)",
    ],
    disadvantages: [
      "Requires the elements to be sorted beforehand",
      "Requires random access to structures",
    ],
    realWorldUses: ["Database queries", "Memory indices lookup tables"],
    defaultInput: "1 3 5 7 9 12 15\nTarget = 9",
    inputType: "search",
    pseudocode: `binarySearch(arr, target):
  low = 0
  high = length(arr) - 1
  while low <= high:
    mid = low + (high - low)/2
    if arr[mid] == target:
      return mid
    else if arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1`,
    code: {
      javascript: `function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`,
      python: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
      java: `public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}`,
      cpp: `int binarySearch(const vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
    },
  },

  // --- KADANE ---
  kadane: {
    id: "kadane",
    name: "Kadane's Algorithm",
    category: "arrays",
    difficulty: "Medium",
    description:
      "Kadane's Algorithm is an iterative dynamic programming algorithm used to find the maximum sum contiguous subarray in a one-dimensional numeric array.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Finding maximum profit time slices",
      "Image processing scanning filters",
    ],
    advantages: [
      "O(n) linear performance instead of naive O(n²) or O(n³) checks",
    ],
    disadvantages: [
      "Does not easily scale to multidimensional arrays without complexity",
    ],
    realWorldUses: [
      "Financial stock market analysis for highest price growth periods",
    ],
    defaultInput: "-2 1 -3 4 -1 2 1 -5 4",
    inputType: "array",
    pseudocode: `kadane(arr):
  maxSoFar = arr[0]
  currMax = arr[0]
  for i = 1 to length(arr)-1:
    currMax = max(arr[i], currMax + arr[i])
    maxSoFar = max(maxSoFar, currMax)
  return maxSoFar`,
    code: {
      javascript: `function kadane(arr) {
  let maxSoFar = arr[0], currMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currMax = Math.max(arr[i], currMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
}`,
      python: `def kadane(arr):
    max_so_far = curr_max = arr[0]
    for i in range(1, len(arr)):
        curr_max = max(arr[i], curr_max + arr[i])
        max_so_far = max(max_so_far, curr_max)
    return max_so_far`,
      java: `public class Kadane {
    public static int maxSubArray(int[] arr) {
        int maxSoFar = arr[0];
        int currMax = arr[0];
        for (int i = 1; i < arr.length; i++) {
            currMax = Math.max(arr[i], currMax + arr[i]);
            maxSoFar = Math.max(maxSoFar, currMax);
        }
        return maxSoFar;
    }
}`,
      cpp: `int kadane(const vector<int>& arr) {
    int maxSoFar = arr[0];
    int currMax = arr[0];
    for (size_t i = 1; i < arr.size(); i++) {
        currMax = max(arr[i], currMax + arr[i]);
        maxSoFar = max(maxSoFar, currMax);
    }
    return maxSoFar;
}`,
    },
  },

  // --- LINKED LIST ---
  "doubly-linked-list-traversal": {
    id: "doubly-linked-list-traversal",
    name: "Doubly Linked List Traversal",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Traverses a doubly linked list sequentially from head to tail using forward pointers.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Text editor cursor movement",
      "Browser forward/back navigation caches",
    ],
    advantages: ["Can traverse backward and forward"],
    disadvantages: ["Extra pointer memory overhead per node"],
    realWorldUses: [
      "Music playlist forward/back queuing",
      "Recent search history listings",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode: `traverseDLL(head):
  curr = head
  while curr != null:
    process(curr.val)
    curr = curr.next`,
    code: {
      javascript: `function traverseDLL(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}`,
      python: `def traverse_dll(head):
    curr = head
    while curr:
        print(curr.val)
        curr = curr.next`,
      java: `public class DLLTraversal {
    public static void traverse(DLLNode head) {
        DLLNode curr = head;
        while (curr != null) {
            System.out.println(curr.val);
            curr = curr.next;
        }
    }
}`,
      cpp: `void traverse(DLLNode* head) {
    DLLNode* curr = head;
    while (curr != nullptr) {
        cout << curr->val << " ";
        curr = curr->next;
    }
}`,
    },
  },
  "doubly-linked-list-insertion": {
    id: "doubly-linked-list-insertion",
    name: "Doubly Linked List Insertion",
    category: "linked-list",
    difficulty: "Medium",
    description:
      "Inserts a new node at a specified position in a doubly linked list, re-linking adjacent prev and next pointers.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: ["Dynamic data management lists"],
    advantages: ["Insertion after a known node is O(1)"],
    disadvantages: ["Requires updating twice as many pointers"],
    realWorldUses: ["Transactional logs builders"],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode: `insertDLL(head, prev_node, new_val):
  new_node = new Node(new_val)
  new_node.next = prev_node.next
  new_node.prev = prev_node
  prev_node.next = new_node
  if new_node.next != null:
    new_node.next.prev = new_node`,
    code: {
      javascript: `function insertAfter(prev_node, new_val) {
  let new_node = { val: new_val, prev: prev_node, next: prev_node.next };
  if (prev_node.next !== null) {
    prev_node.next.prev = new_node;
  }
  prev_node.next = new_node;
}`,
      python: `def insert_after(prev_node, new_val):
    new_node = DLLNode(new_val)
    new_node.next = prev_node.next
    new_node.prev = prev_node
    if prev_node.next:
        prev_node.next.prev = new_node
    prev_node.next = new_node`,
      java: `public void insertAfter(DLLNode prev_node, int new_val) {
    DLLNode new_node = new DLLNode(new_val);
    new_node.next = prev_node.next;
    new_node.prev = prev_node;
    if (prev_node.next != null) {
        prev_node.next.prev = new_node;
    }
    prev_node.next = new_node;
}`,
      cpp: `void insertAfter(DLLNode* prev_node, int new_val) {
    DLLNode* new_node = new DLLNode(new_val);
    new_node->next = prev_node->next;
    new_node->prev = prev_node;
    if (prev_node->next != nullptr) {
        prev_node->next->prev = new_node;
    }
    prev_node->next = new_node;
}`,
    },
  },
  "doubly-linked-list-deletion": {
    id: "doubly-linked-list-deletion",
    name: "Doubly Linked List Deletion",
    category: "linked-list",
    difficulty: "Medium",
    description:
      "Deletes a target node from a doubly linked list, updating the next pointer of the predecessor and the prev pointer of the successor.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: ["LRU cache evictions", "Memory management buffers"],
    advantages: ["O(1) deletion if node pointer is known"],
    disadvantages: ["Tricky boundary cases (head/tail updates)"],
    realWorldUses: ["Operating system page replacement algorithms"],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode: `deleteNode(head, del_node):
  if del_node.prev != null: del_node.prev.next = del_node.next
  if del_node.next != null: del_node.next.prev = del_node.prev`,
    code: {
      javascript: `function deleteNode(del_node) {
  if (del_node.prev !== null) del_node.prev.next = del_node.next;
  if (del_node.next !== null) del_node.next.prev = del_node.prev;
}`,
      python: `def delete_node(del_node):
    if del_node.prev:
        del_node.prev.next = del_node.next
    if del_node.next:
        del_node.next.prev = del_node.prev`,
      java: `public void deleteNode(DLLNode del_node) {
    if (del_node.prev != null) del_node.prev.next = del_node.next;
    if (del_node.next != null) del_node.next.prev = del_node.prev;
}`,
      cpp: `void deleteNode(DLLNode* del_node) {
    if (del_node->prev != nullptr) del_node->prev->next = del_node->next;
    if (del_node->next != nullptr) del_node->next->prev = del_node->prev;
}`,
    },
  },
  "circular-linked-list-traversal": {
    id: "circular-linked-list-traversal",
    name: "Circular Linked List Traversal",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Traverses a circular linked list, stopping when the cursor loops back and references the starting head node again.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Multiplayer game turn schedulers",
      "CPU round-robin time-sharing systems",
    ],
    advantages: ["Can traverse whole list starting from any node"],
    disadvantages: ["Infinite loop risk if head condition is missed"],
    realWorldUses: ["Operating system process task execution queues"],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode: `traverseCircular(head):
  curr = head
  if head != null:
    do:
      process(curr.val)
      curr = curr.next
    while curr != head`,
    code: {
      javascript: `function traverseCircular(head) {
  if (head === null) return;
  let curr = head;
  do {
    console.log(curr.val);
    curr = curr.next;
  } while (curr !== head);
}`,
      python: `def traverse_circular(head):
    if not head: return
    curr = head
    while True:
        print(curr.val)
        curr = curr.next
        if curr == head:
            break`,
      java: `public void traverse(CNode head) {
    if (head == null) return;
    CNode curr = head;
    do {
        System.out.println(curr.val);
        curr = curr.next;
    } while (curr != head);
}`,
      cpp: `void traverse(CNode* head) {
    if (head == nullptr) return;
    CNode* curr = head;
    do {
        cout << curr->val << " ";
        curr = curr->next;
    } while (curr != head);
}`,
    },
  },
  "reverse-list": {
    id: "reverse-list",
    name: "Reverse Linked List",
    category: "linked-list",
    difficulty: "Medium",
    description:
      "Reverses a singly linked list so that the tail node becomes the new head, and all intermediate node pointers reference their preceding nodes.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Parsing engines",
      "Undo actions in stacks",
      "Linked data inversion",
    ],
    advantages: [
      "In-place reversion requires zero auxiliary node replication space",
    ],
    disadvantages: ["Requires pointers update handling, easy to break links"],
    realWorldUses: ["Underlying data modifications in transaction logs"],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode: `reverseList(head):
  prev = null
  curr = head
  while curr != null:
    nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  return prev`,
    code: {
      javascript: `function reverseList(head) {
  let prev = null, curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}`,
      python: `def reverse_list(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev`,
      java: `public class ReverseList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}`,
      cpp: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,
    },
  },

  // --- STACK ---
  "balanced-parentheses": {
    id: "balanced-parentheses",
    name: "Balanced Parentheses",
    category: "stack",
    difficulty: "Easy",
    description:
      "Given a string containing parentheses, brackets, and braces, determine if the input string is valid by matching opening brackets with their closing peers using a Stack.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
    applications: [
      "Compiler brackets validating",
      "JSON/HTML markup integrity parser tools",
    ],
    advantages: ["Ensures precise nested boundaries validation"],
    disadvantages: [
      "Space complexity scales linearly with input characters size",
    ],
    realWorldUses: [
      "Code IDE markup syntax-checker features",
      "Terminal CLI command line argument verification scripts",
    ],
    defaultInput: "{ [ ( ) ] }",
    inputType: "stack",
    pseudocode: `isBalanced(s):
  stack = empty Stack
  for char in s:
    if char in ['(', '{', '[']:
      stack.push(char)
    else if char in [')', '}', ']']:
      if stack is empty: return false
      top = stack.pop()
      if not matches(top, char): return false
  return stack.isEmpty()`,
    code: {
      javascript: `function isBalanced(s) {
  let stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if (map[char]) {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}`,
      python: `def is_balanced(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
    return len(stack) == 0`,
      java: `public class BalancedParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else if (c == ')' && !stack.isEmpty() && stack.peek() == '(') {
                stack.pop();
            } else if (c == '}' && !stack.isEmpty() && stack.peek() == '{') {
                stack.pop();
            } else if (c == ']' && !stack.isEmpty() && stack.peek() == '[') {
                stack.pop();
            } else if (c == ')' || c == '}' || c == ']') {
                return false;
            }
        }
        return stack.isEmpty();
    }
}`,
      cpp: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`,
    },
  },

  // --- QUEUE ---
  "queue-operations": {
    id: "queue-operations",
    name: "Queue FIFO Simulator",
    category: "queue",
    difficulty: "Easy",
    description:
      "Simulates First-In-First-Out (FIFO) queue buffers representing enqueues (insert at back) and dequeues (remove from front). Shows head and tail references dynamically.",
    timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
    spaceComplexity: "O(n)",
    applications: ["Task lists", "Message queues", "Network packets buffers"],
    advantages: ["Guarantees historical entry execution order"],
    disadvantages: ["Needs constant index pointer maintenance"],
    realWorldUses: ["CPU job schedulers", "Printer queue handlers"],
    defaultInput: "10 20 30 40",
    inputType: "queue",
    pseudocode: `enqueue(val):
  if queue is full: return "Overflow"
  rear = rear + 1
  queue[rear] = val

dequeue():
  if queue is empty: return "Underflow"
  val = queue[front]
  front = front + 1
  return val`,
    code: {
      javascript: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}`,
      python: `from collections import deque
class Queue:
    def __init__(self):
        self.items = deque()
    def enqueue(self, val):
        self.items.append(val)
    def dequeue(self):
        if not self.items: return "Underflow"
        return self.items.popleft()`,
      java: `import java.util.LinkedList;
import java.util.Queue;
public class QueueSim {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(10); // enqueue
        int head = q.remove(); // dequeue
    }
}`,
      cpp: `#include <queue>
using namespace std;
// Usage:
// queue<int> q;
// q.push(10);
// q.pop();`,
    },
  },

  // --- TREES ---
  "bst-traversal": {
    id: "bst-traversal",
    name: "Binary Search Tree Traversals",
    category: "trees",
    difficulty: "Medium",
    description:
      "Binary Search Tree Traversals explore depth-first traversals: Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root) over node trees.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(h) where h is tree height",
    applications: ["Parsing expression trees", "Listing directory systems"],
    advantages: ["Recursively structured, guarantees parsing all node trees"],
    disadvantages: ["Can blow up call stack for skewed trees (unbalanced)"],
    realWorldUses: [
      "Database index traversal scans",
      "XML/JSON DOM tree syntax parsing engines",
    ],
    defaultInput: "10 5 15 3 7 12 18",
    inputType: "tree",
    pseudocode: `inorder(root):
  if root != null:
    inorder(root.left)
    visit(root.val)
    inorder(root.right)`,
    code: {
      javascript: `function inorder(root, visited = []) {
  if (root !== null) {
    inorder(root.left, visited);
    visited.push(root.val);
    inorder(root.right, visited);
  }
  return visited;
}`,
      python: `def inorder(root, visited=None):
    if visited is None: visited = []
    if root:
        inorder(root.left, visited)
        visited.append(root.val)
        inorder(root.right, visited)
    return visited`,
      java: `public class BSTTraversal {
    public void inorder(TreeNode root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.val + " ");
            inorder(root.right);
        }
    }
}`,
      cpp: `void inorder(TreeNode* root) {
    if (root != nullptr) {
        inorder(root->left);
        cout << root->val << " ";
        inorder(root->right);
    }
}`,
    },
  },

  // --- GRAPHS ---
  dijkstra: {
    id: "dijkstra",
    name: "Dijkstra's Shortest Path",
    category: "graphs",
    difficulty: "Hard",
    description:
      "Dijkstra's Algorithm finds the shortest paths from a single source node to all other nodes in a weighted graph with non-negative edge weights.",
    timeComplexity: {
      best: "O(V²)",
      average: "O((V + E) log V)",
      worst: "O((V + E) log V)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "GPS maps routers",
      "Network traffic routers routing packets",
      "Flight booking lowest connection rates",
    ],
    advantages: ["Guarantees absolute shortest path matching optimal solution"],
    disadvantages: [
      "Does not work for graphs with negative weights (creates infinite loops)",
    ],
    realWorldUses: [
      "Google Maps routing system API",
      "OSPF routing protocols in network hardware controllers",
    ],
    defaultInput: "0 1 4\n0 2 1\n2 1 2\n1 3 5\n2 3 8",
    inputType: "graph",
    pseudocode: `dijkstra(graph, source):
  dist = array of size V initialized to Infinity
  dist[source] = 0
  pq = PriorityQueue()
  pq.insert(source, 0)
  while pq is not empty:
    u = pq.extractMin()
    for each neighbor v of u:
      alt = dist[u] + weight(u, v)
      if alt < dist[v]:
        dist[v] = alt
        pq.decreaseKey(v, alt)
  return dist`,
    code: {
      javascript: `function dijkstra(graph, source, V) {
  let dist = Array(V).fill(Infinity);
  let visited = Array(V).fill(false);
  dist[source] = 0;
  for (let count = 0; count < V - 1; count++) {
    let u = minDistance(dist, visited, V);
    visited[u] = true;
    for (let v = 0; v < V; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  return dist;
}`,
      python: `import heapq
def dijkstra(graph, start, num_vertices):
    distances = {vertex: float('infinity') for vertex in range(num_vertices)}
    distances[start] = 0
    priority_queue = [(0, start)]
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances`,
      java: `public class Dijkstra {
    // Dijkstra implementation using Adjacency Matrix representation
    // in O(V^2) or Adjacency List + PriorityQueue in O(E log V)
}`,
      cpp: `vector<int> dijkstra(int V, vector<vector<pair<int, int>>>& adj, int S) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, 1e9);
    dist[S] = 0;
    pq.push({0, S});
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        if (d > dist[u]) continue;
        for (auto edge : adj[u]) {
            int v = edge.first, w = edge.second;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
    },
  },

  // --- RECURSION ---
  "tower-of-hanoi": {
    id: "tower-of-hanoi",
    name: "Tower of Hanoi Recursion",
    category: "recursion",
    difficulty: "Medium",
    description:
      "A mathematical puzzle where we have three rods and N disks. The goal is to move the entire stack of disks from the source rod to the target rod, obeying simple rule parameters.",
    timeComplexity: { best: "O(2ⁿ)", average: "O(2ⁿ)", worst: "O(2ⁿ)" },
    spaceComplexity: "O(n) recursion call stack",
    applications: [
      "Recursion design pattern instruction",
      "Mathematical binary patterns research",
    ],
    advantages: ["Demonstrates exact divide and conquer breakdown"],
    disadvantages: [
      "Exponential steps growth (2ⁿ - 1 moves) restricts run size",
    ],
    realWorldUses: [
      "Disk defragmentation movement optimizations",
      "Backup rotating schemes",
    ],
    defaultInput: "3",
    inputType: "recursion",
    pseudocode: `hanoi(n, from_rod, to_rod, aux_rod):
  if n == 1:
    move disk 1 from from_rod to to_rod
    return
  hanoi(n - 1, from_rod, aux_rod, to_rod)
  move disk n from from_rod to to_rod
  hanoi(n - 1, aux_rod, to_rod, from_rod)`,
    code: {
      javascript: `function towerOfHanoi(n, fromRod, toRod, auxRod, moves = []) {
  if (n === 1) {
    moves.push({ disk: 1, from: fromRod, to: toRod });
    return moves;
  }
  towerOfHanoi(n - 1, fromRod, auxRod, toRod, moves);
  moves.push({ disk: n, from: fromRod, to: toRod });
  towerOfHanoi(n - 1, auxRod, toRod, fromRod, moves);
  return moves;
}`,
      python: `def tower_of_hanoi(n, from_rod, to_rod, aux_rod):
    if n == 1:
        print(f"Move disk 1 from {from_rod} to {to_rod}")
        return
    tower_of_hanoi(n - 1, from_rod, aux_rod, to_rod)
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    tower_of_hanoi(n - 1, aux_rod, to_rod, from_rod)`,
      java: `public class Hanoi {
    public static void shift(int n, char src, char dest, char aux) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + src + " to " + dest);
            return;
        }
        shift(n - 1, src, aux, dest);
        System.out.println("Move disk " + n + " from " + src + " to " + dest);
        shift(n - 1, aux, dest, src);
    }
}`,
      cpp: `void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        cout << "Move disk 1 from " << from_rod << " to " << to_rod << endl;
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    cout << "Move disk " << n << " from " << from_rod << " to " << to_rod << endl;
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}`,
    },
  },

  // --- DYNAMIC PROGRAMMING ---
  "climbing-stairs": {
    id: "climbing-stairs",
    name: "Climbing Stairs DP",
    category: "dynamic-programming",
    difficulty: "Easy",
    description:
      "You are climbing a staircase. It takes N steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? Visualizes DP table caching.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n) or O(1) state variables",
    applications: [
      "Pathway counts checker algorithms",
      "Introductory DP learning cases",
    ],
    advantages: [
      "Avoids exponential time complexity check by caching intermediate values in O(n) memory",
    ],
    disadvantages: [
      "Takes additional memory unless state pointers optimized to O(1)",
    ],
    realWorldUses: ["Grid paths traversal routes counts"],
    defaultInput: "5",
    inputType: "dp",
    pseudocode: `climbStairs(n):
  if n <= 2: return n
  dp = array of size n+1
  dp[1] = 1
  dp[2] = 2
  for i = 3 to n:
    dp[i] = dp[i-1] + dp[i-2]
  return dp[n]`,
    code: {
      javascript: `function climbStairs(n) {
  if (n <= 2) return n;
  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`,
      python: `def climb_stairs(n):
    if n <= 2: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`,
      java: `public class ClimbStairs {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}`,
      cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`,
    },
  },

  // --- HASHING ---
  "two-sum": {
    id: "two-sum",
    name: "Two Sum Hash Mapping",
    category: "hashing",
    difficulty: "Easy",
    description:
      "Given an array of integers and a target value, find indices of the two numbers that sum up to that target. Uses a Hash Map to look up complement values in O(1) time.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
    applications: ["Key lookup problems", "Checking sum pairs in arrays"],
    advantages: [
      "Runs in O(n) linear lookup compared to brute-force O(n²) nested check",
    ],
    disadvantages: ["Takes extra O(n) memory to store key-index mappings"],
    realWorldUses: ["Database lookups", "Asset pair matching"],
    defaultInput: "2 7 11 15\nTarget = 9",
    inputType: "hash",
    pseudocode: `twoSum(nums, target):
  map = empty HashMap
  for i = 0 to length(nums)-1:
    complement = target - nums[i]
    if complement in map:
      return [map[complement], i]
    map[nums[i]] = i
  return []`,
    code: {
      javascript: `function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      python: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,
      java: `public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> m;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (m.count(complement)) {
            return {m[complement], i};
        }
        m[nums[i]] = i;
    }
    return {};
}`,
    },
  },
  "heap-sort": {
    id: "heap-sort",
    name: "Heap Sort",
    category: "heaps",
    difficulty: "Medium",
    description:
      "Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. It behaves like selection sort where we first find the maximum element and place the maximum element at the end.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(1)",
    inputType: "heap",
    defaultInput: "12 11 13 5 6 7",
    applications: [
      "Systems concerned with worst-case scenarios",
      "Embedded systems with security concerns",
    ],
    advantages: [
      "In-place sort with O(1) auxiliary storage",
      "Guaranteed O(n log n) performance in all cases",
    ],
    disadvantages: [
      "Poor cache locality and high constant factors",
      "Unstable sorting method",
    ],
    realWorldUses: [
      "Linux kernel memory manager sorting lists",
      "Priority queue implementations",
    ],
    pseudocode: `heapSort(arr):
  buildMaxHeap(arr)
  for i = n-1 down to 1:
    swap(arr[0], arr[i])
    heapify(arr, i, 0)`,
    code: {
      javascript: `function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}`,
      python: `def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)`,
    },
  },
  "min-heap": {
    id: "min-heap",
    name: "Min Heap Operations",
    category: "heaps",
    difficulty: "Medium",
    description:
      "A Min-Heap is a complete binary tree where the key at the root node must be the minimum among all keys present in the Binary Heap, recursively true for all subtrees.",
    timeComplexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)" },
    spaceComplexity: "O(n)",
    inputType: "heap",
    defaultInput: "15 10 20 5 30 25",
    applications: [
      "Priority queues implementation",
      "Dijkstra's shortest path routing algorithm optimization",
    ],
    advantages: [
      "Efficient retrieval of the minimum element in O(1)",
      "O(log n) insertion and deletion operations",
    ],
    disadvantages: [
      "O(n) search time complexity for arbitrary keys",
      "Requires contiguous memory array storage",
    ],
    realWorldUses: [
      "Process scheduler queues in OS kernels",
      "A* search path finding engines",
    ],
    pseudocode: `insert(val):
  heap.push(val)
  bubbleUp(heap.length - 1)`,
    code: {
      javascript: `class MinHeap {
  constructor() { this.heap = []; }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
}`,
      python: `import heapq
class MinHeap:
    def __init__(self): self.heap = []
    def insert(self, val): heapq.heappush(self.heap, val)`,
    },
  },
  "max-heap": {
    id: "max-heap",
    name: "Max Heap Operations",
    category: "heaps",
    difficulty: "Medium",
    description:
      "A Max-Heap is a complete binary tree where the key at the root node must be the maximum among all keys present in the Binary Heap, recursively true for all subtrees.",
    timeComplexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)" },
    spaceComplexity: "O(n)",
    inputType: "heap",
    defaultInput: "15 10 20 5 30 25",
    applications: [
      "Heap sort sorting algorithm",
      "Priority queues where higher values indicate higher priority",
    ],
    advantages: [
      "O(1) lookup for maximum value element",
      "O(log n) standard insert and extract operations",
    ],
    disadvantages: [
      "Finding arbitrary items takes O(n) scan",
      "Not stable index layout",
    ],
    realWorldUses: [
      "Job priority queuing systems",
      "Bandwidth management systems",
    ],
    pseudocode: `insert(val):
  heap.push(val)
  bubbleUpMax(heap.length - 1)`,
    code: {
      javascript: `class MaxHeap {
  constructor() { this.heap = []; }
  insert(val) {
    this.heap.push(val);
    this.bubbleUpMax(this.heap.length - 1);
  }
}`,
      python: `class MaxHeap:
    def __init__(self): self.heap = []
    def insert(self, val):
        self.heap.append(val)
        self.sift_up(len(self.heap) - 1)`,
    },
  },
  "prefix-sum": {
    id: "prefix-sum",
    name: "Prefix Sum",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Prefix Sum involves precomputing the cumulative sum of elements in an array, allowing range sum queries to be answered in O(1) time.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations",
    ],
    advantages: [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation",
    ],
    disadvantages: [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically",
    ],
    realWorldUses: [
      "Database column sum indexes",
      "Graphics renderer brightness mapping",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "array",
    pseudocode:
      "prefixSum(arr):\n  prefix = new Array(arr.length)\n  prefix[0] = arr[0]\n  for i = 1 to arr.length - 1:\n    prefix[i] = prefix[i-1] + arr[i]\n  return prefix",
    code: {
      javascript:
        "function prefixSum(arr) {\n  const prefix = new Array(arr.length);\n  prefix[0] = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    prefix[i] = prefix[i - 1] + arr[i];\n  }\n  return prefix;\n}",
      python:
        "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix",
      java: "public class PrefixSum {\n    public static int[] getPrefixSum(int[] arr) {\n        int[] prefix = new int[arr.length];\n        prefix[0] = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            prefix[i] = prefix[i - 1] + arr[i];\n        }\n        return prefix;\n    }\n}",
      cpp: "vector<int> prefixSum(const vector<int>& arr) {\n    vector<int> prefix(arr.size());\n    prefix[0] = arr[0];\n    for (size_t i = 1; i < arr.size(); ++i) {\n        prefix[i] = prefix[i - 1] + arr[i];\n    }\n    return prefix;\n}",
    },
  },
  "sliding-window": {
    id: "sliding-window",
    name: "Sliding Window",
    category: "arrays",
    difficulty: "Medium",
    description:
      "Sliding Window is a technique that uses a subarray of a fixed or variable size to efficiently track window metrics over a sequence.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control",
    ],
    advantages: [
      "Avoids redundant recalculations",
      "Linear performance tracking",
    ],
    disadvantages: [
      "Only applicable on linear sequences",
      "Tricky index handling",
    ],
    realWorldUses: [
      "Streaming rate limiters",
      "Network buffer packages scanning",
    ],
    defaultInput: "2 1 5 1 3 2",
    inputType: "array",
    pseudocode:
      "slidingWindow(arr, k):\n  windowSum = sum of first k elements\n  maxSum = windowSum\n  for i = k to arr.length - 1:\n    windowSum += arr[i] - arr[i - k]\n    maxSum = max(maxSum, windowSum)\n  return maxSum",
    code: {
      javascript:
        "function maxSubarraySum(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
      python:
        "def max_subarray_sum(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum",
      java: "public class SlidingWindow {\n    public static int maxSubarraySum(int[] arr, int k) {\n        int windowSum = 0;\n        for (int i = 0; i < k; i++) windowSum += arr[i];\n        int maxSum = windowSum;\n        for (int i = k; i < arr.length; i++) {\n            windowSum += arr[i] - arr[i - k];\n            maxSum = Math.max(maxSum, windowSum);\n        }\n        return maxSum;\n    }\n}",
      cpp: "int maxSubarraySum(const vector<int>& arr, int k) {\n    int windowSum = 0;\n    for (int i = 0; i < k; ++i) windowSum += arr[i];\n    int maxSum = windowSum;\n    for (size_t i = k; i < arr.size(); ++i) {\n        windowSum += arr[i] - arr[i - k];\n        maxSum = max(maxSum, windowSum);\n    }\n    return maxSum;\n}",
    },
  },
  "two-pointer": {
    id: "two-pointer",
    name: "Two Pointer Technique",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Two Pointer Technique uses two integer indexes to traverse a sorted array from opposite ends to find pairs or subsets that satisfy specific criteria.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Pair sum targeting in sorted arrays",
      "Reversing arrays in-place",
      "Partitioning steps in Quick Sort",
    ],
    advantages: [
      "Operates with zero auxiliary space",
      "Avoids quadratic nested loops",
    ],
    disadvantages: [
      "Requires the list or array to be pre-sorted",
      "Applicable only to linear containers",
    ],
    realWorldUses: [
      "Data de-duplication utilities",
      "Image mirroring software engines",
    ],
    defaultInput: "1 2 3 4 6 8 9",
    inputType: "array",
    pseudocode:
      "hasPairWithSum(arr, target):\n  left = 0, right = arr.length - 1\n  while left < right:\n    curr = arr[left] + arr[right]\n    if curr == target: return true\n    else if curr < target: left++\n    else: right--\n  return false",
    code: {
      javascript:
        "function hasPairWithSum(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return true;\n    else if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}",
      python:
        "def has_pair_with_sum(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        curr_sum = arr[left] + arr[right]\n        if curr_sum == target:\n            return True\n        elif curr_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return False",
      java: "public class TwoPointer {\n    public static boolean hasPairWithSum(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) return true;\n            else if (sum < target) left++;\n            else right--;\n        }\n        return false;\n    }\n}",
      cpp: "bool hasPairWithSum(const vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left < right) {\n        int sum = arr[left] + arr[right];\n        if (sum == target) return true;\n        else if (sum < target) ++left;\n        else --right;\n    }\n    return false;\n}",
    },
  },
  "rotate-array": {
    id: "rotate-array",
    name: "Rotate Array",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Rotates an array to the right or left by k steps. Frequently solved using array reversal helper calls.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Cyclic buffer indexing",
      "Load balancing round-robin task distributions",
      "Data encryption shuffles",
    ],
    advantages: [
      "In-place rotation option is extremely memory-efficient",
      "Low computational latency",
    ],
    disadvantages: [
      "Requires modulo index computation logic",
      "Element shifts cause array index re-alignments",
    ],
    realWorldUses: [
      "Audio cyclic stream buffer caches",
      "Ring-buffer scheduling networks",
    ],
    defaultInput: "1 2 3 4 5 6 7",
    inputType: "array",
    pseudocode:
      "rotate(arr, k):\n  k = k % arr.length\n  reverse(arr, 0, arr.length - 1)\n  reverse(arr, 0, k - 1)\n  reverse(arr, k, arr.length - 1)",
    code: {
      javascript:
        "function rotate(arr, k) {\n  k = k % arr.length;\n  const reverse = (s, e) => {\n    while (s < e) {\n      let tmp = arr[s]; arr[s] = arr[e]; arr[e] = tmp;\n      s++; e--;\n    }\n  };\n  reverse(0, arr.length - 1);\n  reverse(0, k - 1);\n  reverse(k, arr.length - 1);\n  return arr;\n}",
      python:
        "def rotate(arr, k):\n    n = len(arr)\n    k %= n\n    def reverse(start, end):\n        while start < end:\n            arr[start], arr[end] = arr[end], arr[start]\n            start += 1\n            end -= 1\n    reverse(0, n - 1)\n    reverse(0, k - 1)\n    reverse(k, n - 1)\n    return arr",
      java: "public class RotateArray {\n    public static void rotate(int[] arr, int k) {\n        int n = arr.length;\n        k %= n;\n        reverse(arr, 0, n - 1);\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n    }\n    private static void reverse(int[] arr, int s, int e) {\n        while (s < e) {\n            int tmp = arr[s]; arr[s] = arr[e]; arr[e] = tmp;\n            s++; e--;\n        }\n    }\n}",
      cpp: "void rotate(vector<int>& arr, int k) {\n    int n = arr.size();\n    k %= n;\n    reverse(arr.begin(), arr.end());\n    reverse(arr.begin(), arr.begin() + k);\n    reverse(arr.begin() + k, arr.end());\n}",
    },
  },
  "merge-arrays": {
    id: "merge-arrays",
    name: "Merge Sorted Arrays",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Merges two pre-sorted arrays into a single sorted array using two pointer comparison loops.",
    timeComplexity: {
      best: "O(n + m)",
      average: "O(n + m)",
      worst: "O(n + m)",
    },
    spaceComplexity: "O(n + m)",
    applications: [
      "Merge step inside Merge Sort",
      "Joining pre-sorted databases",
      "Batch dataset reconciliations",
    ],
    advantages: ["Preserves pre-sorted order", "Linear execution latency"],
    disadvantages: ["Requires extra space allocation for the output array"],
    realWorldUses: [
      "Database index merge join engines",
      "Sorted log streaming mergers",
    ],
    defaultInput: "1 3 5\n2 4 6",
    inputType: "array",
    pseudocode:
      "merge(A, B):\n  i = 0, j = 0\n  res = []\n  while i < A.length and j < B.length:\n    if A[i] <= B[j]: res.push(A[i++])\n    else: res.push(B[j++])\n  append remaining items from A or B\n  return res",
    code: {
      javascript:
        "function merge(arr1, arr2) {\n  let res = [], i = 0, j = 0;\n  while (i < arr1.length && j < arr2.length) {\n    if (arr1[i] <= arr2[j]) res.push(arr1[i++]);\n    else res.push(arr2[j++]);\n  }\n  while (i < arr1.length) res.push(arr1[i++]);\n  while (j < arr2.length) res.push(arr2[j++]);\n  return res;\n}",
      python:
        "def merge(arr1, arr2):\n    res, i, j = [], 0, 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            res.append(arr1[i])\n            i += 1\n        else:\n            res.append(arr2[j])\n            j += 1\n    res.extend(arr1[i:])\n    res.extend(arr2[j:])\n    return res",
      java: "public class MergeArrays {\n    public static int[] merge(int[] A, int[] B) {\n        int[] res = new int[A.length + B.length];\n        int i = 0, j = 0, k = 0;\n        while (i < A.length && j < B.length) {\n            if (A[i] <= B[j]) res[k++] = A[i++];\n            else res[k++] = B[j++];\n        }\n        while (i < A.length) res[k++] = A[i++];\n        while (j < B.length) res[k++] = B[j++];\n        return res;\n    }\n}",
      cpp: "vector<int> merge(const vector<int>& A, const vector<int>& B) {\n    vector<int> res;\n    size_t i = 0, j = 0;\n    while (i < A.size() && j < B.size()) {\n        if (A[i] <= B[j]) res.push_back(A[i++]);\n        else res.push_back(B[j++]);\n    }\n    while (i < A.size()) res.push_back(A[i++]);\n    while (j < B.size()) res.push_back(B[j++]);\n    return res;\n}",
    },
  },
  "frequency-count": {
    id: "frequency-count",
    name: "Frequency Count",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Tracks the occurrence frequency of elements in an array using an auxiliary hash or array register.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(u)",
    applications: [
      "Histogram representation",
      "Duplicate validation checks",
      "Categorization maps creation",
    ],
    advantages: ["Extremely simple to implement", "Single linear pass scan"],
    disadvantages: ["Consumes additional space for distinct element mappings"],
    realWorldUses: [
      "Query analytics dashboard counters",
      "Token occurrence logs engines",
    ],
    defaultInput: "2 3 2 4 5 2 3",
    inputType: "array",
    pseudocode:
      "countFreq(arr):\n  freq = {}\n  for item in arr:\n    freq[item] = (freq[item] or 0) + 1\n  return freq",
    code: {
      javascript:
        "function countFrequency(arr) {\n  const freq = {};\n  for (let val of arr) {\n    freq[val] = (freq[val] || 0) + 1;\n  }\n  return freq;\n}",
      python:
        "def count_frequency(arr):\n    freq = {}\n    for val in arr:\n        freq[val] = freq.get(val, 0) + 1\n    return freq",
      java: "import java.util.HashMap;\npublic class Frequency {\n    public static HashMap<Integer, Integer> count(int[] arr) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int x : arr) {\n            map.put(x, map.getOrDefault(x, 0) + 1);\n        }\n        return map;\n    }\n}",
      cpp: "unordered_map<int, int> countFrequency(const vector<int>& arr) {\n    unordered_map<int, int> freq;\n    for (int x : arr) {\n        freq[x]++;\n    }\n    return freq;\n}",
    },
  },
  "linked-list-traversal": {
    id: "linked-list-traversal",
    name: "Linked List Traversal",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Sequential traversal of nodes in a linked list from root head to the tail node pointer.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching",
    ],
    advantages: [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting",
    ],
    disadvantages: ["Lacks direct random indexing support"],
    realWorldUses: [
      "Low-level driver structures",
      "Blockchain transaction validation linking",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "traverse(head):\n  curr = head\n  while curr != null:\n    process(curr.val)\n    curr = curr.next",
    code: {
      javascript:
        "function traverse(head) {\n  let curr = head;\n  while (curr !== null) {\n    console.log(curr.val);\n    curr = curr.next;\n  }\n}",
      python:
        "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next",
      java: "public class LLTraversal {\n    public static void traverse(Node head) {\n        Node curr = head;\n        while (curr != null) {\n            System.out.println(curr.val);\n            curr = curr.next;\n        }\n    }\n}",
      cpp: 'void traverse(Node* head) {\n    Node* curr = head;\n    while (curr != nullptr) {\n        cout << curr->val << " ";\n        curr = curr->next;\n    }\n}',
    },
  },
  "cycle-detection": {
    id: "cycle-detection",
    name: "Cycle Detection (Floyd's)",
    category: "linked-list",
    difficulty: "Medium",
    description:
      "Detects loops in a linked list using two pointers moving at different speeds (slow and fast tortoise and hare).",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Detecting memory pointer circular leaks",
      "Network circular path validation checks",
      "Checking circular list layouts",
    ],
    advantages: [
      "Requires no extra hashing tables",
      "Constant O(1) space footprint",
    ],
    disadvantages: [
      "Requires structural list structure modification on removal",
      "Double pointers coordination overhead",
    ],
    realWorldUses: [
      "Router loop path checking protocols",
      "OS process thread circular dependencies checking",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "hasCycle(head):\n  slow = head, fast = head\n  while fast != null and fast.next != null:\n    slow = slow.next\n    fast = fast.next.next\n    if slow == fast: return true\n  return false",
    code: {
      javascript:
        "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
      python:
        "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False",
      java: "public class CycleDetection {\n    public static boolean hasCycle(Node head) {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}",
      cpp: "bool hasCycle(Node* head) {\n    Node* slow = head; Node* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
    },
  },
  "middle-node": {
    id: "middle-node",
    name: "Find Middle Node",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Finds the middle element of a linked list using the slow/fast tortoise and hare pointer technique.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Splitting linked lists in Merge Sort",
      "Checking middle attributes of nodes",
      "Dividing dynamic decks",
    ],
    advantages: ["Calculates target in a single pass", "O(1) extra space"],
    disadvantages: ["Relies on sequential node scanning (no random indexes)"],
    realWorldUses: [
      "Data dividing stream schedulers",
      "Linked-list based sorting algorithms",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "getMiddle(head):\n  slow = head, fast = head\n  while fast != null and fast.next != null:\n    slow = slow.next\n    fast = fast.next.next\n  return slow",
    code: {
      javascript:
        "function getMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}",
      python:
        "def get_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow",
      java: "public class MiddleNode {\n    public static Node getMiddle(Node head) {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n}",
      cpp: "Node* getMiddle(Node* head) {\n    Node* slow = head;\n    Node* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    },
  },
  "stack-operations": {
    id: "stack-operations",
    name: "Stack Operations",
    category: "stack",
    difficulty: "Easy",
    description:
      "Basic LIFO operations (Push, Pop, Peek) demonstrating element storage on top of a stack frame.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Expression evaluations",
      "Backtracking algorithms",
      "Browser back-button history navigation tracks",
    ],
    advantages: ["Simplest LIFO logic", "Constant-time O(1) operations"],
    disadvantages: ["Strict sequential stack frames access constraint"],
    realWorldUses: ["Compiler recursion stacks", "Undo/redo logs managers"],
    defaultInput: "1 2 3 4 5",
    inputType: "stack",
    pseudocode:
      "push(val):\n  stack.append(val)\npop():\n  return stack.removeLast()",
    code: {
      javascript:
        "class Stack {\n  constructor() { this.items = []; }\n  push(x) { this.items.push(x); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n}",
      python:
        "class Stack:\n    def __init__(self): self.items = []\n    def push(self, x): self.items.append(x)\n    def pop(self): return self.items.pop()\n    def peek(self): return self.items[-1]",
      java: "import java.util.Stack;\n// standard java.util.Stack is used.",
      cpp: "import <stack>;\n// std::stack is used.",
    },
  },
  "next-greater-element": {
    id: "next-greater-element",
    name: "Next Greater Element",
    category: "stack",
    difficulty: "Medium",
    description:
      "Finds the first greater element to the right of each element in an array using a monotonic stack.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Dynamic range value scans",
      "Subarray metrics checks",
      "Temperature forecasting spikes",
    ],
    advantages: [
      "Linear processing time O(n) instead of quadratic O(n^2) nested scans",
    ],
    disadvantages: ["Requires extra space for monotonic stack tracker storage"],
    realWorldUses: [
      "Industrial sensor telemetry alarm triggers",
      "Time-series database change point detections",
    ],
    defaultInput: "4 5 2 25",
    inputType: "stack",
    pseudocode:
      "NGE(arr):\n  stack = [], res = new Array(arr.length, -1)\n  for i = 0 to arr.length - 1:\n    while stack not empty and arr[stack.top()] < arr[i]:\n      res[stack.pop()] = arr[i]\n    stack.push(i)\n  return res",
    code: {
      javascript:
        "function nextGreaterElement(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {\n      res[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}",
      python:
        "def next_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] < arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res",
      java: "import java.util.Stack;\npublic class NGE {\n    public static int[] find(int[] arr) {\n        int[] res = new int[arr.length];\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < arr.length; i++) {\n            res[i] = -1;\n            while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {\n                res[stack.pop()] = arr[i];\n            }\n            stack.push(i);\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> nextGreaterElement(const vector<int>& arr) {\n    vector<int> res(arr.size(), -1);\n    stack<int> s;\n    for (size_t i = 0; i < arr.size(); ++i) {\n        while (!s.empty() && arr[s.top()] < arr[i]) {\n            res[s.top()] = arr[i];\n            s.pop();\n        }\n        s.push(i);\n    }\n    return res;\n}",
    },
  },
  "circular-queue": {
    id: "circular-queue",
    name: "Circular Queue",
    category: "queue",
    difficulty: "Medium",
    description:
      "A queue that utilizes circular buffer arrays to avoid memory fragmentation on insertion/deletion.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Ring buffers memory allocators",
      "CPU process round-robin scheduler lists",
      "Streaming audio buffers",
    ],
    advantages: [
      "Zero index element shuffling shifts requirements",
      "Fixed queue boundary size control",
    ],
    disadvantages: ["Bounded storage capacity constraints"],
    realWorldUses: [
      "Router packet switching caches",
      "Microcontroller serial data stream decoders",
    ],
    defaultInput: "10 20 30 40",
    inputType: "queue",
    pseudocode:
      "enqueue(val):\n  if (rear + 1) % size == front: Queue Full\n  else:\n    rear = (rear + 1) % size\n    items[rear] = val",
    code: {
      javascript:
        "class CircularQueue {\n  constructor(k) {\n    this.size = k; this.queue = new Array(k);\n    this.front = -1; this.rear = -1;\n  }\n  enqueue(val) {\n    if ((this.rear + 1) % this.size === this.front) return false;\n    if (this.front === -1) this.front = 0;\n    this.rear = (this.rear + 1) % this.size;\n    this.queue[this.rear] = val;\n    return true;\n  }\n}",
      python:
        "class CircularQueue:\n    def __init__(self, k):\n        self.size = k\n        self.queue = [None] * k\n        self.front = self.rear = -1\n    def enqueue(self, val):\n        if (self.rear + 1) % self.size == self.front: return False\n        if self.front == -1: self.front = 0\n        self.rear = (self.rear + 1) % self.size\n        self.queue[self.rear] = val\n        return True",
      java: "public class CircularQueue {\n    int[] q; int front = -1, rear = -1, size;\n    public CircularQueue(int k) { size = k; q = new int[k]; }\n    public boolean enqueue(int val) {\n        if ((rear + 1) % size == front) return false;\n        if (front == -1) front = 0;\n        rear = (rear + 1) % size;\n        q[rear] = val;\n        return true;\n    }\n}",
      cpp: "class CircularQueue {\n    vector<int> q; int front = -1, rear = -1, size;\npublic:\n    CircularQueue(int k) { size = k; q.resize(k); }\n    bool enqueue(int val) {\n        if ((rear + 1) % size == front) return false;\n        if (front == -1) front = 0;\n        rear = (rear + 1) % size;\n        q[rear] = val;\n        return true;\n    }\n};",
    },
  },
  "sliding-window-max": {
    id: "sliding-window-max",
    name: "Sliding Window Maximum",
    category: "queue",
    difficulty: "Hard",
    description:
      "Finds the maximum value inside a sliding window of size k at every step using a monotonic deque.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(k)",
    applications: [
      "Streaming data analysis",
      "Image filter blurring kernel windows",
      "Financial price trend peaks monitoring",
    ],
    advantages: [
      "Guarantees linear-time processing O(n) regardless of window size k",
    ],
    disadvantages: ["Requires bidirectional queue structure (deque)"],
    realWorldUses: [
      "High-frequency quantitative trading trackers",
      "Real-time network traffic window analyzers",
    ],
    defaultInput: "1 3 -1 -3 5 3 6 7",
    inputType: "queue",
    pseudocode:
      "maxSlidingWindow(arr, k):\n  deque = [] // stores indices\n  res = []\n  for i = 0 to arr.length - 1:\n    if deque.front() == i - k: deque.popFront()\n    while deque not empty and arr[deque.back()] < arr[i]: deque.popBack()\n    deque.pushBack(i)\n    if i >= k - 1: res.push(arr[deque.front()])\n  return res",
    code: {
      javascript:
        "function maxSlidingWindow(arr, k) {\n  const deque = [], res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (deque.length > 0 && deque[0] === i - k) deque.shift();\n    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {\n      deque.pop();\n    }\n    deque.push(i);\n    if (i >= k - 1) res.push(arr[deque[0]]);\n  }\n  return res;\n}",
      python:
        "from collections import deque\ndef max_sliding_window(arr, k):\n    q, res = deque(), []\n    for i, x in enumerate(arr):\n        if q and q[0] == i - k: q.popleft()\n        while q and arr[q[-1]] < x: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(arr[q[0]])\n    return res",
      java: "import java.util.Deque;\nimport java.util.LinkedList;\npublic class SlidingWindowMax {\n    public static int[] maxSlidingWindow(int[] arr, int k) {\n        if (arr.length == 0) return new int[0];\n        int[] res = new int[arr.length - k + 1];\n        Deque<Integer> q = new LinkedList<>();\n        int idx = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (!q.isEmpty() && q.peek() == i - k) q.poll();\n            while (!q.isEmpty() && arr[q.peekLast()] < arr[i]) q.pollLast();\n            q.offer(i);\n            if (i >= k - 1) res[idx++] = arr[q.peek()];\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> maxSlidingWindow(const vector<int>& arr, int k) {\n    vector<int> res; deque<int> q;\n    for (size_t i = 0; i < arr.size(); ++i) {\n        if (!q.empty() && q.front() == i - k) q.pop_front();\n        while (!q.empty() && arr[q.back()] < arr[i]) q.pop_back();\n        q.push_back(i);\n        if (i >= k - 1) res.push_back(arr[q.front()]);\n    }\n    return res;\n}",
    },
  },
  "topological-sort": {
    id: "topological-sort",
    name: "Topological Sort",
    category: "graphs",
    difficulty: "Medium",
    description:
      "Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, vertex u comes before v.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Package build dependencies sequencing",
      "Project tasks planning schedules",
      "Course prerequisite sequencing",
    ],
    advantages: [
      "Detects cyclic dependency paths immediately",
      "Linear execution latency",
    ],
    disadvantages: [
      "Only applicable on Directed Acyclic Graphs (fails if graph contains cycles)",
    ],
    realWorldUses: [
      "NPM/Maven package managers dependency resolution engines",
      "Make/CMake compiler tasks generators",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 3\n3 4",
    inputType: "graph",
    pseudocode:
      "topoSort(graph):\n  visited = set()\n  stack = []\n  for node in graph:\n    if node not in visited:\n      dfs(node, visited, stack)\n  return stack.reverse()",
    code: {
      javascript:
        "function topologicalSort(numNodes, adj) {\n  const visited = new Set(), stack = [];\n  function dfs(curr) {\n    visited.add(curr);\n    if (adj[curr]) {\n      for (let next of adj[curr]) {\n        if (!visited.has(next)) dfs(next);\n      }\n    }\n    stack.push(curr);\n  }\n  for (let i = 0; i < numNodes; i++) {\n    if (!visited.has(i)) dfs(i);\n  }\n  return stack.reverse();\n}",
      python:
        "def topological_sort(num_nodes, adj):\n    visited, stack = set(), []\n    def dfs(curr):\n        visited.add(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                dfs(neighbor)\n        stack.append(curr)\n    for i in range(num_nodes):\n        if i not in visited:\n            dfs(i)\n    return stack[::-1]",
      java: "import java.util.ArrayList;\nimport java.util.Stack;\npublic class TopoSort {\n    public static void dfs(int curr, ArrayList<ArrayList<Integer>> adj, boolean[] visited, Stack<Integer> s) {\n        visited[curr] = true;\n        for (int next : adj.get(curr)) {\n            if (!visited[next]) dfs(next, adj, visited, s);\n        }\n        s.push(curr);\n    }\n}",
      cpp: "void dfs(int curr, const vector<vector<int>>& adj, vector<bool>& visited, stack<int>& s) {\n    visited[curr] = true;\n    for (int next : adj[curr]) {\n        if (!visited[next]) dfs(next, adj, visited, s);\n    }\n    s.push(curr);\n}",
    },
  },
  "hash-map": {
    id: "hash-map",
    name: "Hash Map",
    category: "hashing",
    difficulty: "Easy",
    description:
      "A Hash Map is a data structure that implements an associative array abstract data type, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Caching mechanisms",
      "Database indexing",
      "Symbol tables in compilers",
    ],
    advantages: [
      "Extremely fast search, insertion, and deletion",
      "Flexible key-value mappings",
      "Direct index calculations",
    ],
    disadvantages: [
      "Collision handling overhead",
      "Poor performance with bad hash functions",
      "High memory usage to maintain low load factor",
    ],
    realWorldUses: [
      "In-memory databases like Redis",
      "Web server session managers",
    ],
    defaultInput: "2 7 11 15",
    inputType: "hash",
    pseudocode:
      "insert(key, value):\n  index = hash(key) % capacity\n  bucket = table[index]\n  update or append (key, value)",
    code: {
      javascript:
        "class HashMap {\n  constructor() {\n    this.table = {};\n  }\n  put(key, value) {\n    this.table[key] = value;\n  }\n  get(key) {\n    return this.table[key];\n  }\n}",
      python:
        "class HashMap:\n    def __init__(self):\n        self.table = {}\n    def put(self, key, value):\n        self.table[key] = value\n    def get(self, key):\n        return self.table.get(key)",
      java: "import java.util.HashMap;\n// Built-in java.util.HashMap is typically used.",
      cpp: "import <unordered_map>;\n// std::unordered_map is typically used.",
    },
  },
  "group-anagrams": {
    id: "group-anagrams",
    name: "Group Anagrams",
    category: "strings",
    difficulty: "Medium",
    description:
      "Groups a list of strings into sub-lists containing anagrams by sorting each string or frequency hashing.",
    timeComplexity: {
      best: "O(n * k log k)",
      average: "O(n * k log k)",
      worst: "O(n * k log k)",
    },
    spaceComplexity: "O(n * k)",
    applications: [
      "Text classification",
      "Word puzzle generators",
      "Lexical anagram detection scanners",
    ],
    advantages: [
      "Groups string datasets in a single iteration pass",
      "Ensures consistent category indexing",
    ],
    disadvantages: [
      "String sorting consumes execution latency on huge string lengths",
    ],
    realWorldUses: [
      "Scrabble solver dictionary indexers",
      "Linguistic analysis word pattern organizers",
    ],
    defaultInput: "eat tea tan ate nat bat",
    inputType: "strings",
    pseudocode:
      "groupAnagrams(strs):\n  map = {}\n  for s in strs:\n    key = sortChars(s)\n    map[key].append(s)\n  return map.values()",
    code: {
      javascript:
        "function groupAnagrams(strs) {\n  const map = {};\n  for (let s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map);\n}",
      python:
        'def group_anagrams(strs):\n    map_dict = {}\n    for s in strs:\n        key = "".join(sorted(s))\n        map_dict.setdefault(key, []).append(s)\n    return list(map_dict.values())',
      java: "import java.util.*;\npublic class GroupAnagrams {\n    public static List<List<String>> group(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] arr = s.toCharArray();\n            Arrays.sort(arr);\n            String key = new String(arr);\n            map.putIfAbsent(key, new ArrayList<>());\n            map.get(key).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}",
      cpp: "vector<vector<string>> groupAnagrams(const vector<string>& strs) {\n    unordered_map<string, vector<string>> map;\n    for (const string& s : strs) {\n        string key = s;\n        sort(key.begin(), key.end());\n        map[key].push_back(s);\n    }\n    vector<vector<string>> res;\n    for (auto& pair : map) res.push_back(pair.second);\n    return res;\n}",
    },
  },
  "fibonacci-recursion": {
    id: "fibonacci-recursion",
    name: "Fibonacci (Recursion)",
    category: "recursion",
    difficulty: "Easy",
    description:
      "Computes the nth Fibonacci number using a binary recursion tree without memoization.",
    timeComplexity: {
      best: "O(2^n)",
      average: "O(2^n)",
      worst: "O(2^n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Demonstrating recursive tree layouts",
      "Measuring call stack limits",
      "Introduction to dynamic programming necessity",
    ],
    advantages: [
      "Simplest recursive code presentation",
      "Direct mathematical relation matching",
    ],
    disadvantages: [
      "Severe exponential execution scaling (recalculates identical subproblems redundantly)",
    ],
    realWorldUses: [
      "Academic recursion training cases",
      "Instructional code debugging tracing examples",
    ],
    defaultInput: "5",
    inputType: "recursion",
    pseudocode: "fib(n):\n  if n <= 1: return n\n  return fib(n-1) + fib(n-2)",
    code: {
      javascript:
        "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}",
      python:
        "def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)",
      java: "public class Fibonacci {\n    public static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n}",
      cpp: "int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}",
    },
  },
  "n-queens": {
    id: "n-queens",
    name: "N-Queens",
    category: "backtracking",
    difficulty: "Hard",
    description:
      "Places N queens on an N x N chessboard such that no two queens threaten each other, using backtracking search.",
    timeComplexity: {
      best: "O(N!)",
      average: "O(N!)",
      worst: "O(N!)",
    },
    spaceComplexity: "O(N^2)",
    applications: [
      "Resource allocations under constraints",
      "Testing backtracking tree optimizations",
      "Industrial layout configurations search",
    ],
    advantages: [
      "Finds all possible configuration answers",
      "Prunes branch choices early to save compute",
    ],
    disadvantages: [
      "High factorial execution scale (fails for large chessboards)",
    ],
    realWorldUses: [
      "Automated spatial routing layout planning",
      "Constrained scheduling conflict solvers",
    ],
    defaultInput: "4",
    inputType: "recursion",
    pseudocode:
      "solve(row, queens):\n  if row == N: return true\n  for col = 0 to N-1:\n    if isSafe(row, col, queens):\n      queens.push(row, col)\n      if solve(row + 1, queens): return true\n      queens.pop()\n  return false",
    code: {
      javascript:
        "function solveNQueens(n) {\n  const board = Array.from({length: n}, () => Array(n).fill('.'));\n  const res = [];\n  function isSafe(r, c) {\n    for (let i = 0; i < r; i++) {\n      if (board[i][c] === 'Q') return false;\n      const diagL = c - (r - i), diagR = c + (r - i);\n      if (diagL >= 0 && board[i][diagL] === 'Q') return false;\n      if (diagR < n && board[i][diagR] === 'Q') return false;\n    }\n    return true;\n  }\n}",
      python:
        "def solve_n_queens(n):\n    res = []\n    board = [['.'] * n for _ in range(n)]\n    def is_safe(r, c):\n        for i in range(r):\n            if board[i][c] == 'Q': return False\n            if c - (r - i) >= 0 and board[i][c - (r - i)] == 'Q': return False\n            if c + (r - i) < n and board[i][c + (r - i)] == 'Q': return False\n        return True",
      java: "// Backtracking search implementation for N-Queens.",
      cpp: "// Backtracking search implementation for N-Queens.",
    },
  },
  "knapsack-dp": {
    id: "knapsack-dp",
    name: "0/1 Knapsack (DP)",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Solves the 0/1 Knapsack optimization problem by computing subproblem matrices storing maximum value for weight capacity constraints.",
    timeComplexity: {
      best: "O(N * W)",
      average: "O(N * W)",
      worst: "O(N * W)",
    },
    spaceComplexity: "O(N * W)",
    applications: [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections",
    ],
    advantages: [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops",
    ],
    disadvantages: ["Dynamic memory space scales with knapsack capacity W"],
    realWorldUses: [
      "Server load distributors",
      "Cargo shipping container loading coordinators",
    ],
    defaultInput: "2 3 4 5\n3 4 5 6\n5",
    inputType: "dp",
    pseudocode:
      "knapsack(W, wt, val):\n  dp = 2D array size (N+1) x (W+1)\n  for i = 1 to N:\n    for w = 1 to W:\n      if wt[i-1] <= w:\n        dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w])\n      else:\n        dp[i][w] = dp[i-1][w]\n  return dp[N][W]",
    code: {
      javascript:
        "function knapsack(W, wt, val, n) {\n  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));\n  for (let i = 1; i <= n; i++) {\n    for (let w = 1; w <= W; w++) {\n      if (wt[i - 1] <= w) {\n        dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n      } else {\n        dp[i][w] = dp[i - 1][w];\n      }\n    }\n  }\n  return dp[n][W];\n}",
      python:
        "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]",
      java: "public class Knapsack {\n    public static int solve(int W, int[] wt, int[] val, int n) {\n        int[][] dp = new int[n + 1][W + 1];\n        for (int i = 1; i <= n; i++) {\n            for (int w = 1; w <= W; w++) {\n                if (wt[i - 1] <= w) {\n                    dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n                } else {\n                    dp[i][w] = dp[i - 1][w];\n                }\n            }\n        }\n        return dp[n][W];\n    }\n}",
      cpp: "int knapsack(int W, const vector<int>& wt, const vector<int>& val, int n) {\n    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));\n    for (int i = 1; i <= n; ++i) {\n        for (int w = 1; w <= W; ++w) {\n            if (wt[i - 1] <= w) {\n                dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n            } else {\n                dp[i][w] = dp[i - 1][w];\n            }\n        }\n    }\n    return dp[n][W];\n}",
    },
  },
  "coin-change-dp": {
    id: "coin-change-dp",
    name: "Coin Change (DP)",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Finds the minimum number of coins needed to make a target amount using Dynamic Programming tabulation.",
    timeComplexity: {
      best: "O(N * A)",
      average: "O(N * A)",
      worst: "O(N * A)",
    },
    spaceComplexity: "O(A)",
    applications: [
      "Cash registers change dispensers",
      "Vending machine transactions processing",
      "Token denomination optimization",
    ],
    advantages: [
      "Handles arbitrary coin denomination systems",
      "Avoids subproblem recalculations",
    ],
    disadvantages: ["Dynamic memory space grows with target amount"],
    realWorldUses: [
      "POS vending machines transaction processors",
      "E-commerce point rewards calculator modules",
    ],
    defaultInput: "1 2 5\n11",
    inputType: "dp",
    pseudocode:
      "coinChange(coins, amount):\n  dp = array size amount + 1, fill infinity\n  dp[0] = 0\n  for coin in coins:\n    for i = coin to amount:\n      dp[i] = min(dp[i], dp[i - coin] + 1)\n  return dp[amount]",
    code: {
      javascript:
        "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let coin of coins) {\n    for (let i = coin; i <= amount; i++) {\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
      python:
        "def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      java: "import java.util.Arrays;\npublic class CoinChange {\n    public static int solve(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}",
      cpp: "int coinChange(const vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int i = coin; i <= amount; ++i) {\n            dp[i] = min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
    },
  },
  "ternary-search": {
    id: "ternary-search",
    name: "Ternary Search",
    category: "searching",
    difficulty: "Medium",
    description:
      "A divide-and-conquer search algorithm that divides a sorted array into three equal parts to find target indices in logarithmic time.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log3 n)",
      worst: "O(log3 n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Locating target elements in sorted spaces",
      "Finding extrema of unimodal mathematical functions",
      "Game AI heuristic space checks",
    ],
    advantages: [
      "Can find mathematical peaks and valleys (extrema) extremely fast",
    ],
    disadvantages: [
      "Performs more comparison operations per step than Binary Search",
    ],
    realWorldUses: [
      "Image color peak channel solvers",
      "Unimodal function optimization systems",
    ],
    defaultInput: "1 3 5 7 9 11 13 15",
    inputType: "search",
    pseudocode:
      "ternarySearch(arr, l, r, val):\n  if r >= l:\n    mid1 = l + (r - l) / 3\n    mid2 = r - (r - l) / 3\n    if arr[mid1] == val: return mid1\n    if arr[mid2] == val: return mid2\n    if val < arr[mid1]: return ternarySearch(arr, l, mid1 - 1, val)\n    else if val > arr[mid2]: return ternarySearch(arr, mid2 + 1, r, val)\n    else: return ternarySearch(arr, mid1 + 1, mid2 - 1, val)\n  return -1",
    code: {
      javascript:
        "function ternarySearch(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (r >= l) {\n    const mid1 = l + Math.floor((r - l) / 3);\n    const mid2 = r - Math.floor((r - l) / 3);\n    if (arr[mid1] === target) return mid1;\n    if (arr[mid2] === target) return mid2;\n    if (target < arr[mid1]) r = mid1 - 1;\n    else if (target > arr[mid2]) l = mid2 + 1;\n    else { l = mid1 + 1; r = mid2 - 1; }\n  }\n  return -1;\n}",
      python:
        "def ternary_search(arr, target):\n    l, r = 0, len(arr) - 1\n    while r >= l:\n        mid1 = l + (r - l) // 3\n        mid2 = r - (r - l) // 3\n        if arr[mid1] == target: return mid1\n        if arr[mid2] == target: return mid2\n        if target < arr[mid1]: r = mid1 - 1\n        elif target > arr[mid2]: l = mid2 + 1\n        else:\n            l = mid1 + 1\n            r = mid2 - 1\n    return -1",
      java: "public class TernarySearch {\n    public static int search(int[] arr, int target) {\n        int l = 0, r = arr.length - 1;\n        while (r >= l) {\n            int mid1 = l + (r - l) / 3;\n            int mid2 = r - (r - l) / 3;\n            if (arr[mid1] == target) return mid1;\n            if (arr[mid2] == target) return mid2;\n            if (target < arr[mid1]) r = mid1 - 1;\n            else if (target > arr[mid2]) l = mid2 + 1;\n            else { l = mid1 + 1; r = mid2 - 1; }\n        }\n        return -1;\n    }\n}",
      cpp: "int ternarySearch(const vector<int>& arr, int target) {\n    int l = 0, r = arr.size() - 1;\n    while (r >= l) {\n        int mid1 = l + (r - l) / 3;\n        int mid2 = r - (r - l) / 3;\n        if (arr[mid1] == target) return mid1;\n        if (arr[mid2] == target) return mid2;\n        if (target < arr[mid1]) r = mid1 - 1;\n        else if (target > arr[mid2]) l = mid2 + 1;\n        else { l = mid1 + 1; r = mid2 - 1; }\n    }\n    return -1;\n}",
    },
  },
  bfs: {
    id: "bfs",
    name: "BFS Traversal",
    category: "graphs",
    difficulty: "Easy",
    description:
      "Breadth-First Search graph traversal exploring neighbors level-by-level using a FIFO queue.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Finding shortest paths in unweighted graphs",
      "Social network friends recommendations levels checks",
      "GPS maps directions searches",
    ],
    advantages: [
      "Guarantees locating the absolute closest/shortest node paths first",
    ],
    disadvantages: [
      "Requires significant memory space to store visited queue vertices",
    ],
    realWorldUses: [
      "Web search crawlers indexing linkages",
      "Facebook Graph search level queries solvers",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 4",
    inputType: "graph",
    pseudocode:
      "bfs(start, adj):\n  visited = set(start)\n  queue = [start]\n  while queue not empty:\n    curr = queue.popFront()\n    process(curr)\n    for next in adj[curr]:\n      if next not in visited:\n        visited.add(next)\n        queue.push(next)",
    code: {
      javascript:
        "function bfs(start, adj, numNodes) {\n  const visited = new Set([start]), queue = [start], res = [];\n  while (queue.length > 0) {\n    const curr = queue.shift();\n    res.push(curr);\n    for (let neighbor of adj[curr] || []) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return res;\n}",
      python:
        "from collections import deque\ndef bfs(start, adj):\n    visited, q = {start}, deque([start])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n    return res",
      java: "import java.util.*;\npublic class BFS {\n    public static List<Integer> traverse(int start, List<List<Integer>> adj) {\n        List<Integer> res = new ArrayList<>();\n        boolean[] visited = new boolean[adj.size()];\n        Queue<Integer> q = new LinkedList<>();\n        q.add(start); visited[start] = true;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); res.add(curr);\n            for (int neighbor : adj.get(curr)) {\n                if (!visited[neighbor]) {\n                    visited[neighbor] = true; q.add(neighbor);\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> bfs(int start, const vector<vector<int>>& adj) {\n    vector<int> res; vector<bool> visited(adj.size(), false);\n    queue<int> q; q.push(start); visited[start] = true;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop(); res.push_back(curr);\n        for (int neighbor : adj[curr]) {\n            if (!visited[neighbor]) {\n                visited[neighbor] = true; q.push(neighbor);\n            }\n        }\n    }\n    return res;\n}",
    },
  },
  dfs: {
    id: "dfs",
    name: "DFS Traversal",
    category: "graphs",
    difficulty: "Easy",
    description:
      "Depth-First Search traversal visiting nodes recursively depth-by-depth using a call stack.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving",
    ],
    advantages: [
      "Consumes much less memory overhead compared to BFS on deep tree networks",
    ],
    disadvantages: [
      "Does not guarantee finding the shortest route pathways first",
    ],
    realWorldUses: [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 4",
    inputType: "graph",
    pseudocode:
      "dfs(curr, visited, adj):\n  visited.add(curr)\n  process(curr)\n  for neighbor in adj[curr]:\n    if neighbor not in visited:\n      dfs(neighbor, visited, adj)",
    code: {
      javascript:
        "function dfs(start, adj) {\n  const visited = new Set(), res = [];\n  function traverse(curr) {\n    visited.add(curr);\n    res.push(curr);\n    for (let neighbor of adj[curr] || []) {\n      if (!visited.has(neighbor)) traverse(neighbor);\n    }\n  }\n  traverse(start);\n  return res;\n}",
      python:
        "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res",
      java: "import java.util.*;\npublic class DFS {\n    public static void traverse(int curr, List<List<Integer>> adj, boolean[] visited, List<Integer> res) {\n        visited[curr] = true; res.add(curr);\n        for (int neighbor : adj.get(curr)) {\n            if (!visited[neighbor]) traverse(neighbor, adj, visited, res);\n        }\n    }\n}",
      cpp: "void dfs(int curr, const vector<vector<int>>& adj, vector<bool>& visited, vector<int>& res) {\n    visited[curr] = true; res.push_back(curr);\n    for (int neighbor : adj[curr]) {\n        if (!visited[neighbor]) dfs(neighbor, adj, visited, res);\n    }\n}",
    },
  },
  "bst-search": {
    id: "bst-search",
    name: "BST Search",
    category: "trees",
    difficulty: "Easy",
    description:
      "Searches for a node inside a Binary Search Tree by recursively splitting traversal space based on element values.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Fast dynamic item lookup indexes",
      "Real-time key query routers",
      "Range lookup solvers",
    ],
    advantages: [
      "Extremely efficient query lookup speeds on balanced binary search trees",
    ],
    disadvantages: [
      "Query time degrades to linear O(n) scan on highly skewed layouts",
    ],
    realWorldUses: [
      "Database B-Tree indexes layouts",
      "File storage systems tree directories",
    ],
    defaultInput: "8 3 10 1 6 14",
    inputType: "tree",
    pseudocode:
      "search(root, target):\n  if root == null or root.val == target: return root\n  if target < root.val: return search(root.left, target)\n  return search(root.right, target)",
    code: {
      javascript:
        "function searchBST(root, target) {\n  if (!root || root.val === target) return root;\n  if (target < root.val) return searchBST(root.left, target);\n  return searchBST(root.right, target);\n}",
      python:
        "def search_bst(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search_bst(root.left, target)\n    return search_bst(root.right, target)",
      java: "public class BSTSearch {\n    public static Node search(Node root, int target) {\n        if (root == null || root.val == target) return root;\n        if (target < root.val) return search(root.left, target);\n        return search(root.right, target);\n    }\n}",
      cpp: "Node* search(Node* root, int target) {\n    if (root == nullptr || root->val == target) return root;\n    if (target < root->val) return search(root->left, target);\n    return search(root->right, target);\n}",
    },
  },
  "tree-height": {
    id: "tree-height",
    name: "Binary Tree Height",
    category: "trees",
    difficulty: "Easy",
    description:
      "Calculates the maximum height of a binary tree by recursively evaluating the height of left/right subtrees.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Tree balancing factor checks",
      "Measuring layout depths",
      "Tree structure validations",
    ],
    advantages: [
      "Visits every node exactly once to count height",
      "Low recursive memory size",
    ],
    disadvantages: ["Consumes linear stack frames proportional to tree height"],
    realWorldUses: [
      "AVL self-balancing tree checks",
      "File path depth indexing generators",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "tree",
    pseudocode:
      "getHeight(root):\n  if root == null: return 0\n  return 1 + max(getHeight(root.left), getHeight(root.right))",
    code: {
      javascript:
        "function getHeight(root) {\n  if (!root) return 0;\n  return 1 + Math.max(getHeight(root.left), getHeight(root.right));\n}",
      python:
        "def get_height(root):\n    if not root: return 0\n    return 1 + max(get_height(root.left), get_height(root.right))",
      java: "public class TreeHeight {\n    public static int getHeight(Node root) {\n        if (root == null) return 0;\n        return 1 + Math.max(getHeight(root.left), getHeight(root.right));\n    }\n}",
      cpp: "int getHeight(Node* root) {\n    if (root == nullptr) return 0;\n    return 1 + max(getHeight(root->left), getHeight(root->right));\n}",
    },
  },
  lca: {
    id: "lca",
    name: "Lowest Common Ancestor",
    category: "trees",
    difficulty: "Medium",
    description:
      "Finds the lowest common ancestor node for two target nodes p and q inside a binary tree structure.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Linguistic hierarchy relation check",
      "Organisational manager links queries",
      "Inheritance trees analysis",
    ],
    advantages: [
      "Solves the lookup in a single traversal pass",
      "O(h) auxiliary recursion stack space",
    ],
    disadvantages: [
      "Lacks caching support for multiple consecutive node ancestor queries",
    ],
    realWorldUses: [
      "Git branch checkout merge-base lookup engines",
      "Linguistic parsing syntax dependency check",
    ],
    defaultInput: "3 5 1 6 2 0 8",
    inputType: "tree",
    pseudocode:
      "LCA(root, p, q):\n  if root == null or root == p or root == q: return root\n  left = LCA(root.left, p, q)\n  right = LCA(root.right, p, q)\n  if left and right: return root\n  return left ? left : right",
    code: {
      javascript:
        "function lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (left && right) return root;\n  return left ? left : right;\n}",
      python:
        "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left if left else right",
      java: "public class LCA {\n    public static Node lowestCommonAncestor(Node root, Node p, Node q) {\n        if (root == null || root == p || root == q) return root;\n        Node left = lowestCommonAncestor(root.left, p, q);\n        Node right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        return left != null ? left : right;\n    }\n}",
      cpp: "Node* lowestCommonAncestor(Node* root, Node* p, Node* q) {\n    if (root == nullptr || root == p || root == q) return root;\n    Node* left = lowestCommonAncestor(root->left, p, q);\n    Node* right = lowestCommonAncestor(root->right, p, q);\n    if (left != nullptr && right != nullptr) return root;\n    return left != nullptr ? left : right;\n}",
    },
  },
  "rat-in-a-maze": {
    id: "rat-in-a-maze",
    name: "Rat in a Maze",
    category: "backtracking",
    difficulty: "Medium",
    description:
      "Rat in a Maze is a classic backtracking problem where a rat starts at (0,0) and seeks a path through blocks to reach (N-1, N-1).",
    timeComplexity: {
      best: "O(2^(n^2))",
      average: "O(2^(n^2))",
      worst: "O(2^(n^2))",
    },
    spaceComplexity: "O(n^2)",
    applications: [
      "Pathfinding in grids",
      "Robot routing under obstacles",
      "AI maze solving",
    ],
    advantages: [
      "Guarantees finding a path if it exists",
      "Can print all possible paths",
    ],
    disadvantages: [
      "High exponential time complexity",
      "Requires recursion stack space",
    ],
    realWorldUses: [
      "Micro-mouse path navigation",
      "Autonomous floor sweepers obstacle avoidance routing",
    ],
    defaultInput: "0 1 0 0\n0 0 0 1\n1 0 0 0\n0 1 0 0",
    inputType: "grid",
    pseudocode:
      "solveMaze(maze, x, y, sol):\n  if x == N-1 and y == N-1: sol[x][y] = 1; return true\n  if isSafe(maze, x, y):\n    sol[x][y] = 1\n    if solveMaze(maze, x+1, y, sol): return true\n    if solveMaze(maze, x, y+1, sol): return true\n    sol[x][y] = 0 // backtrack\n  return false",
    code: {
      javascript:
        "function solveMaze(maze) {\n  const n = maze.length;\n  const sol = Array.from({ length: n }, () => Array(n).fill(0));\n  function solve(x, y) {\n    if (x === n - 1 && y === n - 1) { sol[x][y] = 1; return true; }\n    if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 0) {\n      sol[x][y] = 1;\n      if (solve(x + 1, y)) return true;\n      if (solve(x, y + 1)) return true;\n      sol[x][y] = 0;\n    }\n    return false;\n  }\n  solve(0, 0);\n  return sol;\n}",
      python:
        "def solve_maze(maze):\n    n = len(maze)\n    sol = [[0]*n for _ in range(n)]\n    def solve(x, y):\n        if x == n - 1 and y == n - 1:\n            sol[x][y] = 1\n            return True\n        if 0 <= x < n and 0 <= y < n and maze[x][y] == 0:\n            sol[x][y] = 1\n            if solve(x + 1, y) or solve(x, y + 1):\n                return True\n            sol[x][y] = 0\n        return False\n    solve(0, 0)\n    return sol",
      java: "public class Maze {\n    public static boolean solve(int[][] maze, int x, int y, int[][] sol, int n) {\n        if (x == n - 1 && y == n - 1) { sol[x][y] = 1; return true; }\n        if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 0) {\n            sol[x][y] = 1;\n            if (solve(maze, x + 1, y, sol, n)) return true;\n            if (solve(maze, x, y + 1, sol, n)) return true;\n            sol[x][y] = 0;\n        }\n        return false;\n    }\n}",
      cpp: "bool solve(vector<vector<int>>& maze, int x, int y, vector<vector<int>>& sol, int n) {\n    if (x == n - 1 && y == n - 1) { sol[x][y] = 1; return true; }\n    if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 0) {\n        sol[x][y] = 1;\n        if (solve(maze, x + 1, y, sol, n)) return true;\n        if (solve(maze, x, y + 1, sol, n)) return true;\n        sol[x][y] = 0;\n    }\n    return false;\n}",
    },
  },
  "sudoku-solver": {
    id: "sudoku-solver",
    name: "Sudoku Solver",
    category: "backtracking",
    difficulty: "Hard",
    description:
      "Sudoku Solver solves a Sudoku board by recursively attempting to place digits and backtracking when a constraint violation is found.",
    timeComplexity: {
      best: "O(9^(n^2))",
      average: "O(9^(n^2))",
      worst: "O(9^(n^2))",
    },
    spaceComplexity: "O(n^2)",
    applications: [
      "Puzzle solvers",
      "Map coloring",
      "Resource allocation under constraints",
    ],
    advantages: [
      "Guarantees finding a valid solution if one exists",
      "General constraint search",
    ],
    disadvantages: [
      "Exponential worst-case scaling",
      "High search latency on dense boards",
    ],
    realWorldUses: [
      "Constraint logic programming engines",
      "Frequency band cell tower selectors",
    ],
    defaultInput: "1 0 3 0\n0 0 0 2\n3 0 1 0\n0 2 0 4",
    inputType: "grid",
    pseudocode:
      "solveSudoku(board):\n  find empty cell (r, c)\n  if none: return true\n  for val = 1 to 4:\n    if isSafe(board, r, c, val):\n      board[r][c] = val\n      if solveSudoku(board): return true\n      board[r][c] = 0\n  return false",
    code: {
      javascript:
        "function solveSudoku(board) {\n  const n = board.length;\n  function solve() {\n    for (let r = 0; r < n; r++) {\n      for (let c = 0; c < n; c++) {\n        if (board[r][c] === 0) {\n          for (let val = 1; val <= n; val++) {\n            if (isSafe(board, r, c, val)) {\n              board[r][c] = val;\n              if (solve()) return true;\n              board[r][c] = 0;\n            }\n          }\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n  solve();\n  return board;\n}",
      python:
        "def solve_sudoku(board):\n    n = len(board)\n    def solve():\n        for r in range(n):\n            for c in range(n):\n                if board[r][c] == 0:\n                    for val in range(1, n + 1):\n                        if is_safe(board, r, c, val):\n                            board[r][c] = val\n                            if solve(): return True\n                            board[r][c] = 0\n                    return False\n        return True\n    solve()\n    return board",
      java: "public class Sudoku {\n    public static boolean solve(int[][] board, int n) {\n        for (int r = 0; r < n; r++) {\n            for (int c = 0; c < n; c++) {\n                if (board[r][c] == 0) {\n                    for (int val = 1; val <= n; val++) {\n                        if (isSafe(board, r, c, val)) {\n                            board[r][c] = val;\n                            if (solve(board, n)) return true;\n                            board[r][c] = 0;\n                        }\n                    }\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}",
      cpp: "bool solve(vector<vector<int>>& board, int n) {\n    for (int r = 0; r < n; r++) {\n        for (int c = 0; c < n; c++) {\n            if (board[r][c] == 0) {\n                for (int val = 1; val <= n; val++) {\n                    if (isSafe(board, r, c, val)) {\n                        board[r][c] = val;\n                        if (solve(board, n)) return true;\n                        board[r][c] = 0;\n                    }\n                }\n                return false;\n            }\n        }\n    }\n    return true;\n}",
    },
  },
  "kmp-search": {
    id: "kmp-search",
    name: "KMP Pattern Search",
    category: "strings",
    difficulty: "Medium",
    description:
      "Knuth-Morris-Pratt pattern search checks occurrences of a pattern in a text using a precomputed Longest Prefix Suffix (LPS) array to shift comparisons.",
    timeComplexity: {
      best: "O(n + m)",
      average: "O(n + m)",
      worst: "O(n + m)",
    },
    spaceComplexity: "O(m)",
    applications: [
      "Substring scanning",
      "DNA sequencing matches",
      "Text editor search features",
    ],
    advantages: [
      "Guarantees linear-time O(n+m) search",
      "Avoids redundant backtrack index shifts in text",
    ],
    disadvantages: ["Requires preprocessing space and time to build LPS array"],
    realWorldUses: [
      "Grep search utilities",
      "Bioinformatics genome sequence scanners",
    ],
    defaultInput: "AABAACAADAABAABA\nAABA",
    inputType: "string-pattern",
    pseudocode:
      "kmpSearch(txt, pat):\n  lps = computeLPS(pat)\n  i = 0, j = 0\n  while i < txt.length:\n    if txt[i] == pat[j]: i++; j++\n    if j == pat.length: report match; j = lps[j-1]\n    else if i < txt.length and txt[i] != pat[j]:\n      if j != 0: j = lps[j-1]\n      else: i++",
    code: {
      javascript:
        "function kmpSearch(txt, pat) {\n  const lps = computeLPS(pat);\n  let i = 0, j = 0;\n  const indices = [];\n  while (i < txt.length) {\n    if (txt[i] === pat[j]) { i++; j++; }\n    if (j === pat.length) {\n      indices.push(i - j);\n      j = lps[j - 1];\n    } else if (i < txt.length && txt[i] !== pat[j]) {\n      if (j !== 0) j = lps[j - 1];\n      else i++;\n    }\n  }\n  return indices;\n}",
      python:
        "def kmp_search(txt, pat):\n    lps = compute_lps(pat)\n    i = j = 0\n    indices = []\n    while i < len(txt):\n        if txt[i] == pat[j]:\n            i += 1\n            j += 1\n        if j == len(pat):\n            indices.append(i - j)\n            j = lps[j - 1]\n        elif i < len(txt) and txt[i] != pat[j]:\n            if j != 0: j = lps[j - 1]\n            else: i += 1\n    return indices",
      java: "public class KMP {\n    public static List<Integer> search(String txt, String pat) {\n        int[] lps = computeLPS(pat);\n        List<Integer> indices = new ArrayList<>();\n        int i = 0, j = 0;\n        while (i < txt.length()) {\n            if (txt.charAt(i) == pat.charAt(j)) { i++; j++; }\n            if (j == pat.length()) {\n                indices.add(i - j);\n                j = lps[j - 1];\n            } else if (i < txt.length() && txt.charAt(i) != pat.charAt(j)) {\n                if (j != 0) j = lps[j - 1];\n                else i++;\n            }\n        }\n        return indices;\n    }\n}",
      cpp: "vector<int> search(string txt, string pat) {\n    vector<int> lps = computeLPS(pat);\n    vector<int> indices;\n    int i = 0, j = 0;\n    while (i < txt.length()) {\n        if (txt[i] == pat[j]) { i++; j++; }\n        if (j == pat.length()) {\n            indices.push_back(i - j);\n            j = lps[j - 1];\n        } else if (i < txt.length() && txt[i] != pat[j]) {\n            if (j != 0) j = lps[j - 1];\n            else i++;\n        }\n    }\n    return indices;\n}",
    },
  },
  "longest-common-prefix": {
    id: "longest-common-prefix",
    name: "Longest Common Prefix",
    category: "strings",
    difficulty: "Easy",
    description:
      "Longest Common Prefix finds the longest prefix string shared among a list of strings by iterating column-by-column across characters.",
    timeComplexity: {
      best: "O(n * m)",
      average: "O(n * m)",
      worst: "O(n * m)",
    },
    spaceComplexity: "O(m)",
    applications: [
      "String compression tries",
      "Dictionary autocomplete indices",
      "IP routing lookup prefixes",
    ],
    advantages: ["Linear scanning efficiency", "Terminates early on mismatch"],
    disadvantages: [
      "Degrades if there are long matching paths before mismatch",
    ],
    realWorldUses: [
      "Routers IP routing table matches",
      "Linguistic common root categorization systems",
    ],
    defaultInput: "flower flow flight",
    inputType: "strings-list",
    pseudocode:
      'longestCommonPrefix(strs):\n  if strs empty: return ""\n  prefix = strs[0]\n  for i = 1 to strs.length - 1:\n    while strs[i] does not start with prefix:\n      prefix = prefix[0 to prefix.length - 2]\n  return prefix',
    code: {
      javascript:
        'function longestCommonPrefix(strs) {\n  if (!strs.length) return "";\n  let prefix = strs[0];\n  for (let i = 1; i < strs.length; i++) {\n    while (strs[i].indexOf(prefix) !== 0) {\n      prefix = prefix.substring(0, prefix.length - 1);\n      if (!prefix) return "";\n    }\n  }\n  return prefix;\n}',
      python:
        'def longest_common_prefix(strs):\n    if not strs: return ""\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix: return ""\n    return prefix',
      java: 'public class LCP {\n    public static String getLCP(String[] strs) {\n        if (strs.length == 0) return "";\n        String prefix = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) != 0) {\n                prefix = prefix.substring(0, prefix.length() - 1);\n                if (prefix.isEmpty()) return "";\n            }\n        }\n        return prefix;\n    }\n}',
      cpp: 'string longestCommonPrefix(vector<string>& strs) {\n    if (strs.empty()) return "";\n    string prefix = strs[0];\n    for (size_t i = 1; i < strs.size(); ++i) {\n        while (strs[i].find(prefix) != 0) {\n            prefix = prefix.substr(0, prefix.length() - 1);\n            if (prefix.empty()) return "";\n        }\n    }\n    return prefix;\n}',
    },
  },
  "prefix-sum": {
    id: "prefix-sum",
    name: "Prefix Sum",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Prefix Sum involves precomputing the cumulative sum of elements in an array, allowing range sum queries to be answered in O(1) time.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Subarray sum queries",
      "Image processing algorithms",
      "Range update optimizations",
    ],
    advantages: [
      "Answers query bounds in O(1)",
      "Extremely simple array space precomputation",
    ],
    disadvantages: [
      "Requires linear auxiliary memory storage",
      "Does not handle array updates dynamically",
    ],
    realWorldUses: [
      "Database column sum indexes",
      "Graphics renderer brightness mapping",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "array",
    pseudocode:
      "prefixSum(arr):\n  prefix = new Array(arr.length)\n  prefix[0] = arr[0]\n  for i = 1 to arr.length - 1:\n    prefix[i] = prefix[i-1] + arr[i]\n  return prefix",
    code: {
      javascript:
        "function prefixSum(arr) {\n  const prefix = new Array(arr.length);\n  prefix[0] = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    prefix[i] = prefix[i - 1] + arr[i];\n  }\n  return prefix;\n}",
      python:
        "def prefix_sum(arr):\n    prefix = [0] * len(arr)\n    prefix[0] = arr[0]\n    for i in range(1, len(arr)):\n        prefix[i] = prefix[i-1] + arr[i]\n    return prefix",
      java: "public class PrefixSum {\n    public static int[] getPrefixSum(int[] arr) {\n        int[] prefix = new int[arr.length];\n        prefix[0] = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            prefix[i] = prefix[i - 1] + arr[i];\n        }\n        return prefix;\n    }\n}",
      cpp: "vector<int> prefixSum(const vector<int>& arr) {\n    vector<int> prefix(arr.size());\n    prefix[0] = arr[0];\n    for (size_t i = 1; i < arr.size(); ++i) {\n        prefix[i] = prefix[i - 1] + arr[i];\n    }\n    return prefix;\n}",
    },
  },
  "sliding-window": {
    id: "sliding-window",
    name: "Sliding Window",
    category: "arrays",
    difficulty: "Medium",
    description:
      "Sliding Window is a technique that uses a subarray of a fixed or variable size to efficiently track window metrics over a sequence.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Finding subarray maximums/minimums",
      "Substring matching optimization",
      "TCP flow congestion control",
    ],
    advantages: [
      "Avoids redundant recalculations",
      "Linear performance tracking",
    ],
    disadvantages: [
      "Only applicable on linear sequences",
      "Tricky index handling",
    ],
    realWorldUses: [
      "Streaming rate limiters",
      "Network buffer packages scanning",
    ],
    defaultInput: "2 1 5 1 3 2",
    inputType: "array",
    pseudocode:
      "slidingWindow(arr, k):\n  windowSum = sum of first k elements\n  maxSum = windowSum\n  for i = k to arr.length - 1:\n    windowSum += arr[i] - arr[i - k]\n    maxSum = max(maxSum, windowSum)\n  return maxSum",
    code: {
      javascript:
        "function maxSubarraySum(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
      python:
        "def max_subarray_sum(arr, k):\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum",
      java: "public class SlidingWindow {\n    public static int maxSubarraySum(int[] arr, int k) {\n        int windowSum = 0;\n        for (int i = 0; i < k; i++) windowSum += arr[i];\n        int maxSum = windowSum;\n        for (int i = k; i < arr.length; i++) {\n            windowSum += arr[i] - arr[i - k];\n            maxSum = Math.max(maxSum, windowSum);\n        }\n        return maxSum;\n    }\n}",
      cpp: "int maxSubarraySum(const vector<int>& arr, int k) {\n    int windowSum = 0;\n    for (int i = 0; i < k; ++i) windowSum += arr[i];\n    int maxSum = windowSum;\n    for (size_t i = k; i < arr.size(); ++i) {\n        windowSum += arr[i] - arr[i - k];\n        maxSum = max(maxSum, windowSum);\n    }\n    return maxSum;\n}",
    },
  },
  "two-pointer": {
    id: "two-pointer",
    name: "Two Pointer Technique",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Two Pointer Technique uses two integer indexes to traverse a sorted array from opposite ends to find pairs or subsets that satisfy specific criteria.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Pair sum targeting in sorted arrays",
      "Reversing arrays in-place",
      "Partitioning steps in Quick Sort",
    ],
    advantages: [
      "Operates with zero auxiliary space",
      "Avoids quadratic nested loops",
    ],
    disadvantages: [
      "Requires the list or array to be pre-sorted",
      "Applicable only to linear containers",
    ],
    realWorldUses: [
      "Data de-duplication utilities",
      "Image mirroring software engines",
    ],
    defaultInput: "1 2 3 4 6 8 9",
    inputType: "array",
    pseudocode:
      "hasPairWithSum(arr, target):\n  left = 0, right = arr.length - 1\n  while left < right:\n    curr = arr[left] + arr[right]\n    if curr == target: return true\n    else if curr < target: left++\n    else: right--\n  return false",
    code: {
      javascript:
        "function hasPairWithSum(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return true;\n    else if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}",
      python:
        "def has_pair_with_sum(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        curr_sum = arr[left] + arr[right]\n        if curr_sum == target:\n            return True\n        elif curr_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return False",
      java: "public class TwoPointer {\n    public static boolean hasPairWithSum(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) return true;\n            else if (sum < target) left++;\n            else right--;\n        }\n        return false;\n    }\n}",
      cpp: "bool hasPairWithSum(const vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left < right) {\n        int sum = arr[left] + arr[right];\n        if (sum == target) return true;\n        else if (sum < target) ++left;\n        else --right;\n    }\n    return false;\n}",
    },
  },
  "rotate-array": {
    id: "rotate-array",
    name: "Rotate Array",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Rotates an array to the right or left by k steps. Frequently solved using array reversal helper calls.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Cyclic buffer indexing",
      "Load balancing round-robin task distributions",
      "Data encryption shuffles",
    ],
    advantages: [
      "In-place rotation option is extremely memory-efficient",
      "Low computational latency",
    ],
    disadvantages: [
      "Requires modulo index computation logic",
      "Element shifts cause array index re-alignments",
    ],
    realWorldUses: [
      "Audio cyclic stream buffer caches",
      "Ring-buffer scheduling networks",
    ],
    defaultInput: "1 2 3 4 5 6 7",
    inputType: "array",
    pseudocode:
      "rotate(arr, k):\n  k = k % arr.length\n  reverse(arr, 0, arr.length - 1)\n  reverse(arr, 0, k - 1)\n  reverse(arr, k, arr.length - 1)",
    code: {
      javascript:
        "function rotate(arr, k) {\n  k = k % arr.length;\n  const reverse = (s, e) => {\n    while (s < e) {\n      let tmp = arr[s]; arr[s] = arr[e]; arr[e] = tmp;\n      s++; e--;\n    }\n  };\n  reverse(0, arr.length - 1);\n  reverse(0, k - 1);\n  reverse(k, arr.length - 1);\n  return arr;\n}",
      python:
        "def rotate(arr, k):\n    n = len(arr)\n    k %= n\n    def reverse(start, end):\n        while start < end:\n            arr[start], arr[end] = arr[end], arr[start]\n            start += 1\n            end -= 1\n    reverse(0, n - 1)\n    reverse(0, k - 1)\n    reverse(k, n - 1)\n    return arr",
      java: "public class RotateArray {\n    public static void rotate(int[] arr, int k) {\n        int n = arr.length;\n        k %= n;\n        reverse(arr, 0, n - 1);\n        reverse(arr, 0, k - 1);\n        reverse(arr, k, n - 1);\n    }\n    private static void reverse(int[] arr, int s, int e) {\n        while (s < e) {\n            int tmp = arr[s]; arr[s] = arr[e]; arr[e] = tmp;\n            s++; e--;\n        }\n    }\n}",
      cpp: "void rotate(vector<int>& arr, int k) {\n    int n = arr.size();\n    k %= n;\n    reverse(arr.begin(), arr.end());\n    reverse(arr.begin(), arr.begin() + k);\n    reverse(arr.begin() + k, arr.end());\n}",
    },
  },
  "merge-arrays": {
    id: "merge-arrays",
    name: "Merge Sorted Arrays",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Merges two pre-sorted arrays into a single sorted array using two pointer comparison loops.",
    timeComplexity: {
      best: "O(n + m)",
      average: "O(n + m)",
      worst: "O(n + m)",
    },
    spaceComplexity: "O(n + m)",
    applications: [
      "Merge step inside Merge Sort",
      "Joining pre-sorted databases",
      "Batch dataset reconciliations",
    ],
    advantages: ["Preserves pre-sorted order", "Linear execution latency"],
    disadvantages: ["Requires extra space allocation for the output array"],
    realWorldUses: [
      "Database index merge join engines",
      "Sorted log streaming mergers",
    ],
    defaultInput: "1 3 5\n2 4 6",
    inputType: "array",
    pseudocode:
      "merge(A, B):\n  i = 0, j = 0\n  res = []\n  while i < A.length and j < B.length:\n    if A[i] <= B[j]: res.push(A[i++])\n    else: res.push(B[j++])\n  append remaining items from A or B\n  return res",
    code: {
      javascript:
        "function merge(arr1, arr2) {\n  let res = [], i = 0, j = 0;\n  while (i < arr1.length && j < arr2.length) {\n    if (arr1[i] <= arr2[j]) res.push(arr1[i++]);\n    else res.push(arr2[j++]);\n  }\n  while (i < arr1.length) res.push(arr1[i++]);\n  while (j < arr2.length) res.push(arr2[j++]);\n  return res;\n}",
      python:
        "def merge(arr1, arr2):\n    res, i, j = [], 0, 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            res.append(arr1[i])\n            i += 1\n        else:\n            res.append(arr2[j])\n            j += 1\n    res.extend(arr1[i:])\n    res.extend(arr2[j:])\n    return res",
      java: "public class MergeArrays {\n    public static int[] merge(int[] A, int[] B) {\n        int[] res = new int[A.length + B.length];\n        int i = 0, j = 0, k = 0;\n        while (i < A.length && j < B.length) {\n            if (A[i] <= B[j]) res[k++] = A[i++];\n            else res[k++] = B[j++];\n        }\n        while (i < A.length) res[k++] = A[i++];\n        while (j < B.length) res[k++] = B[j++];\n        return res;\n    }\n}",
      cpp: "vector<int> merge(const vector<int>& A, const vector<int>& B) {\n    vector<int> res;\n    size_t i = 0, j = 0;\n    while (i < A.size() && j < B.size()) {\n        if (A[i] <= B[j]) res.push_back(A[i++]);\n        else res.push_back(B[j++]);\n    }\n    while (i < A.size()) res.push_back(A[i++]);\n    while (j < B.size()) res.push_back(B[j++]);\n    return res;\n}",
    },
  },
  "frequency-count": {
    id: "frequency-count",
    name: "Frequency Count",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Tracks the occurrence frequency of elements in an array using an auxiliary hash or array register.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(u)",
    applications: [
      "Histogram representation",
      "Duplicate validation checks",
      "Categorization maps creation",
    ],
    advantages: ["Extremely simple to implement", "Single linear pass scan"],
    disadvantages: ["Consumes additional space for distinct element mappings"],
    realWorldUses: [
      "Query analytics dashboard counters",
      "Token occurrence logs engines",
    ],
    defaultInput: "2 3 2 4 5 2 3",
    inputType: "array",
    pseudocode:
      "countFreq(arr):\n  freq = {}\n  for item in arr:\n    freq[item] = (freq[item] or 0) + 1\n  return freq",
    code: {
      javascript:
        "function countFrequency(arr) {\n  const freq = {};\n  for (let val of arr) {\n    freq[val] = (freq[val] || 0) + 1;\n  }\n  return freq;\n}",
      python:
        "def count_frequency(arr):\n    freq = {}\n    for val in arr:\n        freq[val] = freq.get(val, 0) + 1\n    return freq",
      java: "import java.util.HashMap;\npublic class Frequency {\n    public static HashMap<Integer, Integer> count(int[] arr) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int x : arr) {\n            map.put(x, map.getOrDefault(x, 0) + 1);\n        }\n        return map;\n    }\n}",
      cpp: "unordered_map<int, int> countFrequency(const vector<int>& arr) {\n    unordered_map<int, int> freq;\n    for (int x : arr) {\n        freq[x]++;\n    }\n    return freq;\n}",
    },
  },
  "linked-list-traversal": {
    id: "linked-list-traversal",
    name: "Linked List Traversal",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Sequential traversal of nodes in a linked list from root head to the tail node pointer.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Node printing outputs",
      "Summing elements stored in link lists",
      "Element searching",
    ],
    advantages: [
      "Requires zero extra memory overhead",
      "Simple sequential pointer shifting",
    ],
    disadvantages: ["Lacks direct random indexing support"],
    realWorldUses: [
      "Low-level driver structures",
      "Blockchain transaction validation linking",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "traverse(head):\n  curr = head\n  while curr != null:\n    process(curr.val)\n    curr = curr.next",
    code: {
      javascript:
        "function traverse(head) {\n  let curr = head;\n  while (curr !== null) {\n    console.log(curr.val);\n    curr = curr.next;\n  }\n}",
      python:
        "def traverse(head):\n    curr = head\n    while curr:\n        print(curr.val)\n        curr = curr.next",
      java: "public class LLTraversal {\n    public static void traverse(Node head) {\n        Node curr = head;\n        while (curr != null) {\n            System.out.println(curr.val);\n            curr = curr.next;\n        }\n    }\n}",
      cpp: 'void traverse(Node* head) {\n    Node* curr = head;\n    while (curr != nullptr) {\n        cout << curr->val << " ";\n        curr = curr->next;\n    }\n}',
    },
  },
  "cycle-detection": {
    id: "cycle-detection",
    name: "Cycle Detection (Floyd's)",
    category: "linked-list",
    difficulty: "Medium",
    description:
      "Detects loops in a linked list using two pointers moving at different speeds (slow and fast tortoise and hare).",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Detecting memory pointer circular leaks",
      "Network circular path validation checks",
      "Checking circular list layouts",
    ],
    advantages: [
      "Requires no extra hashing tables",
      "Constant O(1) space footprint",
    ],
    disadvantages: [
      "Requires structural list structure modification on removal",
      "Double pointers coordination overhead",
    ],
    realWorldUses: [
      "Router loop path checking protocols",
      "OS process thread circular dependencies checking",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "hasCycle(head):\n  slow = head, fast = head\n  while fast != null and fast.next != null:\n    slow = slow.next\n    fast = fast.next.next\n    if slow == fast: return true\n  return false",
    code: {
      javascript:
        "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
      python:
        "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False",
      java: "public class CycleDetection {\n    public static boolean hasCycle(Node head) {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}",
      cpp: "bool hasCycle(Node* head) {\n    Node* slow = head; Node* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
    },
  },
  "middle-node": {
    id: "middle-node",
    name: "Find Middle Node",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Finds the middle element of a linked list using the slow/fast tortoise and hare pointer technique.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Splitting linked lists in Merge Sort",
      "Checking middle attributes of nodes",
      "Dividing dynamic decks",
    ],
    advantages: ["Calculates target in a single pass", "O(1) extra space"],
    disadvantages: ["Relies on sequential node scanning (no random indexes)"],
    realWorldUses: [
      "Data dividing stream schedulers",
      "Linked-list based sorting algorithms",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "linked-list",
    pseudocode:
      "getMiddle(head):\n  slow = head, fast = head\n  while fast != null and fast.next != null:\n    slow = slow.next\n    fast = fast.next.next\n  return slow",
    code: {
      javascript:
        "function getMiddle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}",
      python:
        "def get_middle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow",
      java: "public class MiddleNode {\n    public static Node getMiddle(Node head) {\n        Node slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n}",
      cpp: "Node* getMiddle(Node* head) {\n    Node* slow = head;\n    Node* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    },
  },
  "stack-operations": {
    id: "stack-operations",
    name: "Stack Operations",
    category: "stack",
    difficulty: "Easy",
    description:
      "Basic LIFO operations (Push, Pop, Peek) demonstrating element storage on top of a stack frame.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Expression evaluations",
      "Backtracking algorithms",
      "Browser back-button history navigation tracks",
    ],
    advantages: ["Simplest LIFO logic", "Constant-time O(1) operations"],
    disadvantages: ["Strict sequential stack frames access constraint"],
    realWorldUses: ["Compiler recursion stacks", "Undo/redo logs managers"],
    defaultInput: "1 2 3 4 5",
    inputType: "stack",
    pseudocode:
      "push(val):\n  stack.append(val)\npop():\n  return stack.removeLast()",
    code: {
      javascript:
        "class Stack {\n  constructor() { this.items = []; }\n  push(x) { this.items.push(x); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n}",
      python:
        "class Stack:\n    def __init__(self): self.items = []\n    def push(self, x): self.items.append(x)\n    def pop(self): return self.items.pop()\n    def peek(self): return self.items[-1]",
      java: "import java.util.Stack;\n// standard java.util.Stack is used.",
      cpp: "import <stack>;\n// std::stack is used.",
    },
  },
  "next-greater-element": {
    id: "next-greater-element",
    name: "Next Greater Element",
    category: "stack",
    difficulty: "Medium",
    description:
      "Finds the first greater element to the right of each element in an array using a monotonic stack.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Dynamic range value scans",
      "Subarray metrics checks",
      "Temperature forecasting spikes",
    ],
    advantages: [
      "Linear processing time O(n) instead of quadratic O(n^2) nested scans",
    ],
    disadvantages: ["Requires extra space for monotonic stack tracker storage"],
    realWorldUses: [
      "Industrial sensor telemetry alarm triggers",
      "Time-series database change point detections",
    ],
    defaultInput: "4 5 2 25",
    inputType: "stack",
    pseudocode:
      "NGE(arr):\n  stack = [], res = new Array(arr.length, -1)\n  for i = 0 to arr.length - 1:\n    while stack not empty and arr[stack.top()] < arr[i]:\n      res[stack.pop()] = arr[i]\n    stack.push(i)\n  return res",
    code: {
      javascript:
        "function nextGreaterElement(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {\n      res[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}",
      python:
        "def next_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] < arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res",
      java: "import java.util.Stack;\npublic class NGE {\n    public static int[] find(int[] arr) {\n        int[] res = new int[arr.length];\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < arr.length; i++) {\n            res[i] = -1;\n            while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {\n                res[stack.pop()] = arr[i];\n            }\n            stack.push(i);\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> nextGreaterElement(const vector<int>& arr) {\n    vector<int> res(arr.size(), -1);\n    stack<int> s;\n    for (size_t i = 0; i < arr.size(); ++i) {\n        while (!s.empty() && arr[s.top()] < arr[i]) {\n            res[s.top()] = arr[i];\n            s.pop();\n        }\n        s.push(i);\n    }\n    return res;\n}",
    },
  },
  "circular-queue": {
    id: "circular-queue",
    name: "Circular Queue",
    category: "queue",
    difficulty: "Medium",
    description:
      "A queue that utilizes circular buffer arrays to avoid memory fragmentation on insertion/deletion.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Ring buffers memory allocators",
      "CPU process round-robin scheduler lists",
      "Streaming audio buffers",
    ],
    advantages: [
      "Zero index element shuffling shifts requirements",
      "Fixed queue boundary size control",
    ],
    disadvantages: ["Bounded storage capacity constraints"],
    realWorldUses: [
      "Router packet switching caches",
      "Microcontroller serial data stream decoders",
    ],
    defaultInput: "10 20 30 40",
    inputType: "queue",
    pseudocode:
      "enqueue(val):\n  if (rear + 1) % size == front: Queue Full\n  else:\n    rear = (rear + 1) % size\n    items[rear] = val",
    code: {
      javascript:
        "class CircularQueue {\n  constructor(k) {\n    this.size = k; this.queue = new Array(k);\n    this.front = -1; this.rear = -1;\n  }\n  enqueue(val) {\n    if ((this.rear + 1) % this.size === this.front) return false;\n    if (this.front === -1) this.front = 0;\n    this.rear = (this.rear + 1) % this.size;\n    this.queue[this.rear] = val;\n    return true;\n  }\n}",
      python:
        "class CircularQueue:\n    def __init__(self, k):\n        self.size = k\n        self.queue = [None] * k\n        self.front = self.rear = -1\n    def enqueue(self, val):\n        if (self.rear + 1) % self.size == self.front: return False\n        if self.front == -1: self.front = 0\n        self.rear = (self.rear + 1) % self.size\n        self.queue[self.rear] = val\n        return True",
      java: "public class CircularQueue {\n    int[] q; int front = -1, rear = -1, size;\n    public CircularQueue(int k) { size = k; q = new int[k]; }\n    public boolean enqueue(int val) {\n        if ((rear + 1) % size == front) return false;\n        if (front == -1) front = 0;\n        rear = (rear + 1) % size;\n        q[rear] = val;\n        return true;\n    }\n}",
      cpp: "class CircularQueue {\n    vector<int> q; int front = -1, rear = -1, size;\npublic:\n    CircularQueue(int k) { size = k; q.resize(k); }\n    bool enqueue(int val) {\n        if ((rear + 1) % size == front) return false;\n        if (front == -1) front = 0;\n        rear = (rear + 1) % size;\n        q[rear] = val;\n        return true;\n    }\n};",
    },
  },
  "sliding-window-max": {
    id: "sliding-window-max",
    name: "Sliding Window Maximum",
    category: "queue",
    difficulty: "Hard",
    description:
      "Finds the maximum value inside a sliding window of size k at every step using a monotonic deque.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(k)",
    applications: [
      "Streaming data analysis",
      "Image filter blurring kernel windows",
      "Financial price trend peaks monitoring",
    ],
    advantages: [
      "Guarantees linear-time processing O(n) regardless of window size k",
    ],
    disadvantages: ["Requires bidirectional queue structure (deque)"],
    realWorldUses: [
      "High-frequency quantitative trading trackers",
      "Real-time network traffic window analyzers",
    ],
    defaultInput: "1 3 -1 -3 5 3 6 7",
    inputType: "queue",
    pseudocode:
      "maxSlidingWindow(arr, k):\n  deque = [] // stores indices\n  res = []\n  for i = 0 to arr.length - 1:\n    if deque.front() == i - k: deque.popFront()\n    while deque not empty and arr[deque.back()] < arr[i]: deque.popBack()\n    deque.pushBack(i)\n    if i >= k - 1: res.push(arr[deque.front()])\n  return res",
    code: {
      javascript:
        "function maxSlidingWindow(arr, k) {\n  const deque = [], res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (deque.length > 0 && deque[0] === i - k) deque.shift();\n    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {\n      deque.pop();\n    }\n    deque.push(i);\n    if (i >= k - 1) res.push(arr[deque[0]]);\n  }\n  return res;\n}",
      python:
        "from collections import deque\ndef max_sliding_window(arr, k):\n    q, res = deque(), []\n    for i, x in enumerate(arr):\n        if q and q[0] == i - k: q.popleft()\n        while q and arr[q[-1]] < x: q.pop()\n        q.append(i)\n        if i >= k - 1: res.append(arr[q[0]])\n    return res",
      java: "import java.util.Deque;\nimport java.util.LinkedList;\npublic class SlidingWindowMax {\n    public static int[] maxSlidingWindow(int[] arr, int k) {\n        if (arr.length == 0) return new int[0];\n        int[] res = new int[arr.length - k + 1];\n        Deque<Integer> q = new LinkedList<>();\n        int idx = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (!q.isEmpty() && q.peek() == i - k) q.poll();\n            while (!q.isEmpty() && arr[q.peekLast()] < arr[i]) q.pollLast();\n            q.offer(i);\n            if (i >= k - 1) res[idx++] = arr[q.peek()];\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> maxSlidingWindow(const vector<int>& arr, int k) {\n    vector<int> res; deque<int> q;\n    for (size_t i = 0; i < arr.size(); ++i) {\n        if (!q.empty() && q.front() == i - k) q.pop_front();\n        while (!q.empty() && arr[q.back()] < arr[i]) q.pop_back();\n        q.push_back(i);\n        if (i >= k - 1) res.push_back(arr[q.front()]);\n    }\n    return res;\n}",
    },
  },
  "topological-sort": {
    id: "topological-sort",
    name: "Topological Sort",
    category: "graphs",
    difficulty: "Medium",
    description:
      "Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, vertex u comes before v.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Package build dependencies sequencing",
      "Project tasks planning schedules",
      "Course prerequisite sequencing",
    ],
    advantages: [
      "Detects cyclic dependency paths immediately",
      "Linear execution latency",
    ],
    disadvantages: [
      "Only applicable on Directed Acyclic Graphs (fails if graph contains cycles)",
    ],
    realWorldUses: [
      "NPM/Maven package managers dependency resolution engines",
      "Make/CMake compiler tasks generators",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 3\n3 4",
    inputType: "graph",
    pseudocode:
      "topoSort(graph):\n  visited = set()\n  stack = []\n  for node in graph:\n    if node not in visited:\n      dfs(node, visited, stack)\n  return stack.reverse()",
    code: {
      javascript:
        "function topologicalSort(numNodes, adj) {\n  const visited = new Set(), stack = [];\n  function dfs(curr) {\n    visited.add(curr);\n    if (adj[curr]) {\n      for (let next of adj[curr]) {\n        if (!visited.has(next)) dfs(next);\n      }\n    }\n    stack.push(curr);\n  }\n  for (let i = 0; i < numNodes; i++) {\n    if (!visited.has(i)) dfs(i);\n  }\n  return stack.reverse();\n}",
      python:
        "def topological_sort(num_nodes, adj):\n    visited, stack = set(), []\n    def dfs(curr):\n        visited.add(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                dfs(neighbor)\n        stack.append(curr)\n    for i in range(num_nodes):\n        if i not in visited:\n            dfs(i)\n    return stack[::-1]",
      java: "import java.util.ArrayList;\nimport java.util.Stack;\npublic class TopoSort {\n    public static void dfs(int curr, ArrayList<ArrayList<Integer>> adj, boolean[] visited, Stack<Integer> s) {\n        visited[curr] = true;\n        for (int next : adj.get(curr)) {\n            if (!visited[next]) dfs(next, adj, visited, s);\n        }\n        s.push(curr);\n    }\n}",
      cpp: "void dfs(int curr, const vector<vector<int>>& adj, vector<bool>& visited, stack<int>& s) {\n    visited[curr] = true;\n    for (int next : adj[curr]) {\n        if (!visited[next]) dfs(next, adj, visited, s);\n    }\n    s.push(curr);\n}",
    },
  },
  "hash-map": {
    id: "hash-map",
    name: "Hash Map",
    category: "hashing",
    difficulty: "Easy",
    description:
      "A Hash Map is a data structure that implements an associative array abstract data type, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Caching mechanisms",
      "Database indexing",
      "Symbol tables in compilers",
    ],
    advantages: [
      "Extremely fast search, insertion, and deletion",
      "Flexible key-value mappings",
      "Direct index calculations",
    ],
    disadvantages: [
      "Collision handling overhead",
      "Poor performance with bad hash functions",
      "High memory usage to maintain low load factor",
    ],
    realWorldUses: [
      "In-memory databases like Redis",
      "Web server session managers",
    ],
    defaultInput: "2 7 11 15",
    inputType: "hash",
    pseudocode:
      "insert(key, value):\n  index = hash(key) % capacity\n  bucket = table[index]\n  update or append (key, value)",
    code: {
      javascript:
        "class HashMap {\n  constructor() {\n    this.table = {};\n  }\n  put(key, value) {\n    this.table[key] = value;\n  }\n  get(key) {\n    return this.table[key];\n  }\n}",
      python:
        "class HashMap:\n    def __init__(self):\n        self.table = {}\n    def put(self, key, value):\n        self.table[key] = value\n    def get(self, key):\n        return self.table.get(key)",
      java: "import java.util.HashMap;\n// Built-in java.util.HashMap is typically used.",
      cpp: "import <unordered_map>;\n// std::unordered_map is typically used.",
    },
  },
  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    name: "Longest Palindromic Substring",
    category: "strings",
    difficulty: "Medium",
    description:
      "Finds the longest contiguous substring that reads the same forward and backward in quadratic time using center expansion.",
    timeComplexity: { best: "O(n)", average: "O(n^2)", worst: "O(n^2)" },
    spaceComplexity: "O(1)",
    applications: [
      "Text search indexing",
      "DNA sequence alignments",
      "Data serialization validation",
    ],
    advantages: [
      "Optimal O(1) auxiliary space footprint",
      "Straightforward center expansion heuristic",
    ],
    disadvantages: ["Quadratic execution time on large homogeneous datasets"],
    realWorldUses: [
      "String query preprocessors",
      "Bioinformatics genome sequence scanners",
    ],
    defaultInput: "babad",
    inputType: "strings-list",
    pseudocode: `longest_palindrome(s):
  start = 0, end = 0
  for i = 0 to length(s) - 1:
    len1 = expand(s, i, i)
    len2 = expand(s, i, i + 1)
    max_len = max(len1, len2)
    if max_len > end - start + 1:
      start = i - (max_len - 1) / 2
      end = i + max_len / 2
  return s[start .. end]`,
    code: {
      javascript: `function longestPalindrome(s) {
  if (!s) return "";
  let start = 0, end = 0;
  
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    let len1 = expand(i, i);
    let len2 = expand(i, i + 1);
    let maxLen = Math.max(len1, len2);
    if (maxLen > end - start + 1) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }
  return s.slice(start, end + 1);
}`,
      python: `def longest_palindrome(s):
    if not s: return ""
    start, end = 0, 0
    
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l, r = l - 1, r + 1
        return r - l - 1

    for i in range(len(s)):
        len1 = expand(i, i)
        len2 = expand(i, i + 1)
        max_len = max(len1, len2)
        if max_len > (end - start + 1):
            start = i - (max_len - 1) // 2
            end = i + max_len // 2
            
    return s[start : end + 1]`,
      java: `public class LongestPalindrome {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expand(s, i, i);
            int len2 = expand(s, i, i + 1);
            int maxLen = Math.max(len1, len2);
            if (maxLen > end - start + 1) {
                start = i - (maxLen - 1) / 2;
                end = i + maxLen / 2;
            }
        }
        return s.substring(start, end + 1);
    }
    private static int expand(String s, int l, int r) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            l--; r++;
        }
        return r - l - 1;
    }
}`,
      cpp: `#include <string>
#include <algorithm>
using namespace std;
int expandAroundCenter(const string& s, int l, int r) {
    while (l >= 0 && r < s.length() && s[l] == s[r]) {
        l--; r++;
    }
    return r - l - 1;
}
string longestPalindrome(string s) {
    if (s.empty()) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); ++i) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int maxLen = max(len1, len2);
        if (maxLen > (end - start + 1)) {
            start = i - (maxLen - 1) / 2;
            end = i + maxLen / 2;
        }
    }
    return s.substr(start, end - start + 1);
}`,
    },
  },
  "string-concatenation": {
    id: "string-concatenation",
    name: "String Concatenation",
    category: "strings",
    difficulty: "Easy",
    description:
      "Appends one string to the end of another to form a single combined string.",
    timeComplexity: {
      best: "O(n + m)",
      average: "O(n + m)",
      worst: "O(n + m)",
    },
    spaceComplexity: "O(n + m)",
    applications: [
      "Text concatenation builders",
      "URL dynamic slug compilers",
      "User output logging display formatters",
    ],
    advantages: ["Extremely simple logic", "Fundamental string building block"],
    disadvantages: ["Immutable string buffer overheads in massive loops"],
    realWorldUses: [
      "Formatted address compilers",
      "String composition helpers",
    ],
    defaultInput: "hello world",
    inputType: "strings-list",
    pseudocode: `concatenate(s1, s2):
  res = ""
  for char in s1:
    res += char
  for char in s2:
    res += char
  return res`,
    code: {
      javascript: `function concatenate(s1, s2) {
  return s1 + s2;
}`,
      python: `def concatenate(s1, s2):
    res = ""
    for char in s1:
        res += char
    for char in s2:
        res += char
    return res`,
      java: `public class StringConcatenation {
    public static String concatenate(String s1, String s2) {
        StringBuilder sb = new StringBuilder();
        for (char c : s1.toCharArray()) sb.append(c);
        for (char c : s2.toCharArray()) sb.append(c);
        return sb.toString();
    }
}`,
      cpp: `#include <string>
using namespace std;
string concatenate(const string& s1, const string& s2) {
    string res = "";
    for (char c : s1) res += c;
    for (char c : s2) res += c;
    return res;
}`,
    },
  },
  "string-traversal": {
    id: "string-traversal",
    name: "String Traversal",
    category: "strings",
    difficulty: "Easy",
    description:
      "Iterates through each character of a string from start to finish to inspect or process values.",
    timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
    applications: [
      "Character search",
      "Vowel/consonant count",
      "Input format validation scans",
    ],
    advantages: ["Extremely simple logic", "O(1) memory space footprint"],
    disadvantages: ["Requires full linear iteration pass"],
    realWorldUses: [
      "Character processing utility helpers",
      "String sanitization parsers",
    ],
    defaultInput: "hello world",
    inputType: "strings-list",
    pseudocode: `traverse_string(s):
  for i = 0 to length(s) - 1:
    char = s[i]
    process(char)`,
    code: {
      javascript: `function traverseString(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    console.log(char);
  }
}`,
      python: `def traverse_string(s):
    n = len(s)
    for i in range(n):
        char = s[i]
        # Process char`,
      java: `public class StringTraversal {
    public static void traverse(String s) {
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            System.out.println(c);
        }
    }
}`,
      cpp: `#include <string>
#include <iostream>
using namespace std;
void traverseString(const string& s) {
    for (int i = 0; i < s.length(); ++i) {
        char c = s[i];
        cout << c << endl;
    }
}`,
    },
  },
  "group-anagrams": {
    id: "group-anagrams",
    name: "Group Anagrams",
    category: "strings",
    difficulty: "Medium",
    description:
      "Groups a list of strings into sub-lists containing anagrams by sorting each string or frequency hashing.",
    timeComplexity: {
      best: "O(n * k log k)",
      average: "O(n * k log k)",
      worst: "O(n * k log k)",
    },
    spaceComplexity: "O(n * k)",
    applications: [
      "Text classification",
      "Word puzzle generators",
      "Lexical anagram detection scanners",
    ],
    advantages: [
      "Groups string datasets in a single iteration pass",
      "Ensures consistent category indexing",
    ],
    disadvantages: [
      "String sorting consumes execution latency on huge string lengths",
    ],
    realWorldUses: [
      "Scrabble solver dictionary indexers",
      "Linguistic analysis word pattern organizers",
    ],
    defaultInput: "eat tea tan ate nat bat",
    inputType: "strings",
    pseudocode:
      "groupAnagrams(strs):\n  map = {}\n  for s in strs:\n    key = sortChars(s)\n    map[key].append(s)\n  return map.values()",
    code: {
      javascript:
        "function groupAnagrams(strs) {\n  const map = {};\n  for (let s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map);\n}",
      python:
        'def group_anagrams(strs):\n    map_dict = {}\n    for s in strs:\n        key = "".join(sorted(s))\n        map_dict.setdefault(key, []).append(s)\n    return list(map_dict.values())',
      java: "import java.util.*;\npublic class GroupAnagrams {\n    public static List<List<String>> group(String[] strs) {\n        Map<String, List<String>> map = new HashMap<>();\n        for (String s : strs) {\n            char[] arr = s.toCharArray();\n            Arrays.sort(arr);\n            String key = new String(arr);\n            map.putIfAbsent(key, new ArrayList<>());\n            map.get(key).add(s);\n        }\n        return new ArrayList<>(map.values());\n    }\n}",
      cpp: "vector<vector<string>> groupAnagrams(const vector<string>& strs) {\n    unordered_map<string, vector<string>> map;\n    for (const string& s : strs) {\n        string key = s;\n        sort(key.begin(), key.end());\n        map[key].push_back(s);\n    }\n    vector<vector<string>> res;\n    for (auto& pair : map) res.push_back(pair.second);\n    return res;\n}",
    },
  },
  "fibonacci-recursion": {
    id: "fibonacci-recursion",
    name: "Fibonacci (Recursion)",
    category: "recursion",
    difficulty: "Easy",
    description:
      "Computes the nth Fibonacci number using a binary recursion tree without memoization.",
    timeComplexity: {
      best: "O(2^n)",
      average: "O(2^n)",
      worst: "O(2^n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Demonstrating recursive tree layouts",
      "Measuring call stack limits",
      "Introduction to dynamic programming necessity",
    ],
    advantages: [
      "Simplest recursive code presentation",
      "Direct mathematical relation matching",
    ],
    disadvantages: [
      "Severe exponential execution scaling (recalculates identical subproblems redundantly)",
    ],
    realWorldUses: [
      "Academic recursion training cases",
      "Instructional code debugging tracing examples",
    ],
    defaultInput: "5",
    inputType: "recursion",
    pseudocode: "fib(n):\n  if n <= 1: return n\n  return fib(n-1) + fib(n-2)",
    code: {
      javascript:
        "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}",
      python:
        "def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)",
      java: "public class Fibonacci {\n    public static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n}",
      cpp: "int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}",
    },
  },
  "n-queens": {
    id: "n-queens",
    name: "N-Queens",
    category: "backtracking",
    difficulty: "Hard",
    description:
      "Places N queens on an N x N chessboard such that no two queens threaten each other, using backtracking search.",
    timeComplexity: {
      best: "O(N!)",
      average: "O(N!)",
      worst: "O(N!)",
    },
    spaceComplexity: "O(N^2)",
    applications: [
      "Resource allocations under constraints",
      "Testing backtracking tree optimizations",
      "Industrial layout configurations search",
    ],
    advantages: [
      "Finds all possible configuration answers",
      "Prunes branch choices early to save compute",
    ],
    disadvantages: [
      "High factorial execution scale (fails for large chessboards)",
    ],
    realWorldUses: [
      "Automated spatial routing layout planning",
      "Constrained scheduling conflict solvers",
    ],
    defaultInput: "4",
    inputType: "recursion",
    pseudocode:
      "solve(row, queens):\n  if row == N: return true\n  for col = 0 to N-1:\n    if isSafe(row, col, queens):\n      queens.push(row, col)\n      if solve(row + 1, queens): return true\n      queens.pop()\n  return false",
    code: {
      javascript:
        "function solveNQueens(n) {\n  const board = Array.from({length: n}, () => Array(n).fill('.'));\n  const res = [];\n  function isSafe(r, c) {\n    for (let i = 0; i < r; i++) {\n      if (board[i][c] === 'Q') return false;\n      const diagL = c - (r - i), diagR = c + (r - i);\n      if (diagL >= 0 && board[i][diagL] === 'Q') return false;\n      if (diagR < n && board[i][diagR] === 'Q') return false;\n    }\n    return true;\n  }\n}",
      python:
        "def solve_n_queens(n):\n    res = []\n    board = [['.'] * n for _ in range(n)]\n    def is_safe(r, c):\n        for i in range(r):\n            if board[i][c] == 'Q': return False\n            if c - (r - i) >= 0 and board[i][c - (r - i)] == 'Q': return False\n            if c + (r - i) < n and board[i][c + (r - i)] == 'Q': return False\n        return True",
      java: "// Backtracking search implementation for N-Queens.",
      cpp: "// Backtracking search implementation for N-Queens.",
    },
  },
  "knapsack-dp": {
    id: "knapsack-dp",
    name: "0/1 Knapsack (DP)",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Solves the 0/1 Knapsack optimization problem by computing subproblem matrices storing maximum value for weight capacity constraints.",
    timeComplexity: {
      best: "O(N * W)",
      average: "O(N * W)",
      worst: "O(N * W)",
    },
    spaceComplexity: "O(N * W)",
    applications: [
      "Financial budget allocations",
      "Freight load optimization",
      "Asset selections",
    ],
    advantages: [
      "Guarantees finding the absolute mathematically optimal subset solution",
      "Avoids exponential search loops",
    ],
    disadvantages: ["Dynamic memory space scales with knapsack capacity W"],
    realWorldUses: [
      "Server load distributors",
      "Cargo shipping container loading coordinators",
    ],
    defaultInput: "2 3 4 5\n3 4 5 6\n5",
    inputType: "dp",
    pseudocode:
      "knapsack(W, wt, val):\n  dp = 2D array size (N+1) x (W+1)\n  for i = 1 to N:\n    for w = 1 to W:\n      if wt[i-1] <= w:\n        dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w])\n      else:\n        dp[i][w] = dp[i-1][w]\n  return dp[N][W]",
    code: {
      javascript:
        "function knapsack(W, wt, val, n) {\n  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));\n  for (let i = 1; i <= n; i++) {\n    for (let w = 1; w <= W; w++) {\n      if (wt[i - 1] <= w) {\n        dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n      } else {\n        dp[i][w] = dp[i - 1][w];\n      }\n    }\n  }\n  return dp[n][W];\n}",
      python:
        "def knapsack(W, wt, val, n):\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(1, W + 1):\n            if wt[i-1] <= w:\n                dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]",
      java: "public class Knapsack {\n    public static int solve(int W, int[] wt, int[] val, int n) {\n        int[][] dp = new int[n + 1][W + 1];\n        for (int i = 1; i <= n; i++) {\n            for (int w = 1; w <= W; w++) {\n                if (wt[i - 1] <= w) {\n                    dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n                } else {\n                    dp[i][w] = dp[i - 1][w];\n                }\n            }\n        }\n        return dp[n][W];\n    }\n}",
      cpp: "int knapsack(int W, const vector<int>& wt, const vector<int>& val, int n) {\n    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));\n    for (int i = 1; i <= n; ++i) {\n        for (int w = 1; w <= W; ++w) {\n            if (wt[i - 1] <= w) {\n                dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);\n            } else {\n                dp[i][w] = dp[i - 1][w];\n            }\n        }\n    }\n    return dp[n][W];\n}",
    },
  },
  "coin-change-dp": {
    id: "coin-change-dp",
    name: "Coin Change (DP)",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Finds the minimum number of coins needed to make a target amount using Dynamic Programming tabulation.",
    timeComplexity: {
      best: "O(N * A)",
      average: "O(N * A)",
      worst: "O(N * A)",
    },
    spaceComplexity: "O(A)",
    applications: [
      "Cash registers change dispensers",
      "Vending machine transactions processing",
      "Token denomination optimization",
    ],
    advantages: [
      "Handles arbitrary coin denomination systems",
      "Avoids subproblem recalculations",
    ],
    disadvantages: ["Dynamic memory space grows with target amount"],
    realWorldUses: [
      "POS vending machines transaction processors",
      "E-commerce point rewards calculator modules",
    ],
    defaultInput: "1 2 5\n11",
    inputType: "dp",
    pseudocode:
      "coinChange(coins, amount):\n  dp = array size amount + 1, fill infinity\n  dp[0] = 0\n  for coin in coins:\n    for i = coin to amount:\n      dp[i] = min(dp[i], dp[i - coin] + 1)\n  return dp[amount]",
    code: {
      javascript:
        "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let coin of coins) {\n    for (let i = coin; i <= amount; i++) {\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
      python:
        "def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      java: "import java.util.Arrays;\npublic class CoinChange {\n    public static int solve(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1);\n        dp[0] = 0;\n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}",
      cpp: "int coinChange(const vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins) {\n        for (int i = coin; i <= amount; ++i) {\n            dp[i] = min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
    },
  },
  "ternary-search": {
    id: "ternary-search",
    name: "Ternary Search",
    category: "searching",
    difficulty: "Medium",
    description:
      "A divide-and-conquer search algorithm that divides a sorted array into three equal parts to find target indices in logarithmic time.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log3 n)",
      worst: "O(log3 n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Locating target elements in sorted spaces",
      "Finding extrema of unimodal mathematical functions",
      "Game AI heuristic space checks",
    ],
    advantages: [
      "Can find mathematical peaks and valleys (extrema) extremely fast",
    ],
    disadvantages: [
      "Performs more comparison operations per step than Binary Search",
    ],
    realWorldUses: [
      "Image color peak channel solvers",
      "Unimodal function optimization systems",
    ],
    defaultInput: "1 3 5 7 9 11 13 15",
    inputType: "search",
    pseudocode:
      "ternarySearch(arr, l, r, val):\n  if r >= l:\n    mid1 = l + (r - l) / 3\n    mid2 = r - (r - l) / 3\n    if arr[mid1] == val: return mid1\n    if arr[mid2] == val: return mid2\n    if val < arr[mid1]: return ternarySearch(arr, l, mid1 - 1, val)\n    else if val > arr[mid2]: return ternarySearch(arr, mid2 + 1, r, val)\n    else: return ternarySearch(arr, mid1 + 1, mid2 - 1, val)\n  return -1",
    code: {
      javascript:
        "function ternarySearch(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (r >= l) {\n    const mid1 = l + Math.floor((r - l) / 3);\n    const mid2 = r - Math.floor((r - l) / 3);\n    if (arr[mid1] === target) return mid1;\n    if (arr[mid2] === target) return mid2;\n    if (target < arr[mid1]) r = mid1 - 1;\n    else if (target > arr[mid2]) l = mid2 + 1;\n    else { l = mid1 + 1; r = mid2 - 1; }\n  }\n  return -1;\n}",
      python:
        "def ternary_search(arr, target):\n    l, r = 0, len(arr) - 1\n    while r >= l:\n        mid1 = l + (r - l) // 3\n        mid2 = r - (r - l) // 3\n        if arr[mid1] == target: return mid1\n        if arr[mid2] == target: return mid2\n        if target < arr[mid1]: r = mid1 - 1\n        elif target > arr[mid2]: l = mid2 + 1\n        else:\n            l = mid1 + 1\n            r = mid2 - 1\n    return -1",
      java: "public class TernarySearch {\n    public static int search(int[] arr, int target) {\n        int l = 0, r = arr.length - 1;\n        while (r >= l) {\n            int mid1 = l + (r - l) / 3;\n            int mid2 = r - (r - l) / 3;\n            if (arr[mid1] == target) return mid1;\n            if (arr[mid2] == target) return mid2;\n            if (target < arr[mid1]) r = mid1 - 1;\n            else if (target > arr[mid2]) l = mid2 + 1;\n            else { l = mid1 + 1; r = mid2 - 1; }\n        }\n        return -1;\n    }\n}",
      cpp: "int ternarySearch(const vector<int>& arr, int target) {\n    int l = 0, r = arr.size() - 1;\n    while (r >= l) {\n        int mid1 = l + (r - l) / 3;\n        int mid2 = r - (r - l) / 3;\n        if (arr[mid1] == target) return mid1;\n        if (arr[mid2] == target) return mid2;\n        if (target < arr[mid1]) r = mid1 - 1;\n        else if (target > arr[mid2]) l = mid2 + 1;\n        else { l = mid1 + 1; r = mid2 - 1; }\n    }\n    return -1;\n}",
    },
  },
  bfs: {
    id: "bfs",
    name: "BFS Traversal",
    category: "graphs",
    difficulty: "Easy",
    description:
      "Breadth-First Search graph traversal exploring neighbors level-by-level using a FIFO queue.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Finding shortest paths in unweighted graphs",
      "Social network friends recommendations levels checks",
      "GPS maps directions searches",
    ],
    advantages: [
      "Guarantees locating the absolute closest/shortest node paths first",
    ],
    disadvantages: [
      "Requires significant memory space to store visited queue vertices",
    ],
    realWorldUses: [
      "Web search crawlers indexing linkages",
      "Facebook Graph search level queries solvers",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 4",
    inputType: "graph",
    pseudocode:
      "bfs(start, adj):\n  visited = set(start)\n  queue = [start]\n  while queue not empty:\n    curr = queue.popFront()\n    process(curr)\n    for next in adj[curr]:\n      if next not in visited:\n        visited.add(next)\n        queue.push(next)",
    code: {
      javascript:
        "function bfs(start, adj, numNodes) {\n  const visited = new Set([start]), queue = [start], res = [];\n  while (queue.length > 0) {\n    const curr = queue.shift();\n    res.push(curr);\n    for (let neighbor of adj[curr] || []) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return res;\n}",
      python:
        "from collections import deque\ndef bfs(start, adj):\n    visited, q = {start}, deque([start])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)\n    return res",
      java: "import java.util.*;\npublic class BFS {\n    public static List<Integer> traverse(int start, List<List<Integer>> adj) {\n        List<Integer> res = new ArrayList<>();\n        boolean[] visited = new boolean[adj.size()];\n        Queue<Integer> q = new LinkedList<>();\n        q.add(start); visited[start] = true;\n        while (!q.isEmpty()) {\n            int curr = q.poll(); res.add(curr);\n            for (int neighbor : adj.get(curr)) {\n                if (!visited[neighbor]) {\n                    visited[neighbor] = true; q.add(neighbor);\n                }\n            }\n        }\n        return res;\n    }\n}",
      cpp: "vector<int> bfs(int start, const vector<vector<int>>& adj) {\n    vector<int> res; vector<bool> visited(adj.size(), false);\n    queue<int> q; q.push(start); visited[start] = true;\n    while (!q.empty()) {\n        int curr = q.front(); q.pop(); res.push_back(curr);\n        for (int neighbor : adj[curr]) {\n            if (!visited[neighbor]) {\n                visited[neighbor] = true; q.push(neighbor);\n            }\n        }\n    }\n    return res;\n}",
    },
  },
  dfs: {
    id: "dfs",
    name: "DFS Traversal",
    category: "graphs",
    difficulty: "Easy",
    description:
      "Depth-First Search traversal visiting nodes recursively depth-by-depth using a call stack.",
    timeComplexity: {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Pathfinding routing searches",
      "Cycle checking in graph databases",
      "Maze path solving",
    ],
    advantages: [
      "Consumes much less memory overhead compared to BFS on deep tree networks",
    ],
    disadvantages: [
      "Does not guarantee finding the shortest route pathways first",
    ],
    realWorldUses: [
      "Compiler syntax parsing engines",
      "Backtracking solver states monitors",
    ],
    defaultInput: "5 4\n0 1\n0 2\n1 3\n2 4",
    inputType: "graph",
    pseudocode:
      "dfs(curr, visited, adj):\n  visited.add(curr)\n  process(curr)\n  for neighbor in adj[curr]:\n    if neighbor not in visited:\n      dfs(neighbor, visited, adj)",
    code: {
      javascript:
        "function dfs(start, adj) {\n  const visited = new Set(), res = [];\n  function traverse(curr) {\n    visited.add(curr);\n    res.push(curr);\n    for (let neighbor of adj[curr] || []) {\n      if (!visited.has(neighbor)) traverse(neighbor);\n    }\n  }\n  traverse(start);\n  return res;\n}",
      python:
        "def dfs(start, adj):\n    visited, res = set(), []\n    def traverse(curr):\n        visited.add(curr)\n        res.append(curr)\n        for neighbor in adj.get(curr, []):\n            if neighbor not in visited:\n                traverse(neighbor)\n    traverse(start)\n    return res",
      java: "import java.util.*;\npublic class DFS {\n    public static void traverse(int curr, List<List<Integer>> adj, boolean[] visited, List<Integer> res) {\n        visited[curr] = true; res.add(curr);\n        for (int neighbor : adj.get(curr)) {\n            if (!visited[neighbor]) traverse(neighbor, adj, visited, res);\n        }\n    }\n}",
      cpp: "void dfs(int curr, const vector<vector<int>>& adj, vector<bool>& visited, vector<int>& res) {\n    visited[curr] = true; res.push_back(curr);\n    for (int neighbor : adj[curr]) {\n        if (!visited[neighbor]) dfs(neighbor, adj, visited, res);\n    }\n}",
    },
  },
  "bst-search": {
    id: "bst-search",
    name: "BST Search",
    category: "trees",
    difficulty: "Easy",
    description:
      "Searches for a node inside a Binary Search Tree by recursively splitting traversal space based on element values.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Fast dynamic item lookup indexes",
      "Real-time key query routers",
      "Range lookup solvers",
    ],
    advantages: [
      "Extremely efficient query lookup speeds on balanced binary search trees",
    ],
    disadvantages: [
      "Query time degrades to linear O(n) scan on highly skewed layouts",
    ],
    realWorldUses: [
      "Database B-Tree indexes layouts",
      "File storage systems tree directories",
    ],
    defaultInput: "8 3 10 1 6 14",
    inputType: "tree",
    pseudocode:
      "search(root, target):\n  if root == null or root.val == target: return root\n  if target < root.val: return search(root.left, target)\n  return search(root.right, target)",
    code: {
      javascript:
        "function searchBST(root, target) {\n  if (!root || root.val === target) return root;\n  if (target < root.val) return searchBST(root.left, target);\n  return searchBST(root.right, target);\n}",
      python:
        "def search_bst(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search_bst(root.left, target)\n    return search_bst(root.right, target)",
      java: "public class BSTSearch {\n    public static Node search(Node root, int target) {\n        if (root == null || root.val == target) return root;\n        if (target < root.val) return search(root.left, target);\n        return search(root.right, target);\n    }\n}",
      cpp: "Node* search(Node* root, int target) {\n    if (root == nullptr || root->val == target) return root;\n    if (target < root->val) return search(root->left, target);\n    return search(root->right, target);\n}",
    },
  },
  "tree-height": {
    id: "tree-height",
    name: "Binary Tree Height",
    category: "trees",
    difficulty: "Easy",
    description:
      "Calculates the maximum height of a binary tree by recursively evaluating the height of left/right subtrees.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Tree balancing factor checks",
      "Measuring layout depths",
      "Tree structure validations",
    ],
    advantages: [
      "Visits every node exactly once to count height",
      "Low recursive memory size",
    ],
    disadvantages: ["Consumes linear stack frames proportional to tree height"],
    realWorldUses: [
      "AVL self-balancing tree checks",
      "File path depth indexing generators",
    ],
    defaultInput: "1 2 3 4 5",
    inputType: "tree",
    pseudocode:
      "getHeight(root):\n  if root == null: return 0\n  return 1 + max(getHeight(root.left), getHeight(root.right))",
    code: {
      javascript:
        "function getHeight(root) {\n  if (!root) return 0;\n  return 1 + Math.max(getHeight(root.left), getHeight(root.right));\n}",
      python:
        "def get_height(root):\n    if not root: return 0\n    return 1 + max(get_height(root.left), get_height(root.right))",
      java: "public class TreeHeight {\n    public static int getHeight(Node root) {\n        if (root == null) return 0;\n        return 1 + Math.max(getHeight(root.left), getHeight(root.right));\n    }\n}",
      cpp: "int getHeight(Node* root) {\n    if (root == nullptr) return 0;\n    return 1 + max(getHeight(root->left), getHeight(root->right));\n}",
    },
  },
  lca: {
    id: "lca",
    name: "Lowest Common Ancestor",
    category: "trees",
    difficulty: "Medium",
    description:
      "Finds the lowest common ancestor node for two target nodes p and q inside a binary tree structure.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Linguistic hierarchy relation check",
      "Organisational manager links queries",
      "Inheritance trees analysis",
    ],
    advantages: [
      "Solves the lookup in a single traversal pass",
      "O(h) auxiliary recursion stack space",
    ],
    disadvantages: [
      "Lacks caching support for multiple consecutive node ancestor queries",
    ],
    realWorldUses: [
      "Git branch checkout merge-base lookup engines",
      "Linguistic parsing syntax dependency check",
    ],
    defaultInput: "3 5 1 6 2 0 8",
    inputType: "tree",
    pseudocode:
      "LCA(root, p, q):\n  if root == null or root == p or root == q: return root\n  left = LCA(root.left, p, q)\n  right = LCA(root.right, p, q)\n  if left and right: return root\n  return left ? left : right",
    code: {
      javascript:
        "function lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const left = lowestCommonAncestor(root.left, p, q);\n  const right = lowestCommonAncestor(root.right, p, q);\n  if (left && right) return root;\n  return left ? left : right;\n}",
      python:
        "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q: return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right: return root\n    return left if left else right",
      java: "public class LCA {\n    public static Node lowestCommonAncestor(Node root, Node p, Node q) {\n        if (root == null || root == p || root == q) return root;\n        Node left = lowestCommonAncestor(root.left, p, q);\n        Node right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        return left != null ? left : right;\n    }\n}",
      cpp: "Node* lowestCommonAncestor(Node* root, Node* p, Node* q) {\n    if (root == nullptr || root == p || root == q) return root;\n    Node* left = lowestCommonAncestor(root->left, p, q);\n    Node* right = lowestCommonAncestor(root->right, p, q);\n    if (left != nullptr && right != nullptr) return root;\n    return left != nullptr ? left : right;\n}",
    },
  },
  "activity-selection": {
    id: "activity-selection",
    name: "Activity Selection",
    category: "greedy",
    difficulty: "Easy",
    description:
      "Selects the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Interval scheduling",
      "Meeting room bookings",
      "Project scheduling",
    ],
    advantages: [
      "Simple to implement",
      "Optimal solution guaranteed by sorting finish times",
    ],
    disadvantages: ["Requires sorting of finish times beforehand"],
    realWorldUses: [
      "Operating System process scheduler",
      "Conference room reserve modules",
    ],
    defaultInput: "1-3 2-4 3-6 5-7 8-9",
    inputType: "greedy-interval",
    pseudocode:
      "activitySelection(activities):\n  sort activities by finish time\n  selected = [activities[0]]\n  lastFinish = activities[0].finish\n  for i = 1 to n-1:\n    if activities[i].start >= lastFinish:\n      selected.push(activities[i])\n      lastFinish = activities[i].finish\n  return selected",
    code: {
      javascript:
        "function activitySelection(activities) {\n  activities.sort((a, b) => a.finish - b.finish);\n  const selected = [activities[0]];\n  let lastFinish = activities[0].finish;\n  for (let i = 1; i < activities.length; i++) {\n    if (activities[i].start >= lastFinish) {\n      selected.push(activities[i]);\n      lastFinish = activities[i].finish;\n    }\n  }\n  return selected;\n}",
      python:
        "def activity_selection(activities):\n    activities.sort(key=lambda x: x['finish'])\n    selected = [activities[0]]\n    last_finish = activities[0]['finish']\n    for act in activities[1:]:\n        if act['start'] >= last_finish:\n            selected.append(act)\n            last_finish = act['finish']\n    return selected",
      java: "public class ActivitySelection {\n    public static List<Activity> select(List<Activity> list) {\n        list.sort(Comparator.comparingInt(a -> a.finish));\n        List<Activity> selected = new ArrayList<>();\n        selected.add(list.get(0));\n        int lastFinish = list.get(0).finish;\n        for (int i = 1; i < list.size(); i++) {\n            if (list.get(i).start >= lastFinish) {\n                selected.add(list.get(i));\n                lastFinish = list.get(i).finish;\n            }\n        }\n        return selected;\n    }\n}",
      cpp: "vector<Activity> select(vector<Activity>& list) {\n    sort(list.begin(), list.end(), [](const Activity& a, const Activity& b) {\n        return a.finish < b.finish;\n    });\n    vector<Activity> selected = {list[0]};\n    int lastFinish = list[0].finish;\n    for (size_t i = 1; i < list.size(); ++i) {\n        if (list[i].start >= lastFinish) {\n            selected.push_back(list[i]);\n            lastFinish = list[i].finish;\n        }\n    }\n    return selected;\n}",
    },
  },
  "fractional-knapsack": {
    id: "fractional-knapsack",
    name: "Fractional Knapsack",
    category: "greedy",
    difficulty: "Medium",
    description:
      "Maximizes the value of items put in a knapsack of capacity W by taking fractions of items based on their value-to-weight ratio.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Resource allocation",
      "Material cutting planning",
      "Budget asset selection",
    ],
    advantages: [
      "Finds mathematically global optimal solution in linear-log time",
    ],
    disadvantages: ["Items must be divisible into fractional splits"],
    realWorldUses: [
      "Freight container cargo shipping calculators",
      "Investment portfolio optimization",
    ],
    defaultInput: "60-10 100-20 120-30\n50",
    inputType: "greedy-ratio",
    pseudocode:
      "fractionalKnapsack(val, wt, W):\n  sort items by ratio = val/wt descending\n  totalVal = 0, currWt = 0\n  for item in items:\n    if currWt + item.wt <= W:\n      currWt += item.wt\n      totalVal += item.val\n    else:\n      fraction = (W - currWt) / item.wt\n      totalVal += item.val * fraction\n      break\n  return totalVal",
    code: {
      javascript:
        "function knapsack(items, W) {\n  items.sort((a, b) => (b.val / b.wt) - (a.val / a.wt));\n  let totalVal = 0, currWt = 0;\n  for (let item of items) {\n    if (currWt + item.wt <= W) {\n      currWt += item.wt;\n      totalVal += item.val;\n    } else {\n      let remain = W - currWt;\n      totalVal += item.val * (remain / item.wt);\n      break;\n    }\n  }\n  return totalVal;\n}",
      python:
        "def knapsack(items, W):\n    items.sort(key=lambda x: x['val']/x['wt'], reverse=True)\n    total_val = 0.0\n    curr_wt = 0\n    for item in items:\n        if curr_wt + item['wt'] <= W:\n            curr_wt += item['wt']\n            total_val += item['val']\n        else:\n            remain = W - curr_wt\n            total_val += item['val'] * (remain / item['wt'])\n            break\n    return total_val",
      java: "public class FractionalKnapsack {\n    public static double getMaxValue(Item[] items, int W) {\n        Arrays.sort(items, (a, b) -> Double.compare((double)b.val/b.wt, (double)a.val/a.wt));\n        double totalVal = 0; int currWt = 0;\n        for (Item item : items) {\n            if (currWt + item.wt <= W) {\n                currWt += item.wt;\n                totalVal += item.val;\n            } else {\n                int remain = W - currWt;\n                totalVal += item.val * ((double)remain / item.wt);\n                break;\n            }\n        }\n        return totalVal;\n    }\n}",
      cpp: "double getMaxValue(vector<Item>& items, int W) {\n    sort(items.begin(), items.end(), [](const Item& a, const Item& b) {\n        return (double)a.val/a.wt > (double)b.val/b.wt;\n    });\n    double totalVal = 0.0; int currWt = 0;\n    for (auto& item : items) {\n        if (currWt + item.wt <= W) {\n            currWt += item.wt;\n            totalVal += item.val;\n        } else {\n            int remain = W - currWt;\n            totalVal += item.val * ((double)remain / item.wt);\n            break;\n        }\n    }\n    return totalVal;\n}",
    },
  },
  "single-number": {
    id: "single-number",
    name: "Single Number (XOR)",
    category: "bit-manipulation",
    difficulty: "Easy",
    description:
      "Given a non-empty array of integers where every element appears twice except for one, finds that unique element using XOR properties (x ^ x = 0, x ^ 0 = x).",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Data checksums",
      "De-duplication in streams",
      "Error detection logic",
    ],
    advantages: [
      "Operates in O(1) auxiliary memory space without hashing tables",
    ],
    disadvantages: [
      "Requires elements to appear exactly in pair groups except one",
    ],
    realWorldUses: [
      "Hardware parity scanners",
      "Data compression error correctors",
    ],
    defaultInput: "4 1 2 1 2",
    inputType: "array",
    pseudocode:
      "findSingleNumber(arr):\n  res = 0\n  for val in arr:\n    res = res ^ val\n  return res",
    code: {
      javascript:
        "function findSingleNumber(arr) {\n  let res = 0;\n  for (let val of arr) {\n    res ^= val;\n  }\n  return res;\n}",
      python:
        "def find_single_number(arr):\n    res = 0\n    for val in arr:\n        res ^= val\n    return res",
      java: "public class SingleNumber {\n    public static int find(int[] arr) {\n        int res = 0;\n        for (int x : arr) res ^= x;\n        return res;\n    }\n}",
      cpp: "int findSingleNumber(const vector<int>& arr) {\n    int res = 0;\n    for (int x : arr) res ^= x;\n    return res;\n}",
    },
  },
  "power-of-two": {
    id: "power-of-two",
    name: "Power of Two",
    category: "bit-manipulation",
    difficulty: "Easy",
    description:
      "Checks if a given number is a power of two using the bitwise check `n & (n - 1) === 0` which clears the lowest set bit.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Memory allocator boundaries verification",
      "Binary subdivision partitions check",
    ],
    advantages: [
      "Extremely fast execution (single clock cycle CPU instruction)",
    ],
    disadvantages: ["Requires careful overflow guarding for boundary numbers"],
    realWorldUses: [
      "Operating System virtual memory page frame allocators",
      "Binary tree indices index calculations",
    ],
    defaultInput: "16",
    inputType: "bit-value",
    pseudocode:
      "isPowerOfTwo(n):\n  if n <= 0: return false\n  return (n & (n - 1)) == 0",
    code: {
      javascript:
        "function isPowerOfTwo(n) {\n  if (n <= 0) return false;\n  return (n & (n - 1)) === 0;\n}",
      python:
        "def is_power_of_two(n):\n    return n > 0 and (n & (n - 1)) == 0",
      java: "public class PowerOfTwo {\n    public static boolean check(int n) {\n        return n > 0 && (n & (n - 1)) == 0;\n    }\n}",
      cpp: "bool isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}",
    },
  },
  "gcd-euclidean": {
    id: "gcd-euclidean",
    name: "GCD (Euclidean Algorithm)",
    category: "mathematical",
    difficulty: "Easy",
    description:
      "Computes the Greatest Common Divisor (GCD) of two numbers by recursively replacing the larger number by its remainder when divided by the smaller one.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log min(a, b))",
      worst: "O(log min(a, b))",
    },
    spaceComplexity: "O(log min(a, b))",
    applications: [
      "Reducing fractions",
      "RSA key generation",
      "Diophantine equation solvers",
    ],
    advantages: ["Exponentially faster than subtraction subtraction loops"],
    disadvantages: [
      "Requires division/modulo instructions which can be slow on microcontrollers",
    ],
    realWorldUses: [
      "Cryptography key generators",
      "Graphic asset ratio calculation modules",
    ],
    defaultInput: "48 18",
    inputType: "math-gcd",
    pseudocode: "gcd(a, b):\n  if b == 0: return a\n  return gcd(b, a % b)",
    code: {
      javascript:
        "function gcd(a, b) {\n  while (b !== 0) {\n    let tmp = b;\n    b = a % b;\n    a = tmp;\n  }\n  return a;\n}",
      python:
        "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a",
      java: "public class GCD {\n    public static int getGCD(int a, int b) {\n        while (b != 0) {\n            int tmp = b;\n            b = a % b;\n            a = tmp;\n        }\n        return a;\n    }\n}",
      cpp: "int gcd(int a, int b) {\n    while (b != 0) {\n        int tmp = b;\n        b = a % b;\n        a = tmp;\n    }\n    return a;\n}",
    },
  },
  "sieve-erato": {
    id: "sieve-erato",
    name: "Sieve of Eratosthenes",
    category: "mathematical",
    difficulty: "Medium",
    description:
      "Finds all prime numbers up to n by iteratively marking the multiples of each prime as composite starting from 2.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n log log n)",
      worst: "O(n log log n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Prime factorization",
      "Generating hash codes",
      "Number theory computations",
    ],
    advantages: ["Extremely fast for generating prime lists under 10^7"],
    disadvantages: [
      "Auxiliary memory array sizes scale linearly with bounds n",
    ],
    realWorldUses: [
      "Symmetric key cipher modules",
      "Mathematical prime distribution analysts",
    ],
    defaultInput: "25",
    inputType: "math-sieve",
    pseudocode:
      "sieve(n):\n  prime = array size n+1, fill true\n  for p = 2 to sqrt(n):\n    if prime[p] == true:\n      for i = p*p to n step p:\n        prime[i] = false\n  return primes",
    code: {
      javascript:
        "function sieve(n) {\n  const prime = new Array(n + 1).fill(true);\n  prime[0] = prime[1] = false;\n  for (let p = 2; p * p <= n; p++) {\n    if (prime[p]) {\n      for (let i = p * p; i <= n; i += p) prime[i] = false;\n    }\n  }\n  return prime;\n}",
      python:
        "def sieve(n):\n    prime = [True] * (n + 1)\n    prime[0] = prime[1] = False\n    p = 2\n    while p * p <= n:\n        if prime[p]:\n            for i in range(p * p, n + 1, p):\n                prime[i] = False\n        p += 1\n    return prime",
      java: "public class Sieve {\n    public static boolean[] sieve(int n) {\n        boolean[] prime = new boolean[n + 1];\n        Arrays.fill(prime, true);\n        prime[0] = prime[1] = false;\n        for (int p = 2; p * p <= n; p++) {\n            if (prime[p]) {\n                for (int i = p * p; i <= n; i += p) prime[i] = false;\n            }\n        }\n        return prime;\n    }\n}",
      cpp: "vector<bool> sieve(int n) {\n    vector<bool> prime(n + 1, true);\n    prime[0] = prime[1] = false;\n    for (int p = 2; p * p <= n; ++p) {\n        if (prime[p]) {\n            for (int i = p * p; i <= n; i += p) prime[i] = false;\n        }\n    }\n    return prime;\n}",
    },
  },
  "remove-duplicates": {
    id: "remove-duplicates",
    name: "Remove Duplicates (Two Pointer)",
    category: "two-pointer",
    difficulty: "Easy",
    description:
      "Removes duplicate elements from a sorted array in-place using two pointers (slow and fast pointers) to save memory.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Array compaction",
      "Data cleaning pipelines",
      "De-duplicating logs files",
    ],
    advantages: ["In-place edits with zero auxiliary memory consumption"],
    disadvantages: ["Requires the input array to be pre-sorted"],
    realWorldUses: [
      "Database unique constraint filter indexers",
      "Memory buffer compaction routines",
    ],
    defaultInput: "1 1 2 2 3 4 4",
    inputType: "array",
    pseudocode:
      "removeDuplicates(arr):\n  if arr empty: return 0\n  idx = 0\n  for i = 1 to arr.length - 1:\n    if arr[i] != arr[idx]:\n      idx++\n      arr[idx] = arr[i]\n  return idx + 1",
    code: {
      javascript:
        "function removeDuplicates(arr) {\n  if (arr.length === 0) return 0;\n  let idx = 0;\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] !== arr[idx]) {\n      idx++;\n      arr[idx] = arr[i];\n    }\n  }\n  return idx + 1;\n}",
      python:
        "def remove_duplicates(arr):\n    if not arr: return 0\n    idx = 0\n    for i in range(1, len(arr)):\n        if arr[i] != arr[idx]:\n            idx += 1\n            arr[idx] = arr[i]\n    return idx + 1",
      java: "public class Duplicates {\n    public static int remove(int[] arr) {\n        if (arr.length == 0) return 0;\n        int idx = 0;\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] != arr[idx]) {\n                idx++;\n                arr[idx] = arr[i];\n            }\n        }\n        return idx + 1;\n    }\n}",
      cpp: "int removeDuplicates(vector<int>& arr) {\n    if (arr.empty()) return 0;\n    int idx = 0;\n    for (size_t i = 1; i < arr.size(); ++i) {\n        if (arr[i] != arr[idx]) {\n            idx++;\n            arr[idx] = arr[i];\n        }\n    }\n    return idx + 1;\n}",
    },
  },
  "equilibrium-index": {
    id: "equilibrium-index",
    name: "Equilibrium Index (Prefix Sum)",
    category: "prefix-sum",
    difficulty: "Easy",
    description:
      "Finds the index in an array such that the sum of elements at lower indices is equal to the sum of elements at higher indices.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Data center load balance checking",
      "Pivoting indexes searches",
    ],
    advantages: [
      "Solves partition pivots in a single scan with constant memory space O(1)",
    ],
    disadvantages: ["Requires numerical data ranges"],
    realWorldUses: [
      "Industrial network load distribution checkers",
      "Load balancing gateway routing tests",
    ],
    defaultInput: "-7 1 5 2 -4 3 0",
    inputType: "array",
    pseudocode:
      "equilibrium(arr):\n  totalSum = sum(arr)\n  leftSum = 0\n  for i = 0 to arr.length - 1:\n    totalSum -= arr[i]\n    if leftSum == totalSum: return i\n    leftSum += arr[i]\n  return -1",
    code: {
      javascript:
        "function findEquilibrium(arr) {\n  let totalSum = arr.reduce((a, b) => a + b, 0);\n  let leftSum = 0;\n  for (let i = 0; i < arr.length; i++) {\n    totalSum -= arr[i];\n    if (leftSum === totalSum) return i;\n    leftSum += arr[i];\n  }\n  return -1;\n}",
      python:
        "def find_equilibrium(arr):\n    total_sum = sum(arr)\n    left_sum = 0\n    for i, x in enumerate(arr):\n        total_sum -= x\n        if left_sum == total_sum:\n            return i\n        left_sum += x\n    return -1",
      java: "public class Equilibrium {\n    public static int find(int[] arr) {\n        int totalSum = 0;\n        for (int x : arr) totalSum += x;\n        int leftSum = 0;\n        for (int i = 0; i < arr.length; i++) {\n            totalSum -= arr[i];\n            if (leftSum == totalSum) return i;\n            leftSum += arr[i];\n        }\n        return -1;\n    }\n}",
      cpp: "int findEquilibrium(const vector<int>& arr) {\n        long long totalSum = 0;\n        for (int x : arr) totalSum += x;\n        long long leftSum = 0;\n        for (int i = 0; i < arr.size(); i++) {\n            totalSum -= arr[i];\n            if (leftSum == totalSum) return i;\n            leftSum += arr[i];\n        }\n        return -1;\n    }",
    },
  },
  "union-find-cycle": {
    id: "union-find-cycle",
    name: "DSU Cycle Detection",
    category: "union-find",
    difficulty: "Medium",
    description:
      "Detects cycles in an undirected graph using the Disjoint Set Union (DSU) Find/Union operations.",
    timeComplexity: {
      best: "O(V)",
      average: "O(E alpha(V))",
      worst: "O(E log V)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Kruskal's MST algorithm checks",
      "Network loop check systems",
      "Connected component counts",
    ],
    advantages: [
      "Nearly constant time DSU search (inverse Ackermann alpha latency)",
    ],
    disadvantages: ["Applicable strictly to undirected graphs"],
    realWorldUses: [
      "BGP network routing tables path check routines",
      "Grid cell cluster grouping engines",
    ],
    defaultInput: "4 4\n0 1\n1 2\n2 3\n3 0",
    inputType: "graph",
    pseudocode:
      "detectCycle(V, edges):\n  parent = new Array(V, fill i)\n  for [u, v] in edges:\n    rootU = find(u)\n    rootV = find(v)\n    if rootU == rootV: return true // cycle!\n    union(rootU, rootV)\n  return false",
    code: {
      javascript:
        "function hasCycle(V, edges) {\n  const parent = Array.from({ length: V }, (_, i) => i);\n  function find(i) {\n    if (parent[i] === i) return i;\n    return parent[i] = find(parent[i]); // path compression\n  }\n  for (let [u, v] of edges) {\n    let rU = find(u), rV = find(v);\n    if (rU === rV) return true;\n    parent[rU] = rV;\n  }\n  return false;\n}",
      python:
        "def has_cycle(V, edges):\n    parent = list(range(V))\n    def find(i):\n        if parent[i] == i: return i\n        parent[i] = find(parent[i])\n        return parent[i]\n    for u, v in edges:\n        rU, rV = find(u), find(v)\n        if rU == rV: return True\n        parent[rU] = rV\n    return False",
      java: "public class DSU {\n    int[] parent;\n    int find(int i) {\n        if (parent[i] == i) return i;\n        return parent[i] = find(parent[i]);\n    }\n    public boolean hasCycle(int V, int[][] edges) {\n        parent = new int[V];\n        for (int i = 0; i < V; i++) parent[i] = i;\n        for (int[] edge : edges) {\n            int rU = find(edge[0]);\n            int rV = find(edge[1]);\n            if (rU == rV) return true;\n            parent[rU] = rV;\n        }\n        return false;\n    }\n}",
      cpp: "class DSU {\n    vector<int> parent;\npublic:\n    int findNode(int i) {\n        if (parent[i] == i) return i;\n        return parent[i] = findNode(parent[i]);\n    }\n    bool hasCycle(int V, vector<pair<int, int>>& edges) {\n        parent.resize(V);\n        for (int i = 0; i < V; i++) parent[i] = i;\n        for (auto& edge : edges) {\n            int rU = findNode(edge.first);\n            int rV = findNode(edge.second);\n            if (rU == rV) return true;\n            parent[rU] = rV;\n        }\n        return false;\n    }\n};",
    },
  },
  "segment-tree": {
    id: "segment-tree",
    name: "Segment Tree Range Query",
    category: "advanced-ds",
    difficulty: "Hard",
    description:
      "A Segment Tree is a tree data structure used for storing information about intervals or segments. It allows querying which of the stored segments contains a given point, or answering range queries efficiently.",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Range sum queries",
      "Range min/max queries",
      "Interval overlaps checking",
    ],
    advantages: ["Handles dynamic array updates and queries in O(log n) time"],
    disadvantages: [
      "Requires O(n) auxiliary memory space to build the tree node array",
    ],
    realWorldUses: [
      "Computational graphics window region queries",
      "High-frequency database aggregation updates",
    ],
    defaultInput: "1 3 5 7 9 11",
    inputType: "array",
    pseudocode:
      "buildTree(arr, tree, node, start, end):\n  if start == end: tree[node] = arr[start]\n  else:\n    mid = (start + end)/2\n    buildTree(arr, tree, 2*node, start, mid)\n    buildTree(arr, tree, 2*node+1, mid+1, end)\n    tree[node] = tree[2*node] + tree[2*node+1]",
    code: {
      javascript:
        "function build(arr, tree, node, s, e) {\n  if (s === e) { tree[node] = arr[s]; return; }\n  let mid = Math.floor((s + e) / 2);\n  build(arr, tree, 2 * node, s, mid);\n  build(arr, tree, 2 * node + 1, mid + 1, e);\n  tree[node] = tree[2 * node] + tree[2 * node + 1];\n}",
      python:
        "def build(arr, tree, node, s, e):\n    if s == e:\n        tree[node] = arr[s]\n        return\n    mid = (s + e) // 2\n    build(arr, tree, 2 * node, s, mid)\n    build(arr, tree, 2 * node + 1, mid + 1, e)\n    tree[node] = tree[2 * node] + tree[2 * node + 1]",
      java: "public class SegmentTree {\n    public static void build(int[] arr, int[] tree, int node, int s, int e) {\n        if (s == e) { tree[node] = arr[s]; return; }\n        int mid = (s + e) / 2;\n        build(arr, tree, 2 * node, s, mid);\n        build(arr, tree, 2 * node + 1, mid + 1, e);\n        tree[node] = tree[2 * node] + tree[2 * node + 1];\n    }\n}",
      cpp: "void build(const vector<int>& arr, vector<int>& tree, int node, int s, int e) {\n    if (s == e) { tree[node] = arr[s]; return; }\n    int mid = (s + e) / 2;\n    build(arr, tree, 2 * node, s, mid);\n    build(arr, tree, 2 * node + 1, mid + 1, e);\n    tree[node] = tree[2 * node] + tree[2 * node + 1];\n}",
    },
  },
  "trie-search": {
    id: "trie-search",
    name: "Trie Auto-Complete",
    category: "advanced-ds",
    difficulty: "Medium",
    description:
      "Inserts keys into a prefix tree (Trie) to support rapid prefix validation and word searches.",
    timeComplexity: {
      best: "O(1)",
      average: "O(k)",
      worst: "O(k)",
    },
    spaceComplexity: "O(a * k)",
    applications: [
      "Spell checkers",
      "Auto-complete input panels",
      "IP routing prefix matches",
    ],
    advantages: [
      "Extremely fast key lookup times matching key character length k",
    ],
    disadvantages: [
      "Consumes high memory overhead to store character child pointers",
    ],
    realWorldUses: [
      "Search engine search suggestions auto-complete bars",
      "Router IP lookup network buffers",
    ],
    defaultInput: "cat car dog cap",
    inputType: "strings",
    pseudocode:
      "insert(root, word):\n  curr = root\n  for char in word:\n    if char not in curr.children:\n      curr.children[char] = new TrieNode()\n    curr = curr.children[char]\n  curr.isEndOfWord = true",
    code: {
      javascript:
        "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isEndOfWord = false;\n  }\n}\nfunction insert(root, word) {\n  let curr = root;\n  for (let char of word) {\n    if (!curr.children[char]) curr.children[char] = new TrieNode();\n    curr = curr.children[char];\n  }\n  curr.isEndOfWord = true;\n}",
      python:
        "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\ndef insert(root, word):\n    curr = root\n    for char in word:\n        if char not in curr.children:\n            curr.children[char] = TrieNode()\n        curr = curr.children[char]\n    curr.is_end = True",
      java: "public class Trie {\n    static class TrieNode {\n        TrieNode[] children = new TrieNode[26];\n        boolean isEnd = false;\n    }\n    public static void insert(TrieNode root, String word) {\n        TrieNode curr = root;\n        for (char ch : word.toCharArray()) {\n            int idx = ch - 'a';\n            if (curr.children[idx] == null) curr.children[idx] = new TrieNode();\n            curr = curr.children[idx];\n        }\n        curr.isEnd = true;\n    }\n}",
      cpp: "struct TrieNode {\n    TrieNode* children[26] = {nullptr};\n    bool isEnd = false;\n};\nvoid insertNode(TrieNode* root, string word) {\n    TrieNode* curr = root;\n    for (char ch : word) {\n        int idx = ch - 'a';\n        if (curr->children[idx] == nullptr) curr->children[idx] = new TrieNode();\n        curr = curr->children[idx];\n    }\n    curr->isEnd = true;\n}",
    },
  },
  "rabin-karp": {
    id: "rabin-karp",
    name: "Rabin-Karp Search",
    category: "advanced-algo",
    difficulty: "Medium",
    description:
      "Finds string matches of a pattern in a text using a rolling hash function to prune comparisons.",
    timeComplexity: {
      best: "O(n + m)",
      average: "O(n + m)",
      worst: "O(n * m)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Plagiarism checkers",
      "Multiple pattern match scans",
      "DNA sequencing matches",
    ],
    advantages: ["Extremely simple to scale to multi-pattern search checks"],
    disadvantages: [
      "Spurious hash collisions degrade runtime to quadratic worst-case O(n * m)",
    ],
    realWorldUses: [
      "Document similarity checking tools",
      "Pattern signature matches in intrusion detection software",
    ],
    defaultInput: "AABAACAADAABAABA\nAABA",
    inputType: "string-pattern",
    pseudocode:
      "rabinKarp(txt, pat):\n  hpat = hash(pat), htxt = hash(txt[0 to m-1])\n  for i = 0 to n-m:\n    if hpat == htxt:\n      if txt[i to i+m-1] == pat: report match\n    htxt = rollHash(htxt, txt[i], txt[i+m])",
    code: {
      javascript:
        "function search(txt, pat, q = 101) {\n  const d = 256;\n  let m = pat.length, n = txt.length;\n  let hpat = 0, htxt = 0, h = 1;\n  for (let i = 0; i < m - 1; i++) h = (h * d) % q;\n  for (let i = 0; i < m; i++) {\n    hpat = (d * hpat + pat.charCodeAt(i)) % q;\n    htxt = (d * htxt + txt.charCodeAt(i)) % q;\n  }\n  const indices = [];\n  for (let i = 0; i <= n - m; i++) {\n    if (hpat === htxt) {\n      if (txt.substring(i, i + m) === pat) indices.push(i);\n    }\n    if (i < n - m) {\n      htxt = (d * (htxt - txt.charCodeAt(i) * h) + txt.charCodeAt(i + m)) % q;\n      if (htxt < 0) htxt = htxt + q;\n    }\n  }\n  return indices;\n}",
      python:
        "def search(txt, pat, q=101):\n    d = 256\n    m, n = len(pat), len(txt)\n    hpat = htxt = 0\n    h = pow(d, m-1, q)\n    for i in range(m):\n        hpat = (d * hpat + ord(pat[i])) % q\n        htxt = (d * htxt + ord(txt[i])) % q\n    indices = []\n    for i in range(n - m + 1):\n        if hpat == htxt:\n            if txt[i:i+m] == pat: indices.append(i)\n        if i < n - m:\n            htxt = (d * (htxt - ord(txt[i]) * h) + ord(txt[i+m])) % q\n            if htxt < 0: htxt += q\n    return indices",
      java: "public class RabinKarp {\n    public static List<Integer> search(String txt, String pat) {\n        int d = 256, q = 101;\n        int m = pat.length(), n = txt.length();\n        int hpat = 0, htxt = 0, h = 1;\n        for (int i = 0; i < m - 1; i++) h = (h * d) % q;\n        for (int i = 0; i < m; i++) {\n            hpat = (d * hpat + pat.charAt(i)) % q;\n            htxt = (d * htxt + txt.charAt(i)) % q;\n        }\n        List<Integer> indices = new ArrayList<>();\n        for (int i = 0; i <= n - m; i++) {\n            if (hpat == htxt) {\n                if (txt.substring(i, i + m).equals(pat)) indices.add(i);\n            }\n            if (i < n - m) {\n                htxt = (d * (htxt - txt.charAt(i) * h) + txt.charAt(i + m)) % q;\n                if (htxt < 0) htxt += q;\n            }\n        }\n        return indices;\n    }\n}",
      cpp: "vector<int> search(string txt, string pat) {\n    int d = 256, q = 101;\n    int m = pat.length(), n = txt.length();\n    int hpat = 0, htxt = 0, h = 1;\n    for (int i = 0; i < m - 1; i++) h = (h * d) % q;\n    for (int i = 0; i < m; i++) {\n        hpat = (d * hpat + pat[i]) % q;\n        htxt = (d * htxt + txt[i]) % q;\n    }\n    vector<int> indices;\n    for (int i = 0; i <= n - m; i++) {\n        if (hpat == htxt) {\n            if (txt.substr(i, i + m) == pat) indices.push_back(i);\n        }\n        if (i < n - m) {\n            htxt = (d * (htxt - txt[i] * h) + txt[i + m]) % q;\n            if (htxt < 0) htxt += q;\n        }\n    }\n    return indices;\n}",
    },
  },
  "reverse-array": {
    id: "reverse-array",
    name: "Reverse Array",
    category: "arrays",
    difficulty: "Easy",
    description:
      "Reverses an array in-place using two pointers approaching from each end until they meet in the middle. A fundamental operation used in many algorithms.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "String reversal",
      "Palindrome checks",
      "Rotate array implementation",
    ],
    advantages: ["In-place with O(1) extra space", "Simple and fast"],
    disadvantages: ["Modifies the original array"],
    realWorldUses: [
      "Undo stack reverse operations",
      "Image mirroring algorithms",
    ],
    defaultInput: "1 2 3 4 5 6 7",
    inputType: "array",
    pseudocode:
      "reverseArray(arr):\n  left = 0, right = arr.length - 1\n  while left < right:\n    swap(arr[left], arr[right])\n    left++, right--",
    code: {
      javascript:
        "function reverseArray(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    [arr[left], arr[right]] = [arr[right], arr[left]];\n    left++;\n    right--;\n  }\n  return arr;\n}",
      python:
        "def reverse_array(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr",
      java: "public class ReverseArray {\n    public static void reverse(int[] arr) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int tmp = arr[left];\n            arr[left++] = arr[right];\n            arr[right--] = tmp;\n        }\n    }\n}",
      cpp: "void reverseArray(vector<int>& arr) {\n    int left = 0, right = arr.size() - 1;\n    while (left < right) {\n        swap(arr[left++], arr[right--]);\n    }\n}",
    },
  },
  "palindrome-check": {
    id: "palindrome-check",
    name: "Palindrome Check",
    category: "strings",
    difficulty: "Easy",
    description:
      "Checks if a string reads the same forwards and backwards using two pointers. A palindrome is a string that is equal to its reverse.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: ["DNA sequence analysis", "Data validation", "Word puzzles"],
    advantages: ["O(1) space solution with two pointers"],
    disadvantages: ["Case-sensitive unless normalized"],
    realWorldUses: [
      "String validation in forms",
      "Genome bioinformatics research",
    ],
    defaultInput: "racecar",
    inputType: "strings-list",
    pseudocode:
      "isPalindrome(str):\n  left = 0, right = str.length - 1\n  while left < right:\n    if str[left] != str[right]: return false\n    left++, right--\n  return true",
    code: {
      javascript:
        "function isPalindrome(str) {\n  let left = 0, right = str.length - 1;\n  while (left < right) {\n    if (str[left] !== str[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}",
      python: "def is_palindrome(s):\n    return s == s[::-1]",
      java: "public class Palindrome {\n    public static boolean check(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (s.charAt(l++) != s.charAt(r--)) return false;\n        }\n        return true;\n    }\n}",
      cpp: "bool isPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n        if (s[l++] != s[r--]) return false;\n    }\n    return true;\n}",
    },
  },
  "reverse-string": {
    id: "reverse-string",
    name: "Reverse String",
    category: "strings",
    difficulty: "Easy",
    description:
      "Reverses a string in-place by swapping characters from both ends using two pointers until they meet in the middle.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "String manipulation utilities",
      "Anagram detection preprocessing",
    ],
    advantages: ["Simple in-place swap approach"],
    disadvantages: ["Immutable strings require O(n) space in some languages"],
    realWorldUses: ["Text processing utilities", "URL slug reversal tools"],
    defaultInput: "hello world",
    inputType: "strings-list",
    pseudocode:
      "reverseString(chars):\n  left = 0, right = chars.length - 1\n  while left < right:\n    swap(chars[left], chars[right])\n    left++, right--",
    code: {
      javascript:
        "function reverseString(s) {\n  return s.split('').reverse().join('');\n}",
      python: "def reverse_string(s):\n    return s[::-1]",
      java: "public class ReverseString {\n    public static String reverse(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n}",
      cpp: "string reverseString(string s) {\n    reverse(s.begin(), s.end());\n    return s;\n}",
    },
  },
  "merge-sorted-lists": {
    id: "merge-sorted-lists",
    name: "Merge Two Sorted Lists",
    category: "linked-list",
    difficulty: "Easy",
    description:
      "Merges two sorted linked lists into one sorted linked list by comparing nodes and linking them in order.",
    timeComplexity: {
      best: "O(n+m)",
      average: "O(n+m)",
      worst: "O(n+m)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Merge sort merge step",
      "External sorting",
      "Database merge joins",
    ],
    advantages: ["Linear time O(n+m) with constant extra space"],
    disadvantages: ["Modifies the original linked list node pointers"],
    realWorldUses: [
      "Database engine merge-join operations",
      "External merge-sort file algorithms",
    ],
    defaultInput: "1 3 5 7",
    inputType: "linked-list",
    pseudocode:
      "mergeSorted(l1, l2):\n  dummy = new Node(0)\n  curr = dummy\n  while l1 and l2:\n    if l1.val <= l2.val: curr.next = l1; l1 = l1.next\n    else: curr.next = l2; l2 = l2.next\n    curr = curr.next\n  curr.next = l1 or l2\n  return dummy.next",
    code: {
      javascript:
        "function mergeSortedLists(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let curr = dummy;\n  while (l1 && l2) {\n    if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }\n    else { curr.next = l2; l2 = l2.next; }\n    curr = curr.next;\n  }\n  curr.next = l1 || l2;\n  return dummy.next;\n}",
      python:
        "def merge_sorted(l1, l2):\n    dummy = ListNode(0)\n    curr = dummy\n    while l1 and l2:\n        if l1.val <= l2.val:\n            curr.next = l1; l1 = l1.next\n        else:\n            curr.next = l2; l2 = l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next",
      java: "public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }\n        else { curr.next = l2; l2 = l2.next; }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
      cpp: "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0), *curr = &dummy;\n    while (l1 && l2) {\n        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }\n        else { curr->next = l2; l2 = l2->next; }\n        curr = curr->next;\n    }\n    curr->next = l1 ? l1 : l2;\n    return dummy.next;\n}",
    },
  },
  "min-stack": {
    id: "min-stack",
    name: "Min Stack",
    category: "stack",
    difficulty: "Medium",
    description:
      "A stack that supports retrieving the minimum element in O(1) time by maintaining an auxiliary min-tracking stack alongside the main stack.",
    timeComplexity: {
      best: "O(1)",
      average: "O(1)",
      worst: "O(1)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Real-time minimum tracking",
      "Range minimum queries in streams",
    ],
    advantages: ["All operations in O(1) constant time"],
    disadvantages: ["Requires O(n) auxiliary space for the min-stack"],
    realWorldUses: [
      "Stock market minimum price trackers",
      "Database running aggregate monitors",
    ],
    defaultInput: "push 5 push 3 push 7 push 1 getMin pop getMin",
    inputType: "stack",
    pseudocode:
      "MinStack:\n  stack = [], minStack = []\n  push(val):\n    stack.push(val)\n    minStack.push(min(val, minStack.top))\n  pop(): stack.pop(), minStack.pop()\n  getMin(): return minStack.top",
    code: {
      javascript:
        "class MinStack {\n  constructor() { this.stack = []; this.minStk = []; }\n  push(val) {\n    this.stack.push(val);\n    const m = this.minStk.length ? Math.min(val, this.minStk.at(-1)) : val;\n    this.minStk.push(m);\n  }\n  pop() { this.stack.pop(); this.minStk.pop(); }\n  getMin() { return this.minStk.at(-1); }\n}",
      python:
        "class MinStack:\n    def __init__(self): self.stack, self.min_stk = [], []\n    def push(self, val):\n        self.stack.append(val)\n        m = min(val, self.min_stk[-1]) if self.min_stk else val\n        self.min_stk.append(m)\n    def pop(self): self.stack.pop(); self.min_stk.pop()\n    def get_min(self): return self.min_stk[-1]",
      java: "class MinStack {\n    Deque<Integer> stack = new ArrayDeque<>(), minStk = new ArrayDeque<>();\n    public void push(int val) {\n        stack.push(val);\n        minStk.push(minStk.isEmpty() ? val : Math.min(val, minStk.peek()));\n    }\n    public void pop() { stack.pop(); minStk.pop(); }\n    public int getMin() { return minStk.peek(); }\n}",
      cpp: "class MinStack {\n    stack<int> stk, minStk;\npublic:\n    void push(int val) {\n        stk.push(val);\n        minStk.push(minStk.empty() ? val : min(val, minStk.top()));\n    }\n    void pop() { stk.pop(); minStk.pop(); }\n    int getMin() { return minStk.top(); }\n};",
    },
  },
  "level-order-traversal": {
    id: "level-order-traversal",
    name: "Level Order Traversal (BFS)",
    category: "trees",
    difficulty: "Easy",
    description:
      "Traverses a binary tree level by level using a queue. Also called BFS tree traversal — visits all nodes at depth d before depth d+1.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Shortest path in unweighted graphs",
      "Binary tree serialization",
      "Zigzag traversal",
    ],
    advantages: [
      "Finds shortest path in unweighted trees",
      "Visits nodes in breadth-first order",
    ],
    disadvantages: [
      "Requires O(n) queue space for storing nodes at each level",
    ],
    realWorldUses: [
      "File system directory level explorer",
      "Organizational chart level display",
    ],
    defaultInput: "4 2 7 1 3 6 9",
    inputType: "tree",
    pseudocode:
      "levelOrder(root):\n  queue = [root]\n  while queue not empty:\n    level = []\n    for node in current level:\n      level.add(node.val)\n      enqueue node.left, node.right\n    result.add(level)",
    code: {
      javascript:
        "function levelOrder(root) {\n  if (!root) return [];\n  const queue = [root], result = [];\n  while (queue.length) {\n    const level = [], n = queue.length;\n    for (let i = 0; i < n; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(level);\n  }\n  return result;\n}",
      python:
        "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res",
      java: "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        int n = q.size();\n        List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            TreeNode node = q.poll();\n            level.add(node.val);\n            if (node.left != null) q.offer(node.left);\n            if (node.right != null) q.offer(node.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
      cpp: "vector<vector<int>> levelOrder(TreeNode* root) {\n    vector<vector<int>> res;\n    if (!root) return res;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        int n = q.size();\n        vector<int> level;\n        for (int i = 0; i < n; i++) {\n            auto node = q.front(); q.pop();\n            level.push_back(node->val);\n            if (node->left) q.push(node->left);\n            if (node->right) q.push(node->right);\n        }\n        res.push_back(level);\n    }\n    return res;\n}",
    },
  },
  "bellman-ford": {
    id: "bellman-ford",
    name: "Bellman-Ford Algorithm",
    category: "graphs",
    difficulty: "Medium",
    description:
      "Finds shortest paths from a source vertex to all others, including graphs with negative weight edges. Detects negative weight cycles by running V-1 edge relaxations.",
    timeComplexity: {
      best: "O(VE)",
      average: "O(VE)",
      worst: "O(VE)",
    },
    spaceComplexity: "O(V)",
    applications: [
      "Negative weight graph routing",
      "Currency arbitrage detection",
      "Network distance computation",
    ],
    advantages: ["Handles negative weights unlike Dijkstra's algorithm"],
    disadvantages: ["Slower than Dijkstra's O(VE) vs O((V+E) log V)"],
    realWorldUses: [
      "Financial arbitrage detection systems",
      "BGP routing protocol update cycles",
    ],
    defaultInput: "0 1 -1\n0 2 4\n1 2 3\n1 3 2\n1 4 2\n3 2 5\n3 1 1\n4 3 -3",
    inputType: "graph",
    pseudocode:
      "bellmanFord(graph, src):\n  dist = [INF]*V; dist[src] = 0\n  for i = 1 to V-1:\n    for each edge (u,v,w):\n      if dist[u]+w < dist[v]: dist[v] = dist[u]+w",
    code: {
      javascript:
        "function bellmanFord(V, edges, src) {\n  const dist = new Array(V).fill(Infinity);\n  dist[src] = 0;\n  for (let i = 0; i < V - 1; i++) {\n    for (const [u, v, w] of edges) {\n      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n      }\n    }\n  }\n  return dist;\n}",
      python:
        "def bellman_ford(V, edges, src):\n    dist = [float('inf')] * V\n    dist[src] = 0\n    for _ in range(V - 1):\n        for u, v, w in edges:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n    return dist",
      java: "public int[] bellmanFord(int V, int[][] edges, int src) {\n    int[] dist = new int[V];\n    Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[src] = 0;\n    for (int i = 0; i < V - 1; i++) {\n        for (int[] e : edges) {\n            if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])\n                dist[e[1]] = dist[e[0]] + e[2];\n        }\n    }\n    return dist;\n}",
      cpp: "vector<int> bellmanFord(int V, vector<tuple<int,int,int>>& edges, int src) {\n    vector<int> dist(V, INT_MAX);\n    dist[src] = 0;\n    for (int i = 0; i < V - 1; ++i) {\n        for (auto& [u, v, w] : edges) {\n            if (dist[u] != INT_MAX && dist[u] + w < dist[v])\n                dist[v] = dist[u] + w;\n        }\n    }\n    return dist;\n}",
    },
  },
  "word-search": {
    id: "word-search",
    name: "Word Search (Backtracking)",
    category: "backtracking",
    difficulty: "Medium",
    description:
      "Searches for a word in a 2D character grid using DFS backtracking. Explores all 4 directions from each starting cell, marking cells as visited to avoid reuse.",
    timeComplexity: {
      best: "O(m*n*4^L)",
      average: "O(m*n*4^L)",
      worst: "O(m*n*4^L)",
    },
    spaceComplexity: "O(L)",
    applications: ["Puzzle game solving", "NLP word grid extraction"],
    advantages: ["Explores all valid paths systematically with backtracking"],
    disadvantages: ["Exponential worst-case time on large grids"],
    realWorldUses: [
      "Word puzzle game solving engines",
      "Boggle word-finding algorithms",
    ],
    defaultInput: "ABCE\nSFCS\nADEE\nSEET",
    inputType: "word-search-grid",
    pseudocode:
      "wordSearch(board, word):\n  for each cell (i,j):\n    if dfs(board, word, i, j, 0): return true\n  return false",
    code: {
      javascript:
        "function exist(board, word) {\n  const rows = board.length, cols = board[0].length;\n  const dfs = (r, c, idx) => {\n    if (idx === word.length) return true;\n    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[idx]) return false;\n    const tmp = board[r][c]; board[r][c] = '#';\n    const found = dfs(r+1,c,idx+1)||dfs(r-1,c,idx+1)||dfs(r,c+1,idx+1)||dfs(r,c-1,idx+1);\n    board[r][c] = tmp;\n    return found;\n  };\n  for (let r = 0; r < rows; r++)\n    for (let c = 0; c < cols; c++)\n      if (dfs(r, c, 0)) return true;\n  return false;\n}",
      python:
        "def exist(board, word):\n    rows, cols = len(board), len(board[0])\n    def dfs(r, c, i):\n        if i == len(word): return True\n        if not (0<=r<rows and 0<=c<cols) or board[r][c] != word[i]: return False\n        tmp, board[r][c] = board[r][c], '#'\n        found = any(dfs(r+dr, c+dc, i+1) for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)])\n        board[r][c] = tmp\n        return found\n    return any(dfs(r,c,0) for r in range(rows) for c in range(cols))",
      java: "public boolean exist(char[][] board, String word) {\n    for (int r = 0; r < board.length; r++)\n        for (int c = 0; c < board[0].length; c++)\n            if (dfs(board, word, r, c, 0)) return true;\n    return false;\n}\nprivate boolean dfs(char[][] b, String w, int r, int c, int i) {\n    if (i == w.length()) return true;\n    if (r<0||r>=b.length||c<0||c>=b[0].length||b[r][c]!=w.charAt(i)) return false;\n    char tmp = b[r][c]; b[r][c] = '#';\n    boolean found = dfs(b,w,r+1,c,i+1)||dfs(b,w,r-1,c,i+1)||dfs(b,w,r,c+1,i+1)||dfs(b,w,r,c-1,i+1);\n    b[r][c] = tmp; return found;\n}",
      cpp: "bool exist(vector<vector<char>>& board, string word) {\n    int m=board.size(), n=board[0].size();\n    function<bool(int,int,int)> dfs=[&](int r,int c,int i){\n        if(i==(int)word.size()) return true;\n        if(r<0||r>=m||c<0||c>=n||board[r][c]!=word[i]) return false;\n        char tmp=board[r][c]; board[r][c]='#';\n        bool ok=dfs(r+1,c,i+1)||dfs(r-1,c,i+1)||dfs(r,c+1,i+1)||dfs(r,c-1,i+1);\n        board[r][c]=tmp; return ok;\n    };\n    for(int r=0;r<m;r++) for(int c=0;c<n;c++) if(dfs(r,c,0)) return true;\n    return false;\n}",
    },
  },
  "generate-parentheses": {
    id: "generate-parentheses",
    name: "Generate Parentheses",
    category: "backtracking",
    difficulty: "Medium",
    description:
      "Generates all combinations of n pairs of well-formed parentheses using recursive backtracking, ensuring open count never exceeds n and close count never exceeds open count.",
    timeComplexity: {
      best: "O(4^n/sqrt(n))",
      average: "O(4^n/sqrt(n))",
      worst: "O(4^n/sqrt(n))",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Code formatting validation",
      "Expression parsing",
      "Mathematical formula generation",
    ],
    advantages: ["Generates only valid strings without post-filtering"],
    disadvantages: ["Output size is Catalan number which grows exponentially"],
    realWorldUses: [
      "IDE bracket auto-completion engines",
      "Mathematical expression validators",
    ],
    defaultInput: "3",
    inputType: "recursion",
    pseudocode:
      "generateParentheses(n):\n  result = []\n  backtrack('', 0, 0, n)\n  if open < n: add '('\n  if close < open: add ')'",
    code: {
      javascript:
        "function generateParenthesis(n) {\n  const res = [];\n  const bt = (cur, open, close) => {\n    if (cur.length === 2 * n) { res.push(cur); return; }\n    if (open < n) bt(cur + '(', open + 1, close);\n    if (close < open) bt(cur + ')', open, close + 1);\n  };\n  bt('', 0, 0);\n  return res;\n}",
      python:
        "def generate_parenthesis(n):\n    res = []\n    def bt(cur, op, cl):\n        if len(cur) == 2*n: res.append(cur); return\n        if op < n: bt(cur+'(', op+1, cl)\n        if cl < op: bt(cur+')', op, cl+1)\n    bt('', 0, 0)\n    return res",
      java: 'public List<String> generateParenthesis(int n) {\n    List<String> res = new ArrayList<>();\n    backtrack(res, "", 0, 0, n);\n    return res;\n}\nprivate void backtrack(List<String> res, String cur, int op, int cl, int n) {\n    if (cur.length() == 2*n) { res.add(cur); return; }\n    if (op < n) backtrack(res, cur+"(", op+1, cl, n);\n    if (cl < op) backtrack(res, cur+")", op, cl+1, n);\n}',
      cpp: 'vector<string> generateParenthesis(int n) {\n    vector<string> res;\n    function<void(string,int,int)> bt=[&](string cur,int op,int cl){\n        if((int)cur.size()==2*n){res.push_back(cur);return;}\n        if(op<n) bt(cur+"(",op+1,cl);\n        if(cl<op) bt(cur+")",op,cl+1);\n    };\n    bt("",0,0);\n    return res;\n}',
    },
  },
  "lcs-dp": {
    id: "lcs-dp",
    name: "Longest Common Subsequence",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Finds the length of the longest subsequence common to two strings using a 2D DP table. A subsequence maintains relative order but needn't be contiguous.",
    timeComplexity: {
      best: "O(mn)",
      average: "O(mn)",
      worst: "O(mn)",
    },
    spaceComplexity: "O(mn)",
    applications: [
      "Diff tools (git diff)",
      "Bioinformatics sequence alignment",
      "Plagiarism detection",
    ],
    advantages: ["Solves one of the most important DP problems optimally"],
    disadvantages: ["O(mn) space may be large for very long strings"],
    realWorldUses: ["Git diff algorithm", "DNA sequence alignment software"],
    defaultInput: "ABCBDAB",
    inputType: "dp",
    pseudocode:
      "lcs(s1, s2):\n  if s1[i-1]==s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n  else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
    code: {
      javascript:
        "function lcs(s1, s2) {\n  const m = s1.length, n = s2.length;\n  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));\n  for (let i = 1; i <= m; i++)\n    for (let j = 1; j <= n; j++)\n      dp[i][j] = s1[i-1]===s2[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]);\n  return dp[m][n];\n}",
      python:
        "def lcs(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]",
      java: "public int lcs(String s1, String s2) {\n    int m=s1.length(), n=s2.length();\n    int[][] dp = new int[m+1][n+1];\n    for (int i=1;i<=m;i++)\n        for (int j=1;j<=n;j++)\n            dp[i][j]=s1.charAt(i-1)==s2.charAt(j-1)?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);\n    return dp[m][n];\n}",
      cpp: "int lcs(string s1, string s2) {\n    int m=s1.size(),n=s2.size();\n    vector<vector<int>> dp(m+1,vector<int>(n+1,0));\n    for(int i=1;i<=m;i++)\n        for(int j=1;j<=n;j++)\n            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:max(dp[i-1][j],dp[i][j-1]);\n    return dp[m][n];\n}",
    },
  },
  "longest-common-substring": {
    id: "longest-common-substring",
    name: "Longest Common Substring",
    category: "dynamic-programming",
    difficulty: "Medium",
    description:
      "Finds the length of the longest common contiguous substring between two strings using a 2D DP table.",
    timeComplexity: {
      best: "O(mn)",
      average: "O(mn)",
      worst: "O(mn)",
    },
    spaceComplexity: "O(mn)",
    applications: [
      "Plagiarism detection",
      "Bioinformatics DNA sequence matching",
    ],
    advantages: ["Optimal contiguous matching"],
    disadvantages: ["O(mn) space complexity"],
    realWorldUses: ["Text comparison utilities"],
    defaultInput: "ABCBDAB",
    inputType: "dp",
    pseudocode:
      "lcs(s1, s2):\n  if s1[i-1]==s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n  else: dp[i][j] = 0",
    code: {
      javascript:
        "function longestCommonSubstring(s1, s2) {\n  const m = s1.length, n = s2.length;\n  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));\n  let maxLen = 0;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (s1[i-1] === s2[j-1]) {\n        dp[i][j] = dp[i-1][j-1] + 1;\n        maxLen = Math.max(maxLen, dp[i][j]);\n      } else {\n        dp[i][j] = 0;\n      }\n    }\n  }\n  return maxLen;\n}",
      python:
        "def longestCommonSubstring(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    maxLen = 0\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n                maxLen = max(maxLen, dp[i][j])\n            else:\n                dp[i][j] = 0\n    return maxLen",
    },
  },
  "dp-burst-balloons": {
    id: "dp-burst-balloons",
    name: "Burst Balloons",
    category: "dynamic-programming",
    difficulty: "Hard",
    description:
      "Maximize the coins obtained by bursting balloons. Bursting balloon i gives nums[i-1] * nums[i] * nums[i+1] coins.",
    timeComplexity: {
      best: "O(n³)",
      average: "O(n³)",
      worst: "O(n³)",
    },
    spaceComplexity: "O(n²)",
    applications: ["Game theory optimization", "Interval dynamic programming"],
    advantages: ["Finds global maximum coins"],
    disadvantages: ["O(n³) time complexity is slow for large n"],
    realWorldUses: ["Operations research scheduling"],
    defaultInput: "5 3 8 9 1",
    inputType: "dp",
    pseudocode:
      "burst(nums):\n  dp[i][j] = max_{k=i..j} (dp[i][k-1] + val[i-1]*val[k]*val[j+1] + dp[k+1][j])",
    code: {
      javascript:
        "function maxCoins(nums) {\n  const arr = [1, ...nums, 1];\n  const n = nums.length;\n  const dp = Array.from({length: n+2}, () => new Array(n+2).fill(0));\n  for (let len = 1; len <= n; len++) {\n    for (let i = 1; i <= n - len + 1; i++) {\n      let j = i + len - 1;\n      for (let k = i; k <= j; k++) {\n        dp[i][j] = Math.max(dp[i][j], dp[i][k-1] + arr[i-1] * arr[k] * arr[j+1] + dp[k+1][j]);\n      }\n    }\n  }\n  return dp[1][n];\n}",
      python:
        "def maxCoins(nums):\n    arr = [1] + nums + [1]\n    n = len(nums)\n    dp = [[0] * (n + 2) for _ in range(n + 2)]\n    for length in range(1, n + 1):\n        for i in range(1, n - length + 2):\n            j = i + length - 1\n            for k in range(i, j + 1):\n                dp[i][j] = max(dp[i][j], dp[i][k-1] + arr[i-1] * arr[k] * arr[j+1] + dp[k+1][j])\n    return dp[1][n]",
    },
  },
  "dp-matrix-chain-multiplication": {
    id: "dp-matrix-chain-multiplication",
    name: "Matrix Chain Multiplication",
    category: "dynamic-programming",
    difficulty: "Hard",
    description:
      "Finds the most efficient way to multiply a chain of matrices by calculating min scalar multiplication costs.",
    timeComplexity: {
      best: "O(n³)",
      average: "O(n³)",
      worst: "O(n³)",
    },
    spaceComplexity: "O(n²)",
    applications: [
      "Query optimization in databases",
      "Compiler optimization workflows",
    ],
    advantages: ["Optimal parenthization layout search"],
    disadvantages: ["Requires dimensional array input format"],
    realWorldUses: ["Relational query optimizer planners"],
    defaultInput: "10 20 30 40 30",
    inputType: "dp",
    pseudocode:
      "mcm(p):\n  dp[i][j] = min_{k} (dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j])",
    code: {
      javascript:
        "function mcm(p) {\n  const n = p.length - 1;\n  const dp = Array.from({length: n+1}, () => new Array(n+1).fill(0));\n  for (let len = 2; len <= n; len++) {\n    for (let i = 1; i <= n - len + 1; i++) {\n      let j = i + len - 1;\n      dp[i][j] = Infinity;\n      for (let k = i; k < j; k++) {\n        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]);\n      }\n    }\n  }\n  return dp[1][n];\n}",
    },
  },
  "dp-wildcard-matching": {
    id: "dp-wildcard-matching",
    name: "Wildcard Matching",
    category: "dynamic-programming",
    difficulty: "Hard",
    description:
      "Determines if a string matches a wildcard pattern containing '?' (any single character) or '*' (any sequence).",
    timeComplexity: {
      best: "O(m·n)",
      average: "O(m·n)",
      worst: "O(m·n)",
    },
    spaceComplexity: "O(m·n)",
    applications: ["Filename shell matching", "Regex engines"],
    advantages: ["High flexibility match pattern validation"],
    disadvantages: ["Linear space requirement per string length"],
    realWorldUses: ["Glob utility search tools (e.g. Glob/bash)"],
    defaultInput: "baaabab\nba*a?",
    inputType: "dp",
    pseudocode:
      "match(s, p):\n  if p[j-1]=='*': dp[i][j] = dp[i-1][j] || dp[i][j-1]\n  else if matchChar: dp[i][j] = dp[i-1][j-1]",
    code: {
      javascript:
        "function wildcardMatch(s, p) {\n  const m = s.length, n = p.length;\n  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(false));\n  dp[0][0] = true;\n  for (let j = 1; j <= n; j++) {\n    if (p[j-1] === '*') dp[0][j] = dp[0][j-1];\n  }\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];\n      else if (p[j-1] === '?' || s[i-1] === p[j-1]) dp[i][j] = dp[i-1][j-1];\n    }\n  }\n  return dp[m][n];\n}",
    },
  },
  "dp-egg-dropping": {
    id: "dp-egg-dropping",
    name: "Egg Dropping",
    category: "dynamic-programming",
    difficulty: "Hard",
    description:
      "Finds the minimum number of attempts needed to find the critical threshold floor using a given number of eggs.",
    timeComplexity: {
      best: "O(e·f²)",
      average: "O(e·f²)",
      worst: "O(e·f²)",
    },
    spaceComplexity: "O(e·f)",
    applications: [
      "Material stress testing",
      "Threshold analysis optimization",
    ],
    advantages: ["Optimal trial searching strategies"],
    disadvantages: ["O(ef²) compute complexity scales poorly"],
    realWorldUses: ["Stress validation simulation profiles"],
    defaultInput: "2\n6",
    inputType: "dp",
    pseudocode:
      "trials(e, f):\n  dp[e][f] = 1 + min_{k} max(dp[e-1][k-1], dp[e][f-k])",
    code: {
      javascript:
        "function eggDrop(eggs, floors) {\n  const dp = Array.from({length: eggs+1}, () => new Array(floors+1).fill(0));\n  for (let j = 1; j <= floors; j++) dp[1][j] = j;\n  for (let i = 1; i <= eggs; i++) dp[i][1] = 1;\n  for (let i = 2; i <= eggs; i++) {\n    for (let j = 2; j <= floors; j++) {\n      let minTrials = Infinity;\n      for (let k = 1; k <= j; k++) {\n        minTrials = Math.min(minTrials, 1 + Math.max(dp[i-1][k-1], dp[i][j-k]));\n      }\n      dp[i][j] = minTrials;\n    }\n  }\n  return dp[eggs][floors];\n}",
    },
  },
  "dp-palindrome-partitioning": {
    id: "dp-palindrome-partitioning",
    name: "Palindrome Partitioning",
    category: "dynamic-programming",
    difficulty: "Hard",
    description:
      "Finds the minimum cuts needed to partition a string such that every segment is a palindrome.",
    timeComplexity: {
      best: "O(n³)",
      average: "O(n³)",
      worst: "O(n³)",
    },
    spaceComplexity: "O(n²)",
    applications: [
      "String segmentation parsing",
      "Bioinformatics coding structures",
    ],
    advantages: ["Classic interval partition optimization solver"],
    disadvantages: ["O(n³) computation limit"],
    realWorldUses: ["Text alignment analysis pipelines"],
    defaultInput: "aab",
    inputType: "dp",
    pseudocode:
      "cuts(s):\n  if isPal[i][j]: dp[i][j] = 0\n  else: dp[i][j] = min_k (dp[i][k] + dp[k+1][j] + 1)",
    code: {
      javascript:
        "function minCuts(s) {\n  const n = s.length;\n  const dp = Array.from({length: n+1}, () => new Array(n+1).fill(0));\n  const isPal = Array.from({length: n+1}, () => new Array(n+1).fill(true));\n  for (let len = 2; len <= n; len++) {\n    for (let i = 1; i <= n - len + 1; i++) {\n      let j = i + len - 1;\n      isPal[i][j] = (s[i-1] === s[j-1]) && isPal[i+1][j-1];\n    }\n  }\n  for (let len = 1; len <= n; len++) {\n    for (let i = 1; i <= n - len + 1; i++) {\n      let j = i + len - 1;\n      if (isPal[i][j]) dp[i][j] = 0;\n      else {\n        dp[i][j] = Infinity;\n        for (let k = i; k < j; k++) {\n          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k+1][j] + 1);\n        }\n      }\n    }\n  }\n  return dp[1][n];\n}",
    },
  },
  "counting-sort": {
    id: "counting-sort",
    name: "Counting Sort",
    category: "sorting",
    difficulty: "Easy",
    description:
      "A non-comparison integer sorting algorithm that counts element frequencies in a range, then uses prefix sums to place each element at its correct sorted position.",
    timeComplexity: {
      best: "O(n+k)",
      average: "O(n+k)",
      worst: "O(n+k)",
    },
    spaceComplexity: "O(k)",
    applications: [
      "Integer array sorting",
      "Radix sort sub-routine",
      "Histogram generation",
    ],
    advantages: ["Faster than comparison sorts when k (range) is small"],
    disadvantages: ["Only works for integer data within a bounded range"],
    realWorldUses: [
      "Histogram bins in image processing pipelines",
      "Character frequency counters",
    ],
    defaultInput: "4 2 2 8 3 3 1",
    inputType: "array",
    pseudocode:
      "countingSort(arr, k):\n  count = array of size k+1, fill 0\n  for x in arr: count[x]++\n  for i=1 to k: count[i] += count[i-1]\n  output: place elements from right to left",
    code: {
      javascript:
        "function countingSort(arr) {\n  const k = Math.max(...arr);\n  const count = new Array(k + 1).fill(0);\n  arr.forEach(x => count[x]++);\n  for (let i = 1; i <= k; i++) count[i] += count[i-1];\n  const out = new Array(arr.length);\n  for (let i = arr.length - 1; i >= 0; i--) out[--count[arr[i]]] = arr[i];\n  return out;\n}",
      python:
        "def counting_sort(arr):\n    k = max(arr)\n    count = [0] * (k + 1)\n    for x in arr: count[x] += 1\n    for i in range(1, k+1): count[i] += count[i-1]\n    out = [0] * len(arr)\n    for x in reversed(arr):\n        count[x] -= 1\n        out[count[x]] = x\n    return out",
      java: "public int[] countingSort(int[] arr) {\n    int k = Arrays.stream(arr).max().getAsInt();\n    int[] count = new int[k+1];\n    for (int x : arr) count[x]++;\n    for (int i=1;i<=k;i++) count[i]+=count[i-1];\n    int[] out = new int[arr.length];\n    for (int i=arr.length-1;i>=0;i--) out[--count[arr[i]]]=arr[i];\n    return out;\n}",
      cpp: "vector<int> countingSort(vector<int>& arr) {\n    int k=*max_element(arr.begin(),arr.end());\n    vector<int> count(k+1,0);\n    for (int x:arr) count[x]++;\n    for (int i=1;i<=k;i++) count[i]+=count[i-1];\n    vector<int> out(arr.size());\n    for (int i=arr.size()-1;i>=0;i--) out[--count[arr[i]]]=arr[i];\n    return out;\n}",
    },
  },
  "radix-sort": {
    id: "radix-sort",
    name: "Radix Sort",
    category: "sorting",
    difficulty: "Medium",
    description:
      "Sorts integers digit by digit from the least significant to the most significant digit using a stable sub-sort (counting sort) at each digit position.",
    timeComplexity: {
      best: "O(nk)",
      average: "O(nk)",
      worst: "O(nk)",
    },
    spaceComplexity: "O(n+k)",
    applications: [
      "Large integer sorting",
      "String lexicographic sorting",
      "IP address sorting",
    ],
    advantages: ["Beats comparison sorts when k (digits) is fixed"],
    disadvantages: [
      "Requires additional O(n) space; only works on integer-like keys",
    ],
    realWorldUses: [
      "Network packet sorting by priority",
      "Database index sorting on integer columns",
    ],
    defaultInput: "170 45 75 90 802 24 2 66",
    inputType: "array",
    pseudocode:
      "radixSort(arr):\n  for exp = 1, 10, 100, ... while max/exp > 0:\n    stable sort by digit at position exp",
    code: {
      javascript:
        "function radixSort(arr) {\n  const max = Math.max(...arr);\n  for (let exp = 1; Math.floor(max/exp) > 0; exp *= 10) {\n    const count = new Array(10).fill(0);\n    arr.forEach(x => count[Math.floor(x/exp)%10]++);\n    for (let i=1;i<10;i++) count[i]+=count[i-1];\n    const out = new Array(arr.length);\n    for (let i=arr.length-1;i>=0;i--) {\n      const d=Math.floor(arr[i]/exp)%10;\n      out[--count[d]]=arr[i];\n    }\n    arr.splice(0,arr.length,...out);\n  }\n  return arr;\n}",
      python:
        "def radix_sort(arr):\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        n=len(arr); out=[0]*n; count=[0]*10\n        for x in arr: count[(x//exp)%10]+=1\n        for i in range(1,10): count[i]+=count[i-1]\n        for i in range(n-1,-1,-1):\n            d=(arr[i]//exp)%10; count[d]-=1; out[count[d]]=arr[i]\n        arr[:]=out\n        exp*=10\n    return arr",
      java: "public void radixSort(int[] arr) {\n    int max=Arrays.stream(arr).max().getAsInt();\n    for(int exp=1;max/exp>0;exp*=10) {\n        int n=arr.length;\n        int[] out=new int[n],count=new int[10];\n        for(int x:arr) count[(x/exp)%10]++;\n        for(int i=1;i<10;i++) count[i]+=count[i-1];\n        for(int i=n-1;i>=0;i--) out[--count[(arr[i]/exp)%10]]=arr[i];\n        System.arraycopy(out,0,arr,0,n);\n    }\n}",
      cpp: "void radixSort(vector<int>& arr) {\n    int mx=*max_element(arr.begin(),arr.end());\n    for(int exp=1;mx/exp>0;exp*=10) {\n        int n=arr.size();\n        vector<int> out(n),count(10,0);\n        for(int x:arr) count[(x/exp)%10]++;\n        for(int i=1;i<10;i++) count[i]+=count[i-1];\n        for(int i=n-1;i>=0;i--) out[--count[(arr[i]/exp)%10]]=arr[i];\n        arr=out;\n    }\n}",
    },
  },
  "count-set-bits": {
    id: "count-set-bits",
    name: "Count Set Bits",
    category: "bit-manipulation",
    difficulty: "Easy",
    description:
      "Counts the number of bits set to 1 using Brian Kernighan's algorithm: repeatedly clear the lowest set bit with n &= (n-1) until n becomes 0.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Population count / Hamming weight",
      "Bit parity checks",
      "Subset generation",
    ],
    advantages: ["Only iterates over set bits, not all bits"],
    disadvantages: ["Hardware POPCNT instruction is faster for most uses"],
    realWorldUses: [
      "Error detection parity checks",
      "Bloom filter hash position counts",
    ],
    defaultInput: "13",
    inputType: "bit-value",
    pseudocode:
      "countSetBits(n):\n  count = 0\n  while n != 0:\n    n = n & (n - 1)  // clear lowest set bit\n    count++\n  return count",
    code: {
      javascript:
        "function countSetBits(n) {\n  let count = 0;\n  while (n !== 0) {\n    n &= (n - 1);\n    count++;\n  }\n  return count;\n}",
      python:
        "def count_set_bits(n):\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count",
      java: "public int countBits(int n) {\n    int count = 0;\n    while (n != 0) { n &= (n-1); count++; }\n    return count;\n}",
      cpp: "int countSetBits(int n) {\n    int count = 0;\n    while (n) { n &= (n-1); count++; }\n    return count;\n}",
    },
  },
  "xor-operations": {
    id: "xor-operations",
    name: "XOR Operations",
    category: "bit-manipulation",
    difficulty: "Easy",
    description:
      "Demonstrates XOR bitwise operations step by step on an array: x^x=0, x^0=x. Accumulates XOR of all elements to find the unique non-paired number.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Single number detection",
      "Swap without temp variable",
      "Checksum generation",
    ],
    advantages: ["Extremely fast single-instruction CPU operation"],
    disadvantages: ["Limited to specific use cases based on XOR properties"],
    realWorldUses: [
      "Network data checksums",
      "Cryptographic XOR cipher operations",
    ],
    defaultInput: "5 3 8 5 3",
    inputType: "array",
    pseudocode:
      "xorAll(arr):\n  result = 0\n  for x in arr:\n    result = result XOR x\n  return result",
    code: {
      javascript:
        "function xorAll(arr) {\n  return arr.reduce((acc, x) => acc ^ x, 0);\n}",
      python:
        "from functools import reduce\ndef xor_all(arr):\n    return reduce(lambda a, x: a ^ x, arr, 0)",
      java: "public int xorAll(int[] arr) {\n    int res = 0;\n    for (int x : arr) res ^= x;\n    return res;\n}",
      cpp: "int xorAll(vector<int>& arr) {\n    int res = 0;\n    for (int x : arr) res ^= x;\n    return res;\n}",
    },
  },
  "fast-exponentiation": {
    id: "fast-exponentiation",
    name: "Fast Exponentiation",
    category: "mathematical",
    difficulty: "Medium",
    description:
      "Computes base^exp in O(log n) time using binary exponentiation: if exp is odd multiply result by base, then square base and halve exp.",
    timeComplexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Modular exponentiation in cryptography",
      "Matrix exponentiation",
      "Fibonacci in O(log n)",
    ],
    advantages: ["O(log n) vs naive O(n) multiplication loops"],
    disadvantages: ["More complex implementation than naive power loop"],
    realWorldUses: [
      "RSA cryptography key operations",
      "Diffie-Hellman key exchange protocols",
    ],
    defaultInput: "2 10",
    inputType: "math-gcd",
    pseudocode:
      "fastPow(base, exp):\n  result = 1\n  while exp > 0:\n    if exp is odd: result *= base\n    base = base * base\n    exp = exp / 2\n  return result",
    code: {
      javascript:
        "function fastPow(base, exp) {\n  let result = 1;\n  while (exp > 0) {\n    if (exp % 2 === 1) result *= base;\n    base *= base;\n    exp = Math.floor(exp / 2);\n  }\n  return result;\n}",
      python:
        "def fast_pow(base, exp):\n    result = 1\n    while exp > 0:\n        if exp % 2 == 1: result *= base\n        base *= base\n        exp //= 2\n    return result",
      java: "public long fastPow(long base, int exp) {\n    long result = 1;\n    while (exp > 0) {\n        if ((exp & 1) == 1) result *= base;\n        base *= base;\n        exp >>= 1;\n    }\n    return result;\n}",
      cpp: "long long fastPow(long long base, int exp) {\n    long long result = 1;\n    while (exp > 0) {\n        if (exp & 1) result *= base;\n        base *= base;\n        exp >>= 1;\n    }\n    return result;\n}",
    },
  },
  "pascal-triangle": {
    id: "pascal-triangle",
    name: "Pascal's Triangle",
    category: "mathematical",
    difficulty: "Easy",
    description:
      "Generates rows of Pascal's Triangle where each element is the sum of the two elements directly above it. Gives binomial coefficients C(n,0)..C(n,n).",
    timeComplexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(n²)",
    applications: [
      "Binomial coefficients",
      "Combinatorics calculations",
      "Probability computations",
    ],
    advantages: ["Simple iterative generation of all binomial coefficients"],
    disadvantages: ["O(n²) space required to store the full triangle"],
    realWorldUses: [
      "Probability distributions in statistics",
      "Polynomial coefficient expansion",
    ],
    defaultInput: "6",
    inputType: "math-sieve",
    pseudocode:
      "pascal(n):\n  for each row i:\n    row[0] = row[i] = 1\n    row[j] = prev[j-1] + prev[j]",
    code: {
      javascript:
        "function pascal(n) {\n  const tri = [[1]];\n  for (let i = 1; i < n; i++) {\n    const row = [1];\n    for (let j = 1; j < i; j++) row.push(tri[i-1][j-1] + tri[i-1][j]);\n    row.push(1);\n    tri.push(row);\n  }\n  return tri;\n}",
      python:
        "def pascal(n):\n    tri = [[1]]\n    for i in range(1, n):\n        row = [1]\n        for j in range(1, i): row.append(tri[i-1][j-1] + tri[i-1][j])\n        row.append(1)\n        tri.append(row)\n    return tri",
      java: "public List<List<Integer>> generate(int n) {\n    List<List<Integer>> tri = new ArrayList<>();\n    for (int i=0;i<n;i++) {\n        List<Integer> row = new ArrayList<>(Arrays.asList(1));\n        for (int j=1;j<i;j++) row.add(tri.get(i-1).get(j-1)+tri.get(i-1).get(j));\n        if (i>0) row.add(1);\n        tri.add(row);\n    }\n    return tri;\n}",
      cpp: "vector<vector<int>> generate(int n) {\n    vector<vector<int>> tri={{1}};\n    for(int i=1;i<n;i++) {\n        vector<int> row={1};\n        for(int j=1;j<i;j++) row.push_back(tri[i-1][j-1]+tri[i-1][j]);\n        row.push_back(1);\n        tri.push_back(row);\n    }\n    return tri;\n}",
    },
  },
  "trapping-rain-water": {
    id: "trapping-rain-water",
    name: "Trapping Rain Water",
    category: "two-pointer",
    difficulty: "Hard",
    description:
      "Calculates how much rain water can be trapped between elevation bars using two pointers. Track leftMax and rightMax, move the shorter-side pointer and accumulate water.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: [
      "Terrain water simulation",
      "Volume calculation in histograms",
    ],
    advantages: ["O(n) with O(1) space using two pointer technique"],
    disadvantages: ["Logic can be unintuitive compared to brute force"],
    realWorldUses: [
      "Terrain analysis in GIS systems",
      "Container volume optimization algorithms",
    ],
    defaultInput: "0 1 0 2 1 0 1 3 2 1 2 1",
    inputType: "array",
    pseudocode:
      "trap(h):\n  l=0,r=n-1,lm=0,rm=0,water=0\n  while l<r:\n    if h[l]<=h[r]: water+=max(0,lm-h[l]); lm=max(lm,h[l]); l++\n    else: water+=max(0,rm-h[r]); rm=max(rm,h[r]); r--",
    code: {
      javascript:
        "function trap(height) {\n  let l=0, r=height.length-1, lm=0, rm=0, w=0;\n  while (l < r) {\n    if (height[l] <= height[r]) {\n      lm = Math.max(lm, height[l]);\n      w += lm - height[l++];\n    } else {\n      rm = Math.max(rm, height[r]);\n      w += rm - height[r--];\n    }\n  }\n  return w;\n}",
      python:
        "def trap(h):\n    l,r,lm,rm,w=0,len(h)-1,0,0,0\n    while l<r:\n        if h[l]<=h[r]:\n            lm=max(lm,h[l]); w+=lm-h[l]; l+=1\n        else:\n            rm=max(rm,h[r]); w+=rm-h[r]; r-=1\n    return w",
      java: "public int trap(int[] h) {\n    int l=0,r=h.length-1,lm=0,rm=0,w=0;\n    while(l<r) {\n        if(h[l]<=h[r]){lm=Math.max(lm,h[l]);w+=lm-h[l++];}\n        else{rm=Math.max(rm,h[r]);w+=rm-h[r--];}\n    }\n    return w;\n}",
      cpp: "int trap(vector<int>& h){\n    int l=0,r=h.size()-1,lm=0,rm=0,w=0;\n    while(l<r){\n        if(h[l]<=h[r]){lm=max(lm,h[l]);w+=lm-h[l++];}\n        else{rm=max(rm,h[r]);w+=rm-h[r--];}\n    }\n    return w;\n}",
    },
  },
  "floyd-warshall": {
    id: "floyd-warshall",
    name: "Floyd-Warshall Algorithm",
    category: "advanced-algo",
    difficulty: "Hard",
    description:
      "Finds shortest paths between all pairs of vertices in a weighted graph using DP. Updates distances by considering each vertex as an intermediate node.",
    timeComplexity: {
      best: "O(V³)",
      average: "O(V³)",
      worst: "O(V³)",
    },
    spaceComplexity: "O(V²)",
    applications: [
      "All-pairs shortest paths",
      "Network routing tables",
      "Transitive closure",
    ],
    advantages: [
      "Simple to implement; handles negative weights (no negative cycles)",
    ],
    disadvantages: ["O(V³) time is expensive for large graphs"],
    realWorldUses: [
      "Network routing table computation",
      "Road map distance precomputation",
    ],
    defaultInput: "0 3 INF 7\n8 0 2 INF\n5 INF 0 1\n2 INF INF 0",
    inputType: "graph",
    pseudocode:
      "floydWarshall(dist):\n  for k in 0..V-1:\n    for i in 0..V-1:\n      for j in 0..V-1:\n        dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])",
    code: {
      javascript:
        "function floydWarshall(dist) {\n  const V = dist.length;\n  for (let k=0;k<V;k++)\n    for (let i=0;i<V;i++)\n      for (let j=0;j<V;j++)\n        if (dist[i][k]+dist[k][j] < dist[i][j])\n          dist[i][j] = dist[i][k]+dist[k][j];\n  return dist;\n}",
      python:
        "def floyd_warshall(dist):\n    V=len(dist)\n    for k in range(V):\n        for i in range(V):\n            for j in range(V):\n                if dist[i][k]+dist[k][j] < dist[i][j]:\n                    dist[i][j]=dist[i][k]+dist[k][j]\n    return dist",
      java: "public void floydWarshall(int[][] d) {\n    int V=d.length;\n    for(int k=0;k<V;k++)\n        for(int i=0;i<V;i++)\n            for(int j=0;j<V;j++)\n                if(d[i][k]!=1000000 && d[k][j]!=1000000 && d[i][k]+d[k][j]<d[i][j])\n                    d[i][j]=d[i][k]+d[k][j];\n}",
      cpp: "void floydWarshall(vector<vector<int>>& d) {\n    int V=d.size();\n    for(int k=0;k<V;k++)\n        for(int i=0;i<V;i++)\n            for(int j=0;j<V;j++)\n                d[i][j]=min(d[i][j],d[i][k]+d[k][j]);\n}",
    },
  },
  "two-sum-two-pointer": {
    id: "two-sum-two-pointer",
    name: "Two Sum (Two Pointer)",
    category: "two-pointer",
    difficulty: "Easy",
    description:
      "Finds two numbers in a sorted array that sum to a target value using two pointers from both ends. Move left pointer right if sum too small, right pointer left if too large.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(1)",
    applications: ["Pair sum queries on sorted arrays", "3Sum sub-problem"],
    advantages: ["O(n) time with O(1) space on sorted arrays"],
    disadvantages: ["Requires sorted input"],
    realWorldUses: [
      "Financial transaction pair matching",
      "Scientific data pair analysis",
    ],
    defaultInput: "1 2 3 4 6 8 9",
    inputType: "array",
    pseudocode:
      "twoSum(arr, target):\n  l=0, r=len-1\n  while l<r:\n    sum=arr[l]+arr[r]\n    if sum==target: return [l,r]\n    elif sum<target: l++\n    else: r--",
    code: {
      javascript:
        "function twoSum(arr, target) {\n  let l=0, r=arr.length-1;\n  while (l<r) {\n    const sum=arr[l]+arr[r];\n    if (sum===target) return [l,r];\n    else if (sum<target) l++;\n    else r--;\n  }\n  return [-1,-1];\n}",
      python:
        "def two_sum(arr, target):\n    l,r=0,len(arr)-1\n    while l<r:\n        s=arr[l]+arr[r]\n        if s==target: return [l,r]\n        elif s<target: l+=1\n        else: r-=1\n    return [-1,-1]",
      java: "public int[] twoSum(int[] a, int t) {\n    int l=0,r=a.length-1;\n    while(l<r){\n        int s=a[l]+a[r];\n        if(s==t) return new int[]{l,r};\n        else if(s<t) l++; else r--;\n    }\n    return new int[]{-1,-1};\n}",
      cpp: "vector<int> twoSum(vector<int>& a,int t){\n    int l=0,r=a.size()-1;\n    while(l<r){\n        int s=a[l]+a[r];\n        if(s==t) return{l,r};\n        else if(s<t) l++; else r--;\n    }\n    return{-1,-1};\n}",
    },
  },
  "bst-insert": {
    id: "bst-insert",
    name: "BST Insert",
    category: "trees",
    difficulty: "Easy",
    description:
      "Inserts a value into a Binary Search Tree by traversing left (smaller) or right (larger) from the root until an empty spot is found. Maintains BST ordering property.",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Ordered dictionary storage",
      "Database indexing",
      "Priority scheduling",
    ],
    advantages: ["Dynamic structure", "O(log n) average insert"],
    disadvantages: ["Can degrade to O(n) on sorted input without balancing"],
    realWorldUses: [
      "Database B-tree storage engines",
      "File system directory trees",
    ],
    defaultInput: "50 30 70 20 40 60 80",
    inputType: "tree",
    pseudocode:
      "bstInsert(root, val):\n  if root is null: return new Node(val)\n  if val < root.val: root.left = insert(root.left, val)\n  else: root.right = insert(root.right, val)\n  return root",
    code: {
      javascript:
        "function insert(root, val) {\n  if (!root) return { val, left: null, right: null };\n  if (val < root.val) root.left = insert(root.left, val);\n  else root.right = insert(root.right, val);\n  return root;\n}",
      python:
        "def insert(root, val):\n    if not root: return TreeNode(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    return root",
      java: "public TreeNode insert(TreeNode root, int val) {\n    if (root == null) return new TreeNode(val);\n    if (val < root.val) root.left = insert(root.left, val);\n    else root.right = insert(root.right, val);\n    return root;\n}",
      cpp: "TreeNode* insert(TreeNode* root, int val) {\n    if (!root) return new TreeNode(val);\n    if (val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    return root;\n}",
    },
  },
  "bst-delete": {
    id: "bst-delete",
    name: "BST Delete",
    category: "trees",
    difficulty: "Medium",
    description:
      "Deletes a node from a BST handling 3 cases: leaf node (simply remove), one child (replace with child), two children (replace with in-order successor then delete successor).",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(h)",
    applications: [
      "Priority queue removal",
      "Symbol table deletion",
      "Database record purge",
    ],
    advantages: ["Maintains BST property after deletion"],
    disadvantages: ["Two-child deletion requires finding in-order successor"],
    realWorldUses: [
      "Database row deletion in index trees",
      "Cache eviction in BST-ordered caches",
    ],
    defaultInput: "50 30 70 20 40 60 80",
    inputType: "tree",
    pseudocode:
      "bstDelete(root, key):\n  if key < root.val: left subtree\n  elif key > root.val: right subtree\n  else:\n    case 1: leaf → remove\n    case 2: one child → replace\n    case 3: two children → find successor",
    code: {
      javascript:
        "function deleteNode(root, key) {\n  if (!root) return null;\n  if (key < root.val) root.left = deleteNode(root.left, key);\n  else if (key > root.val) root.right = deleteNode(root.right, key);\n  else {\n    if (!root.left) return root.right;\n    if (!root.right) return root.left;\n    let succ = root.right;\n    while (succ.left) succ = succ.left;\n    root.val = succ.val;\n    root.right = deleteNode(root.right, succ.val);\n  }\n  return root;\n}",
      python:
        "def delete(root, key):\n    if not root: return None\n    if key < root.val: root.left = delete(root.left, key)\n    elif key > root.val: root.right = delete(root.right, key)\n    else:\n        if not root.left: return root.right\n        if not root.right: return root.left\n        succ = root.right\n        while succ.left: succ = succ.left\n        root.val = succ.val\n        root.right = delete(root.right, succ.val)\n    return root",
      java: "public TreeNode deleteNode(TreeNode root, int key) {\n    if (root == null) return null;\n    if (key < root.val) root.left = deleteNode(root.left, key);\n    else if (key > root.val) root.right = deleteNode(root.right, key);\n    else {\n        if (root.left == null) return root.right;\n        if (root.right == null) return root.left;\n        TreeNode succ = root.right;\n        while (succ.left != null) succ = succ.left;\n        root.val = succ.val;\n        root.right = deleteNode(root.right, succ.val);\n    }\n    return root;\n}",
      cpp: "TreeNode* deleteNode(TreeNode* root, int key) {\n    if (!root) return nullptr;\n    if (key < root->val) root->left = deleteNode(root->left, key);\n    else if (key > root->val) root->right = deleteNode(root->right, key);\n    else {\n        if (!root->left) return root->right;\n        if (!root->right) return root->left;\n        auto succ = root->right;\n        while (succ->left) succ = succ->left;\n        root->val = succ->val;\n        root->right = deleteNode(root->right, succ->val);\n    }\n    return root;\n}",
    },
  },
  "avl-insert": {
    id: "avl-insert",
    name: "AVL Tree Insert",
    category: "trees",
    difficulty: "Hard",
    description:
      "Inserts into an AVL tree and rebalances using rotations. Computes balance factors (leftHeight - rightHeight). If balance > 1 or < -1, performs LL, RR, LR, or RL rotations to restore height-balanced property.",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(log n)",
    applications: [
      "Databases requiring guaranteed O(log n)",
      "Memory allocators",
      "Sets and Maps",
    ],
    advantages: ["Guaranteed O(log n) for all operations"],
    disadvantages: [
      "More complex rotations than simple BST",
      "Higher constant factor overhead",
    ],
    realWorldUses: [
      "Linux kernel's internal memory mapping",
      "Java TreeMap uses Red-Black (similar)",
    ],
    defaultInput: "30 20 40 10 25 35 50",
    inputType: "tree",
    pseudocode:
      "avlInsert(root, val):\n  BST insert, then update height\n  balance = getBalance(root)\n  if balance > 1:\n    if val < left.val: rightRotate  // LL\n    else: leftRotate(left), rightRotate  // LR\n  if balance < -1:\n    if val > right.val: leftRotate  // RR\n    else: rightRotate(right), leftRotate  // RL",
    code: {
      javascript:
        "function insert(root, val) {\n  if (!root) return { val, left: null, right: null, h: 1, bf: 0 };\n  if (val < root.val) root.left = insert(root.left, val);\n  else root.right = insert(root.right, val);\n  root.h = 1 + Math.max(height(root.left), height(root.right));\n  root.bf = height(root.left) - height(root.right);\n  return balance(root);\n}",
      python:
        "def insert(root, val):\n    if not root: return Node(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    root.h = 1 + max(height(root.left), height(root.right))\n    root.bf = height(root.left) - height(root.right)\n    return balance(root)",
      java: "public AVLNode insert(AVLNode root, int val) {\n    if (root == null) return new AVLNode(val);\n    if (val < root.val) root.left = insert(root.left, val);\n    else root.right = insert(root.right, val);\n    updateHeight(root);\n    return balance(root);\n}",
      cpp: "AVLNode* insert(AVLNode* root, int val) {\n    if (!root) return new AVLNode(val);\n    if (val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    updateHeight(root);\n    return balance(root);\n}",
    },
  },
  "avl-delete": {
    id: "avl-delete",
    name: "AVL Tree Delete",
    category: "trees",
    difficulty: "Hard",
    description:
      "Deletes from an AVL tree using BST deletion, then walks back up updating heights and rebalancing with rotations at each ancestor to maintain the height-balanced property.",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(log n)",
    applications: ["Real-time systems requiring consistent performance"],
    advantages: ["Always balanced after deletion"],
    disadvantages: [
      "Multiple rotations may be needed up to O(log n) rotations",
    ],
    realWorldUses: ["In-memory ordered indexes", "Compiler symbol tables"],
    defaultInput: "30 20 40 10 25 35 50",
    inputType: "tree",
    pseudocode:
      "avlDelete(root, key):\n  BST delete the node\n  walk back up updating heights\n  at each node: if |bf| > 1, rotate to rebalance",
    code: {
      javascript:
        "function deleteAVL(root, key) {\n  root = bstDelete(root, key);\n  if (!root) return null;\n  root.h = 1 + Math.max(height(root.left), height(root.right));\n  root.bf = height(root.left) - height(root.right);\n  return balance(root);\n}",
      python:
        "def delete_avl(root, key):\n    root = bst_delete(root, key)\n    if not root: return None\n    root.h = 1 + max(height(root.left), height(root.right))\n    root.bf = height(root.left) - height(root.right)\n    return balance(root)",
      java: "public AVLNode delete(AVLNode root, int key) {\n    root = bstDelete(root, key);\n    if (root == null) return null;\n    updateHeight(root);\n    return balance(root);\n}",
      cpp: "AVLNode* deleteAVL(AVLNode* root, int key) {\n    root = bstDelete(root, key);\n    if (!root) return nullptr;\n    updateHeight(root);\n    return balance(root);\n}",
    },
  },
  "bt-insert": {
    id: "bt-insert",
    name: "Binary Tree Insert",
    category: "trees",
    difficulty: "Easy",
    description:
      "Inserts a new node into a Binary Tree using level-order (BFS) insertion. Finds the first node with a missing left or right child and places the new node there.",
    timeComplexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: [
      "Expression trees",
      "Heap-like complete trees",
      "Parse trees",
    ],
    advantages: ["Simple; always keeps tree complete"],
    disadvantages: ["No ordering guarantee unlike BST"],
    realWorldUses: [
      "Expression tree builders in compilers",
      "Tournament bracket generation",
    ],
    defaultInput: "1 2 3 4 5 6",
    inputType: "tree",
    pseudocode:
      "btInsert(root, val):\n  use BFS queue\n  for each node in level order:\n    if node.left is null: node.left = new Node(val); return\n    if node.right is null: node.right = new Node(val); return",
    code: {
      javascript:
        "function btInsert(root, val) {\n  const node = { val, left: null, right: null };\n  if (!root) return node;\n  const q = [root];\n  while (q.length) {\n    const curr = q.shift();\n    if (!curr.left) { curr.left = node; return root; }\n    q.push(curr.left);\n    if (!curr.right) { curr.right = node; return root; }\n    q.push(curr.right);\n  }\n  return root;\n}",
      python:
        "from collections import deque\ndef bt_insert(root, val):\n    node = TreeNode(val)\n    if not root: return node\n    q = deque([root])\n    while q:\n        curr = q.popleft()\n        if not curr.left: curr.left = node; return root\n        q.append(curr.left)\n        if not curr.right: curr.right = node; return root\n        q.append(curr.right)\n    return root",
      java: "public TreeNode btInsert(TreeNode root, int val) {\n    TreeNode node = new TreeNode(val);\n    if (root == null) return node;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        TreeNode curr = q.poll();\n        if (curr.left == null) { curr.left = node; return root; }\n        q.offer(curr.left);\n        if (curr.right == null) { curr.right = node; return root; }\n        q.offer(curr.right);\n    }\n    return root;\n}",
      cpp: "TreeNode* btInsert(TreeNode* root, int val) {\n    TreeNode* node = new TreeNode(val);\n    if (!root) return node;\n    queue<TreeNode*> q;\n    q.push(root);\n    while (!q.empty()) {\n        auto curr = q.front(); q.pop();\n        if (!curr->left) { curr->left = node; return root; }\n        q.push(curr->left);\n        if (!curr->right) { curr->right = node; return root; }\n        q.push(curr->right);\n    }\n    return root;\n}",
    },
  },
  "bt-delete": {
    id: "bt-delete",
    name: "Binary Tree Delete",
    category: "trees",
    difficulty: "Medium",
    description:
      "Deletes a node from a Binary Tree by finding the deepest rightmost node, copying its value to the target node, then deleting the deepest rightmost node to maintain the complete tree structure.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
    },
    spaceComplexity: "O(n)",
    applications: ["Complete binary tree maintenance"],
    advantages: ["Preserves complete binary tree structure"],
    disadvantages: ["O(n) time — must scan entire tree"],
    realWorldUses: [
      "Heap array deletions (copy deepest, then remove)",
      "Tournament bracket removal",
    ],
    defaultInput: "1 2 3 4 5 6 7",
    inputType: "tree",
    pseudocode:
      "btDelete(root, key):\n  find deepest rightmost node using BFS\n  find node with key using BFS\n  replace key node's value with deepest's value\n  delete deepest rightmost node",
    code: {
      javascript:
        "function btDelete(root, key) {\n  if (!root) return null;\n  const q = [root];\n  let target = null, last = null, lastParent = null;\n  while (q.length) {\n    last = q.shift();\n    if (last.val === key) target = last;\n    if (last.left) q.push(last.left);\n    if (last.right) q.push(last.right);\n  }\n  if (target) target.val = last.val;\n  // delete last node\n  return root;\n}",
      python:
        "def bt_delete(root, key):\n    if not root: return None\n    from collections import deque\n    q = deque([root])\n    key_node, last = None, None\n    while q:\n        last = q.popleft()\n        if last.val == key: key_node = last\n        if last.left: q.append(last.left)\n        if last.right: q.append(last.right)\n    if key_node: key_node.val = last.val\n    return root",
      java: "public TreeNode btDelete(TreeNode root, int key) {\n    if (root == null) return null;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    TreeNode keyNode = null, last = null;\n    while (!q.isEmpty()) {\n        last = q.poll();\n        if (last.val == key) keyNode = last;\n        if (last.left != null) q.offer(last.left);\n        if (last.right != null) q.offer(last.right);\n    }\n    if (keyNode != null) keyNode.val = last.val;\n    return root;\n}",
      cpp: "TreeNode* btDelete(TreeNode* root, int key) {\n    if (!root) return nullptr;\n    queue<TreeNode*> q; q.push(root);\n    TreeNode *keyNode = nullptr, *last = nullptr;\n    while (!q.empty()) {\n        last = q.front(); q.pop();\n        if (last->val == key) keyNode = last;\n        if (last->left) q.push(last->left);\n        if (last->right) q.push(last->right);\n    }\n    if (keyNode) keyNode->val = last->val;\n    return root;\n}",
    },
  },
  "rbt-insert": {
    id: "rbt-insert",
    name: "Red-Black Tree Insert",
    category: "trees",
    difficulty: "Hard",
    description:
      "Inserts into a Red-Black Tree. New nodes are colored Red, then color violations are fixed: if uncle is Red → recolor; if uncle is Black → rotate. Maintains 5 RBT properties including equal black-height on all paths.",
    timeComplexity: {
      best: "O(log n)",
      average: "O(log n)",
      worst: "O(log n)",
    },
    spaceComplexity: "O(log n)",
    applications: [
      "C++ STL map/set",
      "Java TreeMap/TreeSet",
      "Linux kernel completely fair scheduler",
    ],
    advantages: ["Looser balance than AVL → fewer rotations on insertion"],
    disadvantages: ["Complex implementation; slightly slower search than AVL"],
    realWorldUses: ["C++ STL std::map and std::set", "Java java.util.TreeMap"],
    defaultInput: "10 20 30 15 25 5 1",
    inputType: "tree",
    pseudocode:
      "rbtInsert(root, val):\n  BST insert, color node RED\n  Fix violations:\n  while parent is RED:\n    if uncle is RED: recolor\n    else: rotate + recolor\n  root.color = BLACK",
    code: {
      javascript:
        "// Red-Black Tree insert fix\nfunction fixInsert(node) {\n  while (node.parent?.color === 'RED') {\n    const uncle = getUncle(node);\n    if (uncle?.color === 'RED') {\n      // Case 1: Recolor\n      node.parent.color = 'BLACK';\n      uncle.color = 'BLACK';\n      node.parent.parent.color = 'RED';\n      node = node.parent.parent;\n    } else {\n      // Case 2/3: Rotate\n      rotate(node);\n    }\n  }\n  root.color = 'BLACK';\n}",
      python:
        "# Red-Black Tree insert fix\ndef fix_insert(self, node):\n    while node.parent and node.parent.color == 'RED':\n        uncle = self.get_uncle(node)\n        if uncle and uncle.color == 'RED':\n            node.parent.color = 'BLACK'\n            uncle.color = 'BLACK'\n            node.parent.parent.color = 'RED'\n            node = node.parent.parent\n        else:\n            self.rotate(node)\n    self.root.color = 'BLACK'",
      java: "private void fixInsert(RBNode node) {\n    while (node.parent != null && node.parent.color == RED) {\n        RBNode uncle = getUncle(node);\n        if (uncle != null && uncle.color == RED) {\n            node.parent.color = BLACK;\n            uncle.color = BLACK;\n            node.parent.parent.color = RED;\n            node = node.parent.parent;\n        } else { rotate(node); }\n    }\n    root.color = BLACK;\n}",
      cpp: "void fixInsert(RBNode* node) {\n    while (node->parent && node->parent->color == RED) {\n        auto uncle = getUncle(node);\n        if (uncle && uncle->color == RED) {\n            node->parent->color = BLACK;\n            uncle->color = BLACK;\n            node->parent->parent->color = RED;\n            node = node->parent->parent;\n        } else { rotate(node); }\n    }\n    root->color = BLACK;\n}",
    },
  },
};

// ============================================================
// COMPLETE ROADMAP EXTENSIONS (DYNAMIC INJECTION)
// ============================================================
export const COUNTERPARTS = {
  // --- 1. ARRAYS ---
  "array-traversal": "linear-search",
  "array-searching": "linear-search",
  "dutch-national-flag-algorithm": "quick-sort",
  "matrix-traversal": "dfs",
  "matrix-multiplication": "merge-arrays",

  // --- 2. STRINGS ---
  "string-searching": "linear-search",
  "string-comparison": "palindrome-check",
  anagram: "group-anagrams",
  "string-matching": "kmp-search",
  "pattern-matching": "kmp-search",
  "z-algorithm": "kmp-search",
  "manachers-algorithm": "palindrome-check",
  "rolling-hash": "rabin-karp",
  "string-subsequence": "lcs-dp",
  "string-substring": "kmp-search",
  "string-compression": "frequency-count",
  "lexicographical-order": "bubble-sort",

  // --- 3. LINKED LIST ---
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

  // --- 4. STACK ---
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

  // --- 5. QUEUE ---
  "queue-front": "queue-operations",
  "queue-rear": "queue-operations",
  "priority-queue-type": "min-heap",
  "deque-type": "queue-operations",
  "task-scheduling": "circular-queue",
  "cpu-scheduling": "circular-queue",
  "printer-queue": "queue-operations",
  "lru-cache-queue": "circular-queue",

  // --- 6. HASHING ---
  "hash-set": "hash-map",
  "duplicate-detection": "frequency-count",
  "longest-consecutive-sequence": "two-sum",
  "pair-sum": "two-sum",
  "count-distinct-elements": "frequency-count",
  "subarray-sum-equals-k": "prefix-sum",
  "cache-implementation": "hash-map",

  // --- 7. TREES ---
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

  // --- 8. GRAPHS ---
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

  // --- 9. RECURSION ---
  "recursion-factorial": "fibonacci-recursion",
  "recursion-power-function": "fast-exponentiation",
  "recursion-binary-search": "binary-search",
  "recursion-tree-traversal": "bst-traversal",
  "recursion-merge-sort": "merge-sort",
  "recursion-quick-sort": "quick-sort",

  // --- 10. BACKTRACKING ---

  // --- 11. DYNAMIC PROGRAMMING ---
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

  // --- 12. GREEDY ALGORITHMS ---
  "job-scheduling": "activity-selection",
  "minimum-platforms": "activity-selection",
  "gas-station": "activity-selection",
  "jump-game": "activity-selection",
  "candy-distribution": "activity-selection",

  // --- 13. SEARCHING ALGORITHMS ---
  "interpolation-search": "binary-search",
  "exponential-search": "binary-search",
  "binary-search-on-answer": "binary-search",
  "search-in-rotated-sorted-array": "binary-search",
  "peak-element": "binary-search",
  "first-and-last-occurrence": "binary-search",

  // --- 14. SORTING ALGORITHMS ---
  "bucket-sort": "radix-sort",
  "tim-sort": "merge-sort",

  // --- 15. BIT MANIPULATION ---
  "bitmask-xor": "xor-operations",
  "bitmask-and": "xor-operations",
  "bitmask-or": "xor-operations",
  "bitmask-not": "xor-operations",
  "bit-left-shift": "xor-operations",
  "bit-right-shift": "xor-operations",
  "bit-gray-code": "count-set-bits",
  "bitmasking-concept": "count-set-bits",
  "generate-subsets-using-bitmask": "count-set-bits",

  // --- 16. MATHEMATICAL ALGORITHMS ---
  "math-lcm": "gcd-euclidean",
  "math-modular-arithmetic": "gcd-euclidean",
  "math-modular-inverse": "gcd-euclidean",
  "math-ncr-computation": "pascal-triangle",

  // --- 17. SLIDING WINDOW ---
  "fixed-size-window": "sliding-window",
  "variable-size-window": "sliding-window",
  "maximum-sum-subarray": "kadane",
  "longest-substring-no-repeat": "sliding-window",

  // --- 18. TWO POINTER TECHNIQUE ---
  "three-sum": "two-sum-two-pointer",
  "four-sum": "two-sum-two-pointer",
  "container-with-most-water": "two-pointer",
  "trapping-rain-water-pointer": "trapping-rain-water",
  "merge-sorted-arrays-pointer": "merge-arrays",

  // --- 19. PREFIX SUM ---
  "prefix-sum-array": "prefix-sum",
  "suffix-sum-array": "suffix-sum",
  "difference-array-prefix": "difference-array",
  "range-sum-query-prefix": "prefix-sum",
  "subarray-sum-prefix": "prefix-sum",

  // --- 20. MONOTONIC STACK & QUEUE ---
  "previous-greater-element-mono": "next-greater-element",
  "next-smaller-element-mono": "next-greater-element",
  "previous-smaller-element-mono": "next-greater-element",
  "largest-rectangle-mono": "next-greater-element",
  "daily-temperatures": "next-greater-element",
  "sliding-window-max-mono": "sliding-window-max",
  "remove-k-digits": "next-greater-element",

  // --- 21. UNION FIND (DSU) ---
  "dsu-make-set": "union-find-cycle",
  "dsu-find": "union-find-cycle",
  "dsu-union": "union-find-cycle",
  "dsu-path-compression": "union-find-cycle",
  "dsu-union-by-rank": "union-find-cycle",
  "dsu-number-of-islands": "dfs",

  // --- 22. ADVANCED DATA STRUCTURES ---
  "b-tree": "b-tree",
  "b-plus-tree": "b-plus-tree",
  "splay-tree": "splay-tree",
  treap: "treap",
  "skip-list": "linked-list-traversal",
  "rope-ds": "reverse-string",
  "kd-tree": "kd-tree",
  "quad-tree": "quad-tree",
  octree: "octree",
  "interval-tree": "interval-tree",
  "suffix-tree": "suffix-tree",
  "suffix-array": "suffix-tree",
  "cartesian-tree": "cartesian-tree",
  "bloom-filter": "hash-map",
  "lru-cache-advanced": "circular-queue",
  "lfu-cache-advanced": "circular-queue",

  // --- 23. ADVANCED ALGORITHMS ---
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
  "dinics-algorithm": "dijkstra",
};

// Dynamically populate missing algorithms in ALGORITHMS and CATEGORIES
Object.entries(COUNTERPARTS).forEach(([key, counterpartKey]) => {
  const counterpartAlgo = ALGORITHMS[counterpartKey];
  if (counterpartAlgo) {
    const catId = counterpartAlgo.category;
    const category = CATEGORIES.find((c) => c.id === catId);
    if (category && !category.algorithms.includes(key)) {
      category.algorithms.push(key);
      category.algorithmsCount = category.algorithms.length;
    }

    if (!ALGORITHMS[key]) {
      const derivedName = key
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      ALGORITHMS[key] = {
        ...counterpartAlgo,
        id: key,
        name: derivedName,
        isRoadmapAlias: true,
        counterpartId: counterpartKey,
        description: `Concept Visualizer representing the ${derivedName} concept. Visually simulated using the underlying ${counterpartAlgo.name} solver.`,
      };
    }
  }
});
// ─────────────────────────────────────────────────────────────
// DEDICATED ALGORITHM OVERRIDES — Topic-specific inputTypes
// ─────────────────────────────────────────────────────────────

// ARRAYS — Override with specific inputTypes
if (ALGORITHMS["array-traversal"])
  ALGORITHMS["array-traversal"] = {
    ...ALGORITHMS["array-traversal"],
    id: "array-traversal",
    name: "Array Traversal",
    inputType: "array",
    defaultInput: "5 3 8 1 9 4 7",
    description: "Visit every element in the array from index 0 to n-1.",
  };
if (ALGORITHMS["array-insertion"])
  ALGORITHMS["array-insertion"] = {
    ...ALGORITHMS["array-insertion"],
    id: "array-insertion",
    name: "Array Insertion",
    inputType: "array",
    defaultInput: "5 3 8 1 9",
    description:
      "Insert an element at a given position by shifting elements right.",
  };
if (ALGORITHMS["array-deletion"])
  ALGORITHMS["array-deletion"] = {
    ...ALGORITHMS["array-deletion"],
    id: "array-deletion",
    name: "Array Deletion",
    inputType: "array",
    defaultInput: "5 3 8 1 9 4",
    description: "Remove an element by shifting subsequent elements left.",
  };
if (ALGORITHMS["traversal"])
  ALGORITHMS["traversal"] = ALGORITHMS["array-traversal"];
if (ALGORITHMS["insertion"])
  ALGORITHMS["insertion"] = ALGORITHMS["array-insertion"];
if (ALGORITHMS["deletion"])
  ALGORITHMS["deletion"] = ALGORITHMS["array-deletion"];

// SPIRAL MATRIX
if (ALGORITHMS["matrix-rotation"])
  ALGORITHMS["matrix-rotation"] = {
    ...ALGORITHMS["matrix-rotation"],
    inputType: "spiral-matrix",
    defaultInput: "4",
  };
if (ALGORITHMS["matrix-traversal"])
  ALGORITHMS["matrix-traversal"] = {
    ...ALGORITHMS["matrix-traversal"],
    inputType: "spiral-matrix",
    defaultInput: "4",
  };

// MATRIX MULTIPLICATION
ALGORITHMS["matrix-multiplication"] = {
  id: "matrix-multiplication",
  name: "Matrix Multiplication",
  category: "arrays",
  difficulty: "Hard",
  inputType: "matrix-mult",
  defaultInput: "1 2\n3 4\n---\n5 6\n7 8",
  description: "Multiply matrices A and B: C[i][j] = Σ A[i][k] × B[k][j].",
  timeComplexity: { best: "O(n³)", average: "O(n³)", worst: "O(n³)" },
  spaceComplexity: "O(n²)",
  applications: ["Linear algebra", "Graphics"],
  advantages: ["Foundation of ML"],
  disadvantages: ["O(n³) time"],
  realWorldUses: ["3D rendering", "Neural networks"],
};

// Z-ALGORITHM
ALGORITHMS["z-algorithm"] = {
  id: "z-algorithm",
  name: "Z-Algorithm",
  category: "strings",
  difficulty: "Medium",
  inputType: "z-algorithm",
  defaultInput: "aabxaa\naa",
  description:
    "Compute Z-array: Z[i] = length of longest substring from i matching a prefix of s.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Pattern matching"],
  advantages: ["Linear time"],
  disadvantages: ["Harder than KMP"],
  realWorldUses: ["Search engines", "DNA matching"],
};
if (ALGORITHMS["rolling-hash"])
  ALGORITHMS["rolling-hash"] = {
    ...ALGORITHMS["rolling-hash"],
    inputType: "z-algorithm",
    defaultInput: "aabxaa\naa",
  };

// MANACHER'S
ALGORITHMS["manachers-algorithm"] = {
  id: "manachers-algorithm",
  name: "Manacher's Algorithm",
  category: "strings",
  difficulty: "Hard",
  inputType: "manacher",
  defaultInput: "abacaba",
  description: "Find all palindromic substrings in O(n) time.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Palindrome finding"],
  advantages: ["Linear time"],
  disadvantages: ["Complex"],
  realWorldUses: ["Bioinformatics"],
};

// STRING COMPRESSION
ALGORITHMS["string-compression"] = {
  id: "string-compression",
  name: "String Compression",
  category: "strings",
  difficulty: "Easy",
  inputType: "string-compress",
  defaultInput: "aaabbbccddddee",
  description:
    "Run-length encoding: consecutive same characters grouped with count.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Data compression"],
  advantages: ["Simple encoding"],
  disadvantages: ["May expand small strings"],
  realWorldUses: ["Image compression", "File archiving"],
};

// EXPRESSION CONVERSIONS (Stack)
ALGORITHMS["infix-to-postfix"] = {
  id: "infix-to-postfix",
  name: "Infix to Postfix",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "A+B*C",
  description:
    "Convert infix to postfix using operator stack and precedence rules.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Compiler design"],
  advantages: ["No parentheses needed"],
  disadvantages: ["Requires stack"],
  realWorldUses: ["Calculator apps", "Compilers"],
};
ALGORITHMS["infix-to-prefix"] = {
  id: "infix-to-prefix",
  name: "Infix to Prefix",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "A+B*C",
  description:
    "Convert infix to prefix by reversing, postfix-converting, then reversing result.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["LISP", "Expression trees"],
  advantages: ["Unambiguous without parentheses"],
  disadvantages: ["Two reversal steps"],
  realWorldUses: ["LISP interpreters"],
};
ALGORITHMS["postfix-evaluation"] = {
  id: "postfix-evaluation",
  name: "Postfix Evaluation",
  category: "stack",
  difficulty: "Easy",
  inputType: "stack",
  defaultInput: "2 3 4 * +",
  description:
    "Evaluate postfix: scan left-to-right, push operands, pop and compute on operators.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Stack-based calculators"],
  advantages: ["No precedence rules needed"],
  disadvantages: ["Unreadable for humans"],
  realWorldUses: ["HP calculators", "Forth"],
};
ALGORITHMS["prefix-evaluation"] = {
  id: "prefix-evaluation",
  name: "Prefix Evaluation",
  category: "stack",
  difficulty: "Easy",
  inputType: "stack",
  defaultInput: "+ * 2 3 4",
  description: "Evaluate prefix: scan right-to-left and use an operand stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Functional expressions"],
  advantages: ["Natural for recursion"],
  disadvantages: ["Counter-intuitive"],
  realWorldUses: ["LISP/Scheme"],
};

// STACK APPLICATIONS
ALGORITHMS["next-smaller-element"] = {
  id: "next-smaller-element",
  name: "Next Smaller Element",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "4 8 5 2 25",
  description:
    "For each element, find nearest smaller element to its right using monotonic stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Temperature span", "Histograms"],
  advantages: ["O(n) using stack"],
  disadvantages: ["O(n) auxiliary space"],
  realWorldUses: ["Financial analysis"],
  code: {
    javascript:
      "function nextSmallerElement(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {\n      res[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    python:
      "def next_smaller_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] > arr[i]:\n            res[stack.pop()] = arr[i]\n        stack.append(i)\n    return res",
  },
};

ALGORITHMS["previous-greater-element"] = {
  id: "previous-greater-element",
  name: "Previous Greater Element",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "10 4 6 8 3 2",
  description:
    "For each element, find nearest greater element to its left using monotonic stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Span calculations"],
  advantages: ["Linear time"],
  disadvantages: ["O(n) space"],
  realWorldUses: ["Stock span"],
  code: {
    javascript:
      "function previousGreaterElement(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {\n      stack.pop();\n    }\n    res[i] = stack.length > 0 ? arr[stack[stack.length - 1]] : -1;\n    stack.push(i);\n  }\n  return res;\n}",
    python:
      "def previous_greater_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        res[i] = arr[stack[-1]] if stack else -1\n        stack.append(i)\n    return res",
  },
};

ALGORITHMS["largest-rectangle-histogram"] = {
  id: "largest-rectangle-histogram",
  name: "Largest Rectangle in Histogram",
  category: "stack",
  difficulty: "Hard",
  inputType: "array",
  defaultInput: "2 1 5 6 2 3",
  description:
    "Find largest rectangle area in histogram using monotonic stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Maximal rectangle"],
  advantages: ["O(n) optimal"],
  disadvantages: ["Tricky boundaries"],
  realWorldUses: ["Image processing"],
  code: {
    javascript:
      "function largestRectangleArea(heights) {\n  const stack = [];\n  let maxArea = 0;\n  for (let i = 0; i <= heights.length; i++) {\n    const h = i === heights.length ? 0 : heights[i];\n    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {\n      const height = heights[stack.pop()];\n      const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;\n      maxArea = Math.max(maxArea, height * width);\n    }\n    stack.push(i);\n  }\n  return maxArea;\n}",
    python:
      "def largest_rectangle_area(heights):\n    stack, max_area = [], 0\n    for i, h in enumerate(heights + [0]):\n        while stack and heights[stack[-1]] > h:\n            height = heights[stack.pop()]\n            width = i - stack[-1] - 1 if stack else i\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    return max_area",
  },
};

ALGORITHMS["stock-span"] = {
  id: "stock-span",
  name: "Stock Span Problem",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "100 80 60 70 60 75 85",
  description:
    "Compute consecutive days before today where stock price was ≤ today's.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Financial data"],
  advantages: ["O(n) using stack"],
  disadvantages: ["Stack overhead"],
  realWorldUses: ["Stock market analysis"],
  code: {
    javascript:
      "function stockSpan(arr) {\n  const stack = [], span = new Array(arr.length).fill(1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {\n      stack.pop();\n    }\n    span[i] = stack.length > 0 ? i - stack[stack.length - 1] : i + 1;\n    stack.push(i);\n  }\n  return span;\n}",
    python:
      "def stock_span(arr):\n    stack, span = [], [1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        span[i] = i - stack[-1] if stack else i + 1\n        stack.append(i)\n    return span",
  },
};

ALGORITHMS["undo-redo"] = {
  id: "undo-redo",
  name: "Undo Redo",
  category: "stack",
  difficulty: "Easy",
  inputType: "stack",
  defaultInput: "write H write e write l write l write o undo undo redo",
  description:
    "Maintain editor text states using an Undo stack and a Redo stack.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Text editors", "Command managers"],
  advantages: ["O(1) command execution"],
  disadvantages: ["Consumes memory for full change histories"],
  realWorldUses: ["VS Code, Microsoft Word history managers"],
  code: {
    javascript:
      "class UndoRedo {\n  constructor() { this.undoStk = []; this.redoStk = []; }\n  write(val) { this.undoStk.push(val); this.redoStk.length = 0; }\n  undo() { if (this.undoStk.length) this.redoStk.push(this.undoStk.pop()); }\n  redo() { if (this.redoStk.length) this.undoStk.push(this.redoStk.pop()); }\n  getText() { return this.undoStk.join(''); }\n}",
    python:
      'class UndoRedo:\n    def __init__(self):\n        self.undo_stk, self.redo_stk = [], []\n    def write(self, val):\n        self.undo_stk.append(val)\n        self.redo_stk.clear()\n    def undo(self):\n        if self.undo_stk:\n            self.redo_stk.append(self.undo_stk.pop())\n    def redo(self):\n        if self.redo_stk:\n            self.undo_stk.append(self.redo_stk.pop())\n    def get_text(self):\n        return "".join(self.undo_stk)',
  },
};

ALGORITHMS["browser-history"] = {
  id: "browser-history",
  name: "Browser History",
  category: "stack",
  difficulty: "Easy",
  inputType: "stack",
  defaultInput: "visit google.com visit github.com back back forward",
  description:
    "Simulate browser tab back/forward history tracking using Back and Forward stacks.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Web browsers", "Wizard page workflows"],
  advantages: ["Fast state transitions"],
  disadvantages: ["High memory footprint for complex document structures"],
  realWorldUses: ["Chrome/Safari navigation routing stacks"],
  code: {
    javascript:
      "class BrowserHistory {\n  constructor() { this.backStk = []; this.forwardStk = []; this.curr = 'about:blank'; }\n  visit(url) { if (this.curr !== 'about:blank') this.backStk.push(this.curr); this.forwardStk.length = 0; this.curr = url; }\n  back() { if (this.backStk.length) { this.forwardStk.push(this.curr); this.curr = this.backStk.pop(); } }\n  forward() { if (this.forwardStk.length) { this.backStk.push(this.curr); this.curr = this.forwardStk.pop(); } }\n}",
    python:
      'class BrowserHistory:\n    def __init__(self):\n        self.back_stk, self.forward_stk = [], []\n        self.curr = "about:blank"\n    def visit(self, url):\n        if self.curr != "about:blank":\n            self.back_stk.append(self.curr)\n        self.forward_stk.clear()\n        self.curr = url\n    def back(self):\n        if self.back_stk:\n            self.forward_stk.append(self.curr)\n            self.curr = self.back_stk.pop()\n    def forward(self):\n        if self.forward_stk:\n            self.back_stk.append(self.curr)\n            self.curr = self.forward_stk.pop()',
  },
};

ALGORITHMS["remove-k-digits"] = {
  id: "remove-k-digits",
  name: "Remove K Digits",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "1432219\n3",
  description:
    "Find the smallest possible number by removing K digits using a monotonic increasing stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Number compression", "Greedy optimizations"],
  advantages: ["Linear time scan"],
  disadvantages: ["Handles leading zero terminations"],
  realWorldUses: ["Numerical precision reduction models"],
  code: {
    javascript:
      "function removeKdigits(num, k) {\n  const stack = [];\n  for (const d of num) {\n    while (stack.length > 0 && stack[stack.length - 1] > d && k > 0) {\n      stack.pop(); k--;\n    }\n    stack.push(d);\n  }\n  while (k > 0) { stack.pop(); k--; }\n  const res = stack.join('').replace(/^0+/, '');\n  return res === '' ? '0' : res;\n}",
    python:
      'def remove_k_digits(num: str, k: int) -> str:\n    stack = []\n    for d in num:\n        while stack and stack[-1] > d and k > 0:\n            stack.pop()\n            k -= 1\n        stack.append(d)\n    while k > 0:\n        stack.pop()\n        k -= 1\n    res = "".join(stack).lstrip("0")\n    return res if res else "0"',
  },
};

ALGORITHMS["daily-temperatures"] = {
  id: "daily-temperatures",
  name: "Daily Temperatures",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "73 74 75 71 69 72 76 73",
  description:
    "For each day, calculate how many days you must wait until a warmer temperature using a monotonic decreasing stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Sensor alarm aggregates"],
  advantages: ["O(n) linear scan using stack"],
  disadvantages: ["Extra memory space"],
  realWorldUses: ["Weather telemetry aggregate monitors"],
  code: {
    javascript:
      "function dailyTemperatures(temperatures) {\n  const n = temperatures.length, res = new Array(n).fill(0), stack = [];\n  for (let i = 0; i < n; i++) {\n    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {\n      const popped = stack.pop();\n      res[popped] = i - popped;\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    python:
      "def daily_temperatures(temperatures):\n    n = len(temperatures)\n    res, stack = [0] * n, []\n    for i in range(n):\n        while stack and temperatures[stack[-1]] < temperatures[i]:\n            popped = stack.pop()\n            res[popped] = i - popped\n        stack.append(i)\n    return res",
  },
};

ALGORITHMS["previous-greater-element-mono"] = {
  ...ALGORITHMS["previous-greater-element"],
  id: "previous-greater-element-mono",
  name: "Previous Greater Element Mono",
};

ALGORITHMS["next-smaller-element-mono"] = {
  ...ALGORITHMS["next-smaller-element"],
  id: "next-smaller-element-mono",
  name: "Next Smaller Element Mono",
};

ALGORITHMS["previous-smaller-element-mono"] = {
  id: "previous-smaller-element-mono",
  name: "Previous Smaller Element Mono",
  category: "stack",
  difficulty: "Medium",
  inputType: "stack",
  defaultInput: "4 8 5 2 25",
  description:
    "Find nearest smaller element to its left using monotonic stack.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Boundary searches"],
  advantages: ["O(n) time complexity"],
  disadvantages: ["Extra space"],
  realWorldUses: ["Monotonic data segment filters"],
  code: {
    javascript:
      "function previousSmallerElement(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {\n      stack.pop();\n    }\n    res[i] = stack.length > 0 ? arr[stack[stack.length - 1]] : -1;\n    stack.push(i);\n  }\n  return res;\n}",
    python:
      "def previous_smaller_element(arr):\n    stack, res = [], [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[stack[-1]] >= arr[i]:\n            stack.pop()\n        res[i] = arr[stack[-1]] if stack else -1\n        stack.append(i)\n    return res",
  },
};

ALGORITHMS["largest-rectangle-mono"] = {
  ...ALGORITHMS["largest-rectangle-histogram"],
  id: "largest-rectangle-mono",
  name: "Largest Rectangle Mono",
};

ALGORITHMS["josephus-problem"] = {
  id: "josephus-problem",
  name: "Josephus Problem",
  category: "queue",
  difficulty: "Medium",
  inputType: "queue",
  defaultInput: "5 2",
  description:
    "Simulate the Josephus elimination game in a circle until only one survivor remains.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Circular data elimination", "Game simulations"],
  advantages: ["Predictable elimination index"],
  disadvantages: ["Simulating steps sequentially takes time"],
  realWorldUses: ["Round-robin ballot allocations"],
  code: {
    javascript:
      "function josephus(n, k) {\n  let survivor = 0;\n  for (let i = 2; i <= n; i++) {\n    survivor = (survivor + k) % i;\n  }\n  return survivor + 1;\n}",
    python:
      "def josephus(n: int, k: int) -> int:\n    survivor = 0\n    for i in range(2, n + 1):\n        survivor = (survivor + k) % i\n    return survivor + 1",
  },
};

ALGORITHMS["deque-type"] = {
  id: "deque-type",
  name: "Deque Type",
  category: "queue",
  difficulty: "Easy",
  inputType: "queue",
  defaultInput: "push_back 5 push_back 10 push_front 2 pop_back pop_front",
  description:
    "Double Ended Queue supporting insertion and deletion operations from both Front and Back.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Undo redirection lists", "Sliding window optimization"],
  advantages: ["Instant operations at both ends"],
  disadvantages: ["High index lookup penalty compared to standard arrays"],
  realWorldUses: ["Python's collections.deque, C++ std::deque"],
  code: {
    javascript:
      "class Deque {\n  constructor() { this.items = []; }\n  pushFront(val) { this.items.unshift(val); }\n  pushBack(val) { this.items.push(val); }\n  popFront() { return this.items.length ? this.items.shift() : null; }\n  popBack() { return this.items.length ? this.items.pop() : null; }\n}",
    python:
      "from collections import deque\n# Initialize deque\ndq = deque()\ndq.appendleft(2)    # push front\ndq.append(5)        # push back\ndq.popleft()        # pop front\ndq.pop()            # pop back",
  },
};

ALGORITHMS["task-scheduling"] = {
  id: "task-scheduling",
  name: "Task Scheduling",
  category: "queue",
  difficulty: "Medium",
  inputType: "queue",
  defaultInput: "P1:8 P2:4 P3:6\n3",
  description:
    "Simulate Round Robin task scheduling using a quantum clock slice.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["OS Job schedulers", "API rate limit queues"],
  advantages: ["Guarantees fairness among tasks"],
  disadvantages: ["High context-switching overhead under small quantums"],
  realWorldUses: ["Linux Kernel CPU schedulers, thread execution pools"],
  code: {
    javascript:
      "function roundRobin(processes, quantum) {\n  const queue = [...processes], completed = [];\n  let time = 0;\n  while (queue.length > 0) {\n    const p = queue.shift();\n    const run = Math.min(p.remaining, quantum);\n    time += run; p.remaining -= run;\n    if (p.remaining === 0) {\n      p.finishTime = time; completed.push(p);\n    } else {\n      queue.push(p);\n    }\n  }\n  return completed;\n}",
    python:
      "def round_robin(processes, quantum):\n    queue = list(processes)\n    completed, time = [], 0\n    while queue:\n        p = queue.pop(0)\n        run = min(p['remaining'], quantum)\n        time += run\n        p['remaining'] -= run\n        if p['remaining'] == 0:\n            p['finish_time'] = time\n            completed.append(p)\n        else:\n            queue.append(p)\n    return completed",
  },
};

ALGORITHMS["cpu-scheduling"] = {
  ...ALGORITHMS["task-scheduling"],
  id: "cpu-scheduling",
  name: "Cpu Scheduling",
};

ALGORITHMS["printer-queue"] = {
  id: "printer-queue",
  name: "Printer Queue",
  category: "queue",
  difficulty: "Easy",
  inputType: "queue",
  defaultInput: "Report.pdf Photo.png Script.js",
  description:
    "Simulate print jobs entering a printer queue and executing sequentially.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Print buffers", "Sequential message queues"],
  advantages: ["Strict order execution"],
  disadvantages: ["Prone to Head-of-Line blocking (slow job blocks queue)"],
  realWorldUses: ["CUPS spooling system, office network printer systems"],
  code: {
    javascript:
      "class PrinterQueue {\n  constructor() { this.jobs = []; }\n  addJob(job) { this.jobs.push(job); }\n  printNext() { return this.jobs.length ? this.jobs.shift() : null; }\n}",
    python:
      "class PrinterQueue:\n    def __init__(self):\n        self.jobs = []\n    def add_job(self, job: str):\n        self.jobs.append(job)\n    def print_next(self) -> str:\n        return self.jobs.pop(0) if self.jobs else None",
  },
};

ALGORITHMS["lfu-cache-advanced"] = {
  id: "lfu-cache-advanced",
  name: "Lfu Cache Advanced",
  category: "queue",
  difficulty: "Hard",
  inputType: "queue",
  defaultInput: "capacity=2 put 1 1 put 2 2 get 1 put 3 3 get 2 get 3",
  description:
    "Least Frequently Used cache manager using hits and frequencies to evict keys.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(capacity)",
  applications: ["System caching layer", "Database buffers"],
  advantages: ["Higher cache hit ratio for repetitive accesses"],
  disadvantages: ["Requires extra frequency and order maps"],
  realWorldUses: ["Web client caching layers, memory buffers"],
  code: {
    javascript:
      "class LFUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    this.vals = new Map();\n    this.counts = new Map();\n  }\n  get(key) {\n    if (!this.vals.has(key)) return -1;\n    this.counts.set(key, this.counts.get(key) + 1);\n    return this.vals.get(key);\n  }\n  put(key, value) {\n    if (this.cap <= 0) return;\n    this.vals.set(key, value);\n    this.counts.set(key, (this.counts.get(key) || 0) + 1);\n  }\n}",
    python:
      "class LFUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.vals = {}\n        self.counts = {}\n    def get(self, key: int) -> int:\n        if key not in self.vals: return -1\n        self.counts[key] += 1\n        return self.vals[key]\n    def put(self, key: int, value: int):\n        self.vals[key] = value\n        self.counts[key] = self.counts.get(key, 0) + 1",
  },
};

ALGORITHMS["sliding-window-max-mono"] = {
  id: "sliding-window-max-mono",
  name: "Sliding Window Max Mono",
  category: "queue",
  difficulty: "Hard",
  inputType: "queue",
  defaultInput: "1 3 -1 -3 5 3 6 7",
  description:
    "Calculate the maximum value in every sliding window of size K using a monotonic deque.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(k)",
  applications: ["Streaming statistics", "Sliding threshold triggers"],
  advantages: ["Optimal O(n) runtime"],
  disadvantages: ["Complex edge index management"],
  realWorldUses: ["Window telemetry filters, rate limiting aggregations"],
  code: {
    javascript:
      "function maxSlidingWindow(nums, k) {\n  const deque = [], res = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (deque.length > 0 && deque[0] < i - k + 1) deque.shift();\n    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) res.push(nums[deque[0]]);\n  }\n  return res;\n}",
    python:
      "from collections import deque\ndef max_sliding_window(nums, k):\n    dq, res = deque(), []\n    for i, val in enumerate(nums):\n        if dq and dq[0] < i - k + 1:\n            dq.popleft()\n        while dq and nums[dq[-1]] <= val:\n            dq.pop()\n        dq.append(i)\n        if i >= k - 1:\n            res.append(nums[dq[0]])\n    return res",
  },
};


ALGORITHMS["queue-front"] = {
  id: "queue-front",
  name: "Queue Front",
  category: "queue",
  difficulty: "Easy",
  inputType: "queue",
  defaultInput: "10 20 30",
  description: "Access front (head) of a FIFO queue without removing the node.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Buffering", "Job inspection"],
  advantages: ["No modification operation cost"],
  disadvantages: ["Only exposes head node"],
  realWorldUses: ["Message broker peek tools"],
  code: {
    javascript:
      "function getFront(queue) {\n  return queue.length ? queue[0] : null;\n}",
    python: "def get_front(queue):\n    return queue[0] if queue else None",
  },
};

ALGORITHMS["queue-rear"] = {
  id: "queue-rear",
  name: "Queue Rear",
  category: "queue",
  difficulty: "Easy",
  inputType: "queue",
  defaultInput: "10 20 30",
  description: "Access back (tail) of a FIFO queue.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(n)",
  applications: ["Buffer telemetry"],
  advantages: ["Fast verification of last inserted element"],
  disadvantages: ["Exposes tail node only"],
  realWorldUses: ["Print spooler log monitoring"],
  code: {
    javascript:
      "function getRear(queue) {\n  return queue.length ? queue[queue.length - 1] : null;\n}",
    python: "def get_rear(queue):\n    return queue[-1] if queue else None",
  },
};

// TREES — NEW VIEWS
const _treeBase = {
  category: "trees",
  difficulty: "Medium",
  inputType: "tree",
  defaultInput: "1 2 3 4 5 6 7",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Tree visualization"],
  advantages: ["Intuitive tree view"],
  disadvantages: ["BFS required"],
  realWorldUses: ["Tree rendering"],
};
ALGORITHMS["tree-top-view"] = {
  ..._treeBase,
  id: "tree-top-view",
  name: "Tree Top View",
  description:
    "Show first visible node per horizontal column (top perspective).",
};
ALGORITHMS["top-view"] = ALGORITHMS["tree-top-view"];
ALGORITHMS["tree-bottom-view"] = {
  ..._treeBase,
  id: "tree-bottom-view",
  name: "Tree Bottom View",
  description:
    "Show last visible node per horizontal column (bottom perspective).",
};
ALGORITHMS["bottom-view"] = ALGORITHMS["tree-bottom-view"];
ALGORITHMS["tree-left-view"] = {
  ..._treeBase,
  id: "tree-left-view",
  name: "Tree Left View",
  description: "Show first node visible from the left at each tree level.",
};
ALGORITHMS["left-view"] = ALGORITHMS["tree-left-view"];
ALGORITHMS["tree-right-view"] = {
  ..._treeBase,
  id: "tree-right-view",
  name: "Tree Right View",
  description: "Show last node visible from the right at each tree level.",
};
ALGORITHMS["right-view"] = ALGORITHMS["tree-right-view"];
ALGORITHMS["zigzag-traversal"] = {
  ..._treeBase,
  id: "zigzag-traversal",
  name: "Zigzag Level Order Traversal",
  description:
    "Level-order traversal alternating left-to-right and right-to-left per level.",
};
ALGORITHMS["tree-diameter"] = {
  ..._treeBase,
  id: "tree-diameter",
  name: "Tree Diameter",
  description:
    "Find the longest path between any two leaf nodes in the binary tree.",
};
ALGORITHMS["diameter-of-tree"] = ALGORITHMS["tree-diameter"];
ALGORITHMS["validate-bst"] = {
  ..._treeBase,
  id: "validate-bst",
  name: "Validate BST",
  description:
    "Verify BST property by checking in-order traversal is strictly increasing.",
};
ALGORITHMS["kth-smallest"] = {
  ..._treeBase,
  id: "kth-smallest",
  name: "Kth Smallest in BST",
  defaultInput: "5 3 7 2 4 6 8",
  description:
    "Find kth smallest element in BST using in-order traversal with a counter.",
};

// GRAPHS — NEW
ALGORITHMS["kruskals-algorithm"] = {
  id: "kruskals-algorithm",
  name: "Kruskal's Algorithm",
  category: "graphs",
  difficulty: "Hard",
  inputType: "graph",
  defaultInput: "0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5",
  description:
    "Minimum Spanning Tree: sort edges by weight, use Union-Find to avoid cycles.",
  timeComplexity: {
    best: "O(E log E)",
    average: "O(E log E)",
    worst: "O(E log E)",
  },
  spaceComplexity: "O(V+E)",
  applications: ["Network design", "Cluster analysis"],
  advantages: ["Simple edge-based MST"],
  disadvantages: ["Edge sorting required"],
  realWorldUses: ["Cable/road design", "Image segmentation"],
};
ALGORITHMS["prims-algorithm"] = {
  id: "prims-algorithm",
  name: "Prim's Algorithm",
  category: "graphs",
  difficulty: "Hard",
  inputType: "graph",
  defaultInput: "0 1 4\n0 2 3\n1 2 1\n1 3 2\n2 3 5",
  description:
    "MST by greedily extending from a start node with minimum-weight edges.",
  timeComplexity: {
    best: "O(E log V)",
    average: "O(E log V)",
    worst: "O(E log V)",
  },
  spaceComplexity: "O(V)",
  applications: ["Network span", "Road maps"],
  advantages: ["Good for dense graphs"],
  disadvantages: ["Needs priority queue"],
  realWorldUses: ["Telecom networks", "Water pipes"],
};
ALGORITHMS["bipartite-graph"] = {
  id: "bipartite-graph",
  name: "Bipartite Check",
  category: "graphs",
  difficulty: "Medium",
  inputType: "graph",
  defaultInput: "0 1\n1 2\n2 3\n3 0",
  description:
    "2-color graph with BFS. If no two adjacent nodes share same color, it's bipartite.",
  timeComplexity: { best: "O(V+E)", average: "O(V+E)", worst: "O(V+E)" },
  spaceComplexity: "O(V)",
  applications: ["Matching", "Scheduling"],
  advantages: ["Simple BFS coloring"],
  disadvantages: ["Undirected graphs only"],
  realWorldUses: ["Job matching", "Social analysis"],
};
ALGORITHMS["bipartite-check"] = ALGORITHMS["bipartite-graph"];
ALGORITHMS["connected-components"] = {
  id: "connected-components",
  name: "Connected Components",
  category: "graphs",
  difficulty: "Medium",
  inputType: "graph",
  defaultInput: "0 1\n1 2\n3 4",
  description: "Count and identify all connected components using DFS.",
  timeComplexity: { best: "O(V+E)", average: "O(V+E)", worst: "O(V+E)" },
  spaceComplexity: "O(V)",
  applications: ["Network analysis", "Image segmentation"],
  advantages: ["Linear time DFS"],
  disadvantages: ["Requires full scan"],
  realWorldUses: ["Social network clusters", "Connected regions"],
};

// SEARCHING — EXPONENTIAL AND INTERPOLATION
ALGORITHMS["exponential-search"] = {
  id: "exponential-search",
  name: "Exponential Search",
  category: "searching",
  difficulty: "Medium",
  inputType: "search",
  defaultInput: "1 3 5 7 9 11 13 15 17",
  description:
    "Double bound to find range, then binary search within [bound/2, min(bound,n-1)].",
  timeComplexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)" },
  spaceComplexity: "O(1)",
  applications: ["Unbounded sorted arrays"],
  advantages: ["Faster than binary for small indices"],
  disadvantages: ["Extra doubling phase"],
  realWorldUses: ["DB engines", "Infinite sorted sequences"],
};
ALGORITHMS["interpolation-search"] = {
  id: "interpolation-search",
  name: "Interpolation Search",
  category: "searching",
  difficulty: "Medium",
  inputType: "search",
  defaultInput: "10 20 30 40 50 60 70",
  description:
    "Estimate probe position by value distribution: pos = lo + (target-arr[lo])*(hi-lo)/(arr[hi]-arr[lo]).",
  timeComplexity: { best: "O(1)", average: "O(log log n)", worst: "O(n)" },
  spaceComplexity: "O(1)",
  applications: ["Uniformly distributed sorted data"],
  advantages: ["O(log log n) for uniform data"],
  disadvantages: ["O(n) worst case"],
  realWorldUses: ["Phone book", "Dictionary lookup"],
};

// SORTING — NEW
ALGORITHMS["shell-sort"] = {
  id: "shell-sort",
  name: "Shell Sort",
  category: "sorting",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "64 34 25 12 22 11 90",
  description:
    "Generalization of insertion sort using diminishing gap sequences for faster pre-sorting.",
  timeComplexity: { best: "O(n log n)", average: "O(n log²n)", worst: "O(n²)" },
  spaceComplexity: "O(1)",
  applications: ["Embedded systems"],
  advantages: ["Better than insertion for large n"],
  disadvantages: ["Gap sequence matters"],
  realWorldUses: ["Linux kernel uClib", "Embedded sorting"],
};
ALGORITHMS["bucket-sort"] = {
  id: "bucket-sort",
  name: "Bucket Sort",
  category: "sorting",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "29 25 3 49 9 37 21 43",
  description:
    "Distribute into buckets, sort each, concatenate. O(n) for uniform distribution.",
  timeComplexity: { best: "O(n+k)", average: "O(n+k)", worst: "O(n²)" },
  spaceComplexity: "O(n+k)",
  applications: ["Float sorting", "Histogram-based"],
  advantages: ["O(n) for uniform data"],
  disadvantages: ["Range required"],
  realWorldUses: ["External sorting", "Histogram equalization"],
};

// DP — NEW
ALGORITHMS["longest-increasing-subsequence"] = {
  id: "longest-increasing-subsequence",
  name: "Longest Increasing Subsequence",
  category: "dynamic-programming",
  difficulty: "Hard",
  inputType: "dp",
  defaultInput: "10 9 2 5 3 7 101 18",
  description:
    "Find longest subsequence where each element is strictly greater than previous.",
  timeComplexity: { best: "O(n log n)", average: "O(n²)", worst: "O(n²)" },
  spaceComplexity: "O(n)",
  applications: ["Activity scheduling", "Stock analysis"],
  advantages: ["Classic DP problem"],
  disadvantages: ["O(n²) naive"],
  realWorldUses: ["Activity scheduling", "DNA alignment"],
};
ALGORITHMS["edit-distance"] = {
  id: "edit-distance",
  name: "Edit Distance (Levenshtein)",
  category: "dynamic-programming",
  difficulty: "Hard",
  inputType: "dp",
  defaultInput: "kitten\nsitting",
  description:
    "Minimum insert/delete/replace operations to transform s1 into s2.",
  timeComplexity: { best: "O(m·n)", average: "O(m·n)", worst: "O(m·n)" },
  spaceComplexity: "O(m·n)",
  applications: ["Spell checking", "DNA alignment"],
  advantages: ["Optimal via DP"],
  disadvantages: ["O(m·n) space"],
  realWorldUses: ["Spell checkers", "Git diff", "DNA alignment"],
};
ALGORITHMS["longest-palindromic-subsequence"] = {
  id: "longest-palindromic-subsequence",
  name: "Longest Palindromic Subsequence",
  category: "dynamic-programming",
  difficulty: "Hard",
  inputType: "dp",
  defaultInput: "bbbab",
  description:
    "Find longest palindromic subsequence by computing LCS of s with its reverse.",
  timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
  spaceComplexity: "O(n²)",
  applications: ["DNA analysis"],
  advantages: ["Reduces to LCS"],
  disadvantages: ["O(n²) time/space"],
  realWorldUses: ["Bioinformatics"],
};
ALGORITHMS["house-robber"] = {
  id: "house-robber",
  name: "House Robber",
  category: "dynamic-programming",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "2 7 9 3 1",
  description: "Max non-adjacent sum: dp[i] = max(dp[i-1], dp[i-2] + arr[i]).",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Resource selection"],
  advantages: ["Simple O(n) DP"],
  disadvantages: ["Linear scan only"],
  realWorldUses: ["Resource allocation", "Scheduling"],
};

// GREEDY — NEW
ALGORITHMS["job-scheduling"] = {
  id: "job-scheduling",
  name: "Job Scheduling",
  category: "greedy",
  difficulty: "Medium",
  inputType: "greedy-interval",
  defaultInput: "J1 2 100\nJ2 1 19\nJ3 2 27\nJ4 1 25\nJ5 3 15",
  description:
    "Maximize profit by assigning jobs to latest available slots before deadlines.",
  timeComplexity: { best: "O(n log n)", average: "O(n²)", worst: "O(n²)" },
  spaceComplexity: "O(n)",
  applications: ["Task scheduling"],
  advantages: ["Greedy is optimal"],
  disadvantages: ["Deadline knowledge required"],
  realWorldUses: ["CPU scheduling", "Project management"],
};
ALGORITHMS["minimum-platforms"] = {
  id: "minimum-platforms",
  name: "Minimum Platforms",
  category: "greedy",
  difficulty: "Medium",
  inputType: "greedy-interval",
  defaultInput:
    "arrivals: 900 940 950 1100 1500 1800\ndepartures: 910 1200 1120 1130 1900 2000",
  description:
    "Minimum train platforms so no train waits: sort arrivals/departures and sweep.",
  timeComplexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
  },
  spaceComplexity: "O(n)",
  applications: ["Station management"],
  advantages: ["Sorting + sweep is optimal"],
  disadvantages: ["Full schedule required"],
  realWorldUses: ["Railway management", "Airport gates"],
};
ALGORITHMS["jump-game"] = {
  id: "jump-game",
  name: "Jump Game",
  category: "greedy",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "2 3 1 1 4",
  description:
    "Can we reach the last index? arr[i] = max jump. Track global max reachable index.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(1)",
  applications: ["Reachability problems"],
  advantages: ["O(n) greedy"],
  disadvantages: ["No optimal path info"],
  realWorldUses: ["Game AI", "Network reachability"],
};
ALGORITHMS["candy-distribution"] = {
  id: "candy-distribution",
  name: "Candy Distribution",
  category: "greedy",
  difficulty: "Hard",
  inputType: "array",
  defaultInput: "1 0 2",
  description:
    "Minimum candies so each child has ≥1 and more than neighbors with lower ratings (two-pass greedy).",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Fair distribution"],
  advantages: ["Two-pass is optimal"],
  disadvantages: ["Two passes required"],
  realWorldUses: ["Reward systems", "Grade distribution"],
};

// MATH — NEW
ALGORITHMS["lcm"] = {
  id: "lcm",
  name: "LCM",
  category: "mathematical",
  difficulty: "Easy",
  inputType: "math-gcd",
  defaultInput: "12 18",
  description: "LCM(a,b) = (a×b)/GCD(a,b). Uses Euclidean algorithm for GCD.",
  timeComplexity: {
    best: "O(log min(a,b))",
    average: "O(log min(a,b))",
    worst: "O(log min(a,b))",
  },
  spaceComplexity: "O(1)",
  applications: ["Fraction arithmetic", "Scheduling"],
  advantages: ["Leverages GCD"],
  disadvantages: ["Overflow risk for large numbers"],
  realWorldUses: ["Clock synchronization", "LCD refresh rates"],
};
ALGORITHMS["ncr-computation"] = {
  id: "ncr-computation",
  name: "nCr Computation",
  category: "mathematical",
  difficulty: "Easy",
  inputType: "math-ncr",
  defaultInput: "5 2",
  description:
    "C(n,r) via Pascal's triangle DP: C(n,r) = C(n-1,r-1) + C(n-1,r).",
  timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
  spaceComplexity: "O(n²)",
  applications: ["Combinatorics", "Probability"],
  advantages: ["No overflow with DP"],
  disadvantages: ["O(n²) space"],
  realWorldUses: ["Statistics", "Cryptography"],
};
ALGORITHMS["gray-code"] = {
  id: "gray-code",
  name: "Gray Code",
  category: "bit-manipulation",
  difficulty: "Easy",
  inputType: "bit-value",
  defaultInput: "3",
  description:
    "n-bit Gray code: G(i) = i XOR (i>>1). Adjacent codes differ by exactly 1 bit.",
  timeComplexity: { best: "O(2ⁿ)", average: "O(2ⁿ)", worst: "O(2ⁿ)" },
  spaceComplexity: "O(2ⁿ)",
  applications: ["Error correction", "Digital electronics"],
  advantages: ["Simple XOR formula"],
  disadvantages: ["Exponential number of codes"],
  realWorldUses: ["ADC encoders", "Rotary encoders"],
};

// ADVANCED — LRU CACHE
ALGORITHMS["lru-cache"] = {
  id: "lru-cache",
  name: "LRU Cache",
  category: "hashing",
  difficulty: "Hard",
  inputType: "lru-cache",
  defaultInput:
    "capacity 3\nput 1 10\nput 2 20\nget 1\nput 3 30\nput 4 40\nget 2",
  description:
    "O(1) get/put cache using doubly-linked list + hashmap with LRU eviction policy.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
  spaceComplexity: "O(capacity)",
  applications: ["Cache management", "Query caching"],
  advantages: ["O(1) all operations"],
  disadvantages: ["Extra pointer overhead"],
  realWorldUses: ["CPU caches", "Redis LRU", "Browser cache"],
};
if (ALGORITHMS["lru-cache-advanced"])
  ALGORITHMS["lru-cache-advanced"] = ALGORITHMS["lru-cache"];
if (ALGORITHMS["cache-implementation"])
  ALGORITHMS["cache-implementation"] = ALGORITHMS["lru-cache"];

ALGORITHMS["lru-cache-queue"] = {
  ...ALGORITHMS["lru-cache"],
  id: "lru-cache-queue",
  name: "Lru Cache Queue",
  category: "queue",
};


// NEW ADVANCED TREES CONFIGURATIONS
ALGORITHMS["fenwick-tree"] = {
  id: "fenwick-tree",
  name: "Fenwick Tree",
  category: "trees",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "1 3 5 7 9 11",
  description:
    "Binary Indexed Tree for efficient prefix sum queries and point updates.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(log n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["b-tree"] = {
  id: "b-tree",
  name: "B Tree",
  category: "trees",
  difficulty: "Hard",
  inputType: "array",
  defaultInput: "10 20 30 40 50 60 70",
  description:
    "Self-balancing search tree maintaining sorted data with logarithmic amortized operations.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(log n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["b-plus-tree"] = {
  id: "b-plus-tree",
  name: "B+ Tree",
  category: "trees",
  difficulty: "Hard",
  inputType: "array",
  defaultInput: "10 20 30 40 50 60 70",
  description:
    "B-Tree variant where all keys are at leaves, linked for sequential access.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(log n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["splay-tree"] = {
  id: "splay-tree",
  name: "Splay Tree",
  category: "trees",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "50 30 70 20 40",
  description:
    "Self-adjusting BST where recently accessed elements are splayed to the root.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["treap"] = {
  id: "treap",
  name: "Treap",
  category: "trees",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "50 30 70 20 40",
  description:
    "Cartesian tree combining BST value ordering and Heap random priority ordering.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["kd-tree"] = {
  id: "kd-tree",
  name: "K-Dimensional Tree",
  category: "trees",
  difficulty: "Hard",
  inputType: "kd-tree",
  defaultInput: "3,6 17,15 13,15 6,12",
  description:
    "Space-partitioning tree for organizing points in k-dimensional space.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["quad-tree"] = {
  id: "quad-tree",
  name: "Quad Tree",
  category: "trees",
  difficulty: "Medium",
  inputType: "quad-tree",
  defaultInput: "3,6 17,15 13,15 6,12",
  description:
    "Space-partitioning tree where each node has exactly four children.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["octree"] = {
  id: "octree",
  name: "Octree",
  category: "trees",
  difficulty: "Medium",
  inputType: "octree",
  defaultInput: "10,20,30",
  description:
    "Space-partitioning tree where each node has exactly eight children.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["interval-tree"] = {
  id: "interval-tree",
  name: "Interval Tree",
  category: "trees",
  difficulty: "Medium",
  inputType: "interval-tree",
  defaultInput: "15,20 10,30 17,19 5,20",
  description:
    "BST holding intervals ordered by low endpoint, maintaining max high endpoints.",
  timeComplexity: { best: "O(log n)", average: "O(log n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["suffix-tree"] = {
  id: "suffix-tree",
  name: "Suffix Tree",
  category: "trees",
  difficulty: "Hard",
  inputType: "suffix-tree",
  defaultInput: "banana",
  description: "Compressed trie containing all suffixes of a given string.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};
ALGORITHMS["cartesian-tree"] = {
  id: "cartesian-tree",
  name: "Cartesian Tree",
  category: "trees",
  difficulty: "Medium",
  inputType: "array",
  defaultInput: "10 20 5 30 15",
  description:
    "Binary tree derived from a sequence maintaining inorder and heap properties.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
};

ALGORITHMS["hash-set"] = {
  id: "hash-set",
  name: "Hash Set",
  category: "hashing",
  difficulty: "Easy",
  inputType: "hash",
  defaultInput: "add apple add banana add apple remove apple contains banana",
  description:
    "A Hash Set stores unique elements without duplicates, utilizing separate chaining to resolve index collisions.",
  timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: [
    "Uniqueness validation",
    "Set intersection / union operations",
  ],
  advantages: ["Duplicate-free storage", "Fast query lookups"],
  disadvantages: [
    "No key-value associations",
    "Key iteration order is arbitrary",
  ],
  realWorldUses: [
    "Unique visitor logs, database constraints, dictionary checks",
  ],
  code: {
    javascript:
      "class HashSet {\n  constructor() { this.buckets = new Map(); }\n  add(key) { this.buckets.set(key, true); }\n  remove(key) { this.buckets.delete(key); }\n  has(key) { return this.buckets.has(key); }\n}",
    python:
      "class HashSet:\n    def __init__(self):\n        self.buckets = set()\n    def add(self, key):\n        self.buckets.add(key)\n    def remove(self, key):\n        self.buckets.discard(key)\n    def has(self, key):\n        return key in self.buckets",
  },
};

ALGORITHMS["longest-consecutive-sequence"] = {
  id: "longest-consecutive-sequence",
  name: "Longest Consecutive Sequence",
  category: "hashing",
  difficulty: "Easy",
  inputType: "hash",
  defaultInput: "100 4 200 1 3 2",
  description:
    "Find the length of the longest consecutive sequence in an unsorted array in linear time using a Hash Set.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Sequence tracking", "Consecutive range grouping"],
  advantages: ["Linear run time avoids O(n log n) sorting"],
  disadvantages: ["High constant factor memory overhead"],
  realWorldUses: ["Data log sequence scanners, range compressors"],
  code: {
    javascript:
      "function longestConsecutive(nums) {\n  const set = new Set(nums);\n  let longest = 0;\n  for (let num of nums) {\n    if (!set.has(num - 1)) {\n      let currNum = num, currStreak = 1;\n      while (set.has(currNum + 1)) { currNum++; currStreak++; }\n      longest = Math.max(longest, currStreak);\n    }\n  }\n  return longest;\n}",
    python:
      "def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in nums:\n        if (num - 1) not in num_set:\n            curr_num = num\n            curr_streak = 1\n            while (curr_num + 1) in num_set:\n                curr_num += 1\n                curr_streak += 1\n            longest = max(longest, curr_streak)\n    return longest",
  },
};

ALGORITHMS["bloom-filter"] = {
  id: "bloom-filter",
  name: "Bloom Filter",
  category: "hashing",
  difficulty: "Medium",
  inputType: "hash",
  defaultInput: "add apple add banana check apple check cherry",
  description:
    "A space-efficient probabilistic data structure that queries membership without false negatives (but allows false positives).",
  timeComplexity: { best: "O(k)", average: "O(k)", worst: "O(k)" },
  spaceComplexity: "O(m)",
  applications: ["Database query pre-checks", "Spam word blockers"],
  advantages: [
    "Extremely low memory footprint",
    "No storage of the actual elements",
  ],
  disadvantages: [
    "Supports membership test but not item deletion",
    "Returns false positives occasionally",
  ],
  realWorldUses: [
    "Google Bigtable query filters, Medium article read filters, spambot blockers",
  ],
  code: {
    javascript:
      "class BloomFilter {\n  constructor(size = 100) {\n    this.bits = Array(size).fill(0);\n  }\n  add(key) {\n    this.bits[this.h1(key)] = 1;\n    this.bits[this.h2(key)] = 1;\n  }\n  check(key) {\n    return this.bits[this.h1(key)] === 1 && this.bits[this.h2(key)] === 1;\n  }\n  h1(key) { return Math.abs(key.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % this.bits.length; }\n  h2(key) { return Math.abs(key.split('').reduce((a, b) => (a + b.charCodeAt(0)) * 7, 0)) % this.bits.length; }\n}",
    python:
      "class BloomFilter:\n    def __init__(self, size=100):\n        self.bits = [0] * size\n    def add(self, key):\n        self.bits[self.h1(key)] = 1\n        self.bits[self.h2(key)] = 1\n    def check(self, key):\n        return self.bits[self.h1(key)] == 1 and self.bits[self.h2(key)] == 1\n    def h1(self, key):\n        return sum(ord(c) for c in key) % len(self.bits)\n    def h2(self, key):\n        return sum(ord(c) for c in key) * 7 % len(self.bits)",
  },
};

ALGORITHMS["pair-sum"] = {
  id: "pair-sum",
  name: "Pair Sum",
  category: "hashing",
  difficulty: "Easy",
  inputType: "hash",
  defaultInput: "2 7 11 15\n9",
  description:
    "Find matching pairs in an array that sum up to a target number using a Hash Map.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Target sum finding", "Double entry balancing"],
  advantages: ["Optimal O(n) scan time"],
  disadvantages: ["Extra memory storage needed for Hash Map index registers"],
  realWorldUses: ["Targeted transaction scanners, financial audits"],
  code: {
    javascript:
      "function pairSum(arr, target) {\n  const map = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    const complement = target - arr[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(arr[i], i);\n  }\n  return null;\n}",
    python:
      "def pair_sum(arr, target):\n    seen = {}\n    for i, val in enumerate(arr):\n        complement = target - val\n        if complement in seen:\n            return [seen[complement], i]\n        seen[val] = i\n    return None",
  },
};

ALGORITHMS["recursion-factorial"] = {
  id: "recursion-factorial",
  name: "Recursion Factorial",
  category: "recursion",
  difficulty: "Easy",
  inputType: "recursion",
  defaultInput: "4",
  description:
    "Computes the factorial of a number using direct linear recursion recursion steps.",
  timeComplexity: { best: "O(n)", average: "O(n)", worst: "O(n)" },
  spaceComplexity: "O(n)",
  applications: ["Combinatorics calculations", "Functional stack training"],
  advantages: ["Simple linear recursive recurrence relation"],
  disadvantages: ["Prone to stack overflow for large values of n"],
  realWorldUses: ["Permutations and combinations calculators"],
  code: {
    javascript:
      "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    python:
      "def factorial(n: int) -> int:\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)",
  },
};

ALGORITHMS["letter-combinations"] = {
  id: "letter-combinations",
  name: "Letter Combinations",
  category: "backtracking",
  difficulty: "Medium",
  inputType: "recursion",
  defaultInput: "23",
  description:
    "Generate all possible letter combinations that a digit string from 2-9 could represent using a phone keypad mapping.",
  timeComplexity: { best: "O(4^n)", average: "O(4^n)", worst: "O(4^n)" },
  spaceComplexity: "O(n)",
  applications: ["T9 predictive text parsing", "Keypad combinations matching"],
  advantages: ["Explores all mapped paths systematically"],
  disadvantages: ["Exponential growth with longer digit inputs"],
  realWorldUses: ["Predictive keypad typing, contact search helpers"],
  code: {
    javascript:
      "function letterCombinations(digits) {\n  if (!digits) return [];\n  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };\n  const res = [];\n  function backtrack(idx, str) {\n    if (idx === digits.length) { res.push(str); return; }\n    for (let char of map[digits[idx]]) backtrack(idx + 1, str + char);\n  }\n  backtrack(0, '');\n  return res;\n}",
    python:
      "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    phone = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits):\n            res.append(path)\n            return\n        for char in phone[digits[idx]]:\n            backtrack(idx + 1, path + char)\n    backtrack(0, '')\n    return res",
  },
};

ALGORITHMS["palindrome-partitioning"] = {
  id: "palindrome-partitioning",
  name: "Palindrome Partitioning",
  category: "backtracking",
  difficulty: "Medium",
  inputType: "recursion",
  defaultInput: "aab",
  description:
    "Partitions a string such that every substring of the partition is a palindrome, using recursive DFS backtracking.",
  timeComplexity: {
    best: "O(n * 2^n)",
    average: "O(n * 2^n)",
    worst: "O(n * 2^n)",
  },
  spaceComplexity: "O(n)",
  applications: ["Sub-palindrome searching", "Lexical parsing segments"],
  advantages: ["Explores all valid configurations systematically"],
  disadvantages: ["Exponential search space bounds"],
  realWorldUses: ["Gene sequence splicing analysis, textual pattern matchers"],
  code: {
    javascript:
      "function partition(s) {\n  const res = [];\n  const isPal = (str, l, r) => {\n    while (l < r) if (str[l++] !== str[r--]) return false;\n    return true;\n  };\n  function backtrack(start, path) {\n    if (start === s.length) { res.push([...path]); return; }\n    for (let i = start; i < s.length; i++) {\n      if (isPal(s, start, i)) {\n        path.push(s.slice(start, i + 1));\n        backtrack(i + 1, path);\n        path.pop();\n      }\n    }\n  }\n  backtrack(0, []);\n  return res;\n}",
    python:
      "def partition(s: str) -> list[list[str]]:\n    res = []\n    def isPal(sub):\n        return sub == sub[::-1]\n    def backtrack(start, path):\n        if start == len(s):\n            res.append(list(path))\n            return\n        for i in range(start, len(s)):\n            if isPal(s[start:i+1]):\n                path.append(s[start:i+1])\n                backtrack(i + 1, path)\n                path.pop()\n    backtrack(0, [])\n    return res",
  },
};

ALGORITHMS["permutations"] = {
  id: "permutations",
  name: "Permutations",
  category: "backtracking",
  difficulty: "Medium",
  inputType: "recursion",
  defaultInput: "1 2 3",
  description:
    "Generates all possible permutations of a set of distinct elements using element swapping/backtracking recursively.",
  timeComplexity: {
    best: "O(n * n!)",
    average: "O(n * n!)",
    worst: "O(n * n!)",
  },
  spaceComplexity: "O(n)",
  applications: ["Combinatorics testing", "Route scheduling configurations"],
  advantages: ["Ensures every combination is traversed uniquely"],
  disadvantages: [
    "Growth is factorial, rendering it slow for sets over 10 items",
  ],
  realWorldUses: ["Password crackers, permutation index search tools"],
  code: {
    javascript:
      "function permute(nums) {\n  const res = [];\n  function backtrack(curr, rem) {\n    if (rem.length === 0) { res.push([...curr]); return; }\n    for (let i = 0; i < rem.length; i++) {\n      curr.push(rem[i]);\n      backtrack(curr, rem.filter((_, idx) => idx !== i));\n      curr.pop();\n    }\n  }\n  backtrack([], nums);\n  return res;\n}",
    python:
      "def permute(nums: list[int]) -> list[list[int]]:\n    res = []\n    def backtrack(curr, rem):\n        if not rem:\n            res.append(list(curr))\n            return\n        for i in range(len(rem)):\n            curr.append(rem[i])\n            backtrack(curr, rem[:i] + rem[i+1:])\n            curr.pop()\n    backtrack([], nums)\n    return res",
  },
};

ALGORITHMS["crossword-solver"] = {
  id: "crossword-solver",
  name: "Crossword Solver",
  category: "backtracking",
  difficulty: "Hard",
  inputType: "grid",
  defaultInput: "CAT DOG",
  description:
    "Fills empty word slots in a crossword puzzle grid intersecting valid words from a provided dictionary bank.",
  timeComplexity: { best: "O(V^W)", average: "O(V^W)", worst: "O(V^W)" },
  spaceComplexity: "O(R * C)",
  applications: ["Crossword grid populating", "Semantic constraint satisfying"],
  advantages: ["Finds consistent character overlaps reliably"],
  disadvantages: ["Large dictionary sizes lead to high branch factors"],
  realWorldUses: ["Puzzle game generator backends, NLP word map fits"],
  code: {
    javascript:
      "function solveCrossword(board, words) {\n  // Backtracking word placing algorithm logic\n  function canPlace(word, r, c, dir) { /* check boundary & intersections */ }\n  function place(word, r, c, dir) { /* write chars */ }\n  function backtrack(wIdx) {\n    if (wIdx === words.length) return true;\n    // Try placing words in board slots...\n  }\n  backtrack(0);\n}",
    python:
      "def solveCrossword(board, words):\n    # Backtracking puzzle solver logic\n    def can_place(word, r, c, d): pass\n    def place(word, r, c, d): pass\n    def backtrack(w_idx):\n        if w_idx == len(words): return True\n        # Loop candidates...\n    backtrack(0)",
  },
};

ALGORITHMS["branch-and-bound-concept"] = {
  id: "branch-and-bound-concept",
  name: "Branch and Bound Concept",
  category: "backtracking",
  difficulty: "Hard",
  inputType: "recursion",
  defaultInput: "4",
  description:
    "Solves optimization problems like TSP or Knapsack by dividing search space and pruning nodes whose lower bounds exceed the best solution cost.",
  timeComplexity: { best: "O(2^n)", average: "O(2^n)", worst: "O(2^n)" },
  spaceComplexity: "O(2^n)",
  applications: [
    "Traveling Salesperson Problem",
    "Integer Linear Programming solver",
  ],
  advantages: ["Prunes subtrees early to avoid full search space exploration"],
  disadvantages: ["Computing tight lower bounds at each node can be expensive"],
  realWorldUses: ["Route optimizer servers, asset portfolio schedulers"],
  code: {
    javascript:
      "function branchAndBoundTSP(matrix) {\n  let minCost = Infinity;\n  function solve(path, cost, bound, visited) {\n    if (cost + bound >= minCost) return; // Pruning condition\n    if (path.length === matrix.length) { minCost = Math.min(minCost, cost); return; }\n    // Recurse next cities...\n  }\n  solve([0], 0, computeInitialBound(), new Set([0]));\n}",
    python:
      "def tsp_branch_and_bound(matrix):\n    min_cost = float('inf')\n    def solve(path, cost, bound, visited):\n        nonlocal min_cost\n        if cost + bound >= min_cost: return  # Pruning\n        if len(path) == len(matrix):\n            min_cost = min(min_cost, cost)\n            return\n        # Recurse...\n    solve([0], 0, compute_initial_bound(), {0})",
  },
};
