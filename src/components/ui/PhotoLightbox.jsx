import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const PhotoLightbox = ({ photo, photos, currentIndex, onClose, onNavigate }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onNavigate('prev');
        break;
      case 'ArrowRight':
        onNavigate('next');
        break;
      default:
        break;
    }
  }, [onClose, onNavigate]);

  useEffect(() => {
    if (photo) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo, handleKeyDown]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-cinematic-black/98 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-cinematic-light/30 flex items-center justify-center text-cinematic-light/60 hover:text-cinematic-light hover:border-cinematic-light transition-colors z-10"
          aria-label="Previous photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-cinematic-light/30 flex items-center justify-center text-cinematic-light/60 hover:text-cinematic-light hover:border-cinematic-light transition-colors z-10"
          aria-label="Next photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full border border-cinematic-light/30 flex items-center justify-center text-cinematic-light/60 hover:text-cinematic-light hover:border-cinematic-light transition-colors z-10"
          aria-label="Close lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative max-w-5xl max-h-[85vh] mx-4 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        >
          <motion.img
            src={photo.src}
            alt={photo.title}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
            animate={{ scale: isZoomed ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
            layoutId={`photo-${photo.id}`}
          />

          {/* EXIF Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isZoomed ? 0 : 1, y: isZoomed ? 20 : 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cinematic-black/90 to-transparent rounded-b-lg"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bebas tracking-wider text-cinematic-light">
                  {photo.title}
                </h3>
                <p className="text-sm text-cinematic-light/60 mt-1">
                  {photo.location}
                </p>
              </div>
              <div className="flex gap-6 text-xs tracking-wider uppercase text-cinematic-light/50">
                <span>{photo.camera}</span>
                <span>{photo.lens}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm tracking-widest text-cinematic-light/40">
          {currentIndex + 1} / {photos.length}
        </div>

        {/* Keyboard hints */}
        <div className="absolute bottom-4 right-4 text-xs tracking-wider text-cinematic-light/30 hidden md:flex gap-4">
          <span>← → Navigate</span>
          <span>ESC Close</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoLightbox;
