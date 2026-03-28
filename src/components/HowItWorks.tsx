import ScrollReveal from "./ScrollReveal";
import { CalendarCheck, TestTube, Stethoscope, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: CalendarCheck, title: "Schedule a Consultation", desc: "Book your personalized appointment at any of our four locations." },
  { icon: TestTube, title: "Get Lab Work", desc: "Comprehensive lab testing to understand your unique health profile." },
  { icon: Stethoscope, title: "Get Treatment From Physician", desc: "Your physician designs a treatment plan tailored just for you." },
  { icon: Sparkles, title: "Be Uplifted!", desc: "Experience the transformative results of personalized care." },
];

const HowItWorks = () => (
  <section className="section-padding bg-navy relative overflow-hidden noise-overlay">
    {/* Decorative background elements */}
    <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5"
      style={{ background: `radial-gradient(circle, hsl(var(--gold)), transparent)` }} />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
      style={{ background: `radial-gradient(circle, hsl(var(--gold)), transparent)` }} />

    <div className="container-wide relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-4 justify-center mb-3">
          <div className="w-12 h-px bg-gold/40" />
          <p className="section-label text-gold">Your Journey</p>
          <div className="w-12 h-px bg-gold/40" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center mb-20 !text-warm-white">How It Works</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.12}>
            <div className="group relative p-8 lg:p-6 xl:p-8 text-center border border-warm-white/10 hover:border-gold/30 transition-all duration-500 bg-warm-white/[0.03] backdrop-blur-sm">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy px-4">
                <span className="text-[11px] font-body text-gold tracking-[4px]">0{i + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-gold/20 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                <step.icon className="text-gold relative z-10" size={26} strokeWidth={1.5} />
              </div>

              <h3 className="font-heading text-lg mb-3 !text-warm-white">{step.title}</h3>
              <p className="text-sm font-body text-warm-white/50 leading-relaxed">{step.desc}</p>

              {/* Connector arrow (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 text-gold/30 text-xl">›</div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
