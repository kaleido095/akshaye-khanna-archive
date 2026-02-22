

import React from 'react';
import { Link } from 'react-router-dom';
import { User, BookOpen, Star, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <header className="fade-in">
            <h2 className="text-red-700 tracking-widest uppercase text-sm font-semibold mb-4">The Actor's Profile</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold">About <br /> <span className="text-red-900">Akshaye</span></h1>
          </header>

          <div className="prose prose-invert prose-lg text-gray-300 space-y-6">
            <p className="leading-relaxed">
              Akshaye Khanna (born 28 March 1975) is a name synonymous with quiet intensity and immense versatility in Indian cinema. Born to actor-politician Vinod Khanna and Geetanjali Talyarkhan, Akshaye's path was seemingly pre-destined, yet he carved a niche that was entirely his own.
            </p>
            <p>
              He attended the Bombay International School and later The Lawrence School, Ooty. In an interview, he stated he was "better at sports than studies." This athletic energy translated into a physical presence on screen that could be both commanding and vulnerable. He never married.
            </p>
            <p>
              Trained at Kishore Namit Kapoor’s acting institute, Akshaye debuted in 1997. Over the decades, he has chosen roles that challenge conventional tropes, often stepping away from the limelight only to return with performances that leave both critics and audiences spellbound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-rose-950/30">
              <h3 className="text-white font-serif text-xl mb-4 flex items-center">
                <Star className="text-red-700 mr-2" size={20} /> Accomplishments
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>• Filmfare Best Male Debut (1998) for Border</li>
                <li>• Filmfare Award for Best Supporting Actor (2002) for Dil Chahta Hai</li>
                <li>• Critical acclaim for Section 375, Ittefaq, Gandhi, My Father, Mom</li>
                <li>• Notable performances in comedies like Hungama, Hulchul</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-rose-950/30">
              <h3 className="text-white font-serif text-xl mb-4 flex items-center">
                <BookOpen className="text-red-700 mr-2" size={20} /> Background
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>• Born: Mumbai, 28 March 1975</li>
                <li>• Father: Vinod Khanna (Actor, Politician)</li>
                <li>• Mother: Geetanjali Talyarkhan</li>
                <li>• Elder Brother: Rahul Khanna (Actor)</li>
                <li>• Maternal Grandfather: Bobby A. F. S. Talyarkhan (Cricket Commentator)</li>
                <li>• Education: Bombay International School, Lawrence School, Ooty</li>
                <li>• Acting Training: Kishore Namit Kapoor Acting Institute</li>
              </ul>
            </div>
          </div>
          
          <Link 
            to="/about/in-his-own-words"
            className="inline-flex items-center text-red-700 font-medium hover:text-white transition-colors group"
          >
            Read "In His Own Words" <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-red-900/10 rounded-3xl blur-2xl group-hover:bg-red-900/20 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1542155701-094e9f7831f4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Akshaye Khanna Portrait" 
            className="relative w-full rounded-3xl border border-rose-950/30 object-cover aspect-[4/5]"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <p className="text-white font-serif italic text-lg">"I like to work. I like to act. I don't necessarily like everything else that comes with it."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;