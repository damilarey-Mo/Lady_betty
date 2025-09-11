'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
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

  const customerService = [
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Track Order', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-dark-olive text-warm-beige">
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
                <img
                  src="/images/logo/ladybettylogo.png"
                  alt="Lady Betty"
                  className="h-16 w-auto"
                />
              </motion.div>
              <p className="text-warm-beige/80 mb-6 leading-relaxed">
                Creating timeless pieces that celebrate femininity and strength. 
                Elevate your wardrobe with pieces that empower your confidence.
              </p>
              
              {/* Contact Info */}
              
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-warm-beige/80 hover:text-soft-rose transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                {customerService.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-warm-beige/80 hover:text-soft-rose transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
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
