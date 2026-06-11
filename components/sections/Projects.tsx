import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SectionWithMockup from "@/components/SectionWithMockup";
import { projects } from "@/lib/data";

export default function Projects() {
  const webProjects = projects.filter((p) => p.type === "web");
  const mobileProjects = projects.filter((p) => p.type === "mobile");

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of web and mobile builds. Each one started as a real problem and shipped as something usable."
        />

        {/* Web projects — landscape browser-style feature cards */}
        <div className="space-y-8">
          {webProjects.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-colors hover:border-accent/50 md:grid-cols-2"
              >
                <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    Web · {p.year}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                    View project
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                {/* Browser mockup */}
                <div className="relative min-h-[260px] bg-muted/30 p-6 md:p-8">
                  <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
                    <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2">
                      <span className="size-2.5 rounded-full bg-[#d4d4d1]" />
                      <span className="size-2.5 rounded-full bg-[#bdbdba]" />
                      <span className="size-2.5 rounded-full bg-[#a6a6a3]" />
                    </div>
                    <div
                      className="aspect-[16/10] w-full bg-cover bg-top"
                      style={{ backgroundImage: `url(${p.primaryImage})` }}
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile apps — full-bleed layered phone mockups */}
      {mobileProjects.map((p, i) => (
        <SectionWithMockup
          key={p.slug}
          reverseLayout={i % 2 === 1}
          title={
            <>
              <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-accent">
                Mobile App · {p.year}
              </span>
              {p.title}
            </>
          }
          description={
            <>
              <span className="block">{p.description}</span>
              <span className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </span>
              <Link
                href={`/projects/${p.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent"
              >
                View project
                <ArrowUpRight className="size-4" />
              </Link>
            </>
          }
          primaryImageSrc={p.primaryImage}
          secondaryImageSrc={p.secondaryImage}
        />
      ))}
    </section>
  );
}
