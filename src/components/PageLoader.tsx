import { useState, useEffect } from 'react';

interface PageLoaderProps {
  onLoadComplete: () => void;
}

const PageLoader = ({ onLoadComplete }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500); // Hagyunk egy kis időt az animáció befejezésére
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full animate-pulse-glow" />
          <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-primary/30 rounded-full animate-rotate-slow" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-display font-light text-foreground flex justify-center items-baseline overflow-hidden h-8">
            <span className="block animate-reveal-open-left text-accent">
              {'{'}
            </span>
            <span className="block opacity-0 animate-reveal-text">
              Codivo
            </span>
            <span className="block animate-reveal-open-right text-accent">
              {'}'}
            </span>
            <span className="block opacity-0 animate-reveal-studio ml-3">
              {`Studio`}
            </span>
          </h2>
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

