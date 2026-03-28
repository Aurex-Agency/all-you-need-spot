import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Phone, MapPin, Clock } from "lucide-react";

const symptoms = ["Anxiety", "Fatigue", "Weight gain or loss", "Brain Fog", "Problems sleeping", "Low sex drive"];

const ContactForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <section className="section-padding bg-warm-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-navy hidden xl:block" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-12">
          {/* Left info panel */}
          <ScrollReveal>
            <div className="xl:text-warm-white">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-px bg-gold/40" />
                <p className="section-label">Get in Touch</p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6 xl:!text-warm-white">Contact Us</h2>
              <p className="font-body text-muted-foreground xl:text-warm-white/60 mb-10 text-sm leading-relaxed">
                Have questions about hormone therapy, weight loss, or IV treatments? Our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-body uppercase tracking-widest text-gold mb-1">Phone</p>
                    <a href="tel:6624911467" className="text-sm font-body xl:text-warm-white/80 hover:text-gold transition-colors">662-491-1467</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-body uppercase tracking-widest text-gold mb-1">Locations</p>
                    <p className="text-sm font-body xl:text-warm-white/80">Tupelo · Oxford · Southaven · Memphis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-body uppercase tracking-widest text-gold mb-1">Hours</p>
                    <p className="text-sm font-body xl:text-warm-white/80">Mon – Fri: 8am – 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 bg-warm-white border border-border p-8 md:p-12 shadow-[var(--shadow-elevated)] corner-accent"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                  <input type="email" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Have you had your hormones checked?</label>
                  <select className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors">
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">Symptoms you are experiencing</label>
                <div className="flex flex-wrap gap-3">
                  {symptoms.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSymptom(s)}
                      className={`px-4 py-2 text-sm font-body border transition-all duration-300 ${
                        selectedSymptoms.includes(s)
                          ? "border-gold bg-navy text-warm-white shadow-[var(--shadow-gold)]"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">What are your goals?</label>
                <textarea rows={3} className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors resize-none" />
              </div>

              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Is there anything else you would like us to know?</label>
                <textarea rows={3} className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors resize-none" />
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-gold" />
                  <span className="text-sm font-body text-muted-foreground">I consent to receiving notifications from Uplift Medical.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-gold" />
                  <span className="text-sm font-body text-muted-foreground">I consent to receiving marketing messages from Uplift Medical.</span>
                </label>
              </div>

              <button type="submit" className="btn-gold w-full md:w-auto">Submit Inquiry →</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
