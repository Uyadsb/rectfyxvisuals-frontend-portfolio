import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SoundToggle = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={toggleSound}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-[100] bg-[#141414] border border-[#2a2a2a] rounded-full p-4 flex items-center gap-3 group hover:border-[#00e5c0] transition-colors"
      aria-label={isSoundOn ? 'Mute sound' : 'Enable sound'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isSoundOn ? (
            <motion.div
              key="sound-on"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-0.5"
            >
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: ['40%', '100%', '40%'],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                  className="w-1 bg-[#00e5c0] rounded-full"
                  style={{ height: '40%' }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="sound-off"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-0.5"
            >
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-1 h-1 bg-[#888888] rounded-full"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="text-xs tracking-widest uppercase text-[#888888] overflow-hidden whitespace-nowrap"
          >
            {isSoundOn ? 'Sound On' : 'Sound Off'}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SoundToggle;
