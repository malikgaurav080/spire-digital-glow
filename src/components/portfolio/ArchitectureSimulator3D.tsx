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
  normalMetric: string;
  surgeMetric: string;
  normalLatency: string;
  surgeLatency: string;
  resilience: string;
  normalDetails: string;
  surgeDetails: string;
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "edge",
    title: "Edge & Gateway",
    role: "Reverse Proxy & Auth",
    icon: Globe,
    normalMetric: "12,500 req/s",
    surgeMetric: "31,250 req/s (+250%)",
    normalLatency: "< 6ms",
    surgeLatency: "< 8ms (Throttled)",
    resilience: "Token Bucket Rate Limiting · TLS Offload",
    normalDetails:
      "Handles ingress traffic from web & mobile clients, enforcing JWT authentication, rate limiting, and request correlation IDs.",
    surgeDetails:
      "Ingress surged to 31,250 req/s. Token-bucket rate limiting automatically sheds unauthenticated bursts while prioritizing live checkout sessions.",
  },
  {
    id: "kafka",
    title: "Kafka Event Bus",
    role: "Distributed Ingestion",
    icon: Radio,
    normalMetric: "10k+ events/s",
    surgeMetric: "28k+ events/s (Peak)",
    normalLatency: "< 2ms",
    surgeLatency: "< 3.5ms (32 Partitions)",
    resilience: "3x Replication · Dead Letter Queues (DLQ)",
    normalDetails:
      "Decouples financial transaction streams, SIP scheduling events, and reconciliation triggers with zero data loss guarantee.",
    surgeDetails:
      "Partition rebalancing sustained 28k events/sec. Consumer worker groups scale horizontally with zero message loss or broker lag.",
  },
  {
    id: "workers",
    title: "Microservice Workers",
    role: "Transaction Engine",
    icon: Cpu,
    normalMetric: "40 Pods Normal",
    surgeMetric: "96 Pods Auto-Scaled",
    normalLatency: "< 25ms",
    surgeLatency: "< 22ms (Multi-Cluster)",
    resilience: "Idempotent Consumers · Circuit Breakers",
    normalDetails:
      "Stateless Node.js services executing payment validation, Axis Bank Finacle integration, and Digital Gold trade allocations.",
    surgeDetails:
      "Kubernetes HPA rapidly scaled worker fleet from 40 to 96 pods. Circuit breakers protect downstream bank core endpoints from timeouts.",
  },
  {
    id: "cache",
    title: "Redis Cluster",
    role: "In-Memory State & Cache",
    icon: Zap,
    normalMetric: "99.4% Hit Ratio",
    surgeMetric: "99.8% (Shield Active)",
    normalLatency: "< 1.2ms",
    surgeLatency: "< 1.4ms (Clustered)",
    resilience: "Read-Through · Multi-AZ Replication",
    normalDetails:
      "Caches live gold market rates, active user session context, and rate limiter buckets with sub-millisecond read access.",
    surgeDetails:
      "Redis cluster absorbs 99.8% of read queries, effectively shielding the primary PostgreSQL and Mongo databases from connection exhaustion.",
  },
  {
    id: "storage",
    title: "PostgreSQL & Mongo",
    role: "Distributed Persistence",
    icon: Database,
    normalMetric: "ACID Guaranteed",
    surgeMetric: "Write-Behind Active",
    normalLatency: "< 12ms",
    surgeLatency: "< 14ms (Batched I/O)",
    resilience: "Automated Failover · Write-Ahead Logging",
    normalDetails:
      "Immutable double-entry financial ledger and audit store with sharded collections and point-in-time point recovery.",
    surgeDetails:
      "Transactional write-behind queues and batched writes buffer ledger commitments, maintaining sub-15ms latency without lock contention.",
  },
];

