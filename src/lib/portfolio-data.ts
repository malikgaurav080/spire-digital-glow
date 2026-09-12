import {
  Server,
  Database,
  Cloud,
  Network,
  Radio,
  Zap,
  Layers,
  Shield,
  GitBranch,
  Activity,
  Boxes,
  Workflow,
  Cpu,
  MessageSquare,
  GaugeCircle,
  Binary,
  BrainCircuit,
  LineChart,
  BarChart3,
  Bot,
  Sparkles,
  Terminal,
  FileCode,
  CheckCircle2,
  GitPullRequest,
} from "lucide-react";

export const profile = {
  name: "Gaurav Malik",
  title: "Senior Software Development Engineer",
  subtitle: "Backend · Node.js · Microservices · Distributed Systems",
  experience: "4.5+ Years",
  location: "Gurgaon, India",
  email: "malikgaurav080@gmail.com",
  phone: "+91 8791034774",
  linkedin: "https://www.linkedin.com/in/gaurav-malik-a68b08174",
  github: "https://github.com/malikgaurav080",
  instagram: "https://www.instagram.com/malikgaurav080",
  resumeUrl: "/resume.pdf",
};

export const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "TypeScript", "Express.js", "Python", "REST APIs", "GraphQL", "SOAP APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Jenkins", "CI/CD", "GitHub", "Bitbucket"],
  },
  {
    title: "Architecture",
    icon: Layers,
    items: [
      "Microservices",
      "Event-Driven",
      "System Design",
      "Design Patterns",
      "Distributed Systems",
      "Caching",
      "Queue Processing",
    ],
  },
  {
    title: "Messaging",
    icon: Radio,
    items: ["Kafka", "RabbitMQ", "AWS SQS", "AWS SNS"],
  },
];

