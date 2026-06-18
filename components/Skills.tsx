import Section from "./Section";

const GROUPS = [
  { label: "Languages", items: ["Go", "TypeScript", "Java", "Python", "SQL", "Scala", "Bash"] },
  { label: "Backend", items: ["gRPC / Protobuf", "Spring Boot", "REST", "Event-driven", "DDD / SAGA", "Postgres", "Redis"] },
  { label: "Frontend", items: ["Next.js", "React", "Angular", "Vue", "Tailwind", "SASS"] },
  { label: "Infra & Cloud", items: ["GCP", "AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { label: "Domains", items: ["IoT (MindSphere)", "Container security (NeuVector)", "Mainframe → microservices", "Computer-vision retail"] },
  { label: "AI / Tooling", items: ["Claude Code", "MCP servers", "Custom agents & skills"] },
];

export default function Skills() {
  return (
    <Section id="skills" label="skills" title="Tools I reach for">
      <div className="grid sm:grid-cols-2 gap-4">
        {GROUPS.map((g) => (
          <div key={g.label} className="card p-5">
            <h3 className="mono text-xs text-accent mb-3">{g.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <span key={i} className="text-sm px-2.5 py-1 rounded bg-white/5 border border-border">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
