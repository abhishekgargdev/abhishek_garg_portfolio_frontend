import { motion } from 'motion/react';

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function FormCard({ children, className = '', title, description }: FormCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-2xl backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="mb-2 text-slate-900 transition-colors duration-300 dark:text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.div>
  );
}
