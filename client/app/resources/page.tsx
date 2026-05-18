"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

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
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Knowledge & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our research on the global counterfeit crisis, packaging security, and deep-tech authentication methodologies.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl group cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground border border-border">
                    {res.type}
                  </div>
                  <FileText className="h-5 w-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {res.title}
                </h3>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-sm text-muted-foreground">{res.date}</span>
                  <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
