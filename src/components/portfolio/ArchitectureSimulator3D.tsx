import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Radio,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  Activity,
  Zap,
  ShieldAlert,
  Server,
} from "lucide-react";

interface PipelineNode {
  id: string;
  title: string;
  role: string;
  icon: typeof Globe;
  metric: string;
  latency: string;
  resilience: string;
  details: string;
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "edge",
    title: "Edge & Gateway",
    role: "Reverse Proxy & Auth",
    icon: Globe,
    metric: "12,500 req/s",
    latency: "< 6ms",
    resilience: "Token Bucket Rate Limiting · TLS Termination",
    details:
      "Handles ingress traffic from web & mobile clients, enforcing JWT authentication, rate limiting, and request correlation IDs.",
  },
  {
    id: "kafka",
    title: "Kafka Event Bus",
    role: "Distributed Ingestion",
    icon: Radio,
    metric: "10k+ events/s",
    latency: "< 2ms",
    resilience: "3x Replication · Dead Letter Queues (DLQ)",
    details:
      "Decouples financial transaction streams, SIP scheduling events, and reconciliation triggers with zero data loss guarantee.",
  },
  {
    id: "workers",
    title: "Microservice Workers",
    role: "Transaction Orchestration",
    icon: Cpu,
    metric: "40 Pods Auto-scale",
    latency: "< 25ms",
    resilience: "Idempotent Consumers · Circuit Breakers",
    details:
      "Stateless Node.js services executing payment validation, Axis Bank Finacle integration, and Digital Gold trade allocations.",
  },
  {
    id: "cache",
    title: "Redis Cluster",
    role: "In-Memory State & Cache",
    icon: Zap,
    metric: "99.4% Hit Ratio",
    latency: "< 1.2ms",
    resilience: "Read-Through · Multi-AZ Replication",
    details:
      "Caches live gold market rates, active user session context, and rate limiter buckets with sub-millisecond read access.",
  },
  {
    id: "storage",
    title: "PostgreSQL & Mongo",
    role: "Distributed Persistence",
    icon: Database,
    metric: "ACID Guaranteed",
    latency: "< 12ms",
    resilience: "Automated Failover · Write-Ahead Logging",
    details:
      "Immutable double-entry financial ledger and audit store with sharded collections and point-in-time point recovery.",
  },
];

export function ArchitectureSimulator3D() {
  const [activeId, setActiveId] = useState<string>("kafka");
  const [spike, setSpike] = useState(false);

  const activeNode = PIPELINE_NODES.find((n) => n.id === activeId) || PIPELINE_NODES[1];

  return (
    <div className="relative rounded-3xl border border-border/80 bg-surface/70 backdrop-blur-xl p-6 sm:p-8 overflow-hidden mb-12 shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
      <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand">
            <Activity className="size-3.5 animate-pulse" /> Live Architecture Visualizer
          </span>
          <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl tracking-tight">
            Event-Driven Distributed Pipeline
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSpike(!spike)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              spike
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Zap className={`size-3 ${spike ? "text-amber-400 fill-amber-400" : ""}`} />
            {spike ? "Simulating Traffic Spike (2.5x)" : "Simulate Surge"}
          </button>
        </div>
      </div>

      {/* Interactive 3D Flow Nodes */}
      <div className="relative py-8 overflow-x-auto">
        <div className="min-w-[700px] flex items-center justify-between relative">
          {/* Animated Connecting Data Bus Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[3px] bg-border/80 z-0">
            {/* Animated Data Packets traveling along the bus */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: spike ? 1.2 : 2.6,
                ease: "linear",
              }}
              className="absolute top-1/2 -translate-y-1/2 size-3 rounded-full bg-brand shadow-[0_0_12px_#34d399]"
            />
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: spike ? 1.2 : 2.6,
                ease: "linear",
                delay: spike ? 0.6 : 1.3,
              }}
              className="absolute top-1/2 -translate-y-1/2 size-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            />
          </div>

          {PIPELINE_NODES.map((node) => {
            const isSelected = node.id === activeId;
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                onClick={() => setActiveId(node.id)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative z-10 flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? "bg-surface border-2 border-brand shadow-xl shadow-brand/10 ring-4 ring-brand/10"
                    : "bg-surface/80 border border-border/80 hover:border-brand/40"
                }`}
                style={{ width: "130px" }}
              >
                <div
                  className={`grid place-items-center size-12 rounded-xl mb-2 transition-colors ${
                    isSelected
                      ? "bg-brand text-background shadow-lg shadow-brand/30"
                      : "bg-foreground/5 text-foreground border border-border"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <span className="font-display font-semibold text-xs tracking-tight text-foreground">
                  {node.title}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {node.role}
                </span>
                <span className="mt-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand/10 text-brand font-medium">
                  {node.latency}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-brand/20 bg-background/50 p-5 mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase text-brand">
                [Node: {activeNode.title}]
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs font-mono text-muted-foreground">{activeNode.metric}</span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{activeNode.details}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 shrink-0 sm:border-l sm:border-border/60 sm:pl-6">
            <div>
              <div className="text-[11px] font-mono text-muted-foreground">Resilience Pattern</div>
              <div className="text-xs font-medium text-brand mt-0.5">{activeNode.resilience}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-muted-foreground">Target Latency SLA</div>
              <div className="text-xs font-medium text-foreground mt-0.5">
                {activeNode.latency} (p99)
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
