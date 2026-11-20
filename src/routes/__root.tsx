import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteModalProvider } from "@/components/QuoteModal";
import { FloatingActions } from "@/components/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-black text-night">404</h1>
        <p className="mt-4 text-lg">This trail leads nowhere.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-olive text-cream font-bold brutal-border brutal-shadow">Back to Base Camp</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">Something went wrong on the trail</h1>
        <button onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-6 py-3 bg-olive text-cream font-bold brutal-border brutal-shadow">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bamir Safaris — Real Africa, Real Adventure" },
      { name: "description", content: "Authentic Kenyan safaris and adventure travel. Local guides, small groups, life-changing journeys." },
      { property: "og:title", content: "Bamir Safaris" },
      { property: "og:description", content: "Venture Beyond the Ordinary — authentic safaris in Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/0fc45b3c-5d25-401f-a4c4-c9cb1017bd93/bamir-logo.png" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/0fc45b3c-5d25-401f-a4c4-c9cb1017bd93/bamir-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <QuoteModalProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1"><Outlet /></main>
          <Footer />
        </div>
        <FloatingActions />
      </QuoteModalProvider>
    </QueryClientProvider>
  );
}
