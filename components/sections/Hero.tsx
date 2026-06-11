"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <MapPin className="size-3.5 text-accent" />
            {profile.location} · {profile.role}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="mt-3 flex flex-wrap gap-x-4 font-display text-2xl font-semibold text-muted-foreground sm:text-3xl">
            {profile.headlineWords.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              >
                {w}
              </motion.span>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowDown className="size-4" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-accent/50"
            >
              <FileText className="size-4" />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
