import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'warm-beige' | 'warm-beige-light' | 'dark-olive';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'warm-beige',
  id 
}: SectionProps) {
  const backgroundClasses = {
    'warm-beige': 'bg-warm-beige',
    'warm-beige-light': 'bg-warm-beige-light',
    'dark-olive': 'bg-dark-olive text-warm-beige'
  };

  return (
    <section 
      id={id}
      className={`py-20 md:py-24 lg:py-32 ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
