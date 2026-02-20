'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-100 bg-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
              Abhishek Garg
            </div>
            <p className="mb-8 max-w-sm leading-relaxed text-gray-600">
              A Senior Software Developer specializing in building high-performance web applications
              and cloud architecture. Let&apos;s build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-xl border border-gray-200 p-3 text-gray-500 transition-colors hover:border-cyan-500 hover:text-cyan-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-gray-900 uppercase">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-cyan-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-gray-900 uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-600">Bangalore, India</li>
              <li className="text-gray-600">abhishek@example.com</li>
              <li className="text-gray-600">+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">© 2025 Abhishek Garg. All rights reserved.</p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Built with <Heart size={14} className="fill-red-500 text-red-500" /> using Next.js +
            Tailwind + Motion
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
        className="fixed right-6 bottom-24 z-50 rounded-full bg-cyan-500 p-3 text-white shadow-lg shadow-cyan-500/20 sm:right-8 sm:bottom-8"
      >
        <ChevronUp size={22} />
      </motion.button>
    </footer>
  );
};