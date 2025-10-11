"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import coinLogo from "@/AI/coin logo.webp";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const sizes = {
    sm: { image: 40, text: 16 },
    md: { image: 50, text: 18 },
    lg: { image: 80, text: 24 },
    xl: { image: 120, text: 32 },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        <Image
          src={coinLogo}
          alt="quntaAI Logo"
          width={currentSize.image}
          height={currentSize.image}
          className="drop-shadow-2xl"
          priority
        />
      </motion.div>

      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col min-w-0"
        >
          <h1
            className="font-heading font-bold gradient-text truncate"
            style={{ fontSize: `${currentSize.text}px` }}
          >
            quntaAI
          </h1>
          <p
            className="text-gray-200 font-medium truncate"
            style={{ fontSize: `${currentSize.text * 0.6}px` }}
          >
            on Solana
          </p>
        </motion.div>
      )}
    </div>
  );
};

export const FooterLogo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const sizes = {
    sm: { image: 40, text: 16 },
    md: { image: 50, text: 18 },
    lg: { image: 80, text: 24 },
    xl: { image: 120, text: 32 },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        <Image
          src={coinLogo}
          alt="quntaAI Logo"
          width={currentSize.image}
          height={currentSize.image}
          className="drop-shadow-2xl"
          priority
        />
      </motion.div>

      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center min-w-0"
        >
          <h1
            className="font-heading font-bold gradient-text truncate text-center"
            style={{ fontSize: `${currentSize.text}px` }}
          >
            quntaAI
          </h1>
          <p
            className="text-gray-200 font-medium truncate text-center"
            style={{ fontSize: `${currentSize.text * 0.6}px` }}
          >
            on Solana
          </p>
        </motion.div>
      )}
    </div>
  );
};
