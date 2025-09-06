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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className={`
        transition-all duration-700 ease-out pointer-events-auto
        ${isScrolled && !isMobileMenuOpen ? 'pt-2' : 'pt-0'}
      `}>
        <nav
          className={`
            transition-all duration-700 ease-out mx-auto
            ${
              isMobileMenuOpen
                ? 'w-full rounded-2xl bg-card/95 backdrop-blur-xl container'
                : isScrolled
                ? 'max-w-fit rounded-full bg-secondary/90 backdrop-blur-xl border border-border/50 shadow-lg'
                : 'w-full bg-card/50 backdrop-blur-xl'
            }
          `}
        >
          <div className={`
            flex items-center justify-between px-4 py-2
            ${isScrolled && !isMobileMenuOpen ? 'gap-8' : 'container mx-auto'}
          `}>
            {/* Logo */}
            <a href="#top" onClick={(e) => handleLinkClick(e, 'root')} className="flex items-center space-x-2 pl-2">
              <span className="text-xl font-light font-display">
                Codivo<span className="text-accent">{'}'}</span> Studio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
               <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                <a href="#szolgaltatasok" onClick={(e) => handleLinkClick(e, 'szolgaltatasok')}>Szolgáltatások</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                <a href="#eredmenyek" onClick={(e) => handleLinkClick(e, 'eredmenyek')}>Eredmények</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                <a href="#folyamat" onClick={(e) => handleLinkClick(e, 'folyamat')}>Folyamat</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                <a href="#kerdeses" onClick={(e) => handleLinkClick(e, 'kerdeses')}>GYIK</a>
              </Button>
              <Button size="sm" asChild>
                <a href="#kapcsolat" onClick={(e) => handleLinkClick(e, 'kapcsolat')}>
                  <Mail className="h-4 w-4 mr-2" />
                  Kapcsolat
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-4 pb-4 pt-2 border-t border-border/50">
              <div className="flex flex-col items-start space-y-2">
                 <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                    <a href="#szolgaltatasok" onClick={(e) => handleLinkClick(e, 'szolgaltatasok')}>Szolgáltatások</a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                    <a href="#eredmenyek" onClick={(e) => handleLinkClick(e, 'eredmenyek')}>Eredmények</a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                    <a href="#folyamat" onClick={(e) => handleLinkClick(e, 'folyamat')}>Folyamat</a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                    <a href="#kerdeses" onClick={(e) => handleLinkClick(e, 'kerdeses')}>GYIK</a>
                </Button>
                <Button className="w-full justify-center mt-2" asChild>
                    <a href="#kapcsolat" onClick={(e) => handleLinkClick(e, 'kapcsolat')}>
                        <Mail className="h-4 w-4 mr-2" />
                        Kapcsolat
                    </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

