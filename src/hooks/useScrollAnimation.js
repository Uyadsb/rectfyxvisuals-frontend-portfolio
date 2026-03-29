import { useRef, useCallback } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const useScrollAnimation = (options = {}) => {
  const {
    offset = ['start end', 'end start'],
    springConfig = { stiffness: 100, damping: 30 },
  } = options;

  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Create smooth spring-based progress
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Common transform presets
  const transforms = {
    fadeIn: useTransform(smoothProgress, [0, 0.3], [0, 1]),
    fadeOut: useTransform(smoothProgress, [0.7, 1], [1, 0]),
    slideUp: useTransform(smoothProgress, [0, 0.5], [100, 0]),
    slideDown: useTransform(smoothProgress, [0, 0.5], [-100, 0]),
    scale: useTransform(smoothProgress, [0, 0.5], [0.8, 1]),
    blur: useTransform(smoothProgress, [0, 0.3], [10, 0]),
    parallaxSlow: useTransform(smoothProgress, [0, 1], [50, -50]),
    parallaxFast: useTransform(smoothProgress, [0, 1], [100, -100]),
  };

  // Custom transform creator
  const createTransform = useCallback((inputRange, outputRange) => {
    return useTransform(smoothProgress, inputRange, outputRange);
  }, [smoothProgress]);

  return {
    ref,
    scrollYProgress: smoothProgress,
    transforms,
    createTransform,
  };
};

export default useScrollAnimation;
