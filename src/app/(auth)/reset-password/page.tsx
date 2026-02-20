import type { Metadata } from 'next';
import { Suspense } from 'react';
import AuthCard from '@/components/screen/auth/AuthCard';
import ResetPasswordForm from '@/components/screen/auth/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Reset Password | Portfolio CMS',
};

export const dynamic = 'force-dynamic';

export default function ResetPasswordPage() {
  return (
    <AuthCard>
      {/* Suspense needed because ResetPasswordForm uses useSearchParams() */}
      <Suspense fallback={<p className="text-center text-slate-400">Loading...</p>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthCard>
  );
}
