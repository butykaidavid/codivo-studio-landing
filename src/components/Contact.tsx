import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kapcsolat
          </h2>
          <p className="text-xl text-muted-foreground">
            Készen állunk az együttműködésre. Vedd fel velünk a kapcsolatot!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                hello@codivo.hu
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Weboldal</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                www.codivo.hu
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:scale-105 transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Konzultáció</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Ingyenes ajánlatkérés
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="group">
            Írj nekünk
            <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;