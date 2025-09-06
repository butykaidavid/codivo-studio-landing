import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Process from "@/components/Process";
import TechStackMarquee from "@/components/TechStackMarquee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="szolgaltatasok">
        <Services />
      </div>
      <div id="eredmenyek">
        <Metrics />
      </div>
      <div id="folyamat">
        <Process />
      </div>
      <TechStackMarquee />
      <div id="kerdeses">
        <FAQ />
      </div>
      <div id="kapcsolat">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
