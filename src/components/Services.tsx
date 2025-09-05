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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Szolgáltatásaink
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplex webfejlesztési megoldások egyéni vállalkozásoknak és kis- és középvállalkozásoknak
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary p-0.5">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-primary mr-2" />
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