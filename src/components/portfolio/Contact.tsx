import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">resilient</span>.</>}
      description="Open to senior backend, staff, and architect-track conversations."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {[
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { icon: MapPin, label: profile.location },
            { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
            { icon: Github, label: "GitHub", href: profile.github },
          ].map((c) => {
            const Inner = (
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 backdrop-blur p-4 hover:border-brand/40 transition-colors">
                <span className="grid place-items-center size-10 rounded-lg bg-foreground/5 border border-border">
                  <c.icon className="size-4" />
                </span>
                <span className="text-sm">{c.label}</span>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-3xl border border-border bg-surface/60 backdrop-blur p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" placeholder="Jane Doe" required />
            <Field name="email" label="Email" type="email" placeholder="jane@company.com" required />
          </div>
          <Field name="message" label="Message" placeholder="Tell me about the role or project…" textarea required />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Send className="size-4" />
            {sent ? "Opening your mail app…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name, label, placeholder, type = "text", required, textarea,
}: {
  name: string; label: string; placeholder?: string; type?: string; required?: boolean; textarea?: boolean;
}) {
  const common =
    "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand/20 transition";
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={5} className={`${common} mt-2 resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={`${common} mt-2`} />
      )}
    </label>
  );
}
