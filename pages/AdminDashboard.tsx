
import React, { useState } from 'react';
import { ContentItem } from '../types';
import { ICONS } from '../constants';

interface AdminDashboardProps {
  projects: ContentItem[];
  setProjects: (projects: ContentItem[]) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ projects, setProjects, onLogout }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<ContentItem>>({});

  const toggleFeatured = (id: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
  };

  const toggleLatest = (id: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, isLatest: !p.isLatest } : p));
  };

  const startEdit = (p: ContentItem) => {
    setEditingId(p.id);
    setEditForm(p);
  };

  const saveEdit = () => {
    if (!editingId) return;
    setProjects(projects.map(p => p.id === editingId ? { ...p, ...editForm } : p));
    setEditingId(null);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">管理员控制台</h1>
          <p className="text-slate-500">管理您的内容资产、外部链接与权重展示。</p>
        </div>
        <button onClick={onLogout} className="px-6 py-2 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-all text-sm">
          退出登录
        </button>
      </div>

      {/* Projects Management */}
      <section className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h2 className="font-bold text-lg">内容资源管理</h2>
          <span className="text-[10px] text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">共 {projects.length} 项资产</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-50">
                <th className="px-6 py-4">内容名称</th>
                <th className="px-6 py-4">类型</th>
                <th className="px-6 py-4">展示权重</th>
                <th className="px-6 py-4">链接 / 配置</th>
                <th className="px-6 py-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {projects.map(p => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img src={p.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <div className="min-w-0">
                        <p className="font-bold text-sm truncate">{p.name}</p>
                        <p className="text-[10px] text-slate-400 truncate max-w-[150px]">{p.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${p.type === 'article' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                      {p.type === 'article' ? '文章' : '项目'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <button 
                        onClick={() => toggleFeatured(p.id)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all text-left ${p.isFeatured ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'}`}
                      >
                        {p.isFeatured ? '★ 精选' : '设为精选'}
                      </button>
                      <button 
                        onClick={() => toggleLatest(p.id)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all text-left ${p.isLatest ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}
                      >
                        {p.isLatest ? '● 最新' : '标记最新'}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[10px] font-mono text-slate-400 space-y-1">
                      <p className="truncate max-w-[180px]">Link: {p.link}</p>
                      <p>File: {p.articleId}.md</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => startEdit(p)}
                      className="p-2 text-slate-400 hover:text-indigo-600 transition-colors hover:bg-white rounded-lg shadow-sm"
                    >
                      <ICONS.Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Edit Form (Modal Style) */}
      {editingId && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setEditingId(null)} />
          <div className="relative bg-white w-full max-w-lg rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95">
            <h2 className="text-xl font-bold mb-6">修改内容信息</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">标题</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editForm.name || ''}
                  onChange={e => setEditForm({...editForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">描述</label>
                <textarea 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]"
                  value={editForm.description || ''}
                  onChange={e => setEditForm({...editForm, description: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">外部链接 (URL)</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editForm.link || ''}
                  onChange={e => setEditForm({...editForm, link: e.target.value})}
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={saveEdit}
                  className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                >
                  保存修改
                </button>
                <button 
                  onClick={() => setEditingId(null)}
                  className="px-6 py-3 border border-slate-200 text-slate-500 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-10 bg-slate-900 rounded-[40px] text-center text-white">
        <ICONS.Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
        <h3 className="font-bold mb-2">管理贴士</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          修改后的内容会立即同步到本地。建议保持标题精简，链接必须以 http(s):// 开头。
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
