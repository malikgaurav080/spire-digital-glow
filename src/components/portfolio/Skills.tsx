import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title={<>The tools I reach for, <span className="text-gradient">daily</span>.</>}
      description="Battle-tested across fintech-grade workloads — chosen for fit, not fashion."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 hover-lift overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 size-32 rounded-full bg-brand/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-foreground/5 border border-border">
                <g.icon className="size-5" />
              </span>
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-muted-foreground hover:text-foreground hover:border-brand/40 transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
