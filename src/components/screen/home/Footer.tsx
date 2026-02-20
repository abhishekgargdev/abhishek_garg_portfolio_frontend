import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-100 bg-white pt-20 pb-10 dark:border-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
              Abhishek Garg
            </div>
            <p className="mb-8 max-w-sm leading-relaxed text-gray-600 dark:text-gray-400">
              A Senior Software Developer specializing in building high-performance web applications
              and cloud architecture. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-500">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-500">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-gray-900 uppercase dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-gray-900 uppercase dark:text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Bangalore, India</li>
              <li className="text-gray-600 dark:text-gray-400">abhishek@example.com</li>
              <li className="text-gray-600 dark:text-gray-400">+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-8 md:flex-row dark:border-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2025 Abhishek Garg. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
            Built with <Heart size={14} className="fill-red-500 text-red-500" /> using Next.js +
            Tailwind + Motion
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-8 bottom-8 z-50 rounded-full bg-cyan-500 p-4 text-white shadow-lg shadow-cyan-500/20"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};
