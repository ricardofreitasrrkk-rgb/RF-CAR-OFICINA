
import React from 'react';
import { TrendingUp, PieChart, Wallet, ShieldCheck, ArrowUpRight } from 'lucide-react';

const FinancialsSlide: React.FC = () => {
  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-4">Projecções & ROI</h2>
          <h3 className="text-6xl font-black mb-8">Escalabilidade <br/><span className="gold-text">Exponencial</span></h3>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase">Receita Bruta Anual (Est. Ano 3)</p>
                    <p className="text-2xl font-black">$1.8M USD</p>
                 </div>
              </div>
              <ArrowUpRight className="text-slate-700 group-hover:text-green-500 transition" />
            </div>

            <div className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500">
                    <Wallet className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase">Break-even Estimado</p>
                    <p className="text-2xl font-black">14 Meses</p>
                 </div>
              </div>
              <ArrowUpRight className="text-slate-700 group-hover:text-blue-500 transition" />
            </div>
          </div>

          <div className="mt-12 flex gap-8">
             <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-500 w-5 h-5" />
                <span className="text-xs font-bold text-slate-400">Modelo de Negócio Validado</span>
             </div>
             <div className="flex items-center gap-3">
                <PieChart className="text-blue-500 w-5 h-5" />
                <span className="text-xs font-bold text-slate-400">Auditoria Trimestral</span>
             </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[3rem] border-white/10 relative overflow-hidden">
          <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
             Uso do Investimento <span className="text-blue-500 text-sm font-black italic">($350k)</span>
          </h4>
          
          <div className="space-y-6">
            {[
              { label: 'Expansão de Infraestrutura (Oficinas)', val: '45%', color: 'bg-blue-600' },
              { label: 'P&D (IA & Software)', val: '25%', color: 'bg-orange-500' },
              { label: 'Marketing & Viralização (App)', val: '20%', color: 'bg-yellow-500' },
              { label: 'Operações & Capital de Giro', val: '10%', color: 'bg-slate-700' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                  <span className="text-slate-400">{item.label}</span>
                  <span className="text-white">{item.val}</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                    style={{ width: item.val }} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 text-center">Projecção de Usuários na App</p>
             <div className="flex items-end justify-between h-20 px-4">
                {[10, 25, 45, 80, 100].map((h, i) => (
                  <div key={i} className="w-10 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all" style={{ height: `${h}%` }} />
                ))}
             </div>
             <div className="flex justify-between text-[8px] font-black text-slate-700 mt-2 px-2">
                <span>ANO 1</span><span>ANO 2</span><span>ANO 3</span><span>ANO 4</span><span>ANO 5</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialsSlide;
