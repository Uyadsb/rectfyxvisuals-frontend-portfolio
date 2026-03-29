import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Navigation from './components/layout/Navigation';
import LoadingScreen from './components/layout/LoadingScreen';

// Sections
import HeroSection from './components/sections/HeroSection';
import WorkSection from './components/sections/WorkSection';
import FilmSection from './components/sections/FilmSection';
import PhotographySection from './components/sections/PhotographySection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

// Styles
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Loading Screen */}
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative pt-20 sm:pt-24">
              <HeroSection />
              <WorkSection />
              <FilmSection />
              <PhotographySection />
              <AboutSection />
              <ContactSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
