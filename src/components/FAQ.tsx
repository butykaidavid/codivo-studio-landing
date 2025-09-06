import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const faqs = [
    {
      question: 'Mennyi idő alatt készül el egy weboldal?',
      answer: 'A projekt összetettségétől függően 2-8 hét között változik. Egyszerű bemutatkozó oldalak 2-3 hét alatt, összetettebb webshopok vagy egyedi funkciókkal rendelkező oldalak 6-8 hét alatt készülnek el.'
    },
    {
      question: 'Milyen áron számíthatok?',
      answer: 'Az árak a projekt igényei szerint alakulnak. Egyszerű bemutatkozó oldalak 200.000 Ft-tól, webshopok 500.000 Ft-tól indulnak. Minden projektre egyedi árajánlatot készítünk.'
    },
    {
      question: 'Mobilbarát lesz az oldal?',
      answer: 'Igen, minden általunk készített weboldal teljes mértékben reszponzív, azaz tökéletesen működik asztali gépeken, táblagépeken és mobilokon egyaránt.'
    },
    {
      question: 'Van garancia és támogatás?',
      answer: 'Igen, minden projektre 1 év garanciát vállalunk. Emellett folyamatos technikai támogatást és karbantartási csomagokat is kínálunk.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-muted/20 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      <div className="container max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
            Gyakori kérdések
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A leggyakrabban felmerülő kérdések és válaszaink
          </p>
        </div>

        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl px-6 hover:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary font-display text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;