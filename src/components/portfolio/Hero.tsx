import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import profilePic from "@/assets/gaurav-profile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-aurora pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-brand animate-pulse" />
          Available for senior backend roles · {profile.location}
          <MapPin className="size-3" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tighter"
        >
          Hi, I'm <span className="text-gradient">Gaurav Malik</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          Senior Backend Engineer specializing in{" "}
          <span className="text-foreground">scalable distributed systems</span> and{" "}
          <span className="text-foreground">fintech platforms</span>. {profile.experience} of shipping
          resilient services in Node.js, microservices, and event-driven architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.resumeUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Download className="size-4" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-accent transition"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="size-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Marquee stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-border overflow-hidden bg-border"
        >
          {[
            { k: "1.5M+", v: "Users served" },
            { k: "4.5+ yrs", v: "Backend experience" },
            { k: "<3 min", v: "Loan disbursal" },
            { k: "99.9%", v: "Service uptime" },
          ].map((s) => (
            <div key={s.v} className="bg-surface p-5">
              <div className="text-2xl sm:text-3xl font-display font-semibold tracking-tight">
                {s.k}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="size-3.5" />
          Currently engineering platform separation between Axis Bank IT & FreechargeBiz.
        </div>
      </div>
    </section>
  );
}
