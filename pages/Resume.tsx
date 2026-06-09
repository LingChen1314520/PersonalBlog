import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';

interface PortfolioItem {
  name: string;
  detail: string;
}

interface ResumeSectionItem {
  title: string;
  desc?: string;
  items?: string[];
  portfolio?: PortfolioItem[];
}

interface ResumeSection {
  title: string;
  period: string;
  bgClass: string;
  accentColor: string;
  role: string;
  items: ResumeSectionItem[];
}

interface ResumeProps {
  onNavigate: (page: Page) => void;
}

const Resume: React.FC<ResumeProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // 3个核心阶段定义
  const sections: ResumeSection[] = [
    {
      title: "学术启航 · 山东航空学院",
      period: "2022.08 - 2026.07",
      bgClass: "from-blue-50 to-indigo-50 border-blue-100",
      accentColor: "indigo",
      role: "交通工程本科学历 & 教学/科研实践者",
      items: [
        {
          title: "📚 专业主修与基础",
          desc: "系统掌握交通工程学、交通规划、交通管理与控制、道路工程、运筹学等核心课程体系，具备深厚的理论素养。"
        },
        {
          title: "💻 交通实验室核心成员/助理",
          desc: "负责实验室日常高效运营与跨年级技术交流，深度协助任课老师完成交通仿真实验配置、路网模型跑测及海量数据分析，熟悉各类研究流程。"
        },
        {
          title: "🤝 机场学院创新创业委员",
          desc: "跨部门协助院系策划并组织各类顶级学科竞赛与专业讲座。负责准备备赛试题、精美汇报PPT以及实操指南等，统筹并筛选超百个创新项目资料。"
        },
        {
          title: "🏆 国家与省级顶级荣誉勋章",
          items: [
            "🏆 山东省 2025 年大学生创新训练计划【优秀项目结项】—— 撰写学术论文《面向区域路网的信号灯协调控制研究》",
            "✨ 山东省 2024 年全国大学生数学建模大赛【一等奖】",
            "📊 山东省 2024 年全国大学生统计建模大赛【一等奖】",
            "🧠 山东省 2023 年大学生智能技术应用设计大赛【一等奖】",
            "⭐ 2022-2023、2023-2024 连续两学年荣获校级【优秀学生】荣誉称号"
          ]
        }
      ]
    },
    {
      title: "产业深耕 · 特路（北京）科技有限公司",
      period: "2026.05 - 至今",
      bgClass: "from-slate-900 via-slate-800 to-indigo-950 text-white border-slate-700",
      accentColor: "indigo",
      role: "交通工程师 (核心骨干)",
      items: [
        {
          title: "🛣️ 交通设施设计与精细施工图编制",
          desc: "全权负责信号灯新建、标志标线全生命周期优化、路侧交安公用设施布置。精通AutoCAD高精度标线画法、设施定位及整套施工图纸输出；涵盖“右转必停”、行车危险冲突区、特种减速标线等高能专项工程。"
        },
        {
          title: "🚧 施工交通组织与复杂路段导改方案",
          desc: "独立编制大型占道、连续路段作业防撞与导流方案，设计全套分阶段施工交通行车倒流图。规划高峰期绕行线路、限速方案，以及复杂特种环境限流策略，平衡施工效率与通勤安全性。"
        },
        {
          title: "🏪 典型标杆项目展示",
          portfolio: [
            {
              name: "📍 北京市顺义区公路交通基础设施服务项目",
              detail: "高维主导32处重点路段千头信号灯新建布设（含AutoCAD制图、安装施工及PPT审查汇报）。亮点路口：顺白路与万科东门、南焦路与信中北街。配套研发13处经典“右转必停”路口并增设红外抓拍执法。"
            },
            {
              name: "📍 治超工程、省道多功能站点、机电设施提升专项二期",
              detail: "定制精细化占道作业合规导引图及全要素限速保护方案。优化警示、发光夜间照明防撞布局，并建立一套涵盖拥堵及特情的多维度应急预案。"
            },
            {
              name: "📍 智创玲珑大型汽车试验场",
              detail: "负责该测试中心内部超高速环道、越野路、测试广场的复杂行车流标线工程，运用CAD精确复刻设计标准，保障实车极端压力测试安全。"
            }
          ]
        }
      ]
    },
    {
      title: "创新实践 · 烟台易路达规划设计有限公司",
      period: "2026.04 - 2026.05",
      bgClass: "from-emerald-50 to-teal-50 border-emerald-100",
      accentColor: "emerald",
      role: "外部合作交通工程师",
      items: [
        {
          title: "🚗 实干调研与微观交通精准诊断",
          desc: "高负荷一线采集，对路缘、渠化岛、核心干道机非冲突、全时段交通量进行综合标定，使用TransCAD/VISSIM还原路网拥堵成因，定位秩序短板。"
        },
        {
          title: "🚥 方案动态仿真与科学数据验证",
          desc: "使用AutoCAD完成多维进口展宽与专用导向车道渠化设计、标志标牌配置，定制自适应、绿信比科学配时调校。利用VISSIM软件前置评估改善对比，多指标（服务水平、排队长度等）提炼优化决策。"
        },
        {
          title: "🎙️ 技术专家研讨与顺利评审汇报",
          desc: "主持、统筹多套核心项目的专家审查材料准备，高水平配合政府交管、交警支队、行业泰斗汇报，保障规划高通过率并落地实施。"
        },
        {
          title: "🏪 标杆实践项目",
          portfolio: [
            {
              name: "🏁 中亚轮胎试验场路口渠化设计",
              detail: "重塑试验场交叉节点形式，优化相相位、最大绿灯配时，使用微观物理元胞自动仿真对比改善效果，确保大型工程运输货车无盲区混行安全。"
            },
            {
              name: "🏁 招远市核心五岔大路口",
              detail: "复杂的多几何路口综合渠化流量控制工程，成功通过多点限流、展宽改善设计平抑拥堵波动。"
            },
            {
              name: "🏁 栖霞市多路段测速论证",
              detail: "编写法定车辆测速与路型安全论证报告，严格参照国标与实际测试车速设定阶梯限制，护航道路设计。"
            }
          ]
        }
      ]
    }
  ];

  // 滚轮事件监听器（节流运行）
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 仅在桌面宽屏执行全屏滚动效果
      if (window.innerWidth < 1024) return;
      
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 30) {
        // 向下滚动
        if (activeSection < sections.length - 1) {
          isScrolling.current = true;
          setActiveSection(prev => prev + 1);
          setTimeout(() => { isScrolling.current = false; }, 850);
        }
      } else if (e.deltaY < -30) {
        // 向上滚动
        if (activeSection > 0) {
          isScrolling.current = true;
          setActiveSection(prev => prev - 1);
          setTimeout(() => { isScrolling.current = false; }, 850);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);

  // 支持键盘事件 (上下方向键 / PgUp / PgDn)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (activeSection < sections.length - 1) setActiveSection(prev => prev + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (activeSection > 0) setActiveSection(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  // Touch 滑动事件 (移动端，如果想在移动端也维持切页体验；不过移动端更推荐整编流式排版，我们可以自适应布局)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth < 1024) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (window.innerWidth < 1024) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (deltaY > 50 && activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
    } else if (deltaY < -50 && activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* 顶部简易面包屑与简介 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center">
            💼 个人履历
            <span className="ml-3 text-xs font-semibold px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              Full Page Showcase
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">滚动鼠标中键或点击侧边指示器，丝滑探索不同工作和学习阶段。</p>
        </div>
        <button
          onClick={() => onNavigate(Page.HOME)}
          className="self-start px-4 py-2 hover:bg-slate-100 text-slate-600 rounded-xl font-bold text-xs transition-all flex items-center space-x-1.5 border border-slate-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>返回主页</span>
        </button>
      </div>

      {/* 桌面端全屏分阶段滑块，只在 lg(1024px) 以上设备展示 */}
      <div 
        className="hidden lg:block relative rounded-[32px] overflow-hidden h-[calc(100vh-12rem)] min-h-[580px] bg-slate-900 shadow-2xl border border-slate-200 group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 背景卡片堆叠容器 - 通过 translate 垂直滑动 */}
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out flex flex-col"
          style={{ transform: `translateY(-${activeSection * 100}%)` }}
        >
          {sections.map((sec, idx) => (
            <div 
              key={idx} 
              className={`w-full h-full flex-shrink-0 bg-gradient-to-br ${sec.bgClass} p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar`}
            >
              {/* 卡片头部 */}
              <div className="flex justify-between items-start border-b border-slate-200/20 pb-4">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#6366f1] select-none block mb-1">
                    STAGE {idx + 1} · {sec.period}
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight">{sec.title}</h2>
                  <p className="text-slate-400 font-medium text-sm mt-1">{sec.role}</p>
                </div>
                <div className={`hidden sm:block text-5xl font-black select-none ${idx === 1 ? 'text-white/10' : 'text-slate-900/5'}`}>
                  0{idx + 1}
                </div>
              </div>

              {/* 卡片核心内容区 - 分散或者栅格排列 */}
              <div className="flex-1 grid grid-cols-2 gap-8 my-6">
                {/* 核心板块 1 */}
                <div className="space-y-6">
                  {sec.items.slice(0, 2).map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/5 shadow-sm space-y-2 hover:bg-white/10 transition-colors">
                      <h4 className="font-bold text-base flex items-center gap-2">
                        {item.title}
                      </h4>
                      {item.desc && <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>}
                      {item.items && (
                        <ul className="space-y-1.5 pl-2">
                          {item.items.map((it: string, itIdx: number) => (
                            <li key={itIdx} className="text-xs text-slate-300 leading-relaxed font-medium block">
                              {it}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* 核心板块 2 -- 包含荣誉或典型的案例详情 */}
                <div className="space-y-6 overflow-y-auto custom-scrollbar max-h-[340px] pr-2">
                  {sec.items.slice(2).map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/5 shadow-sm space-y-2 hover:bg-white/10 transition-colors">
                      <h4 className="font-bold text-base flex items-center gap-2">
                        {item.title}
                      </h4>
                      {item.desc && <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>}
                      {item.items && (
                        <ul className="space-y-2 pl-1">
                          {item.items.map((it: string, itIdx: number) => (
                            <li key={itIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-indigo-400">✦</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* 项目集展示 */}
                      {item.portfolio && (
                        <div className="space-y-3 mt-2">
                          {item.portfolio.map((port: PortfolioItem, portIdx: number) => (
                            <div key={portIdx} className="p-3 bg-slate-900/40 rounded-xl border border-white/5 space-y-1">
                              <div className="text-xs font-bold text-indigo-300">{port.name}</div>
                              <div className="text-[11px] text-slate-400 leading-relaxed">{port.detail}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 卡片底部控制辅助 */}
              <div className="flex items-center justify-between border-t border-slate-200/20 pt-4 text-xs text-slate-400">
                <p>💡 您可以按键盘 <strong>↑↓</strong> 或使用 <strong>鼠标滚轮</strong> 丝滑换页</p>
                <div className="flex items-center space-x-2">
                  <button
                    disabled={activeSection === 0}
                    onClick={() => setActiveSection(p => p - 1)}
                    className="p-1.5 hover:bg-white/10 rounded-lg disabled:opacity-30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <span className="font-bold tracking-widest text-[#6366f1]">{activeSection + 1} / {sections.length}</span>
                  <button
                    disabled={activeSection === sections.length - 1}
                    onClick={() => setActiveSection(p => p + 1)}
                    className="p-1.5 hover:bg-white/10 rounded-lg disabled:opacity-30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 浮动指示圆点 (右侧) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
          {sections.map((sec, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveSection(idx)}
                className="group flex items-center justify-end space-x-3 focus:outline-none"
              >
                <span className={`
                  text-[11px] font-bold uppercase tracking-widest pr-2 transition-all opacity-0 group-hover:opacity-100 duration-300
                  ${isActive ? 'text-indigo-400 font-extrabold scale-105' : 'text-slate-400'}
                `}>
                  {sec.title.split(' · ')[1] || sec.title}
                </span>
                <span className={`
                  w-3.5 h-3.5 rounded-full border-2 transition-all duration-300
                  ${isActive 
                    ? 'bg-indigo-500 border-indigo-400 scale-125' 
                    : 'bg-white/10 border-white/20 hover:bg-white/30'}
                `} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 移动端 / 平板流动式瀑布流布局，在 lg 以下设备展示 - 保证展示极其紧密、排版完好且没有超出截断的困扰 */}
      <div className="block lg:hidden space-y-8 pb-10">
        {sections.map((sec, idx) => (
          <div 
            key={idx} 
            className="rounded-3xl border border-slate-200 bg-white shadow-md p-6 relative overflow-hidden"
          >
            {/* 炫彩装饰条 */}
            <div className={`absolute left-0 top-0 bottom-0 w-2 ${idx === 1 ? 'bg-slate-800' : idx === 2 ? 'bg-emerald-500' : 'bg-indigo-500'}`} />

            <div className="space-y-4 pl-2">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 block tracking-widest">{sec.period}</span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mt-0.5">{sec.title}</h3>
                <p className="text-xs text-slate-500 mt-1 font-semibold">{sec.role}</p>
              </div>

              {/* 细分条目 */}
              <div className="space-y-4 pt-2">
                {sec.items.map((item: ResumeSectionItem, itemIdx: number) => (
                  <div key={itemIdx} className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    {item.desc && <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>}
                    
                    {item.items && (
                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600">
                        {item.items.map((it: string, itIdx: number) => (
                          <li key={itIdx} className="leading-relaxed">{it}</li>
                        ))}
                      </ul>
                    )}

                    {item.portfolio && (
                      <div className="space-y-3 mt-2">
                        {item.portfolio.map((port: PortfolioItem, portIdx: number) => (
                          <div key={portIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="text-xs font-bold text-slate-900 block">{port.name}</span>
                            <span className="text-[11px] text-slate-500 block leading-relaxed mt-1">{port.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
