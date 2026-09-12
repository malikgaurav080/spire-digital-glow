import { useState } from "react";
import { Section } from "./Section";
import { AIDLCPipelineVisualizer } from "./AIDLCPipelineVisualizer";
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
      {/* Flagship Highlight: Interactive Horizontally Scrollable Multi-Agent Pipeline */}
      <AIDLCPipelineVisualizer onInspectCaseStudy={setSelectedCaseStudy} />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </Section>
  );
}

