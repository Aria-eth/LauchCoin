"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    author: 'Alex Thompson',
    role: 'CTO',
    company: 'DeFi Protocol X',
    content: 'FortKnox Security\'s audit saved us from a critical vulnerability that could have cost millions. Their thorough approach and detailed reporting gave us confidence in our smart contract deployment.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    author: 'Sarah Chen',
    role: 'Founder',
    company: 'NFT Marketplace',
    content: 'The team\'s expertise in blockchain security is unmatched. They not only found vulnerabilities but also provided actionable solutions that improved our overall architecture.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    author: 'Michael Rodriguez',
    role: 'Lead Developer',
    company: 'Yield Farming Platform',
    content: 'Working with FortKnox was a game-changer. Their comprehensive audit process and post-audit support helped us launch with confidence. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    author: 'Emma Williams',
    role: 'Security Lead',
    company: 'DEX Protocol',
    content: 'The depth of analysis and attention to detail in their audit reports is impressive. They caught edge cases we hadn\'t even considered.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 5,
    author: 'David Kim',
    role: 'CEO',
    company: 'Staking Protocol',
    content: 'FortKnox Security has been our trusted partner for multiple audits. Their consistent quality and professionalism make them our go-to security firm.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-navy-900/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the projects we've helped secure
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-primary-500/10" />

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
                <div className="card-gradient p-8 lg:p-12 rounded-2xl">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg lg:text-xl text-gray-300 mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-500/30">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-semibold">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full lg:-translate-x-1/2 p-3 rounded-full bg-navy-800/50 hover:bg-navy-700/50 text-gray-400 hover:text-primary-400 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full lg:translate-x-1/2 p-3 rounded-full bg-navy-800/50 hover:bg-navy-700/50 text-gray-400 hover:text-primary-400 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-gray-400 mb-8">
            Trusted by leading blockchain projects
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Uniswap', 'Aave', 'Compound', 'Curve', 'SushiSwap'].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-600 hover:text-primary-400 transition-colors"
              >
                {project}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};