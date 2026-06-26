"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROJECTS } from "@/lib/projects";

type Item = { label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const go = (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const open = (href: string) => () => window.open(href, "_blank", "noopener,noreferrer");
    return [
      { label: "Jump · Hero", hint: "section", run: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { label: "Jump · Ask Nick", hint: "section", run: go("ask") },
      { label: "Jump · About", hint: "section", run: go("about") },
      { label: "Jump · Work", hint: "section", run: go("work") },
      { label: "Jump · Projects", hint: "section", run: go("projects") },
      { label: "Jump · Skills", hint: "section", run: go("skills") },
      { label: "Jump · Education", hint: "section", run: go("education") },
      { label: "Jump · Contact", hint: "section", run: go("contact") },
      ...PROJECTS.map((p) => ({
        label: `Open · ${p.name}`,
        hint: p.cta,
        run: open(p.href),
      })),
      { label: "GitHub", hint: "external", run: open("https://github.com/NickChunglolz") },
      { label: "LinkedIn", hint: "external", run: open("https://www.linkedin.com/in/nickchunglolz/") },
    ];
  }, []);

  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const needle = q.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(needle) || i.hint.includes(needle));
  }, [items, q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(filtered.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const it = filtered[active];
        if (it) {
          it.run();
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-background border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <span className="mono text-[10px] text-accent uppercase tracking-widest">⌘K</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Jump to section, open a project…"
            className="flex-1 bg-transparent py-4 outline-none text-sm placeholder:text-muted"
          />
          <span className="mono text-[10px] text-muted/60">esc</span>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 mono text-xs text-muted">no matches</li>
          )}
          {filtered.map((it, i) => (
            <li
              key={it.label}
              onMouseEnter={() => setActive(i)}
              onClick={() => {
                it.run();
                setOpen(false);
              }}
              className={`px-4 py-2.5 flex items-center justify-between cursor-pointer ${
                i === active ? "bg-white/5 text-foreground" : "text-muted"
              }`}
            >
              <span className="text-sm">{it.label}</span>
              <span className="mono text-[10px] uppercase tracking-widest text-muted/60">
                {it.hint}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
