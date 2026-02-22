

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import InHisOwnWords from './pages/InHisOwnWords';
import Appearances from './pages/Appearances';
import Filmography from './pages/Filmography';
import Interviews from './pages/Interviews';
import FanContributions from './pages/FanContributions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Fanart from './pages/Fanart';
import ScenePerformanceAnalysis from './pages/ScenePerformanceAnalysis'; // Renamed from PersonalAnalysis
import EditsReels from './pages/EditsReels'; // Renamed from FanProjects
import AppreciationWriteUps from './pages/AppreciationWriteUps'; // Renamed from AppreciationAdmiration
import Community from './pages/Community';
import PostDetail from './pages/PostDetail';
import { useUser } from './contexts/UserContext'; // Import useUser
import AuthModal from './components/AuthModal'; // Import AuthModal
import Navbar from './components/Navbar'; // New: Import Navbar
import Footer from './components/Footer'; // New: Import Footer

export default function App() {
  const { pathname } = useLocation();
  const { showAuthModal, setShowAuthModal } = useUser(); // Get showAuthModal and setShowAuthModal from context

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-red-900 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/in-his-own-words" element={<InHisOwnWords />} />
          <Route path="/appearances" element={<Appearances />} />
          <Route path="/filmography" element={<Filmography />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/fan-contributions" element={<FanContributions />} />
          <Route path="/fan-contributions/fanart" element={<Fanart />} />
          <Route path="/fan-contributions/scene-performance-analysis" element={<ScenePerformanceAnalysis />} /> {/* Updated path */}
          <Route path="/fan-contributions/edits-reels" element={<EditsReels />} /> {/* Updated path */}
          <Route path="/fan-contributions/appreciation-write-ups" element={<AppreciationWriteUps />} /> {/* Updated path */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:postId" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Auth Modal controlled by UserContext */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
}