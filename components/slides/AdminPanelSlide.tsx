
import React from 'react';
import { Layout, Users, Activity, TrendingUp, ShoppingCart, Crown, GraduationCap } from 'lucide-react';

const AdminPanelSlide: React.FC = () => {
  return (
    <div className="h-full bg-slate-950 flex items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Enterprise Intelligence</h2>
          <h3 className="text-5xl font-black italic metallic-rf">RF CONTROL CENTER</h3>
        </div>

        <div className="relative glass p-4 rounded-3xl border border-white/10 shadow-2xl max-w-5xl mx-auto overflow-hidden">
          {/* Mock Browser Header */}
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="h-6 bg-slate-800 rounded px-3 flex items-center gap-2 w-1/2">
               <span className="text-[10px] text-slate-500 truncate italic">https://admin.rfcar.ao/revenue-analytics</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span className="text-[10px] font-black text-blue-500">LIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 h-[420px]">
             {/* Sidebar */}
             <div className="col-span-2 border-r border-white/5 pr-4 space-y-2">
                <div className="h-10 bg-blue-600/20 border-l-4 border-blue-500 rounded-r-lg flex items-center px-3 gap-3">
                    <Layout className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] font-black uppercase">Home</span>
                </div>
                {[
                  { icon: Users, label: 'Clientes' },
                  { icon: Crown, label: 'VIP/Premium' },
                  { icon: ShoppingCart, label: 'Vendas' },
                  { icon: GraduationCap, label: 'Academia' },
                  { icon: Activity, label: 'Diagnósticos' }
                ].map((item, i) => (
                    <div key={i} className="h-10 hover:bg-white/5 rounded-lg flex items-center px-3 gap-3 cursor-pointer transition group">
                        <item.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
                        <span className="text-[10px] text-slate-500 font-bold group-hover:text-white transition">
                           {item.label}
                        </span>
                    </div>
                ))}
             </div>
             
             {/* Main Content */}
             <div className="col-span-10 p-4 space-y-6 overflow-y-auto">
                <div className="grid grid-cols-4 gap-3">
                   {[
                     { l: 'Assinaturas', v: '412', c: 'text-blue-400' },
                     { l: 'Vendas Loja', v: '2.8M Kz', c: 'text-green-500' },
                     { l: 'Taxas Express', v: '850k Kz', c: 'text-yellow-500' },
                     { l: 'Cursos', v: '1.2M Kz', c: 'text-purple-500' }
                   ].map((st, i) => (
                      <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-white/10 transition">
                         <p className="text-[8px] text-slate-500 font-black uppercase mb-1">{st.l}</p>
                         <p className={`text-lg font-black ${st.c}`}>{st.v}</p>
                      </div>
                   ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 h-48">
                    <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4 relative flex items-end gap-1.5">
                       {[40, 65, 30, 80, 55, 95, 75, 85, 60, 90].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                       ))}
                       <div className="absolute top-3 left-4 text-[9px] font-black uppercase text-slate-500">Revenue Flow (30d)</div>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-4">
                       <p className="text-[9px] font-black uppercase text-slate-500 mb-4">Top Peças Vendidas</p>
                       <div className="space-y-3">
                          {[
                            { n: 'Chips de Transponder', p: '85%' },
                            { n: 'Baterias AGM', p: '62%' },
                            { n: 'Kits OBD-II Mini', p: '45%' }
                          ].map((it, i) => (
                            <div key={i}>
                               <div className="flex justify-between text-[10px] font-bold mb-1">
                                  <span>{it.n}</span>
                                  <span>{it.p}</span>
                               </div>
                               <div className="h-1 bg-slate-800 rounded-full">
                                  <div className="h-full bg-blue-500 rounded-full" style={{ width: it.p }} />
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                </div>

                <div className="bg-blue-600/5 border border-blue-500/20 p-4 rounded-xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <p className="text-[10px] font-bold">12 Diagnósticos IA ativos agora na rede Luanda</p>
                   </div>
                   <button className="text-[9px] font-black text-blue-400 uppercase tracking-widest hover:underline">Ver Mapa Real-time</button>
                </div>
             </div>
          </div>
        </div>

        <div className="flex justify-center gap-12 mt-12">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10"><Users className="w-5 h-5 text-slate-400" /></div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fidelização <br/>Automática</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10"><TrendingUp className="w-5 h-5 text-slate-400" /></div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Escalabilidade <br/>Digital</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelSlide;
