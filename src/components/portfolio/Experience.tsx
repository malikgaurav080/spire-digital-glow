import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Section } from "./Section";
import { SpotlightCard } from "./SpotlightCard";
import { experience } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const laserScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A timeline of <span className="text-gradient">shipped systems</span>.
        </>
      }
    >
      <div ref={containerRef} className="relative">
        {/* Background track line */}
        <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-border/40" />

        {/* Dynamic Glowing Laser Pulse Line */}
        <motion.div
          style={{ scaleY: laserScale, originY: 0 }}
          className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand via-cyan-400 to-brand shadow-[0_0_12px_#34d399] z-0"
        />

        <div className="space-y-10 relative z-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Node Icon with Radar Ripple */}
              <div className="absolute left-0 top-1.5 flex items-center justify-center">
                {job.current && (
                  <span className="absolute size-10 sm:size-14 rounded-full bg-brand/20 animate-ping pointer-events-none" />
                )}
                <span className="relative grid place-items-center size-8 sm:size-12 rounded-full border border-brand/40 bg-surface shadow-lg shadow-brand/10">
                  <Briefcase className="size-4 sm:size-5 text-brand" />
                </span>
              </div>

              {/* Spotlight Experience Card */}
              <SpotlightCard className="p-6 sm:p-7 hover-lift">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-tight">
                      {job.company}
                    </h3>
                    <p className="text-sm font-medium text-brand mt-0.5">{job.role}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand/10 text-brand font-medium">
                        <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                        Current Role
                      </span>
                    )}
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-brand/80 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
