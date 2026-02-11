
import React, { useState } from 'react';
import { Scan, ShieldCheck, Activity, BrainCircuit, RefreshCw, Zap, Download, FileText, Share2, Code } from 'lucide-react';
import { DiagnosticStatus } from '../../types';

const AIDiagnosticSlide: React.FC = () => {
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

  const showFullReport = () => {
    setStatus(DiagnosticStatus.REPORT);
  };

  const reset = () => {
    setStatus(DiagnosticStatus.IDLE);
    setAnalysisText("");
  };

  return (
    <div className="h-full flex items-center justify-center bg-slate-950 px-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[100px]" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-orange-500 w-5 h-5 fill-orange-500" />
              <h2 className="text-orange-500 font-bold tracking-widest uppercase">Inteligência Preditiva</h2>
            </div>
            <h3 className="text-6xl font-black leading-none mb-6">Scanner <br/> <span className="gold-text">Energizado</span></h3>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            O nosso algoritmo exclusivo correlaciona milhares de códigos de erro em milissegundos, reduzindo o tempo de diagnóstico de horas para segundos através de IA generativa.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 glass rounded-2xl border-blue-500/20 flex items-center gap-3">
              <Activity className="text-blue-500 w-5 h-5" />
              <span className="text-sm font-bold">Diagnóstico em Tempo Real</span>
            </div>
            <div className="px-6 py-3 glass rounded-2xl border-orange-500/20 flex items-center gap-3">
              <BrainCircuit className="text-orange-500 w-5 h-5" />
              <span className="text-sm font-bold">Relatórios Monetizáveis</span>
            </div>
          </div>
        </div>

        <div className="relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 rounded-[2.5rem] opacity-20 blur group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
           
           <div className="relative glass h-[550px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col">
              <div className="p-8 border-b border-white/5 bg-slate-900/40">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">RF CORE • DIAG-SYSTEM</span>
                  </div>
                  <button onClick={reset} className="p-2 hover:bg-white/5 rounded-full transition group/btn">
                      <RefreshCw className="w-4 h-4 text-slate-500 group-hover/btn:rotate-180 transition-transform duration-500" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-transparent to-blue-900/5 overflow-y-auto">
                  {status === DiagnosticStatus.IDLE && (
                    <button onClick={runSimulation} className="group flex flex-col items-center gap-8">
                      <div className="w-40 h-40 rounded-full border-4 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-all duration-700 group-hover:scale-110 relative">
                         <Scan className="w-16 h-16 text-slate-500 group-hover:text-blue-400 group-hover:rotate-90 transition-all duration-700" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition">Acoplar Interface OBD-II</span>
                        <p className="text-[10px] text-slate-700 mt-2 font-bold group-hover:text-blue-500 tracking-widest uppercase">Aguardando Conexão Bluetooth</p>
                      </div>
                    </button>
                  )}

                  {status === DiagnosticStatus.SCANNING && (
                    <div className="w-full space-y-10 px-10">
                        <div className="relative h-2 bg-slate-800 w-full overflow-hidden rounded-full">
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 w-full -translate-x-full animate-[scanline_1.5s_infinite]" />
                        </div>
                        <p className="font-mono text-sm text-blue-400 animate-pulse uppercase font-bold text-center">Lendo Parâmetros CAN-BUS...</p>
                    </div>
                  )}

                  {status === DiagnosticStatus.ANALYZING && (
                    <div className="flex flex-col items-center gap-8">
                        <RefreshCw className="w-16 h-16 text-orange-500 animate-spin" />
                        <p className="font-mono text-sm text-orange-500 uppercase tracking-widest font-bold text-center">Análise via Neural-Link</p>
                    </div>
                  )}

                  {status === DiagnosticStatus.RESULT && (
                    <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-4">
                        <div className="bg-slate-900 border border-blue-500/20 p-6 rounded-3xl">
                           <h5 className="font-black text-blue-400 uppercase tracking-widest text-xs mb-3">Problema Identificado</h5>
                           <p className="text-sm text-slate-200 italic">"{analysisText}"</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                           <div className="p-4 glass rounded-2xl text-center"><p className="text-[9px] text-slate-500 uppercase">Custo Est.</p><p className="text-xl font-black">45.000 Kz</p></div>
                           <div className="p-4 glass rounded-2xl text-center"><p className="text-[9px] text-slate-500 uppercase">Confiança</p><p className="text-xl font-black text-green-500">97.8%</p></div>
                        </div>
                        <button onClick={showFullReport} className="w-full py-4 bg-blue-600 text-white font-black uppercase text-[10px] rounded-2xl flex items-center justify-center gap-2">
                           <FileText className="w-4 h-4" /> Gerar Relatório PDF
                        </button>
                    </div>
                  )}

                  {status === DiagnosticStatus.REPORT && (
                    <div className="w-full animate-in zoom-in-95 duration-500 space-y-6">
                        <div className="bg-white text-slate-950 p-6 rounded-xl shadow-2xl">
                           <div className="flex justify-between items-start mb-6 border-b pb-4">
                              <h6 className="font-black text-xs italic">RF CAR OFICINA</h6>
                              <p className="text-[8px] font-bold text-slate-500">#2025-0192</p>
                           </div>
                           <p className="text-[10px] font-bold mb-2 uppercase text-slate-400">Veículo: Toyota Hilux 2022</p>
                           <p className="text-[9px] leading-tight mb-4">Falha crítica detectada no sensor MAF. Tensão de alimentação fora dos parâmetros nominais na linha 30.</p>
                           <div className="flex justify-between font-black text-[10px] border-t pt-4"><span>TOTAL</span><span>45.000 Kz</span></div>
                        </div>
                        <div className="flex gap-3">
                           <button className="flex-1 py-3 glass border-blue-500/30 text-blue-400 text-[10px] rounded-xl flex items-center justify-center gap-2"><Download className="w-3 h-3" /> PDF</button>
                           <button className="flex-1 py-3 glass border-orange-500/30 text-orange-400 text-[10px] rounded-xl flex items-center justify-center gap-2"><Share2 className="w-3 h-3" /> SHARE</button>
                        </div>
                        <button onClick={reset} className="w-full text-[10px] font-black text-slate-500 uppercase tracking-widest">Novo Scan</button>
                    </div>
                  )}
              </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes scanline { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
};

export default AIDiagnosticSlide;
