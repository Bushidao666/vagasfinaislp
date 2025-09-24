import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-bss-black border-t border-bss-green/20 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="BLACKSIDER SOCIETY" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-bss-gray font-ibm-mono text-xs md:text-sm leading-relaxed">
                Uma sociedade secreta para profissionais que querem dominar
                as estratégias digitais mais avançadas do mercado antes de todo mundo.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-bss-white font-poppins font-bold text-lg mb-4 uppercase">
                Contato
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-bss-gray">
                  <Mail className="w-4 h-4 text-bss-green mr-3" />
                  <span className="font-ibm-mono text-xs md:text-sm">contato@blacksidersociety.com</span>
                </div>
                <div className="flex items-center text-bss-gray">
                  <ExternalLink className="w-4 h-4 text-bss-green mr-3" />
                  <a 
                    href="https://instagram.com/realspy.ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-ibm-mono text-xs md:text-sm hover:text-bss-green transition-colors duration-200"
                  >
                    Instagram: @realspy.ads
                  </a>
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-bss-white font-poppins font-bold text-base md:text-lg mb-4 uppercase">
                Segurança & Privacidade
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-bss-gray">
                  <Shield className="w-4 h-4 text-bss-green mr-3" />
                  <span className="font-ibm-mono text-xs md:text-sm">SSL 256-bit Encryption</span>
                </div>
                <div className="flex items-center text-bss-gray">
                  <Shield className="w-4 h-4 text-bss-green mr-3" />
                  <span className="font-ibm-mono text-xs md:text-sm">Pagamentos PCI-DSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-bss-green/20 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-bss-gray font-ibm-mono text-xs md:text-sm mb-2 md:mb-0 text-center md:text-left">
              © 2025 BLACKSIDER Society. Todos os direitos reservados.
              <br className="md:hidden" />
              <span className="text-bss-green"> Sistema de Acesso Temporário Ativo.</span>
            </p>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-bss-gray font-ibm-mono text-xs text-center">
                Esta página será removida automaticamente
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};