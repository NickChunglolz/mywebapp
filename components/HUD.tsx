"use client";

import { useEffect, useState, type ReactNode } from "react";

const BARS = "▁▂▃▄▅▆▇█";
const spark = (vals: number[], max: number) =>
  vals
    .map((x) => BARS[Math.min(7, Math.max(0, Math.floor((x / max) * 7)))])
    .join("");

const gauge = (pct: number, len = 8) => {
  const filled = Math.round((Math.max(0, Math.min(100, pct)) / 100) * len);
  return "█".repeat(filled) + "░".repeat(len - filled);
};

export default function HUD() {
  const [time, setTime] = useState("--:--");
  const [section, setSection] = useState("INDEX");
  const [scroll, setScroll] = useState(0);
  const [rx, setRx] = useState<number[]>(() => Array(14).fill(1.2));
  const [lat, setLat] = useState(12);
  const [mem, setMem] = useState(84);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScroll(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-CA", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRx((h) => {
        const last = h[h.length - 1];
        const next = Math.max(0.1, Math.min(9.9, last + (Math.random() - 0.5) * 2.4));
        return [...h.slice(1), next];
      });
      setLat((l) => Math.max(4, Math.min(48, l + Math.round((Math.random() - 0.5) * 8))));
      setMem((m) => Math.max(60, Math.min(96, m + Math.round((Math.random() - 0.5) * 3))));
    }, 700);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section-label]"),
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const label = visible?.target.getAttribute("data-section-label");
        if (label) setSection(label.toUpperCase());
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    sections.forEach((s) => io.observe(s));

    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
      }
      const next = e.key === "ArrowDown" || e.key === "j";
      const prev = e.key === "ArrowUp" || e.key === "k";
      if (!next && !prev) return;
      e.preventDefault();
      const y = window.scrollY + 100;
      const idx = sections.findIndex((s) => s.offsetTop > y);
      const currentIdx = idx === -1 ? sections.length - 1 : Math.max(0, idx - 1);
      const target =
        sections[
          next
            ? Math.min(sections.length - 1, currentIdx + 1)
            : Math.max(0, currentIdx - 1)
        ];
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const scrollPct = Math.round(scroll * 100);
  const rxNow = rx[rx.length - 1];

  return (
    <>
      <div className="fixed top-20 right-4 z-30 mono text-[10px] uppercase tracking-[0.18em] hidden sm:block pointer-events-none select-none">
        <div className="relative border border-border/60 bg-background/50 backdrop-blur-sm px-3 py-2.5 min-w-[16rem]">
          <Tick className="-top-px -left-px border-t border-l" />
          <Tick className="-top-px -right-px border-t border-r" />
          <Tick className="-bottom-px -left-px border-b border-l" />
          <Tick className="-bottom-px -right-px border-b border-r" />

          <Row
            k="SYS"
            v={
              <span>
                <span className="text-accent">●</span> v.26.06
              </span>
            }
          />
          <Row k="LOC" v="markham·on" />
          <Row k="TIME" v={`${time} EDT`} />

          <Sep />

          <Row k="SEC" v={<span className="text-foreground">§ {section}</span>} />
          <Row
            k="POS"
            v={
              <>
                <span className="text-accent">{gauge(scrollPct)}</span>{" "}
                {String(scrollPct).padStart(3, "0")}%
              </>
            }
          />

          <Sep />

          <Row
            k="RX"
            v={
              <>
                <span className="text-accent">{spark(rx, 10)}</span>{" "}
                {rxNow.toFixed(1)}MB
              </>
            }
          />
          <Row k="LAT" v={`${String(lat).padStart(2, "0")}MS`} />
          <Row
            k="MEM"
            v={
              <>
                <span className="text-accent">{gauge(mem)}</span> {mem}%
              </>
            }
          />

          <Sep />

          <div className="text-muted/60 text-right tracking-[0.22em]">↑↓ NAV · ⌘K</div>
        </div>
      </div>
      <div className="fixed top-0 right-0 bottom-0 w-px bg-border hidden sm:block z-30 pointer-events-none">
        <div className="w-px bg-accent origin-top" style={{ height: `${scroll * 100}%` }} />
      </div>
    </>
  );
}

function Row({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex justify-between gap-4 leading-[1.4]">
      <span className="text-muted/60">{k}</span>
      <span className="tabular-nums text-muted">{v}</span>
    </div>
  );
}

function Sep() {
  return <div className="my-1.5 h-px bg-border/40" />;
}

function Tick({ className }: { className: string }) {
  return <span aria-hidden className={`absolute w-2 h-2 border-accent ${className}`} />;
}
