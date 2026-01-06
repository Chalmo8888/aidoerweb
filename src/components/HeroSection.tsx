import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mouse } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
import cuaIcon from '@/assets/cua-icon.png';
const HeroSection = () => {
  const {
    t
  } = useLanguage();
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-hero-light">
      {/* Tech grid pattern overlay */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[600px] h-[600px] bg-primary/8 -top-40 -right-40" />
        <div className="blob blob-2 absolute w-[500px] h-[500px] bg-secondary-blue/8 -bottom-20 -left-40" />
        <div className="blob blob-3 absolute w-[400px] h-[400px] bg-secondary-purple/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: 'var(--gradient-glow)'
    }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <span className="text-gradient">{t('hero.title.1')}</span>
              <br />
              <span className="text-foreground">{t('hero.title.2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in tracking-readable" style={{
            animationDelay: '0.2s',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Button size="lg" className="group bg-gradient-primary hover:opacity-95 transition-all duration-300 shadow-glow-blue hover:shadow-glow-lg hover:-translate-y-0.5 px-8 h-14 text-base rounded-lg border border-primary-glow/20" onClick={scrollToWaitlist}>
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              {t('hero.cta.sub')}
            </p>
          </div>

          {/* Right illustration */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-primary/15 rounded-full blur-[100px] animate-pulse-glow" />
            </div>
            
            {/* Main illustration with float and glow effect */}
            <div className="relative animate-float-glow">
              <img src={heroIllustration} alt="AI Automation Illustration" className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl" style={{
              filter: 'drop-shadow(0 0 30px hsl(217 100% 55% / 0.25))'
            }} />
            </div>

            {/* CUA Style Floating Card - AI Control Image with Tech Style */}
            <div className="absolute top-10 right-10 float group" style={{ animationDelay: '1s' }}>
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/20 via-card/95 to-secondary-blue/20 backdrop-blur-md border border-primary/30 shadow-glow-blue overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse opacity-50" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60 rounded-br-lg" />
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono text-primary/80 uppercase tracking-wider">AI Control</span>
                  </div>
                  <img src={cuaIcon} alt="AI Computer Use" className="w-14 h-14 rounded-lg ring-1 ring-primary/20" />
                </div>
              </div>
            </div>
            
            {/* CUA Style Floating Card - Mouse Action */}
            <div className="absolute bottom-20 left-5 bg-card/95 backdrop-blur-md px-3 py-2 rounded-xl float-delayed shadow-lg border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mouse className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground">CUA Active</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <p className="text-xs font-medium text-foreground">Executing...</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;