import { useLanguage } from '@/contexts/LanguageContext';
import { Cloud, Monitor, Zap, Shield, DollarSign, Eye } from 'lucide-react';

const LocalSection = () => {
  const { t, language } = useLanguage();

  const comparisons = [
    {
      cloud: language === 'zh' ? '慢' : 'Slow',
      local: language === 'zh' ? '即时' : 'Instant',
      icon: Zap
    },
    {
      cloud: language === 'zh' ? '有风险' : 'Risky',
      local: language === 'zh' ? '私密' : 'Private',
      icon: Shield
    },
    {
      cloud: language === 'zh' ? '不稳定' : 'Unstable',
      local: language === 'zh' ? '可靠' : 'Reliable',
      icon: Eye
    },
    {
      cloud: language === 'zh' ? '高成本' : 'Expensive',
      local: language === 'zh' ? '低成本' : 'Affordable',
      icon: DollarSign
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-gradient">{t('local.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('local.subtitle')}
            </p>
          </div>

          {/* Visual comparison table */}
          <div className="mt-12 mb-12">
            {/* Headers */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="col-span-1" />
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Cloud className="w-5 h-5" />
                <span className="font-medium">{language === 'zh' ? '云端 AI' : 'Cloud AI'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Monitor className="w-5 h-5" />
                <span className="font-medium">{language === 'zh' ? '本地 AI' : 'Local AI'}</span>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center p-3 rounded-lg hover:bg-card transition-colors">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="text-center text-muted-foreground">
                    {item.cloud}
                  </div>
                  <div className="text-center font-medium text-accent">
                    {item.local}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-xl font-heading font-medium text-foreground">
              {t('local.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;