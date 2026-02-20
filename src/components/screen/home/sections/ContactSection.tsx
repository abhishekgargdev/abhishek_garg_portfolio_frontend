'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { GlassCard } from '@/components/screen/home/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[80px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Let&apos;s <span className="text-cyan-500">Connect</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">Get in Touch</h3>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-gray-700">Your Name</Label>
                    <Input id="name" placeholder="John Doe" className="border-gray-200 bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="border-gray-200 bg-white" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input id="subject" placeholder="How can I help you?" className="border-gray-200 bg-white" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="resize-none border-gray-200 bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-700"
                  size="lg"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email</p>
                      <p className="font-semibold text-gray-900">abhishek@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Location</p>
                      <p className="font-semibold text-gray-900">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Social Profiles
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: 'LinkedIn' },
                      { icon: Github, label: 'GitHub' },
                      { icon: Twitter, label: 'Twitter' },
                    ].map(({ icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        whileHover={{ y: -4 }}
                        href="#"
                        aria-label={label}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-700 transition-colors hover:border-cyan-500 hover:text-cyan-500"
                      >
                        <Icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <GlassCard className="border-none bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white sm:p-8">
              <h4 className="mb-2 text-lg font-bold sm:text-xl">Available for Projects</h4>
              <p className="mb-5 text-cyan-50 opacity-90 text-sm sm:text-base">
                Currently accepting new freelance opportunities and full-time roles.
              </p>
              <Button
                variant="secondary"
                className="bg-white font-bold text-cyan-600 hover:bg-cyan-50"
              >
                Hire Me
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};