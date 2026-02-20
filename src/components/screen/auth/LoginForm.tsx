'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AuthPasswordInput from './AuthPasswordInput';
import { loginSchema, type LoginFormValues } from '@/lib/validations/auth';
import { AuthApi } from '@/api/auth.api';
import { StorageService } from '@/lib/storage';
import { DASHBOARD_APP_URL } from '@/constants/routes';
import RequiredFormLabel from './RequiredFormLabel';

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await AuthApi.login(values);
      StorageService.setAccessToken(response.accessToken);
      StorageService.setRefreshToken(response.refreshToken);
      StorageService.setUser(response.user);
      toast.success('Welcome back!');
      router.push(DASHBOARD_APP_URL);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <RequiredFormLabel className="text-slate-300">Email Address</RequiredFormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="border-white/10 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <RequiredFormLabel className="text-slate-300">Password</RequiredFormLabel>

              <FormControl>
                <AuthPasswordInput
                  placeholder="••••••••"
                  leftIcon={<Lock className="h-4 w-4" />}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Forgot password */}
        <div className="flex justify-end">
          <Button
            type="button"
            variant="link"
            className="h-auto p-0 text-sm text-cyan-400 hover:text-cyan-300"
            onClick={() => router.push('/forgot-password')}
          >
            Forgot password?
          </Button>
        </div>

        {/* Submit */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50"
          >
            <LogIn className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </motion.div>

        {/* Demo credentials */}
        <div className="rounded-lg border border-cyan-500/20 bg-slate-800/30 p-4">
          <p className="mb-1 text-center text-xs text-slate-400">Demo Credentials</p>
          <p className="text-center text-xs text-slate-300">Email: admin@portfolio.com</p>
          <p className="text-center text-xs text-slate-300">Password: admin123</p>
        </div>
      </form>
    </Form>
  );
}
