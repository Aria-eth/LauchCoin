"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Rocket, LineChart, Bot, MessageCircle } from "lucide-react";
import styles from "@/styles/sections/WhyBuySection.module.css";

const benefits = [
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Real Utility From Day One",
    desc: "Access AI trading signals, research copilots, and Telegram tools designed for real traders.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Telegram Alpha Bot",
    desc: "Track wallets, get alerts, and automate workflow right where the community lives.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Early Ecosystem Access",
    desc: "Be first to new features, beta drops, and integrations as we ship fast.",
  },
];

const trust = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security-First Team",
    desc: "Built by a professional security consultancy. We prioritize safe design and reviews.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Transparent & Community-Led",
    desc: "Clear updates, public roadmap, and open community input for what we build next.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Fair Launch on pump.fun",
    desc: "No presale. Everyone can participate publicly and on-chain.",
  },
];

export const WhyBuySection: React.FC = () => {
  return (
    <section className={styles.section} id="why-buy">
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.heading}
        >
          Why Buy quantaAI?
        </motion.h2>

        <div className={styles.grid}>
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className={styles.card}
            >
              <div className={styles.icon}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={styles.subheading}
        >
          Why Trust Us
        </motion.h3>

        <div className={styles.grid}>
          {trust.map((t) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className={styles.card}
            >
              <div className={styles.icon}>{t.icon}</div>
              <h3 className={styles.cardTitle}>{t.title}</h3>
              <p className={styles.cardDesc}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Join our Telegram
          </a>
          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Buy on pump.fun
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyBuySection;


