import React from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/GlitchText';
import { CountdownTimer } from '../components/CountdownTimer';
import { ShinyButton } from '../components/ShinyButton';
import { TypewriterText } from '../components/TypewriterText';

export const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/porta.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-bss-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bss-black/60 via-transparent to-bss-black/80"></div>
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        ></div>
      </div>

      {/* Matrix Background Pattern */}
      <div className="absolute inset-0 opacity-10 matrix-bg z-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-2">
        {/* Alert Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 md:px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-6 md:mb-8 text-center"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
          <span className="text-green-400 font-ibm-mono text-xs md:text-sm uppercase tracking-wider text-center">
            Última Oportunidade • Vagas Finais
          </span>
        </motion.div>

        {/* Main Headline with Glitch Effect */}
        <GlitchText 
          text="AVISO URGENTE: UMA FALHA NO SISTEMA REABRIU AS PORTAS."
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-title font-black text-bss-white mb-6 md:mb-8 px-2"
        />

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <TypewriterText
            text="Para os que ficaram de fora e se arrependeram: 
            Vocês têm a última chance de entrar na BlackSider."
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-ibm-mono text-bss-gray max-w-4xl mx-auto leading-relaxed px-2"
            speed={30}
            delay={1000}
          />
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-bold text-bss-white mb-4 md:mb-6 uppercase tracking-wide px-2">
            ESTAS VAGAS-FANTASMA DESAPARECEM EM:
          </h3>
          <CountdownTimer 
            targetDate={new Date('2025-09-26T23:00:00-03:00')} // 26/09/2025 às 23h00 GMT-3
            className="mb-6 md:mb-8"
          />
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <ShinyButton 
            onClick={() => window.open('https://form.typeform.com/to/PBEJ25ma?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx', '_blank')}
            size="lg"
            className="text-base md:text-lg lg:text-xl px-6 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6"
          >
            QUERO UMA DESSAS ÚLTIMAS VAGAS
          </ShinyButton>
        </motion.div>

        {/* Warning Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-bss-gray font-ibm-mono text-xs md:text-sm max-w-2xl mx-auto px-4">
            ⚠️ Esta página será removida automaticamente quando o tempo expirar. 
            Não haverá segunda oportunidade.
          </p>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="mt-6 md:mt-8 flex flex-col items-center scroll-indicator"
          >
            <span className="text-bss-gray font-ibm-mono text-xs mb-2 uppercase tracking-wider text-center">
              Role para descobrir mais
            </span>
            <div className="w-6 h-10 border-2 border-bss-green/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-bss-green rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="mt-2">
              <svg 
                className="w-4 h-4 text-bss-green animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};