'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, Target, Coffee, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/components/screen/home/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';

const traits = [
  { icon: Heart, label: 'Fitness Enthusiast', bg: 'bg-pink-50', color: 'text-pink-600' },
  { icon: Coffee, label: 'Coffee & Tech', bg: 'bg-blue-50', color: 'text-blue-600' },
  { icon: Target, label: 'Goal Oriented', bg: 'bg-green-50', color: 'text-green-600' },
  { icon: Zap, label: 'Rapid Learner', bg: 'bg-yellow-50', color: 'text-yellow-600' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0 sm:rotate-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&q=80&w=800"
                alt="About Abhishek"
                className="h-72 w-full object-cover sm:h-96 md:h-[500px]"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-right-6 sm:-bottom-6 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="rounded-xl bg-cyan-50 p-2 text-cyan-600 sm:p-3">
                  <User size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="text-lg font-bold text-gray-900 sm:text-xl">4+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Beyond the <span className="text-cyan-500">Code</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                I&apos;m a Senior Software Developer with a relentless passion for building scalable
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

            <div className="mt-8 grid grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, label, bg, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`rounded-lg ${bg} p-2 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                asChild
              >
                <a href="#contact">Let&apos;s Chat</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};