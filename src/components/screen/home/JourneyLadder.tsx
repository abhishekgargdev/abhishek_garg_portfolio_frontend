import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Award, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';

const experiences = [
  {
    company: 'Global Tech Solutions',
    role: 'Senior Software Developer',
    period: '2023 - Present',
    description:
      'Leading the development of high-traffic MERN stack applications and architecting cloud solutions on AWS.',
    highlights: [
      'Improved system performance by 40%',
      'Mentored 10+ junior developers',
      'Implemented CI/CD pipelines',
    ],
    skills: ['React', 'Node.js', 'AWS', 'FastAPI'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    company: 'Innovate AI',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description:
      'Built scalable microservices using FastAPI and integrated AI models into production environments.',
    highlights: [
      'Redesigned Notion Add-on UI',
      'Reduced API latency by 30%',
      'Developed real-time chat feature',
    ],
    skills: ['FastAPI', 'Python', 'MongoDB', 'Vue.js'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    company: 'StartUp Hub',
    role: 'Junior Web Developer',
    period: '2019 - 2021',
    description:
      'Focused on frontend performance and responsive designs for diverse client projects.',
    highlights: [
      'Built 15+ responsive websites',
      'Optimized SEO rankings',
      'Collaborated in Agile teams',
    ],
    skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Express'],
    color: 'from-orange-400 to-red-500',
  },
];

export const JourneyLadder = () => {
  return (
    <section id="experience" className="overflow-hidden bg-gray-50 py-24 dark:bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white"
          >
            My Career <span className="text-cyan-500">Ladder</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            A visual climb through my professional journey and achievements.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col items-center md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Node */}
                <div className="absolute left-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 rounded-full border-4 border-cyan-500 bg-white md:block dark:bg-gray-900" />

                <div className="w-full px-4 md:w-1/2 md:px-12">
                  <GlassCard className="group border-l-4 border-l-cyan-500 p-8 transition-all duration-300 hover:shadow-2xl">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-lg bg-cyan-100 p-2 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                        <Building2 size={24} />
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="mb-1 text-2xl font-bold text-gray-900 transition-colors group-hover:text-cyan-500 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>

                    <div className="mb-6 space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3">
                          <Zap size={18} className="mt-1 flex-shrink-0 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
