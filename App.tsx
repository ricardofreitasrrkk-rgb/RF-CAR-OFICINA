
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
} from 'lucide-react';
import Header from './components/Header';
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
import RoadmapSlide from './components/slides/RoadmapSlide';
import InvestmentSlide from './components/slides/InvestmentSlide';
import VoiceAssistant from './components/VoiceAssistant';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <HeroSlide />,
    <ProblemSlide />,
    <SolutionSlide />,
    <HowItWorksSlide />,
    <AIDiagnosticSlide />,
    <ProductAppSlide />,
    <EcosystemGrowthSlide />,
    <RevenueStreamsSlide />,
    <AdminPanelSlide />,
    <MarketSlide />,
    <RoadmapSlide />,
    <InvestmentSlide />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden">
      <Header current={currentSlide} total={slides.length} onNavigate={setCurrentSlide} />
      
      <main className="flex-1 relative overflow-hidden">
        <div 
          className="h-full w-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              {slide}
            </div>
          ))}
        </div>
      </main>

      {/* Voice Assistant Overlay */}
      <VoiceAssistant />

      <div className="absolute bottom-10 right-10 flex gap-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-4 rounded-full glass hover:bg-slate-800 transition-all disabled:opacity-30 border border-white/10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 group"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 transition-all duration-700 z-50" 
           style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
    </div>
  );
};

export default App;
