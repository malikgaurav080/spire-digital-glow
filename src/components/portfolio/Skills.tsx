import { motion } from "framer-motion";
import { Section } from "./Section";
import { SpotlightCard } from "./SpotlightCard";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title={
        <>
          The tools I reach for, <span className="text-gradient">daily</span>.
        </>
      }
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
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift group">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center size-10 rounded-xl bg-foreground/5 border border-border group-hover:border-brand/40 transition-colors">
                    <g.icon className="size-5" />
                  </span>
                  <h3 className="font-display font-semibold text-lg">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-muted-foreground hover:text-foreground hover:border-brand/40 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
