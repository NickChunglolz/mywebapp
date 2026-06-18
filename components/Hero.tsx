import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="mono text-sm text-accent mb-4">$ whoami</p>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
        Nick Chung — building <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">backends</span>
        <br className="hidden sm:block" /> that ship and stay shipped.
      </h1>
      <p className="mt-6 text-lg text-muted max-w-2xl">
        Software engineer on Instacart&apos;s Caper R&amp;D team (PODS), wiring the brains behind AI-powered shopping carts.
        I write Go, TypeScript, and the occasional Terraform module. Side projects keep me honest about taste.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#projects"
          className="px-5 py-2.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition"
        >
          See projects
        </Link>
        <Link
          href="/#contact"
          className="px-5 py-2.5 rounded-md border border-border hover:border-accent/60 transition"
        >
          Get in touch
        </Link>
        <a
          href="https://github.com/NickChunglolz"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-md border border-border hover:border-accent/60 transition mono text-sm"
        >
          github →
        </a>
      </div>
    </section>
  );
}
