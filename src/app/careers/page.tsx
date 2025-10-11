"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Shield,
  Award,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Work on cutting-edge security challenges in the blockchain space",
  },
  {
    icon: Zap,
    title: "Remote First",
    description: "Flexible work environment with global team collaboration",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning and career development opportunities",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Collaborate with world-class security researchers and auditors",
  },
];

const openPositions = [
  {
    title: "Senior Smart Contract Auditor",
    type: "Full-time",
    location: "Remote",
    salary: "$120k - $180k",
    description:
      "Lead security audits for major DeFi protocols and smart contracts",
  },
  {
    title: "Security Researcher",
    type: "Full-time",
    location: "Remote",
    salary: "$100k - $150k",
    description:
      "Research emerging threats and develop security tools and methodologies",
  },
  {
    title: "Security Consultant",
    type: "Full-time",
    location: "Remote",
    salary: "$90k - $140k",
    description: "Provide security consulting services to blockchain projects",
  },
];

const values = [
  "Passion for blockchain security",
  "Strong analytical and problem-solving skills",
  "Experience with Solidity and EVM",
  "Knowledge of common smart contract vulnerabilities",
  "Excellent communication skills",
  "Ability to work independently and in teams",
];

export default function CareersPage() {
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
              Join Our
              <span className="block gradient-text">Security Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Help us secure the future of blockchain technology. Join a team of
              experts dedicated to protecting DeFi protocols worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#positions" className="btn-primary">
                View Open Positions
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Join Us
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Benefits & Culture
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We offer a supportive environment where security experts can
              thrive and grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-7 h-7 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="positions"
        className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900/50 to-background"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our mission to secure the blockchain ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {position.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{position.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <DollarSign className="w-4 h-4" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              What We Look For
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ideal candidates should possess these key qualities and skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{value}</span>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              If you don't see a position that fits, we'd still love to hear
              from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href="https://t.me/FortKnox_sec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Join Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
