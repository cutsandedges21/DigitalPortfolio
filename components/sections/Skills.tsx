import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        description="A toolkit spanning code, AI-assisted development, 3D, and the soft skills that make projects ship."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-accent/40">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
