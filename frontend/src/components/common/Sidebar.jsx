import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useVisualizer } from "../../context/VisualizerContext";
import { CATEGORIES } from "../../data/algorithmsData";
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
  Heart,
  History,
  Cpu,
  ArrowRight,
  Flame,
  FileText,
} from "lucide-react";

// Icon Map for Categories
const ICON_MAP = {
  arrays: Database,
  strings: FileText,
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
  backtracking: Repeat,
  greedy: Flame,
  "bit-manipulation": Cpu,
  mathematical: Database,
  "sliding-window": LayoutGrid,
  "two-pointer": ArrowRightLeft,
  "prefix-sum": Database,
  monotonic: Layers,
  "union-find": Network,
  "advanced-ds": GitFork,
  "advanced-algo": Sliders,
};

const DATA_STRUCTURES_CATEGORIES = [
  "arrays",
  "strings",
  "linked-list",
  "stack",
  "queue",
  "hashing",
  "trees",
  "heaps",
  "graphs",
  "monotonic",
  "union-find",
  "advanced-ds"
];

const ALGORITHMS_CATEGORIES = [
  "sorting",
  "searching",
  "recursion",
  "backtracking",
  "dynamic-programming",
  "greedy",
  "bit-manipulation",
  "mathematical",
  "sliding-window",
  "two-pointer",
  "prefix-sum",
  "advanced-algo"
];

const Sidebar = () => {
  const { sidebarOpen, favorites, recentlyViewed } = useVisualizer();
  const navigate = useNavigate();
  const location = useLocation();

  if (!sidebarOpen) return null;

  const dsCategories = CATEGORIES.filter((cat) => DATA_STRUCTURES_CATEGORIES.includes(cat.id));
  const algoCategories = CATEGORIES.filter((cat) => ALGORITHMS_CATEGORIES.includes(cat.id));

  const renderCategoryList = (categoriesList) => {
    return (
      <div className="flex flex-col gap-1">
        {categoriesList.map((cat) => {
          const Icon = ICON_MAP[cat.id] || LayoutGrid;
          const isActive = location.pathname === `/category/${cat.id}`;
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`
                group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200
                ${
                  isActive
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-text-secondary hover:bg-bg/60 hover:text-text-primary"
                }
              `}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isActive 
                    ? "text-primary scale-105" 
                    : "text-text-secondary group-hover:text-primary group-hover:scale-105"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="capitalize transition-colors duration-200">{cat.name}</span>
              </div>
              <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-slate-100 dark:bg-slate-800/80 text-text-secondary"
              }`}>
                {cat.algorithmsCount}
              </span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <aside className="hidden lg:flex fixed left-4 top-24 bottom-4 w-72 clay-card overflow-y-auto px-4 py-6 flex flex-col gap-6 z-40 transition-all duration-300">
      
      {/* 1. Data Structures Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[10px] font-extrabold text-text-secondary opacity-60 uppercase tracking-widest px-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
          Data Structures
        </h3>
        {renderCategoryList(dsCategories)}
      </div>

      {/* 2. Algorithms Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[10px] font-extrabold text-text-secondary opacity-60 uppercase tracking-widest px-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
          Algorithms
        </h3>
        {renderCategoryList(algoCategories)}
      </div>

      {/* 3. Bookmarks Deck */}
      {favorites.length > 0 && (
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-text-secondary uppercase tracking-wider mb-1 px-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <Heart className="w-3.5 h-3.5 text-danger fill-current" />
            <span>Bookmarks</span>
          </div>
          <div className="flex flex-col gap-1">
            {favorites.map((favId) => {
              const algo = CATEGORIES.flatMap(c => c.algorithms).includes(favId) ? { name: favId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") } : null;
              return (
                <Link
                  key={favId}
                  to={`/visualizer/${favId}`}
                  className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-text-primary hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-primary transition-all duration-200"
                >
                  <span className="truncate">{algo ? algo.name : favId}</span>
                  <Heart className="w-3 h-3 text-danger fill-current opacity-70 group-hover:scale-110 transition-transform" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Recently Viewed Deck */}
      {recentlyViewed.length > 0 && (
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-text-secondary uppercase tracking-wider mb-1 px-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <History className="w-3.5 h-3.5 text-secondary" />
            <span>Recently Viewed</span>
          </div>
          <div className="flex flex-col gap-1">
            {recentlyViewed.map((recId) => {
              const algo = CATEGORIES.flatMap(c => c.algorithms).includes(recId) ? { name: recId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") } : null;
              return (
                <Link
                  key={recId}
                  to={`/visualizer/${recId}`}
                  className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-text-secondary hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-text-primary transition-all duration-200"
                >
                  <span className="truncate">{algo ? algo.name : recId}</span>
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </aside>
  );
};

export default Sidebar;
