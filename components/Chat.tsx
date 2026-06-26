"use client";

import { useEffect, useRef, useState } from "react";
import ChatMarkdown from "./ChatMarkdown";
import RobotIcon from "./RobotIcon";
import Robot from "./Robot";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey — I'm Nick (well, a chatbot version of me). Ask about my work at Caper.ai, the rail booking platform at IBM, side projects, or anything else on this site.",
};

const QUIPS = [
  "hey there",
  "ask me about nick",
  "i know things",
  "let's chat",
  "boop me",
  "still scrolling?",
];

let audioCtx: AudioContext | null = null;
function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (audioCtx) return audioCtx;
  const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  audioCtx = new Ctor();
  return audioCtx;
}

function beep(ctx: AudioContext, freq: number, duration: number, when: number, type: OscillatorType = "square") {
  const t0 = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  osc.frequency.exponentialRampToValueAtTime(freq * (0.7 + Math.random() * 0.6), t0 + duration);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(0.12, t0 + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

function robotSpeak(text: string) {
  const ctx = getCtx();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  const words = text.split(/\s+/).filter(Boolean);
  let t = 0;
  const types: OscillatorType[] = ["square", "triangle", "sawtooth"];
  for (const w of words) {
    const syllables = Math.max(1, Math.min(4, Math.ceil(w.length / 2.5)));
    for (let i = 0; i < syllables; i++) {
      const freq = 260 + Math.random() * 540;
      const dur = 0.07 + Math.random() * 0.09;
      const type = types[Math.floor(Math.random() * types.length)];
      beep(ctx, freq, dur, t, type);
      t += dur * 0.85 + 0.02;
    }
    t += 0.09;
  }
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [quip, setQuip] = useState(0);
  const [showQuip, setShowQuip] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const voiceOnRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("bot-voice");
    if (stored === "1") setVoiceOn(true);
  }, []);

  useEffect(() => {
    voiceOnRef.current = voiceOn;
  }, [voiceOn]);

  useEffect(() => {
    if (open) {
      setShowQuip(false);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setShowQuip(true);
      if (voiceOn) robotSpeak(QUIPS[quip]);
      timer = setTimeout(() => {
        setShowQuip(false);
        timer = setTimeout(() => {
          setQuip((q) => (q + 1) % QUIPS.length);
          cycle();
        }, 4500);
      }, 3500);
    };
    timer = setTimeout(cycle, 2000);
    return () => clearTimeout(timer);
  }, [open, voiceOn, quip]);

  const toggleVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !voiceOn;
    setVoiceOn(next);
    localStorage.setItem("bot-voice", next ? "1" : "0");
    if (next) robotSpeak("online");
  };

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
    const types: OscillatorType[] = ["square", "triangle", "sawtooth"];
    let cursor = 0;
    const bleepChunk = (text: string) => {
      if (!voiceOnRef.current) return;
      const ctx = getCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();
      const words = text.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w));
      if (!words.length) return;
      const now = ctx.currentTime;
      let when = Math.max(cursor, now);
      for (const w of words) {
        const syllables = Math.max(1, Math.min(4, Math.ceil(w.length / 2.5)));
        for (let i = 0; i < syllables; i++) {
          const dur = 0.07 + Math.random() * 0.07;
          beep(
            ctx,
            260 + Math.random() * 520,
            dur,
            when - now,
            types[Math.floor(Math.random() * types.length)],
          );
          when += dur * 0.85 + 0.02;
        }
        when += 0.06;
      }
      cursor = when;
    };
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
        const chunk = decoder.decode(value, { stream: true });
        acc += chunk;
        setMessages([...next, { role: "assistant", content: acc }]);
        bleepChunk(chunk);
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
              <RobotIcon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Ask Nick</span>
              <span className="mono text-[9px] uppercase tracking-widest text-accent/70">● online</span>
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
                {m.role === "assistant" && m.content ? (
                  <ChatMarkdown>{m.content}</ChatMarkdown>
                ) : m.content ? (
                  m.content
                ) : busy && i === messages.length - 1 ? (
                  <span className="inline-flex gap-1 items-center py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-bounce" />
                  </span>
                ) : (
                  ""
                )}
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
      <div
        className={`group fixed bottom-8 right-8 z-50 text-accent ${
          open ? "" : "flex flex-col items-center justify-end h-28 w-20"
        }`}
      >
        {open ? (
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="w-14 h-14 rounded-full bg-background border border-accent/40 flex items-center justify-center text-xl"
          >
            ✕
          </button>
        ) : (
          <>
            <button
              onClick={toggleVoice}
              aria-label={voiceOn ? "Mute robot" : "Enable robot voice"}
              className={`absolute -top-3 -left-3 mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border transition-colors ${
                voiceOn
                  ? "border-accent text-accent bg-background"
                  : "border-border text-muted/70 bg-background hover:text-accent hover:border-accent/60"
              }`}
            >
              {voiceOn ? "● VOX" : "○ VOX"}
            </button>
            <div
              className={`absolute -top-2 right-0 mono text-[10px] uppercase tracking-widest bg-background border border-accent/50 text-accent px-2.5 py-1 rounded-md shadow-lg shadow-accent/10 transition-all duration-300 origin-bottom-right whitespace-nowrap ${
                showQuip ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              {QUIPS[quip]}
              <span className="absolute -bottom-[5px] right-5 w-2 h-2 rotate-45 bg-background border-r border-b border-accent/50" />
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Chat with Nick"
              className="flex flex-col items-center"
            >
              <span className="bot-idle drop-shadow-[0_0_8px_rgba(16,185,129,0.35)] group-hover:drop-shadow-[0_0_14px_rgba(16,185,129,0.6)] transition-[filter]">
                <Robot className="w-16 h-20" />
              </span>
              <span className="bot-shadow w-12 h-1.5 rounded-[50%] bg-accent blur-[3px] -mt-1" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
