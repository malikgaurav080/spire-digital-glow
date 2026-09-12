import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArchitectureSimulator3D } from "./ArchitectureSimulator3D";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { systemDesign } from "@/lib/portfolio-data";
import { CaseStudyModal, CaseStudyData } from "./CaseStudyModal";

export function SystemDesign() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <Section
      id="system-design"
      eyebrow="System Design"
      title={
        <>
          Patterns I design <span className="text-gradient">production systems</span> around.
        </>
      }
      description="From queue choreography to caching strategy — the building blocks behind reliable backends."
    >
      {/* Interactive 3D Distributed Architecture Pipeline */}
      <ArchitectureSimulator3D onInspectCaseStudy={setSelectedCaseStudy} />

      <HorizontalCarousel itemGapClass="gap-3.5" className="mt-8">
        {systemDesign.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.2) }}
            className="w-[84vw] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10px)] max-w-[320px] sm:max-w-none shrink-0 snap-start self-stretch group relative rounded-2xl border border-border bg-surface/50 backdrop-blur p-5 hover:border-brand/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-lg bg-brand/10 text-brand border border-brand/20">
                  <s.icon className="size-5" />
                </span>
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </HorizontalCarousel>

      <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </Section>
  );
}

