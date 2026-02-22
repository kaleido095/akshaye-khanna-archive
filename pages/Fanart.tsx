
import React from 'react';
import { Palette } from 'lucide-react';

const Fanart = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Extended for more variety

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Creative Expressions</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Fanart Gallery</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          A visual tribute to Akshaye Khanna's characters and persona, crafted by his dedicated fans.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-rose-950/30">
            <img 
              src={`https://picsum.photos/400/${400 + (i % 3) * 50}?sig=${i * 13}&grayscale`} // Varied heights
              alt={`Fanart ${i}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <p className="text-white font-serif font-bold text-lg">Artwork {i}</p>
              <p className="text-red-700 text-xs uppercase tracking-widest">by ArtistName{i}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm uppercase tracking-[0.3em]">
        More fanart coming soon!
      </div>
    </div>
  );
};

export default Fanart;
