import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, CreditCard, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pay")({
  head: () => ({
    meta: [{ title: "Make a Payment — BAMIR Safaris" }],
  }),
  component: Pay,
});

function Pay() {
  return (
    <section className="pt-32 pb-24 px-6 bg-cream min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-display font-bold mb-3">Secure Payment</h1>
            <p className="text-muted-foreground">Please enter your invoice details below to securely process your payment.</p>
          </div>

          <form className="bg-white p-8 md:p-10 rounded-3xl lux-shadow space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" required />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Invoice Number</label>
                <input type="text" placeholder="e.g. INV-2026-001" className="w-full px-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                  <input type="number" className="w-full pl-8 pr-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" required />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Special Instructions (Optional)</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-cream border-none focus:ring-2 focus:ring-gold outline-none" placeholder="Any notes for our finance team..."></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-gold text-night font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 shadow-lg shadow-amber-500/30">
              Proceed to Secure Gateway <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1 mt-4">
              <ShieldCheck className="w-4 h-4 text-green-600" /> Secured & Encrypted. We never store card details.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}