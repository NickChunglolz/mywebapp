import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <p className="mono text-sm text-muted">
            Senior Software Developer · <span className="text-foreground">Instacart Caper.ai</span> · Toronto
          </p>
        </div>

        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter leading-[1.05]">
          Hi, I&apos;m Nick.
          <br />
          I build the backends that
          <br />
          <span className="bg-gradient-to-r from-accent via-teal-400 to-accent-2 bg-clip-text text-transparent">
            keep smart carts smart.
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
          Senior software engineer with 6+ years designing and scaling high-traffic,
          mission-critical distributed systems. Today I&apos;m building the backend
          platform behind <span className="text-foreground">Caper.ai</span> at Instacart —
          previously shipped impact at IBM Consulting and SUSE.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/#work"
            className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition shadow-lg shadow-accent/20"
          >
            See experience →
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-full border border-border hover:border-accent/60 hover:bg-white/5 transition"
          >
            Get in touch
          </Link>
          <a
            href="https://github.com/NickChunglolz"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-border hover:border-accent/60 hover:bg-white/5 transition mono text-sm"
          >
            github ↗
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {[
            { k: ">90%", v: "catalog perf gain" },
            { k: "99.9%", v: "uptime, cart processing" },
            { k: "200k+", v: "daily rail passengers" },
            { k: "6+", v: "years shipping" },
          ].map((s) => (
            <div key={s.v} className="bg-background px-4 py-5">
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{s.k}</div>
              <div className="mono text-xs text-muted mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
