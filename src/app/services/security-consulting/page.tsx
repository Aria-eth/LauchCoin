"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Target,
  FileText,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

const consultingServices = [
  {
    icon: Shield,
    title: "Security Architecture Review",
    description:
      "Comprehensive assessment of your security infrastructure and protocols",
  },
  {
    icon: Target,
    title: "Threat Modeling",
    description:
      "Identify potential attack vectors and develop mitigation strategies",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Educate your team on best practices and security awareness",
  },
  {
    icon: FileText,
    title: "Policy Development",
    description:
      "Create robust security policies and procedures for your organization",
  },
];

const consultingFeatures = [
  "Custom security strategy development",
  "Risk assessment and management",
  "Incident response planning",
  "Compliance framework guidance",
  "Security tool recommendations",
  "Ongoing security monitoring",
  "Regular security assessments",
  "Emergency response support",
];

export default function SecurityConsultingPage() {
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
              <span className="block gradient-text">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert guidance to strengthen your organization's security posture
              and protect against emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We provide expert consulting services to help you build and
              maintain robust security frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our consulting services cover all aspects of security strategy and
              implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {consultingFeatures.map((feature, index) => (
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
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our experts help you build a robust security framework for
              your organization
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
