
import React, { useState, useEffect } from 'react';
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
  ChevronRight,
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
    { id: 'dashboard', label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'scanner', label: 'Scanner OBD-II', icon: Activity },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'network', label: 'Rede Afiliados', icon: Users },
    { id: 'academy', label: 'Academia Tech', icon: GraduationCap },
    { id: 'admin', label: 'Control Center', icon: ShieldAlert },
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
      {/* Sidebar Navigation */}
      <aside className={`bg-slate-900 border-r border-white/5 transition-all duration-300 flex flex-col z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
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
        {/* Top Header */}
        <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between z-40">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg transition">
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Pesquisar veículos, peças ou diagnósticos..." 
                className="bg-slate-950/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs w-80 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase text-green-500">OBD-II Conectado</span>
            </div>
            
            <button className="relative p-2 hover:bg-white/5 rounded-full transition">
              <Bell className="w-5 h-5 text-slate-400" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-900" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold leading-none">Roberto Francisco</p>
                <p className="text-[10px] text-yellow-500 font-black uppercase">Membro VIP Gold</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 border border-white/20 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold">RF</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic View Container */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderView()}
          </div>
        </div>
      </main>

      {/* Persistent Voice Assistant */}
      <VoiceAssistant />

      {/* Global Background Glow */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
};

export default App;
