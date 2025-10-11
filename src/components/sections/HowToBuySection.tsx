"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Link as LinkIcon, CreditCard, CheckCircle } from "lucide-react";
import Image from "next/image";
import coin from "@/AI/ai memes matrix.jpg";
import styles from "@/styles/sections/HowToBuySection.module.css";

export const HowToBuySection: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Create a Solana wallet",
      description: "Install Phantom or Solflare and create a new wallet.",
    },
    {
      icon: CreditCard,
      title: "Fund with SOL",
      description: "Buy SOL on an exchange and send it to your wallet.",
    },
    {
      icon: LinkIcon,
      title: "Open pump.fun",
      description: "Connect wallet and search for quntaAI (QNTA).",
    },
    {
      icon: CheckCircle,
      title: "Buy QNTA",
      description: "Confirm the swap and add QNTA to your wallet.",
    },
  ];

  return (
    <section id="how-to-buy" className={styles.section}>
      <div className={styles.pattern} />
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Quick Start
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              How to Buy quntaAI
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 max-w-2xl">
              Follow these simple steps to get QNTA on pump.fun and unlock AI trader utilities.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-navy-800/40 border border-primary-500/10"
                >
                  <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">{s.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="https://pump.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Buy on pump.fun
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get Phantom
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-gradient rounded-2xl overflow-hidden">
              <Image
                src={coin}
                alt="quntaAI coin"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


