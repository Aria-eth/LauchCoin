"use client";

import React from "react";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  Brain,
  SignalHigh,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import deco from "@/AI/silver-11-1_ate576.jpg";
import styles from "@/styles/sections/ServicesSection.module.css";

const services = [
  {
    icon: SignalHigh,
    title: "AI Trading Signals",
    description:
      "Backtested momentum and mean-reversion alerts delivered in real time.",
    features: [
      "Multi-timeframe signals",
      "Risk-adjusted entries",
      "Automated alerts",
      "Sharpe tracked",
    ],
    color: "from-primary-400 to-primary-600",
    href: "#utilities",
  },
  {
    icon: Bot,
    title: "Telegram Alpha Bot",
    description:
      "Chat with quntaAI to scout hot pairs, whales, and narrative flows.",
    features: [
      "Whale tracker",
      "New pairs radar",
      "Wallet insights",
      "One-tap buy links",
    ],
    color: "from-blue-400 to-blue-600",
    href: "#utilities",
  },
  {
    icon: Brain,
    title: "Research Copilot",
    description:
      "Summarize threads, decode tokenomics, and surface risks instantly.",
    features: [
      "Thread summarizer",
      "Contract risk flags",
      "Narrative heat",
      "Shareable briefs",
    ],
    color: "from-purple-400 to-purple-600",
    href: "#utilities",
  },
  {
    icon: BarChart3,
    title: "On-chain Dashboards",
    description:
      "Clean charts for liquidity, holders, and early accumulation zones.",
    features: [
      "Liquidity map",
      "Holder cohorts",
      "DCA zones",
      "Trend strength",
    ],
    color: "from-green-400 to-green-600",
    href: "#utilities",
  },
];

export const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="utilities" className={styles.section}>
      {/* Minimal Pattern */}
      <div className={styles.pattern} />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -right-6 sm:-right-10 lg:-right-16 top-12 opacity-10 hidden sm:block pointer-events-none select-none">
          <Image src={deco} alt="decor" className="w-40 sm:w-56 lg:w-72 h-auto rounded-xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            quntaAI Utilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            AI Tools That Traders Actually Use
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-3 sm:px-4">
            Built for speed on Solana—signal detection, bot execution, and clean insights
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <a href={service.href} className="block h-full">
                <div className={styles.card}>
                  {/* Icon Container */}
                  <div className="mb-3 sm:mb-4 lg:mb-6 relative">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-navy-900 rounded-xl flex items-center justify-center">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>
                    <div
                      className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${service.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 lg:mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1 sm:gap-2"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-500 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-primary-400 font-medium text-xs sm:text-sm group-hover:text-primary-300 transition-colors">
                    Explore Utility
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <Link
              href="/services"
              className="btn-primary flex items-center gap-2 text-sm sm:text-base"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-gray-200 text-sm sm:text-base">
              or{" "}
              <Link
                href="/contact"
                className="text-primary-400 hover:text-primary-300 underline transition-colors"
              >
                discuss custom solutions
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};