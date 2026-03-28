import ScrollReveal from "./ScrollReveal";

const BlogPreview = () => (
  <section className="section-padding">
    <div className="container-wide max-w-2xl">
      <ScrollReveal>
        <p className="section-label text-center mb-3">From the Blog</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Latest Insights</h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border border-border hover:border-gold/30 transition-colors p-8">
          <p className="text-xs font-body text-muted-foreground mb-3">Wellness &middot; Hormone Therapy</p>
          <h3 className="font-heading text-xl md:text-2xl mb-3">
            The Future of Wellness: Trends Shaping Hormone Therapy and Weight Management
          </h3>
          <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
            Discover how advances in personalized medicine, peptide therapies, and integrative wellness programs are transforming the way we approach hormone health and weight management.
          </p>
          <span className="text-sm font-body text-gold cursor-pointer hover:text-navy transition-colors">
            Read More &rarr;
          </span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogPreview;
