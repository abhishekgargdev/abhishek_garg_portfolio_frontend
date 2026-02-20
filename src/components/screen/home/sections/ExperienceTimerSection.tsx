'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Timer, Briefcase, Calendar, Clock } from 'lucide-react';

const CAREER_START = new Date('2018-07-15T09:00:00');

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = now.getTime() - CAREER_START.getTime();
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  return {
    years: Math.floor(totalDays / 365.25),
    months: Math.floor((totalDays % 365.25) / 30.44),
    days: Math.floor((totalDays % 365.25) % 30.44),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const ExperienceTimerSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = useMemo(
    () => [
      { label: 'Years', value: timeLeft.years, icon: <Briefcase className="h-5 w-5 text-cyan-500" /> },
      { label: 'Months', value: timeLeft.months, icon: <Calendar className="h-5 w-5 text-blue-500" /> },
      { label: 'Days', value: timeLeft.days, icon: <Timer className="h-5 w-5 text-indigo-500" /> },
      { label: 'Hours', value: timeLeft.hours, icon: <Clock className="h-5 w-5 text-violet-500" /> },
      { label: 'Minutes', value: timeLeft.minutes, icon: <Clock className="h-5 w-5 text-purple-500" /> },
      { label: 'Seconds', value: timeLeft.seconds, icon: <Clock className="h-5 w-5 text-pink-500" /> },
    ],
    [timeLeft],
  );

  return (
    <section className="relative overflow-hidden py-20" id="experience-timer">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Professional Journey Pulse
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Real-time visualization of Abhishek&apos;s total professional contribution since 2018.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 p-4 text-center shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-500/30 sm:p-6">
                  <div className="relative z-10">
                    <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-gray-50 p-2 sm:mb-4 sm:p-3">
                      {unit.icon}
                    </div>
                    <div className="mb-1 text-2xl font-bold text-gray-800 tabular-nums sm:text-3xl md:text-4xl">
                      {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </div>
                    <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                      {unit.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 text-center sm:mt-12"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              Live Experience Counter
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};