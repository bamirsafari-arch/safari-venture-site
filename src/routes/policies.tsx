import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies & Legal — BAMIR Safaris" },
      { name: "description", content: "Payment, cancellation, amendment and terms for BAMIR Safaris bookings, plus the Kenya eTA guide." },
    ],
  }),
  component: Policies,
});

const POLICIES = [
  {
    id: "payment",
    label: "Payment Policy",
    title: "Payment Policy",
    intro: "Effective Date: 24 June 2026 — This Payment Policy outlines the payment terms and conditions applicable to all bookings made with BAMIR Safaris. By confirming a booking, clients agree to the terms set out below.",
    sections: [
      { h: "1. Booking Deposit", p: ["To secure a safari, tour, excursion, or travel package, a deposit of 30% of the total booking cost is required unless otherwise agreed in writing.", "Bookings will only be considered confirmed after the required deposit has been received and acknowledged by BAMIR Safaris."] },
      { h: "2. Balance Payment", p: ["The remaining balance must be paid 30 days before the tour start date for international clients and 14 days before the tour start date for domestic clients.", "For bookings made within these periods, full payment is required at the time of booking. Failure to complete payment by the due date may result in cancellation of the booking."] },
      { h: "3. Accepted Payment Methods", p: ["Kenya clients: M-Pesa, Bank Transfer, Direct Bank Deposit.", "International clients: International Bank Transfer (Wire Transfer), Credit/Debit Card (where available), and other approved international payment platforms.", "Clients are responsible for any bank charges, transfer fees, or currency conversion costs imposed by their financial institution."] },
      { h: "4. Currency", p: ["Prices may be quoted in Kenyan Shillings (KES) or United States Dollars (USD).", "Where payment is made in a different currency, the prevailing exchange rate at the time of payment shall apply."] },
      { h: "5. Payment Confirmation", p: ["A payment is considered received only after funds have cleared into BAMIR Safaris' designated account.", "Clients will receive payment acknowledgment, booking confirmation, and a receipt upon request."] },
      { h: "6. Late Payments", p: ["If payment is not received by the specified deadline, BAMIR Safaris reserves the right to release reservations, cancel accommodation, transport and activity bookings, and revise prices based on supplier availability and seasonal changes."] },
      { h: "7. Additional Costs", p: ["The following are generally not included unless expressly stated: visa fees, travel insurance, personal expenses, laundry services, alcoholic beverages, optional activities, gratuities and tips, and international flights."] },
      { h: "8. Refunds", p: ["Refunds are governed by the BAMIR Safaris Cancellation and Refund Policy. Where a refund is approved, processing may take 7–30 business days depending on the payment method used. Bank charges and transaction fees may be deducted where applicable."] },
      { h: "9. Fraud Prevention", p: ["BAMIR Safaris reserves the right to verify payment information, request identification documents for security purposes, and refuse bookings suspected of fraud or unauthorized transactions."] },
      { h: "10. Changes to Prices", p: ["Quoted prices are subject to change before booking confirmation due to government taxes, park fee adjustments, supplier rate changes, fuel surcharges, and currency fluctuations.", "Once full payment has been received and booking confirmed, prices will generally remain fixed unless government-imposed charges change."] },
    ],
  },
  {
    id: "cancellation",
    label: "Cancellation & Refund",
    title: "Cancellation and Refund Policy",
    intro: "Effective Date: 24 June 2026 — This policy outlines the terms governing cancellations, amendments, and refunds for all tours, safaris, excursions, transfers, and travel services booked through BAMIR Safaris.",
    sections: [
      { h: "1. Client-Initiated Cancellations", p: ["All cancellation requests must be submitted in writing via email or WhatsApp. The following cancellation charges apply:", "More than 60 days: 90% refund · 31–60 days: 75% refund · 15–30 days: 50% refund · 8–14 days: 25% refund · 0–7 days: no refund.", "Any non-refundable deposits, park permits, airline tickets, visas, or third-party supplier charges will be deducted from the refund amount."] },
      { h: "2. No-Show Policy", p: ["If a client fails to arrive for the booked tour, safari, transfer, or activity without prior notice, the booking will be considered a 'No Show.' No refund will be provided and unused services cannot be refunded."] },
      { h: "3. Amendments and Changes", p: ["Clients may request changes to travel dates, number of travelers, accommodation category, and activities or itinerary.", "All changes are subject to availability and may attract additional charges. BAMIR Safaris cannot guarantee that requested amendments can be accommodated."] },
      { h: "4. Cancellation by BAMIR Safaris", p: ["BAMIR Safaris reserves the right to cancel a booking due to safety concerns, natural disasters, political unrest, government restrictions, supplier insolvency, or circumstances beyond our reasonable control.", "In such cases, clients may choose an alternative safari or tour of equivalent value (where available), or a refund of payments made for services not already utilized."] },
      { h: "5. Force Majeure", p: ["BAMIR Safaris shall not be liable for cancellations, delays, or changes caused by events beyond our control, including extreme weather, floods, drought, wildfires, pandemics, epidemics, civil unrest, terrorism, government actions, and transportation disruptions.", "Refunds under force majeure situations will depend on the recovery of funds from hotels, airlines, parks, and other service providers."] },
      { h: "6. Accommodation and Supplier Policies", p: ["Certain lodges, camps, airlines, and service providers may have stricter cancellation terms than those stated herein. Where supplier policies impose higher cancellation charges, such charges may apply to the booking."] },
      { h: "7. Refund Processing", p: ["Approved refunds will be processed using the original payment method where possible. M-Pesa: 3–7 business days · Bank Transfer: 7–21 business days · International Transfers: 14–30 business days.", "Transaction fees, bank charges, currency conversion fees, and non-recoverable supplier costs may be deducted."] },
      { h: "8. Travel Insurance", p: ["BAMIR Safaris strongly recommends that all travelers obtain comprehensive travel insurance covering trip cancellation, medical emergencies, personal accidents, lost baggage, and travel delays."] },
      { h: "9. Unused Services", p: ["No refunds will be issued for missed activities, early departures, unused accommodation nights, missed transfers, or voluntary itinerary changes after travel has commenced."] },
    ],
  },
  {
    id: "amendment",
    label: "Amendment Policy",
    title: "Amendment Policy",
    intro: "Effective Date: 24 June 2026 — This policy outlines the procedures and conditions for making changes to confirmed bookings with BAMIR Safaris.",
    sections: [
      { h: "1. Definition of an Amendment", p: ["An amendment refers to any change requested after a booking has been confirmed, including change of travel dates, itinerary, accommodation, number of travelers, pickup or drop-off location, addition or removal of activities, upgrade or downgrade of services, and changes to passenger information.", "All amendments are subject to availability and supplier approval."] },
      { h: "2. Amendment Requests", p: ["All amendment requests must be submitted in writing via email, WhatsApp, or official BAMIR Safaris communication channels, and should include your booking reference number, client name, and details of the requested changes.", "No amendments will be processed until written confirmation is received."] },
      { h: "3. Amendment Fees", p: ["More than 30 days before departure: no administration fee (supplier charges may apply).", "15–30 days: USD 25 or KES equivalent. 8–14 days: USD 50 or KES equivalent. Less than 7 days: subject to supplier policies and availability.", "Additional costs resulting from accommodation upgrades, transport changes, park fees, or supplier charges will be payable by the client."] },
      { h: "4. Date Changes", p: ["Clients may request a change of travel dates subject to availability of accommodation and services, seasonal rate differences, and supplier approval. Any increase in rates due to peak season pricing or revised supplier costs shall be payable by the client."] },
      { h: "5. Group Size Changes", p: ["If the number of travelers decreases after confirmation, prices may be recalculated based on the revised group size and single room supplements or minimum participant charges may apply.", "Additional travelers may be added subject to availability of accommodation and transport and payment of additional costs."] },
      { h: "6. Supplier Restrictions", p: ["Some hotels, lodges, camps, airlines, and activity providers impose strict amendment rules. Where supplier policies are more restrictive than this policy, the supplier's terms shall prevail."] },
      { h: "7. Changes by BAMIR Safaris", p: ["In rare circumstances, BAMIR Safaris may need to amend an itinerary due to weather conditions, road conditions, safety concerns, supplier operational requirements, or government regulations. Where possible, equivalent alternatives will be offered."] },
      { h: "8. Confirmation of Amendments", p: ["No amendment is considered confirmed until BAMIR Safaris has approved the requested change, any additional charges have been paid, and written confirmation has been issued to the client."] },
    ],
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    title: "Terms and Conditions",
    intro: "Effective Date: 24 June 2026 — These Terms and Conditions govern all bookings, tours, safaris, excursions, transfers, and travel-related services provided by BAMIR Safaris. By making a booking, you acknowledge that you have read, understood, and agreed to these terms.",
    sections: [
      { h: "1. Booking Confirmation", p: ["A booking is considered confirmed only when the required deposit or full payment has been received, BAMIR Safaris has issued a written booking confirmation, and the client has accepted the quoted itinerary and pricing."] },
      { h: "2. Prices and Payments", p: ["All prices are quoted in KES, USD, or other agreed currencies and are subject to availability at the time of booking. Deposits and final payments must be made according to the Payment Policy. Any bank charges, transfer fees, or currency conversion costs are the responsibility of the client."] },
      { h: "3. Passport, Visa and Travel Documents", p: ["Clients are responsible for obtaining valid passports, securing required visas, meeting immigration requirements, and ensuring compliance with health and vaccination regulations. BAMIR Safaris shall not be liable for denied entry, deportation, missed travel arrangements, or losses arising from incomplete travel documentation."] },
      { h: "4. Travel Insurance", p: ["BAMIR Safaris strongly recommends comprehensive travel insurance covering medical emergencies, personal accidents, trip cancellation, travel delays, personal liability, and loss or theft of personal belongings. Travel insurance remains the sole responsibility of the traveler."] },
      { h: "5. Health and Fitness", p: ["Clients are responsible for ensuring they are medically fit to participate in booked activities. Any medical conditions, disabilities, allergies, dietary requirements, or special needs should be disclosed before booking. BAMIR Safaris reserves the right to refuse participation where a traveler's condition may present a safety risk."] },
      { h: "6. Wildlife and Safari Activities", p: ["Safaris involve visits to natural environments where wildlife moves freely. Clients acknowledge that wildlife sightings cannot be guaranteed, wild animals can be unpredictable, participation involves inherent risks, and guests must follow instructions from guides, drivers, park authorities, and lodge staff at all times."] },
      { h: "7. Client Conduct", p: ["Clients are expected to respect local laws and customs, treat staff and fellow travelers respectfully, follow safety instructions, and avoid behavior that may endanger themselves or others. BAMIR Safaris reserves the right to remove any traveler whose conduct is disruptive, dangerous, abusive, or unlawful without refund."] },
      { h: "8. Liability Limitation", p: ["BAMIR Safaris acts as an intermediary between clients and independent service providers including hotels, lodges, airlines, transport companies, and activity operators. While reasonable care is taken in selecting suppliers, BAMIR Safaris shall not be liable for injury or illness, property loss or damage, travel delays, supplier failures, or acts or omissions of third parties."] },
      { h: "9. Force Majeure", p: ["BAMIR Safaris shall not be held liable for failure or delay in performing obligations due to natural disasters, severe weather, epidemics or pandemics, civil unrest, terrorism, government restrictions, transport disruptions, or strikes."] },
      { h: "10. Photography and Marketing", p: ["Unless otherwise requested in writing, BAMIR Safaris may use photographs or videos taken during tours for promotional and marketing purposes. Clients who do not wish to appear in promotional materials should notify BAMIR Safaris before the commencement of travel."] },
      { h: "11. Complaints & Governing Law", p: ["Any complaint should be reported immediately to the tour guide, driver, or BAMIR Safaris representative. Formal complaints should be submitted in writing within 14 days after completion of travel.", "These Terms and Conditions shall be governed by the laws of the Republic of Kenya, and any dispute shall be subject to the exclusive jurisdiction of Kenyan courts."] },
    ],
  },
  {
    id: "eta",
    label: "Kenya eTA Guide",
    title: "Kenya Electronic Travel Authorization (eTA)",
    intro: "Explore. Experience. Remember. — To visit Kenya, most international travelers must obtain an approved Electronic Travel Authorization (eTA) before departure.",
    sections: [
      { h: "Step 1: Prepare Your Documents", p: ["Valid passport (minimum 6 months validity), recent passport-size photograph, flight itinerary, accommodation details, and an email address and payment method."] },
      { h: "Step 2: Submit Your Application", p: ["Complete and submit your eTA application through the official Kenya eTA portal."] },
      { h: "Step 3: Pay the Required Fee", p: ["Make payment online as instructed during the application process."] },
      { h: "Step 4: Wait for Approval", p: ["Most applications are processed within a few days. Apply at least 7 days before travel to avoid delays."] },
      { h: "Step 5: Receive Your eTA", p: ["Once approved, you will receive your eTA by email. Download and save a copy."] },
      { h: "Step 6: Travel to Kenya", p: ["Present your passport and approved eTA when checking in for your flight and upon arrival in Kenya."] },
      { h: "How BAMIR Safaris Can Help", p: ["After confirming your safari booking, BAMIR Safaris can provide accommodation confirmations, a detailed safari itinerary, and supporting travel documents required for your eTA application."] },
    ],
  },
];

