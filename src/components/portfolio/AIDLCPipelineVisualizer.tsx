import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Workflow,
  Database,
  Layers,
  CheckCircle2,
  Terminal,
  GitPullRequest,
  ArrowUpRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { aidlcCaseStudy } from "@/lib/portfolio-data";
import { CaseStudyData } from "./CaseStudyModal";

interface PipelineStage {
  id: string;
  name: string;
  role: string;
  time: string;
  icon: typeof Workflow;
  summary: string;
  toolchain: string;
  output: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "orchestrator",
    name: "Master DAG",
    role: "Task Planner",
    time: "1m 12s",
    icon: Workflow,
    summary:
      "Decomposed 48 untyped CommonJS modules into topologically ordered execution batches via the MCP event bus.",
    toolchain: "MCP JSON-RPC Bus",
    output: "48 Batched Tasks",
  },
  {
    id: "schema",
    name: "Schema & Zod",
    role: "Type Synthesizer",
    time: "2m 28s",
    icon: Database,
    summary:
      "Reflected PostgreSQL and MongoDB catalogs to generate strict TypeScript interfaces and runtime Zod validation contracts.",
    toolchain: "DB Schema MCP",
    output: "Zero 'any' Types",
  },
  {
    id: "domain",
    name: "Core Domain",
    role: "Ledger & Finacle",
    time: "3m 45s",
    icon: Layers,
    summary:
      "Transpiled ACID ledger state machines, Axis Bank Finacle adapters, and Redis lock flows into typed handlers.",
    toolchain: "AST Engine MCP",
    output: "ACID State Parity",
  },
  {
    id: "tests",
    name: "Test Harness",
    role: "Regression Suite",
    time: "2m 15s",
    icon: CheckCircle2,
    summary:
      "Migrated 142 test suites to TypeScript and verified all unit, mock, and integration assertions pass in Docker.",
    toolchain: "Jest Runner MCP",
    output: "142/142 Passed",
  },
  {
    id: "parity",
    name: "AST Parity",
    role: "Semantic Equivalence",
    time: "1m 35s",
    icon: Terminal,
    summary:
      "Compared pre- and post-migration Abstract Syntax Trees to mathematically prove zero behavioral or control-flow drift.",
    toolchain: "AST Parity MCP",
    output: "0 Logic Drift",
  },
  {
    id: "gitops",
    name: "GitOps & PR",
    role: "Verified Pull Request",
    time: "48s",
    icon: GitPullRequest,
    summary:
      "Scanned security policies, generated architectural diff changelogs, and opened verified GitHub Pull Request #84.",
    toolchain: "GitHub MCP",
    output: "PR #84 Ready",
  },
];

interface AIDLCPipelineVisualizerProps {
  onInspectCaseStudy: (item: CaseStudyData) => void;
}

