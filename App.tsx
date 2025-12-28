
import React, { useState, useEffect, useCallback } from 'react';
import { Post, SiteConfig, AppView } from './types';
import { storageService } from './services/storageService';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedContent from './components/FeaturedContent';
import DataRoom from './components/DataRoom';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { Search, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('user');
  const [posts, setPosts] = useState<Post[]>([]);
  const [config, setConfig] = useState<SiteConfig>(storageService.getConfig());
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setPosts(storageService.getPosts());
  }, []);

  const handleUpdatePosts = useCallback((newPosts: Post[]) => {
    setPosts(newPosts);
    storageService.savePosts(newPosts);
  }, []);

  const handleUpdateConfig = useCallback((newConfig: SiteConfig) => {
    setConfig(newConfig);
    storageService.saveConfig(newConfig);
  }, []);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setView('user');
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white">
      {view === 'user' ? (
        <>
          <Header 
            config={config} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <main className="pt-20">
            <Hero 
              config={config} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <FeaturedContent posts={filteredPosts.filter(p => p.isFeatured)} />
              <div id="data-room" className="mt-24">
                <DataRoom posts={filteredPosts} pointColor={config.pointColor} />
              </div>
            </div>
          </main>
          <Footer onAdminClick={() => {
            const pass = prompt('관리자 비밀번호를 입력하세요');
            if (pass === 'sjsj1004!') {
              setIsAdminLoggedIn(true);
              setView('admin');
            } else if (pass !== null) {
              alert('비밀번호가 틀렸습니다.');
            }
          }} />
        </>
      ) : (
        <AdminPanel 
          posts={posts} 
          config={config} 
          onUpdatePosts={handleUpdatePosts} 
          onUpdateConfig={handleUpdateConfig}
          onLogout={handleLogout}
        />
      )}
      
      {/* Floating Action for Admin Shortcut */}
      {!isAdminLoggedIn && (
        <button 
          onClick={() => {
            const pass = prompt('관리자 비밀번호를 입력하세요');
            if (pass === 'sjsj1004!') {
              setIsAdminLoggedIn(true);
              setView('admin');
            } else if (pass !== null) {
              alert('비밀번호가 틀렸습니다.');
            }
          }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 hover:text-purple-500 hover:border-purple-500 transition-all z-50 group"
          title="Admin Mode"
        >
          <ShieldCheck size={20} />
          <span className="absolute right-14 bg-zinc-900 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity border border-zinc-800">관리자 모드</span>
        </button>
      )}
    </div>
  );
};

export default App;
