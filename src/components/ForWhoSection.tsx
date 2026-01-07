import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const ForWhoSection = () => {
  const { t, language } = useLanguage();

  const roles = [
    {
      title: language === 'zh' ? '运营人员' : 'Operations',
      task: language === 'zh' ? '每天手动发布内容到多个平台' : 'Publishing content across platforms daily',
      result: language === 'zh' ? 'AI Doer 自动完成多平台发布' : 'AI Doer handles multi-platform publishing'
    },
    {
      title: language === 'zh' ? '销售助理' : 'Sales Assistants',
      task: language === 'zh' ? '在 CRM 中重复录入数据' : 'Repetitive data entry in CRM',
      result: language === 'zh' ? 'AI Doer 自动同步客户信息' : 'AI Doer syncs customer info automatically'
    },
    {
      title: language === 'zh' ? '内容创作者' : 'Content Creators',
      task: language === 'zh' ? '在不同工具间复制粘贴' : 'Copy-pasting between different tools',
      result: language === 'zh' ? 'AI Doer 处理跨工具操作' : 'AI Doer handles cross-tool operations'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              {t('forwho.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('forwho.subtitle')}
            </p>
          </div>

          {/* Description */}
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('forwho.desc')}
          </p>

          {/* Roles - simplified structure */}
          <div className="space-y-6 mb-12">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
              >
                {/* Role name */}
                <div className="md:w-1/4">
                  <h3 className="font-semibold text-foreground">{role.title}</h3>
                </div>
                
                {/* What they do */}
                <div className="md:w-2/5">
                  <p className="text-muted-foreground text-sm">{role.task}</p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden md:block text-muted-foreground/30">→</div>
                
                {/* What AI Doer does */}
                <div className="md:w-2/5 flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-foreground text-sm font-medium">{role.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key insight */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-xl font-heading font-medium text-foreground italic">
              "{t('forwho.think')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;