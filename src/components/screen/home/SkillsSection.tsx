import React from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { GlassCard } from './GlassCard';

const skillsData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 95, fullMark: 100 },
  { subject: 'Database', A: 85, fullMark: 100 },
  { subject: 'Cloud/DevOps', A: 80, fullMark: 100 },
  { subject: 'System Design', A: 85, fullMark: 100 },
  { subject: 'Soft Skills', A: 90, fullMark: 100 },
];

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React / Next.js", level: 90, years: 4, icon: "react" },
      { name: "TypeScript", level: 85, years: 3, icon: "typescript" },
      { name: "Tailwind CSS", level: 95, years: 4, icon: "tailwindcss" },
      { name: "Redux / Zustand", level: 80, years: 3, icon: "redux" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js / Express", level: 95, years: 4, icon: "nodejs" },
      { name: "FastAPI / Python", level: 85, years: 3, icon: "python" },
      { name: "GraphQL", level: 75, years: 2, icon: "graphql" },
      { name: "Socket.io", level: 80, years: 3, icon: "socketio" }
    ]
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 90, years: 4, icon: "mongodb" },
      { name: "PostgreSQL / MySQL", level: 85, years: 3, icon: "mysql" },
      { name: "AWS S3 / EC2 / Lambda", level: 80, years: 3, icon: "amazonwebservices" },
      { name: "Docker", level: 75, years: 2, icon: "docker" }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Technical <span className="text-cyan-500">Expertise</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive look at my proficiency across different technology stacks and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] flex items-center justify-center"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid stroke="#94a3b8" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Abhishek"
                  dataKey="A"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((skill, sIdx) => (
                    <GlassCard 
                      key={skill.name} 
                      delay={sIdx * 0.05}
                      className="p-4 flex items-center gap-4 hover:border-cyan-500/50 group/skill cursor-default"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover/skill:bg-cyan-500/10 transition-colors"
                      >
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                          }}
                        />
                      </motion.div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-cyan-500 transition-colors">{skill.name}</span>
                          <span className="text-xs text-cyan-500 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (sIdx * 0.1) }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          />
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Growth Timeline Teaser */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 italic"
          >
            Continuously learning and evolving. Exploring System Architecture & Web3 in 2025.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
