"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, MessageCircle } from "lucide-react";
import { TeamMember } from "@/types";

/* --------------------------------------------------------------------------
   Key fix: <Image> with "fill" needs its parent to have an explicit size.   
   We now wrap each <Image> in a div with w-full and aspect-square to ensure
   proper dimensions, so the photos actually render.                         
   ------------------------------------------------------------------------*/

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex",
    role: "Co-Founder & Lead Security Researcher",
    bio: "Former security lead at major DeFi protocols with 15+ years in cybersecurity. Expert in smart contract vulnerabilities and blockchain security architecture.",
    image: "/alex-prof.png",
    social: {
      telegram: "https://t.me/AlexFKS_1998",
      github: "https://github.com/FortKnox-sec",
    },
  },
  {
    id: "2",
    name: "Mia",
    role: "Co-Founder & Lead Security Researcher",
    bio: "Specializes in DeFi protocol security with expertise in EVM vulnerabilities. Author of multiple security papers and former blockchain researcher.",
    image: "/mia-prof.png",
    social: {
      telegram: "https://t.me/Mia_FKS",
      github: "https://github.com/FortKnox-sec",
    },
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-900/50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
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
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our core team consists of world-class security researchers and
            blockchain experts dedicated to securing the DeFi ecosystem
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Photo wrapper with explicit size */}
              <div className="relative w-full aspect-square rounded-full shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 [mask-image:radial-gradient(circle,white_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle,white_40%,transparent_100%)] [mask-size:100%_100%]"
                  priority={index === 0}
                />

                {/* Social links overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social?.telegram && (
                    <a
                      href={member.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-gray-200 hover:text-primary-400 hover:bg-navy-700/80 transition-all"
                      aria-label={`${member.name} Telegram`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-navy-800/80 backdrop-blur-sm rounded-lg text-gray-200 hover:text-primary-400 hover:bg-navy-700/80 transition-all"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Member content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {member.bio}
                </p>
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
          <p className="text-gray-200 mb-4">
            Want to join our mission to secure the blockchain ecosystem?
          </p>
          <a
            href="https://t.me/FortKnox_sec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Get in touch via Telegram
            <MessageCircle className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
