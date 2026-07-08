import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, GitMerge, ListFilter, Hash, HelpCircle, Sun, Moon } from 'lucide-react';
import LoginCard from '../components/auth/LoginCard';
import { useVisualizer } from '../context/VisualizerContext';

// -------------------------------------------------------------
// Interactive SVG Widgets for the Left Side Hero Section
// -------------------------------------------------------------

// 1. Binary Tree SVG component with animated traversals
const BinaryTreeWidget = () => {
  const nodeVariants = {
    pulse: {
      scale: [1, 1.08, 1],
      boxShadow: [
        '0 0 10px rgba(16, 185, 129, 0.2)',
        '0 0 20px rgba(16, 185, 129, 0.4)',
        '0 0 10px rgba(16, 185, 129, 0.2)',
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-5 rounded-[24px] bg-white/70 dark:bg-[#161B26]/60 backdrop-blur-md
        border border-white/40 dark:border-white/5
        shadow-[8px_10px_24px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(255,255,255,0.8)]
        dark:shadow-[8px_10px_24px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.05)]
        flex flex-col gap-3 items-center w-full max-w-[210px] aspect-[4/3] relative overflow-hidden
      "
    >
      <div className="text-[11px] font-bold text-emerald-500/80 dark:text-emerald-400/80 uppercase tracking-widest self-start">
        Binary Tree
      </div>
      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
        {/* Tree Links */}
        <motion.line
          x1="80" y1="20" x2="45" y2="50"
          stroke="#34D399" strokeWidth="2.5" strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="80" y1="20" x2="115" y2="50"
          stroke="#34D399" strokeWidth="2.5" strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
        />
        <line x1="45" y1="50" x2="25" y2="80" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="45" y1="50" x2="65" y2="80" stroke="#CBD5E1" strokeWidth="2" />

        {/* Root Node */}
        <motion.circle
          cx="80" cy="20" r="9"
          className="fill-emerald-500 stroke-emerald-300 dark:stroke-emerald-600"
          strokeWidth="2.5"
          variants={nodeVariants}
          animate="pulse"
        />
        <text x="80" y="23.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">1</text>

        {/* Level 2 Nodes */}
        <motion.circle
          cx="45" cy="50" r="9"
          className="fill-purple-500 stroke-purple-300 dark:stroke-purple-600"
          strokeWidth="2.5"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <text x="45" y="53.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">2</text>

        <motion.circle
          cx="115" cy="50" r="9"
          className="fill-purple-500 stroke-purple-300 dark:stroke-purple-600"
          strokeWidth="2.5"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <text x="115" y="53.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">3</text>

        {/* Level 3 Nodes */}
        <circle cx="25" cy="80" r="7.5" className="fill-slate-300 dark:fill-slate-700 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1.5" />
        <text x="25" y="83" textAnchor="middle" fill="currentColor" className="text-slate-600 dark:text-slate-400" fontSize="7" fontWeight="bold">4</text>
        <circle cx="65" cy="80" r="7.5" className="fill-slate-300 dark:fill-slate-700 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1.5" />
        <text x="65" y="83" textAnchor="middle" fill="currentColor" className="text-slate-600 dark:text-slate-400" fontSize="7" fontWeight="bold">5</text>
      </svg>
    </motion.div>
  );
};

// 2. Graph Widget with custom glowing node connects
const GraphWidget = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-5 rounded-[24px] bg-white/70 dark:bg-[#161B26]/60 backdrop-blur-md
        border border-white/40 dark:border-white/5
        shadow-[8px_10px_24px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(255,255,255,0.8)]
        dark:shadow-[8px_10px_24px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.05)]
        flex flex-col gap-3 items-center w-full max-w-[210px] aspect-[4/3] relative overflow-hidden
      "
    >
      <div className="text-[11px] font-bold text-violet-500/80 dark:text-violet-400/80 uppercase tracking-widest self-start">
        Graph Graph
      </div>
      <svg className="w-full h-full" viewBox="0 0 160 100" fill="none">
        {/* Node connections */}
        <line x1="30" y1="30" x2="80" y2="20" stroke="#E2E8F0" strokeWidth="2" className="dark:stroke-slate-800" />
        <line x1="30" y1="30" x2="60" y2="75" stroke="#E2E8F0" strokeWidth="2" className="dark:stroke-slate-800" />
        <line x1="80" y1="20" x2="130" y2="40" stroke="#8B5CF6" strokeWidth="2.5" />
        <line x1="60" y1="75" x2="130" y2="40" stroke="#E2E8F0" strokeWidth="2" className="dark:stroke-slate-800" />
        <line x1="80" y1="20" x2="60" y2="75" stroke="#8B5CF6" strokeWidth="2.5" />

        {/* Animated signal dot */}
        <motion.circle
          cx="80" cy="20" r="4"
          className="fill-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          animate={{
            cx: [80, 130, 60, 80],
            cy: [20, 40, 75, 20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Nodes */}
        <circle cx="30" cy="30" r="8" className="fill-slate-200 dark:fill-slate-800 border-slate-300" />
        <circle cx="80" cy="20" r="8.5" className="fill-violet-500 stroke-violet-300 dark:stroke-violet-700" strokeWidth="2" />
        <circle cx="130" cy="40" r="8.5" className="fill-violet-500 stroke-violet-300 dark:stroke-violet-700" strokeWidth="2" />
        <circle cx="60" cy="75" r="8" className="fill-slate-200 dark:fill-slate-800 border-slate-300" />
      </svg>
    </motion.div>
  );
};

