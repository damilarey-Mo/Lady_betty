import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        bg-warm-beige-light rounded-lg shadow-lg overflow-hidden cursor-pointer
        transition-all duration-300 ease-in-out hover:shadow-2xl
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
