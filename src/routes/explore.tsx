import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";
import { X, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────
// 1. IMPORTS
// ─────────────────────────────────────────────────────────────────────
import bamir10 from "@/assets/bamir 10.jpeg"; // NEW HERO IMAGE
import maasaiMara from "@/assets/maasai mara .jpeg";
import amboseli from "@/assets/amboseli .jpeg";
import diani from "@/assets/diani 2.jpeg";
import treeTops from "@/assets/treetop lodge .jpeg";
import tsavoEast from "@/assets/tsavo east.jpeg";
import tsavoWest from "@/assets/tsavo west.jpeg";
import lakeNakuru from "@/assets/lake nakuru lodge .jpeg";
import maraSerena from "@/assets/mara serena .jpeg";
import emara from "@/assets/emara ole sereni.jpeg";
import radisson from "@/assets/radisson blue .jpeg";
import maraParan from "@/assets/mara paran camp.jpeg";
import sarovaWhite from "@/assets/sarova white sand beach .jpeg";
import enashipai from "@/assets/enashipai resort .jpeg";
import hemingways from "@/assets/hemingways hotel .jpeg";
import maraSweet from "@/assets/mara sweet acacia .jpeg";
import olkupelia from "@/assets/olkuperia mara .jpeg";
import maraNtulele from "@/assets/mara ntulete .jpeg";
import oldarpoi from "@/assets/oldarpoi mara .jpeg";
import surana from "@/assets/surana buffalo .jpeg";
import soroi from "@/assets/soroi larsen .jpeg";
import elewana from "@/assets/elewa sand .jpeg";
import lengishu from "@/assets/lengishu borana .jpeg";
import olpejeta from "@/assets/olpejeta .jpeg";
import meru from "@/assets/meru .jpeg";
import borana from "@/assets/borana .jpeg";
import lewa from "@/assets/lewa .jpeg";
import elewanaLoisaba from "@/assets/elewana loisaba 1.jpeg";
import kalepo from "@/assets/kalepo camp 1.jpeg";
import lakeNaivasha from "@/assets/lake naivasha .jpeg";
import lakeNaivasha2 from "@/assets/lake naivasha 2.jpeg";
import lakeNaivasha3 from "@/assets/lake naivasha 3.jpeg";
import napaMara from "@/assets/napa mara .jpeg";
import poriniRhino from "@/assets/poroni rhino camp .jpeg";
import muhari from "@/assets/mahari mzuri .jpeg";
import watamu from "@/assets/watamu.jpeg";
import watamuTree from "@/assets/watamu tree house .jpeg";
import saltslick from "@/assets/saltslick safari .jpeg";
import fairmont from "@/assets/fairmont mara .jpeg";
import maasaiMaraLodge from "@/assets/maasai mara lodge .jpeg";
import arkLodge from "@/assets/ark lodge .jpeg";
import enkorok from "@/assets/enkorok safari.jpeg";
import agamara from "@/assets/agama mara .jpeg";
import governors from "@/assets/governors camp .jpeg";
import elewanaTortillas from "@/assets/elewana tortillas .jpeg";
import voi from "@/assets/voi safari .jpeg";
import kilaguni from "@/assets/kilaguni serena .jpeg";
import sarovaLion from "@/assets/sarova lion hill game .jpeg";
import manorAmboseli from "@/assets/manor amboseli .jpeg";
import nyati from "@/assets/nyati safari camp.jpeg";
import olTukai from "@/assets/ol tukai lodge .jpeg";
import sungura from "@/assets/sungura safari.jpeg";
import ashnil from "@/assets/ashnil mara .jpeg";
import majilis from "@/assets/majilis resort.jpeg";
import tamarind from "@/assets/tamarind tree hotel.jpeg";
import alama from "@/assets/alama camp.jpeg";
import villaRosa from "@/assets/villa rosa.jpeg";
import chaleIsland from "@/assets/chale island.jpeg";
import chaleIsland2 from "@/assets/chale island2.jpeg";
import bamir1 from "@/assets/bamir 1.jpeg";
import bamir2 from "@/assets/bamir 2.jpeg";
import bamir3 from "@/assets/bamir 3.jpeg";
import bamir4 from "@/assets/bamir 4.jpeg";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Gallery & Safari Blog | BAMIR Safaris" },
      { name: "description", content: "Kenya through our eyes — a curated gallery of wildlife, landscapes and beach moments, plus expert safari travel guides." },
      { property: "og:title", content: "Explore Kenya Through Our Eyes" },
      { property: "og:description", content: "Gallery + travel tips from BAMIR's local guides." },
      { property: "og:image", content: bamir10 },
    ],
  }),
  component: Explore,
});

type Cat = "All" | "Wildlife" | "Landscapes" | "Beach" | "Clients";

