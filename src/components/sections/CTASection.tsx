"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Zap, SignalHigh, Bot, Brain, BarChart3 } from "lucide-react";
import styles from "@/styles/sections/CTASection.module.css";

const benefits = [
  { icon: SignalHigh, text: "Real‑time Trading Signals" },
  { icon: Bot, text: "Telegram Alpha Bot" },
  { icon: Brain, text: "Research Copilot" },
  { icon: BarChart3, text: "On‑chain Dashboards" },
];

export const CTASection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Minimal patterned background */}
      <div className={styles.pattern} />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            Early Community – Join Telegram Now
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6"
          >
            Ready to Join
            <span className="block mt-1 sm:mt-2">
              <span className="relative inline-block">
                quntaAI?
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-primary-400"
                />
              </span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto"
          >
            Buy on pump.fun and unlock AI trader utilities: signals, bot, and research copilot.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-1 sm:gap-2 text-gray-200 text-xs sm:text-sm lg:text-base"
              >
                <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary-400" />
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white text-navy-900 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base"
            >
              Buy on pump.fun
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -inset-1 bg-white/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <Link
              href="https://t.me/"
              className="inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Join Telegram
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-300"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400" />
              <span className="text-xs sm:text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400" />
              <span className="text-xs sm:text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400" />
              <span className="text-xs sm:text-sm">Instant Response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
