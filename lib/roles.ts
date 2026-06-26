export type Role = {
  company: string;
  unit?: string;
  logo?: string;
  logoBg?: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  stack: string[];
  link?: string;
};

export const ROLES: Role[] = [
  {
    company: "Instacart",
    unit: "Caper.ai",
    logo: "/img/companies/caper.png",
    role: "Senior Software Developer",
    period: "Mar 2025 – Present",
    location: "Remote · Toronto, Canada",
    link: "https://www.caper.ai/",
    points: [
      "Led the design and architecture of a next-generation catalog system syncing 100M+ items hourly across 1,000+ retail stores (each carrying ~1M SKUs), replacing legacy workflows with high-performance infrastructure that delivered >90% faster syncs and enabled more frequent, reliable updates.",
      "Spearheaded internal and external self-serve management systems (incentives, NOF (Not-On-File) item management), empowering operators and partners to resolve issues independently and reducing manual operational overhead by 80%+.",
      "Architected and scaled backend microservices using Java 21 / Kotlin, gRPC, Temporal, PostgreSQL, and distributed caching, ensuring >99.9% uptime for real-time cart processing across global retailer integrations.",
      "Drove operational excellence by automating onboarding workflows (−50% time), decreasing MTTR via Datadog observability, and optimizing Snowflake query performance to cut latency and costs by 30%.",
    ],
    stack: ["Java 21", "Kotlin", "gRPC", "Temporal", "PostgreSQL", "Snowflake", "Datadog"],
  },
  {
    company: "SUSE",
    unit: "SUSE Security",
    logo: "/img/companies/suse.svg",
    logoBg: "bg-[#173f35]",
    role: "Senior Web Developer",
    period: "Jul 2024 – Dec 2025",
    location: "Remote · Toronto, Canada & Taipei, Taiwan",
    link: "https://www.suse.com/products/neuvector/",
    points: [
      "Optimized NeuVector web app performance by 50% via frontend architecture upgrades (Angular / Vue) across NeuVector, Harvester, and Kubewarden.",
      "Orchestrated architectural modernization and major version upgrades for Scala / Pekko services, establishing standardized design patterns that significantly bolstered system security and reduced technical debt.",
      "Introduced event-sourcing for security operations using Java 17, Spring Boot, Axon, and OpenTelemetry.",
    ],
    stack: ["Angular", "Vue", "Scala", "Pekko", "Java 17", "Spring Boot", "Axon", "OpenTelemetry"],
  },
  {
    company: "IBM",
    unit: "IBM Consulting",
    logo: "/img/companies/ibm.png",
    role: "Application Consultant — Software Engineer",
    period: "Sep 2021 – Jul 2024",
    location: "Taipei, Taiwan",
    link: "https://www.ibm.com/consulting",
    points: [
      "Led full-stack delivery of a national high-speed rail booking platform, architecting the critical Schedule, Inventory, Pricing, and Reservation domains serving ~200K+ daily passengers using DDD, SAGA, and event-driven microservices.",
      "Engineered high-performance batch workflows and stress-testing strategies, resulting in a 70%+ improvement in system throughput and operational efficiency.",
      "Spearheaded the rollout of strategic railway management systems, streamlining nationwide operations and driving an 80%+ boost in daily operational efficiency.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "DDD", "SAGA", "Event-driven"],
  },
  {
    company: "Beyondsoft",
    unit: "Photoshop API",
    logo: "/img/companies/beyondsoft.png",
    role: "Software Engineer",
    period: "Jul 2020 – Jul 2021",
    location: "Taipei, Taiwan",
    link: "https://www.adobe.io/apis/creativecloud/photo-imaging-api.html",
    points: [
      "Enhanced service-driven microservices for Adobe Photoshop APIs using Go, Python, and AWS.",
      "Implemented CI/CD pipelines (Jenkins, Docker) for scalable delivery.",
    ],
    stack: ["Go", "Python", "AWS", "Jenkins", "Docker"],
  },
  {
    company: "Siemens",
    unit: "MindSphere",
    logo: "/img/companies/siemens.svg",
    role: "IoT Web Developer",
    period: "Jul 2019 – Jun 2020",
    location: "Taipei, Taiwan",
    link: "https://siemens.mindsphere.io/en",
    points: [
      "Developed IoT web applications on Siemens MindSphere, the industrial IoT PaaS.",
      "Presented solutions at the 2019 Taipei Automation Show and the 2019 MindSphere World Taiwan IoT Camp in Taoyuan.",
    ],
    stack: ["Vue", "Node.js", "IoT", "MindSphere"],
  },
];
