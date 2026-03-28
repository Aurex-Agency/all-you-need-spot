import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does Uplift Medical offer?", a: "We offer a comprehensive range of wellness services including hormone replacement therapy (for both men and women), IV therapy, peptide therapy, progesterone & estrogen therapy, and fitness/dietary/weight loss consultations. All services are personalized to your unique health needs." },
  { q: "How do I know if hormone therapy is right for me?", a: "The best way to find out is through a consultation and comprehensive lab work. Our physicians will evaluate your hormone levels, discuss your symptoms, and determine if hormone therapy could benefit you. Common signs include fatigue, brain fog, low libido, and mood changes." },
  { q: "Do you offer treatment for both men and women?", a: "Absolutely. We specialize in hormone replacement therapy for both men and women. Our treatments are tailored to address the unique hormonal needs of each gender." },
  { q: "What are the benefits of IV therapy?", a: "IV therapy provides direct nutrient delivery for maximum absorption, boosted energy levels, immune system support, enhanced hydration, detoxification, and quick symptom relief. It's ideal for anyone looking to optimize their wellness." },
  { q: "How long does it take to see results?", a: "Results vary by treatment and individual. Some patients notice improvements within the first few weeks, while optimal results from hormone therapy typically develop over 2-3 months as your body adjusts to balanced hormone levels." },
  { q: "What regions of the state do you reach?", a: "We serve patients across Mississippi and Tennessee with four convenient locations in Tupelo, Oxford, Southaven, and Memphis. We welcome patients from surrounding areas as well." },
  { q: "How do I get started?", a: "Getting started is easy — simply book a consultation through our website or call us at 662-491-1467. We'll schedule your initial visit, perform comprehensive lab work, and create a personalized treatment plan." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-wide max-w-3xl">
      <ScrollReveal>
        <p className="section-label text-center mb-3">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Frequently Asked Questions</h2>
      </ScrollReveal>

      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border px-6 data-[state=open]:border-gold/30">
              <AccordionTrigger className="font-body text-sm md:text-base text-left py-5 hover:text-gold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
