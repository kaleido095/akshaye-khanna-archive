
import React from 'react';
import { PostFlair } from '../types';
import { BookOpen, Play, Github, Settings } from 'lucide-react';

interface SidebarProps {
  onFilterByFlair: (flair: PostFlair | 'All') => void;
  activeFlairFilter: PostFlair | 'All';
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterByFlair, activeFlairFilter }) => {
  const flairs: PostFlair[] = ['General', 'Prompt', 'Model Update', 'Workflow', 'UI/UX', 'Experiment'];

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

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Community Description */}
      <div className="bg-white/5 rounded-2xl p-6 border border-rose-950/30">
        <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-white/10 pb-3">Akshaye Khanna Community</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          A fan-driven hub for discussing Akshaye Khanna's work, sharing insights, fan theories, and contributing to the archive. Let's keep the legacy alive and thriving!
        </p>
      </div>

      {/* Posting Rules */}
      <div className="bg-white/5 rounded-2xl p-6 border border-rose-950/30">
        <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-white/10 pb-3">Posting Rules</h3>
        <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
          <li>Be respectful and constructive.</li>
          <li>No spam or self-promotion unrelated to Akshaye Khanna.</li>
          <li>All content must be relevant to Akshaye Khanna's career.</li>
          <li>Mark spoilers appropriately (not implemented for mock).</li>
          <li>Cite sources where possible.</li>
        </ul>
      </div>

      {/* Tags/Flairs */}
      <div className="bg-white/5 rounded-2xl p-6 border border-rose-950/30">
        <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-white/10 pb-3">Tags / Flairs</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterByFlair('All')}
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFlairFilter === 'All' ? 'bg-red-900 text-white' : 'bg-gray-900/40 text-gray-400 hover:bg-gray-800/60'
            }`}
          >
            All Flairs
          </button>
          {flairs.map(flair => (
            <button
              key={flair}
              onClick={() => onFilterByFlair(flair)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeFlairFilter === flair ? 'bg-red-900 text-white' : `${getFlairColor(flair)} hover:brightness-125`
              }`}
            >
              {flair}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white/5 rounded-2xl p-6 border border-rose-950/30">
        <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-white/10 pb-3">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-700 transition-colors">
              <BookOpen size={18} /> Archive Documentation (Mock)
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-700 transition-colors">
              <Play size={18} /> Community Playground (Mock)
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-700 transition-colors">
              <Github size={18} /> Changelog (Mock)
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-red-700 transition-colors">
              <Settings size={18} /> Moderator Tools (Mock)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
