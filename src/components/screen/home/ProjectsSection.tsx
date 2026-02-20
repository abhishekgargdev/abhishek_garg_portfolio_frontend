import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "E-Commerce Cloud Engine",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    description: "A high-performance e-commerce engine with real-time inventory management and AWS integration.",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    github: "#",
    live: "#",
    problem: "The client needed a platform that could handle 10k+ concurrent users with zero latency during flash sales.",
    solution: "Implemented Redis caching and AWS Auto-scaling groups to handle peak loads efficiently."
  },
  {
    id: 2,
    title: "AI Post Generator",
    category: "AI / Microservices",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "LinkedIn AI post generator with tone selection and automated scheduling features.",
    stack: ["FastAPI", "OpenAI", "Next.js", "Redis"],
    github: "#",
    live: "#",
    problem: "Manual content creation was time-consuming for digital marketers.",
    solution: "Integrated GPT-4 to generate context-aware posts based on user prompts and industry trends."
  },
  {
    id: 3,
    title: "Notion Add-on Revamp",
    category: "Browser Extension",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    description: "UI/UX overhaul of a popular productivity extension, improving user retention by 40%.",
    stack: ["JavaScript", "CSS3", "Chrome API"],
    github: "#",
    live: "#",
    problem: "The previous UI was cluttered and difficult for new users to navigate.",
    solution: "Simplified the interface using glassmorphic design principles and improved onboarding flow."
  },
  {
    id: 4,
    title: "HealthTrack Pro",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive health monitoring system with wearable integration.",
    stack: ["React Native", "Firebase", "HealthKit"],
    github: "#",
    live: "#",
    problem: "Users struggled to see consolidated health data from multiple devices.",
    solution: "Created a unified dashboard that syncs data from Apple Health and Google Fit in real-time."
  },
  {
    id: 5,
    title: "DevPortfolio CMS",
    category: "Web Tool",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic portfolio management dashboard for developers with full CMS capabilities.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    github: "#",
    live: "#",
    problem: "Developers needed an easy way to update their portfolio without redeploying code.",
    solution: "Built a headless CMS interface that updates the frontend dynamically via Supabase hooks."
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Featured <span className="text-cyan-500">Work</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects where I solved complex problems with elegant solutions.
          </p>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <GlassCard className="overflow-hidden p-0 border-none">
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors">
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((s) => (
                        <span key={s} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[10px] font-bold rounded text-gray-500 dark:text-gray-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-full">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <span className="text-cyan-500 font-bold uppercase tracking-widest mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">The Problem</h4>
                        <p className="text-gray-600 dark:text-gray-400">{selectedProject.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">The Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.stack.map((s) => (
                        <span key={s} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={selectedProject.live} className="flex-grow py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                      <a href={selectedProject.github} className="px-6 py-3 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors">
                        <Github size={20} />
                      </a>
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
