
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  ShoppingCart, 
  Users, 
  GraduationCap, 
  ShieldAlert,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import DashboardView from './views/DashboardView';
import ScannerView from './views/ScannerView';
import MarketplaceView from './views/MarketplaceView';
import NetworkView from './views/NetworkView';
import AcademyView from './views/AcademyView';
import AdminView from './views/AdminView';
import VoiceAssistant from './components/VoiceAssistant';

type ActiveView = 'dashboard' | 'scanner' | 'marketplace' | 'network' | 'academy' | 'admin';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Painel', icon: LayoutDashboard },
    { id: 'scanner', label: 'Scanner', icon: Activity },
    { id: 'marketplace', label: 'Loja', icon: ShoppingCart },
    { id: 'network', label: 'Rede', icon: Users },
    { id: 'academy', label: 'Academia', icon: GraduationCap },
    { id: 'admin', label: 'Admin', icon: ShieldAlert },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />;
      case 'scanner': return <ScannerView />;
      case 'marketplace': return <MarketplaceView />;
      case 'network': return <NetworkView />;
      case 'academy': return <AcademyView />;
      case 'admin': return <AdminView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Navigation - Hidden on Mobile */}
      <aside className={`hidden md:flex bg-slate-900 border-r border-white/5 transition-all duration-300 flex-col z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic text-xl shadow-lg shadow-blue-500/20">RF</div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-bold tracking-tighter text-lg leading-none">CAR OFICINA</span>
              <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase">Digital Ecosystem</span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as ActiveView)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group ${
                activeView === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeView === item.id ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
              {isSidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <button className="w-full flex items-center gap-4 p-3 text-slate-500 hover:text-white transition">
            <Settings className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold">Configurações</span>}
          </button>
          <button className="w-full flex items-center gap-4 p-3 text-red-500/70 hover:text-red-500 transition">
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-bold">Sair</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header - Adjusted for Mobile App feel */}
        <header className="h-16 md:h-20 bg-slate-900/50 backdrop-blur-md border-b border-white/5 px-4 md:px-8 flex items-center justify-between z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hidden md:block p-2 hover:bg-white/5 rounded-lg transition">
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="w-8 h-8 md:hidden bg-blue-600 rounded-lg flex items-center justify-center font-black italic shadow-lg">RF</div>
            <h2 className="text-sm md:text-lg font-bold tracking-tight">
              {navItems.find(i => i.id === activeView)?.label}
            </h2>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex items-center gap-3 glass px-4 py-2 rounded-full border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase text-green-500">OBD-II Online</span>
            </div>
            
            <button className="relative p-2 hover:bg-white/5 rounded-full transition">
              <Bell className="w-5 h-5 text-slate-400" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </button>

            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center font-bold text-xs">
              RF
            </div>
          </div>
        </header>

        {/* Dynamic View Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 md:pb-8 relative">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderView()}
          </div>
        </div>

        {/* Bottom Tab Bar - Visible ONLY on Mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-4 pb-safe pt-2 flex justify-around items-center z-50">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as ActiveView)}
              className={`flex flex-col items-center gap-1 p-2 transition-all ${
                activeView === item.id ? 'text-blue-500' : 'text-slate-500'
              }`}
            >
              <item.icon className={`w-6 h-6 ${activeView === item.id ? 'scale-110' : ''}`} />
              <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
        </nav>
      </main>

      {/* Persistent Voice Assistant - Repositioned for Mobile */}
      <div className="fixed bottom-24 right-4 md:bottom-10 md:left-10 z-[60]">
        <VoiceAssistant />
      </div>

      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-64 md:w-[800px] h-64 md:h-[800px] bg-blue-600/5 blur-[80px] md:blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-48 md:w-[600px] h-48 md:h-[600px] bg-orange-600/5 blur-[80px] md:blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
};

export default App;
