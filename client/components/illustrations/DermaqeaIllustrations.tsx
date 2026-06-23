"use client";

/** Cohesive Dermaqea illustration system — micro-point lattice + technical linework */

type IllustrationProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

function LatticeOverlay({ cols = 12, rows = 16, seed = 0 }: { cols?: number; rows?: number; seed?: number }) {
  const dots: { x: number; y: number; o: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const n = Math.sin((r + seed) * 12.9898 + (c + seed) * 78.233) * 43758.5453;
      // Use only the fractional part to get a pseudo-random value
      const frac = n - Math.floor(n);
      // base opacity range + scaled fractional component
      const rawO = 0.08 + frac * 0.55;
      // Round to fixed precision and store as string so SSR/client markup matches exactly
      const o = rawO.toFixed(3);
      dots.push({ x: c, y: r, o });
    }
  }
  return (
    <g className="text-primary">
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={8 + d.x * 7}
          cy={6 + d.y * 7}
          r={1.1}
          fill="currentColor"
          opacity={d.o}
        />
      ))}
    </g>
  );
}

/** Packaging cross-section with invisible signature lattice embedded in artwork */
export function EmbedSignatureIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      role="img"
    >
      <title>Invisible signature embedded in packaging artwork</title>
      <rect x="40" y="30" width="240" height="220" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="56" y="46" width="208" height="188" rx="4" className="fill-secondary/40" />
      <rect x="72" y="62" width="80" height="12" rx="2" className="fill-foreground/8" />
      <rect x="72" y="82" width="120" height="6" rx="1" className="fill-foreground/5" />
      <rect x="72" y="94" width="96" height="6" rx="1" className="fill-foreground/5" />
      <g transform="translate(64, 110)">
        <LatticeOverlay cols={14} rows={12} seed={1} />
      </g>
      <rect x="56" y="46" width="208" height="188" rx="4" className="stroke-primary/25" strokeWidth="1" strokeDasharray="4 3" fill="none" />
      <line x1="268" y1="140" x2="300" y2="140" className="stroke-primary" strokeWidth="1.5" />
      <circle cx="304" cy="140" r="3" className="fill-primary" />
      <text x="268" y="128" className="fill-muted-foreground" fontSize="9" fontFamily="var(--font-dm-mono), monospace">
        pixel lattice
      </text>
    </svg>
  );
}

/** Smartphone scanning packaging — decode beam */
export function ScanDecodeIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      role="img"
    >
      <title>Smartphone camera reconstructing embedded signature</title>
      <rect x="180" y="40" width="100" height="200" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="192" y="56" width="76" height="148" rx="4" className="fill-secondary/30" />
      <rect x="208" y="72" width="44" height="80" rx="3" className="fill-foreground/6" />
      <g transform="translate(200, 80)">
        <LatticeOverlay cols={8} rows={10} seed={2} />
      </g>
      <path d="M120 140 L192 120 L192 160 Z" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
      <line x1="40" y1="140" x2="120" y2="140" className="stroke-primary/40" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="24" y="60" width="96" height="160" rx="6" className="fill-card stroke-border" strokeWidth="1.5" />
      <g transform="translate(32, 72)">
        <LatticeOverlay cols={10} rows={14} seed={3} />
      </g>
      <circle cx="72" cy="200" r="16" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
      <path d="M66 200 L70 204 L78 194" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Blockchain anchor — immutable ledger link */
export function ChainAnchorIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      role="img"
    >
      <title>Signature anchored to immutable ledger</title>
      <rect x="48" y="100" width="72" height="72" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="128" y="100" width="72" height="72" rx="8" className="fill-card stroke-primary/40" strokeWidth="1.5" />
      <rect x="208" y="100" width="72" height="72" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
      <path d="M120 136 H128" className="stroke-border" strokeWidth="2" />
      <path d="M200 136 H208" className="stroke-primary" strokeWidth="2" />
      <g transform="translate(56, 108)">
        <LatticeOverlay cols={8} rows={8} seed={4} />
      </g>
      <circle cx="164" cy="136" r="6" className="fill-primary" />
      <path d="M161 136 L163 138 L167 134" className="stroke-primary-foreground" strokeWidth="1.5" strokeLinecap="round" />
      <text x="48" y="200" className="fill-muted-foreground" fontSize="9" fontFamily="var(--font-dm-mono), monospace">
        0x7f3a…c91e
      </text>
      <text x="48" y="214" className="fill-foreground" fontSize="10" fontFamily="var(--font-dm-mono), monospace">
        anchor confirmed
      </text>
      <rect x="48" y="228" width="232" height="28" rx="4" className="fill-secondary/50 stroke-border" strokeWidth="1" />
      <text x="60" y="246" className="fill-primary" fontSize="9" fontFamily="var(--font-dm-mono), monospace">
        immutable · non-duplicable
      </text>
    </svg>
  );
}

