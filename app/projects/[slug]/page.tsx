import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
  Globe,
} from "lucide-react";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Project`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const Icon = project.type === "mobile" ? Smartphone : Globe;

  return (
    <>
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-5 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
            <Icon className="size-3.5" />
            {project.type === "mobile" ? "Mobile App" : "Web Project"} ·{" "}
            {project.year}
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {project.summary}
          </p>

          {/* Meta + links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              Role · {project.role}
            </span>
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                {l.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>

          {/* Images */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[project.primaryImage, project.secondaryImage].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display text-xl font-semibold">Overview</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>

              <h2 className="mt-10 font-display text-xl font-semibold">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <h2 className="font-display text-xl font-semibold">Built with</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft className="size-4" />
              See more projects
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
