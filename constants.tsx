
import React from 'react';
import { ContentItem } from './types';

export const ICONS = {
  Home: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Article: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 6h10"/><path d="M8 10h10"/><path d="M8 14h10"/></svg>
  ),
  Project: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
  ),
  Tools: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21 8-2-1-1-2h-3l-1-2h-4l-1 2H5l-1 2-2 1v4l2 1 1 2h3l1 2h4l1-2h3l1-2 2-1V8Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  More: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
  ),
  Admin: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Sparkles: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
  ),
  Github: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
  ),
  ChevronRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6"/></svg>
  ),
  Edit: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
  ),
  Mail: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Csdn: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  ),
};

export const INITIAL_PROJECTS: ContentItem[] = [
  {
    id: 'p1',
    name: '星云仪表盘',
    description: '一个用于 SaaS 指标的实时数据可视化平台。',
    tech: ['React', 'D3.js', 'Tailwind'],
    link: 'https://github.com/LingChen1314520',
    image: 'https://picsum.photos/seed/p1/400/250',
    articleId: 'ai-web-future',
    isFeatured: true,
    isLatest: true,
    type: 'project'
  },
  {
    id: 'p2',
    name: '极简设计系统',
    description: '具有高性能体验的下一代 UI 前端框架。',
    tech: ['Next.js', 'TypeScript', 'Framer'],
    link: 'https://github.com/LingChen1314520',
    image: 'https://picsum.photos/seed/p2/400/250',
    articleId: 'minimal-design',
    isFeatured: true,
    isLatest: false,
    type: 'article'
  },
  {
    id: 'p3',
    name: 'AI 驱动下的 Web 开发未来',
    description: '探讨大语言模型如何重塑现代前端工程流程。',
    tech: ['AI', 'Engineering'],
    link: '#',
    image: 'https://picsum.photos/seed/p3/400/250',
    articleId: 'ai-web-future',
    isFeatured: false,
    isLatest: true,
    type: 'article'
  }
];

export const TOOL_LINKS = [
  { id: 't-vissim', name: 'PTV VISSIM', description: '全球领先的微观交通仿真软件平台，用于精细化交通流模拟。', url: 'https://www.ptvgroup.com/zh/products/ptv-vissim', icon: '🚦' },
  { id: 't-sumo', name: 'SUMO', description: '开源、微观的道路交通模拟包，支持大规模路网仿真。', url: 'https://www.eclipse.org/sumo/', icon: '🚗' },
  { id: 't-ngsim', name: 'NGSIM Dataset', description: '交通工程研究必备的高精度车辆轨迹数据集。', url: 'https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm', icon: '📊' },
  { id: 't-csdn', name: 'CSDN 专栏', description: '作者的技术博客，分享开发经验与仿真心得。', url: 'https://blog.csdn.net/m0_74876592?spm=1011.2124.3001.5343', icon: '📝' },
  { id: 't1', name: 'GitHub', description: '开源代码托管平台，记录项目成长。', url: 'https://github.com/LingChen1314520', icon: '🐙' },
  { id: 't5', name: 'Carbon', description: '将代码转换为精美图片的在线工具。', url: 'https://carbon.now.sh', icon: '📸' },
];
