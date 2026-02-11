
import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Globe, CheckCircle, Copy } from 'lucide-react';

const InvestmentSlide: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    // Mock copy behavior
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>
      
      <div className="max-w-5xl w-full text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-blue-500 font-bold tracking-[0.5em] uppercase mb-6 animate-pulse">Oportunidade de Série A</h2>
          <h3 className="text-7xl md:text-8xl font-black mb-12 tracking-tighter">
            Energize o seu <br/><span className="gold-text">Portfólio</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-10 rounded-[2.5rem] border border-blue-500/20 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-32 h-32" />
              </div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Investimento Alvo</p>
              <p className="text-6xl font-black mb-8 gold-text">$350k</p>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                  <span className="text-slate-400">Escalabilidade</span>
                  <span className="text-blue-400">ALTA</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                  <span className="text-slate-400">Payback Estimado</span>
                  <span className="text-blue-400">18 Meses</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-400">Impacto Tech</span>
                  <span className="text-blue-400">Disruptivo</span>
                </div>
              </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border border-orange-500/20 flex flex-col justify-center gap-6">
             <button 
               onClick={() => handleCopy('+244 934 764 904', 'phone')}
               className="flex items-center gap-5 p-4 bg-slate-900 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer relative group text-left w-full"
             >
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center shrink-0">
                  {copied === 'phone' ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Phone className="w-6 h-6 text-orange-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Telemóvel / WhatsApp</p>
                  <p className="font-black text-lg">+244 934 764 904</p>
                </div>
                <Copy className="w-4 h-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
             </button>
             
             <button 
               onClick={() => handleCopy('Samba, Luanda', 'loc')}
               className="flex items-center gap-5 p-4 bg-slate-900 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer relative group text-left w-full"
             >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                   {copied === 'loc' ? <CheckCircle className="w-6 h-6 text-green-500" /> : <MapPin className="w-6 h-6 text-blue-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Localização</p>
                  <p className="font-black text-lg">Escongolenses, Samba • Luanda</p>
                </div>
                <Copy className="w-4 h-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
             </button>

             <button 
               onClick={() => handleCopy('@rf_car_oficina', 'insta')}
               className="flex items-center gap-5 p-4 bg-slate-900 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all cursor-pointer relative group text-left w-full"
             >
                <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center shrink-0">
                   {copied === 'insta' ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Instagram className="w-6 h-6 text-pink-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase">Instagram</p>
                  <p className="font-black text-lg">@rf_car_oficina</p>
                </div>
                <Copy className="w-4 h-4 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
             </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 group cursor-pointer hover:text-white transition">
             <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-1000" />
             <span className="text-sm font-bold tracking-widest">WWW.RFCAROFICINA.COM</span>
          </div>
          <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.8em]">Preços Acessíveis | Qualidade Garantida</p>
        </div>
      </div>

      {/* Floating Logo Backdrop */}
      <div className="absolute -bottom-20 opacity-5 pointer-events-none">
        <h1 className="text-[20rem] font-black tracking-tighter">RF CAR</h1>
      </div>
    </div>
  );
};

export default InvestmentSlide;
