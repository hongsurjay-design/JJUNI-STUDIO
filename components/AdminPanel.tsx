
import React, { useState } from 'react';
import { Post, SiteConfig, Category } from '../types';
import { 
  LogOut, Plus, Trash2, Edit3, Save, 
  Settings, Layout, FilePlus2, List,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';

interface AdminPanelProps {
  posts: Post[];
  config: SiteConfig;
  onUpdatePosts: (posts: Post[]) => void;
  onUpdateConfig: (config: SiteConfig) => void;
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  posts, config, onUpdatePosts, onUpdateConfig, onLogout 
}) => {
  const [activeMenu, setActiveMenu] = useState<'posts' | 'settings'>('posts');
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
  const [formConfig, setFormConfig] = useState<SiteConfig>(config);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories: Category[] = ['Restaurant', 'Place', 'Airline', 'Education', 'Investment', 'Others'];

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    let newPosts;
    if (editingPost.id) {
      newPosts = posts.map(p => p.id === editingPost.id ? { ...p, ...editingPost as Post } : p);
    } else {
      const newPost: Post = {
        ...editingPost as Post,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      };
      newPosts = [newPost, ...posts];
    }

    onUpdatePosts(newPosts);
    setEditingPost(null);
    triggerSuccess();
  };

  const handleDeletePost = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      onUpdatePosts(posts.filter(p => p.id !== id));
      triggerSuccess();
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formConfig);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="p-8 border-b border-zinc-800">
          <h1 className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-serif">J</div>
            JJUNI ADMIN
          </h1>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveMenu('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeMenu === 'posts' ? 'bg-purple-600 text-white' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
            }`}
          >
            <List size={18} /> 게시글 관리
          </button>
          <button 
            onClick={() => setActiveMenu('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeMenu === 'settings' ? 'bg-purple-600 text-white' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
            }`}
          >
            <Settings size={18} /> 사이트 설정
          </button>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={18} /> 로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto bg-black p-10">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {activeMenu === 'posts' ? 'Manage Posts' : 'Site Configuration'}
            </h2>
            <p className="text-zinc-500 text-sm">실시간으로 사이트의 콘텐츠와 디자인을 변경합니다.</p>
          </div>
          {activeMenu === 'posts' && !editingPost && (
            <button 
              onClick={() => setEditingPost({ title: '', category: 'Airline', summary: '', content: '', imageUrl: 'https://picsum.photos/800/600', isFeatured: false })}
              className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-bold transition-all shadow-lg"
            >
              <Plus size={18} /> 새 글 작성
            </button>
          )}
        </header>

        {activeMenu === 'posts' ? (
          editingPost ? (
            <div className="max-w-4xl bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FilePlus2 className="text-purple-500" />
                  {editingPost.id ? '게시글 수정' : '새 게시글 작성'}
                </h3>
                <button onClick={() => setEditingPost(null)} className="text-zinc-500 hover:text-zinc-300 text-sm">취소</button>
              </div>
              
              <form onSubmit={handleSavePost} className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">제목</label>
                  <input 
                    type="text" 
                    required
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">카테고리</label>
                  <select 
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value as Category })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group pt-8">
                    <input 
                      type="checkbox" 
                      checked={editingPost.isFeatured}
                      onChange={(e) => setEditingPost({ ...editingPost, isFeatured: e.target.checked })}
                      className="w-5 h-5 rounded border-zinc-800 bg-zinc-950 checked:bg-purple-600 text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200">메인 추천 콘텐츠 등록</span>
                  </label>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">요약문</label>
                  <input 
                    type="text" 
                    required
                    value={editingPost.summary}
                    onChange={(e) => setEditingPost({ ...editingPost, summary: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none"
                    placeholder="리스트에 표시될 요약문"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">이미지 URL</label>
                  <div className="flex gap-4">
                    <input 
                      type="text" 
                      required
                      value={editingPost.imageUrl}
                      onChange={(e) => setEditingPost({ ...editingPost, imageUrl: e.target.value })}
                      className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none"
                      placeholder="https://..."
                    />
                    <div className="w-12 h-12 rounded-xl border border-zinc-800 overflow-hidden">
                       <img src={editingPost.imageUrl} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">상세 내용</label>
                  <textarea 
                    required
                    rows={6}
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none resize-none"
                    placeholder="상세 내용을 입력하세요"
                  />
                </div>

                <div className="col-span-2 pt-4">
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                    <Save size={18} /> 저장하기
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {posts.map(post => (
                <div key={post.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between group hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                      <img src={post.imageUrl} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">{post.category}</span>
                        {post.isFeatured && <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">FEATURED</span>}
                        <span className="text-[10px] text-zinc-600">{post.date}</span>
                      </div>
                      <h4 className="font-bold text-zinc-200">{post.title}</h4>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setEditingPost(post)}
                      className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
                    >
                      <Edit3 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="max-w-2xl bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <Layout className="text-purple-500" />
              사이트 비주얼 설정
            </h3>
            
            <form onSubmit={handleSaveSettings} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">사이트 이름</label>
                <input 
                  type="text" 
                  value={formConfig.siteName}
                  onChange={(e) => setFormConfig({ ...formConfig, siteName: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">히어로 타이틀</label>
                <textarea 
                  rows={2}
                  value={formConfig.heroTitle}
                  onChange={(e) => setFormConfig({ ...formConfig, heroTitle: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">히어로 서브타이틀</label>
                <textarea 
                  rows={3}
                  value={formConfig.heroSubtitle}
                  onChange={(e) => setFormConfig({ ...formConfig, heroSubtitle: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-purple-600 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">포인트 컬러</label>
                <div className="flex gap-4 items-center">
                  <input 
                    type="color" 
                    value={formConfig.pointColor}
                    onChange={(e) => setFormConfig({ ...formConfig, pointColor: e.target.value })}
                    className="w-12 h-12 bg-transparent border-none outline-none cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={formConfig.pointColor}
                    onChange={(e) => setFormConfig({ ...formConfig, pointColor: e.target.value })}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-purple-600 outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <Save size={18} /> 설정 저장하기
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce z-[100]">
          <CheckCircle2 size={20} />
          <span className="font-bold text-sm">성공적으로 반영되었습니다!</span>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
