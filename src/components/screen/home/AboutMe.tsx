import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { User, Heart, Target, Coffee, Zap } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] animate-blob opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&q=80&w=800"
                alt="About Abhishek"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600">
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Beyond the <span className="text-cyan-500">Code</span>
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p>
                I'm a Senior Software Developer with a relentless passion for building scalable digital solutions. My journey started with a curiosity for how things work on the web, which evolved into a professional career specializing in the MERN stack, FastAPI, and Cloud Architecture.
              </p>
              <p>
                My philosophy is simple: write clean, maintainable code that solves real-world problems. I thrive in collaborative environments where I can mentor others and contribute to high-impact projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600">
                  <Heart size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Fitness Enthusiast</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  <Coffee size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Coffee & Tech</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                  <Target size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Goal Oriented</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600">
                  <Zap size={20} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Rapid Learner</span>
              </div>
            </div>

            <div className="mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold shadow-lg"
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
