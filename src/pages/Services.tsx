import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import goldBuying from "@/assets/images/services/gold-buying.jpg";
import pledgedGold from "@/assets/images/services/pledged-gold.jpg";
import goldValuation from "@/assets/images/services/gold-valuation.jpg";
import heroBg from "@/assets/images/hero/hero-bg.jpg";

const services = [
  {
    title: "Gold Buying",
    img: goldBuying,
    desc: "We buy all types of gold jewelry, coins, and bars at the best market rates. Our transparent process ensures you get fair value for your precious metals.",
    features: ["All types of gold accepted", "Live MCX rate pricing", "Instant cash or bank transfer", "No hidden deductions"],
  },
  {
    title: "Pledged Gold Release",
    img: pledgedGold,
    desc: "We help customers release gold pledged in banks and finance companies. Our team handles the complete process from evaluation to release.",
    features: ["Bank & NBFC gold release", "Complete documentation support", "Advance payment available", "Doorstep service"],
  },
  {
    title: "Instant Gold Valuation",
    img: goldValuation,
    desc: "Using advanced XRF technology, we provide precise gold purity testing without damaging your jewelry. Get an accurate valuation within minutes.",
    features: ["XRF purity testing", "Non-destructive analysis", "Accurate to 99.9%", "Free valuation service"],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} className="w-full h-full object-cover" alt="Gold services" loading="eager" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Premium Gold Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Comprehensive gold buying, release, and valuation services designed to give you the best value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {services.map((service, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden gold-border">
                  <img src={service.img} className="w-full h-[400px] object-cover" alt={service.title} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson/60 to-transparent" />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="label-gold mb-4 block w-fit">Service {String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-4xl font-serif mb-6">{service.title}</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-sans text-sm text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-darker">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Need Our Services?</h2>
            <p className="text-muted-foreground font-sans mb-10 max-w-xl mx-auto">
              Contact us today for a free consultation and get the best value for your gold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8121865151" className="btn-gold text-center">Call Now → 8121865151</a>
              <Link to="/contact" className="btn-outline-gold text-center">Send Inquiry</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
