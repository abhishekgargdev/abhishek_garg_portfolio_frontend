import { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, CheckCircle, AlertCircle, RefreshCw, Unlink } from 'lucide-react';
import { FormCard } from '../FormCard';

interface LinkedInAccount {
  id: string;
  name: string;
  email: string;
  profileUrl: string;
  followers: number;
  connected: boolean;
  connectedAt: string;
}

export function LinkedInConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState<LinkedInAccount | null>(null);

  // Mock connected account data
  const mockAccount: LinkedInAccount = {
    id: 'linkedin_123',
    name: 'Abhishek Garg',
    email: 'abhishek.garg@example.com',
    profileUrl: 'https://linkedin.com/in/abhishek-garg',
    followers: 5420,
    connected: true,
    connectedAt: new Date().toISOString(),
  };

  const handleConnect = async () => {
    setIsConnecting(true);

    // Simulate OAuth flow
    setTimeout(() => {
      setIsConnecting(false);
      setConnectedAccount(mockAccount);
      // toast.success('LinkedIn Connected!', {
      //   description: 'Your LinkedIn account has been successfully connected.',
      // });
    }, 2000);
  };

  const handleDisconnect = async () => {
    setIsDisconnecting(true);

    setTimeout(() => {
      setIsDisconnecting(false);
      setConnectedAccount(null);
      // toast.info('LinkedIn Disconnected', {
      //   description: 'Your LinkedIn account has been disconnected.',
      // });
    }, 1000);
  };

  const handleRefreshToken = async () => {
    // toast.success('Token Refreshed', {
    //   description: 'Your LinkedIn access token has been refreshed.',
    // });
  };

  return (
    <FormCard
      title="LinkedIn Account Connection"
      description="Connect your LinkedIn account to publish AI-generated posts"
    >
      <div className="space-y-6">
        {!connectedAccount ? (
          /* Not Connected State */
          <div className="py-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
              <Linkedin className="h-10 w-10 text-white" />
            </div>

            <h3 className="mb-2 text-slate-900 dark:text-white">Connect Your LinkedIn</h3>
            <p className="mx-auto mb-6 max-w-md text-sm text-slate-600 dark:text-slate-400">
              Authorize this application to post content on your behalf. We will never post without
              your explicit permission.
            </p>

            <motion.button
              onClick={handleConnect}
              disabled={isConnecting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-white shadow-lg shadow-blue-500/30 transition-shadow hover:shadow-blue-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Linkedin className="h-5 w-5" />
              {isConnecting ? 'Connecting...' : 'Connect LinkedIn Account'}
            </motion.button>

            {/* OAuth Info */}
            <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
              <p className="mb-2 text-xs text-slate-600 dark:text-slate-400">
                <strong>Permissions Required:</strong>
              </p>
              <ul className="mx-auto max-w-md space-y-1 text-left text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-500" />
                  <span>Read your profile information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-500" />
                  <span>Create and manage posts on your behalf</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-500" />
                  <span>Access basic analytics</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Connected State */
          <div>
            <div className="mb-4 flex items-start justify-between rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6">
              <div className="flex flex-1 items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-slate-900 dark:text-white">{connectedAccount.name}</h3>
                    <div className="flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/20 px-2 py-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">Connected</span>
                    </div>
                  </div>
                  <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">
                    {connectedAccount.email}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {connectedAccount.followers.toLocaleString()} followers
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                    Connected {new Date(connectedAccount.connectedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <motion.button
                  onClick={handleRefreshToken}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border border-white/10 bg-slate-800/30 p-2 transition-colors hover:bg-slate-800/50 dark:bg-slate-700/30 dark:hover:bg-slate-700/50"
                  title="Refresh Token"
                >
                  <RefreshCw className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </motion.button>

                <motion.button
                  onClick={handleDisconnect}
                  disabled={isDisconnecting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 transition-colors hover:bg-red-500/20 disabled:opacity-50"
                  title="Disconnect"
                >
                  <Unlink className="h-4 w-4 text-red-500" />
                </motion.button>
              </div>
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-800/10 p-4 text-center dark:bg-slate-800/30">
                <p className="mb-1 text-2xl text-slate-900 dark:text-white">24</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Posts This Month</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/10 p-4 text-center dark:bg-slate-800/30">
                <p className="mb-1 text-2xl text-slate-900 dark:text-white">12.5K</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Total Impressions</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/10 p-4 text-center dark:bg-slate-800/30">
                <p className="mb-1 text-2xl text-slate-900 dark:text-white">8</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Scheduled Posts</p>
              </div>
            </div>

            {/* API Status */}
            <div className="mt-4 rounded-xl border border-white/10 bg-slate-800/10 p-4 dark:bg-slate-800/30">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">API Status</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-xs text-green-600 dark:text-green-400">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>Token expires in: 29 days</span>
                <button
                  onClick={handleRefreshToken}
                  className="text-cyan-500 transition-colors hover:text-cyan-400"
                >
                  Refresh now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </FormCard>
  );
}
