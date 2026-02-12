
import React, { useState } from 'react';
import { 
  Scan, 
  Activity, 
  RefreshCw, 
  Zap, 
  FileText, 
  Download, 
  Share2, 
  AlertCircle,
  Database
} from 'lucide-react';
import { DiagnosticStatus } from '../types';

const ScannerView: React.FC = () => {
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const [analysisText, setAnalysisText] = useState("");

  const runSimulation = () => {
    setStatus(DiagnosticStatus.SCANNING);
    setTimeout(() => {
      setStatus(DiagnosticStatus.ANALYZING);
      setTimeout(() => {
        setStatus(DiagnosticStatus.RESULT);
        setAnalysisText("Anomalia detectada no sensor de massa de ar (MAF) e tensão oscilante na bobina de ignição do cilindro 3. Probabilidade de falha: 89%. Recomendação: Verificação de cablagem e limpeza de contatos.");
      }, 3000);
    }, 2500);
  };

  const reset = () => {
    setStatus(DiagnosticStatus.IDLE);
    setAnalysisText("");
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-10">
      <div className="w-full space-y-6 md:space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 md:mb-4">RF <span className="gold-text">SCAN</span> Core</h1>
          <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
            Diagnóstico profundo via rede CAN-BUS. Nossa IA identifica falhas ocultas em segundos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="glass p-4 md:p-6 rounded-2xl md:rounded-3xl border-white/5 flex flex-col md:flex-row gap-2 md:gap-4">
             <div className="p-2 md:p-3 bg-blue-600/10 rounded-xl md:rounded-2xl text-blue-500 w-fit">
                <Database className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <h4 className="font-bold text-xs md:text-sm">Database</h4>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-black">+12k DTC</p>
             </div>
          </div>
          <div className="glass p-4 md:p-6 rounded-2xl md:rounded-3xl border-white/5 flex flex-col md:flex-row gap-2 md:gap-4">
             <div className="p-2 md:p-3 bg-orange-600/10 rounded-xl md:rounded-2xl text-orange-500 w-fit">
                <Zap className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <h4 className="font-bold text-xs md:text-sm">Real-time</h4>
                <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-black">&lt; 200ms</p>
             </div>
          </div>
        </div>

        <div className="hidden md:block bg-blue-600/10 border border-blue-500/20 p-8 rounded-[2.5rem]">
           <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
              <AlertCircle className="w-5 h-5" /> Instruções de Segurança
           </h4>
           <ul className="space-y-3">
             {["Certifique-se que o adaptador OBD-II está bem acoplado.", "Mantenha o motor em ralenti durante o scan profundo.", "Não desconecte o cabo durante a escrita de parâmetros."].map((step, i) => (
                <li key={i} className="flex gap-3 text-xs text-slate-400">
                   <span className="font-black text-blue-500">{i+1}.</span> {step}
                </li>
             ))}
           </ul>
        </div>
      </div>

      <div className="w-full relative group">
         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-[2rem] md:rounded-[3rem] opacity-20 blur-xl group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
         <div className="relative glass min-h-[400px] md:min-h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col">
            <div className="p-4 md:p-6 border-b border-white/5 bg-slate-900/40 flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">STATUS: READY</span>
               </div>
               <button onClick={reset} className="p-2 hover:bg-white/5 rounded-full transition">
                  <RefreshCw className="w-4 h-4 text-slate-500" />
               </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8">
               {status === DiagnosticStatus.IDLE && (
                 <button onClick={runSimulation} className="group flex flex-col items-center gap-6 md:gap-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-all duration-700 relative">
                       <Scan className="w-12 h-12 md:w-20 md:h-20 text-slate-500 group-hover:text-blue-400 transition-all duration-700" />
                       <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="text-center px-4">
                       <p className="text-lg md:text-xl font-black uppercase tracking-widest text-white mb-2">Iniciar Scan Completo</p>
                       <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Estimativa: 30 Segundos</p>
                    </div>
                 </button>
               )}

               {status === DiagnosticStatus.SCANNING && (
                 <div className="w-full space-y-8 md:space-y-12 px-4 md:px-10">
                    <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="absolute inset-0 bg-blue-500 w-1/2 -translate-x-full animate-[scan_1.5s_infinite]" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Activity className="w-10 h-10 md:w-12 md:h-12 text-blue-500 animate-pulse" />
                       <p className="font-mono text-[10px] md:text-sm text-blue-400 uppercase font-black animate-pulse text-center">Lendo barramento CAN-BUS...</p>
                    </div>
                 </div>
               )}

               {status === DiagnosticStatus.ANALYZING && (
                 <div className="flex flex-col items-center gap-6 md:gap-8 animate-in zoom-in-95 duration-500">
                    <div className="relative">
                       <RefreshCw className="w-16 h-16 md:w-20 md:h-20 text-orange-500 animate-spin" />
                       <Zap className="w-6 h-6 md:w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className="font-mono text-xs md:text-sm text-orange-500 uppercase tracking-widest font-black text-center">IA Generativa em Análise <br/>Neural-Link Ativo</p>
                 </div>
               )}

               {status === DiagnosticStatus.RESULT && (
                 <div className="w-full space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="bg-slate-900 border border-blue-500/20 p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-inner">
                       <h5 className="font-black text-blue-400 uppercase tracking-widest text-[8px] md:text-xs mb-3 md:mb-4">Relatório IA</h5>
                       <p className="text-slate-300 italic text-xs md:text-sm leading-relaxed">"{analysisText}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                       <div className="p-4 md:p-5 glass rounded-xl md:rounded-2xl text-center border-white/5">
                          <p className="text-[8px] md:text-[10px] text-slate-500 font-black uppercase">Custo Est.</p>
                          <p className="text-lg md:text-2xl font-black text-white">45.000 Kz</p>
                       </div>
                       <div className="p-4 md:p-5 glass rounded-xl md:rounded-2xl text-center border-white/5">
                          <p className="text-[8px] md:text-[10px] text-slate-500 font-black uppercase">Confiança</p>
                          <p className="text-lg md:text-2xl font-black text-green-500">97.8%</p>
                       </div>
                    </div>
                    <button className="w-full py-4 md:py-5 bg-blue-600 text-white font-black uppercase text-[10px] md:text-xs rounded-xl md:rounded-2xl flex items-center justify-center gap-3 shadow-xl">
                       <FileText className="w-4 h-4 md:w-5 md:h-5" /> Ver Relatório Completo
                    </button>
                    <div className="flex gap-3">
                       <button className="flex-1 py-3 bg-slate-800 text-slate-400 text-[10px] font-black uppercase rounded-xl flex items-center justify-center gap-2"><Download className="w-3 h-3" /> PDF</button>
                       <button className="flex-1 py-3 bg-slate-800 text-slate-400 text-[10px] font-black uppercase rounded-xl flex items-center justify-center gap-2"><Share2 className="w-3 h-3" /> Enviar</button>
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
