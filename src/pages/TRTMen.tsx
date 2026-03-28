import ServicePageLayout from "@/components/ServicePageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import heroMen from "@/assets/hero-trt-men.jpg";

const signs = [
  "Chronic Fatigue", "Loss of Muscle Mass & Strength", "Weight Gain & Increased Body Fat",
  "Reduced Sex Drive & Erectile Dysfunction", "Mood Swings & Irritability", "Brain Fog & Difficulty Concentrating",
];

const trtBenefits = [
  "Increased Energy & Stamina", "Stronger Muscles & Reduced Body Fat", "Enhanced Sexual Performance & Drive",
  "Sharper Focus & Mental Clarity", "Improved Mood & Motivation", "Better Sleep & Recovery",
];

const TRTMen = () => (
  <ServicePageLayout
    heroImage={heroMen}
    heroTitle="Restore Strength, Energy & Vitality"
    heroSubtitle="Feel Stronger. Think Sharper. Live with More Confidence."
    sectionLabel="WHAT WE DO"
    serviceTitle="Testosterone Therapy for Men"
    serviceDescription="Testosterone is the cornerstone of men's health — influencing everything from energy and muscle mass to mood and sexual function. As men age, testosterone levels naturally decline, often leading to a cascade of symptoms that affect quality of life. Our testosterone replacement therapy (TRT) is designed to restore optimal hormone levels and help you feel like yourself again."
    benefits={[
      { title: "Sexual Health", desc: "Restore healthy libido, improve erectile function, and enhance sexual satisfaction." },
      { title: "Muscle Mass and Strength", desc: "Support lean muscle growth, improved recovery, and greater physical performance." },
      { title: "Bone Density", desc: "Protect against osteoporosis and maintain strong, healthy bones." },
      { title: "Mood and Cognitive Function", desc: "Reduce brain fog, sharpen mental clarity, and stabilize mood." },
      { title: "Fat Distribution", desc: "Reduce stubborn body fat and improve overall body composition." },
    ]}
  >
    {/* Signs of Low T */}
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Warning Signs</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Signs of Low Testosterone</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {signs.map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.05}>
              <div className="border border-border p-6 hover:border-gold/40 transition-colors">
                <p className="font-body text-sm text-navy">{s}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* TRT Benefits */}
    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Results</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Benefits of Testosterone Therapy</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trtBenefits.map((b, i) => (
            <ScrollReveal key={b} delay={i * 0.05}>
              <div className="border-l-2 border-gold/40 pl-5 py-3">
                <p className="font-body text-sm text-navy">{b}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </ServicePageLayout>
);

export default TRTMen;
