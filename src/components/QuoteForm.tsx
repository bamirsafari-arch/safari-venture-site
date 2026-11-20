import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, Check } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  arrival: z.string().min(1, "Arrival date required"),
  departure: z.string().min(1, "Departure date required"),
  travelers: z.coerce.number().min(1).max(50),
  nationality: z.string().min(1, "Select nationality"),
  destination: z.string().min(1, "Select destination"),
  budget: z.string().min(1),
  accommodation: z.string().min(1),
  activities: z.array(z.string()).min(1, "Pick at least one activity"),
  message: z.string().max(1000).optional(),
});

const ACTIVITIES = ["Game Drives", "Beach Relaxation", "Cultural Tours", "Hiking"];
const DESTINATIONS = ["Maasai Mara", "Amboseli", "Tsavo", "Diani Beach", "Custom"];
const NATIONALITIES = ["United States", "United Kingdom", "Germany", "France", "Canada", "Australia", "Kenya", "Other"];

const WHATSAPP = "+254700000000";

const inputCls = "rounded-xl border-border bg-white/80 focus-visible:ring-gold";

export function QuoteForm({ defaultDestination, mode = "multi" }: { defaultDestination?: string; mode?: "multi" | "single" }) {
  const [step, setStep] = useState(1);
  const [formMode, setFormMode] = useState<"multi" | "single">(mode);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState({
    fullName: "", email: "", phone: "",
    arrival: "", departure: "", travelers: 2, nationality: "",
    destination: defaultDestination || "", budget: "Mid-range", accommodation: "Lodge",
    activities: ["Game Drives"] as string[], message: "",
  });

  const update = (k: string, v: any) => setData((d) => ({ ...d, [k]: v }));

  const validateStep = (s: number) => {
    const stepFields: Record<number, (keyof typeof data)[]> = {
      1: ["arrival", "departure", "travelers"],
      2: ["destination", "budget"],
      3: ["accommodation", "activities"],
      4: ["fullName", "email", "phone", "nationality"],
    };
    const fields = stepFields[s] || [];
    const result = schema.safeParse(data);
    const errs: Record<string, string> = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (fields.includes(key as any)) errs[key] = issue.message;
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async () => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setLoading(true);
    console.log("[BAMIR Quote Request]", result.data);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    const wa = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi BAMIR! I just submitted a quote request (${data.destination}). My name is ${data.fullName}.`)}`;
    return (
      <div className="text-center py-12">
        <div className="inline-flex w-20 h-20 items-center justify-center rounded-full bg-gradient-to-br from-olive to-emerald-700 text-white mb-5 shadow-xl shadow-olive/30">
          <Check className="w-9 h-9" />
        </div>
        <h3 className="text-3xl font-display font-bold mb-3">Thank you, {data.fullName.split(" ")[0]}!</h3>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Our team will respond within 24 hours with a personalized itinerary just for you.</p>
        <a href={wa} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white font-semibold shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5" />
          Faster response on WhatsApp
        </a>
      </div>
    );
  }

  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-3 text-muted-foreground">
        <span>Step {step} of 4</span>
        <span className="text-night">{["Travel Dates", "Destination & Budget", "Activities", "Contact"][step - 1]}</span>
      </div>
      <Progress value={(step / 4) * 100} className="h-1.5 rounded-full" />
    </div>
  );

  const Err = ({ k }: { k: string }) => errors[k] ? <p className="text-xs text-destructive mt-1">{errors[k]}</p> : null;

  const Step1 = (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="mb-1.5 block">Arrival Date *</Label>
          <Input className={inputCls} type="date" value={data.arrival} onChange={(e) => update("arrival", e.target.value)} />
          <Err k="arrival" />
        </div>
        <div>
          <Label className="mb-1.5 block">Departure Date *</Label>
          <Input className={inputCls} type="date" value={data.departure} onChange={(e) => update("departure", e.target.value)} />
          <Err k="departure" />
        </div>
      </div>
      <div>
        <Label className="mb-1.5 block">Number of Travelers *</Label>
        <Input className={inputCls} type="number" min={1} max={50} value={data.travelers} onChange={(e) => update("travelers", e.target.value)} />
        <Err k="travelers" />
      </div>
    </div>
  );

  const Step2 = (
    <div className="space-y-5">
      <div>
        <Label className="mb-1.5 block">Destination *</Label>
        <Select value={data.destination} onValueChange={(v) => update("destination", v)}>
          <SelectTrigger className="rounded-xl"><SelectValue placeholder="Choose destination" /></SelectTrigger>
          <SelectContent>{DESTINATIONS.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
        </Select>
        <Err k="destination" />
      </div>
      <div>
        <Label className="mb-2 block">Budget Range *</Label>
        <RadioGroup value={data.budget} onValueChange={(v) => update("budget", v)} className="grid grid-cols-3 gap-2">
          {["Budget", "Mid-range", "Luxury"].map((b) => (
            <label key={b} className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border cursor-pointer transition-all ${data.budget === b ? "bg-night text-white border-night shadow-md" : "bg-white hover:border-gold"}`}>
              <RadioGroupItem value={b} className="sr-only" />
              <span className="font-semibold text-sm">{b}</span>
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );

  const Step3 = (
    <div className="space-y-5">
      <div>
        <Label className="mb-1.5 block">Accommodation Type *</Label>
        <Select value={data.accommodation} onValueChange={(v) => update("accommodation", v)}>
          <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Lodge">Lodge</SelectItem>
            <SelectItem value="Camp">Tented Camp</SelectItem>
            <SelectItem value="Hotel">Hotel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="mb-2 block">Activities * (select all that interest you)</Label>
        <div className="grid grid-cols-2 gap-2">
          {ACTIVITIES.map((a) => {
            const checked = data.activities.includes(a);
            return (
              <label key={a} className={`flex items-center gap-2 px-3 py-3 rounded-xl border cursor-pointer transition-all ${checked ? "bg-gold/15 border-gold" : "bg-white hover:border-gold/60"}`}>
                <Checkbox checked={checked} onCheckedChange={(c) => {
                  update("activities", c ? [...data.activities, a] : data.activities.filter((x) => x !== a));
                }} />
                <span className="text-sm font-medium">{a}</span>
              </label>
            );
          })}
        </div>
        <Err k="activities" />
      </div>
      <div>
        <Label className="mb-1.5 block">Extra Message</Label>
        <Textarea className="rounded-xl" rows={3} value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="Anything else we should know?" />
      </div>
    </div>
  );

  const Step4 = (
    <div className="space-y-5">
      <div>
        <Label className="mb-1.5 block">Full Name *</Label>
        <Input className={inputCls} value={data.fullName} onChange={(e) => update("fullName", e.target.value)} />
        <Err k="fullName" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="mb-1.5 block">Email *</Label>
          <Input className={inputCls} type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
          <Err k="email" />
        </div>
        <div>
          <Label className="mb-1.5 block">Phone / WhatsApp *</Label>
          <Input className={inputCls} value={data.phone} onChange={(e) => update("phone", e.target.value)} />
          <Err k="phone" />
        </div>
      </div>
      <div>
        <Label className="mb-1.5 block">Nationality *</Label>
        <Select value={data.nationality} onValueChange={(v) => update("nationality", v)}>
          <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select country" /></SelectTrigger>
          <SelectContent>{NATIONALITIES.map((n) => <SelectItem key={n} value={n}>{n}</SelectItem>)}</SelectContent>
        </Select>
        <Err k="nationality" />
      </div>
    </div>
  );

  const submitBtn = (
    <Button onClick={submit} disabled={loading} className="w-full rounded-full bg-gradient-to-r from-gold to-amber-500 text-night hover:opacity-90 font-semibold text-base py-6 shadow-xl shadow-amber-500/30">
      {loading ? "Sending..." : "Get My Custom Quote"}
    </Button>
  );

  if (formMode === "single") {
    return (
      <div className="space-y-7">
        {[["Travel Dates", Step1], ["Destination & Budget", Step2], ["Activities", Step3], ["Contact Info", Step4]].map(([t, content]) => (
          <div key={t as string} className="space-y-4">
            <h4 className="font-display font-bold text-xl">{t as string}</h4>
            {content as React.ReactNode}
          </div>
        ))}
        {submitBtn}
        <button type="button" onClick={() => setFormMode("multi")} className="text-xs underline text-muted-foreground w-full text-center">
          Switch to step-by-step form
        </button>
      </div>
    );
  }

  return (
    <div>
      <StepIndicator />
      <div className="min-h-[300px]">
        {step === 1 && Step1}
        {step === 2 && Step2}
        {step === 3 && Step3}
        {step === 4 && Step4}
      </div>
      <div className="flex gap-3 mt-8">
        {step > 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-full">Back</Button>
        )}
        {step < 4 ? (
          <Button onClick={() => validateStep(step) && setStep(step + 1)} className="flex-1 rounded-full bg-night text-white hover:bg-night/90 font-semibold py-6">
            Continue
          </Button>
        ) : (
          submitBtn
        )}
      </div>
      <button type="button" onClick={() => setFormMode("single")} className="text-xs underline text-muted-foreground w-full text-center mt-5">
        Switch to single-page form
      </button>
    </div>
  );
}
