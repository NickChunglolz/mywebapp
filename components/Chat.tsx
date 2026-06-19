"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey — I'm Nick (well, a chatbot version of me). Ask about my work at Caper.ai, the rail booking platform at IBM, side projects, or anything else on this site.",
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, busy]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
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
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-3rem)] h-[28rem] flex flex-col rounded-2xl border border-border bg-background shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium">Ask Nick</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted hover:text-foreground text-sm"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl bg-foreground text-background px-3 py-2"
                    : "mr-auto max-w-[90%] rounded-2xl bg-white/5 border border-border px-3 py-2 text-foreground/90 whitespace-pre-wrap"
                }
              >
                {m.content || (busy && i === messages.length - 1 ? "…" : "")}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex gap-2 p-3 border-t border-border"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work, projects, anything…"
              className="flex-1 rounded-full bg-white/5 border border-border px-4 py-2 text-sm outline-none focus:border-accent/60"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium disabled:opacity-40"
            >
              {busy ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-accent/30 hover:scale-105 transition ring-2 ring-accent/40 hover:ring-accent flex items-center justify-center bg-foreground text-background"
        aria-label={open ? "Close chat" : "Chat with Nick"}
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <>
            <img
              src="/img/me/avatar.svg"
              alt=""
              width={56}
              height={56}
              className="w-full h-full object-cover bg-white"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background" />
          </>
        )}
      </button>
    </>
  );
}
