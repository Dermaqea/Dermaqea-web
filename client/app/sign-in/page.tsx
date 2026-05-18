"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Fingerprint } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary flex flex-col">
      <NavBar />

      <main className="flex-grow flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md px-6 relative z-10"
        >
          <div className="glass-card p-10 rounded-2xl border border-primary/20 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 neon-glow">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-2xl font-medium mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Enterprise Access
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Authenticate to the Dermaqea Zero-Trust Infrastructure
            </p>

            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow flex items-center justify-center gap-2">
                <Link href="/create-account/enoki">
                  <Fingerprint className="h-5 w-5" />
                  Authenticate Identity
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                By authenticating, you are accessing a secure cryptographic infrastructure. All activities are monitored and logged.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
