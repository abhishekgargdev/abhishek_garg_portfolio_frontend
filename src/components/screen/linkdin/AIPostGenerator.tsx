import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Copy, Check, Wand2, AlertCircle } from 'lucide-react';
import { FormCard } from '../FormCard';

interface GeneratedPost {
  id: string;
  content: string;
  hashtags: string[];
  timestamp: string;
}

interface AIPostGeneratorProps {
  onSchedule: (post: GeneratedPost) => void;
}

export function AIPostGenerator({ onSchedule }: AIPostGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState<'professional' | 'casual' | 'inspirational' | 'technical'>(
    'professional',
  );
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toneOptions = [
    { value: 'professional', label: 'Professional', emoji: '💼' },
    { value: 'casual', label: 'Casual', emoji: '😊' },
    { value: 'inspirational', label: 'Inspirational', emoji: '✨' },
    { value: 'technical', label: 'Technical', emoji: '🔧' },
  ] as const;

  const lengthOptions = [
    { value: 'short', label: 'Short', description: '~100 words' },
    { value: 'medium', label: 'Medium', description: '~200 words' },
    { value: 'long', label: 'Long', description: '~300 words' },
  ] as const;

  // Mock AI generation
  const generatePosts = async () => {
    if (!prompt.trim()) {
      // toast.error('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setGeneratedPosts([]);
    setSelectedPost(null);

    // Simulate AI generation
    setTimeout(() => {
      const mockPosts: GeneratedPost[] = [
        {
          id: '1',
          content: `🚀 Excited to share my latest insights on ${prompt}!\n\nAs a Senior Software Developer specializing in MERN stack and AWS, I've learned that ${prompt.toLowerCase()} is crucial for modern development.\n\nKey takeaways:\n• Understanding core concepts\n• Implementing best practices\n• Leveraging cloud technologies\n\nWhat's your experience with ${prompt}? Let's discuss in the comments! 👇`,
          hashtags: ['#SoftwareDevelopment', '#TechInsights', '#MERN', '#AWS', '#CloudComputing'],
          timestamp: new Date().toISOString(),
        },
        {
          id: '2',
          content: `💡 Just finished working on an amazing project involving ${prompt}.\n\nThe journey taught me valuable lessons about scalability, performance, and user experience. Here's what worked:\n\n1️⃣ Planning architecture early\n2️⃣ Testing thoroughly\n3️⃣ Iterating based on feedback\n\nAlways learning, always growing! 🌱\n\nWhat challenges have you faced with ${prompt}? Share your thoughts!`,
          hashtags: ['#DeveloperLife', '#CodingJourney', '#TechTips', '#WebDev', '#Innovation'],
          timestamp: new Date().toISOString(),
        },
        {
          id: '3',
          content: `📊 Real talk about ${prompt} in modern software development.\n\nAfter 4+ years in the industry, I've seen trends come and go. But ${prompt} remains a game-changer.\n\nMy approach:\n✅ Focus on fundamentals\n✅ Stay updated with latest tools\n✅ Build scalable solutions\n\nThe tech landscape is evolving rapidly. Are you keeping up?\n\nDrop a 🔥 if you're passionate about ${prompt}!`,
          hashtags: ['#TechTrends', '#SoftwareEngineering', '#CareerGrowth', '#Programming'],
          timestamp: new Date().toISOString(),
        },
      ];

      setGeneratedPosts(mockPosts);
      setSelectedPost(mockPosts[0].id);
      setIsGenerating(false);
      // toast.success('Posts generated successfully!', {
      //   description: `3 variations created based on your prompt`
      // });
    }, 2500);
  };

  const handleCopy = (post: GeneratedPost) => {
    const fullContent = `${post.content}\n\n${post.hashtags.join(' ')}`;
    navigator.clipboard.writeText(fullContent);
    setCopiedId(post.id);
    // toast.success('Copied to clipboard!');

    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSchedule = () => {
    const post = generatedPosts.find((p) => p.id === selectedPost);
    if (post) {
      onSchedule(post);
      // toast.success('Ready to schedule!', {
      //   description: 'Configure your posting schedule below'
      // });
    }
  };

  return (
    <FormCard
      title="AI Post Generator"
      description="Generate engaging LinkedIn posts using AI based on your prompts"
    >
      <div className="space-y-6">
        {/* Prompt Input */}
        <div className="space-y-2">
          <label htmlFor="prompt" className="text-sm text-slate-700 dark:text-slate-300">
            What would you like to post about?
          </label>
          <div className="relative">
            <Wand2 className="absolute top-3 left-3 h-5 w-5 text-slate-400" />
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., 'My experience with React hooks', 'Tips for cloud architecture', 'Journey learning AWS'..."
              rows={3}
              className="w-full resize-none rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-11 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none dark:border-white/10 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Tone Selection */}
        <div className="space-y-2">
          <label className="text-sm text-slate-700 dark:text-slate-300">Tone</label>
          <div className="grid grid-cols-4 gap-2">
            {toneOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setTone(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-xl border p-3 transition-all ${
                  tone === option.value
                    ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-300'
                }`}
              >
                <div className="mb-1 text-xl">{option.emoji}</div>
                <div className="text-xs">{option.label}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Length Selection */}
        <div className="space-y-2">
          <label className="text-sm text-slate-700 dark:text-slate-300">Length</label>
          <div className="grid grid-cols-3 gap-2">
            {lengthOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setLength(option.value)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-xl border p-3 transition-all ${
                  length === option.value
                    ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30 dark:text-slate-300'
                }`}
              >
                <div className="mb-1 text-sm">{option.label}</div>
                <div className="text-xs opacity-70">{option.description}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <motion.button
          onClick={generatePosts}
          disabled={isGenerating || !prompt.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-white shadow-lg shadow-purple-500/30 transition-shadow hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Generating posts...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Generate AI Posts
            </>
          )}
        </motion.button>

        {/* Generated Posts */}
        <AnimatePresence>
          {generatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900 dark:text-white">Generated Variations</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {generatedPosts.length} options
                </span>
              </div>

              {/* Post Variations */}
              <div className="space-y-3">
                {generatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedPost(post.id)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      selectedPost === post.id
                        ? 'border-cyan-500/50 bg-cyan-500/10'
                        : 'border-slate-300 bg-white hover:border-cyan-500/30 dark:border-white/10 dark:bg-slate-800/30'
                    }`}
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                            selectedPost === post.id
                              ? 'bg-cyan-500 text-white'
                              : 'bg-slate-300 text-slate-700 dark:bg-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          Variation {index + 1}
                        </span>
                      </div>

                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(post);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-lg p-1.5 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        {copiedId === post.id ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-slate-500" />
                        )}
                      </motion.button>
                    </div>

                    <p className="mb-3 text-sm whitespace-pre-line text-slate-700 dark:text-slate-300">
                      {post.content}
                    </p>

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
                  </motion.div>
                ))}
              </div>

              {/* Schedule Button */}
              <motion.button
                onClick={handleSchedule}
                disabled={!selectedPost}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Use Selected Post & Schedule
              </motion.button>

              {/* Tips */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <div className="flex gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <div className="text-xs text-amber-700 dark:text-amber-300">
                    <strong>Pro Tip:</strong> Review and customize AI-generated content before
                    posting. Add your personal touch to make it authentic!
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FormCard>
  );
}
