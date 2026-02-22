

import React from 'react';
import { INTERVIEWS } from '../constants';
import { PlayCircle, FileText, Mic, ExternalLink, Speaker } from 'lucide-react'; // Added Speaker for Audio type

const Interviews = () => {
  const videoInterviews = INTERVIEWS.filter(i => i.type === 'Video');
  const printInterviews = INTERVIEWS.filter(i => i.type === 'Print');
  const audioInterviews = INTERVIEWS.filter(i => i.type === 'Audio');
  const articles = INTERVIEWS.filter(i => i.type === 'Article');

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Direct Conversations</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Interviews</h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed text-lg font-light">
          A collection of long-form conversations, print Q&As, and podcasts where Akshaye speaks directly about his craft and life.
        </p>
      </header>

      <section className="mb-24">
        <h3 className="text-2xl font-serif font-bold mb-10 flex items-center">
          <span className="w-8 h-px bg-red-900 mr-4"></span> Video Interviews
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoInterviews.map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-rose-950/30 hover:bg-rose-950/10 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/[0.02] font-serif text-6xl group-hover:text-red-900/10 transition-colors">
                Video
              </div>
              <div className="mb-6 bg-red-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-red-700 group-hover:scale-110 transition-transform duration-500">
                <PlayCircle size={32} />
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 block">{item.date}</span>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">{item.summary}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-red-700 transition-colors flex items-center">
                  Watch Interview <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h3 className="text-2xl font-serif font-bold mb-10 flex items-center">
          <span className="w-8 h-px bg-red-900 mr-4"></span> Print & Audio Interviews
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[...printInterviews, ...audioInterviews].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-rose-950/30 hover:bg-rose-950/10 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-white/[0.02] font-serif text-6xl group-hover:text-red-900/10 transition-colors">
                {item.type}
              </div>
              <div className="mb-6 bg-red-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-red-700 group-hover:scale-110 transition-transform duration-500">
                {item.type === 'Print' ? <FileText size={32} /> : <Speaker size={32} />}
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 block">{item.date}</span>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">{item.summary}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-red-700 transition-colors flex items-center">
                  Access Content <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl font-serif font-bold flex items-center">
            <span className="w-12 h-px bg-red-900 mr-6"></span> Press Articles
          </h2>
          <span className="text-gray-600 text-xs uppercase tracking-[0.5em]">{articles.length} RECENT FEATURES</span>
        </div>
        
        <div className="space-y-4">
          {articles.map((item, idx) => (
            <div key={idx} className="group relative">
               <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-900/50 hover:bg-rose-950/5 transition-all duration-500"
               >
                <div className="flex-shrink-0 bg-red-950/20 p-4 rounded-xl text-red-700 group-hover:bg-red-900 group-hover:text-white transition-all">
                  <FileText size={24} />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-1">
                    <h4 className="text-xl font-serif font-bold text-white group-hover:text-red-700 transition-colors">{item.title}</h4>
                    {item.sentiment && (
                      <span className={`px-3 py-0.5 rounded-full text-[9px] uppercase font-black tracking-widest ${
                        item.sentiment === 'Positive' ? 'bg-green-950/30 text-green-500 border border-green-900/20' : 
                        item.sentiment === 'Negative' ? 'bg-red-950/30 text-red-500 border border-red-900/20' :
                        'bg-gray-900 text-gray-500'
                      }`}>
                        {item.sentiment}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm font-light italic leading-relaxed">{item.summary}</p>
                </div>
                
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2 text-right">
                  <span className="text-gray-600 text-xs font-mono uppercase">{item.date}</span>
                  <div className="text-red-900 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Interviews;