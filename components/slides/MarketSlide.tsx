
import React from 'react';
import { Target, Globe, TrendingUp, Users } from 'lucide-react';

const MarketSlide: React.FC = () => {
  return (
    <div className="h-full bg-slate-950 flex items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-4">Oportunidade</h2>
            <h3 className="text-6xl font-black mb-8 leading-tight">Um Ecossistema <br/>Pronto para <span className="gold-text">Escalar.</span></h3>
            
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Combinamos a robustez de uma oficina física em Luanda com a escalabilidade de um produto digital SaaS que pode servir toda a África Austral.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl border-blue-500/20">
                <Users className="text-blue-500 mb-4" />
                <p className="text-3xl font-black">2.5M</p>
                <p className="text-[10px] font-black text-slate-500 uppercase">Potenciais Users (SADC)</p>
              </div>
              <div className="glass p-6 rounded-3xl border-orange-500/20">
                <TrendingUp className="text-orange-500 mb-4" />
                <p className="text-3xl font-black">35%</p>
                <p className="text-[10px] font-black text-slate-500 uppercase">Margem de Hardware</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
             <div className="relative glass p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                <h4 className="font-bold text-xl mb-8 flex items-center gap-3">
                  <Globe className="text-blue-400" /> Domínio Regional
                </h4>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                       <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Angola (Primary)</span>
                       <span className="text-xs font-bold text-blue-400">75% Growth</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-3/4 animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex justify-between mb-2">
                       <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Namíbia & Zâmbia (Scale)</span>
                       <span className="text-xs font-bold text-orange-400">Target Q4 2025</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-orange-500 w-1/3" />
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 mt-10">
                    <p className="text-xs font-medium text-slate-300 italic">
                      "A digitalização do diagnóstico automóvel em mercados emergentes não é um luxo, é a solução para a falta de mão de obra especializada em larga escala."
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSlide;
