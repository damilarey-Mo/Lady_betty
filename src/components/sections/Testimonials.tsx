'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/data/mockData';
import Container from '../shared/Container';
import Section from '../shared/Section';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality - moved before early return
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Ensure testimonials exist and have data
  if (!testimonials || testimonials.length === 0) {
    console.log('No testimonials available, showing fallback');
    return (
      <Section id="testimonials" background="warm-beige-light">
        <Container>
          <div className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-new-accent rounded-full mx-auto mb-6"></div>
            <p className="text-dark-olive/70 mb-4">No testimonials available at the moment.</p>
           
          </div>
        </Container>
      </Section>
    );
  }

  // Ensure currentIndex is within valid bounds
  const validIndex = Math.min(currentIndex, testimonials.length - 1);
  if (validIndex !== currentIndex) {
    setCurrentIndex(validIndex);
  }

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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[validIndex];

  

  return (
    <Section id="testimonials" background="warm-beige-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
            What Our Customers Say
          </h3>
          <div className="w-20 h-1 bg-new-accent rounded-full mb-6"></div>
         
        </motion.div>

        {/* Debug Info */}
        

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-dark-olive p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-dark-olive p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Slides */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center max-w-3xl px-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-new-accent/20 rounded-full">
                      <Quote size={32} className="text-new-accent" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-dark-olive leading-relaxed mb-8 font-medium italic">
                    &ldquo;{currentTestimonial.text}&rdquo;
                  </blockquote>

                  {/* Star Rating */}
                  <div className="flex justify-center items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < currentTestimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-dark-olive text-lg">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-dark-olive/70 text-sm">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-new-accent w-8'
                    : 'bg-dark-olive/30 hover:bg-dark-olive/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-dark-olive/20 rounded-full h-1">
              <motion.div
                className="bg-new-accent h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