/** Hero composite — full embed → scan → verify pipeline */
export function HeroMechanismVisual({ className = "" }: IllustrationProps) {
  return (
    <div className={`relative ${className}`} aria-label="Dermaqea verification pipeline: embed signature, scan packaging, anchor to ledger">
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Live mechanism</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-mono text-primary border border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
            Verified
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-lg border border-border bg-secondary/20 p-2 sm:p-3">
            <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground mb-2">01 · Embed</p>
            <svg viewBox="0 0 88 100" className="w-full h-auto" aria-hidden>
              <rect x="8" y="8" width="72" height="84" rx="4" className="fill-card stroke-border" strokeWidth="1" />
              <g transform="translate(14, 20)">
                <LatticeOverlay cols={8} rows={10} seed={5} />
              </g>
              <rect x="8" y="8" width="72" height="84" rx="4" className="stroke-primary/30" strokeWidth="0.75" strokeDasharray="3 2" fill="none" />
            </svg>
          </div>

          <div className="rounded-lg border border-border bg-secondary/20 p-2 sm:p-3">
            <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground mb-2">02 · Scan</p>
            <svg viewBox="0 0 88 100" className="w-full h-auto" aria-hidden>
              <rect x="28" y="6" width="36" height="88" rx="6" className="fill-card stroke-border" strokeWidth="1" />
              <rect x="34" y="14" width="24" height="56" rx="2" className="fill-secondary/40" />
              <path d="M8 50 L34 42 L34 58 Z" className="fill-primary/20 stroke-primary" strokeWidth="1" />
              <rect x="6" y="30" width="22" height="40" rx="2" className="fill-foreground/5 stroke-border" strokeWidth="0.75" />
              <g transform="translate(8, 34)">
                <LatticeOverlay cols={4} rows={6} seed={6} />
              </g>
            </svg>
          </div>

          <div className="rounded-lg border border-primary/30 bg-primary/5 p-2 sm:p-3">
            <p className="text-[9px] sm:text-[10px] font-mono text-primary mb-2">03 · Anchor</p>
            <svg viewBox="0 0 88 100" className="w-full h-auto" aria-hidden>
              <rect x="10" y="36" width="24" height="24" rx="4" className="fill-card stroke-border" strokeWidth="1" />
              <rect x="38" y="36" width="24" height="24" rx="4" className="fill-primary/15 stroke-primary" strokeWidth="1" />
              <rect x="66" y="36" width="12" height="24" rx="4" className="fill-primary/25 stroke-primary/50" strokeWidth="1" />
              <path d="M34 48 H38 M62 48 H66" className="stroke-primary" strokeWidth="1.5" />
              <circle cx="50" cy="48" r="4" className="fill-primary" />
              <path d="M48 48 L49.5 49.5 L52 46.5" className="stroke-primary-foreground" strokeWidth="1" strokeLinecap="round" />
              <text x="10" y="78" fill="currentColor" className="text-primary" fontSize="7" fontFamily="var(--font-dm-mono), monospace">
                0x7f3a…c91e
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-border pt-4">
          <div>
            <p className="text-xs font-medium text-foreground">Signature verified</p>
            <p className="text-[11px] text-muted-foreground font-mono">Cross-referenced against immutable ledger</p>
          </div>
          <div className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-1 rounded border border-primary/15 self-start">
            AUTHENTIC
          </div>
        </div>
      </div>

      {/* Signature lattice accent — unique Dermaqea motif */}
      <div className="signature-lattice absolute -z-10 -right-4 -top-4 h-32 w-32 opacity-40 pointer-events-none" aria-hidden />
    </div>
  );
}

/** Audience-specific mini illustrations for solutions segments */
export function AudienceIllustration({ type, className = "" }: { type: "brands" | "pharmacies" | "consumers" | "regulators"; className?: string }) {
  const common = "w-full h-auto max-w-[120px]";
  if (type === "brands") {
    return (
      <svg viewBox="0 0 120 100" className={`${common} ${className}`} aria-hidden>
        <rect x="20" y="20" width="80" height="60" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
        <g transform="translate(28, 30)"><LatticeOverlay cols={10} rows={6} seed={7} /></g>
        <rect x="20" y="20" width="80" height="60" rx="4" className="stroke-primary/40" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <text x="20" y="92" className="fill-muted-foreground" fontSize="8" fontFamily="var(--font-dm-mono), monospace">printer-level</text>
      </svg>
    );
  }
  if (type === "pharmacies") {
    return (
      <svg viewBox="0 0 120 100" className={`${common} ${className}`} aria-hidden>
        <rect x="16" y="30" width="88" height="40" rx="4" className="fill-secondary/30 stroke-border" strokeWidth="1.5" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={24 + i * 20} y="38" width="14" height="24" rx="2" className="fill-card stroke-border" strokeWidth="1" />
        ))}
        <path d="M60 70 L60 82 M54 76 H66" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "consumers") {
    return (
      <svg viewBox="0 0 120 100" className={`${common} ${className}`} aria-hidden>
        <rect x="40" y="10" width="40" height="72" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
        <rect x="48" y="22" width="24" height="40" rx="2" className="fill-secondary/30" />
        <circle cx="60" cy="72" r="8" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
        <path d="M57 72 L59 74 L63 70" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 100" className={`${common} ${className}`} aria-hidden>
      <rect x="10" y="40" width="100" height="36" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="18" y="48" width="20" height="20" rx="2" className="fill-primary/10 stroke-primary/40" strokeWidth="1" />
      <rect x="44" y="48" width="20" height="20" rx="2" className="fill-secondary/40 stroke-border" strokeWidth="1" />
      <rect x="70" y="48" width="20" height="20" rx="2" className="fill-secondary/40 stroke-border" strokeWidth="1" />
      <path d="M38 58 H44 M64 58 H70" className="stroke-primary/50" strokeWidth="1.5" />
    </svg>
  );
}

/** Technology pillar illustrations */
export function TechPillarIllustration({ variant, className = "" }: { variant: "embed" | "scan" | "ledger" | "dashboard"; className?: string }) {
  const map = {
    embed: EmbedSignatureIllustration,
    scan: ScanDecodeIllustration,
    ledger: ChainAnchorIllustration,
    dashboard: ChainAnchorIllustration,
  };
  const Comp = map[variant];
  return <Comp className={className} />;
}
