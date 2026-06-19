"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Tell me about yourself",
  "What did you build at Caper.ai?",
  "Why event sourcing at SUSE?",
  "What's on your GitHub?",
];

export default function AskNick() {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, busy]);

  async function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error(await res.text());
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch (err) {
      setMessages([
        ...next,
        { role: "assistant", content: `Something went wrong: ${(err as Error).message}` },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8 mb-8">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Ask me anything</h2>
        </div>
        <p className="text-sm text-muted mb-5">
          A chatbot trained on my bio, work, and blog. Ask about projects, opinions, stack
          choices — whatever you'd ask me on a call.
        </p>

        {messages.length > 0 && (
          <div
            ref={scrollRef}
            className="max-h-80 overflow-y-auto space-y-3 mb-4 pr-1 text-sm"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-foreground text-background px-3 py-2 w-fit"
                    : "mr-auto max-w-[90%] rounded-2xl bg-white/5 border border-border px-3 py-2 text-foreground/90 whitespace-pre-wrap"
                }
              >
                {m.content || (busy && i === messages.length - 1 ? "…" : "")}
              </div>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex gap-2 mb-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Nick…"
            className="flex-1 rounded-full bg-white/5 border border-border px-4 py-2.5 text-sm outline-none focus:border-accent/60"
            disabled={busy}
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium disabled:opacity-40"
          >
            {busy ? "…" : "Ask"}
          </button>
        </form>

        <div className="flex flex-wrap gap-2 mb-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              disabled={busy}
              className="mono text-xs px-3 py-1 rounded-full bg-white/5 border border-border text-muted hover:text-foreground hover:border-accent/60 transition disabled:opacity-40"
            >
              {s}
            </button>
          ))}
        </div>

        <p className="mono text-xs text-muted/60">
          AI can make mistakes. Verify important info.
        </p>
      </div>
    </section>
  );
}
