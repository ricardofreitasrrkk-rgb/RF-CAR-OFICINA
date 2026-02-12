
import React from 'react';
import { 
  Users, 
  Activity, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  ShieldCheck,
  Globe,
  ArrowUpRight
} from 'lucide-react';

const AdminView: React.FC = () => {
  return (
    <div className="space-y-10 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Executive <span className="gold-text">Control</span></h1>
          <p className="text-slate-500 font-medium">Monitorização em tempo real das métricas vitais da RF CAR OFICINA.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border-blue-500/20">
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
             <span className="text-[10px] font-black text-blue-500 uppercase">Live Analytics</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Receita Total 30d', value: '4.8M Kz', trend: '+12.5%', icon: DollarSign, color: 'text-green-500' },
          { label: 'Novos Utilizadores', value: '142', trend: '+45%', icon: Users, color: 'text-blue-500' },
          { label: 'Taxa de Retenção', value: '88.4%', trend: '+2%', icon: ShieldCheck, color: 'text-cyan-500' },
          { label: 'Diagnósticos Ativos', value: '28', trend: 'Live', icon: Activity, color: 'text-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl border-white/5">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="glass p-8 rounded-[3rem] border-white/10">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xl font-bold flex items-center gap-3"><BarChart3 className="text-blue-500" /> Fluxo de Receita</h3>
            </div>
            <div className="h-64 flex items-end gap-2 px-4">
               {[35, 60, 45, 80, 55, 95, 75, 85, 60, 90, 40, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }} />
               ))}
            </div>
            <div className="flex justify-between text-[8px] font-black text-slate-700 mt-4 px-2">
               <span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span><span>JUL</span><span>AGO</span><span>SET</span><span>OUT</span><span>NOV</span><span>DEZ</span>
            </div>
         </div>

         <div className="glass p-8 rounded-[3rem] border-white/10">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Globe className="text-orange-500" /> Mercado Regional (SADC)</h3>
            <div className="space-y-6">
               {[
                 { region: 'Angola (Luanda Flagship)', share: '75%', color: 'bg-blue-600' },
                 { region: 'Namíbia (Windhoek Partner)', share: '15%', color: 'bg-orange-500' },
                 { region: 'Zâmbia (Lusaka Target)', share: '10%', color: 'bg-yellow-500' }
               ].map((market, i) => (
                  <div key={i}>
                     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                        <span className="text-slate-400">{market.region}</span>
                        <span className="text-white">{market.share}</span>
                     </div>
                     <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className={`h-full ${market.color} rounded-full`} style={{ width: market.share }} />
                     </div>
                  </div>
               ))}

               <div className="mt-8 p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <PieChart className="text-blue-400" />
                     <div>
                        <p className="font-bold text-sm">Escalabilidade SaaS</p>
                        <p className="text-[10px] text-slate-500 italic">Previsão de 10.000 users ativos até Q4 2025.</p>
                     </div>
                  </div>
                  {/* Fix: Added missing ArrowUpRight icon from lucide-react */}
                  <ArrowUpRight className="text-blue-400" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminView;
