import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WorkSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Filmmaking',
      subtitle: 'Cinematic Stories',
      description: 'From concept to final cut, I create compelling visual narratives that resonate with audiences.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      stats: { projects: '50+', label: 'Films Created' },
      href: '#films',
    },
    {
      title: 'Video Editing',
      subtitle: 'Dynamic Cuts',
      description: 'Precision editing that brings rhythm, emotion, and energy to every project.',
      image: 'https://images.unsplash.com/photo-1574717024453-354056aefa53?w=800',
      stats: { projects: '200+', label: 'Videos Edited' },
      href: '#films',
    },
    {
      title: 'Photography',
      subtitle: 'Frozen Moments',
      description: 'Capturing authentic moments that tell stories without words.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      stats: { projects: '10K+', label: 'Photos Taken' },
      href: '#photos',
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-20 sm:py-24 md:py-32 lg:py-40 bg-[#0a0a0a]"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <span className="section-label">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display tracking-wider mt-3 sm:mt-4 text-white uppercase">
            Creative Services
          </h2>
          <p className="mt-4 sm:mt-6 text-[#6b6b6b] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            I help brands and creators tell their stories through cinematic visuals.
            From concept to final delivery, every project receives the attention it deserves.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group feature-card cursor-pointer"
            onClick={(e) => scrollToSection(e, service.href)}
            data-cursor-hover
          >
            {/* Image */}
            <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              
              {/* Stats Badge */}
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg">
                <span className="text-lg md:text-xl font-display text-[#00e5c0]">{service.stats.projects}</span>
                <span className="text-[10px] md:text-xs text-[#6b6b6b] ml-1.5 md:ml-2 uppercase tracking-wider">{service.stats.label}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-7">
              <span className="text-[10px] md:text-xs text-[#00e5c0] tracking-[0.2em] uppercase">{service.subtitle}</span>
              <h3 className="text-xl md:text-2xl font-display tracking-wider text-white mt-2 md:mt-2.5 uppercase group-hover:text-[#00e5c0] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2.5 md:mt-3 text-xs md:text-sm text-[#6b6b6b] leading-relaxed line-clamp-2">
                {service.description}
              </p>
              
              {/* Arrow */}
              <div className="mt-4 md:mt-5 flex items-center gap-2 text-[#6b6b6b] group-hover:text-white transition-colors">
                <span className="text-[10px] md:text-xs tracking-widest uppercase">Explore</span>
                <motion.svg 
                  className="w-3.5 h-3.5 md:w-4 md:h-4"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
            </div>
          </motion.a>
        ))}
        </div>

        {/* Brands/Clients Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 pt-10 sm:pt-12 md:pt-14 border-t border-[#1f1f1f]"
        >
          <p className="text-center text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#6b6b6b] mb-8 md:mb-10">
            Trusted By Leading Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            {['Nike', 'Apple', 'Netflix', 'Red Bull', 'GoPro', 'DJI'].map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl md:text-2xl font-display tracking-wider text-[#3a3a3a] hover:text-white transition-colors duration-300 uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
