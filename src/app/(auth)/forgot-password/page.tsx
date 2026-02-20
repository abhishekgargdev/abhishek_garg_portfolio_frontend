import type { Metadata } from 'next';
import AuthCard from '@/components/screen/auth/AuthCard';
import ForgotPasswordForm from '@/components/screen/auth/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password | Portfolio CMS',
};

export const dynamic = 'force-dynamic';

export default function ForgotPasswordPage() {
  return (
    <AuthCard>
      <ForgotPasswordForm />
    </AuthCard>
  );
}
