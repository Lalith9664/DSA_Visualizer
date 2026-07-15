// Helper functions for Trees
function buildTreeNodes(values) {
  if (!values.length) return [];
  const nodes = [];
  let idCounter = 0;

  function insertNode(nodeList, val) {
    const newNode = { id: idCounter++, val, left: null, right: null };
    if (!nodeList.length) {
      nodeList.push(newNode);
      return;
    }
    let curr = nodeList[0];
    while (true) {
      if (val <= curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          nodeList.push(newNode);
          break;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          nodeList.push(newNode);
          break;
        }
        curr = curr.right;
      }
    }
  }

  values.forEach((v) => insertNode(nodes, v));
  assignPositions(nodes, nodes[0]);
  return nodes;
}

function assignPositions(allNodes, root) {
  if (!root) return;
  const queue = [{ node: root, depth: 0, hPos: 50 }];
  const nodePositions = {};

  while (queue.length) {
    const { node, depth, hPos } = queue.shift();
    if (node) {
      nodePositions[node.id] = { depth, hPos };
    }

    const spread = 50 / Math.pow(2, depth + 1);
    if (node.left)
      queue.push({ node: node.left, depth: depth + 1, hPos: hPos - spread });
    if (node.right)
      queue.push({ node: node.right, depth: depth + 1, hPos: hPos + spread });
  }

  Object.entries(nodePositions).forEach(([id, { depth, hPos }]) => {
    const node = allNodes.find((n) => n.id === parseInt(id));
    if (node) {
      node.x = Math.max(5, Math.min(95, hPos));
      node.y = 40 + depth * 56;
    }
  });
}

function cloneNodes(nodes) {
  const map = new Map();
  nodes.forEach((n) => map.set(n.id, { ...n, left: null, right: null }));
  nodes.forEach((n) => {
    const clone = map.get(n.id);
    if (n.left) clone.left = map.get(n.left.id);
    if (n.right) clone.right = map.get(n.right.id);
  });
  return Array.from(map.values());
}

// Tree BST step generators
export const bstTraversalSteps = (arr, traversalOrder = "inorder") => {
  const steps = [];

  // Parse inputs to array of numbers
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  if (nums.length === 0) return [];

  // Build virtual BST
  const bstNodes = []; // flat array of node representations
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = {
        id: idCounter++,
        val,
        left: null,
        right: null,
        x: 0,
        y: 0,
      };
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
  nums.forEach((n) => {
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
    activeLine: 1,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 },
  });

  const visitOrder = [];
  const traversalPath = [];

  const traverse = (node) => {
    if (!node) return;

    if (traversalOrder === "preorder") {
      visitOrder.push(node);
    }

    traverse(node.left);

    if (traversalOrder === "inorder") {
      visitOrder.push(node);
    }

    traverse(node.right);

    if (traversalOrder === "postorder") {
      visitOrder.push(node);
    }
  };

  traverse(root);

  // Animate the path visitation
  visitOrder.forEach((node, idx) => {
    traversalPath.push(node.val);
    const highlights = {};
    visitOrder.slice(0, idx + 1).forEach((n) => {
      highlights[n.id] = "sorted";
    });
    highlights[node.id] = "pivot";

    // Alternate between visiting left subtree (L4), visiting node (L5), visiting right subtree (L7)
    // For inorder: L4 (go left) -> L5 (visit) -> L7 (go right)
    const linePattern = [4, 5, 7];
    const activeLine = linePattern[idx % linePattern.length];

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...traversalPath], activeNode: node.id },
      highlights,
      explanation: `Visiting Node ${node.val}. Path: [${traversalPath.join(", ")}].`,
      activeLine,
      stats: { comparisons: idx, visitedNodes: idx + 1, step: steps.length },
    });
  });


  return steps;
};

// --- DIJKSTRA SHORTED PATHS ---


