import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  // EZ A SOR A JAVÍTÁS
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "glass-effect backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold font-display text-foreground">
              {"Codivo} Studio"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("szolgaltatasok")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Szolgáltatások
            </button>
            <button onClick={() => scrollToSection("eredmenyek")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Eredmények
            </button>
            <button onClick={() => scrollToSection("folyamat")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Folyamat
            </button>
            <button onClick={() => scrollToSection("kerdeses")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              GYIK
            </button>
            <Button onClick={() => scrollToSection("kapcsolat")} className="bg-primary hover:bg-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              Kapcsolat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection("szolgaltatasok")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Szolgáltatások
              </button>
              <button onClick={() => scrollToSection("eredmenyek")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Eredmények
              </button>
              <button onClick={() => scrollToSection("folyamat")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Folyamat
              </button>
              <button onClick={() => scrollToSection("kerdeses")} className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                GYIK
              </button>
              <Button onClick={() => scrollToSection("kapcsolat")} className="w-full justify-center bg-primary hover:bg-primary/90 mt-4">
                <Mail className="h-4 w-4 mr-2" />
                Kapcsolat
              </Button>
            </div>
          </div>}
      </nav>
    </header>
  );
};

export default Navigation;