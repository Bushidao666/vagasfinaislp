import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShinyButton } from '../components/ShinyButton';
import { Users, CheckCircle, Trophy, Lock, Zap } from 'lucide-react';

export const UpgradeSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const upgrades = [
    {
      icon: Users,
      title: "A Aliança: Seu QG Secreto",
      description: "Não é um fórum, é onde você encontra um sócio de 7 dígitos. O lugar para ter acesso à inteligência que o mercado só vai descobrir daqui a 6 meses."
    },
    {
      icon: CheckCircle,
      title: "Protocolos de Execução: O Fim da Paralisia",
      description: "Chega de conhecimento que não vira dinheiro. Nossas trilhas são o mapa exato, do zero à execução, pra você finalmente parar de patinar e começar a lucrar."
    },
    {
      icon: Trophy,
      title: "Missões de Temporada: Grana ou Caixão",
      description: "Fim da obesidade de informação. Aqui, forçamos a execução com missões valendo prêmios, ferramentas e respeito. Compita, execute e pare de ser um zumbi de conteúdo."
    },
    {
      icon: Lock,
      title: "Arsenal Exclusivo: Sua Vantagem Desleal",
      description: "Tenha acesso às armas que te tornam invisível para o Facebook e letal para a concorrência. Jogue com as cartas marcadas que os gurus não querem que você tenha."
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-bss-black to-bss-carbon/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/foto2 2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-bss-black/85"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 md:px-4 py-2 bg-bss-green/20 border border-bss-green/50 rounded-full mb-4 md:mb-6"
            >
              <Zap className="w-4 h-4 text-bss-green mr-2" />
              <span className="text-bss-green font-ibm-mono text-xs md:text-sm uppercase tracking-wider">
                Atualização do Sistema
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-bss-white mb-4 md:mb-6 leading-tight px-2"
            >
              Enquanto as portas estavam fechadas, eu não fiquei coçando o saco.
              <br />
              <span className="text-bss-green">Eu trabalhei mais que o cozinheiro do Péricles.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-bss-gray font-ibm-mono max-w-3xl mx-auto leading-relaxed px-2"
            >
              A BSS te deu as armas, mas faltava o manual para a transformação. Eu resolvi isso.
              <br /><br />
              Criei uma nova estrutura de treinamento com trilhas e sprints práticos que será lançada em Outubro.
              <br /><br />
              Será um produto de R$999/ano, mas para você, que entra agora na BlackSider, o acesso será gratuito.
            </motion.p>
          </div>

          {/* Upgrade Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            {upgrades.map((upgrade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                className="group"
              >
                <div className="bg-bss-carbon/30 border border-bss-green/20 rounded-xl p-4 md:p-6 h-full hover:border-bss-green/50 hover:bg-bss-carbon/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-bss-green/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-bss-green/30 transition-colors duration-300">
                      <upgrade.icon className="w-6 h-6 text-bss-green" />
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-poppins font-bold text-bss-white group-hover:text-bss-green transition-colors duration-300">
                      {upgrade.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-bss-gray font-ibm-mono leading-relaxed">
                    {upgrade.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-bss-green/10 to-bss-violet/10 border border-bss-green/30 rounded-xl p-6 md:p-8 lg:p-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-bss-white mb-4">
                Você vai pagar o mesmo (ou menos) e levar a comunidade nova de
                <span className="text-bss-green"> BÔNUS</span>.
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-bss-gray font-ibm-mono max-w-2xl mx-auto">
                Pra quem está de fora, a nova comunidade custará até R$999 reais anuais. 
                Ela será lançada no final de outubro.
              </p>
              
              {/* CTA Button */}
              <div className="mt-8">
                <ShinyButton 
                  onClick={() => window.open('https://form.typeform.com/to/PBEJ25ma?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx', '_blank')}
                  size="lg"
                  className="text-base md:text-lg lg:text-xl px-6 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6"
                >
                  APLICAR PARA A VAGA AGORA
                </ShinyButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};