"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { AudienceIllustration } from "@/components/illustrations/DermaqeaIllustrations";

const _bezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: _bezier, delay },
});

export default function SolutionsPage() {
  const solutions = [
    {
      id: "brands" as const,
      title: "For Beauty Brands",
      lead: "Absolute visibility into your supply chain.",
      support: "Protect reputation and revenue from sophisticated counterfeiters. Immediate alerts when gray-market or fake goods appear.",
    },
    {
      id: "pharmacies" as const,
      title: "For Pharmacies & Clinics",
      lead: "Guarantee safety and efficacy of every batch.",
      support: "Vendor authentication portal to scan incoming shipments and ensure origin authenticity.",
    },
    {
      id: "consumers" as const,
      title: "For Consumers",
      lead: "Verify product safety in seconds.",
      support: "Skincare is healthcare — a simple mobile scan before applying treatments to skin.",
    },
    {
      id: "regulators" as const,
      title: "For Regulators",
      lead: "Identify and seize counterfeits at the border.",
      support: "Cryptographic tools for customs officers and health inspectors.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Solutions for the <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="content-subhead mb-2">
              Counterfeiting affects every layer of the supply chain.
            </p>
            <p className="content-body">
              Specialized verification workflows tailored to brands, vendors, and consumers.
            </p>
          </motion.div>
        </section>

        {/* Audience-segmented vertical stack — single brand-green accent */}
        <section className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-0 border border-border rounded-2xl overflow-hidden bg-card divide-y divide-border">
            {solutions.map((sol, idx) => (
              <motion.article
                key={sol.id}
                {...reveal(idx * 0.06)}
                className="segment-accent pl-6 sm:pl-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 sm:p-10">
                  <div className="shrink-0 flex items-center justify-center w-28 h-24 rounded-xl bg-secondary/30 border border-border">
                    <AudienceIllustration type={sol.id} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="content-heading">
                      {sol.title}
                    </h2>
                    <p className="content-subhead">{sol.lead}</p>
                    <p className="content-body">{sol.support}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
