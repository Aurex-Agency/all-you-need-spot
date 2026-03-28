import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import BlogPreview from "./BlogPreview";
import CTASection from "./CTASection";
import ScrollReveal from "./ScrollReveal";

interface BenefitItem {
  title: string;
  desc: string;
}

interface ServicePageLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle?: string;
  sectionLabel: string;
  serviceTitle: string;
  serviceDescription: string;
  benefits: BenefitItem[];
  children?: ReactNode;
}

const ServicePageLayout = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  sectionLabel,
  serviceTitle,
  serviceDescription,
  benefits,
  children,
}: ServicePageLayoutProps) => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection image={heroImage} title={heroTitle} subtitle={heroSubtitle} compact />

    {/* Intro */}
    <section className="section-padding">
      <div className="container-wide max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/40" />
            <p className="section-label">{sectionLabel}</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">{serviceTitle}</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">{serviceDescription}</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-navy relative overflow-hidden noise-overlay">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: `radial-gradient(circle, hsl(var(--gold)), transparent)` }} />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-px bg-gold/40" />
            <p className="section-label text-gold">Benefits</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-16 !text-warm-white">Why Choose This Treatment</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.05}>
              <div className="group flex gap-5 p-6 border border-warm-white/10 hover:border-gold/30 bg-warm-white/[0.03] backdrop-blur-sm transition-all duration-500">
                <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center text-gold text-sm font-body group-hover:bg-gold/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2 !text-warm-white">{b.title}</h3>
                  <p className="text-sm font-body text-warm-white/50 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {children}

    <HowItWorks />
    <CTASection />
    <BlogPreview />
    <Footer />
  </div>
);

export default ServicePageLayout;
