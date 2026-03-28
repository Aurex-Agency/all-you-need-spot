import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import IVTherapy from "./pages/IVTherapy";
import TRTMen from "./pages/TRTMen";
import TRTWomen from "./pages/TRTWomen";
import ProgesteroneEstrogen from "./pages/ProgesteroneEstrogen";
import FitnessWeightLoss from "./pages/FitnessWeightLoss";
import PeptideTherapy from "./pages/PeptideTherapy";
import OptIn from "./pages/OptIn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ivtherapy" element={<IVTherapy />} />
          <Route path="/trtmen" element={<TRTMen />} />
          <Route path="/trtwomen" element={<TRTWomen />} />
          <Route path="/progesteroneestrogen" element={<ProgesteroneEstrogen />} />
          <Route path="/fitnessdietaryweightloss" element={<FitnessWeightLoss />} />
          <Route path="/peptidetherapy" element={<PeptideTherapy />} />
          <Route path="/optin" element={<OptIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
