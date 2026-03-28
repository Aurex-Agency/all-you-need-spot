import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Clock, Zap, Phone } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import logo from "@/assets/logo-uplift.webp";
import optinBg from "@/assets/optin-bg.svg";

const benefits = [
  "Personalized hormone optimization plan",
  "Access to board-certified specialists",
  "Concierge-level care at every visit",
  "Lab work coordination & monitoring",
  "Ongoing support between appointments",
];

const pillars = [
  { icon: Shield, title: "Evidence-Based", desc: "Protocols grounded in clinical research and tailored to your unique biology." },
  { icon: Clock, title: "Results in Weeks", desc: "Most patients report noticeable improvements within 2–4 weeks of starting therapy." },
  { icon: Zap, title: "Total Optimization", desc: "We go beyond hormones — addressing energy, body composition, and mental clarity." },
];

const OptIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-accent py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Uplift Medical" className="h-8 w-auto" />
          </Link>
          <a href="tel:6624911467" className="text-accent-foreground/90 text-xs font-body flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={12} /> 662-491-1467
          </a>
        </div>
      </div>

      {/* Hero split */}
      <section className="pt-12 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
          {/* Left — copy */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs tracking-[5px] uppercase font-body text-accent font-semibold mb-6"
            >
              Uplift Medical
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-primary font-bold mb-6"
            >
              Reclaim Your
              <span className="block italic text-accent mt-1">Vitality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
            >
              Mississippi's premier hormone replacement therapy clinic. Discover how personalized treatment can transform your energy, focus, and quality of life.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-10"
            >
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex items-center gap-3 font-body text-sm text-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent" />
                  </span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CTA — scroll to form */}
            <motion.a
              href="#optin-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="lg:hidden btn-primary text-center mb-8"
            >
              Get Your Free Consultation
            </motion.a>
          </div>

          {/* Right — image + form overlay */}
          <div className="relative min-h-[600px] lg:min-h-screen">
            <div className="absolute inset-0">
              <img src={heroHome} alt="Wellness" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60" />
            </div>

            {/* Form card */}
            <div className="relative z-10 flex items-center justify-center h-full px-6 py-20" id="optin-form">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full max-w-md bg-background/95 backdrop-blur-md p-10 shadow-[var(--shadow-dramatic)]"
              >
                {!submitted ? (
                  <>
                    <div className="w-10 h-[2px] bg-accent mb-6" />
                    <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                      Start Your Journey
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-8">
                      Request your free consultation. No obligation, completely confidential.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block font-body text-xs tracking-wider uppercase text-foreground/70 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full h-12 border border-border bg-background px-4 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs tracking-wider uppercase text-foreground/70 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-12 border border-border bg-background px-4 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                          placeholder="john@email.com"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs tracking-wider uppercase text-foreground/70 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-12 border border-border bg-background px-4 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                          placeholder="(662) 000-0000"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-13 bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-gold-light transition-colors mt-2"
                      >
                        Request Consultation <ArrowRight size={16} />
                      </button>

                      <p className="text-[11px] text-muted-foreground text-center font-body mt-3">
                        Your information is 100% confidential. We'll never share your data.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-3">
                      Thank You, {name.split(" ")[0]}!
                    </h2>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                      Our team will reach out within 24 hours to schedule your free consultation.
                    </p>
                    <a
                      href="tel:6624911467"
                      className="inline-flex items-center gap-2 text-accent font-body text-sm font-semibold hover:text-gold-light transition-colors"
                    >
                      <Phone size={14} /> Or call us now: 662-491-1467
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[5px] uppercase font-body text-accent text-center mb-4"
          >
            Why Uplift Medical
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl text-primary-foreground text-center mb-16 !text-primary-foreground"
          >
            A Different Standard of Care
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 border border-accent/30 rotate-45 mx-auto mb-6 flex items-center justify-center">
                  <p.icon size={22} className="text-accent -rotate-45" />
                </div>
                <h3 className="font-heading text-lg text-primary-foreground mb-3 !text-primary-foreground">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="grid grid-cols-3 gap-8">
            {[
              { num: "1,200+", label: "Patients Treated" },
              { num: "4", label: "Locations" },
              { num: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl text-accent font-bold">{stat.num}</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
            Ready to Feel Like Yourself Again?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Take the first step toward renewed energy, sharper focus, and a better quality of life.
          </p>
          <a
            href="#optin-form"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-sm font-semibold tracking-wider uppercase px-10 py-4 hover:bg-gold-light transition-colors"
          >
            Claim Your Free Consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Uplift Medical. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default OptIn;
