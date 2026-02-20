import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Download, Briefcase, Code } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const roles = [
  'MERN Stack Expert',
  'FastAPI Specialist',
  'AWS Architect',
  'Problem Solver',
  'Tech Mentor',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-semibold tracking-wider text-cyan-500 uppercase dark:text-cyan-400"
          >
            Welcome to my digital space
          </motion.p>
          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-7xl dark:text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Abhishek Garg
            </span>
          </h1>
          <div className="mb-8 h-12">
            <p className="flex items-center text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
              <span className="mr-2">&gt;</span>
              {displayText}
              <span className="ml-1 h-8 w-1 animate-pulse bg-cyan-500" />
            </p>
          </div>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Crafting high-performance web applications with modern tech stacks. Specialized in
            building scalable backends and pixel-perfect frontends.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/20"
            >
              <Briefcase size={20} />
              Explore Journey
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <Code size={20} />
              View Projects
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-bold text-white dark:bg-white dark:text-gray-900"
            >
              <Download size={20} />
              Resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1671450960874-0903baf942c5?auto=format&fit=crop&q=80&w=800"
                alt="Abhishek Garg"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="h-8 w-8"
                alt="React"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              className="absolute top-1/2 -left-8 rounded-xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                className="h-8 w-8"
                alt="Node.js"
              />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute right-1/4 -bottom-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                className="h-8 w-8"
                alt="AWS"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
