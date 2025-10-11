"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    icon: Shield,
    title: "Security Audits",
    questions: [
      {
        question: "What is a smart contract security audit?",
        answer:
          "A smart contract security audit is a comprehensive review of blockchain code to identify vulnerabilities, security flaws, and potential attack vectors. Our audits include manual code review, automated analysis, and penetration testing to ensure your contracts are secure.",
      },
      {
        question: "How long does an audit take?",
        answer:
          "Audit duration depends on the complexity of your project. Simple smart contracts typically take 1-2 weeks, while complex DeFi protocols can take 2-4 weeks. We'll provide a detailed timeline during the initial assessment.",
      },
      {
        question: "What types of vulnerabilities do you find?",
        answer:
          "We identify critical vulnerabilities like reentrancy attacks, integer overflow/underflow, access control issues, logic errors, and more. Our comprehensive approach covers both technical and economic security aspects.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Process & Timeline",
    questions: [
      {
        question: "What is your audit process?",
        answer:
          "Our process includes: 1) Initial assessment and scope definition, 2) Comprehensive code analysis, 3) Security testing and penetration testing, 4) Detailed report generation with findings and recommendations.",
      },
      {
        question: "Do you provide remediation guidance?",
        answer:
          "Yes, our audit reports include detailed remediation guidance for each finding, including code examples and best practices to fix identified vulnerabilities.",
      },
      {
        question: "Can you help implement fixes?",
        answer:
          "We provide guidance and can review your fixes, but we don't implement code changes directly. This maintains our independence as auditors.",
      },
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing & Services",
    questions: [
      {
        question: "How much does an audit cost?",
        answer:
          "Audit costs vary based on project complexity and scope. Smart contract audits start at $15,000, while comprehensive DeFi protocol audits start at $25,000. Contact us for a custom quote.",
      },
      {
        question: "What's included in the audit price?",
        answer:
          "Our audit includes comprehensive code review, security testing, detailed report, remediation guidance, and post-audit support. We also provide an executive summary for stakeholders.",
      },
      {
        question: "Do you offer retainer services?",
        answer:
          "Yes, we offer ongoing security consulting and retainer services for projects requiring continuous security oversight and support.",
      },
    ],
  },
  {
    icon: Users,
    title: "Team & Expertise",
    questions: [
      {
        question: "What is your team's expertise?",
        answer:
          "Our team consists of experienced security researchers, auditors, and blockchain experts with backgrounds in cybersecurity, cryptography, and DeFi protocol development.",
      },
      {
        question: "Have you audited major protocols?",
        answer:
          "Yes, we have audited 80+ DeFi protocols and smart contracts, helping secure over $500 million in total value locked across the blockchain ecosystem.",
      },
      {
        question: "Are you certified auditors?",
        answer:
          "Our team includes certified security professionals and we follow industry best practices and standards for security auditing.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
              Frequently Asked
              <span className="block gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our security audit services
              and processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#faq" className="btn-primary">
                View FAQ
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to know about our security audit services
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: questionIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                          <button
                            onClick={() =>
                              toggleItem(categoryIndex, questionIndex)
                            }
                            className="w-full p-6 text-left flex items-center justify-between"
                          >
                            <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                              {item.question}
                            </h4>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-200 group-hover:text-primary-400 transition-colors" />
                            )}
                          </button>

                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <p className="text-gray-200 leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our team is here to help. Get in touch for personalized assistance
              and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/audit-request" className="btn-secondary">
                Request Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
