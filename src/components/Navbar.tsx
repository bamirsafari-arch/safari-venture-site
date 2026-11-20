import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/bamiri logo.jpeg";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // Desktop dropdown state
  const { open: openQuote } = useQuoteModal();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-night/95 backdrop-blur-xl shadow-lg" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <img src={logo} alt="BAMIR Safaris" className="h-12 w-auto drop-shadow-lg" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium tracking-wide text-white hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Home</Link>
          <Link to="/tours" className="text-sm font-medium tracking-wide text-white hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Tours</Link>
          <Link to="/explore" className="text-sm font-medium tracking-wide text-white hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Explore</Link>

          {/* ABOUT US DROPDOWN */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium tracking-wide text-white hover:text-gold transition-colors py-2 ${location.pathname.includes('about') || location.pathname.includes('faq') || location.pathname.includes('policies') ? 'text-gold' : ''}`}>
              About Us <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-300 ${aboutOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden py-2 border border-night/10">
                <Link to="/about" className="block px-5 py-3 text-sm text-night font-medium hover:bg-cream hover:text-gold transition-colors">Our Company</Link>
                <Link to="/faq" className="block px-5 py-3 text-sm text-night font-medium hover:bg-cream hover:text-gold transition-colors">FAQ</Link>
                <Link to="/policies" className="block px-5 py-3 text-sm text-night font-medium hover:bg-cream hover:text-gold transition-colors">Policies & Legal</Link>
                <Link to="/pay" className="block px-5 py-3 text-sm text-night font-medium hover:bg-cream hover:text-gold transition-colors">Make a Payment</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-sm font-medium tracking-wide text-white hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Contact</Link>
          
          <button onClick={() => openQuote()} className="ml-2 px-6 py-2.5 rounded-full bg-gold text-night font-semibold text-sm hover:bg-white hover:scale-105 transition-all shadow-lg shadow-gold/30">
            Get a Quote
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white relative z-50 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`md:hidden fixed inset-0 bg-night/98 backdrop-blur-xl transition-transform duration-500 pt-24 px-6 pb-10 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-lg font-medium py-3 text-white border-b border-white/10">Home</Link>
          <Link to="/tours" className="text-lg font-medium py-3 text-white border-b border-white/10">Tours</Link>
          <Link to="/explore" className="text-lg font-medium py-3 text-white border-b border-white/10">Explore</Link>
          
          {/* Mobile About Accordion */}
          <div className="border-b border-white/10 py-3">
            <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center justify-between w-full text-lg font-medium text-white">
              About Us <ChevronDown className={`w-5 h-5 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col pl-4 mt-2 space-y-3 overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-48" : "max-h-0"}`}>
              <Link to="/about" className="text-white/80 hover:text-gold py-1">Our Company</Link>
              <Link to="/faq" className="text-white/80 hover:text-gold py-1">FAQ</Link>
              <Link to="/policies" className="text-white/80 hover:text-gold py-1">Policies & Legal</Link>
              <Link to="/pay" className="text-white/80 hover:text-gold py-1">Make a Payment</Link>
            </div>
          </div>

          <Link to="/contact" className="text-lg font-medium py-3 text-white border-b border-white/10">Contact</Link>
          
          <button onClick={() => { setOpen(false); openQuote(); }} className="mt-6 px-5 py-4 rounded-full bg-gold text-night font-bold text-lg shadow-xl">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}