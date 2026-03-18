import AnimatedSection from "@/components/AnimatedSection";
import privacyBgImg from "@/assets/images/contact/privacypolicy.avif";

const sections = [
  {
    title: "1. Information We Collect",
    content: "At SS Gold Hub, we collect information necessary to provide our gold buying and valuation services. This may include:",
    items: [
      "Personal identification information (name, phone number, email address)",
      "Government-issued ID details for KYC compliance",
      "Transaction details related to gold buying/selling",
      "Communication records between you and our team",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the collected information for:",
    items: [
      "Processing gold transactions and payments",
      "Complying with legal and regulatory requirements",
      "Communicating with you about our services",
      "Improving our services and customer experience",
      "Preventing fraud and ensuring security",
    ],
  },
  {
    title: "3. Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and stored securely in compliance with industry standards.",
  },
  {
    title: "4. Information Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share information only with authorized service providers who assist us in operating our business, or when required by law.",
  },
  {
    title: "5. Your Rights",
    content: "You have the right to:",
    items: [
      "Access your personal data we hold",
      "Request correction of inaccurate data",
      "Request deletion of your data (subject to legal obligations)",
      "Opt out of marketing communications",
    ],
  },
  {
    title: "6. Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at:",
    contact: true,
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={privacyBgImg} className="w-full h-full object-cover" alt="Privacy Policy" loading="eager" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Legal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Last updated: March 2026</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            {sections.map((s, i) => (
              <AnimatedSection key={i}>
                <h2 className="text-3xl font-serif mb-4 text-primary">{s.title}</h2>
                <p className="mb-4">{s.content}</p>
                {s.items && (
                  <ul className="list-disc pl-6 space-y-2">
                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
                {s.contact && (
                  <p className="mt-2">
                    <strong className="text-foreground">Email:</strong> info@ssgoldhub.com<br />
                    <strong className="text-foreground">Phone:</strong> 8121865151<br />
                    <strong className="text-foreground">Address:</strong> 202, Srinivasa Plaza, Sri Nagar Colony Main Road, Punjagutta – 500082
                  </p>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
