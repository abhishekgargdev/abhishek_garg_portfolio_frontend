import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Award, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';

const experiences = [
  {
    company: "Global Tech Solutions",
    role: "Senior Software Developer",
    period: "2023 - Present",
    description: "Leading the development of high-traffic MERN stack applications and architecting cloud solutions on AWS.",
    highlights: ["Improved system performance by 40%", "Mentored 10+ junior developers", "Implemented CI/CD pipelines"],
    skills: ["React", "Node.js", "AWS", "FastAPI"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    company: "Innovate AI",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built scalable microservices using FastAPI and integrated AI models into production environments.",
    highlights: ["Redesigned Notion Add-on UI", "Reduced API latency by 30%", "Developed real-time chat feature"],
    skills: ["FastAPI", "Python", "MongoDB", "Vue.js"],
    color: "from-purple-400 to-pink-500"
  },
  {
    company: "StartUp Hub",
    role: "Junior Web Developer",
    period: "2019 - 2021",
    description: "Focused on frontend performance and responsive designs for diverse client projects.",
    highlights: ["Built 15+ responsive websites", "Optimized SEO rankings", "Collaborated in Agile teams"],
    skills: ["JavaScript", "HTML/CSS", "Bootstrap", "Express"],
    color: "from-orange-400 to-red-500"
  }
];

export const JourneyLadder = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-black/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Career <span className="text-cyan-500">Ladder</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A visual climb through my professional journey and achievements.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-cyan-500 rounded-full z-10 hidden md:block" />

                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <GlassCard className="p-8 hover:shadow-2xl transition-all duration-300 group border-l-4 border-l-cyan-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                        <Building2 size={24} />
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3">
                          <Zap size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-semibold rounded-full text-gray-600 dark:text-gray-400"
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
