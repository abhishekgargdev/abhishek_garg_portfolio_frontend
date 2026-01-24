'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LOGIN_URL } from '@/constants/routes';

const ForgotPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // toast.success('Reset link sent!', {
      //   description: 'Check your email for password reset instructions'
      // });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      {/* Animated background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Back Button */}
        <button
          onClick={() => router.push(LOGIN_URL)}
          className="mb-6 flex items-center gap-2 text-slate-400 transition-colors hover:text-slate-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to login</span>
        </button>

        {/* Forgot Password Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="mb-8 flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h1 className="mb-2 text-center text-white">Forgot Password?</h1>
                <p className="text-center text-sm text-slate-400">
                  No worries! Enter your email and we will send you reset instructions.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="you@example.com"
                      className={`w-full border bg-slate-800/50 py-3 pr-4 pl-11 ${
                        error ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white transition-colors placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none`}
                    />
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </motion.button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="mb-2 text-white">Check Your Email</h2>
              <p className="mb-6 text-sm text-slate-400">
                We have sent password reset instructions to{' '}
                <span className="text-cyan-400">{email}</span>
              </p>
              <p className="mb-6 text-xs text-slate-500">
                Did not receive the email? Check your spam folder or try again.
              </p>
              <motion.button
                onClick={() => router.push(LOGIN_URL)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-6 py-3 text-white transition-colors hover:bg-slate-800/70"
              >
                Back to Login
              </motion.button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Abhishek Garg. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPage;
