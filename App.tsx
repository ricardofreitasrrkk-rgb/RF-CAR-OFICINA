
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Activity, ShoppingCart, Users, 
  GraduationCap, ShieldAlert, Settings, LogOut, 
  Bell, Search, Menu, X, Rocket, ChevronRight, ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Views da Plataforma
import DashboardView from './views/DashboardView';
import ScannerView from './views/ScannerView';
import MarketplaceView from './views/MarketplaceView';
import NetworkView from './views/NetworkView';
import AcademyView from './views/AcademyView';
import AdminView from './views/AdminView';
import CartModal from './components/CartModal';

// Slides do Pitch Deck
import HeroSlide from './components/slides/HeroSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import HowItWorksSlide from './components/slides/HowItWorksSlide';
import AIDiagnosticSlide from './components/slides/AIDiagnosticSlide';
import ProductAppSlide from './components/slides/ProductAppSlide';
import EcosystemGrowthSlide from './components/slides/EcosystemGrowthSlide';
import RevenueStreamsSlide from './components/slides/RevenueStreamsSlide';
import AdminPanelSlide from './components/slides/AdminPanelSlide';
import MarketSlide from './components/slides/MarketSlide';
import TeamSlide from './components/slides/TeamSlide';
import FinancialsSlide from './components/slides/FinancialsSlide';
import RoadmapSlide from './components/slides/RoadmapSlide';
import InvestmentSlide from './components/slides/InvestmentSlide';

import VoiceAssistant from './components/VoiceAssistant';

import { AppProvider, useApp } from './AppContext';
import Toast from './components/Toast';

type ActiveView = 'dashboard' | 'scanner' | 'marketplace' | 'network' | 'academy' | 'admin';

const AppContent: React.FC = () => {
  const { cart } = useApp();
  const [isLiveApp, setIsLiveApp] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const slides = [
    <HeroSlide />, <ProblemSlide />, <SolutionSlide />, <HowItWorksSlide />,
    <AIDiagnosticSlide />, <ProductAppSlide />, <EcosystemGrowthSlide />,
    <RevenueStreamsSlide />, <AdminPanelSlide />, <MarketSlide />,
    <TeamSlide />, <FinancialsSlide />, <RoadmapSlide />, <InvestmentSlide />
  ];

  const navItems = [
    { id: 'dashboard', label: 'Painel', icon: LayoutDashboard },
    { id: 'scanner', label: 'Scanner', icon: Activity },
    { id: 'marketplace', label: 'Loja', icon: ShoppingCart },
    { id: 'network', label: 'Rede', icon: Users },
    { id: 'academy', label: 'Academia', icon: GraduationCap },
    { id: 'admin', label: 'Admin', icon: ShieldAlert },
  ];

  const nextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLiveApp) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isLiveApp]);

  if (!isLiveApp) {
    return (
      <div className="relative h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden">
        {/* Pitch Deck Navigation Overlay */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 glass px-6 py-3 rounded-full border-white/10"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black italic shadow-lg">RF</div>
            <span className="text-xs font-black tracking-widest uppercase hidden md:block text-slate-400">Pitch Deck</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'bg-blue-500 w-6' : 'bg-slate-800 w-1.5'}`} />
            ))}
          </div>
          <button 
            onClick={() => setIsLiveApp(true)}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <Rocket className="w-3 h-3" /> Demo App
          </button>
        </motion.div>

        <main className="h-full w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full w-full"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </main>

        <div className="absolute bottom-10 right-10 flex gap-4 z-50">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0} 
            className="p-4 rounded-full glass hover:bg-slate-800 transition-all disabled:opacity-20"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1} 
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
          >
            <ChevronRight />
          </button>
        </div>
        <VoiceAssistant />
      </div>
    );
  }

  // --- PLATFORM VIEW ---
  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Toast />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <aside className={`hidden md:flex bg-slate-900 border-r border-white/5 transition-all duration-300 flex-col z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic text-xl shadow-lg">RF</div>
          {isSidebarOpen && <span className="font-bold text-lg leading-none">CAR OFICINA</span>}
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as ActiveView)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${activeView === item.id ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button onClick={() => setIsLiveApp(false)} className="w-full flex items-center gap-4 p-3 text-slate-500 hover:text-white transition">
            <Rocket className="w-5 h-5 rotate-180" />
            {isSidebarOpen && <span className="text-sm font-bold">Voltar ao Pitch</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between z-40">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight text-blue-500 uppercase">{navItems.find(i => i.id === activeView)?.label}</h2>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-400 hover:text-white transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-[8px] font-black text-white">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </div>
              )}
            </button>
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase text-green-500">CAN-BUS Active</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center font-bold">RF</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 pb-32 md:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeView === 'dashboard' && <DashboardView />}
              {activeView === 'scanner' && <ScannerView />}
              {activeView === 'marketplace' && <MarketplaceView />}
              {activeView === 'network' && <NetworkView />}
              {activeView === 'academy' && <AcademyView />}
              {activeView === 'admin' && <AdminView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
