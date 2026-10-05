import React from 'react';
import { ShieldCheck, AlertTriangle, RotateCw, GitCommit, Layers, Activity, Info, CheckCircle2, XCircle } from 'lucide-react';

const RBTStatePanel = ({ treeState, stats }) => {
  const rbtState = treeState?.rbtState;
  if (!rbtState) return null;

  const {
    currentNode,
    parent,
    sibling,
    nearChild,
    farChild,
    currentCase,
    rotation,
    doubleBlackStatus,
    properties = [],
    activeRotation,
    recolorEvent,
  } = rbtState;

  const nodeBadge = (node, label) => {
    if (!node || node.val === undefined || node.val === null) {
      return (
        <div className="flex flex-col items-center p-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-800">
          <span className="text-[9px] uppercase font-bold text-text-secondary opacity-60 mb-0.5">{label}</span>
          <span className="text-xs font-mono font-semibold text-text-secondary opacity-40">None / NIL</span>
        </div>
      );
    }

    const isDouble = node.isDoubleBlack;
    const isRed = node.color === 'red';

    let colorStyle = isRed
      ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30'
      : 'bg-slate-900/15 text-slate-800 dark:text-slate-200 border-slate-700/30';

    if (isDouble) {
      colorStyle = 'bg-cyan-500/20 text-cyan-500 border-cyan-400 ring-2 ring-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.3)] animate-pulse';
    }

    return (
      <div className={`flex flex-col items-center p-2 rounded-xl border ${colorStyle} transition-all duration-200`}>
        <span className="text-[9px] uppercase font-bold opacity-75 mb-0.5">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-sm font-black">{node.val}</span>
          <span className={`text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase ${
            isDouble
              ? 'bg-cyan-500 text-black'
              : isRed
                ? 'bg-rose-600 text-white'
                : 'bg-slate-950 text-white'
          }`}>
            {isDouble ? '2x BLACK' : node.color}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-5 flex flex-col gap-4 text-left border border-white/20 dark:border-white/5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-extrabold text-text-primary tracking-wider uppercase">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Red-Black Deletion State Engine</span>
        </div>
        {doubleBlackStatus && doubleBlackStatus !== 'None' && (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-500 text-[10px] font-black uppercase tracking-wider animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{doubleBlackStatus}</span>
          </div>
        )}
      </div>

      {/* Node State Grid */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-text-secondary opacity-75">
          Active Nodes in Fix-Up Scope
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {nodeBadge(currentNode, 'Current (X)')}
          {nodeBadge(parent, 'Parent (P)')}
          {nodeBadge(sibling, 'Sibling (W)')}
          {nodeBadge(nearChild, 'Near Child')}
          {nodeBadge(farChild, 'Far Child')}
        </div>
      </div>

      {/* Case & Rotation Status Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Case Banner */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/25 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Current Fix-Up Case</span>
          </div>
          <div className="text-xs font-bold text-text-primary">
            {currentCase || 'None (Normal Execution / Search)'}
          </div>
        </div>

        {/* Rotation Banner */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/25 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <RotateCw className="w-3.5 h-3.5" />
            <span>Active Rotation</span>
          </div>
          <div className="text-xs font-bold text-text-primary">
            {rotation || 'None'}
          </div>
        </div>
      </div>

      {/* Live Event Notification (Recolor / Rotation) */}
      {(recolorEvent || activeRotation) && (
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between text-xs font-mono">
          {recolorEvent && (
            <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <span>🎨 Recolor: Node {recolorEvent.nodeVal} ({recolorEvent.from?.toUpperCase()} → {recolorEvent.to?.toUpperCase()})</span>
            </span>
          )}
          {activeRotation && (
            <span className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1.5">
              <span>🔄 {activeRotation.direction?.toUpperCase()} ROTATION on Pivot {activeRotation.pivot}</span>
            </span>
          )}
        </div>
      )}

      {/* 5 Core Properties Validation Deck */}
      <div className="flex flex-col gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-text-secondary opacity-75 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Red-Black Tree Properties Validation</span>
          </span>
          {stats?.blackHeight !== undefined && stats.blackHeight > 0 && (
            <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              Black-Height: {stats.blackHeight}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {properties.map((prop) => {
            const isValid = prop.valid;
            return (
              <div
                key={prop.id}
                className={`p-2 rounded-xl border flex flex-col justify-between gap-1 transition-all ${
                  isValid
                    ? 'bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-500/25 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-500/10 dark:bg-rose-950/30 border-rose-500/40 text-rose-700 dark:text-rose-300 animate-pulse'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {isValid ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                  )}
                  <span className="text-[10px] font-extrabold leading-tight">
                    Property {prop.id}
                  </span>
                </div>
                <div className="text-[9px] font-medium opacity-85 leading-snug">
                  {prop.name}
                </div>
                {prop.note && (
                  <span className="text-[8px] font-mono opacity-70">
                    {prop.note}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Specific Telemetry Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-800/80 text-center">
        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
          <div className="text-[8px] uppercase font-bold text-text-secondary opacity-60">Recolorings</div>
          <div className="font-mono text-xs font-black text-rose-500">{stats?.recolorings || 0}</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
          <div className="text-[8px] uppercase font-bold text-text-secondary opacity-60">Rotations (L/R)</div>
          <div className="font-mono text-xs font-black text-cyan-500">
            {stats?.leftRotations || 0} / {stats?.rightRotations || 0}
          </div>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
          <div className="text-[8px] uppercase font-bold text-text-secondary opacity-60">Fix-Up Iterations</div>
          <div className="font-mono text-xs font-black text-purple-500">{stats?.fixupIterations || 0}</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
          <div className="text-[8px] uppercase font-bold text-text-secondary opacity-60">Tree Height</div>
          <div className="font-mono text-xs font-black text-emerald-500">{stats?.treeHeight || 0}</div>
        </div>
      </div>
    </div>
  );
};

export default RBTStatePanel;
