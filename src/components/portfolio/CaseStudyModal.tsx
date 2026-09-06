import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Cpu, CheckCircle2, Workflow, ArrowRight } from "lucide-react";

export interface CaseStudyData {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  icon?: React.ComponentType<{ className?: string }>;
  caseStudy?: {
    challenge: string;
    architecture: string;
    resilience: string;
    results: string[];
  };
}

interface CaseStudyModalProps {
  item: CaseStudyData | null;
  onClose: () => void;
}

export function CaseStudyModal({ item, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item || !item.caseStudy) return null;

  const { caseStudy } = item;
  const Icon = item.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-surface/95 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-8"
        >
          {/* Ambient header glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />

          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex items-center gap-3.5">
              {Icon && (
                <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background shadow-md">
                  <Icon className="size-6" />
                </span>
              )}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-brand font-medium">
                  {item.tag}
                </div>
                <h2 className="mt-0.5 font-display font-semibold text-2xl sm:text-3xl tracking-tight text-foreground">
                  {item.title}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close case study"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Deep-Dive Content Body */}
          <div className="mt-6 space-y-6 text-sm">
            {/* 1. The Challenge */}
            <div className="rounded-2xl border border-border/60 bg-background/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                <ShieldAlert className="size-4" />
                The Engineering Challenge
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* 2. System Architecture */}
            <div className="rounded-2xl border border-border/60 bg-background/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand">
                <Workflow className="size-4" />
                System Architecture &amp; Decisions
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{caseStudy.architecture}</p>
            </div>

            {/* 3. Resilience & Failure Handling */}
            <div className="rounded-2xl border border-border/60 bg-background/40 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                <Cpu className="size-4" />
                Fault Tolerance &amp; Resilience
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{caseStudy.resilience}</p>
            </div>

            {/* 4. Measurable Results */}
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Production Impact
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {caseStudy.results.map((res, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-xl border border-brand/20 bg-brand/5 p-3"
                  >
                    <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-foreground">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 border-t border-border/50 flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-mono text-muted-foreground mr-2">Core Stack:</span>
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-border bg-background/50 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
