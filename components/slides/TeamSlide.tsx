
import React from 'react';
import { Linkedin, Github, ExternalLink, Award } from 'lucide-react';

const TeamSlide: React.FC = () => {
  const team = [
    {
      name: "Roberto Francisco",
      role: "Founder & CEO",
      bio: "Especialista em Eletrónica Automotiva com +15 anos de experiência técnica em Luanda.",
      color: "border-blue-500"
    },
    {
      name: "Eng. Pedro Sampaio",
      role: "CTO / Lead IA",
      bio: "Mestre em Engenharia de Software, ex-consultor de sistemas SADC.",
      color: "border-orange-500"
    },
    {
      name: "Dra. Ana Luísa",
      role: "CFO / Operations",
      bio: "Especialista em gestão de startups e expansão de mercado africano.",
      color: "border-yellow-500"
    }
  ];

  return (
    <div className="h-full bg-slate-950 flex flex-col items-center justify-center px-10 relative overflow-hidden bg-circuit">
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase mb-4">Capital Humano</h2>
          <h3 className="text-6xl font-black italic metallic-rf">A Liderança por Trás da Inovação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className={`glass p-8 rounded-[3rem] border-2 ${member.color}/20 hover:border-white/20 transition-all duration-500 group relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Award className={`w-8 h-8 ${member.color.replace('border-', 'text-')}`} />
              </div>
              
              <div className="w-24 h-24 bg-slate-900 rounded-3xl mb-6 flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                 <span className="text-3xl font-black text-white">{member.name.charAt(0)}</span>
              </div>
              
              <h4 className="text-2xl font-black mb-1">{member.name}</h4>
              <p className={`text-xs font-black uppercase tracking-widest mb-6 ${member.color.replace('border-', 'text-')}`}>
                {member.role}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {member.bio}
              </p>
              
              <div className="flex gap-4">
                 <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition" />
                 <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition" />
                 <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
