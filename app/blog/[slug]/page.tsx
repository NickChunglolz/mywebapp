import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Nick Chung`, description: post.summary };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="mono text-xs text-accent hover:text-accent-2 transition">
        ← back to blog
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">{post.title}</h1>
        <p className="mono text-xs text-muted">{post.date}</p>
      </header>
      <div className="prose prose-invert prose-headings:tracking-tight prose-a:text-accent prose-code:text-accent-2 prose-code:before:content-none prose-code:after:content-none max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