export const experience = [
  {
    company: "Freecharge",
    role: "Senior Software Development Engineer",
    period: "Mar 2023 — Present",
    current: true,
    highlights: [
      "Supporting Axis Bank's fintech platforms through Freecharge, ensuring platform stability and scalability during the organizational transition.",
      "Building scalable backend systems and distributed services for high-volume financial transaction processing.",
      "Designed and delivered a Mutual Fund Notification System using event-driven architecture, enabling real-time Email, Push, and In-App notifications for transaction and SIP events.",
      "Built and scaled the Digital Gold platform serving 1.5M+ users and developed the NPS platform from scratch with KFintech integration, ensuring secure, reliable, and seamless financial transactions.",
      "Designed scalable microservices and event-driven architectures, while implementing reporting, reconciliation, and automation systems and leading backend development initiatives through effective cross-team collaboration.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Apr 2021 — Sep 2022",
    current: false,
    highlights: [
      "Built scalable Node.js microservices for enterprise clients.",
      "Optimized APIs using Redis caching and async processing.",
      "Implemented Docker containers and CI/CD pipelines.",
    ],
  },
];

export const aidlcCaseStudy = {
  title: "15-Min Automated Transaction Microservice Migration",
  tag: "AIDLC · Multi-Agent · 480x Speedup",
  description:
    "Engineered an event-driven Hub-and-Spoke multi-agent pipeline using Model Context Protocol (MCP) to autonomously decompose, convert, and verify a large-scale financial transaction microservice from Node.js to strict TypeScript in just 14m 38s with zero runtime regressions.",
  tech: ["TypeScript", "Node.js", "Subagents Swarm", "MCP Servers", "AST Parsers", "Docker", "Jest"],
  icon: Bot,
  caseStudy: {
    challenge:
      "A mission-critical financial transaction microservice (payment webhooks, Redis locks, Axis Bank Finacle ESB adapters, and ledger settlement) was written in CommonJS Node.js with complex untyped state. Manual migration was estimated at 3 weeks (120+ dev hours) with high risk of introducing runtime regressions into live financial flows.",
    architecture:
      "Designed a hierarchical Hub-and-Spoke multi-agent architecture. A Lead Orchestrator Agent generated topological dependency DAGs and enqueued discrete conversion payloads over an event bus. 8 specialized subagents ran concurrently: (1) Schema & DTO Synthesizer via DB Schema MCP, (2) Core Domain & Ledger Engineer, (3) Finacle CBS Protocol Bridge via Postman MCP, (4) Routes & Auth Guards Engineer, (5) Unit & Mock Test Harness via Jest MCP, (6) AST Semantic Parity Auditor, (7) Self-Healing Compiler Agent resolving tsc diagnostics, and (8) GitOps & Security Reviewer.",
    resilience:
      "Continuous two-phase verification loop: Subagents reported completion tokens and AST signatures back to the Master Orchestrator. The AST Parity Engine guaranteed zero control-flow divergence, the Self-Healing Agent resolved circular imports and strict null errors in real time, and automated Dead Letter Queues prevented faulty commits.",
    results: [
      "14m 38s autonomous migration time vs 120+ hours manual estimate (~480x velocity multiplier)",
      "8 specialized subagents coordinated concurrently without cross-contamination or hallucination",
      "100% strict TypeScript mode compliance with zero 'any' escapes across 48 modules",
      "0 runtime regressions detected across 140+ integration test suites",
      "Automated OpenAPI specifications & runtime Zod validation contracts synchronized across all endpoints",
    ],
  },
};

export const projects = [
  {
    title: "Digital Gold Platform",
    tag: "Fintech · 1.5M+ users",
    description:
      "Architected and scaled the Digital Gold platform, driving microservices migration, 90% SIP processing optimization, 30% reduction in transaction failures, and automated reconciliation/refund workflows to enhance reliability, scalability, and operational efficiency.",
    tech: ["Node.js", "MongoDB", "Redis", "AWS SQS/SNS", "Microservices"],
    icon: Boxes,
    caseStudy: {
      challenge:
        "Handling massive transaction concurrency surges during festival days (e.g. Dhanteras) where purchase volume scaled 10x, requiring sub-second live bullion price locks and zero-loss financial consistency.",
      architecture:
        "Migrated monolithic checkout into event-driven Node.js microservices. Implemented AWS SQS/SNS for asynchronous buy/sell/SIP queues, Redis clusters for live bullion pricing locks, and MongoDB with audit trails.",
      resilience:
        "Idempotent payment webhook processing using Redis mutex locks, automated partner reconciliation batch jobs with vault partners, and Dead Letter Queue backpressure routing.",
      results: [
        "90% reduction in SIP processing latency",
        "30% drop in payment gateway transaction failures",
        "Scaled platform seamlessly to 1.5M+ active users",
      ],
    },
  },
  {
    title: "National Pension System (NPS)",
    tag: "Greenfield · KFintech",
    description:
      "Architected and delivered the NPS platform from the ground up, integrating with KFintech to support Lump Sum and SIP investments while optimizing secure, compliant, and high-performance transaction workflows.",
    tech: ["Node.js", "MongoDB", "Redis", "AWS"],
    icon: Shield,
    caseStudy: {
      challenge:
        "Building a regulated greenfield government pension platform with complex multi-tier KFintech CRA APIs, strict PFRDA compliance, and zero tolerance for inconsistent ledger states.",
      architecture:
        "Clean layered microservices architecture with isolated adapter layers for KFintech SOAP/REST interfaces, automated SIP mandate registration, and event-driven payment confirmation pipelines.",
      resilience:
        "Two-phase commit verification against bank settlement gateways, automated retry policies with jitter, and encrypted audit logging for regulatory compliance.",
      results: [
        "100% compliant launch certified with zero audit flags",
        "Under 2-second average investment checkout workflow",
        "Automated recurring SIP mandate scheduling",
      ],
    },
  },
  {
    title: "Gold Loan Renewal Journey",
    tag: "Automation · <3min disbursal",
    description:
      "Designed and delivered a fully automated Gold Loan Renewal platform for Axis Bank, reducing loan disbursal time to under 3 minutes through end-to-end automation, payment exception handling, and seamless Finacle/ESB integrations.",
    tech: ["Node.js", "Redis", "MongoDB", "Microservices"],
    icon: Zap,
    caseStudy: {
      challenge:
        "Axis Bank customers faced 2-3 day manual branch delays for gold loan renewals. The goal was full end-to-end digital automation with core banking Finacle integrations and real-time collateral re-valuation.",
      architecture:
        "High-performance Node.js orchestration engine communicating with Axis Bank Enterprise Service Bus (ESB), Finacle CBS, and payment aggregators with distributed state machines.",
      resilience:
        "Idempotent loan closure and rollover triggers, payment exception handling circuits, and automatic rollback on core banking timeouts.",
      results: [
        "Reduced customer loan disbursal time from 2+ days to < 3 minutes",
        "99.8% STP (Straight-Through Processing) automation rate",
        "Eliminated manual branch intervention for renewal workflows",
      ],
    },
  },
  {
    title: "Mutual Fund Notification System",
    tag: "Event-driven · Distributed",
    description:
      "Distributed notification platform supporting Buy/Sell/SIP transaction events with Email, Push, and In-App notifications. Kafka-based event-driven architecture with retry, lifecycle, and SIP reminder scheduling.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "Redis"],
    icon: MessageSquare,
    caseStudy: {
      challenge:
        "Delivering millions of time-sensitive NAV notifications, SIP payment alerts, and transaction lifecycle receipts across multiple channels with priority queuing and rate limits.",
      architecture:
        "Kafka-centered event-driven messaging topology with partition keying by user ID, priority worker consumer pools, and Redis for notification deduplication and rate throttling.",
      resilience:
        "Dead Letter Queue (DLQ) isolation for undeliverable push tokens, automated exponential backoff retries, and transactional outbox pattern for database events.",
      results: [
        "Processes millions of events daily with < 500ms delivery SLA",
        "Zero duplicate notification dispatches via Redis idempotency",
        "Dynamic multi-channel fallback (Push -> In-App -> Email)",
      ],
    },
  },
];

export const systemDesign = [
  {
    title: "Distributed Systems",
    icon: Network,
    desc: "Designing resilient, partition-tolerant services at scale.",
  },
  {
    title: "Event-Driven Architecture",
    icon: Workflow,
    desc: "Kafka & SNS/SQS choreographies for loosely coupled domains.",
  },
  {
    title: "Notification Systems",
    icon: MessageSquare,
    desc: "Multi-channel pipelines with retries and lifecycle tracking.",
  },
  {
    title: "Payment Systems",
    icon: Shield,
    desc: "Idempotent, audited transaction flows for fintech.",
  },
  {
    title: "Fintech Platforms",
    icon: Boxes,
    desc: "Gold, NPS, mutual funds — regulated, high-trust workloads.",
  },
  {
    title: "Queue-Based Processing",
    icon: Layers,
    desc: "Backpressure, DLQs, and async job orchestration.",
  },
  {
    title: "Caching Strategies",
    icon: GaugeCircle,
    desc: "Read-through, write-behind, and edge caching with Redis.",
  },
  {
    title: "Scalability Patterns",
    icon: Activity,
    desc: "Sharding, replication, and horizontal scale playbooks.",
  },
  {
    title: "High Availability",
    icon: GitBranch,
    desc: "Active-active deployments, failover, and zero-downtime ops.",
  },
];

export const aidlc = [
  {
    title: "Multi-Agent Task Decomposition (DAG)",
    desc: "Directed Acyclic Graphs decoupling complex microservices into bounded concurrent units.",
    icon: Workflow,
  },
  {
    title: "Model Context Protocol (MCP)",
    desc: "Standardized tool interfaces connecting LLM agents to Git, DB schemas, AST engines & test runners.",
    icon: Cpu,
  },
  {
    title: "AST Semantic Parity Verification",
    desc: "Ensuring zero behavioral drift or control flow mutations during transpilation.",
    icon: Terminal,
  },
  {
    title: "Automated Test & Contract Scaffolding",
    desc: "Auto-generating Zod schemas, OpenAPI contracts, and containerized regression suites.",
    icon: CheckCircle2,
  },
  {
    title: "Continuous Verification & GitOps",
    desc: "Self-healing compiler feedback loops (`tsc --noEmit`) before opening verified Pull Requests.",
    icon: GitPullRequest,
  },
  {
    title: "15-Min Enterprise MS Migration",
    desc: "Live migration from CommonJS Node.js to strict TypeScript via Master Orchestrator + 8 specialized subagents.",
    icon: Sparkles,
  },
];

export const mcpEcosystem = [
  {
    name: "GitHub MCP Server",
    role: "GitOps & PR Orchestration",
    desc: "Isolated branch sandboxing, atomic per-module commits, and auto-generated PR diff analysis.",
    icon: GitPullRequest,
    badge: "Version Control",
  },
  {
    name: "DB Schema MCP Server",
    role: "Schema Reflection & DTO Synthesis",
    desc: "Direct introspection of PostgreSQL & MongoDB catalogs to generate typed entities & Zod contracts.",
    icon: Database,
    badge: "Data Layer",
  },
  {
    name: "Postman & REST MCP",
    role: "Contract Regression Testing",
    desc: "Executes automated integration suites against live/mock endpoints to certify zero payload drift.",
    icon: MessageSquare,
    badge: "API Testing",
  },
  {
    name: "AST & Compiler MCP",
    role: "Static Analysis & Parity Harness",
    desc: "Orchestrates headless TypeScript compiler API, Babel AST equality trees, and Jest runners.",
    icon: Terminal,
    badge: "Verification",
  },
];

export const subagentsHierarchy = [
  {
    id: "subagent-1",
    name: "Subagent-1: Schema & DTO Synthesizer",
    shortName: "Schema & DTO",
    role: "Database Schema & Type Reflection",
    mcp: "db-schema-mcp",
    color: "emerald",
    inputs: "PostgreSQL DDL, Mongo collections",
    outputs: "Strict Zod schemas, DB entity types",
    responsibility:
      "Introspects SQL tables and MongoDB schemas to auto-generate strict TypeScript interfaces and runtime Zod validation contracts with zero manual typing.",
  },
  {
    id: "subagent-2",
    name: "Subagent-2: Core Domain & Ledger",
    shortName: "Domain & Ledger",
    role: "State Machine & Mutex Logic",
    mcp: "ast-engine-mcp",
    color: "cyan",
    inputs: "Untyped payment & balance services",
    outputs: "Typed state machines & ACID handlers",
    responsibility:
      "Transpiles financial calculation logic, double-entry ledger state machines, and Redis distributed lock flows into immutable, strictly typed TypeScript.",
  },
  {
    id: "subagent-3",
    name: "Subagent-3: Finacle & Gateway Adapters",
    shortName: "Finacle Adapters",
    role: "External Banking Protocol Bridge",
    mcp: "postman-mcp + ast-engine",
    color: "purple",
    inputs: "Finacle SOAP/XML & payment webhooks",
    outputs: "Typed Axios clients & XML parsers",
    responsibility:
      "Refactors Axis Bank Finacle CBS adapters and payment aggregator interfaces into typed API clients with comprehensive runtime error schemas.",
  },
  {
    id: "subagent-4",
    name: "Subagent-4: API Routes & Middlewares",
    shortName: "Routes & Guards",
    role: "HTTP Layer & Auth Enforcement",
    mcp: "github-mcp",
    color: "blue",
    inputs: "Express routers & JWT middlewares",
    outputs: "Typed handlers with Zod validation",
    responsibility:
      "Converts Express route definitions, attaches runtime Zod request validators, and ensures JWT security guards and rate limiters have strict type signatures.",
  },
  {
    id: "subagent-5",
    name: "Subagent-5: Unit & Mock Test Harness",
    shortName: "Test Harness",
    role: "Test Suite Transpilation & Mocking",
    mcp: "jest-runner-mcp",
    color: "amber",
    inputs: "Legacy JS test suites & mock data",
    outputs: "Typed Jest/Vitest specs & mock factories",
    responsibility:
      "Migrates unit and integration test suites to TypeScript, generates type-safe mock factories for Redis/DB connections, and verifies all assertions pass.",
  },
  {
    id: "subagent-6",
    name: "Subagent-6: AST Semantic Parity Engine",
    shortName: "AST Parity",
    role: "Equivalence & Flow Divergence Check",
    mcp: "ast-parity-mcp",
    color: "rose",
    inputs: "Original JS AST vs Transpiled TS AST",
    outputs: "Equivalence proof certificate",
    responsibility:
      "Compares Abstract Syntax Trees before and after migration to mathematically prove zero unintended control-flow shifts or variable scoping leaks.",
  },
  {
    id: "subagent-7",
    name: "Subagent-7: Self-Healing Compiler",
    shortName: "Self-Healing tsc",
    role: "Diagnostic Resolution & Patching",
    mcp: "tsc-compiler-mcp",
    color: "indigo",
    inputs: "tsc diagnostic logs & circular imports",
    outputs: "Self-repaired TypeScript patches",
    responsibility:
      "Runs headless 'tsc --noEmit' checks; upon detecting circular imports or strict null mismatches, automatically generates localized AST hot-patches.",
  },
  {
    id: "subagent-8",
    name: "Subagent-8: GitOps & Security Reviewer",
    shortName: "GitOps Reviewer",
    role: "Security Audit & PR Orchestration",
    mcp: "github-mcp",
    color: "brand",
    inputs: "Transpiled repo & audit logs",
    outputs: "Atomic git commits & GitHub PR #84",
    responsibility:
      "Scans for secrets, audits license compliance, generates architectural changelogs with parity certificates, and opens verified Pull Requests.",
  },
];

export const masterOrchestrator = {
  name: "Master Orchestrator Agent (Lead Architect)",
  role: "Hub-and-Spoke DAG Controller",
  protocol: "Model Context Protocol (MCP) JSON-RPC over Event Bus",
  desc: "Builds the topological dependency graph, dispatches parallel conversion payloads to 8 specialized subagents, handles heartbeats and failure retries, and coordinates the two-phase verification harness.",
};

export const aidlcMetrics = {
  manualTime: "120 hrs",
  manualNote: "Estimated 3 weeks for 2 senior engineers",
  agenticTime: "14m 38s",
  agenticNote: "Fully automated via Master Orchestrator + 8 specialized subagents",
  velocity: "480x",
  typeSafety: "100%",
  typeSafetyNote: "Strict mode enabled, zero 'any' escapes",
  regressions: "0",
  regressionsNote: "140+ unit/integration tests verified pass",
  filesTranspiled: "48",
  linesOfCode: "12,400+",
  subagentsCount: 8,
};

export const dataScience = [
  {
    title: "High-Throughput Streaming & Event Analytics",
    tag: "Real-time · Kafka & Redis",
    metric: "10k+ events/sec",
    description:
      "Architected distributed stream processing pipelines consuming high-velocity financial events from Kafka topics, computing real-time aggregations, time-series metrics, and transactional anomaly signals.",
    tech: ["Python", "Kafka Streams", "Redis Streams", "FastAPI", "Pandas"],
    icon: Binary,
    caseStudy: {
      challenge:
        "Ingesting high-velocity financial telemetry without causing backpressure spikes or consumer group rebalances during volatility surges.",
      architecture:
        "Distributed Kafka cluster with partition keying on user accounts, consumer group workers written in Python with Redis streaming buffers, and FastAPI query layer.",
      resilience:
        "Dynamic backpressure throttling, parallel batch commits, and consumer lag monitoring via Prometheus metrics.",
      results: [
        "Sustained 10,000+ events/sec throughput with zero message loss",
        "Sub-15ms aggregation query latency for real-time dashboards",
        "Seamless horizontal auto-scaling based on Kafka lag metrics",
      ],
    },
  },
  {
    title: "Transaction Fraud & Anomaly Detection",
    tag: "Fintech Security · ML Scoring",
    metric: "<25ms inference",
    description:
      "Engineered low-latency scoring pipelines analyzing payment velocities, unexpected geographic anomalies, and transaction failure clusters using statistical anomaly detection and classification models.",
    tech: ["Python", "Scikit-Learn", "NumPy", "Redis", "Docker"],
    icon: BrainCircuit,
    caseStudy: {
      challenge:
        "Detecting coordinated payment fraud rings and compromised user sessions during instant checkout workflows without degrading checkout latency SLA.",
      architecture:
        "Pre-computed feature stores in Redis coupled with a high-throughput Python inference engine utilizing Isolation Forest and heuristic velocity classifiers.",
      resilience:
        "Graceful fallback to rule-based evaluation if the ML inference pipeline exceeds a strict 25ms timeout budget.",
      results: [
        "Evaluates transaction risk in under 18ms at p99",
        "Over 99.2% true positive detection on suspicious velocity attacks",
        "Prevented unauthorized account balance drawdowns",
      ],
    },
  },
  {
    title: "Automated Financial Reconciliation & Analytics",
    tag: "ETL · Big Data Processing",
    metric: "90% faster reports",
    description:
      "Built batch and micro-batch ETL pipelines to reconcile multi-million record ledger entries across bank gateways (Finacle, Axis Bank, KFintech) with automated discrepancy resolution and analytical reporting.",
    tech: ["Python", "Pandas", "PostgreSQL", "Elasticsearch", "AWS S3"],
    icon: LineChart,
    caseStudy: {
      challenge:
        "Reconciling multi-million record daily settlement files across Axis Bank core banking, payment gateways, and vault partners with manual spreadsheets taking 4+ hours.",
      architecture:
        "Automated Python Pandas batch pipeline with S3 data lake storage, PostgreSQL relational ledger verification, and Elasticsearch for fuzzy discrepancy search.",
      resilience:
        "Automated idempotency markers preventing duplicate settlement runs, alert webhooks for unresolvable discrepancies, and automated refund generation.",
      results: [
        "Reconciliation execution time reduced from 4 hours to under 20 minutes",
        "Automated 98% of standard payment discrepancy resolutions",
        "Comprehensive regulatory audit trails generated automatically",
      ],
    },
  },
  {
    title: "Predictive Caching & User Intent Modeling",
    tag: "Optimization · Heuristics & ML",
    metric: "40% cache hit boost",
    description:
      "Implemented predictive pre-fetching mechanisms analyzing high-frequency user SIP renewals and gold price inquiries to dynamically warm distributed Redis caches ahead of peak market surges.",
    tech: ["Python", "Redis", "Machine Learning", "Node.js", "Prometheus"],
    icon: BarChart3,
    caseStudy: {
      challenge:
        "Cold cache spikes during market open hours causing direct database contention and elevated latency for high-frequency price inquiries.",
      architecture:
        "Predictive heuristics analyzing historical user renewal timelines to proactively warm Redis distributed cache clusters 15 minutes before peak traffic intervals.",
      resilience:
        "Stale-while-revalidate caching policy with distributed locks preventing thundering herd cache stampedes.",
      results: [
        "Boosted cache hit ratio from 68% to 99.4%",
        "Reduced primary database read I/O load by 60%",
        "Eliminated latency spikes during morning market open windows",
      ],
    },
  },
];

export const achievements = [
  "Rockstar Performance Award",
  "Built fintech products serving 1.5M+ users",
  "Led backend initiatives across Digital Gold, NPS & Mutual Funds",
  "Delivered highly scalable payment & transaction systems",
];
