import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import officeImg from "@/assets/images/about/office.jpg";
import teamImg from "@/assets/images/about/team.jpg";
import processImg from "@/assets/images/about/process.jpg";

const values = [
  "Transparent pricing with zero hidden charges",
  "Live MCX market rate-based pricing",
  "Instant payment via cash or bank transfer",
  "Advanced XRF purity testing technology",
  "Over 10 years of industry experience",
  "Trusted by 5000+ customers",
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={officeImg} className="w-full h-full object-cover" alt="SS Gold Hub office" loading="eager" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">About Us</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Who We Are</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              SS Gold Hub is a trusted gold-buying business offering fair prices, complete transparency, and instant payments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img src={teamImg} className="w-full h-[400px] object-cover gold-border" alt="Our team" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 hidden lg:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="label-gold mb-4 block w-fit">Our Story</span>
              <h2 className="text-4xl font-serif mb-6">Trusted Gold Buyers Since Day One</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                SS Gold Hub was founded with a simple mission: to provide honest, transparent, and fair gold buying services. We understand that selling gold is a significant financial decision, and we're committed to making the process as smooth and rewarding as possible.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Our team of experienced professionals uses state-of-the-art XRF technology to accurately determine the purity of your gold, ensuring you receive the best possible price based on live market rates.
              </p>
              <Link to="/contact" className="btn-gold inline-block">Get In Touch</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="label-gold mb-4 block w-fit">Why Choose Us</span>
              <h2 className="text-4xl font-serif mb-8">The SS Gold Hub Advantage</h2>
              <ul className="space-y-4">
                {values.map((val, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground font-sans">{val}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <img src={processImg} className="w-full h-[400px] object-cover gold-border" alt="Our process" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-4 block mx-auto w-fit">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-sans mb-16">
              Our streamlined process ensures you get the best value for your gold with minimal hassle.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Evaluation", desc: "Bring your gold or call us for a doorstep evaluation. We assess purity using XRF technology.", img: teamImg },
              { num: "02", title: "Fair Pricing", desc: "We calculate the price based on live MCX market rates — completely transparent.", img: processImg },
              { num: "03", title: "Instant Payment", desc: "Once you agree, receive payment immediately via cash or direct bank transfer.", img: officeImg },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="scale">
                <div className="group relative h-[350px] overflow-hidden gold-border">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt={item.title} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 p-8 text-left">
                    <span className="text-5xl font-serif font-bold text-primary/30">{item.num}</span>
                    <h3 className="text-2xl font-serif mt-2 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-sans">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
