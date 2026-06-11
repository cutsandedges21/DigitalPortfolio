import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.05}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="rounded-xl bg-accent/10 p-2.5 text-accent">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {e.school}
                </h3>
                <p className="text-sm text-muted-foreground">{e.program}</p>
                <p className="mt-1 text-xs font-medium text-accent">
                  {e.period}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
