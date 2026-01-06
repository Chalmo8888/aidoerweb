import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
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
  return <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[600px] h-[600px] bg-primary/10 -top-40 -right-40" />
        <div className="blob blob-2 absolute w-[500px] h-[500px] bg-accent/10 -bottom-20 -left-40" />
        <div className="blob blob-3 absolute w-[400px] h-[400px] bg-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: 'var(--gradient-glow)'
    }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            

            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <span className="text-gradient">{t('hero.title.1')}</span>
              <br />
              <span className="text-foreground">{t('hero.title.2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <Button size="lg" className="group bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-glow-lg px-8 h-14 text-base" onClick={scrollToWaitlist}>
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
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            </div>
            
            {/* Main illustration */}
            <div className="relative float">
              <img src={heroIllustration} alt="AI Automation Illustration" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 glass-strong p-3 rounded-xl float" style={{
            animationDelay: '1s'
          }}>
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            
            <div className="absolute bottom-20 left-5 glass-strong p-3 rounded-xl float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-medium text-foreground">Processing...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;