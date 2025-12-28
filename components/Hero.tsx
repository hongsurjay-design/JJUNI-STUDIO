
import React from 'react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-full">
          Gentlemen's Choice
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl whitespace-pre-line">
          {config.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          {config.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('featured')}
            style={{ backgroundColor: config.pointColor }}
            className="px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-white"
          >
            DISCOVER MORE
          </button>
          <button 
            onClick={() => scrollToSection('data-room')}
            className="px-10 py-4 rounded-full font-bold text-sm tracking-widest bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 active:scale-95 transition-all text-white"
          >
            ARCHIVE
          </button>
        </div>
      </div>
      
      {/* Floating indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-t from-white to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
