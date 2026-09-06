import { motion } from "framer-motion";
import { Section } from "./Section";
import { Card3D } from "./Card3D";
import { projects } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Projects I've <span className="text-gradient">shipped end-to-end</span>.
        </>
      }
      description="Selected backend systems behind real fintech products at Freecharge."
    >
      <div className="grid md:grid-cols-2 gap-5 items-stretch">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="h-full flex flex-col"
          >
            <Card3D maxTilt={12} className="group">
              <div className="flex-1 flex flex-col">
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="relative flex items-start justify-between gap-4 transition-transform duration-300"
                >
                  <span className="grid place-items-center size-12 rounded-2xl bg-foreground text-background shadow-md">
                    <p.icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>

                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="relative mt-5 transition-transform duration-300 flex-1 flex flex-col"
                >
                  <div className="text-xs font-mono uppercase tracking-widest text-brand">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight min-h-[4rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div
                style={{ transform: "translateZ(15px)" }}
                className="relative mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-1.5 transition-transform duration-300"
              >
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md border border-border bg-background/40 text-muted-foreground"
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
