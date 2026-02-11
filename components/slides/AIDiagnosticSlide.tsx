
import React, { useState } from 'react';
// Added Code to the imports from lucide-react
import { Scan, ShieldCheck, Activity, BrainCircuit, RefreshCw, Zap, Download, FileText, Share2, Code } from 'lucide-react';

const AIDiagnosticSlide: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'analyzing' | 'result' | 'report'>('idle');
  const [analysisText, setAnalysisText] = useState("");

  const runSimulation = () => {
    setStatus('scanning');
    setTimeout(() => {
      setStatus('analyzing');
      setTimeout(() => {
        setStatus('result');
        setAnalysisText("Anomalia detectada no sensor de massa de ar (MAF) e tensão oscilante na bobina de ignição do cilindro 3. Probabilidade de falha: 89%. Recomendação: Verificação de cablagem e limpeza de contatos.");
      }, 3000);
    }, 2500);
  };

  const showFullReport = () => {
    setStatus('report');
  };

  const reset = () => {
    setStatus('idle');
    setAnalysisText("");
  };

  return (
    <div className="h-full flex items-center justify-center bg-slate-950 px-10 relative overflow-hidden">
      {/* Dynamic Background Sparks */}
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
            O nosso algoritmo exclusivo correlaciona milhares de códigos de erro em milissegundos, reduzindo o tempo de diagnóstico de horas para segundos.
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
           {/* Animated glow border */}
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
                  {status === 'idle' && (
                    <button 
                      onClick={runSimulation}
                      className="group flex flex-col items-center gap-8"
                    >
                      <div className="w-40 h-40 rounded-full border-4 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-all duration-700 group-hover:scale-110 relative">
                         <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
                         <Scan className="w-16 h-16 text-slate-500 group-hover:text-blue-400 group-hover:rotate-90 transition-all duration-700" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition">Acoplar Interface OBD-II</span>
                        <p className="text-[10px] text-slate-700 mt-2 font-bold group-hover:text-blue-500 tracking-widest uppercase">Aguardando Conexão Bluetooth</p>
                      </div>
                    </button>
                  )}

                  {status === 'scanning' && (
                    <div className="w-full space-y-10 px-10">
                        <div className="relative">
                          <div className="h-2 bg-slate-800 w-full overflow-hidden rounded-full">
                             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 w-full -translate-x-full animate-[slide_1.5s_infinite]" />
                          </div>
                          <div className="flex justify-between mt-4">
                            {[1,0,1,1,0,1,0,1,0,1].map((b, i) => (
                              <span key={i} className="text-[10px] font-mono text-blue-500/40 animate-pulse" style={{ animationDelay: `${i*100}ms` }}>{b}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                           <p className="font-mono text-sm text-blue-400 animate-pulse uppercase font-bold">Lendo Parâmetros CAN-BUS...</p>
                           <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Vin: RF-934-764-AO</p>
                        </div>
                    </div>
                  )}

                  {status === 'analyzing' && (
                    <div className="flex flex-col items-center gap-8">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 border-t-4 border-orange-500 rounded-full animate-spin" />
                          <div className="absolute inset-2 border-b-4 border-blue-500 rounded-full animate-[spin_1.5s_infinite_reverse]" />
                        </div>
                        <div className="text-center">
                           <p className="font-mono text-sm text-orange-500 uppercase tracking-widest font-bold">Análise via Neural-Link</p>
                           <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase">Correlacionando com 1.2M Casos RF-Cloud</p>
                        </div>
                    </div>
                  )}

                  {status === 'result' && (
                    <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-4">
                        <div className="bg-slate-900 border border-blue-500/20 p-6 rounded-3xl relative overflow-hidden group/card">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-blue-600/10 rounded-lg">
                                <Activity className="text-blue-500 w-5 h-5" />
                              </div>
                              <h5 className="font-black text-blue-400 uppercase tracking-widest text-sm">Problema Identificado</h5>
                           </div>
                           <p className="text-sm leading-relaxed text-slate-200 font-medium italic">
                             "{analysisText}"
                           </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                           <div className="p-4 glass rounded-2xl border-white/5 text-center">
                              <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Custo Est.</p>
                              <p className="text-xl font-black text-white">45.000 Kz</p>
                           </div>
                           <div className="p-4 glass rounded-2xl border-white/5 text-center">
                              <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Confiança</p>
                              <p className="text-xl font-black text-green-500">97.8%</p>
                           </div>
                        </div>
                        
                        <div className="flex gap-3">
                           <button onClick={showFullReport} className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
                              <FileText className="w-4 h-4" /> Relatório Pro
                           </button>
                           <button onClick={reset} className="px-6 py-4 glass border-white/10 hover:bg-white/5 rounded-2xl transition-all">
                              <RefreshCw className="w-4 h-4 text-slate-400" />
                           </button>
                        </div>
                    </div>
                  )}

                  {status === 'report' && (
                    <div className="w-full animate-in zoom-in-95 duration-500 space-y-6">
                        <div className="bg-white text-slate-950 p-6 rounded-xl shadow-2xl relative">
                           <div className="flex justify-between items-start mb-6 border-b-2 border-slate-100 pb-4">
                              <div>
                                 <h6 className="font-black text-xs italic tracking-tighter">RF CAR OFICINA</h6>
                                 <p className="text-[8px] font-bold text-slate-500 uppercase">Luanda, Angola</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-[8px] font-bold text-slate-500">RELATÓRIO #2025-0192</p>
                                 <p className="text-[8px] font-bold">DATA: 20 MAI 2025</p>
                              </div>
                           </div>
                           
                           <div className="space-y-4">
                              <div>
                                 <p className="text-[8px] font-black uppercase text-slate-400 mb-1">Veículo Analisado</p>
                                 <p className="text-[10px] font-bold">Toyota Hilux 2022 • 2.8 GD-6</p>
                              </div>
                              <div>
                                 <p className="text-[8px] font-black uppercase text-slate-400 mb-1">Diagnóstico IA Detalhado</p>
                                 <p className="text-[9px] leading-tight">Falha crítica no sistema de gestão de combustível. Sensor MAF apresenta leitura 15% acima da tolerância. Desequilíbrio elétrico detectado na linha 30. </p>
                              </div>
                              <div className="flex gap-4">
                                 <div>
                                    <p className="text-[8px] font-black uppercase text-slate-400 mb-1">Mão de Obra</p>
                                    <p className="text-[10px] font-bold">12.500 Kz</p>
                                 </div>
                                 <div>
                                    <p className="text-[8px] font-black uppercase text-slate-400 mb-1">Peças</p>
                                    <p className="text-[10px] font-bold">32.500 Kz</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                              <p className="text-[8px] font-bold">GERADO POR RF TECH ENGINE V2.0</p>
                              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                                 <Code className="text-white w-4 h-4" />
                              </div>
                           </div>
                        </div>
                        
                        <div className="flex gap-3">
                           <button className="flex-1 py-3 glass border-blue-500/30 text-blue-400 font-bold text-[10px] rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500/10 transition">
                              <Download className="w-3 h-3" /> PDF
                           </button>
                           <button className="flex-1 py-3 glass border-orange-500/30 text-orange-400 font-bold text-[10px] rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500/10 transition">
                              <Share2 className="w-3 h-3" /> COMPARTILHAR
                           </button>
                        </div>
                        
                        <button onClick={reset} className="w-full text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:text-white transition">Novo Scan</button>
                    </div>
                  )}
              </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AIDiagnosticSlide;
