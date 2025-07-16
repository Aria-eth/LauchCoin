"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizes = {
    sm: { shield: 40, text: 16 },
    md: { shield: 60, text: 20 },
    lg: { shield: 80, text: 24 },
    xl: { shield: 120, text: 32 }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        {/* Shield Background */}
        <svg
          width={currentSize.shield}
          height={currentSize.shield * 1.2}
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>
            <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
          </defs>
          
          {/* Shield Shape */}
          <path
            d="M50 5 L85 25 L85 70 Q85 100 50 115 Q15 100 15 70 L15 25 Z"
            fill="url(#shieldBg)"
            stroke="url(#shieldGradient)"
            strokeWidth="3"
          />
          
          {/* Eagle */}
          <g transform="translate(50, 45)">
            {/* Eagle Head */}
            <circle cx="0" cy="-10" r="12" fill="white" />
            <path
              d="M-8,-10 Q0,-5 8,-10 L8,-5 Q0,0 -8,-5 Z"
              fill="#FFD700"
            />
            <circle cx="-4" cy="-10" r="2" fill="black" />
            <circle cx="4" cy="-10" r="2" fill="black" />
            
            {/* Eagle Wings */}
            <path
              d="M-25,0 Q-20,-15 -10,-8 L-10,5 Q-15,10 -25,0 Z"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M25,0 Q20,-15 10,-8 L10,5 Q15,10 25,0 Z"
              fill="white"
              opacity="0.9"
            />
            
            {/* Eagle Body */}
            <ellipse cx="0" cy="5" rx="10" ry="15" fill="white" />
          </g>
          
          {/* FortKnox Circle */}
          <circle cx="50" cy="75" r="18" fill="url(#shieldGradient)" />
          <text
            x="50"
            y="80"
            textAnchor="middle"
            fill="#1a1a2e"
            fontSize="8"
            fontWeight="bold"
            fontFamily="Orbitron, sans-serif"
          >
            FortKnox
          </text>
        </svg>
      </motion.div>
      
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col"
        >
          <h1 
            className="font-heading font-bold gradient-text"
            style={{ fontSize: `${currentSize.text}px` }}
          >
            FORTKNOX
          </h1>
          <p 
            className="text-gray-400 font-medium"
            style={{ fontSize: `${currentSize.text * 0.6}px` }}
          >
            SECURITY
          </p>
        </motion.div>
      )}
    </div>
  );
};