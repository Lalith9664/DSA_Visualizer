import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CATEGORIES, ALGORITHMS } from "../data/algorithmsData";
import Button from "../components/common/Button";
import { Play, ArrowLeft, ShieldAlert, Search, Filter, ChevronDown } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = CATEGORIES.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="clay-card bg-white dark:bg-[#161b26] p-8 text-center flex flex-col items-center gap-4">
        <ShieldAlert className="w-12 h-12 text-danger animate-bounce" />
        <h2 className="text-xl font-bold">Category Console Not Found</h2>
        <Button
          onClick={() => navigate("/dashboard")}
          className="clay-btn clay-btn-primary"
        >
          Return to Control Center
        </Button>
      </div>
    );
  }

  // Gather matching algorithm objects
  const matchingAlgos = category.algorithms.map((algoId) => {
    if (ALGORITHMS[algoId]) {
      return ALGORITHMS[algoId];
    } else {
      return {
        id: algoId,
        name: algoId
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "),
        category: categoryId,
        difficulty: "Medium",
        description: `Visual simulation of ${algoId.replace("-", " ")} concept. Connects custom input sequences and compiles execution logs.`,
        timeComplexity: { best: "O(n)", average: "O(n log n)", worst: "O(n²)" },
        spaceComplexity: "O(n)",
        inputType: "array",
        defaultInput: "5 3 8 1 9",
      };
    }
  });

  const [selectedDifficulty, setSelectedDifficulty] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const filteredAlgos = matchingAlgos.filter((algo) => {
    const matchesDifficulty = selectedDifficulty === "All" || algo.difficulty === selectedDifficulty;
    const matchesSearch = algo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (algo.description && algo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDifficulty && matchesSearch;
  });

  const getDifficultyStyles = (diff) => {
    switch (diff) {
      case "Easy":
        return "bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/20";
      case "Hard":
        return "bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/20";
      default:
        return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20";
    }
  };

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-white to-slate-100 dark:from-[#161B26] dark:to-[#0B0F19] shadow-xl border border-white/20 transition-all duration-300">
      {/* Back button & Category Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-200/50 dark:border-slate-800/40 pb-6">
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button
              variant="default"
              className="w-10 h-10 !p-0 clay-btn clay-btn-default flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="text-left">
            <h2 className="text-2xl font-black text-text-primary tracking-tight">
              {category.name} Deck
            </h2>
            <p className="text-xs text-text-secondary mt-0.5 font-medium">
              {category.description}
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search bar */}
          <div className="relative flex-1 sm:w-60">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search algorithms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary transition-all font-semibold"
            />
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative sm:w-44 z-20">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between pl-10 pr-4 py-2.5 rounded-2xl text-xs bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:border-primary transition-all font-semibold cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{selectedDifficulty === "All" ? "All Difficulties" : selectedDifficulty}</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Options List */}
            {isDropdownOpen && (
              <>
                {/* Backdrop overlay to close dropdown on click outside */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                <div className="absolute right-0 top-full mt-2 w-full bg-white/95 dark:bg-[#161B26]/95 backdrop-blur-md border border-slate-200/65 dark:border-slate-800/85 rounded-2xl shadow-xl z-20 p-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  {["All", "Easy", "Medium", "Hard"].map((diff) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => {
                        setSelectedDifficulty(diff);
                        setIsDropdownOpen(false);
                      }}
                      className={`
                        w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold select-none cursor-pointer transition-all flex items-center justify-between
                        ${
                          selectedDifficulty === diff
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                        }
                      `}
                    >
                      <span>{diff === "All" ? "All Difficulties" : diff}</span>
                      {selectedDifficulty === diff && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Algorithms Cards */}
      {filteredAlgos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
          <span className="text-sm font-semibold text-slate-400 dark:text-slate-600">
            No matching algorithms found in this deck.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredAlgos.map((algo) => (
            <div
              key={algo.id}
              className="
                clay-card bg-white dark:bg-[#161b26] p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5
              "
            >
              {/* Top row: Name & Difficulty badge */}
              <div className="flex justify-between items-start gap-4 text-left">
                <h3 className="font-extrabold text-sm text-text-primary hover:text-primary transition-colors leading-tight">
                  {algo.name}
                </h3>
                <span
                  className={`text-[9px] uppercase font-extrabold px-2.5 py-1 rounded-full ${getDifficultyStyles(algo.difficulty)}`}
                >
                  {algo.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed text-left line-clamp-3 font-medium opacity-85">
                {algo.description}
              </p>

              {/* Complexities display */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-black/25 p-3 rounded-2xl font-mono text-[10px] text-left border border-white/25 dark:border-transparent">
                <div>
                  <span className="text-text-secondary dark:text-slate-400 block text-[8px] uppercase font-bold mb-0.5 opacity-75">
                    Time Worst
                  </span>
                  <span className="text-[#EF4444] font-extrabold">
                    {algo.timeComplexity?.worst || "O(n²)"}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary dark:text-slate-400 block text-[8px] uppercase font-bold mb-0.5 opacity-75">
                    Space Allocation
                  </span>
                  <span className="text-[#8B5CF6] font-extrabold">
                    {algo.spaceComplexity || "O(1)"}
                  </span>
                </div>
              </div>

              {/* Visualizer Trigger */}
              <div className="mt-auto pt-2">
                <Button
                  onClick={() => navigate(`/visualizer/${algo.id}`)}
                  variant="success"
                  className="w-full text-xs py-2.5 shadow-sm font-bold clay-btn clay-btn-success"
                  icon={Play}
                >
                  Start Visualization
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
