// import AnimatedSection from "@/components/AnimatedSection";
// // Import the background image
// import privacyBgImg from "@/assets/images/contact/privacypolicy.avif";

// const PrivacyPolicy = () => {
//   return (
//     <>
//       {/* Heading Section with Background Image */}
//       <section className="relative py-32 md:py-40 overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src={privacyBgImg} 
//             className="w-full h-full object-cover" 
//             alt="Privacy Policy Background" 
//             loading="eager" 
//           />
//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
//         </div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//           <AnimatedSection>
//             <span className="label-gold mb-6 block mx-auto w-fit">Legal</span>
//             <h1 className="text-5xl md:text-7xl font-serif mb-6">Privacy Policy</h1>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
//               Last updated: March 2026
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-24 md:py-32">
//         <div className="max-w-3xl mx-auto px-6">
//           <div className="space-y-12 font-sans text-muted-foreground leading-relaxed">
//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">1. Information We Collect</h2>
//               <p className="mb-4">At SS Gold Hub, we collect information necessary to provide our gold buying and valuation services. This may include:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Personal identification information (name, phone number, email address)</li>
//                 <li>Government-issued ID details for KYC compliance</li>
//                 <li>Transaction details related to gold buying/selling</li>
//                 <li>Communication records between you and our team</li>
//               </ul>
//             </AnimatedSection>

//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">2. How We Use Your Information</h2>
//               <p className="mb-4">We use the collected information for:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Processing gold transactions and payments</li>
//                 <li>Complying with legal and regulatory requirements</li>
//                 <li>Communicating with you about our services</li>
//                 <li>Improving our services and customer experience</li>
//                 <li>Preventing fraud and ensuring security</li>
//               </ul>
//             </AnimatedSection>

//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">3. Data Security</h2>
//               <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and stored securely in compliance with industry standards.</p>
//             </AnimatedSection>

//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">4. Information Sharing</h2>
//               <p>We do not sell, trade, or rent your personal information to third parties. We may share information only with authorized service providers who assist us in operating our business, or when required by law.</p>
//             </AnimatedSection>

//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">5. Your Rights</h2>
//               <p className="mb-4">You have the right to:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Access your personal data we hold</li>
//                 <li>Request correction of inaccurate data</li>
//                 <li>Request deletion of your data (subject to legal obligations)</li>
//                 <li>Opt out of marketing communications</li>
//               </ul>
//             </AnimatedSection>

//             <AnimatedSection>
//               <h2 className="text-3xl font-serif text-foreground mb-4">6. Contact Us</h2>
//               <p>If you have any questions about this Privacy Policy, please contact us at:</p>
//               <p className="mt-2">
//                 <strong className="text-foreground">Email:</strong> info@ssgoldhub.com<br />
//                 <strong className="text-foreground">Phone:</strong> 8121865151<br />
//                 <strong className="text-foreground">Address:</strong> 202, Srinivasa Plaza, Sri Nagar Colony Main Road, Punjagutta – 500082
//               </p>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivacyPolicy;





import AnimatedSection from "@/components/AnimatedSection";
// Import the background image
import privacyBgImg from "@/assets/images/contact/privacypolicy.avif";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Heading Section with Background Image */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={privacyBgImg} 
            className="w-full h-full object-cover" 
            alt="Privacy Policy Background" 
            loading="eager" 
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="label-gold mb-6 block mx-auto w-fit">Legal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
              Last updated: March 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 font-sans text-muted-foreground leading-relaxed">
            
            <AnimatedSection>
              {/* Updated Heading Color to Gold */}
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                1. Information We Collect
              </h2>
              <p className="mb-4">At SS Gold Hub, we collect information necessary to provide our gold buying and valuation services. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, phone number, email address)</li>
                <li>Government-issued ID details for KYC compliance</li>
                <li>Transaction details related to gold buying/selling</li>
                <li>Communication records between you and our team</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing gold transactions and payments</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Communicating with you about our services</li>
                <li>Improving our services and customer experience</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                3. Data Security
              </h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and stored securely in compliance with industry standards.</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                4. Information Sharing
              </h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only with authorized service providers who assist us in operating our business, or when required by law.</p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                5. Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-serif mb-4 text-[#D4AF37] brightness-110 drop-shadow-sm">
                6. Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;