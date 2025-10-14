"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/AI/what-is-an-ai-token.jpg";
import { Calendar, Rocket, Bot, BarChart3, Users } from "lucide-react";
import styles from "@/styles/sections/RoadmapSection.module.css";

export const RoadmapSection: React.FC = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Phase 1 – Launch",
      points: ["Fair launch on pump.fun", "Website + socials live", "Telegram bot v1"],
    },
    {
      icon: Bot,
      title: "Phase 2 – Utility",
      points: ["Signal engine v1", "Whale tracker", "Thread summarizer"],
    },
    {
      icon: BarChart3,
      title: "Phase 3 – Dashboards",
      points: ["Holder cohorts", "Liquidity map", "DCA zones"],
    },
    {
      icon: Users,
      title: "Phase 4 – Growth",
      points: ["Collab integrations", "Mobile UX", "Community grants"],
    },
  ];

  return (
    <section id="roadmap" className={styles.section}>
      <div className={styles.pattern} />
      <div className="absolute right-0 top-10 w-40 sm:w-60 lg:w-80 opacity-10 pointer-events-none select-none">
        <Image src={banner} alt="ai background" className="w-full h-auto" />
      </div>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Shipping in Public
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto">
            We build fast and iterate with the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="p-3 sm:p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <phase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                <h3 className="text-white font-semibold text-base sm:text-lg">{phase.title}</h3>
              </div>
              <ul className="space-y-1">
                {phase.points.map((p) => (
                  <li key={p} className="text-xs sm:text-sm" style={{ color: "#bcff28" }}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


