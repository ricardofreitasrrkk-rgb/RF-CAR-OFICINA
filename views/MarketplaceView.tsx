
import React from 'react';
import { ShoppingBag, Search, Filter, Star, Zap, ShoppingCart } from 'lucide-react';

const MarketplaceView: React.FC = () => {
  const products = [
    { name: 'Transponder ID48 Original', price: '12.500 Kz', img: 'https://images.unsplash.com/photo-1542362567-b054216893e9?auto=format&fit=crop&q=80&w=200', tag: 'MAIS VENDIDO' },
    { name: 'Cabo VAG-COM V2 Profissional', price: '45.000 Kz', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=200', tag: 'TOP TECH' },
    { name: 'Bateria AGM 80Ah Mercedes', price: '185.000 Kz', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=200', tag: 'OFERTA' },
    { name: 'Kit OBD-II Mini Bluetooth 5.0', price: '18.000 Kz', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=200', tag: 'RF EXCLUSIVE' },
  ];

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Marketplace <span className="gold-text">Hub</span></h1>
          <p className="text-slate-500 font-medium">Peças certificadas, hardware de diagnóstico e serviços parceiros.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none glass px-6 py-3 rounded-2xl border-white/5 flex items-center gap-3 text-sm font-bold"><Filter className="w-4 h-4" /> Filtros</button>
          <button className="flex-1 md:flex-none bg-blue-600 px-6 py-3 rounded-2xl text-white font-black text-xs uppercase shadow-lg shadow-blue-500/20 flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Carrinho (0)</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="glass rounded-[2.5rem] border-white/10 overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all duration-500">
            <div className="relative aspect-square overflow-hidden">
               <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
               <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[9px] font-black tracking-widest text-blue-400">
                 {p.tag}
               </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
               <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm line-clamp-2 leading-tight flex-1 pr-2">{p.name}</h4>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-3 h-3 fill-yellow-500" />
                    <span className="text-[10px] font-bold">4.9</span>
                  </div>
               </div>
               <div className="mt-auto flex justify-between items-center pt-4">
                  <p className="text-xl font-black text-white">{p.price}</p>
                  <button className="p-3 bg-slate-900 rounded-xl hover:bg-blue-600 transition group-btn">
                     <ShoppingBag className="w-4 h-4 text-slate-500 group-btn-hover:text-white transition" />
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
         <div className="glass p-10 rounded-[3rem] border-white/10 bg-gradient-to-r from-blue-600/5 to-transparent flex items-center gap-8 group cursor-pointer hover:border-blue-500/30 transition">
            <div className="w-20 h-20 bg-blue-600/20 rounded-[1.5rem] flex items-center justify-center text-blue-500 group-hover:scale-110 transition">
               <Zap className="w-10 h-10" />
            </div>
            <div>
               <h3 className="text-2xl font-black mb-1">Serviços <span className="text-blue-400">Express</span></h3>
               <p className="text-sm text-slate-500 leading-relaxed">Agende a recolha do seu veículo em casa para diagnósticos críticos em Luanda.</p>
            </div>
         </div>
         <div className="glass p-10 rounded-[3rem] border-white/10 bg-gradient-to-r from-orange-600/5 to-transparent flex items-center gap-8 group cursor-pointer hover:border-orange-500/30 transition">
            <div className="w-20 h-20 bg-orange-600/20 rounded-[1.5rem] flex items-center justify-center text-orange-500 group-hover:scale-110 transition">
               <Star className="w-10 h-10" />
            </div>
            <div>
               <h3 className="text-2xl font-black mb-1">Peças <span className="text-orange-400">Certificadas</span></h3>
               <p className="text-sm text-slate-500 leading-relaxed">Apenas componentes de OEM testados e com garantia de 1 ano pela RF CAR.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MarketplaceView;
