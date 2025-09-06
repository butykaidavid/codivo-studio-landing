import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const MetricsCounter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

const Metrics = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const metrics = [
    { value: 98, suffix: '/100', label: 'PageSpeed pontszám' },
    { value: 95, suffix: '%', label: 'SEO optimalizálás' },
    { value: 100, suffix: '%', label: 'Mobil kompatibilitás' },
    { value: 1, suffix: 's', label: 'Betöltési sebesség' }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="container max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
            Teljesítmény és optimalizálás
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Minden weboldalunk gyors, SEO optimalizált és mobil-barát
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <MetricsCounter end={metric.value} suffix={metric.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;