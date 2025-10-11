"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/sections/LaunchCountdown.module.css";
import Image from "next/image";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function getTimeLeft(targetISO: string): TimeLeft {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const delta = Math.max(0, target - now);

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  const seconds = Math.floor((delta / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: target < now };
}

export const LaunchCountdown: React.FC = () => {
  // Oct 25, 2025 18:00 GMT
  const targetISO = useMemo(() => "2025-10-25T18:00:00Z", []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetISO));
  const [isShining, setIsShining] = useState(false);
  const prevMinuteRef = useRef<number>(timeLeft.minutes);
  const shineTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeLeft(targetISO);
      setTimeLeft(next);

      // Trigger shine when minute value changes and we're not past launch
      if (!next.isPast && prevMinuteRef.current !== next.minutes) {
        prevMinuteRef.current = next.minutes;
        if (shineTimeoutRef.current) {
          window.clearTimeout(shineTimeoutRef.current);
        }
        setIsShining(true);
        shineTimeoutRef.current = window.setTimeout(() => setIsShining(false), 2000);
      }
    }, 1000);
    return () => {
      clearInterval(id);
      if (shineTimeoutRef.current) window.clearTimeout(shineTimeoutRef.current);
    };
  }, [targetISO]);

  const unit = (value: number, label: string) => (
    <div className={styles.unit}>
      <div className={styles.value}>{String(value).padStart(2, "0")}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );

  return (
    <section className={styles.banner} aria-label="Launch countdown" id="launch-time">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.inner}
      >
        <div className={styles.left}>
          <span className={styles.badge}>Launch Time</span>
          <h2 className={styles.title}>Oct 25, 2025 · 18:00 GMT</h2>
        </div>

        {!timeLeft.isPast ? (
          <div className={`${styles.timer} ${isShining ? styles.timerShining : ""}`}>
            {unit(timeLeft.days, "Days")}
            <span className={styles.sep}>:</span>
            {unit(timeLeft.hours, "Hours")}
            <span className={styles.sep}>:</span>
            {unit(timeLeft.minutes, "Minutes")}
            <span className={styles.sep}>:</span>
            {unit(timeLeft.seconds, "Seconds")}
          </div>
        ) : (
          <div className={styles.liveWrap}>
            <span className={styles.liveDot} />
            <span className={styles.liveText}>We are live on pump.fun</span>
          </div>
        )}

      </motion.div>
       <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.imageCard}
          >
            <Image
              src="/Launch-Map.png"
              alt="quantaAI Launch Map"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
      <div className={styles.ctaWrap}>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          Join Telegram
        </a>
        <a
          href="https://pump.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaPrimary}
        >
          Buy on pump.fun
        </a>
      </div>
    </section>
  );
};

export default LaunchCountdown;


