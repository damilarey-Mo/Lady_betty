'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const directionVariants = {
  up: { y: 60, opacity: 0 },
  down: { y: -60, opacity: 0 },
  left: { x: 60, opacity: 0 },
  right: { x: -60, opacity: 0 },
};

const directionVariantsIn = {
  up: { y: 0, opacity: 1 },
  down: { y: 0, opacity: 1 },
  left: { x: 0, opacity: 1 },
  right: { x: 0, opacity: 1 },
};

export default function RevealAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: RevealAnimationProps) {
  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={directionVariantsIn[direction]}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
