'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Home,
  User,
  Briefcase,
  Settings,
  FolderOpen,
  Award,
  BookOpen,
  Trophy,
  MessageSquare,
  Phone,
  FileText,
  Linkedin,
  LogOut,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'hero', label: 'Hero Section', icon: Home },
  { id: 'about-me', label: 'About Me', icon: User },
  { id: 'experience', label: 'Experience Ladder', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Settings },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'blog', label: 'Blog / Knowledge Hub', icon: BookOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'contact', label: 'Contact Info', icon: Phone },
  { id: 'pdf-viewer', label: 'PDF Viewer', icon: FileText },
  { id: 'linkedin', label: 'LinkedIn AI Posts', icon: Linkedin },
] as const;

type NavItemId = (typeof navItems)[number]['id'];

interface PrivateSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function PrivateSidebar({ isOpen, onToggle }: PrivateSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const activeSection = (pathname.split('/').filter(Boolean).pop() as NavItemId) || 'dashboard';

  const handleNavigation = (id: string) => {
    router.push(`/${id}`);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white/80 backdrop-blur-xl transition-transform duration-300 ease-in-out dark:bg-slate-900/80',
          'border-slate-200 dark:border-white/10',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 text-sm font-semibold text-white">
              AG
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Portfolio CMS
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">Content Manager</p>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onToggle}
            className="rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden dark:hover:bg-white/10"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <Button
                key={item.id}
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start gap-3 text-left transition-all',
                  isActive &&
                    'border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400',
                )}
                onClick={() => handleNavigation(item.id)}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="space-y-3 border-t border-slate-200 p-4 dark:border-white/10">
          <Button variant="destructive" className="w-full justify-start gap-3">
            <LogOut className="h-5 w-5" />
            Logout
          </Button>

          <div className="pt-4 text-center text-xs text-slate-600 dark:text-slate-400">
            <p className="font-medium">Abhishek Garg</p>
            <p>Senior Software Developer</p>
          </div>
        </div>
      </aside>
    </>
  );
}
