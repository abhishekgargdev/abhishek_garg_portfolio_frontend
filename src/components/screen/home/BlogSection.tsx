import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './ImageWithFallback';

const blogs = [
  {
    title: "Mastering FastAPI: From Zero to Hero",
    excerpt: "Learn how to build lightning-fast APIs with Python and FastAPI, including background tasks and WebSockets.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    tags: ["FastAPI", "Python"]
  },
  {
    title: "Optimizing React for Large Scale Apps",
    excerpt: "Diving deep into virtualization, memoization, and efficient state management in production-grade React apps.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    date: "Jan 28, 2025",
    readTime: "12 min read",
    tags: ["React", "Performance"]
  },
  {
    title: "AWS Serverless: Best Practices",
    excerpt: "How we scaled our microservices to handle millions of requests using Lambda and SQS efficiently.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    tags: ["AWS", "Cloud"]
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Knowledge <span className="text-cyan-500">Hub</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sharing my insights on software architecture, performance optimization, and the latest in tech.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-xl font-bold flex items-center gap-2"
          >
            <BookOpen size={20} />
            View All Posts
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {blog.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 rounded">
                        #{tag}
                      </span>
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
