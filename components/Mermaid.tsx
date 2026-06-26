"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

let initialized = false;
let counter = 0;

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          background: "transparent",
          primaryColor: "#0a0a0a",
          primaryBorderColor: "#10b981",
          primaryTextColor: "#e5e5e5",
          secondaryColor: "#171717",
          tertiaryColor: "#0a0a0a",
          lineColor: "#10b981",
          textColor: "#e5e5e5",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "13px",
        },
        flowchart: { curve: "basis" },
        securityLevel: "loose",
      });
      initialized = true;
    }

    const el = ref.current;
    if (!el) return;
    const id = `mmd-${++counter}`;
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (ref.current) ref.current.innerHTML = svg;
      })
      .catch((err) => {
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-red-400 text-xs">mermaid error: ${String(err).slice(0, 200)}</pre>`;
        }
      });
  }, [chart]);

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
    />
  );
}
