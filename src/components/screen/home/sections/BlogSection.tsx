'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { GlassCard } from '@/components/screen/home/shared/GlassCard';
import { ImageWithFallback } from '@/components/screen/home/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogs = [
  {
    title: 'Mastering FastAPI: From Zero to Hero',
    excerpt: 'Learn how to build lightning-fast APIs with Python and FastAPI, including background tasks and WebSockets.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    date: 'Feb 15, 2025',
    readTime: '8 min read',
    tags: ['FastAPI', 'Python'],
  },
  {
    title: 'Optimizing React for Large Scale Apps',
    excerpt: 'Diving deep into virtualization, memoization, and efficient state management in production-grade React apps.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    date: 'Jan 28, 2025',
    readTime: '12 min read',
    tags: ['React', 'Performance'],
  },
  {
    title: 'AWS Serverless: Best Practices',
    excerpt: 'How we scaled our microservices to handle millions of requests using Lambda and SQS efficiently.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: 'Jan 10, 2025',
    readTime: '10 min read',
    tags: ['AWS', 'Cloud'],
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Knowledge <span className="text-cyan-500">Hub</span>
            </motion.h2>
            <p className="text-gray-600">
              Sharing my insights on software architecture, performance optimization, and the latest in tech.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 border-cyan-500 text-cyan-500 hover:bg-cyan-50">
            <BookOpen size={18} className="mr-2" />
            View All Posts
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group flex h-full flex-col overflow-hidden">
                <div className="h-44 overflow-hidden sm:h-48">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {blog.readTime}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-cyan-500 sm:text-xl">
                    {blog.title}
                  </h3>
                  <p className="mb-5 flex-grow text-sm text-gray-600">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-4">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-50 text-gray-500">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};