import { motion } from "framer-motion";
import { Section } from "./Section";
import { aidlc } from "@/lib/portfolio-data";
import { Sparkles } from "lucide-react";

export function AIDLC() {
  return (
    <Section
      id="aidlc"
      eyebrow="AIDLC"
      title={
        <>
          AI-driven <span className="text-gradient">development lifecycle</span>.
        </>
      }
      description="Leveraging AI-assisted engineering practices for architecture design, code generation, testing, documentation, and development acceleration."
    >
      <div className="relative rounded-3xl border border-border overflow-hidden bg-surface/60 backdrop-blur p-8 sm:p-12">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand">
              <Sparkles className="size-3.5" /> Practice
            </span>
            <h3 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight">
              From spec to ship, accelerated.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I treat AI as a teammate in the engineering loop — accelerating design exploration,
              boilerplate generation, test scaffolding, and technical writing — while keeping
              architectural judgment and production trade-offs in human hands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aidlc.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-background/40 p-4 flex items-center gap-3"
              >
                <span className="grid place-items-center size-9 rounded-lg bg-foreground text-background">
                  <a.icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{a.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
