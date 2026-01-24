'use client';
import { useState } from 'react';
import { Linkedin, Github, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: 'abhishek.garg@example.com',
    phone: '+91 98765 43210',
    linkedinUrl: 'https://linkedin.com/in/abhishekgarg',
    githubUrl: 'https://github.com/abhishekgarg',
    resumeUrl: 'https://drive.google.com/resume',
    location: 'Bangalore, India',
    mapEmbedUrl: '',
  });

  const [testMessage, setTestMessage] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTestMessage({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Contact Info Form */}
      <FormCard>
        <h2 className="mb-6 text-xl text-white">Contact Information</h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4" />
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <Phone className="h-4 w-4" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="City, Country"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="mb-4 text-white">Social Links</h3>

            <div className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <Github className="h-4 w-4" />
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  placeholder="https://github.com/yourusername"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <Send className="h-4 w-4" />
                  Resume URL
                </label>
                <input
                  type="url"
                  value={formData.resumeUrl}
                  onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                  placeholder="https://drive.google.com/your-resume"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Google Maps Embed URL (Optional)
            </label>
            <input
              type="url"
              value={formData.mapEmbedUrl}
              onChange={(e) => setFormData({ ...formData, mapEmbedUrl: e.target.value })}
              placeholder="https://www.google.com/maps/embed?pb=..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
            />
            <p className="mt-2 text-xs text-slate-500">Paste the embed URL from Google Maps</p>
          </div>
        </div>
      </FormCard>

      {/* Contact Form Preview & Test */}
      <div className="space-y-6">
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Contact Card Preview</h3>

          <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6">
            <h4 className="mb-4 text-white">Get In Touch</h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm">{formData.email || 'Not set'}</p>
                </div>
              </div>

              {formData.phone && (
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm">{formData.phone}</p>
                  </div>
                </div>
              )}

              {formData.location && (
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm">{formData.location}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              {formData.linkedinUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={formData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              )}

              {formData.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={formData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500/20 text-slate-400 transition-colors hover:bg-slate-500/30"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>
        </FormCard>

        <FormCard>
          <h3 className="mb-4 text-lg text-white">Test Contact Form</h3>
          <p className="mb-4 text-sm text-slate-400">
            Test how visitors will interact with your contact form
          </p>

          <form onSubmit={handleTestSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">Name</label>
              <input
                type="text"
                value={testMessage.name}
                onChange={(e) => setTestMessage({ ...testMessage, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">Email</label>
              <input
                type="email"
                value={testMessage.email}
                onChange={(e) => setTestMessage({ ...testMessage, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">Message</label>
              <textarea
                value={testMessage.message}
                onChange={(e) => setTestMessage({ ...testMessage, message: e.target.value })}
                placeholder="Write your message..."
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Sending...' : 'Test Send Message'}
            </motion.button>
          </form>
        </FormCard>
      </div>
    </div>
  );
};

export default ContactPage;