// 3. Stack and Queue Visualizer Component
const StackQueueWidget = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-5 rounded-[24px] bg-white/70 dark:bg-[#161B26]/60 backdrop-blur-md
        border border-white/40 dark:border-white/5
        shadow-[8px_10px_24px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(255,255,255,0.8)]
        dark:shadow-[8px_10px_24px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.05)]
        flex flex-col gap-2.5 items-center w-full max-w-[210px] aspect-[4/3] relative overflow-hidden
      "
    >
      <div className="text-[11px] font-bold text-cyan-600/80 dark:text-cyan-400/80 uppercase tracking-widest self-start">
        Stack / LIFO
      </div>
      <div className="flex flex-col gap-1.5 w-full items-center justify-center h-full">
        {/* Stack Items */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-4/5 py-2.5 rounded-xl bg-cyan-500 text-white font-mono text-[9px] font-bold text-center border-t border-cyan-300/30 shadow-md"
        >
          PUSH("Node_3")
        </motion.div>
        <div className="w-4/5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 font-mono text-[9px] font-bold text-center border border-slate-300/10">
          "Node_2"
        </div>
        <div className="w-4/5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 font-mono text-[9px] font-bold text-center border border-slate-300/10">
          "Node_1"
        </div>
      </div>
    </motion.div>
  );
};

