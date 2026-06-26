"use client";

import { useRef, type ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
