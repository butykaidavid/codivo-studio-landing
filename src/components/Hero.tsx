import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary/60 rounded-full animate-ping" />
      <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-accent/50 rounded-full animate-bounce" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-display py-[19px] my-0 mx-0 px-0 bg-[size:200%_auto] animate-gradient-pan">
          {"Codivo} Studio"}
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
          Kevesebb kattintás, több hatás.
        </p>

        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          One-page stílus, amely megfogja a látogatód, még mielőtt kattintana.
        </p>

        {/* Feature Icons */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Fejlesztés</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Palette className="h-8 w-8 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground">Design</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Optimalizálás</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

