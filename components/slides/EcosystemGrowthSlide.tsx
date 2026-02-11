
import React from 'react';
import { Rocket, Network, Handshake, Layers, TrendingUp, Users, ArrowUpRight, DollarSign } from 'lucide-react';

const EcosystemGrowthSlide: React.FC = () => {
  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase mb-4">Motor de Crescimento</h2>
          <h3 className="text-5xl md:text-6xl font-black">Funções de <span className="gold-text">Escala Digital</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: Programa de Indicações Pago */}
          <div className="glass p-10 rounded-[3rem] border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Rocket className="w-48 h-48 text-blue-500 -rotate-12" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-3xl font-black">Indicações <span className="text-blue-400">PRO</span></h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Viralidade Monetizada</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Transformamos clientes em <span className="text-white font-bold">promotores licenciados</span>. Ao pagar uma taxa de ativação, o utilizador desbloqueia ganhos superiores.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-[10px] font-black uppercase text-slate-500">Bónus Referral</span>
                  </div>
                  <p className="text-2xl font-black">+15%</p>
                </div>
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-black uppercase text-slate-500">Fee Ativação</span>
                  </div>
                  <p className="text-2xl font-black">2.500 Kz</p>
                </div>
              </div>
              
              <ul className="space-y-3 pt-4">
                {["Criação de rede de afiliados multi-nível", "Cashback direto em carteira digital", "Relatórios de performance in-app"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card: Marketplace de Serviços */}
          <div className="glass p-10 rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-600/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-48 h-48 text-orange-500" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-600/20 rounded-2xl border border-orange-500/30">
                <Handshake className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h4 className="text-3xl font-black">Marketplace <span className="text-orange-400">Hub</span></h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Plataforma B2B2C</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Centralizamos o ecossistema automóvel. A RF CAR torna-se o <span className="text-white font-bold">ponto de venda</span> para parceiros estratégicos.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between bg-slate-900/80 p-5 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-orange-500 font-black">S</div>
                      <div>
                        <p className="font-bold text-sm">Seguros & Bancos</p>
                        <p className="text-[10px] text-slate-500">Venda de apólices e financiamento auto</p>
                      </div>
                   </div>
                   <ArrowUpRight className="text-slate-600" />
                </div>
                <div className="flex items-center justify-between bg-slate-900/80 p-5 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 font-black">P</div>
                      <div>
                        <p className="font-bold text-sm">Peças & Acessórios</p>
                        <p className="text-[10px] text-slate-500">Lojas integradas com stock em tempo real</p>
                      </div>
                   </div>
                   <ArrowUpRight className="text-slate-600" />
                </div>
              </div>

              <div className="mt-4 p-4 bg-orange-600/10 rounded-2xl border border-orange-500/20 text-center">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-[0.2em]">Modelo: Comissão por Lead & Venda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info for the slide */}
        <div className="mt-12 flex justify-center gap-20">
           <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Custo de Aquisição (CAC)</p>
              <p className="text-2xl font-black text-white">-35% <span className="text-sm font-medium text-slate-500">(via Indicações)</span></p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Receita Não-Operacional</p>
              <p className="text-2xl font-black gold-text">+22% Est. de Margem</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemGrowthSlide;
