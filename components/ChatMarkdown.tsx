import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: (p) => <p className="mb-2 last:mb-0">{p.children}</p>,
        strong: (p) => (
          <strong className="font-semibold text-foreground">{p.children}</strong>
        ),
        em: (p) => <em className="italic">{p.children}</em>,
        ul: (p) => (
          <ul className="list-disc list-outside pl-5 space-y-1 mb-2 last:mb-0">
            {p.children}
          </ul>
        ),
        ol: (p) => (
          <ol className="list-decimal list-outside pl-5 space-y-1 mb-2 last:mb-0">
            {p.children}
          </ol>
        ),
        a: (p) => (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-accent"
          >
            {p.children}
          </a>
        ),
        code: (p) => (
          <code className="px-1 py-0.5 bg-white/10 rounded mono text-xs">
            {p.children}
          </code>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
