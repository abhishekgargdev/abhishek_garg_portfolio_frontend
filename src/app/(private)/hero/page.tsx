'use client';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';
import { FileUpload } from '@/components/screen/FileUpload';
import { TagInput } from '@/components/screen/TagInput';

const HeroPage = () => {
  const [formData, setFormData] = useState({
    photo: null as File | null,
    fullName: 'Abhishek Garg',
    role: 'Senior Software Developer',
    typewriterTags: ['MERN Stack', 'FastAPI', 'AWS Solutions'],
    introLine: 'Building scalable, modern web applications with 4+ years of experience',
    exploreLink: '#experience',
    projectsLink: '#projects',
    resumeLink: '/resume.pdf',
  });

  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Form Section */}
      <FormCard>
        <h2 className="mb-6 text-xl text-white">Hero Section Content</h2>

        <div className="space-y-6">
          <FileUpload
            label="Profile Photo"
            accept="image/*"
            onChange={(file) => setFormData({ ...formData, photo: file })}
          />

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter full name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Role / Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g., Senior Software Developer"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Typewriter Tags</label>
            <TagInput
              tags={formData.typewriterTags}
              onChange={(tags) => setFormData({ ...formData, typewriterTags: tags })}
              placeholder="Add skill or specialization..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Short Intro Line</label>
            <textarea
              value={formData.introLine}
              onChange={(e) => setFormData({ ...formData, introLine: e.target.value })}
              placeholder="A brief introduction about yourself..."
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-400">Explore Journey Link</label>
              <input
                type="text"
                value={formData.exploreLink}
                onChange={(e) => setFormData({ ...formData, exploreLink: e.target.value })}
                placeholder="#experience"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">View Projects Link</label>
              <input
                type="text"
                value={formData.projectsLink}
                onChange={(e) => setFormData({ ...formData, projectsLink: e.target.value })}
                placeholder="#projects"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">Resume Download Link</label>
            <input
              type="text"
              value={formData.resumeLink}
              onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
              placeholder="/path/to/resume.pdf"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>
        </div>
      </FormCard>

      {/* Preview Section */}
      <div className="space-y-4">
        <motion.button
          onClick={() => setShowPreview(!showPreview)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 text-purple-300 transition-all hover:bg-purple-500/30"
        >
          <Eye className="h-5 w-5" />
          {showPreview ? 'Hide' : 'Show'} Preview
        </motion.button>

        {showPreview && (
          <FormCard>
            <div className="space-y-4">
              <h3 className="mb-4 text-lg text-white">Live Preview</h3>

              {/* Mock Hero Preview */}
              <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500">
                    <span className="text-3xl text-white">AG</span>
                  </div>

                  <div>
                    <h1 className="mb-2 text-2xl text-white">{formData.fullName}</h1>
                    <p className="text-cyan-400">{formData.role}</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {formData.typewriterTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-300">{formData.introLine}</p>

                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-xs text-cyan-300">
                      Explore Journey
                    </div>
                    <div className="rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-xs text-purple-300">
                      View Projects
                    </div>
                    <div className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-xs text-blue-300">
                      Download Resume
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormCard>
        )}
      </div>
    </div>
  );
};

export default HeroPage;
