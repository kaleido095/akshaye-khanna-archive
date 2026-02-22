
import React, { useState } from 'react';
import { CommunityPost, PostType, PostFlair } from '../types';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';
import PostForm from '../components/PostForm';
import { PlusCircle, Search } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import { useUser } from '../contexts/UserContext'; // Import useUser

const Community: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]); // Initialize with empty array
  const [showPostForm, setShowPostForm] = useState(false);
  const [sortBy, setSortBy] = useState<'hot' | 'new' | 'top'>('new');
  const [filterByFlair, setFilterByFlair] = useState<PostFlair | 'All'>('All');
  const [filterByType, setFilterByType] = useState<PostType | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context

  const handlePostSubmit = (newPostData: {
    title: string;
    body: string;
    type: PostType;
    flair: PostFlair;
    imageUrl?: string;
    linkUrl?: string;
    codeBlock?: string;
  }) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    const newPost: CommunityPost = {
      id: uuidv4(),
      userId: currentUser.id,
      username: currentUser.username,
      userAvatar: currentUser.avatar,
      votes: 1, // Default initial vote
      timestamp: Date.now(),
      saved: false,
      comments: [],
      ...newPostData,
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const handleVote = (postId: string, direction: 'up' | 'down') => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          let newVotes = post.votes;
          // Simplified client-side vote logic for mock: just increment/decrement
          if (direction === 'up') newVotes += 1;
          else newVotes -= 1;
          return { ...post, votes: newVotes };
        }
        return post;
      })
    );
  };

  const handleSave = (postId: string) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const sortAndFilterPosts = () => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by flair
    if (filterByFlair !== 'All') {
      filtered = filtered.filter(post => post.flair === filterByFlair);
    }

    // Filter by type
    if (filterByType !== 'All') {
      filtered = filtered.filter(post => post.type === filterByType);
    }

    // Sort
    if (sortBy === 'new') {
      filtered.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortBy === 'top') {
      filtered.sort((a, b) => b.votes - a.votes);
    } else if (sortBy === 'hot') {
      // For mock, 'hot' can be a combination of votes and recentness
      filtered.sort((a, b) => (b.votes * (1 + (Date.now() - b.timestamp) / (1000 * 60 * 60 * 24 * 7))) - (a.votes * (1 + (Date.now() - a.timestamp) / (1000 * 60 * 60 * 24 * 7))));
    }
    return filtered;
  };

  const currentPosts = sortAndFilterPosts();

  const postTypes: PostType[] = ['Discussion', 'Question / Help', 'Showcase', 'Bug / Issue', 'News / Update'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Community Hub</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Discussions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Engage with fellow fans, share insights, ask questions, and contribute to the collective knowledge surrounding Akshaye Khanna.
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white/5 rounded-2xl p-4 border border-rose-950/30 mb-8 gap-4">
            <button
              onClick={() => currentUser ? setShowPostForm(true) : setShowAuthModal(true)}
              className="bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center gap-2 shadow-md shadow-red-900/30 flex-shrink-0"
            >
              <PlusCircle size={20} /> Create Post
            </button>
            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm appearance-none cursor-pointer focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
            >
              <option value="new" className="bg-black">New</option>
              <option value="top" className="bg-black">Top</option>
              <option value="hot" className="bg-black">Hot</option>
            </select>
          </div>

          {/* Post Form */}
          {showPostForm && currentUser && <PostForm onSubmit={handlePostSubmit} onCancel={() => setShowPostForm(false)} />}

          {/* Filter by Type */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setFilterByType('All')}
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                filterByType === 'All' ? 'bg-red-900 text-white' : 'bg-gray-900/40 text-gray-400 hover:bg-gray-800/60'
              }`}
            >
              All Types
            </button>
            {postTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilterByType(type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                  filterByType === type ? 'bg-red-900 text-white' : 'bg-gray-900/40 text-gray-400 hover:bg-gray-800/60'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Posts Feed */}
          <div className="space-y-6 fade-in">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <PostCard key={post.id} post={post} onVote={handleVote} onSave={handleSave} currentUser={currentUser} />
              ))
            ) : (
              <div className="text-center text-gray-500 italic text-lg py-12 bg-white/5 rounded-2xl border border-rose-950/30">
                <p className="mb-4">No posts found yet. Be the first to start a discussion!</p>
                <button
                  onClick={() => currentUser ? setShowPostForm(true) : setShowAuthModal(true)}
                  className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full transition-colors"
                >
                  <PlusCircle size={16} className="mr-2" /> Create First Post
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 mt-12 lg:mt-0">
          <Sidebar onFilterByFlair={setFilterByFlair} activeFlairFilter={filterByFlair} />
        </div>
      </div>
    </div>
  );
};

export default Community;