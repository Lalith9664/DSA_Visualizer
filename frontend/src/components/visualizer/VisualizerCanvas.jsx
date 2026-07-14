import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVisualizer } from "../../context/VisualizerContext";
import { Play, Maximize2, Minimize2 } from "lucide-react";

const VisualizerCanvas = ({
  algorithm,
  loading,
  isExpanded,
  onToggleExpand,
}) => {
  const { currentStep, steps } = useVisualizer();

  const getCanvasContent = () => {
    if (loading || !algorithm) {
      return (
        <div
          className={`w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800 ${isExpanded ? "h-full" : "min-h-[320px] h-80"}`}
        >
          <div className="skeuo-screen-overlay absolute inset-0 z-0 opacity-30" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              {/* Pulsing outer glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
              <div
                className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-cyan-500 animate-spin"
                style={{ animationDuration: "0.9s" }}
              />
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-xs font-semibold tracking-widest text-slate-300 font-mono animate-pulse uppercase">
                Initializing Engine
              </span>
              <span className="text-[9px] font-bold text-slate-500 font-mono tracking-widest uppercase mt-0.5">
                DSA Visualizer Console
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (steps.length === 0) {
      return (
        <div
          className={`w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800 ${isExpanded ? "h-full" : "min-h-[320px] h-80"}`}
        >
          <div className="skeuo-screen-overlay absolute inset-0 z-0 opacity-30" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-dashed border-slate-700 flex items-center justify-center text-slate-500/60 animate-pulse bg-slate-900/40">
              <Play className="w-5 h-5 opacity-40" />
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-xs font-semibold tracking-widest text-slate-400 font-mono uppercase">
                Canvas Cleared
              </span>
              <span className="text-[9px] font-bold text-slate-600 font-mono tracking-widest uppercase mt-0.5">
                Enter input to begin visualization
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`w-full relative z-10 ${isExpanded ? "h-full" : ""}`}>
        {getCanvas()}
      </div>
    );
  };

  const currentSnap = steps[currentStep] || {};
  const {
    data,
    highlights = {},
    listState,
    stackState,
    queueState,
    treeState,
    graphState,
    hanoiState,
    dpState,
    hashState,
    mergeState,
    kadaneState,
    prefixState,
    suffixState,
    diffState,
  } = currentSnap;

  // Helpers to fetch highlighting colors
  const getHighlightClass = (idx) => {
    let status = highlights[idx];

    if (!status) {
      if (
        highlights.swapped &&
        Array.isArray(highlights.swapped) &&
        highlights.swapped.includes(idx)
      ) {
        status = "swap";
      } else if (
        highlights.active &&
        Array.isArray(highlights.active) &&
        highlights.active.includes(idx)
      ) {
        status = "compare";
      } else if (highlights.left === idx || highlights.right === idx) {
        status = "pivot";
      } else if (
        highlights.sorted &&
        Array.isArray(highlights.sorted) &&
        highlights.sorted.includes(idx)
      ) {
        status = "sorted";
      }
    }

    switch (status) {
      case "compare":
        return "bg-[#10B981] border-white/20 text-white shadow-md scale-105";
      case "swap":
        return "bg-[#EF4444] border-white/20 text-white shadow-md scale-105";
      case "pivot":
        return "bg-[#8B5CF6] border-white/20 text-white shadow-md scale-105";
      case "success":
      case "sorted":
        return "bg-[#22C55E] border-white/20 text-white shadow-sm";
      default:
        return "bg-white dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/40 text-text-primary dark:text-[#F4F7FE] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_inset_-2px_-2px_4px_rgba(0,0,0,0.04)]";
    }
  };

  // --- 1. RENDER SORTING & BASIC ARRAY ---
  const renderArrayCanvas = () => {
    const arr = Array.isArray(data)
      ? data
      : data && Array.isArray(data.arr)
        ? data.arr
        : [];
    const maxValue = Math.max(...arr, 1);
    return (
      <div className="w-full h-72 flex items-end justify-center gap-2 px-4 pb-4">
        {arr.map((val, idx) => {
          const heightPercent = (val / maxValue) * 75 + 10; // clamp height between 10% and 85%
          return (
            <motion.div
              key={idx}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex-1 flex flex-col items-center justify-end h-full gap-2"
            >
              {/* Value Indicator Bubble */}
              <span className="font-mono text-xs text-slate-400 select-none">
                {val}
              </span>
              {/* Bar */}
              <div
                style={{ height: `${heightPercent}%` }}
                className={`
                  w-full rounded-t-md border transition-all duration-300 relative group
                  ${getHighlightClass(idx)}
                `}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md" />
              </div>
              {/* Index reading */}
              <span className="font-mono text-[10px] text-slate-500 bg-slate-900/40 px-1 border border-slate-800/50 rounded select-none">
                i:{idx}
              </span>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // --- 1B. RENDER MERGE SORTED ARRAYS ---
  const renderMergeArraysCanvas = () => {
    const {
      arr1 = [],
      arr2 = [],
      merged = [],
      i = 0,
      j = 0,
    } = mergeState || {};

    const isComplete =
      arr1.length === 0 && arr2.length === 0 && merged.length > 0;

    if (isComplete) {
      return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-4">
          <span className="text-xs font-bold text-success uppercase tracking-widest animate-pulse">
            ★ Merged Result ★
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 px-6">
            {merged.map((val, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="w-12 h-12 rounded-xl bg-success/15 border border-success/30 flex flex-col items-center justify-center font-mono text-sm font-extrabold text-success"
              >
                <span>{val}</span>
                <span className="text-[8px] opacity-75 font-normal">
                  #{idx}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    const totalCapacity = arr1.length + arr2.length;

    return (
      <div className="w-full min-h-[280px] h-full flex flex-col gap-5 justify-between p-4 font-sans">
        {/* Source Arrays A and B */}
        <div className="flex flex-col md:flex-row justify-around gap-4 w-full">
          {/* Array A */}
          <div className="flex-1 flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/10 dark:bg-slate-950/20 border border-slate-200/20 dark:border-transparent">
            <span className="text-[10px] font-extrabold tracking-wider text-text-secondary uppercase">
              Array A
            </span>
            <div className="flex gap-1.5">
              {arr1.map((val, idx) => {
                const isActive = idx === i;
                return (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                      isActive
                        ? "bg-primary/20 border-primary text-primary scale-110 shadow-sm"
                        : idx < i
                          ? "bg-slate-100 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-text-secondary opacity-40"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                    }`}
                  >
                    <span>{val}</span>
                    <span className="text-[7px] text-slate-500 font-normal">
                      #{idx}
                    </span>
                    {isActive && (
                      <span className="absolute -top-3.5 text-[8px] font-extrabold text-primary tracking-widest animate-bounce">
                        i
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Array B */}
          <div className="flex-1 flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/10 dark:bg-slate-950/20 border border-slate-200/20 dark:border-transparent">
            <span className="text-[10px] font-extrabold tracking-wider text-text-secondary uppercase">
              Array B
            </span>
            <div className="flex gap-1.5">
              {arr2.map((val, idx) => {
                const isActive = idx === j;
                return (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                      isActive
                        ? "bg-purple-500/20 border-purple-500 text-purple-400 scale-110 shadow-sm"
                        : idx < j
                          ? "bg-slate-100 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-text-secondary opacity-40"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                    }`}
                  >
                    <span>{val}</span>
                    <span className="text-[7px] text-slate-500 font-normal">
                      #{idx}
                    </span>
                    {isActive && (
                      <span className="absolute -top-3.5 text-[8px] font-extrabold text-purple-400 tracking-widest animate-bounce">
                        j
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Direction Indicator */}
        <div className="flex items-center justify-center gap-1.5 text-text-secondary opacity-60">
          <span className="w-8 h-px bg-current opacity-20" />
          <span className="text-[9px] font-extrabold tracking-widest uppercase">
            Merging into output
          </span>
          <span className="w-8 h-px bg-current opacity-20" />
        </div>

        {/* Merged Array */}
        <div className="w-full flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-success/5 border border-success/10">
          <span className="text-[10px] font-extrabold tracking-wider text-success uppercase">
            Merged Array
          </span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {Array.from({ length: totalCapacity }).map((_, idx) => {
              const hasElement = idx < merged.length;
              const val = hasElement ? merged[idx] : "";
              const isNewest = idx === merged.length - 1;
              return (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                    hasElement
                      ? isNewest
                        ? "bg-success/25 border-success text-success scale-105 shadow-sm"
                        : "bg-success/10 border-success/30 text-success"
                      : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                  }`}
                >
                  <span>{val}</span>
                  {hasElement && (
                    <span className="text-[7px] text-success/60 font-normal">
                      #{idx}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // --- 1C. RENDER KADANE'S SUBARRAY MAX ---
  const renderKadaneCanvas = () => {
    const {
      maxSoFar = 0,
      currMax = 0,
      start = 0,
      end = 0,
      currIndex = -1,
    } = kadaneState || {};
    const arr = Array.isArray(data) ? data : [];

    const maxValue = Math.max(...arr, 1);
    const minValue = Math.min(...arr, -1);
    const absoluteMax = Math.max(Math.abs(maxValue), Math.abs(minValue));

    return (
      <div className="w-full min-h-[300px] flex flex-col gap-6 p-4">
        {/* KPI Score Cards */}
        <div className="flex justify-around gap-4 w-full">
          {/* Current Subarray Sum */}
          <div className="flex-1 flex flex-col items-center p-3 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Current Subarray Sum (curr_max)
            </span>
            <span
              className={`text-2xl font-black mt-1 font-mono ${currMax >= 0 ? "text-primary" : "text-red-500"}`}
            >
              {currMax}
            </span>
            <span className="text-[9px] text-slate-500 mt-0.5">
              Sum ending at index {currIndex !== -1 ? currIndex : "N/A"}
            </span>
          </div>

          {/* Max Subarray Sum Found */}
          <div className="flex-1 flex flex-col items-center p-3 rounded-2xl bg-success/5 border border-success/20 shadow-sm relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 right-0 h-1 bg-success" />
            <span className="text-[10px] font-extrabold tracking-widest text-success uppercase">
              🏆 Max Sum So Far (max_so_far)
            </span>
            <span className="text-2xl font-black mt-1 text-success font-mono">
              {maxSoFar}
            </span>
            <span className="text-[9px] text-success/70 mt-0.5">
              Best subarray: indices [{start}...{end}]
            </span>
          </div>
        </div>

        {/* Array Visualization Row */}
        <div className="w-full flex items-end justify-center gap-2 px-2 pb-6 min-h-[160px] relative">
          {arr.map((val, idx) => {
            const isActive = idx === currIndex;

            const highlightType = highlights[idx];
            let highlightBorder = "border-slate-200 dark:border-slate-800";
            let highlightBg = "bg-white dark:bg-slate-900";
            let highlightText = "text-text-primary dark:text-[#F4F7FE]";
            let label = "";

            if (highlightType === "pivot") {
              highlightBorder = "border-primary ring-2 ring-primary/20";
              highlightBg = "bg-primary/10";
              highlightText = "text-primary font-bold";
              label = "CURR";
            } else if (highlightType === "compare") {
              highlightBorder = "border-purple-500/50";
              highlightBg = "bg-purple-500/5";
              highlightText = "text-purple-400 font-semibold";
            } else if (highlightType === "sorted") {
              highlightBorder = "border-success/60";
              highlightBg = "bg-success/10";
              highlightText = "text-success font-bold";
            }

            const heightPercent = (Math.abs(val) / absoluteMax) * 55 + 5;

            return (
              <motion.div
                key={idx}
                layout
                className="flex-1 flex flex-col items-center justify-end h-full gap-2 relative"
              >
                <span
                  className={`font-mono text-xs font-bold ${val >= 0 ? "text-slate-300" : "text-red-400"}`}
                >
                  {val}
                </span>

                <div className="w-full h-24 flex flex-col justify-center relative">
                  {val >= 0 ? (
                    <div
                      className="absolute bottom-1/2 left-0 right-0 flex flex-col justify-end"
                      style={{ height: `${heightPercent}%` }}
                    >
                      <div
                        className={`w-full h-full rounded-t-md border-t border-x transition-all duration-300 ${
                          highlightType === "sorted"
                            ? "bg-success/30 border-success"
                            : highlightType === "pivot"
                              ? "bg-primary/45 border-primary"
                              : highlightType === "compare"
                                ? "bg-purple-500/20 border-purple-500"
                                : "bg-slate-300 dark:bg-slate-800 border-slate-400 dark:border-slate-700"
                        }`}
                      />
                    </div>
                  ) : (
                    <div
                      className="absolute top-1/2 left-0 right-0 flex flex-col justify-start"
                      style={{ height: `${heightPercent}%` }}
                    >
                      <div
                        className={`w-full h-full rounded-b-md border-b border-x transition-all duration-300 ${
                          highlightType === "sorted"
                            ? "bg-success/30 border-success"
                            : highlightType === "pivot"
                              ? "bg-primary/45 border-primary"
                              : highlightType === "compare"
                                ? "bg-purple-500/20 border-purple-500"
                                : "bg-red-500/25 border-red-500/50"
                        }`}
                      />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-1/2 h-0.5 bg-slate-400/30 dark:bg-slate-700/50 z-10" />
                </div>

                <div
                  className={`w-full py-1 text-center font-mono text-[9px] rounded border transition-all duration-300 ${highlightBorder} ${highlightBg} ${highlightText}`}
                >
                  i:{idx}
                </div>

                {label && (
                  <span className="absolute -bottom-5 text-[8px] font-extrabold text-primary uppercase tracking-widest animate-bounce">
                    {label}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Subarray range indicators */}
        <div className="flex flex-col gap-2 bg-slate-900/5 dark:bg-slate-950/20 p-3 rounded-2xl border border-slate-200/10 text-left text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-success/20 border border-success/40" />
            <span className="text-text-secondary">
              Maximum Subarray Range:{" "}
              <strong className="text-success">
                [{start} ... {end}]
              </strong>{" "}
              (Sum: <strong className="text-success">{maxSoFar}</strong>)
            </span>
          </div>
          {currIndex !== -1 && (
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-purple-500/20 border border-purple-500/40" />
              <span className="text-text-secondary">
                Active Subarray Candidate:{" "}
                <strong className="text-purple-400">
                  Ends at index {currIndex}
                </strong>{" "}
                (Current Sum:{" "}
                <strong
                  className={currMax >= 0 ? "text-purple-400" : "text-red-400"}
                >
                  {currMax}
                </strong>
                )
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- 1D. RENDER COUNTING SORT ---
  const renderCountingSortCanvas = () => {
    const { arr = [], count = [], output = [], phase = "" } = data || {};
    const {
      countIdx = -1,
      arrIdx = -1,
      placed = -1,
      sorted = [],
    } = highlights || {};

    return (
      <div className="w-full min-h-[300px] flex flex-col gap-5 p-4 font-sans text-left">
        {/* Phase Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Counting Sort Visualizer
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
              phase === "count"
                ? "bg-primary/20 text-primary"
                : phase === "prefix"
                  ? "bg-purple-500/20 text-purple-400"
                  : phase === "place"
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-success/20 text-success animate-pulse"
            }`}
          >
            Phase:{" "}
            {phase === "count"
              ? "1. Count Frequencies"
              : phase === "prefix"
                ? "2. Accumulate Positions"
                : phase === "place"
                  ? "3. Place Elements"
                  : "Complete"}
          </span>
        </div>

        {/* 1. Input Array */}
        <div className="flex flex-col gap-1 bg-slate-900/5 dark:bg-slate-950/20 p-2.5 rounded-xl border border-slate-200/5">
          <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider">
            Input Array (arr)
          </span>
          <div className="flex flex-wrap gap-1.5">
            {arr.map((val, idx) => {
              const isActive = idx === arrIdx;
              const isSorted = sorted.includes(idx) || phase === "done";
              return (
                <div
                  key={idx}
                  className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                    isActive
                      ? "bg-primary/20 border-primary text-primary scale-110 shadow-sm"
                      : isSorted
                        ? "bg-success/15 border-success/30 text-success"
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                  }`}
                >
                  <span>{val}</span>
                  <span className="text-[6px] text-slate-500 font-normal">
                    #{idx}
                  </span>
                  {isActive && (
                    <span className="absolute -top-3 text-[7px] text-primary font-black animate-bounce">
                      i
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Count Array */}
        <div className="flex flex-col gap-1 bg-slate-900/5 dark:bg-slate-950/20 p-2.5 rounded-xl border border-slate-200/5">
          <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider">
            Frequency Counts (count)
          </span>
          <div className="flex flex-wrap gap-1.5">
            {count.map((val, idx) => {
              const isActive = idx === countIdx;
              return (
                <div
                  key={idx}
                  className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                    isActive
                      ? "bg-purple-500/20 border-purple-500 text-purple-400 scale-110 shadow-sm"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                  }`}
                >
                  <span
                    className={
                      val > 0 ? "text-purple-400 font-extrabold" : "opacity-40"
                    }
                  >
                    {val}
                  </span>
                  <span className="text-[6px] text-slate-500 font-normal">
                    val:{idx}
                  </span>
                  {isActive && (
                    <span className="absolute -top-3 text-[7px] text-purple-400 font-black animate-bounce">
                      ★
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Output Array */}
        {phase !== "count" && phase !== "prefix" && (
          <div className="flex flex-col gap-1 bg-success/5 p-2.5 rounded-xl border border-success/10">
            <span className="text-[9px] font-extrabold text-success uppercase tracking-wider">
              Sorted Output (out)
            </span>
            <div className="flex flex-wrap gap-1.5">
              {output.map((val, idx) => {
                const isActive = idx === placed;
                const hasVal = val !== -1;
                return (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                      isActive
                        ? "bg-success/20 border-success text-success scale-110 shadow-sm"
                        : hasVal
                          ? "bg-success/5 border-success/20 text-success"
                          : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                    }`}
                  >
                    <span>{hasVal ? val : ""}</span>
                    <span className="text-[6px] text-slate-500 font-normal">
                      #{idx}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- 1E. RENDER TRAPPING RAIN WATER ---
  const renderTrappingRainWaterCanvas = () => {
    const {
      heights = [],
      water = 0,
      left = 0,
      right = 0,
      leftMax = 0,
      rightMax = 0,
    } = data || {};
    const maxHeight = Math.max(...heights, 1);

    return (
      <div className="w-full min-h-[300px] flex flex-col gap-6 p-4 font-sans text-left">
        {/* KPI Indicators */}
        <div className="flex justify-around gap-4 w-full">
          {/* Left Max Height */}
          <div className="flex-1 flex flex-col items-center p-3 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Left Max (lMax)
            </span>
            <span className="text-2xl font-black mt-1 text-primary font-mono">
              {leftMax}
            </span>
          </div>

          {/* Total Trapped Water */}
          <div className="flex-1 flex flex-col items-center p-3 rounded-2xl bg-sky-500/15 border border-sky-500/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-sky-500" />
            <span className="text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">
              💧 Trapped Water
            </span>
            <span className="text-2xl font-black mt-1 text-sky-400 font-mono">
              {water} <span className="text-xs font-normal">units</span>
            </span>
          </div>

          {/* Right Max Height */}
          <div className="flex-1 flex flex-col items-center p-3 rounded-2xl bg-purple-500/5 border border-purple-500/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Right Max (rMax)
            </span>
            <span className="text-2xl font-black mt-1 text-purple-400 font-mono">
              {rightMax}
            </span>
          </div>
        </div>

        {/* Rainwater Column Visualization */}
        <div className="w-full flex items-end justify-center gap-2 px-2 pb-6 min-h-[160px] relative">
          {heights.map((h, idx) => {
            const isLeftPointer = idx === left;
            const isRightPointer = idx === right;

            let trappedH = 0;
            if (idx <= left) {
              trappedH = Math.max(0, leftMax - h);
            } else if (idx >= right) {
              trappedH = Math.max(0, rightMax - h);
            }

            const terrainHeightPercent = (h / maxHeight) * 60;
            const waterHeightPercent = (trappedH / maxHeight) * 60;

            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center justify-end h-full gap-2 relative"
              >
                {/* Column stack (Terrain + Water) */}
                <div className="w-full h-32 flex flex-col justify-end relative">
                  {/* Trapped Water Block */}
                  {trappedH > 0 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      style={{
                        height: `${waterHeightPercent}%`,
                        transformOrigin: "bottom",
                      }}
                      className="w-full bg-sky-500/50 border-t border-x border-sky-400/80 rounded-t-sm"
                    />
                  )}
                  {/* Terrain Block */}
                  <div
                    style={{ height: `${terrainHeightPercent}%` }}
                    className={`w-full rounded-t-sm border transition-all duration-300 ${
                      isLeftPointer
                        ? "bg-primary/45 border-primary shadow-sm scale-105"
                        : isRightPointer
                          ? "bg-purple-500/45 border-purple-500 shadow-sm scale-105"
                          : "bg-slate-400 dark:bg-slate-700 border-slate-500 dark:border-slate-600"
                    }`}
                  >
                    {h > 0 && (
                      <span className="block text-center text-[9px] font-mono font-bold text-white/90 select-none mt-0.5">
                        {h}
                      </span>
                    )}
                  </div>
                </div>

                {/* Index block */}
                <div
                  className={`w-full py-0.5 text-center font-mono text-[9px] rounded border transition-all duration-300 ${
                    isLeftPointer
                      ? "bg-primary/20 border-primary text-primary font-bold"
                      : isRightPointer
                        ? "bg-purple-500/20 border-purple-500 text-purple-400 font-bold"
                        : "border-slate-200/20 text-text-secondary"
                  }`}
                >
                  {idx}
                </div>

                {/* Pointer Label */}
                {isLeftPointer && (
                  <span className="absolute -bottom-5 text-[8px] font-extrabold text-primary uppercase tracking-widest animate-bounce">
                    L
                  </span>
                )}
                {isRightPointer && (
                  <span className="absolute -bottom-5 text-[8px] font-extrabold text-purple-400 uppercase tracking-widest animate-bounce">
                    R
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 1F. RENDER SPLITTING ARRAYS ---
  const renderSplittingArraysCanvas = () => {
    const {
      arr = [],
      left = [],
      right = [],
      splitIdx = 0,
      phase = "",
      currentIndex = -1,
    } = data || {};
    const { arrIdx = -1 } = highlights || {};

    return (
      <div className="w-full min-h-[300px] flex flex-col gap-6 p-4 font-sans text-left">
        {/* Phase Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Splitting Arrays Visualizer
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
              phase === "left"
                ? "bg-primary/20 text-primary"
                : phase === "right"
                  ? "bg-purple-500/20 text-purple-400"
                  : phase === "done"
                    ? "bg-success/20 text-success animate-pulse"
                    : "bg-slate-200/20 text-text-secondary"
            }`}
          >
            Phase:{" "}
            {phase === "init"
              ? "1. Initialize Split"
              : phase === "left"
                ? "2. Populate Left"
                : phase === "right"
                  ? "3. Populate Right"
                  : "Complete"}
          </span>
        </div>

        {/* 1. Main Array */}
        <div className="flex flex-col gap-1.5 bg-slate-900/5 dark:bg-slate-950/20 p-3 rounded-xl border border-slate-200/5">
          <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider">
            Original Array (arr)
          </span>
          <div className="flex flex-wrap gap-2.5 items-center">
            {arr.map((val, idx) => {
              const isBeforeSplit = idx < splitIdx;
              const isCurrent = idx === arrIdx;
              const isSplitMarker = idx === splitIdx;

              return (
                <React.Fragment key={idx}>
                  {/* Visual Split Line before the split index */}
                  {isSplitMarker && (
                    <div className="w-1.5 h-10 border-l-2 border-dashed border-red-500 flex items-center justify-center relative px-1">
                      <span className="absolute -top-3 text-[7px] text-red-500 font-extrabold">
                        SPLIT
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                      isCurrent
                        ? isBeforeSplit
                          ? "bg-primary/20 border-primary text-primary scale-110 shadow-sm"
                          : "bg-purple-500/20 border-purple-500 text-purple-400 scale-110 shadow-sm"
                        : isBeforeSplit
                          ? "bg-primary/5 border-primary/20 text-primary"
                          : "bg-purple-500/5 border-purple-500/20 text-purple-400"
                    }`}
                  >
                    <span>{val}</span>
                    <span className="text-[6px] text-slate-500 font-normal">
                      #{idx}
                    </span>
                    {isCurrent && (
                      <span className="absolute -top-3 text-[7px] text-primary font-black animate-bounce">
                        i
                      </span>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Action Arrows / Flow */}
        <div className="flex items-center justify-center gap-1.5 text-text-secondary opacity-60">
          <span className="w-10 h-px bg-current opacity-20" />
          <span className="text-[9px] font-extrabold tracking-widest uppercase">
            Slicing into subsegments
          </span>
          <span className="w-10 h-px bg-current opacity-20" />
        </div>

        {/* 2. Subsegments (Left and Right) */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Left Array */}
          <div className="flex-1 flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-primary/5 border border-primary/10">
            <span className="text-[9px] font-extrabold tracking-wider text-primary uppercase">
              Left Subsegment (arr[:split])
            </span>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {Array.from({ length: splitIdx }).map((_, idx) => {
                const hasElement = idx < left.length;
                const val = hasElement ? left[idx] : "";
                return (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                      hasElement
                        ? "bg-primary/20 border-primary text-primary"
                        : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                    }`}
                  >
                    <span>{val}</span>
                    {hasElement && (
                      <span className="text-[6px] text-primary/60 font-normal">
                        #{idx}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Array */}
          <div className="flex-1 flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-purple-500/5 border border-purple-500/10">
            <span className="text-[9px] font-extrabold tracking-wider text-purple-400 uppercase">
              Right Subsegment (arr[split:])
            </span>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {Array.from({ length: arr.length - splitIdx }).map((_, idx) => {
                const hasElement = idx < right.length;
                const val = hasElement ? right[idx] : "";
                return (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                      hasElement
                        ? "bg-purple-500/20 border-purple-500 text-purple-400"
                        : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                    }`}
                  >
                    <span>{val}</span>
                    {hasElement && (
                      <span className="text-[6px] text-purple-400/60 font-normal">
                        #{idx}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 1G. RENDER ACCUMULATOR SUM (PREFIX / SUFFIX SUM) ---
  const renderAccumulatorSumCanvas = (type) => {
    const isPrefix = type === "prefix";
    const state = isPrefix ? prefixState : suffixState;
    const { pref, suff, currentIdx } = state || {};
    const sumArr = isPrefix ? pref : suff;
    const arr = Array.isArray(data) ? data : [];

    if (!sumArr) {
      return renderArrayCanvas();
    }

    return (
      <div className="w-full min-h-[280px] flex flex-col gap-6 p-4 font-sans text-left">
        {/* Title & Phase */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            {isPrefix
              ? "Prefix Sum (Running Sum Left-to-Right)"
              : "Suffix Sum (Running Sum Right-to-Left)"}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase animate-pulse">
            {currentIdx === -1 ? "Complete" : `Processing Index ${currentIdx}`}
          </span>
        </div>

        {/* 1. Input Array */}
        <div className="flex flex-col gap-1 bg-slate-900/5 dark:bg-slate-950/20 p-2.5 rounded-xl border border-slate-200/5">
          <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider">
            Input Array (arr)
          </span>
          <div className="flex flex-wrap gap-2">
            {arr.map((val, idx) => {
              const isActive = idx === currentIdx;
              return (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                    isActive
                      ? "bg-primary/20 border-primary text-primary scale-110 shadow-sm"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                  }`}
                >
                  <span>{val}</span>
                  <span className="text-[6px] text-slate-500 font-normal">
                    #{idx}
                  </span>
                  {isActive && (
                    <span className="absolute -top-3 text-[7px] text-primary font-black animate-bounce">
                      i
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Math equation layout */}
        <div className="flex items-center justify-center gap-1.5 text-text-secondary opacity-60">
          <span className="w-10 h-px bg-current opacity-20" />
          <span className="text-[9px] font-extrabold tracking-widest uppercase font-mono">
            {isPrefix
              ? `pref[i] = pref[i-1] + arr[i]`
              : `suff[i] = suff[i+1] + arr[i]`}
          </span>
          <span className="w-10 h-px bg-current opacity-20" />
        </div>

        {/* 2. Cumulative Sum Array */}
        <div className="flex flex-col gap-1 bg-success/5 p-2.5 rounded-xl border border-success/10">
          <span className="text-[9px] font-extrabold text-success uppercase tracking-wider">
            {isPrefix ? "Prefix Sums (pref)" : "Suffix Sums (suff)"}
          </span>
          <div className="flex flex-wrap gap-2">
            {sumArr.map((val, idx) => {
              const isActive = idx === currentIdx;
              const hasVal = isPrefix
                ? currentIdx === -1 || idx <= currentIdx
                : currentIdx === -1 || idx >= currentIdx;
              return (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                    isActive
                      ? "bg-success/25 border-success text-success scale-105 shadow-sm"
                      : hasVal
                        ? "bg-success/10 border-success/30 text-success font-extrabold"
                        : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                  }`}
                >
                  <span>{hasVal ? val : ""}</span>
                  <span className="text-[6px] text-slate-500/60 font-normal">
                    #{idx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // --- 1H. RENDER DIFFERENCE ARRAY ---
  const renderDifferenceArrayCanvas = () => {
    const { diff = [], currentIdx = -1 } = diffState || {};
    const arr = Array.isArray(data) ? data : [];

    if (!diffState) {
      return renderArrayCanvas();
    }

    return (
      <div className="w-full min-h-[280px] flex flex-col gap-6 p-4 font-sans text-left">
        {/* Title & Phase */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Difference Array Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase animate-pulse">
            {currentIdx === -1 ? "Complete" : `Processing Index ${currentIdx}`}
          </span>
        </div>

        {/* 1. Input Array */}
        <div className="flex flex-col gap-1 bg-slate-900/5 dark:bg-slate-950/20 p-2.5 rounded-xl border border-slate-200/5">
          <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider">
            Input Array (arr)
          </span>
          <div className="flex flex-wrap gap-2">
            {arr.map((val, idx) => {
              const isActive = idx === currentIdx;
              const isCompare = currentIdx > 0 && idx === currentIdx - 1;
              return (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${
                    isActive
                      ? "bg-primary/20 border-primary text-primary scale-110 shadow-sm"
                      : isCompare
                        ? "bg-amber-500/20 border-amber-500 text-amber-500"
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]"
                  }`}
                >
                  <span>{val}</span>
                  <span className="text-[6px] text-slate-500 font-normal">
                    #{idx}
                  </span>
                  {isActive && (
                    <span className="absolute -top-3 text-[7px] text-primary font-black animate-bounce">
                      i
                    </span>
                  )}
                  {isCompare && (
                    <span className="absolute -top-3 text-[7px] text-amber-500 font-black">
                      i-1
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Math equation layout */}
        <div className="flex items-center justify-center gap-1.5 text-text-secondary opacity-60">
          <span className="w-10 h-px bg-current opacity-20" />
          <span className="text-[9px] font-extrabold tracking-widest uppercase font-mono">
            {currentIdx === 0
              ? "diff[0] = arr[0]"
              : "diff[i] = arr[i] - arr[i-1]"}
          </span>
          <span className="w-10 h-px bg-current opacity-20" />
        </div>

        {/* 2. Difference Array */}
        <div className="flex flex-col gap-1 bg-indigo-500/5 p-2.5 rounded-xl border border-indigo-500/10">
          <span className="text-[9px] font-extrabold text-indigo-400 uppercase tracking-wider">
            Difference Array (diff)
          </span>
          <div className="flex flex-wrap gap-2">
            {diff.map((val, idx) => {
              const isActive = idx === currentIdx;
              const hasVal = currentIdx === -1 || idx <= currentIdx;
              return (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-500/25 border-indigo-500 text-indigo-400 scale-105 shadow-sm"
                      : hasVal
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 font-extrabold"
                        : "border-dashed border-slate-300 dark:border-slate-800 text-transparent select-none bg-transparent"
                  }`}
                >
                  <span>{hasVal ? val : ""}</span>
                  <span className="text-[6px] text-slate-500/60 font-normal">
                    #{idx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // --- 1I. RENDER ARRAY BASIC OPERATIONS (INSERT / DELETE / TRAVERSAL) ---
  const renderArrayOperationCanvas = (type) => {
    const arr = Array.isArray(data)
      ? data
      : data && Array.isArray(data.arr)
        ? data.arr
        : [];

    return (
      <div className="w-full min-h-[220px] flex flex-col justify-center items-center gap-6 p-6 font-sans">
        {/* Title */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            {type === "insert"
              ? "Array Insertion Visualizer"
              : type === "delete"
                ? "Array Deletion Visualizer"
                : "Array Traversal Visualizer"}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Size: {arr.length}
          </span>
        </div>

        {/* Array Cells */}
        <div className="flex flex-wrap gap-2.5 items-center justify-center min-h-[70px]">
          {arr.map((val, idx) => {
            const isHighlightCompare =
              highlights[idx] === "compare" ||
              (highlights.active && highlights.active.includes(idx));
            const isHighlightSwap =
              highlights[idx] === "swap" ||
              (highlights.compare && highlights.compare.includes(idx));
            const isHighlightSuccess =
              highlights[idx] === "success" ||
              highlights[idx] === "sorted" ||
              (highlights.sorted && highlights.sorted.includes(idx));
            const isHighlightPivot = highlights[idx] === "pivot";

            let cellBgClass =
              "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-[#F4F7FE]";
            if (isHighlightSuccess) {
              cellBgClass =
                "bg-success/20 border-success text-success scale-105 shadow-sm font-bold animate-pulse";
            } else if (isHighlightSwap) {
              cellBgClass =
                "bg-red-500/20 border-red-500 text-red-500 scale-105 shadow-sm font-bold";
            } else if (isHighlightCompare) {
              cellBgClass =
                "bg-primary/20 border-primary text-primary scale-105 shadow-sm font-bold";
            } else if (isHighlightPivot) {
              cellBgClass =
                "bg-purple-500/20 border-purple-500 text-purple-400 scale-105 shadow-sm font-bold";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-mono text-xs font-bold border transition-all duration-300 relative ${cellBgClass}`}
              >
                <span>{val}</span>
                <span className="text-[7px] text-slate-500/70 font-normal">
                  #{idx}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 2. RENDER SEARCHING ---
  const renderSearchCanvas = () => {
    return (
      <div className="w-full h-72 flex flex-wrap items-center justify-center gap-3 px-6">
        {data.map((val, idx) => {
          const isMid = highlights[idx] === "pivot";
          return (
            <motion.div
              key={idx}
              layout
              className={`
                w-12 h-12 rounded-lg border flex flex-col items-center justify-center font-mono text-sm font-bold transition-all duration-300 relative
                ${getHighlightClass(idx)}
              `}
            >
              <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-white/10 rounded" />
              <span>{val}</span>
              <span className="text-[9px] text-slate-500 font-normal mt-0.5">
                #{idx}
              </span>
              {isMid && (
                <span className="absolute -top-6 text-[10px] text-purple-400 font-bold uppercase tracking-wider animate-bounce">
                  MID
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    );
  };

  // --- 3. RENDER LINKED LIST ---
  const renderLinkedListCanvas = () => {
    if (!data)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter list values (e.g., 1 2 3 4)
        </div>
      );

    // Special renderer for Merge Sorted Lists
    if (
      data &&
      !Array.isArray(data) &&
      (data.list1 || data.list2 || data.merged)
    ) {
      const { list1 = [], list2 = [], merged = [] } = data;
      const {
        i = 0,
        j = 0,
        picking = null,
        done = false,
      } = currentSnap.highlights || {};

      const renderSubList = (label, items, activeIdx, colorScheme) => {
        return (
          <div className="flex flex-col gap-1 sm:gap-1.5 items-start w-full">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              {label}
            </span>
            <div className="flex gap-2 sm:gap-4 items-center flex-wrap min-h-[50px] sm:min-h-[60px]">
              {items.map((val, idx) => {
                const isActive = idx === activeIdx && !done;
                const isPassed = idx < activeIdx || done;

                let borderClass =
                  "border-slate-200/45 dark:border-slate-700/45";
                let bgClass = "bg-white dark:bg-slate-800 opacity-60";
                if (isActive) {
                  borderClass =
                    colorScheme === "blue"
                      ? "border-primary shadow-md scale-105"
                      : "border-purple-500 shadow-md scale-105";
                  bgClass =
                    colorScheme === "blue"
                      ? "bg-primary/5 dark:bg-primary/10 font-bold"
                      : "bg-purple-500/5 dark:bg-purple-500/10 font-bold";
                } else if (isPassed) {
                  bgClass = "opacity-40";
                }

                const baseAddr = colorScheme === "blue" ? 0x100 : 0x200;
                const nextAddr = idx === items.length - 1 ? "NULL" : `0x${(baseAddr + (idx + 1) * 8).toString(16).toUpperCase()}`;

                return (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 relative">
                    {/* Address above the node */}
                    <span className="absolute -top-4 left-1 font-mono text-[6px] sm:text-[7px] text-slate-500/80">
                      0x{(baseAddr + idx * 8).toString(16).toUpperCase()}
                    </span>
                    <div
                      className={`w-18 sm:w-22 h-8 sm:h-10 rounded-lg border flex overflow-hidden shadow-sm transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      <div className="w-10 sm:w-13 h-full flex flex-col justify-center items-center border-r border-slate-200/40 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/30 font-mono font-bold text-[9px] sm:text-[10px] text-text-primary dark:text-slate-200 leading-none">
                        <span className="text-[4px] uppercase text-slate-500/50 scale-75 select-none pb-0.5">data</span>
                        {val}
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center items-center bg-slate-100/30 dark:bg-slate-950/20 px-0.5">
                        <span className="text-[4px] uppercase text-slate-500/50 scale-75 select-none pb-0.5">next</span>
                        <span className={`font-mono text-[5px] sm:text-[6px] font-black ${nextAddr === "NULL" ? "text-red-500" : "text-primary"}`}>{nextAddr}</span>
                      </div>
                    </div>
                    {idx < items.length - 1 ? (
                      <span className="text-slate-400 dark:text-slate-600 text-xs sm:text-sm">
                        →
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-600 text-[7px] sm:text-[8px] font-black">
                        ∅
                      </span>
                    )}
                  </div>
                );
              })}
              {items.length === 0 && (
                <span className="text-xs text-slate-400 font-mono italic">
                  Empty
                </span>
              )}
            </div>
          </div>
        );
      };

      return (
        <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
          {/* Header */}
          <div className="w-full flex items-center justify-between">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Merge Two Sorted Lists Visualizer
            </span>
            {picking && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase">
                Picking from {picking === "left" ? "List 1" : "List 2"}
              </span>
            )}
          </div>

          {/* Three Lists stacks */}
          <div className="w-full flex flex-col gap-6 skeuo-inset-panel p-4 bg-slate-950/20 rounded-2xl border border-slate-200/10 dark:border-slate-800/10">
            {renderSubList("List 1 (l1)", list1, i, "blue")}
            {renderSubList("List 2 (l2)", list2, j, "purple")}

            {/* Merged List */}
            <div className="flex flex-col gap-1.5 items-start w-full border-t border-slate-200/10 dark:border-slate-800/10 pt-4">
              <span className="text-[8px] font-black uppercase text-success tracking-wider">
                Merged List (sorted result)
              </span>
              <div className="flex gap-2 sm:gap-4 items-center flex-wrap min-h-[50px] sm:min-h-[60px]">
                {merged.map((val, idx) => {
                  const nextAddr = idx === merged.length - 1 ? "NULL" : `0x${(0x300 + (idx + 1) * 8).toString(16).toUpperCase()}`;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2 sm:gap-3 relative"
                    >
                      <span className="absolute -top-4 left-1 font-mono text-[6px] sm:text-[7px] text-success/80">
                        0x{(0x300 + idx * 8).toString(16).toUpperCase()}
                      </span>
                      <div className="w-18 sm:w-22 h-8 sm:h-10 rounded-lg border border-success bg-success/5 dark:bg-success/15 flex overflow-hidden shadow-inner font-bold">
                        <div className="w-10 sm:w-13 h-full flex flex-col justify-center items-center border-r border-success/30 bg-success/10 font-mono text-[9px] sm:text-[10px] text-success leading-none">
                          <span className="text-[4px] uppercase text-success/50 scale-75 select-none pb-0.5">data</span>
                          {val}
                        </div>
                        <div className="flex-1 h-full flex flex-col justify-center items-center bg-success/5 px-0.5">
                          <span className="text-[4px] uppercase text-success/50 scale-75 select-none pb-0.5">next</span>
                          <span className={`font-mono text-[5px] sm:text-[6px] font-black ${nextAddr === "NULL" ? "text-red-500" : "text-success"}`}>{nextAddr}</span>
                        </div>
                      </div>
                    {idx < merged.length - 1 ? (
                      <span className="text-success text-xs sm:text-sm">→</span>
                    ) : (
                      <span className="text-success text-[7px] sm:text-[8px] font-black">
                        ∅
                      </span>
                    )}
                  </motion.div>
                  );
                })}
                {merged.length === 0 && (
                  <span className="text-xs text-slate-400 font-mono italic">
                    No elements merged yet
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const listNodes = Array.isArray(data) ? data : [];

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-8 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Linked List Visualizer
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Nodes: {listNodes.length}
            </span>
          </div>
        </div>

        {/* Nodes Row container */}
        <div className="w-full overflow-x-auto flex items-center gap-2 sm:gap-6 py-6 sm:py-12 px-3 sm:px-6 min-h-[120px] sm:min-h-[160px] skeuo-inset-panel bg-slate-950/20 dark:bg-slate-900/10 rounded-2xl border border-slate-200/10 dark:border-slate-800/10 relative">
          {listNodes.map((node, idx) => {
            const isHead = listState?.head === node.id;
            const isCurr = listState?.curr === node.id;
            const isPrev = listState?.prev === node.id;
            const isNext = listState?.next === node.id;
            const isSlow = listState?.slow === node.id;
            const isFast = listState?.fast === node.id;

            const highlight = highlights[node.id];
            let borderClass = "border-slate-200/50 dark:border-slate-700/50";
            let bgClass = "bg-white dark:bg-slate-800";
            if (highlight === "active" || highlight === "pivot") {
              borderClass = "border-amber-500 shadow-lg";
              bgClass = "bg-amber-500/5 dark:bg-amber-500/10";
            } else if (
              highlight === "sorted" ||
              highlight === "match" ||
              highlight === "swap"
            ) {
              borderClass = "border-success shadow-lg";
              bgClass = "bg-success/5 dark:bg-success/10";
            } else if (highlight === "compare") {
              borderClass = "border-primary shadow-lg";
              bgClass = "bg-primary/5 dark:bg-primary/10";
            }

            return (
              <div
                key={node.id}
                className="flex items-center gap-2 sm:gap-4 flex-shrink-0 relative"
              >
                  <div className="flex flex-col items-center relative">
                    {/* Address label above the node card */}
                    <span className="absolute -top-5 font-mono text-[7px] sm:text-[8px] font-extrabold text-slate-500 dark:text-slate-400 select-none tracking-wider uppercase">
                      0x{(1000 + idx * 8).toString(16).toUpperCase()}
                    </span>

                    {/* Node Structure */}
                    <motion.div
                      layout
                      className={`w-16 sm:w-24 h-10 sm:h-12 rounded-xl border flex overflow-hidden shadow-sm relative transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      <div className="w-10 sm:w-16 h-full flex flex-col justify-center items-center border-r border-slate-200/40 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/30">
                        <span className="text-slate-500/60 uppercase select-none text-[5px] sm:text-[6px]">
                          data
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-black text-text-primary dark:text-[#F4F7FE]">
                          {node.val}
                        </span>
                      </div>

                      <div className="flex-1 h-full flex flex-col justify-center items-center relative bg-slate-100/30 dark:bg-slate-950/20 px-1">
                        <span className="text-slate-500/60 uppercase select-none text-[5px] sm:text-[6px]">
                          next
                        </span>
                        <span className={`font-mono text-[7px] sm:text-[8px] font-black tracking-tight ${idx === listNodes.length - 1 ? 'text-red-500 dark:text-red-400' : 'text-primary'}`}>
                          {idx === listNodes.length - 1 ? "NULL" : `0x${(1000 + (idx + 1) * 8).toString(16).toUpperCase()}`}
                        </span>
                      </div>
                    </motion.div>

                  {/* Pointer Tags */}
                  <div className="absolute -bottom-8 flex flex-col gap-1 items-center z-10">
                    <div className="flex gap-1.5 flex-wrap justify-center max-w-[120px]">
                      {isHead && (
                        <span className="text-[7px] font-black bg-blue-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          head
                        </span>
                      )}
                      {isPrev && (
                        <span className="text-[7px] font-black bg-purple-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          prev
                        </span>
                      )}
                      {isCurr && (
                        <span className="text-[7px] font-black bg-amber-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          curr
                        </span>
                      )}
                      {isNext && (
                        <span className="text-[7px] font-black bg-pink-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          next
                        </span>
                      )}
                      {isSlow && (
                        <span className="text-[7px] font-black bg-emerald-600 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          slow
                        </span>
                      )}
                      {isFast && (
                        <span className="text-[7px] font-black bg-indigo-600 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide animate-pulse">
                          fast
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connection Arrow */}
                <div className="w-6 sm:w-10 h-6 flex items-center justify-center relative select-none">
                  {node.next !== null ? (
                    <svg
                      className="w-full h-full text-slate-400 dark:text-slate-600"
                      viewBox="0 0 40 24"
                      fill="none"
                    >
                      <defs>
                        <marker
                          id="arrow"
                          viewBox="0 0 10 10"
                          refX="6"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 2 L 10 5 L 0 8 z" fill="currentColor" />
                        </marker>
                      </defs>
                      <line
                        x1="2"
                        y1="12"
                        x2="34"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        markerEnd="url(#arrow)"
                      />
                    </svg>
                  ) : (
                    <div className="flex flex-col items-center font-mono text-[8px] sm:text-[9px] font-black text-slate-500 select-none">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="7" y1="16" x2="17" y2="16" />
                        <line x1="10" y1="20" x2="14" y2="20" />
                      </svg>
                      <span className="text-[5px] sm:text-[6px] tracking-widest text-slate-500/80 uppercase">
                        NULL
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 3B. RENDER DOUBLY LINKED LIST ---
  const renderDoublyLinkedListCanvas = () => {
    const listNodes = Array.isArray(data) ? data : [];
    if (listNodes.length === 0)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter list values (e.g., 1 2 3 4)
        </div>
      );

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-8 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Doubly Linked List Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Nodes: {listNodes.length}
          </span>
        </div>

        {/* Nodes Row container */}
        <div className="w-full overflow-x-auto flex items-center gap-4 sm:gap-12 py-6 sm:py-12 px-3 sm:px-6 min-h-[140px] sm:min-h-[180px] skeuo-inset-panel bg-slate-950/20 dark:bg-slate-900/10 rounded-2xl border border-slate-200/10 dark:border-slate-800/10 relative">
          {/* Head ground indicator */}
          <div className="flex flex-col items-center justify-center select-none text-[8px] font-black text-slate-500 gap-1 flex-shrink-0">
            <svg
              className="w-3.5 h-3.5 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="7" y1="16" x2="17" y2="16" />
              <line x1="10" y1="20" x2="14" y2="20" />
            </svg>
            <span>NULL</span>
          </div>

          {/* Connect head null with left pointer */}
          <span className="text-slate-400 dark:text-slate-600 text-sm select-none -mx-4">
            ←
          </span>

          {listNodes.map((node, idx) => {
            const isHead = listState?.head === node.id;
            const isCurr = listState?.curr === node.id;
            const isPrev = listState?.prev === node.id;
            const isNext = listState?.next === node.id;

            const highlight = highlights[node.id];
            let borderClass = "border-slate-200/50 dark:border-slate-700/50";
            let bgClass = "bg-white dark:bg-slate-800";
            if (highlight === "active" || highlight === "pivot") {
              borderClass = "border-amber-500 shadow-lg";
              bgClass = "bg-amber-500/5 dark:bg-amber-500/10";
            } else if (
              highlight === "sorted" ||
              highlight === "match" ||
              highlight === "swap"
            ) {
              borderClass = "border-success shadow-lg";
              bgClass = "bg-success/5 dark:bg-success/10";
            } else if (highlight === "compare") {
              borderClass = "border-primary shadow-lg";
              bgClass = "bg-primary/5 dark:bg-primary/10";
            }

            return (
              <div
                key={node.id}
                className="flex items-center gap-4 sm:gap-12 flex-shrink-0 relative"
              >
                  <div className="flex flex-col items-center relative">
                    {/* Address label above the node card */}
                    <span className="absolute -top-5 font-mono text-[7px] sm:text-[8px] font-extrabold text-slate-500 dark:text-slate-400 select-none tracking-wider uppercase">
                      0x{(1000 + idx * 8).toString(16).toUpperCase()}
                    </span>

                    {/* DLL Node Structure (3 cells: prev, data, next) */}
                    <motion.div
                      layout
                      className={`w-24 sm:w-36 h-10 sm:h-12 rounded-xl border flex overflow-hidden shadow-sm relative transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      {/* Prev Pointer Cell */}
                      <div className="w-8 sm:w-10 h-full flex flex-col justify-center items-center border-r border-slate-200/40 dark:border-slate-700/40 bg-slate-100/30 dark:bg-slate-950/20 px-0.5">
                        <span className="text-slate-500/60 uppercase select-none text-[4px] sm:text-[5px]">
                          prev
                        </span>
                        <span className={`font-mono text-[5px] sm:text-[6px] font-bold tracking-tight ${idx === 0 ? 'text-red-500 dark:text-red-400' : 'text-purple-500'}`}>
                          {idx === 0 ? "NULL" : `0x${(1000 + (idx - 1) * 8).toString(16).toUpperCase()}`}
                        </span>
                      </div>

                      {/* Data Cell */}
                      <div className="flex-1 h-full flex flex-col justify-center items-center border-r border-slate-200/40 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/30">
                        <span className="text-slate-500/60 uppercase select-none text-[4px] sm:text-[5px]">
                          data
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-black text-text-primary dark:text-[#F4F7FE]">
                          {node.val}
                        </span>
                      </div>

                      {/* Next Pointer Cell */}
                      <div className="w-8 sm:w-10 h-full flex flex-col justify-center items-center bg-slate-100/30 dark:bg-slate-950/20 px-0.5">
                        <span className="text-slate-500/60 uppercase select-none text-[4px] sm:text-[5px]">
                          next
                        </span>
                        <span className={`font-mono text-[5px] sm:text-[6px] font-bold tracking-tight ${idx === listNodes.length - 1 ? 'text-red-500 dark:text-red-400' : 'text-primary'}`}>
                          {idx === listNodes.length - 1 ? "NULL" : `0x${(1000 + (idx + 1) * 8).toString(16).toUpperCase()}`}
                        </span>
                      </div>
                    </motion.div>

                  {/* Pointer Tags */}
                  <div className="absolute -bottom-8 flex flex-col gap-1 items-center z-10">
                    <div className="flex gap-1.5 flex-wrap justify-center max-w-[120px]">
                      {isHead && (
                        <span className="text-[7px] font-black bg-blue-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          head
                        </span>
                      )}
                      {isPrev && (
                        <span className="text-[7px] font-black bg-purple-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          prev
                        </span>
                      )}
                      {isCurr && (
                        <span className="text-[7px] font-black bg-amber-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          curr
                        </span>
                      )}
                      {isNext && (
                        <span className="text-[7px] font-black bg-pink-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                          next
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Double SVG Pointer Arrow connecting to next node */}
                <div className="w-8 sm:w-12 h-8 flex flex-col justify-center gap-1 sm:gap-1.5 relative select-none">
                  {idx < listNodes.length - 1 ? (
                    <>
                      {/* Top arrow pointing right (Next link) */}
                      <svg
                        className="w-full h-3 text-slate-400 dark:text-slate-600"
                        viewBox="0 0 48 12"
                        fill="none"
                      >
                        <defs>
                          <marker
                            id="arrow-r"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="5"
                            markerHeight="5"
                            orient="auto"
                          >
                            <path
                              d="M 0 2 L 10 5 L 0 8 z"
                              fill="currentColor"
                            />
                          </marker>
                        </defs>
                        <line
                          x1="2"
                          y1="6"
                          x2="42"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          markerEnd="url(#arrow-r)"
                        />
                      </svg>
                      {/* Bottom arrow pointing left (Prev link) */}
                      <svg
                        className="w-full h-3 text-slate-400 dark:text-slate-600"
                        viewBox="0 0 48 12"
                        fill="none"
                      >
                        <defs>
                          <marker
                            id="arrow-l"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="5"
                            markerHeight="5"
                            orient="auto-start-reverse"
                          >
                            <path
                              d="M 0 2 L 10 5 L 0 8 z"
                              fill="currentColor"
                            />
                          </marker>
                        </defs>
                        <line
                          x1="42"
                          y1="6"
                          x2="6"
                          y2="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          markerEnd="url(#arrow-l)"
                        />
                      </svg>
                    </>
                  ) : (
                    <div className="flex flex-col items-center font-mono text-[9px] font-black text-slate-500 select-none -translate-x-2">
                      <svg
                        className="w-3.5 h-3.5 text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="7" y1="16" x2="17" y2="16" />
                        <line x1="10" y1="20" x2="14" y2="20" />
                      </svg>
                      <span className="text-[5px] tracking-widest text-slate-500/80 uppercase">
                        NULL
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 3C. RENDER CIRCULAR LINKED LIST ---
  const renderCircularLinkedListCanvas = () => {
    const listNodes = Array.isArray(data) ? data : [];
    if (listNodes.length === 0)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter list values (e.g., 1 2 3 4)
        </div>
      );

    return (
      <div className="w-full min-h-[340px] flex flex-col justify-between items-center gap-8 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Circular Linked List Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Nodes: {listNodes.length}
          </span>
        </div>

        {/* Nodes Row container */}
        <div className="w-full overflow-x-auto flex flex-col items-center gap-4 sm:gap-6 py-6 sm:py-12 px-3 sm:px-6 skeuo-inset-panel bg-slate-950/20 dark:bg-slate-900/10 rounded-2xl border border-slate-200/10 dark:border-slate-800/10 relative">
          <div className="flex items-center gap-2 sm:gap-6 relative z-10">
            {listNodes.map((node, idx) => {
              const isHead = listState?.head === node.id;
              const isCurr = listState?.curr === node.id;
              const isPrev = listState?.prev === node.id;
              const isNext = listState?.next === node.id;

              const highlight = highlights[node.id];
              let borderClass = "border-slate-200/50 dark:border-slate-700/50";
              let bgClass = "bg-white dark:bg-slate-800";
              if (highlight === "active" || highlight === "pivot") {
                borderClass = "border-amber-500 shadow-lg";
                bgClass = "bg-amber-500/5 dark:bg-amber-500/10";
              } else if (
                highlight === "sorted" ||
                highlight === "match" ||
                highlight === "swap"
              ) {
                borderClass = "border-success shadow-lg";
                bgClass = "bg-success/5 dark:bg-success/10";
              } else if (highlight === "compare") {
                borderClass = "border-primary shadow-lg";
                bgClass = "bg-primary/5 dark:bg-primary/10";
              }

              return (
                <div
                  key={node.id}
                  className="flex items-center gap-2 sm:gap-4 flex-shrink-0 relative"
                >
                  <div className="flex flex-col items-center relative">
                    {/* Address label above the node card */}
                    <span className="absolute -top-5 font-mono text-[7px] sm:text-[8px] font-extrabold text-slate-500 dark:text-slate-400 select-none tracking-wider uppercase">
                      0x{(1000 + idx * 8).toString(16).toUpperCase()}
                    </span>

                    <motion.div
                      layout
                      className={`w-16 sm:w-24 h-10 sm:h-12 rounded-xl border flex overflow-hidden shadow-sm relative transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      <div className="w-10 sm:w-16 h-full flex flex-col justify-center items-center border-r border-slate-200/40 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-900/30">
                        <span className="text-slate-500/60 uppercase select-none text-[5px] sm:text-[6px]">
                          data
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-black text-text-primary dark:text-[#F4F7FE]">
                          {node.val}
                        </span>
                      </div>

                      <div className="flex-1 h-full flex flex-col justify-center items-center bg-slate-100/30 dark:bg-slate-950/20 px-1">
                        <span className="text-slate-500/60 uppercase select-none text-[5px] sm:text-[6px]">
                          next
                        </span>
                        <span className="font-mono text-[7px] sm:text-[8px] font-black tracking-tight text-primary">
                          0x{(idx === listNodes.length - 1 ? 1000 : 1000 + (idx + 1) * 8).toString(16).toUpperCase()}
                        </span>
                      </div>
                    </motion.div>

                    {/* Pointer Tags */}
                    <div className="absolute -bottom-8 flex flex-col gap-1 items-center z-10">
                      <div className="flex gap-1.5 flex-wrap justify-center max-w-[120px]">
                        {isHead && (
                          <span className="text-[7px] font-black bg-blue-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                            head
                          </span>
                        )}
                        {isPrev && (
                          <span className="text-[7px] font-black bg-purple-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                            prev
                          </span>
                        )}
                        {isCurr && (
                          <span className="text-[7px] font-black bg-amber-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                            curr
                          </span>
                        )}
                        {isNext && (
                          <span className="text-[7px] font-black bg-pink-500 text-white px-1 py-0.5 rounded-md shadow-sm select-none uppercase tracking-wide">
                            next
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Next connection pointer */}
                  {idx < listNodes.length - 1 && (
                    <div className="w-6 sm:w-10 h-6 flex items-center justify-center relative select-none">
                      <svg
                        className="w-full h-full text-slate-400 dark:text-slate-600"
                        viewBox="0 0 40 24"
                        fill="none"
                      >
                        <defs>
                          <marker
                            id="arrow-circular"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto"
                          >
                            <path
                              d="M 0 2 L 10 5 L 0 8 z"
                              fill="currentColor"
                            />
                          </marker>
                        </defs>
                        <line
                          x1="2"
                          y1="12"
                          x2="34"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                          markerEnd="url(#arrow-circular)"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Loopback arrow indicating circularity */}
          {listNodes.length > 1 && (
            <div className="w-[85%] h-12 relative -mt-3 select-none">
              <svg
                className="w-full h-full text-primary"
                viewBox="0 0 100 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="arrow-loop"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="currentColor" />
                  </marker>
                </defs>
                {/* Curve loop back from tail to head */}
                <path
                  d="M 95, 0 C 95, 18, 5, 18, 5, 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrow-loop)"
                  strokeDasharray="3 3"
                />
              </svg>
              <span className="absolute left-[45%] -bottom-1 text-[6px] text-primary/80 font-black uppercase tracking-widest bg-slate-950 px-2 rounded-full border border-primary/20">
                loopback link
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- 3D. RENDER MONOTONIC STACK ---
  const renderMonotonicStackCanvas = () => {
    const nums = Array.isArray(data) ? data : [];
    const stackItems = stackState?.stack || [];
    const stackIndices = stackState?.stackIndices || [];
    const charIdx = stackState?.charIdx !== undefined ? stackState.charIdx : -1;
    const result = stackState?.result || stackState?.nge || [];

    const algoId = algorithm.id || "";
    const isSpan = algoId.includes("span");
    let resultLabel = "NEXT GREATER VALUES";
    if (isSpan) {
      resultLabel = "STOCK SPAN VALUES";
    } else if (algoId === "remove-k-digits") {
      resultLabel = "SMALLEST NUMBER DIGITS";
    } else if (algoId.includes("previous")) {
      resultLabel = algoId.includes("smaller")
        ? "PREVIOUS SMALLER VALUES"
        : "PREVIOUS GREATER VALUES";
    } else {
      resultLabel = algoId.includes("smaller")
        ? "NEXT SMALLER VALUES"
        : "NEXT GREATER VALUES";
    }

    return (
      <div className="w-full min-h-[360px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Monotonic Stack Processor
          </span>
          <div className="flex gap-2">
            {stackState?.k !== undefined && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 uppercase">
                Removals Left (K): {stackState.k}
              </span>
            )}
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Stack Depth: {stackIndices.length}
            </span>
          </div>
        </div>

        {/* Rows and Stack container */}
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-stretch py-2">
          {/* Left panel: Input array and output array */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            {/* Input Array Block */}
            <div className="flex flex-col gap-2">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
                Input Array (Prices / Heights)
              </span>
              <div className="flex gap-2 flex-wrap">
                {nums.map((val, idx) => {
                  const isCurrent = charIdx === idx;
                  const isOnStack = stackIndices.includes(idx);

                  let borderClass =
                    "border-slate-200/40 dark:border-slate-800/45";
                  let bgClass = "bg-slate-50/50 dark:bg-slate-900/30";
                  let statusLabel = "";

                  if (isCurrent) {
                    borderClass = "border-amber-500 shadow-md scale-105";
                    bgClass = "bg-amber-500/10";
                    statusLabel = "CURRENT";
                  } else if (isOnStack) {
                    borderClass = "border-purple-500 shadow-sm";
                    bgClass = "bg-purple-500/10";
                    statusLabel = "ON STACK";
                  }

                  const highlight = highlights[idx];
                  if (highlight === "sorted") {
                    borderClass = "border-success shadow-md";
                    bgClass = "bg-success/15";
                  } else if (highlight === "compare") {
                    borderClass = "border-primary shadow-sm";
                    bgClass = "bg-primary/10";
                  }

                  return (
                    <div
                      key={idx}
                      className={`relative min-w-[56px] h-16 rounded-xl border flex flex-col justify-center items-center font-mono transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      <span className="text-[8px] text-slate-500">
                        idx: {idx}
                      </span>
                      <span className="text-sm font-black text-text-primary dark:text-[#F4F7FE] mt-0.5">
                        {val}
                      </span>
                      {statusLabel && (
                        <span className="absolute -top-2 px-1 text-[5px] font-black tracking-wider rounded-md bg-slate-950 border border-slate-700/50 text-slate-400">
                          {statusLabel}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resolved Output Array Block */}
            <div className="flex flex-col gap-2">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
                {resultLabel}
              </span>
              <div className="flex gap-2 flex-wrap">
                {nums.map((_, idx) => {
                  const val = result[idx];
                  const isResolved = val !== undefined && val !== -1;

                  let borderClass =
                    "border-slate-200/20 dark:border-slate-800/20";
                  let bgClass =
                    "bg-slate-100/10 dark:bg-slate-950/10 opacity-55";

                  if (isResolved) {
                    borderClass = "border-success/60 shadow-sm";
                    bgClass = "bg-success/5 opacity-100";
                  }

                  return (
                    <div
                      key={idx}
                      className={`min-w-[56px] h-12 rounded-xl border flex flex-col justify-center items-center font-mono transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      <span className="text-[7px] text-slate-500/70">
                        idx: {idx}
                      </span>
                      <span
                        className={`text-xs font-black mt-0.5 ${isResolved ? "text-success" : "text-slate-500"}`}
                      >
                        {isResolved ? val : "-1"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right panel: Monotonic Stack Graduate Tube */}
          <div className="w-32 flex flex-col items-center gap-3 bg-slate-500/5 dark:bg-slate-950/5 p-4 rounded-3xl border border-slate-200/10 dark:border-slate-800/10 flex-shrink-0">
            <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">
              Stack Tube
            </span>

            <div className="relative w-24 h-56 bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm border-x-2 border-b-2 border-slate-700/80 dark:border-slate-800/80 rounded-b-2xl flex flex-col-reverse justify-start p-2 gap-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.4)] relative">
              <AnimatePresence>
                {stackIndices.map((arrIdx, stackPos) => {
                  const isTop = stackPos === stackIndices.length - 1;
                  const val = nums[arrIdx];

                  let bgClass =
                    "bg-slate-800/95 border-slate-700 text-slate-300";
                  let glowClass = "";

                  if (isTop) {
                    bgClass = "bg-primary/20 border-primary text-primary";
                    glowClass = "shadow-[0_0_12px_rgba(79,70,229,0.3)]";
                  }

                  return (
                    <motion.div
                      key={arrIdx}
                      initial={{ y: -60, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -60, opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`w-full h-9 rounded-lg border flex flex-col justify-center items-center font-mono transition-all relative flex-shrink-0 z-10 ${bgClass} ${glowClass}`}
                    >
                      <span className="text-[6px] text-slate-500">
                        idx: {arrIdx}
                      </span>
                      <span className="text-xs font-black">{val}</span>

                      {isTop && (
                        <div className="absolute -left-14 flex items-center gap-1 text-[6px] font-black text-amber-500 bg-amber-500/20 px-1 py-0.5 rounded border border-amber-500/30 uppercase tracking-widest select-none z-20">
                          <span>TOP ➔</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {stackIndices.length === 0 && (
                <span className="text-[8px] font-black tracking-widest text-slate-700 text-center mb-6 select-none uppercase">
                  Empty
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 4. RENDER STACK ---
  const renderStackCanvas = () => {
    const algoId = algorithm.id || "";
    const isMinStack = algoId === "min-stack";

    const stackItems = isMinStack
      ? data?.stack || []
      : Array.isArray(stackState)
        ? stackState
        : stackState?.stack || [];
    const stackItems2 = isMinStack
      ? data?.minStack || null
      : stackState?.stack2 || null;

    const isConversion =
      algoId.includes("to") ||
      algoId.includes("conversion") ||
      algoId.includes("evaluation");
    const isUndoRedo = algoId === "undo-redo";
    const isBrowser = algoId === "browser-history";

    const label1 = isMinStack
      ? "MAIN STACK"
      : isUndoRedo
        ? "UNDO STACK"
        : isBrowser
          ? "BACK STACK"
          : isConversion
            ? "OPERATORS / OPERANDS"
            : "STACK FRAME";
    const label2 = isMinStack
      ? "MIN STACK"
      : isUndoRedo
        ? "REDO STACK"
        : isBrowser
          ? "FORWARD STACK"
          : isConversion
            ? "OUTPUT RESULT"
            : "AUXILIARY FRAME";

    const renderSingleStackTube = (label, items, isSecond) => {
      const topIdx = items.length - 1;

      return (
        <div className="flex flex-col items-center gap-3 flex-1 max-w-[160px]">
          {/* Label */}
          <span className="text-[8px] font-black tracking-wider text-slate-500 uppercase font-sans">
            {label}
          </span>

          {/* Tube container */}
          <div className="relative w-28 h-56 bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm border-x-2 border-b-2 border-slate-700/80 dark:border-slate-800/80 rounded-b-2xl flex flex-col-reverse justify-start p-2 gap-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.4)] relative">
            {/* Graduated markings (ticks) */}
            <div className="absolute left-1 top-0 h-full flex flex-col justify-between py-4 text-[5px] font-mono text-slate-600/50 select-none pointer-events-none">
              <span>[MAX]</span>
              <span>- 4</span>
              <span>- 3</span>
              <span>- 2</span>
              <span>- 1</span>
              <span>[MIN]</span>
            </div>

            <AnimatePresence>
              {items.map((val, idx) => {
                const isTop = idx === topIdx;
                let bgClass = "bg-slate-800/90 border-slate-700 text-slate-300";
                let glowClass = "";

                if (isTop) {
                  bgClass = isSecond
                    ? "bg-success/20 border-success text-success"
                    : "bg-primary/20 border-primary text-primary";
                  glowClass = isSecond
                    ? "shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                    : "shadow-[0_0_12px_rgba(79,70,229,0.3)]";
                }

                return (
                  <motion.div
                    key={idx}
                    initial={{ y: -60, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -60, opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-full h-8 rounded-lg border flex items-center justify-center font-mono text-xs font-bold transition-all relative flex-shrink-0 z-10 ${bgClass} ${glowClass}`}
                  >
                    {val}

                    {/* Top Pointer Indicator Tag */}
                    {isTop && (
                      <motion.div
                        layoutId={`top-pointer-${isSecond ? "sec" : "prim"}`}
                        className="absolute -right-16 flex items-center gap-1 text-[7px] font-black text-amber-500 bg-amber-500/20 px-1 py-0.5 rounded border border-amber-500/30 uppercase tracking-widest select-none z-20"
                      >
                        <span>◀ TOP</span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {items.length === 0 && (
              <span className="text-[8px] font-black tracking-widest text-slate-700 text-center mb-4 select-none uppercase">
                Empty Stack
              </span>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Stack Frame Visualizer
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Items: {stackItems.length}
            </span>
          </div>
        </div>

        {/* Undo Redo Custom Document Monitor */}
        {isUndoRedo && (
          <div className="w-full max-w-md p-4 rounded-2xl border border-slate-200/20 dark:border-slate-800/40 bg-slate-950 font-mono text-xs shadow-inner flex flex-col gap-2 mx-auto my-2">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <div className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
              <span className="text-[7px] font-black tracking-widest uppercase text-slate-500 ml-2">
                Document Editor Terminal
              </span>
            </div>
            <div className="w-full py-2 px-1 text-sm font-black text-emerald-400 select-all min-h-[30px] flex items-center">
              {data[0] || "(empty)"}
            </div>
          </div>
        )}

        {/* Browser History Custom Address Bar Monitor */}
        {isBrowser && (
          <div className="w-full max-w-md p-3.5 rounded-2xl border border-slate-200/25 dark:border-slate-800/35 bg-slate-900/60 dark:bg-slate-950/50 shadow-md flex items-center gap-3 mx-auto my-2">
            <div className="flex gap-1.5">
              <button className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 flex items-center justify-center text-[10px]">
                ◀
              </button>
              <button className="w-6 h-6 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 flex items-center justify-center text-[10px]">
                ▶
              </button>
            </div>
            <div className="flex-1 h-8 rounded-lg bg-slate-950 border border-slate-800 px-3 flex items-center text-xs font-mono text-slate-300">
              <span className="text-primary mr-1.5 select-none text-[10px]">
                https://
              </span>
              {data[0] || "about:blank"}
            </div>
          </div>
        )}

        {/* Outer Stack Row */}
        <div className="w-full flex justify-center items-center gap-16 flex-wrap py-4">
          {/* Input token scan list if it exists */}
          {Array.isArray(data) && data.length > 0 && (
            <div className="flex flex-col gap-2 items-center flex-shrink-0">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
                Token Scan Pointer
              </span>
              <div className="flex gap-1.5 p-2.5 rounded-2xl border border-slate-200/40 dark:border-slate-800/45 bg-slate-50/5 dark:bg-slate-900/5 max-w-sm flex-wrap justify-center">
                {data.map((char, idx) => {
                  const isActive = stackState?.charIdx === idx;
                  const isProcessed = stackState?.charIdx > idx;

                  let borderClass =
                    "border-slate-200/40 dark:border-slate-700/45";
                  let bgClass = "bg-white dark:bg-slate-800 opacity-60";
                  if (isActive) {
                    borderClass = "border-amber-500 shadow-sm";
                    bgClass =
                      "bg-amber-500/5 dark:bg-amber-500/10 font-bold opacity-100 scale-105";
                  } else if (isProcessed) {
                    borderClass = "border-primary/50";
                    bgClass = "bg-primary/5 opacity-40";
                  }

                  return (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded font-mono text-xs border transition-all duration-300 ${bgClass} ${borderClass}`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stacks Tubes */}
          <div className="flex gap-12 justify-center items-end flex-wrap min-w-[280px]">
            {renderSingleStackTube(label1, stackItems, false)}
            {stackItems2 && renderSingleStackTube(label2, stackItems2, true)}
          </div>
        </div>
      </div>
    );
  };

  // --- 5. RENDER QUEUE ---
  // --- Circular Queue Ring ---
  const renderCircularQueueCanvas = () => {
    const queue = queueState?.queue || [];
    const front = queueState?.front !== undefined ? queueState.front : -1;
    const rear = queueState?.rear !== undefined ? queueState.rear : -1;
    const size = queue.length || 5;

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Circular Buffer Ring
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase font-mono">
              Front: {front}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase font-mono">
              Rear: {rear}
            </span>
          </div>
        </div>

        <div className="relative w-full max-w-[240px] h-[240px] flex items-center justify-center">
          {queue.map((val, idx) => {
            const angle = (idx * 2 * Math.PI) / size - Math.PI / 2;
            const radius = 80;
            const x = Math.round(radius * Math.cos(angle));
            const y = Math.round(radius * Math.sin(angle));

            const isFront = idx === front;
            const isRear = idx === rear;
            const isEmpty = val === null || val === undefined;

            let borderClass = "border-slate-700/60 dark:border-slate-800/80";
            let bgClass = "bg-slate-900/40 dark:bg-slate-950/40 text-slate-600";
            if (isFront && isRear) {
              borderClass = "border-amber-500";
              bgClass = "bg-amber-500/10 text-amber-500 font-black";
            } else if (isFront) {
              borderClass = "border-green-500";
              bgClass = "bg-green-500/10 text-green-500 font-bold";
            } else if (isRear) {
              borderClass = "border-purple-500";
              bgClass = "bg-purple-500/10 text-purple-500 font-bold";
            } else if (!isEmpty) {
              borderClass = "border-primary/50";
              bgClass = "bg-primary/5 text-slate-200";
            }

            return (
              <motion.div
                key={idx}
                style={{
                  position: "absolute",
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`w-12 h-12 rounded-full border-2 flex flex-col items-center justify-center font-mono text-xs transition-all duration-300 relative ${bgClass} ${borderClass}`}
              >
                <span className="text-[7px] text-slate-500 font-bold select-none mb-0.5">
                  #{idx}
                </span>
                <span className="font-extrabold">{isEmpty ? "-" : val}</span>

                {isFront && (
                  <div className="absolute -left-12 top-1.5 flex items-center gap-0.5 text-[6.5px] font-black text-green-500 uppercase select-none">
                    <span>F ➔</span>
                  </div>
                )}
                {isRear && (
                  <div className="absolute -right-12 top-1.5 flex items-center gap-0.5 text-[6.5px] font-black text-purple-500 uppercase select-none">
                    <span>➔ R</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- Deque ---
  const renderDequeCanvas = () => {
    const queue = Array.isArray(data) ? data : [];
    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Double Ended Queue (Deque)
          </span>
        </div>

        <div className="w-full flex justify-center items-center gap-4 py-8">
          <span className="text-[8px] font-black text-green-500 uppercase tracking-widest select-none">
            ◀ FRONT
          </span>
          <div className="w-full max-w-lg h-16 bg-slate-900/50 dark:bg-slate-950/50 border-y-2 border-slate-700/80 rounded-lg flex items-center p-2 gap-2.5 overflow-x-auto shadow-inner relative">
            <AnimatePresence>
              {queue.map((val, idx) => {
                const isFront = idx === 0;
                const isRear = idx === queue.length - 1;
                return (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className={`w-12 h-10 rounded border flex items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0 relative ${
                      isFront
                        ? "bg-green-600/80 border-green-500"
                        : isRear
                          ? "bg-purple-600/80 border-purple-500"
                          : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    {val}
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {queue.length === 0 && (
              <span className="text-[8px] font-black tracking-widest text-slate-700 w-full text-center uppercase">
                Empty Deque
              </span>
            )}
          </div>
          <span className="text-[8px] font-black text-purple-500 uppercase tracking-widest select-none">
            BACK ➔
          </span>
        </div>
      </div>
    );
  };

  // --- CPU scheduling ---
  const renderCpuSchedulingCanvas = () => {
    const schedulingData = data || {};
    const readyQueue = schedulingData.readyQueue || [];
    const activeProcess = schedulingData.activeProcess || null;
    const completed = schedulingData.completedProcesses || [];
    const time = schedulingData.time || 0;
    const quantum = schedulingData.quantum || 3;

    return (
      <div className="w-full min-h-[340px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            CPU Round Robin Scheduler
          </span>
          <div className="flex gap-2 text-[10px]">
            <span className="font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary">
              Global Time: {time}ms
            </span>
            <span className="font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
              Quantum: {quantum}ms
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
          <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl border border-slate-200/20 dark:border-slate-800/40 bg-slate-900/35 backdrop-blur-sm">
            <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">
              Ready Queue
            </span>
            <div className="flex flex-col gap-2 min-h-[120px] justify-start overflow-y-auto">
              <AnimatePresence>
                {readyQueue.map((p) => (
                  <motion.div
                    key={p.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="flex justify-between items-center p-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs"
                  >
                    <span className="text-primary font-bold">{p.name}</span>
                    <span className="text-[10px] text-slate-400">
                      Burst Left: {p.remaining}ms
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {readyQueue.length === 0 && (
                <div className="text-[8px] font-black text-slate-700 text-center py-8">
                  Queue Empty
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3.5 p-4 rounded-3xl border-2 border-primary/25 bg-slate-950 justify-center items-center shadow-lg relative overflow-hidden min-h-[120px]">
            <div className="absolute top-2 left-3 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-[7px] font-black text-red-500 uppercase tracking-widest">
                Active CPU Core
              </span>
            </div>

            {activeProcess ? (
              <div className="flex flex-col items-center gap-2 mt-2">
                <span className="text-3xl font-black text-primary animate-pulse">
                  {activeProcess.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Remaining: {activeProcess.remaining}ms
                </span>
                <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(activeProcess.remaining / activeProcess.totalBurst) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            ) : (
              <span className="text-xs font-mono text-slate-500 py-10 uppercase tracking-widest">
                CPU IDLE
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl border border-slate-200/20 dark:border-slate-800/40 bg-slate-900/35 backdrop-blur-sm">
            <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">
              Completed Jobs
            </span>
            <div className="flex flex-col gap-2 min-h-[120px] justify-start overflow-y-auto">
              {completed.map((p) => (
                <div
                  key={p.name}
                  className="flex justify-between items-center p-2 rounded-lg bg-success/5 border border-success/15 font-mono text-xs animate-pulse"
                >
                  <span className="text-success font-bold">{p.name}</span>
                  <span className="text-[10px] text-slate-400">
                    Finished: {p.finishTime}ms
                  </span>
                </div>
              ))}
              {completed.length === 0 && (
                <div className="text-[8px] font-black text-slate-700 text-center py-8">
                  None Completed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Printer Queue ---
  const renderPrinterQueueCanvas = () => {
    const printerData = data || {};
    const queue = printerData.queue || [];
    const currentJob = printerData.currentJob || null;
    const completed = printerData.completedJobs || [];
    const progress = printerData.progress || 0;

    return (
      <div className="w-full min-h-[340px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Office Printer Queue Simulation
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
            Jobs Left: {queue.length + (currentJob ? 1 : 0)}
          </span>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
          <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl border border-slate-200/20 dark:border-slate-800/40 bg-slate-900/35">
            <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">
              Document Queue
            </span>
            <div className="flex flex-col gap-2 min-h-[120px]">
              {queue.map((job) => (
                <div
                  key={job}
                  className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[10px] text-slate-300"
                >
                  📁 {job}
                </div>
              ))}
              {queue.length === 0 && (
                <div className="text-[8px] font-black text-slate-700 text-center py-8">
                  Queue Empty
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 p-4 rounded-3xl border border-slate-800 bg-slate-950 items-center justify-center text-center shadow-lg relative min-h-[120px]">
            <div className="absolute top-2 left-3 flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${currentJob ? "bg-emerald-500 animate-ping" : "bg-slate-700"}`}
              />
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">
                PRINTER STATUS
              </span>
            </div>

            {currentJob ? (
              <div className="flex flex-col items-center gap-2 mt-2 w-full">
                <span className="text-lg font-black text-slate-200 truncate max-w-full">
                  🖨️ {currentJob}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                  Printing: {progress}%
                </span>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mt-1 border border-slate-800">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                PRINTER IDLE
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl border border-slate-200/20 dark:border-slate-800/40 bg-slate-900/35 relative">
            <span className="text-[8px] font-black tracking-widest text-slate-500 uppercase">
              Printed Tray
            </span>
            <div className="flex flex-col-reverse gap-1.5 min-h-[120px] justify-start items-center py-4 overflow-y-auto">
              <AnimatePresence>
                {completed.map((job) => (
                  <motion.div
                    key={job}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-11/12 p-1.5 rounded bg-white text-slate-800 font-mono text-[9px] font-bold text-center border-b border-slate-300 shadow-sm flex items-center justify-center gap-1"
                  >
                    📄 {job}
                  </motion.div>
                ))}
              </AnimatePresence>
              {completed.length === 0 && (
                <div className="text-[8px] font-black text-slate-700 text-center py-8 self-stretch">
                  Tray Empty
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- LFU Cache Buckets ---
  const renderLfuCacheCanvas = () => {
    const lfu = data || {};
    const cache = lfu.cache || {};
    const freqToKeys = lfu.freqToKeys || {};
    const capacity = lfu.capacity || 2;

    return (
      <div className="w-full min-h-[340px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left font-sans">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            LFU Cache Eviction Monitor
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
            Capacity: {Object.keys(cache).length} / {capacity}
          </span>
        </div>

        <div className="w-full flex flex-col gap-4 py-2">
          {Object.entries(freqToKeys).map(([freq, keys]) => (
            <div
              key={freq}
              className="flex items-center gap-4 p-3 rounded-xl border border-slate-800 bg-slate-900/25"
            >
              <div className="w-16 flex-shrink-0 flex flex-col">
                <span className="text-[8px] font-black text-slate-500 uppercase">
                  Frequency
                </span>
                <span className="text-xs font-black text-primary font-mono">
                  {freq}x hit
                </span>
              </div>
              <div className="flex gap-2.5 flex-wrap flex-1">
                <AnimatePresence>
                  {keys.map((key) => (
                    <motion.div
                      key={key}
                      layoutId={`lfu-key-${key}`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs flex gap-1.5 items-center shadow-inner"
                    >
                      <span className="text-primary font-bold">{key}</span>
                      <span className="text-slate-600">:</span>
                      <span className="text-emerald-400 font-black">
                        {cache[key]}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {Object.keys(freqToKeys).length === 0 && (
            <div className="text-xs font-mono text-slate-500 text-center py-10 uppercase tracking-widest">
              Cache Empty
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Sliding Window Maximum (Monotonic Deque) ---
  const renderSlidingWindowMaxMonoCanvas = () => {
    const nums = Array.isArray(data) ? data : [];
    const deque = stackState?.deque || [];
    const charIdx = stackState?.charIdx !== undefined ? stackState.charIdx : -1;
    const result = stackState?.result || [];
    const k = stackState?.k || 3;

    return (
      <div className="w-full min-h-[340px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Sliding Window Max (Monotonic Deque)
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase font-mono">
            Window Size (K): {k}
          </span>
        </div>

        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              Input Array & Window
            </span>
            <div className="flex gap-1.5 p-2 rounded-2xl border border-slate-800 bg-slate-950 relative">
              {nums.map((val, idx) => {
                const isInWindow =
                  charIdx !== -1 && idx <= charIdx && idx > charIdx - k;
                const isCurrent = idx === charIdx;

                let borderClass = "border-slate-800";
                let bgClass = "bg-slate-900 text-slate-400 opacity-60";
                if (isCurrent) {
                  borderClass = "border-amber-500";
                  bgClass =
                    "bg-amber-500/10 text-amber-500 font-extrabold scale-105";
                } else if (isInWindow) {
                  borderClass = "border-primary/60";
                  bgClass = "bg-primary/5 text-slate-200 font-bold opacity-100";
                }

                return (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-xl border flex flex-col items-center justify-center font-mono text-xs transition-all duration-300 relative ${bgClass} ${borderClass}`}
                  >
                    <span className="text-[6.5px] text-slate-600 select-none">
                      #{idx}
                    </span>
                    <span>{val}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              Monotonic Deque (Indices)
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[7.5px] font-black text-green-500">
                ◀ FRONT (MAX)
              </span>
              <div className="w-64 h-12 bg-slate-950 border-y-2 border-slate-700/85 rounded-lg flex items-center justify-start p-1.5 gap-1.5 overflow-x-auto shadow-inner">
                {deque.map((idxVal) => (
                  <div
                    key={idxVal}
                    className="w-9 h-8 rounded border border-slate-700 bg-slate-800 flex flex-col items-center justify-center font-mono text-[9px] text-slate-200 flex-shrink-0"
                  >
                    <span className="text-[6px] text-slate-500">#{idxVal}</span>
                    <span className="font-bold">{nums[idxVal]}</span>
                  </div>
                ))}
                {deque.length === 0 && (
                  <span className="text-[8px] font-mono text-slate-700 w-full text-center">
                    EMPTY
                  </span>
                )}
              </div>
              <span className="text-[7.5px] font-black text-purple-500">
                BACK ➔
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              Result (Window Maxima)
            </span>
            <div className="flex gap-1.5 font-mono text-xs font-bold text-success font-black">
              [{result.join(", ")}]
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Josephus Elimination Circle ---
  const renderJosephusCanvas = () => {
    const people = Array.isArray(data) ? data : [];
    const n = people.length;
    if (n === 0) return null;

    const survivor = stepState?.stats?.survivor || null;

    return (
      <div className="w-full min-h-[360px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Josephus Elimination Circle
          </span>
          {survivor && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase">
              Survivor: Person {survivor}
            </span>
          )}
        </div>

        <div className="relative w-full max-w-[240px] h-[240px] flex items-center justify-center bg-slate-900/10 dark:bg-slate-950/10 rounded-full border border-slate-700/15">
          {people.map((person, idx) => {
            const angle = (idx * 2 * Math.PI) / n - Math.PI / 2;
            const radius = 80;
            const x = Math.round(radius * Math.cos(angle));
            const y = Math.round(radius * Math.sin(angle));

            let bgClass =
              "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700";
            if (person.active) {
              bgClass =
                "bg-amber-500 text-white border-amber-600 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.5)] z-25";
            } else if (person.eliminated) {
              bgClass =
                "bg-red-500/10 text-red-500/40 border-red-500/20 line-through opacity-30 scale-90";
            } else if (survivor && person.id === survivor) {
              bgClass =
                "bg-success text-white border-success scale-115 shadow-[0_0_15px_rgba(16,185,129,0.6)] z-25";
            } else {
              bgClass =
                "bg-primary/10 text-primary border-primary/20 hover:scale-105";
            }

            return (
              <motion.div
                key={person.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  position: "absolute",
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${bgClass}`}
              >
                {person.id}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderQueueCanvas = () => {
    const algoId = algorithm.id || "";
    if (algoId === "josephus-problem") return renderJosephusCanvas();
    if (algoId === "circular-queue") return renderCircularQueueCanvas();
    if (algoId === "deque-type") return renderDequeCanvas();
    if (algoId === "task-scheduling" || algoId === "cpu-scheduling")
      return renderCpuSchedulingCanvas();
    if (algoId === "printer-queue") return renderPrinterQueueCanvas();
    if (algoId === "lfu-cache-advanced") return renderLfuCacheCanvas();
    if (algoId === "sliding-window-max-mono")
      return renderSlidingWindowMaxMonoCanvas();

    const queueItems = queueState?.queue || [];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 px-6">
        {/* Horizontal tube */}
        <div className="w-full max-w-xl h-16 bg-slate-950 border-y-2 border-slate-700/85 rounded-lg flex items-center p-2 gap-2 overflow-x-auto shadow-inner">
          <AnimatePresence>
            {queueItems.map((val, idx) => {
              const isFront = idx === 0;
              const isRear = idx === queueItems.length - 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  className={`
                    w-12 h-10 rounded border flex flex-col items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0 relative
                    ${isFront ? "bg-green-600 border-green-500" : isRear ? "bg-purple-600 border-purple-500" : "bg-slate-800 border-slate-700"}
                  `}
                >
                  <span>{val}</span>
                  {isFront && (
                    <span className="absolute -bottom-5 text-[8px] text-green-400 font-bold uppercase">
                      FRONT
                    </span>
                  )}
                  {isRear && (
                    <span className="absolute -top-5 text-[8px] text-purple-400 font-bold uppercase">
                      REAR
                    </span>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          {queueItems.length === 0 && (
            <span className="text-[10px] font-mono text-slate-700 w-full text-center">
              EMPTY BUFFER
            </span>
          )}
        </div>
      </div>
    );
  };

  // --- 6. RENDER TREES (BST) ---
  const renderTreeCanvas = () => {
    const nodes = data || [];
    const isLargeTree = nodes.length > 10;
    const nodeSizeClass = isLargeTree
      ? "w-7.5 h-7.5 text-[10px]"
      : "w-9 h-9 text-xs";

    return (
      <div className="w-full h-72 relative">
        <svg className="w-full h-full absolute inset-0 z-0 pointer-events-none">
          {/* Draw connecting edge lines */}
          {nodes.map((node) => {
            const lines = [];
            if (node.left) {
              const leftChild = nodes.find((n) => n.id === node.left.id);
              if (leftChild) {
                lines.push(
                  <line
                    key={`${node.id}-left`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${leftChild.x}%`}
                    y2={leftChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={
                      highlights[node.id] === "sorted" &&
                      highlights[leftChild.id] === "sorted"
                        ? "none"
                        : "4"
                    }
                  />,
                );
              }
            }
            if (node.right) {
              const rightChild = nodes.find((n) => n.id === node.right.id);
              if (rightChild) {
                lines.push(
                  <line
                    key={`${node.id}-right`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${rightChild.x}%`}
                    y2={rightChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={
                      highlights[node.id] === "sorted" &&
                      highlights[rightChild.id] === "sorted"
                        ? "none"
                        : "4"
                    }
                  />,
                );
              }
            }
            return lines;
          })}
        </svg>

        {/* Tree Nodes */}
        {nodes.map((node) => {
          let nodeColorClass = getHighlightClass(node.id);
          const isRbt =
            treeState?.rbt || node.color === "red" || node.color === "black";

          if (isRbt) {
            const isRed = node.color === "red";
            const isHighlight = highlights[node.id] === "compare";
            if (isHighlight) {
              nodeColorClass = isRed
                ? "bg-rose-500 text-white border-white scale-110 shadow-lg ring-4 ring-rose-400/50"
                : "bg-slate-900 text-white border-white scale-110 shadow-lg ring-4 ring-slate-400/50";
            } else {
              nodeColorClass = isRed
                ? "bg-rose-600 text-white border-rose-500 shadow-md ring-2 ring-rose-500/30"
                : "bg-slate-950 text-white border-slate-800 shadow-md ring-2 ring-slate-700/30";
            }
          }

          const resolvedId = algorithm.counterpartId || algorithm.id;
          const isBTreeOrAdvanced =
            resolvedId === "b-tree" ||
            resolvedId === "b-plus-tree" ||
            resolvedId === "kd-tree" ||
            resolvedId === "quad-tree" ||
            resolvedId === "octree" ||
            resolvedId === "interval-tree" ||
            resolvedId === "suffix-tree";

          const nodeShapeClass = isBTreeOrAdvanced
            ? "rounded-md px-3.5 py-2.5 h-auto w-auto max-w-[150px] text-center text-[10px] whitespace-nowrap shadow-md"
            : `${nodeSizeClass} rounded-full`;

          return (
            <div
              key={node.id}
              style={{
                left: `${node.x}%`,
                top: `${node.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className={`
                absolute ${nodeShapeClass} border-2 flex flex-col items-center justify-center font-mono font-bold transition-all duration-300 z-10
                ${nodeColorClass}
              `}
            >
              <span className="leading-none">{node.val}</span>
              {node.result !== undefined && node.result !== null && (
                <span className="text-[7.5px] text-yellow-400 font-semibold leading-none mt-0.5">
                  {typeof node.result === "number"
                    ? `=${node.result}`
                    : node.result}
                </span>
              )}
            </div>
          );
        })}

        {/* Visit Path scoreboard bottom list */}
        {treeState?.path && (
          <div className="absolute bottom-2 left-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-slate-500 overflow-x-auto whitespace-nowrap bg-black/40 p-1.5 rounded border border-slate-800">
            <span className="font-bold text-accent uppercase mr-1">Path:</span>
            {treeState.path.map((val, idx) => (
              <span
                key={idx}
                className="bg-slate-800 text-slate-300 px-1 rounded"
              >
                {val}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  // --- 7. RENDER GRAPHS ---
  const renderGraphCanvas = () => {
    let rawNodes = [];
    let rawEdges = [];
    let activeNode = null;
    let relaxingEdge = null;
    let visited = {};
    let dist = {};
    let nodeLabels = {};
    let hasDist = false;

    // Detect if we have Format B (from roadmapGenerators)
    if (graphState && Array.isArray(graphState.nodes)) {
      rawNodes = graphState.nodes.map((n) => n.id);
      rawEdges = (graphState.edges || []).map((e) => ({
        u: e.source,
        v: e.target,
        w: e.label || "",
        visited: e.visited,
        active: e.active,
      }));
      graphState.nodes.forEach((n) => {
        if (n.active) activeNode = n.id;
        if (n.visited) visited[n.id] = true;
        if (n.label) nodeLabels[n.id] = n.label;
      });
      const activeEdge = graphState.edges?.find((e) => e.active);
      if (activeEdge) {
        relaxingEdge = { u: activeEdge.source, v: activeEdge.target };
      }
    } else {
      const {
        nodes = [],
        edges = [],
        dist: rawDist = [],
        visited: rawVisited = [],
      } = data || {};
      rawNodes = nodes;
      rawEdges = edges.map((e) => ({
        u: e.u,
        v: e.v,
        w: e.w,
        visited: false,
        active: false,
      }));
      activeNode = graphState?.activeNode;
      relaxingEdge = graphState?.relaxingEdge;
      visited = rawVisited;

      // We only show distance labels if dist is populated
      if (Array.isArray(rawDist) && rawDist.length > 0) {
        hasDist = true;
        rawNodes.forEach((node) => {
          dist[node] = rawDist[node];
        });
      } else if (
        rawDist &&
        typeof rawDist === "object" &&
        Object.keys(rawDist).length > 0
      ) {
        hasDist = true;
        rawNodes.forEach((node) => {
          dist[node] = rawDist[node];
        });
      }
    }

    // Dynamic circular layout for graph nodes
    const nodeCoords = {};
    const n = rawNodes.length;
    const centerX = 50; // percentage
    const centerY = 135; // pixels (vertical center of container)
    const radiusX = 35; // percentage radius
    const radiusY = 85; // pixel radius

    rawNodes.forEach((node, idx) => {
      if (n === 4) {
        // Keep original layout for exactly 4 nodes to match default description
        const fixedCoords = {
          0: { x: 20, y: 130 },
          1: { x: 50, y: 60 },
          2: { x: 50, y: 200 },
          3: { x: 80, y: 130 },
        };
        nodeCoords[node] =
          fixedCoords[node] !== undefined
            ? fixedCoords[node]
            : fixedCoords[idx];
      } else {
        const angle = (2 * Math.PI * idx) / n - Math.PI / 2;
        nodeCoords[node] = {
          x: centerX + radiusX * Math.cos(angle),
          y: centerY + radiusY * Math.sin(angle),
        };
      }
    });

    return (
      <div className="w-full h-72 relative">
        <svg className="w-full h-full absolute inset-0 z-0">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="20"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
            </marker>
          </defs>

          {/* Draw connecting weight edges */}
          {rawEdges.map((edge, idx) => {
            const uCoord = nodeCoords[edge.u];
            const vCoord = nodeCoords[edge.v];
            if (!uCoord || !vCoord) return null;

            const isActiveEdge =
              edge.active ||
              (relaxingEdge &&
                ((relaxingEdge.u === edge.u && relaxingEdge.v === edge.v) ||
                  (relaxingEdge.u === edge.v && relaxingEdge.v === edge.u)));
            const isMstEdge = edge.visited;

            let strokeColor = "#475569";
            let strokeWidth = "1.5";
            let className = "";

            if (isActiveEdge) {
              strokeColor = "#06b6d4";
              strokeWidth = "3";
              className = "animate-pulse";
            } else if (isMstEdge) {
              strokeColor = "#10b981"; // Green for MST
              strokeWidth = "3";
            }

            return (
              <g key={idx}>
                <line
                  x1={`${uCoord.x}%`}
                  y1={uCoord.y}
                  x2={`${vCoord.x}%`}
                  y2={vCoord.y}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  className={className}
                />
                {/* Weight Text Label */}
                {edge.w !== undefined && edge.w !== "" && (
                  <text
                    x={`${(uCoord.x + vCoord.x) / 2}%`}
                    y={(uCoord.y + vCoord.y) / 2 - 6}
                    fill={
                      isActiveEdge
                        ? "#06b6d4"
                        : isMstEdge
                          ? "#10b981"
                          : "#94a3b8"
                    }
                    className="font-mono text-[9px] font-bold text-center"
                  >
                    w:{edge.w}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {rawNodes.map((node) => {
          const coord = nodeCoords[node];
          if (!coord) return null;

          const isActive = activeNode === node;
          const isVisited = visited[node];
          const nodeDist = dist[node] === Infinity ? "∞" : dist[node];
          const label =
            nodeLabels[node] !== undefined ? nodeLabels[node] : node;

          let nodeClass = "bg-slate-800 border-slate-700 text-slate-400";
          if (isActive)
            nodeClass =
              "bg-purple-600 border-purple-400 shadow-[0_0_10px_#8b5cf6] text-white";
          else if (isVisited)
            nodeClass =
              "bg-emerald-600 border-emerald-500 shadow-[0_0_10px_#10b981] text-white";

          return (
            <div
              key={node}
              style={{
                left: `${coord.x}%`,
                top: `${coord.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className={`
                absolute min-w-10 px-2 h-10 rounded-full border-2 flex flex-col items-center justify-center font-mono font-bold z-10 transition-all duration-300
                ${nodeClass}
              `}
            >
              <span className="text-xs">{label}</span>
              {hasDist && (
                <span
                  className={`text-[9px] font-bold leading-none mt-0.5 ${isActive || isVisited ? "text-white/90" : "text-slate-400"}`}
                >
                  d:{nodeDist}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // --- 8. RENDER RECURSION  // --- Recursion Call Tree ---
  const renderRecursionTreeCanvas = () => {
    const nodes = Array.isArray(data) ? data : [];
    const activeNodeId =
      treeState?.activeNode !== undefined ? treeState.activeNode : null;
    const algoId = algorithm.id || "";
    const isFactorial = algoId === "recursion-factorial";

    const rootNode = nodes.find((n) => n.id === 0);
    const showResult =
      activeNodeId === null && rootNode && rootNode.result !== null;

    return (
      <div
        className="w-full min-h-[360px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl"
        style={{
          boxShadow:
            "10px 10px 25px rgba(0, 0, 0, 0.5), inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="w-full flex items-center justify-between z-10">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            {isFactorial
              ? "Linear Factorial Call Stack"
              : "Binary Recursion Tree"}
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/20 text-primary uppercase font-mono">
            Active:{" "}
            {activeNodeId !== null
              ? `${isFactorial ? "fact" : "fib"}(${nodes.find((n) => n.id === activeNodeId)?.val})`
              : "idle"}
          </span>
        </div>

        <div className="relative w-full max-w-lg h-60 min-h-[220px] select-none mx-auto flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {nodes.map((node) => {
              if (isFactorial) {
                if (node.childId !== null && node.childId !== undefined) {
                  const child = nodes.find((n) => n.id === node.childId);
                  if (child) {
                    return (
                      <line
                        key={`edge-${node.id}`}
                        x1={`${node.x}%`}
                        y1={node.y}
                        x2={`${child.x}%`}
                        y2={child.y}
                        className="stroke-slate-700/60 dark:stroke-slate-800/80 stroke-2"
                        strokeDasharray={
                          node.id >= activeNodeId ? "4,4" : "none"
                        }
                      />
                    );
                  }
                }
              } else {
                return (
                  <React.Fragment key={`edges-${node.id}`}>
                    {node.left && (
                      <line
                        x1={`${node.x}%`}
                        y1={node.y}
                        x2={`${node.left.x}%`}
                        y2={node.left.y}
                        className="stroke-slate-700/60 dark:stroke-slate-800/80 stroke-2"
                      />
                    )}
                    {node.right && (
                      <line
                        x1={`${node.x}%`}
                        y1={node.y}
                        x2={`${node.right.x}%`}
                        y2={node.right.y}
                        className="stroke-slate-700/60 dark:stroke-slate-800/80 stroke-2"
                      />
                    )}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </svg>

          {nodes.map((node) => {
            const isActive = node.id === activeNodeId;
            const isComputed =
              node.result !== null && node.result !== undefined;

            let clayStyle = {
              boxShadow:
                "inset 3px 3px 6px rgba(255, 255, 255, 0.05), inset -3px -3px 6px rgba(0, 0, 0, 0.5), 6px 6px 15px rgba(0, 0, 0, 0.4)",
            };
            let bgClass = "bg-slate-800 text-slate-400";

            if (isActive) {
              bgClass = "bg-amber-500 text-white font-extrabold";
              clayStyle = {
                boxShadow:
                  "inset 4px 4px 8px rgba(255, 255, 255, 0.4), inset -4px -4px 8px rgba(0, 0, 0, 0.35), 8px 8px 20px rgba(245, 158, 11, 0.35)",
              };
            } else if (isComputed) {
              bgClass = "bg-emerald-500 text-white font-bold";
              clayStyle = {
                boxShadow:
                  "inset 4px 4px 8px rgba(255, 255, 255, 0.4), inset -4px -4px 8px rgba(0, 0, 0, 0.35), 8px 8px 20px rgba(16, 185, 129, 0.3)",
              };
            }

            return (
              <motion.div
                key={node.id}
                initial={{ scale: 0.8 }}
                animate={{ scale: isActive ? 1.1 : 1 }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}px`,
                  transform: "translate(-50%, -50%)",
                  ...clayStyle,
                }}
                className={`w-12 h-12 rounded-full flex flex-col items-center justify-center font-mono text-[9px] transition-all duration-300 select-none ${bgClass}`}
              >
                <span className="font-extrabold">
                  {isFactorial ? "fact" : "fib"}({node.val})
                </span>
                {isComputed && (
                  <span className="text-[7.5px] font-black text-slate-200 mt-0.5">
                    ={node.result}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Final result presentation */}
        {showResult && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-xs mt-2 p-3.5 rounded-3xl flex flex-col items-center justify-center text-center font-sans select-none z-10"
            style={{
              background: "#10b981",
              color: "#ffffff",
              boxShadow:
                "inset 4px 4px 10px rgba(255, 255, 255, 0.45), inset -4px -4px 10px rgba(0, 0, 0, 0.3), 10px 10px 25px rgba(16, 185, 129, 0.35)",
            }}
          >
            <span className="text-[9px] font-black uppercase text-emerald-100 tracking-widest mb-1">
              Computation Complete
            </span>
            <span className="text-base font-black font-mono">
              {isFactorial ? "factorial" : "fibonacci"}({rootNode.val}) ={" "}
              {rootNode.result}
            </span>
          </motion.div>
        )}
      </div>
    );
  };

  // --- Letter Combinations of a Phone Number ---
  const renderLetterCombinationsCanvas = () => {
    const digits = data?.digits || "23";
    const currentPrefix = data?.currentPrefix || "";
    const activeDigit = data?.activeDigit || "";
    const letters = data?.letters || "";
    const combinations = data?.combinations || [];

    const keypadLayout = [
      { num: "1", letters: "" },
      { num: "2", letters: "abc" },
      { num: "3", letters: "def" },
      { num: "4", letters: "ghi" },
      { num: "5", letters: "jkl" },
      { num: "6", letters: "mno" },
      { num: "7", letters: "pqrs" },
      { num: "8", letters: "tuv" },
      { num: "9", letters: "wxyz" },
      { num: "*", letters: "" },
      { num: "0", letters: "" },
      { num: "#", letters: "" },
    ];

    return (
      <div className="w-full min-h-[340px] flex flex-col md:flex-row gap-6 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl">
        <div className="w-full md:w-56 flex flex-col items-center gap-2 flex-shrink-0">
          <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
            Phone Keypad
          </span>
          <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950 rounded-2xl border border-slate-850 shadow-inner w-full max-w-[200px]">
            {keypadLayout.map((k) => {
              const isActive = k.num === activeDigit;
              const isTarget = digits.includes(k.num);

              let borderClass = "border-slate-850";
              let bgClass = "bg-slate-900 text-slate-600";
              if (isActive) {
                borderClass = "border-amber-500";
                bgClass = "bg-amber-500/20 text-amber-500 font-extrabold";
              } else if (isTarget) {
                borderClass = "border-primary/50";
                bgClass = "bg-primary/5 text-primary-light";
              }

              return (
                <div
                  key={k.num}
                  className={`aspect-square rounded-xl border flex flex-col items-center justify-center font-mono transition-all duration-300 relative select-none ${bgClass} ${borderClass}`}
                >
                  <span className="text-xs font-black">{k.num}</span>
                  {k.letters && (
                    <span className="text-[6.5px] uppercase font-bold tracking-widest">
                      {k.letters}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Keypad Backtracking Path
            </span>

            <div className="grid grid-cols-2 gap-3 font-mono text-[10px] text-slate-400">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-[6.5px] text-slate-500 uppercase block mb-0.5">
                  Input Digits
                </span>
                <span className="text-slate-200 font-bold text-xs">
                  {digits || "None"}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-[6.5px] text-slate-500 uppercase block mb-0.5">
                  Current Prefix
                </span>
                <span className="text-amber-500 font-bold text-xs">
                  "{currentPrefix}"
                </span>
              </div>
            </div>

            {activeDigit && (
              <div className="p-3.5 rounded-2xl border border-amber-500/20 bg-amber-500/5 font-mono text-xs flex flex-col gap-1.5 animate-pulse">
                <div className="flex justify-between items-center text-[7px] font-black tracking-widest text-amber-500 uppercase">
                  <span>Exploring Digit mapping: '{activeDigit}'</span>
                  <span>Letters: {letters.split("").join(" | ")}</span>
                </div>
                <div className="flex gap-2.5 mt-1">
                  {letters.split("").map((char) => {
                    const isPicked = currentPrefix.endsWith(char);
                    return (
                      <div
                        key={char}
                        className={`px-2 py-1 rounded text-[10px] border font-bold transition-all duration-300 ${
                          isPicked
                            ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                            : "bg-slate-950 border-slate-800 text-slate-500"
                        }`}
                      >
                        {currentPrefix + char}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 p-3 rounded-2xl border border-slate-800 bg-slate-950/40">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider font-bold">
              Combinations Generated ({combinations.length})
            </span>
            <div className="flex gap-1.5 flex-wrap max-h-24 overflow-y-auto font-mono text-[9px] py-1">
              <AnimatePresence>
                {combinations.map((comb) => (
                  <motion.div
                    key={comb}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold"
                  >
                    {comb}
                  </motion.div>
                ))}
              </AnimatePresence>
              {combinations.length === 0 && (
                <span className="text-[8px] font-mono text-slate-700 uppercase py-1">
                  None yet
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Palindrome Partitioning ---
  const renderPalindromePartitioningCanvas = () => {
    const str = data?.str || "aab";
    const current = data?.current || [];
    const subStr = data?.subStr || "";
    const completed = data?.completed || [];

    return (
      <div className="w-full min-h-[320px] flex flex-col md:flex-row gap-6 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl">
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Active String Slicing
            </span>
            <div className="flex gap-2.5 items-center mt-2">
              {str.split("").map((char, idx) => {
                const isSubStrChar =
                  subStr &&
                  idx <= data?.matchedIndex &&
                  idx >= data?.matchedIndex - subStr.length + 1;

                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-sm transition-all duration-300 border ${
                      isSubStrChar
                        ? "bg-amber-500 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse"
                        : "bg-slate-950 border-slate-850 text-slate-400"
                    }`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
            {subStr && (
              <div className="text-[9px] font-mono text-amber-500 uppercase font-bold tracking-widest mt-1">
                Evaluating Substring slice: "{subStr}"
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 p-3 rounded-2xl border border-slate-800 bg-slate-950/40">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              Active Partition Stack
            </span>
            <div className="flex gap-2 items-center font-mono text-xs">
              {current.map((part, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <span className="text-slate-600 font-black">→</span>
                  )}
                  <div className="px-3 py-1 rounded-xl bg-primary/20 border border-primary/30 text-primary-light font-bold">
                    {part}
                  </div>
                </React.Fragment>
              ))}
              {current.length === 0 && (
                <span className="text-[9px] uppercase tracking-wider text-slate-700 font-bold font-mono">
                  Empty Stack (Root)
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-64 flex flex-col gap-3 flex-shrink-0">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Partition Combinations ({completed.length})
          </span>
          <div className="flex flex-col gap-2 p-3 bg-slate-950 border border-slate-850 rounded-2xl h-[180px] overflow-y-auto">
            <AnimatePresence>
              {completed.map((part, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold font-mono text-[10px] flex gap-1.5 items-center"
                >
                  <span className="text-[8px] bg-emerald-500/20 text-emerald-400 w-4 h-4 rounded-full flex items-center justify-center font-black font-bold">
                    {idx + 1}
                  </span>
                  {`[ ${part.join(" | ")} ]`}
                </motion.div>
              ))}
            </AnimatePresence>
            {completed.length === 0 && (
              <span className="text-[9px] uppercase tracking-wider text-slate-700 font-bold font-mono text-center my-auto">
                No solutions yet
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- Permutations ---
  const renderPermutationsCanvas = () => {
    const arr = data?.arr || [];
    const current = data?.current || [];
    const remaining = data?.remaining || [];
    const completed = data?.completed || [];

    return (
      <div className="w-full min-h-[320px] flex flex-col md:flex-row gap-6 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl">
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase font-bold">
              Element Selection Pool
            </span>
            <div className="flex gap-3 mt-1.5">
              {arr.map((val, idx) => {
                const isRemaining = remaining.includes(val);
                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                      isRemaining
                        ? "bg-slate-950 border border-slate-800 text-slate-300 shadow-inner"
                        : "bg-primary/10 border border-primary/20 text-primary-light opacity-40"
                    }`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase font-bold">
              Active Permutation Build
            </span>
            <div className="flex gap-2.5 items-center mt-1">
              {current.map((val, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <span className="text-slate-600 font-mono">→</span>
                  )}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-mono font-black text-xs bg-amber-500 text-white"
                    style={{
                      boxShadow:
                        "inset 3px 3px 6px rgba(255,255,255,0.4), inset -3px -3px 6px rgba(0,0,0,0.3), 6px 6px 12px rgba(245,158,11,0.25)",
                    }}
                  >
                    {val}
                  </div>
                </React.Fragment>
              ))}
              {current.length === 0 && (
                <span className="text-[9px] uppercase tracking-wider text-slate-700 font-bold font-mono">
                  Empty Permutation
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-64 flex flex-col gap-3 flex-shrink-0">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Generated Permutations ({completed.length})
          </span>
          <div className="flex flex-col gap-2 p-3 bg-slate-950 border border-slate-850 rounded-2xl h-[180px] overflow-y-auto">
            <AnimatePresence>
              {completed.map((perm, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold font-mono text-[10px] flex gap-2 items-center"
                >
                  <span className="text-[8px] bg-emerald-500/20 text-emerald-400 w-4 h-4 rounded-full flex items-center justify-center font-black font-bold">
                    {idx + 1}
                  </span>
                  {`[ ${perm.join(", ")} ]`}
                </motion.div>
              ))}
            </AnimatePresence>
            {completed.length === 0 && (
              <span className="text-[9px] uppercase tracking-wider text-slate-700 font-bold font-mono text-center my-auto">
                No outcomes yet
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- Crossword Solver ---
  const renderCrosswordCanvas = () => {
    const board = data?.board || [[]];
    const words = data?.words || [];
    const activeWord = data?.activeWord || "";

    return (
      <div className="w-full min-h-[320px] flex flex-col md:flex-row gap-6 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl">
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase w-full text-left">
            Crossword Matrix
          </span>
          <div className="flex flex-col gap-1.5 p-3.5 bg-slate-950 border border-slate-850 rounded-2xl shadow-inner mt-2">
            {board.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-1.5">
                {row.map((cell, cIdx) => {
                  const isBlocker = cell === "-";
                  const isEmpty = cell === "#";
                  const isFilled = !isBlocker && !isEmpty;

                  let borderClass = "border-slate-800";
                  let bgClass = "bg-slate-900 text-slate-200";
                  if (isBlocker) {
                    bgClass = "bg-slate-950 border-slate-950 opacity-20";
                  } else if (isEmpty) {
                    bgClass = "bg-slate-900 border-dashed text-transparent";
                  } else if (isFilled) {
                    bgClass =
                      "bg-primary/10 border-primary/45 text-primary-light font-bold shadow-sm";
                    if (activeWord && activeWord.includes(cell)) {
                      borderClass = "border-amber-500";
                      bgClass =
                        "bg-amber-500/10 text-amber-500 font-extrabold animate-pulse";
                    }
                  }

                  return (
                    <div
                      key={cIdx}
                      className={`w-11 h-11 rounded-lg border flex items-center justify-center font-mono text-sm transition-all duration-300 select-none ${bgClass} ${borderClass}`}
                    >
                      {isFilled ? cell : ""}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-60 flex flex-col gap-3 flex-shrink-0 justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
              Word Selection Bank
            </span>
            <div className="flex flex-col gap-1.5 mt-1.5">
              {["CAT", "DOG", "APE"].map((w, idx) => {
                const isActive = activeWord === w;
                const isPlaced = !words.includes(w) && w !== activeWord;

                let bgClass = "bg-slate-950 border-slate-850 text-slate-600";
                if (isActive) {
                  bgClass =
                    "bg-amber-500/20 border-amber-500 text-amber-500 font-black animate-pulse";
                } else if (isPlaced) {
                  bgClass =
                    "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 font-bold";
                }

                return (
                  <div
                    key={idx}
                    className={`px-3.5 py-2.5 rounded-xl border font-mono text-xs flex justify-between items-center transition-all duration-300 ${bgClass}`}
                  >
                    <span>{w}</span>
                    <span className="text-[7.5px] uppercase font-bold tracking-widest opacity-60">
                      {isActive
                        ? "Placing..."
                        : isPlaced
                          ? "Placed"
                          : "Waiting"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Branch and Bound Concept ---
  const renderBranchAndBoundCanvas = () => {
    const nodes = data?.nodes || [];
    const activeNodeId =
      data?.activeNodeId !== undefined ? data.activeNodeId : null;
    const minCost = data?.minCost || 999;

    return (
      <div className="w-full min-h-[340px] flex flex-col gap-4 p-6 font-sans text-left relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl">
        <div className="w-full flex items-center justify-between z-10 border-b border-slate-800 pb-2.5">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Branch and Bound State Space Tree
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 uppercase font-mono font-bold">
            Best Complete Tour Cost: {minCost === 999 ? "∞" : minCost}
          </span>
        </div>

        <div className="flex-1 flex flex-wrap gap-4 items-center justify-center py-4">
          {nodes.map((node) => {
            const isActive = node.id === activeNodeId;
            const isPruned = node.pruned;

            let borderClass = "border-slate-800";
            let bgClass = "bg-slate-950 text-slate-400";
            if (isActive) {
              borderClass = "border-amber-500";
              bgClass =
                "bg-amber-500/20 text-amber-500 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse";
            } else if (isPruned) {
              borderClass = "border-red-500/50";
              bgClass = "bg-red-500/10 text-red-400 opacity-60";
            } else if (node.bound < minCost) {
              borderClass = "border-emerald-500/40";
              bgClass = "bg-emerald-500/5 text-emerald-400";
            }

            return (
              <div
                key={node.id}
                className={`w-32 p-3 rounded-2xl border flex flex-col items-center justify-center text-center font-mono text-[9px] relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                <span className="text-[7.5px] uppercase font-bold tracking-widest text-slate-500 mb-1">
                  Path
                </span>
                <span className="font-extrabold text-slate-100 text-xs mb-1.5">
                  [{node.path.join("→")}]
                </span>
                <span className="text-[7.5px] uppercase tracking-widest block text-slate-400">
                  Bound:{" "}
                  <strong className="text-slate-100">{node.bound}</strong>
                </span>
                {isPruned && (
                  <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-red-500 text-[6.5px] font-black text-white uppercase tracking-wider">
                    PRUNED
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderHanoiCanvas = () => {
    const pegs = data || { A: [], B: [], C: [] };
    const rodNames = ["A", "B", "C"];

    return (
      <div className="w-full h-72 flex justify-around items-end px-6 pb-8">
        {rodNames.map((rod) => {
          const rodDisks = pegs[rod] || [];
          return (
            <div
              key={rod}
              className="relative w-32 flex flex-col items-center justify-end h-full"
            >
              {/* Vertical rod axis */}
              <div className="absolute bottom-0 w-2.5 h-44 bg-slate-700/80 rounded-t shadow-inner" />

              {/* Stacked disks */}
              <div className="w-full flex flex-col-reverse items-center gap-1 z-10 select-none pb-0.5">
                {rodDisks.map((dSize) => {
                  const widthPercent = (dSize / 5) * 80 + 20; // scale disc size width
                  const isMoved =
                    hanoiState?.diskMoved === dSize &&
                    (hanoiState?.fromPeg === rod || hanoiState?.toPeg === rod);

                  return (
                    <motion.div
                      key={dSize}
                      layoutId={`disk-${dSize}`}
                      style={{ width: `${widthPercent}%` }}
                      className={`
                        h-5 rounded border border-black/25 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md
                        ${
                          isMoved
                            ? "bg-gradient-to-r from-amber-500 to-amber-400 shadow-[0_0_8px_#f59e0b]"
                            : "bg-gradient-to-r from-purple-600 to-pink-500"
                        }
                      `}
                    >
                      {dSize}
                    </motion.div>
                  );
                })}
              </div>

              {/* Peg Base Plate label */}
              <div className="w-full h-4 bg-slate-800 border border-slate-700 rounded shadow-md text-center text-[9px] font-bold text-slate-400 font-mono pt-0.5 z-20">
                PEG {rod}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // --- 8.5 RENDER N-QUEENS CHESSBOARD ---
  const renderChessboardCanvas = () => {
    const {
      board = [],
      size = 4,
      currentLoc,
      phase,
    } = currentSnap.queensState || {};

    return (
      <div className="w-full h-72 flex items-center justify-center gap-6 px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
            width: `${Math.min(size * 45, 240)}px`,
            height: `${Math.min(size * 45, 240)}px`,
          }}
          className="border border-slate-700 bg-slate-950 shadow-lg rounded-lg overflow-hidden"
        >
          {Array.from({ length: size }).map((_, r) =>
            Array.from({ length: size }).map((_, c) => {
              const hasQueen = board[r] === c;
              const isDark = (r + c) % 2 === 1;
              const isCurrent =
                currentLoc && currentLoc.row === r && currentLoc.col === c;

              let cellClass = isDark ? "bg-slate-900" : "bg-slate-800";
              if (isCurrent) {
                const status = highlights[`${r}-${c}`];
                if (status === "swap") {
                  cellClass = "bg-red-500/30 border-red-500";
                } else if (status === "pivot") {
                  cellClass = "bg-green-500/30 border-green-500";
                } else {
                  cellClass = "bg-blue-500/30 border-blue-500";
                }
              }

              return (
                <div
                  key={`${r}-${c}`}
                  className={`
                    aspect-square flex items-center justify-center border border-slate-700/35 relative transition-all duration-300
                    ${cellClass}
                  `}
                >
                  {hasQueen && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-base md:text-xl font-bold select-none ${phase === "solution" ? "text-green-400 drop-shadow-[0_0_8px_#4ade80]" : "text-yellow-500 drop-shadow-[0_0_8px_#eab308]"}`}
                    >
                      👑
                    </motion.span>
                  )}
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent animate-pulse" />
                  )}
                </div>
              );
            }),
          )}
        </div>
      </div>
    );
  };

  const renderGridCanvas = () => {
    if (algorithm.id === "rat-in-a-maze") {
      const { currentRow, currentCol, phase } = currentSnap.gridState || {};
      const actualMaze = currentSnap.data?.maze || [];
      const actualPath = currentSnap.data?.path || [];
      const size = 4;

      return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-4 px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: `${size * 52}px`,
              height: `${size * 52}px`,
            }}
            className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-md rounded-2xl overflow-hidden p-2 gap-1.5"
          >
            {Array.from({ length: size }).map((_, r) =>
              Array.from({ length: size }).map((_, c) => {
                const isWall = actualMaze[r] && actualMaze[r][c] === 1;
                const isPath = actualPath[r] && actualPath[r][c] === 1;
                const isCurrent = currentRow === r && currentCol === c;
                const cellStatus = highlights[`${r}-${c}`];

                let cellClass =
                  "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80";
                if (isWall) {
                  cellClass =
                    "bg-slate-800 dark:bg-slate-950 border-slate-900/60 dark:border-slate-950";
                } else if (isPath) {
                  cellClass =
                    "bg-green-500/20 border-green-500/40 text-green-600 dark:text-green-400";
                }

                if (isCurrent) {
                  if (cellStatus === "swap") {
                    cellClass = "bg-red-500/20 border-red-500 text-red-500";
                  } else {
                    cellClass =
                      "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400";
                  }
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`
                      aspect-square flex flex-col items-center justify-center border rounded-xl relative transition-all duration-300 font-mono text-[9px] font-bold text-slate-500
                      ${cellClass}
                    `}
                  >
                    {isWall ? (
                      <span className="text-[14px]">🧱</span>
                    ) : r === 0 && c === 0 ? (
                      <span className="text-[16px] z-10">🐭</span>
                    ) : r === size - 1 && c === size - 1 ? (
                      <span className="text-[16px] z-10">🧀</span>
                    ) : isPath ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    ) : null}

                    {isCurrent && (
                      <span className="absolute inset-0 border-2 border-accent rounded-xl animate-pulse" />
                    )}
                    <span className="absolute bottom-0.5 right-1 text-[6px] opacity-40 font-normal">
                      {r},{c}
                    </span>
                  </div>
                );
              }),
            )}
          </div>
        </div>
      );
    }

    if (algorithm.id === "sudoku-solver") {
      const { currentRow, currentCol, val, isValid, phase } =
        currentSnap.gridState || {};
      const actualBoard = currentSnap.data?.board || [];
      const size = 4;

      return (
        <div className="w-full h-72 flex flex-col items-center justify-center gap-4 px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: `${size * 52}px`,
              height: `${size * 52}px`,
            }}
            className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-md rounded-2xl overflow-hidden p-2 gap-1.5"
          >
            {Array.from({ length: size }).map((_, r) =>
              Array.from({ length: size }).map((_, c) => {
                const cellVal = actualBoard[r] && actualBoard[r][c];
                const isCurrent = currentRow === r && currentCol === c;
                const cellStatus = highlights[`${r}-${c}`];

                let cellClass =
                  "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
                if (isCurrent) {
                  if (cellStatus === "swap") {
                    cellClass =
                      "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
                  } else {
                    cellClass =
                      "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
                  }
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`
                      aspect-square flex items-center justify-center border rounded-xl relative transition-all duration-300 font-mono text-base font-bold
                      ${cellClass}
                    `}
                  >
                    {cellVal !== 0 ? cellVal : ""}
                    {isCurrent && (
                      <span className="absolute inset-0 border-2 border-accent rounded-xl animate-pulse" />
                    )}
                    <span className="absolute bottom-0.5 right-1 text-[6px] opacity-40 font-normal text-slate-500">
                      {r},{c}
                    </span>
                  </div>
                );
              }),
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderKmpCanvas = () => {
    const { text = "", pattern = "", lps = [] } = data || {};
    const { textIdx = -1, patternIdx = -1 } = currentSnap.kmpState || {};
    const highlightText = highlights.text || {};
    const highlightPattern = highlights.pattern || {};

    return (
      <div className="w-full h-72 flex flex-col justify-center gap-6 p-4">
        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Text String Scanner (i)
          </span>
          <div className="flex flex-wrap gap-1">
            {text.split("").map((char, idx) => {
              const isCurrent = idx === textIdx;
              const hType = highlightText[idx];
              let cellClass =
                "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (hType === "pivot") {
                cellClass =
                  "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
              } else if (hType === "swap") {
                cellClass =
                  "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
              } else if (hType === "sorted") {
                cellClass =
                  "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold";
              }

              return (
                <div
                  key={idx}
                  className={`
                    w-8 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative transition-all duration-200
                    ${cellClass}
                  `}
                >
                  <span className="text-sm">{char}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">
                    {idx}
                  </span>
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Pattern Matcher (j)
          </span>
          <div className="flex flex-wrap gap-1">
            {pattern.split("").map((char, idx) => {
              const isCurrent = idx === patternIdx;
              const hType = highlightPattern[idx];
              let cellClass =
                "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (hType === "pivot") {
                cellClass =
                  "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-extrabold";
              } else if (hType === "swap") {
                cellClass =
                  "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
              }

              return (
                <div
                  key={idx}
                  className={`
                    w-8 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative transition-all duration-200
                    ${cellClass}
                  `}
                >
                  <span className="text-sm">{char}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">
                    LPS:{lps[idx]}
                  </span>
                  {isCurrent && (
                    <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderStringsListCanvas = () => {
    const { words = [], prefix = "" } = data || {};
    const {
      currentWordIdx = -1,
      charIdx = -1,
      phase,
    } = currentSnap.lcpState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-3 max-h-60 overflow-y-auto w-full">
          {words.map((word, wIdx) => {
            return (
              <div key={wIdx} className="flex items-center gap-1">
                <span className="w-16 text-[9px] font-mono text-slate-500 text-right truncate">
                  Word #{wIdx}
                </span>
                <div className="flex gap-1">
                  {word.split("").map((char, cIdx) => {
                    const isActiveWord = wIdx === currentWordIdx;
                    const isActiveChar = cIdx === charIdx;
                    const isInPrefix = cIdx < prefix.length;

                    let cellClass =
                      "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
                    if (isInPrefix) {
                      cellClass =
                        "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-extrabold";
                    } else if (isActiveWord && isActiveChar) {
                      if (phase === "mismatch") {
                        cellClass =
                          "bg-red-500/20 border-red-500 text-red-500 font-extrabold";
                      } else {
                        cellClass =
                          "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-extrabold";
                      }
                    }

                    return (
                      <div
                        key={cIdx}
                        className={`
                          w-7 h-8 flex items-center justify-center border rounded-lg font-mono text-xs relative transition-all duration-200
                          ${cellClass}
                        `}
                      >
                        {char}
                        {isActiveWord && isActiveChar && (
                          <span className="absolute inset-0 border border-accent rounded-lg animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-56 flex flex-col items-center justify-center skeuo-inset-panel p-4 bg-slate-950/20 rounded-2xl">
          <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider mb-2">
            Common Prefix
          </span>
          <div className="text-xl font-mono font-extrabold tracking-wide text-purple-600 dark:text-purple-400 min-h-8">
            {prefix ? `"${prefix}"` : '""'}
          </div>
        </div>
      </div>
    );
  };

  const renderGreedyIntervalCanvas = () => {
    const { activities = [], selected = [] } = data || {};
    const {
      currentIdx = -1,
      lastFinish = 0,
      phase,
    } = currentSnap.greedyState || {};

    return (
      <div className="w-full h-72 flex flex-col justify-center p-4 gap-3">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
          Interval Timelines (Greedy Activity Selection)
        </span>
        <div className="flex flex-col gap-2 max-h-56 overflow-y-auto w-full">
          {activities.map((act, idx) => {
            const isSelected = selected.includes(idx);
            const isActive = idx === currentIdx;
            const isConflict = isActive && act.start < lastFinish;

            let cellClass =
              "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isSelected) {
              cellClass =
                "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-bold";
            } else if (isActive) {
              if (isConflict) {
                cellClass =
                  "bg-red-500/20 border-red-500 text-red-500 font-bold";
              } else {
                cellClass =
                  "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-bold";
              }
            } else if (phase === "success") {
              cellClass =
                "bg-slate-100 dark:bg-slate-950 opacity-40 text-slate-400";
            }

            const leftPercent = (act.start / 10) * 80 + 10;
            const widthPercent = ((act.finish - act.start) / 10) * 80;

            return (
              <div
                key={idx}
                className="flex items-center gap-4 relative w-full h-8 px-2 border rounded-xl bg-slate-50/50 dark:bg-slate-900/30"
              >
                <span className="w-16 text-[9px] font-mono text-slate-500">
                  Act {act.originalText}
                </span>
                <div className="flex-1 h-4 bg-slate-200 dark:bg-slate-800 rounded-md relative overflow-hidden">
                  <div
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                    }}
                    className={`absolute h-full border rounded transition-all duration-300 ${cellClass} flex items-center justify-center text-[8px] font-mono`}
                  >
                    {act.originalText}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderGreedyRatioCanvas = () => {
    const {
      items = [],
      capacity = 50,
      weightTaken = 0,
      valueTaken = 0,
      fractions = [],
    } = data || {};
    const { currentIdx = -1 } = currentSnap.greedyState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-2 max-h-60 overflow-y-auto w-full">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Sorted Items List (Value / Weight)
          </span>
          {items.map((item, idx) => {
            const frac = fractions[idx] || 0;
            const isActive = idx === currentIdx;
            const ratio = item.wt > 0 ? (item.val / item.wt).toFixed(1) : 0;

            let cellClass =
              "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80";
            if (frac === 1) {
              cellClass =
                "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-bold";
            } else if (frac > 0) {
              cellClass =
                "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-bold";
            } else if (isActive) {
              cellClass =
                "bg-yellow-500/20 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-bold";
            }

            return (
              <div
                key={idx}
                className={`flex items-center justify-between p-2 border rounded-xl transition-all duration-200 ${cellClass}`}
              >
                <span className="text-xs font-mono">{item.originalText}</span>
                <span className="text-[9px] font-mono text-slate-500">
                  Ratio: {ratio}
                </span>
                <span className="text-xs font-mono font-bold">
                  Packed: {Math.round(frac * 100)}%
                </span>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-56 flex flex-col items-center justify-center p-4 bg-slate-950/20 rounded-2xl skeuo-inset-panel">
          <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider mb-2">
            Knapsack Weight
          </span>
          <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden relative mb-2">
            <div
              style={{ width: `${(weightTaken / capacity) * 100}%` }}
              className="h-full bg-green-500 animate-pulse transition-all duration-300"
            />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-slate-600 dark:text-slate-300">
              {weightTaken} / {capacity}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Total Packed Value
          </span>
          <span className="text-lg font-mono font-extrabold text-green-500">
            ${valueTaken.toFixed(1)}
          </span>
        </div>
      </div>
    );
  };

  const renderBitValueCanvas = () => {
    const { n, nMinusOne, andResult } = data || {};
    const { isPower } = currentSnap.bitState || {};

    const toBinary8 = (val) => {
      if (val === null || val === undefined) return "--------";
      return val.toString(2).padStart(8, "0");
    };

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Bitwise Clear: n & (n - 1)
        </span>
        <div className="flex flex-col gap-3 font-mono text-sm border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl shadow-md w-72">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">n ({n}):</span>
            <span className="font-bold text-accent">{toBinary8(n)}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-slate-500">n - 1 ({nMinusOne}):</span>
            <span className="font-bold text-purple-400">
              {toBinary8(nMinusOne)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-500">AND result:</span>
            <span
              className={`font-bold ${andResult === 0 ? "text-green-500" : "text-red-500"}`}
            >
              {toBinary8(andResult)}
            </span>
          </div>
        </div>

        {isPower !== null && (
          <div
            className={`px-4 py-2 border rounded-xl font-bold font-mono text-xs ${isPower ? "bg-green-500/20 border-green-500 text-green-500" : "bg-red-500/20 border-red-500 text-red-500"}`}
          >
            {isPower ? "Power of 2 detected! ✅" : "Not a power of 2! ❌"}
          </div>
        )}
      </div>
    );
  };

  const renderMathGcdCanvas = () => {
    const { a, b } = data || {};
    const { r, phase } = currentSnap.mathState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Euclidean Remainder Step
        </span>
        <div className="flex items-center gap-3 font-mono text-xl font-extrabold bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 p-6 rounded-2xl shadow-md">
          <span className="text-accent">{a}</span>
          <span className="text-slate-400">%</span>
          <span className="text-purple-400">{b}</span>
          <span className="text-slate-400">=</span>
          <span className={r === 0 ? "text-green-500" : "text-yellow-500"}>
            {r !== null ? r : "?"}
          </span>
        </div>
        {phase === "success" && (
          <div className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/20">
            GCD solved: {a}
          </div>
        )}
      </div>
    );
  };

  const renderMathSieveCanvas = () => {
    const { primes = [] } = data || {};
    const { p = null, multiple = null, phase } = currentSnap.mathState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Sieve Numbers Grid
        </span>
        <div className="grid grid-cols-6 md:grid-cols-8 gap-1.5 max-h-52 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl">
          {primes.slice(2).map((isP, idx) => {
            const num = idx + 2;
            const isCurrentPrime = num === p;
            const isCurrentMultiple = num === multiple;

            let cellClass =
              "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (!isP) {
              cellClass =
                "bg-slate-100 dark:bg-slate-950 text-slate-400 opacity-40 line-through";
            }
            if (isCurrentPrime) {
              cellClass =
                "bg-green-500/20 border-green-500 text-green-500 font-extrabold scale-110";
            } else if (isCurrentMultiple) {
              cellClass =
                "bg-red-500/20 border-red-500 text-red-500 font-extrabold scale-110";
            }

            return (
              <div
                key={num}
                className={`w-9 h-9 flex items-center justify-center border rounded-lg font-mono text-xs transition-all duration-200 ${cellClass}`}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDsuCanvas = () => {
    const { parent = [], edges = [] } = data || {};
    const {
      currentEdgeIdx = -1,
      u = null,
      v = null,
      hasCycle,
    } = currentSnap.dsuState || {};

    return (
      <div className="w-full h-72 flex flex-col md:flex-row gap-6 p-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1 text-left">
            Disjoint Set Parent Indices
          </span>
          <div className="flex flex-wrap gap-1.5">
            {parent.map((pVal, idx) => {
              const isActive = idx === u || idx === v;
              let cellClass =
                "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
              if (isActive) {
                cellClass =
                  "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold";
              }

              return (
                <div
                  key={idx}
                  className={`w-10 h-10 flex flex-col items-center justify-center border rounded-lg font-mono relative ${cellClass}`}
                >
                  <span className="text-xs">{pVal}</span>
                  <span className="text-[6px] opacity-40 font-normal absolute bottom-0.5">
                    #{idx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-56 flex flex-col gap-2 p-3 bg-slate-950/20 rounded-2xl max-h-60 overflow-y-auto skeuo-inset-panel text-left">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider pl-1">
            Undirected Edges
          </span>
          {edges.map((edge, idx) => {
            const isActive = idx === currentEdgeIdx;
            let edgeClass = "text-slate-500";
            if (isActive) {
              edgeClass = hasCycle
                ? "text-red-500 font-bold"
                : "text-green-500 font-bold";
            }

            return (
              <div
                key={idx}
                className={`text-xs font-mono p-1 border-b border-slate-800/50 last:border-0 ${edgeClass}`}
              >
                {idx === currentEdgeIdx && "👉 "}
                Edge {edge[0]} - {edge[1]} {isActive && hasCycle && "(Cycle!)"}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSegmentTreeCanvas = () => {
    const { tree = [], arr = [] } = data || {};
    const {
      currentNode = -1,
      start = -1,
      end = -1,
      phase,
    } = currentSnap.treeState || {};

    return (
      <div className="w-full h-72 flex flex-col gap-4 p-4 items-center justify-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Segment Tree Nodes Building (Segment Split Range)
        </span>
        <div className="flex gap-2 justify-center items-center flex-wrap max-h-52 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl w-full">
          {tree.map((val, idx) => {
            if (val === null) return null;
            const isActive = idx === currentNode;
            let cellClass =
              "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isActive) {
              cellClass =
                phase === "splitting"
                  ? "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold"
                  : "bg-green-500/20 border-green-500 text-green-500 font-bold";
            }

            return (
              <div
                key={idx}
                className={`px-3 py-1.5 border rounded-lg font-mono text-xs flex flex-col items-center justify-center min-w-12 ${cellClass}`}
              >
                <span className="text-[8px] opacity-40 font-normal">
                  Node {idx}
                </span>
                <span className="font-extrabold">Sum: {val}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTrieCanvas = () => {
    const { nodes = [] } = data || {};
    const { word, char, activeNodeId } = currentSnap.trieState || {};

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center p-4 gap-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Trie Node Tree Snapshot
        </span>
        <div className="flex flex-wrap gap-2 justify-center max-h-52 overflow-y-auto w-full p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800 rounded-2xl">
          {Object.values(nodes).map((node) => {
            const isActive = node.id === activeNodeId;
            let cellClass =
              "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-text-primary";
            if (isActive) {
              cellClass = node.isEnd
                ? "bg-green-500/20 border-green-500 text-green-500 font-bold scale-105"
                : "bg-yellow-500/20 border-yellow-500 text-yellow-500 font-bold scale-105";
            } else if (node.isEnd) {
              cellClass =
                "bg-purple-500/10 border-purple-500/40 text-purple-600 dark:text-purple-400";
            }

            return (
              <div
                key={node.id}
                className={`w-14 h-14 flex flex-col items-center justify-center border rounded-xl font-mono text-xs relative ${cellClass}`}
              >
                <span className="text-[7px] opacity-40 font-normal absolute top-0.5">
                  #{node.id}
                </span>
                <span className="font-extrabold text-sm">
                  {node.char === "root" ? "ROOT" : node.char}
                </span>
                {node.isEnd && (
                  <span className="absolute bottom-0.5 right-0.5 text-[8px]">
                    🎯
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- 9. RENDER DYNAMIC PROGRAMMING ---
  const getSelectedCoins = (dpArray, coins, activeIdx) => {
    if (!dpArray || !coins || activeIdx <= 0) return [];
    if (dpArray[activeIdx] === Infinity || dpArray[activeIdx] === 0) return [];

    const selected = [];
    let curr = activeIdx;
    let safety = 0;
    while (curr > 0 && safety < 100) {
      safety++;
      let found = false;
      for (const coin of coins) {
        if (
          curr >= coin &&
          dpArray[curr - coin] !== Infinity &&
          dpArray[curr] === dpArray[curr - coin] + 1
        ) {
          selected.push(coin);
          curr -= coin;
          found = true;
          break;
        }
      }
      if (!found) break;
    }
    return selected;
  };

  const getSelectedItems = (matrix, weights, i, w) => {
    if (!matrix || !weights || i <= 0 || w <= 0) return [];
    const selected = [];
    let currW = w;
    for (let k = i; k > 0; k--) {
      const itemWt = weights[k - 1];
      if (currW >= itemWt && matrix[k] && matrix[k - 1]) {
        if (matrix[k][currW] !== matrix[k - 1][currW]) {
          selected.push(k - 1);
          currW -= itemWt;
        }
      }
    }
    return selected.reverse();
  };

  const renderBurstBalloonsCanvas = () => {
    const {
      balloons = [],
      dp = [],
      pivotBalloon = null,
      subarrayRange = null,
      totalCoins = 0,
      done = false,
      leftDp = 0,
      rightDp = 0,
      i: activeI = -1,
      j: activeJ = -1,
    } = data || {};

    const balloonColors = [
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #fda4af 10%, #f43f5e 60%, #be123c 100%)",
        shadow:
          "0 8px 18px rgba(244,63,94,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-rose-400",
        knotColor: "text-rose-600 dark:text-rose-500",
      },
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #fde047 10%, #eab308 60%, #a16207 100%)",
        shadow:
          "0 8px 18px rgba(234,179,8,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-amber-400",
        knotColor: "text-amber-600 dark:text-amber-500",
      },
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #7dd3fc 10%, #0ea5e9 60%, #0369a1 100%)",
        shadow:
          "0 8px 18px rgba(14,165,233,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-sky-400",
        knotColor: "text-sky-600 dark:text-sky-500",
      },
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #c084fc 10%, #8b5cf6 60%, #6d28d9 100%)",
        shadow:
          "0 8px 18px rgba(139,92,246,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-violet-400",
        knotColor: "text-violet-600 dark:text-violet-500",
      },
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #6ee7b7 10%, #10b981 60%, #047857 100%)",
        shadow:
          "0 8px 18px rgba(16,185,129,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-emerald-400",
        knotColor: "text-emerald-600 dark:text-emerald-500",
      },
      {
        gradient:
          "radial-gradient(circle at 35% 35%, #f9a8d4 10%, #ec4899 60%, #be185d 100%)",
        shadow:
          "0 8px 18px rgba(236,72,153,0.35), inset 2px 2px 6px rgba(255,255,255,0.6), inset -4px -4px 10px rgba(0,0,0,0.3)",
        textColor: "text-white",
        borderColor: "border-pink-400",
        knotColor: "text-pink-600 dark:text-pink-500",
      },
    ];

    return (
      <div className="w-full h-auto flex flex-col items-center justify-center gap-5 p-4 select-none">
        {/* Header label */}
        <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
          Burst Balloons — Interval DP Visualization
        </span>

        {/* ── SECTION 1: Balloon Row ── */}
        <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 flex flex-col gap-4">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            🎈 Balloon Array (Padded with 1s on both ends)
          </span>

          {/* Padded boundary + balloons */}
          <div className="flex items-center justify-center gap-4 flex-wrap pb-2">
            {/* Left boundary sentinel */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-12 rounded-[50%_50%_50%_50%_/_45%_45%_55%_55%] flex items-center justify-center font-mono text-sm font-black text-slate-200 relative shadow-md"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #94a3b8 10%, #475569 60%, #1e293b 100%)",
                  boxShadow:
                    "0 4px 10px rgba(71,85,105,0.3), inset 1.5px 1.5px 4px rgba(255,255,255,0.5), inset -3px -3px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="absolute top-1.5 left-2 w-1.5 h-2.5 bg-white/30 rounded-full rotate-[-15deg] blur-[0.5px]" />
                1
              </div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-slate-600 mt-[-2px]" />
              <span className="text-[8px] font-mono text-slate-500">L-pad</span>
            </div>

            {balloons.map((b, idx) => {
              const color = balloonColors[idx % balloonColors.length];
              const isPivot = b.state === "pivot";
              const isInSubarray = b.state === "subarray";
              const isBurst = b.state === "burst" || done;

              if (isBurst && done) {
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1.5 relative opacity-30"
                  >
                    <span className="text-base select-none leading-none absolute -top-4">
                      💥
                    </span>
                    <div className="w-12 h-14 rounded-[50%_50%_50%_50%_/_45%_45%_55%_55%] border border-dashed border-slate-500/60 flex items-center justify-center font-mono text-xs font-bold text-slate-500 bg-slate-800/10">
                      ×
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>
                );
              }

              // Normal/Active balloons
              let widthClass = "w-12 h-14 text-sm";
              let scaleClass = "scale-100 transition-all duration-300";
              let extraGlow = "";
              let isLastLabel = null;

              if (isPivot) {
                widthClass = "w-16 h-20 text-lg";
                scaleClass =
                  "scale-125 z-10 transition-all duration-300 animate-pulse";
                extraGlow =
                  "ring-4 ring-yellow-400/40 ring-offset-2 ring-offset-slate-900";
                isLastLabel = (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-950 text-[8px] px-1.5 py-0.5 rounded-full font-black font-mono whitespace-nowrap animate-bounce shadow-[0_2px_6px_rgba(234,179,8,0.4)]">
                    BURST LAST
                  </span>
                );
              } else if (isInSubarray) {
                widthClass = "w-14 h-16 text-sm";
                scaleClass = "scale-110 z-5 transition-all duration-300";
              } else {
                scaleClass = "opacity-45 scale-90 transition-all duration-300";
              }

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center relative transition-all duration-300"
                  style={{ zIndex: isPivot ? 10 : 1 }}
                >
                  {isLastLabel}

                  {/* The Clay Balloon Body */}
                  <div
                    className={`${widthClass} ${scaleClass} ${extraGlow} rounded-[50%_50%_50%_50%_/_45%_45%_55%_55%] flex items-center justify-center font-mono font-black text-white relative`}
                    style={{
                      background: color.gradient,
                      boxShadow: color.shadow,
                    }}
                  >
                    {/* Shiny 3D Glare */}
                    <div className="absolute top-2 left-2.5 w-2 h-3.5 bg-white/40 rounded-full rotate-[-15deg] blur-[0.5px]" />
                    {b.val}
                  </div>

                  {/* Knot */}
                  <div
                    className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[7px] border-b-current mt-[-2px] ${color.knotColor} ${scaleClass}`}
                  />

                  {/* Wavy String */}
                  <svg
                    className={`w-4 h-6 text-slate-400 dark:text-slate-650 ${scaleClass}`}
                    viewBox="0 0 10 20"
                    fill="none"
                  >
                    <path
                      d="M5,0 Q2,5 5,10 T5,20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="text-[8px] font-mono text-slate-500 mt-0.5">
                    #{idx + 1}
                  </span>
                </div>
              );
            })}

            {/* Right boundary sentinel */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-12 rounded-[50%_50%_50%_50%_/_45%_45%_55%_55%] flex items-center justify-center font-mono text-sm font-black text-slate-200 relative shadow-md"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #94a3b8 10%, #475569 60%, #1e293b 100%)",
                  boxShadow:
                    "0 4px 10px rgba(71,85,105,0.3), inset 1.5px 1.5px 4px rgba(255,255,255,0.5), inset -3px -3px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="absolute top-1.5 left-2 w-1.5 h-2.5 bg-white/30 rounded-full rotate-[-15deg] blur-[0.5px]" />
                1
              </div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-slate-600 mt-[-2px]" />
              <span className="text-[8px] font-mono text-slate-500">R-pad</span>
            </div>
          </div>

          {/* Active subarray bracket */}
          {subarrayRange && !done && (
            <div className="flex justify-center mt-1">
              <div className="px-3 py-1 bg-violet-500/15 border border-violet-500/30 rounded-lg text-[10px] font-mono text-violet-400 font-bold">
                Active subarray: indices {subarrayRange.start + 1} to{" "}
                {subarrayRange.end + 1} &nbsp;|&nbsp; dp[{activeI}][{activeJ}]
              </div>
            </div>
          )}
        </div>

        {/* ── SECTION 2: Pivot Coin Calculation ── */}
        {pivotBalloon && !done ? (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 flex flex-col md:flex-row items-center justify-around gap-5">
            <span className="hidden md:block text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono w-full md:w-auto mb-2 md:mb-0">
              💥 Pivot Burst Calculation
            </span>

            {/* Left dp box */}
            <div className="flex flex-col items-center gap-1 p-3 clay-inset bg-slate-50 dark:bg-black/10 rounded-2xl min-w-[80px]">
              <span className="text-[9px] font-mono text-slate-500 uppercase">
                Left DP
              </span>
              <span className="text-2xl font-black font-mono text-blue-400">
                {leftDp}
              </span>
              <span className="text-[9px] text-slate-500 font-mono">
                dp[i][k−1]
              </span>
            </div>

            <span className="text-slate-400 font-bold text-lg">+</span>

            {/* Pivot coins box */}
            <div className="flex flex-col items-center gap-2 p-4 clay-inset bg-slate-50 dark:bg-black/10 rounded-2xl min-w-[130px]">
              <span className="text-[9px] font-mono text-slate-500 uppercase">
                Pivot Balloon
              </span>
              <div className="flex items-center gap-2 font-mono text-sm font-black">
                <span className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded-lg">
                  {pivotBalloon.left}
                </span>
                <span className="text-slate-400">×</span>
                <span className="px-2 py-0.5 bg-yellow-500 text-white rounded-lg shadow-[0_0_10px_rgba(234,179,8,0.4)] animate-pulse">
                  {pivotBalloon.val}
                </span>
                <span className="text-slate-400">×</span>
                <span className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded-lg">
                  {pivotBalloon.right}
                </span>
                <span className="text-slate-400">=</span>
                <span className="px-2 py-0.5 bg-emerald-500 text-white rounded-lg font-black">
                  {pivotBalloon.coins}
                </span>
              </div>
              <span className="text-[9px] text-slate-500 font-mono">
                nums[i−1] × nums[k] × nums[j+1]
              </span>
            </div>

            <span className="text-slate-400 font-bold text-lg">+</span>

            {/* Right dp box */}
            <div className="flex flex-col items-center gap-1 p-3 clay-inset bg-slate-50 dark:bg-black/10 rounded-2xl min-w-[80px]">
              <span className="text-[9px] font-mono text-slate-500 uppercase">
                Right DP
              </span>
              <span className="text-2xl font-black font-mono text-blue-400">
                {rightDp}
              </span>
              <span className="text-[9px] text-slate-500 font-mono">
                dp[k+1][j]
              </span>
            </div>

            <span className="text-slate-400 font-bold text-lg">=</span>

            {/* Total */}
            <div className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.4)] min-w-[90px]">
              <span className="text-[9px] font-mono text-violet-200 uppercase">
                Max Coins
              </span>
              <span className="text-3xl font-black font-mono text-white">
                {totalCoins}
              </span>
            </div>
          </div>
        ) : done ? (
          /* Final result celebration */
          <div className="w-full clay-card bg-emerald-500 dark:bg-emerald-650 text-white p-6 flex flex-col items-center gap-3 relative overflow-hidden shadow-[0_12px_28px_rgba(16,185,129,0.35),_inset_3px_3px_8px_rgba(255,255,255,0.4),_inset_-6px_-6px_12px_rgba(0,0,0,0.25)] border-t border-white/20">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
            <span className="text-3xl animate-bounce">🎉</span>
            <span className="text-[10px] font-mono text-emerald-100 uppercase tracking-widest font-black">
              Optimal Solution Found
            </span>
            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-[11px] font-mono text-emerald-100/80">
                Maximum Coins Collected
              </span>
              <span className="text-5xl font-black font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                {totalCoins}
              </span>
            </div>
            <div className="px-3 py-1 bg-emerald-700/40 rounded-full text-[9px] font-mono text-emerald-100 border border-emerald-500/20 z-10">
              dp[1][{balloons.length}] = {totalCoins}
            </div>
          </div>
        ) : (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-4 flex items-center justify-center">
            <span className="text-[11px] font-mono text-slate-500 italic">
              Initializing DP table…
            </span>
          </div>
        )}

        {/* ── SECTION 3: DP Table ── */}
        {dp.length > 0 && (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-4 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
              📊 DP Table — dp[i][j] = Max Coins for subarray i..j
            </span>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse font-mono text-[11px] text-center text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-500">
                    <th className="p-2 border-r border-slate-800 text-slate-600 text-[9px]">
                      i\j
                    </th>
                    {dp[0].map((_, j) => (
                      <th
                        key={j}
                        className="p-2 border-r border-slate-800 text-[9px] font-bold"
                      >
                        {j + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dp.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-slate-800/50">
                      <td className="p-2 border-r border-slate-800 font-bold text-slate-500 text-[9px]">
                        {rIdx + 1}
                      </td>
                      {row.map((val, cIdx) => {
                        const isActive =
                          rIdx + 1 === activeI && cIdx + 1 === activeJ && !done;
                        const isDiag = cIdx < rIdx; // below diagonal - invalid
                        const cellClass = isDiag
                          ? "bg-slate-950/50 text-slate-700 opacity-40"
                          : isActive
                            ? "bg-violet-600/40 text-violet-300 border border-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.3)] font-black"
                            : val > 0
                              ? "bg-emerald-900/20 text-emerald-300 font-semibold"
                              : "text-slate-600";
                        return (
                          <td
                            key={cIdx}
                            className={`p-2 border-r border-slate-800/30 transition-all duration-300 ${cellClass}`}
                          >
                            {isDiag ? "—" : val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderDpCanvas = () => {
    const resolvedId = algorithm.counterpartId || algorithm.id;
    if (resolvedId === "generate-parentheses") {
      const { results = [], callStack = [], current = "" } = data || {};

      return (
        <div className="w-full h-auto flex flex-col items-center justify-center p-4 gap-4">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider mb-1 uppercase">
            Recursion / Backtracking Visualization
          </span>

          <div className="w-full flex flex-col md:flex-row gap-5 items-stretch justify-around">
            {/* Call Stack Panel */}
            <div className="flex-1 min-w-[200px] p-4 clay-inset bg-slate-50 dark:bg-black/10 flex flex-col gap-2.5 text-left">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Active Call Stack
              </span>
              <div className="flex flex-col-reverse gap-1.5 border-t border-slate-700/20 pt-2.5 min-h-[140px] justify-end">
                {callStack.map((frame, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 border-l-4 ${
                      idx === callStack.length - 1
                        ? "bg-purple-500 text-white shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),_0_4px_8px_rgba(168,85,247,0.3)] border-purple-400"
                        : "bg-white dark:bg-[#1e2533] text-text-secondary border-slate-350 dark:border-transparent shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.02)]"
                    }`}
                  >
                    <div>
                      bt("{frame.cur}", open: {frame.open}, close: {frame.close}
                      )
                    </div>
                  </div>
                ))}
                {callStack.length === 0 && (
                  <span className="text-[10px] text-slate-500 italic">
                    Call Stack Empty
                  </span>
                )}
              </div>
            </div>

            {/* Current State & Results */}
            <div className="flex-1 min-w-[200px] p-4 clay-inset bg-slate-50 dark:bg-black/10 flex flex-col gap-3 text-left">
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  Current Candidate
                </span>
                <div className="px-3 py-2 bg-purple-500/10 text-purple-400 font-mono text-sm font-extrabold rounded-xl border border-purple-500/20">
                  {current || (
                    <span className="italic text-slate-500 text-xs">Empty</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                  Valid Configurations ({results.length})
                </span>
                <div className="p-2.5 bg-slate-950/20 dark:bg-black/20 rounded-xl min-h-[80px] max-h-[120px] overflow-y-auto flex flex-wrap gap-1.5 border border-slate-700/10">
                  {results.map((res, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-mono font-bold rounded shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)] animate-scaleUp"
                    >
                      {res}
                    </span>
                  ))}
                  {results.length === 0 && (
                    <span className="text-[10px] text-slate-500 italic">
                      None generated yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (dpState?.matrix) {
      const { matrix, weights, values, capacity, i, w } = dpState;

      // Determine selection status for the current step
      const isComputing = currentSnap.explanation?.includes("Computing");
      const currentI = isComputing ? i - 1 : i;
      const currentW = w;

      const selectedIndices = getSelectedItems(
        matrix,
        weights,
        currentI,
        currentW,
      );
      const totalWeight = selectedIndices.reduce(
        (sum, idx) => sum + weights[idx],
        0,
      );
      const totalValue = selectedIndices.reduce(
        (sum, idx) => sum + values[idx],
        0,
      );

      const currentItemIdx = i - 1;
      const hasCurrentItem = i > 0 && i <= weights.length;
      const currentItem = hasCurrentItem
        ? {
            weight: weights[currentItemIdx],
            value: values[currentItemIdx],
            index: currentItemIdx,
          }
        : null;

      const isCurrentItemChosen =
        currentItem && selectedIndices.includes(currentItemIdx);

      return (
        <div className="w-full min-h-[18rem] h-auto flex flex-col items-center justify-center p-4 gap-4">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider mb-1 uppercase">
            Knapsack DP Table (Item wt/val row, Capacity col)
          </span>
          <div className="w-full overflow-x-auto border border-slate-800 bg-slate-950 rounded-lg shadow-inner">
            <table className="w-full border-collapse font-mono text-[10px] text-center text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-500">
                  <th className="p-1.5 border-r border-slate-800 font-bold">
                    Item
                  </th>
                  {Array.from({ length: capacity + 1 }).map((_, c) => (
                    <th key={c} className="p-1.5 border-r border-slate-800">
                      C:{c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, rIdx) => {
                  const isHeader = rIdx === 0;
                  const itemLabel = isHeader
                    ? "Init"
                    : `i:${rIdx} (${weights[rIdx - 1]}/${values[rIdx - 1]})`;

                  return (
                    <tr
                      key={rIdx}
                      className="border-b border-slate-800/60 hover:bg-slate-900/20"
                    >
                      <td className="p-1.5 font-bold border-r border-slate-800 bg-slate-900/30 text-slate-400 text-[9px] text-left pl-2">
                        {itemLabel}
                      </td>
                      {row.map((val, cIdx) => {
                        const cellKey = `${rIdx}-${cIdx}`;
                        const status = highlights[cellKey];

                        let cellClass = "";
                        if (status === "pivot") {
                          cellClass =
                            "bg-purple-500/20 text-purple-400 border border-purple-500 shadow-[0_0_6px_rgba(168,85,247,0.15)]";
                        } else if (status === "compare") {
                          cellClass = "bg-blue-500/20 text-blue-400";
                        } else if (status === "sorted") {
                          cellClass = "bg-green-500/20 text-green-400";
                        }

                        return (
                          <td
                            key={cIdx}
                            className={`p-1.5 border-r border-slate-800/40 font-semibold transition-all duration-300 ${cellClass}`}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Backpack Visualization Panel */}
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 md:p-6 flex flex-col md:flex-row items-center justify-around gap-6 mt-4">
            {/* 1. Item Pool (Weights Available) */}
            <div className="flex-1 flex flex-col gap-2.5 min-w-[200px] text-left p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Item Pool (Weight &amp; Value)
              </span>
              <div className="flex flex-wrap gap-2">
                {weights.map((wt, idx) => {
                  const val = values[idx];
                  const isCurrent = idx === currentItemIdx;
                  const isChosen = selectedIndices.includes(idx);

                  let borderClass = "";
                  if (isCurrent) {
                    borderClass =
                      "bg-purple-500 text-white font-extrabold scale-105 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),_inset_-2px_-2px_4px_rgba(0,0,0,0.25),_0_4px_12px_rgba(168,85,247,0.35)] border-t border-white/20 animate-pulse";
                  } else if (isChosen) {
                    borderClass =
                      "bg-emerald-500 text-white font-bold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),_inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_2px_8px_rgba(16,185,129,0.25)] border-t border-white/20";
                  } else {
                    borderClass =
                      "bg-white dark:bg-[#1e2533] text-text-secondary border border-slate-200 dark:border-white/5 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_inset_-2px_-2px_4px_rgba(0,0,0,0.02),_2px_4px_8px_rgba(0,0,0,0.03)] dark:shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.05),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.3)]";
                  }

                  return (
                    <div
                      key={idx}
                      className={`px-3 py-1.5 rounded-2xl text-[11px] flex items-center gap-1.5 transition-all duration-300 ${borderClass}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                      <span>
                        Item {idx + 1}:{" "}
                        <span className="font-mono">{wt}kg</span> (${val})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Transition State (Decision Box) */}
            <div className="flex flex-col items-center justify-center min-w-[150px] p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-2">
                Decision State
              </span>
              {currentItem ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-mono text-[11px] font-bold flex flex-col items-center justify-center shadow-[inset_2.5px_2.5px_5px_rgba(255,255,255,0.4),_inset_-2.5px_-2.5px_5px_rgba(0,0,0,0.3),_0_6px_15px_rgba(168,85,247,0.4)] border border-purple-400 animate-bounce">
                    <span className="text-[8px] opacity-75">WT</span>
                    <span>{currentItem.weight}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-2.5 text-center leading-tight">
                    {isComputing ? (
                      <span className="text-blue-500 dark:text-blue-400 animate-pulse font-extrabold">
                        Evaluating Item...
                      </span>
                    ) : isCurrentItemChosen ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                        Fits! Put In Bag
                      </span>
                    ) : (
                      <span className="text-rose-500 dark:text-rose-400 font-extrabold">
                        Skip / Rejects
                      </span>
                    )}
                  </span>
                </div>
              ) : (
                <span className="text-[10px] text-slate-500 font-mono text-center">
                  No active item
                </span>
              )}
            </div>

            {/* 3. The Backpack (Bag) */}
            <div className="flex-1 flex flex-col items-center justify-center min-w-[200px] gap-2.5 p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Knapsack Bag (Capacity: {capacity}kg)
              </span>

              <div className="relative w-30 h-36 bg-amber-800 dark:bg-amber-900 rounded-3xl shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),_inset_-4px_-4px_8px_rgba(0,0,0,0.4),_6px_8px_16px_rgba(0,0,0,0.25)] border-4 border-amber-950/60 flex flex-col justify-end p-2.5 gap-1.5 overflow-hidden transition-all duration-300">
                {/* Backpack flap */}
                <div className="absolute top-0 inset-x-0 h-4.5 bg-amber-950/90 border-b border-amber-900/50 flex items-center justify-center shadow-md">
                  <div className="w-8 h-1 rounded-full bg-yellow-600/60" />
                </div>

                {/* Bottom pouch pocket */}
                <div className="absolute bottom-1 right-2 left-2 h-7 rounded-xl bg-amber-950/60 border border-amber-900/40 flex items-center justify-center shadow-[inset_1px_1px_3px_rgba(0,0,0,0.4)]">
                  <span className="text-[7px] font-mono text-amber-500/70 uppercase tracking-widest font-black">
                    Pack
                  </span>
                </div>

                {/* Items in the bag */}
                <div className="flex flex-wrap items-end justify-center gap-1 max-h-[50px] overflow-y-auto mb-8 z-10">
                  {selectedIndices.map((idx) => (
                    <div
                      key={idx}
                      className="px-2 py-1 bg-emerald-500 text-white font-mono text-[10px] font-black rounded-lg shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.45),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.2),_2px_3px_6px_rgba(0,0,0,0.15)] transition-all animate-scaleUp"
                      title={`Item ${idx + 1}: wt ${weights[idx]}`}
                    >
                      {weights[idx]}kg
                    </div>
                  ))}
                  {selectedIndices.length === 0 && (
                    <span className="text-[9px] font-mono text-amber-600/70 font-semibold italic">
                      Empty Bag
                    </span>
                  )}
                </div>
              </div>

              {/* Capacity bar */}
              <div className="w-full max-w-[180px] flex flex-col gap-1">
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>
                    Wt: {totalWeight} / {capacity}kg
                  </span>
                  <span>Val: ${totalValue}</span>
                </div>
                <div className="h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.1),_inset_-1px_-1px_2px_rgba(255,255,255,0.05)] border border-slate-300 dark:border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.4)] transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (totalWeight / capacity) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const activeIdx = dpState?.activeIdx;
    const isCoinChange = algorithm.id === "coin-change-dp";
    const isClimbingStairs = algorithm.id === "climbing-stairs";
    const coins = dpState?.coins || [];
    const selectedCoins =
      isCoinChange && activeIdx > 0 && data[activeIdx] !== Infinity
        ? getSelectedCoins(data, coins, activeIdx)
        : [];
    const totalCoinsVal = selectedCoins.reduce((sum, val) => sum + val, 0);
    const stepsTarget = isClimbingStairs ? data.length - 1 : 0;

    return (
      <div className="w-full h-auto flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-500 tracking-wider mb-1 uppercase">
          {isCoinChange
            ? "COIN CHANGE DP TABLE (1D STATE ARRAY)"
            : isClimbingStairs
              ? "CLIMBING STAIRS DP TABLE (1D STATE ARRAY)"
              : "STAIRS STATE ARRAY"}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 max-h-56 overflow-y-auto w-full p-2 bg-slate-950/20 dark:bg-black/10 rounded-2xl border border-slate-800/20">
          {data.map((val, idx) => {
            const isActive = activeIdx === idx;
            let isReadInput = false;

            if (isCoinChange && coins) {
              isReadInput = coins.some((coin) => idx === activeIdx - coin);
            } else if (isClimbingStairs) {
              isReadInput =
                activeIdx > 0 &&
                (idx === activeIdx - 1 || idx === activeIdx - 2);
            } else {
              isReadInput = idx === activeIdx - 1 || idx === activeIdx - 2;
            }

            let cellClass = "bg-slate-800 border-slate-700 text-slate-400";
            if (isActive)
              cellClass =
                "bg-purple-600 border-purple-400 shadow-[0_0_8px_#8b5cf6] text-white font-bold";
            else if (isReadInput)
              cellClass =
                "bg-blue-600 border-blue-500 shadow-[0_0_8px_#3b82f6] text-white";
            else if (val !== Infinity && val > 0)
              cellClass = "bg-slate-900 border-slate-800 text-slate-300";
            else if (val === 0)
              cellClass = "bg-slate-900 border-slate-800 text-slate-500";

            return (
              <div
                key={idx}
                className={`
                  w-12 h-12 rounded-xl border-2 flex flex-col items-center justify-center font-mono text-xs transition-all duration-300
                  ${cellClass}
                `}
              >
                <span className="text-[8px] text-slate-500 leading-none">
                  dp[{idx}]
                </span>
                <span className="font-bold mt-1">
                  {val === Infinity ? "∞" : val}
                </span>
              </div>
            );
          })}
        </div>

        {/* Coin Change Pictorial Representation */}
        {isCoinChange && coins.length > 0 && (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 md:p-6 flex flex-col md:flex-row items-center justify-around gap-6 mt-4">
            {/* 1. Coins Available */}
            <div className="flex-1 flex flex-col gap-2.5 min-w-[200px] text-left p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Coin Denominations
              </span>
              <div className="flex flex-wrap gap-3 items-center mt-1">
                {coins.map((coin, idx) => {
                  const isActiveChecking = activeIdx >= coin;

                  return (
                    <div
                      key={idx}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-black border-2 transition-all duration-300 ${
                        isActiveChecking
                          ? "bg-amber-500 border-amber-400 text-white shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.4),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.2),_0_4px_8px_rgba(245,158,11,0.3)]"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-400 border-transparent opacity-50"
                      }`}
                    >
                      ${coin}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Decision / Target */}
            <div className="flex flex-col items-center justify-center min-w-[150px] p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-2">
                Subproblem Target
              </span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex flex-col items-center justify-center shadow-[inset_2.5px_2.5px_5px_rgba(255,255,255,0.4),_inset_-2.5px_-2.5px_5px_rgba(0,0,0,0.3),_0_6px_15px_rgba(168,85,247,0.4)] border border-purple-400 animate-pulse">
                  <span className="text-[8px] opacity-75">AMT</span>
                  <span>{activeIdx}</span>
                </div>
                <span className="text-[9px] text-slate-400 font-mono mt-1 text-center font-bold">
                  {activeIdx === 0
                    ? "Base Case: $0"
                    : `Solving for $${activeIdx}`}
                </span>
              </div>
            </div>

            {/* 3. Optimal Coins Chosen Tray */}
            <div className="flex-1 flex flex-col items-center justify-center min-w-[200px] gap-2.5 p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Optimal Coins Tray
              </span>

              <div className="relative w-36 h-24 bg-slate-200 dark:bg-slate-900 rounded-3xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border border-slate-350 dark:border-slate-800 flex items-center justify-center p-3 overflow-hidden transition-all duration-300">
                <div className="flex flex-wrap items-center justify-center gap-1.5 max-h-[70px] overflow-y-auto w-full">
                  {selectedCoins.map((coin, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full bg-amber-500 border border-amber-400 text-white font-mono text-[10px] font-black flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),_inset_-1px_-1px_2px_rgba(0,0,0,0.2),_2px_3px_6px_rgba(0,0,0,0.15)] animate-scaleUp"
                      title={`Coin: $${coin}`}
                    >
                      ${coin}
                    </div>
                  ))}
                  {selectedCoins.length === 0 && (
                    <span className="text-[9px] font-mono text-slate-500 font-semibold italic">
                      No coins yet
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full max-w-[180px] flex justify-between text-[9px] font-mono text-slate-400">
                <span>Total Coins: {selectedCoins.length}</span>
                <span>Sum: ${totalCoinsVal}</span>
              </div>
            </div>
          </div>
        )}

        {/* Climbing Stairs Pictorial Representation */}
        {isClimbingStairs && stepsTarget > 0 && (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 md:p-6 flex flex-col md:flex-row items-center justify-around gap-6 mt-4">
            {/* 1. The Staircase */}
            <div className="flex-1 flex flex-col gap-2.5 min-w-[240px] text-left p-4 clay-inset bg-slate-50 dark:bg-black/10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                Staircase (Target Stair: {stepsTarget})
              </span>
              <div className="flex items-end justify-center gap-1.5 mt-6 min-h-[90px] overflow-x-auto pb-2">
                {Array.from({ length: stepsTarget + 1 }).map((_, s) => {
                  const isActive = activeIdx === s;
                  const isSource =
                    activeIdx > 0 &&
                    (s === activeIdx - 1 || s === activeIdx - 2);
                  const isTarget = s === stepsTarget;
                  const val = data[s];

                  let borderClass = "";
                  if (isActive) {
                    borderClass =
                      "bg-purple-500 text-white font-extrabold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),_inset_-2px_-2px_4px_rgba(0,0,0,0.25),_0_4px_10px_rgba(168,85,247,0.3)] border-t border-purple-400";
                  } else if (isSource) {
                    borderClass =
                      "bg-blue-500 text-white font-bold shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),_inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_2px_6px_rgba(59,130,246,0.25)] border-t border-blue-400";
                  } else {
                    borderClass =
                      "bg-white dark:bg-[#1e2533] text-text-secondary border border-slate-200 dark:border-white/5 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_inset_-2px_-2px_4px_rgba(0,0,0,0.02),_2px_4px_8px_rgba(0,0,0,0.03)] dark:shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.05),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.3)]";
                  }

                  // Height scale based on index - reduced multiplier
                  const heightPx = (s + 1) * 9 + 18;

                  return (
                    <div
                      key={s}
                      style={{ height: `${heightPx}px` }}
                      className={`w-8 rounded-t-lg flex flex-col justify-end pb-1.5 items-center text-[9px] font-mono transition-all duration-300 relative ${borderClass}`}
                    >
                      {/* Stick figure running animation */}
                      {isActive && (
                        <div className="absolute -top-5.5 left-1/2 -translate-x-1/2 text-sm animate-bounce select-none">
                          🏃
                        </div>
                      )}

                      {isTarget && !isActive && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] select-none">
                          🎯
                        </div>
                      )}

                      <div className="text-[7px] opacity-75 font-mono">
                        #{s}
                      </div>
                      <div className="font-bold font-mono">{val}w</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Transition State / DP Logic Formula */}
            <div className="flex flex-col items-center justify-center min-w-[200px] p-4 clay-inset bg-slate-50 dark:bg-black/10 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-3">
                Transition Relation
              </span>
              {activeIdx >= 3 ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-xs font-black">
                    <span className="text-purple-500 font-black">
                      dp[{activeIdx}]
                    </span>
                    <span className="text-slate-400">=</span>
                    <span className="text-blue-500 font-black">
                      dp[{activeIdx - 1}]
                    </span>
                    <span className="text-slate-400">+</span>
                    <span className="text-blue-500 font-black">
                      dp[{activeIdx - 2}]
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs p-2 bg-slate-950/20 rounded-xl">
                    <span className="text-purple-500 font-black">
                      {data[activeIdx]}
                    </span>
                    <span className="text-slate-400">=</span>
                    <span className="text-blue-500 font-black">
                      {data[activeIdx - 1]}
                    </span>
                    <span className="text-slate-400">+</span>
                    <span className="text-blue-500 font-black">
                      {data[activeIdx - 2]}
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono leading-tight">
                    Add ways from 1 step below and 2 steps below.
                  </span>
                </div>
              ) : activeIdx === 1 || activeIdx === 2 ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex flex-col items-center justify-center shadow-[inset_2.5px_2.5px_5px_rgba(255,255,255,0.4),_inset_-2.5px_-2.5px_5px_rgba(0,0,0,0.3),_0_6px_15px_rgba(168,85,247,0.4)] border border-purple-400 animate-pulse">
                    <span className="text-[8px] opacity-75">BASE</span>
                    <span>{data[activeIdx]}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 text-center font-bold">
                    Base Case for Stair {activeIdx}
                  </span>
                </div>
              ) : (
                <span className="text-[10px] text-slate-500 font-mono text-center">
                  Staircase initialization
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- HashMap/Set Buckets (Chaining) ---
  const renderHashMapSetCanvas = (isSet) => {
    const mapData = data || {};
    const buckets = mapData.buckets || [];
    const size = mapData.size || 5;

    return (
      <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            {isSet
              ? "Hash Set Buckets"
              : "Hash Map Buckets (Separate Chaining)"}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase font-mono">
            Buckets: {size}
          </span>
        </div>

        <div className="w-full flex flex-col gap-3 max-w-lg mx-auto py-2">
          {buckets.map((bucket, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-2.5 rounded-xl border border-slate-200/10 dark:border-slate-800/40 bg-slate-900/15"
            >
              <div className="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 flex flex-col items-center justify-center font-mono text-xs text-slate-500 font-bold select-none">
                <span className="text-[7px] text-slate-600">index</span>
                <span>#{idx}</span>
              </div>
              <div className="flex-1 flex gap-2 flex-wrap items-center">
                <AnimatePresence>
                  {bucket.map((item, bIdx) => (
                    <React.Fragment key={item.key}>
                      {bIdx > 0 && (
                        <span className="text-slate-700 font-mono text-[10px]">
                          ➔
                        </span>
                      )}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="px-2.5 py-1.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs flex gap-1 items-center"
                      >
                        <span className="text-primary font-bold">
                          {item.key}
                        </span>
                        {!isSet && (
                          <>
                            <span className="text-slate-600">:</span>
                            <span className="text-emerald-400 font-black">
                              {item.val}
                            </span>
                          </>
                        )}
                      </motion.div>
                    </React.Fragment>
                  ))}
                </AnimatePresence>
                {bucket.length === 0 && (
                  <span className="text-[8px] font-mono text-slate-700 select-none uppercase">
                    null / empty
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- Longest Consecutive Sequence ---
  const renderLongestConsecutiveSequenceCanvas = () => {
    const nums = data?.nums || [];
    const set = data?.set || [];
    const activeNum = data?.activeNum || null;
    const streak = data?.streak || 0;
    const longestStreak = data?.longestStreak || 0;

    return (
      <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left font-sans">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Longest Consecutive Sequence Set
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase font-mono">
              Active Streak: {streak}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase font-mono">
              Longest Streak: {longestStreak}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 items-center py-4">
          <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
            Hash Set Storage
          </span>
          <div className="flex gap-2 flex-wrap justify-center p-3 rounded-2xl border border-slate-200/10 dark:border-slate-800/40 bg-slate-900/15 max-w-md">
            {set.map((val) => {
              const isActive = val === activeNum;
              const isConsecutive =
                activeNum !== null &&
                val <= activeNum &&
                val > activeNum - streak;

              let bgClass = "bg-slate-950 border-slate-800 text-slate-400";
              if (isActive) {
                bgClass =
                  "bg-amber-500 text-white border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.4)] scale-105";
              } else if (isConsecutive) {
                bgClass =
                  "bg-success/20 text-success border-success/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]";
              }

              return (
                <div
                  key={val}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${bgClass}`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // --- Bloom Filter ---
  const renderBloomFilterCanvas = () => {
    const bits = data?.bits || Array(10).fill(0);
    const activeHashes = data?.activeHashes || [];
    const queryKey = data?.queryKey || "";
    const result = data?.result || null;

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Bloom Filter Bit Array
          </span>
          {result && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase font-mono ${result.includes("Probably") ? "bg-success/20 text-success" : "bg-red-500/20 text-red-500"}`}
            >
              Result: {result}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-6 items-center py-2">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">
              Bit Slots
            </span>
            <div className="flex gap-1.5 p-2 rounded-xl border border-slate-800 bg-slate-950">
              {bits.map((bit, idx) => {
                const isActive = activeHashes.includes(idx);

                let borderClass = "border-slate-850";
                let bgClass =
                  bit === 1
                    ? "bg-primary/20 text-primary border-primary/30"
                    : "bg-slate-900 text-slate-600";
                if (isActive) {
                  borderClass = "border-amber-500";
                  bgClass =
                    "bg-amber-500/20 text-amber-500 font-black scale-105";
                }

                return (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-lg border flex flex-col items-center justify-center font-mono text-xs transition-all duration-300 ${bgClass} ${borderClass}`}
                  >
                    <span className="text-[5.5px] text-slate-500 select-none mb-0.5 font-sans">
                      #{idx}
                    </span>
                    <span className="font-extrabold">{bit}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {queryKey && (
            <div className="flex flex-col gap-1 items-center bg-slate-900/30 border border-slate-800 p-3 rounded-2xl max-w-sm w-full font-mono text-xs text-slate-400 shadow-inner">
              <div className="flex justify-between w-full">
                <span>Query String:</span>
                <span className="text-slate-200 font-bold">"{queryKey}"</span>
              </div>
              <div className="flex justify-between w-full">
                <span>Hash Indices:</span>
                <span className="text-amber-500 font-bold">
                  [{activeHashes.join(", ")}]
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- 10. RENDER HASH MAPS ---
  const renderHashCanvas = () => {
    const algoId = algorithm.id || "";
    if (
      algoId === "hash-map" ||
      algoId === "linear-probing" ||
      algoId === "quadratic-probing" ||
      algoId === "double-hashing" ||
      algoId === "separate-chaining"
    )
      return renderHashMapSetCanvas(false);
    if (algoId === "hash-set") return renderHashMapSetCanvas(true);
    if (algoId === "longest-consecutive-sequence")
      return renderLongestConsecutiveSequenceCanvas();
    if (algoId === "bloom-filter") return renderBloomFilterCanvas();

    // Default two-sum-hash / pair-sum / frequency-count display
    const nums = data?.nums || data?.arr || [];
    const map = data?.map || data?.hash || {};
    const target = data?.target || 9;
    const currentIdx = data?.currentIdx !== undefined ? data.currentIdx : -1;
    const complement = data?.complement !== undefined ? data.complement : null;

    return (
      <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Two Sum Hash Mapper
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
            Target: {target}
          </span>
        </div>

        {/* Formula calculation card */}
        {currentIdx !== -1 && (
          <div className="w-full max-w-md p-3 rounded-2xl border border-slate-200/10 dark:border-slate-800/40 bg-slate-900/35 backdrop-blur-sm flex justify-around items-center font-mono text-xs text-slate-400 mx-auto shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-[7px] text-slate-500 uppercase tracking-widest">
                Current
              </span>
              <span className="text-sm font-bold text-slate-200">
                {nums[currentIdx]}
              </span>
            </div>
            <span className="text-slate-600 font-black">+</span>
            <div className="flex flex-col items-center">
              <span className="text-[7px] text-slate-500 uppercase tracking-widest">
                Complement
              </span>
              <span className="text-sm font-bold text-amber-500">
                {complement}
              </span>
            </div>
            <span className="text-slate-600 font-black">=</span>
            <div className="flex flex-col items-center">
              <span className="text-[7px] text-slate-500 uppercase tracking-widest">
                Target
              </span>
              <span className="text-sm font-bold text-primary">{target}</span>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col md:flex-row gap-6 items-start py-2">
          {/* Left Side: Array Scan */}
          <div className="flex-1 flex flex-wrap gap-2 justify-center py-2">
            {nums.map((val, idx) => {
              const isCurrent = idx === currentIdx;
              const isMatch =
                highlights[idx] === "sorted" ||
                (stepState?.stats?.solution &&
                  stepState.stats.solution.includes(idx));

              return (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-all duration-300 ${
                    isCurrent
                      ? "bg-purple-600 border-purple-400 text-white shadow-md scale-105"
                      : isMatch
                        ? "bg-success text-white border-success"
                        : "bg-slate-800 border-slate-700 text-slate-400"
                  }`}
                >
                  <div>val: {val}</div>
                  <div className="text-[8px] text-slate-500 font-normal mt-0.5">
                    idx: {idx}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Map registry */}
          <div className="w-full md:w-60 flex flex-col gap-1.5 p-3.5 rounded-2xl border border-slate-800 bg-slate-950 max-h-48 overflow-y-auto">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider mb-1 text-center">
              Hash Map Entries
            </span>
            {Object.entries(map).map(([key, val]) => (
              <div
                key={key}
                className="flex justify-between items-center text-xs font-mono border-b border-slate-900 pb-1 text-slate-300"
              >
                <span className="text-slate-500">
                  Key: <b className="text-slate-300">{key}</b>
                </span>
                <span className="text-slate-500">
                  Idx: <b className="text-primary">{val}</b>
                </span>
              </div>
            ))}
            {Object.keys(map).length === 0 && (
              <span className="text-[8px] font-black text-slate-850 text-center py-4 uppercase">
                Map Empty
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- 11. RENDER HEAPS (BINARY TREE + ARRAY) ---
  const renderHeapCanvas = () => {
    const heapArr = Array.isArray(data) ? data : [];
    const n = heapArr.length;

    const maxDepth = n > 0 ? Math.floor(Math.log2(n)) : 0;

    const nodes = heapArr.map((val, idx) => {
      const depth = Math.floor(Math.log2(idx + 1));
      const col = idx - (Math.pow(2, depth) - 1);
      const levelNodes = Math.pow(2, depth);

      const x = 10 + (col + 0.5) * (80 / levelNodes);
      let y = 135;
      if (maxDepth > 0) {
        y = 35 + depth * (160 / maxDepth);
      }

      return { id: idx, val, x, y };
    });

    const activeIndices = currentSnap?.heapState?.activeIndices || [];
    const swapIndices = currentSnap?.heapState?.swapIndices || [];

    const getHeapNodeClass = (idx) => {
      if (highlights[idx]) {
        return getHighlightClass(idx);
      }
      if (swapIndices.includes(idx)) {
        return "bg-red-500 border-red-400 shadow-[0_0_12px_#ef4444] text-white";
      }
      if (activeIndices.includes(idx)) {
        return "bg-purple-600 border-purple-400 shadow-[0_0_12px_#8b5cf6] text-white";
      }
      return "bg-slate-800 border-slate-700 text-slate-300";
    };

    return (
      <div className="w-full h-80 flex flex-col justify-between p-2">
        <div className="relative w-full h-52">
          <svg className="w-full h-full absolute inset-0 z-0 pointer-events-none">
            {nodes.map((node) => {
              const lines = [];
              const leftIdx = 2 * node.id + 1;
              const rightIdx = 2 * node.id + 2;

              if (leftIdx < n) {
                const leftChild = nodes[leftIdx];
                lines.push(
                  <line
                    key={`${node.id}-left`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${leftChild.x}%`}
                    y2={leftChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={
                      highlights[node.id] === "sorted" &&
                      highlights[leftIdx] === "sorted"
                        ? "none"
                        : "4"
                    }
                  />,
                );
              }
              if (rightIdx < n) {
                const rightChild = nodes[rightIdx];
                lines.push(
                  <line
                    key={`${node.id}-right`}
                    x1={`${node.x}%`}
                    y1={node.y}
                    x2={`${rightChild.x}%`}
                    y2={rightChild.y}
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray={
                      highlights[node.id] === "sorted" &&
                      highlights[rightIdx] === "sorted"
                        ? "none"
                        : "4"
                    }
                  />,
                );
              }
              return lines;
            })}
          </svg>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              layout
              style={{
                left: `${node.x}%`,
                top: `${node.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className={`
                absolute w-9 h-9 rounded-full border-2 flex flex-col items-center justify-center font-mono font-bold text-xs z-10 transition-all duration-300
                ${getHeapNodeClass(node.id)}
              `}
            >
              <span>{node.val}</span>
              <span className="text-[7px] text-slate-500 font-normal leading-none">
                i:{node.id}
              </span>
            </motion.div>
          ))}
          {n === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs">
              HEAP IS EMPTY
            </div>
          )}
        </div>

        <div className="w-full bg-[#020617] border border-panel-border/30 rounded-xl p-3 flex flex-col gap-2 relative z-10">
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider text-left pl-1">
            Flat Array Representation:
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {heapArr.map((val, idx) => {
              const isHighlight = highlights[idx];
              const isSwap = swapIndices.includes(idx);
              const isActive = activeIndices.includes(idx);

              let arrayCellClass =
                "bg-slate-900 border-slate-800 text-slate-400";
              if (isHighlight) {
                arrayCellClass = getHighlightClass(idx);
              } else if (isSwap) {
                arrayCellClass =
                  "bg-red-500/20 border-red-500 text-red-400 shadow-md";
              } else if (isActive) {
                arrayCellClass =
                  "bg-purple-500/20 border-purple-500 text-purple-400";
              }

              return (
                <div
                  key={idx}
                  className={`
                    px-2.5 py-1 rounded border text-[11px] font-mono transition-all duration-300 flex flex-col items-center
                    ${arrayCellClass}
                  `}
                >
                  <span className="font-bold">{val}</span>
                  <span className="text-[7px] text-slate-500 font-normal mt-0.5">
                    #{idx}
                  </span>
                </div>
              );
            })}
            {n === 0 && (
              <span className="text-[10px] text-slate-700 font-mono">
                EMPTY
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- WORD SEARCH GRID CANVAS ---
  const renderWordSearchCanvas = () => {
    const { grid = [], word = "", path = [] } = data || {};
    const {
      current,
      backtrack: bt,
      invalid,
      start: startCell,
      result,
    } = highlights;
    const pathSet = new Set(path.map(([r, c]) => `${r},${c}`));

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex gap-6 items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider text-center mb-1">
              Grid
            </span>
            {grid.map((row, r) => (
              <div key={r} className="flex gap-1">
                {row.map((ch, c) => {
                  const key = `${r},${c}`;
                  const inPath = pathSet.has(key);
                  const isCurrent =
                    current && current[0] === r && current[1] === c;
                  const isBacktrack = bt && bt[0] === r && bt[1] === c;
                  const isStart =
                    startCell && startCell[0] === r && startCell[1] === c;
                  let cls =
                    "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-text-primary";
                  if (isBacktrack)
                    cls = "bg-red-500/20 border-red-500 text-red-400 font-bold";
                  else if (isCurrent)
                    cls =
                      "bg-green-500/20 border-green-500 text-green-400 font-extrabold scale-110";
                  else if (inPath)
                    cls =
                      "bg-blue-500/20 border-blue-500 text-blue-400 font-bold";
                  else if (isStart)
                    cls =
                      "bg-yellow-500/20 border-yellow-500 text-yellow-400 font-bold";
                  return (
                    <div
                      key={c}
                      className={`w-9 h-9 flex items-center justify-center border rounded-lg font-mono text-sm transition-all duration-200 ${cls}`}
                    >
                      {ch}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 min-w-28">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
              Target Word
            </span>
            <div className="flex gap-1 flex-wrap">
              {word.split("").map((ch, i) => {
                const matched = i < path.length;
                return (
                  <div
                    key={i}
                    className={`w-8 h-8 flex items-center justify-center border rounded-lg font-mono text-sm font-bold transition-all ${
                      matched
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : "bg-slate-800/30 border-slate-600 text-slate-400"
                    }`}
                  >
                    {ch}
                  </div>
                );
              })}
            </div>
            <div className="text-xs font-mono mt-2 text-slate-400">
              Path: {path.length}/{word.length}
            </div>
            {result !== undefined && (
              <div
                className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
                  result
                    ? "text-green-400 bg-green-500/10 border-green-500/30"
                    : "text-red-400 bg-red-500/10 border-red-500/30"
                }`}
              >
                {result ? "✅ FOUND" : "❌ NOT FOUND"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- LEVEL ORDER CANVAS ---
  const renderLevelOrderCanvas = () => {
    const { levels = [], currentLevel = -1 } = data || {};
    const colors = [
      "text-blue-400 bg-blue-500/10 border-blue-500/30",
      "text-purple-400 bg-purple-500/10 border-purple-500/30",
      "text-green-400 bg-green-500/10 border-green-500/30",
      "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
      "text-pink-400 bg-pink-500/10 border-pink-500/30",
    ];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Level-by-Level BFS Traversal
        </span>
        <div className="flex flex-col gap-2 w-full max-h-56 overflow-y-auto">
          {levels.map((level, lvl) => {
            const isActive = lvl === currentLevel;
            const colorClass = colors[lvl % colors.length];
            return (
              <div
                key={lvl}
                className={`flex items-center gap-3 p-2 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? colorClass + " scale-[1.02] shadow-md"
                    : "border-slate-700/30 bg-slate-950/20"
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-bold uppercase min-w-12 ${
                    isActive ? "" : "text-slate-500"
                  }`}
                >
                  L{lvl}
                </span>
                <div className="flex gap-1.5 flex-wrap">
                  {level.map((val, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1 rounded-lg border font-mono text-xs font-bold ${
                        isActive
                          ? colorClass
                          : "bg-slate-800/40 border-slate-700/40 text-slate-400"
                      }`}
                    >
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {levels.length === 0 && (
            <div className="text-slate-500 text-sm text-center">
              Building tree levels...
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- BELLMAN-FORD CANVAS ---
  const renderBellmanFordCanvas = () => {
    const { dist = [], edges = [], iteration = 0 } = data || {};
    const { relaxed = [] } = highlights;
    const INF = 9999;
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Bellman-Ford Distance Table — Iteration {iteration}
        </span>
        <div className="flex gap-2 justify-center flex-wrap">
          {dist.map((d, v) => {
            const isRelaxed = Array.isArray(relaxed) && relaxed.includes(v);
            return (
              <div
                key={v}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border font-mono text-xs transition-all duration-300 ${
                  isRelaxed
                    ? "bg-green-500/20 border-green-500 text-green-400 scale-110 shadow-md"
                    : v === 0
                      ? "bg-blue-500/20 border-blue-500 text-blue-400"
                      : "bg-slate-900/40 border-slate-700/40 text-slate-300"
                }`}
              >
                <span className="text-[8px] text-slate-500 font-normal">
                  v{v}
                </span>
                <span className="font-extrabold text-sm">
                  {d === INF ? "∞" : d}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1 max-h-28 overflow-y-auto w-full">
          {edges.map((e, i) => {
            const isRelaxedEdge =
              Array.isArray(relaxed) && e && relaxed.includes(e[1]);
            return (
              <div
                key={i}
                className={`text-xs font-mono px-2 py-1 rounded border transition-all ${
                  isRelaxedEdge
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "border-slate-800/30 text-slate-500"
                }`}
              >
                {e[0]}→{e[1]} (w={e[2]})
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- FLOYD-WARSHALL CANVAS ---
  const renderFloydWarshallCanvas = () => {
    const { dist = [], k = -1, i: ri = -1, j: rj = -1, V = 0 } = data || {};
    const { updated, via } = highlights;
    const INF = 9999;
    return (
      <div className="w-full min-h-[18rem] h-auto flex flex-col items-center justify-center gap-3 p-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Floyd-Warshall Distance Matrix {k >= 0 ? `— k=${k}` : ""}
        </span>
        <div className="overflow-x-auto w-full">
          <table className="text-xs font-mono mx-auto border-collapse">
            <thead>
              <tr>
                <th className="w-8 h-6 border border-slate-700/40 bg-slate-900/60 text-slate-500 text-[9px]">
                  i\j
                </th>
                {dist[0]?.map((_, j) => (
                  <th
                    key={j}
                    className="w-10 h-6 border border-slate-700/40 bg-slate-900/60 text-slate-400 text-[9px]"
                  >
                    v{j}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dist.map((row, i) => (
                <tr key={i}>
                  <td className="w-8 h-8 border border-slate-700/40 bg-slate-900/60 text-slate-400 text-[9px] text-center font-bold">
                    v{i}
                  </td>
                  {row.map((val, j) => {
                    const isUpdated =
                      updated && updated[0] === i && updated[1] === j;
                    const isVia = i === ri || j === rj || i === k || j === k;
                    return (
                      <td
                        key={j}
                        className={`w-10 h-8 border text-center font-bold transition-all duration-200 ${
                          isUpdated
                            ? "bg-green-500/30 border-green-500 text-green-300"
                            : i === j
                              ? "bg-slate-900/80 border-slate-700/30 text-slate-500"
                              : isVia && k >= 0
                                ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                                : "bg-slate-900/20 border-slate-800/30 text-slate-300"
                        }`}
                      >
                        {val >= INF ? "∞" : val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // --- PASCAL TRIANGLE CANVAS ---
  const renderPascalTriangleCanvas = () => {
    const { triangle = [], rowNum = -1 } = data || {};
    const colors = [
      "border-blue-500/40 text-blue-300",
      "border-purple-500/40 text-purple-300",
      "border-green-500/40 text-green-300",
      "border-yellow-500/40 text-yellow-300",
      "border-pink-500/40 text-pink-300",
      "border-cyan-500/40 text-cyan-300",
    ];
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-2 p-4 overflow-auto">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Pascal's Triangle
        </span>
        <div className="flex flex-col items-center gap-1 max-h-56 overflow-y-auto w-full">
          {triangle.map((row, r) => {
            const isActive = r === rowNum;
            const colorCls = colors[r % colors.length];
            return (
              <div
                key={r}
                className={`flex gap-1 transition-all duration-300 ${isActive ? "scale-105" : ""}`}
              >
                {row.map((val, j) => (
                  <div
                    key={j}
                    className={`min-w-8 h-8 px-1 flex items-center justify-center border rounded-lg font-mono text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-blue-500/20 border-blue-500 text-blue-300 shadow-md"
                        : j === 0 || j === row.length - 1
                          ? "bg-slate-900/60 border-slate-700/40 text-slate-400"
                          : `bg-slate-900/30 ${colorCls}`
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- STRINGS CANVAS (palindrome, reverse string) ---
  const renderStringCharCanvas = () => {
    const { str, chars } = data || {};
    const display = chars ? chars.join("") : str || "";
    const charArr = display.split("");
    const { active = [], swapped = [], sorted = [] } = highlights;
    const { left, right, match, result } = highlights;

    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-6 p-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
          Character Array
        </span>
        <div className="flex gap-1.5 flex-wrap justify-center">
          {charArr.map((ch, i) => {
            const isActive = active.includes
              ? active.includes(i)
              : i === left || i === right;
            const isSwapped = swapped.includes ? swapped.includes(i) : false;
            const isSorted = sorted.includes ? sorted.includes(i) : false;
            return (
              <div
                key={i}
                className={`w-10 h-10 flex items-center justify-center border rounded-lg font-mono text-base font-bold transition-all duration-300 ${
                  isSwapped
                    ? "bg-red-500/20 border-red-500 text-red-400 scale-110"
                    : isActive
                      ? "bg-blue-500/20 border-blue-500 text-blue-300 scale-110 shadow-md"
                      : isSorted
                        ? "bg-green-500/20 border-green-500 text-green-400"
                        : "bg-slate-900/40 border-slate-700/40 text-slate-300"
                }`}
              >
                {ch === " " ? "·" : ch}
              </div>
            );
          })}
        </div>
        {result !== undefined && (
          <div
            className={`text-sm font-mono font-bold px-4 py-2 rounded-xl border ${
              result
                ? "text-green-400 bg-green-500/10 border-green-500/30"
                : "text-red-400 bg-red-500/10 border-red-500/30"
            }`}
          >
            {result ? "✅ Palindrome" : "❌ Not a Palindrome"}
          </div>
        )}
        {match !== undefined && !result && (
          <div
            className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
              match
                ? "text-green-400 bg-green-500/10 border-green-500/30"
                : "text-red-400 bg-red-500/10 border-red-500/30"
            }`}
          >
            {match ? "✓ Characters match" : "✗ Mismatch found"}
          </div>
        )}
      </div>
    );
  };

  // --- SPIRAL MATRIX CANVAS ---
  const renderSpiralMatrixCanvas = () => {
    const {
      matrix,
      n,
      activeCell,
      order = [],
      direction,
    } = currentSnap.matrixState || {};
    if (!matrix || !n)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Configure matrix size (e.g., 4)
        </div>
      );

    const cellColors = {};
    order.forEach(([r, c], idx) => {
      cellColors[`${r},${c}`] = idx === order.length - 1 ? "active" : "sorted";
    });

    const dirArrow =
      { right: "→", down: "↓", left: "←", up: "↑", done: "✓" }[direction] || "";

    return (
      <div className="w-full min-h-[320px] flex flex-col items-center justify-center gap-6 p-6 font-sans">
        {/* Title / Direction */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Spiral Matrix Traversal
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
              direction === "done"
                ? "bg-success/20 text-success"
                : "bg-primary/20 text-primary animate-pulse"
            }`}
          >
            Direction: {dirArrow} {direction?.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 justify-center w-full">
          {/* Matrix Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${n}, 1fr)`,
              gridTemplateRows: `repeat(${n}, 1fr)`,
              width: "240px",
              height: "240px",
              gap: "8px",
            }}
            className="flex-shrink-0"
          >
            {matrix.map((row, r) =>
              row.map((val, c) => {
                const key = `${r},${c}`;
                const state = cellColors[key];

                let cellClass =
                  "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600";
                if (state === "active") {
                  cellClass =
                    "bg-primary border-primary text-white scale-110 shadow-lg font-black";
                } else if (state === "sorted") {
                  cellClass =
                    "bg-primary/20 border-primary/45 text-primary font-bold";
                }

                return (
                  <div
                    key={key}
                    className={`w-full h-full rounded-xl border flex flex-col items-center justify-center font-mono text-sm relative transition-all duration-300 ${cellClass}`}
                  >
                    <span>{val}</span>
                    <span className="absolute bottom-1 right-1.5 text-[6px] opacity-40 font-normal select-none">
                      {r},{c}
                    </span>
                  </div>
                );
              }),
            )}
          </div>

          {/* Traversal Output Log */}
          <div className="flex-1 flex flex-col gap-2 w-full text-left">
            <span className="text-[9px] font-extrabold text-text-secondary uppercase tracking-wider pl-1">
              Visited Order ({order.length} / {n * n})
            </span>
            <div className="w-full flex flex-wrap gap-1.5 p-3 rounded-2xl bg-slate-900/5 dark:bg-slate-950/20 border border-slate-200/5 min-h-[90px] max-h-[160px] overflow-y-auto">
              {order.map(([r, c], idx) => {
                const val = matrix[r][c];
                const isLast = idx === order.length - 1;
                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-2 py-1 font-mono text-xs rounded border flex items-center gap-1 ${
                      isLast
                        ? "bg-primary border-primary text-white font-extrabold shadow-sm"
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-text-primary dark:text-slate-300"
                    }`}
                  >
                    <span>{val}</span>
                    <span className="text-[7px] opacity-60">
                      ({r},{c})
                    </span>
                  </motion.div>
                );
              })}
              {order.length === 0 && (
                <span className="text-xs text-slate-500 font-mono italic p-2">
                  Click Next/Start to begin traversal...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 1J. MATRIX TRANSPOSE CANVAS ---
  const renderTransposeMatrixCanvas = () => {
    const {
      matrix,
      n,
      activeCell,
      compareCell,
      swapped = [],
      phase,
    } = currentSnap.matrixState || {};
    if (!matrix || !n)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Configure matrix size (e.g., 4)
        </div>
      );

    const isSwapped = (r, c) =>
      swapped.some(([sr, sc]) => sr === r && sc === c);
    const isActive = (r, c) =>
      activeCell && activeCell[0] === r && activeCell[1] === c;
    const isCompare = (r, c) =>
      compareCell && compareCell[0] === r && compareCell[1] === c;

    return (
      <div className="w-full min-h-[300px] flex flex-col items-center justify-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Matrix Transposition Visualizer
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
              phase === "done"
                ? "bg-success/20 text-success"
                : "bg-primary/20 text-primary animate-pulse"
            }`}
          >
            Phase:{" "}
            {phase === "init"
              ? "Initialize"
              : phase === "compare"
                ? "Compare"
                : phase === "swap"
                  ? "Swapped"
                  : "Complete"}
          </span>
        </div>

        {/* Matrix Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${n}, 1fr)`,
            gridTemplateRows: `repeat(${n}, 1fr)`,
            width: "240px",
            height: "240px",
            gap: "8px",
          }}
          className="flex-shrink-0"
        >
          {matrix.map((row, r) =>
            row.map((val, c) => {
              const key = `${r},${c}`;
              const cellIsActive = isActive(r, c);
              const cellIsCompare = isCompare(r, c);
              const cellIsSwapped = isSwapped(r, c);
              const isDiagonal = r === c;

              let cellClass =
                "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300";
              if (cellIsActive) {
                cellClass =
                  "bg-primary border-primary text-white scale-110 shadow-lg font-black";
              } else if (cellIsCompare) {
                cellClass =
                  "bg-amber-500 border-amber-500 text-white scale-110 shadow-lg font-black";
              } else if (cellIsSwapped) {
                cellClass =
                  "bg-success/15 border-success/45 text-success font-bold";
              } else if (isDiagonal) {
                cellClass =
                  "bg-slate-200/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 italic";
              }

              return (
                <div
                  key={key}
                  className={`w-full h-full rounded-xl border flex flex-col items-center justify-center font-mono text-sm relative transition-all duration-300 ${cellClass}`}
                >
                  <span>{val}</span>
                  <span className="absolute bottom-1 right-1.5 text-[6px] opacity-40 font-normal select-none">
                    {r},{c}
                  </span>
                  {isDiagonal && !cellIsActive && !cellIsCompare && (
                    <span className="absolute top-1 left-1.5 text-[5px] uppercase font-extrabold tracking-wider opacity-30 select-none">
                      Diag
                    </span>
                  )}
                </div>
              );
            }),
          )}
        </div>
      </div>
    );
  };

  // --- 1K. FRUITS INTO BASKETS CANVAS ---
  const renderFruitsIntoBasketsCanvas = () => {
    const {
      fruits = [],
      left = 0,
      right = 0,
      basket = {},
      maxLen = 0,
      phase,
    } = currentSnap.fruitState || {};
    if (!fruits || fruits.length === 0)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter fruits array (e.g., 2 1 5 1 3 2)
        </div>
      );

    // Fruit mapping dictionary
    const fruitMap = {
      1: { emoji: "🍎", name: "Apple" },
      2: { emoji: "🍌", name: "Banana" },
      3: { emoji: "🍊", name: "Orange" },
      4: { emoji: "🍇", name: "Grape" },
      5: { emoji: "🍉", name: "Watermelon" },
      6: { emoji: "🍒", name: "Cherry" },
      default: { emoji: "🍓", name: "Strawberry" },
    };

    const getFruitInfo = (val) => fruitMap[val] || fruitMap.default;

    // Convert current basket dictionary to a readable array of baskets
    const basketItems = Object.entries(basket).map(([type, count]) => ({
      type: Number(type),
      count,
      ...getFruitInfo(Number(type)),
    }));

    const renderBasket = (label, item, isOverflow) => {
      const basketColor = isOverflow
        ? "border-red-500/50 bg-red-500/5"
        : "border-amber-600/40 bg-amber-500/10 dark:bg-amber-950/15";
      const handleColor = isOverflow
        ? "border-red-500/40"
        : "border-amber-600/30 dark:border-amber-800/30";
      const textColor = isOverflow
        ? "text-red-500 animate-bounce"
        : "text-slate-500 dark:text-slate-400";

      return (
        <div className="flex flex-col items-center gap-1.5 relative mt-3 select-none">
          {/* Basket Handle Container */}
          <div className="w-20 h-20 relative flex items-center justify-center">
            <div
              className={`absolute top-1 left-1/2 -translate-x-1/2 w-12 h-10 border-2 rounded-t-full border-b-0 ${handleColor}`}
              style={{ zIndex: 1 }}
            />

            {/* Basket Body */}
            <div
              className={`absolute bottom-1 w-16 h-11 rounded-b-xl rounded-t-sm border-2 flex flex-col items-center justify-center shadow-inner relative ${basketColor}`}
              style={{ zIndex: 2 }}
            >
              {/* Wicker cross lines effect */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(45deg,#b45309_25%,transparent_25%),linear-gradient(-45deg,#b45309_25%,transparent_25%)] bg-[size:6px_6px] pointer-events-none" />

              {/* Item Content */}
              {item ? (
                <motion.div
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex flex-col items-center relative"
                  style={{ zIndex: 3 }}
                >
                  <div className="flex items-center gap-0.5 justify-center">
                    <span className="text-xl drop-shadow-sm select-none">
                      {item.emoji}
                    </span>
                    {item.count > 1 && (
                      <span className="text-[7px] font-black bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 px-1 rounded-full text-text-primary dark:text-slate-200 shadow-sm">
                        x{item.count}
                      </span>
                    )}
                  </div>
                  <span className="text-[7px] font-extrabold tracking-tight truncate max-w-[55px] mt-0.5 text-text-secondary select-none">
                    {item.name}
                  </span>
                </motion.div>
              ) : (
                <span
                  className="text-[8px] text-slate-400 font-mono italic select-none"
                  style={{ zIndex: 3 }}
                >
                  Empty
                </span>
              )}
            </div>
          </div>

          {/* Basket Label */}
          <span
            className={`text-[8px] font-black uppercase tracking-wider ${textColor}`}
          >
            {label}
          </span>
        </div>
      );
    };

    return (
      <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans">
        {/* Title / Max Stats */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Fruits Into Baskets (Sliding Window)
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Current Window: {right - left + 1}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase">
              Max Collected: {maxLen}
            </span>
          </div>
        </div>

        {/* Fruit Array Grid */}
        <div className="w-full flex justify-center items-center gap-2 flex-wrap min-h-[90px] relative">
          {fruits.map((val, idx) => {
            const inWindow = idx >= left && idx <= right;
            const isLeft = idx === left;
            const isRight = idx === right;
            const info = getFruitInfo(val);

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-40";
            if (inWindow) {
              borderClass = "border-primary shadow-sm";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-100 scale-105";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-14 h-16 rounded-xl border flex flex-col items-center justify-center relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {/* Pointer tags */}
                {isLeft && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] font-black text-primary uppercase bg-primary/20 px-1 rounded">
                    Left
                  </span>
                )}
                {isRight && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[7px] font-black text-amber-500 uppercase bg-amber-500/20 px-1 rounded">
                    Right
                  </span>
                )}
                <span className="text-xl">{info.emoji}</span>
                <span className="text-[8px] text-slate-500 font-mono mt-1">
                  idx {idx}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Pictorial Baskets Row */}
        <div className="w-full flex items-center justify-center gap-8 mt-2">
          {renderBasket("Basket 1", basketItems[0], false)}
          {renderBasket("Basket 2", basketItems[1], false)}
          {basketItems.length > 2 &&
            renderBasket("Overflow!", basketItems[2], true)}
        </div>
      </div>
    );
  };

  // --- 1L. BOYER-MOORE MAJORITY VOTE CANVAS ---
  const renderMooresVotingCanvas = () => {
    const arr = Array.isArray(data) ? data : [];
    const {
      comparisons = 0,
      candidate = "None",
      count = 0,
    } = currentSnap.stats || {};
    const scannedIdx = comparisons - 1;

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Title */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Boyer-Moore Majority Vote Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Iterated: {comparisons}/{arr.length} elements
          </span>
        </div>

        {/* Array Cards */}
        <div className="w-full flex justify-center items-center gap-2 flex-wrap min-h-[80px]">
          {arr.map((val, idx) => {
            const isScanned = idx === scannedIdx;
            const isCandidate =
              candidate !== "None" && Number(candidate) === val;
            const isPast = idx < scannedIdx;

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-60";
            if (isScanned) {
              borderClass = "border-amber-500 shadow-sm";
              bgClass =
                "bg-amber-500/5 dark:bg-amber-500/10 opacity-100 scale-105 font-black";
            } else if (isCandidate && isPast) {
              borderClass = "border-primary shadow-sm";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-100 font-bold";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-12 h-14 rounded-xl border flex flex-col items-center justify-center relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {isScanned && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-black text-amber-500 uppercase bg-amber-500/20 px-1 rounded select-none">
                    Current
                  </span>
                )}
                <span className="text-sm font-mono font-bold text-text-primary dark:text-[#F4F7FE]">
                  {val}
                </span>
                <span className="text-[6px] text-slate-500/60 font-normal">
                  #{idx}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Candidate & Votes Tracker Cards */}
        <div className="w-full flex justify-center items-center gap-8 mt-2">
          {/* Candidate Card */}
          <div className="flex-1 max-w-[200px] h-24 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col items-center justify-center p-3 relative">
            <span className="absolute top-1 right-2 text-[8px] font-extrabold text-slate-500 uppercase select-none">
              Majority Candidate
            </span>
            {candidate !== "None" ? (
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-2xl font-mono font-black text-primary">
                  {candidate}
                </span>
                <span className="text-[8px] font-bold text-text-secondary">
                  Assigned Element
                </span>
              </div>
            ) : (
              <span className="text-xs text-slate-400 font-mono italic">
                None
              </span>
            )}
          </div>

          {/* Votes Count Card */}
          <div className="flex-1 max-w-[200px] h-24 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col items-center justify-center p-3 relative">
            <span className="absolute top-1 right-2 text-[8px] font-extrabold text-slate-500 uppercase select-none">
              Votes / Count
            </span>
            <div className="flex flex-col items-center gap-1.5 w-full">
              <span className="text-xl font-mono font-black text-amber-500">
                {count}
              </span>
              <div className="flex gap-1 items-center justify-center h-2">
                {Array.from({ length: Math.min(count, 5) }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-amber-500"
                  />
                ))}
                {count > 5 && (
                  <span className="text-[7px] text-amber-500 font-extrabold">
                    +
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 1M. MINIMUM WINDOW SUBSTRING CANVAS ---
  const renderMinWindowSubstringCanvas = () => {
    const {
      s = "",
      t = "",
      left = 0,
      right = 0,
      need = {},
      have = {},
      formed = 0,
      required = 0,
      minLen = Infinity,
      minSub = "",
      phase,
    } = currentSnap.minWindowState || {};
    if (!s)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter S (e.g., ADOBECODEBANC) and T (e.g., ABC)
        </div>
      );

    const sChars = s.split("");

    return (
      <div className="w-full min-h-[320px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Minimum Window Substring (S: "{s}" // T: "{t}")
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Matches: {formed}/{required}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase">
              Min Window:{" "}
              {minLen === Infinity ? "None" : `"${minSub}" (${minLen})`}
            </span>
          </div>
        </div>

        {/* String S Tiles Row */}
        <div className="w-full flex justify-center items-center gap-1.5 flex-wrap min-h-[80px] relative">
          {sChars.map((char, idx) => {
            const inWindow = idx >= left && idx <= right;
            const isLeft = idx === left;
            const isRight = idx === right;

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-45";
            if (inWindow) {
              borderClass = "border-primary shadow-sm";
              bgClass =
                "bg-primary/5 dark:bg-primary/10 opacity-100 scale-105 font-bold";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-9 h-11 rounded-lg border flex flex-col items-center justify-center relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {isLeft && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-black text-primary uppercase bg-primary/20 px-0.5 rounded">
                    L
                  </span>
                )}
                {isRight && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[6px] font-black text-amber-500 uppercase bg-amber-500/20 px-0.5 rounded">
                    R
                  </span>
                )}
                <span className="text-sm font-mono font-bold text-text-primary dark:text-[#F4F7FE]">
                  {char}
                </span>
                <span className="text-[5px] text-slate-500/50 font-normal">
                  #{idx}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Maps Comparison Grid */}
        <div className="w-full flex justify-center items-center gap-6 mt-2">
          {/* Target Counts */}
          <div className="flex-1 max-w-[200px] p-3 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col gap-2 min-h-[100px]">
            <span className="text-[8px] font-extrabold text-slate-500 uppercase select-none mb-1">
              Required Characters (T)
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {Object.entries(need).map(([char, count]) => (
                <div
                  key={char}
                  className="flex justify-between items-center text-text-secondary"
                >
                  <span>Letter '{char}':</span>
                  <span className="font-bold">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Counts */}
          <div className="flex-1 max-w-[200px] p-3 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col gap-2 min-h-[100px]">
            <span className="text-[8px] font-extrabold text-slate-500 uppercase select-none mb-1">
              Window Characters (Have)
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              {Object.entries(need).map(([char, reqCount]) => {
                const curCount = have[char] || 0;
                const isSatisfied = curCount >= reqCount;

                return (
                  <div
                    key={char}
                    className={`flex justify-between items-center ${
                      isSatisfied
                        ? "text-success font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    <span>Letter '{char}':</span>
                    <span className="flex items-center gap-1">
                      {curCount} / {reqCount}
                      {isSatisfied && (
                        <span className="text-[8px] bg-success/20 px-1 rounded-full">
                          ✓
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 1N. GROUP ANAGRAMS CANVAS ---
  const renderGroupAnagramsCanvas = () => {
    const { arr = [], hash = {} } = data || {};
    const { word, currentIdx } = hashState || {};

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Title */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Group Anagrams Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Scanned: {currentIdx === -1 ? arr.length : currentIdx}/{arr.length}{" "}
            words
          </span>
        </div>

        {/* Input Words Cards */}
        <div className="w-full flex justify-center items-center gap-2 flex-wrap min-h-[70px]">
          {arr.map((val, idx) => {
            const isCurrent = idx === currentIdx;
            const isProcessed = idx < currentIdx;

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-60";
            if (isCurrent) {
              borderClass = "border-amber-500 shadow-sm";
              bgClass =
                "bg-amber-500/5 dark:bg-amber-500/10 opacity-100 scale-105 font-bold";
            } else if (isProcessed) {
              borderClass = "border-primary shadow-sm";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-100";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center relative transition-all duration-300 min-w-[50px] ${bgClass} ${borderClass}`}
              >
                <span className="text-xs font-mono font-bold text-text-primary dark:text-[#F4F7FE]">
                  {val}
                </span>
                {isCurrent && (
                  <span className="text-[6px] text-amber-500 font-extrabold mt-0.5">
                    Sort → {val.split("").sort().join("")}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Hash Map Groups */}
        <div className="w-full flex flex-col gap-2 p-3 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 min-h-[100px]">
          <span className="text-[8px] font-extrabold text-slate-500 uppercase select-none mb-1">
            Anagram Groups Map
          </span>
          <div className="flex flex-col gap-2 w-full">
            {Object.entries(hash).map(([key, wordsList]) => (
              <div
                key={key}
                className="flex items-center gap-3 border-b border-slate-200/10 dark:border-slate-800/10 pb-1.5 last:border-b-0"
              >
                {/* Key Label */}
                <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 px-2 py-0.5 rounded-md font-mono text-[9px] font-bold text-text-secondary select-none">
                  key: {key}
                </div>
                {/* Words list list */}
                <div className="flex gap-1.5 flex-wrap items-center">
                  {wordsList.map((w, wIdx) => (
                    <motion.span
                      key={wIdx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono font-medium text-primary select-none"
                    >
                      {w}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(hash).length === 0 && (
              <span className="text-xs text-slate-400 font-mono italic text-center py-4">
                No groups formed yet
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- 1O. STRING TRAVERSAL CANVAS ---
  const renderStringTraversalCanvas = () => {
    const chars = Array.isArray(data) ? data : [];
    const { currentIdx = -1, char = "" } = currentSnap.traversalState || {};

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            String Traversal Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Progress:{" "}
            {currentIdx === -1 ? 0 : Math.min(currentIdx + 1, chars.length)}/
            {chars.length} chars
          </span>
        </div>

        {/* Char Row */}
        <div className="w-full flex justify-center items-center gap-1.5 flex-wrap min-h-[80px]">
          {chars.map((val, idx) => {
            const isCurrent = idx === currentIdx;
            const isProcessed = idx < currentIdx;

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-50";
            if (isCurrent) {
              borderClass = "border-amber-500 shadow-sm";
              bgClass =
                "bg-amber-500/5 dark:bg-amber-500/10 opacity-100 scale-105 font-bold";
            } else if (isProcessed) {
              borderClass = "border-primary/65";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-100";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-9 h-11 rounded-lg border flex flex-col items-center justify-center relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {isCurrent && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-black text-amber-500 uppercase bg-amber-500/20 px-0.5 rounded select-none">
                    Pointer
                  </span>
                )}
                <span className="text-sm font-mono font-bold text-text-primary dark:text-[#F4F7FE]">
                  {val}
                </span>
                <span className="text-[5px] text-slate-500/60 font-normal">
                  #{idx}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Current State Panel */}
        <div className="w-full max-w-[240px] p-3.5 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col items-center justify-center relative h-24">
          <span className="absolute top-1 right-2 text-[8px] font-extrabold text-slate-500 uppercase select-none">
            Active Character
          </span>
          {currentIdx >= 0 && currentIdx < chars.length ? (
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-mono font-black text-primary">
                '{char}'
              </span>
              <span className="text-[8px] font-bold text-text-secondary">
                Index {currentIdx}
              </span>
            </div>
          ) : (
            <span className="text-xs text-slate-400 font-mono italic">
              {currentIdx === -1 ? "Not Started" : "Done"}
            </span>
          )}
        </div>
      </div>
    );
  };

  // --- 1P. STRING CONCATENATION CANVAS ---
  const renderStringConcatenationCanvas = () => {
    const {
      s1 = "",
      s2 = "",
      res = "",
      activeIdx = -1,
      phase,
    } = currentSnap.concatState || {};
    if (!s1 && !s2)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter two words separated by space (e.g., hello world)
        </div>
      );

    const s1Chars = s1.split("");
    const s2Chars = s2.split("");
    const resChars = res.split("");

    const renderSourceWord = (label, chars, isScanning) => (
      <div className="flex flex-col gap-1.5 items-center">
        <span className="text-[7px] font-black uppercase text-slate-500">
          {label}
        </span>
        <div className="flex gap-1">
          {chars.map((char, idx) => {
            const isActive = isScanning && idx === activeIdx;
            const isProcessed = isScanning
              ? idx < activeIdx
              : phase === "s2" || phase === "done";

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-50";
            if (isActive) {
              borderClass = "border-amber-500 shadow-sm";
              bgClass =
                "bg-amber-500/5 dark:bg-amber-500/10 opacity-100 scale-105 font-bold";
            } else if (isProcessed) {
              borderClass = "border-primary/60";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-80";
            }

            return (
              <div
                key={idx}
                className={`w-7 h-9 rounded-lg border flex items-center justify-center relative text-xs font-mono font-bold transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {char}
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            String Concatenation Visualizer
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
            Phase:{" "}
            {phase === "init"
              ? "Init"
              : phase === "s1"
                ? "Copy s1"
                : phase === "s2"
                  ? "Copy s2"
                  : "Completed"}
          </span>
        </div>

        {/* Source Strings Rows */}
        <div className="w-full flex justify-center items-center gap-8 flex-wrap">
          {renderSourceWord("String 1 (s1)", s1Chars, phase === "s1")}
          <span className="text-xl text-slate-500 font-mono select-none">
            +
          </span>
          {renderSourceWord("String 2 (s2)", s2Chars, phase === "s2")}
        </div>

        {/* Result String Row */}
        <div className="w-full flex flex-col gap-2 items-center mt-2">
          <span className="text-[8px] font-extrabold text-slate-500 uppercase select-none">
            Concatenated Result (res)
          </span>
          <div className="flex gap-1.5 justify-center items-center min-h-[44px] px-6 py-2.5 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 min-w-[200px]">
            {resChars.map((char, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                className="w-8 h-10 rounded-lg border border-success bg-success/5 dark:bg-success/15 flex items-center justify-center text-xs font-mono font-black text-success shadow-inner"
              >
                {char}
              </motion.div>
            ))}
            {resChars.length === 0 && (
              <span className="text-xs text-slate-400 font-mono italic">
                Empty
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- 1Q. LONGEST PALINDROMIC SUBSTRING CANVAS ---
  const renderLongestPalindromeCanvas = () => {
    const {
      s = "",
      i = -1,
      l = -1,
      r = -1,
      start = 0,
      end = 0,
      bestSub = "",
      phase,
    } = currentSnap.lpsState || {};
    if (!s)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter string (e.g., babad)
        </div>
      );

    const chars = s.split("");

    return (
      <div className="w-full min-h-[300px] flex flex-col justify-between items-center gap-6 p-6 font-sans text-left">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-text-secondary uppercase">
            Longest Palindromic Substring (Expand Center)
          </span>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Center: {i === -1 ? "None" : i}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success uppercase">
              Longest: "{bestSub}" ({bestSub.length})
            </span>
          </div>
        </div>

        {/* Char Row */}
        <div className="w-full flex justify-center items-center gap-1.5 flex-wrap min-h-[85px] relative">
          {chars.map((char, idx) => {
            const isCenter = idx === i;
            const isL = idx === l;
            const isR = idx === r;
            const inLpsWindow = idx >= l && idx <= r && l !== -1;
            const inBestWindow = idx >= start && idx <= end;

            let borderClass = "border-slate-200/40 dark:border-slate-700/45";
            let bgClass = "bg-white dark:bg-slate-800 opacity-40";

            if (isCenter) {
              borderClass = "border-purple-500 shadow-md";
              bgClass =
                "bg-purple-500/5 dark:bg-purple-500/10 opacity-100 scale-105 font-black";
            } else if (isL || isR) {
              borderClass = "border-amber-500 shadow-sm";
              bgClass =
                "bg-amber-500/5 dark:bg-amber-500/10 opacity-100 scale-105";
            } else if (inLpsWindow) {
              borderClass = "border-primary/70";
              bgClass = "bg-primary/5 dark:bg-primary/10 opacity-80";
            } else if (inBestWindow) {
              borderClass = "border-success/50";
              bgClass = "bg-success/5 dark:bg-success/10 opacity-70";
            }

            return (
              <motion.div
                key={idx}
                layout
                className={`w-9 h-11 rounded-lg border flex flex-col items-center justify-center relative transition-all duration-300 ${bgClass} ${borderClass}`}
              >
                {isCenter && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[5px] font-black text-purple-500 uppercase bg-purple-500/20 px-0.5 rounded select-none">
                    Center
                  </span>
                )}
                {isL && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[5px] font-black text-amber-500 uppercase bg-amber-500/20 px-0.5 rounded select-none">
                    L
                  </span>
                )}
                {isR && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[5px] font-black text-amber-500 uppercase bg-amber-500/20 px-0.5 rounded select-none">
                    R
                  </span>
                )}
                <span className="text-sm font-mono font-bold text-text-primary dark:text-[#F4F7FE]">
                  {char}
                </span>
                <span className="text-[5px] text-slate-500/60 font-normal">
                  #{idx}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Current State Comparison Cards */}
        <div className="w-full flex justify-center items-center gap-6 mt-2">
          {/* Active window */}
          <div className="flex-1 max-w-[200px] h-24 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col items-center justify-center p-3 relative">
            <span className="absolute top-1 right-2 text-[8px] font-extrabold text-slate-500 uppercase select-none">
              Expanding Substring
            </span>
            {l !== -1 && r !== -1 && l <= r ? (
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xl font-mono font-black text-primary">
                  "{s.slice(l, r + 1)}"
                </span>
                <span className="text-[8px] font-bold text-text-secondary">
                  Length: {r - l + 1}
                </span>
              </div>
            ) : (
              <span className="text-xs text-slate-400 font-mono italic">
                None
              </span>
            )}
          </div>

          {/* Best Substring */}
          <div className="flex-1 max-w-[200px] h-24 rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-700/60 bg-slate-50/5 dark:bg-slate-900/5 flex flex-col items-center justify-center p-3 relative">
            <span className="absolute top-1 right-2 text-[8px] font-extrabold text-slate-500 uppercase select-none">
              Best Palindrome
            </span>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-mono font-black text-success">
                "{bestSub}"
              </span>
              <span className="text-[8px] font-bold text-text-secondary">
                Range: [{start}..{end}]
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- MATRIX MULTIPLICATION CANVAS ---
  const renderMatrixMultCanvas = () => {
    const { A, B, C, activeI, activeJ, activeK, phase, partial } =
      currentSnap.matrixState || {};
    if (!A || !B || !C)
      return (
        <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
          Enter matrices separated by ---
        </div>
      );
    const renderMat = (mat, name, activeRow, activeCol) => (
      <div className="flex flex-col gap-1">
        <div className="text-[10px] font-bold text-accent font-mono text-center">
          {name}
        </div>
        {mat.map((row, r) => (
          <div key={r} className="flex gap-1">
            {row.map((val, c) => (
              <div
                key={c}
                className={`w-8 h-8 flex items-center justify-center text-xs font-mono font-bold rounded border transition-all ${
                  r === activeRow && c === activeCol
                    ? "bg-accent text-white border-accent scale-110"
                    : r === activeRow || c === activeCol
                      ? "bg-accent/20 border-accent/30 text-accent"
                      : "bg-slate-900 border-slate-700 text-slate-400"
                }`}
              >
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
    return (
      <div className="w-full h-72 flex items-center justify-center gap-4 px-4">
        {renderMat(A, "A", activeI, activeK)}
        <div className="text-2xl text-slate-500 font-mono">×</div>
        {renderMat(B, "B", activeK, activeJ)}
        <div className="text-2xl text-slate-500 font-mono">=</div>
        {renderMat(C, "C", activeI, activeJ)}
        {phase === "compute" && partial !== undefined && (
          <div className="absolute bottom-4 text-xs font-mono text-yellow-400">
            partial: {partial}
          </div>
        )}
      </div>
    );
  };

  // --- STRING CHAR CANVAS (Z-algo, Manacher, Compression) ---
  const renderStringAlgoCanvas = () => {
    const chars = Array.isArray(data) ? data : [];
    return (
      <div className="w-full h-72 flex flex-wrap items-center justify-center gap-2 px-4 py-6 overflow-auto">
        {chars.map((ch, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1`}>
            <motion.div
              key={idx}
              layout
              className={`w-9 h-9 rounded-lg border flex items-center justify-center font-mono text-sm font-bold transition-all duration-200 ${getHighlightClass(idx)}`}
            >
              {ch}
            </motion.div>
            <span className="text-[9px] text-slate-600 font-mono">{idx}</span>
          </div>
        ))}
      </div>
    );
  };

  // --- LRU CACHE CANVAS ---
  const renderLruCacheCanvas = () => {
    const { map = {}, order = [] } = currentSnap.hashState || {};
    return (
      <div className="w-full h-72 flex flex-col items-center justify-center gap-4 px-4">
        <div className="text-xs font-bold text-accent uppercase tracking-widest">
          LRU Cache State
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-xs text-slate-500 font-mono">LRU</span>
          {order.map((key, i) => (
            <div key={key} className={`flex flex-col items-center gap-1`}>
              <div
                className={`px-3 py-2 rounded-lg border font-mono text-xs font-bold transition-all ${i === order.length - 1 ? "bg-accent text-white border-accent shadow-lg" : i === 0 ? "bg-red-500/20 border-red-500/50 text-red-400" : "bg-slate-800 border-slate-600 text-slate-300"}`}
              >
                {key}:{map[key]}
              </div>
              <span className="text-[9px] text-slate-600">
                {i === 0 ? "LRU" : i === order.length - 1 ? "MRU" : ""}
              </span>
            </div>
          ))}
          <span className="text-xs text-slate-500 font-mono">MRU</span>
        </div>
        {order.length === 0 && (
          <div className="text-slate-600 font-mono text-sm">Cache is empty</div>
        )}
        <div className="text-xs text-slate-500 font-mono">
          Entries: {order.length}
        </div>
      </div>
    );
  };

  // --- HOUSE ROBBER CANVAS ---
  const renderHouseRobberCanvas = () => {
    const { dpState } = currentSnap;
    if (!dpState) return renderArrayCanvas();

    const {
      originalArr = [],
      dp = [],
      activeIdx = -1,
      robbedHouses = [],
    } = dpState;
    const n = originalArr.length;

    const getHouseStatus = (idx) => {
      const isComplete = currentStep === steps.length - 1;
      if (isComplete) {
        return robbedHouses.includes(idx) ? "robbed" : "skipped";
      }
      if (idx === activeIdx) return "active";
      if (idx > activeIdx) return "unvisited";
      return robbedHouses.includes(idx) ? "robbed" : "skipped";
    };

    return (
      <div className="w-full h-auto flex flex-col items-center justify-center gap-6 p-4">
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase font-bold">
          House Robber Street Visualization
        </span>

        {/* Houses Row */}
        <div className="w-full overflow-x-auto flex items-end justify-start sm:justify-center gap-1.5 sm:gap-4 py-6 px-2 sm:px-4 min-h-[120px] sm:min-h-[170px]">
          {originalArr.map((value, idx) => {
            const status = getHouseStatus(idx);

            // Choose clay class based on status
            let clayClass = "clay-house-unvisited";
            let roofColor = "fill-slate-500 dark:fill-slate-400";
            let bodyColor = "fill-slate-450/20 dark:fill-slate-500/20";
            let textColor = "text-slate-700 dark:text-slate-350 font-bold";
            let badge = null;

            if (status === "robbed") {
              clayClass = "clay-house-robbed";
              roofColor = "fill-amber-500";
              bodyColor = "fill-amber-600/20 dark:fill-amber-500/20";
              textColor = "text-amber-700 dark:text-amber-300 font-black";
              badge = (
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-950 text-[7px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-0.5 sm:gap-1 animate-pulse">
                  <svg
                    className="w-2 sm:w-2.5 h-2 sm:h-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.775-.617 1.908-.74 3.002-.375M18 12H6"
                    />
                  </svg>
                  Looted
                </div>
              );
            } else if (status === "skipped") {
              clayClass = "clay-house-skipped";
              roofColor = "fill-slate-400 opacity-20 dark:opacity-30";
              bodyColor = "fill-slate-500/10";
              textColor = "text-slate-400 dark:text-slate-600";
              badge = (
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-slate-200 dark:bg-slate-900 text-slate-500 text-[7px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded-full border border-slate-350 dark:border-slate-805 uppercase tracking-wider">
                  Skipped
                </div>
              );
            } else if (status === "active") {
              clayClass = "clay-house-active";
              roofColor = "fill-purple-500";
              bodyColor = "fill-purple-600/20 dark:fill-purple-500/20";
              textColor = "text-purple-700 dark:text-purple-300 font-black";
              badge = (
                <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
                  <div className="bg-purple-600 text-white text-[7px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded-md shadow-lg uppercase tracking-wider flex items-center gap-0.5 sm:gap-1 animate-bounce">
                    <svg
                      className="w-2.5 sm:w-3 h-2.5 sm:h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
                    </svg>
                    Robber
                  </div>
                </div>
              );
            }

            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: status === "active" ? 1.06 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`relative flex flex-col items-center p-1.5 sm:p-3 transition-all duration-300 w-14 h-24 sm:w-24 sm:h-36 justify-between flex-shrink-0 ${clayClass}`}
              >
                {badge}
                <span className="text-[7px] sm:text-[9px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  <span className="sm:hidden">H</span>
                  <span className="hidden sm:inline">House </span>
                  {idx}
                </span>

                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 my-0.5 sm:my-1"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 12L90 45H10L50 12Z"
                    className={`${roofColor} transition-colors duration-350`}
                  />
                  <rect
                    x="20"
                    y="45"
                    width="60"
                    height="43"
                    rx="4"
                    className={`${bodyColor} transition-colors duration-350`}
                  />
                  <rect
                    x="42"
                    y="62"
                    width="16"
                    height="26"
                    rx="2"
                    className="fill-slate-900/60 dark:fill-slate-950/60"
                  />
                  <circle cx="46" cy="75" r="1.5" className="fill-amber-500" />
                  <rect
                    x="28"
                    y="52"
                    width="12"
                    height="12"
                    rx="2"
                    className="fill-slate-900/40 dark:fill-slate-950/40"
                  />
                  <rect
                    x="60"
                    y="52"
                    width="12"
                    height="12"
                    rx="2"
                    className="fill-slate-900/40 dark:fill-slate-950/40"
                  />
                </svg>

                <span
                  className={`text-[10px] sm:text-xs font-mono tracking-wider ${textColor}`}
                >
                  ${value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* 1D DP Array representing state */}
        <div className="flex flex-col items-center w-full gap-2 mt-2">
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
            DP Table: dp[i] = maximum profit up to House i
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 p-4 clay-inset rounded-3xl max-w-full">
            {dp.map((val, idx) => {
              const isCurrent = idx === activeIdx;
              const isPrev1 = idx === activeIdx - 1;
              const isPrev2 = idx === activeIdx - 2;
              const isRobbed = robbedHouses.includes(idx) && idx <= activeIdx;

              let cellClass =
                "clay-dp-cell-default text-slate-400 dark:text-slate-500";
              if (isCurrent) {
                cellClass = "clay-dp-cell-current font-extrabold scale-105";
              } else if (isPrev1) {
                cellClass = "clay-dp-cell-prev1 font-bold";
              } else if (isPrev2) {
                cellClass = "clay-dp-cell-prev2 font-bold";
              } else if (idx < activeIdx) {
                cellClass = isRobbed
                  ? "clay-dp-cell-robbed font-semibold animate-scaleUp"
                  : "clay-dp-cell-default text-slate-500 dark:text-slate-400";
              }

              return (
                <div
                  key={idx}
                  className={`w-14 h-14 rounded-2xl flex flex-col justify-center items-center font-mono text-xs transition-all duration-300 ${cellClass}`}
                >
                  <span className="text-[8px] opacity-60">dp[{idx}]</span>
                  <span className="text-xs font-bold mt-1">${val}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Choice comparison card */}
        {activeIdx >= 2 && currentStep < steps.length - 1 && (
          <div className="w-full max-w-md p-5 flex flex-col gap-3 mt-2 clay-card">
            <span className="text-[10px] font-bold font-mono uppercase text-slate-600 dark:text-slate-350 tracking-wider">
              Robber's Decision at House {activeIdx}
            </span>
            <div className="grid grid-cols-2 gap-4 mt-1 text-xs font-mono">
              <div
                className={`p-3 rounded-2xl transition-all flex flex-col gap-1.5 ${
                  dp[activeIdx] === dp[activeIdx - 1]
                    ? "clay-dp-cell-prev1 text-white shadow-lg"
                    : "clay-inset opacity-70 text-slate-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase text-[9px] tracking-wide">
                    Option A: Skip
                  </span>
                  {dp[activeIdx] === dp[activeIdx - 1] && (
                    <span className="text-[9px] bg-white text-blue-600 font-extrabold px-1.5 py-0.5 rounded shadow uppercase">
                      Chosen
                    </span>
                  )}
                </div>
                <div className="text-[10px] mt-1 text-left opacity-90">
                  Value = dp[i - 1]
                </div>
                <div className="font-extrabold text-sm text-left mt-0.5">
                  = ${dp[activeIdx - 1]}
                </div>
              </div>

              <div
                className={`p-3 rounded-2xl transition-all flex flex-col gap-1.5 ${
                  dp[activeIdx] === dp[activeIdx - 2] + originalArr[activeIdx]
                    ? "clay-dp-cell-prev2 text-white shadow-lg"
                    : "clay-inset opacity-70 text-slate-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase text-[9px] tracking-wide">
                    Option B: Rob
                  </span>
                  {dp[activeIdx] ===
                    dp[activeIdx - 2] + originalArr[activeIdx] && (
                    <span className="text-[9px] bg-white text-amber-600 font-extrabold px-1.5 py-0.5 rounded shadow uppercase">
                      Chosen
                    </span>
                  )}
                </div>
                <div className="text-[10px] mt-1 text-left opacity-90">
                  Value = dp[i - 2] + arr[i]
                </div>
                <div className="font-extrabold text-sm text-left mt-0.5">
                  = ${dp[activeIdx - 2]} + ${originalArr[activeIdx]} = $
                  {dp[activeIdx - 2] + originalArr[activeIdx]}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Choice comparison card for house 1 */}
        {activeIdx === 1 && currentStep < steps.length - 1 && (
          <div className="w-full max-w-md p-5 flex flex-col gap-3 mt-2 clay-card">
            <span className="text-[10px] font-bold font-mono uppercase text-slate-600 dark:text-slate-350 tracking-wider">
              Robber's Decision at House 1
            </span>
            <div className="grid grid-cols-2 gap-4 mt-1 text-xs font-mono">
              <div
                className={`p-3 rounded-2xl transition-all flex flex-col gap-1.5 ${
                  dp[1] === originalArr[0]
                    ? "clay-dp-cell-prev1 text-white shadow-lg"
                    : "clay-inset opacity-70 text-slate-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase text-[9px] tracking-wide">
                    Option A: Skip House 1
                  </span>
                  {dp[1] === originalArr[0] && (
                    <span className="text-[9px] bg-white text-blue-600 font-extrabold px-1.5 py-0.5 rounded shadow uppercase">
                      Chosen
                    </span>
                  )}
                </div>
                <div className="text-[10px] mt-1 text-left opacity-90">
                  Value = dp[0]
                </div>
                <div className="font-extrabold text-sm text-left mt-0.5">
                  = ${originalArr[0]}
                </div>
              </div>

              <div
                className={`p-3 rounded-2xl transition-all flex flex-col gap-1.5 ${
                  dp[1] === originalArr[1]
                    ? "clay-dp-cell-prev2 text-white shadow-lg"
                    : "clay-inset opacity-70 text-slate-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase text-[9px] tracking-wide">
                    Option B: Rob House 1
                  </span>
                  {dp[1] === originalArr[1] && (
                    <span className="text-[9px] bg-white text-amber-600 font-extrabold px-1.5 py-0.5 rounded shadow uppercase">
                      Chosen
                    </span>
                  )}
                </div>
                <div className="text-[10px] mt-1 text-left opacity-90">
                  Value = arr[1]
                </div>
                <div className="font-extrabold text-sm text-left mt-0.5">
                  = ${originalArr[1]}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Choice comparison card for house 0 */}
        {activeIdx === 0 && currentStep < steps.length - 1 && (
          <div className="w-full max-w-md p-5 flex flex-col gap-2 mt-2 clay-card animate-scaleUp">
            <span className="text-[10px] font-bold font-mono uppercase text-slate-600 dark:text-slate-350 tracking-wider">
              Robber's Decision at House 0
            </span>
            <div className="p-3 rounded-2xl clay-dp-cell-prev2 text-white text-xs font-mono text-left shadow-lg">
              <span>
                Only one house available. Robbing House 0: Value = arr[0] ={" "}
                <strong>${originalArr[0]}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Summary box for final step */}
        {currentStep === steps.length - 1 && (
          <div className="w-full max-w-md p-5 flex flex-col gap-3 mt-2 text-left clay-summary-green animate-scaleUp">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-black font-mono uppercase text-[10.5px] tracking-wider">
                Robbery Plan Finalized
              </span>
            </div>
            <div className="text-xs font-mono leading-relaxed opacity-95">
              To maximize profit without robbing adjacent houses, the robber
              will loot houses at indices:{" "}
              <strong className="underline decoration-2">
                {robbedHouses.length > 0 ? robbedHouses.join(", ") : "None"}
              </strong>
              .
            </div>
            <div className="text-sm font-mono mt-1 font-black flex justify-between border-t border-emerald-600/20 dark:border-emerald-500/10 pt-3">
              <span>Total Profit:</span>
              <span className="underline decoration-double decoration-2">
                ${dp[n - 1] || 0}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- MATH NCR CANVAS ---
  const renderMathNcrCanvas = () => {
    return renderArrayCanvas();
  };

  // --- EDIT DISTANCE / DP TABLE CANVAS ---
  const renderDpTableCanvas = () => {
    let table = null;
    let s1 = "";
    let s2 = "";
    let activeI = -1;
    let activeJ = -1;

    if (currentSnap.dpState && currentSnap.dpState.table) {
      table = currentSnap.dpState.table;
      s1 = currentSnap.dpState.s1 || "";
      s2 = currentSnap.dpState.s2 || "";
      activeI = currentSnap.dpState.activeI;
      activeJ = currentSnap.dpState.activeJ;
    } else if (data && data.dp) {
      table = data.dp;
      s1 = data.s1 || "";
      s2 = data.s2 || "";
      // Prefer highlights.row/col (set by new step generators) over data.i/j
      activeI = highlights.row !== undefined ? highlights.row : data.i;
      activeJ = highlights.col !== undefined ? highlights.col : data.j;
    }

    if (!table) return renderDpCanvas();
    const m = table.length,
      n2 = table[0]?.length || 0;
    const maxDim = Math.max(m, n2);
    const cellSize = maxDim > 10 ? "w-6 h-6 text-[8px]" : "w-8 h-8 text-xs";

    // Detect if this is a character-based DP (string labels) or numeric (index labels)
    const isCharBased = s1 && /[A-Za-z]/.test(s1);
    // Whether this is the contiguous substring algorithm (distinct match/mismatch coloring)
    const isSubstringType = highlights.type === "substring";
    const hasMatchInfo = isSubstringType && highlights.match !== undefined;
    const isMatch = highlights.match === true;

    const getCellStyle = (i, j) => {
      const isActive = i === activeI && j === activeJ;
      const isRowActive = i === activeI;
      const isColActive = j === activeJ;
      const val = table[i]?.[j];

      if (isActive) {
        // Substring-style: colour green on match, red/dim on mismatch (val===0 and not row 0)
        if (hasMatchInfo) {
          return isMatch
            ? "bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-500/40"
            : "bg-rose-700/80 text-white";
        }
        return "bg-accent text-white";
      }
      // Highlight cells that just became non-zero for substring-style
      if (hasMatchInfo && !isActive && val > 0 && i > 0 && j > 0) {
        return "bg-emerald-900/50 text-emerald-300 border border-emerald-700";
      }
      if (isRowActive || isColActive) return "bg-accent/20 text-accent";
      return "bg-slate-900 text-slate-400";
    };

    // Row label: character or index
    const rowLabel = (i) => {
      if (i === 0) return "ε";
      if (isCharBased) return s1[i - 1];
      return i.toString();
    };

    // Col label: character or index
    const colLabel = (j) => {
      if (j === 0) return "ε";
      if (isCharBased && s2) return s2[j - 1];
      return j.toString();
    };

    const resolvedId = algorithm.counterpartId || algorithm.id;
    const isStringDP =
      (resolvedId === "lcs-dp" ||
        resolvedId === "longest-common-substring" ||
        resolvedId === "longest-common-subsequence" ||
        resolvedId === "edit-distance") &&
      s1 &&
      s2;
    const char1 =
      isStringDP && activeI > 0 && activeI <= s1.length
        ? s1[activeI - 1]
        : null;
    const char2 =
      isStringDP && activeJ > 0 && activeJ <= s2.length
        ? s2[activeJ - 1]
        : null;
    const isMatchChar = char1 && char2 && char1 === char2;

    return (
      <div className="w-full min-h-[18rem] h-auto flex flex-col items-center justify-center p-4">
        <div className="text-[10px] font-mono text-slate-400 mb-2">
          {s1 && s2 ? `"${s1}" → "${s2}"` : "DP Table"}
        </div>
        {hasMatchInfo && (
          <div className="flex gap-3 mb-2 text-[9px] font-mono">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-emerald-600 inline-block" />
              Match (extend)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-rose-700 inline-block" />
              Mismatch (reset to 0)
            </span>
          </div>
        )}
        <div className="overflow-x-auto w-full">
          <table className="border-collapse mx-auto">
            <thead>
              <tr>
                <th className={`${cellSize}`}></th>
                {Array.from({ length: n2 }, (_, j) => (
                  <th
                    key={j}
                    className={`${cellSize} text-center align-middle font-mono font-bold transition-all duration-200 ${j === activeJ ? "bg-accent text-white rounded" : j === 0 ? "text-slate-500" : "text-accent"}`}
                  >
                    {colLabel(j)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr key={i}>
                  <td
                    className={`${cellSize} text-center align-middle font-mono font-bold transition-all duration-200 ${i === activeI ? "bg-accent text-white rounded" : i === 0 ? "text-slate-500" : "text-accent"}`}
                  >
                    {rowLabel(i)}
                  </td>
                  {row.map((val, j) => (
                    <td
                      key={j}
                      className={`${cellSize} text-center align-middle border border-slate-800 font-mono font-bold transition-all duration-200 ${getCellStyle(i, j)}`}
                    >
                      {val === Infinity ? "∞" : val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* String Comparison Dashboard */}
        {isStringDP && (
          <div className="w-full clay-card bg-white dark:bg-[#161b26] p-5 flex flex-col items-center justify-around gap-4 mt-6">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
              String Comparison Dashboard
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 w-full mt-2">
              {/* String 1 Row */}
              <div className="flex flex-col gap-1.5 items-center">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                  String 1 (i)
                </span>
                <div className="flex gap-1 flex-wrap justify-center">
                  {s1.split("").map((char, idx) => {
                    const isCurrent = idx === activeI - 1;
                    return (
                      <div
                        key={idx}
                        className={`w-8 h-8 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center transition-all duration-300 ${
                          isCurrent
                            ? "bg-purple-500 text-white scale-110 shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.4),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.2),_0_4px_10px_rgba(168,85,247,0.35)] animate-pulse"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-transparent shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.02)]"
                        }`}
                      >
                        {char}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Match State */}
              <div className="flex flex-col items-center justify-center p-3.5 clay-inset bg-slate-50 dark:bg-black/10 min-w-[140px]">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-2 font-black">
                  Comparison
                </span>
                {char1 && char2 ? (
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs">
                      <span className="text-purple-500 font-extrabold">
                        {char1}
                      </span>
                      <span className="text-slate-400">
                        {isMatchChar ? "===" : "!=="}
                      </span>
                      <span className="text-purple-500 font-extrabold">
                        {char2}
                      </span>
                    </div>
                    {isMatchChar ? (
                      <span className="text-[10px] text-emerald-500 font-extrabold animate-pulse">
                        Match! (value + 1)
                      </span>
                    ) : (
                      <span className="text-[10px] text-rose-500 dark:text-rose-400 font-extrabold">
                        Mismatch
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-[9px] text-slate-500 font-mono italic">
                    Waiting...
                  </span>
                )}
              </div>

              {/* String 2 Row */}
              <div className="flex flex-col gap-1.5 items-center">
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                  String 2 (j)
                </span>
                <div className="flex gap-1 flex-wrap justify-center">
                  {s2.split("").map((char, idx) => {
                    const isCurrent = idx === activeJ - 1;
                    return (
                      <div
                        key={idx}
                        className={`w-8 h-8 rounded-xl font-mono text-xs font-extrabold flex items-center justify-center transition-all duration-300 ${
                          isCurrent
                            ? "bg-purple-500 text-white scale-110 shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.4),_inset_-1.5px_-1.5px_3px_rgba(0,0,0,0.2),_0_4px_10px_rgba(168,85,247,0.35)] animate-pulse"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-transparent shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)] dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.02)]"
                        }`}
                      >
                        {char}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const getCanvas = () => {
    const resolvedId = algorithm.counterpartId || algorithm.id;
    if (
      resolvedId === "merge-arrays" ||
      resolvedId === "merging-arrays" ||
      resolvedId === "merge-sorted-arrays-pointer"
    )
      return renderMergeArraysCanvas();
    if (resolvedId === "kadane" || resolvedId === "kadanes-algorithm")
      return renderKadaneCanvas();
    if (resolvedId === "counting-sort") return renderCountingSortCanvas();
    if (resolvedId === "trapping-rain-water")
      return renderTrappingRainWaterCanvas();
    if (resolvedId === "splitting-arrays") return renderSplittingArraysCanvas();
    if (resolvedId === "prefix-sum" || resolvedId === "prefix-sum-array")
      return renderAccumulatorSumCanvas("prefix");
    if (resolvedId === "suffix-sum" || resolvedId === "suffix-sum-array")
      return renderAccumulatorSumCanvas("suffix");
    if (
      resolvedId === "difference-array" ||
      resolvedId === "difference-array-prefix"
    )
      return renderDifferenceArrayCanvas();
    if (resolvedId === "array-insertion" || resolvedId === "insertion")
      return renderArrayOperationCanvas("insert");
    if (resolvedId === "array-deletion" || resolvedId === "deletion")
      return renderArrayOperationCanvas("delete");
    if (resolvedId === "array-traversal")
      return renderArrayOperationCanvas("traversal");
    if (resolvedId === "house-robber" || resolvedId === "house-robber-dp")
      return renderHouseRobberCanvas();
    if (resolvedId === "frequency-count") return renderHashCanvas();
    // --- Specific algorithm overrides ---
    if (resolvedId === "level-order-traversal") return renderLevelOrderCanvas();
    if (resolvedId === "bellman-ford") return renderBellmanFordCanvas();
    if (resolvedId === "floyd-warshall") return renderFloydWarshallCanvas();
    if (resolvedId === "pascal-triangle") return renderPascalTriangleCanvas();
    if (resolvedId === "count-set-bits") return renderBitValueCanvas();
    if (resolvedId === "palindrome-check") return renderStringCharCanvas();
    if (resolvedId === "reverse-string") return renderStringCharCanvas();
    if (resolvedId === "generate-parentheses") return renderDpCanvas();
    if (resolvedId === "dp-burst-balloons") return renderBurstBalloonsCanvas();
    if (
      resolvedId === "lcs-dp" ||
      resolvedId === "longest-common-substring" ||
      resolvedId === "dp-matrix-chain-multiplication" ||
      resolvedId === "dp-wildcard-matching" ||
      resolvedId === "dp-egg-dropping" ||
      resolvedId === "dp-palindrome-partitioning"
    )
      return renderDpTableCanvas();
    // New dedicated algorithm routing
    if (resolvedId === "transpose-matrix") return renderTransposeMatrixCanvas();
    if (
      resolvedId === "moores-voting" ||
      resolvedId === "moores-voting-algorithm"
    )
      return renderMooresVotingCanvas();
    if (resolvedId === "fruits-into-baskets")
      return renderFruitsIntoBasketsCanvas();
    if (
      resolvedId === "minimum-window-substring" ||
      resolvedId === "minimum-window-substring-window"
    )
      return renderMinWindowSubstringCanvas();
    if (resolvedId === "group-anagrams") return renderGroupAnagramsCanvas();
    if (resolvedId === "string-traversal") return renderStringTraversalCanvas();
    if (resolvedId === "string-concatenation")
      return renderStringConcatenationCanvas();
    if (resolvedId === "longest-palindromic-substring")
      return renderLongestPalindromeCanvas();
    if (
      resolvedId === "next-greater-element" ||
      resolvedId === "next-smaller-element" ||
      resolvedId === "previous-greater-element" ||
      resolvedId === "previous-smaller-element" ||
      resolvedId === "stock-span" ||
      resolvedId === "remove-k-digits" ||
      resolvedId === "daily-temperatures" ||
      resolvedId.includes("mono")
    )
      return renderMonotonicStackCanvas();
    if (resolvedId.includes("doubly-linked-list"))
      return renderDoublyLinkedListCanvas();
    if (resolvedId.includes("circular-linked-list"))
      return renderCircularLinkedListCanvas();
    if (
      resolvedId === "spiral-matrix" ||
      algorithm.inputType === "spiral-matrix"
    )
      return renderSpiralMatrixCanvas();
    if (
      resolvedId === "matrix-multiplication" ||
      algorithm.inputType === "matrix-mult"
    )
      return renderMatrixMultCanvas();
    if (algorithm.inputType === "z-algorithm") return renderStringAlgoCanvas();
    if (algorithm.inputType === "manacher") return renderStringAlgoCanvas();
    if (algorithm.inputType === "string-compress")
      return renderStringAlgoCanvas();
    if (algorithm.inputType === "lru-cache") return renderLruCacheCanvas();
    if (algorithm.inputType === "math-ncr") return renderArrayCanvas();
    if (algorithm.inputType === "edit-distance") return renderDpTableCanvas();
    if (resolvedId === "edit-distance") return renderDpTableCanvas();
    if (resolvedId === "longest-palindromic-subsequence")
      return renderDpTableCanvas();
    if (
      resolvedId === "zigzag-traversal" ||
      resolvedId === "tree-top-view" ||
      resolvedId === "tree-bottom-view" ||
      resolvedId === "tree-left-view" ||
      resolvedId === "tree-right-view" ||
      resolvedId === "tree-diameter" ||
      resolvedId === "validate-bst" ||
      resolvedId === "kth-smallest" ||
      resolvedId === "fibonacci-recursion"
    )
      return renderTreeCanvas();
    if (
      resolvedId === "b-tree" ||
      resolvedId === "b-plus-tree" ||
      resolvedId === "splay-tree" ||
      resolvedId === "treap" ||
      resolvedId === "kd-tree" ||
      resolvedId === "quad-tree" ||
      resolvedId === "octree" ||
      resolvedId === "interval-tree" ||
      resolvedId === "suffix-tree" ||
      resolvedId === "cartesian-tree"
    ) {
      return renderTreeCanvas();
    }

    switch (algorithm.inputType) {
      case "array":
        return resolvedId === "segment-tree"
          ? renderSegmentTreeCanvas()
          : renderArrayCanvas();
      case "grid":
        if (algorithm.id === "crossword-solver") {
          return renderCrosswordCanvas();
        }
        return renderGridCanvas();
      case "word-search-grid":
        return renderWordSearchCanvas();
      case "string-pattern":
        return renderKmpCanvas();
      case "strings-list":
        return renderStringsListCanvas();
      case "greedy-interval":
        return renderGreedyIntervalCanvas();
      case "greedy-ratio":
        return renderGreedyRatioCanvas();
      case "bit-value":
        return renderBitValueCanvas();
      case "math-gcd":
        return renderMathGcdCanvas();
      case "math-sieve":
        return renderMathSieveCanvas();
      case "search":
        return renderSearchCanvas();
      case "linked-list":
        return renderLinkedListCanvas();
      case "stack":
        return renderStackCanvas();
      case "queue":
        return renderQueueCanvas();
      case "tree":
        return renderTreeCanvas();
      case "graph":
        return resolvedId === "union-find-cycle"
          ? renderDsuCanvas()
          : renderGraphCanvas();
      case "heap":
        return renderHeapCanvas();
      case "recursion":
        if (
          algorithm.id === "fibonacci-recursion" ||
          algorithm.id === "recursion-factorial"
        ) {
          return renderRecursionTreeCanvas();
        }
        if (algorithm.id === "letter-combinations") {
          return renderLetterCombinationsCanvas();
        }
        if (algorithm.id === "palindrome-partitioning") {
          return renderPalindromePartitioningCanvas();
        }
        if (algorithm.id === "permutations") {
          return renderPermutationsCanvas();
        }
        if (algorithm.id === "branch-and-bound-concept") {
          return renderBranchAndBoundCanvas();
        }
        return currentSnap.queensState
          ? renderChessboardCanvas()
          : renderHanoiCanvas();
      case "dp":
        if (resolvedId === "dp-burst-balloons")
          return renderBurstBalloonsCanvas();
        return currentSnap.dpState?.table
          ? renderDpTableCanvas()
          : renderDpCanvas();
      case "hash":
        return renderHashCanvas();
      case "strings":
        return resolvedId === "trie-search"
          ? renderTrieCanvas()
          : renderHashCanvas();
      default:
        return renderArrayCanvas();
    }
  };

  return (
    <div
      className={`skeuo-screen w-full select-none relative group transition-all duration-300 ${isExpanded ? "h-[calc(100vh-420px)] min-h-[350px]" : ""}`}
    >
      <div className="skeuo-screen-overlay" />

      {/* Render canvas or loading/empty state */}
      <div className={isExpanded ? "h-full" : ""}>{getCanvasContent()}</div>

      {/* Full screen toggle button */}
      <button
        onClick={onToggleExpand}
        className="absolute bottom-3 right-3 z-30 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 text-white/80 hover:text-white backdrop-blur-md border border-slate-700/50 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        title={isExpanded ? "Exit Fullscreen View" : "Fullscreen View"}
      >
        {isExpanded ? (
          <Minimize2 className="w-4 h-4" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default VisualizerCanvas;
