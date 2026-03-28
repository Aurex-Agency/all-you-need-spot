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
          <p className="section-label mb-3">{sectionLabel}</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-6">{serviceTitle}</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">{serviceDescription}</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Benefits</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Why Choose This Treatment</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.05}>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center text-gold text-sm font-body">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">{b.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{b.desc}</p>
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
