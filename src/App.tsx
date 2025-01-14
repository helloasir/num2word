import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdBanner from './components/AdBanner';
import AnalyticsManager from './components/AnalyticsManager';

// Analytics configuration
const analyticsConfig = {
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  facebookPixelId: import.meta.env.VITE_FACEBOOK_PIXEL_ID
};

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <AnalyticsManager 
        googleAnalyticsId={analyticsConfig.googleAnalyticsId}
        facebookPixelId={analyticsConfig.facebookPixelId}
      />
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
        <Navbar />
        <AdBanner position="top" />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <AdBanner position="bottom" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;