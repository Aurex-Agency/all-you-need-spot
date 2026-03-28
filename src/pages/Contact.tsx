import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import heroAbout from "@/assets/hero-about.jpg";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection
      image={heroAbout}
      title="Contact Uplift Medical"
      subtitle="Get in Touch"
      description="Your Path to Better Health Starts Here"
      compact
    />
    <ContactForm />
    <LocationsSection />
    <TestimonialsSection />
    <BlogPreview />
    <Footer />
  </div>
);

export default Contact;
