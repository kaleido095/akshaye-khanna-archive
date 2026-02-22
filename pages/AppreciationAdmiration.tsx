
import React from 'react';
import { Heart, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppreciationAdmiration = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Heartfelt Tributes</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Appreciation & Admiration</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Personal stories, testimonials, and messages of admiration from fans whose lives have been touched by Akshaye Khanna's work.
        </p>
      </header>

      <div className="bg-gradient-to-br from-rose-950/20 to-black p-12 rounded-[40px] border border-rose-950/30 text-center shadow-2xl">
        <div className="bg-red-900/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-red-700 animate-pulse">
          <MessageSquareText size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-white mb-6">Share Your Story</h3>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Has a particular performance moved you? Do you have a personal reflection on his impact? We welcome your heartfelt messages.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-white text-black hover:bg-red-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105"
        >
          Submit Your Appreciation
        </Link>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm uppercase tracking-[0.3em]">
        Look out for inspiring fan testimonials coming soon!
      </div>
    </div>
  );
};

export default AppreciationAdmiration;
