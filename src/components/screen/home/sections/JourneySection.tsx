'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Zap } from 'lucide-react';
import { GlassCard } from '@/components/screen/home/shared/GlassCard';
import { Badge } from '@/components/ui/badge';

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
  },
  {
    company: 'StartUp Hub',
    role: 'Junior Web Developer',
    period: '2019 - 2021',
    description: 'Focused on frontend performance and responsive designs for diverse client projects.',
    highlights: [
      'Built 15+ responsive websites',
      'Optimized SEO rankings',
      'Collaborated in Agile teams',
    ],
    skills: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Express'],
  },
];

export const JourneySection = () => {
  return (
    <section id="experience" className="overflow-hidden bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl"
          >
            My Career <span className="text-cyan-500">Ladder</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            A visual climb through my professional journey and achievements.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line - hidden on mobile */}
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:block" />

          <div className="space-y-10 md:space-y-12">
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
                <div className="absolute left-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-cyan-500 bg-white md:block" />

                <div className="w-full px-4 md:w-1/2 md:px-10">
                  <GlassCard className="border-l-4 border-l-cyan-500 p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <div className="rounded-lg bg-cyan-50 p-2 text-cyan-600">
                        <Building2 size={22} />
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Calendar size={15} />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mb-4 text-base font-semibold text-gray-700">{exp.company}</p>
                    <p className="mb-5 leading-relaxed text-gray-600">{exp.description}</p>

                    <div className="mb-5 space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <Zap size={16} className="mt-0.5 shrink-0 text-yellow-500" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 hover:bg-cyan-50 hover:text-cyan-600"
                        >
                          {skill}
                        </Badge>
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