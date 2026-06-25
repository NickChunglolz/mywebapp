export type Project = {
  name: string;
  tagline: string;
  body: string;
  tags: string[];
  href: string;
  cta: string;
};

export const PROJECTS: Project[] = [
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
