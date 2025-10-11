"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Code,
  Target,
  FileText,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const guidelines = [
  {
    icon: Shield,
    title: "Smart Contract Security",
    items: [
      "Always use the latest Solidity compiler version",
      "Implement proper access control mechanisms",
      "Use SafeMath or Solidity 0.8+ for arithmetic operations",
      "Avoid delegatecall with untrusted contracts",
      "Implement reentrancy guards for state-changing functions",
      "Use events for important state changes",
      "Validate all external inputs",
      "Implement emergency pause functionality",
    ],
  },
  {
    icon: Code,
    title: "Code Quality Standards",
    items: [
      "Follow Solidity style guide conventions",
      "Use descriptive variable and function names",
      "Implement comprehensive error handling",
      "Add detailed NatSpec documentation",
      "Use require statements with clear error messages",
      "Implement proper testing with high coverage",
      "Use static analysis tools",
      "Conduct regular code reviews",
    ],
  },
  {
    icon: Target,
    title: "DeFi Protocol Security",
    items: [
      "Implement proper oracle validation",
      "Use time-weighted average prices (TWAP)",
      "Implement circuit breakers for extreme volatility",
      "Add slippage protection mechanisms",
      "Use multi-signature wallets for admin functions",
      "Implement gradual parameter updates",
      "Add comprehensive monitoring and alerting",
      "Plan for emergency response procedures",
    ],
  },
  {
    icon: FileText,
    title: "Audit Preparation",
    items: [
      "Complete internal code review before audit",
      "Prepare comprehensive documentation",
      "Create detailed test cases",
      "Document all assumptions and constraints",
      "Prepare deployment and upgrade procedures",
      "Create incident response plan",
      "Set up monitoring and alerting systems",
      "Plan for post-audit deployment timeline",
    ],
  },
];

const commonVulnerabilities = [
  {
    title: "Reentrancy Attacks",
    description:
      "Attackers can call back into the contract before the first call completes",
    severity: "Critical",
    icon: AlertTriangle,
  },
  {
    title: "Integer Overflow/Underflow",
    description: "Arithmetic operations that exceed data type limits",
    severity: "High",
    icon: AlertTriangle,
  },
  {
    title: "Access Control Issues",
    description:
      "Insufficient or missing access controls on sensitive functions",
    severity: "High",
    icon: AlertTriangle,
  },
  {
    title: "Unchecked External Calls",
    description:
      "External calls that can fail silently or cause unexpected behavior",
    severity: "Medium",
    icon: AlertTriangle,
  },
];

export default function SecurityGuidelinesPage() {
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
              Security
              <span className="block gradient-text">Guidelines</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Essential security best practices and guidelines for building
              secure blockchain applications and smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#guidelines" className="btn-primary">
                View Guidelines
              </a>
              <Link href="/contact" className="btn-secondary">
                Get Expert Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              Best Practices
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Security Guidelines
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Follow these essential guidelines to build secure and robust
              blockchain applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guidelines.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <category.icon className="w-7 h-7 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnerabilities Section */}
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
              Common Vulnerabilities
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Be aware of these common security issues and how to prevent them
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonVulnerabilities.map((vuln, index) => (
              <motion.div
                key={vuln.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <vuln.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {vuln.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          vuln.severity === "Critical"
                            ? "bg-red-500/10 text-red-400"
                            : vuln.severity === "High"
                            ? "bg-orange-500/10 text-orange-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {vuln.severity}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-200">{vuln.description}</p>
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
              Need Expert Security Review?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our team can help you implement these guidelines and conduct
              comprehensive security audits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
