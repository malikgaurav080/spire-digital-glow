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
  { title: "AI-assisted System Design", icon: Cpu },
  { title: "AI-assisted Development", icon: GitBranch },
  { title: "Automated Test Generation", icon: Activity },
  { title: "Technical Documentation", icon: Layers },
  { title: "Engineering Productivity", icon: GaugeCircle },
];

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
