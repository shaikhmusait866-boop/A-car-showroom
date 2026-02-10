
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Car Background"
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Exclusive 2024 Collection
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.9] animate-in fade-in slide-in-from-left-8 duration-1000">
            Redefining <br /> 
            <span className="gradient-text">Excellence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Experience the pinnacle of automotive engineering with our curated selection of Honda and Kia vehicles. Where luxury meets legacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
            <button 
              onClick={onExplore}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all hover:translate-x-1"
            >
              Explore Models <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass text-white font-black uppercase text-sm tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <Play size={20} fill="white" /> Watch Film
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 animate-bounce-slow">
        <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
        <div className="w-px h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
};
