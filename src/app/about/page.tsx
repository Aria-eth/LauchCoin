"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, Zap, Lock } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";

// Star component for the galactic background
const Star: React.FC<{ className?: string; delay?: number }> = ({
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

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize the highest standards of security in every audit, leaving no stone unturned in our pursuit of vulnerabilities.",
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description:
      "Our methodical approach ensures thorough analysis with minimal false positives, saving time and resources.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work closely with our clients, providing continuous support throughout the audit process and beyond.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards of quality in our audits, backed by years of expertise and proven results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously evolve our methodologies to stay ahead of emerging threats in the blockchain space.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "We maintain strict confidentiality protocols to protect our clients' sensitive information and intellectual property.",
  },
];

const milestones = [
  { year: "2020", event: "Fortknox Security founded by industry veterans" },
  { year: "2021", event: "First major DeFi protocol audit completed" },
  { year: "2022", event: "Reached 50+ audits milestone" },
  { year: "2023", event: "Expanded team to 25+ security experts" },
  {
    year: "2024",
    event:
      "Reached 80+ audits and leading security partner for top DeFi protocols",
  },
];

export default function AboutPage() {
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
          <Star className="w-2 h-2 top-20 left-10" delay={0} />
          <Star className="w-1.5 h-1.5 top-32 right-20" delay={0.5} />
          <Star className="w-2.5 h-2.5 top-48 left-1/4" delay={1} />
          <Star className="w-1 h-1 top-64 right-1/3" delay={1.5} />
          <Star className="w-2 h-2 top-80 left-1/2" delay={2} />
          <Star className="w-1.5 h-1.5 top-96 right-1/4" delay={2.5} />
          <Star className="w-2 h-2 top-12 left-1/3" delay={0.8} />
          <Star className="w-2.5 h-2.5 top-28 right-1/3" delay={1.2} />
          <Star className="w-1.5 h-1.5 top-44 left-2/3" delay={1.6} />
          <Star className="w-2 h-2 top-52 right-1/2" delay={2.1} />
          <Star className="w-2.5 h-2.5 top-68 left-1/6" delay={2.8} />
          <Star className="w-1.5 h-1.5 top-76 right-2/3" delay={3.2} />
          <Star className="w-2 h-2 top-88 left-1/4" delay={3.6} />
          <Star className="w-2.5 h-2.5 top-104 right-1/6" delay={4.0} />

          {/* Medium stars */}
          <Star className="w-1 h-1 top-16 right-10" delay={0.3} />
          <Star className="w-1 h-1 top-40 left-1/3" delay={0.8} />
          <Star className="w-1 h-1 top-56 right-1/2" delay={1.3} />
          <Star className="w-1 h-1 top-72 left-2/3" delay={1.8} />
          <Star className="w-1 h-1 top-88 right-2/3" delay={2.3} />
          <Star className="w-1 h-1 top-8 left-1/2" delay={0.6} />
          <Star className="w-1 h-1 top-24 right-1/4" delay={1.0} />
          <Star className="w-1 h-1 top-36 left-1/5" delay={1.4} />
          <Star className="w-1 h-1 top-48 right-1/5" delay={1.8} />
          <Star className="w-1 h-1 top-60 left-3/4" delay={2.2} />
          <Star className="w-1 h-1 top-84 right-1/4" delay={2.6} />
          <Star className="w-1 h-1 top-92 left-2/3" delay={3.0} />
          <Star className="w-1 h-1 top-108 right-1/2" delay={3.4} />

          {/* Small stars */}
          <Star className="w-0.5 h-0.5 top-24 left-20" delay={0.2} />
          <Star className="w-0.5 h-0.5 top-36 right-16" delay={0.7} />
          <Star className="w-0.5 h-0.5 top-52 left-3/4" delay={1.2} />
          <Star className="w-0.5 h-0.5 top-68 right-1/6" delay={1.7} />
          <Star className="w-0.5 h-0.5 top-84 left-1/6" delay={2.2} />
          <Star className="w-0.5 h-0.5 top-100 right-3/4" delay={2.7} />
          <Star className="w-0.5 h-0.5 top-4 left-1/4" delay={0.4} />
          <Star className="w-0.5 h-0.5 top-16 right-1/3" delay={0.9} />
          <Star className="w-0.5 h-0.5 top-32 left-1/6" delay={1.3} />
          <Star className="w-0.5 h-0.5 top-44 right-3/4" delay={1.7} />
          <Star className="w-0.5 h-0.5 top-64 left-1/2" delay={2.1} />
          <Star className="w-0.5 h-0.5 top-80 right-1/5" delay={2.5} />
          <Star className="w-0.5 h-0.5 top-96 left-1/3" delay={2.9} />
          <Star className="w-0.5 h-0.5 top-112 right-1/4" delay={3.3} />

          {/* Additional stars for depth */}
          <Star className="w-1.5 h-1.5 top-28 left-1/2" delay={0.4} />
          <Star className="w-1 h-1 top-44 right-1/4" delay={0.9} />
          <Star className="w-2 h-2 top-60 left-1/5" delay={1.4} />
          <Star className="w-1 h-1 top-76 right-1/5" delay={1.9} />
          <Star className="w-1.5 h-1.5 top-92 left-3/4" delay={2.4} />
          <Star className="w-1.5 h-1.5 top-6 left-2/3" delay={0.7} />
          <Star className="w-1 h-1 top-20 right-1/2" delay={1.1} />
          <Star className="w-2 h-2 top-32 left-1/4" delay={1.5} />
          <Star className="w-1 h-1 top-56 right-2/3" delay={1.9} />
          <Star className="w-1.5 h-1.5 top-72 left-1/3" delay={2.3} />
          <Star className="w-1 h-1 top-88 right-1/6" delay={2.7} />
          <Star className="w-2 h-2 top-104 left-2/3" delay={3.1} />

          {/* Extra bright stars */}
          <Star
            className="w-3 h-3 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            delay={0}
          />
          <Star className="w-2.5 h-2.5 top-30 right-1/3" delay={1.5} />
          <Star className="w-3 h-3 top-70 left-1/4" delay={3.0} />
          <Star className="w-2.5 h-2.5 top-90 right-1/2" delay={4.5} />
        </div>

        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
              Securing the Future of
              <span className="block gradient-text">Blockchain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Fortknox Security is a leading blockchain security firm dedicated
              to protecting DeFi protocols and smart contracts through
              comprehensive audits and cutting-edge security solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Protecting the Decentralized Economy
              </h2>
              <p className="text-gray-200 mb-6">
                At Fortknox Security, our mission is to ensure the safety and
                reliability of blockchain technology by providing world-class
                security audits and consulting services. We believe that secure
                smart contracts are the foundation of a trustworthy
                decentralized future.
              </p>
              <p className="text-gray-200 mb-6">
                Founded by veterans from leading security firms and blockchain
                projects, we bring together decades of combined experience in
                cybersecurity, cryptography, and blockchain technology.
              </p>
              <p className="text-gray-200">
                Our comprehensive approach to security combines automated tools
                with manual expert review, ensuring that no vulnerability goes
                undetected. We've helped secure over $500 million in total value
                locked across 80+ protocols.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />
                <div className="p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Our Journey
                  </h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                          <span className="text-primary-400 font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 mt-4">
                            {milestone.event}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our core values guide every decision we make and every audit we
              perform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </>
  );
}
