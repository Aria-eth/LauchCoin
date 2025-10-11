"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Lock, Code, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import coinHero from "@/AI/coin logo.webp";
import styles from "@/styles/sections/HeroSection.module.css";

const features = [
  "AI Trading Signals",
  "Telegram Alpha Bot",
  "On-chain Research",
  "Real-time Alerts",
];

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Subtle dotted pattern */}
      <div className={styles.pattern} />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary-500/3 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-2 left-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-500/3 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className={styles.containerGrid}>
          <div>
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.trustWrap}
          >
            <span className={styles.trustBadge}>
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              Fair Launch on pump.fun
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heading}
          >
            Meet
            <span className="block gradient-text">quantaAI</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.description}
          >
            The AI-powered utility token on Solana. Unlock real trader tools:
            signals, research copilot, and Telegram bot. Launching on pump.fun.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.ctaRow}
          >
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              Buy on pump.fun
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="#how-to-buy"
              className="btn-secondary flex items-center justify-center text-sm sm:text-base"
            >
              How to Buy
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.featuresGrid}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={styles.featureItem}
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Compact Stats Card */}
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.coinWrap}
          >
            <div className={styles.coinCard}>
              <Image
                src={coinHero}
                alt="quantaAI coin"
                width={1000}
                height={1000}
                className="h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-3 h-4 border border-primary-400/50 rounded-full flex items-start justify-center p-0.5"
        >
          <div className="w-0.5 h-1.5 bg-primary-400/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
