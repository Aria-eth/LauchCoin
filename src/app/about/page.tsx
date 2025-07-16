"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Zap, Lock } from 'lucide-react';
import { TeamSection } from '@/components/sections/TeamSection';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the highest standards of security in every audit, leaving no stone unturned in our pursuit of vulnerabilities.'
  },
  {
    icon: Target,
    title: 'Precision & Accuracy',
    description: 'Our methodical approach ensures thorough analysis with minimal false positives, saving time and resources.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with our clients, providing continuous support throughout the audit process and beyond.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in our audits, backed by years of expertise and proven results.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously evolve our methodologies to stay ahead of emerging threats in the blockchain space.'
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description: 'We maintain strict confidentiality protocols to protect our clients\' sensitive information and intellectual property.'
  }
];

const milestones = [
  { year: '2020', event: 'FortKnox Security founded by industry veterans' },
  { year: '2021', event: 'First major DeFi protocol audit completed' },
  { year: '2022', event: 'Reached 1000+ audits milestone' },
  { year: '2023', event: 'Expanded team to 50+ security experts' },
  { year: '2024', event: 'Leading security partner for top DeFi protocols' }
];

export default function AboutPage() {
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
              Securing the Future of
              <span className="block gradient-text">Blockchain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              FortKnox Security is a leading blockchain security firm dedicated to protecting DeFi protocols and smart contracts through comprehensive audits and cutting-edge security solutions.
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
            >
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Protecting the Decentralized Economy
              </h2>
              <p className="text-gray-400 mb-6">
                At FortKnox Security, our mission is to ensure the safety and reliability of blockchain technology by providing world-class security audits and consulting services. We believe that secure smart contracts are the foundation of a trustworthy decentralized future.
              </p>
              <p className="text-gray-400 mb-6">
                Founded by veterans from leading security firms and blockchain projects, we bring together decades of combined experience in cybersecurity, cryptography, and blockchain technology.
              </p>
              <p className="text-gray-400">
                Our comprehensive approach to security combines automated tools with manual expert review, ensuring that no vulnerability goes undetected. We've helped secure billions of dollars in total value locked across hundreds of protocols.
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
                  <h3 className="text-2xl font-semibold text-white mb-6">Our Journey</h3>
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
                          <span className="text-primary-400 font-bold">{milestone.year}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 mt-4">{milestone.event}</p>
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our core values guide every decision we make and every audit we perform
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
                  <p className="text-gray-400">
                    {value.description}
                  </p>
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