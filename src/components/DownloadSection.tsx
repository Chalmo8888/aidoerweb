import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Monitor, Apple, Smartphone, Sparkles } from 'lucide-react';

const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{t('download.badge')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t('download.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('download.desc')}
          </p>
        </div>

        {/* PC Download - Windows & Mac */}
        <div className="hidden md:flex flex-col items-center mb-16">
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
            {t('download.desktop')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group min-w-[200px]">
              <Monitor className="w-5 h-5 mr-2" />
              {t('download.windows')}
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group min-w-[200px] border-primary/50 hover:bg-primary/10">
              <Apple className="w-5 h-5 mr-2" />
              {t('download.mac')}
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Mobile Download - QR Code */}
        <div className="flex flex-col items-center">
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
            {t('download.mobile')}
          </h3>
          <div className="glass rounded-2xl p-8 gradient-border text-center max-w-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="font-medium">{t('download.android')}</span>
            </div>
            {/* QR Code placeholder */}
            <div className="w-48 h-48 mx-auto bg-white rounded-xl flex items-center justify-center mb-4">
              <div className="w-40 h-40 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-sm ${
                          [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24].includes(i)
                            ? 'bg-foreground'
                            : 'bg-background'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('download.scan')}
            </p>
          </div>

          {/* Mobile: Show download buttons */}
          <div className="md:hidden flex flex-col gap-4 mt-8 w-full max-w-sm">
            <h3 className="font-heading text-xl font-semibold text-center">
              {t('download.desktop')}
            </h3>
            <Button variant="hero" size="lg" className="group w-full">
              <Monitor className="w-5 h-5 mr-2" />
              {t('download.windows')}
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group w-full border-primary/50 hover:bg-primary/10">
              <Apple className="w-5 h-5 mr-2" />
              {t('download.mac')}
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
