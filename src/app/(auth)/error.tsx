'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Auth Error]', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-red-500/30 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <AlertCircle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <h2 className="mb-2 text-lg text-white">Something went wrong</h2>
        <p className="mb-6 text-sm text-slate-400">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <Button
          onClick={reset}
          className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </motion.div>
    </div>
  );
}
