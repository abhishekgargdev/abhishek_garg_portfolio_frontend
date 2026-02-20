import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Let's <span className="text-cyan-500">Connect</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all dark:text-white"
                    placeholder="How can I help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center text-cyan-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Email</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">abhishek@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Location</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Social Profiles</p>
                  <div className="flex gap-4">
                    <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                      <Github size={24} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                      <Twitter size={24} />
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            <GlassCard className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 border-none text-white">
              <h4 className="text-xl font-bold mb-2">Available for Projects</h4>
              <p className="text-cyan-50 opacity-90 mb-6">Currently accepting new freelance opportunities and full-time roles.</p>
              <button className="px-6 py-2 bg-white text-cyan-600 rounded-lg font-bold">Hire Me</button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
