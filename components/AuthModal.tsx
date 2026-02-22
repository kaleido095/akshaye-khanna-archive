
import React, { useState } from 'react';
import { X, User, Mail, LogIn } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { signUp } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      await signUp(username, email);
      onClose(); // Close the modal after successful sign-up
    } else {
      alert('Please enter both username and email.');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in-up">
      <div className="bg-gradient-to-br from-black to-rose-950/20 p-8 rounded-3xl shadow-2xl border border-rose-950/30 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close authentication modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">Create Your Account</h2>
        <p className="text-gray-400 text-sm mb-8 text-center">
          Join the Akshaye Khanna Archive community to share, discuss, and contribute.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
            />
          </div>
          <div className="relative">
            <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Email (e.g., example@gmail.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-600 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 text-lg"
          >
            <LogIn size={20} /> Register Now
          </button>
        </form>

        <p className="text-gray-500 text-xs mt-6 text-center">
          By registering, you agree to our (mock) Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

// Simple fade-in animation for modal
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}
`;
document.head.appendChild(style);
