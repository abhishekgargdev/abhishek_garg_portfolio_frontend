import type { Metadata } from 'next';
import AuthCard from '@/components/screen/auth/AuthCard';
import LoginForm from '@/components/screen/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Portfolio CMS',
  description: 'Sign in to manage your portfolio',
};

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  return (
    <AuthCard>
      {/* Header — rendered server side */}
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
          <span className="text-2xl text-white">AG</span>
        </div>
        <h1 className="mb-1 text-center text-lg text-white">Portfolio CMS</h1>
        <p className="text-center text-xs text-slate-400">Sign in to manage your portfolio</p>
      </div>

      {/* Form — client island */}
      <LoginForm />
    </AuthCard>
  );
}
