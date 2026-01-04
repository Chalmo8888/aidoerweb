import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.waitlist': 'Join Waitlist',
    
    // Hero
    'hero.title.1': 'Let AI handle the',
    'hero.title.2': 'repetitive work',
    'hero.title.3': 'in your browser',
    'hero.description': 'AI Doer is a local AI agent that uses your own browser to get real work done. No scripts. No manual setup. Just tell it what to do.',
    'hero.cta': 'Join the Waitlist',
    'hero.cta.sub': 'Free during beta · No spam',
    'hero.learnMore': 'Learn more',
    
    // Problem
    'problem.title': 'What problem are we solving?',
    'problem.subtitle': 'Knowledge workers spend too much time doing instead of thinking.',
    'problem.item1': 'Copy-pasting between tools',
    'problem.item2': 'Repeating the same browser steps every day',
    'problem.item3': 'Manually publishing content across platforms',
    'problem.item4': 'Following SOPs like a robot',
    'problem.traditional': 'Traditional automation tools are powerful, but:',
    'problem.issue1': 'They are hard to set up',
    'problem.issue2': 'They break easily',
    'problem.issue3': "They don't work well across real-world apps",
    'problem.solution': 'AI Doer exists to take over high-frequency, standard tasks — reliably.',
    
    // Different
    'different.title': 'This is not another automation tool',
    'different.subtitle': 'AI Doer is different by design.',
    'different.no1': 'No rigid workflows',
    'different.no2': 'No fragile scripts',
    'different.no3': 'No cloud browser pretending to be your computer',
    'different.how': 'AI Doer runs locally and uses your browser like a human assistant would.',
    'different.execute': 'AI Doer opens the browser, understands the UI, and executes the steps.',
    
    // For Who
    'forwho.title': 'Who is AI Doer for?',
    'forwho.subtitle': 'For ambitious professionals',
    'forwho.desc': 'AI Doer is built for people who:',
    'forwho.item1': 'Handle repetitive but important browser tasks',
    'forwho.item2': 'Know how work should be done (SOPs)',
    'forwho.item3': 'Want to delegate execution, not decisions',
    'forwho.item4': 'Are moving from "doing everything" to managing outcomes',
    'forwho.think': 'Think of AI Doer as your first digital team member.',
    
    // Features
    'features.title': 'What AI Doer does best',
    'feature1.title': 'Natural-language browser execution',
    'feature1.desc': 'Describe a task once. AI Doer handles the execution — end to end.',
    'feature1.item1': 'Works with real websites',
    'feature1.item2': 'Handles multi-step processes',
    'feature1.item3': 'Recovers from minor failures',
    'feature1.best': 'Best for high-frequency, standardized tasks.',
    
    'feature2.title': 'Build once, reuse forever',
    'feature2.subtitle': 'AI Builder',
    'feature2.desc': 'Turn your best practices into reusable AI tasks.',
    'feature2.item1': 'Create workflows using natural language',
    'feature2.item2': 'Save and reuse proven execution patterns',
    'feature2.item3': 'Start from ready-made templates',
    'feature2.note': 'No engineering required.',
    
    'feature3.title': 'Works across your entire tool stack',
    'feature3.desc': "AI Doer isn't limited to one app.",
    'feature3.item1': 'Social platforms',
    'feature3.item2': 'Content tools',
    'feature3.item3': 'Admin dashboards',
    'feature3.item4': 'Internal systems',
    'feature3.note': 'If it runs in a browser, AI Doer can work with it.',
    
    'feature4.title': 'Learns your context',
    'feature4.desc': 'AI Doer is designed for long-term use.',
    'feature4.item1': 'Remembers preferences',
    'feature4.item2': 'Understands your documents',
    'feature4.item3': 'Uses company knowledge when executing tasks',
    'feature4.note': 'Over time, it works more like your assistant — not a generic bot.',
    
    // Extended
    'extended.title': 'Extended capabilities',
    'extended.subtitle': 'Optional, but powerful',
    
    'ext1.title': 'AI website creation',
    'ext1.desc': 'Upload a PDF, PPT, or URL — AI Doer turns it into a clean, SEO-optimized website with built-in AI customer support.',
    
    'ext2.title': 'Viral video replication',
    'ext2.desc': 'Provide a reference video. AI Doer helps generate a new version based on proven patterns.',
    
    'ext3.title': 'One-click content distribution',
    'ext3.desc': 'Upload once. Publish everywhere. AI Doer handles the browser steps for multi-platform posting.',
    
    // Local
    'local.title': 'Why local execution matters',
    'local.subtitle': 'Most AI agents run in the cloud. AI Doer runs on your machine.',
    'local.item1': 'Higher accuracy',
    'local.item2': 'Better stability',
    'local.item3': 'Lower cost',
    'local.item4': 'No simulated environments',
    'local.note': 'What you see is what AI Doer sees.',
    
    // Download
    'download.title': 'Download AI Doer',
    'download.subtitle': 'Get started with AI Doer on your device',
    'download.windows': 'Windows',
    'download.mac': 'macOS',
    'download.android': 'Android',
    'download.scanQR': 'Scan QR code to download',
    'download.pcNote': 'Visit this page on PC to download Windows or Mac version',
    'download.mobileNote': 'Visit this page on mobile to get the Android app',
    
    // CTA
    'cta.title': 'Early access',
    'cta.desc': 'AI Doer is currently in private beta.',
    'cta.benefits': 'Join the waitlist to:',
    'cta.benefit1': 'Get early access',
    'cta.benefit2': 'Shape product direction',
    'cta.benefit3': 'Be among the first to delegate real work to AI',
    'cta.button': 'Join the Waitlist',
    'cta.note': 'Free during beta · Early users help shape the roadmap · No spam',
    
    // Footer
    'footer.about': 'About the team',
    'footer.desc': 'Built by a small team focused on real-world browser automation. We believe AI should execute — not distract.',
    'footer.rights': 'All rights reserved.',
    
    // Email
    'email.placeholder': 'Enter your email',
    'email.success': 'Thanks! We\'ll be in touch.',
  },
  zh: {
    // Navigation
    'nav.features': '功能特点',
    'nav.about': '关于我们',
    'nav.waitlist': '加入等待列表',
    
    // Hero
    'hero.title.1': '让 AI 处理',
    'hero.title.2': '重复性工作',
    'hero.title.3': '在你的浏览器中',
    'hero.description': 'AI Doer 是一个本地 AI 代理，使用你自己的浏览器完成实际工作。无需脚本，无需手动设置。只需告诉它要做什么。',
    'hero.cta': '加入等待列表',
    'hero.cta.sub': '测试期免费 · 无垃圾邮件',
    'hero.learnMore': '了解更多',
    
    // Problem
    'problem.title': '我们在解决什么问题？',
    'problem.subtitle': '知识工作者花太多时间在执行，而不是思考。',
    'problem.item1': '在工具之间复制粘贴',
    'problem.item2': '每天重复相同的浏览器操作',
    'problem.item3': '手动在多个平台发布内容',
    'problem.item4': '像机器人一样遵循标准操作流程',
    'problem.traditional': '传统自动化工具很强大，但是：',
    'problem.issue1': '设置困难',
    'problem.issue2': '容易出错',
    'problem.issue3': '在实际应用中效果不佳',
    'problem.solution': 'AI Doer 的存在就是为了可靠地接管高频标准任务。',
    
    // Different
    'different.title': '这不是另一个自动化工具',
    'different.subtitle': 'AI Doer 在设计上就不同。',
    'different.no1': '没有僵化的工作流程',
    'different.no2': '没有脆弱的脚本',
    'different.no3': '没有假装成你电脑的云端浏览器',
    'different.how': 'AI Doer 在本地运行，像人类助手一样使用你的浏览器。',
    'different.execute': 'AI Doer 打开浏览器，理解界面，执行步骤。',
    
    // For Who
    'forwho.title': 'AI Doer 适合谁？',
    'forwho.subtitle': '为有抱负的专业人士打造',
    'forwho.desc': 'AI Doer 专为这样的人设计：',
    'forwho.item1': '处理重复但重要的浏览器任务',
    'forwho.item2': '知道工作应该如何完成（SOP）',
    'forwho.item3': '想要委派执行，而非决策',
    'forwho.item4': '正在从"事事亲为"转向管理结果',
    'forwho.think': '把 AI Doer 想象成你的第一个数字团队成员。',
    
    // Features
    'features.title': 'AI Doer 最擅长什么',
    'feature1.title': '自然语言浏览器执行',
    'feature1.desc': '描述一次任务，AI Doer 端到端处理执行。',
    'feature1.item1': '适用于真实网站',
    'feature1.item2': '处理多步骤流程',
    'feature1.item3': '从小故障中恢复',
    'feature1.best': '最适合高频标准化任务。',
    
    'feature2.title': '一次构建，永久复用',
    'feature2.subtitle': 'AI 构建器',
    'feature2.desc': '将最佳实践转化为可复用的 AI 任务。',
    'feature2.item1': '使用自然语言创建工作流',
    'feature2.item2': '保存和复用经过验证的执行模式',
    'feature2.item3': '从现成模板开始',
    'feature2.note': '无需工程技能。',
    
    'feature3.title': '适用于整个工具栈',
    'feature3.desc': 'AI Doer 不限于单一应用。',
    'feature3.item1': '社交平台',
    'feature3.item2': '内容工具',
    'feature3.item3': '管理后台',
    'feature3.item4': '内部系统',
    'feature3.note': '只要在浏览器中运行，AI Doer 就能使用。',
    
    'feature4.title': '学习你的上下文',
    'feature4.desc': 'AI Doer 专为长期使用设计。',
    'feature4.item1': '记住偏好设置',
    'feature4.item2': '理解你的文档',
    'feature4.item3': '执行任务时使用公司知识',
    'feature4.note': '随着时间推移，它更像你的助手——而非通用机器人。',
    
    // Extended
    'extended.title': '扩展能力',
    'extended.subtitle': '可选，但强大',
    
    'ext1.title': 'AI 网站创建',
    'ext1.desc': '上传 PDF、PPT 或 URL——AI Doer 将其转化为干净、SEO 优化的网站，内置 AI 客服。',
    
    'ext2.title': '爆款视频复制',
    'ext2.desc': '提供参考视频，AI Doer 帮你基于验证过的模式生成新版本。',
    
    'ext3.title': '一键内容分发',
    'ext3.desc': '上传一次，全平台发布。AI Doer 处理多平台发布的浏览器步骤。',
    
    // Local
    'local.title': '为什么本地执行很重要',
    'local.subtitle': '大多数 AI 代理在云端运行。AI Doer 在你的机器上运行。',
    'local.item1': '更高准确性',
    'local.item2': '更好稳定性',
    'local.item3': '更低成本',
    'local.item4': '没有模拟环境',
    'local.note': '你看到的就是 AI Doer 看到的。',
    
    // Download
    'download.title': '下载 AI Doer',
    'download.subtitle': '在你的设备上开始使用 AI Doer',
    'download.windows': 'Windows',
    'download.mac': 'macOS',
    'download.android': 'Android',
    'download.scanQR': '扫描二维码下载',
    'download.pcNote': '在电脑上访问此页面下载 Windows 或 Mac 版本',
    'download.mobileNote': '在手机上访问此页面获取 Android 应用',
    
    // CTA
    'cta.title': '抢先体验',
    'cta.desc': 'AI Doer 目前处于私密测试阶段。',
    'cta.benefits': '加入等待列表以：',
    'cta.benefit1': '获得早期访问',
    'cta.benefit2': '参与产品方向决策',
    'cta.benefit3': '成为首批将真实工作委派给 AI 的用户',
    'cta.button': '加入等待列表',
    'cta.note': '测试期免费 · 早期用户参与路线图制定 · 无垃圾邮件',
    
    // Footer
    'footer.about': '关于团队',
    'footer.desc': '由一个专注于真实浏览器自动化的小团队构建。我们相信 AI 应该执行——而非分散注意力。',
    'footer.rights': '保留所有权利。',
    
    // Email
    'email.placeholder': '输入你的邮箱',
    'email.success': '谢谢！我们会联系你。',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
