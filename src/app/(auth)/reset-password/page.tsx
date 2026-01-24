'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});
  // Password strength indicator
  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { strength: 0, label: '', color: '' };
    if (pwd.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
    if (pwd.length < 10) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' };
    if (pwd.length < 12) return { strength: 3, label: 'Good', color: 'bg-blue-500' };
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(pwd)) {
      return { strength: 4, label: 'Strong', color: 'bg-green-500' };
    }
    return { strength: 3, label: 'Good', color: 'bg-blue-500' };
  };

  const passwordStrength = getPasswordStrength(password);

  const validateForm = () => {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      //   toast.success('Password reset successful!', {
      //     description: 'You can now login with your new password'
      //   });
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
        {/* Reset Password Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-2 text-center text-white">Reset Password</h1>
            <p className="text-center text-sm text-slate-400">
              Choose a strong password to secure your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-slate-300">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  placeholder="••••••••"
                  className={`w-full border bg-slate-800/50 py-3 pr-12 pl-11 ${
                    errors.password ? 'border-red-500' : 'border-white/10'
                  } rounded-xl text-white transition-colors placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength.strength
                            ? passwordStrength.color
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  {passwordStrength.label && (
                    <p className="text-xs text-slate-400">
                      Password strength:{' '}
                      <span className={`${passwordStrength.color.replace('bg-', 'text-')}`}>
                        {passwordStrength.label}
                      </span>
                    </p>
                  )}
                </div>
              )}

              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 text-xs text-red-400"
                >
                  <AlertCircle className="h-3 w-3" />
                  {errors.password}
                </motion.p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm text-slate-300">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword)
                      setErrors({ ...errors, confirmPassword: undefined });
                  }}
                  placeholder="••••••••"
                  className={`w-full border bg-slate-800/50 py-3 pr-12 pl-11 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-white/10'
                  } rounded-xl text-white transition-colors placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Match Indicator */}
              {confirmPassword && password === confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 text-xs text-green-400"
                >
                  <CheckCircle className="h-3 w-3" />
                  Passwords match
                </motion.p>
              )}

              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 text-xs text-red-400"
                >
                  <AlertCircle className="h-3 w-3" />
                  {errors.confirmPassword}
                </motion.p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="rounded-lg border border-cyan-500/20 bg-slate-800/30 p-4">
              <p className="mb-2 text-xs text-slate-400">Password must contain:</p>
              <ul className="space-y-1 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <div
                    className={`h-1 w-1 rounded-full ${password.length >= 8 ? 'bg-green-400' : 'bg-slate-600'}`}
                  />
                  At least 8 characters
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`h-1 w-1 rounded-full ${/[A-Z]/.test(password) && /[a-z]/.test(password) ? 'bg-green-400' : 'bg-slate-600'}`}
                  />
                  Uppercase and lowercase letters
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`h-1 w-1 rounded-full ${/\d/.test(password) ? 'bg-green-400' : 'bg-slate-600'}`}
                  />
                  At least one number
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CheckCircle className="h-5 w-5" />
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Abhishek Garg. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
