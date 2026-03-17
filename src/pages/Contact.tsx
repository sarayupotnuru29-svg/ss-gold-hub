import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Calendar, Upload, Send, Lock, PhoneCall, Home, BadgeCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import locationImg from "@/assets/images/contact/location.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    city: "", 
    loanAmount: "",
    pledgeTicket: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = "918121865151"; 
    const message = `Hello SS Gold Hub, I would like a Free Consultation.%0A%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*City:* ${formData.city}%0A` +
                    `*Approximate Loan Amount:* ${formData.loanAmount}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={locationImg} className="w-full h-full object-cover" alt="Our location" loading="eager" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Visit our office or reach out to us for any inquiries about our gold services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <AnimatedSection direction="left">
              <span className="label-gold mb-4 block w-fit">Contact Information</span>
              <h2 className="text-4xl font-serif mb-8">Let's Talk</h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <a href="tel:8121865151" className="text-muted-foreground font-sans hover:text-primary transition-colors block">8121865151</a>
                    <a href="tel:8106855151" className="text-muted-foreground font-sans hover:text-primary transition-colors block">8106855151</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:info@ssgoldhub.com" className="text-muted-foreground font-sans hover:text-primary transition-colors">info@ssgoldhub.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-1">Address</h3>
                    <p className="text-muted-foreground font-sans">
                      202, Srinivasa Plaza,<br />
                      Sri Nagar Colony Main Road,<br />
                      Punjagutta – 500082
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="p-6 gold-border bg-card gold-glow mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-primary/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      <span className="font-sans text-sm">Monday – Friday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-primary">10 AM – 7 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-primary/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      <span className="font-sans text-sm">Saturday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-primary">10 AM – 7 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground/40" />
                      <span className="font-sans text-sm text-muted-foreground">Sunday</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-destructive">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div className="p-8 md:p-10 gold-border bg-card">
                <h2 className="text-3xl font-serif mb-2">Get Your <span className="text-primary italic">Free Consultation</span></h2>
                <p className="text-muted-foreground font-sans text-sm mb-8">Fill in your details and we'll get back to you within 30 minutes</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Approximate Loan Amount</label>
                    <input
                      type="text"
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                      className="w-full bg-muted border border-primary/10 px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="₹ 1,00,000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-sans font-bold mb-2">Upload Pledge Ticket (Optional)</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-primary/10 border-dashed cursor-pointer bg-muted hover:bg-muted/80 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 text-primary/40 mb-2" />
                          <p className="text-sm text-muted-foreground font-sans">Click to upload</p>
                        </div>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4 rotate-[-45deg]" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next Steps Section (Replacing Maps) */}
      <section className="py-24 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Steps Column */}
            <AnimatedSection direction="left">
              <span className="label-gold mb-4 block w-fit">Process</span>
              <h2 className="text-4xl font-serif mb-12">What Happens Next?</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Instant Response</h4>
                    <p className="text-muted-foreground font-sans">Our team will call you within 30 minutes to discuss your requirements.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Doorstep Service</h4>
                    <p className="text-muted-foreground font-sans">We'll schedule a doorstep visit at your convenience for a hassle-free experience.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Quick Settlement</h4>
                    <p className="text-muted-foreground font-sans">Complete verification and get instant payment for your gold.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Security Column */}
            <AnimatedSection direction="right">
              <div className="p-10 gold-border bg-card gold-glow text-center">
                <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif mb-4">100% Secure & Confidential</h3>
                <p className="text-muted-foreground font-sans max-w-sm mx-auto">
                  Your information is safe with us and will never be shared. We prioritize your privacy at every step.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;