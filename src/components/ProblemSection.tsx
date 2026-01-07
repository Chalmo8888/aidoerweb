import { useLanguage } from '@/contexts/LanguageContext';
import { RotateCcw, ClipboardList, Share2, Copy } from 'lucide-react';

const ProblemSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    { icon: RotateCcw, text: t('problem.item1') },
    { icon: ClipboardList, text: t('problem.item2') },
    { icon: Share2, text: t('problem.item3') },
    { icon: Copy, text: t('problem.item4') },
  ];

  // Extract highlighted text from solution
  const solutionText = t('problem.solution');
  const highlightText = 'high-frequency, standard tasks';
  const highlightTextZh = '你早就知道怎么做、却不得不反复去做的事';

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Strong pain point statement */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>

          {/* Problem items - clean layout with icons + text, no cards */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <problem.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="text-foreground text-lg leading-relaxed pt-1.5">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider mb-16" />

          {/* Soul statement - simple, centered */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed">
              {solutionText.includes(highlightText) ? (
                <>
                  {solutionText.split(highlightText)[0]}
                  <span className="text-highlight-accent">{highlightText}</span>
                  {solutionText.split(highlightText)[1]}
                </>
              ) : solutionText.includes(highlightTextZh) ? (
                <>
                  {solutionText.split(highlightTextZh)[0]}
                  <span className="text-highlight-accent">{highlightTextZh}</span>
                  {solutionText.split(highlightTextZh)[1]}
                </>
              ) : (
                solutionText
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;