
import React from 'react';
import { PlayCircle, GraduationCap, Clock, Award, ChevronRight, Lock } from 'lucide-react';

const AcademyView: React.FC = () => {
  const courses = [
    { title: 'Eletrónica Automotiva Nível 1', lessons: '12 Aulas', duration: '6h 30m', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400', progress: 45, free: true },
    { title: 'Programação de Chaves Transponder', lessons: '8 Aulas', duration: '4h 20m', img: 'https://images.unsplash.com/photo-1542362567-b054216893e9?auto=format&fit=crop&q=80&w=400', progress: 0, free: false },
    { title: 'Diagnóstico Avançado OBD-II', lessons: '15 Aulas', duration: '10h', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400', progress: 0, free: false },
  ];

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">RF <span className="gold-text">Academy</span></h1>
          <p className="text-slate-500 font-medium">Formação técnica especializada para a nova geração de mecatrónicos.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass px-6 py-4 rounded-3xl border-white/5 flex items-center gap-4">
            <Award className="text-yellow-500 w-8 h-8" />
            <div>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Meus Certificados</p>
               <p className="text-xl font-black text-white">03 Concluídos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((c, i) => (
          <div key={i} className="glass rounded-[3rem] border-white/10 overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all duration-500">
             <div className="relative aspect-video overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                {!c.free && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Conteúdo VIP
                  </div>
                )}
                <div className="absolute bottom-6 left-6">
                   <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition" />
                </div>
             </div>
             
             <div className="p-8 space-y-4">
                <h4 className="text-xl font-bold leading-tight line-clamp-2">{c.title}</h4>
                <div className="flex gap-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                   <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-blue-500" /> {c.lessons}</span>
                   <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /> {c.duration}</span>
                </div>
                
                {c.progress > 0 ? (
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span className="text-slate-400">Progresso</span>
                       <span className="text-blue-500">{c.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 rounded-full" style={{ width: `${c.progress}%` }} />
                    </div>
                  </div>
                ) : (
                  <button className={`w-full py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 transition-all ${c.free ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-900 text-slate-500 border border-white/5'}`}>
                    {c.free ? 'Começar Aula' : 'Desbloquear com VIP'} <ChevronRight className="w-4 h-4" />
                  </button>
                )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademyView;
