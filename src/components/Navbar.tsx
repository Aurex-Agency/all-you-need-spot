import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu, Phone } from "lucide-react";

const services = [
  { name: "IV Therapy", path: "/ivtherapy" },
  { name: "Testosterone Therapy for Men", path: "/trtmen" },
  { name: "Testosterone Therapy for Women", path: "/trtwomen" },
  { name: "Progesterone & Estrogen Therapy", path: "/progesteroneestrogen" },
  { name: "Fitness/Dietary/Weight Loss", path: "/fitnessdietaryweightloss" },
  { name: "Peptide Therapy", path: "/peptidetherapy" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navBg = scrolled ? "bg-warm-white shadow-sm" : "bg-transparent";
  const textColor = scrolled ? "text-navy" : "text-warm-white";
  const logoColor = scrolled ? "text-navy" : "text-warm-white";

  return (
    <>
      {/* Utility bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy py-1.5 px-4 text-center">
        <p className="text-xs tracking-widest font-body text-warm-white/80">
          Male and Female Hormone Replacement Therapy Clinic.{" "}
          <a href="tel:6624911467" className="text-gold hover:text-gold-light transition-colors">
            Call Today: 662-491-1467
          </a>
        </p>
      </div>

      {/* Main nav */}
      <header
        className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-300 ${navBg}`}
      >
        <nav className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-heading text-xl md:text-2xl font-bold tracking-wider ${logoColor} transition-colors`}>
            <span className="text-2xl md:text-3xl">UM</span>
            <span className="hidden md:inline ml-3 text-sm tracking-[4px] uppercase font-body font-medium">
              Uplift Medical
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-sm font-body tracking-wide ${textColor} hover:text-gold transition-colors`}>
              Home
            </Link>

            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className={`text-sm font-body tracking-wide ${textColor} hover:text-gold transition-colors flex items-center gap-1`}>
                Types of Therapy <ChevronDown size={14} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-warm-white shadow-lg border border-border min-w-[280px] py-2">
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block px-5 py-2.5 text-sm font-body text-charcoal hover:bg-muted hover:text-navy transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className={`text-sm font-body tracking-wide ${textColor} hover:text-gold transition-colors`}>
              About
            </Link>
            <Link to="/contact" className={`text-sm font-body tracking-wide ${textColor} hover:text-gold transition-colors`}>
              Contact
            </Link>

            <a href="tel:6624911467" className={`text-sm font-body ${textColor} flex items-center gap-1.5`}>
              <Phone size={14} /> 662-491-1467
            </a>

            <Link to="/contact" className="btn-primary text-xs py-2.5 px-6">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-navy transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 0 }}
      >
        <div className="pt-28 px-8 flex flex-col gap-6">
          <Link to="/" className="text-lg font-heading text-warm-white">Home</Link>
          <div>
            <p className="text-xs section-label mb-3">Types of Therapy</p>
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="block py-2 text-warm-white/80 font-body text-sm hover:text-gold transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
          <Link to="/about" className="text-lg font-heading text-warm-white">About</Link>
          <Link to="/contact" className="text-lg font-heading text-warm-white">Contact</Link>
          <a href="tel:6624911467" className="text-gold font-body flex items-center gap-2">
            <Phone size={16} /> 662-491-1467
          </a>
          <Link to="/contact" className="btn-gold text-center mt-4">Book a Consultation</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
