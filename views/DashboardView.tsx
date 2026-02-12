
import React from 'react';
import { 
  Zap, 
  Thermometer, 
  Activity, 
  Calendar, 
  ArrowUpRight, 
  ShieldCheck, 
  Trophy,
  Star
} from 'lucide-react';

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Painel do <span className="gold-text">Condutor</span></h1>
          <p className="text-slate-500 font-medium">Gestão centralizada da sua frota pessoal • Toyota Hilux V6 (LD-00-RF)</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Novo Agendamento
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Saúde Geral', value: '94%', color: 'text-green-500', icon: ShieldCheck },
          { label: 'Pontos VIP', value: '12.450', color: 'text-yellow-500', icon: Star },
          { label: 'Próxima Revisão', value: '1.200km', color: 'text-blue-500', icon: Calendar },
          { label: 'Alertas Ativos', value: '01', color: 'text-orange-500', icon: ShieldCheck },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-2xl group-hover:scale-110 transition">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[2.5rem] border-white/10 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold flex items-center gap-3"><Activity className="text-blue-500" /> Telemetria em Tempo Real</h3>
            <span className="text-xs font-black text-blue-500 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">LIVE FEED</span>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-[2rem] border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Pressão Óleo</p>
               <div className="text-4xl font-black mb-2">4.2 <span className="text-sm font-medium text-slate-600">bar</span></div>
               <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 w-3/4" />
               </div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-[2rem] border border-white/5">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Temp. Motor</p>
               <div className="text-4xl font-black mb-2">88 <span className="text-sm font-medium text-slate-600">°C</span></div>
               <Thermometer className="text-orange-500 mt-2" />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-[2rem] border border-white/5">
               <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Mistura Ar/Cumb</p>
               <div className="text-4xl font-black mb-2">14.7 <span className="text-sm font-medium text-slate-600">AFR</span></div>
               <Zap className="text-yellow-500 mt-2" />
            </div>
          </div>
        </div>

        <div className="glass rounded-[2.5rem] border-white/10 p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold flex items-center gap-3"><Trophy className="text-yellow-500" /> Jackpot Ativo</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-[2rem] text-center shadow-xl shadow-blue-600/30">
            <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">Grande Prémio Mensal</p>
            <p className="text-4xl font-black mb-6">500.000 Kz</p>
            <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black uppercase text-xs hover:scale-105 transition-transform">Participar Agora</button>
            <p className="mt-4 text-[10px] opacity-60">Sorteio em 12 dias • 350 participantes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
