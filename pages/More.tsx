
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface AccordionItemProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-[24px] bg-white overflow-hidden transition-all shadow-sm hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <div className="flex items-center space-x-4">
          {icon && <div className="text-indigo-600">{icon}</div>}
          <span className="font-bold text-slate-800">{title}</span>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ICONS.ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] border-t border-slate-50' : 'max-h-0'}`}>
        <div className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/30">
          {children}
        </div>
      </div>
    </div>
  );
};

const More: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">更多信息</h1>
        <p className="text-slate-500">了解关于项目的更多细节，包含用户协议、免责声明及内容维护指南。</p>
      </section>

      <div className="space-y-4">
        {/* Content Maintenance Guide */}
        <AccordionItem title="内容维护指南：如何增加新文章或项目？" icon={<ICONS.Sparkles className="w-5 h-5" />} defaultOpen={true}>
          <div className="space-y-4">
            <p>本博客系统采用极简的配置化设计。若您需要增加新内容，请按以下步骤操作：</p>
            <div className="bg-slate-900 text-indigo-300 p-4 rounded-xl font-mono text-[11px] leading-relaxed">
              1. 编写 Markdown 文件：在 <strong>/articles/</strong> 目录下创建对应的 .md 文件。<br/>
              2. 更新配置文件：在 <strong>constants.tsx</strong> 的 INITIAL_PROJECTS 数组中增加一个配置项。<br/>
              3. 设置属性：指定 <strong>type: 'article'</strong> (文章) 或 <strong>'project'</strong> (项目)。<br/>
              4. 预览与调整：登录管理后台，您可以实时修改项目的标题、描述、链接及封面图。
            </div>
            <p className="text-xs italic text-slate-400">注：管理后台的信息修改将优先保存至本地 LocalStorage，建议定期备份配置代码。</p>
          </div>
        </AccordionItem>

        {/* User Agreement & Disclaimer */}
        <AccordionItem title="用户协议与免责声明" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}>
          <div className="space-y-4">
            <p className="font-bold">1. 内容使用权</p>
            <p>本网站所载的一切资料、文章及项目演示，仅供阁下个人学习及参考之用。阁下在使用本网站内容时，应自行评估相关风险。</p>
            <p className="font-bold">2. 免责声明</p>
            <p>作者不保证本网站所提供信息的绝对准确性或完整性。对于因使用本网站而产生的任何直接或间接损失，作者不承担任何责任。特别是交通仿真相关内容，仅供学术探讨，不作为实际工程指导。</p>
            <p className="font-bold">3. 第三方链接</p>
            <p>本站可能包含指向第三方网站的链接，这些链接仅为方便阁下而提供。作者对第三方网站的内容不负任何法律责任。</p>
          </div>
        </AccordionItem>

        {/* License & Version Info */}
        <AccordionItem title="许可与版本声明" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}>
          <div className="space-y-2">
            <p><strong>当前版本：</strong> v1.3.0 (Nova Stable)</p>
            <p><strong>许可协议：</strong> 本项目开源部分遵循 MIT 许可协议。您可以自由引用及修改，但请保留原作者陈凌的署名。</p>
            <p><strong>版权声明：</strong> 除另有说明外，本站所有原创文章及图片素材版权均属于作者。未经许可，严禁将本站素材用于任何商业用途。</p>
          </div>
        </AccordionItem>

        {/* Contact Author */}
        <AccordionItem title="联系作者与反馈渠道" icon={<ICONS.Mail className="w-5 h-5" />} defaultOpen={true}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="mailto:chenling3435@163.com" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-500 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-100 transition-colors">
                <ICONS.Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">个人邮箱</p>
                <p className="text-[10px] text-slate-400 truncate">chenling3435@163.com</p>
              </div>
            </a>
            <a href="https://blog.csdn.net/m0_74876592?spm=1011.2124.3001.5343" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-500 transition-all group">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-100 transition-colors">
                <ICONS.Csdn className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">CSDN 专栏</p>
                <p className="text-[10px] text-slate-400 truncate">技术心得分享</p>
              </div>
            </a>
            <a href="https://github.com/LingChen1314520" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-indigo-500 transition-all group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-slate-100 transition-colors">
                <ICONS.Github className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">开源仓库</p>
                <p className="text-[10px] text-slate-400 truncate">LingChen1314520</p>
              </div>
            </a>
          </div>
        </AccordionItem>
      </div>

      <div className="pt-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-200/50 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">仿真系统运行中，探索无止境</span>
        </div>
      </div>
    </div>
  );
};

export default More;
