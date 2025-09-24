import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'light' | 'strong';
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = "",
  intensity = "strong"
}) => {
  const glitchClass = intensity === 'strong' ? 'glitch-title-strong' : 'glitch-text-light';
  
  return (
    <motion.h1 
      className={`${glitchClass} ${className}`}
      data-text={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        animationDuration: '3s'
      }}
    >
      {text}
    </motion.h1>
  );
};