'use client';
import { AIPostGenerator } from '@/components/screen/linkdin/AIPostGenerator';
import { LinkedInConnect } from '@/components/screen/linkdin/LinkedInConnect';
import { PostQueue } from '@/components/screen/linkdin/PostQueue';
import { PostScheduler } from '@/components/screen/linkdin/PostScheduler';
import { useState } from 'react';

interface GeneratedPost {
  id: string;
  content: string;
  hashtags: string[];
  timestamp: string;
}
const LinkedInIntegration = () => {
  const [selectedPost, setSelectedPost] = useState<GeneratedPost | null>(null);

  const handleSchedule = (post: GeneratedPost) => {
    setSelectedPost(post);
    // Scroll to scheduler
    setTimeout(() => {
      const schedulerElement = document.getElementById('post-scheduler');
      schedulerElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="space-y-6">
      {/* LinkedIn Connection */}
      <LinkedInConnect />

      {/* AI Post Generator */}
      <AIPostGenerator onSchedule={handleSchedule} />

      {/* Post Scheduler */}
      <div id="post-scheduler">
        <PostScheduler
          selectedPost={
            selectedPost
              ? { content: selectedPost.content, hashtags: selectedPost.hashtags }
              : undefined
          }
        />
      </div>

      {/* Post Queue */}
      <PostQueue />
    </div>
  );
};

export default LinkedInIntegration;
