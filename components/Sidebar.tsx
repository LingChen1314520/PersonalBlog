
import React from 'react';
import { Page } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
  isOpen: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onClose: () => void;
  isAdmin: boolean;
  onOpenLogin: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activePage, 
  onPageChange, 
  isOpen, 
  isCollapsed, 
  onToggleCollapse, 
  onClose, 
  isAdmin, 
  onOpenLogin 
}) => {
  const menuItems = [
    { id: Page.HOME, label: '主页', icon: ICONS.Home },
    { id: Page.ARTICLES, label: '深度文章', icon: ICONS.Article },
    { id: Page.PROJECTS, label: '实战项目', icon: ICONS.Project },
    { id: Page.TOOLS, label: '实用工具', icon: ICONS.Tools },
    { id: Page.MORE, label: '更多信息', icon: ICONS.More },
  ];

  if (isAdmin) {
    menuItems.push({ id: Page.ADMIN, label: '管理后台', icon: ICONS.Admin });
  }

  return (
    <>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40" onClick={onClose} />
      )}

      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`p-6 flex items-center transition-all ${isCollapsed ? 'justify-center px-0' : 'justify-between'}`}>
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg">
                <span className="font-bold text-lg">陈</span>
              </div>
              {!isCollapsed && (
                <div className="whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
                  <span className="font-bold text-lg leading-tight block">陈凌</span>
                  <span className="text-xs text-slate-500 font-medium">的作品集</span>
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={onToggleCollapse}
            className="hidden md:flex absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-indigo-600 shadow-sm z-10 transition-transform"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none' }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <nav className={`flex-1 py-2 space-y-1 overflow-y-auto custom-scrollbar ${isCollapsed ? 'px-2' : 'px-4'}`}>
            {!isCollapsed && <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">主菜单</p>}
            {menuItems.map((item) => {
              const isActive = activePage === item.id;
              const Icon = item.icon as any;
              return (
                <button
                  key={item.id}
                  title={isCollapsed ? item.label : ''}
                  onClick={() => {
                    onPageChange(item.id);
                    if (window.innerWidth < 768) onClose();
                  }}
                  className={`
                    w-full flex items-center space-x-3 transition-all duration-200
                    ${isCollapsed ? 'justify-center py-4 px-0 rounded-2xl' : 'px-4 py-3 rounded-xl'}
                    ${isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div 
            onClick={isAdmin ? () => onPageChange(Page.ADMIN) : onOpenLogin}
            className={`p-4 border-t border-slate-100 bg-slate-50/50 cursor-pointer hover:bg-slate-100 transition-colors group ${isCollapsed ? 'flex justify-center px-0' : ''}`}
          >
            <div className={`flex items-center space-x-3 p-2 ${isCollapsed ? 'space-x-0' : ''}`}>
              <div className="relative flex-shrink-0">
                <img src="https://picsum.photos/seed/u1/100/100" className="w-8 h-8 rounded-full border border-white" alt="" />
                {isAdmin && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0 animate-in fade-in duration-300">
                  <p className="text-sm font-semibold text-slate-900 truncate">阿凌世界第一</p>
                  <p className="text-[10px] text-slate-400 group-hover:text-indigo-500 transition-colors">热爱每一天</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
