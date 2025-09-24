import React from 'react';
import { motion } from 'framer-motion';
import { ShineBorder } from './ShineBorder';

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  onClick,
  className = "",
  size = "lg",
  variant = "primary"
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-bss-green text-bss-black hover:bg-bss-green/90",
    secondary: "bg-bss-carbon text-bss-white border border-bss-green/30 hover:border-bss-green"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center rounded-xl overflow-hidden w-fit mx-auto
        font-poppins font-bold uppercase tracking-wide
        transition-all duration-300 transform-gpu
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(123, 251, 78, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ShineBorder positioned absolutely within the button */}
      <ShineBorder
        borderWidth={2}
        duration={6}
        shineColor={["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE"]}
        className="z-0"
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-5"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
        style={{ transform: 'skewX(-45deg)' }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};