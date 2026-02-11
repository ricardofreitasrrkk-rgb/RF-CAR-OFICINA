
import React from 'react';
import { 
  Zap, Crown, ShoppingCart, BrainCircuit, 
  Handshake, Trophy, GraduationCap, CheckCircle2,
  Users, Store
} from 'lucide-react';

const RevenueStreamsSlide: React.FC = () => {
  const streams = [
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Serviços Premium",
      points: ["Agendamento pago prioritário", "Pacotes Preventivos", "Taxa Express (Keys/Diag)"],
      color: "border-yellow-500/30"
    },
    {
      icon: <Crown className="text-blue-400" />,
      title: "Assinatura VIP",
      points: ["Descontos Exclusivos", "Chat IA ilimitado", "Gestão de Manutenção"],
      color: "border-blue-500/30"
    },
    {
      icon: <Store className="text-emerald-400" />,
      title: "Marketplace de Serviços",
      points: ["Intermediação de serviços", "Venda de peças parceiras", "Agregador de Soluções"],
      color: "border-emerald-500/30"
    },
    {
      icon: <BrainCircuit className="text-orange-400" />,
      title: "IA & Diag. Remoto",
      points: ["Consultoria IA Paga", "Relatórios PDF Detalhados", "Orçamentos Remotos"],
      color: "border-orange-500/30"
    },
    {
      icon: <Users className="text-pink-400" />,
      title: "Indicações Pago",
      points: ["Upgrade de Bónus p/ Amigos", "Referral Booster Packs", "Comissões de Rede"],
      color: "border-pink-500/30"
    },
    {
      icon: <Trophy className="text-red-400" />,
      title: "Gamificação",
      points: ["Sorteios 'Pay-to-Win'", "Jackpots Mensais", "Rankings de Fidelidade"],
      color: "border-red-500/30"
    },
    {
      icon: <GraduationCap className="text-cyan-400" />,
      title: "Academia RF",
      points: ["Cursos Elétrica/Programação", "Vídeo-aulas Passo-a-passo", "Certificados Digitais"],
      color: "border-cyan-500/30"
    }
  ];

  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 font-bold tracking-[0.5em] uppercase mb-4">Arquitetura de Receita</h2>
          <h3 className="text-5xl md:text-6xl font-black">Monetização <span className="gold-text">Energizada 360°</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {streams.map((s, i) => (
            <div key={i} className={`glass p-5 rounded-[2rem] border ${s.color} hover:scale-[1.02] transition-all duration-300 group ${i === 6 ? 'lg:col-span-1' : ''}`}>
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-base leading-tight">{s.title}</h4>
               </div>
               <ul className="space-y-2">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" />
                       <span className="text-[11px] text-slate-300 font-medium leading-tight">{p}</span>
                    </li>
                  ))}
               </ul>
            </div>
          ))}
          
          <div className="glass p-5 rounded-[2rem] border-blue-600/50 bg-blue-600/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-blue-600/20 transition">
             <div className="text-2xl font-black text-white mb-1">+ Fluxo</div>
             <p className="text-[9px] font-black uppercase text-blue-400 tracking-widest">Sinergia de Ecossistema</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
           <div className="glass px-8 py-4 rounded-3xl border-white/5 flex items-center gap-6">
              <div className="text-center">
                 <p className="text-[9px] font-black text-slate-500 uppercase">LTV Estimado</p>
                 <p className="text-xl font-black text-white">285.000 Kz</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                 <p className="text-[9px] font-black text-slate-500 uppercase">Churn Target</p>
                 <p className="text-xl font-black text-green-500">&lt; 5%</p>
              </div>
           </div>
           
           <div className="glass px-8 py-4 rounded-3xl border-white/5 flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-transparent">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
              <p className="text-[10px] font-bold tracking-widest uppercase">Pronto para Escalar em Angola & SADC</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStreamsSlide;
