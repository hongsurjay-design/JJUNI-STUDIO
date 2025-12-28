
import React from 'react';
import { Post } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedContentProps {
  posts: Post[];
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({ posts }) => {
  return (
    <section id="featured" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-2">Featured Magazine</h2>
          <p className="text-zinc-500 font-light">선별된 고품격 라이프스타일 큐레이션</p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-zinc-800" />
        <a href="#" className="text-sm font-bold text-zinc-300 hover:text-white flex items-center gap-1 group">
          VIEW ALL <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <div key={post.id} className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <div className="relative overflow-hidden aspect-[16/9] mb-6 rounded-2xl">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest rounded">
                  {post.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-purple-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-zinc-400 font-light text-sm line-clamp-2 leading-relaxed mb-4">
              {post.summary}
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span>By Editor Jjuni</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedContent;
