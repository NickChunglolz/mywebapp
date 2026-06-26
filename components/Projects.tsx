import Section from "./Section";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <Section id="projects" index={3} label="projects" title="Things I've built">
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="card p-6 block group"
          >
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-lg font-medium group-hover:text-accent transition-colors">{p.name}</h3>
              <span className="mono text-xs text-muted group-hover:text-accent transition-colors">{p.cta} →</span>
            </div>
            <p className="text-sm text-foreground/80 mb-2">{p.tagline}</p>
            <p className="text-sm text-muted leading-relaxed mb-4">{p.body}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="mono text-xs px-2 py-0.5 rounded bg-white/5 border border-border text-muted">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/NickChunglolz?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="mono text-sm text-muted hover:text-accent transition-colors"
      >
        more on github →
      </a>
    </Section>
  );
}
