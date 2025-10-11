"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Code,
  Search,
  Zap,
  Lock,
  Eye,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Star component for the galactic background
const Star: React.FC<{ className?: string; delay?: number }> = ({
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

const services = [
  {
    icon: Shield,
    title: "Smart Contract Audit",
    description:
      "Comprehensive security audits of smart contracts to identify vulnerabilities, gas optimization opportunities, and best practice violations.",
    features: [
      "Static and dynamic analysis",
      "Manual code review",
      "Automated vulnerability scanning",
      "Gas optimization recommendations",
      "Security best practices audit",
    ],
    duration: "2-4 weeks",
    href: "/services/smart-contract-audit",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description:
      "Real-world attack simulation to test your blockchain infrastructure, APIs, and smart contracts against sophisticated threats.",
    features: [
      "Black-box and white-box testing",
      "API security assessment",
      "Infrastructure penetration testing",
      "Social engineering simulation",
      "Advanced persistent threat simulation",
    ],
    duration: "1-3 weeks",
    href: "/services/penetration-testing",
  },
  {
    icon: Code,
    title: "Code Review",
    description:
      "Focused code analysis for specific components, functions, or security concerns without a full audit.",
    features: [
      "Targeted vulnerability assessment",
      "Code quality review",
      "Architecture analysis",
      "Security pattern validation",
      "Performance optimization review",
    ],
    duration: "3-7 days",
    href: "/services/code-review",
  },
  {
    icon: Zap,
    title: "Security Consulting",
    description:
      "Strategic security guidance for blockchain projects, including architecture design and security strategy development.",
    features: [
      "Security architecture design",
      "Threat modeling",
      "Security strategy development",
      "Compliance guidance",
      "Incident response planning",
    ],
    duration: "Ongoing",
    href: "/services/security-consulting",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Discovery",
    description:
      "Understanding your project requirements and security objectives",
  },
  {
    icon: Search,
    title: "Analysis",
    description:
      "Comprehensive security assessment using industry-leading tools",
  },
  {
    icon: CheckCircle,
    title: "Reporting",
    description: "Detailed findings with actionable recommendations and fixes",
  },
  {
    icon: Shield,
    title: "Support",
    description: "Ongoing support and guidance for implementation",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
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
          <Star className="w-2 h-2 top-20 left-10" delay={0} />
          <Star className="w-1.5 h-1.5 top-32 right-20" delay={0.5} />
          <Star className="w-2.5 h-2.5 top-48 left-1/4" delay={1} />
          <Star className="w-1 h-1 top-64 right-1/3" delay={1.5} />
          <Star className="w-2 h-2 top-80 left-1/2" delay={2} />
          <Star className="w-1.5 h-1.5 top-96 right-1/4" delay={2.5} />
          <Star className="w-2 h-2 top-12 left-1/3" delay={0.8} />
          <Star className="w-2.5 h-2.5 top-28 right-1/3" delay={1.2} />
          <Star className="w-1.5 h-1.5 top-44 left-2/3" delay={1.6} />
          <Star className="w-2 h-2 top-52 right-1/2" delay={2.1} />
          <Star className="w-2.5 h-2.5 top-68 left-1/6" delay={2.8} />
          <Star className="w-1.5 h-1.5 top-76 right-2/3" delay={3.2} />
          <Star className="w-2 h-2 top-88 left-1/4" delay={3.6} />
          <Star className="w-2.5 h-2.5 top-104 right-1/6" delay={4.0} />

          {/* Medium stars */}
          <Star className="w-1 h-1 top-16 right-10" delay={0.3} />
          <Star className="w-1 h-1 top-40 left-1/3" delay={0.8} />
          <Star className="w-1 h-1 top-56 right-1/2" delay={1.3} />
          <Star className="w-1 h-1 top-72 left-2/3" delay={1.8} />
          <Star className="w-1 h-1 top-88 right-2/3" delay={2.3} />
          <Star className="w-1 h-1 top-8 left-1/2" delay={0.6} />
          <Star className="w-1 h-1 top-24 right-1/4" delay={1.0} />
          <Star className="w-1 h-1 top-36 left-1/5" delay={1.4} />
          <Star className="w-1 h-1 top-48 right-1/5" delay={1.8} />
          <Star className="w-1 h-1 top-60 left-3/4" delay={2.2} />
          <Star className="w-1 h-1 top-84 right-1/4" delay={2.6} />
          <Star className="w-1 h-1 top-92 left-2/3" delay={3.0} />
          <Star className="w-1 h-1 top-108 right-1/2" delay={3.4} />

          {/* Small stars */}
          <Star className="w-0.5 h-0.5 top-24 left-20" delay={0.2} />
          <Star className="w-0.5 h-0.5 top-36 right-16" delay={0.7} />
          <Star className="w-0.5 h-0.5 top-52 left-3/4" delay={1.2} />
          <Star className="w-0.5 h-0.5 top-68 right-1/6" delay={1.7} />
          <Star className="w-0.5 h-0.5 top-84 left-1/6" delay={2.2} />
          <Star className="w-0.5 h-0.5 top-100 right-3/4" delay={2.7} />
          <Star className="w-0.5 h-0.5 top-4 left-1/4" delay={0.4} />
          <Star className="w-0.5 h-0.5 top-16 right-1/3" delay={0.9} />
          <Star className="w-0.5 h-0.5 top-32 left-1/6" delay={1.3} />
          <Star className="w-0.5 h-0.5 top-44 right-3/4" delay={1.7} />
          <Star className="w-0.5 h-0.5 top-64 left-1/2" delay={2.1} />
          <Star className="w-0.5 h-0.5 top-80 right-1/5" delay={2.5} />
          <Star className="w-0.5 h-0.5 top-96 left-1/3" delay={2.9} />
          <Star className="w-0.5 h-0.5 top-112 right-1/4" delay={3.3} />

          {/* Additional stars for depth */}
          <Star className="w-1.5 h-1.5 top-28 left-1/2" delay={0.4} />
          <Star className="w-1 h-1 top-44 right-1/4" delay={0.9} />
          <Star className="w-2 h-2 top-60 left-1/5" delay={1.4} />
          <Star className="w-1 h-1 top-76 right-1/5" delay={1.9} />
          <Star className="w-1.5 h-1.5 top-92 left-3/4" delay={2.4} />
          <Star className="w-1.5 h-1.5 top-6 left-2/3" delay={0.7} />
          <Star className="w-1 h-1 top-20 right-1/2" delay={1.1} />
          <Star className="w-2 h-2 top-32 left-1/4" delay={1.5} />
          <Star className="w-1 h-1 top-56 right-2/3" delay={1.9} />
          <Star className="w-1.5 h-1.5 top-72 left-1/3" delay={2.3} />
          <Star className="w-1 h-1 top-88 right-1/6" delay={2.7} />
          <Star className="w-2 h-2 top-104 left-2/3" delay={3.1} />

          {/* Extra bright stars */}
          <Star
            className="w-3 h-3 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            delay={0}
          />
          <Star className="w-2.5 h-2.5 top-30 right-1/3" delay={1.5} />
          <Star className="w-3 h-3 top-70 left-1/4" delay={3.0} />
          <Star className="w-2.5 h-2.5 top-90 right-1/2" delay={4.5} />
        </div>

        <div className="absolute inset-0 hero-pattern opacity-5" />

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
                <Shield className="w-4 h-4" />
                Comprehensive Security Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
            >
              Our
              <span className="block gradient-text">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Comprehensive blockchain security solutions to protect your DeFi
              protocols, smart contracts, and digital assets from
              vulnerabilities and exploits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Security Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of security services designed
              to protect your blockchain projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-gradient p-8 rounded-2xl backdrop-blur-xl hover:scale-105 transition-all duration-300 text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 lg:mb-0">
                    <service.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 text-center lg:text-left">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 mb-6 text-center lg:text-left">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-center lg:text-left">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-200 justify-center lg:justify-start"
                          >
                            <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between gap-4 lg:gap-0">
                      <div className="flex items-center gap-2 text-gray-200">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <Link
                        href={service.href}
                        className="btn-secondary flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A systematic approach to ensuring your blockchain security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
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
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Secure Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get started with a comprehensive security audit and protect your
              blockchain assets today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit-request" className="btn-primary">
                Request Audit
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
