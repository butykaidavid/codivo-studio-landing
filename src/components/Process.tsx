import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Konzultáció',
      description: 'Megismerjük az igényeket és célokat, közösen kialakítjuk a projektet.'
    },
    {
      icon: Palette,
      title: 'Tervezés',
      description: 'Kialakítjuk a felhasználói élményt és vizuális identitást.'
    },
    {
      icon: Code,
      title: 'Fejlesztés',
      description: 'Modern technológiákkal valósítjuk meg a teljes megoldást.'
    },
    {
      icon: Rocket,
      title: 'Indítás',
      description: 'Élesítjük a projektet és biztosítjuk a folyamatos támogatást.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="container max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
            Hogyan dolgozunk
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Egyszerű, átlátható folyamat az ötlettől a megvalósításig
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`relative text-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/20 transition-all duration-700 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;