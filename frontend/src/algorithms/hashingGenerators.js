// Hashing algorithms step generators

// ─── Linear Probing ────────────────────────────────────────────────────────
export const linearProbingSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 7;
  
  // Initialize empty buckets representing open addressing (max 1 item per slot)
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize open addressing hash table with ${numBuckets} empty slots. Collision resolution: Linear Probing.`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const baseSlot = Math.abs(val) % numBuckets;
    let slot = baseSlot;
    let probes = 0;
    let collisionDetected = false;

    // Highlight the starting element we are inserting
    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Inserting ${val}. Initial hash calculation: ${val} % ${numBuckets} = slot ${baseSlot}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });

    while (hash[slot].length > 0 && probes < numBuckets) {
      collisionDetected = true;
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "pivot" },
        explanation: `Collision at slot ${slot}! Slot already contains ${hash[slot][0].key}. Probing next linear slot...`,
        stats: { comparisons: probes + 1, swaps: 0, step: steps.length },
      });
      probes++;
      slot = (baseSlot + probes) % numBuckets;
    }

    if (probes >= numBuckets) {
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "danger" },
        explanation: `Hash table is FULL! Cannot insert value ${val} using Linear Probing.`,
        stats: { comparisons: probes, swaps: 0, step: steps.length },
      });
      break;
    }

    hash[slot] = [{ key: val, val: val }];

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "sorted" },
      explanation: collisionDetected
        ? `Found empty slot ${slot} after ${probes} probe(s). Inserted value ${val} at slot ${slot}.`
        : `Slot ${slot} is empty. Inserted value ${val} at slot ${slot}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Linear Probing hash insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};

// ─── Quadratic Probing ─────────────────────────────────────────────────────
export const quadraticProbingSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 7;
  
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize open addressing hash table with ${numBuckets} empty slots. Collision resolution: Quadratic Probing (slot + i²).`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const baseSlot = Math.abs(val) % numBuckets;
    let slot = baseSlot;
    let probes = 0;
    let collisionDetected = false;

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Inserting ${val}. Initial hash calculation: ${val} % ${numBuckets} = slot ${baseSlot}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });

    while (hash[slot].length > 0 && probes < numBuckets) {
      collisionDetected = true;
      const nextProbeIdx = (baseSlot + (probes + 1) * (probes + 1)) % numBuckets;
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "pivot" },
        explanation: `Collision at slot ${slot} with ${hash[slot][0].key}. Probing quadratic slot: (${baseSlot} + ${probes + 1}²) % ${numBuckets} = slot ${nextProbeIdx}.`,
        stats: { comparisons: probes + 1, swaps: 0, step: steps.length },
      });
      probes++;
      slot = (baseSlot + probes * probes) % numBuckets;
    }

    if (probes >= numBuckets) {
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "danger" },
        explanation: `Quadratic Probing failed to find an empty slot for ${val} within ${numBuckets} iterations.`,
        stats: { comparisons: probes, swaps: 0, step: steps.length },
      });
      break;
    }

    hash[slot] = [{ key: val, val: val }];

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "sorted" },
      explanation: collisionDetected
        ? `Found empty slot ${slot} after ${probes} probe(s). Inserted value ${val} at slot ${slot}.`
        : `Slot ${slot} is empty. Inserted value ${val} at slot ${slot}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Quadratic Probing hash insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};

