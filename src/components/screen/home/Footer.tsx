import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 pt-20 pb-10 relative border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-6">
              Abhishek Garg
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
              A Senior Software Developer specializing in building high-performance web applications and cloud architecture. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-sm tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">Home</a></li>
              <li><a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-sm tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Bangalore, India</li>
              <li className="text-gray-600 dark:text-gray-400">abhishek@example.com</li>
              <li className="text-gray-600 dark:text-gray-400">+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 Abhishek Garg. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js + Tailwind + Motion
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-cyan-500 text-white rounded-full shadow-lg z-50 shadow-cyan-500/20"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};
