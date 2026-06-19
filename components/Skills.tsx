import Section from "./Section";

type Tier = "Professional" | "Advanced" | "Experience";

const TIER_STYLE: Record<Tier, string> = {
  Professional: "bg-accent/15 text-accent border-accent/30",
  Advanced: "bg-accent-2/15 text-accent-2 border-accent-2/30",
  Experience: "bg-white/5 text-muted border-border",
};

type Skill = { name: string; tier?: Tier };

const GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Programming Languages",
    items: [
      { name: "Java", tier: "Professional" },
      { name: "Kotlin", tier: "Professional" },
      { name: "TypeScript", tier: "Professional" },
      { name: "JavaScript", tier: "Professional" },
      { name: "Go", tier: "Advanced" },
      { name: "Scala", tier: "Experience" },
      { name: "Python", tier: "Experience" },
      { name: "SQL" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Spring Boot", tier: "Professional" },
      { name: "Angular", tier: "Professional" },
      { name: "Vue", tier: "Advanced" },
      { name: "React", tier: "Experience" },
      { name: "Next.js", tier: "Advanced" },
    ],
  },
  {
    label: "Design Patterns",
    items: [
      { name: "Domain-Driven Design" },
      { name: "Event-Driven Architecture" },
      { name: "SAGA" },
      { name: "CQRS" },
      { name: "Clean Architecture" },
      { name: "Onion Architecture" },
    ],
  },
  {
    label: "Tools & Infra",
    items: [
      { name: "Git" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Jenkins" },
      { name: "Kubernetes" },
      { name: "Kafka" },
      { name: "Redis" },
      { name: "PostgreSQL" },
      { name: "Temporal" },
      { name: "Snowflake" },
      { name: "Datadog" },
      { name: "Docker" },
    ],
  },
  {
    label: "AI / Tooling",
    items: [
      { name: "Claude Code" },
      { name: "Cursor" },
      { name: "MCP servers" },
      { name: "Custom agents & skills" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" index={4} label="skills" title="Tools I reach for">
      <div className="mb-6 flex flex-wrap gap-3 text-xs mono text-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" /> Professional
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-2" /> Advanced
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-muted/50" /> Experience
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {GROUPS.map((g) => (
          <div key={g.label} className="card p-5">
            <h3 className="mono text-xs text-accent mb-3 uppercase tracking-wider">{g.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <span
                  key={i.name}
                  className={`text-sm px-2.5 py-1 rounded border ${
                    i.tier ? TIER_STYLE[i.tier] : "bg-white/5 border-border"
                  }`}
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