// ─── Double Hashing ────────────────────────────────────────────────────────
export const doubleHashingSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 7;
  
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize open addressing hash table with ${numBuckets} empty slots. Collision resolution: Double Hashing. Hash 2 function: 5 - (val % 5).`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const baseSlot = Math.abs(val) % numBuckets;
    const stepSize = 5 - (Math.abs(val) % 5);
    let slot = baseSlot;
    let probes = 0;
    let collisionDetected = false;

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Inserting ${val}. Hash 1: ${val} % ${numBuckets} = slot ${baseSlot}. Hash 2 step size: 5 - (${val} % 5) = ${stepSize}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });

    while (hash[slot].length > 0 && probes < numBuckets) {
      collisionDetected = true;
      const nextProbeIdx = (baseSlot + (probes + 1) * stepSize) % numBuckets;
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "pivot" },
        explanation: `Collision at slot ${slot} with ${hash[slot][0].key}. Probing double hash slot: (${baseSlot} + ${probes + 1} * ${stepSize}) % ${numBuckets} = slot ${nextProbeIdx}.`,
        stats: { comparisons: probes + 1, swaps: 0, step: steps.length },
      });
      probes++;
      slot = (baseSlot + probes * stepSize) % numBuckets;
    }

    if (probes >= numBuckets) {
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "danger" },
        explanation: `Double Hashing failed to find an empty slot for ${val} within ${numBuckets} iterations.`,
        stats: { comparisons: probes, swaps: 0, step: steps.length },
      });
      break;
    }

    hash[slot] = [{ key: val, val: val }];

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "sorted" },
      explanation: collisionDetected
        ? `Found empty slot ${slot} after ${probes} probe(s). Inserted value ${val} at slot ${slot}.`
        : `Slot ${slot} is empty. Inserted value ${val} at slot ${slot}.`,
      stats: { comparisons: probes, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Double Hashing insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};

// ─── Separate Chaining ─────────────────────────────────────────────────────
export const separateChainingSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 5;
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize empty hash map chaining table with ${numBuckets} buckets. Hash function: slot = value % ${numBuckets}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const slot = Math.abs(val) % numBuckets;

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Hashing value ${val}. Computed index slot: ${val} % ${numBuckets} = slot ${slot}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });

    hash[slot].push({ key: val, val: val });

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "sorted" },
      explanation: `Inserted value ${val} into bucket slot ${slot}. Bucket contents: [${hash[slot].map(item => item.key).join(", ")}].`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Separate Chaining hash insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};


// ─── Moved Hashing Step Generators from monolithic files ────────────────────────
export const hashMapSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 5;
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize empty hash map chaining table with ${numBuckets} buckets. Hash function: slot = value % ${numBuckets}.`,
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const slot = Math.abs(val) % numBuckets;

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Hashing value ${val}. Computed index slot: ${val} % ${numBuckets} = slot ${slot}.`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });

    hash[slot].push({ key: val, val: val });

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "sorted" },
      explanation: `Inserted value ${val} into bucket slot ${slot}. Bucket contents: [${hash[slot].map(item => item.key).join(", ")}].`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Hash Map insertion complete.",
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};

export const groupAnagramsSteps = (wordsStr) => {
  const steps = [];
  const words = wordsStr
    .split(/[\s,]+/)
    .map((w) => w.trim())
    .filter(Boolean);
  const n = words.length;
  if (n === 0) return [];
  const hash = {};

  steps.push({
    data: { arr: words, hash: {} },
    hashState: { word: null, currentIdx: -1 },
    highlights: {},
    explanation: "Initialize empty dictionary storage for sorting anagram buckets.",
    stats: { comparisons: 0, swaps: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const word = words[i];
    const sorted = word.split("").sort().join("");

    steps.push({
      data: { arr: words, hash: JSON.parse(JSON.stringify(hash)) },
      hashState: { word: word, currentIdx: i },
      highlights: { [i]: "pivot" },
      explanation: `Processing word "${word}". Sorted key representation: "${sorted}".`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });

    if (!hash[sorted]) hash[sorted] = [];
    hash[sorted].push(word);

    steps.push({
      data: { arr: words, hash: JSON.parse(JSON.stringify(hash)) },
      hashState: { word: word, currentIdx: i },
      highlights: { [i]: "sorted" },
      explanation: `Mapped "${word}" under key "${sorted}". Anagram bucket: [${hash[sorted].join(", ")}].`,
      stats: { comparisons: i, swaps: 0, step: steps.length },
    });
  }

  steps.push({
    data: { arr: words, hash: JSON.parse(JSON.stringify(hash)) },
    hashState: { word: null, currentIdx: -1 },
    highlights: {},
    explanation: `Completed grouping! Discovered ${Object.keys(hash).length} distinct anagram families.`,
    stats: { comparisons: n, swaps: 0, step: steps.length },
  });

  return steps;
};

export const longestConsecutiveSequenceSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((nVal) => !isNaN(nVal));
  const set = Array.from(new Set(nums));
  const n = set.length;

  steps.push({
    data: { nums, set, activeNum: null, streak: 0, longestStreak: 0 },
    explanation: "Populate HashSet with distinct numbers from the input. Set lookup takes O(1) time.",
    stats: { comparisons: 0, visited: 0, step: 0 },
  });

  let longestStreak = 0;

  for (let i = 0; i < n; i++) {
    const val = set[i];
    const isStartOfStreak = !set.includes(val - 1);

    steps.push({
      data: { nums, set, activeNum: val, streak: 0, longestStreak },
      explanation: `Checking if ${val} is the start of a consecutive sequence. Is ${val - 1} in the set? ${
        !isStartOfStreak ? "Yes (skip)" : "No (this is a sequence start)"
      }`,
      stats: { comparisons: i + 1, visited: i, step: steps.length },
    });

    if (isStartOfStreak) {
      let currentNum = val;
      let currentStreak = 1;

      while (set.includes(currentNum + 1)) {
        steps.push({
          data: {
            nums,
            set,
            activeNum: currentNum,
            streak: currentStreak,
            longestStreak,
          },
          explanation: `Streak active! Found consecutive successor ${currentNum + 1} in set. Incrementing streak.`,
          stats: {
            comparisons: i + 1,
            visited: i + currentStreak,
            step: steps.length,
          },
        });
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
      steps.push({
        data: {
          nums,
          set,
          activeNum: currentNum,
          streak: currentStreak,
          longestStreak,
        },
        explanation: `Streak ended at ${currentStreak} numbers. Max streak updated: ${longestStreak}.`,
        stats: {
          comparisons: i + 1,
          visited: i + currentStreak,
          step: steps.length,
        },
      });
    }
  }

  steps.push({
    data: { nums, set, activeNum: null, streak: 0, longestStreak },
    explanation: `Sequence lookup finished. Longest consecutive sequence length: ${longestStreak}.`,
    stats: { comparisons: n, visited: n, step: steps.length },
  });

  return steps;
};

export const bloomFilterSteps = (rawInput) => {
  const steps = [];
  const words = rawInput
    .split(/[\s,]+/)
    .map((w) => w.trim())
    .filter(Boolean);
  const n = words.length;
  const bitArraySize = 10;
  const bitArray = Array(bitArraySize).fill(0);

  const hash1 = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i);
    return hash % bitArraySize;
  };
  const hash2 = (str) => {
    let hash = 7;
    for (let i = 0; i < str.length; i++) hash = hash * 31 + str.charCodeAt(i);
    return Math.abs(hash) % bitArraySize;
  };

  steps.push({
    data: { filter: [...bitArray], word: null, h1: null, h2: null },
    explanation: `Initialize empty Bloom Filter bit array of size ${bitArraySize}. Hash 1: Sum(Chars) % ${bitArraySize}. Hash 2: Murmur-like % ${bitArraySize}.`,
    stats: { inserted: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const word = words[i];
    const idx1 = hash1(word);
    const idx2 = hash2(word);

    steps.push({
      data: { filter: [...bitArray], word, h1: idx1, h2: idx2 },
      explanation: `Hashing "${word}". Hash 1 yields index ${idx1}. Hash 2 yields index ${idx2}.`,
      stats: { inserted: i, step: steps.length },
    });

    bitArray[idx1] = 1;
    bitArray[idx2] = 1;

    steps.push({
      data: { filter: [...bitArray], word, h1: idx1, h2: idx2 },
      explanation: `Set bits at indices ${idx1} and ${idx2} to 1. "${word}" is now registered in the filter.`,
      stats: { inserted: i + 1, step: steps.length },
    });
  }

  steps.push({
    data: { filter: [...bitArray], word: null, h1: null, h2: null },
    explanation: `Bloom Filter construction completed. Discovered ${bitArray.filter((x) => x === 1).length}/${bitArraySize} populated bit slots.`,
    stats: { inserted: n, step: steps.length },
  });

  return steps;
};

export const hashSetSteps = (arr) => {
  const steps = [];
  const nums = arr.map(Number).filter((x) => !isNaN(x));
  const n = nums.length;
  const numBuckets = 5;
  const hash = {};
  for (let i = 0; i < numBuckets; i++) hash[i] = [];

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: `Initialize empty Hash Set buckets with ${numBuckets} slots. Standard duplicates check active.`,
    stats: { size: 0, step: 0 },
  });

  for (let i = 0; i < n; i++) {
    const val = nums[i];
    const slot = Math.abs(val) % numBuckets;

    steps.push({
      data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
      highlights: { [i]: "pivot" },
      explanation: `Checking value ${val}. Hash slot: ${val} % ${numBuckets} = slot ${slot}.`,
      stats: { size: i, step: steps.length },
    });

    const alreadyExists = hash[slot].some((item) => item.key === val);

    if (alreadyExists) {
      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "danger" },
        explanation: `Duplicate detected! Value ${val} already exists in bucket ${slot}. Skipping insertion.`,
        stats: { size: i, step: steps.length },
      });
    } else {
      hash[slot].push({ key: val, val: val });

      steps.push({
        data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
        highlights: { [i]: "sorted" },
        explanation: `Value ${val} is unique. Inserted value ${val} into bucket slot ${slot}.`,
        stats: { size: i + 1, step: steps.length },
      });
    }
  }

  steps.push({
    data: { buckets: JSON.parse(JSON.stringify(Object.values(hash))), size: numBuckets },
    highlights: {},
    explanation: "Hash Set insertion completed.",
    stats: { size: n, step: steps.length },
  });

  return steps;
};
