import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CATEGORIES, ALGORITHMS } from "../data/algorithmsData";
import Button from "../components/common/Button";
import { Play, ArrowLeft, ShieldAlert } from "lucide-react";

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

      {/* Grid of Algorithms Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {matchingAlgos.map((algo) => (
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
    </div>
  );
};

export default CategoryPage;
