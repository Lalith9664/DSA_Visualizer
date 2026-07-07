import React from 'react';

const Slider = ({
  min = 1,
  max = 5,
  step = 0.25,
  value,
  onChange,
  className = '',
  label = 'Speed',
  unit = 'x',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <div className="flex justify-between items-center text-xs font-bold px-1">
        <span className="text-text-secondary opacity-75">{label}</span>
        <span className="font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 shadow-sm text-[10px]">
          {value}{unit}
        </span>
      </div>
      <div className="relative flex items-center h-6">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="
            w-full h-3 bg-bg border border-white/20 rounded-full appearance-none cursor-pointer outline-none
            shadow-[inset_2px_2px_4px_rgba(0,0,0,0.06),_inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
            accent-primary
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-gradient-to-br
            [&::-webkit-slider-thumb]:from-[#6366F1]
            [&::-webkit-slider-thumb]:to-[#8B5CF6]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-white/45
            [&::-webkit-slider-thumb]:shadow-[2px_3px_6px_rgba(99,102,241,0.3)]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:active:scale-90
          "
          {...props}
        />
      </div>
    </div>
  );
};

export default Slider;
