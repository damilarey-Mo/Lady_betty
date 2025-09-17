import { ReactNode } from 'react';
import RevealAnimation from './RevealAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'warm-beige' | 'warm-beige-light' | 'dark-olive';
  id?: string;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
  animationDelay?: number;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'warm-beige',
  id,
  animationDirection = 'up',
  animationDelay = 0
}: SectionProps) {
  const backgroundClasses = {
    'warm-beige': 'bg-warm-beige',
    'warm-beige-light': 'bg-warm-beige-light',
    'dark-olive': 'bg-dark-olive text-warm-beige'
  };

  return (
    <section 
      id={id}
      className={`py-6 md:py-8 lg:py-12 ${backgroundClasses[background]} ${className}`}
    >
      <RevealAnimation 
        direction={animationDirection} 
        delay={animationDelay}
        className="w-full"
      >
        {children}
      </RevealAnimation>
    </section>
  );
}
