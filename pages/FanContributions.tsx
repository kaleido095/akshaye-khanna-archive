

import React from 'react';
import { Palette, PenTool, Search, Film, Send, Lightbulb, Heart, Camera } from 'lucide-react'; // Added Lightbulb and Heart for new sections
import { Link } from 'react-router-dom';

const FanContributions = () => {

  const fanSections = [
    { id: 'appreciation-write-ups', icon: Heart, label: 'Appreciation Write-ups', description: 'Personal stories, testimonials, and heartfelt messages of admiration from fans.' },
    { id: 'fanart', icon: Palette, label: 'Fanart Gallery', description: 'Browse artistic interpretations and tributes by fellow admirers.' },
    { id: 'scene-performance-analysis', icon: Search, label: 'Scene / Performance Analysis', description: 'Dive into insightful deep dives and critical essays on his performances.' },
    { id: 'edits-reels', icon: Camera, label: 'Edits & Reels', description: 'Showcase fan-made video edits, montages, and compilations.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Community Spirit</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Fan Contributions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          This archive thrives on the passion of our community. We are currently curating the best 
          creative reflections of Akshaye Khanna's work.
        </p>
      </header>

      {/* Grid of Fan Content Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 fade-in">
        {fanSections.map((section) => (
          <Link 
            key={section.id} 
            to={`/fan-contributions/${section.id}`}
            className="group bg-white/5 p-10 rounded-3xl border border-rose-950/30 hover:border-red-900/50 hover:bg-rose-950/10 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 bg-red-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-red-700 group-hover:scale-110 transition-transform duration-500">
                <section.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-red-700 transition-colors">{section.label}</h3>
              <p className="text-gray-400 text-base font-light leading-relaxed">{section.description}</p>
            </div>
            <span className="mt-8 inline-flex items-center text-red-700 font-medium group-hover:text-white transition-colors">
              Explore <ArrowRightIcon size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      <div className="fade-in py-12 px-8 bg-gradient-to-b from-rose-950/10 to-transparent border border-rose-950/20 rounded-[40px] text-center max-w-4xl mx-auto backdrop-blur-sm shadow-2xl">
        <div className="bg-red-900/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-red-700 animate-pulse">
          <Send size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-white mb-6">Want to see your work here?</h3>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Contact the moderators through the contact sections and add your fan content in our archive.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-white text-black hover:bg-red-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105"
        >
          Submit My Work
        </Link>
        <div className="mt-12 text-gray-600 text-sm uppercase tracking-[0.3em]">
          Submissions are currently open!
        </div>
      </div>
    </div>
  );
};

const ArrowRightIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default FanContributions;