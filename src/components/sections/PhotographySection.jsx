import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const PhotographySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filters = ['all', 'portrait', 'street', 'travel', 'cinematic'];

  const photos = [
    {
      id: 1,
      category: 'portrait',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      title: 'Silent Thoughts',
      location: 'Los Angeles, CA',
      camera: 'Sony A7III',
      lens: '85mm f/1.4',
      aspectRatio: 'portrait',
    },
    {
      id: 2,
      category: 'street',
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      title: 'City Lights',
      location: 'Tokyo, Japan',
      camera: 'Leica M10',
      lens: '35mm f/2',
      aspectRatio: 'landscape',
    },
    {
      id: 3,
      category: 'travel',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Mountain Dreams',
      location: 'Swiss Alps',
      camera: 'Canon R5',
      lens: '24-70mm f/2.8',
      aspectRatio: 'landscape',
    },
    {
      id: 4,
      category: 'cinematic',
      src: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80',
      title: 'Golden Hour',
      location: 'Malibu, CA',
      camera: 'RED Komodo',
      lens: '50mm f/1.2',
      aspectRatio: 'portrait',
    },
    {
      id: 5,
      category: 'portrait',
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      title: 'Inner Peace',
      location: 'Bali, Indonesia',
      camera: 'Sony A7III',
      lens: '85mm f/1.4',
      aspectRatio: 'portrait',
    },
    {
      id: 6,
      category: 'street',
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      title: 'Urban Canyon',
      location: 'New York, NY',
      camera: 'Fuji X-T4',
      lens: '23mm f/1.4',
      aspectRatio: 'landscape',
    },
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % filteredPhotos.length
      : (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <section
      ref={sectionRef}
      id="photos"
      className="py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="section-label">
                Gallery
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-wider mt-4 text-white uppercase">
                Photography
              </h2>
              <p className="mt-4 text-[#6b6b6b] max-w-xl text-base leading-relaxed">
                Frozen fragments of time. Each photograph holds a universe of emotion within a single frame.
              </p>
            </div>
            
            {/* Stats - aligned to bottom of heading */}
            <div className="flex gap-8 md:pb-2">
              <div className="text-center">
                <div className="stat-number text-2xl md:text-3xl">10K+</div>
                <div className="stat-label text-[10px]">Photos</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-2xl md:text-3xl">25+</div>
                <div className="stat-label text-[10px]">Countries</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-pill ${
                  activeFilter === filter
                    ? 'filter-pill-active'
                    : 'filter-pill-inactive'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4"
        >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative break-inside-avoid mb-3 md:mb-4 group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer bg-[#111111]"
              onClick={() => openLightbox(photo, index)}
              data-cursor-view
            >
              <div className={`relative ${photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-[#0a0a0a] px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold rounded-full">
                    {photo.category}
                  </span>
                </div>

                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/20">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base md:text-lg font-display tracking-wider text-white uppercase">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#6b6b6b] mt-1 flex items-center gap-1.5 md:gap-2">
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {photo.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a]/98 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#6b6b6b] hover:text-white hover:border-white transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#6b6b6b] hover:text-white hover:border-white transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#6b6b6b] hover:text-white hover:border-white transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
              />

              {/* EXIF Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a]/95 to-transparent rounded-b-2xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-display tracking-wider text-white uppercase">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-sm text-[#6b6b6b] mt-1 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {selectedPhoto.location}
                    </p>
                  </div>
                  <div className="flex gap-6 text-xs tracking-wider uppercase text-[#6b6b6b]">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedPhoto.camera}
                    </span>
                    <span>{selectedPhoto.lens}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm tracking-widest text-[#6b6b6b] font-display">
              {selectedIndex + 1} / {filteredPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotographySection;