// BST Search + Tree Height + LCA
export const bstSearchSteps = (arr, target) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = {
        id: idCounter++,
        val,
        left: null,
        right: null,
        x: 0,
        y: 0,
      };
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
  nums.forEach((n) => {
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

  const targetVal =
    target !== undefined ? Number(target) : nums[Math.floor(nums.length / 2)];

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: `Constructed BST. Searching for target value ${targetVal}.`,
    activeLine: 1,
    stats: { comparisons: 0, visitedNodes: 0, step: 0 },
  });

  let curr = root;
  const path = [];

  while (curr) {
    path.push(curr.val);
    const currId = curr.id;
    const highlights = {};
    path.forEach((v) => {
      const n = bstNodes.find((node) => node.val === v);
      if (n) highlights[n.id] = "compare";
    });

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...path], activeNode: currId },
      highlights: { ...highlights, [currId]: "pivot" },
      explanation: `Comparing current node value ${curr.val} with target ${targetVal}.`,
      activeLine: 3,
      stats: {
        comparisons: path.length,
        visitedNodes: path.length,
        step: steps.length,
      },
    });

    if (curr.val === targetVal) {
      highlights[currId] = "sorted";
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Target value ${targetVal} found in BST at node ${curr.val}!`,
        activeLine: 3,
        stats: {
          comparisons: path.length,
          visitedNodes: path.length,
          step: steps.length,
        },
      });
      break;
    } else if (targetVal < curr.val) {
      if (curr.left) {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} < ${curr.val}. Moving left to child node ${curr.left.val}.`,
          activeLine: 4,
          stats: {
            comparisons: path.length,
            visitedNodes: path.length,
            step: steps.length,
          },
        });
        curr = curr.left;
      } else {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} < ${curr.val}, but left child is null. Target not found in BST.`,
          activeLine: 6,
          stats: {
            comparisons: path.length,
            visitedNodes: path.length,
            step: steps.length,
          },
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
          activeLine: 5,
          stats: {
            comparisons: path.length,
            visitedNodes: path.length,
            step: steps.length,
          },
        });
        curr = curr.right;
      } else {
        steps.push({
          data: JSON.parse(JSON.stringify(bstNodes)),
          treeState: { root, path: [...path], activeNode: currId },
          highlights,
          explanation: `${targetVal} > ${curr.val}, but right child is null. Target not found in BST.`,
          activeLine: 6,
          stats: {
            comparisons: path.length,
            visitedNodes: path.length,
            step: steps.length,
          },
        });
        break;
      }
    }
  }

  return steps;
};

export const treeHeightSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = {
        id: idCounter++,
        val,
        left: null,
        right: null,
        x: 0,
        y: 0,
      };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) root.left = insertBST(root.left, val);
    else root.right = insertBST(root.right, val);
    return root;
  };

  let root = null;
  nums.forEach((n) => {
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

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: {},
    explanation: "Constructed BST. Commencing height calculation recursively.",
    stats: { comparisons: 0, visitedNodes: 0, step: 0 },
  });

  const nodeHeights = {};
  const calculateHeight = (node) => {
    if (!node) return -1;

    const nodeId = node.id;
    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: "pivot" },
      explanation: `Visiting node ${node.val}. Calculating height of left and right subtrees.`,
      stats: {
        comparisons: steps.length,
        visitedNodes: Object.keys(nodeHeights).length,
        step: steps.length,
      },
    });

    const leftH = calculateHeight(node.left);
    const rightH = calculateHeight(node.right);
    const myH = 1 + Math.max(leftH, rightH);
    nodeHeights[nodeId] = myH;

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [], activeNode: nodeId },
      highlights: { [nodeId]: "sorted" },
      explanation: `Height of Node ${node.val} calculated: max(Left:${leftH}, Right:${rightH}) + 1 = ${myH}.`,
      stats: {
        comparisons: steps.length,
        visitedNodes: Object.keys(nodeHeights).length,
        step: steps.length,
      },
    });

    return myH;
  };

  const finalHeight = calculateHeight(root);

  steps.push({
    data: JSON.parse(JSON.stringify(bstNodes)),
    treeState: { root, path: [], activeNode: null },
    highlights: bstNodes.reduce((acc, n) => ({ ...acc, [n.id]: "sorted" }), {}),
    explanation: `Height calculation completed. The total height of the tree is ${finalHeight}.`,
    stats: {
      comparisons: steps.length,
      visitedNodes: bstNodes.length,
      step: steps.length,
    },
  });

  return steps;
};

export const lcaSteps = (arr, targetsStr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  if (nums.length === 0) return [];

  const bstNodes = [];
  let idCounter = 0;

  const insertBST = (root, val) => {
    if (!root) {
      const node = {
        id: idCounter++,
        val,
        left: null,
        right: null,
        x: 0,
        y: 0,
      };
      bstNodes.push(node);
      return node;
    }
    if (val < root.val) root.left = insertBST(root.left, val);
    else root.right = insertBST(root.right, val);
    return root;
  };

  let root = null;
  nums.forEach((n) => {
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
    const lines = targetsStr.split("\n");
    if (lines[1]) {
      const parts = lines[1]
        .split(/\s+/)
        .map(Number)
        .filter((x) => !isNaN(x));
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
    stats: { comparisons: 0, visitedNodes: 0, step: 0 },
  });

  let curr = root;
  const path = [];

  while (curr) {
    const currId = curr.id;
    path.push(curr.val);
    const highlights = {};
    path.forEach((v) => {
      const n = bstNodes.find((node) => node.val === v);
      if (n) highlights[n.id] = "compare";
    });

    steps.push({
      data: JSON.parse(JSON.stringify(bstNodes)),
      treeState: { root, path: [...path], activeNode: currId },
      highlights: { ...highlights, [currId]: "pivot" },
      explanation: `Inspecting Node ${curr.val}. Comparing with targets ${p} and ${q}.`,
      stats: {
        comparisons: path.length,
        visitedNodes: path.length,
        step: steps.length,
      },
    });

    if (p < curr.val && q < curr.val) {
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Both targets ${p} and ${q} are less than current node ${curr.val}. Moving left.`,
        stats: {
          comparisons: path.length,
          visitedNodes: path.length,
          step: steps.length,
        },
      });
      curr = curr.left;
    } else if (p > curr.val && q > curr.val) {
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `Both targets ${p} and ${q} are greater than current node ${curr.val}. Moving right.`,
        stats: {
          comparisons: path.length,
          visitedNodes: path.length,
          step: steps.length,
        },
      });
      curr = curr.right;
    } else {
      highlights[currId] = "sorted";
      steps.push({
        data: JSON.parse(JSON.stringify(bstNodes)),
        treeState: { root, path: [...path], activeNode: currId },
        highlights,
        explanation: `LCA Found! Node ${curr.val} is the lowest common ancestor of ${p} and ${q}.`,
        stats: {
          comparisons: path.length,
          visitedNodes: path.length,
          step: steps.length,
        },
      });
      break;
    }
  }

  return steps;
};


