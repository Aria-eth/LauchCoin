"use client";

import React from "react";

// Shiny star component with glitch effect
const Star: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  glitchIntensity?: number;
  isGlitchy?: boolean;
}> = ({
  className,
  style,
  delay = 0,
  glitchIntensity = 1,
  isGlitchy = false,
}) => (
  <div
    className={`absolute bg-white rounded-full ${className} ${
      isGlitchy ? "glitch-effect" : "sparkle-effect"
    }`}
    style={{
      ...style,
      animationDelay: `${delay}s`,
      animationDuration: isGlitchy
        ? `${0.6 + Math.random() * 20}s`
        : `${2 + Math.random() * 5}s`,
      boxShadow: `0 0 ${15 * glitchIntensity}px ${glitchIntensity}px rgba(255, 255, 255, 0.8)`,
      filter: `blur(${0.1 * glitchIntensity}px)`,
    }}
  />
);

export const GalacticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Dark background */}
      <div className="absolute inset-0 bg-navy-900" />

      {/* Subtle starfield - now with a slight blur */}
      <div className="absolute inset-0 overflow-hidden blur-[2px]">
        {/* Generate many small, shiny stars */}
        {Array.from({ length: 200 }, (_, i) => (
          <Star
            key={i}
            className="w-0.5 h-0.5 opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 2}
            glitchIntensity={0.5 + Math.random() * 0.5}
          />
        ))}

        {/* Some slightly larger stars for variety */}
        {Array.from({ length: 50 }, (_, i) => (
          <Star
            key={`large-${i}`}
            className="w-1 h-1 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 3}
            glitchIntensity={1 + Math.random() * 1}
          />
        ))}

        {/* A few medium stars */}
        {Array.from({ length: 20 }, (_, i) => (
          <Star
            key={`medium-${i}`}
            className="w-1.5 h-1.5 opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 4}
            glitchIntensity={1.5 + Math.random() * 1.5}
          />
        ))}

        {/* A few bright glitchy stars */}
        {Array.from({ length: 10 }, (_, i) => (
          <Star
            key={`bright-${i}`}
            className="w-2 h-2 opacity-90"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 5}
            glitchIntensity={2 + Math.random() * 2}
            isGlitchy={true}
          />
        ))}

        {/* Some medium glitchy stars */}
        {Array.from({ length: 15 }, (_, i) => (
          <Star
            key={`glitch-${i}`}
            className="w-1 h-1 opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            delay={Math.random() * 3}
            glitchIntensity={1.5 + Math.random() * 1}
            isGlitchy={true}
          />
        ))}
      </div>
    </div>
  );
};
