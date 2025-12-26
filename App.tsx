
import React, { useState, useEffect } from 'react';
import { Page, ContentItem } from './types';
import { ICONS, INITIAL_PROJECTS } from './constants';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import More from './pages/More';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('nova_is_admin') === 'true');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginPwd, setLoginPwd] = useState('');
  const [loginError, setLoginError] = useState('');

  const [projects, setProjects] = useState<ContentItem[]>(() => {
    const saved = localStorage.getItem('nova_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  useEffect(() => {
    localStorage.setItem('nova_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsSidebarOpen(!isMobile);
      if (isMobile) setIsSidebarCollapsed(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // chen1234 的 Base64 是 Y2hlbjEyMzQ=
    const encoded = btoa(unescape(encodeURIComponent(loginPwd)));
    if (encoded === 'Y2hlbjEyMzQ=') {
      setIsAdmin(true);
      localStorage.setItem('nova_is_admin', 'true');
      setShowLoginModal(false);
      setLoginPwd('');
      setLoginError('');
    } else {
      setLoginError('身份校验失败，请检查管理通行证');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('nova_is_admin');
    if (currentPage === Page.ADMIN) setCurrentPage(Page.HOME);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home projects={projects} onNavigate={setCurrentPage} />;
      case Page.ARTICLES: return (
        <Projects 
          title="深度文章"
          description="沉淀技术思考，分享实战心得。"
          projects={projects.filter(p => p.type === 'article')} 
        />
      );
      case Page.PROJECTS: return (
        <Projects 
          title="实战项目"
          description="涵盖从交通仿真到企业级前端的研究。"
          projects={projects.filter(p => p.type === 'project')} 
        />
      );
      case Page.TOOLS: return <Tools />;
      case Page.MORE: return <More />;
      case Page.ADMIN: return isAdmin ? (
        <AdminDashboard 
          projects={projects} 
          setProjects={setProjects} 
          onLogout={handleLogout}
        />
      ) : <Home projects={projects} onNavigate={setCurrentPage} />;
      default: return <Home projects={projects} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 transition-all duration-300">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center px-4 justify-between glass-effect">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">陈</div>
          <span className="font-bold text-xl tracking-tight">陈凌</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <Sidebar 
        activePage={currentPage} 
        onPageChange={setCurrentPage} 
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onClose={() => setIsSidebarOpen(false)}
        isAdmin={isAdmin}
        onOpenLogin={() => setShowLoginModal(true)}
      />

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? (isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64') : 'ml-0'} pt-16 md:pt-0`}>
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          {renderPage()}
        </div>
      </main>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowLoginModal(false)} />
          <div className="relative bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-bold text-center mb-6">身份验证</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                autoFocus
                type="password" 
                placeholder="请输入管理通行证" 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                value={loginPwd}
                onChange={e => setLoginPwd(e.target.value)}
              />
              {loginError && <p className="text-red-500 text-xs text-center">{loginError}</p>}
              <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
                解锁管理功能
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