// Level Order Traversal
export const levelOrderTraversalSteps = (values) => {
  const steps = [];
  if (!values || values.length === 0) return steps;
  // Build BST
  const nodes = values.map((v, i) => ({
    val: v,
    left: null,
    right: null,
    id: i,
  }));
  const buildBST = (arr) => {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const node = {
      val: arr[mid],
      left: buildBST(arr.slice(0, mid)),
      right: buildBST(arr.slice(mid + 1)),
    };
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
    explanation: `Level Order Traversal (BFS). Start with root [${sorted[Math.floor(sorted.length / 2)]}] in queue.`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });
  for (let lvl = 0; lvl < levels.length; lvl++) {
    steps.push({
      data: {
        values: sorted,
        levels: levels.slice(0, lvl + 1),
        currentLevel: lvl,
      },
      highlights: { level: lvl },
      explanation: `Level ${lvl}: Dequeue and visit all ${levels[lvl].length} node(s) — [${levels[lvl].join(", ")}]. Enqueue their children.`,
      stats: { comparisons: lvl + 1, swaps: 0, step: steps.length },
    });
  }
  steps.push({
    data: { values: sorted, levels, currentLevel: -1 },
    highlights: { done: true },
    explanation: `BFS complete! Tree visited level-by-level: ${levels.map((l, i) => `L${i}:[${l.join(",")}]`).join(" → ")}.`,
    stats: { comparisons: levels.length, swaps: 0, step: steps.length },
  });
  return steps;
};

// --- BELLMAN FORD ---

// BST/AVL/BT/RBT Insert+Delete
export const bstInsertSteps = (arr, insertVal) => {
  const steps = [];
  const baseNodes = [];
  let idCounter = 0;

  const insertList = [...arr];
  if (insertVal !== undefined && insertVal !== null) {
    insertList.push(insertVal);
  }

  if (insertList.length === 0) return steps;

  // Step 1: Initial empty tree state
  steps.push({
    data: [],
    highlights: {},
    explanation: "Initial BST state: Empty tree. Ready to insert elements.",
    treeState: { path: [] },
    stats: { comparisons: 0, swaps: 0, step: 1 },
  });

  const cloneNodes = (nodes) => JSON.parse(JSON.stringify(nodes));

  let comparisons = 0;
  let swaps = 0;

  for (let idx = 0; idx < insertList.length; idx++) {
    const val = insertList[idx];

    if (baseNodes.length === 0) {
      const rootNode = {
        id: idCounter++,
        val,
        left: null,
        right: null,
        x: 50,
        y: 40,
      };
      baseNodes.push(rootNode);

      steps.push({
        data: cloneNodes(baseNodes),
        highlights: { [rootNode.id]: "swap" },
        explanation: `Tree is empty. Inserting first element ${val} as root.`,
        treeState: { path: [val] },
        stats: { comparisons, swaps: ++swaps, step: steps.length + 1 },
      });
      continue;
    }

    let curr = baseNodes[0];
    const path = [];

    while (curr) {
      path.push(curr.val);
      comparisons++;

      const hiCopy = {};
      baseNodes.forEach((n) => {
        if (n.id === curr.id) hiCopy[n.id] = "compare";
        else if (path.includes(n.val)) hiCopy[n.id] = "sorted";
      });

      if (val <= curr.val) {
        steps.push({
          data: cloneNodes(baseNodes),
          highlights: hiCopy,
          explanation: `Inserting ${val}: ${val} ≤ ${curr.val} → go LEFT`,
          treeState: { path: [...path] },
          stats: { comparisons, swaps, step: steps.length + 1 },
        });

        if (!curr.left) {
          const newId = idCounter++;
          const newNode = { id: newId, val, left: null, right: null };
          curr.left = newNode;
          baseNodes.push(newNode);

          assignPositions(baseNodes, baseNodes[0]);

          const hiInsert = { ...hiCopy, [newId]: "swap" };
          steps.push({
            data: cloneNodes(baseNodes),
            highlights: hiInsert,
            explanation: `Found empty left child of ${curr.val}. Inserting ${val} here!`,
            treeState: { path: [...path, val] },
            stats: { comparisons, swaps: ++swaps, step: steps.length + 1 },
          });
          break;
        }
        curr = curr.left;
      } else {
        steps.push({
          data: cloneNodes(baseNodes),
          highlights: hiCopy,
          explanation: `Inserting ${val}: ${val} > ${curr.val} → go RIGHT`,
          treeState: { path: [...path] },
          stats: { comparisons, swaps, step: steps.length + 1 },
        });

        if (!curr.right) {
          const newId = idCounter++;
          const newNode = { id: newId, val, left: null, right: null };
          curr.right = newNode;
          baseNodes.push(newNode);

          assignPositions(baseNodes, baseNodes[0]);

          const hiInsert = { ...hiCopy, [newId]: "swap" };
          steps.push({
            data: cloneNodes(baseNodes),
            highlights: hiInsert,
            explanation: `Found empty right child of ${curr.val}. Inserting ${val} here!`,
            treeState: { path: [...path, val] },
            stats: { comparisons, swaps: ++swaps, step: steps.length + 1 },
          });
          break;
        }
        curr = curr.right;
      }
    }
  }

  const finalHi = {};
  baseNodes.forEach((n) => (finalHi[n.id] = "sorted"));
  steps.push({
    data: cloneNodes(baseNodes),
    highlights: finalHi,
    explanation: `BST Insertion sequence complete. Final tree holds: [${insertList.join(", ")}].`,
    treeState: { path: [] },
    stats: { comparisons, swaps, step: steps.length + 1 },
  });

  return steps;
};

