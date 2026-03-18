import AnimatedSection from "@/components/AnimatedSection";
import termsBgImg from "@/assets/images/contact/termsconditions.jpg";

const sections = [
  {
    title: "1. Advance Payment Terms",
    items: [
      "Advance payment may be provided to customers to facilitate the release of pledged gold from banks or financial institutions.",
      "The advance amount is determined based on the preliminary evaluation of the pledge ticket and estimated gold value.",
      "Advance payments are subject to verification of the pledge ticket and customer identity.",
      "The advance amount will be deducted from the final settlement after purity testing and final valuation.",
      "SS Gold Hub reserves the right to decline advance payment requests at its discretion.",
    ],
  },
  {
    title: "2. Application Terms",
    items: [
      "All customers must provide valid government-issued identification for KYC compliance.",
      "Customers must be the legal owners of the gold being sold or have proper authorization.",
      "SS Gold Hub reserves the right to refuse any transaction if the source of gold cannot be verified.",
      "All transactions are subject to applicable laws and regulations.",
      "By using our services, you agree to provide accurate and truthful information.",
    ],
  },
  {
    title: "3. Estimation Terms",
    items: [
      "Gold valuation is performed using XRF (X-Ray Fluorescence) technology for accurate purity determination.",
      "The estimated value is based on the purity result and live MCX market gold rates at the time of evaluation.",
      "Estimations are valid only at the time of evaluation and may change with market fluctuations.",
      "Weight measurement is done using certified electronic scales.",
      "Making charges, stone weight, and other non-gold components are deducted from the gross weight.",
      "The final price may differ from initial estimates after detailed purity testing.",
    ],
  },
  {
    title: "4. Payment Terms",
    items: [
      "Payment is made immediately after the customer agrees to the final valuation.",
      "Payment methods include cash, NEFT/RTGS bank transfer, UPI, and cheque.",
      "For transactions above the prescribed limit, payment will be made through bank transfer only, as per RBI guidelines.",
      "All payments are final once the transaction is completed and gold is handed over.",
      "Applicable taxes and deductions, if any, will be communicated before the transaction.",
      "SS Gold Hub is not liable for any delays in bank transfers caused by the banking system.",
    ],
  },
  {
    title: "5. General Terms",
    items: [
      "SS Gold Hub reserves the right to modify these terms and conditions at any time without prior notice.",
      "Any disputes arising from transactions shall be subject to the jurisdiction of courts in Hyderabad, Telangana.",
      "These terms constitute the entire agreement between SS Gold Hub and the customer.",
    ],
  },
];

const TermsConditions = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={termsBgImg} className="w-full h-full object-cover" alt="Terms and Conditions" loading="eager" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Legal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Terms & Conditions</h1>
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
                <ul className="list-disc pl-6 space-y-2">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </AnimatedSection>
            ))}

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-primary">6. Contact</h2>
              <p>For any queries regarding these Terms & Conditions, contact us at:</p>
              <p className="mt-2">
                <strong className="text-foreground">Email:</strong> info@ssgoldhub.com<br />
                <strong className="text-foreground">Phone:</strong> 8121865151<br />
                <strong className="text-foreground">Address:</strong> 202, Srinivasa Plaza, Sri Nagar Colony Main Road, Punjagutta – 500082
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
