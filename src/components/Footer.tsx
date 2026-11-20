import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/bamiri logo.jpeg";

export function Footer() {
  const { open } = useQuoteModal();
  return (
    <footer className="bg-night text-cream">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Let's plan it</div>
            <h2 className="text-3xl md:text-5xl font-display max-w-xl leading-tight">
              Ready for your next <span className="text-gold italic">adventure?</span>
            </h2>
          </div>
          <button
            onClick={() => open()}
            className="px-7 py-4 rounded-full bg-gold text-night font-semibold hover:bg-cream transition-colors shadow-xl shadow-gold/20"
          >
            Get a Quote →
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="BAMIR Safaris" className="h-14 w-auto mb-3" />
            {/* ✅ NEW MOTTO ADDED */}
            <p className="font-display text-gold text-lg italic mb-3">Explore. Experience. Remember.</p>
            <p className="text-sm text-cream/70 leading-relaxed">
              Authentic safaris in Kenya, led by local experts. Explore Africa Beyond Expectations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold uppercase text-xs tracking-[0.25em] text-gold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/tours" className="hover:text-gold transition-colors">Tours</Link></li>
              <li><Link to="/explore" className="hover:text-gold transition-colors">Gallery & Blog</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase text-xs tracking-[0.25em] text-gold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> hello@bamirsafaris.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> 254 725 957 050</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase text-xs tracking-[0.25em] text-gold mb-4">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-gold hover:text-night hover:border-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-10 border-t border-white/10 text-xs text-cream/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BAMIR Safaris" className="h-9 w-auto" />
            <span>© {new Date().getFullYear()} BAMIR Safaris. All rights reserved.</span>
          </div>
          <span>Crafted with love in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}