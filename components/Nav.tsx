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
        <nav className="hidden sm:flex gap-6 text-sm text-muted">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
