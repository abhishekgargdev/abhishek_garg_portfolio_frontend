'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';
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
import { forgotPasswordSchema, type ForgotPasswordFormValues } from '@/lib/validations/auth';
import { AuthApi } from '@/api/auth.api';
import RequiredFormLabel from './RequiredFormLabel';

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await AuthApi.forgotPassword(values);
      setSubmittedEmail(values.email);
      setIsSuccess(true);
      toast.success('Reset link sent! Check your email.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h2 className="mb-2 text-lg text-white">Check Your Email</h2>
        <p className="mb-2 text-sm text-slate-400">
          We sent reset instructions to <span className="text-cyan-400">{submittedEmail}</span>
        </p>
        <p className="mb-6 text-xs text-slate-500">
          Didn&apos;t receive it? Check your spam folder.
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
          <Button
            variant="outline"
            className="w-full border-white/10 bg-slate-800/50 text-white hover:bg-slate-800/70"
            onClick={() => router.push('/login')}
          >
            Back to Login
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Back button */}
      <Button
        type="button"
        variant="ghost"
        className="mb-6 -ml-2 gap-2 text-slate-400 hover:bg-transparent hover:text-slate-300"
        onClick={() => router.push('/login')}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Button>

      {/* Header */}
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h1 className="mb-2 text-center text-lg text-white">Forgot Password?</h1>
        <p className="text-center text-sm text-slate-400">
          No worries! Enter your email and we&apos;ll send reset instructions.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </motion.div>
        </form>
      </Form>
    </>
  );
}
