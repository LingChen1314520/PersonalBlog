
import React from 'react';
import { Page, ContentItem } from '../types';
import { ICONS } from '../constants';

interface HomeProps {
  projects: ContentItem[];
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ projects, onNavigate }) => {
  const featured = projects.filter(p => p.isFeatured).slice(0, 2);
  const latest = projects.filter(p => p.isLatest).slice(0, 4);

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] bg-indigo-600 p-8 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">你好，我是 陈凌。</h1>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            我专注于构建极简且高效的数字产品，在代码与逻辑中寻找艺术的平衡。
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate(Page.ARTICLES)}
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95"
            >
              浏览我的文章
            </button>
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:scale-105 transition-all active:scale-95"
            >
              浏览我的项目
            </button>
            <button 
              onClick={() => onNavigate(Page.MORE)}
              className="px-8 py-4 bg-indigo-500/30 backdrop-blur-md text-white border border-indigo-400/30 font-bold rounded-2xl hover:bg-indigo-500/40 hover:scale-105 hover:shadow-xl transition-all active:scale-95"
            >
              更多信息
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
      </section>

      {/* Featured & Latest Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 精选作品 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">精选作品</h2>
            <button onClick={() => onNavigate(Page.PROJECTS)} className="text-sm font-bold text-indigo-600 hover:underline">查看全部</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {featured.map(p => (
              <div 
                key={p.id} 
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col relative"
              >
                <div 
                  className="cursor-pointer overflow-hidden" 
                  onClick={() => onNavigate(p.type === 'article' ? Page.ARTICLES : Page.PROJECTS)}
                >
                  <img src={p.image} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 
                    className="font-bold mb-2 group-hover:text-indigo-600 cursor-pointer"
                    onClick={() => onNavigate(p.type === 'article' ? Page.ARTICLES : Page.PROJECTS)}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{p.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded-md uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {p.link && p.link !== '#' && (
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                        title="访问链接"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最新动向 */}
        <div className="bg-slate-900 rounded-[40px] p-8 text-white flex flex-col lg:col-span-1 shadow-xl">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <ICONS.Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
            最新动向
          </h2>
          <div className="flex-1 space-y-4">
            {latest.map(p => (
              <div 
                key={p.id} 
                className="flex items-center space-x-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" 
                onClick={() => onNavigate(p.type === 'article' ? Page.ARTICLES : Page.PROJECTS)}
              >
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-[10px] uppercase">
                  {p.type === 'article' ? 'DOC' : 'PROJ'}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">{p.name}</p>
                  <p className="text-[10px] text-slate-400">已更新发布</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              "持续学习，保持好奇，探索未来的无限可能。"
            </p>
          </div>
        </div>
      </div>

      {/* 交通仿真简历 Section */}
      <div className="w-full p-8 md:p-12 bg-white border border-slate-200 rounded-[40px] overflow-hidden relative group shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <div className="inline-flex items-center px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-6">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">个人简历 & 交通仿真背景</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                拥有深厚的交通工程理论基础，擅长利用 VISSIM、SUMO 等微观仿真软件对城市路网进行动态演化分析。通过集成 Python 脚本与 AI 算法，我致力于开发能够实时优化的交通控制策略与数字孪生展示系统。
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">仿真工具</p>
                  <p className="text-sm font-bold text-slate-900">VISSIM / SUMO</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">数据分析</p>
                  <p className="text-sm font-bold text-slate-900">Python / Pandas</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">可视化</p>
                  <p className="text-sm font-bold text-slate-900">Three.js / D3.js</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">核心理论</p>
                  <p className="text-sm font-bold text-slate-900">交通流理论 & 控制</p>
                </div>
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => onNavigate(Page.MORE)}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-3 shadow-lg hover:-translate-y-1"
                >
                  <span>联系作者</span>
                  <ICONS.ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[280px] aspect-square flex-shrink-0">
            <div className="absolute inset-0 bg-indigo-600 rounded-[40px] rotate-6 transform transition-transform group-hover:rotate-3 duration-500"></div>
            <img 
              src="https://raw.githubusercontent.com/LingChen1314520/Picture/master/PersonalBlog/ScreenShot_2025-12-08_010746_311.png" 
              alt="Portrait" 
              className="relative w-full h-full object-cover rounded-[40px] shadow-2xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
