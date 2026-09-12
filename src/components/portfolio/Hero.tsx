import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { NetworkCanvas3D } from "./NetworkCanvas3D";
import { KineticCounter } from "./AnimatedCounter";
import { MagneticButton } from "./MagneticButton";
import profilePic144 from "@/assets/gaurav-profile-144.webp";
import profilePic288 from "@/assets/gaurav-profile-288.webp";
import profilePic432 from "@/assets/gaurav-profile-432.webp";
import profilePic576 from "@/assets/gaurav-profile-576.webp";
import profilePicFallback from "@/assets/gaurav-profile-576.jpg";

export function Hero() {
  return (
    <section id="about" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div id="top" className="absolute -top-32" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-aurora pointer-events-none" aria-hidden />
      <NetworkCanvas3D />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3.5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative shrink-0"
          >
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand/60 via-foreground/20 to-brand/40 blur-md opacity-70"
              aria-hidden
            />
            <div className="relative size-16 sm:size-24 lg:size-28 rounded-full p-[2px] bg-gradient-to-tr from-brand via-foreground/30 to-brand/50">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${profilePic144} 144w, ${profilePic288} 288w, ${profilePic432} 432w, ${profilePic576} 576w`}
                  sizes="(min-width: 640px) 96px, 64px"
                />
                <img
                  src={profilePicFallback}
                  width={288}
                  height={288}
                  alt="Gaurav Malik — Senior Backend Engineer"
                  className="size-full rounded-full object-cover ring-2 ring-background shadow-xl"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <span
              className="absolute bottom-0.5 right-0.5 size-2.5 sm:size-3 rounded-full bg-emerald-500 ring-2 ring-background"
              aria-hidden
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Gaurav Malik</span>.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3.5 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          Senior Backend &amp; Distributed Systems Engineer specializing in{" "}
          <span className="text-foreground">high-concurrency fintech platforms</span>,{" "}
          <span className="text-foreground">event-driven architectures</span>, and resilient{" "}
          <span className="text-foreground">Node.js microservices</span>. {profile.experience} of
          architecting mission-critical services across Digital Gold (1.5M+ users), NPS, and Axis
          Bank ecosystems—processing 10k+ events/sec with Kafka, delivering sub-second transaction
          SLAs, and accelerating delivery with AIDLC agentic pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <MagneticButton strength={0.3}>
            <a
              href={profile.resumeUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium hover:opacity-90 transition shadow-md"
            >
              <Download className="size-3.5 sm:size-4" />
              Download Resume
            </a>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-accent transition"
            >
              View Projects
              <ArrowRight className="size-3.5 sm:size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              <Mail className="size-3.5 sm:size-4" />
              Contact Me
            </a>
          </MagneticButton>
        </motion.div>

        {/* Marquee stats with kinetic rolling slot counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-border overflow-hidden bg-border"
        >
          {[
            {
              stat: "1.5M+",
              v: "Users served",
            },
            {
              stat: "5+ yrs",
              v: "Backend experience",
            },
            {
              stat: "<3 min",
              v: "Loan disbursal",
            },
            {
              stat: "99.9%",
              v: "Service uptime",
            },
          ].map((s, idx) => (
            <div key={s.v} className="bg-surface p-3.5 sm:p-5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold tracking-tight flex items-baseline">
                <KineticCounter value={s.stat} delay={idx * 0.1} />
              </div>
              <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
