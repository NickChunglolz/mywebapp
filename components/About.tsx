import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="about" title="A few things about me">
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
            I&apos;m a senior software engineer with a full-stack skillset honed across
            consulting, big tech, and industrial-IoT shops. Today I work on{" "}
            <span className="text-foreground">Caper R&amp;D at Instacart</span>, where my
            team (PODS) builds the platform services behind Caper&apos;s computer-vision-enabled
            smart shopping carts — catalog sync, store onboarding, item-recognition pipelines.
          </p>
          <p>
            Before Instacart I shipped a railway-scale microservices migration at IBM
            Consulting (190K daily reservations, Java + DDD + SAGA), modernized NeuVector&apos;s
            open-source container security UI at SUSE, tuned AWS services behind Adobe&apos;s
            Photoshop API at Beyondsoft, and built industrial IoT apps on Siemens MindSphere.
          </p>
          <p>
            Outside of work I build small products end-to-end. <span className="text-foreground">Drip</span>{" "}
            is a Canadian-focused subscription tracker; <span className="text-foreground">claude-toolkit</span>{" "}
            is a marketplace of Claude Code agents and skills I use daily.
          </p>
          <p>
            I&apos;m biased toward the shortest path to working software — fewer files,
            boring stdlib, deletions over additions. If a one-liner solves it, that&apos;s the line.
          </p>
        </div>
      </div>
    </Section>
  );
}
