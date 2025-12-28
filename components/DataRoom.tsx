
import React, { useState } from 'react';
import { Post, Category } from '../types';
import { FileText, Calendar, ChevronRight } from 'lucide-react';

interface DataRoomProps {
  posts: Post[];
  pointColor: string;
}

const DataRoom: React.FC<DataRoomProps> = ({ posts, pointColor }) => {
  const categories: { key: Category; label: string }[] = [
    { key: 'Restaurant', label: '맛집정보' },
    { key: 'Place', label: '여행정보' },
    { key: 'Airline', label: '항공정보' },
    { key: 'Education', label: '항공교육정보' },
    { key: 'Investment', label: '투자정보' },
    { key: 'Others', label: '기타' },
  ];

  const [activeTab, setActiveTab] = useState<Category>('Restaurant');

  const filteredPosts = posts.filter(post => post.category === activeTab);

  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-2">Data Room</h2>
          <p className="text-zinc-500 font-light italic">Premium Knowledge Archive</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat.key 
                  ? 'text-white shadow-lg' 
                  : 'text-zinc-500 bg-zinc-900/50 border border-zinc-800 hover:text-zinc-300'
              }`}
              style={activeTab === cat.key ? { backgroundColor: pointColor } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-2xl hover:border-zinc-700 transition-all group flex gap-5"
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${pointColor}20`, color: pointColor }}
              >
                <FileText size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={12} className="text-zinc-600" />
                  <span className="text-[10px] font-bold text-zinc-600 tracking-wider uppercase">{post.date}</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">{post.title}</h4>
                <p className="text-sm text-zinc-500 font-light line-clamp-2 leading-relaxed mb-4">{post.summary}</p>
                <button className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-widest">
                  READ ARTICLE <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 py-20 text-center text-zinc-600 font-light italic">
            해당 카테고리에 준비된 콘텐츠가 아직 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default DataRoom;
