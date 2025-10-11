"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cookie, Settings, Shield, Eye } from "lucide-react";
import Link from "next/link";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Required for basic website functionality",
    examples: ["Session management", "Security features", "Load balancing"],
    necessary: true,
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    description: "Help us understand how visitors use our website",
    examples: ["Page views", "User behavior", "Performance metrics"],
    necessary: false,
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    description: "Remember your settings and preferences",
    examples: ["Language settings", "Theme preferences", "Form data"],
    necessary: false,
  },
];

export default function CookiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg-radial" />
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
              Cookie
              <span className="block gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn how we use cookies to improve your experience on our
              website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#policy" className="btn-primary">
                Read Policy
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section id="policy" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              Last Updated: January 2024
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Cookie Policy
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              This policy explains how Fortknox Security uses cookies and
              similar technologies on our website.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <type.icon className="w-7 h-7 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {type.description}
                    </p>
                    {type.necessary && (
                      <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                        Necessary
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-300 font-medium">
                      Examples:
                    </p>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="text-gray-200 text-sm"
                        >
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Policy Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What Are Cookies?
                </h3>
                <p className="text-gray-200 mb-4">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us provide a better user
                  experience and understand how our site is used.
                </p>
                <p className="text-gray-200">
                  We use both session cookies (temporary) and persistent cookies
                  (longer-term) to enhance your browsing experience.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Managing Cookies
                </h3>
                <p className="text-gray-200 mb-4">
                  You can control and manage cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block all cookies</li>
                  <li>• Set preferences for different types of cookies</li>
                </ul>
                <p className="text-gray-200 mt-4">
                  Note: Disabling essential cookies may affect website
                  functionality.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Third-Party Cookies
                </h3>
                <p className="text-gray-200 mb-4">
                  We may use third-party services that set their own cookies,
                  such as:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Analytics services (Google Analytics)</li>
                  <li>• Security services (Cloudflare)</li>
                  <li>• Social media platforms</li>
                </ul>
                <p className="text-gray-200 mt-4">
                  These services have their own privacy policies and cookie
                  practices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Updates to This Policy
                </h3>
                <p className="text-gray-200 mb-4">
                  We may update this cookie policy from time to time to reflect
                  changes in our practices or for legal reasons.
                </p>
                <p className="text-gray-200">
                  We will notify you of any material changes by posting the
                  updated policy on our website.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-200 mb-4">
                  If you have questions about our use of cookies, please contact
                  us:
                </p>
                <div className="space-y-2 text-gray-200">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@fortknox.io"
                      className="text-primary-400 hover:text-primary-300"
                    >
                      privacy@fortknox.io
                    </a>
                  </p>
                  <p>
                    Telegram:{" "}
                    <a
                      href="https://t.me/FortKnox_sec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300"
                    >
                      @FortKnox_sec
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're committed to transparency about how we use cookies and
              similar technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="mailto:privacy@fortknox.io" className="btn-secondary">
                Email Privacy Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
