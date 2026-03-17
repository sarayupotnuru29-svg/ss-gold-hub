import AnimatedSection from "@/components/AnimatedSection";

const TermsConditions = () => {
  return (
    <>
      <section className="py-32 md:py-40 section-darker">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Legal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Last updated: March 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 font-sans text-muted-foreground leading-relaxed">
            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">1. Advance Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Advance payment may be provided to customers to facilitate the release of pledged gold from banks or financial institutions.</li>
                <li>The advance amount is determined based on the preliminary evaluation of the pledge ticket and estimated gold value.</li>
                <li>Advance payments are subject to verification of the pledge ticket and customer identity.</li>
                <li>The advance amount will be deducted from the final settlement after purity testing and final valuation.</li>
                <li>SS Gold Hub reserves the right to decline advance payment requests at its discretion.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">2. Application Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All customers must provide valid government-issued identification for KYC compliance.</li>
                <li>Customers must be the legal owners of the gold being sold or have proper authorization.</li>
                <li>SS Gold Hub reserves the right to refuse any transaction if the source of gold cannot be verified.</li>
                <li>All transactions are subject to applicable laws and regulations.</li>
                <li>By using our services, you agree to provide accurate and truthful information.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">3. Estimation Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gold valuation is performed using XRF (X-Ray Fluorescence) technology for accurate purity determination.</li>
                <li>The estimated value is based on the purity result and live MCX market gold rates at the time of evaluation.</li>
                <li>Estimations are valid only at the time of evaluation and may change with market fluctuations.</li>
                <li>Weight measurement is done using certified electronic scales.</li>
                <li>Making charges, stone weight, and other non-gold components are deducted from the gross weight.</li>
                <li>The final price may differ from initial estimates after detailed purity testing.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is made immediately after the customer agrees to the final valuation.</li>
                <li>Payment methods include cash, NEFT/RTGS bank transfer, UPI, and cheque.</li>
                <li>For transactions above the prescribed limit, payment will be made through bank transfer only, as per RBI guidelines.</li>
                <li>All payments are final once the transaction is completed and gold is handed over.</li>
                <li>Applicable taxes and deductions, if any, will be communicated before the transaction.</li>
                <li>SS Gold Hub is not liable for any delays in bank transfers caused by the banking system.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">5. General Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>SS Gold Hub reserves the right to modify these terms and conditions at any time without prior notice.</li>
                <li>Any disputes arising from transactions shall be subject to the jurisdiction of courts in Hyderabad, Telangana.</li>
                <li>These terms constitute the entire agreement between SS Gold Hub and the customer.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif text-foreground mb-4">6. Contact</h2>
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
