"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Users, Flame, Zap, Award, Clock } from "lucide-react";
import styles from "@/styles/sections/StatsSection.module.css";

const stats = [
  {
    icon: Rocket,
    value: 1,
    suffix: "",
    label: "Fair Launch",
    description: "Launching on pump.fun",
    color: "text-primary-400",
  },
  {
    icon: Flame,
    value: 100,
    suffix: "%",
    label: "Liquidity Burn",
    description: "LP burned at migration",
    color: "text-orange-400",
  },
  {
    icon: Users,
    value: 5,
    suffix: "k+",
    label: "Early Supporters",
    description: "Community growing fast",
    color: "text-purple-400",
  },
  {
    icon: Zap,
    value: 50,
    suffix: "+",
    label: "Signal Models",
    description: "Curated strategies",
    color: "text-blue-400",
  },
  {
    icon: Award,
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Bot reliability",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Alerts",
    description: "Real-time notifications",
    color: "text-green-400",
  },
];

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const currentCount = progress * end;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className={styles.section}>
      {/* Minimal dotted background */}
      <div className={styles.pattern} />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            quntaAI in Numbers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Built for Traders on Solana
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-3 sm:px-4">
            Utility-first token with real tools, bots, and dashboards
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={styles.card}>
                {/* Icon */}
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div
                    className={`inline-flex p-2 sm:p-3 rounded-xl bg-navy-800/50 ${stat.color}`}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={
                        stat.label.includes("Lines") ||
                        stat.label.includes("TVL") ||
                        stat.label.includes("Success")
                          ? 1
                          : 0
                      }
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-xs sm:text-sm">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-gray-200 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base">
            Get quntaAI on Solana now via pump.fun
          </p>
          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Buy on pump.fun
          </a>
        </motion.div>
      </div>
    </section>
  );
};