export function ArchitectureSimulator3D() {
  const [activeId, setActiveId] = useState<string>("kafka");
  const [spike, setSpike] = useState(false);

  const activeNode = PIPELINE_NODES.find((n) => n.id === activeId) || PIPELINE_NODES[1];

  // Auto-cycle through nodes during surge simulation to demonstrate end-to-end traffic flow
  useEffect(() => {
    if (!spike) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = PIPELINE_NODES.findIndex((n) => n.id === currentId);
        const nextIndex = (currentIndex + 1) % PIPELINE_NODES.length;
        return PIPELINE_NODES[nextIndex].id;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [spike]);

  const handleManualSelect = (id: string) => {
    setActiveId(id);
  };

  return (
    <div
      className={`relative rounded-3xl border transition-all duration-500 bg-surface/70 backdrop-blur-xl p-6 sm:p-8 overflow-hidden mb-12 shadow-2xl ${
        spike ? "border-amber-500/50 shadow-amber-500/10" : "border-border/80"
      }`}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r transition-all duration-500 ${
          spike
            ? "from-transparent via-amber-400 to-transparent opacity-90 shadow-[0_0_15px_#f59e0b]"
            : "from-transparent via-brand to-transparent opacity-60"
        }`}
      />
      <div
        className={`absolute -bottom-20 -right-20 size-72 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
          spike ? "bg-amber-500/20" : "bg-brand/10"
        }`}
      />

      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold transition-colors ${
                spike ? "text-amber-400" : "text-brand"
              }`}
            >
              <Activity className="size-3.5 animate-pulse" />
              {spike ? "Surge Simulation Active" : "Live Architecture Visualizer"}
            </span>
            {spike && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse font-medium">
                +250% Traffic Spike
              </span>
            )}
          </div>
          <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl tracking-tight text-foreground">
            Event-Driven Distributed Pipeline
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSpike(!spike)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer shadow-sm active:scale-95 ${
              spike
                ? "bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-500/20 font-semibold"
                : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-brand/40"
            }`}
          >
            <Zap className={`size-3.5 ${spike ? "text-amber-400 fill-amber-400 animate-bounce" : ""}`} />
            {spike ? "Stop Surge Simulation" : "Simulate Surge (2.5x)"}
          </button>
        </div>
      </div>

      {/* Interactive 3D Flow Nodes */}
      <div className="relative py-8 overflow-x-auto no-scrollbar">
        <div className="min-w-[720px] flex items-center justify-between relative px-2">
          {/* Animated Connecting Data Bus Line */}
          <div
            className={`absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 transition-all duration-300 z-0 rounded-full ${
              spike
                ? "bg-amber-500/50 shadow-[0_0_16px_rgba(245,158,11,0.6)]"
                : "bg-border/80"
            }`}
          >
            {/* Animated Data Packets traveling along the full bus line from 0% to 100% */}
            <motion.div
              key={`bus-packet-1-${spike ? "spike" : "normal"}`}
              animate={{ left: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: spike ? 1.4 : 3.2,
                ease: "linear",
              }}
              style={{ position: "absolute", top: "50%" }}
              className={`-translate-x-1/2 -translate-y-1/2 size-3.5 rounded-full z-10 ${
                spike
                  ? "bg-amber-400 shadow-[0_0_16px_#fbbf24]"
                  : "bg-brand shadow-[0_0_12px_#34d399]"
              }`}
            />
            <motion.div
              key={`bus-packet-2-${spike ? "spike" : "normal"}`}
              animate={{ left: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: spike ? 1.4 : 3.2,
                ease: "linear",
                delay: spike ? 0.45 : 1.6,
              }}
              style={{ position: "absolute", top: "50%" }}
              className={`-translate-x-1/2 -translate-y-1/2 size-3 rounded-full z-10 ${
                spike
                  ? "bg-orange-400 shadow-[0_0_14px_#fb923c]"
                  : "bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
              }`}
            />
            {spike && (
              <motion.div
                key="bus-packet-3-surge"
                animate={{ left: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "linear",
                  delay: 0.9,
                }}
                style={{ position: "absolute", top: "50%" }}
                className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-rose-400 shadow-[0_0_14px_#f43f5e] z-10"
              />
            )}
          </div>

          {PIPELINE_NODES.map((node) => {
            const isSelected = node.id === activeId;
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                onClick={() => handleManualSelect(node.id)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative z-10 flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? spike
                      ? "bg-surface border-2 border-amber-400 shadow-xl shadow-amber-500/20 ring-4 ring-amber-500/15 scale-105"
                      : "bg-surface border-2 border-brand shadow-xl shadow-brand/10 ring-4 ring-brand/10"
                    : "bg-surface/80 border border-border/80 hover:border-brand/40"
                }`}
                style={{ width: "132px" }}
              >
                <div
                  className={`grid place-items-center size-12 rounded-xl mb-2 transition-colors ${
                    isSelected
                      ? spike
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/20"
                        : "bg-brand text-background shadow-lg shadow-brand/30"
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
                <span
                  className={`mt-2 text-[10px] font-mono px-1.5 py-0.5 rounded font-medium transition-colors ${
                    spike
                      ? isSelected
                        ? "bg-amber-500/25 text-amber-200 border border-amber-500/40"
                        : "bg-amber-500/15 text-amber-300"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {spike ? node.surgeLatency : node.normalLatency}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeNode.id}-${spike ? "surge" : "normal"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={`rounded-2xl border bg-background/50 p-5 mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${
            spike ? "border-amber-500/30" : "border-brand/20"
          }`}
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-mono font-semibold uppercase ${
                  spike ? "text-amber-400" : "text-brand"
                }`}
              >
                {spike && <span className="size-1.5 rounded-full bg-amber-400 animate-ping inline-block mr-1.5" />}
                [Node: {activeNode.title}]
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs font-mono text-muted-foreground">
                {spike ? activeNode.surgeMetric : activeNode.normalMetric}
              </span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {spike ? activeNode.surgeDetails : activeNode.normalDetails}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 shrink-0 sm:border-l sm:border-border/60 sm:pl-6">
            <div>
              <div className="text-[11px] font-mono text-muted-foreground">Resilience Pattern</div>
              <div
                className={`text-xs font-medium mt-0.5 ${
                  spike ? "text-amber-400" : "text-brand"
                }`}
              >
                {activeNode.resilience}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-muted-foreground">
                {spike ? "Surge Throughput" : "Target Latency SLA"}
              </div>
              <div className="text-xs font-medium text-foreground mt-0.5">
                {spike ? activeNode.surgeMetric : `${activeNode.normalLatency} (p99)`}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

