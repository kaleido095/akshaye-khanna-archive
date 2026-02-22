
import React, { useState } from 'react';
import { Comment as CommentType } from '../types';
import Comment from './Comment';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import { useUser } from '../contexts/UserContext'; // Import useUser

interface CommentSectionProps {
  initialComments: CommentType[];
  postId: string;
  opUserId: string; // The userId of the original poster
}

const CommentSection: React.FC<CommentSectionProps> = ({ initialComments, postId, opUserId }) => {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [newCommentText, setNewCommentText] = useState('');
  const [sortBy, setSortBy] = useState<'best' | 'top' | 'new' | 'old'>('new');
  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context


  const sortComments = (commentsArray: CommentType[]): CommentType[] => {
    const sorted = [...commentsArray].sort((a, b) => {
      if (sortBy === 'new') return b.timestamp - a.timestamp;
      if (sortBy === 'old') return a.timestamp - b.timestamp;
      if (sortBy === 'top' || sortBy === 'best') return b.likes - a.likes; // For mock, top and best are same
      return 0;
    });

    // Recursively sort replies
    return sorted.map(comment => ({
      ...comment,
      replies: comment.replies ? sortComments(comment.replies) : [],
    }));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    if (newCommentText.trim()) {
      const newComment: CommentType = {
        id: uuidv4(),
        userId: currentUser.id,
        username: currentUser.username,
        avatar: currentUser.avatar,
        body: newCommentText,
        timestamp: Date.now(),
        likes: 0,
        replies: [],
      };
      setComments(prev => [...prev, newComment]);
      setNewCommentText('');
    }
  };

  const handleReply = (parentId: string, replyBody: string) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    const findAndAddReply = (commentsArray: CommentType[]): CommentType[] => {
      return commentsArray.map(comment => {
        if (comment.id === parentId) {
          const newReply: CommentType = {
            id: uuidv4(),
            userId: currentUser.id,
            username: currentUser.username,
            avatar: currentUser.avatar,
            body: replyBody,
            timestamp: Date.now(),
            likes: 0,
            replies: [],
          };
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: findAndAddReply(comment.replies),
          };
        }
        return comment;
      });
    };
    setComments(findAndAddReply(comments));
  };

  const sortedComments = sortComments(comments);

  return (
    <div className="mt-12 p-8 bg-black/5 rounded-[30px] border border-rose-950/30">
      <h3 className="text-2xl font-serif font-bold mb-6">Comments ({comments.length})</h3>

      <form onSubmit={handleAddComment} className="mb-8 space-y-4">
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder={currentUser ? "What are your thoughts? (Markdown supported)..." : "Sign in to comment..."}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none resize-y"
          rows={5}
          disabled={!currentUser}
        ></textarea>
        <div className="flex justify-between items-center">
          {!currentUser && (
            <span className="text-gray-500 text-sm">You must be signed in to comment.</span>
          )}
          <button
            type="submit"
            className={`font-bold py-3 px-8 rounded-full transition-colors ${
              currentUser ? 'bg-red-900 hover:bg-red-800 text-white' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!currentUser}
          >
            Add Comment
          </button>
        </div>
      </form>

      <div className="flex justify-end mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm appearance-none cursor-pointer focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
        >
          <option value="best" className="bg-black">Sort by Best</option>
          <option value="top" className="bg-black">Sort by Top</option>
          <option value="new" className="bg-black">Sort by New</option>
          <option value="old" className="bg-black">Sort by Old</option>
        </select>
      </div>

      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            opUserId={opUserId}
            onReply={(parentId, replyBody) => handleReply(parentId, replyBody)}
            postId={postId}
          />
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;