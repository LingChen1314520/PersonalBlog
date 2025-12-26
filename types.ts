
import React from 'react';

export interface ContentItem {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  articleId?: string;
  isFeatured?: boolean;
  isLatest?: boolean;
  type: 'article' | 'project';
}

export enum Page {
  HOME = 'home',
  ARTICLES = 'articles',
  PROJECTS = 'projects',
  TOOLS = 'tools',
  MORE = 'more',
  ADMIN = 'admin'
}
