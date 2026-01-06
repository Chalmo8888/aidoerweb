import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Video, Share, Cpu } from 'lucide-react';

const ExtendedSection = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: Globe,
      title: t('ext1.title'),
      desc: t('ext1.desc'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Video,
      title: t('ext2.title'),
      desc: t('ext2.desc'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Share,
      title: t('ext3.title'),
      desc: t('ext3.desc'),
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Extended Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('extended.title')}</span>
          </h2>
        </div>

        {/* Engine badge */}
        <p className="text-center text-sm text-muted-foreground mb-12">
          {t('extended.engine')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group glass-strong rounded-2xl p-8 text-center hover-lift relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <cap.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedSection;