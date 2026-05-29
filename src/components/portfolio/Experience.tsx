import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="text-gradient">shipped systems</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent" />
        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-0 top-1 grid place-items-center size-8 sm:size-12 rounded-full border border-border bg-surface">
                <Briefcase className="size-4 sm:size-5 text-brand" />
              </span>
              <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 hover-lift">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-xl">{job.company}</h3>
                    <p className="text-sm text-muted-foreground">{job.role}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    {job.current && (
                      <span className="inline-flex items-center gap-1 text-brand">
                        <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                        Current
                      </span>
                    )}
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 rounded-full bg-brand flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
