
import React, { useState } from 'react';
import { Comment as CommentType } from '../types';
import { Heart, MessageSquareText, ChevronUp, ChevronDown } from 'lucide-react';
import MarkdownRenderer from '../utils/MarkdownRenderer';
import { useUser } from '../contexts/UserContext'; // Import useUser

interface CommentProps {
  comment: CommentType;
  opUserId: string; // The userId of the original poster
  onReply: (parentId: string, replyBody: string, postId: string) => void;
  postId: string;
}

const Comment: React.FC<CommentProps> = ({ comment, opUserId, onReply, postId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [likes, setLikes] = useState(comment.likes);
  const [collapsed, setCollapsed] = useState(false);
  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context

  const handleLike = () => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setLikes(prev => prev + 1); // Client-side like
  };

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    if (replyText.trim() && postId) {
      onReply(comment.id, replyText, postId);
      setReplyText('');
      setShowReplyForm(false);
    }
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

  const isOriginalPoster = comment.userId === opUserId;

  return (
    <div className="flex gap-3 py-4 border-l pl-4 border-white/5 first:pt-0">
      <div className="flex-shrink-0">
        <img src={comment.avatar} alt={comment.username} className="w-8 h-8 rounded-full object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-semibold text-white ${isOriginalPoster ? 'text-red-700' : ''}`}>
            {comment.username}
          </span>
          {isOriginalPoster && (
            <span className="bg-red-900/40 text-red-200 text-xs px-2 py-0.5 rounded-full font-bold">OP</span>
          )}
          <span className="text-gray-500 text-xs">• {timeAgo(comment.timestamp)}</span>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-gray-500 hover:text-white transition-colors text-xs flex items-center gap-1"
            aria-label={collapsed ? "Expand comment thread" : "Collapse comment thread"}
          >
            {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />} {collapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>

        {!collapsed && (
          <>
            <MarkdownRenderer content={comment.body} className="text-gray-300 text-sm mb-3" />

            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <button
                onClick={handleLike}
                className="flex items-center gap-1 hover:text-red-700 transition-colors"
              >
                <Heart size={16} fill={likes > 0 ? '#dc2626' : 'none'} stroke={likes > 0 ? '#dc2626' : 'currentColor'} /> {likes}
              </button>
              <button
                onClick={() => currentUser ? setShowReplyForm(!showReplyForm) : setShowAuthModal(true)}
                className="flex items-center gap-1 hover:text-red-700 transition-colors"
              >
                <MessageSquareText size={16} /> Reply
              </button>
            </div>

            {showReplyForm && currentUser && (
              <form onSubmit={handleReplySubmit} className="mt-4 space-y-3">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply (Markdown supported)..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none resize-y"
                  rows={3}
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReplyForm(false)}
                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-white text-sm transition-colors"
                  >
                    Post Reply
                  </button>
                </div>
              </form>
            )}

            {comment.replies.length > 0 && (
              <div className="mt-4 border-l border-white/5 pl-4 space-y-4">
                {comment.replies.map((reply) => (
                  <Comment key={reply.id} comment={reply} opUserId={opUserId} onReply={onReply} postId={postId} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;