import { Sparkles, Code2, Award, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DisplayCards from "@/components/DisplayCards";
import { certifications } from "@/lib/data";

const featuredCards = [
  {
    icon: <Sparkles className="size-4 text-background" />,
    title: "AI Fluency",
    description: "Claude · 4D Framework",
    date: "Foundations",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Code2 className="size-4 text-background" />,
    title: "Claude Code",
    description: "AI-powered dev",
    date: "In Action",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Award className="size-4 text-background" />,
    title: "HubSpot SEO",
    description: "SEO I & II",
    date: "Certified",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function Certifications() {
  const byIssuer = certifications.reduce<Record<string, string[]>>(
    (acc, c) => {
      (acc[c.issuer] ??= []).push(c.name);
      return acc;
    },
    {},
  );

  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Certified & always learning"
        description="Formal credentials in AI collaboration, AI-assisted development, SEO, and digital marketing."
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="flex min-h-[420px] items-center justify-center overflow-hidden py-10 sm:min-h-[480px] lg:justify-start lg:pl-4">
          <div className="scale-90 sm:scale-100">
            <DisplayCards cards={featuredCards} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8">
            {Object.entries(byIssuer).map(([issuer, names]) => (
              <div key={issuer}>
                <h3 className="mb-3 font-display text-lg font-semibold">
                  {issuer}
                </h3>
                <ul className="space-y-2">
                  {names.map((name) => (
                    <li
                      key={name}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                    >
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-foreground/90">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
