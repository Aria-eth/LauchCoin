"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { motion } from "framer-motion";
import styles from "@/styles/layout/Footer.module.css";
import {
  Twitter,
  MessageCircle,
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Award,
  Lock,
} from "lucide-react";
import toast from "react-hot-toast";

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Successfully subscribed to newsletter!");
    setEmail("");
    setIsSubscribing(false);
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              Stay Updated on Security Insights
            </h3>
            <p className="text-gray-200 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
              Subscribe to our newsletter for the latest security trends, audit
              reports, and blockchain insights.
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
              quntaAI is an AI-powered utility token on Solana. Signals, bot, and dashboards for traders.
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
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary-400 transition-colors p-2 -m-2"
                title="View our GitHub repositories"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links + Resources + Contact grouped in one row (mobile side-by-side) */}
          <div className="lg:col-span-3">
            <div className="flex items-start justify-between gap-6">
              {/* Quick Links */}
              <div className="basis-1/3 min-w-0">
                <h4 className="text-[#ffa300] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Links
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[{label:"Utilities", href:"/#utilities"}, {label:"Tokenomics", href:"/#tokenomics"}, {label:"Roadmap", href:"/#roadmap"}, {label:"How to Buy", href:"/#how-to-buy"}].map((link) => (
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
                <h4 className="text-[#ffa500] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Resources
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[{label:"Buy on pump.fun", href:"https://pump.fun/"}, {label:"Get Phantom", href:"https://phantom.app/"}, {label:"Join Telegram", href:"https://t.me/"}].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http")?"_blank":undefined}
                        rel={link.href.startsWith("http")?"noopener noreferrer":undefined}
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
                <h4 className="text-[#ffa500] font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">
                  Contact
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-200">Email</p>
                      <span className="text-xs sm:text-sm text-white">support@qunta.ai</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-200">Phone</p>
                      <span className="text-xs sm:text-sm text-white">—</span>
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
    </footer>
  );
};
