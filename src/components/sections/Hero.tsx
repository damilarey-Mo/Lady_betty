'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollToNext = () => {
    const nextSection = document.getElementById('collections');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      title: "Birthday Collection",
      subtitle: "Elegant dresses perfect for special celebrations and memorable moments.",
      image: "/images/collections/Birthday_dress.jpeg",
      buttonText: "Shop Birthday Collection"
    },
    {
      id: 2,
      title: "Cream & Chocolate",
      subtitle: "Sophisticated pieces in warm, neutral tones for everyday elegance.",
      image: "/images/collections/creamandchoc.jpg",
      buttonText: "Shop Cream & Chocolate"
    },
    {
      id: 3,
      title: "Summer Essentials",
      subtitle: "Light and breezy styles that keep you comfortable and stylish all season.",
      image: "/images/collections/e4cc8f25ddf3e14e264a6054ebaa3a8b.jpg",
      buttonText: "Shop Summer Collection"
    },
    {
      id: 4,
      title: "Elegant Evening",
      subtitle: "Stunning outfits for your most glamorous nights out.",
      image: "/images/collections/fb1ebee02fc2fe7605b961fce5cca6ee.jpg",
      buttonText: "Shop Evening Wear"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-end justify-center">
              <div className="text-center text-warm-beige max-w-4xl mx-auto px-4 mb-32">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-6xl font-semibold font-playfair mb-6 leading-tight drop-shadow-lg"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-warm-beige/90 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button variant="secondary" size="lg" className="shadow-2xl">
                    {slides[currentSlide].buttonText}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* Dot Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-warm-beige w-8'
                  : 'bg-warm-beige/50 hover:bg-warm-beige/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-warm-beige hover:text-new-accent transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 hidden lg:block z-10"
      >
        <div className="w-16 h-16 bg-new-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Sparkles size={32} className="text-new-accent" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 left-20 hidden lg:block z-10"
      >
        <div className="w-12 h-12 bg-new-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Heart size={24} className="text-new-accent" />
        </div>
      </motion.div>
    </section>
  );
}