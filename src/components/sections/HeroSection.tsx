"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Code, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  'Smart Contract Audits',
  'Security Consulting',
  'Penetration Testing',
  '24/7 Monitoring'
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg-radial" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Trusted by 500+ DeFi Projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
              >
                Secure Your
                <span className="block gradient-text">Smart Contracts</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Industry-leading blockchain security audits and consulting services to protect your DeFi protocols from vulnerabilities and exploits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link href="/audit-request" className="btn-primary flex items-center gap-2 group">
                  Request Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  View Portfolio
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative perspective-1000">
                <motion.div
                  animate={{
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="transform-style-3d"
                >
                  <div className="card-gradient p-8 rounded-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-6">
                      <Shield className="w-12 h-12 text-primary-400" />
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200" />
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse animation-delay-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Security Status</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Lock className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Contracts Audited</span>
                        </div>
                        <span className="text-xl font-bold text-white">2,847</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Code className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">Lines Reviewed</span>
                        </div>
                        <span className="text-xl font-bold text-white">12.5M+</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-primary-400" />
                          <span className="text-gray-300">TVL Protected</span>
                        </div>
                        <span className="text-xl font-bold text-white">$8.2B</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-primary-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Success Rate</span>
                        <span className="text-2xl font-bold gradient-text">99.8%</span>
                      </div>
                      <div className="mt-2 h-2 bg-navy-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '99.8%' }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500/20 rounded-lg backdrop-blur-xl flex items-center justify-center"
              >
                <Shield className="w-10 h-10 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500/20 rounded-lg backdrop-blur-xl flex items-center justify-center"
              >
                <Lock className="w-10 h-10 text-purple-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-3 bg-primary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};