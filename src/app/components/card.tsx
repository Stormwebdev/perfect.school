import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const Component = hover ? motion.div : 'div';
  
  return (
    <Component
      className={`bg-card border border-border rounded-2xl p-6 ${className}`}
      {...(hover && {
        whileHover: { scale: 1.02, y: -5 },
        transition: { duration: 0.3 }
      })}
    >
      {children}
    </Component>
  );
}
