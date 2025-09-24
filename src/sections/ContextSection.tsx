import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import TerminalBlock from '../components/TerminalBlock';
import { FileText, AlertTriangle, Lock } from 'lucide-react';

export const ContextSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const terminalText = `Há um mês, as portas da BlackSider Society fecharam. Fim de papo. Eu mesmo decretei que quem ficou de fora, ficou de fora.

Acontece que o jogo real tem suas surpresas. Tivemos cerca de 1% de "desistências"… Alguns cabaços que tremeram na base, outros com problemas de última hora…
Resultado: um punhado de vagas, que eu já contava como preenchidas, voltaram a existir.
E eu lembrei de você. 
Lembrei da galera que viu a VSL, entendeu que o jogo tá viciado, mas não conseguiu pular o muro.

Eu não sei qual foi a sua realidade e o motivo de você não ter entrado pra BlackSider há um mês atrás.

* Talvez seu cartão não tinha virado.
* Talvez você precisava de mais dias.
* Talvez você achou que R$2997 era pesado demais.

A real? Não importa. O que importa é que se você se arrependeu de ficar pra trás, o sistema te deu uma brecha.

 E eu tô aqui pra te mostrar a porta.`;

  return (
    <section ref={ref} className="py-12 md:py-20 bg-bss-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/foto 4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-bss-black/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 md:px-4 py-2 bg-bss-carbon border border-bss-green/30 rounded-full mb-4 md:mb-6"
            >
              <FileText className="w-4 h-4 text-bss-green mr-2" />
              <span className="text-bss-green font-ibm-mono text-xs md:text-sm uppercase tracking-wider">
                Documento Confidencial
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-bss-white mb-4 leading-tight px-2"
            >
              A VERDADE: POR QUE ABRIRAM MAIS VAGAS
              <br />
              <span className="text-bss-green">(E POR QUE ELAS VÃO ACABAR RÁPIDO)</span>
            </motion.h2>
          </div>

          {/* Terminal Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TerminalBlock
              durationMs={8000}
              avatarSrc="/spylow.png"
              avatarAlt="Spy — BlackSider"
              avatarSide="right"
              avatarWidth={220}
              textColor="#7bfb4e"
              text={terminalText}
            />
          </motion.div>

          {/* Warning Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 md:mt-12 text-center"
          >
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <span className="text-red-400 font-poppins font-bold text-lg">
                  A CORRIDA PELAS VAGAS-FANTASMA COMEÇOU
                </span>
              </div>
              <p className="text-red-200 font-ibm-mono text-sm">
                Você não é o único arrependido vendo isso. Um punhado de vagas está disponível e estamos convidando os que ficaram no quase. Não é um lançamento. É uma disputa. Que vença o mais rápido (ou o menos liso).
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};