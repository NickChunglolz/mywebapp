import Link from "next/link";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="mono text-sm tracking-tight">
          <span className="text-accent">nick</span>.chung()
        </Link>
        <nav className="hidden sm:flex items-center gap-5 mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 hover:text-foreground transition-colors"
            >
              <span className="text-accent/60 group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
