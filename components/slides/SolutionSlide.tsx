
import React from 'react';
import { ShieldCheck, Cpu, Smartphone, Zap, Key, Radio, Thermometer } from 'lucide-react';

const SolutionSlide: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-900 px-10 relative overflow-hidden">
      <div className="absolute -right-20 top-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute -left-20 bottom-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Portfólio de Especialista</h2>
          <h3 className="text-5xl font-black tracking-tight mb-8">Soluções que Outros <br/><span className="text-white">Não Resolvem</span>.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start p-4 glass rounded-2xl hover:bg-white/5 transition border-l-4 border-blue-500">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Key className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Chaves Codificadas</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Programação de chaves com chip e comandos remotos.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start p-4 glass rounded-2xl hover:bg-white/5 transition border-l-4 border-orange-500">
              <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Placas Eletrónicas</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Reparação e programação de módulos ECU e BSI.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 glass rounded-2xl hover:bg-white/5 transition border-l-4 border-cyan-500">
              <div className="w-10 h-10 bg-cyan-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Thermometer className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Frio Auto</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Manutenção completa de sistemas de ar condicionado.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 glass rounded-2xl hover:bg-white/5 transition border-l-4 border-yellow-500">
              <div className="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Diagnóstico IA</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Localização precisa de falhas via software proprietário.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-600/10 border border-red-500/30 rounded-3xl flex items-center justify-between">
            <div>
               <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Campanha de Viralização</p>
               <h4 className="text-xl font-black">Indique 2 Clientes</h4>
               <p className="text-sm text-slate-300">Ganhe <span className="text-white font-bold">20.000 Kz em Bónus</span> na hora!</p>
            </div>
            <div className="bg-red-600 text-white p-4 rounded-2xl font-black text-2xl shadow-lg shadow-red-500/30">
               +20k
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full opacity-10 group-hover:opacity-20 blur-2xl transition duration-1000"></div>
          <div className="aspect-square glass rounded-full flex flex-col items-center justify-center p-12 border-2 border-slate-700 relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]" style={{ animation: 'shimmer 3s infinite linear' }} />
            <div className="text-center">
              <Zap className="w-24 h-24 text-blue-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <div className="text-5xl font-black mb-2 gold-text">RF CAR</div>
              <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Qualidade Garantida</p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 glass px-6 py-4 rounded-2xl shadow-xl border-blue-500/30">
             <span className="text-blue-400 font-bold">★</span> Preços Acessíveis
          </div>
          <div className="absolute -bottom-4 -left-4 glass px-6 py-4 rounded-2xl shadow-xl border-orange-500/30">
             <span className="text-orange-400 font-bold">✓</span> Experiência de +10 Anos
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
