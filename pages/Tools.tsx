
import React from 'react';
import { TOOL_LINKS } from '../constants';

const Tools: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">实用工具</h1>
        <p className="text-slate-500 mt-2">推荐一些我常用的技术社区与在线工具。</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOL_LINKS.map((tool) => (
          <a 
            key={tool.id} 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-500 transition-all shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{tool.icon}</span>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth={2}/></svg>
            </div>
            <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tools;
