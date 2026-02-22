
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommunityPost } from '../types';
import { ArrowUp, ArrowDown, MessageSquareText, Bookmark, Link as LinkIcon, Image as ImageIcon, Code, Share } from 'lucide-react';
import MarkdownRenderer from '../utils/MarkdownRenderer';
import { UserProfile } from '../contexts/UserContext'; // Import UserProfile
import { useUser } from '../contexts/UserContext'; // Import useUser

interface PostCardProps {
  post: CommunityPost;
  onVote: (postId: string, direction: 'up' | 'down') => void;
  onSave: (postId: string) => void;
  currentUser: UserProfile | null; // Pass currentUser as prop
}

const PostCard: React.FC<PostCardProps> = ({ post, onVote, onSave, currentUser }) => {
  const [currentVotes, setCurrentVotes] = useState(post.votes);
  const [isSaved, setIsSaved] = useState(post.saved);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null); // To track user's current vote
  const { setShowAuthModal } = useUser(); // Get setShowAuthModal from context

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
    onVote(post.id, direction); // Propagate to parent for global state (if implemented)
  };

  const handleSave = () => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setIsSaved(prev => !prev);
    onSave(post.id); // Propagate to parent
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

  // Fix: Construct the content string before passing it to MarkdownRenderer
  const truncatedBody = post.body.length > 200 ? post.body.substring(0, 200) + '...' : post.body;

  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-rose-950/30 hover:border-red-900/50 transition-all duration-300 flex space-x-4">
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <button
          onClick={() => handleVote('up')}
          className={`p-1 rounded-md hover:bg-red-900/30 transition-colors ${userVote === 'up' ? 'text-red-700' : ''}`}
          aria-label="Upvote post"
        >
          <ArrowUp size={20} />
        </button>
        <span className="font-bold text-lg text-white">{currentVotes}</span>
        <button
          onClick={() => handleVote('down')}
          className={`p-1 rounded-md hover:bg-red-900/30 transition-colors ${userVote === 'down' ? 'text-red-700' : ''}`}
          aria-label="Downvote post"
        >
          <ArrowDown size={20} />
        </button>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <img src={post.userAvatar} alt={post.username} className="w-5 h-5 rounded-full object-cover" />
          <span>Posted by <span className="text-white font-medium">{post.username}</span> {timeAgo(post.timestamp)}</span>
        </div>

        <Link to={`/community/${post.id}`} className="block">
          <h3 className="text-xl font-serif font-bold text-white mb-2 hover:text-red-700 transition-colors leading-snug">
            {post.title}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className={`px-3 py-1 rounded-full border ${getTypeColor(post.type)} text-gray-300`}>{post.type}</span>
          <span className={`px-3 py-1 rounded-full ${getFlairColor(post.flair)}`}>{post.flair}</span>
        </div>

        {post.imageUrl && (
          <div className="mb-4">
            <img src={post.imageUrl} alt="Post image" className="max-h-60 w-full object-cover rounded-lg border border-white/10" />
          </div>
        )}
        {post.linkUrl && (
          <div className="mb-4 flex items-center gap-2 text-blue-400 hover:underline">
            <LinkIcon size={16} /> <a href={post.linkUrl} target="_blank" rel="noopener noreferrer" className="truncate">{post.linkUrl}</a>
          </div>
        )}
        {post.codeBlock && (
          <div className="mb-4 bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm text-red-100 font-mono max-h-40">
            <code>{post.codeBlock.substring(0, 150)}{post.codeBlock.length > 150 ? '...' : ''}</code>
          </div>
        )}

        <div className="text-gray-300 text-sm mb-4 line-clamp-3">
          <MarkdownRenderer content={truncatedBody} />
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <Link to={`/community/${post.id}`} className="flex items-center gap-1 hover:text-red-700 transition-colors">
            <MessageSquareText size={16} /> {post.comments.length} Comments
          </Link>
          <button
            onClick={handleSave}
            className={`flex items-center gap-1 hover:text-red-700 transition-colors ${isSaved ? 'text-red-700' : ''}`}
            aria-label={isSaved ? "Unsave post" : "Save post"}
          >
            <Bookmark size={16} fill={isSaved ? '#dc2626' : 'none'} stroke={isSaved ? '#dc2626' : 'currentColor'} /> {isSaved ? 'Saved' : 'Save'}
          </button>
          <button className="flex items-center gap-1 hover:text-red-700 transition-colors" aria-label="Share post">
            <Share size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
