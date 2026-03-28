import ServicePageLayout from "@/components/ServicePageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import heroWomen from "@/assets/hero-trt-women.jpg";

const signs = [
  "Chronic Fatigue & Low Energy", "Brain Fog & Poor Concentration", "Decreased Libido & Sexual Satisfaction",
  "Loss of Muscle Tone & Increased Fat", "Mood Swings & Irritability", "Thinning Hair & Weaker Nails",
];

const trtBenefits = [
  "Increased Energy & Stamina", "Improved Mental Clarity & Focus", "Restored Libido & Sexual Health",
  "Stronger Muscles & Fat Loss", "Better Mood & Emotional Balance", "Thicker Hair & Healthier Skin",
];

const TRTWomen = () => (
  <ServicePageLayout
    heroImage={heroWomen}
    heroTitle="Restore Balance, Energy & Confidence"
    heroSubtitle="Feel Stronger, Sharper, and More in Control of Your Health"
    sectionLabel="WHAT WE DO"
    serviceTitle="Testosterone Therapy for Women"
    serviceDescription="Testosterone isn't just for men — women need healthy testosterone levels too. When levels drop, it affects energy, mood, cognition, and overall vitality. Our personalized testosterone therapy for women is designed to restore balance and help you feel empowered, energized, and in control."
    benefits={[
      { title: "Energy & Vitality", desc: "Combat chronic fatigue and reclaim your energy for the things that matter." },
      { title: "Mental Clarity", desc: "Sharpen focus, reduce brain fog, and improve cognitive performance." },
      { title: "Sexual Health", desc: "Restore healthy libido and enhance sexual satisfaction naturally." },
      { title: "Body Composition", desc: "Support lean muscle tone and reduce stubborn body fat." },
      { title: "Emotional Wellness", desc: "Stabilize mood swings and cultivate emotional balance." },
    ]}
  >
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Warning Signs</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Signs of Low Testosterone in Women</h2>
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

    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <ScrollReveal>
          <p className="section-label mb-3">Results</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-12">Benefits of Testosterone Therapy for Women</h2>
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

export default TRTWomen;
