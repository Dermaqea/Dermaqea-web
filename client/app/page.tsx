"use client";

import Link from "next/link";
import { ChevronRight, ShieldCheck, Fingerprint, Lock, Zap, Search, ScanLine, FileText } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NavBar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Dark Mode Background */}
            <div className="hidden dark:block absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="hidden dark:block absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-secondary rounded-full blur-[120px] pointer-events-none" />
            
            {/* Light Mode Atmospheric Background */}
            <div className="block dark:hidden absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background opacity-80" />
            <div className="block dark:hidden absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
          </div>
          
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content - Typography */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-8 leading-[1.05]" style={{ fontFamily: "var(--font-heading)" }}>
                  Protect. <br />
                  <span className="text-muted-foreground">Authenticate.</span> <br />
                  <span className="text-primary">Trust.</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
                  Dermaqea helps skincare brands, vendors, pharmacies, and consumers verify authentic products and combat counterfeit distribution through invisible cryptographic infrastructure.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/request-demo" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 neon-glow transition-all rounded-md w-full sm:w-auto">
                    Request Demo <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/technology" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium border border-border hover:bg-secondary transition-all rounded-md w-full sm:w-auto text-foreground">
                    Explore Technology
                  </Link>
                </div>
              </motion.div>

              {/* Right Visual - Conditional Rendering for Light/Dark */}
              <div className="relative h-[600px] flex items-center justify-center perspective-1000">
                
                {/* --- DARK MODE VISUAL --- */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="hidden dark:flex absolute inset-0 glass-card rounded-2xl border border-border overflow-hidden items-center justify-center"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                  
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 border border-primary/30 bg-background/50 backdrop-blur-md rounded-sm flex flex-col justify-end p-4 shadow-[0_0_30px_rgba(0,230,118,0.1)]"
                  >
                    <div className="w-1/2 h-1 bg-primary/50 mb-2 rounded-full"></div>
                    <div className="w-3/4 h-1 bg-primary/30 mb-8 rounded-full"></div>
                    
                    <div className="w-full aspect-square border border-primary/20 bg-primary/5 flex flex-wrap gap-1 p-2 opacity-50 relative overflow-hidden">
                       <motion.div 
                         animate={{ top: ["-10%", "110%"] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_#00E676] z-10"
                       />
                       {[...Array(64)].map((_, i) => {
                         const rand1 = (Math.sin(i * 100) + 1) / 2;
                         const rand2 = (Math.sin(i * 200) + 1) / 2;
                         const rand3 = (Math.sin(i * 300) + 1) / 2;
                         const delay = (Math.sin(i * 400) + 1);
                         return (
                           <motion.div 
                             key={`dark-${i}`} 
                             initial={{ opacity: rand1 }}
                             animate={{ opacity: [rand1, rand2, rand3] }}
                             transition={{ duration: 2, repeat: Infinity, delay: delay }}
                             className="w-[calc(12.5%-4px)] h-[calc(12.5%-4px)] bg-primary/40 rounded-[1px]"
                           />
                         );
                       })}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute top-12 right-12 glass px-4 py-3 rounded-lg border border-primary/30 flex items-center gap-3 backdrop-blur-xl"
                  >
                    <ShieldCheck className="text-primary h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-muted-foreground uppercase">Status</span>
                      <span className="text-sm font-medium text-foreground">Signature Verified</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="absolute bottom-20 left-12 glass px-4 py-3 rounded-lg border border-primary/20 flex items-center gap-3 backdrop-blur-xl"
                  >
                    <Lock className="text-primary h-5 w-5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-muted-foreground uppercase">Ledger</span>
                      <span className="text-sm font-medium text-foreground">Anchored to Chain</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* --- LIGHT MODE VISUAL --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block dark:hidden absolute inset-0 items-center justify-center"
                >
                  <div className="absolute inset-0 glass-card rounded-2xl border border-border/50 overflow-hidden items-center justify-center">
                    {/* Subtle light grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                    {/* Central Premium Container Render (Glass representation) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between p-6 z-10">
                       <div className="w-12 h-1 bg-border rounded-full mx-auto opacity-50 mb-8"></div>
                       
                       <div className="flex-grow flex items-center justify-center relative">
                          {/* Invisible Signature Grid (Soft Light Mode version) */}
                          <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-20 p-2">
                             {[...Array(64)].map((_, i) => {
                               const delay = (Math.sin(i * 500) + 1) * 2;
                               return (
                                 <motion.div 
                                   key={`light-${i}`}
                                   initial={{ opacity: 0.1 }}
                                   animate={{ opacity: [0.1, 0.4, 0.1] }}
                                   transition={{ duration: 4, repeat: Infinity, delay: delay }}
                                   className="bg-primary rounded-sm"
                                 />
                               );
                             })}
                          </div>
                          
                          {/* Sweeping Scanner Beam */}
                          <motion.div 
                             animate={{ top: ["0%", "100%", "0%"] }}
                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                             className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-primary/10 to-transparent border-b border-primary/30 z-10"
                          />
                       </div>


                    </div>

                    {/* Floating Elegant Interface Layers */}
                    <motion.div 
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-12 right-12 glass px-4 py-3 rounded-lg border border-border/30 flex items-center gap-3 backdrop-blur-xl z-20"
                    >
                      <ShieldCheck className="text-primary h-5 w-5" />
                      <div className="flex flex-col">
                        <span className="text-xs font-mono text-muted-foreground uppercase">Status</span>
                        <span className="text-sm font-medium text-foreground">Signature Verified</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-20 left-12 glass px-4 py-3 rounded-lg border border-border/30 flex items-center gap-3 backdrop-blur-xl z-20"
                    >
                      <Lock className="text-primary h-5 w-5" />
                      <div className="flex flex-col">
                        <span className="text-xs font-mono text-muted-foreground uppercase">Ledger</span>
                        <span className="text-sm font-medium text-foreground">Anchored to Chain</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* 2. BRAND TRUST STORYTELLING */}
        <section className="py-32 border-t border-border bg-secondary/30 dark:bg-secondary/30 relative">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-medium leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-heading)" }}
            >
              Trust is not given. It is mathematically proven. <br className="hidden md:block" />
              <span className="text-foreground">Dermaqea establishes an unbroken chain of custody for premium skincare.</span>
            </motion.p>
          </div>
        </section>

        {/* 3. AUTHENTICATION TECHNOLOGY OVERVIEW */}
        <section className="py-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 mb-8">
                  <Fingerprint className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-medium mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Invisible Signatures. <br/> Immutable Proof.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Unlike easily replicated QR codes or holograms, our technology embeds an invisible, pixel-level cryptographic signature directly into your existing product packaging. 
                  <br/><br/>
                  The design remains untouched to the human eye, but becomes a secure verification node for specialized scanning algorithms.
                </p>
                <Link href="/technology" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 group">
                  Read the Whitepaper <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="relative aspect-square glass-card rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Visual Representation of Invisible Pixel Modification */}
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                     <span className="text-[12rem] font-bold text-background opacity-20" style={{ fontFamily: "var(--font-heading)" }}>A</span>
                  </div>
                  {/* Magnifying glass effect */}
                  <motion.div 
                    animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 -mt-32 -ml-32 rounded-full border-2 border-primary/50 backdrop-blur-sm bg-background/10 flex items-center justify-center overflow-hidden z-10 shadow-[0_0_50px_rgba(0,230,118,0.2)]"
                  >
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjMwLCAxMTgsIDAuNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-screen scale-[4]"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW VERIFICATION WORKS */}
        <section className="py-32 bg-secondary/20 border-y border-border relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-medium mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                The Verification Workflow
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0"></div>
              
              {[
                { title: "Scan", desc: "Consumers or vendors point their smartphone camera at the product packaging. No specialized app required.", icon: <ScanLine /> },
                { title: "Decode", desc: "The edge-algorithm instantly reconstructs the invisible signature from the micro-variations in the printed artwork.", icon: <Zap /> },
                { title: "Verify", desc: "The decoded signature is cross-referenced against the immutable ledger to confirm origin and authenticity.", icon: <ShieldCheck /> }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="glass-card p-8 rounded-2xl relative z-10 bg-background/80"
                >
                  <div className="h-12 w-12 rounded-full bg-secondary border border-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-medium text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SOLUTIONS OVERVIEW */}
        <section className="py-32 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-medium mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Enterprise Ecosystem
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Tailored verification workflows designed to protect every layer of the global skincare supply chain.
                </p>
              </div>
              <Link href="/solutions" className="inline-flex items-center text-primary hover:text-primary/80 font-medium group">
                View All Solutions <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Skincare Brands", desc: "Embed signatures at the printer level. Monitor gray-market diversion and protect brand equity." },
                { title: "Pharmacies & Clinics", desc: "Bulk-scan incoming shipments to guarantee the safety of the dermatological products you dispense." },
                { title: "Consumers", desc: "Empower patients to verify product safety in seconds before applying treatments to their skin." },
                { title: "Regulators", desc: "Provide customs officials with the cryptographic tools needed to intercept counterfeit shipments." }
              ].map((sol, idx) => (
                <Link key={idx} href="/solutions" className="block">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full group"
                  >
                    <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{sol.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sol.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. COUNTERFEIT PROBLEM SECTION */}
        <section className="py-32 bg-muted dark:bg-black border-y border-border/30 relative">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ShieldCheck className="h-12 w-12 text-muted-foreground/30 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-medium mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              The Counterfeit Crisis
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Counterfeit skincare represents a dire public health threat. Fake formulations often contain harmful chemicals that bypass regulatory oversight, endangering consumers and devastating brand reputations.
              </p>
              <p>
                Traditional security measures—such as holograms and standard QR codes—are routinely reverse-engineered by sophisticated counterfeit operations.
              </p>
              <p className="text-foreground font-medium">
                Dermaqea was built to solve this. By integrating security directly into the structural data of the packaging, we render physical duplication mathematically impossible.
              </p>
            </div>
          </div>
        </section>

        {/* 7. PACKAGING AUTHENTICATION VISUAL STORYTELLING */}
        <section className="py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="relative aspect-[21/9] bg-secondary/50 dark:bg-secondary/50 rounded-3xl border border-border overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjMwLCAxMTgsIDAuMDUpIi8+PC9zdmc+')] mix-blend-screen opacity-50"></div>
               <div className="text-center z-10 max-w-2xl px-6">
                 <h2 className="text-3xl md:text-4xl font-medium mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                   Forensic-Level Detail
                 </h2>
                 <p className="text-muted-foreground">
                   Our technology shifts authentication from visual inspection to algorithmic certainty. Every scan analyzes thousands of micro-points to confirm validity.
                 </p>
               </div>
               {/* Decorative animated elements mimicking data analysis */}
               <motion.div 
                 animate={{ x: ["-100%", "200%"] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
               ></motion.div>
             </div>
          </div>
        </section>

        {/* 8. RESOURCES PREVIEW */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-medium mb-12" style={{ fontFamily: "var(--font-heading)" }}>Research & Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Whitepaper", title: "Cryptographic Packaging Integration Guide" },
                { type: "Case Study", title: "Securing Cross-Border Pharmacy Shipments" },
                { type: "Report", title: "State of Counterfeit Cosmetics 2026" }
              ].map((res, idx) => (
                <Link key={idx} href="/resources" className="block">
                  <div className="glass p-6 rounded-xl border border-border hover:border-primary/30 transition-colors h-full flex flex-col justify-between group">
                    <div>
                      <div className="text-xs font-mono text-primary mb-4">{res.type}</div>
                      <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{res.title}</h3>
                    </div>
                    <div className="mt-8">
                      <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. REQUEST DEMO CTA SECTION */}
        <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-primary/20">
           <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
             <h2 className="text-4xl md:text-6xl font-medium mb-8" style={{ fontFamily: "var(--font-heading)" }}>
               Deploy Trust.
             </h2>
             <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
               Begin integrating enterprise authentication infrastructure into your product lines. Schedule a technical demonstration with our deployment engineers.
             </p>
             <Link href="/request-demo" className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 neon-glow transition-all rounded-md">
               Request a Technical Demo
             </Link>
           </div>
        </section>

      </main>

      {/* 10. PREMIUM ENTERPRISE FOOTER */}
      <Footer />
    </div>
  );
}