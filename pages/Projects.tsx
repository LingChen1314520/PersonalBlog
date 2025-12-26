
import React, { useState, useEffect } from 'react';
import { ContentItem } from '../types';
import { marked } from 'marked';

interface ProjectsProps {
  title: string;
  description: string;
  projects: ContentItem[];
}

const Projects: React.FC<ProjectsProps> = ({ title, description, projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [articleContent, setArticleContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeProject = projects.find(p => p.id === selectedProjectId);

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (selectedProjectId && activeProject?.articleId) {
      loadArticle(activeProject.articleId);
    }
  }, [selectedProjectId]);

  const loadArticle = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`./articles/${id}.md`);
      const text = await response.text();
      setArticleContent(marked.parse(text) as string);
    } catch (error) {
      setArticleContent('<p class="text-red-500">无法加载文档内容。</p>');
    } finally {
      setIsLoading(false);
    }
  };

  if (selectedProjectId && activeProject) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 pb-20">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setSelectedProjectId(null)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-bold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>返回列表</span>
          </button>
          
          {activeProject.link && activeProject.link !== '#' && (
            <a 
              href={activeProject.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth={2}/></svg>
              <span>{activeProject.type === 'project' ? '访问项目' : '查看源码/外部链接'}</span>
            </a>
          )}
        </div>

        <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="h-64 overflow-hidden relative">
            <img src={activeProject.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>
          
          <div className="p-8 md:p-12 -mt-20 relative">
            <div className="flex flex-wrap gap-2 mb-4">
              {activeProject.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest rounded-full">{t}</span>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold mb-8">{activeProject.name}</h1>
            
            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <div 
                className="prose max-w-none mb-16"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-slate-500 mt-2">{description}</p>
        </div>
        
        <div className="relative group min-w-[300px]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2}/></svg>
          </div>
          <input 
            type="text" 
            placeholder="搜索关键词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-1 relative"
          >
            <div className="relative overflow-hidden h-52 cursor-pointer" onClick={() => setSelectedProjectId(project.id)}>
              <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.name} />
              <div className="absolute top-4 right-4 flex gap-2">
                {project.isFeatured && <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-tighter shadow-sm">精选</span>}
                {project.isLatest && <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-tighter shadow-sm">最新</span>}
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 
                className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => setSelectedProjectId(project.id)}
              >
                {project.name}
              </h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[9px] font-bold rounded-md uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm group/link"
                    title="点击跳转"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center bg-white rounded-[40px] border border-dashed border-slate-200">
            <p className="text-slate-400">没有找到匹配的内容。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
