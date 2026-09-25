import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug,
  Lightbulb,
  Sparkles,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Mail,
  User,
  ExternalLink,
  Laptop,
  Check,
  RefreshCw,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/common/Button";
import { CATEGORIES } from "../data/algorithmsData";

const TABS = [
  {
    id: "bug",
    label: "Report a Bug",
    icon: Bug,
    badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
    activeGradient: "from-red-500 to-rose-600",
    description: "Spotted an animation defect, incorrect algorithm step, or UI glitch?",
  },
  {
    id: "algorithm",
    label: "Request Algorithm",
    icon: Lightbulb,
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    activeGradient: "from-purple-500 to-indigo-600",
    description: "Suggest a new Data Structure or Algorithm you'd love to see visualized!",
  },
  {
    id: "feature",
    label: "Feature Idea",
    icon: Sparkles,
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    activeGradient: "from-emerald-500 to-teal-600",
    description: "Propose new visualizer controls, themes, export tools, or learning aids.",
  },
  {
    id: "general",
    label: "General Message",
    icon: MessageSquare,
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    activeGradient: "from-amber-500 to-orange-600",
    description: "Get in touch for questions, collaborations, or general developer feedback.",
  },
];

const SEVERITIES = [
  { id: "low", label: "Low", desc: "Cosmetic / typo / minor alignment" },
  { id: "medium", label: "Medium", desc: "Feature works but visual glitch occurs" },
  { id: "high", label: "High", desc: "Algorithm simulation calculation incorrect" },
  { id: "critical", label: "Critical", desc: "Visualizer crashes, freezes, or blanks screen" },
];

