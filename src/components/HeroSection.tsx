import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  showCTAs?: boolean;
  compact?: boolean;
}

const HeroSection = ({ image, title, subtitle, description, showCTAs = false, compact = false }: HeroSectionProps) => (
  <section className={`relative ${compact ? "h-[55vh] min-h-[400px]" : "h-screen min-h-[700px]"} flex items-center overflow-hidden`}>
    {/* Parallax background image */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </motion.div>

    {/* Multi-layer gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

    {/* Subtle grid pattern overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`,
      backgroundSize: '80px 80px'
    }} />

    {/* Decorative gold line */}
    <motion.div
      className="absolute left-12 top-0 bottom-0 w-px hidden lg:block"
      style={{ background: `linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.4), transparent)` }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    />

    {/* Floating decorative element */}
    {!compact && (
      <motion.div
        className="absolute right-[8%] top-[20%] hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-32 h-32 border border-gold/20 rotate-45 animate-float" />
      </motion.div>
    )}

    <div className="relative container-wide z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gold" />
            <p className="section-label text-gold">{subtitle}</p>
          </motion.div>
        )}

        {/* Staggered title reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-[1.1]"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}
          </motion.h1>
        </div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-warm-white/75 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            {description}
          </motion.p>
        )}

        {showCTAs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-gold group">
              Book a Consultation
              <motion.span
                className="inline-block ml-2"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </Link>
            <a href="tel:6624911467" className="btn-secondary">Call Us: 662-491-1467</a>
          </motion.div>
        )}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    {!compact && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="text-[10px] font-body uppercase tracking-[4px] text-warm-white/40">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-gold/60" />
        </motion.div>
      </motion.div>
    )}

    {/* Bottom fade */}
    {!compact && (
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    )}
  </section>
);

export default HeroSection;
