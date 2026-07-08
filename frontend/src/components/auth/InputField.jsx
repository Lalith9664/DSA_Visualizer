import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="relative flex flex-col gap-2 w-full font-sans">
      {/* Label and Error Row */}
      <div className="flex justify-between items-center px-1">
        {label && (
          <label
            htmlFor={id}
            className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 transition-colors"
          >
            {label}
          </label>
        )}
        <AnimatePresence>
          {error && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[11px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Input container with Clay Inset Shadow */}
      <div className="relative flex items-center w-full">
        {/* Left Icon */}
        {Icon && (
          <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none transition-colors">
            <Icon className="w-4.5 h-4.5" />
          </div>
        )}

        {/* Input itself */}
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full py-3.5 pl-11 pr-11 text-[13px] rounded-[18px] bg-slate-50 dark:bg-slate-900/60
            text-slate-800 dark:text-slate-100 placeholder-slate-400/80 dark:placeholder-slate-500
            border border-slate-200/60 dark:border-slate-800/80
            shadow-[inset_2px_2px_5px_rgba(0,0,0,0.03),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]
            dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_5px_rgba(255,255,255,0.03)]
            focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-500
            transition-all duration-300
            ${isFocused ? 'ring-4 ring-emerald-500/10 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.02)]' : ''}
            ${error ? 'border-rose-300 dark:border-rose-800 focus:border-rose-400 dark:focus:border-rose-500 ring-rose-500/5' : ''}
          `}
          {...props}
        />

        {/* Right Icon / Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 p-1 rounded-lg text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 focus:outline-none transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
