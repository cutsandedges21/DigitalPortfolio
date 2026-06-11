import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: "5+", label: "Years running my own business" },
  { value: "3", label: "Languages spoken fluently" },
  { value: "7", label: "Professional certifications" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="About" title="Entrepreneur, student, builder" />

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              I&apos;m a Computer Science &amp; Mathematics student at Vanier
              College with a habit of turning ideas into real things. At 13 I
              founded <span className="text-foreground">Cuts and Edges</span>, a
              lawn-maintenance business I&apos;ve grown and run myself —
              handling pricing, scheduling, marketing, and long-term client
              relationships.
            </p>
            <p>
              Alongside school and business, I tutor students in math, science,
              French, and English, and coach hockey goaltenders. Those roles
              taught me how to explain hard ideas simply and lead under
              pressure. Lately I channel that same energy into{" "}
              <span className="text-foreground">
                web development, mobile apps, and AI-assisted development
              </span>{" "}
              — building software people can actually use.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="grid gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="font-display text-3xl font-bold text-accent">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
