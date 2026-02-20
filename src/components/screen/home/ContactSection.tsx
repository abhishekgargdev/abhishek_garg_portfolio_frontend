import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
          >
            Let's <span className="text-cyan-500">Connect</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all outline-none focus:ring-2 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all outline-none focus:ring-2 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all outline-none focus:ring-2 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="How can I help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all outline-none focus:ring-2 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg shadow-cyan-500/20"
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
                <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        abhishek@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="mb-6 text-sm font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                    Social Profiles
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="rounded-2xl bg-gray-100 p-4 text-gray-700 transition-colors hover:text-cyan-500 dark:bg-gray-800 dark:text-gray-300"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="rounded-2xl bg-gray-100 p-4 text-gray-700 transition-colors hover:text-cyan-500 dark:bg-gray-800 dark:text-gray-300"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="#"
                      className="rounded-2xl bg-gray-100 p-4 text-gray-700 transition-colors hover:text-cyan-500 dark:bg-gray-800 dark:text-gray-300"
                    >
                      <Twitter size={24} />
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <GlassCard className="border-none bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white">
              <h4 className="mb-2 text-xl font-bold">Available for Projects</h4>
              <p className="mb-6 text-cyan-50 opacity-90">
                Currently accepting new freelance opportunities and full-time roles.
              </p>
              <button className="rounded-lg bg-white px-6 py-2 font-bold text-cyan-600">
                Hire Me
              </button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
