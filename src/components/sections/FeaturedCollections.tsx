'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { collections } from '@/data/mockData';
import Container from '../shared/Container';
import Section from '../shared/Section';
import Card from '../ui/Card';

export default function FeaturedCollections() {
  return (
    <Section id="collections" background="warm-beige" animationDirection="up" animationDelay={0.1}>
      <Container>
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
            Featured Collections
          </h2>
          <div className="w-20 h-1 bg-new-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full group">
                <div className="relative overflow-hidden aspect-[5/6]">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    width={420}
                    height={540}
                    className="w-[420px] h-[540px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-olive/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-new-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {collection.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-warm-beige-light">
                  <h3 className="text-xl font-semibold font-playfair mb-2 text-dark-olive group-hover:text-new-accent transition-colors duration-300">
                    {collection.name}
                  </h3>
                  
                  <p className="text-dark-olive/70 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <motion.a
                    href="https://wa.me/7067030161"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-dark-olive font-medium hover:text-new-accent transition-colors duration-200 group/link"
                  >
                    Shop Now
                    <ArrowRight 
                      size={16} 
                      className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" 
                    />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className=" rounded-2xl p-8 text-dark-olive bg-warm-beige">
            <h3 className="text-2xl font-semibold font-playfair mb-4">
              Ready to Transform Your Style?
            </h3>
            <p className="text-lg mb-6 text-dark-olive/80">
              Explore our complete collection and discover pieces that speak to your unique style
            </p>
            <a href="https://www.instagram.com/the_lady_betty_/" target="_blank" rel="noopener noreferrer">
              <button className="bg-new-accent text-white font-semibold py-2 px-4 rounded-full hover:bg-new-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                View All Collections
              </button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
