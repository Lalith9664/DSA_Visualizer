import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  ArrowRight, 
  X, 
  Sparkles, 
  AlertTriangle, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle,
  Laptop
} from 'lucide-react';

import { useVisualizer } from '../../context/VisualizerContext';

const DesktopModeNotification = () => {
  const { isFullscreen } = useVisualizer();
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeTab, setActiveTab] = useState('chrome'); // 'chrome' | 'safari' | 'other'

  useEffect(() => {
    const checkScreen = () => {
      // Check if width is below desktop threshold (1024px)
      const isNarrow = window.innerWidth < 1024;
      setIsMobileScreen(isNarrow);

      // Check if user already dismissed modal in this session
      const modalDismissed = sessionStorage.getItem('dsa_desktop_modal_dismissed');
      if (isNarrow && !modalDismissed) {
        setShowModal(true);
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    
    const handleOpenEvent = () => {
      setShowModal(true);
    };
    window.addEventListener('open-desktop-guide', handleOpenEvent);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('open-desktop-guide', handleOpenEvent);
    };
  }, []);

  const handleDismissModal = (remember = true) => {
    setShowModal(false);
    if (remember) {
      sessionStorage.setItem('dsa_desktop_modal_dismissed', 'true');
    }
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem('dsa_desktop_banner_dismissed', 'true');
  };

  const handleOpenGuide = () => {
    setShowModal(true);
  };

  // If not a mobile screen or fullscreen mode is active, do not render anything
  if (!isMobileScreen || isFullscreen) {
    return null;
  }

  return (
    <>
      {/* 1. Sleek Sticky Notification Banner for Mobile Screens */}
      {showBanner && !showModal && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full mb-4 px-2 sm:px-0"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-emerald-500/15 dark:from-amber-500/10 dark:via-purple-500/10 dark:to-emerald-500/10 border border-amber-500/30 dark:border-amber-400/20 p-3 sm:p-4 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-text-primary flex items-center gap-1.5 flex-wrap">
                    <span>Desktop Mode Recommended</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300">
                      Best Experience
                    </span>
                  </p>
                  <p className="text-[11px] text-text-secondary truncate sm:whitespace-normal mt-0.5">
                    For full interactive animations, code editor & canvases, switch your browser to <b>Desktop site</b>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleOpenGuide}
                  className="px-2.5 py-1.5 rounded-lg bg-primary/15 hover:bg-primary/25 text-primary text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>How to Switch</span>
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleDismissBanner}
                  className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-text-secondary hover:text-text-primary transition-all cursor-pointer"
                  title="Dismiss notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Full Interactive Guidance Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleDismissModal(true)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg clay-card bg-white/95 dark:bg-[#161B26]/95 border border-purple-500/30 dark:border-purple-400/20 rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 flex flex-col gap-5 overflow-hidden"
            >
              {/* Background ambient decorative glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header: Icon Graphic & Close */}
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-purple-500/30">
                    <Smartphone className="w-5 h-5 text-text-secondary opacity-70" />
                    <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
                    <Monitor className="w-6 h-6 text-primary shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/20 flex items-center gap-1 w-fit mb-1">
                      <Sparkles className="w-3 h-3" />
                      Display Recommendation
                    </span>
                    <h2 className="text-base sm:text-lg font-black text-text-primary leading-tight">
                      Use Desktop Mode
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => handleDismissModal(true)}
                  className="p-2 rounded-full bg-bg hover:bg-black/5 dark:hover:bg-white/5 text-text-secondary hover:text-text-primary transition-all cursor-pointer"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Explanatory Description */}
              <div className="relative z-10 text-xs text-text-secondary leading-relaxed bg-bg/60 dark:bg-black/20 p-3.5 rounded-2xl border border-panel-border/30">
                <p>
                  <strong className="text-text-primary">DSA Visualizer</strong> is designed for larger desktop displays. Complex tree hierarchies, memory graphs, multi-step code tracers, and interactive algorithm animations are best experienced in <b>Desktop Mode</b> or on a computer screen.
                </p>
              </div>

              {/* Browser Instructions Tabs */}
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                    <span>How to enable on your phone:</span>
                  </span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-bg/80 dark:bg-black/30 border border-panel-border/30 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('chrome')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeTab === 'chrome'
                        ? 'bg-primary text-white shadow-sm font-bold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Chrome
                  </button>
                  <button
                    onClick={() => setActiveTab('safari')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeTab === 'safari'
                        ? 'bg-primary text-white shadow-sm font-bold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Safari (iOS)
                  </button>
                  <button
                    onClick={() => setActiveTab('other')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${
                      activeTab === 'other'
                        ? 'bg-primary text-white shadow-sm font-bold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Firefox / Edge
                  </button>
                </div>

                {/* Tab Guide Steps */}
                <div className="p-3.5 rounded-2xl bg-white/50 dark:bg-[#1e2536]/50 border border-panel-border/40 text-xs space-y-2">
                  {activeTab === 'chrome' && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                        <p className="text-text-secondary">Tap the three vertical dots <b className="text-text-primary font-mono">⋮</b> in the top right corner of Chrome.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                        <p className="text-text-secondary">Find and check <b className="text-text-primary">"Desktop site"</b> checkbox.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-[11px] flex items-center justify-center shrink-0">✓</span>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">The page will refresh into the high-resolution desktop view!</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'safari' && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                        <p className="text-text-secondary">Tap the <b className="text-text-primary font-mono">aA</b> or <b className="text-text-primary">Share</b> icon on the left of Safari's address bar.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                        <p className="text-text-secondary">Tap <b className="text-text-primary">"Request Desktop Website"</b>.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-[11px] flex items-center justify-center shrink-0">✓</span>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">The full desktop layout will now load smoothly.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'other' && (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                        <p className="text-text-secondary">Tap the browser menu <b className="text-text-primary font-mono">⋯</b> or <b className="text-text-primary font-mono">☰</b> at the bottom or top.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                        <p className="text-text-secondary">Toggle on <b className="text-text-primary">"Desktop Site"</b> / <b className="text-text-primary">"Desktop View"</b>.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-[11px] flex items-center justify-center shrink-0">✓</span>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">You're all set to visualize algorithms with maximum screen space.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <button
                  onClick={() => handleDismissModal(true)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Got It, Switch to Desktop</span>
                </button>
                <button
                  onClick={() => handleDismissModal(true)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl font-semibold text-xs text-text-secondary hover:text-text-primary bg-bg hover:bg-black/5 dark:hover:bg-white/5 border border-panel-border/30 transition-all cursor-pointer"
                >
                  Continue on Mobile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopModeNotification;
