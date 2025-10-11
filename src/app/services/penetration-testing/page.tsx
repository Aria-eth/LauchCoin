"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Search,
  FileText,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

const testingPhases = [
  {
    icon: Search,
    title: "Reconnaissance",
    description:
      "Gathering information about the target system and identifying potential entry points",
  },
  {
    icon: Target,
    title: "Vulnerability Assessment",
    description:
      "Systematic scanning and analysis to identify security weaknesses",
  },
  {
    icon: Shield,
    title: "Exploitation",
    description:
      "Attempting to exploit identified vulnerabilities in a controlled environment",
  },
  {
    icon: FileText,
    title: "Reporting",
    description:
      "Comprehensive documentation of findings with remediation recommendations",
  },
];

const testingTypes = [
  "Web application penetration testing",
  "Mobile app security testing",
  "Network infrastructure testing",
  "Social engineering assessments",
  "Physical security testing",
  "Wireless network testing",
  "API security testing",
  "Cloud infrastructure testing",
];

export default function PenetrationTestingPage() {
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
              Penetration
              <span className="block gradient-text">Testing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real-world attack simulation to identify vulnerabilities before
              malicious actors can exploit them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Testing
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              Our Methodology
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Systematic Testing Approach
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our proven methodology ensures comprehensive coverage while
              maintaining system integrity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                  <phase.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-200">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Testing Types
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We offer comprehensive penetration testing across all attack
              vectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testingTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Test Your Defenses?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover vulnerabilities before attackers do with our
              comprehensive penetration testing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
