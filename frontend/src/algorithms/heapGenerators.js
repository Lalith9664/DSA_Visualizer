// Heap step generators
export const heapSortSteps = (arr) => {
  const steps = [];
  const heap = [...arr];
  const n = heap.length;
  if (n === 0) return [];

  const addStep = (
    explanation,
    highlights = {},
    activeIndices = [],
    swapIndices = [],
  ) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: {
        comparisons: steps.length,
        swaps: steps.length,
        step: steps.length,
      },
    });
  };

  addStep(
    "Initialize heap sorting. Starting by building a Max Heap from input array.",
    {},
  );

  const heapify = (size, idx) => {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    const highlights = { [idx]: "pivot" };
    if (left < size) highlights[left] = "compare";
    if (right < size) highlights[right] = "compare";

    addStep(
      `Heapifying subtree at index ${idx}. Comparing parent ${heap[idx]} with children.`,
      highlights,
      [idx, left, right],
    );

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

      addStep(
        `Parent ${prevVal} is smaller than child ${nextVal}. Swapping index ${idx} with index ${largest}.`,
        { [idx]: "swap", [largest]: "swap" },
        [idx, largest],
        [idx, largest],
      );

      heapify(size, largest);
    } else {
      addStep(
        `Subtree at index ${idx} already satisfies Max Heap property.`,
        { [idx]: "sorted" },
        [idx],
      );
    }
  };

  const lastNonLeaf = Math.floor(n / 2) - 1;
  for (let i = lastNonLeaf; i >= 0; i--) {
    heapify(n, i);
  }

  addStep(
    "Max Heap built successfully. Starting Extraction Phase: largest element is now at index 0. We will swap it with the last element and heapify.",
    {},
  );

  for (let i = n - 1; i > 0; i--) {
    const rootVal = heap[0];
    const endVal = heap[i];

    const temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;

    addStep(
      `Swapping root ${rootVal} with end element ${endVal} at index ${i}. Element ${rootVal} is now in its final sorted position.`,
      { 0: "swap", [i]: "sorted" },
      [0, i],
      [0, i],
    );

    heapify(i, 0);
  }

  const highlights = {};
  for (let i = 0; i < n; i++) highlights[i] = "sorted";
  addStep(
    "Heap Sort completed! The array is now fully sorted in ascending order.",
    highlights,
  );

  return steps;
};

export const minHeapSteps = (arr) => {
  const steps = [];
  const heap = [];
  const inputs = arr.map(Number).filter((x) => !isNaN(x));

  const addStep = (
    explanation,
    highlights = {},
    activeIndices = [],
    swapIndices = [],
  ) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: {
        comparisons: steps.length,
        swaps: steps.length,
        step: steps.length,
      },
    });
  };

  addStep(
    "Initialize empty Min Heap. Inserting elements one-by-one and bubbling up.",
    {},
  );

  inputs.forEach((val) => {
    heap.push(val);
    let curr = heap.length - 1;
    addStep(
      `Inserted value ${val} at the end of the heap array (index ${curr}). Bubbling up.`,
      { [curr]: "pivot" },
      [curr],
    );

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      addStep(
        `Comparing element ${heap[curr]} at index ${curr} with parent ${heap[parent]} at index ${parent}.`,
        { [curr]: "pivot", [parent]: "compare" },
        [curr, parent],
      );

      if (heap[curr] < heap[parent]) {
        const temp = heap[curr];
        heap[curr] = heap[parent];
        heap[parent] = temp;

        addStep(
          `Swapped index ${curr} with index ${parent} since child ${temp} < parent ${heap[curr]}.`,
          { [curr]: "swap", [parent]: "swap" },
          [curr, parent],
          [curr, parent],
        );
        curr = parent;
      } else {
        addStep(
          `No swap needed. Heap property satisfied.`,
          { [curr]: "sorted" },
          [curr],
        );
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
  const inputs = arr.map(Number).filter((x) => !isNaN(x));

  const addStep = (
    explanation,
    highlights = {},
    activeIndices = [],
    swapIndices = [],
  ) => {
    steps.push({
      data: [...heap],
      heapState: { activeIndices, swapIndices },
      highlights: { ...highlights },
      explanation,
      stats: {
        comparisons: steps.length,
        swaps: steps.length,
        step: steps.length,
      },
    });
  };

  addStep(
    "Initialize empty Max Heap. Inserting elements one-by-one and bubbling up.",
    {},
  );

  inputs.forEach((val) => {
    heap.push(val);
    let curr = heap.length - 1;
    addStep(
      `Inserted value ${val} at the end of the heap array (index ${curr}). Bubbling up.`,
      { [curr]: "pivot" },
      [curr],
    );

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);
      addStep(
        `Comparing element ${heap[curr]} at index ${curr} with parent ${heap[parent]} at index ${parent}.`,
        { [curr]: "pivot", [parent]: "compare" },
        [curr, parent],
      );

      if (heap[curr] > heap[parent]) {
        const temp = heap[curr];
        heap[curr] = heap[parent];
        heap[parent] = temp;

        addStep(
          `Swapped index ${curr} with index ${parent} since child ${temp} > parent ${heap[curr]}.`,
          { [curr]: "swap", [parent]: "swap" },
          [curr, parent],
          [curr, parent],
        );
        curr = parent;
      } else {
        addStep(
          `No swap needed. Heap property satisfied.`,
          { [curr]: "sorted" },
          [curr],
        );
        break;
      }
    }
  });

  return steps;
};

