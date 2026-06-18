import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — Nick Chung" };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <p className="mono text-xs text-accent mb-2">// learnings</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">Blog</h1>
      <p className="text-muted mb-10">
        Short, mostly-technical posts on things I learned the hard way — backend systems,
        Claude Code tooling, side-project tradeoffs.
      </p>
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="card p-5 block group">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2 className="text-lg font-medium group-hover:text-accent transition-colors">{p.title}</h2>
                  <span className="mono text-xs text-muted shrink-0">{p.date}</span>
                </div>
                <p className="text-sm text-muted">{p.summary}</p>
                {p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="mono text-xs px-2 py-0.5 rounded bg-white/5 border border-border text-muted">
                        {t}
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
