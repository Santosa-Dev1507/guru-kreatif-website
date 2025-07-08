
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Profil from "./pages/Profil";
import Portofolio from "./pages/Portofolio";
import MateriKelas from "./pages/MateriKelas";
import KelasDetail from "./pages/KelasDetail";
import Kontak from "./pages/Kontak";
import SistemInformasiNilai from "./pages/SistemInformasiNilai";
import Auth from "./pages/Auth";
import ProfileSettings from "./pages/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/materi-kelas" element={<MateriKelas />} />
            <Route path="/kelas/:grade" element={<KelasDetail />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/profile-settings" 
              element={
                <ProtectedRoute>
                  <ProfileSettings />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/sistem-informasi-nilai" 
              element={
                <ProtectedRoute>
                  <SistemInformasiNilai />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
