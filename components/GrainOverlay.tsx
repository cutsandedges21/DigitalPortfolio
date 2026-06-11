/**
 * Full-site film-grain overlay with a subtle gradient colour accent.
 * Fixed, click-through, and sits above all content (mounted in the root layout).
 *
 * Tweak in one place:
 *  - grain amount  -> opacity on the <svg> (0.10–0.25)
 *  - grain size    -> baseFrequency on <feTurbulence> (higher = finer)
 *  - accent colour -> the two rgba() stops in the gradient layer below
 */
export default function GrainOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      {/* subtle gradient colour accent */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            "linear-gradient(125deg, rgba(124,108,255,0.16) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 58%, rgba(255,138,101,0.16) 100%)",
        }}
      />

      {/* grayscale film grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay">
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
    </div>
  );
}
