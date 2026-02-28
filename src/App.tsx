import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Assets from "./pages/Assets";
import Sellers from "./pages/Sellers";
import Buyers from "./pages/Buyers";
import CasesPage from "./pages/CasesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import FAQPage from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
