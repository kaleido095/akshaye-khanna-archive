
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black border-t border-rose-950/30 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h2 className="text-xl font-serif font-bold text-white mb-2">AKSHAYE KHANNA ARCHIVE</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          A non-monetized, fan-driven digital preservation of the career and legacy of one of Indian cinema's finest actors.
        </p>
      </div>
      <div className="flex space-x-6">
        <Link to="/contact" className="text-gray-400 hover:text-red-700 transition-colors">Contact</Link>
      </div>
      <div className="text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Akshaye Khanna Archive. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;