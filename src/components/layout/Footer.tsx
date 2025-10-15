"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";
import styles from "@/styles/layout/Footer.module.css";
import {
  MessageCircle,
  Mail,
  Phone,
  Send,
  Shield,
  Award,
  Lock,
  CheckCircle,
  AlertTriangle,
  X,
} from "lucide-react";
// toast removed in favor of modal UX

const footerLinks = {
  services: [
    { label: "Smart Contract Audit", href: "/services/smart-contract-audit" },
    { label: "Security Consulting", href: "/services/security-consulting" },
    { label: "Penetration Testing", href: "/services/penetration-testing" },
    { label: "Code Review", href: "/services/code-review" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Security Guidelines", href: "/resources/guidelines" },
    { label: "Audit Process", href: "/resources/audit-process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const certifications = [
  { icon: Shield, label: "ISO 27001" },
  { icon: Award, label: "SOC 2 Type II" },
  { icon: Lock, label: "CCSS Certified" },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscribedEmail(email);
    setEmail("");
    setIsSubscribing(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    // focus the close button for accessibility
    closeButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const handleCopySenderEmail = async () => {
    try {
      await navigator.clipboard.writeText("LaunchCoinNews@quanta.ai");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // noop: clipboard might be unavailable; avoid throwing
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              Be First to Know About Next Launches
            </h3>
            <p className="text-gray-200 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
              Subscribe to get alerts on upcoming launches, key dates, and early
              access opportunities.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo showText={true} size="md" className="mb-3 sm:mb-4 lg:mb-6" />
            <p className="text-gray-200 text-sm mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              quntaAI is an AI-powered utility token on Solana. Signals, bot,
              and dashboards for traders.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary-400 transition-colors p-2 -m-2"
                title="Join our Telegram community"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links + Resources + Contact grouped in one row (mobile side-by-side) */}
          <div className="lg:col-span-3">
            <div className="flex items-start justify-between gap-6">
              {/* Quick Links */}
              <div className="basis-1/3 min-w-0">
                <h4 className="text-[#9945FF] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Links
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    { label: "Utilities", href: "/#utilities" },
                    { label: "Tokenomics", href: "/#tokenomics" },
                    { label: "Roadmap", href: "/#roadmap" },
                    { label: "How to Buy", href: "/#how-to-buy" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="basis-1/3 min-w-0">
                <h4 className="text-[#9945FF] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Resources
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    { label: "Buy on pump.fun", href: "https://pump.fun/" },
                    { label: "Get Phantom", href: "https://phantom.app/" },
                    { label: "Join Telegram", href: "https://t.me/" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-200 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="basis-1/3 min-w-0">
                <h4 className="text-[#9945FF] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Contact
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-200">Email</p>
                      <a
                        href="mailto:support@qunta.ai"
                        className="text-xs sm:text-sm text-white hover:text-primary-400 transition-colors"
                      >
                        support@qunta.ai
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-200">Phone</p>
                      <a
                        href="tel:+15026241048"
                        className="text-xs sm:text-sm text-white hover:text-primary-400 transition-colors"
                      >
                        +1 502-624-1048
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-primary-500/10">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-1 sm:gap-2 text-gray-200 hover:text-primary-400 transition-colors"
              >
                <cert.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">
                  {cert.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="text-center pt-4 sm:pt-6 border-t border-primary-500/10">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 quntaAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Success Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-labelledby="subscribe-success-title"
          aria-describedby="subscribe-success-desc"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl bg-navy-900 border border-primary-500/10 shadow-2xl overflow-hidden"
          >
            {/* Close */}
            <div className="absolute top-3 right-3">
              <button
                ref={closeButtonRef}
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-navy-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 text-center">
              <div className="mx-auto mb-4 sm:mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4
                id="subscribe-success-title"
                className="text-white text-xl sm:text-2xl font-semibold mb-2"
              >
                You’re on the list!
              </h4>
              <p
                id="subscribe-success-desc"
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                {subscribedEmail ? (
                  <>
                    <div>
                      We added
                      <span className="font-mono text-[0.9em] break-all mx-1 items-center align-middle rounded-lg bg-navy-800/60 border border-primary-500/20 px-2.5 py-1 text-white font-semibold shadow-sm max-w-full">
                        {subscribedEmail}
                      </span>
                    </div>
                    You’ll hear from us ASAP about our next launches.
                  </>
                ) : (
                  <>You’ll hear from us ASAP about our next launches.</>
                )}
              </p>

              <div className="mt-5 sm:mt-6 text-left">
                <div className="rounded-xl border border-primary-500/10 bg-navy-800/40 p-4">
                  <div className="flex flex-col items-center gap-3">
                    {/* Warning icon (centered, subtle pulse) */}
                    <motion.div
                      className="text-purple-400"
                      animate={{ scale: [1, 1.08, 2], y: [0, -1, 0] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                        ease: "easeInOut",
                      }}
                    >
                      <AlertTriangle className="w-8 h-8" />
                    </motion.div>

                    {/* Text and actions */}
                    <div className="w-full min-w-0">
                      <p className="text-xs sm:text-sm text-gray-300 text-center">
                        For your security, our updates only come from:
                      </p>
                      <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="w-full truncate rounded-lg bg-navy-900 px-3 py-2 text-xs sm:text-sm text-gray-200 border border-primary-500/10">
                            LaunchNews@quanta.ai
                          </div>
                        </div>
                        <button
                          onClick={handleCopySenderEmail}
                          className="shrink-0 px-3 py-2 rounded-lg bg-primary-500 text-navy-900 text-xs sm:text-sm font-semibold hover:bg-primary-400 transition-colors"
                          aria-label="Copy sender email"
                        >
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-navy-900 font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
                >
                  Okay
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
};
