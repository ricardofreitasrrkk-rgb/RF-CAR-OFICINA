
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Rocket, 
  ArrowUpRight, 
  Link as LinkIcon, 
  Copy,
  Wallet
} from 'lucide-react';
import { useApp } from '../AppContext';

const NetworkView: React.FC = () => {
  const { addNotification, user } = useApp();
  const referralCode = "RFCAR-ROBERTO-2025";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    addNotification('Código copiado para a área de transferência!', 'success');
  };

  const handleWithdraw = () => {
    if (user.balance > 0) {
      addNotification(`Solicitação de saque de ${user.balance.toLocaleString()} Kz enviada!`, 'success');
    } else {
      addNotification('Saldo insuficiente para saque.', 'error');
    }
  };

  return (
    <div className="space-y-10 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Indicações <span className="gold-text">PRO</span></h1>
          <p className="text-slate-500 font-medium">Expanda o ecossistema RF CAR e monetize a sua influência.</p>
        </div>
        <div className="glass px-6 py-4 rounded-3xl border-white/5 flex items-center gap-6">
           <div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Ganhos Totais</p>
             <p className="text-2xl font-black text-green-500">{user.balance.toLocaleString()} Kz</p>
           </div>
           <div className="w-px h-10 bg-white/10" />
           <button 
            onClick={handleWithdraw}
            className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform"
           >
            <Wallet className="w-6 h-6 text-white" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="glass p-8 rounded-[3rem] border-white/10 bg-gradient-to-br from-blue-600/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Rocket className="w-48 h-48 text-blue-500 -rotate-12" />
              </div>
              
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                 <LinkIcon className="text-blue-500" /> O Seu Código de Referral
              </h3>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                 <div 
                  onClick={handleCopy}
                  className="flex-1 bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between group cursor-pointer hover:border-blue-500/30 transition-all"
                 >
                    <span className="font-mono text-2xl font-bold tracking-widest text-blue-400 uppercase">{referralCode}</span>
                    <Copy className="w-5 h-5 text-slate-500 group-hover:text-white transition" />
                 </div>
                 <button 
                  onClick={() => addNotification('Abrindo opções de partilha...', 'info')}
                  className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-black uppercase text-xs hover:scale-105 transition-transform shadow-xl"
                 >
                  Convidar Amigos
                 </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                 {[
                   { l: 'Indicações Diretas', v: '24' },
                   { l: 'Bónus Acumulado', v: '312.000 Kz' },
                   { l: 'Nível de Influência', v: 'PLATINUM' }
                 ].map((it, i) => (
                    <div key={i} className="text-center md:text-left">
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{it.l}</p>
                       <p className="text-xl font-black text-white">{it.v}</p>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass p-8 rounded-[3rem] border-white/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><TrendingUp className="text-orange-500" /> Hierarquia de Rede</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Ana Luísa Sampaio', date: 'Hoje, 14:20', earn: '+12.500 Kz', level: 'Nível 1' },
                   { name: 'Pedro Miguel Santos', date: 'Ontem, 09:15', earn: '+8.000 Kz', level: 'Nível 2' },
                   { name: 'Oficina Central Kilamba', date: '21 Mar, 18:45', earn: '+45.000 Kz', level: 'Lead B2B' }
                 ].map((ref, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-950/30 p-5 rounded-[1.5rem] border border-white/5 hover:border-white/10 transition group">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center font-bold text-slate-500 group-hover:text-blue-400 transition">
                             {ref.name.charAt(0)}
                          </div>
                          <div>
                             <p className="font-bold text-sm">{ref.name}</p>
                             <p className="text-[10px] text-slate-500 uppercase font-black">{ref.date} • {ref.level}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-lg font-black text-green-500">{ref.earn}</p>
                          <ArrowUpRight className="w-4 h-4 text-slate-700 ml-auto" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="glass p-8 rounded-[3rem] border-white/10">
              <h4 className="text-lg font-bold mb-6">Regras do Bónus</h4>
              <div className="space-y-6">
                 {[
                   { t: 'Ativação Direta', d: 'Ganhe 15% sobre a 1ª subscrição VIP do seu indicado.' },
                   { t: 'Rede Multi-nível', d: 'Ganhe 5% sobre os ganhos da sua rede direta (Nível 2).' },
                   { t: 'Bónus de Carreira', d: 'Atinga 50 indicações e desbloqueie o Fee Vitalício.' }
                 ].map((rule, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                       <div>
                          <h5 className="font-bold text-sm">{rule.t}</h5>
                          <p className="text-xs text-slate-500 leading-relaxed">{rule.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-orange-600/10 border border-orange-500/20 p-8 rounded-[3rem] text-center">
              <DollarSign className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-black mb-2">Levantamento Rápido</h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">Transfira os seus bónus para a sua conta bancária via Multicaixa Express em menos de 2h.</p>
              <button 
                onClick={handleWithdraw}
                className="w-full py-4 bg-orange-600 text-white font-black uppercase text-xs rounded-2xl shadow-lg shadow-orange-600/20 hover:scale-[1.02] transition-transform"
              >
                Solicitar Saque
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkView;
