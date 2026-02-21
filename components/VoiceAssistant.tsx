
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { Mic, MicOff, Volume2, Loader2, X } from 'lucide-react';

// Auxiliares de áudio PCM baseados nas diretrizes do SDK
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const VoiceAssistant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<{ input: AudioContext; output: AudioContext } | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set<AudioBufferSourceNode>());

  const stopAssistant = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
    setIsActive(false);
    setIsConnecting(false);
    setIsSpeaking(false);
  };

  const startAssistant = async () => {
    try {
      setIsConnecting(true);
      // Corrected API initialization to strictly follow guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = { input: inputCtx, output: outputCtx };

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'Você é o Assistente Executivo Virtual da RF CAR OFICINA. Seu objetivo é ajudar investidores a entender nosso pitch deck. Fale de forma profissional, angolana (se possível), mas muito tecnológica. Explique sobre diagnóstico OBD-II, programação de chaves, marketplace de serviços e o programa de fidelização. Seja conciso e persuasivo.',
        },
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsActive(true);
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              // CRITICAL: Solely rely on sessionPromise resolves to prevent race conditions
              sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (msg) => {
            const audioBase64 = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioBase64) {
              setIsSpeaking(true);
              const outCtx = audioContextRef.current!.output;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outCtx.currentTime);
              
              const audioBuffer = await decodeAudioData(decode(audioBase64), outCtx, 24000, 1);
              const source = outCtx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outCtx.destination);
              source.onended = () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              };
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (msg.serverContent?.interrupted) {
              for (const source of sourcesRef.current) {
                source.stop();
              }
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error('Live API Error:', e);
            stopAssistant();
          },
          onclose: () => stopAssistant()
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error('Failed to start voice assistant:', err);
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center gap-4">
      {isActive && (
        <div className="glass p-4 rounded-2xl border-blue-500/30 flex items-center gap-4 animate-in slide-in-from-left-4 duration-300">
          <div className="flex gap-1 items-end h-8 w-12">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 bg-blue-500 rounded-full transition-all duration-300 ${isSpeaking ? 'animate-bounce' : 'h-2'}`}
                style={{ 
                  height: isSpeaking ? `${Math.random() * 100}%` : '20%',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">IA Executiva</span>
            <span className="text-xs font-bold text-white">{isSpeaking ? 'Falando...' : 'Ouvindo o Investidor'}</span>
          </div>
          <button onClick={stopAssistant} className="p-2 hover:bg-white/10 rounded-full transition">
            <X className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      )}

      <button
        onClick={isActive ? stopAssistant : startAssistant}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative group ${
          isActive 
            ? 'bg-red-600 shadow-red-500/30 scale-110' 
            : 'bg-blue-600 shadow-blue-500/30 hover:scale-110'
        }`}
      >
        {isConnecting ? (
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        ) : isActive ? (
          <MicOff className="w-8 h-8 text-white" />
        ) : (
          <Mic className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        )}
        
        {/* Pulsing ring */}
        {!isActive && !isConnecting && (
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
};

export default VoiceAssistant;
