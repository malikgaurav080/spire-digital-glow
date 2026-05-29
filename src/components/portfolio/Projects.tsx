import { motion } from "framer-motion";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Projects I've <span className="text-gradient">shipped end-to-end</span>.</>}
      description="Selected backend systems behind real fintech products at Freecharge."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative rounded-3xl border border-border bg-surface/60 backdrop-blur p-7 hover-lift overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="relative flex items-start justify-between gap-4">
              <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background">
                <p.icon className="size-5" />
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <div className="relative mt-5">
              <div className="text-xs font-mono uppercase tracking-widest text-brand">{p.tag}</div>
              <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
