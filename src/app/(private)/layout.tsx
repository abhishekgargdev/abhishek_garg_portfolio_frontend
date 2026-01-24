'use client';

import { PrivateSidebar } from '@/components/common/private/private-sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 transition-colors duration-300 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute -right-10 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 flex">
        <PrivateSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/60 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/60">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                  onClick={toggleSidebar}
                  className="rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden dark:hover:bg-white/10"
                  aria-label="Toggle sidebar"
                >
                  <Menu className="h-6 w-6 text-slate-900 dark:text-white" />
                </button>

                <div>
                  <h1 className="mb-1 text-lg text-slate-900 transition-colors duration-300 sm:text-xl dark:text-white">
                    Portfolio Dashboard
                  </h1>
                  <p className="text-xs text-slate-600 transition-colors duration-300 sm:text-sm dark:text-slate-400">
                    Manage your portfolio content dynamically
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
