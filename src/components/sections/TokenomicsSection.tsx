"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Coins, Flame, Gift } from "lucide-react";
import Image from "next/image";
import coin from "@/AI/AI memes.jpeg";
import styles from "@/styles/sections/TokenomicsSection.module.css";

export const TokenomicsSection: React.FC = () => {
  const items = [
    { label: "Supply", value: "1,000,000,000 QNTA", icon: Coins },
    { label: "Liquidity", value: "LP burned", icon: Flame },
    { label: "Treasury", value: "10% dev + growth", icon: Gift },
    { label: "Tax", value: "0% buy / 0% sell", icon: PieChart },
  ];

  return (
    <section id="tokenomics" className={styles.section}>
      <div className={styles.pattern} />
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-4 sm:mb-6"
            >
              <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Tokenomics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                Simple and Transparent
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                QNTA focuses on utility. LP burned, no taxes, and a small treasury for sustainable growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-accent)] border border-primary-500/10"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 mb-2" />
                <div className="text-gray-400 text-xs sm:text-sm">{item.label}</div>
                <div className="text-white font-semibold text-base sm:text-lg">{item.value}</div>
              </motion.div>
            ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.imageCard}
          >
            <Image
              src={coin}
              alt="quntaAI token"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


