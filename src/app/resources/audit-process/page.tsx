"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Code,
  Shield,
  FileText,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const auditSteps = [
  {
    icon: Search,
    title: "Initial Assessment",
    description:
      "We begin with a comprehensive review of your project scope, architecture, and security requirements",
    duration: "1-2 days",
    details: [
      "Project scope definition",
      "Architecture review",
      "Security requirements analysis",
      "Timeline planning",
    ],
  },
  {
    icon: Code,
    title: "Code Analysis",
    description:
      "Deep dive into smart contract code, identifying potential vulnerabilities and security flaws",
    duration: "3-7 days",
    details: [
      "Manual code review",
      "Automated analysis",
      "Vulnerability identification",
      "Best practices assessment",
    ],
  },
  {
    icon: Shield,
    title: "Security Testing",
    description:
      "Comprehensive testing including penetration testing and exploit simulation",
    duration: "2-5 days",
    details: [
      "Penetration testing",
      "Exploit simulation",
      "Edge case analysis",
      "Integration testing",
    ],
  },
  {
    icon: FileText,
    title: "Report Generation",
    description:
      "Detailed audit report with findings, risk assessments, and remediation recommendations",
    duration: "1-2 days",
    details: [
      "Vulnerability documentation",
      "Risk assessment",
      "Remediation guidance",
      "Executive summary",
    ],
  },
];

const auditTypes = [
  {
    title: "Smart Contract Audit",
    description: "Comprehensive security review of smart contracts",
    duration: "1-2 weeks",
    price: "Starting at $15,000",
  },
  {
    title: "DeFi Protocol Audit",
    description:
      "Full protocol security assessment including economic analysis",
    duration: "2-4 weeks",
    price: "Starting at $25,000",
  },
  {
    title: "Code Review",
    description: "Focused code analysis and security assessment",
    duration: "3-7 days",
    price: "Starting at $8,000",
  },
];

export default function AuditProcessPage() {
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
              Our Audit
              <span className="block gradient-text">Process</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A systematic approach to security auditing that ensures
              comprehensive coverage and actionable results.
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

      {/* Process Steps */}
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
              Four-Step Audit Process
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our proven methodology ensures thorough analysis and comprehensive
              security coverage
            </p>
          </motion.div>

          <div className="space-y-8">
            {auditSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.icon className="w-8 h-8 text-primary-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-200">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-200 mb-6">{step.description}</p>

                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types */}
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
              Audit Types
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose the right audit type for your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {auditTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{type.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-sm text-primary-400 font-medium">
                      {type.price}
                    </div>
                  </div>

                  <Link
                    href="/audit-request"
                    className="btn-primary w-full text-center"
                  >
                    Get Quote
                  </Link>
                </div>
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
              Ready to Start Your Audit?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch to discuss your project and receive a custom audit
              proposal
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
