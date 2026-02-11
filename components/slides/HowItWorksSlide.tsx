
import React from 'react';
import { Bluetooth, Smartphone, CheckCircle, Zap } from 'lucide-react';

const HowItWorksSlide: React.FC = () => {
  const steps = [
    {
      icon: <Bluetooth className="w-8 h-8 text-blue-400" />,
      title: "Conecta",
      desc: "O adaptador RF OBD-II comunica via Bluetooth com o cérebro do carro."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: "Diagnostica",
      desc: "A nossa App lê dados em tempo real e identifica falhas ocultas."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Resolve",
      desc: "Codifica funções, limpa erros e agenda a manutenção num clique."
    }
  ];

  return (
    <div className="h-full bg-slate-950 flex items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-4">A Experiência</h2>
          <h3 className="text-5xl md:text-6xl font-black">Conectividade <span className="text-white opacity-40">Sem Barreiras.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent hidden md:block" />
          
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-20 h-20 bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-110">
                {s.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black bg-slate-800 text-slate-400 w-6 h-6 rounded-full flex items-center justify-center">{i+1}</span>
                <h4 className="text-2xl font-bold">{s.title}</h4>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm px-6">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <div className="glass px-8 py-4 rounded-full border-blue-500/20 flex items-center gap-4 animate-bounce">
            <CheckCircle className="text-blue-400 w-5 h-5" />
            <span className="text-sm font-bold tracking-widest text-blue-100 uppercase">Compatível com +120 Marcas Automóveis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSlide;
