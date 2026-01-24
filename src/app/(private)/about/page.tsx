'use client';
import { FileUpload } from '@/components/screen/FileUpload';
import { FormCard } from '@/components/screen/FormCard';
import { TagInput } from '@/components/screen/TagInput';
import React, { useState } from 'react';

const AboutPage = () => {
  const [formData, setFormData] = useState({
    portrait: null as File | null,
    bio: `I'm a passionate Senior Software Developer with 4+ years of experience building scalable web applications.\n\nSpecializing in MERN stack, FastAPI, and AWS cloud solutions, I've delivered numerous projects across fintech, e-commerce, and SaaS domains.\n\nI believe in writing clean, maintainable code and staying updated with the latest technologies.`,
    interests: ['Gym & Fitness', 'Tech Meetups', 'Mentorship', 'Open Source'],
    skillTags: ['React', 'Node.js', 'FastAPI', 'AWS', 'TypeScript', 'MongoDB'],
    resume: null as File | null,
  });
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <FormCard className="lg:col-span-2">
        <h2 className="mb-6 text-xl text-white">About Me Content</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <FileUpload
              label="Portrait Image"
              accept="image/*"
              onChange={(file) => setFormData({ ...formData, portrait: file })}
            />

            <div>
              <label className="mb-2 block text-sm text-slate-400">Personal Interests</label>
              <TagInput
                tags={formData.interests}
                onChange={(interests) => setFormData({ ...formData, interests })}
                placeholder="Add interest..."
              />
              <p className="mt-2 text-xs text-slate-500">e.g., Gym, Tech Meetups, Mentorship</p>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">Skill Tags</label>
              <TagInput
                tags={formData.skillTags}
                onChange={(skillTags) => setFormData({ ...formData, skillTags })}
                placeholder="Add skill..."
              />
              <p className="mt-2 text-xs text-slate-500">e.g., React, FastAPI, TypeScript</p>
            </div>

            <FileUpload
              label="Resume File"
              accept=".pdf,.doc,.docx"
              onChange={(file) => setFormData({ ...formData, resume: file })}
              preview={false}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Short Bio <span className="text-red-400">*</span>
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Write 3-4 paragraphs about yourself..."
                rows={20}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
              <div className="mt-2 flex justify-between">
                <p className="text-xs text-slate-500">Min 200 characters recommended</p>
                <p className="text-xs text-slate-500">{formData.bio.length} characters</p>
              </div>
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default AboutPage;
