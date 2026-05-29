import { Section } from "./Section";
import { motion } from "framer-motion";
import { Code2, Database, Network } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Building backend systems that <span className="text-gradient">scale with trust</span>.</>}
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 text-lg text-muted-foreground leading-relaxed"
        >
          I'm a results-driven backend developer with <span className="text-foreground">4.5+ years</span> of
          experience designing scalable, high-performance backend systems using Node.js, TypeScript,
          Express.js, microservices, and cloud-native technologies. My focus is on{" "}
          <span className="text-foreground">system design, distributed systems, APIs, databases,
          fintech architecture</span>, and shipping performance-optimized backends that handle real
          money and real users. From migrating monoliths to RESTful microservices, to building
          event-driven notification platforms, I care about the unglamorous details — idempotency,
          retries, observability, and graceful degradation.
        </motion.p>

        <div className="lg:col-span-2 grid gap-3">
          {[
            { icon: Code2, t: "Pragmatic engineer", d: "Ship maintainable code, not clever code." },
            { icon: Network, t: "Systems thinker", d: "Optimize for the whole pipeline, not one service." },
            { icon: Database, t: "Data-aware", d: "Choose stores by access pattern, not hype." },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-4 flex gap-3 items-start"
            >
              <span className="grid place-items-center size-9 rounded-lg bg-foreground/5 border border-border">
                <c.icon className="size-4" />
              </span>
              <div>
                <div className="font-medium">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
