import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompanyAbout from "./pages/about/CompanyAbout";
import UniversityAbout from "./pages/about/UniversityAbout";
import Admissions from "./pages/about/Admissions";
import Documents from "./pages/about/Documents";
import Projects from "./pages/activities/Projects";
import ProjectDetail from "./pages/activities/ProjectDetail";
import ScientificWorks from "./pages/activities/ScientificWorks";
import Partners from "./pages/Partners";
import Articles from "./pages/resources/Articles";
import ArticleDetail from "./pages/resources/ArticleDetail";
import Library from "./pages/resources/Library";
import ResourceDocuments from "./pages/resources/ResourceDocuments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About */}
          <Route path="/about/company" element={<CompanyAbout />} />
          <Route path="/about/university" element={<UniversityAbout />} />
          <Route path="/about/admissions" element={<Admissions />} />
          <Route path="/about/documents" element={<Documents />} />
          
          {/* Activities */}
          <Route path="/activities/projects" element={<Projects />} />
          <Route path="/activities/projects/:id" element={<ProjectDetail />} />
          <Route path="/activities/scientific-works" element={<ScientificWorks />} />
          
          {/* Partners */}
          <Route path="/partners" element={<Partners />} />
          
          {/* Resources */}
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/articles/:id" element={<ArticleDetail />} />
          <Route path="/resources/library" element={<Library />} />
          <Route path="/resources/documents" element={<ResourceDocuments />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;