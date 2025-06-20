import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Directory from "./pages/Directory";
import NotFound from "./pages/NotFound";
import Scholarships from "./pages/Scholarships";
import Applications from "./pages/Applications";
import Programs from "./pages/Programs";
import Academics from "./pages/Academics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/resources/scholarships" element={<Scholarships />} />
              <Route path="/resources/applications" element={<Applications />} />
              <Route path="/resources/programs" element={<Programs />} />
              <Route path="/resources/academics" element={<Academics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