// ─────────────────────────────────────────────────────────────────────
// 2. GALLERY DATA
// ─────────────────────────────────────────────────────────────────────
const GALLERY: { url: string; cat: Exclude<Cat, "All">; caption: string }[] = [
  { url: maasaiMara, cat: "Landscapes", caption: "Acacia trees in the Maasai Mara" },
  { url: amboseli, cat: "Landscapes", caption: "Mount Kilimanjaro backdrop, Amboseli" },
  { url: diani, cat: "Beach", caption: "Palm trees and turquoise waters, Diani" },
  { url: treeTops, cat: "Wildlife", caption: "Elephants at the Aberdare waterhole" },
  { url: tsavoEast, cat: "Landscapes", caption: "Red earth of Tsavo East" },
  { url: tsavoWest, cat: "Landscapes", caption: "Lush springs of Tsavo West" },
  { url: lakeNakuru, cat: "Wildlife", caption: "Flamingos at Lake Nakuru" },
  { url: maraSerena, cat: "Landscapes", caption: "Luxury lodge views in the Mara" },
  { url: emara, cat: "Clients", caption: "City luxury at Emara Ole Sereni" },
  { url: radisson, cat: "Clients", caption: "Modern comfort at Radisson Blu" },
  { url: maraParan, cat: "Wildlife", caption: "Safari tents nestled in the wild" },
  { url: sarovaWhite, cat: "Beach", caption: "White sands of Sarova" },
  { url: enashipai, cat: "Clients", caption: "Resort luxury at Enashipai" },
  { url: hemingways, cat: "Clients", caption: "Boutique elegance at Hemingways" },
  { url: maraSweet, cat: "Wildlife", caption: "Classic safari tents, Mara" },
  { url: olkupelia, cat: "Wildlife", caption: "Luxury safari camp, Olkupelia" },
  { url: maraNtulele, cat: "Wildlife", caption: "Exclusive conservancy views" },
  { url: oldarpoi, cat: "Wildlife", caption: "Community-owned camp, Oldarpoi" },
  { url: surana, cat: "Wildlife", caption: "Riverfront luxury at Surana" },
  { url: soroi, cat: "Wildlife", caption: "Eco-friendly Soroi Larsen" },
  { url: elewana, cat: "Wildlife", caption: "Ultra-luxury at Elewana Sand River" },
  { url: lengishu, cat: "Landscapes", caption: "Laikipia landscapes from Lengishu" },
  { url: olpejeta, cat: "Wildlife", caption: "Rhino sanctuary at Ol Pejeta" },
  { url: meru, cat: "Landscapes", caption: "Riverine forests of Meru" },
  { url: borana, cat: "Landscapes", caption: "Conservation at Borana" },
  { url: lewa, cat: "Wildlife", caption: "Black rhino sanctuary at Lewa" },
  { url: elewanaLoisaba, cat: "Wildlife", caption: "Star beds at Elewana Loisaba" },
  { url: kalepo, cat: "Landscapes", caption: "Community conservancy at Kalepo" },
  { url: lakeNaivasha, cat: "Landscapes", caption: "Lakeside views at Naivasha" },
  { url: lakeNaivasha2, cat: "Landscapes", caption: "Boat safaris on Lake Naivasha" },
  { url: lakeNaivasha3, cat: "Landscapes", caption: "Luxury retreat at Lake Naivasha" },
  { url: napaMara, cat: "Wildlife", caption: "Elegant tents at Napa Mara" },
  { url: poriniRhino, cat: "Wildlife", caption: "Eco-camp at Porini Rhino" },
  { url: muhari, cat: "Wildlife", caption: "Luxury at Mahari Mzuri" },
  { url: watamu, cat: "Beach", caption: "Coastal beauty at Watamu" },
  { url: watamuTree, cat: "Beach", caption: "Treehouse views in Watamu" },
  { url: saltslick, cat: "Wildlife", caption: "Elephant waterhole at Salt Lick" },
  { url: fairmont, cat: "Wildlife", caption: "Riverside luxury at Fairmont Mara" },
  { url: maasaiMaraLodge, cat: "Wildlife", caption: "Classic lodge experience, Mara" },
  { url: arkLodge, cat: "Wildlife", caption: "The Ark Lodge, Aberdare" },
  { url: enkorok, cat: "Wildlife", caption: "Authentic safari at Enkorok" },
  { url: agamara, cat: "Wildlife", caption: "Eco-friendly Agama Mara" },
  { url: governors, cat: "Wildlife", caption: "Historic Governors Camp" },
  { url: elewanaTortillas, cat: "Wildlife", caption: "Luxury at Elewana Tortillas" },
  { url: voi, cat: "Wildlife", caption: "Waterhole views at Voi Safari Lodge" },
  { url: kilaguni, cat: "Wildlife", caption: "Kilimanjaro views at Kilaguni" },
  { url: sarovaLion, cat: "Wildlife", caption: "Flamingo views at Sarova Lion Hill" },
  { url: manorAmboseli, cat: "Wildlife", caption: "Elephant herds at Manor Amboseli" },
  { url: nyati, cat: "Wildlife", caption: "Classic safari at Nyati Camp" },
  { url: olTukai, cat: "Wildlife", caption: "Luxury lodge at Ol Tukai" },
  { url: sungura, cat: "Wildlife", caption: "Intimate camp at Sungura" },
  { url: ashnil, cat: "Wildlife", caption: "Riverfront luxury at Ashnil Mara" },
  { url: majilis, cat: "Clients", caption: "Boutique hotel at Majilis Resort" },
  { url: tamarind, cat: "Clients", caption: "Modern amenities at Tamarind Tree" },
  { url: alama, cat: "Wildlife", caption: "Eco-camp at Alama" },
  { url: villaRosa, cat: "Clients", caption: "City luxury at Villa Rosa Kempinski" },
  { url: chaleIsland, cat: "Beach", caption: "Private island at Chale" },
  { url: chaleIsland2, cat: "Beach", caption: "Exclusive beaches at Chale" },
  { url: bamir1, cat: "Clients", caption: "BAMIR Signature Safari 1" },
  { url: bamir2, cat: "Clients", caption: "BAMIR Signature Safari 2" },
  { url: bamir3, cat: "Clients", caption: "BAMIR Signature Safari 3" },
  { url: bamir4, cat: "Clients", caption: "BAMIR Signature Safari 4" },
];

