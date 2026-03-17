import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SS Gold Hub" className="w-12 h-12 object-contain" />
          <span className="text-xl font-serif font-bold tracking-tight uppercase">
            SS Gold <span className="text-primary">Hub</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:8121865151"
          className="hidden md:flex items-center gap-2 group relative px-6 py-2.5 overflow-hidden border border-primary/50 transition-all duration-300 hover:border-primary"
        >
          <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
          <Phone className="w-4 h-4 relative z-10 text-primary group-hover:text-primary-foreground transition-colors" />
          <span className="relative z-10 text-primary group-hover:text-primary-foreground font-bold text-sm transition-colors">
            8121865151
          </span>
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:8121865151"
              className="flex items-center gap-2 text-primary font-bold text-sm mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now → 8121865151
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
