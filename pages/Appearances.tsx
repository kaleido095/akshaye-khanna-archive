

import React from 'react';
import { APPEARANCES } from '../constants';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Appearances = () => {
  const recent = APPEARANCES.filter(a => a.isRecent);
  const archive = APPEARANCES.filter(a => !a.isRecent);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4">Public Sightings</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold">Appearances</h1>
      </header>

      <section className="mb-24">
        <h3 className="text-2xl font-serif font-bold mb-10 flex items-center">
          <span className="w-8 h-px bg-red-900 mr-4"></span> Recent & Upcoming
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {recent.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-rose-950/30 to-black p-8 rounded-3xl border border-rose-950/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Calendar size={80} />
              </div>
              <span className="text-red-700 font-mono text-sm block mb-2">{item.year}</span>
              <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400 mb-6">{item.context}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-red-900 hover:text-white transition-colors flex items-center">
                  View Details <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-serif font-bold mb-10 flex items-center">
          <span className="w-8 h-px bg-red-900 mr-4"></span> Archive
        </h3>
        <div className="space-y-6">
          {archive.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-900/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="bg-red-900/10 text-red-700 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.context}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <span className="text-gray-400 font-mono">{item.year}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-red-900 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Appearances;