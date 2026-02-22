
import React, { useState, useRef, ChangeEvent } from 'react';
import { Mail, Info, Send, Palette, Paperclip, X } from 'lucide-react';

const Contact = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // Convert FileList to an array and append to existing files
      const newFiles = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.add('border-red-700'); // Add a visual cue
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('border-red-700'); // Remove the visual cue
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('border-red-700'); // Remove the visual cue

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const newFiles = Array.from(event.dataTransfer.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      event.dataTransfer.clearData();
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="fade-in">
          <header className="mb-12">
            <h2 className="text-red-700 uppercase tracking-widest text-sm mb-4 font-bold">Get in Touch</h2>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">Contribute to <br /> <span className="text-red-900">The Archive</span></h1>
            <p className="text-gray-400 leading-relaxed text-lg font-light mb-8">
              Help us keep the archive accurate and up to date. Whether it's a correction, a missing interview link, or your own artistic tribute, your input is vital.
            </p>
          </header>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-rose-950/10 hover:border-red-900/30 transition-all duration-500">
              <div className="bg-red-900/10 p-4 rounded-2xl text-red-700 group-hover:bg-red-900 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-1">Direct Email</h4>
                <p className="text-white font-mono text-lg font-medium selection:bg-red-800">ethel.3611976@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-red-900/10 p-4 rounded-2xl text-red-700 transition-all">
                <Info size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold mb-1 text-white">Submitting Corrections</h4>
                <p className="text-gray-500 font-light">Notice a date error or a missing film credit? Let us know so we can maintain history accurately.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-red-900/10 p-4 rounded-2xl text-red-700 transition-all">
                <PaletteIcon size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold mb-1 text-white">Share Your Fanart</h4>
                <p className="text-gray-500 font-light">We feature community art with full credit and links back to your personal portfolio.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-950/20 to-black p-10 md:p-12 rounded-[40px] border border-rose-950/30 shadow-2xl relative overflow-hidden">
          {/* Subtle flare in the form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 rounded-full blur-[60px]"></div>
          
          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-900 focus:ring-1 focus:ring-red-900 outline-none transition-all text-white placeholder:text-gray-700"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-900 focus:ring-1 focus:ring-red-900 outline-none transition-all text-white placeholder:text-gray-700"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold ml-1">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-900 outline-none transition-all text-white appearance-none cursor-pointer">
                <option className="bg-black">Fan Contribution Submission</option>
                <option className="bg-black">Correction / Update</option>
                <option className="bg-black">Archive Feedback</option>
                <option className="bg-black">General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold ml-1">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-900 focus:ring-1 focus:ring-red-900 outline-none transition-all text-white placeholder:text-gray-700 resize-none"
                placeholder="Share the details here..."
              ></textarea>
            </div>

            {/* File Attachment Section */}
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold ml-1">Attachments (Pictures & Videos)</label>
              <div
                className="w-full bg-rose-950/10 border border-rose-950/30 rounded-2xl px-6 py-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-700 transition-all group"
                onClick={triggerFileInput}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                role="button"
                aria-label="Attach files"
                tabIndex={0}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <Paperclip size={24} className="text-red-700 mb-2 group-hover:text-white transition-colors" />
                <span className="text-gray-300 text-sm font-light">Drag & drop files here or <span className="text-red-700 group-hover:text-white font-medium transition-colors">click to browse</span></span>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 max-h-40 overflow-y-auto">
                  <h5 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Selected Files:</h5>
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-300 text-sm">
                      <span className="truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(file.name)}
                        className="ml-2 text-red-700 hover:text-white transition-colors"
                        aria-label={`Remove file ${file.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="w-full bg-red-900 hover:bg-red-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-red-900/40 flex items-center justify-center group text-lg">
              Send Submission
              <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const PaletteIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.5 2-1.2.4.7 1.1 1.2 2 1.2 2.8 0 5-2.2 5-5 0-1.1-.4-2.1-1-2.9.1-.1.1-.1.1-.1 2.2-2.2 2.2-5.9 0-8.1-1.3-1.3-3-2-4.8-2z"/>
  </svg>
);

export default Contact;