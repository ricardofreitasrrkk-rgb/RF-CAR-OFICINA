
import React from 'react';
import { Zap, Cpu, Settings, Code, Shield } from 'lucide-react';

const HeroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 px-6">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[140px]" />
        
        {/* Electric circuit patterns */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <div className="absolute top-10 left-10 w-48 h-48 border border-blue-500/20 rounded-full" />
          <div className="absolute bottom-40 right-40 w-96 h-96 border border-orange-500/10 rounded-full" />
        </div>
      </div>

      {/* LOGO SHIELD CONTAINER (Inspired by the user image) */}
      <div className="relative z-10 flex flex-col items-center animate-in fade-in zoom-in duration-1000">
        
        {/* Top Metallic RF */}
        <div className="relative mb-[-3.5rem] z-20">
          <h1 className="text-[14rem] md:text-[20rem] font-black italic tracking-tighter metallic-rf leading-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            RF
          </h1>
          {/* Subtle Glow behind RF */}
          <div className="absolute inset-x-0 bottom-1/4 h-1/2 bg-blue-400/30 blur-[100px] -z-10 rounded-full"></div>
        </div>

        {/* Central Element: Car Mockup Glow */}
        <div className="relative z-25 mb-[-2rem] group">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-all duration-700"></div>
          {/* Placeholder for Car Visualization (using icon and glow to mimic the image) */}
          <div className="relative w-64 h-32 md:w-96 md:h-48 flex items-center justify-center bg-slate-900/60 rounded-[3rem] border border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.4)]">
             <div className="flex gap-4">
                <Cpu className="w-12 h-12 text-blue-400 animate-pulse" />
                <div className="w-px h-12 bg-white/10" />
                <Settings className="w-12 h-12 text-orange-400 animate-[spin_4s_linear_infinite]" />
             </div>
             {/* Floating Code Icons like in the image */}
             <div className="absolute -top-8 -right-8 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20 rotate-12">
                &lt;/&gt;
             </div>
             <div className="absolute -bottom-4 -left-8 w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-black shadow-lg shadow-yellow-500/20 -rotate-12">
                JS
             </div>
          </div>
        </div>

        {/* Curved Banner "CAR OFICINA" */}
        <div className="relative z-30 w-full max-w-5xl px-4 transform translate-y-2">
          <div className="electric-banner py-5 md:py-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />
            <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter drop-shadow-2xl">
              CAR <span className="text-yellow-400">OFICINA</span>
            </h2>
          </div>
        </div>

        {/* Golden Sub-Banner */}
        <div className="mt-2 bg-slate-950 border-y-2 border-yellow-500/40 px-12 py-3 relative z-40 transform shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="flex gap-6 md:gap-16 text-sm md:text-2xl font-black tracking-[0.3em] uppercase text-yellow-400 whitespace-nowrap">
            <span className="shimmer-text">Diagnóstico</span>
            <span className="text-slate-800">•</span>
            <span className="shimmer-text">Programação</span>
            <span className="text-slate-800">•</span>
            <span className="shimmer-text">Codificação</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-14 text-lg md:text-2xl text-slate-300 max-w-4xl text-center font-medium leading-relaxed drop-shadow-lg px-8">
          Tecnologia Alemã aplicada à realidade de <span className="text-blue-400 font-bold">Angola</span>. 
          Soluções completas em <span className="text-orange-400 font-bold">Eletrónica Automotiva</span>.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="mt-16 relative z-10 flex flex-wrap justify-center gap-8 px-4">
        {[
          { icon: <Cpu className="w-5 h-5" />, label: 'Scanner Profissional' },
          { icon: <Shield className="w-5 h-5" />, label: 'Segurança Garantida' },
          { icon: <Code className="w-5 h-5" />, label: 'Software Original' }
        ].map((item, i) => (
          <div key={i} className="glass px-6 py-3 rounded-2xl flex items-center gap-3 border-white/5 hover:border-blue-500/40 transition-all duration-500 group">
            <div className="text-blue-500 group-hover:scale-125 transition-transform duration-500">
              {item.icon}
            </div>
            <span className="font-black uppercase tracking-[0.15em] text-[11px] text-slate-300">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Floating Info */}
      <div className="absolute bottom-8 left-12 group cursor-pointer">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1 group-hover:text-blue-500 transition">Luanda Hub</p>
        <p className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">Samba, Escongolenses</p>
      </div>

      <div className="absolute bottom-8 right-12 text-right group cursor-pointer">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1 group-hover:text-orange-500 transition">Agendamentos</p>
        <p className="text-4xl font-black gold-text tracking-tighter group-hover:scale-105 transition-transform">+244 934 764 904</p>
      </div>
    </div>
  );
};

export default HeroSlide;