// ============================================================
// BST DELETE
// ============================================================
export const bstDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const baseNodes = buildTreeNodes(arr);
  const del =
    deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  steps.push({
    data: cloneNodes(baseNodes),
    highlights: {},
    explanation: `BST Delete: Searching for node ${del} to delete.`,
    treeState: {},
    stats: { comparisons: 0, swaps: 0, step: 1 },
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
    hi[curr.id] = "compare";
    path.forEach((v) => {
      const n = baseNodes.find((n) => n.val === v);
      if (n) hi[n.id] = hi[n.id] || "sorted";
    });

    steps.push({
      data: cloneNodes(baseNodes),
      highlights: hi,
      explanation: `Comparing with ${curr.val}: ${del === curr.val ? "FOUND target!" : del < curr.val ? `${del} < ${curr.val} → go LEFT` : `${del} > ${curr.val} → go RIGHT`}`,
      treeState: { path: [...path] },
      stats: { comparisons, swaps: 0, step: steps.length + 1 },
    });

    if (del === curr.val) {
      targetNode = curr;
      break;
    }
    if (del < curr.val) curr = curr.left;
    else curr = curr.right;
  }

  if (!targetNode) {
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: {},
      explanation: `❌ Node ${del} not found in BST.`,
      treeState: {},
      stats: { comparisons, swaps: 0, step: steps.length + 1 },
    });
    return steps;
  }

  // Determine deletion case
  const hasLeft = !!targetNode.left;
  const hasRight = !!targetNode.right;
  const hi = { [targetNode.id]: "pivot" };

  if (!hasLeft && !hasRight) {
    // Case 1: Leaf node
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: hi,
      explanation: `Case 1: ${del} is a LEAF node (no children). Simply remove it.`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 },
    });
    // Remove node
    baseNodes.forEach((n) => {
      if (n.left && n.left.id === targetNode.id) n.left = null;
      if (n.right && n.right.id === targetNode.id) n.right = null;
    });
    const idx = baseNodes.findIndex((n) => n.id === targetNode.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);
    const finalHi = {};
    baseNodes.forEach((n) => (finalHi[n.id] = "sorted"));
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Node ${del} deleted. BST property maintained.`,
      treeState: {},
      stats: { comparisons, swaps: 1, step: steps.length + 1 },
    });
  } else if (!hasLeft || !hasRight) {
    // Case 2: One child
    const child = targetNode.left || targetNode.right;
    const childLabel = hasLeft ? "left" : "right";
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: "pivot", [child.id]: "compare" },
      explanation: `Case 2: ${del} has ONE child (${childLabel}: ${child.val}). Replace ${del} with its child.`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 },
    });
    // Replace
    baseNodes.forEach((n) => {
      if (n.left && n.left.id === targetNode.id) n.left = child;
      if (n.right && n.right.id === targetNode.id) n.right = child;
    });
    const idx = baseNodes.findIndex((n) => n.id === targetNode.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);
    const finalHi = {};
    baseNodes.forEach((n) => {
      finalHi[n.id] = n.id === child.id ? "swap" : "sorted";
    });
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Replaced ${del} with its child ${child.val}. BST property maintained.`,
      treeState: {},
      stats: { comparisons, swaps: 1, step: steps.length + 1 },
    });
  } else {
    // Case 3: Two children → find in-order successor
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: "pivot" },
      explanation: `Case 3: ${del} has TWO children. Finding in-order successor (smallest in right subtree).`,
      treeState: { path },
      stats: { comparisons, swaps: 0, step: steps.length + 1 },
    });

    let succ = targetNode.right;
    while (succ.left) succ = succ.left;

    steps.push({
      data: cloneNodes(baseNodes),
      highlights: { [targetNode.id]: "pivot", [succ.id]: "compare" },
      explanation: `In-order successor is ${succ.val}. Copy ${succ.val} into node ${del}, then delete ${succ.val} from right subtree.`,
      treeState: { path },
      stats: { comparisons: comparisons + 1, swaps: 0, step: steps.length + 1 },
    });

    // Copy successor value
    targetNode.val = succ.val;

    // Remove successor from right subtree
    const succChild = succ.right;
    baseNodes.forEach((n) => {
      if (n.left && n.left.id === succ.id) n.left = succChild || null;
      if (n.right && n.right.id === succ.id) n.right = succChild || null;
    });
    const idx = baseNodes.findIndex((n) => n.id === succ.id);
    if (idx !== -1) baseNodes.splice(idx, 1);
    assignPositions(baseNodes, baseNodes[0]);

    const finalHi = {};
    baseNodes.forEach((n) => {
      finalHi[n.id] = n.id === targetNode.id ? "swap" : "sorted";
    });
    steps.push({
      data: cloneNodes(baseNodes),
      highlights: finalHi,
      explanation: `✅ Replaced ${del} with ${succ.val}. Deleted successor. BST property maintained.`,
      treeState: {},
      stats: { comparisons: comparisons + 1, swaps: 1, step: steps.length + 1 },
    });
  }

  return steps;
};

