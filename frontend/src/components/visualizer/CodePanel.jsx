import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import Button from '../common/Button';

const CodePanel = ({ algorithm }) => {
  const [activeLang, setActiveLang] = useState('javascript'); // 'javascript', 'python', 'java', 'cpp', 'pseudocode'
  const [copied, setCopied] = useState(false);

  if (!algorithm) return null;

  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'pseudocode', name: 'Pseudocode' }
  ];

  const getCode = () => {
    if (activeLang === 'pseudocode') {
      return algorithm.pseudocode || '// Pseudocode not available';
    }
    return algorithm.code?.[activeLang] || '// Code snippet not available';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeContent = getCode();
  const codeLines = codeContent.split('\n');

  return (
    <div className="clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4">
      {/* Tab Deck Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pb-1 gap-2">
        <div className="flex items-center gap-2 text-xs font-extrabold text-text-secondary opacity-75 uppercase tracking-wider">
          <Terminal className="w-4 h-4 text-primary" />
          <span>Implementation Panel</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-2 rounded-full hover:bg-primary/10 text-text-secondary hover:text-primary transition-all cursor-pointer"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Language tab selector bar */}
      <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-black/20 p-1.5 rounded-full border border-white/20 dark:border-transparent">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveLang(lang.id)}
            className={`
              flex-1 text-center py-1.5 px-3.5 rounded-full text-xs font-extrabold cursor-pointer select-none transition-all duration-200
              ${activeLang === lang.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-text-secondary hover:text-text-primary'}
            `}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {/* Code viewport terminal style */}
      <div className="relative led-bg rounded-2xl p-4 font-mono text-xs overflow-x-auto shadow-inner text-left max-h-[360px] overflow-y-auto border border-white/20 dark:border-transparent">
        <div className="absolute top-0 left-0 right-0 h-4 bg-slate-900/10 dark:bg-slate-900/50 flex items-center px-4 justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[9px] text-text-secondary dark:text-slate-600 font-bold uppercase tracking-widest">{activeLang}</span>
        </div>
        <div className="mt-4 flex flex-col font-mono leading-relaxed text-slate-700 dark:text-slate-300">
          {codeLines.map((line, idx) => (
            <div
              key={idx}
              className="flex items-center -mx-4 px-4 py-0.5"
            >
              <span className="w-8 text-right text-text-secondary dark:text-slate-600 pr-3.5 select-none font-bold opacity-60">
                {idx + 1}
              </span>
              <span className="whitespace-pre">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePanel;
