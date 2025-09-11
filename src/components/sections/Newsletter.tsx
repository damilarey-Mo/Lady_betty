'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Container from '../shared/Container';
import Section from '../shared/Section';
import Input from '../ui/Input';
import Button from '../ui/Button';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
    setIsLoading(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id="newsletter" background="dark-olive">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-warm-beige">
            Stay in the Loop
          </h2>
          <div className="w-20 h-1 bg-new-accent rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-warm-beige/80 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and style tips
          </p>
        </motion.div>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email address"
                    error={errors.email?.message}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-[#E8B4B8] focus:border-[#E8B4B8]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Subscribe</span>
                      <Mail size={16} />
                    </div>
                  )}
                </Button>
              </div>
              
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto bg-white/10 rounded-lg p-6 border border-white/20"
            >
              <div className="flex items-center justify-center space-x-3 text-white">
                <CheckCircle size={24} className="text-green-400" />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-sm text-gray-300 mt-2 text-center">
                Check your email for your 15% off discount code.
              </p>
            </motion.div>
          )}

          {/* Incentive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
          </motion.div>
        </Container>
      </Section>
    );
  }
