import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  ShieldCheck, Award, Briefcase, Handshake, Leaf, Heart,
  Users, Compass, Headphones, DollarSign, Shield, Calendar,
  Globe, Sparkles, Check, ArrowRight, MapPin, Phone, Mail,
  HelpCircle
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — BAMIR Safaris" },
      { name: "description", content: "BAMIR Safaris is a Kenyan-owned travel company crafting unforgettable safari, beach, cultural and corporate travel experiences across Kenya and East Africa." },
      { property: "og:title", content: "About BAMIR Safaris" },
      { property: "og:description", content: "Your Gateway to East Africa's Finest Adventures." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: ShieldCheck, t: "Integrity", d: "We conduct business honestly and transparently." },
  { icon: Award, t: "Excellence", d: "We strive to exceed customer expectations." },
  { icon: Briefcase, t: "Professionalism", d: "We maintain the highest standards in service delivery." },
  { icon: Handshake, t: "Reliability", d: "We deliver on our promises." },
  { icon: Leaf, t: "Sustainability", d: "We promote responsible and environmentally conscious tourism." },
  { icon: Heart, t: "Customer Focus", d: "Our clients are at the center of everything we do." },
];

const WHY_CHOOSE = [
  { icon: Users, t: "Personalized Travel Experiences", d: "Every traveler is unique. We design customized itineraries that match your interests, budget, and travel style." },
  { icon: Compass, t: "Local Expertise", d: "In-depth knowledge of Kenya and East Africa, ensuring authentic experiences and hidden gems beyond typical tourist routes." },
  { icon: Headphones, t: "Professional and Friendly Service", d: "Exceptional customer service from the moment you inquire until the end of your journey." },
  { icon: DollarSign, t: "Competitive Pricing", d: "High-quality travel experiences at fair and transparent prices, with no hidden costs." },
  { icon: Shield, t: "Safety and Reliability", d: "Trusted partners, experienced guides, and reliable transport providers — your safety comes first." },
  { icon: Calendar, t: "Flexible Tour Options", d: "Luxury safari, family holiday, honeymoon, group tour, corporate retreat, or budget adventure — we have a package for you." },
  { icon: Globe, t: "Authentic African Experiences", d: "Wildlife, culture, landscapes, history, and people — meaningful and unforgettable memories." },
  { icon: Leaf, t: "Sustainable Tourism", d: "Responsible practices that benefit local communities and protect wildlife and natural environments." },
  { icon: Award, t: "Passion for Excellence", d: "Founded with a passion for showcasing the beauty of Africa and delivering journeys that exceed expectations." },
  { icon: Sparkles, t: "Our Promise", d: "We don't just plan trips — we create unforgettable experiences, lasting memories, and lifelong connections to Africa." },
];

const CHECKLIST = [
  "Local expertise and destination knowledge",
  "Personalized travel planning",
  "Competitive and transparent pricing",
  "Professional and experienced guides",
  "Reliable transportation and trusted partners",
  "Commitment to customer satisfaction and safety",
];

function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[75vh] min-h-130 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
              About Us
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              About BAMIR <span className="italic text-gold">Safaris</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Your Gateway to East Africa's Finest Adventures.
            </p>
          </div>
        </div>
      </section>

      {/* MOTTO BANNER */}
      <section className="bg-night py-7">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="font-display text-gold text-xl md:text-2xl italic tracking-wide">
            Explore. Experience. Remember.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl animate-float-slow" aria-hidden />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80"
              alt="Safari vehicle in the Mara"
              className="rounded-3xl w-full h-130 object-cover lux-shadow"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Our Story</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                A Kenyan-owned <span className="italic">travel company.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
                BAMIR Safaris is a Kenyan-owned travel and tour company dedicated to creating unforgettable travel experiences across Kenya and East Africa. We specialize in safari adventures, wildlife expeditions, cultural experiences, beach holidays, corporate travel, airport transfers, and tailor-made tour packages designed to meet the unique needs of every traveler.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for exploration and exceptional customer service, BAMIR Safaris aims to showcase the beauty, diversity, and rich heritage of Africa while delivering professional, reliable, and affordable travel solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl bg-white p-10 md:p-12 lux-shadow h-full hover:-translate-y-1 transition-transform duration-500">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Our Mission</div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
                Personalized, <span className="italic">responsible</span> journeys.
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                To provide exceptional travel experiences through personalized service, professional guidance, and responsible tourism that creates lasting memories for our clients while supporting local communities and conserving natural heritage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-night text-cream p-10 md:p-12 lux-shadow h-full relative overflow-hidden hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/20 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Our Vision</div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight text-gold">
                  East Africa's most <span className="italic">trusted</span> name.
                </h3>
                <p className="leading-relaxed text-cream/85">
                  To become one of East Africa's most trusted and respected travel companies, recognized for excellence, innovation, customer satisfaction, and sustainable tourism practices.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">What we stand for</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold">
                Our Core <span className="italic">Values</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: I, t, d }, idx) => (
              <Reveal key={t} delay={idx * 80}>
                <div className="group rounded-3xl bg-cream p-7 soft-shadow hover:lux-shadow hover:-translate-y-1.5 transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-gold to-amber-500 text-night grid place-items-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Why Choose BAMIR</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold">
                Why Choose <span className="italic">BAMIR Safaris</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CHOOSE.map(({ icon: I, t, d }, idx) => (
              <Reveal key={t} delay={idx * 60}>
                <div className="group rounded-3xl bg-white p-7 soft-shadow hover:lux-shadow hover:-translate-y-1 transition-all h-full flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-linear-to-br from-gold to-amber-500 text-night grid place-items-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                    <I className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <blockquote className="relative rounded-3xl bg-night text-cream p-10 md:p-14 lux-shadow overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold/20 blur-3xl" aria-hidden />
              <div className="relative text-center">
                <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-4">Our Promise</div>
                <p className="font-display text-2xl md:text-3xl italic leading-relaxed">
                  "At BAMIR Safaris, we don't just plan trips—we create unforgettable experiences, lasting memories, and lifelong connections to Africa."
                </p>
                <div className="mt-6 text-sm text-cream/60">— The BAMIR Safaris Team</div>
              </div>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* LINK TO FAQ SECTION */}
      <section className="py-20 px-6 bg-cream text-center border-y border-night/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <HelpCircle className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              From packing lists to payment terms, we've answered the most common questions about traveling with BAMIR Safaris.
            </p>
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-night text-white font-semibold hover:bg-gold hover:text-night hover:scale-105 transition-all shadow-xl"
            >
              Visit our FAQ Center <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Why travelers trust us</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold">
                The BAMIR <span className="italic">Difference.</span>
              </h2>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-4">
            {CHECKLIST.map((w, i) => (
              <Reveal key={w} delay={i * 60}>
                <li className="flex items-start gap-4 rounded-2xl bg-cream p-5 soft-shadow hover:lux-shadow hover:-translate-y-0.5 transition-all">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-linear-to-br from-gold to-amber-500 text-night grid place-items-center shadow-md shadow-amber-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium pt-1.5">{w}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA WITH VENTURE BACKGROUND */}
      <section className="relative py-24 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=80"
          alt="Safari Adventure"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/80 to-night/40" />
        
        <div className="relative max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3 leading-tight text-white">
              Explore Africa <span className="italic text-gold">Beyond Expectations</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              Carefully crafted adventures that inspire, educate, and connect.
            </p>
          </div>
          <Link
            to="/tours"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-night font-bold shadow-2xl shadow-amber-500/30 hover:scale-105 hover:bg-white transition-all"
          >
            Explore Our Tours <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}