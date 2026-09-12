import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card3D } from "./Card3D";
import { dataScience } from "@/lib/portfolio-data";
import { Activity, ArrowUpRight, Sparkles } from "lucide-react";
import { CaseStudyModal, CaseStudyData } from "./CaseStudyModal";

export function DataScience() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <Section
      id="data-science"
      eyebrow="Machine Learning & Deep Learning"
      title={
        <>
          Applied machine learning &amp;{" "}
          <span className="text-gradient">deep neural architectures</span>.
        </>
      }
      description="Bridging deep neural networks (CNNs, sequence modeling) and high-throughput production ML pipelines with sub-20ms inference, fraud detection, and explainable AI. Click any system to inspect its case study."
    >
      <div className="grid md:grid-cols-2 gap-5 items-stretch">
        {dataScience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="h-full flex flex-col"
          >
            <Card3D
              maxTilt={12}
              className="group cursor-pointer hover:border-brand/50 transition-colors"
              onClick={() => setSelectedCaseStudy(item)}
            >
              <div className="flex-1 flex flex-col">
                {/* Header: Icon & Impact Metric with 3D pop */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="relative flex items-center justify-between gap-4 transition-transform duration-300"
                >
                  <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background shadow-md">
                    <item.icon className="size-5" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-mono text-brand font-medium">
                      <Activity className="size-3.5 animate-pulse" />
                      {item.metric}
                    </span>
                  </div>
                </div>

                {/* Tag, Title, Description with 3D pop */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="relative mt-5 transition-transform duration-300 flex-1 flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono uppercase tracking-widest text-brand font-medium">
                      {item.tag}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground/80 group-hover:text-foreground flex items-center gap-1">
                      <Sparkles className="size-3 text-brand" />
                      <span>Inspect</span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight flex items-center justify-between min-h-[4rem]">
                    <span>{item.title}</span>
                    <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Tech Badges with 3D depth, pinned at bottom */}
              <div
                style={{ transform: "translateZ(15px)" }}
                className="relative mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5 transition-transform duration-300"
              >
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-border bg-background/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card3D>
          </motion.div>
        ))}
      </div>

      <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </Section>
  );
}