function Policies() {
  const [active, setActive] = useState(POLICIES[0].id);
  const current = POLICIES.find((p) => p.id === active)!;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Trust & Transparency</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.95]">
              Policies & <span className="italic text-gold">Legal.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-night/10">
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {POLICIES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  active === p.id
                    ? "bg-night text-white shadow-lg"
                    : "bg-cream text-night hover:bg-gold/20"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 bg-white min-h-[60vh]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-gold/15 text-gold grid place-items-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">{current.title}</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{current.intro}</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            {current.sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div className="rounded-2xl bg-cream p-6 md:p-8 soft-shadow hover:lux-shadow transition-shadow">
                  <h3 className="font-display font-bold text-xl mb-3 text-night">{s.h}</h3>
                  <div className="space-y-2">
                    {s.p.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP CTA WITH VENTURE BACKGROUND */}
      <section className="relative py-20 px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80" 
          alt="Beach background" 
          className="absolute inset-0 w-full h-full object-cover animate-kenburns" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/80 to-night/40" />
        
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Need help with a policy?</h3>
            <div className="flex items-center gap-3 justify-center md:justify-start text-cream/90">
              <MapPin className="w-5 h-5 text-gold" /> Nairobi & Nanyuki, Kenya
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start text-cream/90">
              <Phone className="w-5 h-5 text-gold" /> +254 725 957 050
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start text-cream/90">
              <Mail className="w-5 h-5 text-gold" /> info@bamirsafaris.com
            </div>
          </div>
          
          <a
            href="https://wa.me/254725957050"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-night font-bold shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all"
          >
            Chat on WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}