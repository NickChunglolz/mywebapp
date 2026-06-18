import Image from "next/image";
import Section from "./Section";

type Role = {
  company: string;
  logo?: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
  link?: string;
};

const ROLES: Role[] = [
  {
    company: "Instacart — Caper Backend Platform",
    logo: "/img/companies/caper.png",
    role: "Senior Software Developer, Backend Platform",
    period: "Present",
    link: "https://www.caper.ai/",
    points: [
      "Backend services behind Caper's AI-powered smart shopping carts: catalog ingestion, store onboarding, item-view sync pipelines.",
      "Go services in a large monorepo, gRPC + protobuf, Postgres, Terraform-managed infra on GCP.",
      "Lead ERD reviews and cross-team alignment for new ingestion pipelines. On-call for production sync jobs across hundreds of stores.",
    ],
    stack: ["Go", "gRPC", "Postgres", "Terraform", "GCP"],
  },
  {
    company: "SUSE — NeuVector",
    logo: "/img/companies/suse.svg",
    role: "Senior Web Developer",
    period: "Jul 2024 – 2025",
    link: "https://www.suse.com/products/neuvector/",
    points: [
      "Revamped NeuVector's open-source container security UI, improving load times and rearchitecting components for better performance and scalability.",
      "Owned frontend architecture decisions across the open-source product.",
    ],
    stack: ["Angular", "TypeScript", "Kubernetes", "Container security"],
  },
  {
    company: "IBM Consulting",
    logo: "/img/companies/ibm.png",
    role: "Application Consultant",
    period: "Sep 2021 – 2024",
    link: "https://www.ibm.com/consulting",
    points: [
      "Led a major railway client's transformation from legacy mainframe to modern microservices — core reservation systems serving 190,000 daily inbound requests.",
      "Designed large-scale distributed apps with Java, DDD, SAGA, and event-driven architecture, applying clean-architecture principles.",
      "Owned stress-testing strategy, batch-job design, and full-stack delivery with Java + Angular. Hosted maintenance and training sessions for the client team.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "DDD", "SAGA", "Event-driven"],
  },
  {
    company: "Beyondsoft",
    logo: "/img/companies/beyondsoft.png",
    role: "Software Engineer (Adobe Photoshop API)",
    period: "Jul 2020 – Jul 2021",
    link: "https://www.adobe.io/apis/creativecloud/photo-imaging-api.html",
    points: [
      "Built and tuned AWS microservices behind Adobe's Photoshop API — JavaScript, Python, and some Go.",
      "Strengthened CI/CD with containerized builds and Jenkins pipelines; wrote integration tests against the public API surface.",
    ],
    stack: ["JavaScript", "Python", "Go", "AWS", "Docker", "Jenkins"],
  },
  {
    company: "Siemens — MindSphere",
    logo: "/img/companies/siemens.svg",
    role: "IoT Web Developer Intern",
    period: "Jul 2019 – Jun 2020",
    link: "https://siemens.mindsphere.io/en",
    points: [
      "Full-stack web applications on MindSphere, Siemens' industrial IoT PaaS.",
      "Demoed MindSphere at the 2019 Taipei Automation Show; lectured at the 2019 MindSphere World Taiwan IoT Camp in Taoyuan.",
    ],
    stack: ["Vue", "Node.js", "IoT", "MindSphere"],
  },
  {
    company: "Ching Jr Industrial Co., Ltd.",
    logo: "/img/companies/chingjr.png",
    role: "Web Developer (part-time)",
    period: "Jan – Feb 2019",
    link: "https://chingjr.com",
    points: [
      "Designed and managed the company website (WordPress); set up hosting on SiteGround.",
    ],
    stack: ["WordPress", "PHP"],
  },
];

export default function Work() {
  return (
    <Section id="work" index={2} label="experience" title="Where I've worked">
      <ol className="space-y-5">
        {ROLES.map((r) => (
          <li key={r.company} className="card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                {r.logo && (
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
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
                      </a>
                    ) : (
                      r.company
                    )}
                  </h3>
                  <p className="text-sm text-muted">{r.role}</p>
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
