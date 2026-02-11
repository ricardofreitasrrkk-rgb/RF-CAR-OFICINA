
import React from 'react';
import { ShieldAlert, ZapOff, Ghost, Clock8 } from 'lucide-react';

const ProblemSlide: React.FC = () => {
  const problems = [
    {
      icon: <ZapOff className="w-8 h-8 text-orange-500" />,
      title: "Falhas Intermitentes",
      desc: "Problemas elétricos que 'vêm e vão', deixando o cliente frustrado e sem diagnóstico conclusivo."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-blue-500" />,
      title: "Chaves Perdidas/Codificadas",
      desc: "Dependência de concessionárias com preços exorbitantes e prazos de espera de semanas."
    },
    {
      icon: <Ghost className="w-8 h-8 text-red-500" />,
      title: "Peças Mal Diagnosticadas",
      desc: "Troca desnecessária de componentes caros por falta de ferramentas de leitura profunda."
    },
    {
      icon: <Clock8 className="w-8 h-8 text-slate-500" />,
      title: "Tempo de Inatividade",
      desc: "Veículos parados por dias devido à complexidade da eletrónica moderna nos carros atuais."
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-10 py-20 bg-slate-950 bg-circuit">
      <div className="max-w-6xl w-full">
        <div className="mb-16 border-l-8 border-red-600 pl-10">
          <h2 className="text-slate-500 font-bold tracking-[0.3em] uppercase mb-4">A Realidade em Luanda</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-none">A Eletrónica é o <br/><span className="text-red-600">Ponto Cego</span> das Oficinas Comuns.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((p, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all group">
              <div className="mb-6 p-4 bg-slate-900 w-fit rounded-2xl group-hover:scale-110 transition">
                {p.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{p.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
