import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { User, Heart, Target, Coffee, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutMe = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] animate-blob absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-20 blur-2xl" />
            <div className="relative rotate-3 overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&q=80&w=800"
                alt="About Abhishek"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600 dark:bg-cyan-900/30">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">4+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              Beyond the <span className="text-cyan-500">Code</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                I'm a Senior Software Developer with a relentless passion for building scalable
                digital solutions. My journey started with a curiosity for how things work on the
                web, which evolved into a professional career specializing in the MERN stack,
                FastAPI, and Cloud Architecture.
              </p>
              <p>
                My philosophy is simple: write clean, maintainable code that solves real-world
                problems. I thrive in collaborative environments where I can mentor others and
                contribute to high-impact projects.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-pink-100 p-2 text-pink-600 dark:bg-pink-900/30">
                  <Heart size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Fitness Enthusiast
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30">
                  <Coffee size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Coffee & Tech</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-green-100 p-2 text-green-600 dark:bg-green-900/30">
                  <Target size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Goal Oriented</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-yellow-100 p-2 text-yellow-600 dark:bg-yellow-900/30">
                  <Zap size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Rapid Learner</span>
              </div>
            </div>

            <div className="mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gray-900 px-8 py-3 font-bold text-white shadow-lg dark:bg-white dark:text-gray-900"
              >
                Let's Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
