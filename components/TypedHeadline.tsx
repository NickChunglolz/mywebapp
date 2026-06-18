"use client";

import { useEffect, useState } from "react";

export type TypedLine = { text: string; className?: string };

export default function TypedHeadline({
  lines,
  speed = 38,
  startDelay = 200,
}: {
  lines: TypedLine[];
  speed?: number;
  startDelay?: number;
}) {
  const total = lines.reduce((s, l) => s + l.text.length, 0);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= total) return;
    const delay = i === 0 ? startDelay : speed;
    const t = setTimeout(() => setI(i + 1), delay);
    return () => clearTimeout(t);
  }, [i, total, speed, startDelay]);

  const parts: React.ReactNode[] = [];
  let remaining = i;
  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const shown = Math.max(0, Math.min(remaining, line.text.length));
    parts.push(
      <span key={idx} className={line.className}>
        {line.text.slice(0, shown)}
      </span>
    );
    remaining -= line.text.length;
    if (shown < line.text.length) break;
    if (idx < lines.length - 1) parts.push(<br key={`br-${idx}`} />);
  }

  return (
    <>
      {parts}
      <span
        aria-hidden
        className="inline-block w-[4px] h-[0.85em] bg-accent ml-1.5 align-baseline translate-y-[0.05em] animate-[blink_1s_steps(2)_infinite]"
      />
    </>
  );
}
