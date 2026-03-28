import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import heroHome from "@/assets/hero-home.jpg";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

const CTASection = ({
  heading = "Ready to Feel Your Best?",
  subheading = "Take the first step toward a healthier, more vibrant life. Book your consultation today.",
}: CTASectionProps) => (
  <section className="relative py-28 md:py-36 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroHome})` }} />
    <div className="absolute inset-0 bg-navy/85" />

    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
      style={{ background: `radial-gradient(circle, hsl(var(--gold)), transparent 70%)` }} />

    <div className="relative container-wide text-center z-10">
      <ScrollReveal>
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold/60" />
          <p className="section-label text-gold">Start Today</p>
          <div className="w-12 h-px bg-gold/60" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl !text-warm-white mb-6 max-w-3xl mx-auto leading-tight">{heading}</h2>
        <p className="font-body text-warm-white/60 text-lg mb-12 max-w-xl mx-auto">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-gold group">
            Book a Consultation
            <motion.span className="inline-block ml-2" whileHover={{ x: 4 }}>→</motion.span>
          </Link>
          <a href="tel:6624911467" className="btn-secondary">Call Us: 662-491-1467</a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
