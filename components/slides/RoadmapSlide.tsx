
import React from 'react';

const RoadmapSlide: React.FC = () => {
  const steps = [
    { year: 'Q1 2025', title: 'Fundação', desc: 'Abertura da oficina flagship em Luanda e Lançamento da v1 do App.' },
    { year: 'Q3 2025', title: 'Expansão IA', desc: 'Integração completa de modelos de diagnóstico em tempo real e sorteios nacionais.' },
    { year: 'Q1 2026', title: 'Rede RF', desc: 'Licenciamento do software para outras oficinas parceiras em Angola.' },
    { year: 'Q4 2026', title: 'Escala Regional', desc: 'Expansão para Namíbia e RDC via modelo de franquia digital.' }
  ];

  return (
    <div className="h-full bg-slate-900 flex items-center justify-center px-10">
      <div className="max-w-6xl w-full">
        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-center">Roadmap</h2>
        <h3 className="text-5xl font-black text-center mb-20">O Caminho para a <span className="text-white">Liderança</span>.</h3>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center lg:items-start">
                 <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center font-bold text-white mb-6 border-4 border-slate-900 shadow-xl shadow-red-500/20">
                    {i+1}
                 </div>
                 <p className="text-yellow-400 font-black text-lg mb-2">{s.year}</p>
                 <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed text-center lg:text-left">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
