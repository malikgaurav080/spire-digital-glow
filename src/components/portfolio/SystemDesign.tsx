import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArchitectureSimulator3D } from "./ArchitectureSimulator3D";
import { systemDesign } from "@/lib/portfolio-data";

export function SystemDesign() {
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
      <ArchitectureSimulator3D />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {systemDesign.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group relative rounded-2xl border border-border bg-surface/50 backdrop-blur p-5 hover:border-brand/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-lg bg-brand/10 text-brand border border-brand/20">
                <s.icon className="size-5" />
              </span>
              <h3 className="font-medium">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
