import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { useQuoteModal } from "@/components/QuoteModal";
import { Users, Compass, Headphones, DollarSign, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAMIR Safaris — Explore Africa Beyond Expectations" },
      { name: "description", content: "Kenyan-owned luxury safari company. Maasai Mara, Amboseli, Tsavo & Diani Beach. Custom quotes within 24 hours." },
      { property: "og:title", content: "BAMIR Safaris" },
      { property: "og:description", content: "Explore Africa Beyond Expectations — authentic luxury safaris in Kenya." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: Home,
});

const PACKAGES = [
  { name: "Maasai Mara Classic", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80", location: "Maasai Mara · 5 days", price: "From $1,890" },
  { name: "Amboseli Elephant Expedition", img: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1400&q=80", location: "Amboseli · 4 days", price: "From $1,540" },
  { name: "Tsavo Red Earth Safari", img: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=1400&q=80", location: "Tsavo East & West · 6 days", price: "From $1,720" },
];

// ✅ Updated "Why Choose" – first 4 points from your new content
const WHY_CHOOSE = [
  { icon: Users, t: "Personalized Travel Experiences", d: "We design customized itineraries that match your interests, budget, and travel style." },
  { icon: Compass, t: "Local Expertise", d: "In-depth knowledge of Kenya and East Africa for authentic, off-the-beaten-path experiences." },
  { icon: Headphones, t: "Professional & Friendly Service", d: "Exceptional service from inquiry to the end of your journey." },
  { icon: DollarSign, t: "Competitive Pricing", d: "High-quality travel at fair, transparent prices with no hidden costs." },
];

const REVIEWS = [
  { quote: "The most transformative trip of our lives. BAMIR's guides treated us like family.", name: "Sarah & Tom", country: "🇺🇸 USA", stars: 5 },
  { quote: "Incredible attention to detail. We saw a leopard hunt on day one. Unforgettable.", name: "Marcus Klein", country: "🇩🇪 Germany", stars: 5 },
  { quote: "Worth every shilling. The lodges, the food, the wildlife — perfect.", name: "Amélie Laurent", country: "🇫🇷 France", stars: 5 },
];

function Home() {
  const { open } = useQuoteModal();
  return (
    <>
      <HeroSlider>
        <div className="text-xs uppercase tracking-[0.4em] font-medium text-gold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Kenyan-owned · Est. Nairobi
        </div>
        <h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          BAMIR <span className="italic text-gold">Safaris</span>
        </h1>
        {/* ✅ NEW MOTTO ADDED */}
        <p className="font-display text-gold text-2xl md:text-4xl italic mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Explore. Experience. Remember.
        </p>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Explore Africa Beyond Expectations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Link to="/tours" className="px-8 py-4 rounded-full bg-gold text-night font-semibold shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform">
            Explore Tours
          </Link>
          <button onClick={() => open()} className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white hover:text-night transition-all">
            Get a Quote
          </button>
        </div>
      </HeroSlider>

      {/* Featured packages */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-float-slow" aria-hidden />
        <div className="max-w-7xl mx-auto relative">
          <Reveal>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Signature Journeys</div>
                <h2 className="text-5xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
                  Featured <span className="italic">Packages</span>
                </h2>
              </div>
              <Link to="/tours" className="font-semibold flex items-center gap-2 hover:text-gold transition-colors">
                View all tours <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 120}>
                <article className="group relative h-120 rounded-3xl overflow-hidden soft-shadow hover:lux-shadow transition-all duration-500 hover:-translate-y-2">
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-gold text-night text-xs font-semibold shadow-lg">
                    {p.price}
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl glass-dark p-5 text-white">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1.5">{p.location}</div>
                    <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
                    <button onClick={() => open(p.name.split(" ")[0])} className="text-sm font-semibold inline-flex items-center gap-1.5 text-gold hover:text-white transition-colors">
                      View Package <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ UPDATED "Why Choose Us" – split screen with new content */}
      <section className="bg-cream py-28 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gold/20 blur-2xl" aria-hidden />
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=80"
                alt="Safari vehicle on the savannah"
                className="relative rounded-3xl w-full h-130 object-cover lux-shadow"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 soft-shadow flex items-center gap-3 max-w-55">
                <div className="w-12 h-12 rounded-full bg-gold/15 grid place-items-center">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold leading-none">4.9/5</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Traveler rating</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Why Choose BAMIR</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                Travel with <span className="italic">confidence.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg">
                We don't just plan trips — we create unforgettable experiences, lasting memories, and lifelong connections to Africa.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {WHY_CHOOSE.map(({ icon: Icon, t, d }) => (
                  <div key={t} className="rounded-2xl bg-white p-5 soft-shadow hover:lux-shadow hover:-translate-y-1 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold grid place-items-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-1">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Your story starts here</div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Ready for your next <span className="italic text-gold">adventure?</span>
            </h2>
            <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
              Let's craft a safari that matches your dreams. No pressure, no spam — just a beautifully tailored plan.
            </p>
            <button onClick={() => open()} className="px-9 py-4 rounded-full bg-gold text-night font-semibold text-lg shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform">
              Plan My Safari →
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6000); return () => clearInterval(t); }, []);
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">Travelers say</div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-14">
            Real stories. Real <span className="italic">journeys.</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="rounded-3xl bg-cream p-10 md:p-14 lux-shadow relative min-h-70 flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: REVIEWS[i].stars }).map((_, k) => <Star key={k} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
            <p className="text-2xl md:text-3xl font-display italic mb-7 leading-relaxed">"{REVIEWS[i].quote}"</p>
            <div className="font-semibold">{REVIEWS[i].name} <span className="text-muted-foreground font-normal">— {REVIEWS[i].country}</span></div>
          </div>
          <div className="flex justify-center gap-2 mt-7">
            {REVIEWS.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Review ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? "bg-gold w-10" : "bg-muted w-2"}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}