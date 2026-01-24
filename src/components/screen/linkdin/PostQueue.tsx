import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  MoreVertical,
  Trash2,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  Loader,
} from 'lucide-react';
import { FormCard } from '../FormCard';

interface ScheduledPost {
  id: string;
  content: string;
  scheduledDate: string;
  scheduledTime: string;
  status: 'pending' | 'scheduled' | 'posted' | 'failed';
  hashtags: string[];
}

export function PostQueue() {
  const [posts, setPosts] = useState<ScheduledPost[]>([
    {
      id: '1',
      content:
        '🚀 Excited to share my latest insights on React Performance Optimization!\n\nAs a Senior Software Developer specializing in MERN stack...',
      scheduledDate: '2026-01-15',
      scheduledTime: '09:00',
      status: 'scheduled',
      hashtags: ['#React', '#WebDev', '#Performance'],
    },
    {
      id: '2',
      content:
        '💡 Just finished working on an amazing AWS deployment project.\n\nThe journey taught me valuable lessons about scalability...',
      scheduledDate: '2026-01-15',
      scheduledTime: '14:30',
      status: 'scheduled',
      hashtags: ['#AWS', '#CloudComputing', '#DevOps'],
    },
    {
      id: '3',
      content:
        '📊 Real talk about microservices architecture in modern development.\n\nAfter 4+ years in the industry...',
      scheduledDate: '2026-01-16',
      scheduledTime: '10:00',
      status: 'pending',
      hashtags: ['#Microservices', '#SoftwareArchitecture'],
    },
    {
      id: '4',
      content:
        '✨ Celebrating a major milestone - our e-commerce platform hit 1M users!\n\nWhat an incredible journey...',
      scheduledDate: '2026-01-12',
      scheduledTime: '11:00',
      status: 'posted',
      hashtags: ['#Milestone', '#Success', '#Ecommerce'],
    },
  ]);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'scheduled' | 'pending' | 'posted' | 'failed'>(
    'all',
  );

  const statusConfig = {
    pending: {
      color: 'bg-amber-500',
      icon: Loader,
      label: 'Pending',
      textColor: 'text-amber-600 dark:text-amber-400',
    },
    scheduled: {
      color: 'bg-blue-500',
      icon: Clock,
      label: 'Scheduled',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    posted: {
      color: 'bg-green-500',
      icon: CheckCircle,
      label: 'Posted',
      textColor: 'text-green-600 dark:text-green-400',
    },
    failed: {
      color: 'bg-red-500',
      icon: XCircle,
      label: 'Failed',
      textColor: 'text-red-600 dark:text-red-400',
    },
  };

  const filteredPosts = filter === 'all' ? posts : posts.filter((post) => post.status === filter);

  const upcomingPosts = posts.filter(
    (p) => p.status === 'scheduled' || p.status === 'pending',
  ).length;
  const postedCount = posts.filter((p) => p.status === 'posted').length;

  const handleDelete = (postId: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
    setActiveMenu(null);
    // toast.success('Post deleted successfully');
  };

  const handleEdit = (postId: string) => {
    setActiveMenu(null);
    // toast.info('Edit functionality', {
    //   description: 'Post editor would open here',
    // });
  };

  const handlePreview = (postId: string) => {
    setActiveMenu(null);
    // toast.info('Preview', {
    //   description: 'Full post preview would open here',
    // });
  };

  const formatDate = (dateStr: string, timeStr: string) => {
    const date = new Date(`${dateStr}T${timeStr}`);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays < -1)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <FormCard title="Post Queue" description="Manage your scheduled LinkedIn posts">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 text-center">
            <p className="mb-1 text-2xl text-slate-900 dark:text-white">{upcomingPosts}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Upcoming</p>
          </div>
          <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 text-center">
            <p className="mb-1 text-2xl text-slate-900 dark:text-white">{postedCount}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Posted</p>
          </div>
          <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 text-center">
            <p className="mb-1 text-2xl text-slate-900 dark:text-white">{posts.length}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Total</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['all', 'scheduled', 'pending', 'posted', 'failed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-lg px-4 py-2 text-sm whitespace-nowrap transition-all ${
                filter === status
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'border border-slate-300 bg-white text-slate-600 hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-400'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center"
              >
                <Calendar className="mx-auto mb-3 h-12 w-12 text-slate-400" />
                <p className="text-slate-600 dark:text-slate-400">No posts in this category</p>
              </motion.div>
            ) : (
              filteredPosts.map((post) => {
                const StatusIcon = statusConfig[post.status].icon;

                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="group rounded-xl border border-slate-300 bg-white p-4 transition-all hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30"
                  >
                    <div className="flex items-start gap-3">
                      {/* Status Indicator */}
                      <div
                        className={`h-10 w-10 rounded-full ${statusConfig[post.status].color}/20 flex flex-shrink-0 items-center justify-center`}
                      >
                        <StatusIcon
                          className={`h-5 w-5 ${statusConfig[post.status].color.replace('bg-', 'text-')}`}
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        {/* Header */}
                        <div className="mb-2 flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <span
                                className={`rounded-full px-2 py-1 text-xs ${statusConfig[post.status].color}/20 ${statusConfig[post.status].textColor}`}
                              >
                                {statusConfig[post.status].label}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {formatDate(post.scheduledDate, post.scheduledTime)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <Clock className="h-3 w-3" />
                              <span>{post.scheduledTime}</span>
                            </div>
                          </div>

                          {/* Actions Menu */}
                          <div className="relative">
                            <button
                              onClick={() => setActiveMenu(activeMenu === post.id ? null : post.id)}
                              className="rounded-lg p-1.5 opacity-0 transition-colors group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-700"
                            >
                              <MoreVertical className="h-4 w-4 text-slate-500" />
                            </button>

                            <AnimatePresence>
                              {activeMenu === post.id && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                  className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl dark:border-white/10 dark:bg-slate-800"
                                >
                                  <button
                                    onClick={() => handlePreview(post.id)}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                                  >
                                    <Eye className="h-4 w-4" />
                                    Preview
                                  </button>
                                  {(post.status === 'scheduled' || post.status === 'pending') && (
                                    <button
                                      onClick={() => handleEdit(post.id)}
                                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                                    >
                                      <Edit className="h-4 w-4" />
                                      Edit
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDelete(post.id)}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Post Content */}
                        <p className="mb-3 line-clamp-2 text-sm text-slate-700 dark:text-slate-300">
                          {post.content}
                        </p>

                        {/* Hashtags */}
                        <div className="flex flex-wrap gap-1">
                          {post.hashtags.map((tag, i) => (
                            <span
                              key={i}
                              className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-xs text-blue-600 dark:text-blue-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Empty State Actions */}
        {filteredPosts.length === 0 && filter !== 'all' && (
          <button
            onClick={() => setFilter('all')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-600 transition-colors hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-400"
          >
            View All Posts
          </button>
        )}
      </div>
    </FormCard>
  );
}
