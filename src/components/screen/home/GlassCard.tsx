import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className = '', delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        borderColor: 'rgba(6, 182, 212, 0.5)',
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        scale: { type: 'spring', stiffness: 300, damping: 15 },
      }}
      className={`rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-black/20 ${className}`}
    >
      {children}
    </motion.div>
  );
};
