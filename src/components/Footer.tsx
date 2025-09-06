const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-gradient-border relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-semibold mb-2">Codivo{`}`} Studio</h3>
            <p className="text-sm text-muted-foreground">Modern webfejlesztési megoldások</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">Impresszum</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Adatkezelés</a>
            <a href="#" className="hover:text-primary transition-colors duration-200">Általános feltételek</a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Codivo{`}`} Studio. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;