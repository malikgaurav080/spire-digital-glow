import { useState } from "react";
import { Section } from "./Section";
import { aidlcMetrics, aidlcCaseStudy } from "@/lib/portfolio-data";
import { Bot, ArrowUpRight, CheckCircle2, Workflow } from "lucide-react";
import { CaseStudyModal, CaseStudyData } from "./CaseStudyModal";

export function AIDLC() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <Section
      id="aidlc"
      eyebrow="AIDLC & Agentic Systems"
      title={
        <>
          Deterministic AI pipelines &{" "}
          <span className="text-gradient">agentic acceleration</span>.
        </>
      }
      description="Beyond autocomplete — engineering deterministic multi-agent systems, Model Context Protocol (MCP) toolchains, and AST semantic verification for enterprise velocity."
    >
      {/* Flagship Highlight: 15-Minute Enterprise Microservice Migration Spotlight Card */}
      <div className="relative rounded-3xl border border-cyan-500/30 overflow-hidden bg-surface/70 backdrop-blur-xl p-6 sm:p-10 mb-12 shadow-xl">
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
        <div className="absolute -top-20 -right-20 size-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                <Bot className="size-4" /> Flagship AIDLC Case Study
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20 font-medium">
                {aidlcCaseStudy.tag}
              </span>
            </div>

            <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-foreground">
              Autonomous Transaction Microservice Migration: Node.js → TypeScript
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Converted an untyped, high-concurrency financial transaction service (payment webhooks,
              Finacle ESB adapters, and ACID ledger state) into 100% strict TypeScript in{" "}
              <strong className="text-foreground font-semibold">just 14m 38s</strong> using a
              hierarchical Hub-and-Spoke multi-agent architecture with a Master Orchestrator and 8 specialized subagents.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-border/70 bg-background/50 p-3">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Speedup</div>
                <div className="text-lg font-bold text-gradient font-display">
                  {aidlcMetrics.velocity}
                </div>
                <div className="text-[10px] text-muted-foreground font-mono">14m vs 120 hrs</div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/50 p-3">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Type Safety</div>
                <div className="text-lg font-bold text-emerald-400 font-display">
                  {aidlcMetrics.typeSafety} Strict
                </div>
                <div className="text-[10px] text-muted-foreground font-mono">Zero 'any' escapes</div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/50 p-3 col-span-2 sm:col-span-1">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Regression</div>
                <div className="text-lg font-bold text-cyan-400 font-display">
                  {aidlcMetrics.regressions} Errors
                </div>
                <div className="text-[10px] text-muted-foreground font-mono">142/142 tests pass</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedCaseStudy(aidlcCaseStudy)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold bg-foreground text-background hover:opacity-90 transition-all shadow-md cursor-pointer active:scale-95"
              >
                <span>Inspect Deep-Dive Case Study</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Subagent & MCP Architecture Summary Graphic */}
          <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-background/60 p-5 space-y-3">
            <div className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Workflow className="size-3.5 text-cyan-400" />
              Hub-and-Spoke Swarm Mechanics
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl border border-border/60 bg-surface/50">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Lead Orchestrator (DAG Dispatcher)</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Decomposed 48 modules into topologically ordered batches, streaming events to 8 subagents.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl border border-border/60 bg-surface/50">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">8 Specialized Subagents (MCP Pool)</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Dedicated workers for DB Schema, Ledger, Finacle CBS, Routes, Tests, AST Parity, Self-Healing, and GitOps.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl border border-border/60 bg-surface/50">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Continuous Self-Healing &amp; Parity</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Subagent-6 certified AST equivalence while Subagent-7 auto-resolved circular imports in under 450ms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </Section>
  );
}
