
import React, { useState } from 'react';
import { PostType, PostFlair } from '../types';
import { ImageIcon, Link as LinkIcon, Code } from 'lucide-react';
import { useUser } from '../contexts/UserContext'; // Import useUser

interface PostFormProps {
  onSubmit: (newPost: {
    title: string;
    body: string;
    type: PostType;
    flair: PostFlair;
    imageUrl?: string;
    linkUrl?: string;
    codeBlock?: string;
  }) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState<PostType>('Discussion');
  const [flair, setFlair] = useState<PostFlair>('General');
  const [imageUrl, setImageUrl] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [codeBlock, setCodeBlock] = useState('');

  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    if (title.trim()) {
      onSubmit({
        title,
        body,
        type,
        flair,
        ...(imageUrl && { imageUrl }),
        ...(linkUrl && { linkUrl }),
        ...(codeBlock && { codeBlock }),
      });
      setTitle('');
      setBody('');
      setImageUrl('');
      // Fix: Corrected typo from rSetLinkUrl to setLinkUrl
      setLinkUrl('');
      setCodeBlock('');
      onCancel(); // Close form after submission
    }
  };

  return (
    <div className="bg-black/5 rounded-2xl p-8 border border-rose-950/30 mb-8 fade-in">
      <h2 className="text-2xl font-serif font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="post-title" className="block text-sm font-medium text-gray-400 mb-2">Title <span className="text-red-700">*</span></label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="A clear and concise title for your post"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
            disabled={!currentUser}
          />
        </div>

        <div>
          <label htmlFor="post-body" className="block text-sm font-medium text-gray-400 mb-2">Body (Markdown Supported)</label>
          <textarea
            id="post-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={currentUser ? "Share your thoughts, questions, or showcase (Markdown: **bold**, *italic*, `code`, ```block```)" : "Sign in to share your thoughts..."}
            rows={8}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none resize-y"
            disabled={!currentUser}
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="post-type" className="block text-sm font-medium text-gray-400 mb-2">Post Type</label>
            <select
              id="post-type"
              value={type}
              onChange={(e) => setType(e.target.value as PostType)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
              disabled={!currentUser}
            >
              <option className="bg-black" value="Discussion">Discussion</option>
              <option className="bg-black" value="Question / Help">Question / Help</option>
              <option className="bg-black" value="Showcase">Showcase</option>
              <option className="bg-black" value="Bug / Issue">Bug / Issue</option>
              <option className="bg-black" value="News / Update">News / Update</option>
            </select>
          </div>
          <div>
            <label htmlFor="post-flair" className="block text-sm font-medium text-gray-400 mb-2">Flair <span className="text-red-700">*</span></label>
            <select
              id="post-flair"
              value={flair}
              onChange={(e) => setFlair(e.target.value as PostFlair)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
              disabled={!currentUser}
            >
              <option className="bg-black" value="General">General</option>
              <option className="bg-black" value="Prompt">Prompt</option>
              <option className="bg-black" value="Model Update">Model Update</option>
              <option className="bg-black" value="Workflow">Workflow</option>
              <option className="bg-black" value="UI/UX">UI/UX</option>
              <option className="bg-black" value="Experiment">Experiment</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <p className="text-sm font-medium text-gray-400 flex items-center gap-2">Optional Attachments</p>
          <div>
            <label htmlFor="image-url" className="block text-sm text-gray-500 mb-2 flex items-center gap-2"><ImageIcon size={16} /> Image URL</label>
            <input
              id="image-url"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste an image URL (e.g., Imgur, Cloudinary)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
              disabled={!currentUser}
            />
          </div>
          <div>
            <label htmlFor="link-url" className="block text-sm text-gray-500 mb-2 flex items-center gap-2"><LinkIcon size={16} /> Link URL</label>
            <input
              id="link-url"
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Paste a link to external content"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
              disabled={!currentUser}
            />
          </div>
          <div>
            <label htmlFor="code-block" className="block text-sm text-gray-500 mb-2 flex items-center gap-2"><Code size={16} /> Code Block</label>
            <textarea
              id="code-block"
              value={codeBlock}
              onChange={(e) => setCodeBlock(e.target.value)}
              placeholder="Paste a block of code or a prompt (use ``` for formatting)"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 font-mono text-sm focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none resize-y"
              disabled={!currentUser}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-white/5">
          {!currentUser && (
            <span className="text-gray-500 text-sm">You must be signed in to post.</span>
          )}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-3 rounded-full font-bold transition-colors shadow-lg shadow-red-900/40 ${
                currentUser ? 'bg-red-900 hover:bg-red-800 text-white' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!currentUser}
            >
              Post to Community
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
