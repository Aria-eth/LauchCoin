"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMember } from '@/types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    role: 'Founder & CEO',
    bio: 'Former security lead at major DeFi protocols. 15+ years in cybersecurity.',
    image: 'https://i.pravatar.cc/300?img=11',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '2',
    name: 'Sarah Rodriguez',
    role: 'Head of Security',
    bio: 'Expert in smart contract vulnerabilities. Author of multiple security papers.',
    image: 'https://i.pravatar.cc/300?img=20',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '3',
    name: 'Alex Thompson',
    role: 'Lead Auditor',
    bio: 'Discovered critical vulnerabilities in 50+ protocols. Solidity expert.',
    image: 'https://i.pravatar.cc/300?img=12',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '4',
    name: 'Emily Zhang',
    role: 'Senior Security Engineer',
    bio: 'Specializes in DeFi protocol architecture. Former blockchain researcher.',
    image: 'https://i.pravatar.cc/300?img=21',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'Security Researcher',
    bio: 'White hat hacker with focus on EVM security. Bug bounty specialist.',
    image: 'https://i.pravatar.cc/300?img=13',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '6',
    name: 'Lisa Johnson',
    role: 'Technical Advisor',
    bio: 'Former CTO at leading crypto exchange. 20+ years in software security.',
    image: 'https://i.pravatar.cc/300?img=22',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Meet the Security Experts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team consists of world-class security researchers, auditors, and blockchain experts dedicated to securing the DeFi ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800/50 to-purple-900/30 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                  
                  {/* Social Links - Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-primary-400 hover:bg-navy-700/80 transition-all"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-primary-400 hover:bg-navy-700/80 transition-all"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social?.github && (
                      <a
                        href={member.social.github}
                        className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-gray-400 hover:text-primary-400 hover:bg-navy-700/80 transition-all"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Want to join our mission to secure the blockchain ecosystem?
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            View Open Positions
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};