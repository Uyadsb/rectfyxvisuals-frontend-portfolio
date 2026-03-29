import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterMenu = ({ 
  filters, 
  activeFilter, 
  onFilterChange, 
  accentColor = 'cinematic-teal' 
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        isSticky 
          ? 'fixed top-20 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full' 
          : ''
      }`}
    >
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
        <AnimatePresence mode="popLayout">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              layout
              onClick={() => onFilterChange(filter)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? `bg-${accentColor} text-cinematic-black`
                  : `border border-cinematic-light/20 text-cinematic-light/60 hover:border-${accentColor} hover:text-${accentColor}`
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className={`absolute inset-0 bg-${accentColor} rounded-full -z-10`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FilterMenu;
