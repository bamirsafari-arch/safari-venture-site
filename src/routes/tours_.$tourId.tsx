import { createFileRoute, Link } from "@tanstack/react-router";
import { TOURS_DATA } from "@/data/tours";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Check, X, ArrowLeft, ArrowRight, Compass, ChevronDown } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import { useState } from "react";

export const Route = createFileRoute("/tours_/$tourId")({
  component: TourDetail,
});

function TourDetail() {
  const { tourId } = Route.useParams();
  const { open } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Find the tour based on the URL ID
  const tour = TOURS_DATA.find((t) => t.id === tourId);

  // Safe fallback if tour is not found
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F5EF] px-6 text-center">
        <h1 className="text-3xl font-display font-bold mb-4 text-[#142B2B]">Tour not found</h1>
        <p className="text-[#142B2B]/60 mb-8">The tour you are looking for doesn't exist or has been moved.</p>
        <Link to="/tours" className="px-6 py-3 rounded-full bg-[#C6A15B] text-[#142B2B] font-bold hover:scale-105 transition-transform">
          Return to all tours
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* 1. HERO */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="absolute inset-0 w-full h-full object-cover animate-kenburns" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=80";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#142B2B] via-[#142B2B]/50 to-black/30" />
        
        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16">
          <Link to="/tours" className="inline-flex items-center gap-2 text-white/70 hover:text-[#C6A15B] mb-6 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to all tours
          </Link>
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.4em] text-[#C6A15B] mb-4">{tour.location}</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              {tour.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. QUICK INFO BAR */}
      <div className="bg-[#142B2B] text-white py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Duration</div>
            <div className="font-semibold flex items-center justify-center md:justify-start gap-2"><Clock className="w-4 h-4 text-[#C6A15B]" /> {tour.duration}</div>
          </div>
          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Destination</div>
            <div className="font-semibold flex items-center justify-center md:justify-start gap-2"><MapPin className="w-4 h-4 text-[#C6A15B]" /> {tour.location}</div>
          </div>
          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Experience</div>
            <div className="font-semibold flex items-center justify-center md:justify-start gap-2"><Compass className="w-4 h-4 text-[#C6A15B]" /> {tour.category}</div>
          </div>
          <div>
            <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Starting Price</div>
            <div className="font-bold text-[#C6A15B]">{tour.price} pp</div>
          </div>
        </div>
      </div>

      {/* 3. CONTENT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* The Experience */}
            <Reveal>
              <h2 className="text-3xl font-display font-bold mb-6 text-[#142B2B]">The Experience</h2>
              <p className="text-lg text-[#C6A15B] font-medium italic mb-6 leading-relaxed">
                "{tour.overview}"
              </p>
            </Reveal>

            {/* Itinerary */}
            <Reveal>
              <h2 className="text-3xl font-display font-bold mb-8 text-[#142B2B]">Day-by-Day Itinerary</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-[#C6A15B]/30 before:to-transparent">
                {tour.itinerary?.map((day, idx) => (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#142B2B] text-[#C6A15B] font-display font-bold grid place-items-center z-10 shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#142B2B]/5 w-full">
                      <h3 className="text-xl font-bold font-display mb-2 text-[#142B2B]">{day.title}</h3>
                      <p className="text-[#142B2B]/70 leading-relaxed">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Included / Excluded */}
            <Reveal>
              <h2 className="text-3xl font-display font-bold mb-8 text-[#142B2B]">Inclusions & Exclusions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#142B2B]"><Check className="w-5 h-5 text-green-600" /> What's Included</h3>
                  <ul className="space-y-3">
                    {tour.included?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#142B2B]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#142B2B]"><X className="w-5 h-5 text-red-500" /> What's Not Included</h3>
                  <ul className="space-y-3">
                    {tour.excluded?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#142B2B]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            {tour.faqs && tour.faqs.length > 0 && (
              <Reveal>
                <h2 className="text-3xl font-display font-bold mb-6 text-[#142B2B]">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {tour.faqs.map((f, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-[#142B2B]/5 overflow-hidden">
                      <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#142B2B]"
                      >
                        {f.q}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`px-5 pb-5 text-[#142B2B]/70 text-sm ${openFaq === i ? "block" : "hidden"}`}>
                        {f.a}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl bg-white border border-[#142B2B]/10 p-8 shadow-xl">
              <div className="text-xs uppercase tracking-wider text-[#C6A15B] font-bold mb-2">Plan Your Journey</div>
              <h3 className="font-display text-2xl font-bold text-[#142B2B] mb-6">{tour.title}</h3>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between border-b border-[#142B2B]/10 pb-2">
                  <span className="text-[#142B2B]/60">Duration</span>
                  <span className="font-semibold text-[#142B2B]">{tour.duration}</span>
                </div>
                <div className="flex justify-between border-b border-[#142B2B]/10 pb-2">
                  <span className="text-[#142B2B]/60">Location</span>
                  <span className="font-semibold text-[#142B2B]">{tour.location}</span>
                </div>
                <div className="flex justify-between border-b border-[#142B2B]/10 pb-2">
                  <span className="text-[#142B2B]/60">Experience</span>
                  <span className="font-semibold text-[#142B2B]">{tour.category}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-[#142B2B]/60">Starting from</span>
                  <span className="font-bold text-[#C6A15B] text-xl">{tour.price} <span className="text-xs font-normal text-[#142B2B]/50">/ person</span></span>
                </div>
              </div>

              <button 
                onClick={() => open(tour.title)} 
                className="w-full py-4 rounded-xl bg-[#C6A15B] text-[#142B2B] font-bold text-lg hover:bg-[#142B2B] hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C6A15B]/20"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-[#142B2B]/50 mt-4">
                No obligation. Our travel specialists will help customize your experience.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}