// ─────────────────────────────────────────────────────────────────────
// 3. BLOG DATA
// ─────────────────────────────────────────────────────────────────────
const POSTS = [
  { title: "Best Time to Visit Maasai Mara", img: maasaiMara, excerpt: "July through October delivers the Great Migration — but here's why September is the sweet spot most travelers miss." },
  { title: "How Much Does a Kenya Safari Cost?", img: amboseli, excerpt: "A no-fluff breakdown of budget, mid-range and luxury safari pricing in 2026 — including hidden costs nobody mentions." },
  { title: "What to Pack for Safari", img: treeTops, excerpt: "The exact 7kg packing list our guides recommend. Spoiler: leave the bright colors and brand-new boots at home." },
];

function Explore() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  
  const filtered = useMemo(() => cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat), [cat]);

  return (
    <>
      {/* HERO SECTION - Reduced to 60vh */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={bamir10}
          alt="Explore Kenya"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700">Field notes</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Explore Kenya <span className="italic text-gold">Through Our Eyes.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {(["All", "Wildlife", "Landscapes", "Beach", "Clients"] as Cat[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${cat === c ? "bg-night text-white shadow-lg" : "bg-cream hover:bg-gold/20"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((g, i) => (
              <button
                key={g.url}
                onClick={() => setLightbox(i)}
                className="block w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden soft-shadow hover:lux-shadow transition-all text-left group"
              >
                <div className="relative">
                  <img src={g.url} alt={g.caption} className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.caption}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-3">From the journal</div>
              <h2 className="text-5xl md:text-6xl font-display font-bold">Travel Tips & <span className="italic">Safari Guides</span></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {POSTS.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 120}>
                <article className="rounded-3xl bg-white overflow-hidden soft-shadow hover:lux-shadow transition-all hover:-translate-y-2 group h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-2xl mb-3 leading-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{p.excerpt}</p>
                    <a href="#" className="font-semibold inline-flex items-center gap-1.5 text-gold hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Reduced padding and text size */}
      <section className="relative py-16 px-6 overflow-hidden">
        <img 
          src={elewana} 
          alt="Safari lodge background" 
          className="absolute inset-0 w-full h-full object-cover animate-kenburns" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-night/95 via-night/80 to-night/50" />
        
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <Reveal>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-3">Ready to Experience Kenya?</h3>
            <p className="text-cream/90 mb-6 max-w-2xl mx-auto text-base">
              Our travel experts are ready to help you craft the perfect itinerary. Reach out today for a personalized quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@bamirsafaris.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-night font-bold hover:scale-105 transition-transform shadow-xl shadow-amber-500/30 text-sm">
                Email Us <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/25472957050" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white hover:text-night transition-all text-sm">
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-5xl bg-night rounded-3xl border-0 p-0 overflow-hidden">
          {lightbox !== null && (
            <div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 text-night flex items-center justify-center hover:bg-white"
              >
                <X />
              </button>
              <img
                src={filtered[lightbox].url}
                alt={filtered[lightbox].caption}
                className="w-full max-h-[80vh] object-contain bg-night"
              />
              <div className="p-5 text-cream font-medium text-center">{filtered[lightbox].caption}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}