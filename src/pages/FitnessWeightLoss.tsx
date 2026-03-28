import ServicePageLayout from "@/components/ServicePageLayout";
import heroFitness from "@/assets/hero-fitness.jpg";

const FitnessWeightLoss = () => (
  <ServicePageLayout
    heroImage={heroFitness}
    heroTitle="Burn Fat, Boost Energy & Take Control of Your Health"
    heroSubtitle="Medically Guided Weight Loss & Fitness Programs"
    sectionLabel="WHAT WE DO"
    serviceTitle="Fitness/Dietary/Weight Loss Consultations"
    serviceDescription="Achieving lasting weight loss and optimal fitness requires more than willpower — it requires a medically guided, personalized approach. Our comprehensive consultations combine hormone optimization, nutritional planning, and fitness guidance to help you achieve sustainable results that transform not just your body, but your entire quality of life."
    benefits={[
      { title: "Sustainable Fat Loss & Metabolism Boost", desc: "Evidence-based protocols that optimize your metabolism for long-term results." },
      { title: "Appetite Control & Craving Reduction", desc: "Medically guided strategies to manage hunger and eliminate cravings." },
      { title: "Increased Energy & Endurance", desc: "Fuel your body for peak performance in every area of life." },
      { title: "Muscle Growth & Body Composition", desc: "Build lean muscle and achieve the physique you've been working toward." },
      { title: "Personalized Nutrition & Meal Planning", desc: "Custom meal plans designed around your goals, preferences, and lifestyle." },
      { title: "Hormonal Balance & Weight Management", desc: "Address the hormonal root causes of stubborn weight gain." },
      { title: "Better Sleep & Stress Management", desc: "Improve recovery, reduce cortisol, and optimize your body's repair systems." },
      { title: "Long-Term Lifestyle Changes", desc: "Build habits that last a lifetime — not just a diet cycle." },
    ]}
  />
);

export default FitnessWeightLoss;
