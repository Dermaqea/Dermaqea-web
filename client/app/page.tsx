"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  HeroMechanismVisual,
  EmbedSignatureIllustration,
  ScanDecodeIllustration,
  ChainAnchorIllustration,
  AudienceIllustration,
} from "@/components/illustrations/DermaqeaIllustrations";

export default function LandingPage() {
  const containerRef = useRef(null);

  const _bezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: _bezier, delay },
  });

  const workflowSteps = [
    {
      label: "Scan",
      lead: "Point any smartphone camera at the packaging.",
      support: "No specialized app required.",
      illustration: ScanDecodeIllustration,
    },
    {
      label: "Decode",
      lead: "Edge algorithms reconstruct the invisible signature.",
      support: "Micro-variations in printed artwork become a cryptographic key.",
      illustration: EmbedSignatureIllustration,
    },
    {
      label: "Verify",
      lead: "Cross-reference against the immutable ledger.",
      support: "Origin and authenticity confirmed in seconds.",
      illustration: ChainAnchorIllustration,
    },
  ];

  const solutions = [
    {
      id: "brands" as const,
      title: "Skincare Brands",
      lead: "Embed signatures at the printer level.",
      support: "Monitor gray-market diversion and protect brand equity.",
    },
    {
      id: "pharmacies" as const,
      title: "Pharmacies & Clinics",
      lead: "Bulk-scan incoming shipments on arrival.",
      support: "Guarantee the safety of dermatological products you dispense.",
    },
    {
      id: "consumers" as const,
      title: "Consumers",
      lead: "Verify product safety before application.",
      support: "A simple mobile scan — skincare is healthcare.",
    },
    {
      id: "regulators" as const,
      title: "Regulators",
      lead: "Intercept counterfeits at the border.",
      support: "Cryptographic tools for customs and health inspectors.",
    },
  ];

  const resources = [
    { type: "Whitepaper", title: "Cryptographic Packaging Integration Guide" },
    { type: "Case Study", title: "Securing Cross-Border Pharmacy Shipments" },
    { type: "Report", title: "State of Counterfeit Cosmetics 2026" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center pt-24 pb-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...reveal(0)} className="max-ch-left">
                <span className="text-sm uppercase tracking-widest text-muted-foreground mb-3 block">Authentication</span>
                <h1 className="text-5xl sm:text-6xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.12 }}>
                  Protect.
                  <br />
                  <span className="text-muted-foreground">Authenticate.</span>
                  <br />
                  <span className="text-primary">Trust.</span>
                </h1>

                <motion.p {...reveal(0.1)} className="text-lg text-muted-foreground mb-8 max-ch-left">
                  Dermaqea helps skincare brands, vendors, pharmacies, and consumers verify authentic products and combat counterfeit distribution through invisible cryptographic infrastructure.
                </motion.p>

                <motion.div {...reveal(0.2)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/request-demo" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 fast-interaction rounded-md w-full sm:w-auto focus-visible:outline-none">
                    Request Demo <ChevronRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                  <Link href="/technology" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium border border-border hover:bg-secondary fast-interaction rounded-md w-full sm:w-auto text-foreground focus-visible:outline-none">
                    Explore Technology
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div {...reveal(0.1)} className="relative">
                <HeroMechanismVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* BRAND TRUST */}
        <section className="py-24 border-t border-border bg-secondary/30 relative">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
            <motion.div {...reveal(0)} className="max-ch-center">
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Why brands trust us</div>
              <h2 className="text-2xl md:text-4xl font-medium mb-6" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.18 }}>
                Trust is not given. It is mathematically proven.
              </h2>
              <p className="text-lg text-foreground font-medium max-ch-center mx-auto">
                Dermaqea establishes an unbroken chain of custody for premium skincare.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TECHNOLOGY — asymmetric split, not icon grid */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div {...reveal(0)} className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-primary/80">Home</Link>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground">Technology</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.18 }}>
                  Invisible Signatures. Immutable Proof.
                </h2>
                <p className="content-subhead max-ch-left mb-2">
                  Pixel-level cryptographic signatures embedded directly into existing packaging artwork.
                </p>
                <p className="content-body max-ch-left mb-6">
                  The design remains untouched to the human eye — but becomes a secure verification node for specialized scanning algorithms.
                </p>
                <Link href="/technology" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 fast-interaction focus-visible:outline-none">
                  Read the Whitepaper <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>

              <motion.div {...reveal(0.1)} className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <EmbedSignatureIllustration className="w-full max-w-lg mx-auto" />
                <p className="mt-4 text-center text-xs font-mono text-muted-foreground">
                  Invisible lattice · undetectable to the eye · verifiable by algorithm
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VERIFICATION WORKFLOW — horizontal pipeline sequence */}
        <section className="py-24 bg-secondary/20 border-y border-border relative" aria-labelledby="workflow-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...reveal(0)} className="mb-12 max-w-2xl">
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">How it works</div>
              <h2 id="workflow-heading" className="text-3xl md:text-4xl font-medium mb-3" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.16 }}>
                The Verification Workflow
              </h2>
              <p className="text-muted-foreground">Three steps from physical packaging to cryptographic certainty.</p>
            </motion.div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 list-none p-0 m-0">
              {workflowSteps.map((step, idx) => {
                const Illus = step.illustration;
                return (
                  <motion.li
                    key={step.label}
                    {...reveal(0.1 + idx * 0.08)}
                    className="pipeline-connector relative flex flex-col rounded-xl border border-border bg-card p-6"
                  >
                    <span className="content-eyebrow mb-4">{step.label}</span>
                    <div className="mb-4 h-28 flex items-center justify-center">
                      <Illus className="h-full w-auto max-w-[160px]" />
                    </div>
                    <p className="content-subhead">{step.lead}</p>
                    <p className="content-body">{step.support}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* SOLUTIONS — audience-segmented list, not symmetric card grid */}
        <section className="py-24 relative" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Solutions</div>
                <h2 id="solutions-heading" className="text-3xl md:text-4xl font-medium mb-2" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.16 }}>
                  Enterprise Ecosystem
                </h2>
                <p className="text-muted-foreground max-ch-left">Tailored verification workflows for every layer of the global skincare supply chain.</p>
              </div>
              <Link href="/solutions" className="inline-flex items-center text-primary hover:text-primary/80 font-medium fast-interaction shrink-0 focus-visible:outline-none">
                View All Solutions <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-card">
              {solutions.map((sol, idx) => (
                <Link
                  key={sol.id}
                  href="/solutions"
                  className="block fast-interaction hover:bg-secondary/30 focus-visible:outline-none segment-accent"
                >
                  <motion.div
                    {...reveal(0.05 + idx * 0.04)}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 sm:p-8 pl-6 sm:pl-8"
                  >
                    <div className="shrink-0 w-24 hidden sm:flex items-center justify-center">
                      <AudienceIllustration type={sol.id} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="content-heading">
                        {sol.title}
                      </h3>
                      <p className="content-subhead">{sol.lead}</p>
                      <p className="content-body">{sol.support}</p>
                    </div>
                    <ChevronRight className="hidden sm:block h-5 w-5 text-muted-foreground shrink-0" aria-hidden />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COUNTERFEIT CRISIS — stat pull-out + scannable blocks */}
        <section className="py-24 bg-muted dark:bg-black border-y border-border/30 relative">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div {...reveal(0)}>
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">The problem</div>
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.18 }}>
                The Counterfeit Crisis
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="content-subhead">A public health threat.</p>
                  <p className="content-body">
                    Fake formulations contain harmful chemicals that bypass regulatory oversight, endangering consumers and devastating brand reputations.
                  </p>
                </div>
                <div>
                  <p className="content-subhead">Traditional security fails.</p>
                  <p className="content-body">
                    Holograms and standard QR codes are routinely reverse-engineered by sophisticated counterfeit operations.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="text-lg font-medium text-foreground">
                  Dermaqea integrates security directly into the structural data of packaging — rendering physical duplication mathematically impossible.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PACKAGING — visual proof with micro-point scan */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl border border-border bg-secondary/30 p-8 lg:p-12">
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Packaging</div>
                <h2 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.18 }}>
                  Forensic-Level Detail
                </h2>
                <p className="content-subhead mb-2">
                  Authentication shifts from visual inspection to algorithmic certainty.
                </p>
                <p className="content-body">
                  Every scan analyzes thousands of micro-points to confirm validity.
                </p>
              </div>
              <div className="relative">
                <ScanDecodeIllustration className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCES — horizontal list rows, not card grid */}
        <section className="py-24 relative" aria-labelledby="resources-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...reveal(0)} className="flex items-center justify-between mb-8 gap-4">
              <div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">Research</div>
                <h2 id="resources-heading" className="text-3xl font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  Research & Intelligence
                </h2>
              </div>
              <Link href="/resources" className="text-primary fast-interaction shrink-0 focus-visible:outline-none">
                View all
              </Link>
            </motion.div>

            <ul className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card list-none p-0 m-0">
              {resources.map((res, idx) => (
                <li key={idx}>
                  <Link
                    href="/resources"
                    className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 hover:bg-secondary/30 fast-interaction group focus-visible:outline-none"
                  >
                    <span className="shrink-0 w-20 sm:w-24 text-xs font-mono text-primary uppercase">{res.type}</span>
                    <span className="flex-1 text-base sm:text-lg font-medium text-foreground group-hover:text-primary fast-interaction">
                      {res.title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative bg-primary/5 border-t border-primary/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
            <motion.div {...reveal(0)}>
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Get started</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.12 }}>
                Deploy Trust.
              </h2>
              <p className="content-subhead mb-2 max-ch-center mx-auto">
                Integrate enterprise authentication into your product lines.
              </p>
              <p className="content-body mb-8 max-ch-center mx-auto">
                Schedule a technical demonstration with our deployment engineers.
              </p>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 fast-interaction rounded-md focus-visible:outline-none"
              >
                Request a Technical Demo
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
