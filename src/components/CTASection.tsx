import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const CTASection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const benefits = [
    t('cta.benefit1'),
    t('cta.benefit2'),
    t('cta.benefit3'),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t('email.success'));
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('cta.desc')}
          </p>

          <p className="font-medium mb-4">{t('cta.benefits')}</p>

          <div className="flex flex-col items-center gap-2 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email.placeholder')}
              className="flex-1 h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
            <Button type="submit" size="lg" className="group">
              {t('cta.button')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
