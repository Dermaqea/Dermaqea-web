"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Fingerprint, ScanLine, Network, ShieldCheck } from "lucide-react";

export default function TechnologyPage() {
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
              The Science of <span className="text-primary">Invisible Trust</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dermaqea&apos;s technology embeds imperceptible cryptographic signatures into the physical packaging of skincare products, creating a secure, unbroken chain of custody from manufacturer to consumer.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Fingerprint className="h-8 w-8 text-primary" />,
                title: "Invisible Cryptographic Signatures",
                desc: "We alter the micro-structure of the packaging artwork at the pixel level. To the human eye, the design remains flawless. To our scanning algorithm, it's a unique cryptographic key."
              },
              {
                icon: <ScanLine className="h-8 w-8 text-primary" />,
                title: "Mobile Verification Experience",
                desc: "Consumers and inspectors use standard smartphone cameras to verify products. The edge-computed algorithm reconstructs the embedded signature instantly without requiring specialized hardware."
              },
              {
                icon: <Network className="h-8 w-8 text-primary" />,
                title: "Decentralized Ledger",
                desc: "Every product signature is anchored to an immutable blockchain ledger. This ensures that signatures cannot be duplicated, spoofed, or reverse-engineered by counterfeiters."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Brand Protection Infrastructure",
                desc: "An enterprise dashboard provides real-time telemetry on scan locations, anomalous activity, and supply chain integrity, empowering brands to act decisively."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl relative group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                  {feature.icon}
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)" }}>{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
