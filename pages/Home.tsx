
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useUser } from '../contexts/UserContext'; // Import useUser

const Home = () => {
  const { currentUser, setShowAuthModal } = useUser(); // Get currentUser and setShowAuthModal from context

  return (
    <div className="relative">
      {/* Background Large Text - Improved contrast for layered look */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <h1 className="text-[25vw] font-bold text-white/[0.02] whitespace-nowrap select-none font-serif leading-none uppercase tracking-tighter">
          Khanna
        </h1>
      </div>

      {/* Hero Section with Cinematic Image */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* The Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1920" 
            alt="Akshaye Khanna Cinematic Portrait" 
            className="w-full h-full object-cover object-top opacity-60 grayscale brightness-50 contrast-125"
          />
          {/* Cinematic Overlays: Vignette and Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
          <div className="absolute inset-0 bg-rose-950/10 mix-blend-multiply"></div>
          
          {/* Subtle Glows */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-maroon-900/20 rounded-full blur-[150px] animate-pulse"></div>
        </div>

        <div className="max-w-4xl text-center z-10 fade-in relative mt-20">
          <div className="inline-block mb-6 px-4 py-1 border border-red-900/50 bg-red-950/20 rounded-full">
             <h2 className="text-[10px] tracking-[0.6em] uppercase text-red-700 font-bold">The Digital Archive</h2>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-6 leading-none tracking-tighter drop-shadow-2xl">
            AKSHAYE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-950 italic">KHANNA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-md">
            Exploring the profound depths of a cinematic enigma. <br/>
            An archive of craft, character, and legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/about" 
              className="bg-red-900 hover:bg-red-800 text-white px-12 py-5 rounded-full font-bold transition-all duration-500 shadow-lg shadow-red-900/40 flex items-center justify-center group transform hover:scale-105"
            >
              The Persona
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/filmography" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-bold transition-all duration-500 flex items-center justify-center transform hover:scale-105"
            >
              The Body of Work
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Account Creation Section (Only if not signed in) */}
      {!currentUser && (
        <section className="relative z-10 py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-rose-950/20 to-black p-10 md:p-12 rounded-[40px] border border-rose-950/30 shadow-2xl">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Join the Community!</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Create your free account to post, comment, and connect with other fans.
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white px-10 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-red-900/40"
              >
                <ArrowRight className="mr-3" /> Create Account
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section with Glassmorphism */}
      <section className="py-32 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="group space-y-4 p-8 border border-white/5 rounded-3xl hover:border-red-900/30 transition-all duration-500">
            <h3 className="text-5xl font-serif font-bold text-red-900 group-hover:text-red-700 transition-colors">1997</h3>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">The Arrival</p>
            <p className="text-gray-400 font-light leading-relaxed">
              Bursting onto the scene with a rare blend of intensity and vulnerability in <span className="italic">Border</span>.
            </p>
          </div>
          <div className="group space-y-4 p-8 border border-white/5 rounded-3xl hover:border-red-900/30 transition-all duration-500">
            <h3 className="text-5xl font-serif font-bold text-red-900 group-hover:text-red-700 transition-colors">45+</h3>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">Transformations</p>
            <p className="text-gray-400 font-light leading-relaxed">
              From the romantic lead to the complex antagonist, redefining the boundaries of the Hindi film actor.
            </p>
          </div>
          <div className="group space-y-4 p-8 border border-white/5 rounded-3xl hover:border-red-900/30 transition-all duration-500">
            <h3 className="text-5xl font-serif font-bold text-red-900 group-hover:text-red-700 transition-colors">SILENT</h3>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">Impact</p>
            <p className="text-gray-400 font-light leading-relaxed">
              Known for the "Akshaye Khanna Pause"—a masterclass in conveying everything without saying a word.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;