import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openFaq, setOpenFaq] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Delivered' },
    { number: '25+', label: 'Countries Visited' },
    { number: '50M+', label: 'Views Generated' },
  ];

  const testimonials = [
    {
      quote: "Working with this team transformed our brand's visual identity. The cinematic quality exceeded all expectations.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Nike",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote: "The attention to detail and storytelling ability is unmatched. Every frame tells a story.",
      author: "Marcus Johnson",
      role: "Creative Lead",
      company: "Red Bull",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
  ];

  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I specialize in brand films, documentaries, commercial campaigns, and creative content for social media. Each project is approached with cinematic quality and storytelling at its core."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope. A typical brand film takes 4-8 weeks from concept to delivery, while larger campaigns may require 2-3 months for full production."
    },
    {
      question: "Do you travel for projects?",
      answer: "Absolutely! I've worked across 25+ countries and am always ready for new adventures. Travel costs are discussed during the project scoping phase."
    },
    {
      question: "What equipment do you use?",
      answer: "I work primarily with RED and Sony cinema cameras, paired with premium Zeiss and Sony G Master lenses. For photography, I use Sony A7 series and Leica systems."
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-visible"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="section-label">
            About Me
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-wider mt-4 text-white uppercase">
            The Storyteller
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start mb-20 md:mb-24">
          {/* Image Side */}
          <motion.div
            style={{ y: imageY }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:max-w-none"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/20" />

              {/* Stats overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#111111]/90 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-[#1f1f1f]">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="stat-number text-xl sm:text-2xl">{stat.number}</div>
                      <div className="stat-label text-[8px] sm:text-[9px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-wider text-white mb-4 sm:mb-6 uppercase">
              Capturing Emotions,{' '}
              <span className="text-[#00e5c0]">Creating Connections</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-5 text-[#6b6b6b] leading-relaxed text-sm sm:text-base">
              <p>
                I'm a visual storyteller with a passion for capturing the raw, unfiltered moments 
                that define our human experience. With my camera as my compass, I've traveled 
                across continents, documenting stories that transcend language and culture.
              </p>
              
              <p>
                Whether I'm crafting a brand's visual identity or documenting a personal project, 
                my approach remains the same: <span className="text-white">prioritize emotion over perfection, 
                authenticity over aesthetics</span>.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-8 pl-4 sm:pl-6 border-l-2 border-[#00e5c0]"
            >
              <p className="text-base sm:text-lg text-white italic font-display tracking-wide">
                "Every frame is a chance to make someone feel something they've never felt before."
              </p>
            </motion.blockquote>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-[#1f1f1f]">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="stat-number text-lg sm:text-xl md:text-2xl">{stat.number}</div>
                  <div className="stat-label text-[7px] sm:text-[8px] md:text-[9px]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 md:mb-24"
        >
          <h3 className="text-xl sm:text-2xl font-display tracking-wider text-white uppercase text-center mb-8 md:mb-12">
            What Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 sm:p-6 md:p-8"
              >
                <p className="text-[#6b6b6b] leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-[10px] sm:text-xs text-[#6b6b6b]">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display tracking-wider text-white uppercase text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="accordion-item"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-white font-medium pr-8">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    className="w-5 h-5 text-[#6b6b6b] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#6b6b6b] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
