
import React, { useState } from 'react';
import { 
  Scan, Activity, RefreshCw, Zap, FileText, Download, 
  Share2, AlertCircle, Database, ShieldAlert, Cpu
} from 'lucide-react';
import { DiagnosticStatus } from '../types';
import { useApp } from '../AppContext';

const ScannerView: React.FC = () => {
  const { addNotification } = useApp();
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const [analysisText, setAnalysisText] = useState("");

  const runSimulation = () => {
    setStatus(DiagnosticStatus.SCANNING);
    setTimeout(() => {
      setStatus(DiagnosticStatus.ANALYZING);
      setTimeout(() => {
        setStatus(DiagnosticStatus.RESULT);
        setAnalysisText("Anomalia crítica no sensor de massa de ar (MAF) e flutuação de tensão na bobina 3. IA recomenda limpeza imediata e verificação de cablagem. Possível economia de 120.000 Kz em peças se reparado hoje.");
        addNotification('Diagnóstico concluído com sucesso!', 'success');
      }, 3000);
    }, 2500);
  };

  const reset = () => {
    setStatus(DiagnosticStatus.IDLE);
    setAnalysisText("");
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-10">
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-4">RF <span className="gold-text">SCAN</span> Core</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Plataforma de diagnóstico neural. Conecte seu veículo via Bluetooth e deixe nossa IA processar milhares de logs CAN-BUS em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={() => addNotification('Acedendo à base de dados global...', 'info')}
            className="glass p-6 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all flex flex-col gap-4 cursor-pointer"
          >
             <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500 w-fit">
                <Database className="w-6 h-6" />
             </div>
             <div>
                <h4 className="font-bold text-sm">Base Global DTC</h4>
                <p className="text-[10px] text-slate-500 uppercase font-black">+45.000 Códigos</p>
             </div>
          </div>
          <div 
            onClick={() => addNotification('Monitor Antifraude ativo e seguro.', 'success')}
            className="glass p-6 rounded-3xl border-white/5 hover:border-orange-500/20 transition-all flex flex-col gap-4 cursor-pointer"
          >
             <div className="p-3 bg-orange-600/10 rounded-2xl text-orange-500 w-fit">
                <ShieldAlert className="w-6 h-6" />
             </div>
             <div>
                <h4 className="font-bold text-sm">Monitor Antifraude</h4>
                <p className="text-[10px] text-slate-500 uppercase font-black">Ativo 24/7</p>
             </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-white/5">
           <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-blue-500 w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-widest">Hardware Recomendado</h4>
           </div>
           <p className="text-xs text-slate-500 leading-relaxed mb-4">Para máxima precisão, utilize o adaptador <strong>RF-ELM327 Pro</strong> disponível em nossa loja oficial com 15% de desconto para membros VIP.</p>
           <button 
            onClick={() => addNotification('Redirecionando para a loja...', 'info')}
            className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline"
           >
            Comprar Adaptador →
           </button>
        </div>
      </div>

      <div className="w-full relative group">
         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
         <div className="relative glass min-h-[550px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col">
            <div className="p-6 border-b border-white/5 bg-slate-900/40 flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">INTERFACE: V-LINK 2025</span>
               </div>
               <button onClick={reset} className="p-2 hover:bg-white/5 rounded-full transition">
                  <RefreshCw className="w-4 h-4 text-slate-500" />
               </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8">
               {status === DiagnosticStatus.IDLE && (
                 <button onClick={runSimulation} className="group flex flex-col items-center gap-8">
                    <div className="w-48 h-48 rounded-full border-4 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-all duration-700 relative">
                       <Scan className="w-20 h-20 text-slate-500 group-hover:text-blue-400 transition-all duration-700" />
                       <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="text-center">
                       <p className="text-xl font-black uppercase tracking-widest text-white mb-2">SCAN DE SISTEMAS</p>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Estimativa: 30 Segundos</p>
                    </div>
                 </button>
               )}

               {status === DiagnosticStatus.SCANNING && (
                 <div className="w-full space-y-12 px-10">
                    <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 w-1/2 -translate-x-full animate-[scan_1.5s_infinite]" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Activity className="w-12 h-12 text-blue-500 animate-pulse" />
                       <p className="font-mono text-sm text-blue-400 uppercase font-black animate-pulse">Lendo barramento CAN-BUS...</p>
                    </div>
                 </div>
               )}

               {status === DiagnosticStatus.ANALYZING && (
                 <div className="flex flex-col items-center gap-8 animate-in zoom-in-95 duration-500">
                    <div className="relative">
                       <RefreshCw className="w-20 h-20 text-orange-500 animate-spin" />
                       <Zap className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className="font-mono text-sm text-orange-500 uppercase tracking-widest font-black text-center px-6 leading-relaxed">Cruzando logs com <br/>Base de Dados RF IA...</p>
                 </div>
               )}

               {status === DiagnosticStatus.RESULT && (
                 <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="bg-slate-900 border border-blue-500/20 p-8 rounded-[2rem] shadow-inner relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Activity className="w-20 h-20 text-blue-500" />
                       </div>
                       <h5 className="font-black text-blue-400 uppercase tracking-widest text-xs mb-4">Relatório de IA Gerativa</h5>
                       <p className="text-slate-300 italic text-sm leading-relaxed relative z-10">"{analysisText}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-5 glass rounded-2xl text-center border-white/5">
                          <p className="text-[10px] text-slate-500 font-black uppercase">Custo Est.</p>
                          <p className="text-2xl font-black text-white">45.000 Kz</p>
                       </div>
                       <div className="p-5 glass rounded-2xl text-center border-white/5">
                          <p className="text-[10px] text-slate-500 font-black uppercase">Confiança IA</p>
                          <p className="text-2xl font-black text-green-500">98.4%</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <button 
                         onClick={() => addNotification('Gerando relatório técnico detalhado...', 'info')}
                         className="flex-[2] py-5 bg-blue-600 text-white font-black uppercase text-xs rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform"
                       >
                          <FileText className="w-5 h-5" /> Ver Relatório Técnico
                       </button>
                       <button 
                         onClick={() => addNotification('Descarregando PDF do diagnóstico...', 'success')}
                         className="flex-1 py-5 glass border-white/10 text-slate-400 text-xs font-black uppercase rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                       >
                          <Download className="w-4 h-4" /> PDF
                       </button>
                    </div>
                 </div>
               )}
            </div>
         </div>
      </div>
      <style>{`
        @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </div>
  );
};

export default ScannerView;
