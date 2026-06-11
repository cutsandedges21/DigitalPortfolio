import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked & led"
        description="From founding a business to an IT support internship — a track record of initiative across very different environments."
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border md:left-[180px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${i}`} delay={i * 0.04}>
              <div className="relative grid gap-3 pl-8 md:grid-cols-[180px_1fr] md:gap-8 md:pl-0">
                {/* dot */}
                <span className="absolute left-[-4px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background md:left-[176px]" />

                <div className="text-sm font-medium text-muted-foreground md:pr-8 md:text-right">
                  {job.period}
                </div>

                <div className="md:pl-8">
                  <h3 className="font-display text-lg font-semibold">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">{job.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-2 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
