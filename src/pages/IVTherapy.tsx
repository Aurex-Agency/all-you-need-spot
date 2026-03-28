import ServicePageLayout from "@/components/ServicePageLayout";
import heroIV from "@/assets/hero-iv.jpg";

const IVTherapy = () => (
  <ServicePageLayout
    heroImage={heroIV}
    heroTitle="Hydrate, Replenish, and Revitalize"
    heroSubtitle="Boost Your Energy. Strengthen Your Immune System. Feel Your Best."
    sectionLabel="WHAT WE DO"
    serviceTitle="IV Therapy"
    serviceDescription="Intravenous (IV) therapy delivers essential vitamins, minerals, and fluids directly into your bloodstream for maximum absorption and immediate results. Whether you're recovering from illness, combating fatigue, or simply optimizing your wellness, IV therapy provides rapid relief and lasting benefits."
    benefits={[
      { title: "Hydration", desc: "Direct fluid delivery for optimal cellular hydration and recovery." },
      { title: "Nutrient Absorption", desc: "Bypass the digestive system for 100% bioavailability of essential vitamins and minerals." },
      { title: "Enhanced Energy Levels", desc: "Combat fatigue and boost stamina with targeted nutrient infusions." },
      { title: "Immune System Support", desc: "Strengthen your body's natural defenses with high-dose vitamin C and zinc." },
      { title: "Detoxification", desc: "Support your liver and kidneys in flushing toxins from your system." },
      { title: "Hangover Relief", desc: "Rapid rehydration and symptom relief when you need it most." },
      { title: "Specific Health Conditions", desc: "Targeted formulas for migraines, chronic fatigue, athletic recovery, and more." },
      { title: "Quick Symptom Relief", desc: "Feel the difference within minutes, not days, with direct bloodstream delivery." },
    ]}
  />
);

export default IVTherapy;
