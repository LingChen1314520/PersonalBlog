
# 🚀 Nova - 个人作品集与博客系统

<p align="center">
  <img src="https://img.shields.io/badge/Release-v1.3.0-blue.svg" alt="Release">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/React-19.0-61dafb.svg" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg" alt="Tailwind">
  <img src="https://img.shields.io/badge/AI-Gemini-orange.svg" alt="AI">
</p>

## 🌟 项目简介

**Nova** 是一款专为开发者打造的极简、响应式个人展示平台。它集成了技术文档沉淀、实战项目展示以及基于 Google Gemini 的智能助手，提供开箱即用的个人品牌建设方案。

---

## ✨ 核心特性

- **💎 极简美学**：基于现代 UI 设计原则，融合流体动画与磨砂玻璃视觉特效。
- **📝 内容分流**：完美的双线架构，区分“深度技术文章”与“实战工程项目”。
- **⚡ 极致性能**：采用原生 ESM 导入，零构建损耗，首屏秒开。
- **🔒 管理后台**：内置可视化控制台，支持实时调整内容权重与外链。
- **🤖 智能辅助**：集成 Gemini AI 助手，支持文章自动摘要与访客交互。
- **📱 全端适配**：从 4K 显示器到移动端设备，均提供卓越的交互体验。

---

## 🛠️ 技术栈

- **Core**: React 19 (ESM Mode)
- **Style**: Tailwind CSS
- **Markdown**: Marked.js
- **Intelligence**: Google Gemini API
- **State**: LocalStorage Persistence

---

## 🚀 部署指南 (Netlify)

如果您想将本项目部署到 **Netlify**，请遵循以下步骤：

### 1. 准备工作
- 将代码上传至您的 GitHub 仓库：`LingChen1314520/PersonalBlog`。
- 获取您的 [Google AI API Key](https://aistudio.google.com/app/apikey)。

### 2. Netlify 部署步骤
1. 登录 [Netlify 控制台](https://app.netlify.com/)。
2. 点击 **"Add new site"** -> **"Import from existing project"**。
3. 选择 **GitHub** 并授权，选中 `PersonalBlog` 仓库。
4. **构建设置 (Build settings)**:
   - **Build command**: 留空 (由于使用 ESM 直连，无需构建脚本)
   - **Publish directory**: `.` (当前根目录)
5. **配置环境变量 (Environment variables)**:
   - 点击 **"Add variable"**。
   - Key: `API_KEY`
   - Value: `您的_GEMINI_API_密钥`
6. 点击 **"Deploy site"**。

### 3. 处理路由刷新 (404 问题)
本项目已内置 `netlify.toml`，会自动处理单页面应用的重定向。若手动配置，请确保根目录存在 `_redirects` 文件，内容为：`/* /index.html 200`。

---

## 📂 结构说明

```text
.
├── articles/           # Markdown 原始资源
├── components/         # 核心交互组件
├── pages/              # 页面模块 (Home, Projects, Tools, More, Admin)
├── services/           # Gemini AI 服务封装
├── constants.tsx       # 静态配置与工具链接
├── netlify.toml        # Netlify 部署配置
└── App.tsx             # 应用主入口
```

---

## 📝 开发者说明：如何增加文章？

1. **创建文件**：在 `/articles/` 目录下创建 `your-post.md`。
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
3. **管理后台**：登录后台 (密码已 Base64 加密，详见 `App.tsx`) 进行展示状态微调。

---

## ⚖️ 开源协议与版权

- 代码部分遵循 **MIT License**。
- 个人简历素材及图片版权归作者 **陈凌** 所有，未经授权请勿商用。

---
**💡 持续进化，保持好奇。**
