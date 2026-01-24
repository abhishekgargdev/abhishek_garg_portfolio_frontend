'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye, Trophy, Award, Star, Zap, Target, Medal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  category: 'Certification' | 'Leadership' | 'Technical' | 'Other' | '';
}

const iconOptions = [
  { value: 'trophy', label: 'Trophy', Icon: Trophy },
  { value: 'award', label: 'Award', Icon: Award },
  { value: 'star', label: 'Star', Icon: Star },
  { value: 'zap', label: 'Lightning', Icon: Zap },
  { value: 'target', label: 'Target', Icon: Target },
  { value: 'medal', label: 'Medal', Icon: Medal },
];

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Best Developer Award',
      description: 'Received company-wide recognition for exceptional code quality and innovation',
      icon: 'trophy',
      date: '2023',
      category: 'Leadership',
    },
    {
      id: '2',
      title: 'AWS Solutions Architect',
      description: 'Successfully cleared AWS SAA certification on first attempt',
      icon: 'award',
      date: '2023',
      category: 'Certification',
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: '',
      description: '',
      icon: 'trophy',
      date: '',
      category: '',
    };
    setAchievements([...achievements, newAchievement]);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateAchievement = (id: string, field: keyof Achievement, value: any) => {
    setAchievements(achievements.map((ach) => (ach.id === id ? { ...ach, [field]: value } : ach)));
  };

  const deleteAchievement = (id: string) => {
    setAchievements(achievements.filter((ach) => ach.id !== id));
  };

  const getIcon = (iconValue: string) => {
    const iconObj = iconOptions.find((i) => i.value === iconValue);
    return iconObj ? iconObj.Icon : Trophy;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Achievements Timeline</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your professional achievements</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Timeline
          </motion.button>
          <motion.button
            onClick={addAchievement}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Achievement
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Achievements Timeline Preview</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const IconComponent = getIcon(achievement.icon);
              return (
                <div key={achievement.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {index < achievements.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-amber-500 to-orange-500" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-white">{achievement.title || 'Achievement Title'}</h4>
                      <span className="rounded bg-amber-500/20 px-2 py-1 text-xs text-amber-300">
                        {achievement.date || 'Year'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">
                      {achievement.description || 'Description'}
                    </p>
                    {achievement.category && (
                      <span className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                        {achievement.category}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AnimatePresence>
          {achievements.map((achievement) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <FormCard>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-white">{achievement.title || 'New Achievement'}</h3>
                    </div>
                    <motion.button
                      onClick={() => deleteAchievement(achievement.id)}
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
                        Achievement Title <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={achievement.title}
                        onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                        placeholder="e.g., Best Developer Award"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Description</label>
                      <textarea
                        value={achievement.description}
                        onChange={(e) =>
                          updateAchievement(achievement.id, 'description', e.target.value)
                        }
                        placeholder="Describe the achievement..."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-400">Icon</label>
                      <div className="grid grid-cols-3 gap-2">
                        {iconOptions.map(({ value, label, Icon }) => (
                          <motion.button
                            key={value}
                            type="button"
                            onClick={() => updateAchievement(achievement.id, 'icon', value)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all ${
                              achievement.icon === value
                                ? 'border-amber-500/30 bg-amber-500/20 text-amber-300'
                                : 'border-white/10 bg-white/5 text-slate-400 hover:border-amber-500/20'
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-xs">{label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm text-slate-400">Date / Year</label>
                        <input
                          type="text"
                          value={achievement.date}
                          onChange={(e) =>
                            updateAchievement(achievement.id, 'date', e.target.value)
                          }
                          placeholder="e.g., 2023"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-slate-400">Category</label>
                        <select
                          value={achievement.category}
                          onChange={(e) =>
                            updateAchievement(achievement.id, 'category', e.target.value)
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                        >
                          <option value="">Select category</option>
                          <option value="Certification">Certification</option>
                          <option value="Leadership">Leadership</option>
                          <option value="Technical">Technical</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </FormCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AchievementsPage;
