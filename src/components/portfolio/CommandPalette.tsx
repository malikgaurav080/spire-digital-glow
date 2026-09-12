import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  User,
  Cpu,
  Briefcase,
  Layers,
  Network,
  Activity,
  Mail,
  Download,
  Copy,
  ExternalLink,
  Moon,
  Sun,
  Check,
  Award,
  Bot,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";

interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CommandPalette({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: CommandPaletteProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = setControlledOpen || setInternalOpen;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  const runCommand = (command: () => void) => {
    setIsOpen(false);
    command();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    // Dispatch custom event if any other listener is interested
    window.dispatchEvent(new CustomEvent("portfolio-theme-toggle", { detail: { isLight } }));
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Type a command or search sections, actions, tech..." />
      <CommandList className="max-h-[380px] p-2">
        <CommandEmpty>No results found.</CommandEmpty>

        {/* Navigation Group */}
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => scrollToSection("about"))}>
            <User className="mr-2 size-4 text-muted-foreground" />
            <span>About Gaurav</span>
            <CommandShortcut>#about</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("skills"))}>
            <Cpu className="mr-2 size-4 text-muted-foreground" />
            <span>Technical Skills &amp; Stack</span>
            <CommandShortcut>#skills</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("experience"))}>
            <Briefcase className="mr-2 size-4 text-muted-foreground" />
            <span>Experience &amp; Career History</span>
            <CommandShortcut>#experience</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("projects"))}>
            <Layers className="mr-2 size-4 text-brand" />
            <span className="font-medium text-foreground">Featured Projects (Case Studies)</span>
            <CommandShortcut>#projects</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("system-design"))}>
            <Network className="mr-2 size-4 text-brand" />
            <span className="font-medium text-foreground">
              Distributed Systems &amp; Architecture
            </span>
            <CommandShortcut>#system-design</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("data-science"))}>
            <Activity className="mr-2 size-4 text-muted-foreground" />
            <span>Data Science &amp; Stream Analytics</span>
            <CommandShortcut>#data-science</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("aidlc"))}>
            <Bot className="mr-2 size-4 text-cyan-400" />
            <span className="font-medium text-foreground">AIDLC &amp; Multi-Agent Systems</span>
            <CommandShortcut>#aidlc</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("achievements"))}>
            <Award className="mr-2 size-4 text-muted-foreground" />
            <span>Key Achievements &amp; Scale Metrics</span>
            <CommandShortcut>#achievements</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => scrollToSection("contact"))}>
            <Mail className="mr-2 size-4 text-muted-foreground" />
            <span>Contact Information</span>
            <CommandShortcut>#contact</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* Quick Actions Group */}
        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.open(profile.resumeUrl, "_blank");
              })
            }
          >
            <Download className="mr-2 size-4 text-brand" />
            <span>Download Resume (PDF)</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => copyToClipboard(profile.email, "email"))}>
            {copiedText === "email" ? (
              <Check className="mr-2 size-4 text-emerald-500" />
            ) : (
              <Copy className="mr-2 size-4 text-muted-foreground" />
            )}
            <span>Copy Email ({profile.email})</span>
          </CommandItem>

          <CommandItem onSelect={() => runCommand(() => copyToClipboard(profile.phone, "phone"))}>
            {copiedText === "phone" ? (
              <Check className="mr-2 size-4 text-emerald-500" />
            ) : (
              <Copy className="mr-2 size-4 text-muted-foreground" />
            )}
            <span>Copy Phone Number</span>
          </CommandItem>

          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.open(profile.linkedin, "_blank");
              })
            }
          >
            <ExternalLink className="mr-2 size-4 text-muted-foreground" />
            <span>Open LinkedIn Profile</span>
          </CommandItem>

          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.open(profile.github, "_blank");
              })
            }
          >
            <ExternalLink className="mr-2 size-4 text-muted-foreground" />
            <span>Open GitHub Repositories</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* System & Preferences */}
        <CommandGroup heading="Preferences">
          <CommandItem onSelect={() => runCommand(toggleTheme)}>
            <div className="flex items-center gap-2">
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span>Toggle Color Theme (Dark / Light)</span>
            </div>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
