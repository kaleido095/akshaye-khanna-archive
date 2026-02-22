
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CommunityPost } from '../types';
import { MOCK_COMMUNITY_POSTS } from '../data/mockCommunityData';
import { ArrowUp, ArrowDown, MessageSquareText, Bookmark, Link as LinkIcon, Image as ImageIcon, Code, Share, ChevronLeft } from 'lucide-react';
import MarkdownRenderer from '../utils/MarkdownRenderer';
import CommentSection from '../components/CommentSection';
import { useUser } from '../contexts/UserContext'; // Import useUser

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<CommunityPost | null>(null);
  const [currentVotes, setCurrentVotes] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context


  useEffect(() => {
    // In a real app, this would fetch from a backend.
    // For now, iterate through MOCK_COMMUNITY_POSTS if not empty, or assume no posts.
    let foundPost: CommunityPost | undefined;
    if (MOCK_COMMUNITY_POSTS.length > 0) { // Check if mock data is not empty
      foundPost = MOCK_COMMUNITY_POSTS.find(p => p.id === postId);
    }
    // If no mock posts, we'll try to find from the `posts` state in `Community.tsx`
    // However, `PostDetail` is rendered directly via route, so it can't directly access `Community`'s state.
    // For a truly dynamic mock, we'd need a more global/persisted mock store or a full backend.
    // For now, if MOCK_COMMUNITY_POSTS is empty, no post will be found.

    if (foundPost) {
      setPost(foundPost);
      setCurrentVotes(foundPost.votes);
      setIsSaved(foundPost.saved);
    }
  }, [postId]);

  const handleVote = (direction: 'up' | 'down') => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    let newVotes = currentVotes;
    if (direction === 'up') {
      if (userVote === 'up') { // Un-upvote
        newVotes -= 1;
        setUserVote(null);
      } else { // Upvote
        if (userVote === 'down') newVotes += 1; // Remove downvote first
        newVotes += 1;
        setUserVote('up');
      }
    } else { // direction === 'down'
      if (userVote === 'down') { // Un-downvote
        newVotes += 1;
        setUserVote(null);
      } else { // Downvote
        if (userVote === 'up') newVotes -= 1; // Remove upvote first
        newVotes -= 1;
        setUserVote('down');
      }
    }
    setCurrentVotes(newVotes);
    // In a real app, you'd send this to a backend
  };

  const handleSave = () => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setIsSaved(prev => !prev);
    // In a real app, you'd send this to a backend
  };

  const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };

  const getFlairColor = (flair: string) => {
    switch (flair) {
      case 'Prompt': return 'bg-blue-900/40 text-blue-300';
      case 'Model Update': return 'bg-green-900/40 text-green-300';
      case 'Workflow': return 'bg-purple-900/40 text-purple-300';
      case 'UI/UX': return 'bg-yellow-900/40 text-yellow-300';
      case 'Experiment': return 'bg-orange-900/40 text-orange-300';
      case 'General': return 'bg-gray-900/40 text-gray-400';
      default: return 'bg-gray-900/40 text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Discussion': return 'border-red-700/50';
      case 'Question / Help': return 'border-blue-700/50';
      case 'Showcase': return 'border-green-700/50';
      case 'Bug / Issue': return 'border-yellow-700/50';
      case 'News / Update': return 'border-purple-700/50';
      default: return 'border-gray-700/50';
    }
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center text-gray-500">
        <h1 className="text-3xl font-serif font-bold">Post Not Found</h1>
        <p className="mt-4">The discussion you are looking for does not exist.</p>
        <Link to="/community" className="mt-8 inline-flex items-center text-red-700 hover:text-white transition-colors">
          <ChevronLeft size={16} className="mr-2" /> Back to Community
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link to="/community" className="inline-flex items-center text-gray-400 hover:text-red-700 transition-colors mb-8">
        <ChevronLeft size={16} className="mr-2" /> Back to Community
      </Link>

      <div className="bg-white/5 rounded-2xl p-8 border border-rose-950/30 fade-in flex space-x-6">
        <div className="flex flex-col items-center gap-1 text-gray-400 flex-shrink-0">
          <button
            onClick={() => handleVote('up')}
            className={`p-1 rounded-md hover:bg-red-900/30 transition-colors ${userVote === 'up' ? 'text-red-700' : ''}`}
            aria-label="Upvote post"
          >
            <ArrowUp size={24} />
          </button>
          <span className="font-bold text-xl text-white">{currentVotes}</span>
          <button
            onClick={() => handleVote('down')}
            className={`p-1 rounded-md hover:bg-red-900/30 transition-colors ${userVote === 'down' ? 'text-red-700' : ''}`}
            aria-label="Downvote post"
          >
            <ArrowDown size={24} />
          </button>
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <img src={post.userAvatar} alt={post.username} className="w-6 h-6 rounded-full object-cover" />
            <span>Posted by <span className="text-white font-medium">{post.username}</span> {timeAgo(post.timestamp)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className={`px-3 py-1 rounded-full border ${getTypeColor(post.type)} text-gray-300`}>{post.type}</span>
            <span className={`px-3 py-1 rounded-full ${getFlairColor(post.flair)}`}>{post.flair}</span>
          </div>

          {post.imageUrl && (
            <div className="mb-6">
              <img src={post.imageUrl} alt="Post image" className="max-h-96 w-full object-cover rounded-xl border border-white/10" />
            </div>
          )}
          {post.linkUrl && (
            <div className="mb-6 flex items-center gap-2 text-blue-400 hover:underline">
              <LinkIcon size={18} /> <a href={post.linkUrl} target="_blank" rel="noopener noreferrer">{post.linkUrl}</a>
            </div>
          )}
          {post.codeBlock && (
            <div className="mb-6 bg-gray-900 p-4 rounded-xl overflow-x-auto text-sm text-red-100 font-mono">
              <pre><code>{post.codeBlock}</code></pre>
            </div>
          )}

          <div className="text-gray-300 text-lg leading-relaxed mb-6">
            <MarkdownRenderer content={post.body} />
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-sm border-t border-white/5 pt-4">
            <div className="flex items-center gap-1">
              <MessageSquareText size={18} /> {post.comments.length} Comments
            </div>
            <button
              onClick={handleSave}
              className={`flex items-center gap-1 hover:text-red-700 transition-colors ${isSaved ? 'text-red-700' : ''}`}
              aria-label={isSaved ? "Unsave post" : "Save post"}
            >
              <Bookmark size={18} fill={isSaved ? '#dc2626' : 'none'} stroke={isSaved ? '#dc2626' : 'currentColor'} /> {isSaved ? 'Saved' : 'Save'}
            </button>
            <button className="flex items-center gap-1 hover:text-red-700 transition-colors" aria-label="Share post">
              <Share size={18} /> Share
            </button>
          </div>
        </div>
      </div>

      <CommentSection initialComments={post.comments} postId={post.id} opUserId={post.userId} />
    </div>
  );
};

export default PostDetail;