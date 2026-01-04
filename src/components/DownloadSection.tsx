import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Monitor, Smartphone, Shield } from 'lucide-react';

const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t('download.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('download.subtitle')}
            </p>
          </div>

          {/* Desktop Downloads - Primary */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Monitor className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {t('download.desktop')}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="min-w-[200px] h-14 text-base"
                onClick={() => window.open('#', '_blank')}
              >
                {/* Windows icon - 4 panel grid */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.557L10.455 4.5v6.727H3V5.557zm0 12.886l7.455 1.057V12.773H3v5.67zM11.545 4.336L21 3v8.227h-9.455V4.336zm0 15.328L21 21v-8.227h-9.455v6.891z"/>
                </svg>
                {t('download.windows')}
                <Download className="w-4 h-4 ml-2" />
              </Button>
              
              <Button
                size="lg"
                className="min-w-[200px] h-14 text-base"
                onClick={() => window.open('#', '_blank')}
              >
                {/* Apple icon */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('download.mac')}
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-border flex-1 max-w-[120px]" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              {t('download.or')}
            </span>
            <div className="h-px bg-border flex-1 max-w-[120px]" />
          </div>

          {/* Mobile Download - Secondary */}
          <div className="flex justify-center">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm max-w-xs text-center">
              {/* Card Header */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="font-medium">{t('download.mobileApp')}</span>
              </div>
              
              {/* QR Code Frame */}
              <div className="bg-white p-4 rounded-xl mb-4 inline-block">
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  {/* QR Code - black on white */}
                  <div className="grid grid-cols-7 gap-[3px] p-1">
                    {/* Simplified QR pattern for visual representation */}
                    {[
                      1,1,1,0,1,1,1,
                      1,0,1,1,1,0,1,
                      1,1,1,0,1,1,1,
                      0,0,0,1,0,0,0,
                      1,1,1,0,1,0,1,
                      1,0,1,1,0,1,0,
                      1,1,1,0,1,1,1,
                    ].map((filled, i) => (
                      <div
                        key={i}
                        className={`w-[14px] h-[14px] rounded-sm ${
                          filled ? 'bg-foreground' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Scan instruction */}
              <p className="text-sm text-muted-foreground mb-3">
                {t('download.scanToDownload')}
              </p>
              
              {/* Trust statement */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70">
                <Shield className="w-3 h-3" />
                <span>{t('download.officialOnly')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
