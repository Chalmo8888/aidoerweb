import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const steps = [
    { action: language === 'zh' ? 'AI 正在理解你的请求' : 'AI is understanding your request', status: 'done' },
    { action: language === 'zh' ? 'AI 正在导航到目标网站' : 'AI is navigating to the website', status: 'done' },
    { action: language === 'zh' ? 'AI 正在填写表单内容' : 'AI is filling out the form', status: 'current' },
    { action: language === 'zh' ? 'AI 正在提交并确认完成' : 'AI is submitting and confirming', status: 'pending' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTyping(true);
    const timeout = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timeout);
  }, [currentStep]);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-hero">
      {/* Flowing lines background */}
      <div className="absolute inset-0 flowing-lines opacity-50" />
      
      {/* Particle dots overlay */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      {/* Gradient glow from top */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 70% at 50% -10%, hsl(217 100% 55% / 0.15), transparent 60%)'
      }} />
      
      {/* AI accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20" 
        style={{ background: 'hsl(185 100% 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-foreground">{t('hero.title.1')}</span>
              <br />
              <span className="text-muted-foreground/80">{t('hero.title.2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:opacity-90 transition-all duration-500 shadow-glow-ai hover:shadow-glow-lg px-10 h-14 text-base rounded-xl border border-primary-glow/30" 
                onClick={scrollToWaitlist}
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground/50 mt-6">
              {t('hero.cta.sub')}
            </p>
          </div>

          {/* Right: AI Execution Demo */}
          <div className="relative">
            {/* Browser window mock */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{
              background: 'linear-gradient(180deg, hsl(220 20% 18%) 0%, hsl(220 25% 12%) 100%)',
              border: '1px solid hsl(220 20% 25%)'
            }}>
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-md px-3 py-1.5 text-xs text-white/50 font-mono">
                    linkedin.com/feed
                  </div>
                </div>
              </div>

              {/* Browser content - simulated webpage */}
              <div className="p-6 min-h-[320px] relative">
                {/* Simulated webpage elements */}
                <div className="space-y-4">
                  {/* Header area */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/30" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-32 bg-white/20 rounded" />
                      <div className="h-2 w-20 bg-white/10 rounded" />
                    </div>
                  </div>

                  {/* Post input area - highlighted */}
                  <div className={`relative p-4 rounded-lg transition-all duration-500 ${
                    currentStep === 2 ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-white/5'
                  }`}>
                    <div className="h-3 w-24 bg-white/15 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2.5 w-full bg-white/10 rounded" />
                      <div className="h-2.5 w-3/4 bg-white/10 rounded" />
                      {isTyping && currentStep === 2 && (
                        <span className="inline-block w-0.5 h-4 bg-primary animate-blink" />
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <div className="h-8 w-20 bg-white/5 rounded-md" />
                    <div className={`h-8 w-24 rounded-md transition-all duration-500 ${
                      currentStep === 3 ? 'bg-primary/40 ring-2 ring-primary/50' : 'bg-white/5'
                    }`} />
                  </div>
                </div>

                {/* AI Cursor */}
                <div 
                  className="absolute w-5 h-5 pointer-events-none z-20 animate-cursor-move"
                  style={{ top: '40%', left: '30%' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-lg">
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-5.02h7.3c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 0 0-.85.35z" 
                      fill="hsl(185 100% 50%)" stroke="white" strokeWidth="1.5"/>
                  </svg>
                  {/* Click ripple effect */}
                  <div className="absolute inset-0 -m-2 rounded-full bg-ai/30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>

                {/* Highlight box when interacting */}
                {currentStep === 2 && (
                  <div className="absolute top-[45%] left-[10%] right-[10%] h-24 border-2 border-primary/60 rounded-lg pointer-events-none animate-pulse" 
                    style={{ animationDuration: '2s' }} />
                )}
              </div>
            </div>

            {/* Task Status Panel - PROMINENT second visual focus */}
            <div className="mt-8 p-6 rounded-2xl border-2 border-ai/30 backdrop-blur-md relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, hsl(220 25% 12% / 0.95) 0%, hsl(220 30% 8% / 0.98) 100%)',
              boxShadow: '0 0 40px hsl(185 100% 50% / 0.15), inset 0 1px 0 hsl(185 100% 50% / 0.1)'
            }}>
              {/* Ambient glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-ai/20 blur-3xl" />
              
              {/* Header with strong presence */}
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-ai" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-ai animate-ping opacity-75" />
                </div>
                <span className="text-lg font-semibold text-ai tracking-wide">
                  {language === 'zh' ? 'AI 正在工作' : 'AI is working'}
                </span>
              </div>

              {/* Steps with enhanced visibility */}
              <div className="space-y-4 relative">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${
                      index === currentStep 
                        ? 'bg-ai/10 border border-ai/30' 
                        : index < currentStep 
                          ? 'opacity-60' 
                          : 'opacity-40'
                    }`}
                  >
                    {index < currentStep ? (
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                    ) : index === currentStep ? (
                      <div className="w-7 h-7 rounded-full bg-ai/20 flex items-center justify-center flex-shrink-0 border border-ai/50 relative">
                        <Loader2 className="w-4 h-4 text-ai animate-spin" />
                        {/* Breathing glow */}
                        <div className="absolute inset-0 rounded-full bg-ai/30 animate-pulse" style={{ animationDuration: '1.5s' }} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full border border-white/15 flex-shrink-0" />
                    )}
                    <span className={`text-base leading-relaxed transition-all duration-300 ${
                      index < currentStep 
                        ? 'text-white/50' 
                        : index === currentStep 
                          ? 'text-white font-medium' 
                          : 'text-white/30'
                    }`}>
                      {step.action}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">{language === 'zh' ? '执行进度' : 'Execution progress'}</span>
                  <span className="text-ai font-mono">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-ai to-primary rounded-full transition-all duration-700"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;