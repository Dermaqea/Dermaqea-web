"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Experience Enterprise <span className="text-primary">Authentication</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                See how Dermaqea&apos;s invisible cryptographic infrastructure can secure your supply chain and protect your brand from counterfeiters.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full border border-primary flex items-center justify-center text-primary text-xs shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Discovery Call</h4>
                    <p className="text-sm text-muted-foreground">We analyze your current supply chain vulnerabilities.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full border border-primary flex items-center justify-center text-primary text-xs shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Technical Demo</h4>
                    <p className="text-sm text-muted-foreground">Live demonstration of the invisible signature embedding and extraction.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full border border-primary flex items-center justify-center text-primary text-xs shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Pilot Program</h4>
                    <p className="text-sm text-muted-foreground">Deploy Dermaqea on a controlled product line.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="glass-card p-8 rounded-2xl flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">First Name</label>
                    <input type="text" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <input type="text" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground">Work Email</label>
                  <input type="email" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground">Company Name</label>
                  <input type="text" className="bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground">Primary Challenge</label>
                  <textarea rows={4} className="bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-foreground resize-none"></textarea>
                </div>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow w-full mt-4">
                  Request Demonstration
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
