"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Github,
  ExternalLink,
  Star,
  GitBranch,
  Eye,
  Calendar,
  Users,
  Code,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

// Star component for the galactic background
const GalacticStar: React.FC<{ className?: string; delay?: number }> = ({
  className,
  delay = 0,
}) => (
  <motion.div
    className={`absolute bg-white rounded-full ${className}`}
    animate={{
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Galactic cloud component for nebula effects
const GalacticCloud: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = "purple",
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    style={{
      background: `radial-gradient(circle, ${color}-400/30, ${color}-600/20, transparent)`,
    }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const stats = [
  {
    icon: Shield,
    label: "Security Audits",
    value: "80+",
    description: "Completed audits",
  },
  {
    icon: Code,
    label: "Lines Reviewed",
    value: "15M+",
    description: "Code lines analyzed",
  },
  {
    icon: Users,
    label: "Projects Secured",
    value: "80+",
    description: "DeFi protocols protected",
  },
  {
    icon: Award,
    label: "Success Rate",
    value: "99.8%",
    description: "Vulnerability detection",
  },
];

const auditCategories = [
  {
    title: "Smart Contract Audits",
    description: "Comprehensive security analysis of DeFi protocols",
    count: "55+",
    icon: Shield,
  },
  {
    title: "Penetration Testing",
    description: "Real-world attack simulation and vulnerability assessment",
    count: "15+",
    icon: Zap,
  },
  {
    title: "Code Reviews",
    description: "Focused analysis of specific components and functions",
    count: "10+",
    icon: Code,
  },
  {
    title: "Security Consulting",
    description: "Strategic guidance and architecture review",
    count: "5+",
    icon: TrendingUp,
  },
];

const recentAudits = [
  {
    name: "Abracadabra Team",
    date: "January 2025",
    severity: "High",
    findings: 18,
    critical: 2,
    major: 2,
    minor: 14,
    status: "Completed",
  },
  {
    name: "Ambit Finance",
    date: "December 2024",
    severity: "High",
    findings: 32,
    critical: 4,
    major: 4,
    minor: 24,
    status: "Completed",
  },
  {
    name: "DN404",
    date: "November 2024",
    severity: "Medium",
    findings: 35,
    critical: 1,
    major: 2,
    minor: 32,
    status: "Completed",
  },
  {
    name: "Foil Finance",
    date: "October 2024",
    severity: "Medium",
    findings: 12,
    critical: 2,
    major: 1,
    minor: 9,
    status: "Completed",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
        {/* Galactic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-purple-900/20 to-indigo-900/30" />

        {/* Starfield */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Galactic Clouds/Nebulae */}
          <GalacticCloud className="w-96 h-96 top-10 left-10" color="purple" />
          <GalacticCloud className="w-80 h-80 top-20 right-20" color="blue" />
          <GalacticCloud className="w-72 h-72 top-60 left-1/3" color="pink" />
          <GalacticCloud className="w-64 h-64 top-40 right-1/4" color="cyan" />
          <GalacticCloud className="w-88 h-88 top-80 left-1/2" color="indigo" />
          <GalacticCloud
            className="w-56 h-56 top-100 right-1/3"
            color="violet"
          />

          {/* Large stars */}
          <GalacticStar className="w-2 h-2 top-20 left-10" delay={0} />
          <GalacticStar className="w-1.5 h-1.5 top-32 right-20" delay={0.5} />
          <GalacticStar className="w-2.5 h-2.5 top-48 left-1/4" delay={1} />
          <GalacticStar className="w-1 h-1 top-64 right-1/3" delay={1.5} />
          <GalacticStar className="w-2 h-2 top-80 left-1/2" delay={2} />
          <GalacticStar className="w-1.5 h-1.5 top-96 right-1/4" delay={2.5} />
          <GalacticStar className="w-2 h-2 top-12 left-1/3" delay={0.8} />
          <GalacticStar className="w-2.5 h-2.5 top-28 right-1/3" delay={1.2} />
          <GalacticStar className="w-1.5 h-1.5 top-44 left-2/3" delay={1.6} />
          <GalacticStar className="w-2 h-2 top-52 right-1/2" delay={2.1} />
          <GalacticStar className="w-2.5 h-2.5 top-68 left-1/6" delay={2.8} />
          <GalacticStar className="w-1.5 h-1.5 top-76 right-2/3" delay={3.2} />
          <GalacticStar className="w-2 h-2 top-88 left-1/4" delay={3.6} />
          <GalacticStar className="w-2.5 h-2.5 top-104 right-1/6" delay={4.0} />

          {/* Medium stars */}
          <GalacticStar className="w-1 h-1 top-16 right-10" delay={0.3} />
          <GalacticStar className="w-1 h-1 top-40 left-1/3" delay={0.8} />
          <GalacticStar className="w-1 h-1 top-56 right-1/2" delay={1.3} />
          <GalacticStar className="w-1 h-1 top-72 left-2/3" delay={1.8} />
          <GalacticStar className="w-1 h-1 top-88 right-2/3" delay={2.3} />
          <GalacticStar className="w-1 h-1 top-8 left-1/2" delay={0.6} />
          <GalacticStar className="w-1 h-1 top-24 right-1/4" delay={1.0} />
          <GalacticStar className="w-1 h-1 top-36 left-1/5" delay={1.4} />
          <GalacticStar className="w-1 h-1 top-48 right-1/5" delay={1.8} />
          <GalacticStar className="w-1 h-1 top-60 left-3/4" delay={2.2} />
          <GalacticStar className="w-1 h-1 top-84 right-1/4" delay={2.6} />
          <GalacticStar className="w-1 h-1 top-92 left-2/3" delay={3.0} />
          <GalacticStar className="w-1 h-1 top-108 right-1/2" delay={3.4} />

          {/* Small stars */}
          <GalacticStar className="w-0.5 h-0.5 top-24 left-20" delay={0.2} />
          <GalacticStar className="w-0.5 h-0.5 top-36 right-16" delay={0.7} />
          <GalacticStar className="w-0.5 h-0.5 top-52 left-3/4" delay={1.2} />
          <GalacticStar className="w-0.5 h-0.5 top-68 right-1/6" delay={1.7} />
          <GalacticStar className="w-0.5 h-0.5 top-84 left-1/6" delay={2.2} />
          <GalacticStar className="w-0.5 h-0.5 top-100 right-3/4" delay={2.7} />
          <GalacticStar className="w-0.5 h-0.5 top-4 left-1/4" delay={0.4} />
          <GalacticStar className="w-0.5 h-0.5 top-16 right-1/3" delay={0.9} />
          <GalacticStar className="w-0.5 h-0.5 top-32 left-1/6" delay={1.3} />
          <GalacticStar className="w-0.5 h-0.5 top-44 right-3/4" delay={1.7} />
          <GalacticStar className="w-0.5 h-0.5 top-64 left-1/2" delay={2.1} />
          <GalacticStar className="w-0.5 h-0.5 top-80 right-1/5" delay={2.5} />
          <GalacticStar className="w-0.5 h-0.5 top-96 left-1/3" delay={2.9} />
          <GalacticStar className="w-0.5 h-0.5 top-112 right-1/4" delay={3.3} />

          {/* Additional stars for depth */}
          <GalacticStar className="w-1.5 h-1.5 top-28 left-1/2" delay={0.4} />
          <GalacticStar className="w-1 h-1 top-44 right-1/4" delay={0.9} />
          <GalacticStar className="w-2 h-2 top-60 left-1/5" delay={1.4} />
          <GalacticStar className="w-1 h-1 top-76 right-1/5" delay={1.9} />
          <GalacticStar className="w-1.5 h-1.5 top-92 left-3/4" delay={2.4} />
          <GalacticStar className="w-1.5 h-1.5 top-6 left-2/3" delay={0.7} />
          <GalacticStar className="w-1 h-1 top-20 right-1/2" delay={1.1} />
          <GalacticStar className="w-2 h-2 top-32 left-1/4" delay={1.5} />
          <GalacticStar className="w-1 h-1 top-56 right-2/3" delay={1.9} />
          <GalacticStar className="w-1.5 h-1.5 top-72 left-1/3" delay={2.3} />
          <GalacticStar className="w-1 h-1 top-88 right-1/6" delay={2.7} />
          <GalacticStar className="w-2 h-2 top-104 left-2/3" delay={3.1} />

          {/* Extra bright stars */}
          <GalacticStar
            className="w-3 h-3 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            delay={0}
          />
          <GalacticStar className="w-2.5 h-2.5 top-30 right-1/3" delay={1.5} />
          <GalacticStar className="w-3 h-3 top-70 left-1/4" delay={3.0} />
          <GalacticStar className="w-2.5 h-2.5 top-90 right-1/2" delay={4.5} />
        </div>

        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
                <Github className="w-4 h-4" />
                Open Source Security
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
            >
              Our
              <span className="block gradient-text">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Explore our comprehensive audit reports and security assessments
              available on GitHub. Transparent, verifiable, and community-driven
              security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://github.com/FortKnox-sec/Audits"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                View Audit Reports
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://t.me/FortKnox_sec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Join Telegram
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-4xl font-heading font-bold text-white mb-6">
                  Open Source Security
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We believe in transparency and community-driven security. All
                  our audit reports are publicly available on GitHub, allowing
                  the community to review, verify, and learn from our findings.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Public audit reports for transparency
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Community review and verification
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Educational resources for developers
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Continuous improvement through feedback
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/FortKnox-sec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 w-fit mx-auto lg:mx-0"
                >
                  <Github className="w-5 h-5" />
                  Visit GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="card-gradient p-8 rounded-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Logo size="sm" showText={false} />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        FortKnox-sec
                      </h3>
                      <p className="text-gray-200">Security Audit Firm</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Repositories</span>
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Followers</span>
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Audit Reports</span>
                      <span className="text-white font-semibold">80+</span>
                    </div>
                  </div>

                  <div className="border-t border-primary-500/20 pt-4">
                    <h4 className="text-white font-semibold mb-3">
                      Featured Repository
                    </h4>
                    <div className="bg-navy-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Logo size="sm" showText={false} />
                        <span className="text-white font-medium">Audits</span>
                      </div>
                      <p className="text-gray-200 text-sm mb-3">
                        Security audits done by FortKnox
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-200">Public</span>
                        <span className="text-gray-200">•</span>
                        <span className="text-gray-200">Updated recently</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Audit Statistics
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our track record of securing blockchain projects and protecting
              digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-primary-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-heading font-bold text-white mb-6">
                  Open Source Security
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We believe in transparency and community-driven security. All
                  our audit reports are publicly available on GitHub, allowing
                  the community to review, verify, and learn from our findings.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Public audit reports for transparency
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Community review and verification
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Educational resources for developers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Continuous improvement through feedback
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/FortKnox-sec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 w-fit"
                >
                  <Github className="w-5 h-5" />
                  Visit GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Categories */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Audit Categories
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive security services covering all aspects of blockchain
              security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl backdrop-blur-xl text-center"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-2xl font-bold text-primary-400">
                  {category.count}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Audits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Recent Audits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A sample of our recent security assessments and findings
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {recentAudits.map((audit, index) => (
                <motion.div
                  key={audit.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-gradient p-6 rounded-xl backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {audit.name}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-200 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {audit.date}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            audit.severity === "High"
                              ? "bg-red-500/20 text-red-400"
                              : audit.severity === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {audit.severity} Severity
                        </span>
                        <span className="flex items-center gap-1">
                          <Shield className="w-4 h-4" />
                          {audit.findings} findings
                        </span>
                      </div>

                      {/* Vulnerability Breakdown */}
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1 text-red-400">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          {audit.critical} Critical
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          {audit.major} Major
                        </span>
                        <span className="flex items-center gap-1 text-blue-400">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {audit.minor} Minor
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-green-400 font-semibold">
                        {audit.status}
                      </span>
                      <a
                        href="https://github.com/FortKnox-sec/Audits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-radial" />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute inset-0 hero-pattern opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Explore Our Work?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Visit our GitHub repository to see detailed audit reports,
              security findings, and learn from our comprehensive assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/FortKnox-sec/Audits"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Audit Reports
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/FortKnox_sec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
