import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import heroHome from "@/assets/hero-home.jpg";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

const CTASection = ({
  heading = "Ready to Feel Your Best?",
  subheading = "Take the first step toward a healthier, more vibrant life. Book your consultation today.",
}: CTASectionProps) => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroHome})` }} />
    <div className="absolute inset-0 bg-navy/80" />
    <div className="relative container-wide text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-white mb-6">{heading}</h2>
        <p className="font-body text-warm-white/70 text-lg mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Book a Consultation</Link>
          <a href="tel:6624911467" className="btn-secondary">Call Us: 662-491-1467</a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
