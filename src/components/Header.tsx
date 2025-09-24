import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-bss-black/80 backdrop-blur-md border-b border-bss-green/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/logo.png" 
              alt="BLACKSIDER SOCIETY" 
              className="h-8 w-auto"
            />
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span 
              className="glitch-text-red text-red-500 font-ibm-mono text-sm uppercase tracking-wider"
              data-text="Brecha no Sistema"
            >
              Brecha no Sistema
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};