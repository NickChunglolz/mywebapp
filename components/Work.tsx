import Image from "next/image";
import Section from "./Section";
import { ROLES } from "@/lib/roles";

export default function Work() {
  return (
    <Section id="work" index={2} label="experience" title="Where I've worked">
      <ol className="space-y-5">
        {ROLES.map((r) => (
          <li key={r.company} className="card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                {r.logo && (
                  <div className={`w-12 h-12 shrink-0 flex items-center justify-center rounded p-1 ${r.logoBg ?? "bg-white/85"}`}>
                    <Image
                      src={r.logo}
                      alt={`${r.company} logo`}
                      width={48}
                      height={48}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-medium">
                    {r.link ? (
                      <a href={r.link} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                        {r.company}
                        {r.unit && <span className="text-muted"> — {r.unit}</span>}
                      </a>
                    ) : (
                      <>
                        {r.company}
                        {r.unit && <span className="text-muted"> — {r.unit}</span>}
                      </>
                    )}
                  </h3>
                  <p className="text-sm text-muted">{r.role}</p>
                  {r.location && <p className="text-xs text-muted/70 mt-0.5">{r.location}</p>}
                </div>
              </div>
              <span className="mono text-xs text-muted shrink-0 mt-1">{r.period}</span>
            </div>
            <ul className="list-disc list-outside pl-5 text-muted space-y-1.5 text-sm leading-relaxed">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {r.stack.map((s) => (
                <span key={s} className="mono text-xs px-2 py-0.5 rounded bg-white/5 border border-border text-muted">
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
