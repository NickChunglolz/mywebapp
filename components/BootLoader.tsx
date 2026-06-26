"use client";

import { useCallback, useEffect, useState } from "react";

export default function BootLoader() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);
  const [fading, setFading] = useState(false);

  const skip = useCallback(() => {
    setPct(100);
    setFading(true);
    setTimeout(() => setShow(false), 300);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) return;
    setShow(true);
    sessionStorage.setItem("booted", "1");
    const start = performance.now();
    const DURATION = 900;
    let raf = 0;
    let done = false;
    const step = (t: number) => {
      if (done) return;
      const p = Math.min(1, (t - start) / DURATION);
      setPct(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        done = true;
        setFading(true);
        setTimeout(() => setShow(false), 300);
      }
    };
    raf = requestAnimationFrame(step);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        done = true;
        cancelAnimationFrame(raf);
        skip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      done = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, [skip]);

  if (!show) return null;

  return (
    <div
      onClick={skip}
      className={`fixed inset-0 z-50 bg-background flex items-end justify-center pb-16 transition-opacity duration-300 cursor-pointer ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full max-w-md px-6 mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <div className="flex justify-between mb-3">
          <span>Initializing</span>
          <span className="text-accent">{String(pct).padStart(3, "0")}%</span>
        </div>
        <div className="h-px bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-[width] duration-75"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-muted/60">
          <span>nick-chung · v.26.06 · markham</span>
          <span>press space · click · esc to skip</span>
        </div>
      </div>
    </div>
  );
}
