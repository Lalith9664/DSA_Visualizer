import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisualizer } from '../../context/VisualizerContext';
import { CATEGORIES, ALGORITHMS } from '../../data/algorithmsData';
import { 
  Database, Link2, Layers, Repeat, Network, Key, Sliders, 
  Search, GitFork, ArrowRightLeft, LayoutGrid, Heart, History, Award, X, Home, Cpu
} from 'lucide-react';

// Icon Map for Categories
const ICON_MAP = {
  arrays: Database,
  "linked-list": Link2,
  stack: Layers,
  queue: ArrowRightLeft,
  trees: GitFork,
  graphs: Network,
  hashing: Key,
  recursion: Repeat,
  "dynamic-programming": LayoutGrid,
  sorting: Sliders,
  searching: Search,
  heaps: Cpu
};

const BottomNav = () => {
  const { favorites, recentlyViewed } = useVisualizer();
  const [activeTab, setActiveTab] = useState(null); // 'bookmarks', 'explore', 'history', 'progress', null
  const navigate = useNavigate();
  const location = useLocation();

  // Compute learning progress dummy based on viewed/favorited algorithms
  const completedCount = Math.min(10, new Set([...recentlyViewed, ...favorites]).size);
  const totalAlgos = 12;
  const progressPercent = Math.round((completedCount / totalAlgos) * 100);

  const handleNavClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const getSheetTitle = () => {
    switch (activeTab) {
      case 'bookmarks':
        return 'Bookmarked Instruments';
      case 'explore':
        return 'Algorithm Categories';
      case 'history':
        return 'Recently Viewed';
      case 'progress':
        return 'Console Progress';
      default:
        return '';
    }
  };

  const renderSheetContent = () => {
    switch (activeTab) {
      case 'explore':
        return (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.id] || LayoutGrid;
              const isActive = location.pathname === `/category/${cat.id}`;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    navigate(`/category/${cat.id}`);
                    setActiveTab(null);
                  }}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl text-left transition-all border
                    ${isActive 
                      ? 'bg-accent/10 border-accent text-accent' 
                      : 'bg-bg hover:bg-black/5 dark:hover:bg-white/5 border-panel-border/20 text-text-primary'}
                  `}
                >
                  <div className="w-8 h-8 rounded-lg skeuo-inset-panel flex items-center justify-center bg-panel">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-text-secondary'}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight">{cat.name}</span>
                    <span className="text-[9px] text-text-secondary font-mono mt-0.5">{cat.algorithmsCount} items</span>
                  </div>
                </button>
              );
            })}
          </div>
        );

      case 'bookmarks':
        return (
          <div className="flex flex-col gap-2 pt-2">
            {favorites.map((favId) => {
              const algo = ALGORITHMS[favId];
              if (!algo) return null;
              return (
                <button
                  key={favId}
                  onClick={() => {
                    navigate(`/visualizer/${favId}`);
                    setActiveTab(null);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg border border-panel-border/20 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <span className="text-xs font-bold text-text-primary">{algo.name}</span>
                  <span className="text-[9px] text-text-secondary bg-panel px-2 py-0.5 rounded font-mono uppercase">{algo.difficulty}</span>
                </button>
              );
            })}
            {favorites.length === 0 && (
              <div className="text-center py-8 text-xs text-text-secondary font-mono">
                NO BOOKMARKS SAVED
              </div>
            )}
          </div>
        );

      case 'history':
        return (
          <div className="flex flex-col gap-2 pt-2">
            {recentlyViewed.map((recId) => {
              const algo = ALGORITHMS[recId];
              if (!algo) return null;
              return (
                <button
                  key={recId}
                  onClick={() => {
                    navigate(`/visualizer/${recId}`);
                    setActiveTab(null);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg border border-panel-border/20 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <span className="text-xs font-bold text-text-primary">{algo.name}</span>
                  <span className="text-[9px] text-text-secondary bg-panel px-2 py-0.5 rounded font-mono uppercase">{algo.difficulty}</span>
                </button>
              );
            })}
            {recentlyViewed.length === 0 && (
              <div className="text-center py-8 text-xs text-text-secondary font-mono">
                NO RECENTLY VIEWED ITEMS
              </div>
            )}
          </div>
        );

      case 'progress':
        return (
          <div className="pt-2 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-bold text-text-primary">
              <span className="text-sm">Console Completion</span>
              <span className="font-mono text-warning text-sm">{progressPercent}%</span>
            </div>
            <div className="h-6 bg-[#020617] rounded-lg p-0.5 flex gap-0.5 overflow-hidden shadow-inner">
              {Array.from({ length: 10 }).map((_, idx) => {
                const isFilled = idx < Math.round(progressPercent / 10);
                return (
                  <div
                    key={idx}
                    className={`
                      flex-1 h-full rounded-[2px] transition-all duration-300
                      ${isFilled 
                        ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_6px_#10b981]' 
                        : 'bg-slate-900'}
                    `}
                  />
                );
              })}
            </div>
            <span className="text-xs text-text-secondary text-center font-bold">
              {completedCount} of {totalAlgos} Concepts Explored
            </span>
          </div>
        );
      
      default:
        return null;
    }
  };


  return (
    <>
      {/* 1. Nav bar dock */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 h-16 clay-card bg-white/70 dark:bg-[#161b26]/75 backdrop-blur-md z-50 flex items-center justify-around px-2 shadow-lg">
        {/* Tab 1: Home */}
        <button
          onClick={() => {
            navigate('/dashboard');
            setActiveTab(null);
          }}
          className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all w-12 ${location.pathname === '/dashboard' && !activeTab ? 'text-primary scale-105' : 'text-text-secondary'}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[8px] font-bold font-mono uppercase">Home</span>
        </button>

        {/* Tab 2: Bookmarks */}
        <button
          onClick={() => handleNavClick('bookmarks')}
          className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all w-12 ${activeTab === 'bookmarks' ? 'text-primary scale-105' : 'text-text-secondary'}`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-[8px] font-bold font-mono uppercase">Saved</span>
        </button>

        {/* Tab 3: Center Floating Toggle Button (Explore / Categories) */}
        <div className="relative flex items-center justify-center w-16 h-full">
          <button
            onClick={() => handleNavClick('explore')}
            style={{ 
              backgroundColor: activeTab === 'explore' ? 'var(--color-primary)' : 'var(--color-panel)',
              color: activeTab === 'explore' ? '#ffffff' : 'var(--color-text-secondary)'
            }}
            className={`
              absolute -top-5 w-14 h-14 rounded-full border-4 border-bg flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 cursor-pointer
              ${activeTab === 'explore' 
                ? 'shadow-[0_4px_12px_rgba(99,102,241,0.4)]' 
                : 'hover:text-primary shadow-[0_2px_8px_rgba(0,0,0,0.1)]'}
            `}
          >
            <LayoutGrid className="w-6 h-6" />
          </button>
        </div>

        {/* Tab 4: History */}
        <button
          onClick={() => handleNavClick('history')}
          className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all w-12 ${activeTab === 'history' ? 'text-primary scale-105' : 'text-text-secondary'}`}
        >
          <History className="w-5 h-5" />
          <span className="text-[8px] font-bold font-mono uppercase">Recent</span>
        </button>

        {/* Tab 5: Progress */}
        <button
          onClick={() => handleNavClick('progress')}
          className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all w-12 ${activeTab === 'progress' ? 'text-primary scale-105' : 'text-text-secondary'}`}
        >
          <Award className="w-5 h-5" />
          <span className="text-[8px] font-bold font-mono uppercase">Stats</span>
        </button>
      </nav>

      {/* Animated Bottom Drawer Sheet Panel */}
      <AnimatePresence>
        {activeTab && (
          <>
            {/* Backdrop Solid Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTab(null)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Bottom Sheet Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="lg:hidden fixed bottom-24 left-4 right-4 max-h-[60vh] clay-card z-40 rounded-[28px] p-6 overflow-y-auto flex flex-col gap-4 shadow-xl bg-white dark:bg-[#161b26]"
            >
              {/* Handlebar indicator */}
              <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-1 flex-shrink-0" />
              
              {/* Drawer Title Row */}
              <div className="flex justify-between items-center border-b border-panel-border/10 pb-2 flex-shrink-0">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-text-primary">
                  {getSheetTitle()}
                </h3>
                <button 
                  onClick={() => setActiveTab(null)}
                  className="w-8 h-8 rounded-full bg-bg flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer active:scale-95 transition-all"
                >
                  <X className="w-4 h-4 text-text-secondary" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="overflow-y-auto max-h-[40vh] pr-1">
                {renderSheetContent()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNav;
