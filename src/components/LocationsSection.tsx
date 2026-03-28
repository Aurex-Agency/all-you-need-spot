import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone } from "lucide-react";

const locations = [
  { city: "Tupelo, MS", address: "824 North Gloster, Suite B", zip: "Tupelo, MS 38804" },
  { city: "Oxford, MS", address: "1551 University Ave", zip: "Oxford, MS 38655" },
  { city: "Southaven, MS", address: "940 Church Rd. West", zip: "Southaven, MS 38671" },
  { city: "Memphis, TN", address: "1331 Union Ave", zip: "Memphis, TN 38104" },
];

const LocationsSection = () => (
  <section className="section-padding">
    <div className="container-wide">
      <ScrollReveal>
        <p className="section-label text-center mb-3">Our Locations</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">Visit Us</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc, i) => (
          <ScrollReveal key={loc.city} delay={i * 0.1}>
            <div className="border border-border p-8 hover:border-gold/40 transition-colors group">
              <MapPin className="text-gold mb-4" size={20} strokeWidth={1.5} />
              <h3 className="font-heading text-lg mb-2">{loc.city}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-1">{loc.address}</p>
              <p className="text-sm font-body text-muted-foreground mb-6">{loc.zip}</p>
              <a
                href="tel:6624911467"
                className="inline-flex items-center gap-2 text-sm font-body text-navy hover:text-gold transition-colors"
              >
                <Phone size={14} /> Call Today
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
