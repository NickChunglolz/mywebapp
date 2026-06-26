import Link from "next/link";
import TypedHeadline from "./TypedHeadline";
import CountUp from "./CountUp";
import MagneticButton from "./MagneticButton";
import { yearsShipping } from "@/lib/stats";

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

        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.045em] leading-[1.02] min-h-[11rem] sm:min-h-[16rem]">
          <TypedHeadline
            lines={[
              { text: "Hi, I’m Nick." },
              { text: "I build the backends that" },
              {
                text: "keep smart carts smart.",
                className: "bg-gradient-to-r from-accent via-teal-400 to-accent-2 bg-clip-text text-transparent",
              },
            ]}
          />
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
          Senior software engineer with {yearsShipping}+ years shipping high-traffic,
          mission-critical distributed systems —{" "}
          <span className="text-foreground">born and raised in Taiwan</span>, started my
          career in Taipei (IBM Consulting, SUSE), and{" "}
          <span className="text-foreground">now in Toronto</span> building the backend
          platform behind <span className="text-foreground">Caper.ai</span> at Instacart.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton>
            <Link
              href="/#work"
              className="inline-block px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition shadow-lg shadow-accent/20"
            >
              See experience →
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full border border-border hover:border-accent/60 hover:bg-white/5 transition"
            >
              Get in touch
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://github.com/NickChunglolz"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-border hover:border-accent/60 hover:bg-white/5 transition mono text-sm"
            >
              github ↗
            </a>
          </MagneticButton>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {[
            { node: <><CountUp to={90} prefix=">" suffix="%" /></>, v: "catalog perf gain" },
            { node: <CountUp to={99.9} decimals={1} suffix="%" />, v: "uptime, cart processing" },
            { node: <CountUp to={200} suffix="k+" />, v: "daily rail passengers" },
            { node: <CountUp to={yearsShipping} suffix="+" />, v: "years shipping" },
          ].map((s) => (
            <div key={s.v} className="bg-background px-4 py-5">
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{s.node}</div>
              <div className="mono text-xs text-muted mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
