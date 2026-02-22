

import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1547841243-d3065985055b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Border (1997)' },
    { src: 'https://images.unsplash.com/photo-1574677918451-fa794a3e795c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Dhurandhar (2025)' },
    { src: 'https://images.unsplash.com/photo-1533470731057-0a4422e5a408?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'The Accidental PM (2019)' },
    { src: 'https://images.unsplash.com/photo-1549646536-11f81b1c3e38?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Taal (1999) - Manav' },
    { src: 'https://images.unsplash.com/photo-1534720993072-a083a2168925?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Dil Chahta Hai (2001) - Sid' },
    { src: 'https://images.unsplash.com/photo-1540679808620-3b7c7b049d94?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Aaja Nachle (2007) - Raja' },
    { src: 'https://images.unsplash.com/photo-1520140306159-b003a74955b5?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'GUJCON Launch (2018)' },
    { src: 'https://images.unsplash.com/photo-1577977461992-0b8109315d48?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Magazine Shoot (2017)' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4">Visual Archives</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold">Gallery</h1>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-rose-950/30">
            <img 
              src={img.src} 
              alt={img.label}
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-red-900 text-white px-4 py-1 rounded-full text-xs font-medium uppercase tracking-widest">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;