import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Search, Sun, Terminal } from "lucide-react";
import { CommandPalette } from "./CommandPalette";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#system-design", label: "Systems" },
  { href: "#data-science", label: "Data Science" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              scrolled ? "glass shadow-lg" : "bg-transparent"
            }`}
          >
            <a
              href="#top"
              aria-label="Gaurav Malik — home"
              className="flex items-center gap-2 font-display font-semibold tracking-tight"
            >
              <span className="grid place-items-center size-8 rounded-lg bg-foreground text-background">
                <Terminal className="size-4" />
              </span>
              <span className="hidden sm:inline">gaurav.dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-1 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCmdOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border bg-surface/80 hover:bg-accent text-xs font-mono text-muted-foreground hover:text-foreground transition cursor-pointer"
                title="Search and commands (⌘K)"
              >
                <Search className="size-3.5" />
                <span className="text-[11px] font-semibold tracking-wider">⌘K</span>
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="grid place-items-center size-9 rounded-full border border-border hover:bg-accent transition-colors cursor-pointer"
              >
                {light ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                Let's talk
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
