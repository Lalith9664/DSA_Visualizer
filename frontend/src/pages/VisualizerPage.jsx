import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useVisualizer } from "../context/VisualizerContext";
import { ALGORITHMS, CATEGORIES } from "../data/algorithmsData";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import VisualizerCanvas from "../components/visualizer/VisualizerCanvas";
import ControlPanel from "../components/visualizer/ControlPanel";
import StatsPanel from "../components/visualizer/StatsPanel";
import CodePanel from "../components/visualizer/CodePanel";
import ExplanationPanel from "../components/visualizer/ExplanationPanel";
import ComplexityPanel from "../components/visualizer/ComplexityPanel";

// Step Frame Generators
import {
  bubbleSortSteps,
  selectionSortSteps,
  insertionSortSteps,
  mergeSortSteps,
  quickSortSteps,
  linearSearchSteps,
  binarySearchSteps,
  kadaneSteps,
  reverseListSteps,
  balancedParenthesesSteps,
  queueOperationsSteps,
  bstTraversalSteps,
  dijkstraSteps,
  towerOfHanoiSteps,
  climbingStairsSteps,
  twoSumHashSteps,
  bfsSteps,
  dfsSteps,
  bstSearchSteps,
  treeHeightSteps,
  lcaSteps,
  heapSortSteps,
  minHeapSteps,
  maxHeapSteps,
  prefixSumSteps,
  slidingWindowSteps,
  twoPointerSteps,
  rotateArraySteps,
  mergeArraysSteps,
  frequencyCountSteps,
  linkedListTraversalSteps,
  cycleDetectionSteps,
  middleNodeSteps,
  stackOperationsSteps,
  nextGreaterElementSteps,
  circularQueueSteps,
  slidingWindowMaxSteps,
  topologicalSortSteps,
  hashMapSteps,
  groupAnagramsSteps,
  fibonacciRecursionSteps,
  nQueensSteps,
  knapsackDpSteps,
  coinChangeDpSteps,
  ternarySearchSteps,
  ratInAMazeSteps,
  sudokuSolverSteps,
  kmpSearchSteps,
  longestCommonPrefixSteps,
  activitySelectionSteps,
  fractionalKnapsackSteps,
  singleNumberSteps,
  powerOfTwoSteps,
  gcdSteps,
  sieveSteps,
  removeDuplicatesSteps,
  equilibriumIndexSteps,
  dsuCycleSteps,
  segmentTreeSteps,
  trieSteps,
  rabinKarpSteps,
  reverseArraySteps,
  palindromeCheckSteps,
  reverseStringSteps,
  mergeSortedListsSteps,
  minStackSteps,
  levelOrderTraversalSteps,
  bellmanFordSteps,
  wordSearchSteps,
  generateParenthesesSteps,
  lcsDpSteps,
  countingSortSteps,
  radixSortSteps,
  countSetBitsSteps,
  xorOperationsSteps,
  fastExponentiationSteps,
  pascalTriangleSteps,
  trappingRainWaterSteps,
  floydWarshallSteps,
  twoSumTwoPointerSteps,
  bstInsertSteps,
  bstDeleteSteps,
  avlInsertSteps,
  avlDeleteSteps,
  btInsertSteps,
  btDeleteSteps,
  rbtInsertSteps,
} from "../algorithms/stepGenerators";

import {
  ArrowLeft,
  Heart,
  RefreshCw,
  ShieldCheck,
  ClipboardList,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
} from "lucide-react";

