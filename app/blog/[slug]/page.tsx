import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidElement, type ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Mermaid from "@/components/Mermaid";
import Robot from "@/components/Robot";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Nick Chung`, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const wordCount = post.content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(wordCount / 220));

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.25em] text-accent hover:text-accent-2 transition"
      >
        <span>←</span> back to index
      </Link>

      <header className="mt-8">
        <div className="flex items-baseline gap-3 mb-4 mono text-[10px] uppercase tracking-[0.25em]">
          <span className="text-accent/70">┌</span>
          <span className="text-accent">// ENTRY</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-muted">{post.date}</span>
          <span className="text-accent/70">┐</span>
        </div>

        <h1 className="glitch text-4xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-6 max-w-2xl">{post.summary}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mono text-[10px] uppercase tracking-widest text-muted/70 pb-4 border-b border-border">
          <span>
            <span className="text-accent/60">›</span> {minutes} min read
          </span>
          <span>
            <span className="text-accent/60">›</span> {wordCount} words
          </span>
          {post.tags.map((t) => (
            <span key={t}>
              <span className="text-accent/60">›</span> {t}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-headings:tracking-tight prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pl-3 prose-h2:border-l-2 prose-h2:border-accent/60 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent-2 prose-code:before:content-none prose-code:after:content-none prose-code:bg-white/5 prose-code:border prose-code:border-border prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.85em] prose-pre:bg-black/40 prose-pre:border prose-pre:border-border prose-blockquote:border-accent/60 prose-blockquote:text-muted max-w-none mt-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt }) => {
              if (src === "/avatar.png") {
                return (
                  <span className="not-prose flex justify-center my-10">
                    <span className="relative inline-flex flex-col items-center">
                      <span className="relative inline-flex items-center justify-center w-36 h-36 rounded-2xl border border-accent/40 bg-black/60 shadow-[0_0_30px_-5px] shadow-accent/40 overflow-hidden">
                        <Robot className="w-28 h-32 text-accent drop-shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
                        <span className="absolute top-1.5 left-2 mono text-[8px] uppercase tracking-widest text-accent/70">● online</span>
                      </span>
                      <span className="mt-3 mono text-[9px] uppercase tracking-[0.25em] text-muted/70">
                        nick · v1.0
                      </span>
                    </span>
                  </span>
                );
              }
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt ?? ""} className="rounded-lg mx-auto" />
              );
            },
            pre: ({ children, ...rest }) => {
              const child = Array.isArray(children) ? children[0] : children;
              if (
                isValidElement(child) &&
                (child as ReactElement<{ className?: string; children?: string }>)
                  .props.className === "language-mermaid"
              ) {
                const code = (child as ReactElement<{ children?: string }>)
                  .props.children;
                return <Mermaid chart={String(code ?? "").replace(/\n$/, "")} />;
              }
              return <pre {...rest}>{children}</pre>;
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="mt-16 pt-6 border-t border-border flex items-center justify-between mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <Link href="/blog" className="hover:text-accent transition">
          ← back to index
        </Link>
        <span>// EOF</span>
      </footer>
    </article>
  );
}
