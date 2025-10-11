"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Code,
  Search,
  FileText,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const auditProcess = [
  {
    icon: Search,
    title: "Initial Assessment",
    description:
      "Comprehensive review of smart contract architecture and potential attack vectors",
  },
  {
    icon: Code,
    title: "Code Analysis",
    description:
      "Deep dive into contract logic, identifying vulnerabilities and security flaws",
  },
  {
    icon: Shield,
    title: "Security Testing",
    description:
      "Automated and manual testing to verify contract security and functionality",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description:
      "Detailed audit report with findings, recommendations, and remediation steps",
  },
];

const auditFeatures = [
  "Comprehensive vulnerability assessment",
  "Gas optimization analysis",
  "Access control verification",
  "Reentrancy attack prevention",
  "Integer overflow/underflow checks",
  "Logic error identification",
  "Third-party integration review",
  "Compliance verification",
];

export default function SmartContractAuditPage() {
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
              Smart Contract
              <span className="block gradient-text">Audit Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security audits for smart contracts, ensuring your
              DeFi protocols are protected against vulnerabilities and attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit-request" className="btn-primary">
                Request Audit
              </Link>
              <Link href="/contact" className="btn-secondary">
                Learn More
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
              Our Process
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Comprehensive Audit Methodology
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our systematic approach ensures thorough analysis of your smart
              contracts with industry-leading security standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What We Audit
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our comprehensive audit covers all critical aspects of smart
              contract security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {auditFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
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
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get started with a comprehensive security audit to protect your
              DeFi protocol
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit-request" className="btn-primary">
                Request Audit
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
