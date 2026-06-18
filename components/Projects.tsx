import Section from "./Section";

const PROJECTS = [
  {
    name: "Drip",
    tagline: "Canadian-first subscription tracker, installable as a PWA.",
    body: "Next.js 16 + Tailwind v4 frontend, paired with a backend that connects to your inbox and surfaces what you're actually being charged for — month over month, in CAD.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    href: "https://github.com/NickChunglolz",
    cta: "site soon",
  },
  {
    name: "claude-toolkit",
    tagline: "Personal Claude Code marketplace — agents and skills I use every day.",
    body: "Generic project-lifecycle agents (planner / executor / idea-finder) and slash skills (/finish, /audit-overhead) that work across any repo. Installed via Claude Code's plugin system.",
    tags: ["Claude Code", "Agents", "Plugins", "TS"],
    href: "https://github.com/NickChunglolz/claude-toolkit",
    cta: "github",
  },
  {
    name: "rate-limiter",
    tagline: "Sliding-window rate limiter, written for clarity.",
    body: "A focused implementation of common rate-limiting algorithms — token bucket, sliding window — with a small surface area and tests that read like the spec.",
    tags: ["Go", "Algorithms"],
    href: "https://github.com/NickChunglolz/rate-limiter",
    cta: "github",
  },
  {
    name: "url-shortener",
    tagline: "Tiny URL service, fully self-hostable.",
    body: "Hash-based slugs, Postgres storage, click counts. The kind of thing you write once to remember why every SaaS for this charges $10/mo.",
    tags: ["Go", "Postgres"],
    href: "https://github.com/NickChunglolz/url-shortener",
    cta: "github",
  },
];

export default function Projects() {
  return (
    <Section id="projects" index={3} label="projects" title="Things I've built">
      <div className="grid sm:grid-cols-2 gap-4">
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
    </Section>
  );
}