// Configuration map for algorithms that need a second input field.
// Each entry defines the placeholder text, default value, and random value generator.
const SECOND_INPUT_CONFIG = {
  "linear-search": {
    label: "Target",
    defaultVal: "5",
    randomVal: (arr) =>
      arr[Math.floor(Math.random() * arr.length)]?.toString() || "5",
  },
  "binary-search": {
    label: "Target",
    defaultVal: "5",
    randomVal: (arr) =>
      arr[Math.floor(Math.random() * arr.length)]?.toString() || "5",
  },
  "ternary-search": {
    label: "Target",
    defaultVal: "5",
    randomVal: (arr) =>
      arr[Math.floor(Math.random() * arr.length)]?.toString() || "5",
  },
  "two-pointer": {
    label: "Target Sum",
    defaultVal: "10",
    randomVal: (arr) => {
      const a = arr[0] || 1;
      const b = arr[arr.length - 1] || 5;
      return (a + b).toString();
    },
  },
  "two-sum": { label: "Target", defaultVal: "9", randomVal: () => "9" },
  "bst-search": {
    label: "Target",
    defaultVal: "10",
    randomVal: (arr) =>
      arr[Math.floor(Math.random() * arr.length)]?.toString() || "10",
  },
  "rotate-array": {
    label: "Positions (k)",
    defaultVal: "2",
    randomVal: (arr) =>
      (Math.floor(Math.random() * (arr.length - 1)) + 1).toString(),
  },
  "sliding-window": {
    label: "Window Size",
    defaultVal: "3",
    randomVal: (arr) =>
      Math.min(Math.floor(Math.random() * 3) + 2, arr.length).toString(),
  },
  "sliding-window-max": {
    label: "Window Size (k)",
    defaultVal: "3",
    randomVal: (arr) =>
      Math.min(Math.floor(Math.random() * 3) + 2, arr.length).toString(),
  },
  lca: {
    label: "Nodes (p q)",
    defaultVal: "3 18",
    randomVal: (arr) => {
      const p = arr[1] || arr[0];
      const q = arr[arr.length - 1] || arr[0];
      return `${p} ${q}`;
    },
  },
  "coin-change-dp": {
    label: "Amount",
    defaultVal: "11",
    randomVal: () => (Math.floor(Math.random() * 10) + 5).toString(),
  },
  "knapsack-dp": {
    label: "Capacity",
    defaultVal: "5",
    randomVal: () => (Math.floor(Math.random() * 6) + 4).toString(),
  },
  "kmp-search": {
    label: "Pattern",
    defaultVal: "AABA",
    randomVal: () => {
      const patterns = ["AABA", "ABAB", "ABA", "ABC", "BABA"];
      return patterns[Math.floor(Math.random() * patterns.length)];
    },
  },
  "fractional-knapsack": {
    label: "Capacity",
    defaultVal: "50",
    randomVal: () => (Math.floor(Math.random() * 40) + 30).toString(),
  },
  "rabin-karp": {
    label: "Pattern",
    defaultVal: "AABA",
    randomVal: () => {
      const patterns = ["AABA", "ABAB", "ABA", "ABC", "BABA"];
      return patterns[Math.floor(Math.random() * patterns.length)];
    },
  },
  "two-sum-two-pointer": {
    label: "Target Sum",
    defaultVal: "10",
    randomVal: (arr) => {
      const a = arr[0] || 1;
      const b = arr[arr.length - 1] || 9;
      return (a + b).toString();
    },
  },
  "fast-exponentiation": {
    label: "Exponent",
    defaultVal: "10",
    randomVal: () => (Math.floor(Math.random() * 8) + 3).toString(),
  },
  "bst-insert": {
    label: "Insert Value",
    defaultVal: "45",
    randomVal: (arr) => (Math.floor(Math.random() * 30) + arr.length + 5).toString(),
  },
  "bst-delete": {
    label: "Delete Value",
    defaultVal: "30",
    randomVal: (arr) => arr[Math.floor(Math.random() * arr.length)]?.toString() || "30",
  },
  "avl-insert": {
    label: "Insert Value",
    defaultVal: "45",
    randomVal: (arr) => (Math.floor(Math.random() * 20) + arr.length + 5).toString(),
  },
  "avl-delete": {
    label: "Delete Value",
    defaultVal: "30",
    randomVal: (arr) => arr[Math.floor(Math.random() * arr.length)]?.toString() || "30",
  },
  "bt-insert": {
    label: "Insert Value",
    defaultVal: "7",
    randomVal: (arr) => (Math.max(...arr) + Math.floor(Math.random() * 5) + 1).toString(),
  },
  "bt-delete": {
    label: "Delete Value",
    defaultVal: "3",
    randomVal: (arr) => arr[Math.floor(Math.random() * arr.length)]?.toString() || "3",
  },
  "merge-sorted-lists": {
    label: "Second List",
    defaultVal: "2 4 6 8",
    randomVal: () => {
      const len = Math.floor(Math.random() * 3) + 3;
      const arr = Array.from({length: len}, (_, i) => (i + 1) * 2 + Math.floor(Math.random() * 2));
      return arr.sort((a,b)=>a-b).join(" ");
    },
  },
  "lcs-dp": {
    label: "Second String",
    defaultVal: "BDCAB",
    randomVal: () => {
      const words = ["BDCAB", "AGGTAB", "GXTXAYB", "MZJAWXU", "XMJYAUZ"];
      return words[Math.floor(Math.random() * words.length)];
    },
  },
  "word-search": {
    label: "Word to Find",
    defaultVal: "ABCCED",
    randomVal: () => {
      const words = ["ABCCED", "SEE", "ABCB", "BFJ"];
      return words[Math.floor(Math.random() * words.length)];
    },
  },
  "bellman-ford": {
    label: "Source Vertex",
    defaultVal: "0",
    randomVal: (arr, V) => "0",
  },
  "floyd-warshall": {
    label: "INF Value",
    defaultVal: "9999",
    randomVal: () => "9999",
  },
};

