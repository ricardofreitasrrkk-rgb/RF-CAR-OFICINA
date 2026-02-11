
import React from 'react';

interface HeaderProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ current, total, onNavigate }) => {
  return (
    <header className="p-6 flex justify-between items-center z-50 bg-transparent absolute top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black italic tracking-tighter metallic-rf leading-none">RF</span>
          <div className="h-0.5 w-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold tracking-tight text-lg text-white">CAR OFICINA</span>
          <span className="text-[10px] text-yellow-400 font-bold tracking-[0.2em] uppercase">Luanda • Angola</span>
        </div>
      </div>

      <nav className="hidden md:flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`w-8 h-1.5 rounded-full transition-all duration-500 ${
              current === i ? 'bg-blue-600 w-12 shadow-[0_0_10px_#2563eb]' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Digital Diagnostic</span>
          <span className="bg-yellow-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold">INV-READY</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
