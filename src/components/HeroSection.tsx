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
    { action: language === 'zh' ? 'AI 正在打开目标网站' : 'AI is navigating to the website', status: 'done' },
    { action: language === 'zh' ? 'AI 正在填写表单内容' : 'AI is filling in the form', status: 'current' },
    { action: language === 'zh' ? 'AI 正在完成操作' : 'AI is completing the action', status: 'pending' },
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            {/* Task Status Panel - positioned below/beside demo */}
            <div className="mt-6 p-4 rounded-xl border border-white/10 backdrop-blur-sm" style={{
              background: 'linear-gradient(180deg, hsl(220 20% 15% / 0.9) 0%, hsl(220 25% 10% / 0.9) 100%)'
            }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-ai status-pulse" />
                <span className="text-sm font-mono text-ai">
                  {language === 'zh' ? '任务状态: 执行中' : 'Task status: Running'}
                </span>
              </div>

              <div className="space-y-2.5">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {index < currentStep ? (
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                    ) : index === currentStep ? (
                      <div className="w-5 h-5 rounded-full bg-ai/20 flex items-center justify-center">
                        <Loader2 className="w-3 h-3 text-ai animate-spin" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-white/20" />
                    )}
                    <span className={`text-sm font-mono ${
                      index < currentStep ? 'text-white/50' : 
                      index === currentStep ? 'text-ai' : 'text-white/30'
                    }`}>
                      {step.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;