"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  Code,
  Target,
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "Common Smart Contract Vulnerabilities in 2024",
    excerpt:
      "An in-depth analysis of the most prevalent security issues found in smart contracts this year, including reentrancy attacks, integer overflow, and access control flaws.",
    category: "Smart Contracts",
    date: "2024-01-15",
    readTime: "8 min read",
    icon: Shield,
  },
  {
    id: "2",
    title: "DeFi Security Best Practices",
    excerpt:
      "Essential security practices for DeFi protocols, covering everything from code review processes to incident response planning.",
    category: "DeFi Security",
    date: "2024-01-10",
    readTime: "12 min read",
    icon: Target,
  },
  {
    id: "3",
    title: "The Future of Blockchain Security",
    excerpt:
      "Exploring emerging threats and security solutions in the blockchain space, from quantum-resistant cryptography to AI-powered security tools.",
    category: "Security Trends",
    date: "2024-01-05",
    readTime: "10 min read",
    icon: Code,
  },
  {
    id: "4",
    title: "How to Conduct a Security Audit",
    excerpt:
      "A comprehensive guide to performing thorough security audits, including methodology, tools, and best practices for auditors.",
    category: "Audit Process",
    date: "2023-12-28",
    readTime: "15 min read",
    icon: Shield,
  },
  {
    id: "5",
    title: "Understanding MEV and Its Security Implications",
    excerpt:
      "Deep dive into Maximal Extractable Value (MEV) attacks and how to protect your DeFi protocols from these sophisticated exploits.",
    category: "DeFi Security",
    date: "2023-12-20",
    readTime: "14 min read",
    icon: Target,
  },
  {
    id: "6",
    title: "Zero-Knowledge Proofs in Smart Contract Security",
    excerpt:
      "How zero-knowledge proofs are revolutionizing smart contract security and privacy in blockchain applications.",
    category: "Security Trends",
    date: "2023-12-15",
    readTime: "11 min read",
    icon: Code,
  },
];

const categories = [
  { name: "All", count: 6 },
  { name: "Smart Contracts", count: 2 },
  { name: "DeFi Security", count: 2 },
  { name: "Security Trends", count: 2 },
  { name: "Audit Process", count: 1 },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg-radial" />
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6">
              Security
              <span className="block gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert analysis, security tips, and industry insights from our
              team of blockchain security professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#posts" className="btn-primary">
                Read Articles
              </a>
              <Link href="/contact" className="btn-secondary">
                Subscribe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-navy-800/50 border border-primary-500/20 text-gray-300 hover:border-primary-500/40 hover:text-primary-400 transition-all duration-300"
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="posts" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest security insights and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <post.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-200 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-200 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-200">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get the latest security insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Need Expert Security Guidance?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our team is ready to help secure your blockchain projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
