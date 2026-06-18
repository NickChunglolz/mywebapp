import Section from "./Section";

const LINKS = [
  { label: "GitHub", href: "https://github.com/NickChunglolz", handle: "@NickChunglolz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nickchunglolz/", handle: "/in/nickchunglolz" },
  { label: "Bitbucket", href: "https://bitbucket.org/nickchungios/profile/projects/", handle: "@nickchungios" },
  { label: "Instagram", href: "https://www.instagram.com/nickchunglolz/", handle: "@nickchunglolz" },
];

export default function Contact() {
  return (
    <Section id="contact" label="contact" title="Say hi">
      <p className="text-muted mb-6 max-w-2xl">
        Best way to reach me is GitHub or LinkedIn. I&apos;m always up to talk about backend
        systems, smart-cart edge cases, IoT platforms, or how to wring more out of Claude Code.
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card p-4 block"
            >
              <p className="mono text-xs text-accent mb-1">{l.label}</p>
              <p className="text-sm break-all">{l.handle}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
