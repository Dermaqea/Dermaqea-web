"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const _bezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: _bezier, delay },
});

export default function ResourcesPage() {
  const resources = [
    { type: "Report", title: "The State of Counterfeit Skincare in Africa", date: "Q3 2025" },
    { type: "Whitepaper", title: "Cryptographic Packaging: The Next Era of Anti-Counterfeiting", date: "May 2026" },
    { type: "Case Study", title: "How L'Aura Reduced Gray-Market Diversion by 84%", date: "March 2026" },
    { type: "Guide", title: "Implementing Deep-Tech Authentication in Pharma", date: "January 2026" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Knowledge & <span className="text-primary">Insights</span>
            </h1>
            <p className="content-subhead mb-2">
              Research on the global counterfeit crisis and deep-tech authentication.
            </p>
            <p className="content-body">
              Packaging security methodologies and industry intelligence.
            </p>
          </motion.div>
        </section>

        {/* Table-style list — not symmetric card grid */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="hidden sm:grid grid-cols-[7rem_1fr_6rem] gap-4 px-6 pb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border">
            <span>Type</span>
            <span>Title</span>
            <span className="text-right">Date</span>
          </div>

          <ul className="divide-y divide-border border border-border sm:border-t-0 rounded-xl overflow-hidden bg-card list-none p-0 m-0">
            {resources.map((res, idx) => (
              <motion.li key={idx} {...reveal(idx * 0.05)}>
                <Link
                  href="#"
                  className="grid grid-cols-1 sm:grid-cols-[7rem_1fr_6rem] gap-2 sm:gap-4 items-start sm:items-center p-5 sm:px-6 hover:bg-secondary/30 fast-interaction group focus-visible:outline-none"
                  aria-label={`${res.type}: ${res.title}`}
                >
                  <span className="text-xs font-mono text-primary uppercase">{res.type}</span>
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary fast-interaction">
                    {res.title}
                  </span>
                  <span className="flex items-center justify-between sm:justify-end gap-2 text-sm text-muted-foreground font-mono">
                    {res.date}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary sm:hidden" aria-hidden />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
