import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan Your Safari — Contact & Quote | BAMIR Safaris" },
      { name: "description", content: "Tell us your travel details and we'll craft a personalized Kenyan safari itinerary within 24 hours." },
      { property: "og:title", content: "Plan Your Dream Safari" },
      { property: "og:description", content: "Personalized safari quotes within 24 hours." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Get a Quote · 24h response</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95]">
              Plan Your <span className="italic text-gold">Dream Safari.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Tell us your travel details — we'll create a personalized itinerary within 24 hours.</p>
          </div>
        </div>
        <svg className="absolute bottom-[-1px] left-0 w-full h-[70px] text-cream" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,80 C320,10 1120,10 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </section>

      <section className="py-24 px-6 bg-cream relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-float-slow" aria-hidden />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-10 relative">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 lux-shadow">
              <QuoteForm />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <aside className="space-y-6">
              <div className="rounded-3xl bg-night text-cream p-8 lux-shadow relative overflow-hidden">
                <div className="absolute -top-16 -right-10 w-44 h-44 rounded-full bg-gold/20 blur-3xl" aria-hidden />
                <div className="relative">
                  <h3 className="font-display font-bold text-2xl mb-5 text-gold">Talk to a human</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold shrink-0" /> hello@bamirsafaris.com</li>
                    <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold shrink-0" /> +254 725 957 050</li>
                    <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-gold shrink-0" /> Nairobi, Kenya</li>
                    <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold shrink-0" /> Mon–Sat · 8am – 8pm EAT</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-gold to-amber-500 text-night p-8 lux-shadow">
                <ShieldCheck className="w-10 h-10 mb-3" />
                <h3 className="font-display font-bold text-2xl mb-3">Why request a quote?</h3>
                <ul className="text-sm space-y-2">
                  <li>✦ Free, personalized itinerary</li>
                  <li>✦ Reply within 24 hours</li>
                  <li>✦ No obligation, no spam</li>
                  <li>✦ Local guides who know the terrain</li>
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
