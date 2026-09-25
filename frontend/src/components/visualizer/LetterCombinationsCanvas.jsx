import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVisualizer } from "../../context/VisualizerContext";
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  GitBranch,
  Sliders,
  Layers,
  ArrowRight,
  Search,
  Zap,
  Info,
  CheckCircle2,
  Cpu,
} from "lucide-react";

// Phone Keypad standard mapping layout
const KEYPAD_LAYOUT = [
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
  { num: "0", letters: "+" },
  { num: "#", letters: "⌫" },
];

const DIGIT_COLORS = [
  {
    bg: "bg-violet-500/15",
    border: "border-violet-500/40",
    text: "text-violet-400",
    badge: "bg-violet-500 text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]",
    lightText: "text-violet-600 dark:text-violet-400",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    bg: "bg-amber-500/15",
    border: "border-amber-500/40",
    text: "text-amber-400",
    badge: "bg-amber-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]",
    lightText: "text-amber-600 dark:text-amber-400",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  {
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/40",
    text: "text-cyan-400",
    badge: "bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]",
    lightText: "text-cyan-600 dark:text-cyan-400",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  {
    bg: "bg-pink-500/15",
    border: "border-pink-500/40",
    text: "text-pink-400",
    badge: "bg-pink-500 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]",
    lightText: "text-pink-600 dark:text-pink-400",
    glow: "rgba(236, 72, 153, 0.4)",
  },
];

const PRESET_OPTIONS = [
  { label: "23", desc: "Classic (9 combos)" },
  { label: "4", desc: "Single Digit (3 combos)" },
  { label: "79", desc: "4×4 Matrix (16 combos)" },
  { label: "234", desc: "3 Digits (27 combos)" },
  { label: "99", desc: "Double 4s (16 combos)" },
];

export default function LetterCombinationsCanvas({
  snapData = {},
  isExpanded = false,
}) {
  const { customInput, setCustomInput } = useVisualizer();
  const [viewMode, setViewMode] = useState("pipeline"); // 'pipeline' | 'tree'
  const [copied, setCopied] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [lastDialedKey, setLastDialedKey] = useState(null);

  const digits = snapData.digits !== undefined ? snapData.digits : "23";
  const currentPrefix = snapData.currentPrefix || "";
  const activeDigit = snapData.activeDigit || "";
  const activeDigitIndex = snapData.activeDigitIndex !== undefined ? snapData.activeDigitIndex : -1;
  const activeChar = snapData.activeChar || "";
  const combinations = snapData.combinations || [];
  const branchPath = snapData.branchPath || [];
  const totalExpected = snapData.totalExpected || (digits ? digits.split("").reduce((acc, d) => {
    const key = KEYPAD_LAYOUT.find((k) => k.num === d);
    return acc * (key?.letters?.length || 1);
  }, 1) : 0);
  const actionType = snapData.actionType || "init";

  const progressPercent = totalExpected > 0 ? Math.min(100, Math.round((combinations.length / totalExpected) * 100)) : 0;

  // Copy handler
  const handleCopy = () => {
    if (combinations.length === 0) return;
    navigator.clipboard.writeText(combinations.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dial keypad button click handler
  const handleDialKey = (keyNum) => {
    setLastDialedKey(keyNum);
    setTimeout(() => setLastDialedKey(null), 300);

    if (keyNum === "#") {
      // Backspace
      const cur = (customInput || digits).replace(/[^2-9]/g, "");
      const next = cur.slice(0, -1);
      setCustomInput(next || "2");
      return;
    }

    if (keyNum === "*") {
      // Clear
      setCustomInput("");
      return;
    }

    if (!["2", "3", "4", "5", "6", "7", "8", "9"].includes(keyNum)) {
      return;
    }

    const cur = (customInput || digits).replace(/[^2-9]/g, "");
    if (cur.length >= 4) {
      setCustomInput(keyNum);
    } else {
      setCustomInput(cur + keyNum);
    }
  };

  // Filter combinations
  const filteredCombinations = filterText
    ? combinations.filter((c) => c.toLowerCase().includes(filterText.toLowerCase()))
    : combinations;

  // Build recursive decision tree nodes for visual graph
  const buildTreeLevels = () => {
    if (!digits) return [];
    const digitArr = digits.split("");
    const levels = [];

    // Level 0: Root
    levels.push([
      {
        id: "root",
        label: "ROOT",
        prefix: "",
        isActive: branchPath.length === 0 && currentPrefix === "",
        isPassed: true,
        isLeaf: false,
      },
    ]);

    // Build levels dynamically
    let prevPrefixes = [""];
    for (let dIdx = 0; dIdx < Math.min(digitArr.length, 3); dIdx++) {
      const d = digitArr[dIdx];
      const mapping = KEYPAD_LAYOUT.find((k) => k.num === d)?.letters || "";
      const currentLevelNodes = [];
      const nextPrefixes = [];

      for (let p of prevPrefixes) {
        for (let char of mapping) {
          const newPrefix = p + char;
          nextPrefixes.push(newPrefix);

          const isCurrentActive = currentPrefix === newPrefix;
          const isInBranch = branchPath.some((b) => b.idx === dIdx && b.char === char);
          const isResult = combinations.includes(newPrefix);

          currentLevelNodes.push({
            id: `${dIdx}-${newPrefix}`,
            char,
            digit: d,
            prefix: newPrefix,
            dIdx,
            isActive: isCurrentActive || (activeDigitIndex === dIdx && activeChar === char),
            isInBranch,
            isResult,
            isLeaf: dIdx === digitArr.length - 1,
          });
        }
      }
      prevPrefixes = nextPrefixes;
      levels.push(currentLevelNodes);
    }
    return levels;
  };

  const treeLevels = buildTreeLevels();

  return (
    <div className="w-full flex flex-col gap-3 font-sans text-left relative select-none">
      {/* ── 1. COMPACT TOP TOOLBAR (Sequence + Presets + Mode Tabs) ── */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        {/* Left: Dialed Sequence + Total Formula */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold font-mono uppercase text-slate-400">
              Input:
            </span>
            <div className="flex items-center gap-1">
              {digits ? (
                digits.split("").map((d, idx) => {
                  const colorScheme = DIGIT_COLORS[idx % DIGIT_COLORS.length];
                  const isCurrentActiveDigit = d === activeDigit && idx === activeDigitIndex;
                  return (
                    <span
                      key={`${d}-${idx}`}
                      className={`font-mono text-xs font-black px-2 py-0.5 rounded-md border ${
                        isCurrentActiveDigit
                          ? `${colorScheme.badge} scale-105`
                          : `${colorScheme.bg} ${colorScheme.border} ${colorScheme.text}`
                      }`}
                    >
                      {d}
                    </span>
                  );
                })
              ) : (
                <span className="text-[10px] font-mono text-slate-500 italic">None</span>
              )}
            </div>
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
            Total: <span className="font-bold text-violet-500">{totalExpected} combinations</span>
          </span>
        </div>

        {/* Center/Right: Presets & Mode Toggle */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Presets */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1 hidden md:inline">
              Presets:
            </span>
            {PRESET_OPTIONS.map((p) => (
              <button
                key={p.label}
                onClick={() => setCustomInput(p.label)}
                title={p.desc}
                className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  (customInput || digits) === p.label
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-850"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* View Tab Toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setViewMode("pipeline")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "pipeline"
                  ? "bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Pipeline</span>
            </button>
            <button
              onClick={() => setViewMode("tree")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "tree"
                  ? "bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Decision Tree</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. FULL-WIDTH SPACIOUS DECISION REELS & PREFIX STREAM ── */}
      {viewMode === "pipeline" ? (
        <div className="flex flex-col gap-3">
          {/* Decision Slots Ribbon (Spacious Horizontal Flow) */}
          <div className="p-4 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                  Backtracking Decision Stages
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                <span>
                  Active Depth: <span className="font-bold text-violet-500">{activeDigitIndex >= 0 ? activeDigitIndex + 1 : 0} / {digits.length}</span>
                </span>
              </div>
            </div>

            {/* Stages Row with Connecting Arrows */}
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto py-1">
              {digits.split("").map((digitChar, sIdx) => {
                const colorScheme = DIGIT_COLORS[sIdx % DIGIT_COLORS.length];
                const keyInfo = KEYPAD_LAYOUT.find((k) => k.num === digitChar);
                const mappedChars = keyInfo?.letters || "";
                const isSlotActive = activeDigitIndex === sIdx;
                const slotChosen = branchPath.find((b) => b.idx === sIdx);

                return (
                  <React.Fragment key={`${digitChar}-${sIdx}`}>
                    {sIdx > 0 && (
                      <div className="flex items-center text-slate-300 dark:text-slate-700 flex-shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`flex-1 min-w-[130px] rounded-xl p-3 border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden ${
                        isSlotActive
                          ? "bg-amber-500/10 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30"
                          : slotChosen
                          ? `${colorScheme.bg} ${colorScheme.border}`
                          : "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 opacity-80"
                      }`}
                    >
                      {/* Slot Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 text-[9px] font-mono font-black flex items-center justify-center text-slate-600 dark:text-slate-400">
                            {sIdx + 1}
                          </span>
                          <span className="text-[10px] font-black uppercase text-slate-700 dark:text-slate-300 font-mono">
                            Key [{digitChar}]
                          </span>
                        </div>

                        {/* Status badge */}
                        {isSlotActive ? (
                          <span className="px-1.5 py-0.2 text-[8px] font-bold uppercase rounded bg-amber-500 text-white animate-pulse">
                            Active
                          </span>
                        ) : slotChosen ? (
                          <span className="px-1.5 py-0.2 text-[8px] font-bold uppercase rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" /> Locked
                          </span>
                        ) : (
                          <span className="text-[8px] font-mono text-slate-400 uppercase">
                            Queued
                          </span>
                        )}
                      </div>

                      {/* Letter Choice Tiles */}
                      <div className="flex items-center gap-1.5 justify-center py-0.5">
                        {mappedChars.split("").map((c) => {
                          const isSelected = slotChosen?.char === c;
                          const isCurrentlyBeingTried = isSlotActive && activeChar === c;

                          return (
                            <motion.div
                              key={c}
                              animate={{
                                scale: isCurrentlyBeingTried ? 1.15 : 1,
                                y: isCurrentlyBeingTried ? -2 : 0,
                              }}
                              className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-black text-xs uppercase border transition-all ${
                                isCurrentlyBeingTried
                                  ? "bg-amber-500 border-amber-400 text-white shadow-[0_0_10px_rgba(245,158,11,0.6)] z-10"
                                  : isSelected
                                  ? `${colorScheme.badge}`
                                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                              }`}
                            >
                              {c}
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Sub-label */}
                      <div className="text-[8px] font-mono text-center text-slate-400 truncate">
                        {slotChosen ? (
                          <span className="text-emerald-500 font-bold">Selected: '{slotChosen.char}'</span>
                        ) : isSlotActive ? (
                          <span className="text-amber-500 font-bold">Trying: '{activeChar || "..."}'</span>
                        ) : (
                          `Pool: [${mappedChars.split("").join(", ")}]`
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Current Path & Backtracking State Ribbon */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Current Prefix Assembly */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-violet-400" /> Prefix:
              </span>
              <div className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 shadow-inner flex items-center gap-1 min-h-[36px]">
                <span className="text-slate-500 font-mono text-base font-bold">"</span>
                {currentPrefix ? (
                  currentPrefix.split("").map((ch, idx) => {
                    const colorScheme = DIGIT_COLORS[idx % DIGIT_COLORS.length];
                    return (
                      <motion.span
                        key={`${ch}-${idx}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`font-mono text-base font-black px-1.5 py-0.2 rounded ${colorScheme.badge}`}
                      >
                        {ch}
                      </motion.span>
                    );
                  })
                ) : (
                  <span className="text-slate-600 font-mono text-xs italic">
                    (empty)
                  </span>
                )}
                <span className="text-slate-500 font-mono text-base font-bold">"</span>
                <span className="w-1.5 h-4 bg-amber-400 rounded-full animate-pulse ml-0.5" />
              </div>

              {actionType === "leaf_found" && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center gap-1 text-[11px] font-bold font-mono"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Added!</span>
                </motion.div>
              )}
            </div>

            {/* Backtracking Action Badge */}
            <div className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
              {actionType === "leaf_found" ? (
                <span className="text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <Check className="w-3 h-3" /> Leaf Found: "{currentPrefix}"
                </span>
              ) : actionType === "pick_char" ? (
                <span className="text-amber-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3" /> Appending '{activeChar}' for Key [{activeDigit}]
                </span>
              ) : actionType === "backtrack" ? (
                <span className="text-pink-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <RotateCcw className="w-3 h-3" /> Backtrack: Pop '{activeChar}'
                </span>
              ) : actionType === "complete" ? (
                <span className="text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> DFS Finished ({combinations.length} results)
                </span>
              ) : (
                <span className="text-slate-400 font-mono text-xs font-bold">
                  Exploring Keypad Branches...
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Decision Tree View */
        <div className="p-4 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col gap-3 min-h-[260px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-violet-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                Recursive Exploration Tree
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Total Leaves: {totalExpected}
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center py-2 overflow-x-auto">
            {treeLevels.map((lvlNodes, lIdx) => (
              <div key={lIdx} className="flex flex-col items-center gap-1.5 w-full">
                <div className="flex items-center gap-2 w-full px-4">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    {lIdx === 0 ? "Root Level" : `Stage ${lIdx}: Key [${digits[lIdx - 1]}]`}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-center max-w-full">
                  {lvlNodes.map((node) => {
                    const isNodeActive = node.isActive;
                    const isNodeResult = node.isResult;

                    return (
                      <motion.div
                        key={node.id}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: isNodeActive ? 1.1 : 1 }}
                        className={`px-2.5 py-1 rounded-xl font-mono text-xs font-black border transition-all duration-300 flex items-center gap-1.5 ${
                          isNodeActive
                            ? "bg-amber-500 border-amber-400 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)] z-10 scale-105"
                            : isNodeResult
                            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                            : node.isInBranch
                            ? "bg-violet-500/20 border-violet-500/40 text-violet-600 dark:text-violet-400"
                            : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 opacity-60"
                        }`}
                      >
                        {node.char ? (
                          <>
                            <span className="text-[9px] opacity-70">+{node.char}</span>
                            <span>"{node.prefix}"</span>
                          </>
                        ) : (
                          <span>&Oslash; Root</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── 3. BALANCED LOWER DECK: COMPACT PHONE KEYPAD + EXPANSIVE RESULTS POOL ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left: Compact Tactile Phone Keypad (5 Cols) */}
        <div className="md:col-span-5 flex flex-col gap-2 p-3.5 rounded-2xl bg-slate-950 border border-slate-850 shadow-md">
          {/* Handset Header */}
          <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              KEYPAD DIALER
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleDialKey("#")}
                title="Backspace"
                className="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
              >
                ⌫ Back
              </button>
              <button
                onClick={() => handleDialKey("*")}
                title="Clear"
                className="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Keypad 3x4 Matrix */}
          <div className="grid grid-cols-3 gap-1.5 w-full">
            {KEYPAD_LAYOUT.map((k) => {
              const isTarget = digits.includes(k.num);
              const isActive = k.num === activeDigit;
              const isDialPressed = lastDialedKey === k.num;
              const targetIdx = digits.indexOf(k.num);
              const colorScheme = targetIdx !== -1 ? DIGIT_COLORS[targetIdx % DIGIT_COLORS.length] : null;

              return (
                <motion.button
                  key={k.num}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleDialKey(k.num)}
                  className={`aspect-[1.3/1] rounded-xl flex flex-col items-center justify-center p-1 transition-all duration-200 relative group cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-br from-amber-500/30 to-amber-600/15 border border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                      : isTarget
                      ? `${colorScheme?.bg} border ${colorScheme?.border} ${colorScheme?.text} shadow-sm`
                      : isDialPressed
                      ? "bg-slate-800 border border-slate-600 text-white shadow-inner"
                      : "bg-slate-900 hover:bg-slate-850 border border-slate-800/80 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className={`text-sm font-black font-mono leading-tight ${
                    isActive ? "text-amber-300" : isTarget ? colorScheme?.text : "text-slate-300"
                  }`}>
                    {k.num}
                  </span>
                  {k.letters ? (
                    <div className="flex items-center gap-0.5">
                      {k.letters.split("").map((c) => {
                        const isCharActive = isActive && activeChar === c;
                        const isCharInPrefix = currentPrefix.includes(c);
                        return (
                          <span
                            key={c}
                            className={`text-[6.5px] uppercase font-bold tracking-wider px-0.5 rounded-2xs ${
                              isCharActive
                                ? "bg-amber-400 text-slate-950 font-black"
                                : isCharInPrefix
                                ? "text-emerald-400 font-bold"
                                : "text-slate-500"
                            }`}
                          >
                            {c}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-[6.5px] font-mono text-slate-600 leading-tight">&bull;</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Right: Expansive Results Pool (7 Cols) */}
        <div className="md:col-span-7 flex flex-col gap-2.5 p-3.5 rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm justify-between">
          {/* Gallery Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
                Generated Results Pool
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                {combinations.length} / {totalExpected}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {combinations.length > 6 && (
                <div className="relative">
                  <Search className="w-3 h-3 absolute left-2 top-2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Filter..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="pl-6 pr-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-violet-500 w-20 sm:w-24"
                  />
                </div>
              )}

              <button
                onClick={handleCopy}
                disabled={combinations.length === 0}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 transition-all cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy All</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-850">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400 rounded-full"
            />
          </div>

          {/* Combinations Chips Grid */}
          <div className="flex gap-1.5 flex-wrap max-h-36 overflow-y-auto py-1 pr-1">
            <AnimatePresence>
              {filteredCombinations.map((comb, cIdx) => {
                const isLatest = comb === snapData.latestCombination || (cIdx === combinations.length - 1 && actionType === "leaf_found");
                return (
                  <motion.div
                    key={comb}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className={`px-2 py-0.5 rounded-lg font-mono text-[11px] font-black border flex items-center gap-1 transition-all duration-200 ${
                      isLatest
                        ? "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)] scale-105"
                        : "bg-slate-100 dark:bg-slate-950/80 hover:bg-emerald-500/10 border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="text-[8px] opacity-50 font-normal">
                      #{cIdx + 1}
                    </span>
                    <div className="flex items-center">
                      {comb.split("").map((ch, chIdx) => {
                        const col = DIGIT_COLORS[chIdx % DIGIT_COLORS.length];
                        return (
                          <span
                            key={chIdx}
                            className={isLatest ? "text-white" : col.lightText}
                          >
                            {ch}
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {combinations.length === 0 && (
              <div className="w-full flex items-center justify-center py-5 text-slate-400 font-mono text-xs gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>No combinations generated yet. Press Play to start backtracking.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
