"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, Shield, Zap, Star, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Audit',
    price: '$5,000',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Automated vulnerability scanning',
      'Manual code review (up to 1,000 LOC)',
      'Basic security report',
      '48-hour support response',
      'One revision round',
      'Gas optimization suggestions'
    ],
    notIncluded: [
      'Architecture review',
      'Post-audit support',
      'Emergency hotline'
    ],
    recommended: false,
    icon: Shield
  },
  {
    name: 'Professional Audit',
    price: '$15,000',
    description: 'Comprehensive security for production protocols',
    features: [
      'Everything in Basic',
      'Manual code review (up to 5,000 LOC)',
      'Detailed security report',
      'Architecture review',
      '24-hour support response',
      'Two revision rounds',
      'Post-audit support (30 days)',
      'Security best practices guide'
    ],
    notIncluded: [
      'Emergency hotline',
      'Continuous monitoring'
    ],
    recommended: true,
    icon: Star
  },
  {
    name: 'Enterprise Audit',
    price: 'Custom',
    description: 'Full-scale security for complex systems',
    features: [
      'Everything in Professional',
      'Unlimited code review',
      'Executive summary report',
      'Priority 12-hour response',
      'Unlimited revisions',
      'Post-audit support (90 days)',
      'Emergency security hotline',
      'Quarterly security reviews',
      'Dedicated security advisor',
      'Continuous monitoring'
    ],
    notIncluded: [],
    recommended: false,
    icon: Zap
  }
];

const comparisonFeatures = [
  { feature: 'Automated Scanning', basic: true, professional: true, enterprise: true },
  { feature: 'Manual Code Review', basic: '1,000 LOC', professional: '5,000 LOC', enterprise: 'Unlimited' },
  { feature: 'Security Report', basic: 'Basic', professional: 'Detailed', enterprise: 'Executive' },
  { feature: 'Architecture Review', basic: false, professional: true, enterprise: true },
  { feature: 'Support Response Time', basic: '48 hours', professional: '24 hours', enterprise: '12 hours' },
  { feature: 'Revision Rounds', basic: '1', professional: '2', enterprise: 'Unlimited' },
  { feature: 'Post-Audit Support', basic: false, professional: '30 days', enterprise: '90 days' },
  { feature: 'Emergency Hotline', basic: false, professional: false, enterprise: true },
  { feature: 'Continuous Monitoring', basic: false, professional: false, enterprise: true },
  { feature: 'Dedicated Advisor', basic: false, professional: false, enterprise: true }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'one-time' | 'retainer'>('one-time');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Transparent Pricing for
              <span className="block gradient-text">Every Project Size</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the security audit package that fits your needs. All plans include our industry-leading expertise and commitment to your project's success.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-navy-800/50 rounded-full">
              <button
                onClick={() => setBillingCycle('one-time')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'one-time'
                    ? 'bg-primary-500 text-navy-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                One-Time Audit
              </button>
              <button
                onClick={() => setBillingCycle('retainer')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'retainer'
                    ? 'bg-primary-500 text-navy-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Retainer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.recommended ? 'lg:-mt-8' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="px-4 py-1 bg-primary-500 text-navy-900 text-sm font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.recommended
                    ? 'bg-gradient-to-br from-primary-500/20 to-primary-600/20 border-2 border-primary-500'
                    : 'card-gradient border border-primary-500/10'
                }`}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6">
                    <plan.icon className="w-8 h-8 text-primary-400" />
                  </div>

                  {/* Plan Name & Price */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400 ml-2">
                        {billingCycle === 'one-time' ? 'one-time' : '/month'}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-8">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/audit-request"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                      plan.recommended
                        ? 'bg-primary-500 text-navy-900 hover:bg-primary-400'
                        : 'bg-navy-800 text-white hover:bg-navy-700'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-navy-900/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Compare our audit packages to find the perfect fit for your security needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Features</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Basic</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <motion.tr
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-800 hover:bg-navy-900/30 transition-colors"
                  >
                    <td className="py-4 px-4 text-gray-300">{item.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof item.basic === 'boolean' ? (
                        item.basic ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300">{item.basic}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof item.professional === 'boolean' ? (
                        item.professional ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300">{item.professional}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300">{item.enterprise}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long does an audit typically take?',
                a: 'Basic audits take 3-5 business days, Professional audits 1-2 weeks, and Enterprise audits 2-4 weeks depending on complexity.'
              },
              {
                q: 'What if you find critical vulnerabilities?',
                a: 'We immediately notify you of any critical findings and work with your team to address them before the final report.'
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment options including 50/50 split and monthly payment plans for larger audits.'
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely! You can upgrade your audit package at any time and only pay the difference.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Still have questions about our pricing?
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}