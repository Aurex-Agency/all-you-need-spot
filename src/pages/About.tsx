import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationsSection from "@/components/LocationsSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import heroAbout from "@/assets/hero-about.jpg";
import heroHome from "@/assets/hero-home.jpg";

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <HeroSection
      image={heroAbout}
      title="About Us"
      subtitle="Our Story"
      description="Restoring Balance. Revitalizing Lives."
      compact
    />

    {/* Our Story */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Uplift Medical</h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Welcome to Uplift Medical, where we specialize in transforming lives through personalized medical care. We have 3 locations in Mississippi including Tupelo, Oxford, and Southaven. We also offer a Tennessee location in Memphis. We are dedicated to providing exceptional healthcare services tailored to meet the unique needs of each patient.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src={heroAbout}
              alt="Uplift Medical clinic"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <TestimonialsSection />

    {/* Meet the Owner */}
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <ScrollReveal className="lg:col-span-2">
            <img
              src={heroHome}
              alt="Kenny Goolsby, Owner of Uplift Medical"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
              width={600}
              height={800}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <p className="section-label mb-3">Meet The Owner</p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Kenneth Goolsby</h2>
            <span className="font-heading text-5xl text-gold/20 leading-none block mb-4">&ldquo;</span>
            <div className="font-body text-muted-foreground leading-relaxed space-y-4">
              <p>
                My name is Kenny Goolsby, owner of Uplift Medical. I have been involved in sports and health starting at the age of 14, with over a decade of experience with leading individuals from personal training clients and my clinical experience in various clinics. I realized the dire need for hormone replacement therapy for people in all walks of life. I realized that hormone replacement therapy is not only for those looking to be healthy from a fitness perspective, but it is for anyone who is dealing with a decline in their quality of life.
              </p>
              <p>
                I have had the pleasure of treating teenagers, middle aged, and some as old as 100 years of age. I have shared laughs, tears, and success stories with so many people, and it has been a blessing to be a part of their journeys. Realizing the need for hormone replacements, sexual dysfunction, and weight loss services, I went and open my own clinics in order to treat people the way they deserve. At Uplift Medical, we do not see patients as &lsquo;just another person,&rsquo; but we view them as someone that deserves to be heard, consented, and treated accordingly. I look forward to meeting you, hearing your stories, and being a part of the journey to get you feeling like you have always wanted. You deserve to be Uplifted.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <CTASection heading="Book Your Appointment" />
    <LocationsSection />
    <FAQSection />
    <BlogPreview />
    <Footer />
  </div>
);

export default About;
