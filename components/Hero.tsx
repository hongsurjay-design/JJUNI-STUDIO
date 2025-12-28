
import React from 'react';
import { SiteConfig } from '../types';
import { Search, ChevronDown } from 'lucide-react';

interface HeroProps {
  config: SiteConfig;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const Hero: React.FC<HeroProps> = ({ config, searchQuery, setSearchQuery }) => {
  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with Boeing 787 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[15s] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544015759-137fdf556bf1?q=80&w=2000&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-8 rounded-full">
          The Premium Knowledge Portal
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-[1.1] drop-shadow-2xl whitespace-pre-line">
          {config.heroTitle}
        </h1>

        {/* Premium Search Integration */}
        <div className="max-w-2xl mx-auto mb-12 relative group">
          <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full group-focus-within:bg-purple-600/20 transition-all duration-500" />
          <div className="relative flex items-center bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-5 focus-within:border-white/30 focus-within:bg-zinc-900/60 transition-all shadow-2xl">
            <Search className="text-zinc-500 group-focus-within:text-white transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="궁금한 아카이브 정보를 검색해보세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-lg ml-4 w-full text-white placeholder:text-zinc-600 font-light"
            />
          </div>
          <div className="mt-4 flex gap-4 justify-center">
             <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Trending:</span>
             <button onClick={() => setSearchQuery('맛집')} className="text-[10px] text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">#맛집</button>
             <button onClick={() => setSearchQuery('항공')} className="text-[10px] text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">#항공</button>
             <button onClick={() => setSearchQuery('여행')} className="text-[10px] text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">#여행</button>
          </div>
        </div>

        <p className="text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
          {config.heroSubtitle}
        </p>
      </div>
      
      {/* Refined Scroll Indicator */}
      <button 
        onClick={scrollToFeatured}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group"
      >
        <span className="text-[10px] font-bold text-zinc-500 group-hover:text-white transition-colors tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="relative w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
