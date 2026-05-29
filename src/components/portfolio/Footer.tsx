import { profile } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            Built with passion for scalable systems and backend engineering.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="grid place-items-center size-10 rounded-full border border-border hover:bg-accent transition" aria-label="Email">
            <Mail className="size-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid place-items-center size-10 rounded-full border border-border hover:bg-accent transition" aria-label="LinkedIn">
            <Linkedin className="size-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="grid place-items-center size-10 rounded-full border border-border hover:bg-accent transition" aria-label="GitHub">
            <Github className="size-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Gaurav Malik</p>
      </div>
    </footer>
  );
}
