import ServicePageLayout from "@/components/ServicePageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import heroHormone from "@/assets/hero-hormone.jpg";

const ProgesteroneEstrogen = () => (
  <ServicePageLayout
    heroImage={heroHormone}
    heroTitle="Balance Your Hormones, Restore Your Vitality"
    heroSubtitle="Feel Like Yourself Again with Personalized Hormone Therapy"
    sectionLabel="WHAT WE DO"
    serviceTitle="Progesterone & Estrogen Therapy"
    serviceDescription="Hormonal imbalances — especially declining progesterone and estrogen levels — can profoundly affect a woman's quality of life. From menstrual irregularities to menopausal symptoms, these hormones play critical roles in reproductive health, bone density, mood, and beyond. Our personalized therapy restores balance and helps you feel like yourself again."
    benefits={[
      { title: "Menstrual Cycle Regulation", desc: "Progesterone helps regulate your cycle, reducing irregularity and discomfort." },
      { title: "Supports Pregnancy", desc: "Healthy progesterone levels are essential for maintaining a healthy pregnancy." },
      { title: "Menopausal Symptom Relief", desc: "Reduce hot flashes, night sweats, and the discomfort of menopause." },
      { title: "Bone Health", desc: "Both estrogen and progesterone play vital roles in maintaining bone density." },
      { title: "Mood & Sleep Regulation", desc: "Balanced hormones support emotional stability and better sleep quality." },
    ]}
  >
    <section className="section-padding">
      <div className="container-wide max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="border-t-2 border-gold/30 pt-6">
              <h3 className="font-heading text-2xl mb-6">Progesterone Benefits</h3>
              <div className="space-y-3">
                {["Menstrual Cycle Regulation", "Supports Pregnancy", "Symptom Relief During Menopause", "Bone Health", "Mood Regulation"].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <p className="text-sm font-body text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="border-t-2 border-gold/30 pt-6">
              <h3 className="font-heading text-2xl mb-6">Estrogen Benefits</h3>
              <div className="space-y-3">
                {["Relief of Menopausal Symptoms", "Bone Health", "Heart Health", "Improved Skin and Hair", "Brain Function"].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <p className="text-sm font-body text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </ServicePageLayout>
);

export default ProgesteroneEstrogen;