const VisualizerPage = () => {
  const { algoId } = useParams();
  const navigate = useNavigate();

  const {
    currentStep,
    steps,
    setSteps,
    setCurrentAlgoId,
    customInput,
    setCustomInput,
    favorites,
    toggleFavorite,
    addToRecent,
    resetVisualizer,
  } = useVisualizer();

  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'details', 'applications'
  const [targetInput, setTargetInput] = useState("");

  // Find matched category dynamically
  const matchedCategory = CATEGORIES.find((cat) =>
    cat.algorithms.includes(algoId),
  );
  const categoryId = matchedCategory ? matchedCategory.id : "general";

  let inputType = "array";
  let defaultInput = "5 3 8 1 9";
  if (categoryId === "trees") {
    inputType = "tree";
    defaultInput = "10 5 15 3 7 12 18";
  } else if (categoryId === "graphs") {
    inputType = "graph";
    defaultInput = "0 1 4\n0 2 1\n2 1 2\n1 3 5";
  } else if (categoryId === "hashing") {
    inputType = "hash";
    defaultInput = "2 7 11 15\nTarget = 9";
  } else if (categoryId === "heaps") {
    inputType = "heap";
    defaultInput = "10 20 15 30 40";
  } else if (categoryId === "linked-list") {
    inputType = "linked-list";
    defaultInput = "10 20 30 40";
  } else if (categoryId === "stack") {
    inputType = "stack";
    defaultInput = "{ [ ( ) ] }";
  } else if (categoryId === "queue") {
    inputType = "queue";
    defaultInput = "12 45 67 89";
  } else if (categoryId === "recursion") {
    inputType = "recursion";
    defaultInput = "3";
  } else if (categoryId === "dynamic-programming") {
    inputType = "dp";
    defaultInput = "5";
  } else if (categoryId === "searching") {
    inputType = "search";
    defaultInput = "1 3 5 7 9\nTarget = 5";
  }

  // Retrieve algorithm metadata (or fallback)
  const algo = ALGORITHMS[algoId] || {
    id: algoId,
    name: algoId
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    category: categoryId,
    difficulty: "Medium",
    description: `Dynamic visualization deck compiling steps for ${algoId.replace("-", " ")}.`,
    timeComplexity: { best: "O(n)", average: "O(n log n)", worst: "O(n²)" },
    spaceComplexity: "O(n)",
    inputType,
    defaultInput,
    applications: ["Data parsing and indexing", "General flow testing"],
    advantages: ["Simple tracking", "Low computational footprint"],
    disadvantages: ["High execution overhead on skew arrays"],
    realWorldUses: ["Legacy microcontrollers sorting networks"],
  };

  const isFavorited = favorites.includes(algoId);

  const secondInputConfig = SECOND_INPUT_CONFIG[algoId] || null;

  // Parse and generate steps based on input text and target value
  const generateSteps = (inputText, targetValText) => {
    const rawInput = inputText || customInput || algo.defaultInput;
    const rawTarget = targetValText !== undefined ? targetValText : targetInput;
    let computedSteps = [];

    // Parse target value cleanly
    let target = 5;
    let parsedInput = rawInput;

    if (rawInput.includes("\n")) {
      const lines = rawInput.split("\n");
      parsedInput = lines[0];
      if (lines[1] && lines[1].toLowerCase().includes("target")) {
        target = parseInt(lines[1].replace(/[^0-9-]/g, "")) || 5;
      } else if (lines[1]) {
        target = parseInt(lines[1].trim()) || 5;
      }
    }

    if (rawTarget !== "") {
      target = parseInt(rawTarget) || 5;
    }

    try {
      if (algo.inputType === "array") {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        if (arr.length === 0) throw new Error("Empty array inputs");

        switch (algo.id) {
          case "bubble-sort":
            computedSteps = bubbleSortSteps(arr);
            break;
          case "selection-sort":
            computedSteps = selectionSortSteps(arr);
            break;
          case "insertion-sort":
            computedSteps = insertionSortSteps(arr);
            break;
          case "merge-sort":
            computedSteps = mergeSortSteps(arr);
            break;
          case "quick-sort":
            computedSteps = quickSortSteps(arr);
            break;
          case "kadane":
            computedSteps = kadaneSteps(arr);
            break;
          case "prefix-sum":
            computedSteps = prefixSumSteps(arr);
            break;
          case "sliding-window":
            computedSteps = slidingWindowSteps(arr, target || 3);
            break;
          case "two-pointer":
            computedSteps = twoPointerSteps(arr, target);
            break;
          case "rotate-array":
            computedSteps = rotateArraySteps(arr, target || 2);
            break;
          case "merge-arrays":
            computedSteps = mergeArraysSteps(rawInput);
            break;
          case "frequency-count":
            computedSteps = frequencyCountSteps(arr);
            break;
          case "single-number":
            computedSteps = singleNumberSteps(arr);
            break;
          case "remove-duplicates":
            computedSteps = removeDuplicatesSteps(arr);
            break;
          case "equilibrium-index":
            computedSteps = equilibriumIndexSteps(arr);
            break;
          case "segment-tree":
            computedSteps = segmentTreeSteps(arr);
            break;
          case "reverse-array":
            computedSteps = reverseArraySteps(arr);
            break;
          case "counting-sort":
            computedSteps = countingSortSteps(arr);
            break;
          case "radix-sort":
            computedSteps = radixSortSteps(arr);
            break;
          case "trapping-rain-water":
            computedSteps = trappingRainWaterSteps(arr);
            break;
          case "xor-operations":
            computedSteps = xorOperationsSteps(arr);
            break;
          case "two-sum-two-pointer":
            computedSteps = twoSumTwoPointerSteps(arr, target);
            break;
          default:
            computedSteps = bubbleSortSteps(arr);
        }
      } else if (algo.inputType === "search") {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        if (arr.length === 0) throw new Error("Empty search space");

        if (algo.id === "binary-search") {
          computedSteps = binarySearchSteps(arr, target);
        } else if (algo.id === "ternary-search") {
          computedSteps = ternarySearchSteps(arr, target);
        } else {
          computedSteps = linearSearchSteps(arr, target);
        }
      } else if (algo.inputType === "linked-list") {
        if (algo.id === "merge-sorted-lists") {
          // l1 = main input, l2 = second input field (rawTarget)
          const l1 = parsedInput.split(/\s+/).map(Number).filter((x) => !isNaN(x));
          const l2 = rawTarget
            ? rawTarget.split(/\s+/).map(Number).filter((x) => !isNaN(x))
            : (rawInput.split("\n")[1] || "").split(/\s+/).map(Number).filter((x) => !isNaN(x));
          computedSteps = mergeSortedListsSteps(
            l1.length ? l1 : [1,3,5],
            l2.length ? l2 : [2,4,6]
          );
        } else {
          const arr = parsedInput
            .split(/\s+/)
            .map(Number)
            .filter((x) => !isNaN(x));
          if (algo.id === "linked-list-traversal") {
            computedSteps = linkedListTraversalSteps(arr);
          } else if (algo.id === "cycle-detection") {
            computedSteps = cycleDetectionSteps(arr);
          } else if (algo.id === "middle-node") {
            computedSteps = middleNodeSteps(arr);
          } else {
            computedSteps = reverseListSteps(arr);
          }
        }
      } else if (algo.inputType === "stack") {
        if (algo.id === "stack-operations") {
          computedSteps = stackOperationsSteps(rawInput);
        } else if (algo.id === "next-greater-element") {
          const arr = parsedInput
            .split(/\s+/)
            .map(Number)
            .filter((x) => !isNaN(x));
          computedSteps = nextGreaterElementSteps(arr);
        } else if (algo.id === "min-stack") {
          // Parse operations like "push 5 push 3 pop getMin"
          const ops = rawInput.trim().split(/\s+(?=push|pop|getMin)/i).filter(Boolean);
          computedSteps = minStackSteps(ops.length ? ops : ["push 5","push 3","push 7","push 1","getMin","pop","getMin"]);
        } else {
          computedSteps = balancedParenthesesSteps(rawInput);
        }
      } else if (algo.inputType === "queue") {
        if (algo.id === "circular-queue") {
          computedSteps = circularQueueSteps(rawInput);
        } else if (algo.id === "sliding-window-max") {
          const arr = parsedInput
            .split(/\s+/)
            .map(Number)
            .filter((x) => !isNaN(x));
          computedSteps = slidingWindowMaxSteps(arr, target || 3);
        } else {
          computedSteps = queueOperationsSteps(rawInput);
        }
      } else if (algo.inputType === "tree") {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        const treeTarget = rawTarget ? parseInt(rawTarget) : undefined;
        if (algo.id === "bst-search") {
          computedSteps = bstSearchSteps(arr, target);
        } else if (algo.id === "tree-height") {
          computedSteps = treeHeightSteps(arr);
        } else if (algo.id === "lca") {
          const lcaInput = rawTarget
            ? parsedInput + "\n" + rawTarget
            : rawInput;
          computedSteps = lcaSteps(arr, lcaInput);
        } else if (algo.id === "level-order-traversal") {
          computedSteps = levelOrderTraversalSteps(arr);
        } else if (algo.id === "bst-insert") {
          computedSteps = bstInsertSteps(arr, treeTarget);
        } else if (algo.id === "bst-delete") {
          computedSteps = bstDeleteSteps(arr, treeTarget);
        } else if (algo.id === "avl-insert") {
          computedSteps = avlInsertSteps(arr, treeTarget);
        } else if (algo.id === "avl-delete") {
          computedSteps = avlDeleteSteps(arr, treeTarget);
        } else if (algo.id === "bt-insert") {
          computedSteps = btInsertSteps(arr, treeTarget);
        } else if (algo.id === "bt-delete") {
          computedSteps = btDeleteSteps(arr, treeTarget);
        } else if (algo.id === "rbt-insert") {
          computedSteps = rbtInsertSteps(arr);
        } else {
          computedSteps = bstTraversalSteps(arr, "inorder");
        }

      } else if (algo.inputType === "graph") {
        if (algo.id === "bfs") {
          computedSteps = bfsSteps(rawInput);
        } else if (algo.id === "dfs") {
          computedSteps = dfsSteps(rawInput);
        } else if (algo.id === "topological-sort") {
          computedSteps = topologicalSortSteps(rawInput);
        } else if (algo.id === "union-find-cycle") {
          computedSteps = dsuCycleSteps(rawInput);
        } else if (algo.id === "bellman-ford") {
          // Main input: edges as "u v w" lines. rawTarget = source vertex
          const lines = rawInput.trim().split("\n");
          const src = parseInt(rawTarget) || 0;
          // Count distinct vertices from edges
          const edges = lines.map(l => l.split(/\s+/).map(Number)).filter(e => e.length >= 3);
          const maxV = edges.reduce((m, e) => Math.max(m, e[0], e[1]), src) + 1;
          const V = Math.max(maxV, src + 1, 3);
          computedSteps = bellmanFordSteps(V, edges.length ? edges : [[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[3,2,5]]);
        } else if (algo.id === "floyd-warshall") {
          // Parse INF matrix from lines
          const lines = rawInput.trim().split("\n");
          const matrix = lines.map(l => l.split(/\s+/).map(v => v === 'INF' ? 9999 : Number(v)));
          computedSteps = floydWarshallSteps(matrix);
        } else {
          computedSteps = dijkstraSteps(rawInput);
        }
      } else if (algo.inputType === "heap") {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        if (algo.id === "min-heap") {
          computedSteps = minHeapSteps(arr);
        } else if (algo.id === "max-heap") {
          computedSteps = maxHeapSteps(arr);
        } else {
          computedSteps = heapSortSteps(arr);
        }
      } else if (algo.inputType === "recursion") {
        if (algo.id === "fibonacci-recursion") {
          computedSteps = fibonacciRecursionSteps(rawInput);
        } else if (algo.id === "n-queens") {
          computedSteps = nQueensSteps(rawInput);
        } else if (algo.id === "generate-parentheses") {
          computedSteps = generateParenthesesSteps(parseInt(rawInput) || 3);
        } else {
          const disks = parseInt(rawInput) || 3;
          computedSteps = towerOfHanoiSteps(disks);
        }
      } else if (algo.inputType === "dp") {
        if (algo.id === "knapsack-dp") {
          const knapsackInput = rawTarget
            ? rawInput + "\n" + rawTarget
            : rawInput;
          computedSteps = knapsackDpSteps(knapsackInput);
        } else if (algo.id === "coin-change-dp") {
          const coinInput = rawTarget
            ? parsedInput + "\n" + rawTarget
            : rawInput;
          computedSteps = coinChangeDpSteps(coinInput);
        } else if (algo.id === "lcs-dp") {
          // s1 = main input, s2 = rawTarget from second input field
          const s1 = parsedInput.trim() || "ABCBDAB";
          const s2 = rawTarget ? rawTarget.trim() : (rawInput.split("\n")[1] || "BDCAB").trim();
          computedSteps = lcsDpSteps(s1, s2);
        } else {
          const stairs = parseInt(rawInput) || 5;
          computedSteps = climbingStairsSteps(stairs);
        }
      } else if (algo.inputType === "hash") {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        if (algo.id === "hash-map") {
          computedSteps = hashMapSteps(arr);
        } else if (algo.id === "group-anagrams") {
          computedSteps = groupAnagramsSteps(rawInput);
        } else {
          computedSteps = twoSumHashSteps(arr, target);
        }
      } else if (algo.inputType === "grid") {
        if (algo.id === "rat-in-a-maze") {
          computedSteps = ratInAMazeSteps(rawInput);
        } else {
          computedSteps = sudokuSolverSteps(rawInput);
        }
      } else if (algo.inputType === "greedy-interval") {
        computedSteps = activitySelectionSteps(rawInput);
      } else if (algo.inputType === "greedy-ratio") {
        const combined = rawTarget ? rawInput + "\n" + rawTarget : rawInput;
        computedSteps = fractionalKnapsackSteps(combined);
      } else if (algo.inputType === "bit-value") {
        if (algo.id === "count-set-bits") {
          computedSteps = countSetBitsSteps(parseInt(rawInput) || 13);
        } else {
          computedSteps = powerOfTwoSteps(rawInput);
        }
      } else if (algo.inputType === "math-gcd") {
        if (algo.id === "fast-exponentiation") {
          const parts = rawInput.trim().split(/\s+/);
          const base = parseInt(parts[0]) || 2;
          const exp = parseInt(parts[1] || rawTarget) || 10;
          computedSteps = fastExponentiationSteps(base, exp);
        } else {
          computedSteps = gcdSteps(rawInput);
        }
      } else if (algo.inputType === "math-sieve") {
        if (algo.id === "pascal-triangle") {
          computedSteps = pascalTriangleSteps(parseInt(rawInput) || 6);
        } else {
          computedSteps = sieveSteps(rawInput);
        }
      } else if (algo.inputType === "strings") {
        computedSteps = trieSteps(rawInput);
      } else if (algo.inputType === "strings-list") {
        if (algo.id === "palindrome-check") {
          computedSteps = palindromeCheckSteps(rawInput.trim().split(/\s+/)[0] || "racecar");
        } else if (algo.id === "reverse-string") {
          computedSteps = reverseStringSteps(rawInput.trim());
        } else {
          computedSteps = longestCommonPrefixSteps(rawInput);
        }
      } else if (algo.inputType === "string-pattern") {
        const combined = rawTarget ? rawInput + "\n" + rawTarget : rawInput;
        if (algo.id === "rabin-karp") {
          computedSteps = rabinKarpSteps(combined);
        } else {
          computedSteps = kmpSearchSteps(combined);
        }
      } else if (algo.inputType === "word-search-grid") {
        // Grid in main input. Word to find in rawTarget (second input field)
        const lines = rawInput.trim().split("\n");
        const word = rawTarget ? rawTarget.trim() : (lines[lines.length - 1].trim());
        const gridLines = rawTarget ? lines : lines.slice(0, -1);
        const grid = gridLines.map(row => row.trim().split("").filter(c => /[A-Z]/i.test(c))).filter(r => r.length > 0);
        if (grid.length > 0 && grid[0].length > 0) {
          computedSteps = wordSearchSteps(grid, word || "ABCCED");
        } else {
          const defaultGrid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
          computedSteps = wordSearchSteps(defaultGrid, word || "ABCCED");
        }
      } else {
        const arr = parsedInput
          .split(/\s+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        computedSteps = bubbleSortSteps(arr);
      }
    } catch (err) {
      console.error(err);
      computedSteps = [
        {
          data: [1, 2, 3],
          highlights: {},
          explanation: `Input parse error: ${err.message}. Check your format configurations.`,
          stats: { comparisons: 0, swaps: 0, step: 0 },
        },
      ];
    }

    setSteps(computedSteps);
    resetVisualizer();
  };

  useEffect(() => {
    setCurrentAlgoId(algoId);
    addToRecent(algoId);

    let initialInput = algo.defaultInput;
    let initialTarget = "";

    if (secondInputConfig) {
      // For algorithms with multiline default inputs, split into main input and second param
      const lines = initialInput.split("\n");
      initialInput = lines[0];
      if (lines[1]) {
        initialTarget = lines[1].replace(/Target\s*=\s*/i, "").trim();
      } else {
        initialTarget = secondInputConfig.defaultVal;
      }
    }

    setCustomInput(initialInput);
    setTargetInput(initialTarget);
    generateSteps(initialInput, initialTarget);
  }, [algoId]);

  const handleApplyCustomInput = () => {
    generateSteps(customInput, targetInput);
  };

  const handleRandomInput = () => {
    let randStr = "";
    let randTarget = "";

    if (
      algo.inputType === "array" ||
      algo.inputType === "heap"
    ) {
      const arr = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 20) + 1,
      );
      randStr = arr.join(" ");
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal(arr);
      }
    } else if (algo.inputType === "linked-list") {
      if (algo.id === "merge-sorted-lists") {
        // Main: random sorted list 1. Second input: random sorted list 2
        const l1 = Array.from({length: 4}, () => Math.floor(Math.random()*10)+1).sort((a,b)=>a-b);
        const l2 = Array.from({length: 4}, () => Math.floor(Math.random()*10)+1).sort((a,b)=>a-b);
        randStr = l1.join(" ");
        randTarget = l2.join(" ");
      } else {
        const arr = Array.from({length: 6}, () => Math.floor(Math.random()*20)+1);
        randStr = arr.join(" ");
        if (secondInputConfig) randTarget = secondInputConfig.randomVal(arr);
      }
    } else if (algo.inputType === "tree") {
      const arr = Array.from({length: 7}, () => Math.floor(Math.random()*20)+1);
      randStr = arr.join(" ");
      if (secondInputConfig) randTarget = secondInputConfig.randomVal(arr);
    } else if (algo.inputType === "search") {
      const arr = Array.from(
        { length: 7 },
        () => Math.floor(Math.random() * 20) + 1,
      ).sort((a, b) => a - b);
      randStr = arr.join(" ");
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal(arr);
      }
    } else if (algo.inputType === "stack") {
      const chars = ["{ [ ( ) ] }", "( ( ) )", "[ ( ] )", "{ } [ ] ( )"];
      randStr = chars[Math.floor(Math.random() * chars.length)];
    } else if (algo.inputType === "queue") {
      const arr = Array.from(
        { length: 4 },
        () => Math.floor(Math.random() * 90) + 10,
      );
      randStr = arr.join(" ");
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal(arr);
      }
    } else if (algo.inputType === "graph") {
      if (algo.id === "bellman-ford") {
        const edgeSets = [
          "0 1 -1\n0 2 4\n1 2 3\n1 3 2\n1 4 2\n3 2 5\n3 1 1\n4 3 -3",
          "0 1 5\n0 2 2\n1 3 4\n2 1 -3\n2 3 6\n3 4 1",
          "0 1 1\n1 2 -2\n2 3 3\n0 3 8"
        ];
        randStr = edgeSets[Math.floor(Math.random() * edgeSets.length)];
        randTarget = "0";
      } else if (algo.id === "floyd-warshall") {
        const matrices = [
          "0 3 INF 7\n8 0 2 INF\n5 INF 0 1\n2 INF INF 0",
          "0 5 INF 10\nINF 0 3 INF\nINF INF 0 1\nINF INF INF 0"
        ];
        randStr = matrices[Math.floor(Math.random() * matrices.length)];
        randTarget = "9999";
      } else {
        randStr = "0 1 3\n0 2 6\n1 2 2\n1 3 1\n2 3 5";
      }
    } else if (algo.inputType === "recursion") {
      randStr = (Math.floor(Math.random() * 2) + 3).toString();
    } else if (algo.inputType === "dp") {
      if (algo.id === "knapsack-dp") {
        const weights = Array.from({length: 4}, () => Math.floor(Math.random() * 5) + 1);
        const values = Array.from({length: 4}, () => Math.floor(Math.random() * 8) + 2);
        randStr = weights.join(" ") + "\n" + values.join(" ");
        if (secondInputConfig) randTarget = secondInputConfig.randomVal([]);
      } else if (algo.id === "coin-change-dp") {
        const coinSets = [[1, 2, 5], [1, 3, 4], [1, 5, 10], [2, 3, 7]];
        randStr = coinSets[Math.floor(Math.random() * coinSets.length)].join(" ");
        if (secondInputConfig) randTarget = secondInputConfig.randomVal([]);
      } else if (algo.id === "lcs-dp") {
        const pairs = [
          ["ABCBDAB", "BDCAB"],
          ["AGGTAB", "GXTXAYB"],
          ["MZJAWXU", "XMJYAUZ"]
        ];
        const pair = pairs[Math.floor(Math.random() * pairs.length)];
        randStr = pair[0];
        randTarget = pair[1];
      } else {
        randStr = (Math.floor(Math.random() * 3) + 4).toString();
        if (secondInputConfig) randTarget = secondInputConfig.randomVal([]);
      }
    } else if (algo.inputType === "hash") {
      const arr = Array.from(
        { length: 4 },
        () => Math.floor(Math.random() * 15) + 1,
      );
      randStr = arr.join(" ");
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal(arr);
      } else {
        randTarget = "9";
      }
    } else if (algo.inputType === "grid") {
      if (algo.id === "rat-in-a-maze") {
        const mazes = [
          "0 1 0 0\n0 0 0 1\n1 0 0 0\n0 1 0 0",
          "0 0 0 0\n1 1 0 1\n0 0 0 0\n0 1 1 0",
          "0 1 0 0\n0 1 0 1\n0 0 0 0\n1 1 0 0"
        ];
        randStr = mazes[Math.floor(Math.random() * mazes.length)];
      } else {
        const boards = [
          "1 0 3 0\n0 0 0 2\n3 0 1 0\n0 2 0 4",
          "0 0 0 4\n3 0 0 0\n0 0 0 1\n1 0 0 0",
          "0 2 0 0\n0 0 4 0\n0 1 0 0\n0 0 0 3"
        ];
        randStr = boards[Math.floor(Math.random() * boards.length)];
      }
    } else if (algo.inputType === "word-search-grid") {
      const gridWordPairs = [
        { grid: "ABCE\nSFCS\nADEE\nSEET", word: "ABCCED" },
        { grid: "ABCD\nEFGH\nIJKL", word: "BFJ" },
        { grid: "OCOA\nONAN\nOTON", word: "NOON" }
      ];
      const pair = gridWordPairs[Math.floor(Math.random() * gridWordPairs.length)];
      randStr = pair.grid;
      randTarget = pair.word;
    } else if (algo.inputType === "strings-list") {
      if (algo.id === "palindrome-check") {
        const words = ["racecar", "level", "hello", "madam", "civic", "radar"];
        randStr = words[Math.floor(Math.random() * words.length)];
      } else if (algo.id === "reverse-string") {
        const phrases = ["hello world", "algorithm", "backtrack", "data structure"];
        randStr = phrases[Math.floor(Math.random() * phrases.length)];
      } else {
        const wordLists = [
          "flower flow flight",
          "dog racecar car",
          "interspecies interstellar interstate",
          "apple apricot applied"
        ];
        randStr = wordLists[Math.floor(Math.random() * wordLists.length)];
      }
    } else if (algo.inputType === "string-pattern") {
      const texts = [
        "ABABDABACDABABCABAB",
        "AABAACAADAABAABA",
        "AAAAABAAAAAC"
      ];
      randStr = texts[Math.floor(Math.random() * texts.length)];
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal([]);
      }
    } else if (algo.inputType === "greedy-interval") {
      const intervalSets = [
        "1-3 2-4 3-6 5-7 8-9",
        "0-2 1-3 2-5 3-4 4-6",
        "2-4 1-5 4-6 6-8 5-9"
      ];
      randStr = intervalSets[Math.floor(Math.random() * intervalSets.length)];
    } else if (algo.inputType === "greedy-ratio") {
      const ratioSets = [
        "60-10 100-20 120-30",
        "20-5 30-10 40-15 50-20",
        "10-2 20-3 30-5 40-7"
      ];
      randStr = ratioSets[Math.floor(Math.random() * ratioSets.length)];
      if (secondInputConfig) {
        randTarget = secondInputConfig.randomVal([]);
      }
    } else if (algo.inputType === "bit-value") {
      const vals = ["8", "16", "24", "32", "50", "64", "128", "150"];
      randStr = vals[Math.floor(Math.random() * vals.length)];
    } else if (algo.inputType === "math-gcd") {
      const gcdSets = ["48 18", "60 24", "100 35", "81 27", "120 45"];
      randStr = gcdSets[Math.floor(Math.random() * gcdSets.length)];
    } else if (algo.inputType === "math-sieve") {
      randStr = (Math.floor(Math.random() * 20) + 15).toString();
    } else if (algo.inputType === "strings") {
      const wordLists = [
        "cat car dog cap",
        "trie tree trap top",
        "apple ape apply apricot",
        "code coder coding clock"
      ];
      randStr = wordLists[Math.floor(Math.random() * wordLists.length)];
    }

    setCustomInput(randStr);
    setTargetInput(randTarget);
    generateSteps(randStr, randTarget);
  };

  const handleClear = () => {
    setCustomInput("");
    setTargetInput("");
  };

  const totalSteps = steps.length;
  const canPrev = currentStep > 0;
  const canNext = currentStep < totalSteps - 1;

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-white to-[#F4F7FE] dark:from-[#161B26] dark:to-[#0B0F19] shadow-xl border border-white/20 transition-all duration-300">
      {/* 1. UPPER META BOARD */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2">
        <div className="flex items-center gap-3 text-left">
          <Link to={`/category/${algo.category}`}>
            <Button
              variant="default"
              className="w-10 h-10 !p-0 clay-btn clay-btn-default flex items-center justify-center"
              title="Return to Category Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h2 className="text-2xl font-black text-text-primary tracking-tight">
              {algo.name} Console
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              Category: {algo.category} // Status: Online
            </span>
          </div>
        </div>

        {/* Favorite toggle switch */}
        <Button
          onClick={() => toggleFavorite(algo.id)}
          variant={isFavorited ? "danger" : "default"}
          className="flex items-center gap-2 clay-btn"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
          <span>{isFavorited ? "Bookmarked" : "Bookmark"}</span>
        </Button>
      </div>

      {/* 2. DUAL COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Middle Workspace Column: Canvas & Control cockpit */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Main Visualizer screen */}
          <VisualizerCanvas algorithm={algo} />

          {/* Control Cockpit panel */}
          <ControlPanel
            onGenerate={handleApplyCustomInput}
            onRandomInput={handleRandomInput}
            onClear={handleClear}
            canPrev={canPrev}
            canNext={canNext}
          />

          {/* Input Panel Card */}
          <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-3 text-left">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-text-secondary opacity-75 uppercase tracking-wider">
                CUSTOM INPUT PANEL
              </span>
              <span className="text-[9px] text-text-secondary opacity-60 font-mono">
                Type variables separated by spaces
              </span>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                {algo.inputType === "graph" || algo.id === "knapsack-dp" ? (
                  <textarea
                    rows={1}
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={
                      algo.id === "knapsack-dp"
                        ? "Line 1: weights (e.g., 2 3 4 5)\nLine 2: values (e.g., 3 4 5 6)"
                        : "Enter graph edges: u v w (newline separated)..."
                    }
                    className="clay-input w-full font-mono text-xs px-3 py-2"
                  />
                ) : (
                  <Input
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={
                      secondInputConfig
                        ? "Enter elements (separated by space)"
                        : "E.g., 5 3 8 1 9"
                    }
                  />
                )}
              </div>
              {secondInputConfig && (
                <div className="w-28 md:w-36 flex-shrink-0">
                  <Input
                    value={targetInput}
                    onChange={(e) => setTargetInput(e.target.value)}
                    placeholder={secondInputConfig.label}
                  />
                </div>
              )}
              <Button
                onClick={handleApplyCustomInput}
                variant="accent"
                className="font-bold flex-shrink-0 clay-btn clay-btn-accent"
              >
                <RefreshCw className="w-4 h-4 animate-spin-hover" />
                <span>Compile</span>
              </Button>
            </div>
          </div>

          {/* Real-time description terminal logs */}
          <ExplanationPanel />
        </div>

        {/* Right Sidebar Column: Metadata descriptions & code snippets */}
        <div className="flex flex-col gap-6">
          {/* Static Complexities Card */}
          <ComplexityPanel algorithm={algo} />

          {/* Telemetry Real-time scoreboard */}
          <StatsPanel />

          {/* Code panel tab implementation */}
          <CodePanel algorithm={algo} />

          {/* Details Overview Metadata tabs card */}
          <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4 text-left">
            {/* Tabs */}
            <div className="flex gap-1.5 pb-2 flex-wrap">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-xs font-extrabold uppercase px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "overview" ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`text-xs font-extrabold uppercase px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "details" ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
              >
                Pros &amp; Cons
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`text-xs font-extrabold uppercase px-3 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "applications" ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
              >
                Uses
              </button>
            </div>

            {/* Tab content switcher */}
            {activeTab === "overview" && (
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-center gap-1 text-xs font-bold text-accent">
                  <BookOpen className="w-4 h-4" />
                  <span>Concept Summary</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  {algo.description}
                </p>
              </div>
            )}

            {activeTab === "details" && (
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-green-500">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Key Advantages</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-text-secondary leading-relaxed flex flex-col gap-1 font-medium">
                    {algo.advantages?.map((adv, idx) => (
                      <li key={idx}>{adv}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-red-500">
                    <ThumbsDown className="w-3.5 h-3.5" />
                    <span>Disadvantages</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-text-secondary leading-relaxed flex flex-col gap-1 font-medium">
                    {algo.disadvantages?.map((dis, idx) => (
                      <li key={idx}>{dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-purple-400">
                    <ClipboardList className="w-3.5 h-3.5" />
                    <span>Core Applications</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-text-secondary leading-relaxed flex flex-col gap-1 font-medium">
                    {algo.applications?.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-accent">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Real-world Deployments</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-text-secondary leading-relaxed flex flex-col gap-1 font-medium">
                    {algo.realWorldUses?.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizerPage;
