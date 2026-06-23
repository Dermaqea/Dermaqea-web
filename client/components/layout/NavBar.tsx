"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary neon-glow rounded-full" />
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Dermaqea<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/technology" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Technology
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          
          <div className="h-6 w-px bg-border mx-2"></div>
          
          <ThemeToggle />
          
          <Link href="/sign-in" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sign In
          </Link>
          
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow" asChild>
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-white/5"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 w-full glass border-b border-primary/20"
          >
            <div className="mx-auto flex flex-col space-y-6 px-6 py-8">
              <Link onClick={() => setOpen(false)} href="/" className="text-lg font-medium text-muted-foreground hover:text-primary">Home</Link>
              <Link onClick={() => setOpen(false)} href="/technology" className="text-lg font-medium text-muted-foreground hover:text-primary">Technology</Link>
              <Link onClick={() => setOpen(false)} href="/solutions" className="text-lg font-medium text-muted-foreground hover:text-primary">Solutions</Link>
              <Link onClick={() => setOpen(false)} href="/resources" className="text-lg font-medium text-muted-foreground hover:text-primary">Resources</Link>
              <Link onClick={() => setOpen(false)} href="/about" className="text-lg font-medium text-muted-foreground hover:text-primary">About</Link>
              
              <div className="h-px w-full bg-border"></div>
              
              <Link onClick={() => setOpen(false)} href="/sign-in" className="text-lg font-medium text-muted-foreground hover:text-primary">Sign In</Link>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow" size="lg" asChild>
                <Link onClick={() => setOpen(false)} href="/request-demo">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
