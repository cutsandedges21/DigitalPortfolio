"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

/**
 * Fixed, full-page animated Paper Shaders background (MeshGradient) for the homepage.
 * Monochrome (black/white/grey) palette to match the theme. Renders client-side only and
 * sits behind all content (body is transparent).
 */
export default function SiteBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#ffffff", "#f2f2f1", "#d6d6d3", "#a6a6a3", "#3a3a38"]}
        speed={0.4}
        distortion={0.8}
        swirl={0.55}
      />

      {/* light veil keeps body text legible over the gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/55" />
    </div>
  );
}
