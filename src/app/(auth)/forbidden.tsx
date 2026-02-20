import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthForbidden() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="w-full max-w-md rounded-2xl border border-amber-500/30 bg-slate-900/60 p-8 text-center shadow-2xl backdrop-blur-xl">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
            <ShieldAlert className="h-8 w-8 text-amber-400" />
          </div>
        </div>
        <h2 className="mb-2 text-lg text-white">Access Forbidden</h2>
        <p className="mb-6 text-sm text-slate-400">
          You are not authorized to access this resource.
        </p>
        <Button asChild className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          <Link href="/login">Return to Login</Link>
        </Button>
      </div>
    </div>
  );
}
