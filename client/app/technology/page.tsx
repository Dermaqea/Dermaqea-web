"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  EmbedSignatureIllustration,
  ScanDecodeIllustration,
  ChainAnchorIllustration,
} from "@/components/illustrations/DermaqeaIllustrations";

const _bezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: _bezier, delay },
});

export default function TechnologyPage() {
  const pillars = [
    {
      id: "embed",
      title: "Invisible Cryptographic Signatures",
      lead: "Micro-structure altered at the pixel level.",
      support: "Flawless to the human eye — a unique cryptographic key to our scanning algorithm.",
      illustration: EmbedSignatureIllustration,
      layout: "illustration-right" as const,
    },
    {
      id: "scan",
      title: "Mobile Verification Experience",
      lead: "Standard smartphone cameras reconstruct the signature.",
      support: "Edge-computed algorithms — no specialized hardware required.",
      illustration: ScanDecodeIllustration,
      layout: "illustration-left" as const,
    },
    {
      id: "ledger",
      title: "Decentralized Ledger",
      lead: "Every signature anchored to an immutable blockchain.",
      support: "Signatures cannot be duplicated, spoofed, or reverse-engineered.",
      illustration: ChainAnchorIllustration,
      layout: "illustration-right" as const,
    },
    {
      id: "dashboard",
      title: "Brand Protection Infrastructure",
      lead: "Real-time telemetry on scan locations and supply chain integrity.",
      support: "An enterprise dashboard empowering brands to act decisively on anomalous activity.",
      illustration: ChainAnchorIllustration,
      layout: "illustration-left" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              The Science of <span className="text-primary">Invisible Trust</span>
            </h1>
            <p className="content-subhead mb-2">
              Imperceptible cryptographic signatures embedded into physical packaging.
            </p>
            <p className="content-body">
              A secure, unbroken chain of custody from manufacturer to consumer.
            </p>
          </motion.div>
        </section>

        {/* Alternating split layout — not symmetric icon grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {pillars.map((pillar, idx) => {
            const Illus = pillar.illustration;
            const illusFirst = pillar.layout === "illustration-left";
            return (
              <motion.article
                key={pillar.id}
                {...reveal(idx * 0.05)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx > 0 ? "pt-16 border-t border-border" : ""}`}
              >
                <div className={illusFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <Illus className="w-full max-w-sm mx-auto" />
                  </div>
                </div>
                <div className={illusFirst ? "lg:order-2" : "lg:order-1"}>
                  <span className="content-eyebrow">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="content-heading">
                    {pillar.title}
                  </h2>
                  <p className="content-subhead">{pillar.lead}</p>
                  <p className="content-body">{pillar.support}</p>
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
          <motion.div {...reveal(0)} className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="content-subhead mb-1">Ready to go deeper?</p>
              <p className="content-body">Read the full cryptographic packaging integration guide.</p>
            </div>
            <Link href="/resources" className="inline-flex items-center text-primary font-medium fast-interaction shrink-0 focus-visible:outline-none">
              View Whitepaper <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
