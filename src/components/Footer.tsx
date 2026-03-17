// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin, Clock } from "lucide-react";
// import logo from "@/assets/logo/logo.png";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-card border-t border-primary/10">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <img src={logo} alt="SS Gold Hub" className="w-10 h-10 object-contain" />
//               <span className="text-lg font-serif font-bold tracking-tight uppercase">
//                 SS Gold <span className="text-primary">Hub</span>
//               </span>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed mb-6">
//               Trusted gold buying services with transparent pricing, instant payments, and professional valuation.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
//                 <Facebook className="w-4 h-4" />
//               </a>
//               <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
//                 <Instagram className="w-4 h-4" />
//               </a>
//               <a href="#" className="w-10 h-10 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
//                 <Linkedin className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {[
//                 { label: "Home", path: "/" },
//                 { label: "About", path: "/about" },
//                 { label: "Services", path: "/services" },
//                 { label: "FAQ", path: "/faq" },
//                 { label: "Contact", path: "/contact" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <Link to={item.path} onClick={scrollToTop} className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Services</h4>
//             <ul className="space-y-3">
//               {["Gold Buying", "Pledged Gold Release", "Instant Gold Valuation"].map((item) => (
//                 <li key={item}>
//                   <Link to="/services" onClick={scrollToTop} className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Contact Info</h4>
//             <ul className="space-y-4 text-sm text-muted-foreground">
//               <li className="flex gap-3">
//                 <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <div>
//                   <a href="tel:8121865151" className="hover:text-primary transition-colors block">8121865151</a>
//                   <a href="tel:8106855151" className="hover:text-primary transition-colors block">8106855151</a>
//                 </div>
//               </li>
//               <li className="flex gap-3">
//                 <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <a href="mailto:info@ssgoldhub.com" className="hover:text-primary transition-colors">info@ssgoldhub.com</a>
//               </li>
//               <li className="flex gap-3">
//                 <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <span>202, Srinivasa Plaza, Sri Nagar Colony Main Road, Punjagutta – 500082</span>
//               </li>
//               <li className="flex gap-3">
//                 <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <div>
//                   <span className="block">Mon–Sat: 10 AM – 7 PM</span>
//                   <span className="block">Sunday: Closed</span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-muted-foreground text-xs">
//             © {new Date().getFullYear()} SS Gold Hub. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-xs text-muted-foreground">
//             <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-primary transition-colors">Privacy Policy</Link>
//             <Link to="/terms-conditions" onClick={scrollToTop} className="hover:text-primary transition-colors">Terms & Conditions</Link>
//           </div>
//         </div>
//       </div>

//       {/* Scroll To Top */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center z-40 hover:bg-accent transition-colors animate-gold-pulse"
//         aria-label="Scroll to top"
//       >
//         <ArrowUp className="w-5 h-5" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;





import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart 
} from "lucide-react";
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SS Gold Hub" className="w-10 h-10 object-contain" />
              <span className="text-lg font-serif font-bold tracking-tight uppercase">
                SS Gold <span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Trusted gold buying services with transparent pricing, instant payments, and professional valuation.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} onClick={scrollToTop} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {["Gold Buying", "Pledged Gold Release", "Instant Gold Valuation"].map((item) => (
                <li key={item}>
                  <Link to="/services" onClick={scrollToTop} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans font-bold tracking-widest uppercase text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:8121865151" className="hover:text-primary transition-colors block">8121865151</a>
                  <a href="tel:8106855151" className="hover:text-primary transition-colors block">8106855151</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@ssgoldhub.com" className="hover:text-primary transition-colors">info@ssgoldhub.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>202, Srinivasa Plaza, Sri Nagar Colony Main Road, Punjagutta – 500082</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block">Mon–Sat: 10 AM – 7 PM</span>
                  <span className="block">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} SS Gold Hub. All rights reserved.
          </p>
          
          {/* StaffArc Credits */}
          <div className="flex justify-center items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="inline h-3.5 w-3.5 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-orange-600 font-medium hover:underline transition-all"
            >
              <img
                src="/staffarclogo.jpg"
                alt="StaffArc logo"
                className="h-4 w-4 object-contain"
              />
              StaffArc
            </a>
          </div>

          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" onClick={scrollToTop} className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center z-40 hover:bg-accent transition-colors animate-gold-pulse"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;