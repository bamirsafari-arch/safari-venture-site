import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { HelpCircle, ChevronDown, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — BAMIR Safaris" },
      { name: "description", content: "Frequently asked questions about booking a safari with BAMIR Safaris." },
    ],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "What destinations do you offer?", a: "BAMIR Safaris specializes in unforgettable safari experiences across Kenya and East Africa, including the Maasai Mara, Amboseli, Lake Nakuru, Tsavo, Samburu, Ol Pejeta Conservancy, Diani Beach, Watamu Beach and selected destinations in Tanzania and Uganda." },
  { q: "How do I book a safari with BAMIR Safaris?", a: "You can book by contacting us through our website, email, phone, or WhatsApp. Once your itinerary is confirmed, we will send a booking confirmation and payment instructions." },
  { q: "Do you offer customized safaris?", a: "Yes. We create tailor-made itineraries based on your interests, budget, travel dates, and preferred accommodation style." },
  { q: "What is included in the safari price?", a: "Most packages include accommodation, meals as specified in the itinerary, transport in a safari vehicle, a professional driver-guide, park entry fees, game drives, and bottled drinking water. Specific inclusions will be listed in your quotation." },
  { q: "What is not included in the safari price?", a: "Unless stated otherwise: international flights, travel insurance, visa fees, personal expenses, tips and gratuities, optional activities, and alcoholic beverages." },
  { q: "How much deposit is required?", a: "A deposit is required to secure your booking. The balance must be paid before the safari begins according to our booking terms." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, credit/debit cards, mobile money payments, and other approved payment methods." },
  { q: "Is Kenya safe for safari travelers?", a: "Yes. Kenya remains one of Africa's leading safari destinations. BAMIR Safaris prioritizes guest safety and works with experienced guides and trusted partners throughout your journey." },
  { q: "What safari vehicles do you use?", a: "Professionally maintained safari vans and 4x4 Land Cruisers with pop-up roofs for excellent wildlife viewing and photography." },
  { q: "What should I pack for my safari?", a: "Lightweight clothing in neutral colors, comfortable walking shoes, hat and sunglasses, sunscreen, camera and binoculars, personal medications, and a light jacket for cool mornings and evenings." },
  { q: "What is the best time to visit Kenya?", a: "Kenya offers excellent wildlife viewing year-round. The Great Migration in Maasai Mara is typically best from July to October, while other parks provide fantastic experiences throughout the year." },
  { q: "Can children join your safaris?", a: "Absolutely. We offer family-friendly safari packages suitable for children and can recommend accommodations that cater to families." },
  { q: "Do I need travel insurance?", a: "Yes. We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and personal belongings." },
  { q: "Do I need a visa to visit Kenya?", a: "Visa requirements vary by nationality. We advise guests to check the latest entry requirements before travel, and our team can provide guidance." },
  { q: "Can dietary requirements be accommodated?", a: "Yes. Please inform us in advance about any dietary restrictions, allergies, or special meal requirements." },
  { q: "Will I see the Big Five?", a: "While wildlife sightings cannot be guaranteed, our experienced guides maximize your chances of seeing the Big Five: lion, leopard, elephant, buffalo, and rhino." },
  { q: "Do you offer honeymoon safaris?", a: "Yes. We offer romantic honeymoon packages featuring luxury accommodations, private game drives, and special experiences for couples." },
  { q: "What happens if I need to cancel my trip?", a: "Cancellations are handled according to our Cancellation and Refund Policy. Any applicable charges depend on how close the cancellation is to the travel date." },
  { q: "Do you offer airport transfers?", a: "Yes. Airport transfers can be included in your package or arranged separately upon request." },
  { q: "Why choose BAMIR Safaris?", a: "Personalized service, experienced local guides, tailor-made itineraries, reliable customer support, commitment to responsible tourism, and authentic East African experiences. Explore. Experience. Remember." },
  { q: "How can I contact BAMIR Safaris?", a: "Phone/WhatsApp: +254 729 570 50 · Email: info@bamirsafaris.com · Website: www.bamirsafaris.com. Still have questions? Contact our team anytime." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Help Center</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.95]">
              Frequently <span className="italic text-gold">Asked Questions.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white min-h-[60vh]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 20}>
                <div className="rounded-2xl bg-cream overflow-hidden soft-shadow hover:lux-shadow transition-shadow duration-300">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start gap-4 p-5 text-left group"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-full bg-gold/15 text-gold grid place-items-center group-hover:bg-gold group-hover:text-night transition-colors duration-300">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="flex-1 font-display font-semibold text-lg pt-1">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 mt-1.5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-gold" : ""}`} />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[4.5rem] text-muted-foreground leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* STILL HAVE QUESTIONS CTA WITH VENTURE BACKGROUND */}
          <Reveal delay={100}>
            <div className="mt-16 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80" 
                alt="Safari background" 
                className="absolute inset-0 w-full h-full object-cover animate-kenburns" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-night/95 via-night/80 to-night/50" />
              
              <div className="relative p-10 md:p-14 text-center text-cream">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Still have questions?</h3>
                <p className="text-cream/90 mb-8 max-w-lg mx-auto text-lg">
                  Contact our team anytime — we'll help plan your perfect safari adventure.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://wa.me/25472957050" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-night font-bold hover:scale-105 transition-transform shadow-lg shadow-amber-500/30">
                    <Phone className="w-4 h-4" /> Chat with us
                  </a>
                  <a href="mailto:info@bamirsafaris.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white hover:text-night transition-all">
                    <Mail className="w-4 h-4" /> Email us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}