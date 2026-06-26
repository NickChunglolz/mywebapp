import Section from "./Section";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <Section id="projects" index={3} label="projects" title="Things I've built">
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative block bg-background/40 border border-border/80 hover:border-accent/60 transition-colors p-5 overflow-hidden"
          >
            <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-accent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-accent opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_60%)]" />

            <div className="relative flex items-baseline gap-3 mb-3 mono text-[10px] uppercase tracking-[0.22em]">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-muted/60">MISSION</span>
              <span className="h-px flex-1 bg-border" />
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                LIVE
              </span>
            </div>

            <h3 className="relative text-2xl font-semibold tracking-tight mb-1 group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <p className="relative text-sm text-foreground/80 mb-3">{p.tagline}</p>
            <p className="relative text-[13px] text-muted leading-relaxed mb-5">{p.body}</p>

            <div className="relative mono text-[10px] uppercase tracking-widest text-muted/70 mb-1">
              STACK
            </div>
            <div className="relative mono text-[11px] text-muted flex flex-wrap gap-x-3 gap-y-1 mb-5">
              {p.tags.map((t) => (
                <span key={t}>
                  <span className="text-accent/60">›</span> {t}
                </span>
              ))}
            </div>

            <div className="relative flex items-center justify-between pt-3 border-t border-border/60 mono text-[10px] uppercase tracking-widest">
              <span className="text-muted/70">→ open {p.cta}</span>
              <span className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                ENGAGE ↗
              </span>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/NickChunglolz?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="mono text-[11px] uppercase tracking-[0.22em] text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
      >
        <span className="text-accent">›</span> more on github
      </a>
    </Section>
  );
}
