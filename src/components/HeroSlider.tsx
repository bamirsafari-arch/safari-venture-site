import { useEffect, useState } from "react";

const SLIDES = [
  { url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2400&q=80", alt: "Lion at sunset" },
  { url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=2400&q=80", alt: "Elephant herd" },
  { url: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=2400&q=80", alt: "Giraffe at dusk" },
  { url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=2400&q=80", alt: "Zebras on plain" },
  { url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=2400&q=80", alt: "Cheetah" },
];

export function HeroSlider({ children }: { children?: React.ReactNode }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${idx === i ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={s.url}
            alt={s.alt}
            className={`w-full h-full object-cover ${idx === i ? "animate-kenburns" : ""
              }`}
          />
        </div>
      ))}

      {/* Gradient overlays for readability (no curves) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">{children}</div>
      </div>
    </section>
  );
}