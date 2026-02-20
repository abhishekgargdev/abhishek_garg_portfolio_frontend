import { Card, CardContent } from '@/components/ui/card';
import AuthBackground from './AuthBackground';

interface AuthCardProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function AuthCard({ children, footer }: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <AuthBackground />

      <div className="relative z-10 w-full max-w-md px-2 sm:px-0">
        <Card className="border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-xl">
          <CardContent className="p-6 sm:p-8">{children}</CardContent>
        </Card>

        {footer ?? (
          <p className="mt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Abhishek Garg. All rights reserved.
          </p>
        )}
      </div>
    </div>
  );
}
