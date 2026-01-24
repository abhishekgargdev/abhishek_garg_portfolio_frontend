'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';

interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Tools' | '';
  proficiency: number;
  description: string;
}

const SkillsPage = () => {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: '1',
      name: 'React.js',
      category: 'Frontend',
      proficiency: 90,
      description: 'Expert in building modern, scalable React applications',
    },
    {
      id: '2',
      name: 'Node.js',
      category: 'Backend',
      proficiency: 85,
      description: 'Experienced in building RESTful APIs and microservices',
    },
    {
      id: '3',
      name: 'AWS',
      category: 'Cloud',
      proficiency: 80,
      description: 'Proficient in deploying and managing cloud infrastructure',
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      category: '',
      proficiency: 50,
      description: '',
    };
    setSkills([...skills, newSkill]);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    setSkills(skills.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)));
  };

  const deleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: 'cyan',
      Backend: 'blue',
      Cloud: 'purple',
      Tools: 'green',
    };
    return colors[category as keyof typeof colors] || 'slate';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Technical Skills</h2>
          <p className="mt-1 text-sm text-slate-400">
            Manage your skill set and proficiency levels
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
            {showPreview ? 'Hide' : 'Show'} Chart
          </motion.button>
          <motion.button
            onClick={addSkill}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Skill
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-6 text-lg text-white">Skills Visualization</h3>
          <div className="space-y-4">
            {['Frontend', 'Backend', 'Cloud', 'Tools'].map((category) => {
              const categorySkills = skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category}>
                  <h4 className="mb-3 text-sm text-slate-400">{category}</h4>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-sm text-white">
                            {skill.name || 'Unnamed Skill'}
                          </span>
                          <span className="text-sm text-cyan-400">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r from-${getCategoryColor(category)}-500 to-${getCategoryColor(category)}-400 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <FormCard>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-white">{skill.name || 'New Skill'}</h3>
                  <motion.button
                    onClick={() => deleteSkill(skill.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Skill Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                      placeholder="e.g., React.js"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Category <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={skill.category}
                      onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    >
                      <option value="">Select category</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Cloud">Cloud</option>
                      <option value="Tools">Tools</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Proficiency: {skill.proficiency}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.proficiency}
                      onChange={(e) =>
                        updateSkill(skill.id, 'proficiency', parseInt(e.target.value))
                      }
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-500 [&::-webkit-slider-thumb]:to-blue-500"
                    />
                    <div className="mt-1 flex justify-between text-xs text-slate-500">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Description (Tooltip)
                    </label>
                    <textarea
                      value={skill.description}
                      onChange={(e) => updateSkill(skill.id, 'description', e.target.value)}
                      placeholder="Brief description of your expertise..."
                      rows={3}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>
              </FormCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsPage;
