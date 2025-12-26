
# Nova - 个人作品集与博客系统

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/React-19.0-61dafb.svg" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg" alt="Tailwind">
  <img src="https://img.shields.io/badge/Language-TypeScript-blue.svg" alt="Language">
</p>

## 📖 简介

**Nova** 是一个极致简约、响应迅速且功能完善的个人展示平台。它不仅是一个博客，更是一个集成了实战项目展示、技术文档沉淀以及智能 AI 助手的全方位内容管理系统。本项目旨在为开发者提供一个开箱即用的、高度可定制的个人主页方案。

## ✨ 核心功能

- **🚀 极致体验**：基于极简主义设计，结合流体动画与磨砂玻璃特效。
- **📚 双线内容**：完美支持“深度技术文章”与“实战工程项目”的分类展示。
- **🔍 全局搜索**：内置高效的客户端内容检索系统。
- **🛠️ 管理后台**：支持直接在前端编辑项目权重、外链及展示状态。
- **🤖 AI 驱动**：集成 Google Gemini API，提供文章摘要与智能访客咨询。
- **🌓 响应式设计**：从 4K 屏幕到移动端，均能提供卓越的交互体验。

## 🛠️ 技术栈

| 领域 | 技术 |
| :--- | :--- |
| **框架** | React 19 + TypeScript |
| **样式** | Tailwind CSS |
| **渲染** | Marked (Markdown 解析) |
| **模型** | Google Gemini API (1.5 Flash) |
| **部署** | ES6 Module Integration |

## 🚀 快速上手

### 1. 发布内容
1. 在 `/articles/` 目录下创建 `.md` 文件。
2. 在 `constants.tsx` 的 `INITIAL_PROJECTS` 数组中添加配置项。
   ```typescript
   {
     id: 'unique_id',
     name: '标题',
     description: '描述',
     tech: ['React'],
     link: 'URL',
     image: '封面图',
     articleId: '文件名',
     type: 'article'
   }
   ```

### 2. 管理后台
- 点击侧边栏底部头像，输入通行证即可进入管理模式。
- **通行证**：已通过 Base64 加密存储于 `App.tsx` 中，请查阅初始化逻辑。

## 📂 项目结构

```text
.
├── articles/           # Markdown 内容资源
├── components/         # 公用组件
├── services/           # AI 及 API 服务
├── pages/              # 页面模块
├── constants.tsx       # 全局配置及静态数据
├── types.ts            # TypeScript 类型定义
└── App.tsx             # 应用主入口
```

## 📝 贡献指南

1. **Fork** 本仓库。
2. 创建您的 **Feature 分支**。
3. **Commit** 您的修改。
4. 推送到分支并提交 **Pull Request**。

## ⚖️ 开源协议

本项目遵循 **MIT** 开源协议。

## 📮 联系我们

- **Email**: [chenling3435@163.com](mailto:chenling3435@163.com)
- **CSDN**: [陈凌的技术专栏](https://blog.csdn.net/m0_74876592)
- **GitHub**: [LingChen1314520](https://github.com/LingChen1314520)

---
**持续学习，保持好奇。**
