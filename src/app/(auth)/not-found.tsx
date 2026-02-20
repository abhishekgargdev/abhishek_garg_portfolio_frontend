import Link from 'next/link';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
            <Search className="h-8 w-8 text-slate-400" />
          </div>
        </div>
        <h2 className="mb-2 text-4xl text-white">404</h2>
        <p className="mb-2 text-lg text-white">Page Not Found</p>
        <p className="mb-6 text-sm text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          <Link href="/login">
            <Home className="h-4 w-4" />
            Back to Login
          </Link>
        </Button>
      </div>
    </div>
  );
}