// 4. Array with Pointer Widget (Sorting visualizer snippet)
const ArrayWidget = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-5 rounded-[24px] bg-white/70 dark:bg-[#161B26]/60 backdrop-blur-md
        border border-white/40 dark:border-white/5
        shadow-[8px_10px_24px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(255,255,255,0.8)]
        dark:shadow-[8px_10px_24px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.05)]
        flex flex-col gap-3.5 items-center w-full max-w-[210px] aspect-[4/3] relative overflow-hidden
      "
    >
      <div className="text-[11px] font-bold text-emerald-600/80 dark:text-emerald-400/80 uppercase tracking-widest self-start">
        Array Sorting
      </div>
      <div className="flex gap-2 items-end justify-center w-full h-full px-1 pb-2">
        {/* Array Columns */}
        {[20, 45, 75, 55, 30].map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
            <motion.div
              animate={i === 2 ? {
                height: [height, height * 1.15, height],
                backgroundColor: ['#10B981', '#10B981', '#10B981'],
              } : {}}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ height: `${height}%` }}
              className={`w-full rounded-lg shadow-sm border-t ${
                i === 2
                  ? 'bg-emerald-500 border-emerald-300'
                  : 'bg-slate-200 dark:bg-slate-800 border-slate-300/30'
              }`}
            />
            <span className="text-[8px] font-bold text-slate-400 dark:text-slate-600">{i}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Login = () => {
  // Chips array
  const chips = [
    { name: 'Arrays', icon: Database, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' },
    { name: 'Graphs', icon: Network, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/20' },
    { name: 'Trees', icon: GitMerge, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/20' },
    { name: 'Linked Lists', icon: ListFilter, color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/20' },
    { name: 'Stack', icon: Database, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20' },
    { name: 'Queue', icon: ListFilter, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/20' },
    { name: 'Dynamic Programming', icon: Hash, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' },
    { name: 'Recursion', icon: HelpCircle, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/20' },
  ];

  const { theme, toggleTheme } = useVisualizer();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#F4F7FE] dark:bg-[#0B0F19] flex items-center justify-center p-4 md:p-8 select-none font-sans">
      {/* Light grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-15 pointer-events-none" />

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-7 right-10 z-50">
        <div
          onClick={toggleTheme}
          className="relative w-20 h-10 clay-inset rounded-full p-1 cursor-pointer flex items-center justify-between bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
          title="Toggle Theme"
        >
          <Sun className="w-4.5 h-4.5 text-amber-500 z-10 ml-1.5" />
          <Moon className="w-4.5 h-4.5 text-slate-400 z-10 mr-1.5" />
          <div
            className={`
              absolute w-8 h-8 rounded-full bg-emerald-500
              shadow-[2px_3px_6px_rgba(0,0,0,0.15)] transition-all duration-300
              flex items-center justify-center
              ${theme === 'dark' ? 'translate-x-10' : 'translate-x-0'}
            `}
          >
            <div className={`w-1 h-4 bg-white/80 rounded-full ${theme === 'dark' ? 'rotate-90' : ''}`} />
          </div>
        </div>
      </div>


      {/* Floating blurred ambient blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-emerald-300/30 dark:bg-emerald-900/15 blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-300/30 dark:bg-purple-900/15 blur-[90px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, 20, -40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-cyan-300/20 dark:bg-cyan-900/10 blur-[70px] pointer-events-none"
      />

      {/* Main Container Layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-10 gap-4 lg:gap-10 items-center justify-items-center relative z-10 py-6 lg:py-12">

        {/* Left Side: Illustration and Taglines — visible on all screens */}
        <div className="flex lg:col-span-6 flex-col gap-3 lg:gap-10 items-start text-left w-full max-w-2xl">

          {/* Logo Brand Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 font-bold tracking-wider text-slate-800 dark:text-white"
          >
            <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md">
              <Network className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
            </div>
            <span className="font-extrabold text-sm lg:text-lg uppercase text-emerald-600">
              DSA // VISUALIZER
            </span>
          </motion.div>

          {/* Heading Description block */}
          <div className="flex flex-col gap-2 lg:gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[20px] sm:text-[28px] lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-slate-800 dark:text-slate-100"
            >
              Master Data Structures &amp; Algorithms{' '}
              <span className="text-emerald-500">Visually</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-[13px] lg:text-[15px] font-medium leading-relaxed"
            >
              Practice, learn, and visualize every algorithm through interactive animations.
            </motion.p>
          </div>

          {/* Dynamic Grid of Interactive Widgets — hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:grid grid-cols-2 gap-3 lg:gap-4 w-full"
          >
            <BinaryTreeWidget />
            <GraphWidget />
            <StackQueueWidget />
            <ArrayWidget />
          </motion.div>

          {/* Floating Category Chips — hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex flex-col gap-3 w-full">
            <span className="text-[10px] lg:text-[11px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              Available Visualizers
            </span>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip, index) => {
                const IconComponent = chip.icon;
                return (
                  <motion.div
                    key={chip.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 + index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className={`
                      flex items-center gap-1.5 px-3 py-2 rounded-full font-semibold text-[11px]
                      border border-white/50 dark:border-white/5 shadow-[4px_6px_12px_rgba(0,0,0,0.02)]
                      dark:shadow-[4px_6px_12px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default
                      ${chip.color}
                    `}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span>{chip.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Login Card — full width on mobile, col-span-4 on desktop */}
        <div className="w-full lg:col-span-4 flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};

export default Login;
