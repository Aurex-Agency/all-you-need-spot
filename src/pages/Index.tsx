import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import heroHome from "@/assets/hero-home.jpg";
import { Link } from "react-router-dom";
import { Droplets, Activity, Heart, Dumbbell, Pill, Syringe, Shield } from "lucide-react";

const services = [
  { icon: Droplets, name: "IV Therapy", desc: "Hydrate, replenish, and revitalize", path: "/ivtherapy", large: true },
  { icon: Activity, name: "Testosterone Therapy for Men", desc: "Restore strength, energy & vitality", path: "/trtmen", large: true },
  { icon: Heart, name: "Testosterone Therapy for Women", desc: "Restore balance, energy & confidence", path: "/trtwomen", large: false },
  { icon: Shield, name: "Progesterone & Estrogen Therapy", desc: "Balance your hormones", path: "/progesteroneestrogen", large: false },
  { icon: Dumbbell, name: "Fitness/Dietary/Weight Loss", desc: "Burn fat, boost energy", path: "/fitnessdietaryweightloss", large: false },
  { icon: Syringe, name: "Peptide Therapy", desc: "Unlock your body's full potential", path: "/peptidetherapy", large: true },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <HeroSection
      image={heroHome}
      title="Uplift Medical"
      subtitle="Concierge Medical Care"
      description="Personalized hormone therapy, weight loss, and wellness — no insurance needed. Serving Mississippi and Tennessee."
      showCTAs
    />

    {/* Welcome */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-label mb-3">Welcome to</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Uplift Medical</h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Welcome to Uplift Medical, where we specialize in transforming lives through personalized medical care. We offer concierge hormone therapy services including Tupelo, Oxford, Southaven and Memphis. Bringing expert medical care directly to you, from hormone replacement to comprehensive wellness programs.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {["Tupelo", "Oxford", "Southaven", "Memphis"].map((city) => (
                <span key={city} className="text-sm font-body text-navy flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {city}
                </span>
              ))}
            </div>
            <Link to="/about" className="btn-primary">Learn More</Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <img
                src={heroHome}
                alt="Uplift Medical wellness"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Types of Therapy</h2>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl">
            From hormone replacement to IV therapy, weight management, and beyond — every treatment is tailored to your unique needs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.path} delay={i * 0.08} className={s.large && i < 2 ? "md:col-span-1 lg:row-span-1" : ""}>
              <Link
                to={s.path}
                className="group block border border-border bg-warm-white p-8 hover:border-gold/40 transition-all duration-300 h-full"
              >
                <s.icon className="text-gold mb-5" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-lg mb-2 group-hover:text-gold transition-colors">{s.name}</h3>
                <p className="text-sm font-body text-muted-foreground mb-4">{s.desc}</p>
                <span className="text-sm font-body text-navy group-hover:text-gold transition-colors">
                  Learn More &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <HowItWorks />

    {/* Benefits */}
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Why Uplift</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Benefits</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Bioidentical TRT", desc: "Natural hormone optimization for energy, vitality, and overall wellness." },
            { title: "Optimized Health", desc: "Comprehensive blood work and sleep analysis for peak performance." },
            { title: "Personalized Care", desc: "Every treatment plan is uniquely designed for your body and goals." },
            { title: "No Insurance Hassle", desc: "Concierge pricing — transparent, straightforward, and insurance-free." },
          ].map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="border-t-2 border-gold/30 pt-6">
                <h3 className="font-heading text-lg mb-2">{b.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-warm-gray" />
      <div className="relative container-wide text-center max-w-xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Stay Connected with Uplift Medical</h2>
          <p className="font-body text-muted-foreground mb-8">
            Join our community for wellness insights, health tips, and exclusive updates.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors"
            />
            <button type="submit" className="btn-primary text-xs px-6">Subscribe</button>
          </form>
        </ScrollReveal>
      </div>
    </section>

    <TestimonialsSection />
    <FAQSection />
    <ContactForm />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
