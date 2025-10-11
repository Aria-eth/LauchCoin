"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/sections/TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    author: "@solanatrader",
    role: "Early Holder",
    company: "quntaAI community",
    content:
      "Signals hit two breakouts today. The bot is actually useful, not just hype. Holding $QNTA.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=61",
  },
  {
    id: 2,
    author: "@alpha_hunter",
    role: "Telegram Mod",
    company: "quntaAI",
    content:
      "The whale tracker + new pairs radar in Telegram is clutch. One-tap buy links save time.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=28",
  },
  {
    id: 3,
    author: "@defiresearch",
    role: "Researcher",
    company: "Solana",
    content:
      "Thread summarizer + tokenomics decode is perfect for fast due diligence during hype cycles.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

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
            Community Voices
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Why Traders Like quntaAI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-3 sm:px-4">
            Real feedback from early users of the bot, signals, and dashboards
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-2 sm:-top-4 lg:-top-8 -left-2 sm:-left-4 lg:-left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-16 lg:h-16 text-primary-500/10 z-10" />
            {/* Testimonial Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="card-gradient p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-12 rounded-2xl">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-3 sm:mb-4 lg:mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-primary-400 text-primary-400"
                        />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 italic leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="text-center items-center">
                      <h4 className="text-[#ffb41a] font-semibold text-xs sm:text-sm lg:text-base">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-200 text-xs sm:text-sm">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-1 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 -translate-x-full lg:-translate-x-1/2 p-1.5 sm:p-2 lg:p-3 rounded-full bg-navy-800/50 hover:bg-navy-700/50 text-gray-200 hover:text-primary-400 transition-all duration-300 touch-target"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-1 sm:right-2 lg:right-0 top-1/2 -translate-y-1/2 translate-x-full lg:translate-x-1/2 p-1.5 sm:p-2 lg:p-3 rounded-full bg-navy-800/50 hover:bg-navy-700/50 text-gray-200 hover:text-primary-400 transition-all duration-300 touch-target"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 mt-4 sm:mt-6 lg:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 touch-target ${
                  index === currentIndex
                    ? "bg-primary-400 scale-110"
                    : "bg-gray-600 hover:bg-gray-500 hover:scale-105"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
