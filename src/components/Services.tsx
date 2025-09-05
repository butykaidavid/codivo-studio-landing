import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Search, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Weboldal Fejlesztés",
      description: "Responsive, modern weboldalak React, TypeScript és egyéb korszerű technológiákkal.",
      features: ["Responsive design", "Gyors betöltés", "SEO optimalizált"]
    },
    {
      icon: Smartphone,
      title: "Mobilbarát Megoldások",
      description: "Minden eszközön tökéletesen működő felületek és alkalmazások.",
      features: ["Mobile-first", "Touch-friendly", "Progresszív webapp"]
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Keresőoptimalizálás és online marketing támogatás a jobb láthatóságért.",
      features: ["On-page SEO", "Teljesítmény növelés", "Analitika"]
    },
    {
      icon: Settings,
      title: "Karbantartás & Támogatás",
      description: "Folyamatos technikai támogatás és rendszeres frissítések.",
      features: ["24/7 monitoring", "Biztonsági frissítések", "Backup szolgáltatás"]
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display bg-gradient-primary bg-clip-text text-transparent">
            Szolgáltatásaink
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Komplex digitális megoldások minden igényre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-500 glass-effect hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-primary p-0.5">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="font-light leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;