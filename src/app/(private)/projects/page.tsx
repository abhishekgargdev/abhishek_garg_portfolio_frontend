'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TagInput } from '@/components/screen/TagInput';
import { FileUpload } from '@/components/screen/FileUpload';
import { FormCard } from '@/components/screen/FormCard';

interface Project {
  id: string;
  title: string;
  tagline: string;
  thumbnail: File | null;
  description: string;
  features: string[];
  techStack: string[];
  githubLink: string;
  liveLink: string;
  role: string;
  category: string;
}

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      tagline: 'Full-stack online shopping solution',
      thumbnail: null,
      description: 'Built a scalable e-commerce platform with React, Node.js, and MongoDB',
      features: ['Payment Integration', 'Admin Dashboard', 'Real-time Inventory'],
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/username/project',
      liveLink: 'https://project-demo.com',
      role: 'Full Stack Developer',
      category: 'Full Stack',
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<string | null>(projects[0]?.id || null);
  const [showPreview, setShowPreview] = useState(false);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      tagline: '',
      thumbnail: null,
      description: '',
      features: [],
      techStack: [],
      githubLink: '',
      liveLink: '',
      role: '',
      category: '',
    };
    setProjects([...projects, newProject]);
    setSelectedProject(newProject.id);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateProject = (id: string, field: keyof Project, value: any) => {
    setProjects(projects.map((proj) => (proj.id === id ? { ...proj, [field]: value } : proj)));
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id));
    if (selectedProject === id) {
      setSelectedProject(projects[0]?.id || null);
    }
  };

  const currentProject = projects.find((p) => p.id === selectedProject);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Projects Showcase</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your portfolio projects</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Grid
          </motion.button>
          <motion.button
            onClick={addProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Project Cards Preview</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 h-32 w-full rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                <h4 className="mb-1 text-white">{project.title || 'Untitled Project'}</h4>
                <p className="mb-3 text-sm text-slate-400">{project.tagline || 'No tagline'}</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Project List Sidebar */}
        <div className="lg:col-span-1">
          <FormCard>
            <h3 className="mb-4 text-white">Projects</h3>
            <div className="space-y-2">
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full rounded-xl px-4 py-3 text-left transition-all ${
                    selectedProject === project.id
                      ? 'border border-cyan-500/30 bg-cyan-500/20 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <p className="truncate text-sm">{project.title || 'New Project'}</p>
                </motion.button>
              ))}
            </div>
          </FormCard>
        </div>

        {/* Project Form */}
        <div className="lg:col-span-3">
          {currentProject && (
            <FormCard>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl text-white">Edit Project</h3>
                <motion.button
                  onClick={() => deleteProject(currentProject.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                >
                  <Trash2 className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Project Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentProject.title}
                      onChange={(e) => updateProject(currentProject.id, 'title', e.target.value)}
                      placeholder="e.g., E-Commerce Platform"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Tagline</label>
                    <input
                      type="text"
                      value={currentProject.tagline}
                      onChange={(e) => updateProject(currentProject.id, 'tagline', e.target.value)}
                      placeholder="One-line summary"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <FileUpload
                  label="Thumbnail Image"
                  accept="image/*"
                  onChange={(file) => updateProject(currentProject.id, 'thumbnail', file)}
                />

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Description</label>
                  <textarea
                    value={currentProject.description}
                    onChange={(e) =>
                      updateProject(currentProject.id, 'description', e.target.value)
                    }
                    placeholder="Describe the project in detail..."
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Key Features</label>
                  <TagInput
                    tags={currentProject.features}
                    onChange={(features) => updateProject(currentProject.id, 'features', features)}
                    placeholder="Add feature..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Tech Stack</label>
                  <TagInput
                    tags={currentProject.techStack}
                    onChange={(techStack) =>
                      updateProject(currentProject.id, 'techStack', techStack)
                    }
                    placeholder="Add technology..."
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">GitHub Link</label>
                    <div className="relative">
                      <input
                        type="url"
                        value={currentProject.githubLink}
                        onChange={(e) =>
                          updateProject(currentProject.id, 'githubLink', e.target.value)
                        }
                        placeholder="https://github.com/..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                      />
                      <ExternalLink className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Live Demo Link</label>
                    <div className="relative">
                      <input
                        type="url"
                        value={currentProject.liveLink}
                        onChange={(e) =>
                          updateProject(currentProject.id, 'liveLink', e.target.value)
                        }
                        placeholder="https://demo.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                      />
                      <ExternalLink className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Your Role</label>
                    <input
                      type="text"
                      value={currentProject.role}
                      onChange={(e) => updateProject(currentProject.id, 'role', e.target.value)}
                      placeholder="e.g., Full Stack Developer"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Category</label>
                    <select
                      value={currentProject.category}
                      onChange={(e) => updateProject(currentProject.id, 'category', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    >
                      <option value="">Select category</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Full Stack">Full Stack</option>
                      <option value="Mobile">Mobile</option>
                    </select>
                  </div>
                </div>
              </div>
            </FormCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