export function AIDLCPipelineVisualizer({ onInspectCaseStudy }: AIDLCPipelineVisualizerProps) {
  const [activeId, setActiveId] = useState<string>("orchestrator");
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeStage = STAGES.find((s) => s.id === activeId) || STAGES[0];

  // Smoothly center the active node in the scroll track whenever activeId changes (on click or during simulation)
  useEffect(() => {
    const container = scrollRef.current;
    const nodeEl = document.getElementById(`aidlc-node-${activeId}`);
    if (!container || !nodeEl) return;

    const nodeOffsetLeft = nodeEl.offsetLeft;
    const nodeWidth = nodeEl.offsetWidth;
    const containerWidth = container.clientWidth;
    const scrollTarget = nodeOffsetLeft - containerWidth / 2 + nodeWidth / 2;

    container.scrollTo({
      left: Math.max(0, scrollTarget),
      behavior: "smooth",
    });
  }, [activeId]);

  // Option A: Auto-play live simulation stepping through all 6 stages
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = STAGES.findIndex((s) => s.id === currentId);
        const nextIndex = (currentIndex + 1) % STAGES.length;
        return STAGES[nextIndex].id;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  const handleStartSimulation = () => {
    setIsPlaying(true);
    // If currently at the last stage, loop back to stage 0
    if (activeId === STAGES[STAGES.length - 1].id) {
      setActiveId(STAGES[0].id);
    }
  };

  const handleManualSelect = (id: string) => {
    setActiveId(id);
    // Pause auto-play when user clicks a node manually
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative rounded-3xl border border-cyan-500/30 bg-surface/70 backdrop-blur-xl p-6 sm:p-8 mb-12 shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
      <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              <Bot className="size-3.5" /> Flagship AIDLC Pipeline
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20 font-medium">
              14m 38s Autonomous
            </span>
          </div>
          <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl tracking-tight text-foreground">
            Node.js → Strict TypeScript Migration
          </h3>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Option A: Simulate Button with live Play/Pause auto-play */}
          {isPlaying ? (
            <button
              onClick={() => setIsPlaying(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 active:scale-95"
            >
              <Pause className="size-3 fill-amber-400" />
              <span>Pause Replay</span>
            </button>
          ) : (
            <button
              onClick={handleStartSimulation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 shadow-lg shadow-cyan-500/10 active:scale-95"
            >
              <Play className="size-3 fill-cyan-400" />
              <span>Simulate Migration</span>
            </button>
          )}

          <button
            onClick={() => onInspectCaseStudy(aidlcCaseStudy)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-foreground text-background hover:opacity-90 transition-all cursor-pointer active:scale-95"
          >
            <span>Case Study</span>
            <ArrowUpRight className="size-3.5" />
          </button>

          <div className="hidden sm:flex items-center gap-1 ml-2 border-l border-border/60 pl-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-1 rounded-full border border-border/70 bg-surface text-foreground/80 hover:text-foreground hover:border-cyan-500/40 transition-all cursor-pointer"
            >
              <ChevronLeft className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-1 rounded-full border border-border/70 bg-surface text-foreground/80 hover:text-foreground hover:border-cyan-500/40 transition-all cursor-pointer"
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Pipeline Track */}
      <div
        ref={scrollRef}
        className="relative py-7 overflow-x-auto no-scrollbar scroll-smooth select-none cursor-grab active:cursor-grabbing"
      >
        <div className="min-w-[820px] flex items-center justify-between relative px-2">
          {/* Animated Connecting Bus Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-border/80 z-0 rounded-full">
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: isPlaying ? 1.5 : 3.2,
                ease: "linear",
              }}
              style={{ position: "absolute", top: "50%" }}
              className="-translate-x-1/2 -translate-y-1/2 size-3.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] z-10"
            />
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: isPlaying ? 1.5 : 3.2,
                ease: "linear",
                delay: isPlaying ? 0.75 : 1.6,
              }}
              style={{ position: "absolute", top: "50%" }}
              className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-brand shadow-[0_0_12px_#34d399] z-10"
            />
          </div>

          {STAGES.map((stage) => {
            const isSelected = stage.id === activeId;
            const Icon = stage.icon;

            return (
              <motion.button
                id={`aidlc-node-${stage.id}`}
                key={stage.id}
                onClick={() => handleManualSelect(stage.id)}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`relative z-10 flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-surface border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-4 ring-cyan-500/20 scale-105"
                    : "bg-surface/80 border border-border/80 hover:border-cyan-500/40"
                }`}
                style={{ width: "124px" }}
              >
                <div
                  className={`grid place-items-center size-11 rounded-xl mb-2 transition-colors ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10"
                      : "bg-foreground/5 text-foreground border border-border"
                  }`}
                >
                  <Icon className="size-5" />
                </div>

                <span className="font-display font-semibold text-xs tracking-tight text-foreground">
                  {stage.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {stage.role}
                </span>
                <span
                  className={`mt-2 text-[10px] font-mono px-1.5 py-0.5 rounded font-medium transition-colors ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"
                      : "bg-cyan-500/10 text-cyan-300"
                  }`}
                >
                  {stage.time}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-cyan-500/20 bg-background/50 p-5 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase text-cyan-400 flex items-center gap-1.5">
                {isPlaying && <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />}
                [Stage: {activeStage.name}]
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs font-mono text-muted-foreground">{activeStage.role}</span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{activeStage.summary}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 shrink-0 sm:border-l sm:border-border/60 sm:pl-6">
            <div>
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="size-3 text-cyan-400" />
                <span>Toolchain</span>
              </div>
              <div className="text-xs font-semibold text-foreground mt-0.5">
                {activeStage.toolchain}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="size-3 text-brand" />
                <span>Result</span>
              </div>
              <div className="text-xs font-mono text-brand font-medium mt-0.5">
                {activeStage.output}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
