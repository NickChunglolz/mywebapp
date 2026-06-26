"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (glowRef.current)
          glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
        if (crossRef.current)
          crossRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        setCoords({ x: Math.round(x), y: Math.round(y) });
        raf = 0;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 mix-blend-screen hidden sm:block"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.18), rgba(20,184,166,0.06) 40%, transparent 70%)",
          transform: "translate3d(-9999px, -9999px, 0)",
        }}
      />
      <div
        ref={crossRef}
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block"
        style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      >
        <div className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 border border-accent/40 rounded-full" />
        <div className="absolute w-px h-2 -translate-x-1/2 -top-4 bg-accent/60" />
        <div className="absolute w-px h-2 -translate-x-1/2 top-2 bg-accent/60" />
        <div className="absolute h-px w-2 -translate-y-1/2 -left-4 bg-accent/60" />
        <div className="absolute h-px w-2 -translate-y-1/2 left-2 bg-accent/60" />
        <span className="absolute left-5 top-4 mono text-[9px] uppercase tracking-widest text-accent/70 whitespace-nowrap">
          {String(coords.x).padStart(4, "0")} · {String(coords.y).padStart(4, "0")}
        </span>
      </div>
    </>
  );
}
