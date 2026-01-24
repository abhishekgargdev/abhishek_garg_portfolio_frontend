import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Send, Settings, Plus, Minus } from 'lucide-react';
import { FormCard } from '../FormCard';

interface ScheduleSettings {
  postsPerDay: number;
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
  timezone: string;
}

interface ScheduledPost {
  id: string;
  content: string;
  scheduledDate: string;
  scheduledTime: string;
  status: 'pending' | 'scheduled' | 'posted' | 'failed';
}

interface PostSchedulerProps {
  selectedPost?: {
    content: string;
    hashtags: string[];
  };
}

export function PostScheduler({ selectedPost }: PostSchedulerProps) {
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('09:00');
  const [settings, setSettings] = useState<ScheduleSettings>({
    postsPerDay: 2,
    startTime: '09:00',
    endTime: '18:00',
    daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
    timezone: 'Asia/Kolkata',
  });
  const [useAutoSchedule, setUseAutoSchedule] = useState(false);

  const daysOfWeek = [
    { value: 0, label: 'Sun' },
    { value: 1, label: 'Mon' },
    { value: 2, label: 'Tue' },
    { value: 3, label: 'Wed' },
    { value: 4, label: 'Thu' },
    { value: 5, label: 'Fri' },
    { value: 6, label: 'Sat' },
  ];

  const timezones = [
    'Asia/Kolkata',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  const handlePostsPerDayChange = (delta: number) => {
    setSettings((prev) => ({
      ...prev,
      postsPerDay: Math.max(1, Math.min(10, prev.postsPerDay + delta)),
    }));
  };

  const toggleDay = (day: number) => {
    setSettings((prev) => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter((d) => d !== day)
        : [...prev.daysOfWeek, day].sort(),
    }));
  };

  const handleScheduleNow = () => {
    if (!selectedPost) {
      // toast.error('No post selected');
      return;
    }

    if (!scheduleDate || !scheduleTime) {
      // toast.error('Please select date and time');
      return;
    }

    // toast.success('Post Scheduled!', {
    //   description: `Your post will be published on ${new Date(scheduleDate).toLocaleDateString()} at ${scheduleTime}`,
    // });
  };

  const handleAutoSchedule = () => {
    if (!selectedPost) {
      // toast.error('No post selected');
      return;
    }

    // toast.success('Auto-scheduling configured!', {
    //   description: `${settings.postsPerDay} posts per day will be scheduled automatically`,
    // });
  };

  // Get min date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <FormCard
      title="Post Scheduling"
      description="Schedule your LinkedIn posts for optimal engagement"
    >
      <div className="space-y-6">
        {/* Selected Post Preview */}
        {selectedPost && (
          <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Post Ready to Schedule
              </span>
            </div>
            <p className="line-clamp-3 text-sm text-slate-700 dark:text-slate-300">
              {selectedPost.content}
            </p>
          </div>
        )}

        {/* Schedule Type Toggle */}
        <div className="flex gap-2 rounded-xl bg-slate-200 p-1 dark:bg-slate-800/50">
          <button
            onClick={() => setUseAutoSchedule(false)}
            className={`flex-1 rounded-lg px-4 py-2 transition-all ${
              !useAutoSchedule
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Manual Schedule</span>
            </div>
          </button>
          <button
            onClick={() => setUseAutoSchedule(true)}
            className={`flex-1 rounded-lg px-4 py-2 transition-all ${
              useAutoSchedule
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Auto Schedule</span>
            </div>
          </button>
        </div>

        {!useAutoSchedule ? (
          /* Manual Scheduling */
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="space-y-2">
                <label
                  htmlFor="scheduleDate"
                  className="text-sm text-slate-700 dark:text-slate-300"
                >
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    id="scheduleDate"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    min={today}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white"
                  />
                </div>
              </div>

              {/* Time Picker */}
              <div className="space-y-2">
                <label
                  htmlFor="scheduleTime"
                  className="text-sm text-slate-700 dark:text-slate-300"
                >
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="time"
                    id="scheduleTime"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleScheduleNow}
              disabled={!selectedPost || !scheduleDate || !scheduleTime}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
              Schedule Post
            </motion.button>
          </div>
        ) : (
          /* Auto Scheduling Settings */
          <div className="space-y-6">
            {/* Posts Per Day */}
            <div className="space-y-2">
              <label className="text-sm text-slate-700 dark:text-slate-300">Posts Per Day</label>
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => handlePostsPerDayChange(-1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-slate-300 bg-white p-2 transition-colors hover:border-cyan-500 dark:border-white/10 dark:bg-slate-800/50"
                >
                  <Minus className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </motion.button>

                <div className="flex-1 text-center">
                  <div className="mb-1 text-3xl text-slate-900 dark:text-white">
                    {settings.postsPerDay}
                  </div>
                  <div className="text-xs text-slate-500">
                    {settings.postsPerDay === 1 ? 'post' : 'posts'} per day
                  </div>
                </div>

                <motion.button
                  onClick={() => handlePostsPerDayChange(1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-slate-300 bg-white p-2 transition-colors hover:border-cyan-500 dark:border-white/10 dark:bg-slate-800/50"
                >
                  <Plus className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </motion.button>
              </div>
            </div>

            {/* Active Days */}
            <div className="space-y-2">
              <label className="text-sm text-slate-700 dark:text-slate-300">Active Days</label>
              <div className="flex gap-2">
                {daysOfWeek.map((day) => (
                  <motion.button
                    key={day.value}
                    onClick={() => toggleDay(day.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 rounded-lg py-3 transition-all ${
                      settings.daysOfWeek.includes(day.value)
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'border border-slate-300 bg-white text-slate-600 dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-400'
                    }`}
                  >
                    <div className="text-xs">{day.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Time Range */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="startTime" className="text-sm text-slate-700 dark:text-slate-300">
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  value={settings.startTime}
                  onChange={(e) => setSettings((prev) => ({ ...prev, startTime: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="endTime" className="text-sm text-slate-700 dark:text-slate-300">
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  value={settings.endTime}
                  onChange={(e) => setSettings((prev) => ({ ...prev, endTime: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white"
                />
              </div>
            </div>

            {/* Timezone */}
            <div className="space-y-2">
              <label htmlFor="timezone" className="text-sm text-slate-700 dark:text-slate-300">
                Timezone
              </label>
              <select
                id="timezone"
                value={settings.timezone}
                onChange={(e) => setSettings((prev) => ({ ...prev, timezone: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white"
              >
                {timezones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>

            {/* Summary */}
            <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4">
              <h4 className="mb-2 text-sm text-slate-900 dark:text-white">Auto-Schedule Summary</h4>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <li>
                  • {settings.postsPerDay} {settings.postsPerDay === 1 ? 'post' : 'posts'} per day
                </li>
                <li>• Active on {settings.daysOfWeek.length} days per week</li>
                <li>
                  • Between {settings.startTime} - {settings.endTime}
                </li>
                <li>• Timezone: {settings.timezone}</li>
              </ul>
            </div>

            <motion.button
              onClick={handleAutoSchedule}
              disabled={!selectedPost || settings.daysOfWeek.length === 0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white shadow-lg shadow-purple-500/30 transition-shadow hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Settings className="h-5 w-5" />
              Enable Auto-Scheduling
            </motion.button>
          </div>
        )}
      </div>
    </FormCard>
  );
}
