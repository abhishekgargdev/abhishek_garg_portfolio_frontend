'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { GlassCard } from '@/components/screen/home/shared/GlassCard';
import { ImageWithFallback } from '@/components/screen/home/shared/ImageWithFallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Cloud Engine',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    description: 'A high-performance e-commerce engine with real-time inventory management and AWS integration.',
    stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: '#',
    live: '#',
    problem: 'The client needed a platform that could handle 10k+ concurrent users with zero latency during flash sales.',
    solution: 'Implemented Redis caching and AWS Auto-scaling groups to handle peak loads efficiently.',
  },
  {
    id: 2,
    title: 'AI Post Generator',
    category: 'AI / Microservices',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'LinkedIn AI post generator with tone selection and automated scheduling features.',
    stack: ['FastAPI', 'OpenAI', 'Next.js', 'Redis'],
    github: '#',
    live: '#',
    problem: 'Manual content creation was time-consuming for digital marketers.',
    solution: 'Integrated GPT-4 to generate context-aware posts based on user prompts and industry trends.',
  },
  {
    id: 3,
    title: 'Notion Add-on Revamp',
    category: 'Browser Extension',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'UI/UX overhaul of a popular productivity extension, improving user retention by 40%.',
    stack: ['JavaScript', 'CSS3', 'Chrome API'],
    github: '#',
    live: '#',
    problem: 'The previous UI was cluttered and difficult for new users to navigate.',
    solution: 'Simplified the interface using glassmorphic design principles and improved onboarding flow.',
  },
  {
    id: 4,
    title: 'HealthTrack Pro',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive health monitoring system with wearable integration.',
    stack: ['React Native', 'Firebase', 'HealthKit'],
    github: '#',
    live: '#',
    problem: 'Users struggled to see consolidated health data from multiple devices.',
    solution: 'Created a unified dashboard that syncs data from Apple Health and Google Fit in real-time.',
  },
  {
    id: 5,
    title: 'DevPortfolio CMS',
    category: 'Web Tool',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Dynamic portfolio management dashboard for developers with full CMS capabilities.',
    stack: ['Next.js', 'Tailwind', 'Supabase'],
    github: '#',
    live: '#',
    problem: 'Developers needed an easy way to update their portfolio without redeploying code.',
    solution: 'Built a headless CMS interface that updates the frontend dynamically via Supabase hooks.',
  },
];

type Project = (typeof projects)[0];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Featured <span className="text-cyan-500">Work</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            A selection of projects where I solved complex problems with elegant solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <GlassCard className="h-full overflow-hidden border-none p-0">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-cyan-500">
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="mb-2 block text-xs font-bold tracking-widest text-cyan-500 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((s) => (
                      <Badge key={s} variant="secondary" className="bg-gray-100 text-gray-600">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden overflow-y-auto rounded-3xl bg-white shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/10 p-2 text-gray-700 transition-colors hover:bg-black/20"
                >
                  <X size={22} />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="h-56 md:h-full">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-10">
                    <span className="mb-2 block font-bold tracking-widest text-cyan-500 uppercase">
                      {selectedProject.category}
                    </span>
                    <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {selectedProject.title}
                    </h2>

                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="mb-1.5 font-bold text-gray-900">The Problem</h4>
                        <p className="text-sm text-gray-600">{selectedProject.problem}</p>
                      </div>
                      <div>
                        <h4 className="mb-1.5 font-bold text-gray-900">The Solution</h4>
                        <p className="text-sm text-gray-600">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedProject.stack.map((s) => (
                        <Badge key={s} className="bg-cyan-50 text-cyan-600 hover:bg-cyan-100">
                          {s}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        className="flex-1 bg-cyan-500 text-white hover:bg-cyan-600"
                      >
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};