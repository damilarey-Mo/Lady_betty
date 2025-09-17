'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState(1); // 1 = next, -1 = prev

  const scrollToNext = () => {
    const nextSection = document.getElementById('collections');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      title: "Elegant Grace",
      subtitle: "Flowing silhouette that flatters and showcases the full look.",
      image: "/images/products/Betty  White Maxi Dress.JPG",
      buttonText: "Shop Maxi Dresses"
    },
    {
      id: 2,
      title: "Radiant Sunshine",
      subtitle: "Sunlit elegance with a full-length profile for standout moments.",
      image: "/images/products/Betty Yellow Maxi dress.jpg",
      buttonText: "Shop Maxi Dresses"
    },
    {
      id: 3,
      title: "Bold Statement",
      subtitle: "Statement patterns designed to be seen from head to toe.",
      image: "/images/products/Betty Patterned Maxi dress.jpeg",
      buttonText: "Shop Patterned Styles"
    },
    {
      id: 4,
      title: "Modern Sophistication",
      subtitle: "Modern monochrome with a full-body, graceful fall.",
      image: "/images/products/Betty Mono patterened Maxi dress.jpg",
      buttonText: "Shop Monochrome"
    },
    {
      id: 5,
      title: "Timeless Beauty",
      subtitle: "Elegant full-length profile that elongates and refines.",
      image: "/images/products/Christy dress.jpg",
      buttonText: "Shop Christy"
    },
    {
      id: 6,
      title: "Evening Glamour",
      subtitle: "A refined evening silhouette—complete look, head-to-toe.",
      image: "/images/products/Doris Evening dress..JPG",
      buttonText: "Shop Evening"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);


  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    const total = slides.length;
    // Compute shortest direction for wrap-around
    const forwardDistance = (index - currentSlide + total) % total;
    const backwardDistance = (currentSlide - index + total) % total;
    setSlideDirection(forwardDistance <= backwardDistance ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: () => ({
      opacity: 0
    }),
    center: {
      zIndex: 1,
      opacity: 1
    },
    exit: () => ({
      zIndex: 0,
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
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={currentSlide}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { type: 'tween', duration: 0.8, ease: 'easeInOut' }
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
                  className="text-4xl md:text-6xl lg:text-6xl font-semibold font-playfair mb-6 leading-tight drop-shadow-lg text-warm-beige"
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
                  <a href="https://wa.me/7067030161" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="shadow-2xl">
                      {slides[currentSlide].buttonText}
                    </Button>
                  </a>
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