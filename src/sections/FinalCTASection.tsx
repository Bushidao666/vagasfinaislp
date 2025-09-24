import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AlertTriangle } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="final-cta" ref={ref} className="py-12 bg-bss-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-red-900/30 border border-red-500/50 rounded-full">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-3" />
              <span className="text-red-400 font-ibm-mono text-sm uppercase tracking-wider">
                Último Aviso • Vagas Finais Preenchidas em Breve
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};