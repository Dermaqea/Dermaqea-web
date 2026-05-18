"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Store, Building2, ShieldAlert } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "brands",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "For Beauty Brands",
      desc: "Protect your reputation and revenue from sophisticated counterfeiters. Dermaqea provides absolute visibility into your supply chain and immediate alerts when gray-market or fake goods appear."
    },
    {
      id: "pharmacies",
      icon: <Store className="h-8 w-8 text-primary" />,
      title: "For Pharmacies & Clinics",
      desc: "Guarantee the safety and efficacy of the dermatological products you dispense. Our vendor authentication portal allows clinics to scan incoming batches to ensure origin authenticity."
    },
    {
      id: "consumers",
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "For Consumers",
      desc: "Skincare is healthcare. We empower consumers to verify product safety in seconds with a simple mobile scan before applying products to their skin."
    },
    {
      id: "regulators",
      icon: <ShieldAlert className="h-8 w-8 text-primary" />,
      title: "For Regulators",
      desc: "Equip customs officers and health inspectors with the cryptographic tools needed to identify and seize counterfeit cosmetics at the border."
    }
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
              Solutions for the <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Counterfeiting affects every layer of the supply chain. Dermaqea provides specialized verification workflows tailored to the unique needs of brands, vendors, and consumers.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {solutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 border border-border/50"
              >
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-2xl bg-secondary flex items-center justify-center border border-primary/20 neon-glow">
                    {sol.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)" }}>{sol.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{sol.desc}</p>
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
