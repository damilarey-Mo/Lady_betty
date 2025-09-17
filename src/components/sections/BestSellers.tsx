"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import { products } from '@/data/mockData';
import Container from '../shared/Container';
import Section from '../shared/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gap, setGap] = useState(24); // Tailwind gap-6 ≈ 24px
  const [slidesPerView, setSlidesPerView] = useState(1);

  const recalcSizes = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    // infer gap from computed style (column-gap)
    const style = window.getComputedStyle(track);
    const columnGap = parseFloat(style.columnGap || '24');
    setGap(isNaN(columnGap) ? 24 : columnGap);

    // find first slide width
    const firstSlide = track.querySelector<HTMLElement>("[data-slide]");
    if (firstSlide) {
      const w = firstSlide.offsetWidth;
      setSlideWidth(w);
      const vp = viewport.clientWidth;
      const spv = Math.max(1, Math.floor(vp / (w + columnGap)) || 1);
      setSlidesPerView(spv);
    }
  }, []);

  useEffect(() => {
    recalcSizes();
    window.addEventListener('resize', recalcSizes);
    return () => window.removeEventListener('resize', recalcSizes);
  }, [recalcSizes]);

  const maxIndex = Math.max(0, products.length - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, nextSlide]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const translateX = -(currentIndex * (slideWidth + gap));

  return (
    <Section id="bestsellers" background="warm-beige-light" animationDirection="right" animationDelay={0.3}>
      <Container>
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
            Best Sellers
          </h2>
          <div className="w-20 h-1 bg-new-accent rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative" onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-dark-olive" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-dark-olive" />
          </button>

          {/* Viewport */}
          <div ref={viewportRef} className="overflow-hidden">
            {/* Track */}
            <motion.div
              ref={trackRef}
              className="flex gap-6"
              animate={{ x: translateX }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  data-slide
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  <Card className="h-full group relative">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={320}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Quick Add Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg"
                        aria-label={`Add ${product.name}`}
                      >
                        <Plus size={20} className="text-dark-olive" />
                      </motion.button>
                    </div>

                    <div className="p-4 relative">
                      <h3 className="font-semibold font-playfair mb-2 text-dark-olive">
                        {product.name}
                      </h3>
                      <p className="text-sm text-dark-olive/70 mb-2">{product.category}</p>
                      <p className="text-lg font-semibold text-dark-olive mb-3">
                        ₦{product.price.toLocaleString()}
                      </p>
                      
                      {/* Hover Description */}
                      <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 bg-black/80 text-white p-4 flex flex-col justify-center items-center text-center">
                        <h4 className="font-semibold mb-2">{product.color} {product.style}</h4>
                        <p className="text-sm leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="https://wa.me/7067030161" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">View All Products</Button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
