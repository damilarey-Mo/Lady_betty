import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import AboutSection from '@/components/sections/AboutSection';
import BestSellers from '@/components/sections/BestSellers';
import Testimonials from '@/components/sections/Testimonials';
import InstagramFeed from '@/components/sections/InstagramFeed';
import Newsletter from '@/components/sections/Newsletter';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="space-y-8">
        <FeaturedCollections />
        <AboutSection />
        <BestSellers />
        <Testimonials />
        <InstagramFeed />
        <Newsletter />
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
