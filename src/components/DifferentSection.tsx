import { useLanguage } from '@/contexts/LanguageContext';
import { X, Check, RefreshCw, Zap } from 'lucide-react';

const DifferentSection = () => {
  const { t, language } = useLanguage();

  const scenarios = [
    {
      scenario: language === 'zh' ? '当网站更新时' : 'When a website changes',
      old: language === 'zh' ? '脚本失效' : 'Scripts break',
      new: language === 'zh' ? '自动适应，继续执行' : 'Adapts and continues',
      icon: RefreshCw
    },
    {
      scenario: language === 'zh' ? '当流程变化时' : 'When process changes',
      old: language === 'zh' ? '需要重写' : 'Needs rewriting',
      new: language === 'zh' ? '自然语言调整' : 'Natural language update',
      icon: Zap
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-gradient">{t('different.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('different.subtitle')}
            </p>
          </div>

          {/* Scenario-based comparisons */}
          <div className="space-y-8 mb-16">
            {scenarios.map((item, index) => (
              <div key={index} className="relative">
                {/* Scenario label */}
                <div className="text-sm font-mono text-muted-foreground mb-4 flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.scenario}:
                </div>
                
                {/* Comparison row */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Old way - failure */}
                  <div className="flex items-center gap-4 p-5 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{language === 'zh' ? '传统方式' : 'Traditional'}</span>
                      <p className="text-foreground font-medium">{item.old}</p>
                    </div>
                  </div>

                  {/* New way - success */}
                  <div className="flex items-center gap-4 p-5 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">AI Doer</span>
                      <p className="text-foreground font-medium">{item.new}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              {t('different.statement')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;