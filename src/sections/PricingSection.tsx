import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShinyButton } from '../components/ShinyButton';
import { ShineBorder } from '../components/ShineBorder';
import { Check, Zap, Crown, Shield } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handlePlanClick = (plan: string) => {
    // Here you would integrate with your payment system
    console.log(`Selected plan: ${plan}`);
    // For demo purposes, just scroll to the final section
    const finalSection = document.getElementById('final-cta');
    finalSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const arsenalFeatures = [
    "Acesso COMPLETO à BLACKSIDER Society",
    "Todos os módulos de treinamento (20+ horas)",
    "Scripts e automações premium",
    "Templates de campanhas que converteram milhões",
    "Acesso ao grupo VIP no Telegram",
    "Suporte prioritário direto comigo",
    "Atualizações vitalícias",
    "Garantia incondicional de 7 dias",
    "BÔNUS: Kit de Ferramentas Premium",
    "BÔNUS: Sessão de estratégia individual"
  ];

  const aliancaFeatures = [
    "Acesso aos módulos fundamentais",
    "Scripts básicos de automação",
    "Templates principais de campanhas",
    "Acesso ao grupo geral no Telegram",
    "Suporte via comunidade",
    "Atualizações por 1 ano",
    "Garantia de 7 dias"
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-bss-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bss-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bss-violet/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-red-900/20 border border-red-500/30 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-red-400 font-ibm-mono text-sm uppercase tracking-wider">
                Decisão Crítica • Tempo Esgotando
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-5xl font-poppins font-black text-bss-white mb-6 leading-tight"
            >
              ESCOLHA SUA
              <span className="text-bss-green"> MISSÃO</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-bss-gray font-ibm-mono max-w-3xl mx-auto leading-relaxed"
            >
              Duas portas se abrem agora. Apenas uma te leva ao topo da hierarquia.
              <br />
              <span className="text-bss-green">A decisão é sua. O tempo não é.</span>
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Arsenal Plan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-bss-green text-bss-black px-6 py-2 rounded-full font-poppins font-bold text-sm uppercase tracking-wide">
                  Mais Escolhida
                </div>
              </div>

              <div className="bg-gradient-to-br from-bss-carbon/40 to-bss-carbon/20 border-2 border-bss-green/50 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-bss-green transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-bss-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-bss-green/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-bss-green/30 transition-colors duration-300">
                      <Crown className="w-8 h-8 text-bss-green" />
                    </div>
                    <h3 className="text-2xl font-poppins font-black text-bss-white mb-2 uppercase tracking-wide">
                      Missão Completa
                    </h3>
                    <p className="text-bss-green font-ibm-mono font-bold text-lg uppercase">
                      O Arsenal
                    </p>
                    <div className="mt-6">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-4xl md:text-5xl font-poppins font-black text-bss-green">R$ 2.997</span>
                        <span className="text-bss-gray font-ibm-mono text-lg ml-2">/ano</span>
                      </div>
                      <p className="text-bss-gray font-ibm-mono text-sm">
                        Ou 12x de R$ 297 sem juros
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {arsenalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 bg-bss-green/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                          <Check className="w-3 h-3 text-bss-green" />
                        </div>
                        <span className="text-bss-white font-ibm-mono text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="relative">
                    <ShinyButton
                      onClick={() => handlePlanClick('arsenal')}
                      className="w-full"
                      size="lg"
                    >
                      INICIAR MISSÃO COMPLETA
                    </ShinyButton>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aliança Plan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-bss-carbon/20 to-bss-carbon/10 border border-bss-green/30 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-bss-green/50 transition-all duration-300">
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-bss-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-bss-green/20 transition-colors duration-300">
                      <Shield className="w-8 h-8 text-bss-green" />
                    </div>
                    <h3 className="text-2xl font-poppins font-black text-bss-white mb-2 uppercase tracking-wide">
                      Missão de Reconhecimento
                    </h3>
                    <p className="text-bss-green font-ibm-mono font-bold text-lg uppercase">
                      A Aliança
                    </p>
                    <div className="mt-6">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-4xl md:text-5xl font-poppins font-black text-bss-green">R$ 1.497</span>
                        <span className="text-bss-gray font-ibm-mono text-lg ml-2">/ano</span>
                      </div>
                      <p className="text-bss-gray font-ibm-mono text-sm">
                        Ou 12x de R$ 147 sem juros
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {aliancaFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 bg-bss-green/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                          <Check className="w-3 h-3 text-bss-green" />
                        </div>
                        <span className="text-bss-white font-ibm-mono text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="relative">
                    <ShinyButton
                      onClick={() => handlePlanClick('alianca')}
                      variant="secondary"
                      className="w-full"
                      size="lg"
                    >
                      INICIAR MISSÃO DE RECONHECIMENTO
                    </ShinyButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Security Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center text-bss-gray">
                <Shield className="w-5 h-5 text-bss-green mr-2" />
                <span className="font-ibm-mono text-sm">Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center text-bss-gray">
                <Zap className="w-5 h-5 text-bss-green mr-2" />
                <span className="font-ibm-mono text-sm">Acesso Imediato</span>
              </div>
              <div className="flex items-center text-bss-gray">
                <Check className="w-5 h-5 text-bss-green mr-2" />
                <span className="font-ibm-mono text-sm">Garantia de 7 Dias</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};