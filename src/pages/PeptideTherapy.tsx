import ServicePageLayout from "@/components/ServicePageLayout";
import heroPeptide from "@/assets/hero-peptide.jpg";

const PeptideTherapy = () => (
  <ServicePageLayout
    heroImage={heroPeptide}
    heroTitle="Unlock Your Body's Full Potential"
    heroSubtitle="Enhance Performance, Boost Recovery & Optimize Your Health"
    sectionLabel="WHAT WE DO"
    serviceTitle="Peptide Therapy"
    serviceDescription="Peptides are naturally occurring chains of amino acids that act as signaling molecules in your body. Peptide therapy harnesses these powerful compounds to stimulate specific cellular processes — from muscle growth and fat loss to immune support and anti-aging. It's precision medicine at its finest, designed to optimize your body's natural capabilities."
    benefits={[
      { title: "Muscle & Fat Loss", desc: "Stimulate lean muscle growth while accelerating fat metabolism." },
      { title: "Enhanced Energy & Stamina", desc: "Boost cellular energy production for sustained performance." },
      { title: "Cognitive Function & Mental Clarity", desc: "Sharpen focus, memory, and overall brain health." },
      { title: "Immune System Support", desc: "Strengthen your body's natural defenses against illness and infection." },
      { title: "Tissue & Injury Recovery", desc: "Accelerate healing and repair of damaged tissue and joints." },
      { title: "Anti-Aging & Skin Rejuvenation", desc: "Promote collagen production for healthier, more youthful skin." },
      { title: "Hormonal Balance & Sexual Wellness", desc: "Support optimal hormone levels and enhanced sexual health." },
      { title: "Metabolism & Weight Management", desc: "Optimize metabolic function for sustainable weight control." },
      { title: "Better Sleep & Recovery", desc: "Improve sleep quality and accelerate post-workout recovery." },
    ]}
  />
);

export default PeptideTherapy;
