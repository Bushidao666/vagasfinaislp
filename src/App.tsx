import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { MatrixBackground } from './components/MatrixBackground';
import { HeroSection } from './sections/HeroSection';
import { ContextSection } from './sections/ContextSection';
import { UpgradeSection } from './sections/UpgradeSection';
import { PricingSection } from './sections/PricingSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Set document title with urgency indicator
    document.title = '🚨 VAGAS FANTASMA - BLACKSIDER Society | Tempo Esgotando';
    
    // Add favicon dynamically
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23000000"/><text y="70" font-size="60" fill="%237bfb4e">⚠</text></svg>';
    }

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-bss-black text-bss-white font-poppins overflow-x-hidden">
      {/* Matrix Background Effect */}
      <MatrixBackground />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ContextSection />
        <UpgradeSection />
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;