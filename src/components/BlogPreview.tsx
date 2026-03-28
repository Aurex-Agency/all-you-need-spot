import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Hormone Therapy",
    title: "The Future of Wellness: Trends Shaping Hormone Therapy",
    desc: "Discover how advances in personalized medicine and peptide therapies are transforming hormone health.",
  },
  {
    tag: "Weight Loss",
    title: "Why Medical Weight Loss Outperforms Fad Diets",
    desc: "Science-backed approaches to sustainable weight management and long-term health.",
  },
  {
    tag: "IV Therapy",
    title: "NAD+ IV Therapy: The Anti-Aging Breakthrough",
    desc: "How NAD+ infusions support cellular repair, energy production, and cognitive clarity.",
  },
];

const BlogPreview = () => (
  <section className="section-padding bg-warm-gray relative overflow-hidden">
    <div className="container-wide">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-px bg-gold/40" />
              <p className="section-label">From the Blog</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl">Latest Insights</h2>
          </div>
          <span className="hidden md:flex items-center gap-2 text-sm font-body text-gold cursor-pointer hover:text-navy transition-colors">
            View All Articles <ArrowRight size={14} />
          </span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.1}>
            <div className="group bg-warm-white border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[var(--shadow-elevated)] cursor-pointer h-full flex flex-col">
              {/* Color accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold to-gold-light w-0 group-hover:w-full transition-all duration-500" />
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[10px] font-body uppercase tracking-[3px] text-gold mb-4 inline-block">{a.tag}</span>
                <h3 className="font-heading text-lg mb-3 group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 flex-1">{a.desc}</p>
                <span className="text-sm font-body text-navy group-hover:text-gold transition-colors flex items-center gap-2">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
