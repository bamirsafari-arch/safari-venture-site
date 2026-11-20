import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, ArrowRight, Compass, Waves, Building2, Search, Star, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { TOURS_DATA } from "@/data/tours";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Packages — BAMIR Safaris" },
      { name: "description", content: "Discover the magic of Africa with our curated safaris, beach escapes, and mountain adventures." },
    ],
  }),
  component: Tours,
});

const CATEGORIES = [
  { id: "All", label: "All Experiences", icon: Compass },
  { id: "Safari", label: "Wildlife Safaris", icon: Compass },
  { id: "Beach", label: "Beach Escapes", icon: Waves },
  { id: "City", label: "City & Staycations", icon: Building2 },
];

function Tours() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((t) => {
      const matchesCategory = filter === "All" || t.category === filter;
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            t.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const featuredTour = TOURS_DATA[0];

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=80" 
          alt="Safari" 
          className="absolute inset-0 w-full h-full object-cover animate-kenburns" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#142B2B]/90 via-[#142B2B]/40 to-black/30" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <div className="text-xs uppercase tracking-[0.4em] text-[#C6A15B] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Discover The Magic of Africa
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Extraordinary Journeys.<br />
            <span className="italic text-[#C6A15B]">Unforgettable Safaris.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            From the endless plains of the Maasai Mara to the turquoise shores of Diani, discover extraordinary experiences across Kenya, thoughtfully curated around you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a href="#tours-grid" className="px-8 py-4 rounded-full bg-[#C6A15B] text-[#142B2B] font-bold hover:scale-105 transition-transform w-full sm:w-auto">
              Explore Our Safaris →
            </a>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white hover:text-[#142B2B] transition-all w-full sm:w-auto backdrop-blur-sm">
              Plan Your Journey
            </Link>
          </div>
        </div>

        <a href="#tours-grid" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* 2. STICKY FILTER BAR */}
      <section className="sticky top-[72px] z-40 bg-[#F8F5EF]/90 backdrop-blur-xl border-b border-[#142B2B]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat.id 
                    ? "bg-[#142B2B] text-white shadow-lg" 
                    : "bg-white text-[#142B2B] hover:bg-[#C6A15B]/20"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#142B2B]/50" />
            <input 
              type="text" 
              placeholder="Where would you like to go?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-[#142B2B]/10 focus:outline-none focus:border-[#C6A15B] text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 3. WHY TRAVEL WITH US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#142B2B] mb-4">More Than Just a Safari.</h2>
            <p className="text-[#142B2B]/60 max-w-2xl mx-auto mb-12">Every journey tells a story. We make sure yours is extraordinary.</p>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Local Expertise", desc: "Discover Kenya with knowledgeable local guides." },
              { title: "Tailored Experiences", desc: "Every itinerary can be customized to your preferences." },
              { title: "Handpicked Stays", desc: "Enjoy carefully selected accommodation." },
              { title: "Personal Assistance", desc: "Receive support throughout your journey." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#142B2B]/5 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#142B2B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#142B2B]/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED EXPERIENCE */}
      {featuredTour && (
        <section className="py-20 px-6 bg-[#142B2B]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square group">
                <img src={featuredTour.image} alt={featuredTour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#C6A15B] text-[#142B2B] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Signature Experience
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="text-white">
                <div className="text-[#C6A15B] text-sm uppercase tracking-[0.2em] font-semibold mb-4">{featuredTour.location}</div>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">{featuredTour.title}</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{featuredTour.overview}</p>
                
                <div className="flex items-center gap-6 mb-8 text-sm font-medium border-y border-white/10 py-4">
                  <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#C6A15B]" /> {featuredTour.duration}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#C6A15B]" /> {featuredTour.category}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/50 text-sm mb-1">Starting from</div>
                    <div className="text-3xl font-bold text-[#C6A15B]">{featuredTour.price} <span className="text-sm font-normal text-white/50">/ person</span></div>
                  </div>
                  {/* Note the target="_blank" here */}
                  <Link 
                    to="/tours/$tourId" 
                    params={{ tourId: featuredTour.id }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-[#C6A15B] text-[#142B2B] font-bold hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    Discover This Experience <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 5. TOURS GRID */}
      <section id="tours-grid" className="py-24 px-6 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#142B2B] mb-4">Explore All Journeys</h2>
              <p className="text-[#142B2B]/60">Find the perfect escape tailored for you.</p>
            </div>
          </Reveal>

          {filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-display font-bold text-[#142B2B] mb-2">No tours found</h3>
              <p className="text-[#142B2B]/60">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, idx) => (
                <Reveal key={tour.id} delay={idx * 50}>
                  <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-[#142B2B]/5">
                    
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {tour.isBestseller && <span className="px-3 py-1 bg-[#C6A15B] text-[#142B2B] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">⭐ Bestseller</span>}
                        {tour.isLuxury && <span className="px-3 py-1 bg-[#142B2B] text-[#C6A15B] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg border border-[#C6A15B]/30">✨ Luxury</span>}
                        {tour.isFamily && <span className="px-3 py-1 bg-green-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">🌿 Family Friendly</span>}
                      </div>
                      
                      <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#142B2B] text-sm font-bold shadow-lg">
                        {tour.price}
                      </div>

                      <div className="absolute inset-x-6 bottom-6 text-white">
                        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2 text-[#C6A15B]">
                          <MapPin className="w-3.5 h-3.5" /> {tour.location}
                        </div>
                        <h3 className="font-display font-bold text-2xl leading-tight">{tour.title}</h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs font-semibold text-[#142B2B]/60 mb-4 pb-4 border-b border-[#142B2B]/10">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C6A15B]" /> {tour.duration}</span>
                        <span className="flex items-center gap-1.5"><Compass className="w-4 h-4 text-[#C6A15B]" /> {tour.category}</span>
                      </div>
                      <p className="text-sm text-[#142B2B]/70 leading-relaxed mb-6 flex-1 line-clamp-3">
                        {tour.overview}
                      </p>
                      
                      {/* Note the target="_blank" here */}
                      <Link 
                        to="/tours/$tourId" 
                        params={{ tourId: tour.id }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-[#F8F5EF] text-[#142B2B] font-bold text-sm hover:bg-[#C6A15B] transition-colors flex items-center justify-center gap-2 group/btn"
                      >
                        Explore Experience <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}