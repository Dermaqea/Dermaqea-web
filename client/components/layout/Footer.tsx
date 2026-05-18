"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background pt-20 pb-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-6 w-6 text-primary neon-glow rounded-full" />
              <Link href="/" className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Dermaqea<span className="text-primary">.</span>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
              The invisible trust layer powering authentic skincare commerce. 
              Enterprise-grade anti-counterfeit technology securing global supply chains 
              through cryptographic packaging signatures.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="h-10 w-10 flex items-center justify-center rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/request-demo" className="hover:text-primary transition-colors">Request Demo</Link></li>
              <li><Link href="/sign-in" className="hover:text-primary transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><a href="mailto:contact@dermaqea.com" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="mb-6 text-sm font-semibold text-foreground uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Get the latest insights on counterfeit prevention and authentication technology.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/50"
              />
              <Button size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 group">
                Subscribe <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <div>© {new Date().getFullYear()} Dermaqea Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
