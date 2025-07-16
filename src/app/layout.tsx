import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FortKnox Security - Leading Smart Contract Audit Firm",
  description: "Industry-leading blockchain security audits and consulting services to protect your DeFi protocols from vulnerabilities and exploits.",
  keywords: "smart contract audit, blockchain security, DeFi audit, security consulting, penetration testing",
  authors: [{ name: "FortKnox Security" }],
  openGraph: {
    title: "FortKnox Security - Leading Smart Contract Audit Firm",
    description: "Industry-leading blockchain security audits and consulting services",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FortKnox Security",
    description: "Leading Smart Contract Audit Firm",
    images: ["/twitter-image.png"],
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
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a2e',
              color: '#fff',
              border: '1px solid #FFA500',
            },
          }}
        />
      </body>
    </html>
  );
}
