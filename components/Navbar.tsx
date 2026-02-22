

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, ArrowRight } from 'lucide-react';
import { useUser } from '../contexts/UserContext'; // Import useUser

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout, setShowAuthModal } = useUser(); // Get currentUser, logout, setShowAuthModal from context

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Akshaye', path: '/about' },
    { name: 'Filmography', path: '/filmography' },
    { name: 'Appearances', path: '/appearances' },
    { name: 'Interviews & Press', path: '/interviews' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Fan Contributions', path: '/fan-contributions' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-rose-950/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif text-white hover:text-red-700 transition-colors">
          AKSHAYE KHANNA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white text-lg font-medium hover:text-red-700 transition-colors relative group
                ${location.pathname.startsWith(item.path) && item.path !== '/' ? 'text-red-700' : ''}
                ${location.pathname === item.path && item.path === '/' ? 'text-red-700' : ''}
              `}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-700 transform origin-left transition-transform duration-300 
                ${(location.pathname.startsWith(item.path) && item.path !== '/') || (location.pathname === item.path && item.path === '/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          {currentUser ? (
            <div className="flex items-center gap-4">
              <img src={currentUser.avatar} alt="User Avatar" className="w-8 h-8 rounded-full object-cover border border-red-700" />
              <span className="text-gray-300 text-sm">{currentUser.username}</span>
              <button
                onClick={logout}
                className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2"
            >
              <ArrowRight size={16} /> Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsSidebarOpen(true)} aria-label="Open navigation menu">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg z-[110] transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden border-l border-rose-950/30 shadow-2xl`}
      >
        <div className="p-6 h-full flex flex-col">
          <button className="self-end text-white mb-8" onClick={() => setIsSidebarOpen(false)} aria-label="Close navigation menu">
            <X size={28} />
          </button>
          <nav className="flex flex-col space-y-6 flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white text-xl font-medium hover:text-red-700 transition-colors ${location.pathname === item.path ? 'text-red-700' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-white/10">
            {currentUser ? (
              <div className="flex flex-col items-center gap-4">
                <img src={currentUser.avatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover border border-red-700" />
                <span className="text-gray-300 text-lg font-bold">{currentUser.username}</span>
                <button
                  onClick={logout}
                  className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-full text-base font-bold transition-colors flex items-center gap-2 w-full justify-center"
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setShowAuthModal(true); setIsSidebarOpen(false); }}
                className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-full text-base font-bold transition-colors flex items-center gap-2 w-full justify-center"
              >
                <ArrowRight size={20} /> Sign In / Register
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;