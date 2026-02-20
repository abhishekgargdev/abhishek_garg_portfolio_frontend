'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import AuthPasswordInput from './AuthPasswordInput';
import { resetPasswordSchema, type ResetPasswordFormValues } from '@/lib/validations/auth';
import { AuthApi } from '@/api/auth.api';
import RequiredFormLabel from './RequiredFormLabel';

const passwordRequirements = [
  { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
  {
    label: 'Uppercase and lowercase letters',
    test: (p: string) => /[A-Z]/.test(p) && /[a-z]/.test(p),
  },
  { label: 'At least one number', test: (p: string) => /\d/.test(p) },
];

const getStrength = (pwd: string) => {
  if (!pwd) return { level: 0, label: '', color: '' };
  if (pwd.length < 6) return { level: 1, label: 'Weak', color: 'bg-red-500' };
  if (pwd.length < 10) return { level: 2, label: 'Fair', color: 'bg-yellow-500' };
  if (pwd.length < 12) return { level: 3, label: 'Good', color: 'bg-blue-500' };
  return { level: 4, label: 'Strong', color: 'bg-green-500' };
};

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const { isSubmitting } = form.formState;
  const password = form.watch('password');
  const confirmPassword = form.watch('confirmPassword');
  const strength = getStrength(password);

  const onSubmit = async (values: ResetPasswordFormValues) => {
    try {
      await AuthApi.resetPassword({ token, password: values.password });
      toast.success('Password reset successfully!');
      router.push('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
          <Lock className="h-8 w-8 text-white" />
        </div>
        <h1 className="mb-2 text-center text-lg text-white">Reset Password</h1>
        <p className="text-center text-sm text-slate-400">
          Choose a strong password to secure your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* New Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <RequiredFormLabel className="text-slate-300">New Password</RequiredFormLabel>
                <FormControl>
                  <AuthPasswordInput
                    placeholder="••••••••"
                    leftIcon={<Lock className="h-4 w-4" />}
                    {...field}
                  />
                </FormControl>

                {/* Strength bar */}
                {password && (
                  <div className="space-y-1 pt-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((lvl) => (
                        <div
                          key={lvl}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            lvl <= strength.level ? strength.color : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    {strength.label && (
                      <p className="text-xs text-slate-400">
                        Strength:{' '}
                        <span className={strength.color.replace('bg-', 'text-')}>
                          {strength.label}
                        </span>
                      </p>
                    )}
                  </div>
                )}
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <RequiredFormLabel className="text-slate-300">Confirm Password</RequiredFormLabel>
                <FormControl>
                  <AuthPasswordInput
                    placeholder="••••••••"
                    leftIcon={<Lock className="h-4 w-4" />}
                    {...field}
                  />
                </FormControl>

                {confirmPassword && password === confirmPassword && (
                  <p className="flex items-center gap-1 text-xs text-green-400">
                    <CheckCircle className="h-3 w-3" />
                    Passwords match
                  </p>
                )}
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Requirements */}
          <div className="rounded-lg border border-cyan-500/20 bg-slate-800/30 p-4">
            <p className="mb-2 text-xs text-slate-400">Password must contain:</p>
            <ul className="space-y-1">
              {passwordRequirements.map(({ label, test }) => {
                const met = test(password);
                return (
                  <li key={label} className="flex items-center gap-2 text-xs text-slate-400">
                    {met ? (
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-slate-600" />
                    )}
                    <span className={met ? 'text-green-400' : ''}>{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </Button>
          </motion.div>
        </form>
      </Form>
    </>
  );
}
