import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand">
            <span className="size-1 rounded-full bg-brand" />
            {eyebrow}
          </div>
          <h2 className="mt-2.5 sm:mt-3.5 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <div className="mt-6 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
