import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="gold-line" />
    <div className="bg-navy py-16 md:py-24 relative overflow-hidden noise-overlay">
      {/* Decorative glow */}
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: `radial-gradient(circle, hsl(var(--gold)), transparent)` }} />

      <div className="container-wide relative z-10">
        {/* Top section with large branding */}
        <div className="mb-16 pb-12 border-b border-warm-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-heading text-4xl md:text-5xl font-bold text-warm-white tracking-wider mb-2">
                Uplift<span className="text-gold">.</span>
              </p>
              <p className="text-xs tracking-[5px] uppercase font-body text-warm-white/40">Medical Wellness</p>
            </div>
            <Link to="/contact" className="btn-gold text-xs py-2.5 px-6 self-start md:self-auto">
              Book a Consultation →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About */}
          <div>
            <p className="text-sm font-body text-warm-white/50 leading-relaxed">
              Concierge hormone therapy and wellness care — personalized, insurance-free, and designed around you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-[3px] uppercase font-body text-gold mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm font-body text-warm-white/50 hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[3px] uppercase font-body text-gold mb-5">Services</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "IV Therapy", path: "/ivtherapy" },
                { label: "TRT for Men", path: "/trtmen" },
                { label: "TRT for Women", path: "/trtwomen" },
                { label: "Progesterone & Estrogen", path: "/progesteroneestrogen" },
                { label: "Weight Loss", path: "/fitnessdietaryweightloss" },
                { label: "Peptide Therapy", path: "/peptidetherapy" },
              ].map((s) => (
                <Link key={s.path} to={s.path} className="text-sm font-body text-warm-white/50 hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-200">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs tracking-[3px] uppercase font-body text-gold mb-5">Locations</p>
            <div className="flex flex-col gap-3 text-sm font-body text-warm-white/50 leading-relaxed">
              <p>824 N. Gloster, Suite B<br />Tupelo, MS 38804</p>
              <p>1551 University Ave<br />Oxford, MS 38655</p>
              <p>940 Church Rd. West<br />Southaven, MS 38671</p>
              <p>1331 Union Ave<br />Memphis, TN 38104</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-warm-white/30">
            &copy; {new Date().getFullYear()} Uplift Medical. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs font-body text-warm-white/30 hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs font-body text-warm-white/30 hover:text-gold transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
