import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    t('cta.benefit1'),
    t('cta.benefit2'),
    t('cta.benefit3'),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success(t('email.success'));
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('cta.desc')}
          </p>

          <p className="text-lg font-medium mb-6">{t('cta.benefits')}</p>

          <div className="flex flex-col items-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email.placeholder')}
              className="flex-1 h-14 px-6 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <Button type="submit" variant="hero" size="xl" className="group">
              {t('cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            {t('cta.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
