'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Instagram } from 'lucide-react';
import Image from 'next/image';
import { instagramPosts } from '@/data/mockData';
import Container from '../shared/Container';
import Section from '../shared/Section';
import Button from '../ui/Button';

export default function InstagramFeed() {
  return (
    <Section id="instagram" background="warm-beige-light" animationDirection="left" animationDelay={0.5}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
            Follow Our Style Journey
          </h2>
          <div className="w-20 h-1 bg-new-accent rounded-full mb-6"></div>
          <p className="text-lg text-dark-olive/70 max-w-2xl">
            Get inspired by our latest looks and behind-the-scenes moments
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/the_lady_betty_/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Heart size={16} className="fill-current" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={16} />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs opacity-90">Tap to view on Instagram</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="https://www.instagram.com/the_lady_betty_/" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="primary" 
              size="lg"
              className="inline-flex items-center space-x-2"
            >
              <span>Follow Us on Instagram</span>
              <Instagram size={20} />
            </Button>
          </a>
          
          <p className="text-sm text-[#6B7280] mt-4">
            Join our community of fashion enthusiasts and get daily inspiration
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
