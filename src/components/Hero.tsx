import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import codivoLogo from "@/assets/codivo-logo.png";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={codivoLogo} 
            alt="Codivo Studio Logo" 
            className="mx-auto w-64 h-32 object-contain animate-pulse-glow"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Codivo Studio
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Modern weboldal fejlesztés és digitális megoldások
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Egyedi weboldalak, responsive design és korszerű technológiák. 
          Professzionális megjelenés a digitális térben.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="group">
            Projektet kezdünk
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Portfólió megtekintése
          </Button>
        </div>

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