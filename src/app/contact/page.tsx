"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  Mail,
  Zap,
  Star,
  Heart,
  Twitter,
  Github,
} from "lucide-react";

// Star component for the galactic background
const GalacticStar: React.FC<{ className?: string; delay?: number }> = ({
  className,
  delay = 0,
}) => (
  <motion.div
    className={`absolute bg-white rounded-full ${className}`}
    animate={{
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Galactic cloud component for nebula effects
const GalacticCloud: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = "purple",
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    style={{
      background: `radial-gradient(circle, ${color}-400/30, ${color}-600/20, transparent)`,
    }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Telegram Chat",
    description: "Join our community chat for instant support",
    link: "https://t.me/FortKnox_sec",
    primary: true,
  },
  {
    icon: Github,
    title: "GitHub",
    description: "View our audit reports and open source work",
    link: "https://github.com/FortKnox-sec",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Get in touch via email for business inquiries",
    link: "mailto:support@fortknox-security.xyz",
    primary: false,
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Protocol Lead",
    content:
      "The Telegram community is incredibly helpful. Got my security questions answered within minutes!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Smart Contract Developer",
    content:
      "Amazing support through Telegram. The team is knowledgeable and always willing to help.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Security Researcher",
    content:
      "Best security community I've found. Quick responses and expert advice every time.",
    rating: 5,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 overflow-hidden"
        style={{ minHeight: "inherit" }}
      >
        {/* Galactic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-purple-900/20 to-indigo-900/30" />

        {/* Starfield */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Galactic Clouds/Nebulae */}
          <GalacticCloud className="w-96 h-96 top-10 left-10" color="purple" />
          <GalacticCloud className="w-80 h-80 top-20 right-20" color="blue" />
          <GalacticCloud className="w-72 h-72 top-60 left-1/3" color="pink" />
          <GalacticCloud className="w-64 h-64 top-40 right-1/4" color="cyan" />
          <GalacticCloud className="w-88 h-88 top-80 left-1/2" color="indigo" />
          <GalacticCloud
            className="w-56 h-56 top-100 right-1/3"
            color="violet"
          />

          {/* Large stars */}
          <GalacticStar className="w-2 h-2 top-20 left-10" delay={0} />
          <GalacticStar className="w-1.5 h-1.5 top-32 right-20" delay={0.5} />
          <GalacticStar className="w-2.5 h-2.5 top-48 left-1/4" delay={1} />
          <GalacticStar className="w-1 h-1 top-64 right-1/3" delay={1.5} />
          <GalacticStar className="w-2 h-2 top-80 left-1/2" delay={2} />
          <GalacticStar className="w-1.5 h-1.5 top-96 right-1/4" delay={2.5} />
          <GalacticStar className="w-2 h-2 top-12 left-1/3" delay={0.8} />
          <GalacticStar className="w-2.5 h-2.5 top-28 right-1/3" delay={1.2} />
          <GalacticStar className="w-1.5 h-1.5 top-44 left-2/3" delay={1.6} />
          <GalacticStar className="w-2 h-2 top-52 right-1/2" delay={2.1} />
          <GalacticStar className="w-2.5 h-2.5 top-68 left-1/6" delay={2.8} />
          <GalacticStar className="w-1.5 h-1.5 top-76 right-2/3" delay={3.2} />
          <GalacticStar className="w-2 h-2 top-88 left-1/4" delay={3.6} />
          <GalacticStar className="w-2.5 h-2.5 top-104 right-1/6" delay={4.0} />

          {/* Medium stars */}
          <GalacticStar className="w-1 h-1 top-16 right-10" delay={0.3} />
          <GalacticStar className="w-1 h-1 top-40 left-1/3" delay={0.8} />
          <GalacticStar className="w-1 h-1 top-56 right-1/2" delay={1.3} />
          <GalacticStar className="w-1 h-1 top-72 left-2/3" delay={1.8} />
          <GalacticStar className="w-1 h-1 top-88 right-2/3" delay={2.3} />
          <GalacticStar className="w-1 h-1 top-8 left-1/2" delay={0.6} />
          <GalacticStar className="w-1 h-1 top-24 right-1/4" delay={1.0} />
          <GalacticStar className="w-1 h-1 top-36 left-1/5" delay={1.4} />
          <GalacticStar className="w-1 h-1 top-48 right-1/5" delay={1.8} />
          <GalacticStar className="w-1 h-1 top-60 left-3/4" delay={2.2} />
          <GalacticStar className="w-1 h-1 top-84 right-1/4" delay={2.6} />
          <GalacticStar className="w-1 h-1 top-92 left-2/3" delay={3.0} />
          <GalacticStar className="w-1 h-1 top-108 right-1/2" delay={3.4} />

          {/* Small stars */}
          <GalacticStar className="w-0.5 h-0.5 top-24 left-20" delay={0.2} />
          <GalacticStar className="w-0.5 h-0.5 top-36 right-16" delay={0.7} />
          <GalacticStar className="w-0.5 h-0.5 top-52 left-3/4" delay={1.2} />
          <GalacticStar className="w-0.5 h-0.5 top-68 right-1/6" delay={1.7} />
          <GalacticStar className="w-0.5 h-0.5 top-84 left-1/6" delay={2.2} />
          <GalacticStar className="w-0.5 h-0.5 top-100 right-3/4" delay={2.7} />
          <GalacticStar className="w-0.5 h-0.5 top-4 left-1/4" delay={0.4} />
          <GalacticStar className="w-0.5 h-0.5 top-16 right-1/3" delay={0.9} />
          <GalacticStar className="w-0.5 h-0.5 top-32 left-1/6" delay={1.3} />
          <GalacticStar className="w-0.5 h-0.5 top-44 right-3/4" delay={1.7} />
          <GalacticStar className="w-0.5 h-0.5 top-64 left-1/2" delay={2.1} />
          <GalacticStar className="w-0.5 h-0.5 top-80 right-1/5" delay={2.5} />
          <GalacticStar className="w-0.5 h-0.5 top-96 left-1/3" delay={2.9} />
          <GalacticStar className="w-0.5 h-0.5 top-112 right-1/4" delay={3.3} />

          {/* Additional stars for depth */}
          <GalacticStar className="w-1.5 h-1.5 top-28 left-1/2" delay={0.4} />
          <GalacticStar className="w-1 h-1 top-44 right-1/4" delay={0.9} />
          <GalacticStar className="w-2 h-2 top-60 left-1/5" delay={1.4} />
          <GalacticStar className="w-1 h-1 top-76 right-1/5" delay={1.9} />
          <GalacticStar className="w-1.5 h-1.5 top-92 left-3/4" delay={2.4} />
          <GalacticStar className="w-1.5 h-1.5 top-6 left-2/3" delay={0.7} />
          <GalacticStar className="w-1 h-1 top-20 right-1/2" delay={1.1} />
          <GalacticStar className="w-2 h-2 top-32 left-1/4" delay={1.5} />
          <GalacticStar className="w-1 h-1 top-56 right-2/3" delay={1.9} />
          <GalacticStar className="w-1.5 h-1.5 top-72 left-1/3" delay={2.3} />
          <GalacticStar className="w-1 h-1 top-88 right-1/6" delay={2.7} />
          <GalacticStar className="w-2 h-2 top-104 left-2/3" delay={3.1} />

          {/* Extra bright stars */}
          <GalacticStar
            className="w-3 h-3 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            delay={0}
          />
          <GalacticStar className="w-2.5 h-2.5 top-30 right-1/3" delay={1.5} />
          <GalacticStar className="w-3 h-3 top-70 left-1/4" delay={3.0} />
          <GalacticStar className="w-2.5 h-2.5 top-90 right-1/2" delay={4.5} />
        </div>

        <div className="absolute inset-0 hero-pattern opacity-5" />

        {/* Mid-field stars to cover entire section height */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mid large */}
          <GalacticStar className="w-2 h-2 top-[12%] left-[8%]" delay={0.3} />
          <GalacticStar className="w-2 h-2 top-[22%] right-[12%]" delay={0.8} />
          <GalacticStar className="w-2 h-2 top-[48%] left-[18%]" delay={1.4} />
          <GalacticStar className="w-2 h-2 top-[66%] right-[28%]" delay={1.9} />

          {/* Mid medium */}
          <GalacticStar
            className="w-1.5 h-1.5 top-[18%] left-[35%]"
            delay={0.5}
          />
          <GalacticStar
            className="w-1.5 h-1.5 top-[30%] right-[42%]"
            delay={1.1}
          />
          <GalacticStar
            className="w-1.5 h-1.5 top-[38%] left-[62%]"
            delay={1.6}
          />
          <GalacticStar
            className="w-1.5 h-1.5 top-[58%] right-[8%]"
            delay={2.1}
          />
          <GalacticStar
            className="w-1.5 h-1.5 top-[72%] left-[48%]"
            delay={2.6}
          />

          {/* Mid small */}
          <GalacticStar
            className="w-0.5 h-0.5 top-[14%] right-[26%]"
            delay={0.4}
          />
          <GalacticStar
            className="w-0.5 h-0.5 top-[26%] left-[22%]"
            delay={0.9}
          />
          <GalacticStar
            className="w-0.5 h-0.5 top-[44%] right-[18%]"
            delay={1.5}
          />
          <GalacticStar
            className="w-0.5 h-0.5 top-[52%] left-[72%]"
            delay={2.0}
          />
          <GalacticStar
            className="w-0.5 h-0.5 top-[62%] right-[52%]"
            delay={2.4}
          />
          <GalacticStar
            className="w-0.5 h-0.5 top-[78%] left-[12%]"
            delay={2.8}
          />
        </div>

        {/* Bottom stars for full-height coverage */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GalacticStar className="w-1.5 h-1.5 bottom-6 left-1/6" delay={0.4} />
          <GalacticStar
            className="w-1.5 h-1.5 bottom-10 right-1/5"
            delay={0.9}
          />
          <GalacticStar className="w-2 h-2 bottom-16 left-1/3" delay={1.3} />
          <GalacticStar
            className="w-1.5 h-1.5 bottom-20 right-1/2"
            delay={1.8}
          />
          <GalacticStar className="w-2 h-2 bottom-24 left-2/3" delay={2.2} />
          <GalacticStar
            className="w-1.5 h-1.5 bottom-28 right-1/4"
            delay={2.6}
          />

          <GalacticStar className="w-0.5 h-0.5 bottom-4 left-1/4" delay={0.2} />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-8 right-1/3"
            delay={0.7}
          />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-12 left-1/2"
            delay={1.1}
          />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-14 right-1/6"
            delay={1.5}
          />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-18 left-3/4"
            delay={1.9}
          />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-22 right-2/3"
            delay={2.3}
          />
          <GalacticStar
            className="w-0.5 h-0.5 bottom-26 left-1/5"
            delay={2.7}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Professional Launch Utility
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
            >
              Professional
              <span className="block gradient-text">Launch Utility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Get expert help setting up and using our launch coin utilities—
              real‑time trading signals, Telegram alpha bot, research copilot,
              and on‑chain dashboards. Talk to our team for onboarding,
              integrations, and best‑practice guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://t.me/FortKnox_sec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 group text-lg px-8 py-4"
              >
                Buy on pump.fun
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/audit-request"
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 group"
              >
                <MessageCircle className="w-6 h-6" />
                join Telegram
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Contact Methods
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose your preferred way to get in touch with our team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`card-gradient p-8 rounded-2xl backdrop-blur-xl ${
                    method.primary
                      ? "border-2 border-primary-500/30 ring-2 ring-primary-500/20"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        method.primary ? "bg-primary-500/20" : "bg-navy-800/50"
                      }`}
                    >
                      <method.icon
                        className={`w-8 h-8 ${
                          method.primary ? "text-primary-400" : "text-gray-200"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-200 mb-4">{method.description}</p>
                      {method.title === "Email" ? (
                        <div className="space-y-2">
                          <a
                            href={method.link}
                            className="text-primary-400 hover:text-primary-300 transition-colors font-medium break-words"
                          >
                            support@fortknox-security.xyz
                          </a>
                          <p className="text-sm text-gray-500">
                            Click to send email
                          </p>
                        </div>
                      ) : (
                        <a
                          href={method.link}
                          target={method.primary ? "_blank" : "_self"}
                          rel={method.primary ? "noopener noreferrer" : ""}
                          className={`inline-flex items-center gap-2 font-medium transition-colors ${
                            method.primary
                              ? "text-primary-400 hover:text-primary-300"
                              : "text-gray-200 hover:text-gray-300"
                          }`}
                        >
                          {method.primary ? "Join Now" : "Contact"}
                          {method.primary && <ArrowRight className="w-4 h-4" />}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Community Testimonials */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join thousands of developers and security professionals who trust
              our Telegram community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-purple-400 text-purple-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-200">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-radial" />
        <div className="absolute inset-0 bg-navy-900/90" />
        <div className="absolute inset-0 hero-pattern opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-primary-400" />
            </motion.div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Connect with security experts, get instant support, and be part of
              the most trusted blockchain security community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/FortKnox_sec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
              >
                <MessageCircle className="w-6 h-6" />
                Join Telegram Now
                <Send className="w-5 h-5" />
              </a>
              <Link
                href="/audit-request"
                className="btn-secondary text-lg px-8 py-4"
              >
                Request Security Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
