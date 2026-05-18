import type { Metadata } from "next";
import { DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/components/ThemeProvider";
import { Providers } from "./providers";

const dmMono = DM_Mono({
  weight: "400",
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dermaqea | Enterprise Authentication Infrastructure",
  description: "Enterprise-grade authentication and anti-counterfeit platform for skincare commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-clash-display: 'Clash Display', sans-serif;
          }
        `}} />
      </head>
      <body
        className={`${dmMono.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
          <Toaster />
        </ThemeProvider>
        {/* Portal for Enoki to mount UI elements (social login popup) */}
        <div id="enoki-info-portal" />
      </body>
    </html>
  );
}
