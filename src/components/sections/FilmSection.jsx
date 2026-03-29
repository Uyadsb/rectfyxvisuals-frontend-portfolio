import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const FilmSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filters = ['all', 'travel', 'commercial', 'documentary', 'lifestyle'];

  const films = [
    {
      id: 1,
      title: 'Wanderlust Chronicles',
      category: 'travel',
      description: 'A journey through the untouched landscapes of Iceland',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Travel', 'Adventure'],
      duration: '3:42',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      category: 'documentary',
      description: 'The rhythm of city life after midnight',
      thumbnail: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Documentary'],
      duration: '5:18',
    },
    {
      id: 3,
      title: 'Brand Elevation',
      category: 'commercial',
      description: 'Premium lifestyle brand campaign',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Commercial'],
      duration: '1:30',
    },
    {
      id: 4,
      title: 'Eternal Moments',
      category: 'lifestyle',
      description: 'Capturing the beauty in everyday life',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Lifestyle'],
      duration: '4:55',
    },
    {
      id: 5,
      title: 'Ocean Dreams',
      category: 'travel',
      description: 'Beneath the surface of Bali crystal waters',
      thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Travel'],
      duration: '6:22',
    },
    {
      id: 6,
      title: 'Mountain Peak',
      category: 'travel',
      description: 'Conquering the heights of the Swiss Alps',
      thumbnail: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      tags: ['Travel', 'Adventure'],
      duration: '4:15',
    },
  ];

  const filteredFilms = activeFilter === 'all' 
    ? films 
    : films.filter(film => film.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="films"
      className="py-20 sm:py-24 md:py-32 lg:py-40 bg-[#0a0a0a]"
    >
      <div className="section-container">
        {/* Section Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 sm:mb-12 md:mb-14"
        >
          <div>
            <p className="section-label mb-2 sm:mb-3">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-wider text-white uppercase">
              Film Work
            </h2>
            <p className="mt-3 sm:mt-4 text-[#6b6b6b] max-w-lg text-sm sm:text-base leading-relaxed">
              Every frame tells a story. Every cut builds emotion. Welcome to my visual narratives.
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 sm:gap-12 pb-2 mt-6 md:mt-0">
            <div>
              <div className="text-4xl md:text-5xl font-display text-white">50+</div>
              <div className="text-xs tracking-widest uppercase text-[#6b6b6b]">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display text-white">100H</div>
              <div className="text-xs tracking-widest uppercase text-[#6b6b6b]">Content</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 sm:mb-12"
        >
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
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

        {/* Bento Grid Layout */}
        <motion.div layout>
        <AnimatePresence mode="popLayout">
          {filteredFilms.length > 0 && (
            <motion.div 
              layout
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
            >
              {/* Large featured card - spans 8 columns on lg */}
              {filteredFilms[0] && (
                <motion.div
                  key={filteredFilms[0].id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="film-card relative overflow-hidden rounded-2xl group lg:col-span-8 cursor-pointer aspect-video"
                  onMouseEnter={() => setHoveredId(filteredFilms[0].id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedVideo(filteredFilms[0])}
                >
                  <img
                    src={filteredFilms[0].thumbnail}
                    alt={filteredFilms[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <AnimatePresence>
                    {hoveredId === filteredFilms[0].id && (
                      <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={filteredFilms[0].video}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </AnimatePresence>

                  {/* Hover overlay */}
                  <div className="card-overlay absolute inset-0 bg-black/0" />
                  
                  {/* Bottom gradient */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="play-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="bg-[#00e5c0] text-[#0a0a0a] px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] tracking-widest uppercase font-bold rounded-full">
                        {filteredFilms[0].category}
                      </span>
                      <span className="text-[#6b6b6b] text-[10px] sm:text-xs">•</span>
                      <span className="text-[#6b6b6b] text-[10px] sm:text-xs">{filteredFilms[0].duration}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display tracking-wider text-white uppercase font-bold">
                      {filteredFilms[0].title}
                    </h3>
                  </div>
                </motion.div>
              )}

              {/* Side cards - span 4 columns on lg, stacked */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                {filteredFilms.slice(1, 3).map((film) => (
                  <motion.div
                    key={film.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="film-card relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[180px]"
                    onMouseEnter={() => setHoveredId(film.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedVideo(film)}
                  >
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <AnimatePresence>
                      {hoveredId === film.id && (
                        <motion.video
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          src={film.video}
                          className="absolute inset-0 w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </AnimatePresence>

                    {/* Hover overlay */}
                    <div className="card-overlay absolute inset-0 bg-black/0" />
                    
                    {/* Bottom gradient */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/20">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                        <span className="bg-[#00e5c0] text-[#0a0a0a] px-2 py-0.5 text-[8px] md:text-[9px] tracking-widest uppercase font-bold rounded-full">
                          {film.category}
                        </span>
                        <span className="text-[#6b6b6b] text-[9px] md:text-[10px]">•</span>
                        <span className="text-[#6b6b6b] text-[9px] md:text-[10px]">{film.duration}</span>
                      </div>
                      <h3 className="text-sm md:text-lg font-display tracking-wider text-white uppercase font-bold line-clamp-1">
                        {film.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional films in regular grid */}
          {filteredFilms.length > 3 && (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6"
            >
              {filteredFilms.slice(3).map((film) => (
                <motion.div
                  key={film.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="film-card relative overflow-hidden rounded-2xl group cursor-pointer aspect-video"
                  onMouseEnter={() => setHoveredId(film.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedVideo(film)}
                >
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <AnimatePresence>
                    {hoveredId === film.id && (
                      <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={film.video}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </AnimatePresence>

                  {/* Hover overlay */}
                  <div className="card-overlay absolute inset-0 bg-black/0" />
                  
                  {/* Bottom gradient */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-black/20">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                      <span className="bg-[#00e5c0] text-[#0a0a0a] px-2 py-0.5 text-[8px] md:text-[9px] tracking-widest uppercase font-bold rounded-full">
                        {film.category}
                      </span>
                      <span className="text-[#6b6b6b] text-[9px] md:text-[10px]">•</span>
                      <span className="text-[#6b6b6b] text-[9px] md:text-[10px]">{film.duration}</span>
                    </div>
                    <h3 className="text-sm md:text-lg font-display tracking-wider text-white uppercase font-bold">
                      {film.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-[#6b6b6b] hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="text-sm tracking-widest uppercase">Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-video bg-[#111111] rounded-2xl overflow-hidden">
                <video
                  src={selectedVideo.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                />
              </div>

              <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display tracking-wider text-white uppercase">
                    {selectedVideo.title}
                  </h3>
                  <p className="mt-2 text-[#6b6b6b]">
                    {selectedVideo.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs tracking-widest uppercase border border-[#1f1f1f] rounded-full text-[#6b6b6b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FilmSection;