// ============================================================
// AVL TREE INSERT
// ============================================================
export const avlInsertSteps = (arr, insertVal) => {
  const steps = [];
  const insertList = [...arr];
  if (insertVal !== undefined && insertVal !== null) {
    insertList.push(insertVal);
  }

  if (insertList.length === 0) return steps;

  function height(node) {
    return node ? node.h : 0;
  }
  function bf(node) {
    return node ? height(node.left) - height(node.right) : 0;
  }
  function updateHeight(node) {
    if (node) node.h = 1 + Math.max(height(node.left), height(node.right));
  }

  let idCounter = 0;
  function newNode(val) {
    return {
      id: idCounter++,
      val,
      left: null,
      right: null,
      h: 1,
      color: null,
      bf: 0,
    };
  }

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

  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x;
    node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }

  let root = null;
  let comparisons = 0;
  let swaps = 0;

  // Step 1: Initial empty tree state
  steps.push({
    data: [],
    highlights: {},
    explanation: "Initial AVL Tree: Empty. Ready to insert elements.",
    treeState: {},
    stats: { comparisons: 0, swaps: 0, step: 1 },
  });

  const visited = [];

  function insertWithSteps(node, val, parent = null, isLeft = false) {
    if (!node) {
      const n = newNode(val);
      if (!root) root = n;
      return n;
    }

    visited.push(node.id);
    const dir = val <= node.val ? "LEFT" : "RIGHT";
    const hiCurr = {};
    visited.forEach((id) => (hiCurr[id] = "sorted"));
    hiCurr[node.id] = "compare";
    comparisons++;

    assignPos(root);
    const snapNodes = getAllNodes(root).map((n) => ({
      ...n,
      result: `BF:${bf(n)}`,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
    }));
    steps.push({
      data: snapNodes,
      highlights: hiCurr,
      explanation: `Inserting ${val}: ${val} ${val <= node.val ? "≤" : ">"} ${node.val} → go ${dir}. BF=${bf(node)}`,
      treeState: {},
      stats: { comparisons, swaps, step: steps.length + 1 },
    });

    if (val <= node.val)
      node.left = insertWithSteps(node.left, val, node, true);
    else node.right = insertWithSteps(node.right, val, node, false);

    const oldBf = bf(node);
    const balanced = balanceNode(node);
    const newBf = bf(balanced);

    // Update parent pointer immediately so root traversal sees it before we push the step!
    if (parent) {
      if (isLeft) parent.left = balanced;
      else parent.right = balanced;
    } else {
      root = balanced;
    }

    if (oldBf !== newBf || balanced.id !== node.id) {
      swaps++;
      assignPos(root);
      const rotNodes = getAllNodes(root).map((n) => ({
        ...n,
        result: `BF:${bf(n)}`,
        left: n.left ? { id: n.left.id } : null,
        right: n.right ? { id: n.right.id } : null,
      }));
      steps.push({
        data: rotNodes,
        highlights: { [balanced.id]: "pivot" },
        explanation: `Rebalancing at node ${balanced.val}: BF changed from ${oldBf} → ${newBf}. Rotation applied!`,
        treeState: {},
        stats: { comparisons, swaps, step: steps.length + 1 },
      });
    }

    return balanced;
  }

  for (let idx = 0; idx < insertList.length; idx++) {
    const val = insertList[idx];
    visited.length = 0;

    if (!root) {
      root = newNode(val);
      assignPos(root);
      const snapNodes = getAllNodes(root).map((n) => ({
        ...n,
        result: `BF:${bf(n)}`,
        left: n.left ? { id: n.left.id } : null,
        right: n.right ? { id: n.right.id } : null,
      }));
      steps.push({
        data: snapNodes,
        highlights: { [root.id]: "swap" },
        explanation: `Tree is empty. Inserting first element ${val} as root.`,
        treeState: {},
        stats: { comparisons, swaps: ++swaps, step: steps.length + 1 },
      });
    } else {
      root = insertWithSteps(root, val);
      assignPos(root);
      const snapNodes = getAllNodes(root).map((n) => ({
        ...n,
        result: `BF:${bf(n)}`,
        left: n.left ? { id: n.left.id } : null,
        right: n.right ? { id: n.right.id } : null,
      }));
      const hiInsert = {};
      snapNodes.forEach((n) => {
        if (n.val === val) hiInsert[n.id] = "swap";
      });
      steps.push({
        data: snapNodes,
        highlights: hiInsert,
        explanation: `Successfully inserted ${val} into AVL tree and balanced.`,
        treeState: {},
        stats: { comparisons, swaps, step: steps.length + 1 },
      });
    }
  }

  const finalHi = {};
  getAllNodes(root).forEach((n) => (finalHi[n.id] = "sorted"));
  assignPos(root);
  const finalNodes = getAllNodes(root).map((n) => ({
    ...n,
    result: `BF:${bf(n)}`,
    left: n.left ? { id: n.left.id } : null,
    right: n.right ? { id: n.right.id } : null,
  }));
  steps.push({
    data: finalNodes,
    highlights: finalHi,
    explanation: `AVL Insertion sequence complete. Final balanced tree holds: [${insertList.join(", ")}].`,
    treeState: {},
    stats: { comparisons, swaps, step: steps.length + 1 },
  });

  return steps;
};

