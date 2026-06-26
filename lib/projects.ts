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
    body: "Next.js 16 + Bun/Hono backend. Three discovery flows — Gmail scan, CSV upload, Plaid bank link — all run through one recurrence detector. Claude Haiku enriches the service catalog.",
    tags: ["Next.js", "Bun", "Hono", "Plaid"],
    href: "https://github.com/NickChunglolz/drip-showcase",
    cta: "showcase",
  },
  {
    name: "stock-advisor",
    tagline: "LightGBM ensemble for US equities with three early-warning signals.",
    body: "Price/volume divergence, M-W chart patterns, and SEC Form 4 insider activity. Go data service (Yahoo + EDGAR, redis-cached) feeds a templ + htmx UI. Three model variants (combined / tech-only / human-signal).",
    tags: ["Go", "LightGBM", "templ", "htmx"],
    href: "https://github.com/NickChunglolz/stock-advisor-showcase",
    cta: "showcase",
  },
  {
    name: "ad-generator",
    tagline: "AI static-ad creative studio for Instagram and Facebook.",
    body: "Multi-source inspiration pipeline → GPT-4 → on-brand creatives. Next.js frontend, Bun + Express backend, Google OAuth. MVP runs in-memory; ready for Postgres.",
    tags: ["Next.js", "Bun", "OpenAI", "OAuth"],
    href: "https://github.com/NickChunglolz/ad-generator-showcase",
    cta: "showcase",
  },
  {
    name: "ml-pipeline-kit",
    tagline: "Train LightGBM in Python, score it from Go / Rust / TypeScript.",
    body: "Zero-dependency inference ports sharing one JSON model schema. Extracted from stock-advisor; project-specific feature engineering left out on purpose. Time-series CV, isotonic calibration, sweep + multi-variant scripts included.",
    tags: ["Python", "Go", "Rust", "LightGBM"],
    href: "https://github.com/NickChunglolz/ml-pipeline-kit",
    cta: "github",
  },
  {
    name: "claude-toolkit",
    tagline: "Personal Claude Code marketplace — agents and skills I use every day.",
    body: "Generic project-lifecycle agents (planner / executor / idea-finder) and slash skills (/finish, /audit-overhead) that work across any repo. Installed via Claude Code's plugin system.",
    tags: ["Claude Code", "Agents", "Plugins", "TS"],
    href: "https://github.com/NickChunglolz/claude-toolkit",
    cta: "github",
  },
];
