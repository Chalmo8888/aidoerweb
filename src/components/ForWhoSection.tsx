import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Users, Star } from 'lucide-react';

const ForWhoSection = () => {
  const { t } = useLanguage();

  const items = [
    t('forwho.item1'),
    t('forwho.item2'),
    t('forwho.item3'),
    t('forwho.item4'),
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-muted-foreground">Perfect For</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t('forwho.title')}
            </h2>
            <p className="text-xl text-gradient font-semibold">
              {t('forwho.subtitle')}
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/10 to-transparent rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-lg text-muted-foreground flex-1">{t('forwho.desc')}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card/50 hover:bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-border/50 text-center">
                <p className="text-2xl font-heading font-bold text-gradient inline-flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  {t('forwho.think')}
                  <Star className="w-6 h-6 text-yellow-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;