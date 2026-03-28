import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Changed my Life",
    text: "Uplift Medical has changed my life! I've been working with them for the last 2 months and have already seen incredible results in my overall health. They have an amazing, knowledgeable staff that is available and so helpful.",
    author: "Nathan Godfrey",
  },
  {
    title: "GREAT JOB Uplift",
    text: "Great service and great communication from Mandi! Women or Men if you need to change yourself physically or even mentally this is the place. GREAT JOB Uplift!",
    author: "Mack Williams",
  },
  {
    title: "110% Recommend",
    text: "Uplift Medical has helped me so much! They have an incredible and trustworthy staff. I've been with them for a while now and have seen amazing changes in not only the way I look but my health as well. 110% recommend them if you want to get your health in check!",
    author: "Antonio Nixon",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-warm-gray">
    <div className="container-wide">
      <ScrollReveal>
        <p className="section-label text-center mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">What Our Patients Say</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 0.15}>
            <div className="bg-warm-white p-8 md:p-10 border border-border relative">
              <span className="absolute -top-4 left-8 font-heading text-6xl text-gold/20 leading-none">&ldquo;</span>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <h3 className="font-heading text-lg mb-3">{t.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <p className="text-sm font-body font-medium text-navy">{t.author}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
