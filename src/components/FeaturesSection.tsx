import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Repeat, Layers, Brain, Check } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: MessageSquare,
      title: t('feature1.title'),
      desc: t('feature1.desc'),
      items: [t('feature1.item1'), t('feature1.item2'), t('feature1.item3')],
      note: t('feature1.best'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Repeat,
      title: t('feature2.title'),
      subtitle: t('feature2.subtitle'),
      desc: t('feature2.desc'),
      items: [t('feature2.item1'), t('feature2.item2'), t('feature2.item3')],
      note: t('feature2.note'),
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Layers,
      title: t('feature3.title'),
      desc: t('feature3.desc'),
      items: [t('feature3.item1'), t('feature3.item2'), t('feature3.item3'), t('feature3.item4')],
      note: t('feature3.note'),
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Brain,
      title: t('feature4.title'),
      desc: t('feature4.desc'),
      items: [t('feature4.item1'), t('feature4.item2'), t('feature4.item3')],
      note: t('feature4.note'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold title-decorated">
            <span className="text-gradient">{t('features.title')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-lg p-6 hover-lift relative overflow-hidden border border-secondary-blue/20 hover:border-primary/30 shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon with circular background */}
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Subtle ring */}
                    <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-sm`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <span className="text-sm text-secondary-purple font-medium">{feature.subtitle}</span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 text-sm leading-relaxed" style={{ lineHeight: '1.5' }}>
                  {feature.desc}
                </p>

                <ul className="space-y-3 mb-5">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-primary font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;