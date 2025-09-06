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
      question: 'Milyen szolgáltatásokat nyújtanak?',
      answer: 'Teljes körű webfejlesztési szolgáltatásokat nyújtunk, ezen belül elsősorban a modern, one-page stílusú weboldalakat részesítjük előnyben, de egyedi kérésre maximum 3 aloldalas oldalakat is készítünk.'
    },
    {
      question: 'Miért és mi az a one-page stílus?',
      answer: 'Csak nézzen rá a mi weboldalunkra, de ezt már megtette. Egy rövid, letisztult weboldal gyorsan megragadja a látogatód figyelmét, és egyértelműen kommunikálja az üzenetedet. Nem kell hosszú menüket böngészni, minden fontos információ egy helyen elérhető. Ez nem csak a felhasználói élményt növeli, hanem a konverzió esélyét is, hiszen a látogatók gyorsan megtalálják, amit keresnek. Ráadásul a kisebb weboldalak gyorsabban elkészíthetők, könnyebben karbantarthatók, így időt és pénzt takarítasz meg, miközben profi benyomást kelt a digitális térben.'
    },
    {
      question: 'Mennyi idő alatt készül el egy projekt?',
      answer: 'Egy one-page stílusú oldal 1-2 hét alatt elkészül, míg egy 3 aloldalas kiegészített változat 3-4 hetet vehet igénybe. A pontos időkeretet minden projekt esetében egyedileg határozzuk meg.'
    },
    {
      question: 'Milyen árakra számíthatok?',
      answer: 'Áraink 200.000 Ft-tól 500.000 Ft-ig terjednek a projekt komplexitásától függően. Egyéni megbeszélés alapján, ha több mindenre van szükség, nyitottak vagyunk. Minden projektre egyedi árajánlatot készítünk.'
    },
    {
      question: 'Kapok garanciát és karbantartást?',
      answer: 'Igen, minden projektünkhöz teljes körű karbantartást és támogatást biztosítunk. Ez magában foglalja a frissítéseket, biztonsági javításokat és technikai támogatást.'
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