import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVisualizer } from "../../context/VisualizerContext";
import { ALGORITHMS } from "../../data/algorithmsData";
import {
  Search,
  Sun,
  Moon,
  Bookmark,
  Compass,
  Terminal,
  ShieldAlert,
} from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const { theme, toggleTheme, favorites, sidebarOpen, setSidebarOpen } =
    useVisualizer();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const filtered = Object.values(ALGORITHMS).filter(
      (algo) =>
        algo.name.toLowerCase().includes(query.toLowerCase()) ||
        algo.category.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filtered);
  };

  const handleSelectResult = (algoId) => {
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/visualizer/${algoId}`);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 h-16 rounded-[20px] bg-white/40 dark:bg-[#161b26]/35 backdrop-blur-xl border border-white/30 dark:border-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] flex items-center justify-between px-6 transition-all duration-300">
      {/* Brand Logo & Sidebar Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="clay-btn w-10 h-10 flex items-center justify-center text-accent focus:outline-none bg-white dark:bg-slate-800"
          title="Toggle Navigation Console"
        >
          <Compass className="w-5 h-5" />
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-wider text-text-primary"
        >
          <Terminal className="w-5 h-5 text-accent animate-pulse" />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent font-extrabold text-sm md:text-base">
            DSA // VISUALIZER
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-success shadow-[0_0_8px_#22c55e] animate-ping duration-1000 hidden md:block"></span>
        </Link>
      </div>

      {/* Center Search Bar */}
      <div className="relative flex-1 max-w-md mx-6 hidden md:block">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-text-secondary opacity-75" />
          <input
            type="text"
            placeholder="Search algorithms (e.g. Binary)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 focus:outline-none focus:ring-1 focus:ring-primary/20 text-text-primary placeholder-text-secondary transition-all"
          />
        </div>

        {/* Floating Search Results */}
        {searchResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 clay-card p-3 flex flex-col gap-1.5 max-h-64 overflow-y-auto bg-white/95 dark:bg-slate-900/95 z-50">
            {searchResults.map((algo) => (
              <button
                key={algo.id}
                onClick={() => handleSelectResult(algo.id)}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 flex justify-between items-center text-xs text-text-primary font-semibold transition-colors"
              >
                <span>{algo.name}</span>
                <span className="text-[10px] uppercase font-bold text-accent px-2 py-0.5 rounded-full bg-accent/10">
                  {algo.category}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Action Deck */}
      <div className="flex items-center gap-3">
        {/* Bookmark Count badge */}
        <Link to="/" className="relative" title="Favorites">
          <Button
            variant="default"
            className="w-10 h-10 !p-0 clay-btn clay-btn-default flex items-center justify-center"
          >
            <Bookmark className="w-4 h-4 text-secondary" />
            {favorites.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 text-[9px] font-mono font-bold w-5 h-5 bg-danger text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {favorites.length}
              </span>
            )}
          </Button>
        </Link>

        {/* Physical Theme Toggle Capsule Switch */}
        <div
          onClick={toggleTheme}
          className="
            relative w-16 h-8 clay-inset rounded-full p-1 cursor-pointer flex items-center justify-between bg-bg/50
          "
          title="Toggle Power Theme"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500 z-10 ml-1.5" />
          <Moon className="w-3.5 h-3.5 text-blue-400 z-10 mr-1.5" />
          <div
            className={`
              absolute w-6 h-6 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]
              shadow-[2px_3px_6px_rgba(0,0,0,0.15)] transition-all duration-300
              flex items-center justify-center
              ${theme === "dark" ? "translate-x-8" : "translate-x-0"}
            `}
          >
            <div
              className={`w-1 h-3 bg-white/80 rounded-full ${theme === "dark" ? "rotate-90" : ""}`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
