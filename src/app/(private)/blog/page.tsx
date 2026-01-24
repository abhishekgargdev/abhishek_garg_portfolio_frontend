'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye, ExternalLink, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormCard } from '@/components/screen/FormCard';
import { FileUpload } from '@/components/screen/FileUpload';
import { TagInput } from '@/components/screen/TagInput';

interface BlogPost {
  id: string;
  title: string;
  coverImage: File | null;
  summary: string;
  readTime: string;
  categoryTags: string[];
  articleLink: string;
  publishDate: string;
}
const BlogsPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Building Scalable Microservices with Node.js',
      coverImage: null,
      summary:
        'Learn how to architect and build scalable microservices using Node.js, Express, and Docker.',
      readTime: '8 min read',
      categoryTags: ['Node.js', 'Microservices', 'DevOps'],
      articleLink: 'https://blog.example.com/microservices-nodejs',
      publishDate: '2024-01',
    },
  ]);

  const [selectedPost, setSelectedPost] = useState<string | null>(posts[0]?.id || null);
  const [showPreview, setShowPreview] = useState(false);

  const addPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '',
      coverImage: null,
      summary: '',
      readTime: '',
      categoryTags: [],
      articleLink: '',
      publishDate: '',
    };
    setPosts([...posts, newPost]);
    setSelectedPost(newPost.id);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePost = (id: string, field: keyof BlogPost, value: any) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, [field]: value } : post)));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
    if (selectedPost === id) {
      setSelectedPost(posts[0]?.id || null);
    }
  };

  const currentPost = posts.find((p) => p.id === selectedPost);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Blog / Knowledge Hub</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your blog posts and articles</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Grid
          </motion.button>
          <motion.button
            onClick={addPost}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Blog Post
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Blog Cards Preview</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <BookOpen className="h-12 w-12 text-purple-400" />
                </div>
                <div className="p-4">
                  <h4 className="mb-2 line-clamp-2 text-white">{post.title || 'Blog Title'}</h4>
                  <p className="mb-3 line-clamp-2 text-sm text-slate-400">
                    {post.summary || 'Summary'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-400">{post.readTime || '5 min read'}</span>
                    <div className="flex gap-1">
                      {post.categoryTags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Blog List */}
        <div className="lg:col-span-1">
          <FormCard>
            <h3 className="mb-4 text-white">Blog Posts</h3>
            <div className="space-y-2">
              {posts.map((post) => (
                <motion.button
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full rounded-xl px-4 py-3 text-left transition-all ${
                    selectedPost === post.id
                      ? 'border border-cyan-500/30 bg-cyan-500/20 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <p className="truncate text-sm">{post.title || 'New Post'}</p>
                  <p className="text-xs text-slate-500">{post.readTime}</p>
                </motion.button>
              ))}
            </div>
          </FormCard>
        </div>

        {/* Blog Form */}
        <div className="lg:col-span-3">
          {currentPost && (
            <FormCard>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl text-white">Edit Blog Post</h3>
                <motion.button
                  onClick={() => deletePost(currentPost.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                >
                  <Trash2 className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Blog Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentPost.title}
                    onChange={(e) => updatePost(currentPost.id, 'title', e.target.value)}
                    placeholder="e.g., Building Scalable Microservices"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                </div>

                <FileUpload
                  label="Cover Image"
                  accept="image/*"
                  onChange={(file) => updatePost(currentPost.id, 'coverImage', file)}
                />

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Summary <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={currentPost.summary}
                    onChange={(e) => updatePost(currentPost.id, 'summary', e.target.value)}
                    placeholder="Brief summary of the article (2-3 sentences)..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    {currentPost.summary.length} characters
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Read Time</label>
                    <input
                      type="text"
                      value={currentPost.readTime}
                      onChange={(e) => updatePost(currentPost.id, 'readTime', e.target.value)}
                      placeholder="e.g., 5 min read"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Publish Date</label>
                    <input
                      type="month"
                      value={currentPost.publishDate}
                      onChange={(e) => updatePost(currentPost.id, 'publishDate', e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Category Tags</label>
                  <TagInput
                    tags={currentPost.categoryTags}
                    onChange={(categoryTags) =>
                      updatePost(currentPost.id, 'categoryTags', categoryTags)
                    }
                    placeholder="Add category..."
                  />
                  <p className="mt-2 text-xs text-slate-500">e.g., Node.js, React, DevOps</p>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Article Link <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={currentPost.articleLink}
                      onChange={(e) => updatePost(currentPost.id, 'articleLink', e.target.value)}
                      placeholder="https://yourblog.com/article"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                    <ExternalLink className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  </div>
                </div>
              </div>
            </FormCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
