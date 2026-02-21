
import React from 'react';
import { 
  Users, Activity, TrendingUp, DollarSign, PieChart, 
  BarChart3, ShieldCheck, Globe, ArrowUpRight, Zap
} from 'lucide-react';
import { useApp } from '../AppContext';

const AdminView: React.FC = () => {
  const { addNotification } = useApp();

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Executive <span className="gold-text">Insight</span></h1>
          <p className="text-slate-500 font-medium">Controlo estratégico das operações em Luanda e Expansão SADC.</p>
        </div>
        <div className="flex gap-4">
          <div 
            onClick={() => addNotification('Status operacional: Nominal.', 'success')}
            className="flex items-center gap-2 glass px-6 py-3 rounded-full border-blue-500/20 cursor-pointer"
          >
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
             <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Global Ops Online</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Revenue (MTD)', value: '8.4M Kz', trend: '+18.2%', icon: DollarSign, color: 'text-green-500' },
          { label: 'SaaS Active Users', value: '1.240', trend: '+45%', icon: Users, color: 'text-blue-500' },
          { label: 'DTC Efficiency', value: '94.1%', trend: '+4%', icon: Activity, color: 'text-cyan-500' },
          { label: 'CAC / LTV', value: '1:4.2', trend: 'Optimal', icon: Zap, color: 'text-yellow-500' },
        ].map((stat, i) => (
          <div 
            key={i} 
            onClick={() => addNotification(`Acedendo a métricas detalhadas de ${stat.label}...`, 'info')}
            className="glass p-6 rounded-3xl border-white/5 relative overflow-hidden group hover:border-white/10 transition-all cursor-pointer"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-16 h-16" />
             </div>
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 bg-slate-900 rounded-2xl ${stat.color}`}>
                   <stat.icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-full bg-white/5 ${stat.color}`}>{stat.trend}</span>
             </div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
             <p className="text-3xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 glass p-8 rounded-[3rem] border-white/10 bg-gradient-to-br from-blue-600/5 to-transparent">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xl font-bold flex items-center gap-3"><BarChart3 className="text-blue-500" /> Fluxo de Crescimento Mensal</h3>
               <div className="flex gap-2">
                  <div className="px-3 py-1 bg-slate-900 rounded-lg text-[10px] font-bold text-slate-500">2024</div>
                  <div className="px-3 py-1 bg-blue-600 rounded-lg text-[10px] font-bold text-white shadow-lg shadow-blue-600/20">2025</div>
               </div>
            </div>
            <div className="h-72 flex items-end gap-2 px-4 relative">
               {[45, 65, 55, 85, 70, 95, 80, 100, 75, 90, 60, 85].map((h, i) => (
                  <div key={i} className="flex-1 group relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">{(h * 10).toLocaleString()} Kz</div>
                    <div className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }} />
                  </div>
               ))}
            </div>
            <div className="flex justify-between text-[8px] font-black text-slate-700 mt-6 px-2 uppercase tracking-widest">
               <span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span><span>JUL</span><span>AGO</span><span>SET</span><span>OUT</span><span>NOV</span><span>DEZ</span>
            </div>
         </div>

         <div className="glass p-8 rounded-[3rem] border-white/10">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Globe className="text-orange-500" /> Market Penetration SADC</h3>
            <div className="space-y-8">
               {[
                 { region: 'Angola (Market Leader)', share: '82%', color: 'bg-blue-600', leads: '+450' },
                 { region: 'Namíbia (Partner Network)', share: '12%', color: 'bg-orange-500', leads: '+85' },
                 { region: 'Zâmbia (Initial Entry)', share: '6%', color: 'bg-yellow-500', leads: '+22' }
               ].map((market, i) => (
                  <div key={i} className="group">
                     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                        <span className="text-slate-400">{market.region}</span>
                        <span className="text-white">{market.share}</span>
                     </div>
                     <div className="h-2 bg-slate-900 rounded-full overflow-hidden mb-2">
                        <div className={`h-full ${market.color} rounded-full group-hover:brightness-125 transition-all duration-700`} style={{ width: market.share }} />
                     </div>
                     <p className="text-[8px] text-slate-600 font-bold uppercase tracking-wider">{market.leads} leads qualificados em espera</p>
                  </div>
               ))}

               <div className="mt-12 p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400"><PieChart className="w-5 h-5" /></div>
                     <h4 className="font-bold text-sm">Escalabilidade SaaS</h4>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed mb-4">Meta Q4 2025: 15.000 subscrições ativas via rede de parceiros em Benguela e Huíla.</p>
                  <button 
                    onClick={() => addNotification('Descarregando tese de escalabilidade completa...', 'success')}
                    className="w-full py-3 glass border-blue-500/30 text-blue-400 text-[10px] font-black uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600/10 transition"
                  >
                    Ver Tese Completa <ArrowUpRight className="w-3 h-3" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminView;
