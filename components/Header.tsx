
import React from 'react';
import { SiteConfig } from '../types';
import { Instagram, Twitter, Youtube, Search, Menu } from 'lucide-react';

interface HeaderProps {
  config: SiteConfig;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ config, searchQuery, setSearchQuery }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-bold font-serif tracking-tighter text-white">
            {config.siteName}
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#featured" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">매거진</a>
            <a href="#data-room" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">자료실</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">이벤트</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 focus-within:border-purple-600 transition-colors">
            <Search size={16} className="text-zinc-500" />
            <input 
              type="text" 
              placeholder="검색어를 입력하세요..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm ml-2 w-48 text-zinc-300 placeholder:text-zinc-600"
            />
          </div>
          
          <div className="flex items-center gap-4 text-zinc-400">
            <Instagram size={18} className="hover:text-purple-400 cursor-pointer" />
            <Youtube size={18} className="hover:text-red-500 cursor-pointer" />
            <Twitter size={18} className="hover:text-blue-400 cursor-pointer" />
          </div>
          
          <button className="md:hidden text-zinc-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
