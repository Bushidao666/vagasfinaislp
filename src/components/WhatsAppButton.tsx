import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (isExpanded) {
      // Se está expandido, vai para o WhatsApp
      window.open('https://wa.me/5511965089329?text=Ol%C3%A1%21%20Quero%20entrar%20pra%20BlackSider%2C%20tenho%20uma%20d%C3%BAvida%3A', '_blank');
    } else {
      // Se não está expandido, expande
      setIsExpanded(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            key="whatsapp-button"
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        ) : (
          <motion.div
            key="whatsapp-expanded"
            className="bg-white rounded-lg shadow-xl p-4 max-w-xs border"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-2 mr-2">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm">BlackSider Support</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">
              Clique aqui caso tenha dúvidas, nossa equipe irá te atender.
            </p>
            
            <button
              onClick={handleClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Falar no WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};