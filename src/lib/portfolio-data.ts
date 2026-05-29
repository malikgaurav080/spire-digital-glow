import {
  Server, Database, Cloud, Network, Radio, Zap, Layers, Shield, GitBranch,
  Activity, Boxes, Workflow, Cpu, MessageSquare, GaugeCircle,
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
    items: ["Microservices", "Event-Driven", "System Design", "Design Patterns", "Distributed Systems", "Caching", "Queue Processing"],
  },
  {
    title: "Messaging",
    icon: Radio,
    items: ["Kafka", "RabbitMQ", "AWS SQS", "AWS SNS"],
  },
];

export const experience = [
  {
    company: "FreechargeBiz",
    role: "Senior Software Development Engineer",
    period: "Jan 2026 — Present",
    current: true,
    highlights: [
      "Supporting Axis Bank's fintech platforms through FreechargeBiz, ensuring platform stability and scalability during the organizational transition.",
      "Building scalable backend systems and distributed services for high-volume financial transaction processing.",
      "Designed and delivered a Mutual Fund Notification System using event-driven architecture, enabling real-time Email, Push, and In-App notifications for transaction and SIP events.",
    ],
  },
  {
    company: "Freecharge",
    role: "Senior Software Development Engineer",
    period: "Mar 2023 — Dec 2025",
    current: false,
    highlights: [
      "Built Digital Gold platform serving 1.5M+ users.",
      "Developed NPS platform from scratch with KFintech integration.",
      "Designed scalable microservices architecture and event-driven systems.",
      "Implemented reporting, reconciliation, and automation systems.",
      "Led backend development initiatives and cross-team collaboration.",
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
  },
  {
    title: "National Pension System (NPS)",
    tag: "Greenfield · KFintech",
    description:
      "Architected and delivered the NPS platform from the ground up, integrating with KFintech to support Lump Sum and SIP investments while optimizing secure, compliant, and high-performance transaction workflows.",
    tech: ["Node.js", "MongoDB", "Redis", "AWS"],
    icon: Shield,
  },
  {
    title: "Gold Loan Renewal Journey",
    tag: "Automation · <3min disbursal",
    description:
      "Designed and delivered a fully automated Gold Loan Renewal platform for Axis Bank, reducing loan disbursal time to under 3 minutes through end-to-end automation, payment exception handling, and seamless Finacle/ESB integrations.",
    tech: ["Node.js", "Redis", "MongoDB", "Microservices"],
    icon: Zap,
  },
  {
    title: "Mutual Fund Notification System",
    tag: "Event-driven · Distributed",
    description:
      "Distributed notification platform supporting Buy/Sell/SIP transaction events with Email, Push, and In-App notifications. Kafka-based event-driven architecture with retry, lifecycle, and SIP reminder scheduling.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "Redis"],
    icon: MessageSquare,
  },
];

export const systemDesign = [
  { title: "Distributed Systems", icon: Network, desc: "Designing resilient, partition-tolerant services at scale." },
  { title: "Event-Driven Architecture", icon: Workflow, desc: "Kafka & SNS/SQS choreographies for loosely coupled domains." },
  { title: "Notification Systems", icon: MessageSquare, desc: "Multi-channel pipelines with retries and lifecycle tracking." },
  { title: "Payment Systems", icon: Shield, desc: "Idempotent, audited transaction flows for fintech." },
  { title: "Fintech Platforms", icon: Boxes, desc: "Gold, NPS, mutual funds — regulated, high-trust workloads." },
  { title: "Queue-Based Processing", icon: Layers, desc: "Backpressure, DLQs, and async job orchestration." },
  { title: "Caching Strategies", icon: GaugeCircle, desc: "Read-through, write-behind, and edge caching with Redis." },
  { title: "Scalability Patterns", icon: Activity, desc: "Sharding, replication, and horizontal scale playbooks." },
  { title: "High Availability", icon: GitBranch, desc: "Active-active deployments, failover, and zero-downtime ops." },
];

export const aidlc = [
  { title: "AI-assisted System Design", icon: Cpu },
  { title: "AI-assisted Development", icon: GitBranch },
  { title: "Automated Test Generation", icon: Activity },
  { title: "Technical Documentation", icon: Layers },
  { title: "Engineering Productivity", icon: GaugeCircle },
];

export const achievements = [
  "Rockstar Performance Award",
  "Built fintech products serving 1.5M+ users",
  "Led backend initiatives across Digital Gold, NPS & Mutual Funds",
  "Delivered highly scalable payment & transaction systems",
];
