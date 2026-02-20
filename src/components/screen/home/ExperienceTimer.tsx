import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Timer, Briefcase, Calendar, Clock } from 'lucide-react';

export const ExperienceTimer = () => {
  // Let's assume career start date: July 15, 2018
  const startDate = useMemo(() => new Date('2018-07-15T09:00:00'), []);

  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      // Simple calculation for years, months, days etc.
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      // Rough estimates for days, months, years
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365.25);
      const months = Math.floor((totalDays % 365.25) / 30.44);
      const days = Math.floor((totalDays % 365.25) % 30.44);

      setTimeLeft({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const timeUnits = [
    {
      label: 'Years',
      value: timeLeft.years,
      icon: <Briefcase className="h-5 w-5 text-cyan-500" />,
    },
    {
      label: 'Months',
      value: timeLeft.months,
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
    },
    { label: 'Days', value: timeLeft.days, icon: <Timer className="h-5 w-5 text-indigo-500" /> },
    { label: 'Hours', value: timeLeft.hours, icon: <Clock className="h-5 w-5 text-violet-500" /> },
    {
      label: 'Minutes',
      value: timeLeft.minutes,
      icon: <Clock className="h-5 w-5 text-purple-500" />,
    },
    {
      label: 'Seconds',
      value: timeLeft.seconds,
      icon: <Clock className="h-5 w-5 text-pink-500" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20" id="experience-timer">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl dark:from-cyan-400 dark:to-indigo-400">
              Professional Journey Pulse
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Real-time visualization of Abhishek's total professional contribution in the software
              engineering domain since 2018.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 text-center shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-500/30 dark:border-white/10 dark:bg-white/5">
                  {/* Subtle background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/50 p-3 dark:bg-white/10">
                      {unit.icon}
                    </div>
                    <div className="mb-1 text-3xl font-bold text-gray-800 tabular-nums md:text-4xl dark:text-white">
                      {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </div>
                    <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
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
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              Live Experience Counter
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
