"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "@/styles/layout/Navigation.module.css";

const navItems = [
  // { label: "Home", href: "/" },
  { label: "Launch Time", href: "/#launch-time" },
  { label: "Utilities", href: "/#utilities" },
  { label: "Tokenomics", href: "/#tokenomics" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "How to Buy", href: "/#how-to-buy" },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(styles.nav, isScrolled && styles.navScrolled)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
            <Logo size="md" className="sm:scale-100 scale-90" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Buy Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm xl:text-base"
            >
              Buy on pump.fun
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-primary-400 transition-colors p-2 -mr-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-navy-900/95 backdrop-blur-lg border-t border-primary-500/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 text-gray-300 hover:text-primary-400 hover:bg-navy-800/50 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-primary-500/10 mt-4">
                <a
                  href="https://pump.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy on pump.fun
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
