'use client';
import { FormCard } from '@/components/screen/FormCard';
import {
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
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

const quickLinks = [
  { id: 'hero', icon: Home, label: 'Hero Section', color: 'from-cyan-500 to-blue-500', count: 1 },
  { id: 'about-me', icon: User, label: 'About Me', color: 'from-blue-500 to-indigo-500', count: 1 },
  {
    id: 'experience',
    icon: Briefcase,
    label: 'Experience',
    color: 'from-indigo-500 to-purple-500',
    count: 3,
  },
  {
    id: 'skills',
    icon: Settings,
    label: 'Skills',
    color: 'from-purple-500 to-pink-500',
    count: 12,
  },
  {
    id: 'projects',
    icon: FolderOpen,
    label: 'Projects',
    color: 'from-pink-500 to-rose-500',
    count: 8,
  },
  {
    id: 'certificates',
    icon: Award,
    label: 'Certificates',
    color: 'from-rose-500 to-orange-500',
    count: 5,
  },
  {
    id: 'blog',
    icon: BookOpen,
    label: 'Blog Posts',
    color: 'from-orange-500 to-amber-500',
    count: 4,
  },
  {
    id: 'achievements',
    icon: Trophy,
    label: 'Achievements',
    color: 'from-amber-500 to-yellow-500',
    count: 6,
  },
  {
    id: 'testimonials',
    icon: MessageSquare,
    label: 'Testimonials',
    color: 'from-yellow-500 to-lime-500',
    count: 7,
  },
  {
    id: 'contact',
    icon: Phone,
    label: 'Contact Info',
    color: 'from-lime-500 to-green-500',
    count: 1,
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <FormCard>
        <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="mb-2 text-xl text-slate-900 sm:text-2xl dark:text-white">
              Welcome to Portfolio CMS
            </h2>
            <p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
              Manage all your portfolio content in one place. Select a section from the sidebar or
              click on a quick link below to get started.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                <span className="text-green-400">✓</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">10</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Total Sections</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                <span className="text-cyan-400">📝</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">47</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Total Entries</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <span className="text-purple-400">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Ready</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">CMS Status</p>
              </div>
            </div>
          </div>
        </div>
      </FormCard>

      <div>
        <h3 className="mb-4 text-lg text-slate-900 sm:text-xl dark:text-white">Quick Access</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.button
                key={link.id}
                onClick={() => router.push(`/${link.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:border-white/20">
                  <div
                    className={`mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="mb-1 text-sm text-slate-900 dark:text-white">{link.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {link.count} {link.count === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} -z-10 opacity-0 blur-xl transition-opacity group-hover:opacity-10`}
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      <FormCard>
        <h3 className="mb-4 text-lg text-slate-900 dark:text-white">Getting Started Guide</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-semibold text-cyan-400">
              1
            </div>
            <div>
              <h4 className="mb-1 font-medium text-slate-900 dark:text-white">
                Update Your Hero Section
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start by updating your profile photo, name, and introduction in the Hero Section.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-400">
              2
            </div>
            <div>
              <h4 className="mb-1 font-medium text-slate-900 dark:text-white">
                Add Your Experience
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Document your professional journey in the Experience Ladder section.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 font-semibold text-purple-400">
              3
            </div>
            <div>
              <h4 className="mb-1 font-medium text-slate-900 dark:text-white">
                Showcase Your Work
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Add your best projects with descriptions, images, and tech stacks.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 font-semibold text-green-400">
              4
            </div>
            <div>
              <h4 className="mb-1 font-medium text-slate-900 dark:text-white">Save & Preview</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Use the Save Changes button to persist your updates and preview sections before
                publishing.
              </p>
            </div>
          </div>
        </div>
      </FormCard>

      <FormCard>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="mb-1 text-lg text-slate-900 dark:text-white">API Integration Ready</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              All forms are structured for easy integration with your backend or CMS
            </p>
          </div>
          <div className="rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2">
            <p className="text-sm font-medium text-green-400">Developer Ready</p>
          </div>
        </div>
      </FormCard>
    </div>
  );
}
