import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LightLeaks = ({ trigger = false }) => {
  const [showLeak, setShowLeak] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShowLeak(true);
      const timer = setTimeout(() => setShowLeak(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  // Random light leak on scroll occasionally
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      // Trigger light leak on fast scroll
      if (scrollDelta > 100 && Math.random() > 0.85) {
        setShowLeak(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setShowLeak(false), 1200);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLeak && (
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 0.25, x: '100%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9997,
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(251, 191, 36, 0.15) 20%,
              rgba(249, 115, 22, 0.2) 40%,
              rgba(45, 212, 191, 0.1) 60%,
              rgba(251, 191, 36, 0.15) 80%,
              transparent 100%
            )`,
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default LightLeaks;
