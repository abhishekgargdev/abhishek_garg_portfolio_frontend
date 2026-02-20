import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Trophy } from 'lucide-react';
import { GlassCard } from './GlassCard';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    org: 'Amazon Web Services',
    date: 'Dec 2024',
    icon: <Trophy className="text-orange-500" />,
  },
  {
    title: 'Full Stack MERN Developer',
    org: 'Meta (via Coursera)',
    date: 'Aug 2023',
    icon: <Award className="text-blue-500" />,
  },
  {
    title: 'Advanced Python & FastAPI',
    org: 'Udemy',
    date: 'Mar 2023',
    icon: <CheckCircle2 className="text-green-500" />,
  },
  {
    title: 'Problem Solving (Intermediate)',
    org: 'HackerRank',
    date: 'Jan 2024',
    icon: <Trophy className="text-yellow-500" />,
  },
];

export const CertificatesSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
          >
            Certificates & <span className="text-cyan-500">Achievements</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Milestones in my continuous learning journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:scale-105">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-transform group-hover:rotate-12 dark:bg-gray-800">
                  {React.cloneElement(cert.icon as React.ReactElement)}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mb-1 text-sm font-semibold text-cyan-500">{cert.org}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
