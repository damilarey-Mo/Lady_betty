'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Section from '../shared/Section';

export default function AboutSection() {
  return (
    <Section id="about" background="warm-beige">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-new-accent rounded-full mb-6"></div>
            </div>
            
            <div className="space-y-4 text-dark-olive/70 leading-relaxed">
              <p>
                Founded on the belief that every woman deserves to feel confident and beautiful, 
                Lady Betty creates timeless pieces that celebrate femininity and strength. Our carefully 
                curated collections feature premium fabrics and contemporary designs that empower women 
                to express their unique style with effortless grace.
              </p>
              
              <p>
                We believe that fashion should be both beautiful and functional, allowing you to move 
                through your day with confidence and comfort. Each piece is thoughtfully designed to 
                transition seamlessly from morning meetings to evening events, from casual weekends 
                to special occasions.
              </p>
              
              <p>
                Our commitment to quality extends beyond the garments themselves. We&apos;re dedicated to 
                sustainable practices, ethical manufacturing, and creating pieces that will become 
                cherished staples in your wardrobe for years to come.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop"
                alt="Elegant woman in fashion"
                width={600}
                height={700}
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-olive/20 to-transparent rounded-2xl" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-soft-rose rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">✨</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-soft-rose rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">💎</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
