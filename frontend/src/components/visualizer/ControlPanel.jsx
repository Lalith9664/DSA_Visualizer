import React from 'react';
import { useVisualizer } from '../../context/VisualizerContext';
import Button from '../common/Button';
import Slider from '../common/Slider';
import { Play, Pause, RotateCcw, SkipForward, SkipBack, Shuffle, Trash2 } from 'lucide-react';

const ControlPanel = ({
  onGenerate,
  onRandomInput,
  onClear,
  canPrev,
  canNext
}) => {
  const {
    isPlaying,
    setIsPlaying,
    speed,
    setSpeed,
    resetVisualizer,
    nextStep,
    prevStep
  } = useVisualizer();

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const speedMultipliers = [0.25, 0.5, 1, 2, 5];

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Cockpit Label */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs font-bold text-text-secondary opacity-75 tracking-wider">
          CONTROL CONSOLE
        </span>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg dark:bg-black/10 border border-panel-border shadow-inner">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-success shadow-[0_0_6px_#22c55e]' : 'bg-red-500 shadow-[0_0_6px_#ef4444]'} animate-pulse`} />
          <span className="text-[9px] font-mono font-bold text-text-secondary uppercase">
            {isPlaying ? 'RUNNING' : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Button Deck Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {/* Play/Pause */}
        <Button
          onClick={handlePlayToggle}
          variant={isPlaying ? 'warning' : 'success'}
          className="col-span-2 sm:col-span-2 lg:col-span-2 py-2.5 font-bold shadow-md clay-btn"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Start</span>
            </>
          )}
        </Button>

        {/* Step Backward */}
        <Button
          onClick={prevStep}
          disabled={isPlaying || !canPrev}
          variant="default"
          className="clay-btn"
          title="Previous Step"
        >
          <SkipBack className="w-4 h-4" />
          <span>Step Back</span>
        </Button>

        {/* Step Forward */}
        <Button
          onClick={nextStep}
          disabled={isPlaying || !canNext}
          variant="default"
          className="clay-btn"
          title="Next Step"
        >
          <SkipForward className="w-4 h-4" />
          <span>Step Next</span>
        </Button>

        {/* Reset */}
        <Button
          onClick={resetVisualizer}
          variant="default"
          className="clay-btn"
          title="Reset Sequence"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </Button>

        {/* Random Input */}
        <Button
          onClick={onRandomInput}
          variant="primary"
          className="clay-btn"
          title="Load Random Array"
        >
          <Shuffle className="w-4 h-4" />
          <span>Random</span>
        </Button>

        {/* Clear */}
        <Button
          onClick={onClear}
          variant="danger"
          className="clay-btn"
          title="Clear Array"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear</span>
        </Button>
      </div>

      {/* Speed dial and presets row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-2">
        {/* Presets */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <span className="text-xs font-bold text-text-secondary opacity-75 mr-1">Presets:</span>
          <div className="flex gap-1">
            {speedMultipliers.map((m) => (
              <button
                key={m}
                onClick={() => setSpeed(m)}
                className={`
                  px-3 py-1 text-[10px] font-mono font-bold rounded-full cursor-pointer select-none transition-all duration-200 border border-transparent
                  ${speed === m
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-black/25 text-text-secondary hover:text-text-primary hover:-translate-y-0.5'}
                `}
              >
                {m}x
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <Slider
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          min={0.25}
          max={5}
          step={0.25}
          label="Custom Engine Speed"
          className="w-full lg:max-w-xs"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
