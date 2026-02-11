
import React from 'react';
import { 
  DollarSign, 
  Percent, 
  BarChart3, 
  UserPlus, 
  Crown, 
  ShoppingBag, 
  BrainCircuit, 
  GraduationCap,
  Zap,
  TrendingUp
} from 'lucide-react';

const BusinessModelSlide: React.FC = () => {
  const models = [
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Serviços Premium",
      desc: "Agendamento prioritário, pacotes preventivos e taxa extra para serviços 'Express'."
    },
    {
      icon: <Crown className="text-blue-500" />,
      title: "Sistema de Assinatura",
      desc: "Plano VIP com descontos exclusivos, consultas IA ilimitadas e benefícios em sorteios."
    },
    {
      icon: <ShoppingBag className="text-green-500" />,
      title: "Marketplace & Peças",
      desc: "Venda direta de sensores, chips e kits de diagnóstico DIY via app."
    },
    {
      icon: <BrainCircuit className="text-orange-500" />,
      title: "IA & Diagnóstico Remoto",
      desc: "Consultoria paga via IA e venda de relatórios técnicos detalhados em PDF."
    },
    {
      icon: <UserPlus className="text-red-500" />,
      title: "Parcerias & Ads",
      desc: "Publicidade segmentada para seguradoras e marcas de componentes automotivos."
    },
    {
      icon: <TrendingUp className="text-cyan-500" />,
      title: "Gamificação Monetizada",
      desc: "Entradas pagas em sorteios de alto valor e upgrades em bónus de indicação."
    },
    {
      icon: <GraduationCap className="text-purple-500" />,
      title: "Cursos & Tutoriais",
      desc: "Venda de módulos de formação em programação de chaves e elétrica para profissionais."
    }
  ];

  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="max-w-7xl w-full relative z-10">
        <div className="mb-12 border-l-8 border-blue-600 pl-8">
          <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-2">Estratégia de Receita</h2>
          <h3 className="text-5xl font-black">Múltiplas Fontes de <span className="gold-text">Monetização</span>.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((m, i) => (
            <div key={i} className={`glass p-6 rounded-3xl hover:bg-white/5 transition border border-white/5 flex flex-col h-full ${i === 6 ? 'lg:col-span-2' : ''}`}>
               <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-xl border border-white/5">
                  {m.icon}
               </div>
               <h4 className="text-lg font-bold mb-2 text-white">{m.title}</h4>
               <p className="text-xs text-slate-500 leading-relaxed flex-1">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Resumo Estratégico */}
        <div className="mt-10 p-8 glass rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex gap-4 items-center">
              <div className="p-4 bg-blue-600/20 rounded-2xl">
                 <BarChart3 className="text-blue-500 w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Potencial de Escala</p>
                <h4 className="text-2xl font-black">Ecossistema Diversificado</h4>
              </div>
           </div>
           
           <div className="flex gap-10">
              <div className="text-center">
                 <p className="text-3xl font-black text-white">40%</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase">Recorrência (SaaS)</p>
              </div>
              <div className="text-center">
                 <p className="text-3xl font-black text-yellow-500">2.5x</p>
                 <p className="text-[10px] text-slate-500 font-bold uppercase">LTV Médio Estimado</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide;
