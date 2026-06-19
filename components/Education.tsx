import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index={5} label="education" title="Education">
      <div className="card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-medium">National Yunlin University of Science and Technology</h3>
            <p className="text-sm text-muted">Bachelor&apos;s Degree, Information Management</p>
            <p className="text-xs text-muted/70 mt-0.5">Yunlin, Taiwan</p>
          </div>
          <span className="mono text-xs text-muted shrink-0 mt-1">Sep 2016 – Jun 2020</span>
        </div>
        <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
          <li className="rounded-lg border border-border bg-white/5 px-4 py-3">
            <div className="mono text-xs text-accent mb-1">Class rank</div>
            <div className="text-foreground">4th</div>
          </li>
          <li className="rounded-lg border border-border bg-white/5 px-4 py-3">
            <div className="mono text-xs text-accent mb-1">GPA</div>
            <div className="text-foreground">3.72 / 4.00</div>
          </li>
          <li className="rounded-lg border border-border bg-white/5 px-4 py-3">
            <div className="mono text-xs text-accent mb-1">Award</div>
            <div className="text-foreground">1st place — automated IoT vending machine (capstone)</div>
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
          <span><span className="mono text-xs text-accent mr-1">EN</span>English (Advanced)</span>
          <span className="text-border">·</span>
          <span><span className="mono text-xs text-accent mr-1">ZH</span>Mandarin (Native)</span>
        </div>
      </div>
    </Section>
  );
}
