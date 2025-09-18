import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Geschichte from "@/pages/Geschichte";
import Projekte from "@/pages/Projekte";
import VergangeneProj from "@/pages/VergangeneProj";
import Mitmachen from "@/pages/Mitmachen";
import Spenden from "@/pages/Spenden";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/shamsy">  {/* ← DIESE ZEILE HINZUGEFÜGT */}
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/geschichte" element={<Geschichte />} />
              <Route path="/projekte" element={<Projekte />} />
              <Route path="/vergangene-projekte" element={<VergangeneProj />} />
              <Route path="/mitmachen" element={<Mitmachen />} />
              <Route path="/spenden" element={<Spenden />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
