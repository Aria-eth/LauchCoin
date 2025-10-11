"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
              Terms of
              <span className="block gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these terms carefully before using our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#terms" className="btn-primary">
                Read Terms
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section id="terms" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
                Last Updated: January 2024
              </span>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Terms of Service
              </h2>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  1. Services
                </h3>
                <p className="text-gray-200 mb-4">
                  Fortknox Security provides blockchain security audit services,
                  including smart contract audits, penetration testing, security
                  consulting, and code review services.
                </p>
                <p className="text-gray-200">
                  Our services are provided on an "as is" basis and we make no
                  warranties regarding the completeness or accuracy of our
                  findings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  2. Client Responsibilities
                </h3>
                <p className="text-gray-200 mb-4">
                  Clients are responsible for:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Providing accurate and complete project information</li>
                  <li>• Implementing recommended security fixes</li>
                  <li>• Maintaining security after audit completion</li>
                  <li>• Complying with applicable laws and regulations</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  3. Confidentiality
                </h3>
                <p className="text-gray-200 mb-4">
                  We maintain strict confidentiality of all client information
                  and project details. Audit reports and findings are shared
                  only with authorized personnel.
                </p>
                <p className="text-gray-200">
                  We may use anonymized data for research and improvement
                  purposes with client consent.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  4. Limitation of Liability
                </h3>
                <p className="text-gray-200 mb-4">
                  Our liability is limited to the amount paid for our services.
                  We are not liable for any indirect, consequential, or punitive
                  damages.
                </p>
                <p className="text-gray-200">
                  Security audits cannot guarantee 100% security, and we are not
                  responsible for vulnerabilities that may be discovered after
                  our audit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  5. Payment Terms
                </h3>
                <p className="text-gray-200 mb-4">
                  Payment is due upon project completion unless otherwise
                  agreed. Late payments may result in suspension of services.
                </p>
                <p className="text-gray-200">
                  All fees are non-refundable once work has commenced, except as
                  required by law.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  6. Termination
                </h3>
                <p className="text-gray-200 mb-4">
                  Either party may terminate services with written notice. Upon
                  termination, we will deliver any completed work and return
                  client materials.
                </p>
                <p className="text-gray-200">
                  Clients remain responsible for payment of services rendered up
                  to the termination date.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  7. Governing Law
                </h3>
                <p className="text-gray-200">
                  These terms are governed by the laws of the jurisdiction where
                  Fortknox Security operates. Any disputes will be resolved
                  through arbitration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-200 mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-gray-200">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:legal@fortknox.io"
                      className="text-primary-400 hover:text-primary-300"
                    >
                      legal@fortknox.io
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're here to help clarify any questions about our terms of
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="mailto:legal@fortknox.io" className="btn-secondary">
                Email Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
