import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import BlogPreview from "@/components/BlogPreview";
import ScrollReveal from "@/components/ScrollReveal";
import heroHome from "@/assets/hero-home.jpg";
import { Link } from "react-router-dom";
import { Droplets, Activity, Heart, Dumbbell, Pill, Syringe, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Droplets, name: "IV Therapy", desc: "Hydrate, replenish, and revitalize with targeted nutrient infusions", path: "/ivtherapy" },
  { icon: Activity, name: "Testosterone Therapy for Men", desc: "Restore strength, energy & vitality with bioidentical TRT", path: "/trtmen" },
  { icon: Heart, name: "Testosterone Therapy for Women", desc: "Restore balance, energy & confidence naturally", path: "/trtwomen" },
  { icon: Shield, name: "Progesterone & Estrogen Therapy", desc: "Balance your hormones for optimal wellbeing", path: "/progesteroneestrogen" },
  { icon: Dumbbell, name: "Fitness/Dietary/Weight Loss", desc: "Medical weight management that actually works", path: "/fitnessdietaryweightloss" },
  { icon: Syringe, name: "Peptide Therapy", desc: "Unlock your body's full regenerative potential", path: "/peptidetherapy" },
];

const stats = [
  { value: "4", label: "Locations" },
  { value: "2", label: "States Served" },
  { value: "6+", label: "Treatment Programs" },
  { value: "100%", label: "Personalized Care" },
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

    {/* Welcome - Editorial Asymmetric Layout */}
    <section className="section-padding relative">
      {/* Decorative side accent */}
      <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: `linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.2), transparent)` }} />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gold/40" />
                <p className="section-label">Welcome to</p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Uplift<br />Medical<span className="text-gold">.</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                Where we specialize in transforming lives through personalized medical care. We offer concierge hormone therapy services including Tupelo, Oxford, Southaven and Memphis.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {["Tupelo", "Oxford", "Southaven", "Memphis"].map((city) => (
                  <span key={city} className="text-sm font-body text-navy flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {city}
                  </span>
                ))}
              </div>
              <Link to="/about" className="btn-primary group">
                Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
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
                {/* Overlapping accent frame */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold/20 -z-10" />
                {/* Stats overlay */}
                <div className="absolute -bottom-8 right-4 md:right-8 glass-card p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-heading text-2xl md:text-3xl text-navy">{s.value}</p>
                        <p className="text-[10px] font-body uppercase tracking-[2px] text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Services - Magazine Grid */}
    <section className="section-padding bg-navy relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-px bg-gold/40" />
            <p className="section-label text-gold">Our Services</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl !text-warm-white">Types of Therapy</h2>
            <p className="font-body text-warm-white/50 max-w-md text-sm leading-relaxed">
              Every treatment is tailored to your unique needs — from hormone replacement to IV therapy and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.path} delay={i * 0.08}>
              <Link
                to={s.path}
                className="group block border border-warm-white/10 hover:border-gold/40 bg-warm-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-warm-white/[0.06] h-full relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                      <s.icon className="text-gold" size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-body text-warm-white/20 tracking-[3px]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-heading text-lg mb-3 !text-warm-white group-hover:text-gold transition-colors">{s.name}</h3>
                  <p className="text-sm font-body text-warm-white/50 mb-6 leading-relaxed">{s.desc}</p>
                  <span className="text-sm font-body text-gold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <HowItWorks />

    {/* Benefits - With visual accents */}
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-3">
              <div className="w-12 h-px bg-gold/40" />
              <p className="section-label">Why Uplift</p>
              <div className="w-12 h-px bg-gold/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">The Uplift Difference</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Bioidentical TRT", desc: "Natural hormone optimization for energy, vitality, and overall wellness." },
            { num: "02", title: "Optimized Health", desc: "Comprehensive blood work and sleep analysis for peak performance." },
            { num: "03", title: "Personalized Care", desc: "Every treatment plan is uniquely designed for your body and goals." },
            { num: "04", title: "No Insurance Hassle", desc: "Concierge pricing — transparent, straightforward, and insurance-free." },
          ].map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="group p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[var(--shadow-elevated)] bg-warm-white relative overflow-hidden h-full">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <span className="text-3xl font-heading text-gold/15 block mb-4">{b.num}</span>
                <h3 className="font-heading text-lg mb-3">{b.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter - Dramatic */}
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-warm-gray" />
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-navy hidden lg:block" />

      <div className="relative container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 hidden lg:block">
            <ScrollReveal>
              <p className="font-heading text-6xl xl:text-7xl !text-warm-white leading-none">
                Stay<br />In<br />Touch<span className="text-gold">.</span>
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-warm-white p-10 md:p-14 shadow-[var(--shadow-elevated)] corner-accent">
                <h2 className="font-heading text-2xl md:text-3xl mb-3 lg:hidden">Stay Connected</h2>
                <h2 className="font-heading text-2xl md:text-3xl mb-3 hidden lg:block">Stay Connected with Uplift Medical</h2>
                <p className="font-body text-muted-foreground mb-8 text-sm">
                  Join our community for wellness insights, health tips, and exclusive updates delivered to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border-b-2 border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors"
                  />
                  <button type="submit" className="btn-gold text-xs px-8 whitespace-nowrap">
                    Subscribe →
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <FAQSection />
    <ContactForm />
    <BlogPreview />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
