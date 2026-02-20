import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Trophy } from 'lucide-react';
import { GlassCard } from './GlassCard';

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    date: "Dec 2024",
    icon: <Trophy className="text-orange-500" />
  },
  {
    title: "Full Stack MERN Developer",
    org: "Meta (via Coursera)",
    date: "Aug 2023",
    icon: <Award className="text-blue-500" />
  },
  {
    title: "Advanced Python & FastAPI",
    org: "Udemy",
    date: "Mar 2023",
    icon: <CheckCircle2 className="text-green-500" />
  },
  {
    title: "Problem Solving (Intermediate)",
    org: "HackerRank",
    date: "Jan 2024",
    icon: <Trophy className="text-yellow-500" />
  }
];

export const CertificatesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Certificates & <span className="text-cyan-500">Achievements</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones in my continuous learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  {React.cloneElement(cert.icon as React.ReactElement)}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-sm text-cyan-500 font-semibold mb-1">{cert.org}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
