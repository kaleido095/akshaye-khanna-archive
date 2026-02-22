

import React from 'react';
import { Camera, GalleryVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditsReels = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Community Creations</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Edits <span className="text-red-900">&</span> Reels</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          A space dedicated to fan-made video edits, Instagram reels, scene compilations, and creative montages inspired by Akshaye Khanna.
        </p>
      </header>

      <div className="bg-gradient-to-br from-rose-950/20 to-black p-12 rounded-[40px] border border-rose-950/30 text-center shadow-2xl">
        <div className="bg-red-900/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-red-700 animate-pulse">
          <Camera size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-white mb-6">Got an edit to share?</h3>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Whether it's a meticulously crafted tribute video or a viral reel, we'd love to feature it here with full credit to you.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-white text-black hover:bg-red-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105"
        >
          Submit Your Edit
        </Link>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm uppercase tracking-[0.3em]">
        Stay tuned for featured video edits and reels!
      </div>
    </div>
  );
};

export default EditsReels;