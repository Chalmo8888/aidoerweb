import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Target, Shield, DollarSign, Eye, Check, Laptop } from 'lucide-react';

const LocalSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Target, text: t('local.item1'), gradient: 'from-blue-500 to-indigo-600' },
    { icon: Shield, text: t('local.item2'), gradient: 'from-emerald-500 to-teal-600' },
    { icon: DollarSign, text: t('local.item3'), gradient: 'from-amber-500 to-orange-600' },
    { icon: Eye, text: t('local.item4'), gradient: 'from-violet-500 to-purple-600' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Laptop className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Local First</span>
            </div>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-primary mb-8 shadow-glow-lg float">
              <Monitor className="w-12 h-12 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('local.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('local.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group glass-strong rounded-2xl p-6 text-center hover-lift"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            
            <div className="relative z-10 flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-xl md:text-2xl font-heading font-bold text-gradient">
                {t('local.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection;