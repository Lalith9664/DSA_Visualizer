import React from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data/algorithmsData";
import Button from "../components/common/Button";
import {
  Database,
  Link2,
  Layers,
  Repeat,
  Network,
  Key,
  Sliders,
  Search,
  GitFork,
  ArrowRightLeft,
  LayoutGrid,
  ArrowRight,
  Compass,
  Cpu,
  Bug,
  Lightbulb,
  MessageSquarePlus,
  Sparkles,
} from "lucide-react";

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
  heaps: Cpu,
};

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    // Scroll down to categories section
    const element = document.getElementById("categories-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-12 pb-12 p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-white to-slate-100 dark:from-[#161B26] dark:to-[#0B0F19] shadow-xl border border-white/20 transition-all duration-300">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden clay-card py-16 px-8 md:px-12 flex flex-col items-center justify-center text-center gap-6 min-h-[460px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
        {/* Animated background blobs & clay floating shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full clay-blob-1" />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full clay-blob-2" />

          {/* Floating shapes */}
          <div className="hidden md:block absolute top-12 left-16 w-10 h-10 rounded-full clay-shape-sphere" />
          <div className="hidden md:block absolute bottom-16 right-20 w-12 h-12 rounded-2xl clay-shape-cube" />
          <div className="hidden md:block absolute top-20 right-1/4 w-10 h-10 rounded-full clay-shape-cone" />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-2xl flex flex-col gap-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full w-max mx-auto shadow-inner">
            Tactile DSA Instrument
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
            Interactive{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              DSA Visualizer
            </span>
          </h1>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            Master Data Structures and Algorithms through beautiful real-time
            visualizations and interactive learning.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-wrap gap-4 justify-center items-center mt-4">
          <Button
            onClick={handleStartLearning}
            variant="success"
            className="px-6 py-3 shadow-md clay-btn clay-btn-success"
            icon={Compass}
          >
            Start Learning
          </Button>
          <Button
            onClick={() => {
              const el = document.getElementById("categories-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            className="px-6 py-3 clay-btn clay-btn-default"
          >
            Explore Algorithms
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            variant="accent"
            className="px-6 py-3 clay-btn shadow-md bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105"
            icon={MessageSquarePlus}
          >
            Report Bug / Request Algo
          </Button>
        </div>
      </section>

      {/* 2. CATEGORIES DASHBOARD GRID */}
      <section
        id="categories-section"
        className="flex flex-col gap-6 scroll-mt-20"
      >
        <div className="flex flex-col gap-1.5 px-2">
          <h2 className="text-xl font-extrabold text-text-primary">
            Explore Concept Panels
          </h2>
          <p className="text-xs text-text-secondary">
            Select a specialized component deck to analyze data configurations
            and running scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.id] || LayoutGrid;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                className="
                  clay-card group p-5 flex flex-col gap-4 cursor-pointer hover:-translate-y-1.5 transition-all duration-300
                "
              >
                {/* Upper row: Icon & Count */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg clay-inset flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-semibold text-text-secondary bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">
                    {cat.algorithmsCount} Units
                  </span>
                </div>

                {/* Middle details */}
                <div className="flex flex-col gap-1.5 text-left">
                  <h3 className="font-bold text-sm text-text-primary group-hover:text-accent transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                {/* Lower Action bar */}
                <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] font-bold text-accent justify-end group-hover:translate-x-1 transition-transform">
                  <span>DEPLOY PANEL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. COMMUNITY & FEEDBACK SECTION */}
      <section className="clay-card p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-white/90 via-slate-50/70 to-slate-100/50 dark:from-[#161B26]/90 dark:via-[#131722]/80 dark:to-[#0B0F19]/90 border border-white/40 dark:border-white/5 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
              Community & Maintenance
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary">
              Have a Suggestion or Found a Bug?
            </h2>
          </div>
          <Button
            onClick={() => navigate("/contact")}
            variant="primary"
            className="clay-btn clay-btn-primary px-5 py-2.5 text-xs font-bold shrink-0"
            icon={MessageSquarePlus}
          >
            Open Dispatch Center
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Bug Report */}
          <div
            onClick={() => navigate("/contact?type=bug")}
            className="clay-card p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 border border-red-500/10 hover:border-red-500/30 group"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Bug className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-red-500 transition-colors">
                  Report a Defect or Bug
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Notice an incorrect traversal step, visual glitch, or animation freeze? Let us know with automatic diagnostics.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-red-500 mt-2">
              <span>File Bug Report</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Request Algorithm */}
          <div
            onClick={() => navigate("/contact?type=algorithm")}
            className="clay-card p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 border border-purple-500/10 hover:border-purple-500/30 group"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-purple-500 transition-colors">
                  Request an Algorithm
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Want a new Tree, Graph, Dynamic Programming, or Sorting algorithm added to the visualizer decks?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-500 mt-2">
              <span>Suggest Algorithm</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Feature Ideas */}
          <div
            onClick={() => navigate("/contact?type=feature")}
            className="clay-card p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 border border-emerald-500/10 hover:border-emerald-500/30 group"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-emerald-500 transition-colors">
                  Propose Feature Ideas
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Suggest enhancements like GIF exports, sound effects, step explanations, or new learning modes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 mt-2">
              <span>Submit Idea</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
