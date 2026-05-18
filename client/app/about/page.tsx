"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Securing the <span className="text-primary">Physical World</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 glass-card p-10 lg:p-16 rounded-3xl"
          >
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="lead text-2xl text-foreground font-medium mb-8">
                Dermaqea was founded on a simple premise: trust in physical products should be absolute, mathematical, and verifiable by anyone.
              </p>
              
              <h3 className="text-xl text-foreground font-semibold mt-12 mb-4">The Crisis in Skincare</h3>
              <p>
                In many parts of the world, particularly across Africa and Southeast Asia, counterfeit skincare and pharmaceutical products represent a dire public health crisis. Fake products contain dangerous chemicals, fail to treat conditions, and fund illicit organizations. 
              </p>
              <p>
                Traditional anti-counterfeiting measures—holograms, QR codes, RFIDs—are easily replicated, removed, or bypassed by sophisticated counterfeit rings.
              </p>

              <h3 className="text-xl text-foreground font-semibold mt-12 mb-4">Our Mission</h3>
              <p>
                We are building the definitive infrastructure for physical product trust. By turning packaging artwork itself into an invisible, unforgeable cryptographic key, we enable brands to secure their supply chains and empower consumers to verify their purchases instantly.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
