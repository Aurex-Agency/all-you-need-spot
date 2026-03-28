import ScrollReveal from "./ScrollReveal";
import { CalendarCheck, TestTube, Stethoscope, Sparkles } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Schedule a Consultation", desc: "Book your personalized appointment at any of our four locations." },
  { icon: TestTube, title: "Get Lab Work", desc: "Comprehensive lab testing to understand your unique health profile." },
  { icon: Stethoscope, title: "Get Treatment From Physician", desc: "Your physician designs a treatment plan tailored just for you." },
  { icon: Sparkles, title: "Be Uplifted!", desc: "Experience the transformative results of personalized care." },
];

const HowItWorks = () => (
  <section className="section-padding bg-warm-gray">
    <div className="container-wide">
      <ScrollReveal>
        <p className="section-label text-center mb-3">Your Journey</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">How It Works</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gold/30" />

        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.1}>
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto mb-6 border border-gold/30 flex items-center justify-center bg-warm-white relative z-10">
                <step.icon className="text-gold" size={28} strokeWidth={1.5} />
              </div>
              <p className="text-xs font-body text-gold/60 mb-2 tracking-widest">0{i + 1}</p>
              <h3 className="font-heading text-lg mb-2">{step.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
