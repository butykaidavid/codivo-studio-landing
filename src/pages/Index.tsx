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
      <Hero />
      <Services />
      <Metrics />
      <Process />
      <TechStackMarquee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
