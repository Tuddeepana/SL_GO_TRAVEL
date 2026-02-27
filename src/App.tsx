import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Index from "./pages/Index.tsx";
import YalaTaxi from "./pages/YalaTaxi.tsx";
import YalaSafari from "./pages/YalaSafari.tsx";
import AirportTransfer from "./pages/AirportTransfer.tsx";
import ColomboTaxi from "./pages/ColomboTaxi.tsx";
import EllaTaxi from "./pages/EllaTaxi.tsx";
import KandyTaxi from "./pages/KandyTaxi.tsx";
import GalleTaxi from "./pages/GalleTaxi.tsx";
import TissamaharamaTaxi from "./pages/TissamaharamaTaxi.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />

            {/* Safari & Wildlife */}
            <Route path="/yala-safari" element={<YalaSafari />} />
            <Route path="/yala-taxi" element={<YalaTaxi />} />

            {/* Airport Transfer */}
            <Route path="/airport-transfer-sri-lanka" element={<AirportTransfer />} />
            <Route path="/colombo-airport-taxi" element={<AirportTransfer />} />

            {/* Location-Based Taxi Services */}
            <Route path="/colombo-taxi" element={<ColomboTaxi />} />
            <Route path="/ella-taxi" element={<EllaTaxi />} />
            <Route path="/kandy-taxi" element={<KandyTaxi />} />
            <Route path="/galle-taxi" element={<GalleTaxi />} />
            <Route path="/tissamaharama-taxi" element={<TissamaharamaTaxi />} />

            {/* Alternate URL patterns for SEO */}
            <Route path="/taxi-colombo" element={<ColomboTaxi />} />
            <Route path="/taxi-ella" element={<EllaTaxi />} />
            <Route path="/taxi-kandy" element={<KandyTaxi />} />
            <Route path="/taxi-galle" element={<GalleTaxi />} />
            <Route path="/taxi-yala" element={<YalaTaxi />} />
            <Route path="/sri-lanka-taxi" element={<Index />} />
            <Route path="/sri-lanka-airport-transfer" element={<AirportTransfer />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
