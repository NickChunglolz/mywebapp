"use client";

import { useEffect, useRef, useState } from "react";

export default function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const idx = String(index).padStart(2, "0");
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      data-section-label={label}
      className="max-w-5xl mx-auto px-6 py-24 scroll-mt-20"
    >
      <div className="flex items-baseline gap-3 mb-4 mono text-[10px] uppercase tracking-[0.25em]">
        <span className="text-accent/70">┌</span>
        <span className="text-accent">PLATE {idx}</span>
        <span className="relative h-px flex-1 bg-border overflow-hidden">
          <span
            className="absolute inset-0 bg-accent origin-left transition-transform duration-700 ease-out"
            style={{ transform: `scaleX(${seen ? 1 : 0})` }}
          />
        </span>
        <span className="text-muted">{label}</span>
        <span className="text-accent/70">┐</span>
      </div>
      <h2 className="glitch text-4xl sm:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
}
