"use client";

import { useState } from "react";
import { Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile, siteConfig } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree endpoint configured → fall back to the user's mail client.
    if (!siteConfig.formspreeEndpoint) {
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${name}`,
      )}&body=${body}`;
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to internships, freelance projects, and collaboration. The fastest way to reach me is below."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Direct links */}
        <Reveal className="flex flex-col gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent/50"
          >
            <span className="rounded-xl bg-accent/10 p-3 text-accent">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">Email</span>
              <span className="block text-sm text-muted-foreground">
                {profile.email}
              </span>
            </span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent/50"
          >
            <span className="rounded-xl bg-accent/10 p-3 text-accent">
              <LinkedInIcon className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">LinkedIn</span>
              <span className="block text-sm text-muted-foreground">
                Connect with me
              </span>
            </span>
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent/50"
          >
            <span className="rounded-xl bg-accent/10 p-3 text-accent">
              <FileText className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold">Resume</span>
              <span className="block text-sm text-muted-foreground">
                Download PDF
              </span>
            </span>
          </a>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle2 className="size-10 text-accent" />
              <h3 className="font-display text-xl font-semibold">
                Message sent!
              </h3>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                <Send className="size-4" />
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
