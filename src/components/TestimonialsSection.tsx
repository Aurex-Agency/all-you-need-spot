import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    title: "Changed my Life",
    text: "Uplift Medical has changed my life! I've been working with them for the last 2 months and have already seen incredible results in my overall health. They have an amazing, knowledgeable staff that is available and so helpful.",
    author: "Nathan Godfrey",
    role: "TRT Patient",
  },
  {
    title: "GREAT JOB Uplift",
    text: "Great service and great communication from Mandi! Women or Men if you need to change yourself physically or even mentally this is the place. GREAT JOB Uplift!",
    author: "Mack Williams",
    role: "Wellness Patient",
  },
  {
    title: "110% Recommend",
    text: "Uplift Medical has helped me so much! They have an incredible and trustworthy staff. I've been with them for a while now and have seen amazing changes in not only the way I look but my health as well. 110% recommend them if you want to get your health in check!",
    author: "Antonio Nixon",
    role: "Hormone Therapy Patient",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Asymmetric background accent */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-warm-gray hidden lg:block" />

    <div className="container-wide relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-gold/40" />
          <p className="section-label">Testimonials</p>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">What Our Patients Say</h2>
        <p className="font-body text-muted-foreground mb-16 max-w-lg">Real stories from real patients who transformed their lives through personalized care.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 0.15}>
            <div className={`relative group p-8 md:p-10 transition-all duration-500 hover:shadow-[var(--shadow-dramatic)] ${
              i === 1 ? 'bg-navy text-warm-white md:-mt-6 md:mb-6' : 'bg-warm-white border border-border hover:border-gold/30'
            }`}>
              {/* Quote icon */}
              <Quote
                size={40}
                className={`mb-6 ${i === 1 ? 'text-gold/40' : 'text-gold/20'}`}
                strokeWidth={1}
              />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className={`fill-gold text-gold`} />
                ))}
              </div>

              <h3 className={`font-heading text-lg mb-4 ${i === 1 ? '!text-warm-white' : ''}`}>{t.title}</h3>
              <p className={`text-sm font-body leading-relaxed mb-8 ${
                i === 1 ? 'text-warm-white/70' : 'text-muted-foreground'
              }`}>{t.text}</p>

              {/* Author */}
              <div className={`pt-6 border-t ${i === 1 ? 'border-warm-white/10' : 'border-border'}`}>
                <p className={`text-sm font-body font-semibold ${i === 1 ? '!text-warm-white' : 'text-navy'}`}>{t.author}</p>
                <p className={`text-xs font-body mt-1 ${i === 1 ? 'text-gold' : 'text-muted-foreground'}`}>{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
