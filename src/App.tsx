
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IconDetail from "./pages/IconDetail";
import SearchResults from "./pages/SearchResults";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import UploadIcons from "./pages/UploadIcons";
import IconsExplorer from "./pages/IconsExplorer";
import Collections from "./pages/Collections";
import Pricing from "./pages/Pricing";
import Illustrations from "./pages/Illustrations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/icon/:id" element={<IconDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/icons/category/:categoryName" element={<CategoryPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/upload" element={<UploadIcons />} />
          <Route path="/icons" element={<IconsExplorer />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/illustrations" element={<Illustrations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
