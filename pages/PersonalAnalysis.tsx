
import React from 'react';
import { Search } from 'lucide-react';

const PersonalAnalysis = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Deep Dives</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Personal Analysis</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Thought-provoking essays and character studies, offering unique perspectives on Akshaye Khanna's performances and career.
        </p>
      </header>

      <div className="space-y-8">
        <div className="bg-white/5 p-8 rounded-3xl border border-rose-950/30 hover:bg-white/[0.07] transition-all cursor-pointer group">
          <div className="flex items-center gap-4 mb-4">
            <Search size={24} className="text-red-700 group-hover:text-white transition-colors" />
            <h3 className="text-2xl font-serif font-bold text-white group-hover:text-red-700 transition-colors">The Silence of Sid: Character Study</h3>
          </div>
          <p className="text-gray-400 mb-4 font-light">A deep dive into the acting techniques used in Dil Chahta Hai, focusing on micro-expressions and the unspoken emotional landscape of Siddharth Sinha.</p>
          <span className="text-red-700 font-medium group-hover:text-white transition-colors flex items-center">
            Read Full Analysis <ArrowRightIcon size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-rose-950/30 hover:bg-white/[0.07] transition-all cursor-pointer group">
          <div className="flex items-center gap-4 mb-4">
            <Search size={24} className="text-red-700 group-hover:text-white transition-colors" />
            <h3 className="text-2xl font-serif font-bold text-white group-hover:text-red-700 transition-colors">Antagonist vs Anti-Hero: The Race Dynamic</h3>
          </div>
          <p className="text-gray-400 mb-4 font-light">Analyzing Rajiv Singh's complex arc in 'Race' and how Akshaye subverts typical villain tropes, creating a character that is both despicable and compelling.</p>
          <span className="text-red-700 font-medium group-hover:text-white transition-colors flex items-center">
            Read Full Analysis <ArrowRightIcon size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-rose-950/30 hover:bg-white/[0.07] transition-all cursor-pointer group">
          <div className="flex items-center gap-4 mb-4">
            <Search size={24} className="text-red-700 group-hover:text-white transition-colors" />
            <h3 className="text-2xl font-serif font-bold text-white group-hover:text-red-700 transition-colors">The Unseen Actor: Why Akshaye Khanna Endures</h3>
          </div>
          <p className="text-gray-400 mb-4 font-light">An essay exploring his unique career choices, periods of hiatus, and why his contributions remain impactful despite a non-traditional Bollywood career path.</p>
          <span className="text-red-700 font-medium group-hover:text-white transition-colors flex items-center">
            Read Full Analysis <ArrowRightIcon size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm uppercase tracking-[0.3em]">
        Submit your own analysis via the contact page!
      </div>
    </div>
  );
};

const ArrowRightIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default PersonalAnalysis;
