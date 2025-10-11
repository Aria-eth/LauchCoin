import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
// Removed galactic background for a minimal theme

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "quantaAI – AI-powered utility token launching on pump.fun",
  description:
    "quantaAI is an AI utility token delivering trader tools, signal bots, and research assistants. Fair launch on pump.fun.",
  keywords:
    "quantaAI, pump.fun, Solana, meme coin, AI token, utility, trader tools, telegram bot",
  authors: [{ name: "quantaAI" }],
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/logo.jpeg", type: "image/jpeg" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "quantaAI – AI-powered utility token",
    description:
      "Buy quantaAI on pump.fun and unlock AI trader utilities.",
    images: ["/logo.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Minimal background is handled via globals.css */}
        <Navigation />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1a1a2e",
              color: "#fff",
              border: "1px solid #FFA500",
            },
          }}
        />
      </body>
    </html>
  );
}
