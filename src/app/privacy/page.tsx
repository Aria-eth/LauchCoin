"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, Calendar, Mail } from "lucide-react";
import Link from "next/link";

const privacySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Contact information (name, email, phone number)",
      "Project details and requirements",
      "Communication records and correspondence",
      "Website usage data and analytics",
      "Technical information about your projects",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "Provide security audit services",
      "Communicate about projects and services",
      "Improve our services and website",
      "Comply with legal obligations",
      "Send relevant security updates and insights",
    ],
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: [
      "Industry-standard encryption for data transmission",
      "Secure storage of sensitive information",
      "Limited access to personal data",
      "Regular security assessments",
      "Compliance with data protection regulations",
    ],
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "We do not sell your personal information",
      "Limited sharing with service providers",
      "Legal compliance when required",
      "With your explicit consent",
      "Anonymous data for research purposes",
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy
              <span className="block gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
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
              Privacy Policy
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              This privacy policy explains how Fortknox Security collects, uses,
              and protects your information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <section.icon className="w-7 h-7 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-2" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  Your Rights
                </h3>
                <p className="text-gray-200 mb-4">
                  You have the right to access, correct, or delete your personal
                  information. You can also request information about how we
                  process your data and object to certain processing activities.
                </p>
                <p className="text-gray-200">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@fortknox.io"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    privacy@fortknox.io
                  </a>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Data Retention
                </h3>
                <p className="text-gray-200 mb-4">
                  We retain your personal information only as long as necessary
                  to provide our services and comply with legal obligations.
                  Project-related data is typically retained for 7 years for
                  audit and compliance purposes.
                </p>
                <p className="text-gray-200">
                  Marketing communications can be unsubscribed from at any time
                  using the unsubscribe link in our emails.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-200 mb-4">
                  If you have questions about this privacy policy or our data
                  practices, please contact us:
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
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're committed to transparency and protecting your privacy.
              Contact us with any questions.
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
