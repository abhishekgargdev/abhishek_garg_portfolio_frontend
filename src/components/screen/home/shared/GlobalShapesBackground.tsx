'use client';

import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export const GlobalShapesBackground = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      color: i % 2 === 0 ? 'bg-cyan-500/10' : 'bg-blue-500/10',
    }));
  }, []);

  const atoms = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      top: Math.random() * 80 + 10,
      size: Math.random() * 100 + 150,
      duration: 30 + i * 5,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} blur-[1px]`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {atoms.map((atom) => (
        <div
          key={atom.id}
          className="absolute"
          style={{
            left: `${atom.left}%`,
            top: `${atom.top}%`,
            width: atom.size,
            height: atom.size,
          }}
        >
          <motion.div
            className="relative h-full w-full rounded-full border border-cyan-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: atom.duration, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute -top-2 left-1/2 h-3 w-3 rounded-full bg-cyan-400/30 blur-[2px]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      ))}

      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"
      />
    </div>
  );
};