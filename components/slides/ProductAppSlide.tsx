
import React, { useState } from 'react';
import { 
  Smartphone, Shield, Code, Settings, Bell, Zap, 
  ShoppingCart, GraduationCap, Crown, ChevronLeft, 
  Search, PlayCircle, Trophy, CreditCard 
} from 'lucide-react';

type AppView = 'home' | 'diag' | 'store' | 'academy' | 'luck';

const ProductAppSlide: React.FC = () => {
  const [view, setView] = useState<AppView>('home');

  const renderMobileContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="p-6 pt-12 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Crown className="w-4 h-4 text-yellow-500" />
                 </div>
                 <span className="text-xs font-black gold-text">MEMBRO VIP</span>
              </div>
              <Bell className="w-5 h-5 text-slate-500" />
            </div>
            
            <h4 className="text-xl font-bold mb-6">Olá, Roberto!</h4>

            <div className="grid grid-cols-2 gap-3 mb-6">
               <button onClick={() => setView('diag')} className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 text-center hover:bg-blue-600/10 transition group">
                  <Code className="w-6 h-6 mx-auto mb-2 text-blue-500 group-hover:scale-110 transition" />
                  <p className="text-[10px] font-bold">Diagnóstico</p>
               </button>
               <button onClick={() => setView('store')} className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 text-center hover:bg-orange-600/10 transition group">
                  <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-orange-500 group-hover:scale-110 transition" />
                  <p className="text-[10px] font-bold">Loja Peças</p>
               </button>
               <button onClick={() => setView('academy')} className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 text-center hover:bg-purple-600/10 transition group">
                  <GraduationCap className="w-6 h-6 mx-auto mb-2 text-purple-500 group-hover:scale-110 transition" />
                  <p className="text-[10px] font-bold">Academia</p>
               </button>
               <button onClick={() => setView('luck')} className="bg-slate-900/50 p-4 rounded-2xl border border-white/5 text-center hover:bg-green-600/10 transition group">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-green-500 group-hover:scale-110 transition" />
                  <p className="text-[10px] font-bold">Sorteios</p>
               </button>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white shadow-lg shadow-blue-600/20">
               <p className="text-[8px] font-bold uppercase opacity-80 mb-1">Agendamento Prioritário</p>
               <p className="text-xs font-bold">Oficina Samba: Disponível hoje</p>
            </div>
          </div>
        );
      case 'diag':
        return (
          <div className="p-6 pt-12 animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 mb-6 hover:text-white transition">
              <ChevronLeft className="w-4 h-4" /> <span className="text-xs font-bold">VOLTAR</span>
            </button>
            <h4 className="text-xl font-bold mb-4">Novo Scan</h4>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-blue-500 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-blue-500" />
              </div>
              <p className="text-center text-xs text-slate-400">Ligue o adaptador OBD-II para iniciar o diagnóstico remoto por IA.</p>
              <button className="w-full py-3 bg-blue-600 rounded-xl text-xs font-black uppercase">Iniciar Scan</button>
            </div>
          </div>
        );
      case 'store':
        return (
          <div className="p-6 pt-12 animate-in fade-in slide-in-from-right-4 duration-300 h-full">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 mb-6 hover:text-white transition">
              <ChevronLeft className="w-4 h-4" /> <span className="text-xs font-bold">VOLTAR</span>
            </button>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Loja RF</h4>
              <Search className="w-4 h-4 text-slate-500" />
            </div>
            <div className="space-y-3">
              {[
                { n: 'Chip Transponder ID48', p: '12.500 Kz', i: <Code className="w-4 h-4"/> },
                { n: 'Cabo Diagnóstico V2', p: '25.000 Kz', i: <Settings className="w-4 h-4"/> },
                { n: 'Comando VW G7', p: '45.000 Kz', i: <Smartphone className="w-4 h-4"/> }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg text-orange-500">{item.i}</div>
                    <div>
                      <p className="text-[10px] font-bold">{item.n}</p>
                      <p className="text-[9px] text-orange-500">{item.p}</p>
                    </div>
                  </div>
                  <ShoppingCart className="w-3 h-3 text-slate-500" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'academy':
        return (
          <div className="p-6 pt-12 animate-in fade-in slide-in-from-right-4 duration-300 h-full">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 mb-6 hover:text-white transition">
              <ChevronLeft className="w-4 h-4" /> <span className="text-xs font-bold">VOLTAR</span>
            </button>
            <h4 className="text-xl font-bold mb-4">Academia Tech</h4>
            <div className="aspect-video bg-slate-900 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
               <PlayCircle className="w-10 h-10 text-white relative z-10 opacity-80 group-hover:opacity-100" />
            </div>
            <p className="text-[10px] font-bold mb-1">Módulo 1: Eletrónica Básica</p>
            <p className="text-[8px] text-slate-500 mb-4">Como usar o multímetro em sensores Hall.</p>
            <button className="w-full py-2 bg-purple-600 rounded-lg text-[10px] font-bold">ASSISTIR AGORA</button>
          </div>
        );
      case 'luck':
        return (
          <div className="p-6 pt-12 animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 mb-6 hover:text-white transition">
              <ChevronLeft className="w-4 h-4" /> <span className="text-xs font-bold">VOLTAR</span>
            </button>
            <h4 className="text-xl font-bold mb-4">Sorteios VIP</h4>
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-2xl border border-green-500/30 text-center mb-4">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <p className="text-xs font-bold text-white">Grande Jackpot Mensal</p>
              <p className="text-2xl font-black text-green-500">500.000 Kz</p>
            </div>
            <p className="text-[10px] text-center text-slate-500 mb-6">Participe por apenas 1.000 Kz e ganhe prémios exclusivos em serviços RF.</p>
            <button className="w-full py-3 bg-green-600 rounded-xl text-[10px] font-black uppercase">COMPRAR BILHETE</button>
          </div>
        );
    }
  };

  return (
    <div className="h-full bg-slate-900 flex flex-col items-center justify-center px-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="order-2 lg:order-1 relative perspective-1000 flex justify-center">
          {/* Main Mobile Frame */}
          <div className="w-72 h-[600px] bg-black rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_0_100px_rgba(59,130,246,0.3)] relative overflow-hidden flex flex-col scale-105 transition-all hover:border-slate-700">
             {/* Notch */}
             <div className="h-6 w-32 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-30 flex items-center justify-center">
               <div className="w-12 h-1 bg-slate-900 rounded-full" />
             </div>
             
             {/* App Content Container */}
             <div className="flex-1 bg-slate-950 flex flex-col relative">
                {renderMobileContent()}

                {/* Navbar */}
                <div className="mt-auto h-16 bg-slate-900/90 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-4 relative z-40">
                   <button onClick={() => setView('home')} className={`p-2 transition-all ${view === 'home' ? 'text-blue-500 scale-110' : 'text-slate-500 hover:text-white'}`}>
                      <Smartphone className="w-5 h-5" />
                   </button>
                   <button onClick={() => setView('store')} className={`p-2 transition-all ${view === 'store' ? 'text-orange-500 scale-110' : 'text-slate-500 hover:text-white'}`}>
                      <ShoppingCart className="w-5 h-5" />
                   </button>
                   <button onClick={() => setView('academy')} className={`p-2 transition-all ${view === 'academy' ? 'text-purple-500 scale-110' : 'text-slate-500 hover:text-white'}`}>
                      <GraduationCap className="w-5 h-5" />
                   </button>
                   <button onClick={() => setView('luck')} className={`p-2 transition-all ${view === 'luck' ? 'text-green-500 scale-110' : 'text-slate-500 hover:text-white'}`}>
                      <Zap className="w-5 h-5" />
                   </button>
                </div>
             </div>
          </div>
          
          {/* Floating Indicators */}
          <div className="absolute -left-12 top-1/4 glass p-4 rounded-3xl border-blue-500/20 shadow-2xl animate-bounce">
             <CreditCard className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute -right-12 bottom-1/4 glass p-4 rounded-3xl border-orange-500/20 shadow-2xl animate-pulse">
             <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase mb-4">A App Interativa</h2>
          <h3 className="text-6xl font-black mb-10 leading-none">Clique no telemóvel para <br/><span className="text-white">Explorar o Ecossistema.</span></h3>
          
          <div className="space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A nossa plataforma digital centraliza todas as necessidades do condutor angolano moderno, gerando receita recorrente através de um modelo Freemium e Marketplace.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="glass p-5 rounded-3xl border-white/5 flex items-center gap-5 group cursor-pointer hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                   <h5 className="font-bold text-lg">Segurança em 1º Lugar</h5>
                   <p className="text-xs text-slate-500">Dados encriptados e diagnóstico certificado.</p>
                </div>
              </div>

              <div className="glass p-5 rounded-3xl border-white/5 flex items-center gap-5 group cursor-pointer hover:border-yellow-500/30 transition-all">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                   <h5 className="font-bold text-lg">Pagamentos Digitais</h5>
                   <p className="text-xs text-slate-500">Integração nativa com Multicaixa Express.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductAppSlide;
