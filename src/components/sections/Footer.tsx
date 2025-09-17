'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, X, Mail, MessageCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
import Container from '../shared/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#' },
    { name: 'Size Guide', href: '#' }
  ];

  
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/the_lady_betty_/' },
    { name: 'Twitter', icon: X, href: '#' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/7067030161' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@ladybetty.com' }
  ];

  return (
    <footer className="bg-dark-olive text-warm-beige mt-16">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300 mb-4"
              >
                <Image
                  src="/images/logo/ladybettylogo.png"
                  alt="Lady Betty"
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                />
              </motion.div>
              <p className="text-warm-beige/80 mb-6 leading-relaxed">
                Creating timeless pieces that celebrate femininity and strength. 
                Elevate your wardrobe with pieces that empower your confidence.
              </p>
              
              {/* Contact Info moved below into Social section */}
            </motion.div>

            


            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-warm-beige/80 mb-4">
                Follow us for the latest updates and style inspiration.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-warm-beige/10 hover:bg-soft-rose p-2 rounded-full transition-colors duration-200"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-new-accent p-2 rounded-full"><Mail size={16} className="text-white" /></div>
                  <a href="mailto:hello@ladybetty.com" className="text-warm-beige/90 hover:text-soft-rose transition-colors">hello@ladybetty.com</a>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-new-accent p-2 rounded-full"><MapPin size={16} className="text-white" /></div>
                  <div className="text-warm-beige/90">
                    <p>1, Adekunle Sule, Majek Cele</p>
                    <p>Eti-Osa, Sangotedo 101233, Lagos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
            
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-warm-beige/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-beige/60 text-sm">
              © {currentYear} Lady Betty. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-warm-beige/60">
              <a href="#" className="hover:text-soft-rose transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-soft-rose transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-soft-rose transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
