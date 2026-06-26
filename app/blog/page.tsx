import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — Nick Chung" };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-baseline gap-3 mb-4 mono text-[10px] uppercase tracking-[0.25em]">
        <span className="text-accent/70">┌</span>
        <span className="text-accent">// LEARNINGS</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-muted">{posts.length} ENTRIES</span>
        <span className="text-accent/70">┐</span>
      </div>
      <h1 className="glitch text-4xl sm:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6">
        Blog
      </h1>
      <p className="text-muted mb-12 max-w-xl">
        Short, mostly-technical posts on things I learned the hard way — backend
        systems, Claude Code tooling, side-project tradeoffs.
      </p>
      {posts.length === 0 ? (
        <p className="mono text-sm text-muted">// no posts yet</p>
      ) : (
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block py-6 px-2 transition-colors hover:bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-accent/70 shrink-0 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg sm:text-xl font-medium tracking-tight flex-1 group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <span className="mono text-[10px] uppercase tracking-widest text-muted shrink-0">
                    {p.date}
                  </span>
                  <span className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all mono">
                    →
                  </span>
                </div>
                <p className="mt-2 ml-14 text-sm text-muted max-w-2xl">{p.summary}</p>
                {p.tags.length > 0 && (
                  <div className="mt-3 ml-14 mono text-[10px] uppercase tracking-widest text-muted/70 flex flex-wrap gap-x-3">
                    {p.tags.map((t) => (
                      <span key={t}>
                        <span className="text-accent/60">›</span> {t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
