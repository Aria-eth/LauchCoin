"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Code, Users, TrendingUp, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: 2847,
    suffix: '+',
    label: 'Audits Completed',
    description: 'Smart contracts secured',
    color: 'text-primary-400'
  },
  {
    icon: Code,
    value: 12.5,
    suffix: 'M+',
    label: 'Lines Reviewed',
    description: 'Code analyzed for vulnerabilities',
    color: 'text-blue-400'
  },
  {
    icon: TrendingUp,
    value: 8.2,
    prefix: '$',
    suffix: 'B',
    label: 'TVL Protected',
    description: 'Total value locked secured',
    color: 'text-green-400'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Projects trust our expertise',
    color: 'text-purple-400'
  },
  {
    icon: Award,
    value: 99.8,
    suffix: '%',
    label: 'Success Rate',
    description: 'Client satisfaction score',
    color: 'text-yellow-400'
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance',
    color: 'text-red-400'
  }
];

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  prefix = '', 
  suffix = '', 
  duration = 2,
  decimals = 0 
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentCount = progress * end;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-navy-900 to-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5"
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Numbers That Speak Volumes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our track record demonstrates our commitment to securing the blockchain ecosystem
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-navy-800/50 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.label.includes('Lines') || stat.label.includes('TVL') || stat.label.includes('Success') ? 1 : 0}
                    />
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Join hundreds of projects that trust FortKnox Security
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Ethereum', 'BSC', 'Polygon', 'Avalanche', 'Solana'].map((chain, index) => (
              <motion.div
                key={chain}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-500 font-medium hover:text-primary-400 transition-colors"
              >
                {chain}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};