
<p align="center">
  <img src="https://img.shields.io/badge/Release-v1.3.5-blue.svg?style=flat-square" alt="Release">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/React-19.0-61dafb.svg?style=flat-square" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg?style=flat-square" alt="Tailwind">
  <img src="https://img.shields.io/badge/AI-Gemini_3_Flash-orange.svg?style=flat-square" alt="AI">
</p>

## 🌟 项目简介

**Nova** 是一个为技术探索者打造的现代化、响应式个人展示平台,旨在通过极简的视觉语言展示复杂的工程逻辑与代码艺术。

---

## ✨ 核心特性

- **💎 极致视觉美学**：融合磨砂玻璃（Glassmorphism）、流体动力学动画与现代排版，提供沉浸式阅读体验。
- **🚦 交通仿真集成**：专门设计的展示模块，用于呈现 PTV VISSIM、SUMO 等仿真成果及相关的 Python 数据分析项目。
- **📝 双轨内容架构**：清晰区分“深度技术文章”与“实战工程项目”，支持 Markdown 动态解析。
- **🔒 视觉化后台**：内置基于身份验证的 Admin 控制台，支持免代码实时管理内容权重、精选状态及外部链接。
- **🤖 智能助手**：集成 Google Gemini API，为访客提供智能化的交互指引。
- **⚡ 高性能架构**：基于 React 19 + Vite + Tailwind CSS，利用原生 ESM 模块，实现近乎瞬时的首屏加载。

---

## 🛠️ 技术栈

| 维度 | 技术选型 |
| :--- | :--- |
| **前端框架** | React 19 (Hooks / Concurrent Mode) |
| **构建工具** | Vite 6 (ESM Build Pipeline) |
| **样式引擎** | Tailwind CSS 3 (JIT Engine) |
| **内容解析** | Marked.js (Markdown-to-HTML) |
| **人工智能** | @google/genai (Gemini 3 Flash Preview) |
| **仿真工具** | PTV VISSIM / SUMO / Python (Pandas & Matplotlib) |

---

## 📂 项目结构

```text
.
├── public/
│   └── articles/       # Markdown 文章原始资源 (.md)
├── src/
│   ├── components/     # UI 交互组件 (Sidebar, Accordion...)
│   ├── pages/          # 路由页面 (Home, Projects, Tools, Admin...)
│   ├── services/       # AI 服务封装 (Gemini API)
│   ├── constants.tsx   # 静态配置、图标库与初始数据
│   └── types.ts        # 全局 TypeScript 接口定义
├── netlify.toml        # 自动化部署路由配置
└── package.json        # 依赖与脚本管理
```

---

## 🚀 快速启动与部署

### 1. 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. 部署至 Netlify
1. 关联 GitHub 仓库：`LingChen1314520/PersonalBlog`。
2. 设置构建参数：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. 配置环境变量：
   - **API_KEY**: `您的_GEMINI_API_KEY`

---

## 📝 维护指南

1. **创建文件**：在 `public/articles/` 目录下创建 `your-post.md`。
2. **配置入口**：在 `constants.tsx` 的 `INITIAL_PROJECTS` 数组中添加对象：
   ```typescript
   {
     id: 'new-id',
     name: '文章标题',
     description: '描述...',
     tech: ['Tag1', 'Tag2'],
     link: '#',
     image: '封面URL',
     articleId: 'your-post', // 对应文件名
     type: 'article'
   }
   ```
---

## ⚖️ 开源协议

本项目开源部分遵循 **MIT License**。

**Copyright (c) 2025 陈凌 (LingChen)**
*注：个人照片及仿真工程案例版权归原作者所有，引用请保留署名。*

---
**💡 保持好奇，用数据模拟世界，用代码改变未来。**