const DIFFICULTIES = ["Easy", "Medium", "Hard", "Advanced / Research"];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Tab State
  const initialType = searchParams.get("type");
  const validTab = TABS.some((t) => t.id === initialType) ? initialType : "bug";
  const [activeTab, setActiveTab] = useState(validTab);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Common / Bug fields
    bugTitle: "",
    affectedArea: searchParams.get("algo") || "",
    severity: "medium",
    stepsToReproduce: "",
    expectedVsActual: "",
    // Algorithm fields
    algorithmName: searchParams.get("algo") ? searchParams.get("algo").replace(/-/g, " ") : "",
    category: searchParams.get("category") || "arrays",
    difficulty: "Medium",
    referenceUrl: "",
    reason: "",
    // Feature fields
    featureTitle: "",
    featureDescription: "",
    // General
    subject: "",
    message: "",
    // Honeypot
    botcheck: "",
  });

  // System Diagnostics
  const [includeDiagnostics, setIncludeDiagnostics] = useState(true);
  const [systemInfo, setSystemInfo] = useState("");

  // Submission Status
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // Environment Key Check
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const isKeyConfigured =
    Boolean(web3FormsKey) &&
    web3FormsKey !== "your_web3forms_access_key_here" &&
    web3FormsKey.trim().length > 5;

  // Auto-gather basic client diagnostic info
  useEffect(() => {
    try {
      const userAgent = navigator.userAgent;
      const screenSize = `${window.screen.width}x${window.screen.height}`;
      const viewportSize = `${window.innerWidth}x${window.innerHeight}`;
      const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light";
      const info = `Screen: ${screenSize} | Viewport: ${viewportSize} | Theme Preference: ${colorScheme}\nBrowser Agent: ${userAgent}`;
      setSystemInfo(info);
    } catch {
      setSystemInfo("Client diagnostics unavailable");
    }
  }, []);

  // Update tab if URL param changes
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam && TABS.some((t) => t.id === typeParam)) {
      setActiveTab(typeParam);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Form Honeypot check
    if (formData.botcheck) {
      setStatus("error");
      setErrorMessage("Spam submission detected.");
      return;
    }

    // Determine custom email subject line based on active tab
    let emailSubject = "";
    let emailBody = "";

    if (activeTab === "bug") {
      emailSubject = `[DSA Visualizer Bug Report] ${formData.bugTitle || "New Bug"} (${formData.severity.toUpperCase()})`;
      emailBody = `
=== DSA VISUALIZER BUG REPORT ===
Category: Bug Report
Severity: ${formData.severity.toUpperCase()}
Issue Title: ${formData.bugTitle}
Affected Algorithm / Area: ${formData.affectedArea || "Not specified"}

--- REPORTER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}

--- STEPS TO REPRODUCE ---
${formData.stepsToReproduce || "None provided"}

--- EXPECTED VS ACTUAL BEHAVIOR ---
${formData.expectedVsActual || "None provided"}

--- SYSTEM DIAGNOSTICS ---
${includeDiagnostics ? systemInfo : "Diagnostics opted out"}
      `.trim();
    } else if (activeTab === "algorithm") {
      emailSubject = `[DSA Visualizer Algo Request] ${formData.algorithmName || "New Algorithm"}`;
      emailBody = `
=== DSA VISUALIZER ALGORITHM REQUEST ===
Category: Algorithm / Data Structure Request
Algorithm Name: ${formData.algorithmName}
DSA Category: ${formData.category}
Difficulty: ${formData.difficulty}
Reference URL: ${formData.referenceUrl || "None provided"}

--- REQUESTER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}

--- VISUALIZATION DETAILS & REASON ---
${formData.reason || "None provided"}
      `.trim();
    } else if (activeTab === "feature") {
      emailSubject = `[DSA Visualizer Feature Idea] ${formData.featureTitle || "New Feature"}`;
      emailBody = `
=== DSA VISUALIZER FEATURE SUGGESTION ===
Feature Title: ${formData.featureTitle}

--- SUGGESTER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}

--- FEATURE DESCRIPTION ---
${formData.featureDescription || "None provided"}
      `.trim();
    } else {
      emailSubject = `[DSA Visualizer General Message] ${formData.subject || "Contact Inquiry"}`;
      emailBody = `
=== DSA VISUALIZER GENERAL INQUIRY ===
Subject: ${formData.subject}

--- SENDER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}

--- MESSAGE ---
${formData.message || "None provided"}
      `.trim();
    }

    const payload = {
      access_key: web3FormsKey || "YOUR_ACCESS_KEY_HERE",
      subject: emailSubject,
      from_name: formData.name ? `${formData.name} (DSA Visualizer)` : "DSA Visualizer User",
      name: formData.name,
      email: formData.email,
      category: activeTab,
      message: emailBody,
      botcheck: formData.botcheck,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus("success");
        setSubmittedData({
          type: activeTab,
          name: formData.name,
          email: formData.email,
          title:
            activeTab === "bug"
              ? formData.bugTitle
              : activeTab === "algorithm"
              ? formData.algorithmName
              : activeTab === "feature"
              ? formData.featureTitle
              : formData.subject,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Failed to deliver message. Please verify your Web3Forms access key in .env or try again later."
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please check your internet connection or verify your Web3Forms API key."
      );
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData((prev) => ({
      ...prev,
      bugTitle: "",
      affectedArea: "",
      stepsToReproduce: "",
      expectedVsActual: "",
      algorithmName: "",
      referenceUrl: "",
      reason: "",
      featureTitle: "",
      featureDescription: "",
      subject: "",
      message: "",
    }));
  };

  return (
    <div className="flex flex-col gap-8 pb-16 p-4 sm:p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-white to-slate-100 dark:from-[#161B26] dark:to-[#0B0F19] shadow-xl border border-white/20 transition-all duration-300 max-w-6xl mx-auto w-full">
      {/* 1. TOP HEADER & BACK NAVIGATION */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="clay-btn px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-text-primary bg-white dark:bg-slate-800 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full shadow-inner flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              Live Dispatch Portal
            </span>
          </div>
        </div>

        {/* Hero Title Area */}
        <div className="flex flex-col gap-2 text-left pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
            Contact &{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Algorithm Request
            </span>{" "}
            Hub
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
            Report bugs, request missing algorithms or data structures, propose features, or contact the developer.
            Powered seamlessly by Web3Forms direct email integration.
          </p>
        </div>
      </div>

      {/* Warning Alert if .env Key is Missing */}
      {!isKeyConfigured && (
        <div className="clay-card p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">
                Web3Forms Access Key Required in <code className="font-mono bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">.env</code>
              </h4>
              <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">
                To receive submissions directly to your email, get a free key from{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  web3forms.com
                </a>{" "}
                and add <code className="font-mono text-[10px] bg-black/5 dark:bg-white/5 px-1 py-0.5 rounded">VITE_WEB3FORMS_ACCESS_KEY=your_key</code> in <code className="font-mono text-[10px]">frontend/.env</code>.
              </p>
            </div>
          </div>
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noreferrer"
            className="clay-btn px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-105 shrink-0 flex items-center gap-1.5"
          >
            <span>Get Free Key</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* 2. TAB SELECTOR */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setStatus("idle");
              }}
              className={`
                clay-card p-3 sm:p-4 rounded-2xl flex flex-col items-start gap-2.5 text-left transition-all duration-200 cursor-pointer relative overflow-hidden
                ${
                  isActive
                    ? "ring-2 ring-primary/40 bg-white/90 dark:bg-slate-800/90 shadow-lg scale-[1.01]"
                    : "hover:bg-white/60 dark:hover:bg-slate-800/50 opacity-80 hover:opacity-100"
                }
              `}
            >
              {isActive && (
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tab.activeGradient}`}
                />
              )}
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-primary/15 text-primary" : "bg-black/5 dark:bg-white/5 text-text-secondary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {isActive && (
                  <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    Selected
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-text-primary">
                  {tab.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-text-secondary line-clamp-1 mt-0.5">
                  {tab.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN FORM & SIDEBAR LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT / CENTER: INTERACTIVE FORM */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="clay-card p-6 sm:p-8 rounded-[28px] bg-white/80 dark:bg-[#161B26]/90 backdrop-blur-md relative overflow-hidden border border-white/30 dark:border-white/5">
            <AnimatePresence mode="wait">
              {/* SUCCESS STATE */}
              {status === "success" && submittedData ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="flex flex-col gap-2 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      Dispatch Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      Thank you, <span className="font-semibold text-text-primary">{submittedData.name || "friend"}</span>! Your{" "}
                      <span className="font-semibold text-primary lowercase">{activeTab.replace("-", " ")}</span> has been securely mailed to the developer.
                    </p>
                  </div>

                  {/* Summary Ticket Card */}
                  <div className="w-full max-w-md clay-card p-4 rounded-2xl bg-black/5 dark:bg-black/20 text-left flex flex-col gap-2 border border-black/5 dark:border-white/5 font-mono text-xs">
                    <div className="flex justify-between items-center text-[10px] text-text-secondary border-b border-black/10 dark:border-white/10 pb-1.5">
                      <span>DISPATCH STATUS: DELIVERED</span>
                      <span>{submittedData.timestamp}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-text-secondary">Target:</span>
                      <span className="font-semibold text-text-primary uppercase">{submittedData.type}</span>
                    </div>
                    {submittedData.title && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Summary:</span>
                        <span className="font-semibold text-text-primary truncate max-w-[200px]">{submittedData.title}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Reply To:</span>
                      <span className="font-semibold text-accent">{submittedData.email}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center items-center pt-2">
                    <Button
                      onClick={handleResetForm}
                      variant="primary"
                      className="clay-btn clay-btn-primary px-5 py-2.5 text-xs font-bold"
                      icon={RefreshCw}
                    >
                      Submit Another Request
                    </Button>
                    <Button
                      onClick={() => navigate("/dashboard")}
                      variant="default"
                      className="clay-btn clay-btn-default px-5 py-2.5 text-xs font-semibold"
                    >
                      Return to Dashboard
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* ACTIVE INPUT FORM */
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Honeypot anti-spam field */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={formData.botcheck}
                    onChange={handleChange}
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Section: Sender Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" />
                        <span>Your Name / Handle *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson or @github_user"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-primary/30 text-text-primary placeholder-text-secondary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>Your Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com (for replies)"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-primary/30 text-text-primary placeholder-text-secondary transition-all"
                      />
                    </div>
                  </div>

                  {/* Dynamic Fields for TAB 1: BUG REPORT */}
                  {activeTab === "bug" && (
                    <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                        <Bug className="w-4 h-4" />
                        <span>Bug & Defect Details</span>
                      </div>

                      {/* Bug Title */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Issue Summary / Title *
                        </label>
                        <input
                          type="text"
                          name="bugTitle"
                          required
                          value={formData.bugTitle}
                          onChange={handleChange}
                          placeholder="e.g., QuickSort pivot pointer goes out of bounds on duplicate inputs"
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-text-primary placeholder-text-secondary transition-all"
                        />
                      </div>

                      {/* Affected Area & Severity */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Affected Algorithm or Section
                          </label>
                          <input
                            type="text"
                            name="affectedArea"
                            value={formData.affectedArea}
                            onChange={handleChange}
                            placeholder="e.g. Binary Search Tree / Speed Slider / Category Page"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-text-primary placeholder-text-secondary transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Severity Level
                          </label>
                          <select
                            name="severity"
                            value={formData.severity}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-text-primary transition-all"
                          >
                            {SEVERITIES.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.label} - {s.desc}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Steps to reproduce */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Steps to Reproduce *
                        </label>
                        <textarea
                          rows={3}
                          name="stepsToReproduce"
                          required
                          value={formData.stepsToReproduce}
                          onChange={handleChange}
                          placeholder={"1. Navigate to QuickSort visualizer\n2. Enter custom input: 5, 5, 5, 2\n3. Click 'Step Forward'"}
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-text-primary placeholder-text-secondary transition-all resize-y"
                        />
                      </div>

                      {/* Expected vs Actual */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Expected vs Actual Behavior
                        </label>
                        <textarea
                          rows={2}
                          name="expectedVsActual"
                          value={formData.expectedVsActual}
                          onChange={handleChange}
                          placeholder="Expected elements to partition correctly, but duplicate items overlapped on canvas."
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500/30 text-text-primary placeholder-text-secondary transition-all resize-y"
                        />
                      </div>

                      {/* Diagnostics toggle */}
                      <div className="clay-card p-3 rounded-xl bg-black/5 dark:bg-black/20 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-text-secondary">
                          <Laptop className="w-4 h-4 text-primary" />
                          <span className="text-[11px]">
                            Auto-attach browser & screen dimensions to aid debugging
                          </span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeDiagnostics}
                            onChange={(e) => setIncludeDiagnostics(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Fields for TAB 2: REQUEST ALGORITHM */}
                  {activeTab === "algorithm" && (
                    <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-500 uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4" />
                        <span>Algorithm / Data Structure Request</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2 flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Algorithm / Data Structure Name *
                          </label>
                          <input
                            type="text"
                            name="algorithmName"
                            required
                            value={formData.algorithmName}
                            onChange={handleChange}
                            placeholder="e.g. A* Pathfinding, Segment Tree, KMP Pattern Matching"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-text-primary placeholder-text-secondary transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Category *
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-text-primary transition-all capitalize"
                          >
                            {CATEGORIES.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.name}
                              </option>
                            ))}
                            <option value="other">Other / Advanced</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Difficulty Level
                          </label>
                          <select
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-text-primary transition-all"
                          >
                            {DIFFICULTIES.map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-text-primary">
                            Problem / Reference URL (Optional)
                          </label>
                          <input
                            type="url"
                            name="referenceUrl"
                            value={formData.referenceUrl}
                            onChange={handleChange}
                            placeholder="https://leetcode.com/problems/... or wiki link"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-text-primary placeholder-text-secondary transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Visualization Idea & Why It Should Be Added *
                        </label>
                        <textarea
                          rows={4}
                          name="reason"
                          required
                          value={formData.reason}
                          onChange={handleChange}
                          placeholder="Describe how this algorithm should look (e.g. highlight heuristic distance, color-code nodes visited vs unvisited, show step-by-step table)..."
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-text-primary placeholder-text-secondary transition-all resize-y"
                        />
                      </div>
                    </div>
                  )}

                  {/* Dynamic Fields for TAB 3: FEATURE SUGGESTION */}
                  {activeTab === "feature" && (
                    <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Feature Proposal</span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Feature Title *
                        </label>
                        <input
                          type="text"
                          name="featureTitle"
                          required
                          value={formData.featureTitle}
                          onChange={handleChange}
                          placeholder="e.g. Export visualizer simulation as animated GIF / WebM"
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-text-primary placeholder-text-secondary transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Feature Description & User Flow *
                        </label>
                        <textarea
                          rows={4}
                          name="featureDescription"
                          required
                          value={formData.featureDescription}
                          onChange={handleChange}
                          placeholder="Explain how this feature should work, where the button should live, and why it benefits learners..."
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-text-primary placeholder-text-secondary transition-all resize-y"
                        />
                      </div>
                    </div>
                  )}

                  {/* Dynamic Fields for TAB 4: GENERAL MESSAGE */}
                  {activeTab === "general" && (
                    <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
                        <MessageSquare className="w-4 h-4" />
                        <span>General Message</span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Project Inquiry / Collaboration / Question"
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-text-primary placeholder-text-secondary transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-text-primary">
                          Message *
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your note or question here..."
                          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-text-primary placeholder-text-secondary transition-all resize-y"
                        />
                      </div>
                    </div>
                  )}

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-start gap-2.5 text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <span className="font-bold">Submission Failed</span>
                        <span className="text-[11px] text-text-secondary">{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Submit Action Deck */}
                  <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-200/60 dark:border-white/5">
                    <span className="text-[11px] text-text-secondary flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Encrypted & spam-filtered
                    </span>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      variant="primary"
                      className="clay-btn clay-btn-primary px-6 py-3 font-bold text-xs shadow-md"
                      icon={status === "submitting" ? RefreshCw : Send}
                    >
                      {status === "submitting" ? "Sending Dispatch..." : "Send Dispatch via Web3Forms"}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: INFO & COMMUNITY DECK */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Card 1: Web3Forms Integration Badge */}
          <div className="clay-card p-5 rounded-2xl bg-gradient-to-br from-white/70 to-slate-50/50 dark:from-[#161B26] dark:to-[#111622] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                Direct Email Routing
              </h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Every ticket sent through this form triggers an instant notification directly to the maintainer's mailbox powered by <strong>Web3Forms</strong>.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg w-fit">
              <Check className="w-3 h-3" />
              <span>Response SLA: 24 - 48 Hours</span>
            </div>
          </div>

          {/* Card 2: Contribution Tips */}
          <div className="clay-card p-5 rounded-2xl bg-white/60 dark:bg-[#161B26]/60 flex flex-col gap-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
                Submission Tips
              </h3>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Bug Reports:</strong> Include the exact input values and steps that caused the anomaly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Algorithm Requests:</strong> Provide a reference link or LeetCode problem ID if applicable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span><strong>Features:</strong> Mention if you'd like to collaborate or submit a PR on GitHub.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Direct Navigation Quick Links */}
          <div className="clay-card p-5 rounded-2xl bg-white/60 dark:bg-[#161B26]/60 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Quick Shortcuts
            </h3>
            <div className="flex flex-col gap-1.5">
              <Link
                to="/dashboard"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-xs text-text-primary font-semibold transition-all"
              >
                <span>Browse All Data Structures</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />
              </Link>
              <Link
                to="/category/sorting"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-xs text-text-primary font-semibold transition-all"
              >
                <span>Explore Sorting Algorithms</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />
              </Link>
              <Link
                to="/category/graphs"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-xs text-text-primary font-semibold transition-all"
              >
                <span>Explore Graph Traversals</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
