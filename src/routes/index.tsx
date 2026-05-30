import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { SystemDesign } from "@/components/portfolio/SystemDesign";
import { AIDLC } from "@/components/portfolio/AIDLC";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gaurav Malik — Senior Backend Engineer" },
      {
        name: "description",
        content:
          "Gaurav Malik — Senior Software Development Engineer with 4.5+ years building scalable Node.js microservices, event-driven systems, and fintech platforms.",
      },
      { property: "og:title", content: "Gaurav Malik — Senior Backend Engineer" },
      {
        property: "og:description",
        content:
          "Scalable distributed systems & fintech platforms. Node.js · Microservices · Kafka · AWS.",
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
          knowsAbout: ["Node.js", "TypeScript", "Microservices", "Distributed Systems", "Kafka", "AWS"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemDesign />
        <AIDLC />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
