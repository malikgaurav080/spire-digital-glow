import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card3D } from "./Card3D";
import { dataScience } from "@/lib/portfolio-data";
import { Activity, ArrowUpRight } from "lucide-react";

export function DataScience() {
  return (
    <Section
      id="data-science"
      eyebrow="Data & ML Engineering"
      title={
        <>
          Scalable data pipelines &amp;{" "}
          <span className="text-gradient">applied machine learning</span>.
        </>
      }
      description="Bridging high-volume distributed backend systems with real-time stream analytics, anomaly detection, and predictive workflows."
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
              className="group rounded-3xl border border-border bg-surface/60 backdrop-blur p-7 h-full flex flex-col justify-between"
            >
              {/* Ambient hover glow */}
              <div className="absolute inset-0 bg-mesh opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

              <div className="flex-1 flex flex-col">
                {/* Header: Icon & Impact Metric with 3D pop */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="relative flex items-center justify-between gap-4 transition-transform duration-300"
                >
                  <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background shadow-md">
                    <item.icon className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-mono text-brand font-medium">
                    <Activity className="size-3.5 animate-pulse" />
                    {item.metric}
                  </span>
                </div>

                {/* Tag, Title, Description with 3D pop */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="relative mt-5 transition-transform duration-300 flex-1 flex flex-col"
                >
                  <div className="text-xs font-mono uppercase tracking-widest text-brand">
                    {item.tag}
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
    </Section>
  );
}
