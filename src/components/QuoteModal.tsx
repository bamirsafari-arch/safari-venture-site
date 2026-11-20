import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

type Ctx = { open: (dest?: string) => void; close: () => void };
const QuoteCtx = createContext<Ctx>({ open: () => {}, close: () => {} });

export function useQuoteModal() { return useContext(QuoteCtx); }

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [dest, setDest] = useState<string | undefined>();

  return (
    <QuoteCtx.Provider value={{ open: (d) => { setDest(d); setOpen(true); }, close: () => setOpen(false) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border-0 shadow-2xl p-8">
          <DialogHeader className="space-y-2">
            <div className="text-xs uppercase tracking-[0.3em] font-semibold text-gold">Plan your trip</div>
            <DialogTitle className="text-3xl font-display font-bold">Plan Your Dream Safari</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Tell us your details — we'll craft a personalized itinerary within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <QuoteForm defaultDestination={dest} />
          </div>
        </DialogContent>
      </Dialog>
    </QuoteCtx.Provider>
  );
}
