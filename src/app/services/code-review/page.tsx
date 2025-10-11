"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Search, FileText, CheckCircle, Shield, Zap } from "lucide-react";
import Link from "next/link";

const reviewProcess = [
  {
    icon: Search,
    title: "Code Analysis",
    description:
      "Comprehensive review of source code for security vulnerabilities and best practices",
  },
  {
    icon: Shield,
    title: "Security Assessment",
    description:
      "Identification of potential security flaws and attack vectors in the codebase",
  },
  {
    icon: Code,
    title: "Quality Review",
    description:
      "Evaluation of code quality, maintainability, and adherence to standards",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Detailed report with findings, recommendations, and remediation guidance",
  },
];

const reviewAreas = [
  "Authentication and authorization logic",
  "Input validation and sanitization",
  "Error handling and logging",
  "Data encryption and protection",
  "API security and rate limiting",
  "Database query security",
  "Third-party dependency analysis",
  "Configuration management",
];

export default function CodeReviewPage() {
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
              Code Review
              <span className="block gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert code analysis to identify security vulnerabilities, improve
              code quality, and ensure best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Review
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
              Our Process
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Systematic Code Review
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our expert reviewers follow a proven methodology to ensure
              comprehensive analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewProcess.map((step, index) => (
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

      {/* Areas Section */}
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
              Review Areas
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We examine all critical aspects of your codebase for security and
              quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviewAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{area}</span>
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
              Ready for Expert Code Review?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our security experts review your code and identify potential
              vulnerabilities
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
