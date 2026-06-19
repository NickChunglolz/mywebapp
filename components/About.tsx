import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index={1} label="about" title="A few things about me">
      <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-start">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-border ring-1 ring-accent/20">
          <Image
            src="/img/me/nick.jpg"
            alt="Nick Chung"
            fill
            sizes="(max-width: 640px) 160px, 192px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            I&apos;m a senior software engineer based in{" "}
            <span className="text-foreground">Markham, Ontario</span>, with 6+ years
            designing and scaling high-traffic distributed systems. Expert in microservices
            architecture, performance engineering, and operational modernization.
          </p>
          <p>
            Today I work on <span className="text-foreground">Caper.ai at Instacart</span>,
            architecting backend microservices (Java&nbsp;21 / Kotlin, gRPC, Temporal,
            PostgreSQL) that keep real-time cart processing humming at 99.9% uptime across
            global retailer integrations.
          </p>
          <p>
            Before Instacart I shipped a national high-speed rail booking platform at IBM
            Consulting (~200K daily passengers, DDD + SAGA + event-driven), modernized
            NeuVector&apos;s security stack at SUSE (Angular / Vue / Scala&nbsp;+&nbsp;Pekko),
            tuned AWS services behind Adobe&apos;s Photoshop API at Beyondsoft, and built
            industrial IoT apps on Siemens MindSphere.
          </p>
          <p>
            Outside of work I build small products end-to-end — <span className="text-foreground">Drip</span> (Canadian
            subscription tracker) and <span className="text-foreground">claude-toolkit</span>{" "}
            (a marketplace of Claude Code agents and skills I use daily). I&apos;m biased
            toward the shortest path to working software — fewer files, boring stdlib,
            deletions over additions.
          </p>
        </div>
      </div>
    </Section>
  );
}