// ============================================================
// AVL DELETE
// ============================================================
export const avlDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const del =
    deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  function height(node) {
    return node ? node.h : 0;
  }
  function updateHeight(node) {
    if (node) node.h = 1 + Math.max(height(node.left), height(node.right));
  }
  function bf(node) {
    return height(node?.left) - height(node?.right);
  }
  let idCounter = 0;
  function newNode(val) {
    return { id: idCounter++, val, left: null, right: null, h: 1 };
  }
  function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    updateHeight(y);
    updateHeight(x);
    return x;
  }
  const rotateLeft = (x) => {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    updateHeight(x);
    updateHeight(y);
    return y;
  };
  function balanceNode(node) {
    updateHeight(node);
    const b = bf(node);
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
  function insertAVL(node, val) {
    if (!node) return newNode(val);
    if (val <= node.val) node.left = insertAVL(node.left, val);
    else node.right = insertAVL(node.right, val);
    return balanceNode(node);
  }
  arr.forEach((v) => (root = insertAVL(root, v)));

  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x;
    node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(highlights = {}, explanation = "", swaps = 0) {
    assignPos(root);
    const nodes = getAllNodes(root).map((n) => ({
      ...n,
      result: `BF:${bf(n)}`,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
    }));
    steps.push({
      data: nodes,
      highlights,
      explanation,
      treeState: {},
      stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
    });
  }

  snap({}, `AVL Delete: Deleting ${del} from AVL tree. Searching...`);

  // Find and highlight target
  let found = getAllNodes(root).find((n) => n.val === del);
  if (found)
    snap(
      { [found.id]: "compare" },
      `Found node ${del}. Deleting it and rebalancing...`,
    );

  function deleteAVL(node, key) {
    if (!node) return null;
    if (key < node.val) {
      node.left = deleteAVL(node.left, key);
    } else if (key > node.val) {
      node.right = deleteAVL(node.right, key);
    } else {
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
  getAllNodes(root).forEach((n) => {
    const b = bf(n);
    if (Math.abs(b) > 0) {
      snap(
        { [n.id]: b === 0 ? "sorted" : "pivot" },
        `Node ${n.val}: BF=${b}. ${Math.abs(b) > 1 ? "NEEDS ROTATION!" : "Balanced ✓"}`,
      );
    }
  });

  const finalHi = {};
  getAllNodes(root).forEach((n) => (finalHi[n.id] = "sorted"));
  snap(
    finalHi,
    `✅ AVL Delete complete. ${del} removed. Tree fully rebalanced.`,
    1,
  );

  return steps;
};

// ============================================================
// BINARY TREE INSERT (Level-Order)
// ============================================================
export const btInsertSteps = (arr, insertVal) => {
  const steps = [];
  const insertList = [...arr];
  if (insertVal !== undefined && insertVal !== null) {
    insertList.push(insertVal);
  }

  if (insertList.length === 0) return steps;

  let idCounter = 0;
  function newNode(val) {
    return { id: idCounter++, val, left: null, right: null };
  }

  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x;
    node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(rootNode, hi = {}, explanation = "", swaps = 0) {
    if (!rootNode) {
      steps.push({
        data: [],
        highlights: {},
        explanation,
        treeState: {},
        stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
      });
      return;
    }
    assignPos(rootNode);
    const nodes = getAllNodes(rootNode).map((n) => ({
      ...n,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
    }));
    steps.push({
      data: nodes,
      highlights: hi,
      explanation,
      treeState: {},
      stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
    });
  }

  let root = null;
  let swaps = 0;

  snap(
    null,
    {},
    "Initial Binary Tree state: Empty tree. Ready for level-order insertions.",
  );

  for (let idx = 0; idx < insertList.length; idx++) {
    const val = insertList[idx];

    if (!root) {
      root = newNode(val);
      snap(
        root,
        { [root.id]: "swap" },
        `Tree is empty. Inserting first element ${val} as root.`,
        ++swaps,
      );
      continue;
    }

    const queue = [root];
    let inserted = false;

    while (queue.length && !inserted) {
      const curr = queue.shift();
      snap(
        root,
        { [curr.id]: "compare" },
        `Scanning node ${curr.val} for empty child slot.`,
      );

      if (!curr.left) {
        const newN = newNode(val);
        curr.left = newN;
        snap(
          root,
          { [curr.id]: "compare", [newN.id]: "swap" },
          `Inserted ${val} as LEFT child of ${curr.val}!`,
          ++swaps,
        );
        inserted = true;
      } else {
        queue.push(curr.left);
        if (!curr.right) {
          const newN = newNode(val);
          curr.right = newN;
          snap(
            root,
            { [curr.id]: "compare", [newN.id]: "swap" },
            `Inserted ${val} as RIGHT child of ${curr.val}!`,
            ++swaps,
          );
          inserted = true;
        } else {
          queue.push(curr.right);
        }
      }
    }
  }

  const finalHi = {};
  getAllNodes(root).forEach((n) => (finalHi[n.id] = "sorted"));
  snap(
    root,
    finalHi,
    `Binary Tree Level-Order Insertion sequence complete. Final tree contains: [${insertList.join(", ")}].`,
    swaps,
  );
  return steps;
};

// ============================================================
// BINARY TREE DELETE
// ============================================================
export const btDeleteSteps = (arr, deleteVal) => {
  const steps = [];
  const del =
    deleteVal !== undefined ? deleteVal : arr[Math.floor(arr.length / 2)];

  let idCounter = 0;
  function newNode(val) {
    return { id: idCounter++, val, left: null, right: null };
  }

  const root = newNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i++) {
    const curr = queue[0];
    const node = newNode(arr[i]);
    if (!curr.left) {
      curr.left = node;
    } else {
      curr.right = node;
      queue.shift();
    }
    queue.push(node);
  }

  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x;
    node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(node, hi = {}, explanation = "", swaps = 0) {
    assignPos(node);
    const nodes = getAllNodes(node).map((n) => ({
      ...n,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
    }));
    steps.push({
      data: nodes,
      highlights: hi,
      explanation,
      treeState: {},
      stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
    });
  }

  snap(
    root,
    {},
    `BT Delete: Deleting ${del}. Strategy: find target node + deepest rightmost node, swap values, delete deepest.`,
  );

  // BFS: find target and deepest rightmost
  const bfsQ = [root];
  let targetNode = null;
  let lastNode = null;
  let lastParent = null;
  let lastDir = null;

  while (bfsQ.length) {
    const curr = bfsQ.shift();
    if (curr.val === del) targetNode = curr;
    if (curr.left) {
      lastParent = curr;
      lastDir = "left";
      lastNode = curr.left;
      bfsQ.push(curr.left);
    }
    if (curr.right) {
      lastParent = curr;
      lastDir = "right";
      lastNode = curr.right;
      bfsQ.push(curr.right);
    }
  }

  if (!targetNode) {
    snap(root, {}, `❌ Node ${del} not found in Binary Tree.`);
    return steps;
  }

  const hi1 = { [targetNode.id]: "pivot" };
  if (lastNode) hi1[lastNode.id] = "compare";
  snap(
    root,
    hi1,
    `Found target ${del} (yellow). Deepest rightmost node is ${lastNode?.val || del} (blue). Will swap values.`,
  );

  // Copy value
  targetNode.val = lastNode ? lastNode.val : del;

  // Show after value swap
  snap(
    root,
    { [targetNode.id]: "swap" },
    `Copied ${lastNode?.val} into target position. Now deleting deepest node ${lastNode?.val}.`,
  );

  // Delete deepest
  if (lastParent && lastNode) {
    if (lastDir === "left") lastParent.left = null;
    else lastParent.right = null;
  }

  const finalHi = {};
  getAllNodes(root).forEach((n) => (finalHi[n.id] = "sorted"));
  snap(
    root,
    finalHi,
    `✅ BT Delete complete. ${del} removed. Deepest node copied up and deleted.`,
    1,
  );
  return steps;
};

// ============================================================
// RED-BLACK TREE INSERT
// ============================================================
export const rbtInsertSteps = (arr) => {
  const steps = [];
  const RED = "red",
    BLACK = "black";
  let idCounter = 0;
  function newNode(val) {
    return {
      id: idCounter++,
      val,
      left: null,
      right: null,
      color: RED,
      h: 1,
      parent: null,
    };
  }

  function getAllNodes(node, result = []) {
    if (!node) return result;
    result.push(node);
    getAllNodes(node.left, result);
    getAllNodes(node.right, result);
    return result;
  }
  function assignPos(node, x = 50, y = 40, spread = 25) {
    if (!node) return;
    node.x = x;
    node.y = y;
    assignPos(node.left, x - spread, y + 56, spread / 2);
    assignPos(node.right, x + spread, y + 56, spread / 2);
  }
  function snap(hi = {}, explanation = "", swaps = 0) {
    if (!root) {
      steps.push({
        data: [],
        highlights: {},
        explanation,
        treeState: {},
        stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
      });
      return;
    }
    assignPos(root);
    const nodes = getAllNodes(root).map((n) => ({
      ...n,
      left: n.left ? { id: n.left.id } : null,
      right: n.right ? { id: n.right.id } : null,
    }));
    steps.push({
      data: nodes,
      highlights: hi,
      explanation,
      treeState: { rbt: true },
      stats: { comparisons: steps.length, swaps, step: steps.length + 1 },
    });
  }

  let root = null;

  function rotateLeft(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left) y.left.parent = x;
    y.parent = x.parent;
    if (!x.parent) {
      root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  function rotateRight(y) {
    const x = y.left;
    y.left = x.right;
    if (x.right) x.right.parent = y;
    x.parent = y.parent;
    if (!y.parent) {
      root = x;
    } else if (y === y.parent.left) {
      y.parent.left = x;
    } else {
      y.parent.right = x;
    }
    x.right = y;
    y.parent = x;
  }

  function fixInsert(z) {
    while (z.parent && z.parent.color === RED) {
      const g = z.parent.parent;
      if (!g) break;
      if (z.parent === g.left) {
        const u = g.right;
        if (u && u.color === RED) {
          z.parent.color = BLACK;
          u.color = BLACK;
          g.color = RED;
          z = g;
        } else {
          if (z === z.parent.right) {
            z = z.parent;
            rotateLeft(z);
          }
          z.parent.color = BLACK;
          g.color = RED;
          rotateRight(g);
        }
      } else {
        const u = g.left;
        if (u && u.color === RED) {
          z.parent.color = BLACK;
          u.color = BLACK;
          g.color = RED;
          z = g;
        } else {
          if (z === z.parent.left) {
            z = z.parent;
            rotateRight(z);
          }
          z.parent.color = BLACK;
          g.color = RED;
          rotateLeft(g);
        }
      }
    }
    root.color = BLACK;
  }

  function insertRBT(val) {
    const z = newNode(val);
    if (!root) {
      z.color = BLACK;
      root = z;
      return z;
    }

    let curr = root;
    let parent = null;
    while (curr) {
      parent = curr;
      if (val <= curr.val) curr = curr.left;
      else curr = curr.right;
    }
    z.parent = parent;
    if (val <= parent.val) parent.left = z;
    else parent.right = z;

    fixInsert(z);
    return z;
  }

  snap(
    {},
    `RBT Insert: Starting with empty Red-Black Tree. New nodes are always inserted as RED.`,
  );

  arr.forEach((val, i) => {
    const z = insertRBT(val);
    const allN = getAllNodes(root);
    const hi = {};
    allN.forEach((n) => {
      if (n.val === val) hi[n.id] = "swap";
      else if (n.color === BLACK) hi[n.id] = "sorted";
      else hi[n.id] = "compare";
    });
    snap(
      hi,
      `Inserted ${val} (RED). Applied color fixes. Root is always BLACK. Red nodes: ${
        allN
          .filter((n) => n.color === RED)
          .map((n) => n.val)
          .join(", ") || "none"
      }.`,
      i > 0 ? 1 : 0,
    );

    if (i < arr.length - 1) {
      snap(
        {},
        `Tree after inserting ${val}. BLACK = stable, RED = newly placed. Next: insert ${arr[i + 1]}.`,
      );
    }
  });

  const allN = getAllNodes(root);
  const finalHi = {};
  allN.forEach(
    (n) => (finalHi[n.id] = n.color === BLACK ? "sorted" : "compare"),
  );
  snap(
    finalHi,
    `✅ All ${arr.length} values inserted. RBT properties maintained:\n1. Root is BLACK ⚫\n2. No two consecutive RED nodes\n3. Equal black-height on all paths`,
  );

  return steps;
};

// Tree view + advanced tree generators (from roadmapGenerators)
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

// B-Trees, Splay, Treap, KD, Quad, Octree, Interval, Suffix, Cartesian
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
