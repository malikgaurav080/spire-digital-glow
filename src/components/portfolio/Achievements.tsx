import { motion } from "framer-motion";
import { Section } from "./Section";
import { achievements } from "@/lib/portfolio-data";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title={
        <>
          Wins worth <span className="text-gradient">noting</span>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 backdrop-blur p-5"
          >
            <span className="grid place-items-center size-10 rounded-xl bg-brand/10 text-brand border border-brand/20 flex-shrink-0">
              <Trophy className="size-5" />
            </span>
            <p className="text-base">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
