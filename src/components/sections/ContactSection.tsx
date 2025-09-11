'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Container from '../shared/Container';
import Section from '../shared/Section';
import Input from '../ui/Input';
import Button from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
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
    <Section id="contact" background="warm-beige">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair mb-4 text-dark-olive">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-new-accent rounded-full mb-6"></div>
          <p className="text-lg text-dark-olive/70 max-w-2xl mb-8">
            Have questions about our collections or need styling advice? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold font-playfair mb-6 text-dark-olive">
              Send us a Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    {...register('name')}
                    label="Full Name"
                    placeholder="Enter your full name"
                    error={errors.name?.message}
                    className="bg-warm-beige-light/50 border-dark-olive/20 text-dark-olive placeholder-dark-olive/50 focus:ring-soft-rose focus:border-soft-rose"
                  />
                  <Input
                    {...register('email')}
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    error={errors.email?.message}
                    className="bg-warm-beige-light/50 border-dark-olive/20 text-dark-olive placeholder-dark-olive/50 focus:ring-soft-rose focus:border-soft-rose"
                  />
                </div>

                <Input
                  {...register('subject')}
                  label="Subject"
                  placeholder="What's this about?"
                  error={errors.subject?.message}
                  className="bg-warm-beige-light/50 border-dark-olive/20 text-dark-olive placeholder-dark-olive/50 focus:ring-soft-rose focus:border-soft-rose"
                />

                <div>
                  <label className="block text-sm font-medium text-dark-olive mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-dark-olive/20 rounded-md focus:outline-none focus:ring-2 focus:ring-soft-rose focus:border-transparent transition-all duration-200 ease-in-out resize-none bg-warm-beige-light/50 text-dark-olive placeholder-dark-olive/50"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    disabled={isLoading}
                    className="w-auto"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <Send size={16} />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="text-green-600 mb-2">
                  <Send size={24} className="mx-auto" />
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold font-playfair mb-6 text-dark-olive">
                Contact Information
              </h3>
              <p className="text-dark-olive/70 mb-6 leading-relaxed">
                We're here to help you find your perfect style. Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-new-accent p-3 rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-olive mb-1">Email</h4>
                  <p className="text-dark-olive/70">hello@ladybetty.com</p>
                  <p className="text-sm text-dark-olive/50">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-new-accent p-3 rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-olive mb-1">Phone</h4>
                  <p className="text-dark-olive/70">+234 (706) 1703-0161</p>
                  <p className="text-sm text-dark-olive/50">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                  <div className="bg-new-accent p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-olive mb-1">Address</h4>
                  <p className="text-dark-olive/70">1 Adekunle Sule St,</p>
                  <p className="text-dark-olive/70">Eti-Osa, Lagos 106104, Lagos</p>
                  <p className="text-sm text-dark-olive/50">By appointment only</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
