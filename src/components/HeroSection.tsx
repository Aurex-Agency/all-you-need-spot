import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  showCTAs?: boolean;
  compact?: boolean;
}

const HeroSection = ({ image, title, subtitle, description, showCTAs = false, compact = false }: HeroSectionProps) => (
  <section className={`relative ${compact ? "h-[55vh] min-h-[400px]" : "h-screen min-h-[600px]"} flex items-center overflow-hidden`}>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" />

    <div className="relative container-wide z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-label text-gold mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6">
          {title}
        </h1>
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-warm-white/80 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            {description}
          </motion.p>
        )}
        {showCTAs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-gold">Book a Consultation</Link>
            <a href="tel:6624911467" className="btn-secondary">Call Us: 662-491-1467</a>
          </motion.div>
        )}
      </motion.div>
    </div>

    {!compact && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-warm-white/40 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    )}
  </section>
);

export default HeroSection;
