
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tighter">JJUNI STUDIO</h3>
          <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6">
            멋쟁이 신사를 위한 최상의 라이프스타일 정보를 선별하여 제공합니다. 
            단순한 지식을 넘어선 통찰력과 우아함을 지향합니다.
          </p>
          <div className="flex gap-4">
             {/* Social links placeholder */}
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer">In</div>
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer">Fb</div>
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all cursor-pointer">Yt</div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Categories</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-light">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Lifestyle Magazine</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Restaurant & Dining</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Global Travel Guide</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Investment Insights</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Resources</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-light">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-1">Partnerships <ExternalLink size={12}/></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Contact Us</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-light">
            <li className="flex items-center gap-3"><Mail size={16} /> contact@jjuni-studio.com</li>
            <li className="flex items-center gap-3"><Phone size={16} /> +82 2 1234 5678</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0" /> 서울특별시 강남구 테헤란로<br/>고급 신사 빌딩 8층</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          &copy; 2024 JJUNI STUDIO. ALL RIGHTS RESERVED.
        </p>
        <button 
          onClick={onAdminClick}
          className="text-[10px] font-bold text-zinc-800 hover:text-zinc-500 transition-colors uppercase tracking-[0.3em]"
        >
          Administrator Login
        </button>
      </div>
    </footer>
  );
};

export default Footer;
