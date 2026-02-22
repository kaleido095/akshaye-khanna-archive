

import React from 'react';

const InHisOwnWords = () => {
  const preferences = [
    { label: 'Favorite Dish', value: 'Dal Chawal' },
    { label: 'Favorite Fruit', value: 'Litchi' },
    { label: 'Favorite Vegetable', value: 'Bhindi' },
    { label: 'Sweet Tooth', value: 'Yes' },
    { label: 'Food Preference', value: 'Prefers cooked food' },
    { label: 'Drinks', value: 'Chai person' },
    { label: 'Sports', value: 'Squash, Swimming, Badminton' },
    { label: 'Social', value: 'Member of Willingdon Club, Mumbai' },
    { label: 'Favorite Song', value: 'Sindbad the Sailor (Favorite for 8-9 years)' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4">Personal Perspectives</h2>
        <h1 className="text-5xl font-serif font-bold">In His Own <span className="text-red-900">Words</span></h1>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="bg-white/5 p-8 rounded-3xl border-l-4 border-red-900 italic text-gray-300 text-lg relative">
            <span className="absolute -top-4 -left-2 text-6xl text-red-900/30 font-serif">"</span>
            Better at sports than studies. It was never about the academic glory for me.
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border-l-4 border-red-900 italic text-gray-300 text-lg relative">
            <span className="absolute -top-4 -left-2 text-6xl text-red-900/30 font-serif">"</span>
            I think silence is very powerful. As an actor, you don't always need words to convey what's happening inside.
          </div>
        </div>

        <div className="bg-rose-950/10 border border-rose-950/30 p-10 rounded-3xl">
          <h3 className="text-2xl font-serif font-bold mb-8 border-b border-rose-950/30 pb-4">A Few Favorites</h3>
          <div className="space-y-6">
            {preferences.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-2">
                <span className="text-gray-500 text-sm uppercase tracking-wider">{item.label}</span>
                <span className="text-white font-medium text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-black border border-white/10 rounded-3xl p-10">
        <h3 className="text-2xl font-serif font-bold mb-6">Notable Excerpts</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
          In a candid interview, Akshaye shared his simple preference for Dal Chawal as his favorite dish, a testament to his grounded nature. He also famously confessed his long-standing love for the track "Sindbad the Sailor" from Rock On!!, noting it has been his top choice for nearly a decade. This reflects his consistent nature—once he finds something he resonates with, he sticks by it.
        </p>
        <a 
          href="https://youtu.be/8ZfIbpIbgQY" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-700 hover:text-white transition-colors flex items-center"
        >
          Watch a Candid Interview <span className="ml-2">↗</span>
        </a>
      </section>
    </div>
  );
};

export default InHisOwnWords;