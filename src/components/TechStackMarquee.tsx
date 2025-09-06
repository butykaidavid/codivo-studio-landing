const TechStackMarquee = () => {
  const technologies = [
    'HTML5', 'CSS3 / SCSS', 'JavaScript', 'Next.js', 'Tailwind CSS',
    'React & React Hooks', 'Node.js', 'REST API / GraphQL', 'FontAwesome', 'Git',
    'TypeScript', 'Axios / Fetch API', 'Heroicons', 'Framer Motion'
  ];

  return (
    <section className="py-16 bg-background border-t border-border/50 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-light text-center text-muted-foreground">
          Technológiák, amikkel dolgozunk
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-6 py-3 bg-card/30 border border-border/30 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
        
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default TechStackMarquee;