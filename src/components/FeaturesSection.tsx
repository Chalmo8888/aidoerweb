import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Repeat, Layers, Brain, Check } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  // Core features (first tier - emphasized)
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: t('feature1.title'),
      desc: t('feature1.desc'),
      note: t('feature1.best'),
      items: [t('feature1.item1'), t('feature1.item2'), t('feature1.item3')],
    },
    {
      icon: Repeat,
      title: t('feature2.title'),
      subtitle: t('feature2.subtitle'),
      desc: t('feature2.desc'),
      note: t('feature2.note'),
      items: [t('feature2.item1'), t('feature2.item2'), t('feature2.item3')],
    },
  ];

  // Secondary features (second tier - less prominent)
  const secondaryFeatures = [
    {
      icon: Layers,
      title: t('feature3.title'),
      desc: t('feature3.desc'),
      note: t('feature3.note'),
    },
    {
      icon: Brain,
      title: t('feature4.title'),
      desc: t('feature4.desc'),
      note: t('feature4.note'),
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            <span className="text-gradient">{t('features.title')}</span>
          </h2>
        </div>

        {/* Core Features - emphasized, larger */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {coreFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl bg-card hover-lift transition-all duration-500 flex flex-col h-full"
            >
              {/* Header - fixed height for alignment */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="min-h-[48px] flex flex-col justify-center">
                  <h3 className="font-heading text-xl font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <span className="text-sm text-secondary-purple font-medium h-5">
                    {feature.subtitle || '\u00A0'}
                  </span>
                </div>
              </div>

              {/* Description - fixed height */}
              <p className="text-muted-foreground mb-5 leading-relaxed min-h-[48px]">
                {feature.desc}
              </p>

              {/* Items list - flex-grow to push footer down */}
              <ul className="space-y-2.5 mb-5 flex-grow">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer note - aligned at bottom */}
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-sm text-primary font-medium">
                  {feature.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Features - smaller, less prominent */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {secondaryFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-5 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{feature.desc}</p>
                <p className="text-xs text-primary font-medium">{feature.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;