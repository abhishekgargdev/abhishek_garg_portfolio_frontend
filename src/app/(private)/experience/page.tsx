'use client';
import { useState } from 'react';
import { Plus, Trash2, MoveUp, MoveDown, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';
import { TagInput } from '@/components/screen/TagInput';

interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  order: number;
}

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      company: 'TechCorp Solutions',
      role: 'Senior Software Developer',
      startDate: '2022-01',
      endDate: '',
      description:
        'Led development of microservices architecture, improving system scalability by 40%',
      techStack: ['React', 'Node.js', 'AWS', 'MongoDB'],
      order: 1,
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
      techStack: [],
      order: experiences.length + 1,
    };
    setExperiences([...experiences, newExp]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)));
  };

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const moveExperience = (id: string, direction: 'up' | 'down') => {
    const index = experiences.findIndex((exp) => exp.id === id);
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === experiences.length - 1)
    )
      return;

    const newExperiences = [...experiences];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newExperiences[index], newExperiences[targetIndex]] = [
      newExperiences[targetIndex],
      newExperiences[index],
    ];

    setExperiences(newExperiences);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Experience Ladder</h2>
          <p className="mt-1 text-sm text-slate-400">
            Manage your professional experience timeline
          </p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Preview
          </motion.button>
          <motion.button
            onClick={addExperience}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Experience
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Timeline Preview</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-sm text-white">
                    {index + 1}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-cyan-500 to-blue-500" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h4 className="text-white">{exp.role || 'Role Title'}</h4>
                  <p className="text-sm text-cyan-400">{exp.company || 'Company Name'}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {exp.startDate || 'Start'} - {exp.endDate || 'Present'}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{exp.description || 'Description'}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/10 px-2 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FormCard>
      )}

      <div className="space-y-4">
        <AnimatePresence>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FormCard>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-white">Experience #{index + 1}</h3>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => moveExperience(exp.id, 'up')}
                      disabled={index === 0}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg border border-blue-500/30 bg-blue-500/20 p-2 text-blue-400 transition-colors hover:bg-blue-500/30 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <MoveUp className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => moveExperience(exp.id, 'down')}
                      disabled={index === experiences.length - 1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg border border-blue-500/30 bg-blue-500/20 p-2 text-blue-400 transition-colors hover:bg-blue-500/30 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <MoveDown className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => deleteExperience(exp.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                    >
                      <Trash2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="e.g., TechCorp Solutions"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Role / Designation <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                      placeholder="e.g., Senior Software Developer"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Start Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      End Date
                      <span className="ml-2 text-xs text-slate-500">(Leave empty for current)</span>
                    </label>
                    <input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm text-slate-400">
                    Description / Key Achievements
                  </label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm text-slate-400">Tech Stack</label>
                  <TagInput
                    tags={exp.techStack}
                    onChange={(techStack) => updateExperience(exp.id, 'techStack', techStack)}
                    placeholder="Add technology..."
                  />
                </div>
              </FormCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperiencePage;
