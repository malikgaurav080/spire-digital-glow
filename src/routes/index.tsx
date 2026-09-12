import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";

// Lazy-load below-the-fold sections to optimize initial bundle size and critical render path
const Skills = lazy(() =>
  import("@/components/portfolio/Skills").then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("@/components/portfolio/Projects").then((m) => ({ default: m.Projects })),
);
const SystemDesign = lazy(() =>
  import("@/components/portfolio/SystemDesign").then((m) => ({ default: m.SystemDesign })),
);
const DataScience = lazy(() =>
  import("@/components/portfolio/DataScience").then((m) => ({ default: m.DataScience })),
);
const AIDLC = lazy(() =>
  import("@/components/portfolio/AIDLC").then((m) => ({ default: m.AIDLC })),
);
const Achievements = lazy(() =>
  import("@/components/portfolio/Achievements").then((m) => ({ default: m.Achievements })),
);
const Contact = lazy(() =>
  import("@/components/portfolio/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("@/components/portfolio/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gaurav Malik — Senior Backend & Distributed Systems Engineer" },
      {
        name: "description",
        content:
          "Gaurav Malik — Senior Backend & Distributed Systems Engineer with 5+ years architecting high-concurrency Node.js microservices, Kafka event streaming (10k+ events/s), fintech platforms serving 1.5M+ users, and AIDLC agentic workflows.",
      },
      {
        property: "og:title",
        content: "Gaurav Malik — Senior Backend & Distributed Systems Engineer",
      },
      {
        property: "og:description",
        content:
          "Scalable distributed systems, high-concurrency fintech platforms & Kafka event streaming. 5+ years at Freecharge/Axis Bank scaling services to 1.5M+ users.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gaurav Malik",
          jobTitle: "Senior Software Development Engineer",
          email: "mailto:malikgaurav080@gmail.com",
          telephone: "+91 8791034774",
          address: { "@type": "PostalAddress", addressLocality: "Gurgaon", addressCountry: "IN" },
          knowsAbout: [
            "Node.js",
            "TypeScript",
            "Microservices",
            "Distributed Systems",
            "Kafka",
            "AWS",
            "Python",
            "Data Science",
            "Machine Learning",
            "Stream Processing",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function SectionFallback() {
  return (
    <div className="py-20 flex justify-center items-center text-muted-foreground text-sm font-mono" />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SystemDesign />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <DataScience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AIDLC />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
