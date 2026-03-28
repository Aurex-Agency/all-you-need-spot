import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const symptoms = ["Anxiety", "Fatigue", "Weight gain or loss", "Brain Fog", "Problems sleeping", "Low sex drive"];

const ContactForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <p className="section-label text-center mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Contact Us</h2>
          <p className="text-center font-body text-muted-foreground mb-12">
            Have questions about hormone therapy, weight loss, or IV treatments? Our team is here to help.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 bg-warm-white border border-border p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input type="email" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Phone</label>
                <input type="tel" className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Have you had your hormones checked?</label>
                <select className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors">
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
                    className={`px-4 py-2 text-sm font-body border transition-colors ${
                      selectedSymptoms.includes(s)
                        ? "border-navy bg-navy text-warm-white"
                        : "border-border text-muted-foreground hover:border-navy"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">What are your goals?</label>
              <textarea rows={3} className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors resize-none" />
            </div>

            <div>
              <label className="block text-xs font-body uppercase tracking-widest text-muted-foreground mb-2">Is there anything else you would like us to know?</label>
              <textarea rows={3} className="w-full border-b border-border bg-transparent py-3 font-body text-sm focus:border-navy focus:outline-none transition-colors resize-none" />
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-navy" />
                <span className="text-sm font-body text-muted-foreground">I consent to receiving notifications from Uplift Medical.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-navy" />
                <span className="text-sm font-body text-muted-foreground">I consent to receiving marketing messages from Uplift Medical.</span>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">Submit</button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
