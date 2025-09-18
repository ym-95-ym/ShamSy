import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Geschichte from "@/pages/Geschichte";
import Projekte from "@/pages/Projekte";
import VergangeneProj from "@/pages/VergangeneProj";
import Mitmachen from "@/pages/Mitmachen";
import Spenden from "@/pages/Spenden";
import NotFound from "@/pages/NotFound";

// English pages
import HomeEn from "@/pages/en/Home";
import ProjectsEn from "@/pages/en/Projects";

// Arabic pages  
import HomeAr from "@/pages/ar/Home";
import ProjectsAr from "@/pages/ar/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* German routes (default) */}
              <Route path="/" element={<Home />} />
              <Route path="/geschichte" element={<Geschichte />} />
              <Route path="/projekte" element={<Projekte />} />
              <Route path="/vergangene-projekte" element={<VergangeneProj />} />
              <Route path="/mitmachen" element={<Mitmachen />} />
              <Route path="/spenden" element={<Spenden />} />

              {/* English routes */}
              <Route path="/en" element={<HomeEn />} />
              <Route path="/en/" element={<HomeEn />} />
              <Route path="/en/geschichte" element={<Geschichte />} />
              <Route path="/en/projects" element={<ProjectsEn />} />
              <Route path="/en/past-projects" element={<VergangeneProj />} />
              <Route path="/en/get-involved" element={<Mitmachen />} />
              <Route path="/en/donate" element={<Spenden />} />

              {/* Arabic routes */}
              <Route path="/ar" element={<HomeAr />} />
              <Route path="/ar/" element={<HomeAr />} />
              <Route path="/ar/geschichte" element={<Geschichte />} />
              <Route path="/ar/projects" element={<ProjectsAr />} />
              <Route path="/ar/past-projects" element={<VergangeneProj />} />
              <Route path="/ar/get-involved" element={<Mitmachen />} />
              <Route path="/ar/donate" element={<Spenden />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
