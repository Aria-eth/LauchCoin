"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Code, 
  Search, 
  Lock, 
  Zap, 
  FileCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Smart Contract Audit',
    description: 'Comprehensive security analysis of your smart contracts to identify vulnerabilities and ensure robust protection.',
    features: [
      'Manual code review',
      'Automated testing',
      'Gas optimization',
      'Detailed report'
    ],
    color: 'from-primary-400 to-primary-600',
    href: '/services/smart-contract-audit'
  },
  {
    icon: Search,
    title: 'Security Consulting',
    description: 'Expert guidance on blockchain security best practices and architecture design for maximum protection.',
    features: [
      'Architecture review',
      'Risk assessment',
      'Security roadmap',
      'Team training'
    ],
    color: 'from-blue-400 to-blue-600',
    href: '/services/security-consulting'
  },
  {
    icon: Zap,
    title: 'Penetration Testing',
    description: 'Simulated attacks on your systems to identify vulnerabilities before malicious actors can exploit them.',
    features: [
      'Black box testing',
      'White box testing',
      'Social engineering',
      'Incident response'
    ],
    color: 'from-purple-400 to-purple-600',
    href: '/services/penetration-testing'
  },
  {
    icon: FileCheck,
    title: 'Code Review',
    description: 'Thorough examination of your codebase to ensure quality, security, and adherence to best practices.',
    features: [
      'Line-by-line review',
      'Best practices check',
      'Performance analysis',
      'Documentation review'
    ],
    color: 'from-green-400 to-green-600',
    href: '/services/code-review'
  }
];

export const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
              <div className="absolute inset-0 hero-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protecting your blockchain infrastructure with industry-leading security services tailored to your specific needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={service.href} className="block h-full">
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/50 border border-primary-500/10 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                      <div className="w-full h-full bg-navy-900 rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/services" className="btn-primary flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-gray-400">
              or{' '}
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 underline transition-colors">
                discuss custom solutions
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};