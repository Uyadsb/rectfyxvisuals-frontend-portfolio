import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [showReel, setShowReel] = useState(false);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] -mt-16"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80)',
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 pb-32">
        {/* Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="trusted-badge mb-5 sm:mb-6"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00e5c0]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Trusted by 50+ Brands Worldwide</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display tracking-wide text-white leading-[1] uppercase"
        >
          Visual Storytelling
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display tracking-wide leading-[1] uppercase mt-1 sm:mt-2"
        >
          <span className="text-[#00e5c0]">That Captivates</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-5 sm:mt-6 md:mt-8 text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[#888] max-w-xs sm:max-w-md md:max-w-xl"
        >
          Filmmaker & Creative Director helping brands tell their stories through cinematic visuals
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-7 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Play Showreel Group */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setShowReel(true)}
              className="play-btn group"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5 group-hover:text-[#0a0a0a] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
            <span className="text-xs sm:text-sm tracking-wider text-[#888] uppercase">Showreel</span>
          </div>
          
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="kolder-btn kolder-btn-outline text-xs sm:text-sm py-3 px-5 sm:py-3.5 sm:px-6"
          >
            View Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 flex justify-center px-4"
        >
          <div className="flex items-center gap-6 sm:gap-10 md:gap-16">
            {[
              { number: '150+', label: 'Projects' },
              { number: '8+', label: 'Years' },
              { number: '50M+', label: 'Views' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-4xl font-display text-white">{stat.number}</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase text-[#666] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#333] flex justify-center pt-2"
        >
          <div className="w-1 h-1.5 bg-[#00e5c0] rounded-full" />
        </motion.div>
      </div>

      {/* Showreel Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowReel(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowReel(false)}
                className="absolute -top-10 right-0 text-[#888] hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-xs tracking-widest uppercase">Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-video bg-[#111] rounded-xl overflow-hidden">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
