import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Clock, Zap, Phone, Star, MapPin } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-uplift.webp";
import kennyPhoto from "@/assets/kenny-goolsby.png";

const benefits = [
  "Appointment reminders sent straight to your phone",
  "Exclusive promotions & member-only offers",
  "Health tips and wellness updates",
  "New service announcements before anyone else",
  "Easy two-way texting with our care team",
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
  const [clientType, setClientType] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsConsent || !marketingConsent) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.split(" ")[0] || "",
          lastName: name.split(" ").slice(1).join(" ") || "",
          email,
          phone,
          clientType,
          smsConsent,
          marketingConsent,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (error) {
      console.error("Webhook submission failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden optin-silver">
      {/* Minimal top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-accent py-2.5 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Uplift Medical" className="h-8 w-auto" />
          </div>
          <a href="tel:6624911467" className="text-accent-foreground/90 text-xs font-body flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={12} /> 662-491-1467
          </a>
        </div>
      </div>

      {/* ── HERO: Full-bleed immersive section ── */}
      <section className="relative min-h-screen lg:min-h-0 lg:h-screen flex items-center pt-12">
        {/* Background gradient sweep */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(var(--accent)/0.08),transparent_70%)]" />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/[0.04] to-transparent skew-x-[-6deg] origin-top-right" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-48px)]">

            {/* Left col — copy + photo */}
            <div className="lg:col-span-7 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-16 lg:py-0">
              {/* Photo with decorative frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative flex-shrink-0 order-2 lg:order-1"
              >
                {/* Decorative border offset */}
                <div className="absolute -inset-3 border border-accent/30 -rotate-2" />
                <div className="absolute -inset-1.5 border border-accent/10 rotate-1" />
                <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden">
                  <img
                    src={kennyPhoto}
                    alt="Kenny Goolsby — Founder of Uplift Medical"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gold gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                {/* Name tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-4 bg-accent px-4 py-2 shadow-[var(--shadow-gold)]"
                >
                  <p className="font-heading text-xs font-bold text-accent-foreground tracking-wide">Kenny Goolsby</p>
                  <p className="font-body text-[10px] text-accent-foreground/70">Founder & CEO</p>
                </motion.div>
              </motion.div>

              {/* Copy */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                   className="text-[10px] tracking-[6px] uppercase font-body text-accent font-semibold mb-5"
                >
                  Stay In The Loop
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="font-heading text-4xl md:text-5xl xl:text-6xl leading-[1.05] !text-primary-foreground font-bold mb-5"
                >
                  Never Miss
                  <span className="block italic text-accent mt-1 text-5xl md:text-6xl xl:text-7xl drop-shadow-[0_0_25px_hsl(var(--accent)/0.5)]">An Update</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="font-body text-primary-foreground/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Opt in to receive appointment reminders, exclusive offers, and wellness updates directly to your phone from Uplift Medical.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="space-y-2.5 mb-8 inline-block text-left"
                >
                  {benefits.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="flex items-center gap-3 font-body text-sm text-primary-foreground/80"
                    >
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-accent" />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile CTA */}
                <motion.a
                  href="#optin-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="lg:hidden inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-base font-bold tracking-[3px] uppercase px-10 py-4 hover:bg-gold-light transition-colors animate-glow-pulse shadow-[0_0_20px_hsl(var(--accent)/0.4)]"
                >
                  Opt In Now <ArrowRight size={15} />
                </motion.a>
              </div>
            </div>

            {/* Right col — form card */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end" id="optin-form">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md relative"
              >
                {/* Glow behind card */}
                <div className="absolute -inset-8 bg-accent/[0.06] blur-3xl rounded-full" />

                <div className="relative bg-background/[0.97] backdrop-blur-xl p-6 md:p-8 shadow-[0_30px_80px_-20px_hsl(var(--navy)/0.5)] border border-border/50">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

                  {!submitted ? (
                    <>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-[2px] bg-accent" />
                        <p className="font-body text-[10px] tracking-[4px] uppercase text-accent font-semibold">SMS Opt-In</p>
                      </div>
                      <h2 className="font-heading text-2xl md:text-[1.7rem] font-bold text-primary mb-2 leading-tight">
                        Stay Connected
                      </h2>
                      <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                        Opt in to receive important updates, appointment reminders, and exclusive offers from Uplift Medical.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="group">
                          <label className="block font-body text-[10px] tracking-[3px] uppercase text-foreground/50 mb-1.5 group-focus-within:text-accent transition-colors">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-10 border-b-2 border-border bg-transparent px-0 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="group">
                          <label className="block font-body text-[10px] tracking-[3px] uppercase text-foreground/50 mb-1.5 group-focus-within:text-accent transition-colors">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-10 border-b-2 border-border bg-transparent px-0 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                            placeholder="john@email.com"
                          />
                        </div>
                        <div className="group">
                          <label className="block font-body text-[10px] tracking-[3px] uppercase text-foreground/50 mb-1.5 group-focus-within:text-accent transition-colors">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full h-10 border-b-2 border-border bg-transparent px-0 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                            placeholder="(662) 000-0000"
                          />
                        </div>

                        {/* Client Type Dropdown */}
                        <div className="group">
                          <label className="block font-body text-[10px] tracking-[3px] uppercase text-foreground/50 mb-1.5 group-focus-within:text-accent transition-colors">
                            Client Type
                          </label>
                          <select
                            required
                            value={clientType}
                            onChange={(e) => setClientType(e.target.value)}
                            className="w-full h-10 border-b-2 border-border bg-transparent px-0 font-body text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer text-foreground"
                          >
                            <option value="" disabled className="text-muted-foreground">Select one...</option>
                            <option value="new" className="text-foreground bg-background">New Client</option>
                            <option value="existing" className="text-foreground bg-background">Existing Client</option>
                          </select>
                        </div>

                        {/* SMS Consent Checkboxes */}
                        <div className="space-y-3 pt-2">
                          <label className="flex items-start gap-3 cursor-pointer group/check">
                            <input
                              type="checkbox"
                              required
                              checked={smsConsent}
                              onChange={(e) => setSmsConsent(e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-border accent-accent flex-shrink-0 cursor-pointer"
                            />
                            <span className="font-body text-xs text-muted-foreground leading-relaxed group-hover/check:text-foreground/70 transition-colors">
                              I agree to receive non-marketing SMS messages from Uplift Medical, including appointment reminders and service updates. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out. Reply HELP for help.
                            </span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer group/check">
                            <input
                              type="checkbox"
                              required
                              checked={marketingConsent}
                              onChange={(e) => setMarketingConsent(e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-border accent-accent flex-shrink-0 cursor-pointer"
                            />
                            <span className="font-body text-xs text-muted-foreground leading-relaxed group-hover/check:text-foreground/70 transition-colors">
                              I agree to receive marketing and promotional SMS messages from Uplift Medical, including special offers and updates. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out. Reply HELP for help.
                            </span>
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 bg-accent text-accent-foreground font-heading text-sm font-semibold tracking-[3px] uppercase flex items-center justify-center gap-2 hover:bg-gold-light hover:shadow-[var(--shadow-gold)] transition-all duration-300 mt-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Submitting..." : "Opt In Now"}
                          {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                        </button>

                        <p className="text-[10px] text-muted-foreground text-center font-body mt-3 flex items-center justify-center gap-1.5">
                          <Shield size={10} className="text-accent/60" />
                          100% confidential. We never share your data.
                        </p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                        <Check size={28} className="text-accent" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-primary mb-3">
                        Thank You, {name.split(" ")[0]}!
                      </h2>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                        You're all set! You'll now receive updates, reminders, and exclusive offers from Uplift Medical.
                      </p>
                      <div className="flex flex-col items-center gap-3">
                        <a
                          href="https://www.facebook.com/p/Uplift-Medical-61558283480368/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-sm font-semibold tracking-[2px] uppercase px-8 py-3 hover:bg-gold-light hover:shadow-[var(--shadow-gold)] transition-all duration-300"
                        >
                          Follow Us on Facebook
                        </a>
                        <a
                          href="tel:6624911467"
                          className="inline-flex items-center gap-2 text-accent font-body text-sm font-semibold hover:text-gold-light transition-colors"
                        >
                          <Phone size={14} /> Or call us: 662-491-1467
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-12 bg-secondary relative">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { num: "1,200+", label: "Patients Treated" },
              { num: "4", label: "Locations", icon: MapPin },
              { num: "98%", label: "Satisfaction" },
              { num: "5.0", label: "Google Rating", icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1.5">
                  {stat.icon && <stat.icon size={16} className="text-accent" />}
                  <p className="font-heading text-2xl md:text-3xl text-primary font-bold">{stat.num}</p>
                </div>
                <p className="font-body text-[10px] tracking-[3px] uppercase text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[6px] uppercase font-body text-accent text-center mb-4"
          >
            Why Uplift Medical
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl !text-primary-foreground text-center mb-4"
          >
            A Different Standard of Care
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-accent mx-auto mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="w-16 h-16 border border-accent/20 rotate-45 mx-auto mb-6 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/[0.05] transition-all duration-500">
                  <p.icon size={22} className="text-accent -rotate-45" />
                </div>
                <h3 className="font-heading text-lg !text-primary-foreground mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/50 leading-relaxed max-w-xs mx-auto">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="max-w-2xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[6px] uppercase font-body text-accent font-semibold mb-4">Don't Miss Out</p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4 leading-tight">
              Stay Connected With
              <span className="italic text-accent"> Uplift Medical</span>
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto">
              Get appointment reminders, exclusive offers, and wellness tips delivered right to your phone.
            </p>
            <a
              href="#optin-form"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold tracking-[3px] uppercase px-12 py-4 hover:bg-gold-light hover:shadow-[var(--shadow-gold)] transition-all duration-300 group"
            >
              Opt In Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-center">
        <p className="font-body text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Uplift Medical. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default OptIn;
