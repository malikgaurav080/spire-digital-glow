import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card3D } from "./Card3D";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { CaseStudyModal, CaseStudyData } from "./CaseStudyModal";

export function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Projects I've <span className="text-gradient">shipped end-to-end</span>.
        </>
      }
      description="Selected backend systems behind real fintech products at Freecharge. Click any project to inspect its architecture case study."
    >
      <HorizontalCarousel itemGapClass="gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
            className="w-[86vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] max-w-[440px] sm:max-w-none shrink-0 snap-start self-stretch flex flex-col"
          >
            <Card3D
              maxTilt={12}
              className="group cursor-pointer hover:border-brand/50 transition-colors"
              onClick={() => setSelectedCaseStudy(p)}
            >
              <div className="flex-1 flex flex-col">
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="relative flex items-start justify-between gap-4 transition-transform duration-300"
                >
                  <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background shadow-md">
                    <p.icon className="size-5" />
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-brand transition-colors">
                    <span className="hidden sm:inline">Case Study</span>
                    <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="relative mt-5 transition-transform duration-300 flex-1 flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono uppercase tracking-widest text-brand font-medium">
                      {p.tag}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground/80 group-hover:text-foreground flex items-center gap-1">
                      <Sparkles className="size-3 text-brand" />
                      <span>Inspect</span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight min-h-[4rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div
                style={{ transform: "translateZ(15px)" }}
                className="relative mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-1.5 transition-transform duration-300"
              >
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-border bg-background/40 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card3D>
          </motion.div>
        ))}
      </HorizontalCarousel>

      <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </Section>
  );
}
