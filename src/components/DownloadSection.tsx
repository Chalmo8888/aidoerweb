import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Monitor, Smartphone, Shield } from 'lucide-react';
import windowsLogo from '@/assets/windows-logo.png';
import macosLogo from '@/assets/macos-logo.png';

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
                <img src={windowsLogo} alt="Windows" className="w-5 h-5 mr-2" />
                {t('download.windows')}
                <Download className="w-4 h-4 ml-2" />
              </Button>
              
              <Button
                size="lg"
                className="min-w-[200px] h-14 text-base"
                onClick={() => window.open('#', '_blank')}
              >
                <img src={macosLogo} alt="macOS" className="w-5 h-5 mr-2" />
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
