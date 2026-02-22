

import React, { useState } from 'react';
import { FILMS, MUSIC_VIDEOS } from '../constants';
import { Film } from '../types';

const Filmography = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Feature' | 'Cameo'>('All');

  const filteredFilms = FILMS.filter(film => 
    activeFilter === 'All' ? true : film.category === activeFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4">Career Record</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Filmography</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'Feature', 'Cameo'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeFilter === filter 
                ? 'bg-red-900 border-red-900 text-white' 
                : 'border-white/10 text-gray-500 hover:border-white/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-rose-950/30 text-gray-500 text-sm uppercase tracking-widest">
              <th className="py-6 px-4 font-normal">Year</th>
              <th className="py-6 px-4 font-normal">Title</th>
              <th className="py-6 px-4 font-normal">Role</th>
              <th className="py-6 px-4 font-normal hidden md:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredFilms.map((film, idx) => (
              <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                <td className="py-6 px-4 text-red-800 font-mono">{film.year}</td>
                <td className="py-6 px-4">
                  <span className="text-xl font-serif font-bold group-hover:text-red-700 transition-colors">
                    {film.title}
                  </span>
                </td>
                <td className="py-6 px-4 text-gray-300 font-light">{film.role}</td>
                <td className="py-6 px-4 text-gray-500 text-sm hidden md:table-cell max-w-xs">{film.notes || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-32">
        <h2 className="text-3xl font-serif font-bold mb-12">Music Videos & Special Appearances</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MUSIC_VIDEOS.map((video, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-rose-950/30 hover:border-red-900/50 transition-all group">
              <span className="text-red-900 font-bold mb-4 block">{video.year}</span>
              <h3 className="text-xl font-serif mb-2">{video.title}</h3>
              {video.film && <p className="text-gray-500 text-sm mb-4 italic">From: {video.film}</p>}
              <p className="text-gray-400 text-sm mb-6">Explore this iconic music video featuring Akshaye Khanna.</p>
              {video.link && (
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-white group-hover:text-red-700 flex items-center text-sm">
                  Watch on YouTube →
                </a>
              )}
            </div>
          ))}
          {FILMS.filter(f => f.category === 'Cameo').map((cameo, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl p-8 border border-rose-950/30 hover:border-red-900/50 transition-all group">
              <span className="text-red-900 font-bold mb-4 block">{cameo.year}</span>
              <h3 className="text-xl font-serif mb-4">{cameo.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{cameo.notes}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Filmography;